<?php

namespace App\Entity;

use App\Repository\ThemeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use JsonSerializable;

/**
 * @ORM\Entity(repositoryClass=ThemeRepository::class)
 */
class Theme implements JsonSerializable
{
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
     * @ORM\Column(type="text", nullable=true)
     */
    private $description;

    /**
     * @ORM\Column(type="integer", nullable=false)
     */
    private $privacyLevel;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $imgPath;

    /**
     * @ORM\Column(type="string", nullable=false)
     */
    private $name;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="themes", cascade={"persist"})
     * @ORM\JoinColumn(nullable=false)
     */
    private User $user;

    public function __construct()
    {
        $this->pages = new ArrayCollection();
    }

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

    public function getNonEmptyPages(): Collection
    {
        $nonEmptyPages = $this->getPages();
        foreach ($nonEmptyPages as $page) {
            if ($page->getBody() === "") {
                $nonEmptyPages->removeElement($page);
            }
        }
        return $nonEmptyPages;
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
     * @return User
     */
    public function getUser(): User
    {
        return $this->user;
    }

    /**
     * @param User $user
     */
    public function setUser(User $user): self
    {
        $this->user = $user;
        return $this;
    }

    /**
     * @return string
     */
    public function getImgPath(): string
    {
        return $this->imgPath;
    }

    /**
     * @param mixed $imgPath
     */
    public function setImgPath($imgPath): self
    {
        $this->imgPath = $imgPath;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param mixed $name
     */
    public function setName($name): self
    {
        $this->name = $name;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * @param mixed $description
     */
    public function setDescription($description): self
    {
        $this->description = $description;
        return $this;
    }

    /**
     * @return array
     */
    public function jsonSerialize(): array
    {
        $pageIds = [];
        foreach ($this->pages as $page) {
            /** @var Page $page */
            $pageIds[] = $page->getId();
        }
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'user_name' => $this->user->getUsername(),
            'user_id' => $this->user->getId(),
            'img_path' => $this->imgPath,
            'page_ids' => $pageIds,
            'pages_count' => count($this->pages)
        ];
    }
}
