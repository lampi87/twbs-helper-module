<?php

// Documentation test config file for "Components / Carousel / Example / Slides only" part

return [
    'title' => 'Slides only',
    'url' => '%bootstrap-url%/components/carousel/#slides-only',
    'rendering' => function (\Laminas\View\Renderer\PhpRenderer $view) {
        echo $view->carousel(
            [
                [
                    'src' => '/twbs-helper-module/img/docs/slide1.svg',
                    'active' => true,
                    'alt' => '...',
                ],
                [
                    'src' => '/twbs-helper-module/img/docs/slide2.svg',
                    'alt' => '...',
                ],
                [
                    'src' => '/twbs-helper-module/img/docs/slide3.svg',
                    'alt' => '...',
                ],
            ],
            ['id' => 'carouselExampleSlidesOnly'],
        );
    },
];
