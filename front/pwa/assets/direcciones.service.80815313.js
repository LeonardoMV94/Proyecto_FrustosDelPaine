import{ak as c}from"./index.27c63ad1.js";const r=async e=>c.post("/direcciones",e),a=async()=>(await c.get("/comunas/")).data,s=async e=>await c.post("/direcciones/direcciones-de-clientes",e),i=async e=>await c.post("/direcciones/direcciones-de-colaboradores",e);export{s as a,i as b,r as c,a as g};
