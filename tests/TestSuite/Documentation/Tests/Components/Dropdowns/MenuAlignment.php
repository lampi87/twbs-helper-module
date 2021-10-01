<?php

// Documentation test config file for "Components / Dropdowns / Menu alignment" part
return [
    'title' => 'Menu alignment',
    'url' => '%bootstrap-url%/components/dropdowns/#menu-alignment',
    'rendering' => function (\Laminas\View\Renderer\PhpRenderer $oView) {
        echo $oView->formButton([
            'name' => 'dropdown',
            'options' => [
                'label' => 'Right-aligned menu',
                'dropdown' => [
                    'alignment' => 'right',
                    'items' => ['Action', 'Another action', 'Something else here'],
                ],
            ],
        ]);
    },
    'tests' => [
        [
            'title' => 'Responsive alignment',
            'url' => '%bootstrap-url%/components/dropdowns/#responsive-alignment',
            'rendering' => function (\Laminas\View\Renderer\PhpRenderer $oView) {
                echo $oView->formButton([
                    'name' => 'dropdown',
                    'options' => [
                        'label' => 'Left-aligned but right aligned when large screen',
                        'dropdown' => [
                            'alignment' => 'lg-right',
                            'items' => ['Action', 'Another action', 'Something else here'],
                        ],
                    ],
                ]);

                echo PHP_EOL . '<br/>' . PHP_EOL;

                echo $oView->formButton([
                    'name' => 'dropdown',
                    'options' => [
                        'label' => 'Left-aligned but right aligned when large screen',
                        'dropdown' => [
                            'alignment' => ['right', 'lg-left'],
                            'items' => ['Action', 'Another action', 'Something else here'],
                        ],
                    ],
                ]);
            },
        ],
    ],
];
