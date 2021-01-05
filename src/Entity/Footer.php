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

    const DEFAULT_FONT_SIZE = 14;
    const CSS_CLASS = 'my-footer';

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
     * @ORM\Column(type="integer", nullable=true)
     */
    private $fontSize;

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
        if (isset($payload['color'])) {
            $this->setTextColor($payload['color']);
        }
        if (isset($payload['fontSize'])) {
            $this->setFontSize($payload['fontSize']);
        }

        return $this;
    }

    /**
     * @return mixed
     */
    public function getFontSize()
    {
        return $this->fontSize;
    }

    /**
     * @param mixed $fontSize
     */
    public function setFontSize($fontSize): self
    {
        $this->fontSize = $fontSize;
        return $this;
    }

    public function getHtml(): string
    {
        $html = '<div class="'. self::CSS_CLASS . '">';
        $html .= '</div>';
        return $html;
    }

    public function getStyle(): string
    {
        $style = '.' . self::CSS_CLASS . '{';
        $style .= 'position:absolute;';
        $style .= 'bottom:0;';
        $style .= 'width:100%;';
        //editable
        $style .= 'height:' . $this->height . 'rem;';
        $style .= 'background-color:' . $this->backgroundColor . ';';
        $style .= 'color:' . $this->textColor . ';';
        $style .= '}';
        return $style;
    }

    public function jsonSerialize()
    {
        $structure = [
            'height' => $this->height,
            'backgroundColor' => $this->backgroundColor,
            'color' => $this->textColor,
            'fontSize' => $this->fontSize ?? self::DEFAULT_FONT_SIZE
        ];

        return $structure;
    }
}
