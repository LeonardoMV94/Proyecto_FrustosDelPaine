import{c as b,y as B,$,A as x,a0 as A,a as i,H as E,g as C,h as c,Q as S,a1 as K,a2 as z,v as I,b as w,a3 as D,a4 as j,a5 as N,r as L,a6 as P,d as M}from"./index.8c963700.js";const O={xs:8,sm:10,md:14,lg:20,xl:24};var T=b({name:"QChip",props:{...B,...$,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:a,emit:l}){const{proxy:{$q:o}}=C(),u=x(e,o),f=A(e,O),g=i(()=>e.selected===!0||e.icon!==void 0),k=i(()=>e.selected===!0?e.iconSelected||o.iconSet.chip.selected:e.icon),y=i(()=>e.iconRemove||o.iconSet.chip.remove),v=i(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),d=i(()=>{const t=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(t?` text-${t} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(v.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(u.value===!0?" q-chip--dark q-dark":"")}),r=i(()=>{const t=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},m={...t,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||o.lang.label.remove};return{chip:t,remove:m}});function h(t){t.keyCode===13&&s(t)}function s(t){e.disable||(l("update:selected",!e.selected),l("click",t))}function q(t){(t.keyCode===void 0||t.keyCode===13)&&(I(t),e.disable===!1&&(l("update:modelValue",!1),l("remove")))}function _(){const t=[];v.value===!0&&t.push(c("div",{class:"q-focus-helper"})),g.value===!0&&t.push(c(S,{class:"q-chip__icon q-chip__icon--left",name:k.value}));const m=e.label!==void 0?[c("div",{class:"ellipsis"},[e.label])]:void 0;return t.push(c("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},K(a.default,m))),e.iconRight&&t.push(c(S,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&t.push(c(S,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:y.value,...r.value.remove,onClick:q,onKeyup:q})),t}return()=>{if(e.modelValue===!1)return;const t={class:d.value,style:f.value};return v.value===!0&&Object.assign(t,r.value.chip,{onClick:s,onKeyup:h}),E("div",t,_(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[z,e.ripple]])}}}),F=b({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:a}){const l=i(()=>parseInt(e.lines,10)),o=i(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(l.value===1?" ellipsis":"")),u=i(()=>e.lines!==void 0&&l.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":l.value}:null);return()=>c("div",{style:u.value,class:o.value},w(a.default))}}),W=b({name:"QList",props:{...B,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:a}){const l=C(),o=x(e,l.proxy.$q),u=i(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(o.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>c(e.tag,{class:u.value},w(a.default))}});function H(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),D.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function U(e,a,l){return l<=a?a:Math.min(l,Math.max(a,e))}function G(e,a,l){if(l<=a)return a;const o=l-a+1;let u=a+(e-a)%o;return u<a&&(u=o+u),u===0?0:u}var J=b({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:a}){const l=i(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>c("div",{class:l.value},w(a.default))}}),X=b({name:"QItem",props:{...B,...j,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:a,emit:l}){const{proxy:{$q:o}}=C(),u=x(e,o),{hasLink:f,linkAttrs:g,linkClass:k,linkTag:y,navigateOnClick:v}=N(),d=L(null),r=L(null),h=i(()=>e.clickable===!0||f.value===!0||e.tag==="label"),s=i(()=>e.disable!==!0&&h.value===!0),q=i(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(u.value===!0?" q-item--dark":"")+(f.value===!0&&e.active===null?k.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(s.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),_=i(()=>{if(e.insetLevel===void 0)return null;const n=o.lang.rtl===!0?"Right":"Left";return{["padding"+n]:16+e.insetLevel*56+"px"}});function t(n){s.value===!0&&(r.value!==null&&(n.qKeyEvent!==!0&&document.activeElement===d.value?r.value.focus():document.activeElement===r.value&&d.value.focus()),v(n))}function m(n){if(s.value===!0&&P(n,[13,32])===!0){I(n),n.qKeyEvent=!0;const R=new MouseEvent("click",n);R.qKeyEvent=!0,d.value.dispatchEvent(R)}l("keyup",n)}function Q(){const n=M(a.default,[]);return s.value===!0&&n.unshift(c("div",{class:"q-focus-helper",tabindex:-1,ref:r})),n}return()=>{const n={ref:d,class:q.value,style:_.value,role:"listitem",onClick:t,onKeyup:m};return s.value===!0?(n.tabindex=e.tabindex||"0",Object.assign(n,g.value)):h.value===!0&&(n["aria-disabled"]="true"),c(y.value,n,Q())}}});export{X as Q,J as a,U as b,H as c,F as d,T as e,W as f,G as n};
