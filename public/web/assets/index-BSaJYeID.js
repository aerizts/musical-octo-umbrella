import{j as f}from"./vendor-map-DEYI1At9.js";import{r as l}from"./vendor-react-BlTfyhut.js";import{b as x,E as y}from"./vendor-echarts-YtT1A1hM.js";import{K as g,L as d}from"./modulepreload-polyfill-qjA-9dc5.js";const p=({single:t,options:e,min:s})=>{const i=g(r=>r.dark),n=l.useMemo(()=>{const r=e||[];let o={grid:{top:30,right:30,left:30,bottom:30}};return s&&(o={grid:{top:5,right:5,bottom:5,left:5,show:!1},xAxis:{show:!1},yAxis:{show:!1}}),d.all([o,...r])},[s,e]);return f.jsx(y,{option:n,theme:i?t?"dark-single":"dark":t?"light-single":"light",style:{height:"100%",width:"100%"},opts:{renderer:"svg"}})},b=({labels:t,data:e,legend:s,min:i,options:n})=>{const r=l.useMemo(()=>{const o={xAxis:{type:"category",data:t},yAxis:{type:"value"},series:e==null?void 0:e.map(a=>({name:a.name,data:a.data,type:"bar",barMaxWidth:40})),tooltip:{trigger:"axis"}};return s&&(o.legend={show:!0}),o},[e,t,s]);return f.jsx(p,{options:[r,n||{}],min:i})},A=({labels:t,data:e,min:s,legend:i,options:n})=>{const r=l.useMemo(()=>{const o={xAxis:{type:"category",data:t,boundaryGap:!1},yAxis:{type:"value"},series:e==null?void 0:e.map(a=>({name:a.name,data:a.data,type:"line",smooth:!0})),tooltip:{trigger:"axis"}};return i&&(o.legend={show:!0}),o},[e,t,i]);return f.jsx(p,{options:[r,n||{}],min:s})},k=({name:t,map:e,data:s,min:i,params:n,options:r,single:o})=>{const a=g(m=>m.dark),[u,c]=l.useState(!0);l.useEffect(()=>{fetch(`/maps/${e}.json`).then(m=>m.json()).then(m=>{x("china",m),c(!1)})},[]);const h=l.useMemo(()=>({visualMap:{show:!1,min:0,max:5e3,realtime:!1,calculable:!0,...n},tooltip:{trigger:"item",showDelay:0,transitionDuration:.2},series:[{name:t,type:"map",map:e,label:{show:!1},itemStyle:{areaColor:a?"#181818":"#f2f3ff"},data:s,zoom:1.2}]}),[a,s,e]);return u?f.jsx(f.Fragment,{}):f.jsx(p,{options:[h,r||{}],min:i,single:o})};export{A as C,b as a,k as b};
