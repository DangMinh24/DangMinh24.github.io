(function(t){function a(a){for(var s,o,l=a[0],r=a[1],c=a[2],u=0,p=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);d&&d(a);while(p.length)p.shift()();return n.push.apply(n,c||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],s=!0,l=1;l<e.length;l++){var r=e[l];0!==i[r]&&(s=!1)}s&&(n.splice(a--,1),t=o(o.s=e[0]))}return t}var s={},i={app:0},n=[];function o(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=s,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)o.d(e,s,function(a){return t[a]}.bind(null,s));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=a,l=l.slice();for(var c=0;c<l.length;c++)a(l[c]);var d=r;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var s=e("85ec"),i=e.n(s);i.a},"0516":function(t,a,e){},"1a86":function(t,a,e){},"1e08":function(t,a,e){},3113:function(t,a,e){t.exports=e.p+"img/potrait.f7031054.jpg"},"342f3":function(t,a,e){"use strict";var s=e("6df0"),i=e.n(s);i.a},3731:function(t,a,e){},3835:function(t,a,e){},"3ea1":function(t,a,e){},"3ff1":function(t,a,e){"use strict";var s=e("4281"),i=e.n(s);i.a},4281:function(t,a,e){},4962:function(t,a,e){"use strict";var s=e("3731"),i=e.n(s);i.a},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:{"text-dark":!t.nightMode,"text-light":t.nightMode},attrs:{id:"app"}},[e("Home"),e("div",{staticClass:"parent"})],1)},n=[],o=(e("4160"),e("caad"),e("2532"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{staticClass:"navbar navbar-expand-lg navbar-light fixed-top p-st",class:{"bg-light":!t.nightMode,"navbar-blur":t.navbarConfig.blur,"bg-dark2":t.nightMode}},[e("div",{staticClass:"container"},[e("a",{staticClass:"navbar-brand",attrs:{href:"/"},on:{click:function(a){return a.preventDefault(),t.$emit("scroll","home")}}},[e("Logo",{attrs:{nightMode:t.nightMode}})],1),t._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav ml-auto"},[e("li",{staticClass:"nav-item mx-2"},[e("a",{staticClass:"nav-link",class:{"text-light":t.nightMode},attrs:{href:"/about"},on:{click:function(a){return a.preventDefault(),t.$emit("scroll","about")}}},[t._v("about")])]),e("li",{staticClass:"nav-item mx-2"},[e("a",{staticClass:"nav-link",class:{"text-light":t.nightMode},attrs:{href:"/skills"},on:{click:function(a){return a.preventDefault(),t.$emit("scroll","skills")}}},[t._v("skills")])]),e("li",{staticClass:"nav-item mx-2 "},[e("a",{staticClass:"nav-link",class:{"text-light":t.nightMode},attrs:{href:"/portfolio"},on:{click:function(a){return a.preventDefault(),t.$emit("scroll","portfolio")}}},[t._v("portfolio")])]),e("li",{staticClass:"nav-item mx-2"},[e("a",{staticClass:"nav-link",class:{"text-light":t.nightMode},attrs:{href:"/contact"},on:{click:function(a){return a.preventDefault(),t.$emit("scroll","contact")}}},[t._v("contact")])]),e("li",{staticClass:"nav-item ml-2"},[e("a",{staticClass:"nav-link",class:{"text-light":t.nightMode},attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.switchMode(a)}}},[e("i",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:t.nightMode?"Light Mode":"Night Mode",expression:"nightMode ? 'Light Mode' : 'Night Mode'",modifiers:{bottom:!0}}],class:{"fas fa-moon":t.nightMode,"far fa-moon":!t.nightMode}})])])])])])])])}),l=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticStyle:{color:"gray","font-size":"23px"}},[e("i",{staticClass:"fas fa-bars"})])])}],r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"logo-div"},[e("span",{staticClass:"logo-title-name",class:{pgray:!t.nightMode,"text-light":t.nightMode}},[t._v(t._s(t.name))]),e("span",{staticClass:"logo-title-dot pblue"},[t._v(t._s(t.dot))])])},c=[],d={name:"Dang Tran",logo_name:"Dang",flat_picture:e("3113"),config:{use_cookies:!0,navbar:{blur:!1}},description:"(Still in development) I am a senior Computer Science undergraduate student and upcomming Ph.D candidate at Wichita State Univeristy. I have a strong passion and experience for Robotics, Natural Language Processing, Artificial Intelligence and Machine Learning. I am currently a researching assistant at Robot Intelligence Lab (RIL) at Wichita State Univeristy, and fortunately to be advised by Prof. Hongsheng He. <br><br>I have worked in varous projects, in both academic and industrial environments.",links:{github:"https://github.com/DangMinh24",website:"https://dangminh24.github.io/"},education:[],experience:[],skills:[],portfolio:[],portfolio_design:[],recommendations:[]},u=d,p={name:"Logo",props:{nightMode:{type:Boolean}},data:function(){return{name:u.logo_name,dot:"."}}},h=p,g=(e("92c9"),e("2877")),m=Object(g["a"])(h,r,c,!1,null,"2303dc85",null),f=m.exports,b={name:"Navbar",props:{nightMode:{type:Boolean}},data:function(){return{navbarConfig:u.config.navbar,localNightMode:this.nightMode}},components:{Logo:f},methods:{switchMode:function(){this.localNightMode=!this.localNightMode,this.$emit("nightMode",this.localNightMode)}}},v=b,_=(e("3ff1"),Object(g["a"])(v,o,l,!1,null,"5207cbd4",null)),y=(_.exports,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"pt-5 p-st",class:{"bg-white":!t.nightMode,"bg-dark":t.nightMode}},[e("div",{staticClass:"container",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000"}},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-xl-6 col-bg-6 col-md-6 col-sm-12 text-center"},[e("img",{attrs:{src:t.picture}})]),e("div",{staticClass:"col-xl-6 col-bg-6 col-md-6 col-sm-12 pt-5"},[e("span",{staticClass:"home-title",class:{pgray:!t.nightMode,"text-light":t.nightMode}},[t._v("Hi! My name is Dang Tran")]),e("div",[e("p",{domProps:{innerHTML:t._s(t.description)}})]),e("div",{staticClass:"text-center pb-4"},[e("button",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:"LinkedIn",expression:"'LinkedIn'",modifiers:{bottom:!0}}],staticClass:"btn btn-outline-secondary mx-2 ",on:{click:function(a){return t.open("linkedin")}}},[e("i",{staticClass:"fab fa-linkedin"})]),e("button",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:"GitHub",expression:"'GitHub'",modifiers:{bottom:!0}}],staticClass:"btn btn-outline-secondary mx-2",on:{click:function(a){return t.open("github")}}},[e("i",{staticClass:"fab fa-github"})]),e("button",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:"AngelList",expression:"'AngelList'",modifiers:{bottom:!0}}],staticClass:"btn btn-outline-secondary mx-2",on:{click:function(a){return t.open("angellist")}}},[e("i",{staticClass:"fab fa-angellist"})]),e("button",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:"Resume",expression:"'Resume'",modifiers:{bottom:!0}}],staticClass:"btn btn-outline-secondary mx-2",on:{click:function(a){return t.open("resume")}}},[e("i",{staticClass:"fa fa-file"})])])])])])])}),C=[],M=(e("a4d3"),e("e01a"),e("b0c0"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticClass:"wave"},[t._v("👋🏽npm ")])}),k=[],x={name:"Wave"},w=x,S=(e("4962"),Object(g["a"])(w,M,k,!1,null,"6742bf5e",null)),j=S.exports,$={name:"Home",components:{Wave:j},props:{nightMode:{type:Boolean}},data:function(){return{picture:u.flat_picture,description:u.description,name:u.name,linkedin:u.links.linkedin,github:u.links.github,angellist:u.links.angellist,resume:u.links.resume}},methods:{open:function(t){switch(t){case"linkedin":window.open(this.linkedin,"_blank");break;case"github":window.open(this.github,"_blank");break;case"angellist":window.open(this.angellist,"_blank");break;case"resume":window.open(this.resume,"_blank");break}}}},E=$,B=(e("91d9"),Object(g["a"])(E,y,C,!1,null,"1a40cc04",null)),D=B.exports,O=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"py-4 p-st",class:{"bg-light":!t.nightMode,"bg-dark2":t.nightMode,"text-light":t.nightMode}},[e("div",{staticClass:"container"},[e("div",{staticClass:"text-center",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000"}},[e("span",{staticClass:"title text-center",class:{pgray:!t.nightMode,"text-light":t.nightMode}},[t._v("about me.")])]),e("hr",{class:{pgray:!t.nightMode,"bg-secondary":t.nightMode},attrs:{width:"50%"}}),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-6 col-bg-6 col-md-6 col-sm-12"},[e("Timeline",{attrs:{data:t.education,nightMode:t.nightMode}})],1),e("div",{staticClass:"col-xl-6 col-bg-6 col-md-6 col-sm-12"},[e("Timeline",{attrs:{data:t.experience,nightMode:t.nightMode}})],1)])])])},T=[],I=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"mx-3 mt-3 mb-5"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-12 col-bg-12 col-md-12 col-sm-12"},[e("p",{staticClass:"title1",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-duration":"1000"}},[t._v(" "+t._s(t.data.title)+" ")]),t._l(t.data.data,(function(a,s){return e("ul",{key:a.name,staticClass:"timeline m-0 pt-1",style:{"transition-delay":s/4.2+"s"},attrs:{"data-aos":"fade-up","data-offset":"10","data-aos-once":"true","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-duration":"500"}},[e("li",{staticClass:"m-0 pb-2"},[e("div",[e("div",{staticClass:"px-2 title2"},[t._v(t._s(a.name)+", "+t._s(a.place))]),e("div",{staticClass:"px-2 title3"},[t._v(" "+t._s(a.degree||a.position)+" "+t._s(a.gpa?"("+a.gpa+")":"")+" ")]),e("div",{staticClass:"px-2 date"},[t._v(t._s(a.date))]),e("div",{staticClass:"px-2 pb-2 pt-2",staticStyle:{"text-align":"justify"}},[t._v(" "+t._s(a.description)+" ")]),t._l(a.skills,(function(a){return e("span",{key:a,staticClass:"mx-2 badge p-2 mb-2",class:{"bg-dark2":t.nightMode}},[t._v(t._s(a))])})),e("p",{staticClass:"m-2"})],2)])])}))],2)])])])},L=[],N={name:"Timeline",props:{data:{type:Object},nightMode:{type:Boolean}}},P=N,H=(e("bfc7"),Object(g["a"])(P,I,L,!1,null,"fcde7d0c",null)),A=H.exports,V={name:"About",components:{Timeline:A},props:{nightMode:{type:Boolean}},data:function(){return{education:{title:"education",data:u.education},experience:{title:"experiences",data:u.experience}}}},G=V,F=(e("fd52"),Object(g["a"])(G,O,T,!1,null,"123bffbc",null)),R=(F.exports,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"p-st",class:{"bg-white":!t.nightMode,"bg-dark":t.nightMode}},[e("div",{staticClass:"container py-4"},[e("div",{staticClass:"text-center",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000"}},[e("span",{staticClass:"title text-center",class:{pgray:!t.nightMode,"text-light":t.nightMode}},[t._v("skills.")])]),e("hr",{class:{pgray:!t.nightMode,"bg-secondary":t.nightMode},attrs:{width:"50%"}}),e("br"),e("div",{staticClass:"row"},t._l(t.skills,(function(a,s){return e("div",{key:a.title,staticClass:"col-xl-4 col-bg-4 col-md-4 col-sm-12 text-center pb-5 px-4",style:{"transition-delay":s/4.2+"s"},attrs:{"data-aos":"fade-up","data-aos-offset":"10","data-aos-delay":"30","data-aos-duration":"500","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-once":"true"}},[e("div",{staticClass:"bg-div"},[e("i",{class:a.icon})]),e("div",{staticClass:"title2 pt-2"},[t._v(t._s(a.title))]),e("hr",{class:{pgray:!t.nightMode,"bg-secondary":t.nightMode},attrs:{width:"50%"}}),e("span",{staticClass:"title3"},[t._v(t._s(a.info.join(", ")))])])})),0)])])}),z=[],U={name:"Skills",props:{nightMode:{type:Boolean}},data:function(){return{skills:u.skills}}},W=U,J=(e("8db8"),Object(g["a"])(W,R,z,!1,null,"e2dfd2a6",null)),Q=(J.exports,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"py-4 p-st",class:{"bg-light":!t.nightMode,"bg-dark2":t.nightMode,"text-light":t.nightMode}},[e("div",{staticClass:"container"},[e("div",{staticClass:"text-center",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000"}},[e("span",{staticClass:"title text-center",class:{pgray:!t.nightMode,"text-light":t.nightMode}},[t._v("portfolio.")])]),e("hr",{class:{pgray:!t.nightMode,"bg-secondary":t.nightMode},attrs:{width:"50%"}}),e("vue-tabs",{attrs:{activeTextColor:t.nightMode?"#dfdfdf":"#535A5E"}},[e("v-tab",{attrs:{title:"development"}},[e("br"),e("div",{staticClass:"row"},t._l(t.portfolio_info,(function(a,s){return e("div",{key:a.name,staticClass:"col-xl-4 col-bg-4 col-md-6 col-sm-12"},[e("Card",{style:{"transition-delay":s%3/4.2+"s"},attrs:{portfolio:a,"data-aos":"fade-up",nightMode:t.nightMode,"data-aos-offset":"100","data-aos-delay":"10","data-aos-duration":"500","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-once":"true"},on:{show:t.showModalFn}})],1)})),0),"show less"!==t.showBtn?e("div",{staticClass:"text-center py-3"},[e("button",{staticClass:"btn",on:{click:function(a){return a.preventDefault(),t.showMore(a)}}},[t._v(t._s(t.showBtn))])]):t._e()]),e("v-tab",{attrs:{title:"design"}},[e("div",{staticClass:"row"},t._l(t.desgin_info,(function(a,s){return e("div",{key:s,staticClass:"col-xl-6 col-bg-6 col-md-12 col-sm-12",class:{"mt-4":!0},staticStyle:{position:"relative"}},[e("vueper-slides",{staticStyle:{position:"aboslute"},attrs:{"dragging-distance":50,"fixed-height":"300px",bullets:!1,"slide-content-outside":"bottom"},on:{click:function(e){return e.preventDefault(),t.showDesignModalFn(a)}}},t._l(a.pictures,(function(t,a){return e("vueper-slide",{key:a,attrs:{image:t.img}})})),1),e("div",{staticClass:"mt-2",staticStyle:{width:"100%",display:"flex","justify-content":"space-between"}},[e("div",[e("div",{staticClass:"title2",staticStyle:{"font-weight":"500"}},[t._v(t._s(a.title))]),t._l(a.technologies,(function(a){return e("span",{key:a,staticClass:"badge mr-2 mb-2",class:{"bg-dark4":t.nightMode}},[t._v(t._s(a))])})),t._v(" • "),e("span",{staticClass:"date ml-1"},[t._v(t._s(a.date))])],2),e("button",{staticClass:"btn-sm btn btn-outline-secondary no-outline",staticStyle:{height:"31px","margin-top":"5px"},on:{click:function(e){return e.preventDefault(),t.showDesignModalFn(a)}}},[t._v(" read more ")])])],1)})),0),e("br")])],1)],1),e("transition",{attrs:{name:"modal"}},[t.showModal?e("Modal",{attrs:{showModal:t.showModal,portfolio:t.modal_info,nightMode:t.nightMode},on:{close:t.closeModal}}):t._e()],1),e("transition",{attrs:{name:"modal"}},[t.showDesignModal?e("DesignModal",{attrs:{showModal:t.showDesignModal,portfolio:t.design_modal_info,nightMode:t.nightMode},on:{close:t.closeModal}}):t._e()],1)],1)}),Z=[],q=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"my-3 mx-3"},[e("div",{staticClass:"card smcard",class:{"pcard-dark":t.nightMode,pcard:!t.nightMode,"bg-dark3":t.nightMode}},[e("div",{staticStyle:{height:"180px"}},[e("img",{staticClass:"card-img-top",attrs:{src:t.portfolio.pictures[0].img,alt:"Card image cap"}})]),e("div",{staticClass:"card-body pborder-top"},[e("h5",{staticClass:"title2"},[t._v(t._s(t.portfolio.name))]),e("div",[e("div",{staticClass:"pb-1 bheight"},t._l(t.portfolio.technologies,(function(a){return e("span",{key:a,staticClass:"badge mr-2 mb-2 ",class:{"bg-dark4":t.nightMode}},[t._v(t._s(a))])})),0),e("p",{staticClass:"title3 m-0 pb-2 pheight pt-1",domProps:{innerHTML:t._s(t.portfolio.description.length>100?t.portfolio.description.substring(0,105)+"...":t.portfolio.description)}})]),e("div",{staticClass:"text-center mt-2"},[e("button",{staticClass:"btn-sm btn btn-outline-secondary no-outline",attrs:{href:""},on:{click:function(a){return a.preventDefault(),t.showModal(a)}}},[t._v(" read more ")]),t.portfolio.visit?e("button",{staticClass:"btn-sm btn btn-outline-secondary no-outline ml-4",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.open(t.portfolio.visit)}}},[t._v(" visit website ")]):t._e()])])])])},K=[],X={name:"Card",props:{portfolio:{type:Object},nightMode:{type:Boolean}},methods:{open:function(t){window.open(t,"_blank")},showModal:function(){this.$emit("show",this.portfolio)}}},Y=X,tt=(e("e0a4"),Object(g["a"])(Y,q,K,!1,null,"e80d4176",null)),at=tt.exports,et=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"modal-mask"},[e("div",{staticClass:"modal-wrapper"},[e("div",{staticClass:"modal-container",class:{"bg-light":!t.nightMode,"bg-dark":t.nightMode,"text-light":t.nightMode}},[e("div",{staticClass:"title1 px-4 pt-3"},[e("span",[e("a",{class:{"text-light":t.nightMode},attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.open(t.portfolio.visit)}}},[t._v(t._s(t.portfolio.name))])]),e("a",{staticClass:"pull-right",staticStyle:{"font-size":"18px"},on:{click:function(a){return t.$emit("close")}}},[e("i",{staticClass:"fas fa-times"})]),e("hr",{staticClass:"my-1",class:{pgray:!t.nightMode,"bg-secondary":t.nightMode}})]),e("div",{staticClass:"modal-body my-0 pb-0 px-4 pt-0"},[e("div",{staticClass:"mb-2 date",class:{"text-light":t.nightMode,pbgray:t.nightMode}},[e("span",[t._v(t._s(t.portfolio.date)+" • "+t._s(t.portfolio.category))])]),e("div",{staticClass:"pb-1 bheight"},t._l(t.portfolio.technologies,(function(a){return e("span",{key:a,staticClass:"badge mr-2 mb-2",class:{"bg-dark4":t.nightMode}},[t._v(t._s(a))])})),0),e("div",{staticStyle:{"text-align":"justify"}},[e("span",{domProps:{innerHTML:t._s(t.portfolio.description)}})]),e("hr"),e("div",[e("Gallery",{attrs:{images:t.portfolio.pictures}})],1)]),e("div",{staticClass:"text-center pb-3"},[e("hr",{staticClass:"mt-1 mb-3",class:{pgray:!t.nightMode,"bg-secondary":t.nightMode}}),e("button",{staticClass:"btn w-25 mr-3",on:{click:function(a){return t.open(t.portfolio.github)}}},[t._v(" github ")]),e("button",{staticClass:"btn w-25",on:{click:function(a){return t.$emit("close")}}},[t._v("close")])])])])])])},st=[],it=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"carousel slide",staticStyle:{height:"200px"},attrs:{id:"carouselExampleControls","data-ride":"carousel"}},[e("div",{staticClass:"carousel-inner"},t._l(t.images,(function(t){return e("div",{key:t,staticClass:"carousel-item active"},[e("img",{staticClass:"d-block w-100",attrs:{src:"https://picsum.photos/id/237/200/300",alt:"Second slide"}})])})),0),t._m(0),t._m(1)])])},nt=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselExampleControls",role:"button","data-slide":"prev"}},[e("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"sr-only"},[t._v("Previous")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselExampleControls",role:"button","data-slide":"next"}},[e("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"sr-only"},[t._v("Next")])])}],ot={name:"Carousel",props:{images:{type:Array},name:{type:String}},mounted:function(){}},lt=ot,rt=Object(g["a"])(lt,it,nt,!1,null,"5660b687",null),ct=rt.exports,dt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{overflow:"auto"}},[e("div",{staticClass:"prow"},t._l(t.images,(function(a,s){return e("div",{key:a.title,staticClass:"pcolumn",class:{flex:t.design?"100%":"50%","-ms-flex":t.design?"100%":"50%","max-width":t.design?"100%":"50%"}},[e("img",{staticClass:"g-img",staticStyle:{width:"100%"},attrs:{src:a.img,id:"gi"+s},on:{click:function(a){return t.showImg(s)}}}),e("div",{staticClass:"mt-1"},[e("p",{staticStyle:{"font-weight":"500"}},[t._v(t._s(a.title))])])])})),0),t._m(0)])},ut=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal",attrs:{id:"myModal"}},[e("span",{staticClass:"close"},[t._v("×")]),e("img",{staticClass:"modal-content",attrs:{id:"modalImg"}}),e("div",{attrs:{id:"caption"}})])}],pt={name:"Gallery",props:{images:{type:Array},design:{type:Boolean}},data:function(){return{modal:null}},methods:{showImg:function(t){var a=document.getElementById("myModal"),e=document.getElementById("gi".concat(t)),s=document.getElementById("modalImg");a.style.display="block",s.src=e.src;var i=document.getElementsByClassName("close")[0];i.onclick=function(){s.classList.add("closeModal"),a.classList.add("modalClose"),setTimeout((function(){a.style.display="none",s.classList.remove("closeModal"),a.classList.remove("modalClose")}),200)}}}},ht=pt,gt=(e("7dc7"),Object(g["a"])(ht,dt,ut,!1,null,"49cb1d60",null)),mt=gt.exports,ft={name:"Modal",components:{Carousel:ct,Gallery:mt},props:{showModal:{type:Boolean},portfolio:{type:Object},nightMode:{type:Boolean}},created:function(){document.getElementsByTagName("body")[0].classList.add("modal-open")},methods:{open:function(t){window.open(t,"_blank")}}},bt=ft,vt=(e("342f3"),Object(g["a"])(bt,et,st,!1,null,"f20244ac",null)),_t=vt.exports,yt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"modal-mask"},[e("div",{staticClass:"modal-wrapper"},[e("div",{staticClass:"modal-container",class:{"bg-light":!t.nightMode,"bg-dark":t.nightMode,"text-light":t.nightMode}},[e("div",{staticClass:"title1 px-4 pt-3"},[e("span",{class:{"text-light":t.nightMode}},[t._v(t._s(t.portfolio.name))]),e("a",{staticClass:"pull-right",staticStyle:{"font-size":"18px"},on:{click:function(a){return t.$emit("close")}}},[e("i",{staticClass:"fas fa-times"})]),e("hr",{staticClass:"my-1",class:{pgray:!t.nightMode,"bg-secondary":t.nightMode}})]),e("div",{staticClass:"modal-body my-0 pb-0 px-4 pt-0"},[e("div",{staticClass:"mb-2 date",class:{"text-light":t.nightMode,pbgray:t.nightMode}},[e("span",[t._v(t._s(t.portfolio.date)+" • "+t._s(t.portfolio.category))])]),e("div",{staticClass:"pb-1 bheight"},t._l(t.portfolio.technologies,(function(a){return e("span",{key:a,staticClass:"badge mr-2 mb-2",class:{"bg-dark4":t.nightMode}},[t._v(t._s(a))])})),0),e("div",{staticStyle:{"text-align":"justify"}},[e("span",{domProps:{innerHTML:t._s(t.portfolio.description)}})]),e("hr"),e("div",[e("Gallery",{attrs:{images:t.portfolio.pictures,design:!0}})],1)]),e("div",{staticClass:"text-center pb-3"},[e("hr",{staticClass:"mt-1 mb-3",class:{pgray:!t.nightMode,"bg-secondary":t.nightMode}}),e("button",{staticClass:"btn w-25",on:{click:function(a){return t.$emit("close")}}},[t._v("close")])])])])])])},Ct=[],Mt={name:"Modal",components:{Carousel:ct,Gallery:mt},props:{showModal:{type:Boolean},portfolio:{type:Object},nightMode:{type:Boolean}},created:function(){document.getElementsByTagName("body")[0].classList.add("modal-open")},methods:{open:function(t){window.open(t,"_blank")}}},kt=Mt,xt=(e("9433"),Object(g["a"])(kt,yt,Ct,!1,null,"0525c313",null)),wt=xt.exports,St=e("4d48"),jt=(e("4bf4"),e("b1b5")),$t=(e("2ec8"),{name:"Portfolio",components:{Card:at,Modal:_t,VueTabs:St["VueTabs"],VTab:St["VTab"],VueperSlides:jt["VueperSlides"],VueperSlide:jt["VueperSlide"],DesignModal:wt},props:{nightMode:{type:Boolean}},data:function(){return{all_info:u.portfolio,desgin_info:u.portfolio_design,portfolio_info:[],showModal:!1,showDesignModal:!1,modal_info:{},design_modal_info:{},number:3,showBtn:"show more",shower:0,data:['<div class="example-slide">Slide 1</div>','<div class="example-slide">Slide 2</div>','<div class="example-slide">Slide 3</div>']}},created:function(){for(var t=0;t<this.number;t++)this.portfolio_info.push(this.all_info[t])},watch:{number:function(){this.portfolio_info=[];for(var t=0;t<this.number;t++)this.portfolio_info.push(this.all_info[t])}},methods:{next:function(){this.$refs.flickity.next()},previous:function(){this.$refs.flickity.previous()},closeModal:function(){this.showModal=!1,this.showDesignModal=!1,document.getElementsByTagName("body")[0].classList.remove("modal-open")},showModalFn:function(t){this.modal_info=t,this.showModal=!0},showDesignModalFn:function(t){this.design_modal_info=t,this.showDesignModal=!0},showMore:function(){if(this.number!=this.all_info.length&&(this.number+=3,window.scrollBy({top:document.getElementsByClassName("smcard")[0].clientHeight,behavior:"smooth"}),this.number>this.all_info.length&&(this.number=this.all_info.length)),this.number==this.all_info.length&&0==this.shower)this.shower=1,this.showBtn="show less";else if(this.number==this.all_info.length&&1==this.shower){var t=document.getElementById("portfolio").offsetTop;window.scrollTo({top:t+5,behavior:"smooth"}),this.shower=0,this.number=3,this.showBtn="show more"}}}}),Et=$t,Bt=(e("748b"),Object(g["a"])(Et,Q,Z,!1,null,"22cf3ee2",null)),Dt=(Bt.exports,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"p-st",class:{"bg-white":!t.nightMode,"bg-dark":t.nightMode}},[e("div",{staticClass:"container py-4"},[e("div",{staticClass:"text-center",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000"}},[e("span",{staticClass:"title text-center",class:{pgray:!t.nightMode,"text-light":t.nightMode}},[t._v("recommendations.")])]),e("hr",{class:{pgray:!t.nightMode,"bg-secondary":t.nightMode},attrs:{width:"50%"}}),e("div",{staticClass:"row"},t._l(t.data,(function(a){return e("div",{key:a.author,staticClass:"col-xl-6 col-bg-6 col-md-6 col-sm-12 py-3 px-5"},[e("div",{staticClass:"title2",attrs:{"data-aos":"fade-up","data-aos-once":"true","data-aos-easing":"ease-in-out","data-aos-mirror":"true"}},[e("span",[t._v('"'+t._s(a.title)+'"')])]),e("div",{staticClass:"title3 float-right py-2 pl-5",attrs:{"data-aos":"fade-up","data-aos-once":"true","data-aos-easing":"ease-in-out","data-aos-mirror":"true"}},[e("span",[t._v(" – "+t._s(a.author)+", "+t._s(a.position)+", "+t._s(a.company)+", "+t._s(a.location))])])])})),0)])])}),Ot=[],Tt={name:"Recommendation",props:{nightMode:{type:Boolean}},data:function(){return{data:u.recommendations}}},It=Tt,Lt=(e("c653"),Object(g["a"])(It,Dt,Ot,!1,null,"829e042e",null)),Nt=(Lt.exports,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"py-4 p-st",class:{"bg-light":!t.nightMode,"bg-dark2":t.nightMode,"text-light":t.nightMode}},[e("div",{staticClass:"container"},[e("div",{staticClass:"text-center",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000"}},[e("span",{staticClass:"title text-center",class:{pgray:!t.nightMode,"text-light":t.nightMode}},[t._v("contact.")])]),e("hr",{class:{pgray:!t.nightMode,"bg-secondary":t.nightMode},attrs:{width:"50%"}}),e("br"),e("div",{staticClass:"text-center"},[e("div",{staticClass:"mb-3",attrs:{"data-aos":"fade-up","data-aos-once":"true","data-aos-duration":"1000"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"pinput",class:{pgray:!t.nightMode,"pgray-dark":t.nightMode,"text-light":t.nightMode},staticStyle:{"transition-delay":"0.2s"},attrs:{type:"text",name:"user_name",placeholder:"name"},domProps:{value:t.name},on:{input:function(a){a.target.composing||(t.name=a.target.value)}}})]),e("div",{staticClass:"my-3",attrs:{"data-aos":"fade-up","data-aos-once":"true","data-aos-duration":"1000"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"pinput",class:{pgray:!t.nightMode,"pgray-dark":t.nightMode,"text-light":t.nightMode},staticStyle:{"transition-delay":"0.4s"},attrs:{type:"email",name:"user_email",placeholder:"email"},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}})]),e("div",{staticClass:"my-3",attrs:{"data-aos":"fade-up","data-aos-once":"true","data-aos-duration":"1000"}},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"pinput",class:{pgray:!t.nightMode,"pgray-dark":t.nightMode,"text-light":t.nightMode},staticStyle:{"transition-delay":"0.6s"},attrs:{name:"message",placeholder:"message",rows:"4"},domProps:{value:t.text},on:{input:function(a){a.target.composing||(t.text=a.target.value)}}})]),e("button",{staticClass:"mt-1 btn mb-3",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000","data-aos-offset":"50"},on:{click:function(a){return a.preventDefault(),t.sendEmail(a)}}},[t._v(" Send ")])]),e("Snackbar",{attrs:{showSnackbar:t.showSnackbar,snackbarMessage:t.snackbarMessage,snackbarColor:t.snackbarColor},on:{close:t.closeSnackbar}})],1)])}),Pt=[],Ht={emailjs:{serviceID:"gmail",templateID:"template_zHretJ0d",userID:"user_8g0rh3d6Qj1QZBEU8USls"}},At=Ht,Vt=e("0f91"),Gt=e.n(Vt),Ft=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{class:{show:t.showSnackbar},style:{"background-color":t.snackbarColor},attrs:{id:"snackbar"}},[t._v(" "+t._s(t.snackbarMessage)+" ")])])},Rt=[],zt={name:"Snackbar",props:{showSnackbar:{type:Boolean},snackbarMessage:{type:String},snackbarColor:{type:String}},watch:{showSnackbar:function(t){var a=this;t&&setTimeout((function(){a.$emit("close",!1)}),1900)}}},Ut=zt,Wt=(e("fde8"),Object(g["a"])(Ut,Ft,Rt,!1,null,"43e3e776",null)),Jt=Wt.exports,Qt={name:"Contact",components:{Snackbar:Jt},props:{nightMode:{type:Boolean}},data:function(){return{email:"",name:"",text:"",showSnackbar:!1,snackbarMessage:"",snackbarColor:""}},methods:{closeSnackbar:function(t){var a=this;t||setTimeout((function(){a.showSnackbar=t}),1e3)},sendEmail:function(){var t=this;if(this.email&&this.name&&this.text){var a={user_email:this.email,from_name:this.name,message_html:this.text,to_name:"Hrishikesh Paul"};Gt.a.send(At.emailjs.serviceID,At.emailjs.templateID,a,At.emailjs.userID).then((function(a){t.showSnackbar=!0,t.snackbarMessage="Thanks! Message recieved.",t.snackbarColor="#1aa260",t.email="",t.text="",t.name=""}),(function(a){t.showSnackbar=!0,t.snackbarMessage="Oops! Something went wrong.",t.snackbarColor="rgb(212, 149, 97)"}))}else this.showSnackbar=!0,this.snackbarMessage="Please all the fields",this.snackbarColor="rgb(212, 149, 97)"}}},Zt=Qt,qt=(e("8356"),Object(g["a"])(Zt,Nt,Pt,!1,null,"84a71086",null)),Kt=(qt.exports,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bg-secondary"},[e("div",{staticClass:"container py-3"},[e("div",{staticClass:"row pt-1 align-items-center"},[t._m(0),e("div",{staticClass:"col-xl-6 col-bg-6 col-md-6 col-sm-12"},[e("div",{staticClass:"text-center"},[e("button",{staticClass:"btn btn-outline-secondary mx-2 ",on:{click:function(a){return t.open("linkedin")}}},[e("i",{staticClass:"fab fa-linkedin"})]),e("button",{staticClass:"btn btn-outline-secondary mx-2",on:{click:function(a){return t.open("github")}}},[e("i",{staticClass:"fab fa-github"})]),e("button",{staticClass:"btn btn-outline-secondary mx-2",on:{click:function(a){return t.open("angellist")}}},[e("i",{staticClass:"fab fa-angellist"})]),e("button",{staticClass:"btn btn-outline-secondary mx-2",on:{click:function(a){return t.open("resume")}}},[e("i",{staticClass:"fa fa-file"})])])])])])])}),Xt=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-xl-6 col-bg-6 col-md-6 col-sm-12 pbelow",staticStyle:{color:"white"}},[e("span",[t._v("© 2020 Copyright: Hrishikesh Paul")])])}],Yt={name:"Footer",data:function(){return{linkedin:u.links.linkedin,github:u.links.github,angellist:u.links.angellist,resume:u.links.resume}},methods:{open:function(t){switch(t){case"linkedin":window.open(this.linkedin,"_blank");break;case"github":window.open(this.github,"_blank");break;case"angellist":window.open(this.angellist,"_blank");break;case"resume":window.open(this.resume,"_blank");break}}}},ta=Yt,aa=(e("d40a"),Object(g["a"])(ta,Kt,Xt,!1,null,"5a4a6b5b",null)),ea=(aa.exports,{name:"App",components:{Home:D},data:function(){return{nightMode:!1,config:u.config}},created:function(){this.config.use_cookies&&(this.nightMode="true"===this.$cookie.get("nightMode"))},mounted:function(){["about","contact","skills","portfolio"].forEach((function(t){if(window.location.href.includes(t)){var a=document.getElementById(t).offsetTop;window.scrollTo({top:a-35,behavior:"smooth"})}}))},methods:{switchMode:function(t){this.config.use_cookies&&this.$cookie.set("nightMode",t),this.nightMode=t},scrollTo:function(t){if("home"==t)this.$router.push("/"),window.scrollTo({top:-80,behavior:"smooth"});else{var a=document.getElementById(t).offsetTop;window.scrollTo({top:a-35,behavior:"smooth"}),this.$router.history.current.path!=="/".concat(t)&&this.$router.push("/".concat(t))}}}}),sa=ea,ia=(e("034f"),Object(g["a"])(sa,i,n,!1,null,null,null)),na=ia.exports,oa=e("f5af"),la=e.n(oa),ra=(e("e829"),e("b3b5")),ca=e("f13c"),da=e.n(ca),ua=e("8c4f"),pa=e("e37d"),ha=e("00e7");s["a"].use(pa["a"]),s["a"].use(ua["a"]),s["a"].use(da.a),s["a"].use(ha),s["a"].use(ra["a"]),s["a"].config.productionTip=!1;var ga=[{path:"/"}],ma=new ua["a"]({mode:"history",routes:ga});new s["a"]({created:function(){la.a.init()},router:ma,render:function(t){return t(na)}}).$mount("#app")},"59af":function(t,a,e){},6573:function(t,a,e){},"6df0":function(t,a,e){},"70f7":function(t,a,e){},"748b":function(t,a,e){"use strict";var s=e("59af"),i=e.n(s);i.a},"7dc7":function(t,a,e){"use strict";var s=e("de41"),i=e.n(s);i.a},8356:function(t,a,e){"use strict";var s=e("ec7c"),i=e.n(s);i.a},"85ec":function(t,a,e){},"8db8":function(t,a,e){"use strict";var s=e("3835"),i=e.n(s);i.a},"91d9":function(t,a,e){"use strict";var s=e("b7a5"),i=e.n(s);i.a},"92c9":function(t,a,e){"use strict";var s=e("d881"),i=e.n(s);i.a},9433:function(t,a,e){"use strict";var s=e("1a86"),i=e.n(s);i.a},a255:function(t,a,e){},b7a5:function(t,a,e){},bfc7:function(t,a,e){"use strict";var s=e("0516"),i=e.n(s);i.a},c653:function(t,a,e){"use strict";var s=e("a255"),i=e.n(s);i.a},d40a:function(t,a,e){"use strict";var s=e("6573"),i=e.n(s);i.a},d881:function(t,a,e){},de41:function(t,a,e){},e0a4:function(t,a,e){"use strict";var s=e("70f7"),i=e.n(s);i.a},ec7c:function(t,a,e){},fd52:function(t,a,e){"use strict";var s=e("1e08"),i=e.n(s);i.a},fde8:function(t,a,e){"use strict";var s=e("3ea1"),i=e.n(s);i.a}});
//# sourceMappingURL=app.2bacfe3b.js.map