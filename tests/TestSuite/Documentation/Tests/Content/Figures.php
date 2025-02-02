<?php

// Documentation test config file for "Content / Figures" part
return [
    'title' => 'Figures',
    'url' => '%bootstrap-url%/content/figures/',
    'tests' => [
        [
            'title' => 'Basic',
            'rendering' => function (\Laminas\View\Renderer\PhpRenderer $oView) {
                echo $oView->figure(
                    '/twbs-helper-module/img/docs/400x300.svg',
                    'A caption for the above image.',
                    [],
                    [
                        'fluid' => true,
                        'rounded' => true,
                        'alt' => 'A generic square placeholder image with rounded corners in a figure.',
                    ]
                );
            },

        ],
        [
            'title' => 'Aligning figure\'s caption',
            'rendering' => function (\Laminas\View\Renderer\PhpRenderer $oView) {
                echo $oView->figure(
                    '/twbs-helper-module/img/docs/400x300.svg',
                    'A caption for the above image.',
                    [],
                    [
                        'fluid' => true,
                        'rounded' => true,
                        'alt' => 'A generic square placeholder image with rounded corners in a figure.',
                    ],
                    ['class' => 'text-right']
                );
            },

        ],
    ],
];
