import{p as V,r,o as g,c as b,a as m,y as e,v as a,X as u,M as c,q as _,t as O}from"./framework.DcRevfCx.js";const U=V({__name:"basic-usage",setup(f){const t=r("1"),p=r("1"),d=r("1");return(i,o)=>{const l=_("el-radio"),n=_("el-radio-group");return g(),b(c,null,[m("div",{class:"mb-2 ml-4"},[e(n,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=s=>t.value=s)},{default:a(()=>[e(l,{value:"1",size:"large"},{default:a(()=>[u("Option 1")]),_:1}),e(l,{value:"2",size:"large"},{default:a(()=>[u("Option 2")]),_:1})]),_:1},8,["modelValue"])]),m("div",{class:"my-2 ml-4"},[e(n,{modelValue:p.value,"onUpdate:modelValue":o[1]||(o[1]=s=>p.value=s)},{default:a(()=>[e(l,{value:"1"},{default:a(()=>[u("Option 1")]),_:1}),e(l,{value:"2"},{default:a(()=>[u("Option 2")]),_:1})]),_:1},8,["modelValue"])]),m("div",{class:"my-4 ml-4"},[e(n,{modelValue:d.value,"onUpdate:modelValue":o[2]||(o[2]=s=>d.value=s)},{default:a(()=>[e(l,{value:"1",size:"small"},{default:a(()=>[u("Option 1")]),_:1}),e(l,{value:"2",size:"small"},{default:a(()=>[u("Option 2")]),_:1})]),_:1},8,["modelValue"])])],64)}}}),k=V({__name:"button-style",setup(f){const t=r("New York"),p=r("New York"),d=r("New York");return(i,o)=>{const l=_("el-radio-button"),n=_("el-radio-group");return g(),b(c,null,[m("div",null,[e(n,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=s=>t.value=s),size:"large"},{default:a(()=>[e(l,{label:"New York",value:"New York"}),e(l,{label:"Washington",value:"Washington"}),e(l,{label:"Los Angeles",value:"Los Angeles"}),e(l,{label:"Chicago",value:"Chicago"})]),_:1},8,["modelValue"])]),m("div",{style:{"margin-top":"20px"}},[e(n,{modelValue:p.value,"onUpdate:modelValue":o[1]||(o[1]=s=>p.value=s)},{default:a(()=>[e(l,{label:"New York",value:"New York"}),e(l,{label:"Washington",value:"Washington"}),e(l,{label:"Los Angeles",value:"Los Angeles"}),e(l,{label:"Chicago",value:"Chicago"})]),_:1},8,["modelValue"])]),m("div",{style:{"margin-top":"20px"}},[e(n,{modelValue:d.value,"onUpdate:modelValue":o[2]||(o[2]=s=>d.value=s),size:"small"},{default:a(()=>[e(l,{label:"New York",value:"New York"}),e(l,{label:"Washington",value:"Washington",disabled:""}),e(l,{label:"Los Angeles",value:"Los Angeles"}),e(l,{label:"Chicago",value:"Chicago"})]),_:1},8,["modelValue"])])],64)}}}),A=V({__name:"disabled",setup(f){const t=r("selected and disabled");return(p,d)=>{const i=_("el-radio");return g(),b(c,null,[e(i,{modelValue:t.value,"onUpdate:modelValue":d[0]||(d[0]=o=>t.value=o),disabled:"",value:"disabled"},{default:a(()=>[u("Option A")]),_:1},8,["modelValue"]),e(i,{modelValue:t.value,"onUpdate:modelValue":d[1]||(d[1]=o=>t.value=o),disabled:"",value:"selected and disabled"},{default:a(()=>[u(" Option B ")]),_:1},8,["modelValue"])],64)}}}),N=V({__name:"radio-button-group",setup(f){const t=r(3);return(p,d)=>{const i=_("el-radio"),o=_("el-radio-group");return g(),O(o,{modelValue:t.value,"onUpdate:modelValue":d[0]||(d[0]=l=>t.value=l)},{default:a(()=>[e(i,{value:3},{default:a(()=>[u("Option A")]),_:1}),e(i,{value:6},{default:a(()=>[u("Option B")]),_:1}),e(i,{value:9},{default:a(()=>[u("Option C")]),_:1})]),_:1},8,["modelValue"])}}}),w=V({__name:"with-borders",setup(f){const t=r("1"),p=r("1"),d=r("1"),i=r("1");return(o,l)=>{const n=_("el-radio"),s=_("el-radio-group");return g(),b(c,null,[m("div",null,[e(s,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=v=>t.value=v)},{default:a(()=>[e(n,{value:"1",size:"large",border:""},{default:a(()=>[u("Option A")]),_:1}),e(n,{value:"2",size:"large",border:""},{default:a(()=>[u("Option B")]),_:1})]),_:1},8,["modelValue"])]),m("div",{style:{"margin-top":"20px"}},[e(s,{modelValue:p.value,"onUpdate:modelValue":l[1]||(l[1]=v=>p.value=v)},{default:a(()=>[e(n,{value:"1",border:""},{default:a(()=>[u("Option A")]),_:1}),e(n,{value:"2",border:""},{default:a(()=>[u("Option B")]),_:1})]),_:1},8,["modelValue"])]),m("div",{style:{"margin-top":"20px"}},[e(s,{modelValue:d.value,"onUpdate:modelValue":l[2]||(l[2]=v=>d.value=v),size:"small"},{default:a(()=>[e(n,{value:"1",border:""},{default:a(()=>[u("Option A")]),_:1}),e(n,{value:"2",border:"",disabled:""},{default:a(()=>[u("Option B")]),_:1})]),_:1},8,["modelValue"])]),m("div",{style:{"margin-top":"20px"}},[e(s,{modelValue:i.value,"onUpdate:modelValue":l[3]||(l[3]=v=>i.value=v),size:"small",disabled:""},{default:a(()=>[e(n,{value:"1",border:""},{default:a(()=>[u("Option A")]),_:1}),e(n,{value:"2",border:""},{default:a(()=>[u("Option B")]),_:1})]),_:1},8,["modelValue"])])],64)}}});export{U as _,A as a,N as b,k as c,w as d};