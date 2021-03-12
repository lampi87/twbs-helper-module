(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{81:function(e,n,s){"use strict";s.r(n),s.d(n,"frontMatter",(function(){return b})),s.d(n,"metadata",(function(){return c})),s.d(n,"toc",(function(){return d})),s.d(n,"default",(function(){return m}));var t=s(3),a=s(7),r=(s(0),s(94)),o=s(95),l=s.n(o),i=s(96),p=s(97),b={id:"spinners",title:"Spinners"},c={unversionedId:"rendering/spinners",id:"rendering/spinners",isDocsHomePage:!1,title:"Spinners",description:"Twitter bootstrap Documentation",source:"@site/docs/rendering/spinners.mdx",slug:"/rendering/spinners",permalink:"/twbs-helper-module/docs/rendering/spinners",editUrl:"https://github.com/neilime/twbs-helper-module/edit/master/website/docs/rendering/spinners.mdx",version:"current",sidebar:"docsSidebar",previous:{title:"Progress",permalink:"/twbs-helper-module/docs/rendering/progress"},next:{title:"Toasts",permalink:"/twbs-helper-module/docs/rendering/toasts"}},d=[{value:"Border spinner",id:"border-spinner",children:[{value:"Colors",id:"colors",children:[]}]},{value:"Growing spinner",id:"growing-spinner",children:[]},{value:"Alignment",id:"alignment",children:[{value:"Margin",id:"margin",children:[]},{value:"Placement",id:"placement",children:[]},{value:"Size",id:"size",children:[]},{value:"Buttons",id:"buttons",children:[]}]}],u={toc:d};function m(e){var n=e.components,s=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(t.a)({},u,s,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/spinners/"},"Twitter bootstrap Documentation")),Object(r.b)("h2",{id:"border-spinner"},"Border spinner"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/spinners/#border-spinner"},"Twitter bootstrap Documentation")),Object(r.b)(i.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(r.b)(p.a,{value:"result",mdxType:"TabItem"},l()('<div class="spinner-border" role="status">\n    <span class="sr-only">Loading...</span>\n</div>')),Object(r.b)(p.a,{value:"source",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},"echo $this->spinner('Loading...');\n")))),Object(r.b)("h3",{id:"colors"},"Colors"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/spinners/#colors"},"Twitter bootstrap Documentation")),Object(r.b)(i.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(r.b)(p.a,{value:"result",mdxType:"TabItem"},l()('<div class="spinner-border&#x20;text-primary" role="status">\n    <span class="sr-only">Loading...</span>\n</div>\n<div class="spinner-border&#x20;text-secondary" role="status">\n    <span class="sr-only">Loading...</span>\n</div>\n<div class="spinner-border&#x20;text-success" role="status">\n    <span class="sr-only">Loading...</span>\n</div>\n<div class="spinner-border&#x20;text-danger" role="status">\n    <span class="sr-only">Loading...</span>\n</div>\n<div class="spinner-border&#x20;text-warning" role="status">\n    <span class="sr-only">Loading...</span>\n</div>\n<div class="spinner-border&#x20;text-info" role="status">\n    <span class="sr-only">Loading...</span>\n</div>\n<div class="spinner-border&#x20;text-light" role="status">\n    <span class="sr-only">Loading...</span>\n</div>\n<div class="spinner-border&#x20;text-dark" role="status">\n    <span class="sr-only">Loading...</span>\n</div>\n')),Object(r.b)(p.a,{value:"source",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},"foreach ([\n    'primary', 'secondary', 'success', 'danger',\n    'warning', 'info', 'light', 'dark',\n] as $sVariant) {\n    echo $this->spinner([\n        'variant' => $sVariant,\n        'label' => 'Loading...',\n    ]) . PHP_EOL;\n}\n")))),Object(r.b)("h2",{id:"growing-spinner"},"Growing spinner"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/spinners/#growing-spinner"},"Twitter bootstrap Documentation")),Object(r.b)(i.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(r.b)(p.a,{value:"result",mdxType:"TabItem"},l()('<div class="spinner-grow" role="status">\n    <span class="sr-only">Loading...</span>\n</div>\n<br/>\n<div class="spinner-grow&#x20;text-primary" role="status">\n    <span class="sr-only">Loading...</span>\n</div>\n<div class="spinner-grow&#x20;text-secondary" role="status">\n    <span class="sr-only">Loading...</span>\n</div>\n<div class="spinner-grow&#x20;text-success" role="status">\n    <span class="sr-only">Loading...</span>\n</div>\n<div class="spinner-grow&#x20;text-danger" role="status">\n    <span class="sr-only">Loading...</span>\n</div>\n<div class="spinner-grow&#x20;text-warning" role="status">\n    <span class="sr-only">Loading...</span>\n</div>\n<div class="spinner-grow&#x20;text-info" role="status">\n    <span class="sr-only">Loading...</span>\n</div>\n<div class="spinner-grow&#x20;text-light" role="status">\n    <span class="sr-only">Loading...</span>\n</div>\n<div class="spinner-grow&#x20;text-dark" role="status">\n    <span class="sr-only">Loading...</span>\n</div>\n')),Object(r.b)(p.a,{value:"source",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},"echo $this->spinner(['type' => 'grow', 'label' => 'Loading...']);\n\necho PHP_EOL . '<br/>' . PHP_EOL;\n\nforeach ([\n    'primary', 'secondary', 'success', 'danger',\n    'warning', 'info', 'light', 'dark',\n] as $sVariant) {\n    echo $this->spinner([\n        'variant' => $sVariant,\n        'type' => 'grow',\n        'label' => 'Loading...',\n    ]) . PHP_EOL;\n}\n")))),Object(r.b)("h2",{id:"alignment"},"Alignment"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/spinners/#alignment"},"Twitter bootstrap Documentation")),Object(r.b)("h3",{id:"margin"},"Margin"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/spinners/#margin"},"Twitter bootstrap Documentation")),Object(r.b)(i.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(r.b)(p.a,{value:"result",mdxType:"TabItem"},l()('<div class="m-5&#x20;spinner-border" role="status">\n    <span class="sr-only">Loading...</span>\n</div>')),Object(r.b)(p.a,{value:"source",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},"echo $this->spinner([\n    'margin' => 5,\n    'label' => 'Loading...',\n]);\n")))),Object(r.b)("h3",{id:"placement"},"Placement"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/spinners/#placement"},"Twitter bootstrap Documentation")),Object(r.b)("h4",{id:"flex"},"Flex"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/spinners/#flex"},"Twitter bootstrap Documentation")),Object(r.b)(i.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(r.b)(p.a,{value:"result",mdxType:"TabItem"},l()('<div class="d-flex&#x20;justify-content-center">\n    <div class="spinner-border" role="status">\n        <span class="sr-only">Loading...</span>\n    </div>\n</div>\n<br/>\n<div class="align-items-center&#x20;d-flex">\n    <strong>Loading...</strong>\n    <div aria-hidden="true" class="ml-auto&#x20;spinner-border" role="status"></div>\n</div>')),Object(r.b)(p.a,{value:"source",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},"echo $this->spinner([\n    'placement' => 'center',\n    'label' => 'Loading...',\n]);\n\necho PHP_EOL . '<br/>' . PHP_EOL;\n\necho $this->spinner([\n    'placement' => 'center',\n    'label' => 'Loading...',\n    'show_label' => true,\n]);\n")))),Object(r.b)("h4",{id:"floats"},"Floats"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/spinners/#floats"},"Twitter bootstrap Documentation")),Object(r.b)(i.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(r.b)(p.a,{value:"result",mdxType:"TabItem"},l()('<div class="clearfix">\n    <div class="float-right&#x20;spinner-border" role="status">\n        <span class="sr-only">Loading...</span>\n    </div>\n</div>')),Object(r.b)(p.a,{value:"source",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},"echo $this->spinner([\n    'placement' => 'right',\n    'label' => 'Loading...',\n]);\n")))),Object(r.b)("h4",{id:"text-align"},"Text align"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/spinners/#text-align"},"Twitter bootstrap Documentation")),Object(r.b)(i.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(r.b)(p.a,{value:"result",mdxType:"TabItem"},l()('<div class="text-center">\n    <div class="spinner-border" role="status">\n        <span class="sr-only">Loading...</span>\n    </div>\n</div>')),Object(r.b)(p.a,{value:"source",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},"echo $this->spinner([\n    'placement' => 'text-center',\n    'label' => 'Loading...',\n]);\n")))),Object(r.b)("h3",{id:"size"},"Size"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/spinners/#size"},"Twitter bootstrap Documentation")),Object(r.b)(i.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(r.b)(p.a,{value:"result",mdxType:"TabItem"},l()('<div class="spinner-border&#x20;spinner-border-sm" role="status">\n    <span class="sr-only">Loading...</span>\n</div>\n<div class="spinner-grow&#x20;spinner-grow-sm" role="status">\n    <span class="sr-only">Loading...</span>\n</div>\n<br/><br/>\n<div class="spinner-border" role="status" style="height&#x3A;&#x20;3rem&#x3B;width&#x3A;&#x20;3rem&#x3B;">\n    <span class="sr-only">Loading...</span>\n</div>\n<div class="spinner-grow" role="status" style="height&#x3A;&#x20;3rem&#x3B;width&#x3A;&#x20;3rem&#x3B;">\n    <span class="sr-only">Loading...</span>\n</div>')),Object(r.b)(p.a,{value:"source",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},"echo $this->spinner([\n    'size' => 'sm',\n    'label' => 'Loading...',\n]) . PHP_EOL;\n\necho $this->spinner([\n    'size' => 'sm',\n    'type' => 'grow',\n    'label' => 'Loading...',\n]);\n\necho PHP_EOL . '<br/><br/>' . PHP_EOL;\n\necho $this->spinner([\n    'attributes' => ['style' => 'width: 3rem; height: 3rem;'],\n    'label' => 'Loading...',\n]) . PHP_EOL;\n\necho $this->spinner([\n    'attributes' => ['style' => 'width: 3rem; height: 3rem;'],\n    'type' => 'grow',\n    'label' => 'Loading...',\n]);\n")))),Object(r.b)("h3",{id:"buttons"},"Buttons"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/spinners/#buttons"},"Twitter bootstrap Documentation")),Object(r.b)(i.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(r.b)(p.a,{value:"result",mdxType:"TabItem"},l()('<button type="button" name="button" disabled="disabled" class="btn&#x20;btn-primary" value=""><span aria-hidden="true" class="spinner-border&#x20;spinner-border-sm" role="status"><span class="sr-only">Loading...</span></span></button>\n<button type="button" name="button" disabled="disabled" class="btn&#x20;btn-primary" value="">\n    <span aria-hidden="true" class="spinner-border&#x20;spinner-border-sm" role="status"></span>\n    Loading...\n</button>\n<br/><br/>\n<button type="button" name="button" disabled="disabled" class="btn&#x20;btn-primary" value=""><span aria-hidden="true" class="spinner-grow&#x20;spinner-grow-sm" role="status"><span class="sr-only">Loading...</span></span></button>\n<button type="button" name="button" disabled="disabled" class="btn&#x20;btn-primary" value="">\n    <span aria-hidden="true" class="spinner-grow&#x20;spinner-grow-sm" role="status"></span>\n    Loading...\n</button>')),Object(r.b)(p.a,{value:"source",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},"echo $this->formButton([\n    'options' => [\n        'spinner' => 'Loading...',\n        'variant' => 'primary',\n    ],\n    'attributes' => ['disabled' => true],\n]) . PHP_EOL;\n\necho $this->formButton([\n    'options' => [\n        'label' => 'Loading...',\n        'spinner' => true,\n        'variant' => 'primary',\n    ],\n    'attributes' => ['disabled' => true],\n]);\n\necho PHP_EOL . '<br/><br/>' . PHP_EOL;\n\necho $this->formButton([\n    'options' => [\n        'spinner' => [\n            'type' => 'grow',\n            'label' => 'Loading...',\n        ],\n        'variant' => 'primary',\n    ],\n    'attributes' => ['disabled' => true],\n]) . PHP_EOL;\n\necho $this->formButton([\n    'options' => [\n        'label' => 'Loading...',\n        'spinner' => ['type' => 'grow'],\n        'variant' => 'primary',\n    ],\n    'attributes' => ['disabled' => true],\n]);\n")))))}m.isMDXComponent=!0}}]);