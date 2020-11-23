<?php

namespace App\Entity;

use App\Repository\NavbarRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use JsonSerializable;

/**
 * @ORM\Entity(repositoryClass=NavbarRepository::class)
 */
class Navbar implements JsonSerializable
{
    public const HTML_TAG = 'nav';


    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\OneToMany(targetEntity=NavbarItem::class, mappedBy="navbar", orphanRemoval=true)
     */
    private $items;

    /**
     * @ORM\OneToMany(targetEntity=Page::class, mappedBy="navbar")
     */
    private $pages;

    /**
     * @ORM\Column(type="string", length=7)
     */
    private $bgColor;

    /**
     * @ORM\Column(type="string", length=7)
     */
    private $textColor;

    /**
     * @ORM\Column(type="integer")
     */
    private $height;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $font;

    public function __construct()
    {
        $this->items = new ArrayCollection();
        $this->pages = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return Collection|NavbarItem[]
     */
    public function getItems(): Collection
    {
        return $this->items;
    }

    public function addItem(NavbarItem $item): self
    {
        if (!$this->items->contains($item)) {
            $this->items[] = $item;
            $item->setNavbar($this);
        }

        return $this;
    }

    public function removeItem(NavbarItem $item): self
    {
        if ($this->items->removeElement($item)) {
            // set the owning side to null (unless already changed)
            if ($item->getNavbar() === $this) {
                $item->setNavbar(null);
            }
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
            $page->setNavbar($this);
        }

        return $this;
    }

    public function removePage(Page $page): self
    {
        if ($this->pages->removeElement($page)) {
            // set the owning side to null (unless already changed)
            if ($page->getNavbar() === $this) {
                $page->setNavbar(null);
            }
        }

        return $this;
    }

    public function getBgColor(): ?string
    {
        return $this->bgColor;
    }

    public function setBgColor(string $bgColor): self
    {
        $this->bgColor = $bgColor;

        return $this;
    }

    public function getTextColor(): ?string
    {
        return $this->textColor;
    }

    public function setTextColor(string $textColor): self
    {
        $this->textColor = $textColor;

        return $this;
    }

    public function getHeight(): ?int
    {
        return $this->height;
    }

    public function setHeight(int $height): self
    {
        $this->height = $height;

        return $this;
    }

    public function getFont(): ?string
    {
        return $this->font;
    }

    public function setFont(?string $font): self
    {
        $this->font = $font;

        return $this;
    }

    public function getStyle(): string
    {
        $style = self::HTML_TAG . ' {';
        $style .= 'background-color: ' . $this->bgColor . ';';
        $style .= 'color: ' . $this->textColor . ';';
        $style .= 'height: ' . $this->height . 'rem;';
        if (!empty($this->font)) {
            $style .= 'font-family: ' . $this->font . ';';
        }
        $style .= '}';
        if (empty($this->font) && empty($this->textColor) && empty($this->bgColor) && empty($this->height)) {
            $style = '';
        }
        return $style;
    }

    public function getHtml(): string
    {
        //@todo
        $html = '<' . self::HTML_TAG . '>';
        $html .= '</' . self::HTML_TAG . '>';
        return $html;
    }

    public function updateSelfFromPayload(array $payload): self
    {
        if (isset($payload['backgroundColor'])) {
            $this->setBgColor($payload['backgroundColor']);
        }
        if (isset($payload['color'])) {
            $this->setTextColor($payload['color']);
        }
        if (isset($payload['height'])) {
            $this->setHeight($payload['height']);
        }

        return $this;
    }

    public function jsonSerialize(): array
    {
        $items = [];
        foreach ($this->getItems() as $item) {
            $items[] = $item->jsonSerialize();
        }
        $response = [
            'backgroundColor' => $this->bgColor,
            'color' => $this->textColor,
            'height' => $this->height,
            'fontFamily' => $this->font,
            'items' => $items
        ];

        return $response;
    }
}
