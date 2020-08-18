(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{56:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return p})),n.d(a,"metadata",(function(){return i})),n.d(a,"rightToc",(function(){return o})),n.d(a,"default",(function(){return u}));var s=n(2),t=n(6),b=(n(0),n(97)),r=n(98),l=n.n(r),d=n(99),c=n(100),p={id:"badges",title:"Badges"},i={unversionedId:"rendering/badges",id:"rendering/badges",isDocsHomePage:!1,title:"Badges",description:"Twitter bootstrap Documentation",source:"@site/docs/rendering/badges.mdx",permalink:"/twbs-helper-module/docs/rendering/badges",editUrl:"https://github.com/neilime/twbs-helper-module/edit/master/website/docs/rendering/badges.mdx",sidebar:"docsSidebar",previous:{title:"Alerts",permalink:"/twbs-helper-module/docs/rendering/alerts"},next:{title:"Breadcrumb",permalink:"/twbs-helper-module/docs/rendering/breadcrumb"}},o=[{value:"Example",id:"example",children:[]},{value:"Contextual variations",id:"contextual-variations",children:[]},{value:"Pill badges",id:"pill-badges",children:[]},{value:"Links",id:"links",children:[]}],g={rightToc:o};function u(e){var a=e.components,n=Object(t.a)(e,["components"]);return Object(b.b)("wrapper",Object(s.a)({},g,n,{components:a,mdxType:"MDXLayout"}),Object(b.b)("p",null,Object(b.b)("a",Object(s.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.5/components/badge/"}),"Twitter bootstrap Documentation")),Object(b.b)("h2",{id:"example"},"Example"),Object(b.b)("p",null,Object(b.b)("a",Object(s.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.5/components/badge/#example"}),"Twitter bootstrap Documentation")),Object(b.b)(d.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(b.b)(c.a,{value:"result",mdxType:"TabItem"},l()('<h1>Example heading <span class="badge&#x20;badge-secondary">New</span></h1>\n<h2>Example heading <span class="badge&#x20;badge-secondary">New</span></h2>\n<h3>Example heading <span class="badge&#x20;badge-secondary">New</span></h3>\n<h4>Example heading <span class="badge&#x20;badge-secondary">New</span></h4>\n<h5>Example heading <span class="badge&#x20;badge-secondary">New</span></h5>\n<h6>Example heading <span class="badge&#x20;badge-secondary">New</span></h6>\n<br/>\n<button type="button" name="button" class="btn&#x20;btn-primary" value="">\n    Profile <span class="badge&#x20;badge-light">9</span>\n    <span class="sr-only">unread messages</span>\n</button>')),Object(b.b)(c.a,{value:"source",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",Object(s.a)({parentName:"pre"},{className:"language-php"}),"// H1\necho '<h1>Example heading ' . $this->badge('New') . '</h1>' . PHP_EOL;\n// H2\necho '<h2>Example heading ' . $this->badge('New') . '</h2>' . PHP_EOL;\n// H3\necho '<h3>Example heading ' . $this->badge('New') . '</h3>' . PHP_EOL;\n// H4\necho '<h4>Example heading ' . $this->badge('New') . '</h4>' . PHP_EOL;\n// H5\necho '<h5>Example heading ' . $this->badge('New') . '</h5>' . PHP_EOL;\n// H6\necho '<h6>Example heading ' . $this->badge('New') . '</h6>';\n\necho PHP_EOL . '<br/>' . PHP_EOL;\n\n// Button\necho $this->formButton([\n    'options' => [\n        'label' => 'Profile ' . $this->badge('9', 'light') . PHP_EOL .\n        '<span class=\"sr-only\">unread messages</span>',\n        'variant' => 'primary',\n    ],\n]);\n")))),Object(b.b)("h2",{id:"contextual-variations"},"Contextual variations"),Object(b.b)("p",null,Object(b.b)("a",Object(s.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.5/components/badge/#contextual-variations"}),"Twitter bootstrap Documentation")),Object(b.b)(d.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(b.b)(c.a,{value:"result",mdxType:"TabItem"},l()('<span class="badge&#x20;badge-primary">Primary</span>\n<span class="badge&#x20;badge-secondary">Secondary</span>\n<span class="badge&#x20;badge-success">Success</span>\n<span class="badge&#x20;badge-danger">Danger</span>\n<span class="badge&#x20;badge-warning">Warning</span>\n<span class="badge&#x20;badge-info">Info</span>\n<span class="badge&#x20;badge-light">Light</span>\n<span class="badge&#x20;badge-dark">Dark</span>\n')),Object(b.b)(c.a,{value:"source",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",Object(s.a)({parentName:"pre"},{className:"language-php"}),"foreach ([\n    'primary', 'secondary', 'success', 'danger',\n    'warning', 'info', 'light', 'dark',\n] as $sVariant) {\n    echo $this->badge(ucfirst($sVariant), $sVariant) . PHP_EOL;\n}\n")))),Object(b.b)("h2",{id:"pill-badges"},"Pill badges"),Object(b.b)("p",null,Object(b.b)("a",Object(s.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.5/components/badge/#pill-badges"}),"Twitter bootstrap Documentation")),Object(b.b)(d.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(b.b)(c.a,{value:"result",mdxType:"TabItem"},l()('<span class="badge&#x20;badge-pill&#x20;badge-primary">Primary</span>\n<span class="badge&#x20;badge-pill&#x20;badge-secondary">Secondary</span>\n<span class="badge&#x20;badge-pill&#x20;badge-success">Success</span>\n<span class="badge&#x20;badge-danger&#x20;badge-pill">Danger</span>\n<span class="badge&#x20;badge-pill&#x20;badge-warning">Warning</span>\n<span class="badge&#x20;badge-info&#x20;badge-pill">Info</span>\n<span class="badge&#x20;badge-light&#x20;badge-pill">Light</span>\n<span class="badge&#x20;badge-dark&#x20;badge-pill">Dark</span>\n')),Object(b.b)(c.a,{value:"source",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",Object(s.a)({parentName:"pre"},{className:"language-php"}),"foreach ([\n    'primary', 'secondary', 'success', 'danger',\n    'warning', 'info', 'light', 'dark',\n] as $sVariant) {\n    echo $this->badge(\n        ucfirst($sVariant),\n        [\n            'type' => 'pill',\n            'variant' => $sVariant,\n        ]\n    ) . PHP_EOL;\n}\n")))),Object(b.b)("h2",{id:"links"},"Links"),Object(b.b)("p",null,Object(b.b)("a",Object(s.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.5/components/badge/#links"}),"Twitter bootstrap Documentation")),Object(b.b)(d.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(b.b)(c.a,{value:"result",mdxType:"TabItem"},l()('<a class="badge&#x20;badge-primary" href="&#x23;">Primary</a>\n<a class="badge&#x20;badge-secondary" href="&#x23;">Secondary</a>\n<a class="badge&#x20;badge-success" href="&#x23;">Success</a>\n<a class="badge&#x20;badge-danger" href="&#x23;">Danger</a>\n<a class="badge&#x20;badge-warning" href="&#x23;">Warning</a>\n<a class="badge&#x20;badge-info" href="&#x23;">Info</a>\n<a class="badge&#x20;badge-light" href="&#x23;">Light</a>\n<a class="badge&#x20;badge-dark" href="&#x23;">Dark</a>\n')),Object(b.b)(c.a,{value:"source",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",Object(s.a)({parentName:"pre"},{className:"language-php"}),"foreach ([\n    'primary', 'secondary', 'success', 'danger',\n    'warning', 'info', 'light', 'dark',\n] as $sVariant) {\n    echo $this->badge(\n        ucfirst($sVariant),\n        [\n            'type' => 'link',\n            'href' => '#',\n            'variant' => $sVariant,\n            \n        ]\n    ) . PHP_EOL;\n}\n")))))}u.isMDXComponent=!0}}]);