(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{65:function(e,a,r){"use strict";r.r(a),r.d(a,"frontMatter",(function(){return s})),r.d(a,"metadata",(function(){return u})),r.d(a,"toc",(function(){return m})),r.d(a,"default",(function(){return p}));var n=r(3),t=r(7),i=(r(0),r(94)),b=r(95),c=r.n(b),l=r(96),o=r(97),s={id:"breadcrumb",title:"Breadcrumb"},u={unversionedId:"rendering/breadcrumb",id:"rendering/breadcrumb",isDocsHomePage:!1,title:"Breadcrumb",description:"Twitter bootstrap Documentation",source:"@site/docs/rendering/breadcrumb.mdx",slug:"/rendering/breadcrumb",permalink:"/twbs-helper-module/docs/rendering/breadcrumb",editUrl:"https://github.com/neilime/twbs-helper-module/edit/master/website/docs/rendering/breadcrumb.mdx",version:"current",sidebar:"docsSidebar",previous:{title:"Badges",permalink:"/twbs-helper-module/docs/rendering/badges"},next:{title:"Buttons",permalink:"/twbs-helper-module/docs/rendering/buttons"}},m=[{value:"Example",id:"example",children:[]}],d={toc:m};function p(e){var a=e.components,r=Object(t.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,r,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/breadcrumb/"},"Twitter bootstrap Documentation")),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/breadcrumb/#example"},"Twitter bootstrap Documentation")),Object(i.b)(l.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"result",mdxType:"TabItem"},c()('<nav aria-label="breadcrumb">\n    <ol class="breadcrumb">\n        <li class="breadcrumb-item active" aria-current="page">Home</li>\n    </ol>\n</nav>\n<nav aria-label="breadcrumb">\n    <ol class="breadcrumb">\n        <li class="breadcrumb-item"><a href="&#x2F;">Home</a></li>\n        <li class="breadcrumb-item active" aria-current="page">Library</li>\n    </ol>\n</nav>\n<nav aria-label="breadcrumb">\n    <ol class="breadcrumb">\n        <li class="breadcrumb-item"><a href="&#x2F;">Home</a></li>\n        <li class="breadcrumb-item"><a href="&#x2F;library">Library</a></li>\n        <li class="breadcrumb-item active" aria-current="page">Data</li>\n    </ol>\n</nav>\n')),Object(i.b)(o.a,{value:"source",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"echo $this->breadcrumbs(new \\Laminas\\Navigation\\Navigation([\n    ['label' => 'Home', 'uri' => '/', 'active' => true,],\n    ]))->setMinDepth(0)  . PHP_EOL;\n    \n    echo $this->breadcrumbs(new \\Laminas\\Navigation\\Navigation([\n        [\n            'label' => 'Home', 'uri' => '/', 'pages' => [\n                ['label' => 'Library', 'uri' => '/library', 'active' => true],\n            ],\n        ],\n        ]))->setMinDepth(0) . PHP_EOL;\n        \n        echo $this->breadcrumbs(new \\Laminas\\Navigation\\Navigation([\n            [\n                'label' => 'Home', 'uri' => '/', 'pages' => [\n                    [\n                        'label' => 'Library', 'uri' => '/library', 'pages' => [\n                            ['label' => 'Data', 'uri' => '/library/data', 'active' => true],\n                        ],\n                    ],\n                ],\n            ],\n            ]))->setMinDepth(0) . PHP_EOL;\n")))))}p.isMDXComponent=!0}}]);