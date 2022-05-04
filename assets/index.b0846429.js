import{d as r,r as d,c as i,a as p,b as v,o as F}from"./index.971e6909.js";const m={class:"calendar"},h=r({setup(E){const n=d([{title:"\u5403\u9F99\u867E",start:"2022-05-05 17:00",end:"2022-05-05 20:00",editable:!0},{title:"\u6E38\u620F",start:"2022-05-04 20:00",end:"2022-05-04 22:00",editable:!0}]),u=e=>{n.value.push({title:"\u5B66\u4E60",start:e.dateStr+" 12:00",end:e.dateStr+" 18:00",editable:!0}),console.log(n.value)},a=e=>{console.log(e)},o=e=>{const s=document.createElement("div"),t=e.timeText.split("-"),c=t[0].replace("\u4E0A\u5348"," ").replace("\u4E0B\u5348"," ").replace("\u65F6"," "),l=t[1].replace("\u4E0A\u5348"," ").replace("\u4E0B\u5348"," ").replace("\u65F6"," ");return s.innerHTML=`
    <img src="src/assets/logo.png" style="width:30px;height:30px;"/>
    <div>\u5F00\u59CB\u65F6\u95F4\uFF1A ${c}</div>
    <div>\u7ED3\u675F\u65F6\u95F4: ${l}</div>
    <div>\u6807\u9898\uFF1A ${e.event._def.title}</div>
  `,{domNodes:[s]}};return(e,s)=>{const t=v("vt-calendar");return F(),i("div",m,[p(t,{displayEventEnd:"",events:n.value,eventContent:o,onDateClick:u,onEventClick:a},null,8,["events"])])}}});export{h as default};
