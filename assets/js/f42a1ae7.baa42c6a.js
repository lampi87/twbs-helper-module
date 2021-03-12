(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{89:function(e,r,a){"use strict";a.r(r),a.d(r,"frontMatter",(function(){return p})),a.d(r,"metadata",(function(){return u})),a.d(r,"toc",(function(){return c})),a.d(r,"default",(function(){return v}));var s=a(3),t=a(7),n=(a(0),a(94)),i=a(95),l=a.n(i),o=a(96),b=a(97),p={id:"progress",title:"Progress"},u={unversionedId:"rendering/progress",id:"rendering/progress",isDocsHomePage:!1,title:"Progress",description:"Twitter bootstrap Documentation",source:"@site/docs/rendering/progress.mdx",slug:"/rendering/progress",permalink:"/twbs-helper-module/docs/rendering/progress",editUrl:"https://github.com/neilime/twbs-helper-module/edit/master/website/docs/rendering/progress.mdx",version:"current",sidebar:"docsSidebar",previous:{title:"Popovers",permalink:"/twbs-helper-module/docs/rendering/popovers"},next:{title:"Spinners",permalink:"/twbs-helper-module/docs/rendering/spinners"}},c=[{value:"How it works",id:"how-it-works",children:[]},{value:"Labels",id:"labels",children:[]},{value:"Height",id:"height",children:[]},{value:"Backgrounds",id:"backgrounds",children:[]},{value:"Multiple bars",id:"multiple-bars",children:[]},{value:"Striped",id:"striped",children:[]},{value:"Animated stripes",id:"animated-stripes",children:[]}],d={toc:c};function v(e){var r=e.components,a=Object(t.a)(e,["components"]);return Object(n.b)("wrapper",Object(s.a)({},d,a,{components:r,mdxType:"MDXLayout"}),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/progress/"},"Twitter bootstrap Documentation")),Object(n.b)("h2",{id:"how-it-works"},"How it works"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/progress/#example"},"Twitter bootstrap Documentation")),Object(n.b)(o.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(n.b)(b.a,{value:"result",mdxType:"TabItem"},l()('<div class="progress">\n    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="0" class="progress-bar" role="progressbar"></div>\n</div>\n<br/>\n<div class="progress">\n    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" class="progress-bar" role="progressbar" style="width&#x3A;&#x20;25&#x25;&#x3B;"></div>\n</div>\n<br/>\n<div class="progress">\n    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" class="progress-bar" role="progressbar" style="width&#x3A;&#x20;50&#x25;&#x3B;"></div>\n</div>\n<br/>\n<div class="progress">\n    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="75" class="progress-bar" role="progressbar" style="width&#x3A;&#x20;75&#x25;&#x3B;"></div>\n</div>\n<br/>\n<div class="progress">\n    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" class="progress-bar" role="progressbar" style="width&#x3A;&#x20;100&#x25;&#x3B;"></div>\n</div>')),Object(n.b)(b.a,{value:"source",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-php"},"// Display progressbar at 0%\necho $this->progressBar(0, 100);\necho PHP_EOL . '<br/>' . PHP_EOL;\n\n// Display progress bar at 25%\necho $this->progressBar(0, 100, 25);\necho PHP_EOL . '<br/>' . PHP_EOL;\n\n// Display progress bar at 50%\necho $this->progressBar(0, 100, 50);\necho PHP_EOL . '<br/>' . PHP_EOL;\n\n// Display progress bar at 75%\necho $this->progressBar(0, 100, 75);\necho PHP_EOL . '<br/>' . PHP_EOL;\n\n// Display progress bar at 100%\necho $this->progressBar(0, 100, 100);\n")))),Object(n.b)("h2",{id:"labels"},"Labels"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/progress/#labels"},"Twitter bootstrap Documentation")),Object(n.b)(o.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(n.b)(b.a,{value:"result",mdxType:"TabItem"},l()('<div class="progress">\n    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" class="progress-bar" role="progressbar" style="width&#x3A;&#x20;25&#x25;&#x3B;">\n        25%\n    </div>\n</div>')),Object(n.b)(b.a,{value:"source",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-php"},"echo $this->progressBar([\n    'show_label' => true,\n    'min' => 0,\n    'max' => 100,\n    'current' => 25,\n]);\n")))),Object(n.b)("h2",{id:"height"},"Height"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/progress/#height"},"Twitter bootstrap Documentation")),Object(n.b)(o.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(n.b)(b.a,{value:"result",mdxType:"TabItem"},l()('<div class="progress" style="height&#x3A;&#x20;1px&#x3B;">\n    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" class="progress-bar" role="progressbar" style="width&#x3A;&#x20;25&#x25;&#x3B;"></div>\n</div>\n<br/>\n<div class="progress" style="height&#x3A;&#x20;20px&#x3B;">\n    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" class="progress-bar" role="progressbar" style="width&#x3A;&#x20;25&#x25;&#x3B;"></div>\n</div>')),Object(n.b)(b.a,{value:"source",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-php"},"echo $this->progressBar([\n    'attributes' => ['style' => 'height:1px'],\n    'min' => 0,\n    'max' => 100,\n    'current' => 25,\n]);\n\necho PHP_EOL . '<br/>' . PHP_EOL;\n\necho $this->progressBar([\n    'attributes' => ['style' => 'height:20px'],\n    'min' => 0,\n    'max' => 100,\n    'current' => 25,\n]);\n")))),Object(n.b)("h2",{id:"backgrounds"},"Backgrounds"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/progress/#backgrounds"},"Twitter bootstrap Documentation")),Object(n.b)(o.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(n.b)(b.a,{value:"result",mdxType:"TabItem"},l()('<div class="progress">\n    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" class="bg-success&#x20;progress-bar" role="progressbar" style="width&#x3A;&#x20;25&#x25;&#x3B;"></div>\n</div>\n<br/>\n<div class="progress">\n    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" class="bg-info&#x20;progress-bar" role="progressbar" style="width&#x3A;&#x20;50&#x25;&#x3B;"></div>\n</div>\n<br/>\n<div class="progress">\n    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="75" class="bg-warning&#x20;progress-bar" role="progressbar" style="width&#x3A;&#x20;75&#x25;&#x3B;"></div>\n</div>\n<br/>\n<div class="progress">\n    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" class="bg-danger&#x20;progress-bar" role="progressbar" style="width&#x3A;&#x20;100&#x25;&#x3B;"></div>\n</div>\n<br/>\n')),Object(n.b)(b.a,{value:"source",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-php"},"foreach ([\n    'success' => 25,\n    'info' => 50,\n    'warning' => 75,\n    'danger' => 100,\n] as $sVariant => $iCurrent) {\n    echo $this->progressBar([\n        'variant' => $sVariant,\n        'min' => 0,\n        'max' => 100,\n        'current' => $iCurrent,\n    ]);\n    echo PHP_EOL . '<br/>' . PHP_EOL;\n}\n")))),Object(n.b)("h2",{id:"multiple-bars"},"Multiple bars"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/progress/#multiple-bars"},"Twitter bootstrap Documentation")),Object(n.b)(o.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(n.b)(b.a,{value:"result",mdxType:"TabItem"},l()('<div class="progress">\n    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="15" class="progress-bar" role="progressbar" style="width&#x3A;&#x20;15&#x25;&#x3B;"></div>\n    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="30" class="bg-success&#x20;progress-bar" role="progressbar" style="width&#x3A;&#x20;30&#x25;&#x3B;"></div>\n    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="20" class="bg-info&#x20;progress-bar" role="progressbar" style="width&#x3A;&#x20;20&#x25;&#x3B;"></div>\n</div>')),Object(n.b)(b.a,{value:"source",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-php"},"echo $this->progressBarGroup([\n    ['min' => 0, 'max' => 100, 'current' => 15],\n    ['variant' => 'success', 'min' => 0, 'max' => 100, 'current' => 30],\n    ['variant' => 'info', 'min' => 0, 'max' => 100, 'current' => 20],\n]);\n")))),Object(n.b)("h2",{id:"striped"},"Striped"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/progress/#striped"},"Twitter bootstrap Documentation")),Object(n.b)(o.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(n.b)(b.a,{value:"result",mdxType:"TabItem"},l()('<div class="progress">\n    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="10" class="progress-bar&#x20;progress-bar-striped" role="progressbar" style="width&#x3A;&#x20;10&#x25;&#x3B;"></div>\n</div>\n<br/>\n<div class="progress">\n    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" class="bg-success&#x20;progress-bar&#x20;progress-bar-striped" role="progressbar" style="width&#x3A;&#x20;25&#x25;&#x3B;"></div>\n</div>\n<br/>\n<div class="progress">\n    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" class="bg-info&#x20;progress-bar&#x20;progress-bar-striped" role="progressbar" style="width&#x3A;&#x20;50&#x25;&#x3B;"></div>\n</div>\n<br/>\n<div class="progress">\n    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="75" class="bg-warning&#x20;progress-bar&#x20;progress-bar-striped" role="progressbar" style="width&#x3A;&#x20;75&#x25;&#x3B;"></div>\n</div>\n<br/>\n<div class="progress">\n    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" class="bg-danger&#x20;progress-bar&#x20;progress-bar-striped" role="progressbar" style="width&#x3A;&#x20;100&#x25;&#x3B;"></div>\n</div>\n<br/>\n')),Object(n.b)(b.a,{value:"source",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-php"},"foreach ([\n    null => 10,\n    'success' => 25,\n    'info' => 50,\n    'warning' => 75,\n    'danger' => 100,\n] as $sVariant => $iCurrent) {\n    echo $this->progressBar([\n        'striped' => true,\n        'variant' => $sVariant,\n        'current' => $iCurrent,\n        'min' => 0,\n        'max' => 100,\n    ]);\n    echo PHP_EOL . '<br/>' . PHP_EOL;\n}\n")))),Object(n.b)("h2",{id:"animated-stripes"},"Animated stripes"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/progress/#animated-stripes"},"Twitter bootstrap Documentation")),Object(n.b)(o.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(n.b)(b.a,{value:"result",mdxType:"TabItem"},l()('<div class="progress">\n    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" class="progress-bar&#x20;progress-bar-animated&#x20;progress-bar-striped" role="progressbar" style="width&#x3A;&#x20;25&#x25;&#x3B;"></div>\n</div>')),Object(n.b)(b.a,{value:"source",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-php"},"echo $this->progressBar([\n    'striped' => true,\n    'animated' => true,\n    'current' => 25,\n    'min' => 0,\n    'max' => 100,\n]);\n")))))}v.isMDXComponent=!0}}]);