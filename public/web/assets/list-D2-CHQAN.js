function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/import-2C3mbQN_.js","assets/vendor-map-DEYI1At9.js","assets/vendor-react-BlTfyhut.js","assets/vendor-tdesign-6RiSygsd.js","assets/modulepreload-polyfill-qjA-9dc5.js","assets/vendor-echarts-YtT1A1hM.js","assets/vendor-refine-N0YDYeEW.js","assets/vendor-tinymce-DkQhX6vO.js","assets/vendor-markdown-B4Wj7HZg.js","assets/vendor-lib-DKIH9BQe.js","assets/useUpload-DYrPesVj.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as l}from"./vendor-markdown-B4Wj7HZg.js";import{j as e}from"./vendor-map-DEYI1At9.js";import{R as r}from"./vendor-react-BlTfyhut.js";import{_ as s}from"./vendor-refine-N0YDYeEW.js";import{X as a}from"./modulepreload-polyfill-qjA-9dc5.js";import"./vendor-echarts-YtT1A1hM.js";import"./vendor-tdesign-6RiSygsd.js";import{B as m}from"./button-DAYx5G5K.js";import{D as n}from"./link-Bpbx42l9.js";import"./vendor-tinymce-DkQhX6vO.js";import"./vendor-lib-DKIH9BQe.js";import"./action-BtJC5SON.js";const R=()=>{const t=s(),o=r.useMemo(()=>[{colKey:"id",sorter:!0,sortType:"all",title:"ID",width:150},{colKey:"code",title:t("tools.area.fields.code"),ellipsis:!0},{colKey:"name",title:t("tools.area.fields.name"),ellipsis:!0},{colKey:"level",title:t("tools.area.fields.level"),ellipsis:!0},{colKey:"link",title:t("table.actions"),fixed:"right",align:"center",width:100,cell:({row:i})=>e.jsx("div",{className:"flex justify-center gap-4",children:e.jsx(n,{rowId:i.id})})}],[t]);return e.jsx(a,{columns:o,table:{rowKey:"id"},title:t("tools.area.name"),actionRender:()=>e.jsx(m,{title:t("buttons.import"),component:()=>l(()=>import("./import-2C3mbQN_.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])),action:"import",icon:e.jsx("div",{className:"t-icon i-tabler:plus"})})})};export{R as default};
