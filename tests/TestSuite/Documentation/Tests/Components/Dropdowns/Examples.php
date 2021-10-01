<?php

// Documentation test config file for "Components / Dropdowns / Examples" part
return [
    'title' => 'Examples',
    'url' => '%bootstrap-url%/components/dropdowns/#examples',
    'tests' => [
        [
            'title' => 'Single button',
            'url' => '%bootstrap-url%/components/dropdowns/#single-button',
            'rendering' => function (\Laminas\View\Renderer\PhpRenderer $oView) {
                echo $oView->formButton([
                    'name' => 'dropdown',
                    'options' => [
                        'label' => 'Dropdown',
                        'dropdown' => ['Action', 'Another action', 'Something else here',],
                    ],
                    'attributes' => ['id' => 'dropdownMenuButton'],
                ]);

                echo PHP_EOL . '<br/>' . PHP_EOL;

                // With <a> elements
                echo $oView->formButton([
                    'name' => 'dropdown',
                    'options' => [
                        'tag' => 'a',
                        'label' => 'Dropdown',
                        'dropdown' => ['Action', 'Another action', 'Something else here',],
                    ],
                    'attributes' => ['id' => 'dropdownMenuButton'],
                ]);

                echo PHP_EOL . '<br/>' . PHP_EOL;

                // Variations
                foreach (
                    [
                        'primary', 'secondary', 'success', 'danger',
                        'warning', 'info', 'light', 'dark',
                    ] as $sVariant
                ) {
                    echo $oView->formButton([
                        'name' => 'dropdown',
                        'options' => [
                            'variant' => $sVariant,
                            'label' => 'Dropdown',
                            'dropdown' => [
                                'attributes' => ['class' => 'btn-group'],
                                'items' => [
                                    'Action',
                                    'Another action',
                                    'Something else here',
                                    '---',
                                    'Separated link',
                                ],
                            ],
                        ],
                    ]) . PHP_EOL;
                }
            },
        ],
        [
            'title' => 'Split button',
            'url' => '%bootstrap-url%/components/dropdowns/#split-button',
            'rendering' => function (\Laminas\View\Renderer\PhpRenderer $oView) {
                foreach (
                    [
                        'primary', 'secondary', 'success', 'danger',
                        'warning', 'info', 'light', 'dark',
                    ] as $sVariant
                ) {
                    echo $oView->formButton([
                        'name' => 'dropdown',
                        'options' => [
                            'variant' => $sVariant,
                            'label' => 'Dropdown',
                            'dropdown' => [
                                'split' => 'Toggle Dropdown',
                                'items' => [
                                    'Action',
                                    'Another action',
                                    'Something else here',
                                    '---',
                                    'Separated link',
                                ],
                            ],
                        ],
                    ]) . PHP_EOL;
                }
            },
        ],
    ],
];
