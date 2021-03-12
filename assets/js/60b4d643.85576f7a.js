(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{74:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return d}));var l=a(3),n=a(7),o=(a(0),a(94)),i=a(95),s=a.n(i),r=a(96),u=a(97),c={id:"typography",title:"Typography"},b={unversionedId:"rendering/typography",id:"rendering/typography",isDocsHomePage:!1,title:"Typography",description:"Twitter bootstrap Documentation",source:"@site/docs/rendering/typography.mdx",slug:"/rendering/typography",permalink:"/twbs-helper-module/docs/rendering/typography",editUrl:"https://github.com/neilime/twbs-helper-module/edit/master/website/docs/rendering/typography.mdx",version:"current",sidebar:"docsSidebar",previous:{title:"Introduction",permalink:"/twbs-helper-module/docs/rendering"},next:{title:"Images",permalink:"/twbs-helper-module/docs/rendering/images"}},p=[{value:"Abbreviations",id:"abbreviations",children:[]},{value:"Blockquotes",id:"blockquotes",children:[{value:"Naming a source",id:"naming-a-source",children:[]},{value:"Alignment",id:"alignment",children:[]}]},{value:"List",id:"list",children:[{value:"Unstyled",id:"unstyled",children:[]},{value:"Inline",id:"inline",children:[]}]}],m={toc:p};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(l.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/content/typography/"},"Twitter bootstrap Documentation")),Object(o.b)("h2",{id:"abbreviations"},"Abbreviations"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/content/typography/#abbreviations"},"Twitter bootstrap Documentation")),Object(o.b)(r.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(o.b)(u.a,{value:"result",mdxType:"TabItem"},s()('<p><abbr title="attribute">attr</abbr></p>\n<p><abbr class="initialism" title="HyperText&#x20;Markup&#x20;Language">HTML</abbr></p>')),Object(o.b)(u.a,{value:"source",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"// First abbreviation\necho '<p>' . $this->abbreviation('attr', 'attribute') . '</p>' . PHP_EOL;\n// Second abbreviation\necho '<p>' . $this->abbreviation('HTML', 'HyperText Markup Language', true) . '</p>';\n")))),Object(o.b)("h2",{id:"blockquotes"},"Blockquotes"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/content/typography/#blockquotes"},"Twitter bootstrap Documentation")),Object(o.b)(r.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(o.b)(u.a,{value:"result",mdxType:"TabItem"},s()('<blockquote class="blockquote">\n    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n</blockquote>')),Object(o.b)(u.a,{value:"source",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"echo $this->blockquote(\n    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.'\n);\n")))),Object(o.b)("h3",{id:"naming-a-source"},"Naming a source"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/content/typography/#naming-a-source"},"Twitter bootstrap Documentation")),Object(o.b)(r.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(o.b)(u.a,{value:"result",mdxType:"TabItem"},s()('<blockquote class="blockquote">\n    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n    <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>\n</blockquote>')),Object(o.b)(u.a,{value:"source",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"echo $this->blockquote(\n    // Content\n    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',\n    // Footer content\n    'Someone famous in <cite title=\"Source Title\">Source Title</cite>'\n);\n")))),Object(o.b)("h3",{id:"alignment"},"Alignment"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/content/typography/#alignment"},"Twitter bootstrap Documentation")),Object(o.b)(r.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(o.b)(u.a,{value:"result",mdxType:"TabItem"},s()('<blockquote class="blockquote&#x20;text-center">\n    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n    <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>\n</blockquote>\n<blockquote class="blockquote&#x20;text-right">\n    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n    <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>\n</blockquote>\n')),Object(o.b)(u.a,{value:"source",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"// Center\necho $this->blockquote(\n    // Content\n    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',\n    // Footer content\n    'Someone famous in <cite title=\"Source Title\">Source Title</cite>',\n['class' => 'text-center']\n) . PHP_EOL;\n\n// Right\necho $this->blockquote(\n    // Content\n    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',\n    // Footer content\n    'Someone famous in <cite title=\"Source Title\">Source Title</cite>',\n['class' => 'text-right']\n) . PHP_EOL;\n")))),Object(o.b)("h2",{id:"list"},"List"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/content/typography/#lists"},"Twitter bootstrap Documentation")),Object(o.b)("h3",{id:"unstyled"},"Unstyled"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/content/typography/#unstyled"},"Twitter bootstrap Documentation")),Object(o.b)(r.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(o.b)(u.a,{value:"result",mdxType:"TabItem"},s()('<ul class="list-unstyled">\n    <li>Lorem ipsum dolor sit amet</li>\n    <li>Consectetur adipiscing elit</li>\n    <li>Integer molestie lorem at massa</li>\n    <li>Facilisis in pretium nisl aliquet</li>\n    <li>\n        Nulla volutpat aliquam velit\n        <ul class="list-unstyled">\n            <li>Phasellus iaculis neque</li>\n            <li>Purus sodales ultricies</li>\n            <li>Vestibulum laoreet porttitor sem</li>\n            <li>Ac tristique libero volutpat at</li>\n        </ul>\n    </li>\n    <li>Faucibus porta lacus fringilla vel</li>\n    <li>Aenean sit amet erat nunc</li>\n    <li>Eget porttitor lorem</li>\n</ul>')),Object(o.b)(u.a,{value:"source",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"echo $this->htmlList(\n    // List items\n    [\n        'Lorem ipsum dolor sit amet',\n        'Consectetur adipiscing elit',\n        'Integer molestie lorem at massa',\n        'Facilisis in pretium nisl aliquet',\n        'Nulla volutpat aliquam velit' => [\n            'Phasellus iaculis neque',\n            'Purus sodales ultricies',\n            'Vestibulum laoreet porttitor sem',\n            'Ac tristique libero volutpat at',\n        ],\n        'Faucibus porta lacus fringilla vel',\n        'Aenean sit amet erat nunc',\n        'Eget porttitor lorem',\n    ],\n    // Add \"list-unstyled\" class\n['class' => 'list-unstyled']\n);\n")))),Object(o.b)("h3",{id:"inline"},"Inline"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/content/typography/#inline"},"Twitter bootstrap Documentation")),Object(o.b)(r.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(o.b)(u.a,{value:"result",mdxType:"TabItem"},s()('<ul class="list-inline">\n    <li class="list-inline-item">Lorem ipsum</li>\n    <li class="list-inline-item">Phasellus iaculis</li>\n    <li class="list-inline-item">Nulla volutpat</li>\n</ul>')),Object(o.b)(u.a,{value:"source",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"echo $this->htmlList(\n    // List items\n    ['Lorem ipsum', 'Phasellus iaculis', 'Nulla volutpat',],\n    // Add \"list-inline\" class\n['class' => 'list-inline']\n);\n")))))}d.isMDXComponent=!0}}]);