<?php

namespace App\Entity;

use App\Repository\PageRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
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

    public function jsonSerialize()
    {
        return [
            'id' => $this->id
        ];
    }
}
