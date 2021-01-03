<?php

namespace App\Entity;

use App\Repository\PageRepository;
use Doctrine\ORM\Mapping as ORM;
use JsonSerializable;

/**
 * @ORM\Entity(repositoryClass=PageRepository::class)
 */
class Page implements JsonSerializable
{
    const DEFAULT_FONT_SIZE = 12; //px

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Theme::class, inversedBy="pages")
     * @ORM\JoinColumn(nullable=false)
     */
    private $theme;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $pageHtml;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $pageCss;

    /**
     * @ORM\Column(type="string", nullable=false)
     */
    private $name;

    /**
     * @ORM\Column(type="string", nullable=false)
     */
    private $urlHash;

    /**
     * @ORM\ManyToOne(targetEntity=Navbar::class, inversedBy="page")
     */
    private $navbar;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $backgroundColor;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $textColor;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $textSize;

    public function __construct()
    {
    }

    public function getId(): ?int
    {
        return $this->id;
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

    /**
     * @return mixed
     */
    public function getPageHtml()
    {
        $html = '';
        /** @var Navbar $navbar */
        $navbar = $this->getTheme()->getNavbar();
        if ($navbar !== null) {
            $html = $navbar->getHtml();
        }
        return $html;
    }

    /**
     * @param mixed $pageHtml
     */
    public function setPageHtml($pageHtml): self
    {
        $this->pageHtml = $pageHtml;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getPageCss()
    {
        $style = 'body {';
        $style .= 'margin: 0;';
        if ($this->backgroundColor !== null) {
            $style .= 'background-color: ' . $this->backgroundColor . ';';
        }
        if ($this->textColor !== null) {
            $style .= 'color: ' . $this->textColor . ';';
        }
        $fontSize = $this->textSize ?? self::DEFAULT_FONT_SIZE;
        $style .= 'font-size:' . $fontSize . 'px;';
        $style .= 'overflow:scroll;';
        $style .= '}';
        /** @var Navbar $navbar */
        $navbar = $this->getTheme()->getNavbar();
        if ($navbar !== null) {
            $style .= $navbar->getStyle();
            $style .= $this->getStyleForNavItems($navbar->getSpacingOption());
        }
        return $style;
    }

    /**
     * @param int $spacingOption
     * @return string
     */
    private function getStyleForNavItems(int $spacingOption): string
    {
        $style = '.' . NavbarItem::CLASS_NAME . '{';
        if ($this->navItemsNeedMargin($spacingOption)) {
            $style .= 'margin:0 2rem;';
        }
        $style .= 'text-decoration:none;';
        $style .= 'color:' . $this->getTheme()->getNavbar()->getTextColor();
        $style .= '}';
        return $style;
    }

    /**
     * @param int $option
     * @return bool
     */
    private function navItemsNeedMargin(int $option): bool
    {
        if (array_key_exists($option, Navbar::AVAILABLE_SPACING_OPTIONS)) {
            $option = Navbar::SPACING_FLEX_START;
        }
        return $option !== Navbar::SPACING_SPACE_AROUND;
    }

    /**
     * @param mixed $pageCss
     */
    public function setPageCss($pageCss): self
    {
        $this->pageCss = $pageCss;
        return $this;
    }

    /**
     * @return string
     */
    public function getUrlHash(): string
    {
        return $this->urlHash;
    }

    /**
     * @param string $urlHash
     */
    public function setUrlHash(string $urlHash): self
    {
        $this->urlHash = $urlHash;
        return $this;
    }

    /**
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param string $name
     * @return Page
     */
    public function setName(string $name): self
    {
        $this->name = $name;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getTextSize()
    {
        return $this->textSize;
    }

    /**
     * @param mixed $textSize
     * @return Page
     */
    public function setTextSize($textSize): self
    {
        $this->textSize = $textSize;
        return $this;
    }

    public function getBody(): string
    {
        $style = '';
        $html = '';
        if (!empty($this->getPageHtml())) {
            $html = $this->getPageHtml();
        }
        if (!empty($this->getPageCss())) {
            $css = $this->getPageCss();
            $style = "<style>$css</style>";
        }
        return !empty($html) && !empty($style) ? "<body>$style$html</body>" : '';
    }

    public function getNavbar(): ?Navbar
    {
        return $this->navbar;
    }

    public function setNavbar(?Navbar $navbar): self
    {
        $this->navbar = $navbar;

        return $this;
    }

    /**
     * @return string
     */
    public function getBackgroundColor(): string
    {
        return $this->backgroundColor;
    }

    /**
     * @param string $backgroundColor
     * @return Page
     */
    public function setBackgroundColor(string $backgroundColor): self
    {
        $this->backgroundColor = $backgroundColor;
        return $this;
    }

    /**
     * @return string
     */
    public function getTextColor(): string
    {
        return $this->textColor;
    }

    /**
     * @param string $textColor
     * @return $this
     */
    public function setTextColor(string $textColor): self
    {
        $this->textColor = $textColor;
        return $this;
    }

    public function jsonSerialize(): array
    {
        return [
            'id' => $this->id,
            'urlHash' => $this->urlHash,
            'name' => $this->name
        ];
    }

    public function jsonSerializeStructureForStore(): array
    {
        $navbar = $this->getTheme()->getNavbar();
        $navbarStructure = $navbar !== null ?
            $navbar->jsonSerialize() : [];
        $navItems = [];
        return [
            'body' => [
                'backgroundColor' => $this->backgroundColor,
                'color' => $this->textColor,
                'overflow' => 'scroll',
                'fontSize' => $this->textSize ?? self::DEFAULT_FONT_SIZE
            ],
            'navbar' => $navbarStructure,
            'navItems' => $navItems
        ];
    }
}
