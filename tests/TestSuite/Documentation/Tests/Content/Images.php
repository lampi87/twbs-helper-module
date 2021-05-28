<?php

// Documentation test config file for "Content / Images" part
return [
    'title' => 'Images',
    'url' => '%bootstrap-url%/content/images/',
    'tests' => [
        [
            'title' => 'Responsive images',
            'url' => '%bootstrap-url%/content/images/#responsive-images',
            'rendering' => function (\Laminas\View\Renderer\PhpRenderer $oView) {
                echo $oView->image('/twbs-helper-module/img/docs/responsive.svg', ['fluid' => true, 'alt' => '...',]);
            },
        ],
        [
            'title' => 'Image thumbnails',
            'url' => '%bootstrap-url%/content/images/#image-thumbnails',
            'rendering' => function (\Laminas\View\Renderer\PhpRenderer $oView) {
                echo $oView->image('/twbs-helper-module/img/docs/200x200.svg', ['thumbnail' => true, 'alt' => '...',]);
            },
        ],
        [
            'title' => 'Aligning images',
            'url' => '%bootstrap-url%/content/images/#aligning-images',
            'rendering' => function (\Laminas\View\Renderer\PhpRenderer $oView) {
                echo $oView->image(
                    '/twbs-helper-module/img/docs/200x200.svg',
                    ['rounded' => true, 'alt' => '...', 'class' => 'float-start']
                )  . PHP_EOL;

                echo $oView->image(
                    '/twbs-helper-module/img/docs/200x200.svg',
                    ['rounded' => true, 'alt' => '...', 'class' => 'float-end']
                ) . PHP_EOL;

                echo $oView->image(
                    '/twbs-helper-module/img/docs/200x200.svg',
                    ['rounded' => true, 'alt' => '...', 'class' => 'mx-auto d-block']
                );
            },
        ],
        [
            'title' => 'Picture',
            'url' => '%bootstrap-url%/content/images/#picture',
            'rendering' => function (\Laminas\View\Renderer\PhpRenderer $oView) {
                echo $oView->image('/twbs-helper-module/img/docs/200x200.svg', [
                    'thumbnail' => true,
                    'fluid' => true,
                    'alt' => '...',
                    'sources' => ['/twbs-helper-module/img/docs/200x200.svg' => 'image/svg+xml'],
                ]);
            },
        ],
    ],
];
