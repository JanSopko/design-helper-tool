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
        $navbar = $this->getNavbar();
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
//        return $this->pageCss;
        $style = 'body {';
        $style .= 'margin: 0;';
        if ($this->backgroundColor !== null) {
            $style .= 'background-color: ' . $this->backgroundColor . ';';
        }
        if ($this->textColor !== null) {
            $style .= 'color: ' . $this->textColor . ';';
        }
        $style .= '}';
        $navbar = $this->getNavbar();
        if ($navbar !== null) {
            $style .= $navbar->getStyle();
        }
        return $style;
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
        $navbarStructure = $this->navbar !== null ?
            $this->getNavbar()->jsonSerialize() : [];
        return [
            'body' => [
                'backgroundColor' => $this->backgroundColor,
                'color' => $this->textColor
            ],
            'navbar' => $navbarStructure
        ];
    }
}
