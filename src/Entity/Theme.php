<?php

namespace App\Entity;

use App\Repository\ThemeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ThemeRepository::class)
 */
class Theme
{
    public const PRIVATE = 1;
    public const COMMUNITY_VISIBLE = 2;
    public const GLOBALLY_VISIBLE = 3;

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\OneToMany(targetEntity=Page::class, mappedBy="theme", orphanRemoval=true)
     */
    private $pages;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $themeCss;

    /**
     * @ORM\Column(type="integer", nullable=false)
     */
    private $privacyLevel;

    public function __construct()
    {
        $this->pages = new ArrayCollection();
    }

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="themes")
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    public function getId(): ?int
    {
        return $this->id;
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
            $page->setTheme($this);
        }

        return $this;
    }

    public function removePage(Page $page): self
    {
        if ($this->pages->contains($page)) {
            $this->pages->removeElement($page);
            // set the owning side to null (unless already changed)
            if ($page->getTheme() === $this) {
                $page->setTheme(null);
            }
        }

        return $this;
    }

    public function getThemeCss(): ?string
    {
        return $this->themeCss;
    }

    public function setThemeCss(?string $themeCss): self
    {
        $this->themeCss = $themeCss;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getPrivacyLevel()
    {
        return $this->privacyLevel;
    }

    /**
     * @param mixed $privacyLevel
     */
    public function setPrivacyLevel($privacyLevel): self
    {
        $this->privacyLevel = $privacyLevel;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getUser()
    {
        return $this->user;
    }

    /**
     * @param mixed $user
     */
    public function setUser($user): self
    {
        $this->user = $user;
        return $this;
    }
}
