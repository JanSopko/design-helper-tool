<?php

namespace App\Entity;

use App\Repository\FooterRepository;
use Doctrine\ORM\Mapping as ORM;
use JsonSerializable;

/**
 * @ORM\Entity(repositoryClass=FooterRepository::class)
 */
class Footer implements JsonSerializable
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $height;

    /**
     * @ORM\Column(type="string", length=7, nullable=true)
     */
    private $backgroundColor;

    /**
     * @ORM\Column(type="string", length=7)
     */
    private $textColor;

    /**
     * @ORM\OneToOne(targetEntity=Theme::class, mappedBy="footer")
     */
    private $theme;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getHeight(): ?int
    {
        return $this->height;
    }

    public function setHeight(?int $height): self
    {
        $this->height = $height;

        return $this;
    }

    public function getBackgroundColor(): ?string
    {
        return $this->backgroundColor;
    }

    public function setBackgroundColor(?string $backgroundColor): self
    {
        $this->backgroundColor = $backgroundColor;

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

    /**
     * @return mixed
     */
    public function getTheme()
    {
        return $this->theme;
    }

    /**
     * @param mixed $theme
     */
    public function setTheme($theme): self
    {
        $this->theme = $theme;
        return $this;
    }

    public function updateSelfFromPayload(array $payload): self
    {
        if (isset($payload['height'])) {
            $this->setHeight($payload['height']);
        }
        if (isset($payload['backgroundColor'])) {
            $this->setBackgroundColor($payload['backgroundColor']);
        }

        return $this;
    }


    public function jsonSerialize()
    {
        $structure = [
            'height' => $this->height,
            'backgroundColor' => $this->backgroundColor,
            'color' => $this->textColor
        ];

        return $structure;
    }
}
