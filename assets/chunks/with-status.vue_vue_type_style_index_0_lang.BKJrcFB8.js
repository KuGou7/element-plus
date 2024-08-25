import{p as _,o as u,t as S,v as s,y as e,q as r,l as x,c as w,M as C,a as h,u as L,Y as y,X as f,r as v,k as z,a5 as D,ak as F}from"./framework.DcRevfCx.js";import{ao as k,ax as T}from"./theme.Dyof5V-F.js";import{d as $}from"./dayjs.min.C-SDjiVd.js";const H=_({__name:"basic",setup(b){const l=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return(d,i)=>{const t=r("el-table-column"),a=r("el-table");return u(),S(a,{data:l,style:{width:"100%"}},{default:s(()=>[e(t,{prop:"date",label:"Date",width:"180"}),e(t,{prop:"name",label:"Name",width:"180"}),e(t,{prop:"address",label:"Address"})]),_:1})}}}),J=_({__name:"check-strictly",setup(b){const l=x({checkStrictly:!1}),d=t=>![1,31].includes(t.id),i=[{id:1,date:"2016-05-02",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:2,date:"2016-05-04",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:3,date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles",children:[{id:31,date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:32,date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"}]},{id:4,date:"2016-05-03",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"}];return(t,a)=>{const o=r("el-radio-button"),n=r("el-radio-group"),m=r("el-table-column"),c=r("el-table");return u(),w(C,null,[e(n,{modelValue:l.checkStrictly,"onUpdate:modelValue":a[0]||(a[0]=p=>l.checkStrictly=p)},{default:s(()=>[e(o,{value:!0,label:"true"}),e(o,{value:!1,label:"false"})]),_:1},8,["modelValue"]),e(c,{data:i,"tree-props":l,"row-key":"id","default-expand-all":""},{default:s(()=>[e(m,{type:"selection",width:"55",selectable:d}),e(m,{prop:"date",label:"Date"}),e(m,{prop:"name",label:"Name"}),e(m,{prop:"address",label:"Address"})]),_:1},8,["tree-props"])],64)}}}),M=_({__name:"custom-column",setup(b){const l=(t,a)=>{console.log(t,a)},d=(t,a)=>{console.log(t,a)},i=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return(t,a)=>{const o=r("el-icon"),n=r("el-table-column"),m=r("el-tag"),c=r("el-popover"),p=r("el-button"),A=r("el-table");return u(),S(A,{data:i,style:{width:"100%"}},{default:s(()=>[e(n,{label:"Date",width:"180"},{default:s(g=>[h("div",{style:{display:"flex","align-items":"center"}},[e(o,null,{default:s(()=>[e(L(k))]),_:1}),h("span",{style:{"margin-left":"10px"}},y(g.row.date),1)])]),_:1}),e(n,{label:"Name",width:"180"},{default:s(g=>[e(c,{effect:"light",trigger:"hover",placement:"top",width:"auto"},{default:s(()=>[h("div",null,"name: "+y(g.row.name),1),h("div",null,"address: "+y(g.row.address),1)]),reference:s(()=>[e(m,null,{default:s(()=>[f(y(g.row.name),1)]),_:2},1024)]),_:2},1024)]),_:1}),e(n,{label:"Operations"},{default:s(g=>[e(p,{size:"small",onClick:N=>l(g.$index,g.row)},{default:s(()=>[f(" Edit ")]),_:2},1032,["onClick"]),e(p,{size:"small",type:"danger",onClick:N=>d(g.$index,g.row)},{default:s(()=>[f(" Delete ")]),_:2},1032,["onClick"])]),_:1})]),_:1})}}}),E=_({__name:"custom-header",setup(b){const l=v(""),d=z(()=>a.filter(o=>!l.value||o.name.toLowerCase().includes(l.value.toLowerCase()))),i=(o,n)=>{console.log(o,n)},t=(o,n)=>{console.log(o,n)},a=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"John",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Morgan",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Jessy",address:"No. 189, Grove St, Los Angeles"}];return(o,n)=>{const m=r("el-table-column"),c=r("el-input"),p=r("el-button"),A=r("el-table");return u(),S(A,{data:L(d),style:{width:"100%"}},{default:s(()=>[e(m,{label:"Date",prop:"date"}),e(m,{label:"Name",prop:"name"}),e(m,{align:"right"},{header:s(()=>[e(c,{modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=g=>l.value=g),size:"small",placeholder:"Type to search"},null,8,["modelValue"])]),default:s(g=>[e(p,{size:"small",onClick:N=>i(g.$index,g.row)},{default:s(()=>[f(" Edit ")]),_:2},1032,["onClick"]),e(p,{size:"small",type:"danger",onClick:N=>t(g.$index,g.row)},{default:s(()=>[f(" Delete ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])}}}),I=_({__name:"custom-index",setup(b){const l=i=>i*2,d=[{date:"2016-05-03",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Home"},{date:"2016-05-02",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Office"},{date:"2016-05-04",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Home"},{date:"2016-05-01",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Office"}];return(i,t)=>{const a=r("el-table-column"),o=r("el-table");return u(),S(o,{data:d,style:{width:"100%"}},{default:s(()=>[e(a,{type:"index",index:l}),e(a,{prop:"date",label:"Date",width:"180"}),e(a,{prop:"name",label:"Name",width:"180"}),e(a,{prop:"address",label:"Address"})]),_:1})}}}),B=_({__name:"expandable-row",setup(b){const l=v(!1),d=v(!1),i=[{date:"2016-05-03",name:"Tom",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114",family:[{name:"Jerry",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Spike",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Tyke",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"}]},{date:"2016-05-02",name:"Tom",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114",family:[{name:"Jerry",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Spike",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Tyke",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"}]},{date:"2016-05-04",name:"Tom",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114",family:[{name:"Jerry",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Spike",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Tyke",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"}]},{date:"2016-05-01",name:"Tom",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114",family:[{name:"Jerry",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Spike",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Tyke",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"}]},{date:"2016-05-08",name:"Tom",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114",family:[{name:"Jerry",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Spike",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Tyke",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"}]},{date:"2016-05-06",name:"Tom",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114",family:[{name:"Jerry",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Spike",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Tyke",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"}]},{date:"2016-05-07",name:"Tom",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114",family:[{name:"Jerry",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Spike",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Tyke",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"}]}];return(t,a)=>{const o=r("el-switch"),n=r("el-table-column"),m=r("el-table");return u(),w(C,null,[f(" switch parent border: "),e(o,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=c=>l.value=c)},null,8,["modelValue"]),f(" switch child border: "),e(o,{modelValue:d.value,"onUpdate:modelValue":a[1]||(a[1]=c=>d.value=c)},null,8,["modelValue"]),e(m,{data:i,border:l.value,style:{width:"100%"}},{default:s(()=>[e(n,{type:"expand"},{default:s(c=>[h("div",{m:"4"},[h("p",{m:"t-0 b-2"},"State: "+y(c.row.state),1),h("p",{m:"t-0 b-2"},"City: "+y(c.row.city),1),h("p",{m:"t-0 b-2"},"Address: "+y(c.row.address),1),h("p",{m:"t-0 b-2"},"Zip: "+y(c.row.zip),1),h("h3",null,"Family"),e(m,{data:c.row.family,border:d.value},{default:s(()=>[e(n,{label:"Name",prop:"name"}),e(n,{label:"State",prop:"state"}),e(n,{label:"City",prop:"city"}),e(n,{label:"Address",prop:"address"}),e(n,{label:"Zip",prop:"zip"})]),_:2},1032,["data","border"])])]),_:1}),e(n,{label:"Date",prop:"date"}),e(n,{label:"Name",prop:"name"})]),_:1},8,["border"])],64)}}}),Z=_({__name:"filter",setup(b){const l=v(),d=()=>{l.value.clearFilter(["date"])},i=()=>{l.value.clearFilter()},t=(m,c)=>m.address,a=(m,c)=>c.tag===m,o=(m,c,p)=>{const A=p.property;return c[A]===m},n=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles",tag:"Home"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles",tag:"Office"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles",tag:"Home"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles",tag:"Office"}];return(m,c)=>{const p=r("el-button"),A=r("el-table-column"),g=r("el-tag"),N=r("el-table");return u(),w(C,null,[e(p,{onClick:d},{default:s(()=>[f("reset date filter")]),_:1}),e(p,{onClick:i},{default:s(()=>[f("reset all filters")]),_:1}),e(N,{ref_key:"tableRef",ref:l,"row-key":"date",data:n,style:{width:"100%"}},{default:s(()=>[e(A,{prop:"date",label:"Date",sortable:"",width:"180","column-key":"date",filters:[{text:"2016-05-01",value:"2016-05-01"},{text:"2016-05-02",value:"2016-05-02"},{text:"2016-05-03",value:"2016-05-03"},{text:"2016-05-04",value:"2016-05-04"}],"filter-method":o}),e(A,{prop:"name",label:"Name",width:"180"}),e(A,{prop:"address",label:"Address",formatter:t}),e(A,{prop:"tag",label:"Tag",width:"100",filters:[{text:"Home",value:"Home"},{text:"Office",value:"Office"}],"filter-method":a,"filter-placement":"bottom-end"},{default:s(G=>[e(g,{type:G.row.tag==="Home"?"primary":"success","disable-transitions":""},{default:s(()=>[f(y(G.row.tag),1)]),_:2},1032,["type"])]),_:1})]),_:1},512)],64)}}}),U=_({__name:"fixed-column-and-header",setup(b){const l=[{date:"2016-05-03",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-02",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-04",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-01",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-08",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-06",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-07",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"}];return(d,i)=>{const t=r("el-table-column"),a=r("el-table");return u(),S(a,{data:l,style:{width:"100%"},height:"250"},{default:s(()=>[e(t,{fixed:"",prop:"date",label:"Date",width:"150"}),e(t,{prop:"name",label:"Name",width:"120"}),e(t,{prop:"state",label:"State",width:"120"}),e(t,{prop:"city",label:"City",width:"320"}),e(t,{prop:"address",label:"Address",width:"600"}),e(t,{prop:"zip",label:"Zip"})]),_:1})}}}),Y=_({__name:"fixed-column",setup(b){const l=()=>{console.log("click")},d=[{date:"2016-05-03",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Home"},{date:"2016-05-02",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Office"},{date:"2016-05-04",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Home"},{date:"2016-05-01",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Office"}];return(i,t)=>{const a=r("el-table-column"),o=r("el-button"),n=r("el-table");return u(),S(n,{data:d,style:{width:"100%"}},{default:s(()=>[e(a,{fixed:"",prop:"date",label:"Date",width:"150"}),e(a,{prop:"name",label:"Name",width:"120"}),e(a,{prop:"state",label:"State",width:"120"}),e(a,{prop:"city",label:"City",width:"120"}),e(a,{prop:"address",label:"Address",width:"600"}),e(a,{prop:"zip",label:"Zip",width:"120"}),e(a,{fixed:"right",label:"Operations","min-width":"120"},{default:s(()=>[e(o,{link:"",type:"primary",size:"small",onClick:l},{default:s(()=>[f(" Detail ")]),_:1}),e(o,{link:"",type:"primary",size:"small"},{default:s(()=>[f("Edit")]),_:1})]),_:1})]),_:1})}}}),j=_({__name:"fixed-header-with-fluid-header",setup(b){const l=new Date,d=v([{date:"2016-05-01",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-02",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-03",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"}]),i=a=>{d.value.splice(a,1)},t=()=>{l.setDate(l.getDate()+1),d.value.push({date:$(l).format("YYYY-MM-DD"),name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"})};return(a,o)=>{const n=r("el-table-column"),m=r("el-button"),c=r("el-table");return u(),w(C,null,[e(c,{data:d.value,style:{width:"100%"},"max-height":"250"},{default:s(()=>[e(n,{fixed:"",prop:"date",label:"Date",width:"150"}),e(n,{prop:"name",label:"Name",width:"120"}),e(n,{prop:"state",label:"State",width:"120"}),e(n,{prop:"city",label:"City",width:"120"}),e(n,{prop:"address",label:"Address",width:"600"}),e(n,{prop:"zip",label:"Zip",width:"120"}),e(n,{fixed:"right",label:"Operations","min-width":"120"},{default:s(p=>[e(m,{link:"",type:"primary",size:"small",onClick:D(A=>i(p.$index),["prevent"])},{default:s(()=>[f(" Remove ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),e(m,{class:"mt-4",style:{width:"100%"},onClick:t},{default:s(()=>[f(" Add Item ")]),_:1})],64)}}}),q=_({__name:"fixed-header",setup(b){const l=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-08",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-06",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-07",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return(d,i)=>{const t=r("el-table-column"),a=r("el-table");return u(),S(a,{data:l,height:"250",style:{width:"100%"}},{default:s(()=>[e(t,{prop:"date",label:"Date",width:"180"}),e(t,{prop:"name",label:"Name",width:"180"}),e(t,{prop:"address",label:"Address"})]),_:1})}}}),W=_({__name:"grouping-header",setup(b){const l=[{date:"2016-05-03",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-02",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-04",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-01",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-08",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-06",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-07",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"}];return(d,i)=>{const t=r("el-table-column"),a=r("el-table");return u(),S(a,{data:l,style:{width:"100%"}},{default:s(()=>[e(t,{prop:"date",label:"Date",width:"150"}),e(t,{label:"Delivery Info"},{default:s(()=>[e(t,{prop:"name",label:"Name",width:"120"}),e(t,{label:"Address Info"},{default:s(()=>[e(t,{prop:"state",label:"State",width:"120"}),e(t,{prop:"city",label:"City",width:"120"}),e(t,{prop:"address",label:"Address"}),e(t,{prop:"zip",label:"Zip",width:"120"})]),_:1})]),_:1})]),_:1})}}}),K=_({__name:"multi-select",setup(b){const l=v(),d=v([]),i=o=>{o?o.forEach(n=>{l.value.toggleRowSelection(n,void 0)}):l.value.clearSelection()},t=o=>{d.value=o},a=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-08",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-06",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-07",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return(o,n)=>{const m=r("el-table-column"),c=r("el-button");return u(),w(C,null,[e(L(T),{ref_key:"multipleTableRef",ref:l,data:a,style:{width:"100%"},onSelectionChange:t},{default:s(()=>[e(m,{type:"selection",width:"55"}),e(m,{label:"Date",width:"120"},{default:s(p=>[f(y(p.row.date),1)]),_:1}),e(m,{property:"name",label:"Name",width:"120"}),e(m,{property:"address",label:"Address"})]),_:1},512),h("div",{style:{"margin-top":"20px"}},[e(c,{onClick:n[0]||(n[0]=p=>i([a[1],a[2]]))},{default:s(()=>[f(" Toggle selection status of second and third rows ")]),_:1}),e(c,{onClick:n[1]||(n[1]=p=>i())},{default:s(()=>[f("Clear selection")]),_:1})])],64)}}}),P=_({__name:"rowspan-and-colspan",setup(b){const l=({row:t,column:a,rowIndex:o,columnIndex:n})=>{if(o%2===0){if(n===0)return[1,2];if(n===1)return[0,0]}},d=({row:t,column:a,rowIndex:o,columnIndex:n})=>{if(n===0)return o%2===0?{rowspan:2,colspan:1}:{rowspan:0,colspan:0}},i=[{id:"12987122",name:"Tom",amount1:"234",amount2:"3.2",amount3:10},{id:"12987123",name:"Tom",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"Tom",amount1:"324",amount2:"1.9",amount3:9},{id:"12987125",name:"Tom",amount1:"621",amount2:"2.2",amount3:17},{id:"12987126",name:"Tom",amount1:"539",amount2:"4.1",amount3:15}];return(t,a)=>{const o=r("el-table-column"),n=r("el-table");return u(),w("div",null,[e(n,{data:i,"span-method":l,border:"",style:{width:"100%"}},{default:s(()=>[e(o,{prop:"id",label:"ID",width:"180"}),e(o,{prop:"name",label:"Name"}),e(o,{prop:"amount1",sortable:"",label:"Amount 1"}),e(o,{prop:"amount2",sortable:"",label:"Amount 2"}),e(o,{prop:"amount3",sortable:"",label:"Amount 3"})]),_:1}),e(n,{data:i,"span-method":d,border:"",style:{width:"100%","margin-top":"20px"}},{default:s(()=>[e(o,{prop:"id",label:"ID",width:"180"}),e(o,{prop:"name",label:"Name"}),e(o,{prop:"amount1",label:"Amount 1"}),e(o,{prop:"amount2",label:"Amount 2"}),e(o,{prop:"amount3",label:"Amount 3"})]),_:1})])}}}),X=_({__name:"show-overflow-tooltip",setup(b){const l=[{date:"2016-05-04",name:"Aleyna Kutzner",address:"Lohrbergstr. 86c, Süd Lilli, Saarland"},{date:"2016-05-03",name:"Helen Jacobi",address:"760 A Street, South Frankfield, Illinois"},{date:"2016-05-02",name:"Brandon Deckert",address:"Arnold-Ohletz-Str. 41a, Alt Malinascheid, Thüringen"},{date:"2016-05-01",name:"Margie Smith",address:"23618 Windsor Drive, West Ricardoview, Idaho"}];return(d,i)=>{const t=r("el-table-column");return u(),S(L(T),{data:l,style:{width:"100%"}},{default:s(()=>[e(t,{type:"selection",width:"55"}),e(t,{label:"Date",width:"120"},{default:s(a=>[f(y(a.row.date),1)]),_:1}),e(t,{property:"name",label:"Name",width:"120"}),e(t,{property:"address",label:"use show-overflow-tooltip",width:"240","show-overflow-tooltip":""}),e(t,{property:"address",label:"address"})]),_:1})}}}),Q=_({__name:"single-select",setup(b){const l=v(),d=v(),i=o=>{d.value.setCurrentRow(o)},t=o=>{l.value=o},a=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return(o,n)=>{const m=r("el-table-column"),c=r("el-button");return u(),w(C,null,[e(L(T),{ref_key:"singleTableRef",ref:d,data:a,"highlight-current-row":"",style:{width:"100%"},onCurrentChange:t},{default:s(()=>[e(m,{type:"index",width:"50"}),e(m,{property:"date",label:"Date",width:"120"}),e(m,{property:"name",label:"Name",width:"120"}),e(m,{property:"address",label:"Address"})]),_:1},512),h("div",{style:{"margin-top":"20px"}},[e(c,{onClick:n[0]||(n[0]=p=>i(a[1]))},{default:s(()=>[f("Select second row")]),_:1}),e(c,{onClick:n[1]||(n[1]=p=>i())},{default:s(()=>[f("Clear selection")]),_:1})])],64)}}}),ee=_({__name:"sort",setup(b){const l=(i,t)=>i.address,d=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return(i,t)=>{const a=r("el-table-column"),o=r("el-table");return u(),S(o,{data:d,"default-sort":{prop:"date",order:"descending"},style:{width:"100%"}},{default:s(()=>[e(a,{prop:"date",label:"Date",sortable:"",width:"180"}),e(a,{prop:"name",label:"Name",width:"180"}),e(a,{prop:"address",label:"Address",formatter:l})]),_:1})}}}),ae=_({__name:"striped",setup(b){const l=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return(d,i)=>{const t=r("el-table-column"),a=r("el-table");return u(),S(a,{data:l,stripe:"",style:{width:"100%"}},{default:s(()=>[e(t,{prop:"date",label:"Date",width:"180"}),e(t,{prop:"name",label:"Name",width:"180"}),e(t,{prop:"address",label:"Address"})]),_:1})}}}),te=_({__name:"summary",setup(b){const l=i=>{const{columns:t,data:a}=i,o=[];return t.forEach((n,m)=>{if(m===0){o[m]=F("div",{style:{textDecoration:"underline"}},["Total Cost"]);return}const c=a.map(p=>Number(p[n.property]));c.every(p=>Number.isNaN(p))?o[m]="N/A":o[m]=`$ ${c.reduce((p,A)=>{const g=Number(A);return Number.isNaN(g)?p:p+A},0)}`}),o},d=[{id:"12987122",name:"Tom",amount1:"234",amount2:"3.2",amount3:10},{id:"12987123",name:"Tom",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"Tom",amount1:"324",amount2:"1.9",amount3:9},{id:"12987125",name:"Tom",amount1:"621",amount2:"2.2",amount3:17},{id:"12987126",name:"Tom",amount1:"539",amount2:"4.1",amount3:15}];return(i,t)=>{const a=r("el-table-column"),o=r("el-table");return u(),w(C,null,[e(o,{data:d,border:"","show-summary":"",style:{width:"100%"}},{default:s(()=>[e(a,{prop:"id",label:"ID",width:"180"}),e(a,{prop:"name",label:"Name"}),e(a,{prop:"amount1",sortable:"",label:"Amount 1"}),e(a,{prop:"amount2",sortable:"",label:"Amount 2"}),e(a,{prop:"amount3",sortable:"",label:"Amount 3"})]),_:1}),e(o,{data:d,border:"",height:"200","summary-method":l,"show-summary":"",style:{width:"100%","margin-top":"20px"}},{default:s(()=>[e(a,{prop:"id",label:"ID",width:"180"}),e(a,{prop:"name",label:"Name"}),e(a,{prop:"amount1",label:"Cost 1 ($)"}),e(a,{prop:"amount2",label:"Cost 2 ($)"}),e(a,{prop:"amount3",label:"Cost 3 ($)"})]),_:1})],64)}}}),oe=_({__name:"table-layout",setup(b){const l=v("fixed"),d=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return(i,t)=>{const a=r("el-radio-button"),o=r("el-radio-group"),n=r("el-table-column"),m=r("el-table");return u(),w(C,null,[e(o,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=c=>l.value=c)},{default:s(()=>[e(a,{value:"fixed"},{default:s(()=>[f("fixed")]),_:1}),e(a,{value:"auto"},{default:s(()=>[f("auto")]),_:1})]),_:1},8,["modelValue"]),e(m,{data:d,"table-layout":l.value},{default:s(()=>[e(n,{prop:"date",label:"Date"}),e(n,{prop:"name",label:"Name"}),e(n,{prop:"address",label:"Address"})]),_:1},8,["table-layout"])],64)}}}),se=_({__name:"tree-and-lazy",setup(b){const l=(t,a,o)=>{setTimeout(()=>{o([{id:31,date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:32,date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"}])},1e3)},d=[{id:1,date:"2016-05-02",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:2,date:"2016-05-04",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:3,date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles",children:[{id:31,date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:32,date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"}]},{id:4,date:"2016-05-03",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"}],i=[{id:1,date:"2016-05-02",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:2,date:"2016-05-04",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:3,date:"2016-05-01",name:"wangxiaohu",hasChildren:!0,address:"No. 189, Grove St, Los Angeles"},{id:4,date:"2016-05-03",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"}];return(t,a)=>{const o=r("el-table-column"),n=r("el-table");return u(),w("div",null,[e(n,{data:d,style:{width:"100%","margin-bottom":"20px"},"row-key":"id",border:"","default-expand-all":""},{default:s(()=>[e(o,{prop:"date",label:"Date",sortable:""}),e(o,{prop:"name",label:"Name",sortable:""}),e(o,{prop:"address",label:"Address",sortable:""})]),_:1}),e(n,{data:i,style:{width:"100%"},"row-key":"id",border:"",lazy:"",load:l,"tree-props":{children:"children",hasChildren:"hasChildren"}},{default:s(()=>[e(o,{prop:"date",label:"Date"}),e(o,{prop:"name",label:"Name"}),e(o,{prop:"address",label:"Address"})]),_:1})])}}}),ne=_({__name:"with-border",setup(b){const l=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return(d,i)=>{const t=r("el-table-column"),a=r("el-table");return u(),S(a,{data:l,border:"",style:{width:"100%"}},{default:s(()=>[e(t,{prop:"date",label:"Date",width:"180"}),e(t,{prop:"name",label:"Name",width:"180"}),e(t,{prop:"address",label:"Address"})]),_:1})}}}),le=_({__name:"with-status",setup(b){const l=({row:i,rowIndex:t})=>t===1?"warning-row":t===3?"success-row":"",d=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return(i,t)=>{const a=r("el-table-column"),o=r("el-table");return u(),S(o,{data:d,style:{width:"100%"},"row-class-name":l},{default:s(()=>[e(a,{prop:"date",label:"Date",width:"180"}),e(a,{prop:"name",label:"Name",width:"180"}),e(a,{prop:"address",label:"Address"})]),_:1})}}});export{H as _,ae as a,ne as b,le as c,X as d,q as e,Y as f,U as g,j as h,W as i,Q as j,K as k,ee as l,Z as m,M as n,E as o,B as p,se as q,J as r,te as s,P as t,I as u,oe as v};