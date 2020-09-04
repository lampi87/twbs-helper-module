(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{55:function(t,e,o){"use strict";o.r(e),o.d(e,"frontMatter",(function(){return r})),o.d(e,"metadata",(function(){return u})),o.d(e,"rightToc",(function(){return c})),o.d(e,"default",(function(){return m}));var n=o(2),l=o(6),a=(o(0),o(98)),i=o(99),s=o.n(i),p=o(100),b=o(101),r={id:"tooltips",title:"Tooltips"},u={unversionedId:"rendering/tooltips",id:"rendering/tooltips",isDocsHomePage:!1,title:"Tooltips",description:"Twitter bootstrap Documentation",source:"@site/docs/rendering/tooltips.mdx",slug:"/rendering/tooltips",permalink:"/twbs-helper-module/docs/rendering/tooltips",editUrl:"https://github.com/neilime/twbs-helper-module/edit/master/website/docs/rendering/tooltips.mdx",version:"current",sidebar:"docsSidebar",previous:{title:"Toasts",permalink:"/twbs-helper-module/docs/rendering/toasts"}},c=[{value:"Examples",id:"examples",children:[]},{value:"Disabled elements",id:"disabled-elements",children:[]}],d={rightToc:c};function m(t){var e=t.components,o=Object(l.a)(t,["components"]);return Object(a.b)("wrapper",Object(n.a)({},d,o,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.5/components/tooltips/"}),"Twitter bootstrap Documentation")),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.5/components/tooltips/#examples"}),"Twitter bootstrap Documentation")),Object(a.b)(p.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(a.b)(b.a,{value:"result",mdxType:"TabItem"},s()('<button type="button" name="tooltip" class="btn&#x20;btn-secondary" title="Tooltip&#x20;on&#x20;top" data-toggle="tooltip" data-placement="top" value="">Tooltip on top</button>\n<button type="button" name="tooltip" class="btn&#x20;btn-secondary" title="Tooltip&#x20;on&#x20;right" data-toggle="tooltip" data-placement="right" value="">Tooltip on right</button>\n<button type="button" name="tooltip" class="btn&#x20;btn-secondary" title="Tooltip&#x20;on&#x20;bottom" data-toggle="tooltip" data-placement="bottom" value="">Tooltip on bottom</button>\n<button type="button" name="tooltip" class="btn&#x20;btn-secondary" title="Tooltip&#x20;on&#x20;left" data-toggle="tooltip" data-placement="left" value="">Tooltip on left</button>\n<button type="button" name="tooltip" class="btn&#x20;btn-secondary" title="&lt;em&gt;Tooltip&lt;&#x2F;em&gt;&#x20;&lt;u&gt;with&lt;&#x2F;u&gt;&#x20;&lt;b&gt;HTML&lt;&#x2F;b&gt;" data-toggle="tooltip" data-html="true" value="">Tooltip with HTML</button>')),Object(a.b)(b.a,{value:"source",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"foreach ([\n    'top' => 'Tooltip on top',\n    'right' => 'Tooltip on right',\n    'bottom' => 'Tooltip on bottom',\n    'left' => 'Tooltip on left',\n] as $sPlacement => $sLabel) {\n    echo $this->formButton([\n        'name' => 'tooltip',\n        'options' => [\n            'label' => $sLabel,\n            'tooltip' => [\n                'placement' => $sPlacement,\n                'content' => $sLabel,\n            ],\n        ],\n    ]) . PHP_EOL;\n}\n\necho $this->formButton([\n    'name' => 'tooltip',\n    'options' => [\n        'label' => 'Tooltip with HTML',\n        'tooltip' => '<em>Tooltip</em> <u>with</u> <b>HTML</b>',\n    ],\n]);\n")))),Object(a.b)("h2",{id:"disabled-elements"},"Disabled elements"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.5/components/tooltips/#disabled-elements"}),"Twitter bootstrap Documentation")),Object(a.b)(p.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(a.b)(b.a,{value:"result",mdxType:"TabItem"},s()('<span class="d-inline-block" data-toggle="tooltip" tabindex="0" title="Disabled&#x20;tooltip"><button type="button" name="tooltip" disabled="disabled" class="btn&#x20;btn-primary" style="pointer-events&#x3A;&#x20;none&#x3B;" value="">Disabled button</button></span>')),Object(a.b)(b.a,{value:"source",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"echo $this->formButton([\n    'name' => 'tooltip',\n    'options' => [\n        'label' => 'Disabled button',\n        'tooltip' => 'Disabled tooltip',\n        'variant' => 'primary',\n    ],\n    'attributes' => [\n        'disabled' => true,\n    ],\n]);\n")))))}m.isMDXComponent=!0}}]);