import{u as w,B as o}from"./kenpoStore.a56ae87c.js";import{j as _,t as b,a2 as T,a as g,r as c,m as d,W as h,X as r,a3 as m,u as B,a4 as y,a5 as q}from"./index.b2fda5e2.js";const C={class:"col"},x={class:"row"},z={class:"col-12"},I={style:{"font-size":"10vw"}},P={class:"row"},F={class:"col-12"},M={key:0,style:{"font-size":"5vw"}},D=_({name:"FlashCards",__name:"FlashCards",setup(N){b(async()=>{await p()});const f=T(),t=w(),s=g(()=>(t.getFilteredTechniques.length<1&&f.push({name:"Index"}),t.getFilteredTechniques)),i=c(""),v=c(""),a=c("white"),l=c("black");async function p(){let e=c(0);for(;;){if(t.randomizeTechniques){let n=e.value;for(;n===e.value;)n=Math.floor(Math.random()*s.value.length);e.value=n}switch(i.value=s.value[e.value].TechniqueName,v.value=s.value[e.value].OpponentInteraction,s.value[e.value].Belt){case o.Yellow:a.value="yellow",l.value="black";break;case o.Orange:a.value="orange",l.value="black";break;case o.Purple:a.value="purple",l.value="black";break;case o.Blue:a.value="blue",l.value="black";break;case o.Green:a.value="green",l.value="black";break;case o.Brown1:case o.Brown2:case o.Brown3:a.value="#5c2e00",l.value="black";break;case o.Black:a.value="black",l.value="white";break;default:a.value="white",l.value="black"}t.overrideTimeToPerform?await u(t.overrideTimeToPerform*1e3):await u(s.value[e.value].TimeToPerform*1e3),t.randomizeTechniques||(e.value===s.value.length-1?e.value=0:e.value++)}function u(n){return new Promise(k=>{setTimeout(()=>{console.log("Done waiting"),k(n)},n)})}}return(e,u)=>(d(),h("div",{class:"fullscreen text-center items-center row",style:q({backgroundColor:a.value,color:l.value})},[r("div",C,[r("div",x,[r("div",z,[r("div",I,m(i.value),1)])]),r("div",P,[r("div",F,[B(t).displayOpponentInteraction?(d(),h("div",M,m(v.value),1)):y("",!0)])])])],4))}});export{D as default};
