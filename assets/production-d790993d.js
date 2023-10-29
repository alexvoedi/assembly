import{d as y,m as g,n as _,u as x,j as h,k as v,b as k,o as P,c as N,e as a,w as $,f as S,h as T,F as E,l as t,I as c,N as I,B as w}from"./index-7fc0bd85.js";import{_ as B}from"./BaseTableButton.vue_vue_type_script_setup_true_lang-1f65870b.js";import{_ as C}from"./ProgressIndicator.vue_vue_type_script_setup_true_lang-fb21d5c7.js";import{u as O}from"./use-message-2d2e8c26.js";import{N as j}from"./headers-7c1de036.js";import{_ as q}from"./DataTable-e8378f04.js";import"./Button-75fe7bd6.js";import"./index-567e13ca.js";const G=y({__name:"production",setup(F){const d=g(),n=_(),i=x(),m=h(),u=v(),l=O(),p=[{title:"Name",key:"name"},{title:"Description",key:"description"},{title:"Cost",key:"cost",render(e){if(!e.cost)return t("div");const o=[];return e.cost.items&&o.push(t("div",{},Object.values(e.cost.items).map(s=>t("div",{class:["flex items-center",i.hasQuantityOfItem(s.id,s.quantity)?"text-green":"text-red"]},`${s.quantity} ${c[s.id].name}`)))),e.cost.energy&&o.push(t("div",{class:["flex items-center gap-1",m.hasEnoughEnergy(e.cost.energy)?"text-green":"text-red"]},[t("span",{},`${e.cost.energy}`),t(I,{class:"ico-mdi-flash"})])),e.cost.money&&o.push(t("div",{class:["flex items-center",i.hasEnoughMoney(e.cost.money)?"text-green":"text-red"]},`${e.cost.money} $`)),t("div",{class:"font-mono"},o)}},{title:"Output",key:"items",minWidth:160,render(e){return t("div",{class:"font-mono"},Object.values(e.items).map(o=>t("div",{class:"flex items-center"},`${o.quantity} ${c[o.id].name} (${100*o.probability}%)`)))}},{title:"Time",key:"productionTime",maxWidth:120,render(e){return t("div",{class:"font-mono"},e.productionTime/1e3)}},{title:"Per minute",key:"productionsPerMinute",render(e){return t("div",{class:"font-mono"},(6e4/e.productionTime).toFixed(2))}},{title:"Progress",key:"progress",width:90,render(e){if(!n.producing[e.id])return t("div");const s=u.value.getTime(),r=n.getProgress(e.id,s);return t(C,{progress:r})}},{title:"Actions",key:"actions",render(e){const o=n.getProduction(e.id);return t(B,{iconClass:[o?"ico-mdi-pause":"ico-mdi-play",o?"text-red":"text-green"],onClick:o?()=>n.stopProduction(e.id):()=>{try{n.startProduction({blueprintId:e.id,repeat:!0})}catch(s){s instanceof Error&&l.error(s.message)}}})}}],f=k(()=>d.blueprints.map(e=>({...w[e]})));return(e,o)=>{const s=j,r=q;return P(),N(E,null,[a(s,null,{default:$(()=>[S("Production")]),_:1}),a(r,{columns:p,data:T(f)},null,8,["data"])],64)}}});export{G as default};
