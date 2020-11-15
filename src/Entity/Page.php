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
        return $this->pageHtml;
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
        return $this->pageCss;
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
        if (!empty($this->pageHtml)) {
            $html = $this->getPageHtml();
        }
        if (!empty($this->pageCss)) {
            $css = $this->getPageCss();
            $style = "<style>$css</style>";
        }
        return !empty($html . $style) ? "<body>$style$html</body>" : '';
    }

    public function jsonSerialize()
    {
        return [
            'id' => $this->id,
            'urlHash' => $this->urlHash,
            'name' => $this->name
        ];
    }
}
