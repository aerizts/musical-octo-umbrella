import{j as r}from"./vendor-map-DEYI1At9.js";import{R as o}from"./vendor-react-BlTfyhut.js";import{_ as s}from"./vendor-refine-N0YDYeEW.js";import{X as a}from"./modulepreload-polyfill-qjA-9dc5.js";import"./vendor-echarts-YtT1A1hM.js";import"./vendor-tdesign-6RiSygsd.js";import{a as n}from"./button-DAYx5G5K.js";import{E as m,D as c}from"./link-Bpbx42l9.js";import"./vendor-tinymce-DkQhX6vO.js";import"./vendor-lib-DKIH9BQe.js";import"./vendor-markdown-B4Wj7HZg.js";import"./action-BtJC5SON.js";const D=()=>{const e=s(),l=o.useMemo(()=>[{colKey:"id",sorter:!0,sortType:"all",title:"ID",width:100},{colKey:"name",title:e("content.recommend.fields.name"),ellipsis:!0},{colKey:"articles",title:e("content.recommend.fields.articles"),ellipsis:!0,cell:({row:t})=>{var i;return(i=t==null?void 0:t.articles)==null?void 0:i.length}},{colKey:"created_at",title:e("content.recommend.fields.createdAt"),sorter:!0,sortType:"all",width:200},{colKey:"link",title:e("table.actions"),fixed:"right",align:"center",width:120,cell:({row:t})=>r.jsxs("div",{className:"flex justify-center gap-4",children:[r.jsx(m,{rowId:t.id}),r.jsx(c,{rowId:t.id})]})}],[e]);return r.jsx(a,{columns:l,actionRender:()=>r.jsx(n,{})})};export{D as default};
