import{c as R,i as j,e as w,p as q,a,h as r,l as P,b as E,g as H,r as u,d as K,f as m,w as O,o as I,j as N,k as U,m as V,n as A,q as $,s as x}from"./index.b2fda5e2.js";import{h as D,a as G}from"./dom.f4920517.js";import{g as b,Q as J,a as _}from"./QResizeObserver.01445e03.js";var X=R({name:"QPageContainer",setup(t,{slots:h}){const{proxy:{$q:s}}=H(),n=j(P,w);if(n===w)return console.error("QPageContainer needs to be child of QLayout"),w;q(E,!0);const d=a(()=>{const i={};return n.header.space===!0&&(i.paddingTop=`${n.header.size}px`),n.right.space===!0&&(i[`padding${s.lang.rtl===!0?"Left":"Right"}`]=`${n.right.size}px`),n.footer.space===!0&&(i.paddingBottom=`${n.footer.size}px`),n.left.space===!0&&(i[`padding${s.lang.rtl===!0?"Right":"Left"}`]=`${n.left.size}px`),i});return()=>r("div",{class:"q-page-container",style:d.value},D(h.default))}}),Y=R({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:t=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(t.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(t,{slots:h,emit:s}){const{proxy:{$q:n}}=H(),d=u(null),i=u(n.screen.height),p=u(t.container===!0?0:n.screen.width),z=u({position:0,direction:"down",inflectionPoint:0}),v=u(0),l=u(K.value===!0?0:b()),Q=a(()=>"q-layout q-layout--"+(t.container===!0?"containerized":"standard")),T=a(()=>t.container===!1?{minHeight:n.screen.height+"px"}:null),F=a(()=>l.value!==0?{[n.lang.rtl===!0?"left":"right"]:`${l.value}px`}:null),W=a(()=>l.value!==0?{[n.lang.rtl===!0?"right":"left"]:0,[n.lang.rtl===!0?"left":"right"]:`-${l.value}px`,width:`calc(100% + ${l.value}px)`}:null);function B(e){if(t.container===!0||document.qScrollPrevented!==!0){const o={position:e.position.top,direction:e.direction,directionChanged:e.directionChanged,inflectionPoint:e.inflectionPoint.top,delta:e.delta.top};z.value=o,t.onScroll!==void 0&&s("scroll",o)}}function k(e){const{height:o,width:c}=e;let f=!1;i.value!==o&&(f=!0,i.value=o,t.onScrollHeight!==void 0&&s("scrollHeight",o),S()),p.value!==c&&(f=!0,p.value=c),f===!0&&t.onResize!==void 0&&s("resize",e)}function M({height:e}){v.value!==e&&(v.value=e,S())}function S(){if(t.container===!0){const e=i.value>v.value?b():0;l.value!==e&&(l.value=e)}}let g=null;const C={instances:{},view:a(()=>t.view),isContainer:a(()=>t.container),rootRef:d,height:i,containerHeight:v,scrollbarWidth:l,totalWidth:a(()=>p.value+l.value),rows:a(()=>{const e=t.view.toLowerCase().split(" ");return{top:e[0].split(""),middle:e[1].split(""),bottom:e[2].split("")}}),header:m({size:0,offset:0,space:!1}),right:m({size:300,offset:0,space:!1}),footer:m({size:0,offset:0,space:!1}),left:m({size:300,offset:0,space:!1}),scroll:z,animate(){g!==null?clearTimeout(g):document.body.classList.add("q-body--layout-animate"),g=setTimeout(()=>{g=null,document.body.classList.remove("q-body--layout-animate")},155)},update(e,o,c){C[e][o]=c}};if(q(P,C),b()>0){let c=function(){e=null,o.classList.remove("hide-scrollbar")},f=function(){if(e===null){if(o.scrollHeight>n.screen.height)return;o.classList.add("hide-scrollbar")}else clearTimeout(e);e=setTimeout(c,300)},y=function(L){e!==null&&L==="remove"&&(clearTimeout(e),c()),window[`${L}EventListener`]("resize",f)},e=null;const o=document.body;O(()=>t.container!==!0?"add":"remove",y),t.container!==!0&&y("add"),I(()=>{y("remove")})}return()=>{const e=G(h.default,[r(J,{onScroll:B}),r(_,{onResize:k})]),o=r("div",{class:Q.value,style:T.value,ref:t.container===!0?void 0:d,tabindex:-1},e);return t.container===!0?r("div",{class:"q-layout-container overflow-hidden",ref:d},[r(_,{onResize:M}),r("div",{class:"absolute-full",style:F.value},[r("div",{class:"scroll",style:W.value},[o])])]):o}}});const ne=N({name:"MainLayout",__name:"MainLayout",setup(t){return(h,s)=>{const n=U("router-view");return V(),A(Y,{view:"lHh Lpr lFf"},{default:$(()=>[x(X,null,{default:$(()=>[x(n)]),_:1})]),_:1})}}});export{ne as default};
