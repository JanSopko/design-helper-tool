<?php

namespace App\Entity;

use App\Repository\NavbarItemRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=NavbarItemRepository::class)
 */
class NavbarItem implements \JsonSerializable
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=30)
     */
    private $text;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $url;

    /**
     * @ORM\ManyToOne(targetEntity=Navbar::class, inversedBy="items")
     * @ORM\JoinColumn(nullable=false)
     */
    private $navbar;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getText(): ?string
    {
        return $this->text;
    }

    public function setText(string $text): self
    {
        $this->text = $text;

        return $this;
    }

    public function getUrl(): ?string
    {
        return $this->url;
    }

    public function setUrl(string $url): self
    {
        $this->url = $url;

        return $this;
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

    public function jsonSerialize(): array
    {
        return [
            'text' => $this->text,
            'url' => $this->url
        ];
    }
}
