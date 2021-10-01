<?php

// Documentation test config file for "Components / Dropdowns / Directions" part
return [
    'title' => 'Directions',
    'url' => '%bootstrap-url%/components/dropdowns/#directions',
    'tests' => [
        [
            'title' => 'Dropup',
            'url' => '%bootstrap-url%/components/dropdowns/#dropup',
            'rendering' => function (\Laminas\View\Renderer\PhpRenderer $oView) {
                // Dropup button
                echo $oView->formButton([
                    'name' => 'dropup',
                    'options' => [
                        'label' => 'Dropup',
                        'size' => 'lg',
                        'dropdown' => [
                            'direction' => 'up',
                            'attributes' => ['class' => 'btn-group'],
                            'items' => [
                                'Action',
                                'Another action',
                                'Something else here',
                                '---',
                                'Separated link',
                            ]
                        ],
                    ],
                ]) . PHP_EOL;

                // Dropup split button
                echo $oView->formButton([
                    'name' => 'split-dropup',
                    'options' => [
                        'label' => 'Split dropup',
                        'size' => 'lg',
                        'dropdown' => [
                            'direction' => 'up',
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
                ]);
            },
        ],
        [
            'title' => 'Dropright',
            'url' => '%bootstrap-url%/components/dropdowns/#dropright',
            'rendering' => function (\Laminas\View\Renderer\PhpRenderer $oView) {
                // Dropright button
                echo $oView->formButton([
                    'name' => 'dropright',
                    'options' => [
                        'label' => 'Dropright',
                        'size' => 'lg',
                        'dropdown' => [
                            'direction' => 'right',
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

                // Dropright split button
                echo $oView->formButton([
                    'name' => 'split-dropright',
                    'options' => [
                        'label' => 'Split dropright',
                        'size' => 'lg',
                        'dropdown' => [
                            'direction' => 'right',
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
                ]);
            },
        ],
    ],
];
