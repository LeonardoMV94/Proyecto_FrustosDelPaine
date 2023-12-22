import{c as R,a as f,h as O,b as de,i as Te,e as P,r as L,w as b,o as Se,d as Ye,g as xe,l as Le,f as je,j as V,n as Ke,k as Ge,m as H,p as te,q as ye,s as ae,t as ue,u as oe,v as Je,x as Ze,y as et,z as tt,A as at,B as ot,C as nt,D as rt,E as ut,F as be,G as lt,H as ge,I as it,J as Oe,K as Me,L as W,M as le,N as _,O as w,Q as st,P as dt,R as X,S as ie,T as ct,U as ft,V as we,W as Ce,X as vt,Y as mt,Z as ht,_ as pt}from"./index.3d5788d8.js";import{c as yt,b as N,Q as bt,a as ke,d as se,e as gt,f as wt}from"./QItem.67c78710.js";import{Q as Ct,a as kt,b as qt}from"./QLayout.b0e18ce8.js";var _t=R({name:"QToolbarTitle",props:{shrink:Boolean},setup(t,{slots:n}){const u=f(()=>"q-toolbar__title ellipsis"+(t.shrink===!0?" col-shrink":""));return()=>O("div",{class:u.value},de(n.default))}}),Bt=R({name:"QToolbar",props:{inset:Boolean},setup(t,{slots:n}){const u=f(()=>"q-toolbar row no-wrap items-center"+(t.inset===!0?" q-toolbar--inset":""));return()=>O("div",{class:u.value,role:"toolbar"},de(n.default))}}),Tt=R({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:n,emit:u}){const{proxy:{$q:y}}=xe(),e=Te(Le,P);if(e===P)return console.error("QHeader needs to be child of QLayout"),P;const a=L(parseInt(t.heightHint,10)),l=L(!0),m=f(()=>t.reveal===!0||e.view.value.indexOf("H")>-1||y.platform.is.ios&&e.isContainer.value===!0),v=f(()=>{if(t.modelValue!==!0)return 0;if(m.value===!0)return l.value===!0?a.value:0;const i=a.value-e.scroll.value.position;return i>0?i:0}),s=f(()=>t.modelValue!==!0||m.value===!0&&l.value!==!0),r=f(()=>t.modelValue===!0&&s.value===!0&&t.reveal===!0),q=f(()=>"q-header q-layout__section--marginal "+(m.value===!0?"fixed":"absolute")+"-top"+(t.bordered===!0?" q-header--bordered":"")+(s.value===!0?" q-header--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus":"")),g=f(()=>{const i=e.rows.value.top,T={};return i[0]==="l"&&e.left.space===!0&&(T[y.lang.rtl===!0?"right":"left"]=`${e.left.size}px`),i[2]==="r"&&e.right.space===!0&&(T[y.lang.rtl===!0?"left":"right"]=`${e.right.size}px`),T});function h(i,T){e.update("header",i,T)}function c(i,T){i.value!==T&&(i.value=T)}function S({height:i}){c(a,i),h("size",i)}function C(i){r.value===!0&&c(l,!0),u("focusin",i)}b(()=>t.modelValue,i=>{h("space",i),c(l,!0),e.animate()}),b(v,i=>{h("offset",i)}),b(()=>t.reveal,i=>{i===!1&&c(l,t.modelValue)}),b(l,i=>{e.animate(),u("reveal",i)}),b(e.scroll,i=>{t.reveal===!0&&c(l,i.direction==="up"||i.position<=t.revealOffset||i.position-i.inflectionPoint<100)});const p={};return e.instances.header=p,t.modelValue===!0&&h("size",a.value),h("space",t.modelValue),h("offset",v.value),Se(()=>{e.instances.header===p&&(e.instances.header=void 0,h("size",0),h("offset",0),h("space",!1))}),()=>{const i=Ye(n.default,[]);return t.elevated===!0&&i.push(O("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),i.push(O(Ct,{debounce:0,onResize:S})),O("header",{class:q.value,style:g.value,onFocusin:C},i)}}});const ce={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},St=Object.keys(ce);ce.all=!0;function qe(t){const n={};for(const u of St)t[u]===!0&&(n[u]=!0);return Object.keys(n).length===0?ce:(n.horizontal===!0?n.left=n.right=!0:n.left===!0&&n.right===!0&&(n.horizontal=!0),n.vertical===!0?n.up=n.down=!0:n.up===!0&&n.down===!0&&(n.vertical=!0),n.horizontal===!0&&n.vertical===!0&&(n.all=!0),n)}const xt=["INPUT","TEXTAREA"];function _e(t,n){return n.event===void 0&&t.target!==void 0&&t.target.draggable!==!0&&typeof n.handler=="function"&&xt.includes(t.target.nodeName.toUpperCase())===!1&&(t.qClonedBy===void 0||t.qClonedBy.indexOf(n.uid)===-1)}function ne(t,n,u){const y=ue(t);let e,a=y.left-n.event.x,l=y.top-n.event.y,m=Math.abs(a),v=Math.abs(l);const s=n.direction;s.horizontal===!0&&s.vertical!==!0?e=a<0?"left":"right":s.horizontal!==!0&&s.vertical===!0?e=l<0?"up":"down":s.up===!0&&l<0?(e="up",m>v&&(s.left===!0&&a<0?e="left":s.right===!0&&a>0&&(e="right"))):s.down===!0&&l>0?(e="down",m>v&&(s.left===!0&&a<0?e="left":s.right===!0&&a>0&&(e="right"))):s.left===!0&&a<0?(e="left",m<v&&(s.up===!0&&l<0?e="up":s.down===!0&&l>0&&(e="down"))):s.right===!0&&a>0&&(e="right",m<v&&(s.up===!0&&l<0?e="up":s.down===!0&&l>0&&(e="down")));let r=!1;if(e===void 0&&u===!1){if(n.event.isFirst===!0||n.event.lastDir===void 0)return{};e=n.event.lastDir,r=!0,e==="left"||e==="right"?(y.left-=a,m=0,a=0):(y.top-=l,v=0,l=0)}return{synthetic:r,payload:{evt:t,touch:n.event.mouse!==!0,mouse:n.event.mouse===!0,position:y,direction:e,isFirst:n.event.isFirst,isFinal:u===!0,duration:Date.now()-n.event.time,distance:{x:m,y:v},offset:{x:a,y:l},delta:{x:y.left-n.event.lastX,y:y.top-n.event.lastY}}}}let Lt=0;var re=je({name:"touch-pan",beforeMount(t,{value:n,modifiers:u}){if(u.mouse!==!0&&V.has.touch!==!0)return;function y(a,l){u.mouse===!0&&l===!0?Je(a):(u.stop===!0&&ae(a),u.prevent===!0&&ye(a))}const e={uid:"qvtp_"+Lt++,handler:n,modifiers:u,direction:qe(u),noop:Ke,mouseStart(a){_e(a,e)&&Ge(a)&&(H(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(a,!0))},touchStart(a){if(_e(a,e)){const l=a.target;H(e,"temp",[[l,"touchmove","move","notPassiveCapture"],[l,"touchcancel","end","passiveCapture"],[l,"touchend","end","passiveCapture"]]),e.start(a)}},start(a,l){if(V.is.firefox===!0&&te(t,!0),e.lastEvt=a,l===!0||u.stop===!0){if(e.direction.all!==!0&&(l!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const s=a.type.indexOf("mouse")>-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&ye(s),a.cancelBubble===!0&&ae(s),Object.assign(s,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[e.uid]:a.qClonedBy.concat(e.uid)}),e.initialEvent={target:a.target,event:s}}ae(a)}const{left:m,top:v}=ue(a);e.event={x:m,y:v,time:Date.now(),mouse:l===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:m,lastY:v}},move(a){if(e.event===void 0)return;const l=ue(a),m=l.left-e.event.x,v=l.top-e.event.y;if(m===0&&v===0)return;e.lastEvt=a;const s=e.event.mouse===!0,r=()=>{y(a,s);let h;u.preserveCursor!==!0&&u.preservecursor!==!0&&(h=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),s===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),yt(),e.styleCleanup=c=>{if(e.styleCleanup=void 0,h!==void 0&&(document.documentElement.style.cursor=h),document.body.classList.remove("non-selectable"),s===!0){const S=()=>{document.body.classList.remove("no-pointer-events--children")};c!==void 0?setTimeout(()=>{S(),c()},50):S()}else c!==void 0&&c()}};if(e.event.detected===!0){e.event.isFirst!==!0&&y(a,e.event.mouse);const{payload:h,synthetic:c}=ne(a,e,!1);h!==void 0&&(e.handler(h)===!1?e.end(a):(e.styleCleanup===void 0&&e.event.isFirst===!0&&r(),e.event.lastX=h.position.left,e.event.lastY=h.position.top,e.event.lastDir=c===!0?void 0:h.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||s===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){r(),e.event.detected=!0,e.move(a);return}const q=Math.abs(m),g=Math.abs(v);q!==g&&(e.direction.horizontal===!0&&q>g||e.direction.vertical===!0&&q<g||e.direction.up===!0&&q<g&&v<0||e.direction.down===!0&&q<g&&v>0||e.direction.left===!0&&q>g&&m<0||e.direction.right===!0&&q>g&&m>0?(e.event.detected=!0,e.move(a)):e.end(a,!0))},end(a,l){if(e.event!==void 0){if(oe(e,"temp"),V.is.firefox===!0&&te(t,!1),l===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(ne(a===void 0?e.lastEvt:a,e).payload);const{payload:m}=ne(a===void 0?e.lastEvt:a,e,!0),v=()=>{e.handler(m)};e.styleCleanup!==void 0?e.styleCleanup(v):v()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(t.__qtouchpan=e,u.mouse===!0){const a=u.mouseCapture===!0||u.mousecapture===!0?"Capture":"";H(e,"main",[[t,"mousedown","mouseStart",`passive${a}`]])}V.has.touch===!0&&H(e,"main",[[t,"touchstart","touchStart",`passive${u.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,n){const u=t.__qtouchpan;u!==void 0&&(n.oldValue!==n.value&&(typeof value!="function"&&u.end(),u.handler=n.value),u.direction=qe(n.modifiers))},beforeUnmount(t){const n=t.__qtouchpan;n!==void 0&&(n.event!==void 0&&n.end(),oe(n,"main"),oe(n,"temp"),V.is.firefox===!0&&te(t,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete t.__qtouchpan)}});const Be=150;var Ot=R({name:"QDrawer",inheritAttrs:!1,props:{...Ze,...et,side:{type:String,default:"left",validator:t=>["left","right"].includes(t)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:t=>["default","desktop","mobile"].includes(t),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...tt,"onLayout","miniState"],setup(t,{slots:n,emit:u,attrs:y}){const e=xe(),{proxy:{$q:a}}=e,l=at(t,a),{preventBodyScroll:m}=it(),{registerTimeout:v,removeTimeout:s}=ot(),r=Te(Le,P);if(r===P)return console.error("QDrawer needs to be child of QLayout"),P;let q,g=null,h;const c=L(t.behavior==="mobile"||t.behavior!=="desktop"&&r.totalWidth.value<=t.breakpoint),S=f(()=>t.mini===!0&&c.value!==!0),C=f(()=>S.value===!0?t.miniWidth:t.width),p=L(t.showIfAbove===!0&&c.value===!1?!0:t.modelValue===!0),i=f(()=>t.persistent!==!0&&(c.value===!0||Qe.value===!0));function T(o,d){if(Ee(),o!==!1&&r.animate(),B(0),c.value===!0){const k=r.instances[F.value];k!==void 0&&k.belowBreakpoint===!0&&k.hide(!1),M(1),r.isContainer.value!==!0&&m(!0)}else M(0),o!==!1&&J(!1);v(()=>{o!==!1&&J(!0),d!==!0&&u("show",o)},Be)}function fe(o,d){De(),o!==!1&&r.animate(),M(0),B(D.value*C.value),Z(),d!==!0?v(()=>{u("hide",o)},Be):s()}const{show:U,hide:$}=nt({showing:p,hideOnRouteChange:i,handleShow:T,handleHide:fe}),{addToHistory:Ee,removeFromHistory:De}=rt(p,$,i),A={belowBreakpoint:c,hide:$},x=f(()=>t.side==="right"),D=f(()=>(a.lang.rtl===!0?-1:1)*(x.value===!0?1:-1)),ve=L(0),Q=L(!1),Y=L(!1),me=L(C.value*D.value),F=f(()=>x.value===!0?"left":"right"),j=f(()=>p.value===!0&&c.value===!1&&t.overlay===!1?t.miniToOverlay===!0?t.miniWidth:C.value:0),K=f(()=>t.overlay===!0||t.miniToOverlay===!0||r.view.value.indexOf(x.value?"R":"L")>-1||a.platform.is.ios===!0&&r.isContainer.value===!0),z=f(()=>t.overlay===!1&&p.value===!0&&c.value===!1),Qe=f(()=>t.overlay===!0&&p.value===!0&&c.value===!1),Pe=f(()=>"fullscreen q-drawer__backdrop"+(p.value===!1&&Q.value===!1?" hidden":"")),$e=f(()=>({backgroundColor:`rgba(0,0,0,${ve.value*.4})`})),he=f(()=>x.value===!0?r.rows.value.top[2]==="r":r.rows.value.top[0]==="l"),ze=f(()=>x.value===!0?r.rows.value.bottom[2]==="r":r.rows.value.bottom[0]==="l"),Ve=f(()=>{const o={};return r.header.space===!0&&he.value===!1&&(K.value===!0?o.top=`${r.header.offset}px`:r.header.space===!0&&(o.top=`${r.header.size}px`)),r.footer.space===!0&&ze.value===!1&&(K.value===!0?o.bottom=`${r.footer.offset}px`:r.footer.space===!0&&(o.bottom=`${r.footer.size}px`)),o}),Ae=f(()=>{const o={width:`${C.value}px`,transform:`translateX(${me.value}px)`};return c.value===!0?o:Object.assign(o,Ve.value)}),Fe=f(()=>"q-drawer__content fit "+(r.isContainer.value!==!0?"scroll":"overflow-auto")),Ie=f(()=>`q-drawer q-drawer--${t.side}`+(Y.value===!0?" q-drawer--mini-animate":"")+(t.bordered===!0?" q-drawer--bordered":"")+(l.value===!0?" q-drawer--dark q-dark":"")+(Q.value===!0?" no-transition":p.value===!0?"":" q-layout--prevent-focus")+(c.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${S.value===!0?"mini":"standard"}`+(K.value===!0||z.value!==!0?" fixed":"")+(t.overlay===!0||t.miniToOverlay===!0?" q-drawer--on-top":"")+(he.value===!0?" q-drawer--top-padding":""))),He=f(()=>{const o=a.lang.rtl===!0?t.side:F.value;return[[re,Re,void 0,{[o]:!0,mouse:!0}]]}),Ne=f(()=>{const o=a.lang.rtl===!0?F.value:t.side;return[[re,pe,void 0,{[o]:!0,mouse:!0}]]}),We=f(()=>{const o=a.lang.rtl===!0?F.value:t.side;return[[re,pe,void 0,{[o]:!0,mouse:!0,mouseAllDir:!0}]]});function G(){Ue(c,t.behavior==="mobile"||t.behavior!=="desktop"&&r.totalWidth.value<=t.breakpoint)}b(c,o=>{o===!0?(q=p.value,p.value===!0&&$(!1)):t.overlay===!1&&t.behavior!=="mobile"&&q!==!1&&(p.value===!0?(B(0),M(0),Z()):U(!1))}),b(()=>t.side,(o,d)=>{r.instances[d]===A&&(r.instances[d]=void 0,r[d].space=!1,r[d].offset=0),r.instances[o]=A,r[o].size=C.value,r[o].space=z.value,r[o].offset=j.value}),b(r.totalWidth,()=>{(r.isContainer.value===!0||document.qScrollPrevented!==!0)&&G()}),b(()=>t.behavior+t.breakpoint,G),b(r.isContainer,o=>{p.value===!0&&m(o!==!0),o===!0&&G()}),b(r.scrollbarWidth,()=>{B(p.value===!0?0:void 0)}),b(j,o=>{E("offset",o)}),b(z,o=>{u("onLayout",o),E("space",o)}),b(x,()=>{B()}),b(C,o=>{B(),ee(t.miniToOverlay,o)}),b(()=>t.miniToOverlay,o=>{ee(o,C.value)}),b(()=>a.lang.rtl,()=>{B()}),b(()=>t.mini,()=>{t.noMiniAnimation||t.modelValue===!0&&(Xe(),r.animate())}),b(S,o=>{u("miniState",o)});function B(o){o===void 0?be(()=>{o=p.value===!0?0:C.value,B(D.value*o)}):(r.isContainer.value===!0&&x.value===!0&&(c.value===!0||Math.abs(o)===C.value)&&(o+=D.value*r.scrollbarWidth.value),me.value=o)}function M(o){ve.value=o}function J(o){const d=o===!0?"remove":r.isContainer.value!==!0?"add":"";d!==""&&document.body.classList[d]("q-body--drawer-toggle")}function Xe(){g!==null&&clearTimeout(g),e.proxy&&e.proxy.$el&&e.proxy.$el.classList.add("q-drawer--mini-animate"),Y.value=!0,g=setTimeout(()=>{g=null,Y.value=!1,e&&e.proxy&&e.proxy.$el&&e.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Re(o){if(p.value!==!1)return;const d=C.value,k=N(o.distance.x,0,d);if(o.isFinal===!0){k>=Math.min(75,d)===!0?U():(r.animate(),M(0),B(D.value*d)),Q.value=!1;return}B((a.lang.rtl===!0?x.value!==!0:x.value)?Math.max(d-k,0):Math.min(0,k-d)),M(N(k/d,0,1)),o.isFirst===!0&&(Q.value=!0)}function pe(o){if(p.value!==!0)return;const d=C.value,k=o.direction===t.side,I=(a.lang.rtl===!0?k!==!0:k)?N(o.distance.x,0,d):0;if(o.isFinal===!0){Math.abs(I)<Math.min(75,d)===!0?(r.animate(),M(1),B(0)):$(),Q.value=!1;return}B(D.value*I),M(N(1-I/d,0,1)),o.isFirst===!0&&(Q.value=!0)}function Z(){m(!1),J(!0)}function E(o,d){r.update(t.side,o,d)}function Ue(o,d){o.value!==d&&(o.value=d)}function ee(o,d){E("size",o===!0?t.miniWidth:d)}return r.instances[t.side]=A,ee(t.miniToOverlay,C.value),E("space",z.value),E("offset",j.value),t.showIfAbove===!0&&t.modelValue!==!0&&p.value===!0&&t["onUpdate:modelValue"]!==void 0&&u("update:modelValue",!0),ut(()=>{u("onLayout",z.value),u("miniState",S.value),q=t.showIfAbove===!0;const o=()=>{(p.value===!0?T:fe)(!1,!0)};if(r.totalWidth.value!==0){be(o);return}h=b(r.totalWidth,()=>{h(),h=void 0,p.value===!1&&t.showIfAbove===!0&&c.value===!1?U(!1):o()})}),Se(()=>{h!==void 0&&h(),g!==null&&(clearTimeout(g),g=null),p.value===!0&&Z(),r.instances[t.side]===A&&(r.instances[t.side]=void 0,E("size",0),E("offset",0),E("space",!1))}),()=>{const o=[];c.value===!0&&(t.noSwipeOpen===!1&&o.push(lt(O("div",{key:"open",class:`q-drawer__opener fixed-${t.side}`,"aria-hidden":"true"}),He.value)),o.push(ge("div",{ref:"backdrop",class:Pe.value,style:$e.value,"aria-hidden":"true",onClick:$},void 0,"backdrop",t.noSwipeBackdrop!==!0&&p.value===!0,()=>We.value)));const d=S.value===!0&&n.mini!==void 0,k=[O("div",{...y,key:""+d,class:[Fe.value,y.class]},d===!0?n.mini():de(n.default))];return t.elevated===!0&&p.value===!0&&k.push(O("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(ge("aside",{ref:"content",class:Ie.value,style:Ae.value},k,"contentclose",t.noSwipeClose!==!0&&c.value===!0,()=>Ne.value)),O("div",{class:"q-drawer-container"},o)}}});const Mt=Oe({__name:"EssentialLink",props:{title:{},caption:{default:""},link:{default:"#"},icon:{default:""}},setup(t){const n=Me(),u=t,y=()=>{n.push({name:u.link})};return(e,a)=>(W(),le(bt,{clickable:"",tag:"a",onClick:y},{default:_(()=>[e.icon?(W(),le(ke,{key:0,avatar:""},{default:_(()=>[w(st,{name:e.icon},null,8,["name"])]),_:1})):dt("",!0),w(ke,null,{default:_(()=>[w(se,null,{default:_(()=>[X(ie(e.title),1)]),_:1}),w(se,{caption:""},{default:_(()=>[X(ie(e.caption),1)]),_:1})]),_:1})]),_:1}))}}),$t=Oe({__name:"MainLayout",setup(t){const n=ct(),u=Me(),y=()=>{n.logout(),u.push({name:"login"})},e=[{title:"Pedido",icon:"shopping_cart_checkout",link:"pedidos"},{title:"Proveedor",icon:"local_shipping",link:"proveedores"},{title:"Clientes",link:"clientes",icon:"person"},{title:"Productos",icon:"agriculture",link:"productos"},{title:"Colaboradores",icon:"group",link:"colaboradores"},{title:"Ventas",link:"ventas",icon:"trending_up"}],a=L(!1);function l(){a.value=!a.value}return(m,v)=>{const s=ft("router-view");return W(),le(kt,{view:"hHh Lpr lFf"},{default:_(()=>[w(Tt,{elevated:""},{default:_(()=>[w(Bt,null,{default:_(()=>[w(we,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:l}),w(_t),w(gt,{color:"orange","text-color":"white",icon:Ce(n).getIconRol},{default:_(()=>[X(ie(Ce(n).getUserName),1)]),_:1},8,["icon"]),w(we,{flat:"",round:"",dense:"",icon:"logout",onClick:v[0]||(v[0]=r=>y())})]),_:1})]),_:1}),w(Ot,{modelValue:a.value,"onUpdate:modelValue":v[1]||(v[1]=r=>a.value=r),"show-if-above":"",bordered:""},{default:_(()=>[w(wt,null,{default:_(()=>[w(se,{header:""},{default:_(()=>[X(" Menu Principal ")]),_:1}),(W(),vt(ht,null,mt(e,r=>w(Mt,pt({key:r.title},r),null,16)),64))]),_:1})]),_:1},8,["modelValue"]),w(qt,null,{default:_(()=>[w(s)]),_:1})]),_:1})}}});export{$t as default};