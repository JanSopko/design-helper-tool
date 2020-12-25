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

    public const SPACING_FLEX_START = 1;
    public const SPACING_FLEX_END = 2;
    public const SPACING_SPACE_AROUND = 3;

    public const AVAILABLE_SPACING_OPTIONS = [
        self::SPACING_FLEX_START => 'flex-start',
        self::SPACING_FLEX_END => 'flex-end',
        self::SPACING_SPACE_AROUND => 'space-around'
    ];

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
     * @ORM\OneToOne(targetEntity=Theme::class, mappedBy="navbar")
     */
    private $theme;

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

    /**
     * @ORM\Column(type="integer", nullable=false)
     */
    private $spacingOption;

    public function __construct()
    {
        $this->items = new ArrayCollection();
        $this->pages = new ArrayCollection();
        $this->spacingOption = self::SPACING_FLEX_START;
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

    /**
     * @return mixed
     */
    public function getTheme()
    {
        return $this->theme;
    }

    /**
     * @param mixed $theme
     * @return Navbar
     */
    public function setTheme($theme): self
    {
        $this->theme = $theme;
        return $this;
    }

    /**
     * @return int
     */
    public function getSpacingOption(): int
    {
        return $this->spacingOption;
    }

    /**
     * @param int $spacingOption
     */
    public function setSpacingOption(int $spacingOption): void
    {
        $this->spacingOption = $spacingOption;
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
        $style .= $this->getSpacingStyle();
        $style .= '}';
        if (empty($this->font) && empty($this->textColor) && empty($this->bgColor) && empty($this->height)) {
            $style = '';
        }
        return $style;
    }

    /**
     * @return string
     */
    private function getSpacingStyle(): string
    {
        $option = array_key_exists($this->spacingOption, self::AVAILABLE_SPACING_OPTIONS) ? $this->spacingOption : 1;
        $spacingStyle = 'display:flex;';
        $spacingStyle .= 'justify-content:' . self::AVAILABLE_SPACING_OPTIONS[$option] . ';';
        $spacingStyle .= 'align-items:center;';
        return $spacingStyle;
    }

    public function getHtml(): string
    {
        //@todo
        $html = '<' . self::HTML_TAG . '>';
        foreach ($this->getItems() as $item) {
            $html .= "<a href=" . $item->getUrl() . " class=" . NavbarItem::CLASS_NAME .">" . $item->getText() . "</a>";
        }
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
            'items' => $items,
            'alignItems' => 'center',
            'spacingOption' => $this->spacingOption
        ];

        return $response;
    }
}
