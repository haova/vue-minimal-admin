import{j as d,o as t,c as a,F as i,k as _,g as f,w as l,a as n,t as p,i as h,l as x,b as c,d as v}from"./index.15fff4fb.js";import{M as b}from"./MPanel.c1494050.js";import"./plugin-vue_export-helper.21dcd24c.js";const k={class:"inline-flex items-center"},B={key:0,class:"mr-2"},C={__name:"MBreadcrumb",props:["items"],emits:["navigate"],setup(s){return(r,m)=>{const o=d("ion-icon");return t(),a("div",k,[(t(!0),a(i,null,_(s.items,(e,u)=>(t(),f(x(e.href?"RouterLink":"a"),{class:"text-sm inline-flex items-center mactive:text-stone-400 dark:mactive:text-stone-500 cursor-pointer",to:e.href,active:e.active||null,key:e.text,onClick:w=>r.$emit("navigate",e)},{default:l(()=>[n(o,{class:"mr-2",name:u===0?"home":"chevron-forward"},null,8,["name"]),e.text?(t(),a("span",B,p(e.text),1)):h("",!0)]),_:2},1032,["to","active","onClick"]))),128))])}}},g=v("h1",{class:"mt-4 text-3xl font-semibold"},"Breadcrumb",-1),$={__name:"BreadcrumbView",setup(s){const r=[{text:"Home",href:"/"},{text:"Mintailor",href:"/dashboard"},{text:"Breadcrumb",href:"/dashboard/breadcrumb",active:!0}];return(m,o)=>(t(),a(i,null,[g,n(c(b),null,{default:l(()=>[n(c(C),{items:r})]),_:1})],64))}};export{$ as default};
