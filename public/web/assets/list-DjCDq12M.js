const __vite__fileDeps=["assets/save-D79KL6ey.js","assets/vendor-map-DjDVTs0N.js","assets/vendor-react-BlTfyhut.js","assets/vendor-tdesign-BxQoi5Mo.js","assets/modulepreload-polyfill-D6ThnDFs.js","assets/vendor-echarts-JHGMnnew.js","assets/vendor-refine-BK41FXO6.js","assets/vendor-tinymce-lUkVC9Da.js","assets/vendor-markdown-CL7ixDl-.js","assets/vendor-lib-CKVa3D7Q.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as l}from"./vendor-markdown-CL7ixDl-.js";import{j as s}from"./vendor-map-DjDVTs0N.js";import{P as d,G as m}from"./vendor-refine-BK41FXO6.js";import{U as x,M as h,V as j,v as p}from"./modulepreload-polyfill-D6ThnDFs.js";import"./vendor-react-BlTfyhut.js";import"./vendor-echarts-JHGMnnew.js";import{c as u,P as c,Y as f,N as g,B as v,a6 as o,m as n}from"./vendor-tdesign-BxQoi5Mo.js";import{C as N,E as y}from"./button-VrESTZal.js";import"./vendor-tinymce-lUkVC9Da.js";import"./vendor-lib-CKVa3D7Q.js";import"./action-CcBf9P9h.js";const R=()=>{const{data:e,refetch:r,loading:a}=x({});return s.jsx(h,{children:s.jsx(u,{loading:a,showOverlay:!0,children:s.jsx("div",{className:"mb-4",children:e&&e.length>0?s.jsx("div",{className:"grid grid-cols-2 gap-4 2xl:grid-cols-4 xl:grid-cols-3",children:e==null?void 0:e.map((t,i)=>s.jsx(_,{item:t,refetch:r},i))}):s.jsx(c,{children:s.jsx(j,{})})})})})},_=({item:e,refetch:r})=>{const{mutate:a}=d(),t=m();return s.jsx(c,{title:e==null?void 0:e.name,actions:s.jsx(f,{theme:"success",children:t("cms.theme.default")}),bordered:!0,cover:s.jsx(g,{src:e==null?void 0:e.image,className:"h-50",fit:"cover",position:"top"}),footer:s.jsxs("div",{className:"grid grid-cols-3 items-center justify-between divide-x divide-gray-200",children:[s.jsx("div",{className:"flex justify-center",children:s.jsx(p,{title:t("cms.theme.info"),trigger:s.jsx(v,{variant:"text",children:s.jsx(o,{content:t("cms.theme.info"),children:s.jsx(n,{name:"help-circle"})})}),children:s.jsx("div",{className:"p-4",children:(e==null?void 0:e.help)||t("cms.theme.empty")})})}),s.jsx("div",{className:"flex justify-center",children:s.jsx(N,{onConfirm:()=>{a({url:`cms/theme/${e==null?void 0:e.id}`,method:"patch",values:{},successNotification:()=>(r==null||r(),!1)})},variant:"text",action:"store",children:s.jsx(o,{content:t("cms.theme.change"),children:s.jsx(n,{name:"component-switch"})})})}),s.jsx("div",{className:"flex justify-center",children:s.jsx(y,{component:()=>l(()=>import("./save-D79KL6ey.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])),rowId:e==null?void 0:e.id,title:t("cms.theme.config"),variant:"text",theme:"default",children:s.jsx(o,{content:t("cms.theme.config"),children:s.jsx(n,{name:"edit-1"})})})})]})})};export{R as default};
