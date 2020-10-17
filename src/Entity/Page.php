<?php

namespace App\Entity;

use App\Repository\PageRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PageRepository::class)
 */
class Page
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToMany(targetEntity=Element::class, inversedBy="pages")
     */
    private $Elements;

    /**
     * @ORM\ManyToOne(targetEntity=Theme::class, inversedBy="pages")
     * @ORM\JoinColumn(nullable=false)
     */
    private $theme;

    public function __construct()
    {
        $this->Elements = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return Collection|Element[]
     */
    public function getElements(): Collection
    {
        return $this->Elements;
    }

    public function addElement(Element $element): self
    {
        if (!$this->Elements->contains($element)) {
            $this->Elements[] = $element;
        }

        return $this;
    }

    public function removeElement(Element $element): self
    {
        if ($this->Elements->contains($element)) {
            $this->Elements->removeElement($element);
        }

        return $this;
    }

    public function getTheme(): ?Theme
    {
        return $this->theme;
    }

    public function setTheme(?Theme $theme): self
    {
        $this->theme = $theme;

        return $this;
    }
}
