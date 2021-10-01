<?php

// Documentation test config file for "Components / Dropdowns / Dropdown options" part
return [
    'title' => 'Dropdown options',
    'url' => '%bootstrap-url%/components/dropdowns/#dropdown-options',
    'rendering' => function (\Laminas\View\Renderer\PhpRenderer $oView) {

        echo '<div class="d-flex">' . PHP_EOL;

        echo $oView->formButton([
            'name' => 'dropdown',
            'options' => [
                'label' => 'Offset',
                'dropdown' => [
                    'attributes' => ['class' => 'mr-1'],
                    'offset' => '10,20',
                    'items' => ['Action', 'Another action', 'Something else here'],
                ],
            ],
            'attributes' => ['id' => 'dropdownMenuOffset'],
        ]) . PHP_EOL;

        echo $oView->formButton([
            'name' => 'dropdown',
            'options' => [
                'label' => 'Reference',
                'dropdown' => [
                    'split' => [
                        'attributes' => ['data-reference' => 'parent'],
                    ],
                    'items' => ['Action', 'Another action', 'Something else here'],
                ],
            ],
            'attributes' => ['id' => 'dropdownMenuReference'],
        ]);


        echo PHP_EOL . '</div>';
    },
];
