<?php

namespace App\Entity;

use App\Repository\ElementRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ElementRepository::class)
 */
class Element
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $elementHtml;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $elementCss;

    /**
     * @ORM\ManyToMany(targetEntity=Element::class, inversedBy="superElements")
     */
    private $subElements;

    /**
     * @ORM\ManyToMany(targetEntity=Element::class, mappedBy="subElements")
     */
    private $superElements;

    /**
     * @ORM\ManyToMany(targetEntity=Page::class, mappedBy="Elements")
     */
    private $pages;

    public function __construct()
    {
        $this->subElements = new ArrayCollection();
        $this->superElements = new ArrayCollection();
        $this->pages = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getElementHtml(): ?string
    {
        return $this->elementHtml;
    }

    public function setElementHtml(?string $elementHtml): self
    {
        $this->elementHtml = $elementHtml;

        return $this;
    }

    public function getElementCss(): ?string
    {
        return $this->elementCss;
    }

    public function setElementCss(?string $elementCss): self
    {
        $this->elementCss = $elementCss;

        return $this;
    }

    /**
     * @return Collection|self[]
     */
    public function getSubElements(): Collection
    {
        return $this->subElements;
    }

    public function addSubElement(self $subElement): self
    {
        if (!$this->subElements->contains($subElement)) {
            $this->subElements[] = $subElement;
        }

        return $this;
    }

    public function removeSubElement(self $subElement): self
    {
        if ($this->subElements->contains($subElement)) {
            $this->subElements->removeElement($subElement);
        }

        return $this;
    }

    /**
     * @return Collection|self[]
     */
    public function getSuperElements(): Collection
    {
        return $this->superElements;
    }

    public function addSuperElement(self $superElement): self
    {
        if (!$this->superElements->contains($superElement)) {
            $this->superElements[] = $superElement;
            $superElement->addSubElement($this);
        }

        return $this;
    }

    public function removeSuperElement(self $superElement): self
    {
        if ($this->superElements->contains($superElement)) {
            $this->superElements->removeElement($superElement);
            $superElement->removeSubElement($this);
        }

        return $this;
    }

    /**
     * @return Collection|Page[]
     */
    public function getPages(): Collection
    {
        return $this->pages;
    }

    public function addPage(Page $page): self
    {
        if (!$this->pages->contains($page)) {
            $this->pages[] = $page;
            $page->addElement($this);
        }

        return $this;
    }

    public function removePage(Page $page): self
    {
        if ($this->pages->contains($page)) {
            $this->pages->removeElement($page);
            $page->removeElement($this);
        }

        return $this;
    }
}
