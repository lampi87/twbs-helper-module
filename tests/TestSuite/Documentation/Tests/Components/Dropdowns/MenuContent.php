<?php

// Documentation test config file for "Components / Dropdowns / Menu content" part
return [
    'title' => 'Menu content',
    'url' => '%bootstrap-url%/components/dropdowns/#menu-content',
    'tests' => [
        [
            'title' => 'Headers',
            'url' => '%bootstrap-url%/components/dropdowns/#headers',
            'rendering' => function (\Laminas\View\Renderer\PhpRenderer $oView) {
                echo $oView->dropdown()->renderMenu([
                    'Dropdown header' => \TwbsHelper\View\Helper\Dropdown::TYPE_ITEM_HEADER,
                    'Action',
                    'Another action',
                ]);
            },
        ],
        [
            'title' => 'Dividers',
            'url' => '%bootstrap-url%/components/dropdowns/#headers',
            'rendering' => function (\Laminas\View\Renderer\PhpRenderer $oView) {
                echo $oView->dropdown()->renderMenu([
                    'Action',
                    'Another action',
                    'Something else here',
                    '---',
                    'Separated link',
                ]);
            },
        ],
        [
            'title' => 'Text',
            'url' => '%bootstrap-url%/components/dropdowns/#headers',
            'rendering' => function (\Laminas\View\Renderer\PhpRenderer $oView) {
                echo $oView->dropdown()->renderMenu([
                    '<p>Some example text that\'s free-flowing within the dropdown menu.</p>',
                    '<p class="mb-0">And this is more example text.</p>',
                ], ['class' => 'p-4 text-muted', 'style' => 'max-width: 200px;']);
            },
        ],
        [
            'title' => 'Forms',
            'url' => '%bootstrap-url%/components/dropdowns/#forms',
            'rendering' => function (\Laminas\View\Renderer\PhpRenderer $oView) {

                // Create form
                $oFactory = new \Laminas\Form\Factory();
                $oForm = $oFactory->create([
                    'type' => 'form',
                    'name' => 'dropdown',
                    'attributes' => ['id' => 'dropdown'],
                    'elements' => [
                        [
                            'spec' => [
                                'name' => 'email',
                                'options' => ['label' => 'Email address'],
                                'attributes' => [
                                    'type' => 'email',
                                    'id' => 'exampleDropdownFormEmail1',
                                    'placeholder' => 'email@example.com',
                                ],
                            ],
                        ],
                        [
                            'spec' => [
                                'name' => 'password',
                                'options' => ['label' => 'Password'],
                                'attributes' => [
                                    'type' => 'password',
                                    'id' => 'exampleDropdownFormPassword1',
                                    'placeholder' => 'Password',
                                ],
                            ],
                        ],
                        [
                            'spec' => [
                                'type' => 'checkbox',
                                'name' => 'remember_me',
                                'options' => ['label' => 'Remember me', 'use_hidden_element' => false],
                                'attributes' => [
                                    'id' => 'dropdownCheck',
                                ],
                            ],
                        ],
                        [
                            'spec' => [
                                'type' => 'submit',
                                'options' => ['label' => 'Sign in', 'variant' => 'primary'],
                            ],
                        ],
                    ]
                ]);

                echo $oView->dropdown()->renderMenu([
                    $oForm,
                    'New around here? Sign up',
                    'Forgot password?',
                ]);
            },
        ],
    ],
];
