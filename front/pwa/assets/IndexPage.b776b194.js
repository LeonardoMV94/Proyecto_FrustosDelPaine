import{a as g,c as R,r,w as x,o as I,h as a,ai as Q,b as P,aj as $,J as L,L as M,M as O,N as E,O as F}from"./index.27c63ad1.js";import{Q as H}from"./QPage.4079937a.js";const D={ratio:[String,Number]};function J(e,o){return g(()=>{const u=Number(e.ratio||(o!==void 0?o.value:void 0));return isNaN(u)!==!0&&u>0?{paddingBottom:`${100/u}%`}:null})}const U=16/9;var V=R({name:"QImg",props:{...D,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:U},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:o,emit:u}){const h=r(e.initialRatio),S=J(e,h);let i=null,d=!1;const n=[r(null),r(v())],l=r(0),s=r(!1),c=r(!1),C=g(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),q=g(()=>({width:e.width,height:e.height})),N=g(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),T=g(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));x(()=>y(),_);function y(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function v(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}function _(t){i!==null&&(clearTimeout(i),i=null),c.value=!1,t===null?(s.value=!1,n[l.value^1].value=v()):s.value=!0,n[l.value].value=t}function k({target:t}){d!==!0&&(i!==null&&(clearTimeout(i),i=null),h.value=t.naturalHeight===0?.5:t.naturalWidth/t.naturalHeight,b(t,1))}function b(t,f){d===!0||f===1e3||(t.complete===!0?z(t):i=setTimeout(()=>{i=null,b(t,f+1)},50))}function z(t){d!==!0&&(l.value=l.value^1,n[l.value].value=null,s.value=!1,c.value=!1,u("load",t.currentSrc||t.src))}function B(t){i!==null&&(clearTimeout(i),i=null),s.value=!1,c.value=!0,n[l.value].value=null,n[l.value^1].value=v(),u("error",t)}function w(t){const f=n[t].value,m={key:"img_"+t,class:N.value,style:T.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...f};return l.value===t?(m.class+=" q-img__image--waiting",Object.assign(m,{onLoad:k,onError:B})):m.class+=" q-img__image--loaded",a("div",{class:"q-img__container absolute-full",key:"img"+t},a("img",m))}function j(){return s.value!==!0?a("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},P(o[c.value===!0?"error":"default"])):a("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},o.loading!==void 0?o.loading():e.noSpinner===!0?void 0:[a($,{color:e.spinnerColor,size:e.spinnerSize})])}return _(y()),I(()=>{d=!0,i!==null&&(clearTimeout(i),i=null)}),()=>{const t=[];return S.value!==null&&t.push(a("div",{key:"filler",style:S.value})),c.value!==!0&&(n[0].value!==null&&t.push(w(0)),n[1].value!==null&&t.push(w(1))),t.push(a(Q,{name:"q-transition--fade"},j)),a("div",{class:C.value,style:q.value,role:"img","aria-label":e.alt},t)}}}),W="/assets/inicioSesion.36841dfd.jpg";const K=L({__name:"IndexPage",setup(e){return r([{id:1,content:"ct1"},{id:2,content:"ct2"},{id:3,content:"ct3"},{id:4,content:"ct4"},{id:5,content:"ct5"}]),r({totalCount:1200}),(o,u)=>(M(),O(H,{class:"row items-center justify-evenly"},{default:E(()=>[F(V,{src:W,style:{"max-width":"100%","max-height":"100%"}})]),_:1}))}});export{K as default};
