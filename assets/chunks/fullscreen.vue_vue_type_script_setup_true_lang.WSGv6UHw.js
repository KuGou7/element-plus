import{p as u,r as m,V as c,o as _,t as w,v as i,y as e,q as d,as as p,c as v,M as f,X as b}from"./framework.DcRevfCx.js";import{X as D}from"./theme.Dyof5V-F.js";const N=u({__name:"basic",setup(g){const a=m(!0),o=[{date:"2016-05-02",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"},{date:"2016-05-04",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"},{date:"2016-05-01",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"}];return(s,r)=>{const l=d("el-table-column"),t=d("el-table"),n=p("loading");return c((_(),w(t,{data:o,style:{width:"100%"}},{default:i(()=>[e(l,{prop:"date",label:"Date",width:"180"}),e(l,{prop:"name",label:"Name",width:"180"}),e(l,{prop:"address",label:"Address"})]),_:1},512)),[[n,a.value]])}}}),k=u({__name:"customization",setup(g){const a=m(!0),o=`
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `,s=[{date:"2016-05-02",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"},{date:"2016-05-04",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"},{date:"2016-05-01",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"}];return(r,l)=>{const t=d("el-table-column"),n=d("el-table"),h=p("loading");return _(),v(f,null,[c(e(n,{"element-loading-text":"Loading...","element-loading-spinner":o,"element-loading-svg-view-box":"-10, -10, 50, 50","element-loading-background":"rgba(122, 122, 122, 0.8)",data:s,style:{width:"100%"}},{default:i(()=>[e(t,{prop:"date",label:"Date",width:"180"}),e(t,{prop:"name",label:"Name",width:"180"}),e(t,{prop:"address",label:"Address"})]),_:1},512),[[h,a.value]]),c(e(n,{"element-loading-svg":o,class:"custom-loading-svg","element-loading-svg-view-box":"-10, -10, 50, 50",data:s,style:{width:"100%"}},{default:i(()=>[e(t,{prop:"date",label:"Date",width:"180"}),e(t,{prop:"name",label:"Name",width:"180"}),e(t,{prop:"address",label:"Address"})]),_:1},512),[[h,a.value]])],64)}}}),y=u({__name:"fullscreen",setup(g){const a=m(!1),o=()=>{a.value=!0,setTimeout(()=>{a.value=!1},2e3)},s=()=>{const r=D.service({lock:!0,text:"Loading",background:"rgba(0, 0, 0, 0.7)"});setTimeout(()=>{r.close()},2e3)};return(r,l)=>{const t=d("el-button"),n=p("loading");return _(),v(f,null,[c(e(t,{type:"primary",onClick:o},{default:i(()=>[b(" As a directive ")]),_:1},512),[[n,a.value,void 0,{fullscreen:!0,lock:!0}]]),e(t,{type:"primary",onClick:s},{default:i(()=>[b(" As a service ")]),_:1})],64)}}});export{N as _,k as a,y as b};