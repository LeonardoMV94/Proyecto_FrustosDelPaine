import{ak as K,J as R,al as F,r as d,E as j,L as B,M as q,N as s,W as $,am as M,an as P,O as o,ao as z,ap as i,aq as J,V as x,ar as L,as as T,at as W,X,au as G,R as I,S as U,av as N,Q as H,aw as _}from"./index.27c63ad1.js";import{Q as Y,a as Q}from"./QForm.10717428.js";import{Q as Z,a as g}from"./QTr.acecbace.js";import{Q as h,a as ee}from"./QTable.ff32c38f.js";import{g as le,c as ae,a as oe}from"./direcciones.service.80815313.js";import{u as te}from"./clientes.f3293ca8.js";import"./QItem.85f51b38.js";const ne=async S=>(await K.delete(`/clientes/${S}`)).data,ue=async()=>(await K.get("/clientes")).data,re=async S=>(await K.post("/clientes",S)).data,se=T("div",{class:"text-center text-h5 q-pb-md"},"Crear un nuevo Cliente",-1),de=T("div",{class:"text-center text-h5 q-pb-md"},"Direccion del cliente",-1),ie=R({__name:"CrearCliente",props:{dialogVisible:{type:Boolean}},emits:["update:dialogVisible"],setup(S,{emit:c}){const D=S,{dialogVisible:f}=F(D),E=c,C=d(),k=d(),V=d(),A=d(),w=d(),v=d(),p=d(),y=d(),b=d(),n=d(),u=p.value;j(async()=>{le().then(t=>{v.value=t,console.log(v)}).catch(t=>console.log("error al obtener Comunas",t))});const e=()=>{const t={calle:y.value,numero_calle:b.value,numero_departamento:n.value,comuna_id:u};ae(t).then(m=>r.value=m.data.id).catch(m=>console.log(m));const r=d(),l={rut:C.value,nombre:k.value,apellido:V.value,correo:A.value,celular:w.value,direccion_id:r.value},O=d();re(l).then(m=>{O.value=m.id,console.log("cliente insertado : ",m)}).catch(m=>{console.log("Error al insertar cliente: ",m)}),oe({Clientes_id:O.value,Direcciones_id:r.value}).then(m=>console.log("direccion de cliente insertada ",m.data)).catch(m=>console.log("error al insertar direcciones de clientes ",m)),a()},a=()=>{E("update:dialogVisible",!1)};return(t,r)=>(B(),q(P,{modelValue:$(f),"onUpdate:modelValue":r[9]||(r[9]=l=>M(f)?f.value=l:null)},{default:s(()=>[o(L,null,{default:s(()=>[o(z,null,{default:s(()=>[se,o(Y,{onSubmi:e},{default:s(()=>[o(i,{class:"q-pb-md",modelValue:C.value,"onUpdate:modelValue":r[0]||(r[0]=l=>C.value=l),label:"Ingrese rut",mask:"########-#","unmasked-value":"",rules:[l=>!!l||"Ingrese un rut"]},null,8,["modelValue","rules"]),o(i,{modelValue:k.value,"onUpdate:modelValue":r[1]||(r[1]=l=>k.value=l),label:"Ingrese Nombre",mask:"SSSSSSSSSSSSSSSSSSSSSSSSSSS","unmasked-value":"",rules:[l=>!!l||"Ingrese un nombre"]},null,8,["modelValue","rules"]),o(i,{modelValue:V.value,"onUpdate:modelValue":r[2]||(r[2]=l=>V.value=l),label:"Ingrese apellido",mask:"SSSSSSSSSSSSSSSSSSSSSSSSSSS","unmasked-value":"",rules:[l=>!!l||"Ingrese un apellido"]},null,8,["modelValue","rules"]),o(i,{type:"email",modelValue:A.value,"onUpdate:modelValue":r[3]||(r[3]=l=>A.value=l),label:"Ingrese Correo",mask:"AAAAAAA@AAAAAAA.AAA","unmasked-value":"",rules:[l=>!!l||"Ingrese un correo",l=>/.+@.+\..+/.test(l)||"Correo no Valido"]},null,8,["modelValue","rules"]),o(i,{modelValue:w.value,"onUpdate:modelValue":r[4]||(r[4]=l=>w.value=l),label:"Ingrese su Celular",mask:"(+56) 9 ########",rules:[l=>!!l||"Ingrese un numero de Celular"]},null,8,["modelValue","rules"]),de,o(i,{modelValue:y.value,"onUpdate:modelValue":r[5]||(r[5]=l=>y.value=l),label:"Ingrese la calle",mask:"SSSSSSSSSSSSSSSSSSSSSSSSSSS","unmasked-value":"",rules:[l=>!!l||"Ingrese un calle"]},null,8,["modelValue","rules"]),o(i,{modelValue:b.value,"onUpdate:modelValue":r[6]||(r[6]=l=>b.value=l),label:"Ingrese numero de calle",mask:"NNNNNN","unmasked-value":"",rules:[l=>!!l||"Ingrese un numero calle"]},null,8,["modelValue","rules"]),o(i,{modelValue:n.value,"onUpdate:modelValue":r[7]||(r[7]=l=>n.value=l),label:"Ingrese numero de departamento",mask:"NNNNNN","unmasked-value":"",rules:[l=>!!l||"Ingrese un numero departamento"]},null,8,["modelValue","rules"]),o(h,{options:v.value,modelValue:p.value,"onUpdate:modelValue":r[8]||(r[8]=l=>p.value=l),label:"Comunas"},null,8,["options","modelValue"])]),_:1})]),_:1}),o(J,{align:"right"},{default:s(()=>[o(x,{color:"secondary",type:"submit",label:"crear",onClick:e}),o(x,{color:"negative",label:"Cancel",onClick:a})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}}),me={class:"q-pa-md"},fe=R({__name:"clientesPages",setup(S){const c=te(),D=async(n,u)=>{const e={rut:u};console.log("editarItemRut",n,e),await c.updateCliente(n,e)},f=async(n,u)=>{const e={nombre:u};console.log("editarItemNombre",n,e),await c.updateCliente(n,e)},E=async(n,u)=>{const e={apellido:u};console.log("editarItemApellido",n,e),await c.updateCliente(n,e)},C=async(n,u)=>{const e={correo:u};console.log("editarItemCorreo",n,e),await c.updateCliente(n,e)},k=async(n,u)=>{const e={celular:u};console.log("editarItemCelular",n,e),await c.updateCliente(n,e)},V=d(!1),A=()=>{V.value=!0},w=async n=>{V.value=n},v=d(),p=()=>{ue().then(n=>{v.value=n,console.log(v.value)}).catch(n=>console.log("error al obtener datos ",n))},y=n=>{ne(n).then(u=>{console.log("cliente eliminado ",u.id)}).catch(u=>{console.log("cliente eliminado",u)}).finally(()=>{p()})};W(async()=>{});const b=[{field:"rut",name:"rut",label:"rut"},{field:"nombre",name:"nombre",label:"nombre"},{field:"apellido",name:"apellido",label:"apellido"},{field:"correo",name:"correo",label:"correo"},{field:"celular",name:"celular",label:"celular"},{field:"delete",name:"delete",label:"delete"}];return j(async()=>{p(),console.log("no Veo los botones"),console.log(b)}),(n,u)=>(B(),X("div",me,[o(x,{unelevated:"",color:"primary",label:"Crear Cliente",onClick:A}),o(ee,{style:{height:"700px"},flat:"",bordered:"",title:"Tabla de Clientes","no-data-label":"No se encontro ningun cliente",rows:v.value,columns:b},{body:s(e=>[o(Z,{props:e},{default:s(()=>[o(g,{key:"rut",props:e},{default:s(()=>[I(U(e.row.rut)+" ",1),o(Q,{modelValue:e.row.rut,"onUpdate:modelValue":a=>e.row.rut=a,title:"Editar rut",buttons:"",persistent:"",onSave:a=>D(e.row.rut,a)},{default:s(a=>[o(i,{modelValue:a.value,"onUpdate:modelValue":t=>a.value=t,autofocus:"",counter:"",mask:"########-#","unmasked-value":"",onKeyup:u[0]||(u[0]=N(_(()=>{},["stop"]),["enter"])),rules:[t=>!!t||"Ingrese un rut"]},null,8,["modelValue","onUpdate:modelValue","rules"])]),_:2},1032,["modelValue","onUpdate:modelValue","onSave"])]),_:2},1032,["props"]),o(g,{key:"nombre",props:e},{default:s(()=>[I(U(e.row.nombre)+" ",1),o(Q,{modelValue:e.row.nombre,"onUpdate:modelValue":a=>e.row.nombre=a,title:"Editar nombre",buttons:"",persistent:"",onSave:a=>f(e.row.id,a)},{default:s(a=>[o(i,{modelValue:a.value,"onUpdate:modelValue":t=>a.value=t,autofocus:"",counter:"",mask:"SSSSSSSSSSSSSSSSSSSSSSSS","unmasked-value":"",onKeyup:u[1]||(u[1]=N(_(()=>{},["stop"]),["enter"])),rules:[t=>!!t||"Ingrese un nombre"]},null,8,["modelValue","onUpdate:modelValue","rules"])]),_:2},1032,["modelValue","onUpdate:modelValue","onSave"])]),_:2},1032,["props"]),o(g,{key:"apellido",props:e},{default:s(()=>[I(U(e.row.apellido)+" ",1),o(Q,{modelValue:e.row.apellido,"onUpdate:modelValue":a=>e.row.apellido=a,title:"Editar apellido",buttons:"",persistent:"",onSave:a=>E(e.row.id,a)},{default:s(a=>[o(i,{modelValue:a.value,"onUpdate:modelValue":t=>a.value=t,autofocus:"",counter:"",mask:"SSSSSSSSSSSSSSSSSSSSSSSS","unmasked-value":"",onKeyup:u[2]||(u[2]=N(_(()=>{},["stop"]),["enter"])),rules:[t=>!!t||"Ingrese un apellido"]},null,8,["modelValue","onUpdate:modelValue","rules"])]),_:2},1032,["modelValue","onUpdate:modelValue","onSave"])]),_:2},1032,["props"]),o(g,{key:"correo",props:e},{default:s(()=>[I(U(e.row.correo)+" ",1),o(Q,{modelValue:e.row.correo,"onUpdate:modelValue":a=>e.row.correo=a,title:"Editar correo",buttons:"",persistent:"",onSave:a=>C(e.row.id,a)},{default:s(a=>[o(i,{modelValue:a.value,"onUpdate:modelValue":t=>a.value=t,autofocus:"",counter:"",mask:"AAAAAAA@AAAAAAA.AAA","unmasked-value":"",onKeyup:u[3]||(u[3]=N(_(()=>{},["stop"]),["enter"])),rules:[t=>!!t||"Ingrese un correo",t=>/.+@.+\..+/.test(t)||"Correo no Valido"]},null,8,["modelValue","onUpdate:modelValue","rules"])]),_:2},1032,["modelValue","onUpdate:modelValue","onSave"])]),_:2},1032,["props"]),o(g,{key:"celular",props:e},{default:s(()=>[I(U(e.row.celular)+" ",1),o(Q,{modelValue:e.row.celular,"onUpdate:modelValue":a=>e.row.celular=a,title:"Editar celular",buttons:"",persistent:"",onSave:a=>k(e.row.id,a)},{default:s(a=>[o(i,{modelValue:a.value,"onUpdate:modelValue":t=>a.value=t,autofocus:"",counter:"",mask:"(+56) 9 ########",rules:[t=>!!t||"Ingrese un numero de Celular"],"unmasked-value":"",onKeyup:u[4]||(u[4]=N(_(()=>{},["stop"]),["enter"]))},null,8,["modelValue","onUpdate:modelValue","rules"])]),_:2},1032,["modelValue","onUpdate:modelValue","onSave"])]),_:2},1032,["props"]),o(g,{key:"delete",props:e},{default:s(()=>[o(x,{size:"md",color:"red",label:"Eliminar ",onClick:a=>y(e.row.id)},{default:s(()=>[o(H,{name:"delete"})]),_:2},1032,["onClick"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows"]),(B(),q(G,null,{default:s(()=>[o(ie,{dialogVisible:V.value,"onUpdate:dialogVisible":w},null,8,["dialogVisible"])]),_:1}))]))}});export{fe as default};
