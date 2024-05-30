"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7417],{48537:function(e,a,n){n.d(a,{q:function(){return r}});var t=n(36164);n(3546);var s=n(28312),l=n(31458),i=n(81565);function r(e){let{className:a,value:n,onCopyContent:r,...o}=e,{isCopied:f,copyToClipboard:c}=(0,s.m)({timeout:2e3,onCopyContent:r});return n?(0,t.jsxs)(l.z,{variant:"ghost",size:"icon",className:a,onClick:()=>{f||c(n)},...o,children:[f?(0,t.jsx)(i.IconCheck,{className:"text-green-600"}):(0,t.jsx)(i.IconCopy,{}),(0,t.jsx)("span",{className:"sr-only",children:"Copy"})]}):null}},95623:function(e,a,n){n.d(a,{JH:function(){return p},KM:function(){return h},Vc:function(){return v},fD:function(){return b},rG:function(){return x},x5:function(){return g}});var t=n(36164),s=n(3546),l=n(24685),i=n(74630),r=n(16234),o=n(23455),f=n(74248),c=n(84942),m=n(82394);let u=s.createContext({}),d=c.xp,p=s.forwardRef((e,a)=>(0,t.jsx)(c.tW,{...e,ref:a}));p.displayName="SearchableSelectAnchor";let x=s.forwardRef((e,a)=>{let{getInputProps:n}=s.useContext(u),{onKeyDown:l,onChange:f,onInput:c,onBlur:m,onClick:d,...p}=e;return(0,t.jsx)(o.Z,{...n((0,r.Z)({onKeyDown:l,onChange:f,onInput:c,onBlur:m,onClick:d,ref:a},i.Z)),...p})});x.displayName="SearchableSelectTextarea";let h=s.forwardRef((e,a)=>{let{getInputProps:n}=s.useContext(u),{onKeyDown:l,onChange:o,onInput:f,onBlur:c,onClick:d,...p}=e;return(0,t.jsx)(m.I,{...n((0,r.Z)({onKeyDown:l,onChange:o,onInput:f,onBlur:c,onClick:d,ref:a},i.Z)),...p})});h.displayName="SearchableSelectInput";let b=s.forwardRef((e,a)=>{let{children:n,style:l,popupMatchAnchorWidth:i,...r}=e,{getMenuProps:o,anchorRef:f}=s.useContext(u),m=s.useRef(void 0);return s.useLayoutEffect(()=>{if(i){let e=f.current;if(e){let a=e.getBoundingClientRect();m.current=a.width}}},[]),(0,t.jsx)(c.i9,{children:(0,t.jsx)(c.yk,{align:"start",onOpenAutoFocus:e=>e.preventDefault(),style:{width:m.current,...l},...o({ref:a},{suppressRefError:!0}),...r,children:n})})});b.displayName="SearchableSelectContent";let g=s.forwardRef((e,a)=>{let{item:n,index:l,className:i,children:r,disabled:o,...c}=e,{highlightedIndex:m,selectedItem:p,getItemProps:x}=s.useContext(u),h=m===l,b=p===n;return(0,t.jsx)(d,{asChild:!0,children:(0,t.jsx)("div",{className:(0,f.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",h&&"bg-accent text-accent-foreground",b&&"font-bold",o&&"pointer-events-none opacity-50",i),...x({item:n,index:l,onMouseLeave:e=>e.preventDefault(),onMouseOut:e=>e.preventDefault()}),...c,children:"function"==typeof r?r({highlighted:h,selected:b}):r})},n.id)});function v(e){let{options:a,onSelect:n,children:r,open:o,onOpenChange:f,stayOpenOnInputClick:m}=e,d=s.useRef(null),p=s.useCallback((e,a)=>{let{type:n,changes:t}=a;switch(n){case l.Kb.stateChangeTypes.MenuMouseLeave:return{...t,highlightedIndex:e.highlightedIndex};case l.Kb.stateChangeTypes.InputClick:let s=!!m||t.isOpen;return{...t,isOpen:s};default:return t}},[m]),x=(0,l.Kb)({items:null!=a?a:[],defaultIsOpen:o,onSelectedItemChange(e){let{selectedItem:a}=e;a&&(null==n||n(a),null==f||f(!1))},onIsOpenChange:e=>{let{isOpen:a}=e;null==f||f(!!a)},stateReducer:p}),{setHighlightedIndex:h,highlightedIndex:b}=x,g=(0,i.Z)(o)?x.isOpen:x.isOpen&&o;s.useEffect(()=>{g&&(null==a?void 0:a.length)&&-1===b&&h(0)},[g,a]);let v=s.useMemo(()=>({...x,open:g,anchorRef:d}),[x,g,d]);return(0,t.jsx)(u.Provider,{value:v,children:(0,t.jsx)(c.J2,{open:g,children:"function"==typeof r?r(v):r})})}g.displayName="SearchableSelectOption"},90379:function(e,a,n){n.d(a,{PF:function(){return o},cg:function(){return i},tB:function(){return r}});var t=n(36164),s=n(74248),l=n(3448);let i=e=>{let{className:a,...n}=e;return(0,t.jsxs)("div",{className:(0,s.cn)("space-y-3",a),...n,children:[(0,t.jsx)(l.O,{className:"h-4 w-full"}),(0,t.jsx)(l.O,{className:"h-4 w-full"}),(0,t.jsx)(l.O,{className:"h-4 w-full"}),(0,t.jsx)(l.O,{className:"h-4 w-full"})]})},r=e=>{let{className:a,...n}=e;return(0,t.jsx)(l.O,{className:(0,s.cn)("h-4 w-full",a),...n})},o=e=>{let{className:a,...n}=e;return(0,t.jsxs)("div",{className:(0,s.cn)("flex flex-col gap-3",a),...n,children:[(0,t.jsx)(l.O,{className:"h-4 w-[20%]"}),(0,t.jsx)(l.O,{className:"h-4 w-full"}),(0,t.jsx)(l.O,{className:"h-4 w-[20%]"}),(0,t.jsx)(l.O,{className:"h-4 w-full"})]})}},31458:function(e,a,n){n.d(a,{d:function(){return o},z:function(){return f}});var t=n(36164),s=n(3546),l=n(74047),i=n(14375),r=n(74248);let o=(0,i.j)("inline-flex items-center justify-center rounded-md text-sm font-medium shadow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-md hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90","hover-destructive":"shadow-none hover:bg-destructive/90 hover:text-destructive-foreground",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"shadow-none hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 shadow-none hover:underline"},size:{default:"h-8 px-4 py-2",sm:"h-8 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-8 w-8 p-0"}},defaultVariants:{variant:"default",size:"default"}}),f=s.forwardRef((e,a)=>{let{className:n,variant:s,size:i,asChild:f=!1,...c}=e,m=f?l.g7:"button";return(0,t.jsx)(m,{className:(0,r.cn)(o({variant:s,size:i,className:n})),ref:a,...c})});f.displayName="Button"},82394:function(e,a,n){n.d(a,{I:function(){return i}});var t=n(36164),s=n(3546),l=n(74248);let i=s.forwardRef((e,a)=>{let{className:n,type:s,...i}=e;return(0,t.jsx)("input",{type:s,className:(0,l.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",n),ref:a,...i})});i.displayName="Input"},84942:function(e,a,n){n.d(a,{J2:function(){return r},i9:function(){return c},tW:function(){return m},xo:function(){return o},xp:function(){return f},yk:function(){return u}});var t=n(36164),s=n(3546),l=n(83299),i=n(74248);let r=l.fC,o=l.xz,f=l.x8,c=l.h_,m=l.ee,u=s.forwardRef((e,a)=>{let{className:n,sideOffset:s=4,...r}=e;return(0,t.jsx)(l.VY,{ref:a,sideOffset:s,className:(0,i.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...r})});u.displayName=l.VY.displayName},11208:function(e,a,n){n.d(a,{Z:function(){return r}});var t=n(36164),s=n(3546),l=n(74225),i=n(74248);let r=s.forwardRef((e,a)=>{let{className:n,orientation:s="horizontal",decorative:r=!0,...o}=e;return(0,t.jsx)(l.f,{ref:a,decorative:r,orientation:s,className:(0,i.cn)("shrink-0 bg-border","horizontal"===s?"h-[1px] w-full":"h-full w-[1px]",n),...o})});r.displayName=l.f.displayName},3448:function(e,a,n){n.d(a,{O:function(){return l}});var t=n(36164),s=n(74248);function l(e){let{className:a,...n}=e;return(0,t.jsx)("div",{className:(0,s.cn)("h-4 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700",a),...n})}},29:function(e,a,n){n.d(a,{_v:function(){return c},aJ:function(){return f},pn:function(){return r},u:function(){return o}});var t=n(36164),s=n(3546),l=n(44421),i=n(74248);let r=l.zt,o=l.fC,f=l.xz,c=s.forwardRef((e,a)=>{let{className:n,sideOffset:s=4,...r}=e;return(0,t.jsx)(l.VY,{ref:a,sideOffset:s,className:(0,i.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-xs font-medium text-popover-foreground shadow-md animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",n),...r})});c.displayName=l.VY.displayName},28312:function(e,a,n){n.d(a,{m:function(){return r}});var t=n(3546),s=n(61200),l=n.n(s),i=n(2578);function r(e){let{timeout:a=2e3,onError:n,onCopyContent:s}=e,[r,o]=t.useState(!1),f=()=>{o(!0),setTimeout(()=>{o(!1)},a)},c=e=>{if("function"==typeof n){null==n||n(e);return}i.A.error("Failed to copy.")};return{isCopied:r,copyToClipboard:e=>{var a;if(e){if(s){s(e),f();return}if(null===(a=navigator.clipboard)||void 0===a?void 0:a.writeText)navigator.clipboard.writeText(e).then(f).catch(c);else{let a=l()(e);a?f():c()}}}}}},24449:function(e,a,n){n.d(a,{S:function(){return r},n:function(){return o}});var t=n(3546),s=n(45391),l=n(16784);let i=e=>{let a=(0,l.d)(e);t.useEffect(()=>()=>{a.current()},[])};function r(e,a,n){let r=(0,l.d)(e),o=t.useMemo(()=>(0,s.Z)(function(){for(var e=arguments.length,a=Array(e),n=0;n<e;n++)a[n]=arguments[n];return r.current(...a)},a,n),[]);return i(()=>o.cancel()),{run:o,cancel:o.cancel,flush:o.flush}}function o(e,a,n){let[s,l]=t.useState(e),{run:i}=r(()=>{l(e)},a,n);return t.useEffect(()=>{i()},[e]),[s,l]}},16784:function(e,a,n){n.d(a,{d:function(){return s}});var t=n(3546);function s(e){let a=t.useRef(e);return a.current=e,a}},98454:function(e,a,n){n.d(a,{P:function(){return i}});var t=n(40055),s=n(43240);let l=(0,s.BX)("\n  query MeQuery {\n    me {\n      id\n      authToken\n      email\n      isAdmin\n      isPasswordSet\n      name\n    }\n  }\n"),i=()=>(0,t.aM)({query:l})},63484:function(e,a,n){n.d(a,{U$:function(){return m},zV:function(){return d},t:function(){return u}});var t=n(14283),s=n.n(t),l=n(34021),i=n(74630),r=n(18500),o=JSON.parse('{"Mercury":"#ff2b2b","TypeScript":"#2b7489","PureBasic":"#5a6986","Objective-C++":"#6866fb","Self":"#0579aa","edn":"#db5855","NewLisp":"#87AED7","Jupyter Notebook":"#DA5B0B","Rebol":"#358a5b","Frege":"#00cafe","Dart":"#00B4AB","AspectJ":"#a957b0","Shell":"#89e051","Web Ontology Language":"#9cc9dd","xBase":"#403a40","Eiffel":"#946d57","Nix":"#7e7eff","RAML":"#77d9fb","MTML":"#b7e1f4","Racket":"#22228f","Elixir":"#6e4a7e","SAS":"#B34936","Agda":"#315665","wisp":"#7582D1","D":"#ba595e","Kotlin":"#F18E33","Opal":"#f7ede0","Crystal":"#776791","Objective-C":"#438eff","ColdFusion CFC":"#ed2cd6","Oz":"#fab738","Mirah":"#c7a938","Objective-J":"#ff0c5a","Gosu":"#82937f","FreeMarker":"#0050b2","Ruby":"#701516","Component Pascal":"#b0ce4e","Arc":"#aa2afe","Brainfuck":"#2F2530","Nit":"#009917","APL":"#5A8164","Go":"#375eab","Visual Basic":"#945db7","PHP":"#4F5D95","Cirru":"#ccccff","SQF":"#3F3F3F","Glyph":"#e4cc98","Java":"#b07219","MAXScript":"#00a6a6","Scala":"#DC322F","Makefile":"#427819","ColdFusion":"#ed2cd6","Perl":"#0298c3","Lua":"#000080","Vue":"#2c3e50","Verilog":"#b2b7f8","Factor":"#636746","Haxe":"#df7900","Pure Data":"#91de79","Forth":"#341708","Red":"#ee0000","Hy":"#7790B2","Volt":"#1F1F1F","LSL":"#3d9970","eC":"#913960","CoffeeScript":"#244776","HTML":"#e44b23","Lex":"#DBCA00","API Blueprint":"#2ACCA8","Swift":"#ffac45","C":"#555555","AutoHotkey":"#6594b9","Isabelle":"#FEFE00","Metal":"#8f14e9","Clarion":"#db901e","JSONiq":"#40d47e","Boo":"#d4bec1","AutoIt":"#1C3552","Clojure":"#db5855","Rust":"#dea584","Prolog":"#74283c","SourcePawn":"#5c7611","AMPL":"#E6EFBB","FORTRAN":"#4d41b1","ANTLR":"#9DC3FF","Harbour":"#0e60e3","Tcl":"#e4cc98","BlitzMax":"#cd6400","PigLatin":"#fcd7de","Lasso":"#999999","ECL":"#8a1267","VHDL":"#adb2cb","Elm":"#60B5CC","Propeller Spin":"#7fa2a7","X10":"#4B6BEF","IDL":"#a3522f","ATS":"#1ac620","Ada":"#02f88c","Unity3D Asset":"#ab69a1","Nu":"#c9df40","LFE":"#004200","SuperCollider":"#46390b","Oxygene":"#cdd0e3","ASP":"#6a40fd","Assembly":"#6E4C13","Gnuplot":"#f0a9f0","JFlex":"#DBCA00","NetLinx":"#0aa0ff","Turing":"#45f715","Vala":"#fbe5cd","Processing":"#0096D8","Arduino":"#bd79d1","FLUX":"#88ccff","NetLogo":"#ff6375","CSharp":"#178600","CSS":"#563d7c","Emacs Lisp":"#c065db","Stan":"#b2011d","SaltStack":"#646464","QML":"#44a51c","Pike":"#005390","LOLCODE":"#cc9900","ooc":"#b0b77e","Handlebars":"#01a9d6","J":"#9EEDFF","Mask":"#f97732","EmberScript":"#FFF4F3","TeX":"#3D6117","Nemerle":"#3d3c6e","KRL":"#28431f","Ren\'Py":"#ff7f7f","Unified Parallel C":"#4e3617","Golo":"#88562A","Fancy":"#7b9db4","OCaml":"#3be133","Shen":"#120F14","Pascal":"#b0ce4e","F#":"#b845fc","Puppet":"#302B6D","ActionScript":"#882B0F","Diff":"#88dddd","Ragel in Ruby Host":"#9d5200","Fantom":"#dbded5","Zephir":"#118f9e","Click":"#E4E6F3","Smalltalk":"#596706","DM":"#447265","Ioke":"#078193","PogoScript":"#d80074","LiveScript":"#499886","JavaScript":"#f1e05a","VimL":"#199f4b","PureScript":"#1D222D","ABAP":"#E8274B","Matlab":"#bb92ac","Slash":"#007eff","R":"#198ce7","Erlang":"#B83998","Pan":"#cc0000","LookML":"#652B81","Eagle":"#814C05","Scheme":"#1e4aec","PLSQL":"#dad8d8","Python":"#3572A5","Max":"#c4a79c","Common Lisp":"#3fb68b","Latte":"#A8FF97","XQuery":"#5232e7","Omgrofl":"#cabbff","XC":"#99DA07","Nimrod":"#37775b","SystemVerilog":"#DAE1C2","Chapel":"#8dc63f","Groovy":"#e69f56","Dylan":"#6c616e","E":"#ccce35","Parrot":"#f3ca0a","Grammatical Framework":"#79aa7a","Game Maker Language":"#8fb200","Papyrus":"#6600cc","NetLinx+ERB":"#747faa","Clean":"#3F85AF","Alloy":"#64C800","Squirrel":"#800000","PAWN":"#dbb284","UnrealScript":"#a54c4d","Standard ML":"#dc566d","Slim":"#ff8f77","Perl6":"#0000fb","Julia":"#a270ba","Haskell":"#29b544","NCL":"#28431f","Io":"#a9188d","Rouge":"#cc0088","cpp":"#f34b7d","AGS Script":"#B9D9FF","Dogescript":"#cca760","nesC":"#94B0C7"}'),f={abap:{filenames:[],extnames:["abap"]},actionscript:{filenames:[],extnames:["as"]},ada:{filenames:[],extnames:["ada","adb","ads"]},apacheconf:{filenames:[".htaccess","apache2.conf","httpd.conf"],extnames:["apacheconf","vhost"]},apl:{filenames:[],extnames:["apl","dyalog"]},applescript:{filenames:[],extnames:["applescript","scpt"]},arff:{filenames:[],extnames:["arff"]},asciidoc:{filenames:[],extnames:["asciidoc","adoc","asc"]},asm6502:{filenames:[],extnames:["asm"]},autohotkey:{filenames:[],extnames:["ahk","ahkl"]},autoit:{filenames:[],extnames:["au3"]},bash:{filenames:[".bash_history",".bash_logout",".bash_profile",".bashrc",".cshrc",".login",".profile",".zlogin",".zlogout",".zprofile",".zshenv",".zshrc","9fs","PKGBUILD","bash_logout","bash_profile","bashrc","cshrc","gradlew","login","man","profile","zlogin","zlogout","zprofile","zshenv","zshrc"],extnames:["sh","bash","bats","cgi","command","fcgi","ksh","tmux","tool","zsh"]},basic:{filenames:[],extnames:["vb","bas","cls","frm","frx","vba","vbhtml","vbs"]},batch:{filenames:[],extnames:["bat","cmd"]},bison:{filenames:[],extnames:["bison"]},brainfuck:{filenames:[],extnames:["b","bf"]},bro:{filenames:[],extnames:["bro"]},c:{filenames:[],extnames:["c","cats","h","idc"]},csharp:{filenames:[],extnames:["cs","cake","cshtml","csx"]},cpp:{filenames:[],extnames:["cpp","c++","cc","cp","cxx","h","h++","hh","hpp","hxx","inc","inl","ino","ipp","re","tcc","tpp"]},coffeescript:{filenames:["Cakefile"],extnames:["coffee","_coffee","cake","cjsx","iced"]},clojure:{filenames:["riemann.config"],extnames:["clj","boot","cl2","cljc","cljs","cljs.hl","cljscm","cljx","hic"]},crystal:{filenames:[],extnames:["cr"]},css:{filenames:[],extnames:["css"]},d:{filenames:[],extnames:["d","di"]},dart:{filenames:[],extnames:["dart"]},diff:{filenames:[],extnames:["diff","patch"]},django:{filenames:[],extnames:["jinja","jinja2","mustache","njk"]},dockerfile:{filenames:["Dockerfile"],extnames:["dockerfile"]},eiffel:{filenames:[],extnames:["e"]},elixir:{filenames:["mix.lock"],extnames:["ex","exs"]},elm:{filenames:[],extnames:["elm"]},erb:{filenames:[],extnames:["erb"]},erlang:{filenames:["Emakefile","rebar.config","rebar.config.lock","rebar.lock"],extnames:["erl","app.src","es","escript","hrl","xrl","yrl"]},fsharp:{filenames:[],extnames:["fs","fsi","fsx"]},fortran:{filenames:[],extnames:["f90","f","f03","f08","f77","f95","for","fpp"]},gedcom:{filenames:[],extnames:["ged"]},gherkin:{filenames:[],extnames:["feature"]},glsl:{filenames:[],extnames:["glsl","fp","frag","frg","fs","fsh","fshader","geo","geom","glslv","gshader","shader","tesc","tese","vert","vrx","vsh","vshader"]},go:{filenames:[],extnames:["go"]},graphql:{filenames:[],extnames:["graphql","gql"]},groovy:{filenames:["Jenkinsfile"],extnames:["groovy","grt","gtpl","gvy"]},haml:{filenames:[],extnames:["haml"]},handlebars:{filenames:[],extnames:["handlebars","hbs"]},haskell:{filenames:[],extnames:["hs","hsc"]},haxe:{filenames:[],extnames:["hx","hxsl"]},http:{filenames:[],extnames:["http"]},icon:{filenames:[],extnames:["icn"]},inform7:{filenames:[],extnames:["ni","i7x"]},ini:{filenames:[".editorconfig",".gitconfig"],extnames:["ini","cfg","lektorproject","prefs","pro","properties"]},io:{filenames:[],extnames:["io"]},j:{filenames:[],extnames:["ijs"]},java:{filenames:[],extnames:["java"]},javascript:{filenames:["Jakefile"],extnames:["js","_js","cjs","bones","es","es6","frag","gs","jake","jsb","jscad","jsfl","jsm","jss","mjs","njs","pac","sjs","ssjs","xsjs","xsjslib"]},jolie:{filenames:[],extnames:["ol","iol"]},json:{filenames:[".arcconfig",".htmlhintrc",".tern-config",".tern-project","composer.lock","mcmod.info"],extnames:["json","avsc","geojson","gltf","JSON-tmLanguage","jsonl","tfstate","topojson","webapp","webmanifest","yy","yyp"]},julia:{filenames:[],extnames:["jl"]},keyman:{filenames:[],extnames:["kmn"]},kotlin:{filenames:[],extnames:["kt","ktm","kts"]},latex:{filenames:[],extnames:["tex","aux","bbx","bib","cbx","cls","dtx","ins","lbx","ltx","mkii","mkiv","mkvi","sty","toc"]},less:{filenames:[],extnames:["less"]},liquid:{filenames:[],extnames:["liquid"]},lisp:{filenames:[],extnames:["lisp","asd","cl","l","lsp","ny","podsl","sexp"]},livescript:{filenames:["Slakefile"],extnames:["ls","_ls"]},lolcode:{filenames:[],extnames:["lol"]},lua:{filenames:[],extnames:["lua","fcgi","nse","p8","pd_lua","rbxs","wlua"]},cmake:{filenames:["BSDmakefile","GNUmakefile","Kbuild","Makefile","Makefile.am","Makefile.boot","Makefile.frag","Makefile.in","Makefile.inc","Makefile.wat","makefile","makefile.sco","mkfile"],extnames:["mak","d","make","mk","mkfile"]},markdown:{filenames:["contents.lr","LICENSE"],extnames:["md","markdown","mdown","mdwn","mkd","mkdn","mkdown","ronn","workbook"]},markup:{filenames:[],extnames:["apib","blade","chem","ecr","eex","ejs","html","htm","ipynb","kit","latte","marko","mask","mtml","phtml","pic","raml","rhtml","vue","xht","xhtml"]},matlab:{filenames:[],extnames:["matlab","m"]},mel:{filenames:[],extnames:["mel"]},mizar:{filenames:[],extnames:["miz","voc"]},monkey:{filenames:[],extnames:["monkey","monkey2"]},n4js:{filenames:[],extnames:["n4jsd"]},nasm:{filenames:[],extnames:["nasm"]},nginx:{filenames:["nginx.conf"],extnames:["nginxconf","vhost"]},nim:{filenames:[],extnames:["nim","nimrod"]},nix:{filenames:[],extnames:["nix"]},nsis:{filenames:[],extnames:["nsi","nsh"]},objectivec:{filenames:[],extnames:["m","h"]},ocaml:{filenames:[],extnames:["ml","eliom","eliomi","ml4","mli","mll","mly"]},opencl:{filenames:[],extnames:["opencl","cl"]},oz:{filenames:[],extnames:["oz"]},pascal:{filenames:[],extnames:["pas","dfm","dpr","inc","lpr","pascal","pp"]},perl:{filenames:["Makefile.PL","Rexfile","ack","cpanfile"],extnames:["pl","al","cgi","fcgi","perl","ph","plx","pm","psgi","t"]},php:{filenames:[".php",".php_cs",".php_cs.dist","Phakefile"],extnames:["php","aw","ctp","fcgi","inc","php3","php4","php5","phps","phpt"]},plsql:{filenames:[],extnames:["pls","bdy","ddl","fnc","pck","pkb","pks","plb","plsql","prc","spc","tpb","tps","trg","vw"]},powershell:{filenames:[],extnames:["ps1","psd1","psm1"]},processing:{filenames:[],extnames:["pde"]},prolog:{filenames:[],extnames:["pl","pro","prolog","yap"]},properties:{filenames:[],extnames:["properties"]},protobuf:{filenames:[],extnames:["proto"]},pug:{filenames:[],extnames:["jade","pug"]},puppet:{filenames:["Modulefile"],extnames:["pp"]},pure:{filenames:[],extnames:["pure"]},python:{filenames:[".gclient","BUCK","BUILD","BUILD.bazel","SConscript","SConstruct","Snakefile","WORKSPACE","wscript"],extnames:["py","bzl","cgi","fcgi","gyp","gypi","lmi","py3","pyde","pyi","pyp","pyt","pyw","rpy","spec","tac","wsgi","xpy"]},q:{filenames:[],extnames:["q"]},qore:{filenames:[],extnames:["q","qm","qtest"]},r:{filenames:[".Rprofile","expr-dist"],extnames:["r","rd","rsx"]},jsx:{filenames:[],extnames:["jsx"]},toml:{filenames:[],extnames:["toml"]},tsx:{filenames:[],extnames:["tsx"]},renpy:{filenames:[],extnames:["rpy"]},reason:{filenames:[],extnames:["re","rei"]},rest:{filenames:[],extnames:["rst","rest"]},rip:{filenames:[],extnames:["rip"]},ruby:{filenames:[".irbrc",".pryrc","Appraisals","Berksfile","Brewfile","Buildfile","Capfile","Dangerfile","Deliverfile","Fastfile","Gemfile","Gemfile.lock","Guardfile","Jarfile","Mavenfile","Podfile","Puppetfile","Rakefile","Snapfile","Thorfile","Vagrantfile","buildfile"],extnames:["rb","builder","eye","fcgi","gemspec","god","jbuilder","mspec","pluginspec","podspec","rabl","rake","rbuild","rbw","rbx","ru","ruby","spec","thor","watchr"]},rust:{filenames:[],extnames:["rs"]},sas:{filenames:[],extnames:["sas"]},sass:{filenames:[],extnames:["sass"]},scss:{filenames:[],extnames:["scss"]},scala:{filenames:[],extnames:["scala","kojo","sbt","sc"]},scheme:{filenames:[],extnames:["scm","sch","sld","sls","sps","ss"]},smalltalk:{filenames:[],extnames:["st","cs"]},smarty:{filenames:[],extnames:["tpl"]},sql:{filenames:[],extnames:["sql","cql","ddl","inc","mysql","prc","tab","udf","viw"]},soy:{filenames:[],extnames:["soy"]},stylus:{filenames:[],extnames:["styl"]},swift:{filenames:[],extnames:["swift"]},tcl:{filenames:["owh","starfield"],extnames:["tcl","adp","tm"]},textile:{filenames:[],extnames:["textile"]},tt2:{filenames:[],extnames:["pm"]},twig:{filenames:[],extnames:["twig"]},typescript:{filenames:[],extnames:["ts"]},velocity:{filenames:[],extnames:["vm"]},verilog:{filenames:[],extnames:["v","veo"]},vhdl:{filenames:[],extnames:["vhdl","vhd","vhf","vhi","vho","vhs","vht","vhw"]},vim:{filenames:[".gvimrc",".nvimrc",".vimrc","_vimrc","gvimrc","nvimrc","vimrc"],extnames:["vim"]},"visual-basic":{filenames:[],extnames:["vb","bas","cls","frm","frx","vba","vbhtml","vbs"]},wasm:{filenames:[],extnames:["wast","wat"]},xojo:{filenames:[],extnames:["xojo_code","xojo_menu","xojo_report","xojo_script","xojo_toolbar","xojo_window"]},xquery:{filenames:[],extnames:["xquery","xq","xql","xqm","xqy"]},yaml:{filenames:[".clang-format",".clang-tidy",".gemrc","glide.lock"],extnames:["yml","mir","reek","rviz","sublime-syntax","syntax","yaml","yaml-tmlanguage"]}};let c=Object.entries(o).reduce((e,a)=>{let[n,t]=a;return{...e,[n.toLocaleLowerCase()]:t}},{}),m=e=>{let a={},n={};for(let[e,t]of Object.entries(f)){for(let n of t.filenames)(0,l.Z)(a,n)||(a[n]=[]),a[n].push(e);for(let a of t.extnames)(0,l.Z)(n,a)||(n[a]=[]),n[a].push(e)}return[].concat(a[s().basename(e)],n[s().extname(e).substring(1)]).filter(Boolean)},u=(e,a)=>{let n=()=>(0,i.Z)(a)?"Other":a;if(!e)return n();let t=Object.values(r.SQ).map(e=>e.toLocaleLowerCase()).indexOf(e.toLocaleLowerCase());if(-1===t)return n();let s=Object.keys(r.SQ)[t];return({csharp:"C#",cpp:"C++",javascript:"JavaScript",typescript:"TypeScript"})[s.toLocaleLowerCase()]||s},d=e=>c[e.toLowerCase()]},3765:function(e,a,n){n.d(a,{Z:function(){return o}});var t=n(44745),s=n(57778),l=n(79716),i=n(91302),r=n(66794);async function o(e,a){var n;let t=null!==(n=null==a?void 0:a.customFetch)&&void 0!==n?n:window.fetch;if(function(e){var a;if(e.startsWith("/oauth/providers"))return!1;let n=null===(a=(0,r.bW)())||void 0===a?void 0:a.accessToken;if(!n)return!0;try{let{exp:e}=(0,l.o)(n);return(0,r.pw)(e)}catch(e){return!0}}(e))return r.gN.refreshToken(f).then(n=>u(e,a));let s=await t(e,c(a));return 401===s.status?(r.gN.clearAccessToken(),r.gN.refreshToken(f).then(n=>u(e,a))):d(s,a)}async function f(){var e,a;let n=null===(e=(0,r.bW)())||void 0===e?void 0:e.refreshToken;if(!n)return;let t=await m(n);return null==t?void 0:null===(a=t.data)||void 0===a?void 0:a.refreshToken}function c(e){var a;let n=new Headers(null==e?void 0:e.headers);return n.append("authorization","Bearer ".concat(null===(a=(0,r.bW)())||void 0===a?void 0:a.accessToken)),{...e||{},headers:n}}async function m(e){let a=new t.KU({url:"/graphql",requestPolicy:"network-only",exchanges:[t.Ek]}),n=a.createRequestOperation("mutation",(0,s.h)(i.Dp,{refreshToken:e}));return a.executeMutation(n)}function u(e,a){var n;let t=null!==(n=null==a?void 0:a.customFetch)&&void 0!==n?n:window.fetch;return t(e,c(a)).then(e=>d(e,a))}function d(e,a){return(null==e?void 0:e.ok)?(null==a?void 0:a.responseFormatter)?a.responseFormatter(e):(null==a?void 0:a.responseFormat)==="blob"?e.blob():e.json():(null==a?void 0:a.errorHandler)?a.errorHandler(e):void 0}},23342:function(e,a){a.Z={src:"/_next/static/media/tabby.16ac81a9.png",height:175,width:175,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA50lEQVR42mMAgUWTGw3KsqO9QOypZeG6NekBuQzI4NCmmaZtFam/K6PtHzYlOH5ysDX7n5QYboJQsKrfd1JN6v+ldXH/F+fa/fWyNf4fEebXBlcwsSbNeWV/+f9FE+t+za2K+xNjLfPf293u6v///xkZQGDDwr7gfetm/d8xr+VPkpXgnzR3nf/xAY6vt6yfK84AUrV5+US9HWtnnVgyrfm/tiTD/9JAo//5Ea5nGUDAkoGBCUQHWEiZysuI7LcwN7wb6WV1IT7YzR7uhh3Lepg+AU2av2AiT0pCuDKDayAvSLwsM4oJAH4LXl0Gpb0HAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}}}]);