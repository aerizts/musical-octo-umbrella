import{j as e}from"./vendor-map-DEYI1At9.js";import{_ as I,W as v,as as k}from"./vendor-refine-N0YDYeEW.js";import{u as y,S as R,a as C}from"./modulepreload-polyfill-qjA-9dc5.js";import{r as u}from"./vendor-react-BlTfyhut.js";import"./vendor-echarts-YtT1A1hM.js";import{F as a,I as p,R as r,a1 as E,af as M,a9 as P,a0 as S,ai as _}from"./vendor-tdesign-6RiSygsd.js";import{F as w,a as s}from"./page-D6Dju1AV.js";import{U as A}from"./uploadImageManage-C8RLW1Sr.js";import"./vendor-tinymce-DkQhX6vO.js";import"./vendor-lib-DKIH9BQe.js";import{u as x}from"./useSelect-COj1vjfo.js";import"./index-DiPqZObD.js";import{M as D}from"./form-BHITzInN.js";import{E as G}from"./editor-OVTzxtdt.js";import"./vendor-markdown-B4Wj7HZg.js";import"./manage-DyrHxbtH.js";import"./useUpload-DYrPesVj.js";import"./cascader-DEwlaN_5.js";import"./uploadFile-xuCkkb-U.js";import"./tinymce-5bImtXzI.js";const ae=()=>{const t=I(),{id:f}=v(),{data:n,isLoading:h}=k({resource:"content.category"}),j=(n==null?void 0:n.data)||[],[l]=a.useForm(),c=a.useWatch("class_id",l),{request:g}=y(),[o,d]=u.useState(),{name:b}=R();u.useEffect(()=>{if(!c){d(void 0);return}g(`content/category/${c}/magic`,"get").then(m=>{d((m==null?void 0:m.data)||{})})},[c]);const{options:F}=x({resource:"content.source",optionLabel:"name",optionValue:"id"}),{options:i}=x({resource:"content.attr",optionLabel:"name",optionValue:"id"});return e.jsxs(w,{formProps:{labelAlign:"top"},back:!0,form:l,id:f,settingRender:e.jsxs(e.Fragment,{children:[e.jsx(a.FormItem,{label:t("content.article.fields.subtitle"),name:"subtitle",children:e.jsx(p,{})}),e.jsx(a.FormItem,{label:t("content.article.fields.image"),name:"images",children:e.jsx(A,{accept:"image/*",multiple:!0})}),e.jsx(a.FormItem,{label:t("content.article.fields.imagesAuto"),name:"images_auto",initialData:!0,children:e.jsxs(r.Group,{children:[e.jsx(r,{value:!0,children:t("content.article.fields.auto")}),e.jsx(r,{value:!1,children:t("content.article.fields.manual")})]})}),(i==null?void 0:i.length)>0&&e.jsx(a.FormItem,{label:t("content.article.fields.attrs"),name:"attrs",children:e.jsx(E.Group,{options:i})}),e.jsx(a.FormItem,{label:t("content.article.fields.source"),name:"source",children:e.jsx(M,{options:F,highlightKeyword:!0,filterable:!1,clearable:!0})}),(o==null?void 0:o.fields)&&e.jsx(D,{fields:o==null?void 0:o.fields,prefix:"extend"}),e.jsx(a.FormItem,{label:t("content.article.fields.status"),name:"status",initialData:!0,children:e.jsxs(r.Group,{children:[e.jsx(r,{value:!0,children:t("content.article.tab.published")}),e.jsx(r,{value:!1,children:t("content.article.tab.unpublished")})]})})]}),children:[e.jsx(s,{name:"class_id",children:e.jsx(P,{loading:h,options:j,keys:{label:"name",value:"id"},clearable:!0,checkStrictly:!0,placeholder:t("content.article.validate.class")})}),e.jsx(s,{name:"title",children:e.jsx(p,{placeholder:t("content.article.validate.title")})}),e.jsx(C.Render,{mark:[b,"content","article","form","helper"],option:{form:l}}),e.jsx(s,{name:"content",children:e.jsx(G,{})}),e.jsx(s,{name:"keywords",children:e.jsx(S,{placeholder:t("content.article.validate.keywords")})}),e.jsx(s,{name:"descriptions",initialData:"",children:e.jsx(_,{placeholder:t("content.article.validate.descriptions")})})]})};export{ae as default};
