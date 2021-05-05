(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],{23:function(e,t,s){},24:function(e,t,s){"use strict";s.r(t);var n=s(14),r=s.n(n),c=s(8),a=s(3),j=s.n(a),i=s(26),l=s(16),o=s(15),b=s(0),x=function(e){var t=e.setPage;return Object(b.jsxs)("nav",{className:"mb-5 text-center",children:[Object(b.jsx)("button",{className:"btn btn-outline-light me-3",style:{minWidth:125},onClick:function(){return t("planets")},children:"Planets"}),Object(b.jsx)("button",{className:"btn btn-outline-light",style:{minWidth:125},onClick:function(){return t("people")},children:"People"})]})},h=s(10),u=s.n(h),O=s(11),d=s(27),p=function(e){var t=e.planet;return Object(b.jsxs)("li",{className:"list-group-item text-sw-yellow bg-dark",style:{backgroundColor:"transparent",borderColor:"#ffff57"},children:[Object(b.jsxs)("h3",{children:[t.name,":"]}),Object(b.jsxs)("p",{style:{color:"#DDD"},children:["Population - ",t.population]}),Object(b.jsxs)("p",{style:{color:"#DDD"},children:["Terrain - ",t.terrain]})]})},m=function(){var e=Object(O.a)(u.a.mark((function e(t){var s,n,r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.queryKey,n=Object(c.a)(s,2),n[0],r=n[1],e.next=4,fetch("https://swapi.dev/api/planets/?page=".concat(r));case 4:return a=e.sent,e.abrupt("return",a.json());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(a.useState)(1),t=Object(c.a)(e,2),s=t[0],n=t[1],r=Object(d.a)(["planets",s],m),i=r.data,l=r.status;return Object(b.jsxs)(j.a.Fragment,{children:[Object(b.jsx)("h2",{className:"mb-3 text-center",children:"Planets"}),Object(b.jsxs)("div",{className:"d-flex flex-wrap justify-content-center align-items-center mb-3",children:[Object(b.jsx)("button",{className:"btn btn-outline-light me-3",style:{minWidth:125},onClick:function(){if(i&&i.previous){var e=i.previous.split("=")[1];n(parseInt(e))}},children:"Previous"}),Object(b.jsx)("div",{className:"d-inline-block me-3",style:{fontFamily:"Montserrat",fontSize:32},children:s}),Object(b.jsx)("button",{className:"btn btn-outline-light",style:{minWidth:125},onClick:function(){if(i&&i.next){var e=i.next.split("=")[1];n(parseInt(e))}},children:"Next"})]}),"loading"===l&&Object(b.jsx)("h1",{className:"text-center",children:"Loading..."}),"error"===l&&Object(b.jsx)("h1",{className:"text-center text-danger",children:"Error: Could not get data!"}),"success"===l&&Object(b.jsx)("ul",{className:"w-90 mx-auto mb-5 list-group",style:{maxWidth:800,backgroundColor:"transparent"},children:i.results.map((function(e){return Object(b.jsx)(p,{planet:e},e.name)}))})]})},g=function(e){var t=e.person;return Object(b.jsxs)("li",{className:"list-group-item text-sw-yellow bg-dark",style:{backgroundColor:"transparent",borderColor:"#ffff57"},children:[Object(b.jsxs)("h3",{children:[t.name,":"]}),Object(b.jsxs)("p",{style:{color:"#DDD"},children:["Gender - ",t.gender]}),Object(b.jsxs)("p",{style:{color:"#DDD"},children:["Birth year - ",t.birth_year]})]})},v=function(){var e=Object(O.a)(u.a.mark((function e(t){var s,n,r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.queryKey,n=Object(c.a)(s,2),n[0],r=n[1],e.next=4,fetch("https://swapi.dev/api/people/?page=".concat(r));case 4:return a=e.sent,e.abrupt("return",a.json());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(a.useState)(1),t=Object(c.a)(e,2),s=t[0],n=t[1],r=Object(d.a)(["people",s],v),i=r.data,l=r.status;return Object(b.jsxs)(j.a.Fragment,{children:[Object(b.jsx)("h2",{className:"text-center",children:"People"}),Object(b.jsxs)("div",{className:"d-flex flex-wrap justify-content-center align-items-center mb-3",children:[Object(b.jsx)("button",{className:"btn btn-outline-light me-3",style:{minWidth:125},onClick:function(){if(i&&i.previous){var e=i.previous.split("=")[1];n(parseInt(e))}},children:"Previous"}),Object(b.jsx)("div",{className:"d-inline-block me-3",style:{fontFamily:"Montserrat",fontSize:32},children:s}),Object(b.jsx)("button",{className:"btn btn-outline-light",style:{minWidth:125},onClick:function(){if(i&&i.next){var e=i.next.split("=")[1];n(parseInt(e))}},children:"Next"})]}),"loading"===l&&Object(b.jsx)("h1",{className:"text-center",children:"Loading..."}),"error"===l&&Object(b.jsx)("h1",{className:"text-center text-danger",children:"Error: Could not get data!"}),"success"===l&&Object(b.jsx)("ul",{className:"w-90 mx-auto mb-5 list-group",style:{maxWidth:800,backgroundColor:"transparent"},children:i.results.map((function(e){return Object(b.jsx)(g,{person:e},e.name)}))})]})},N=new i.a;var w=function(){var e=Object(a.useState)("planets"),t=Object(c.a)(e,2),s=t[0],n=t[1];return Object(b.jsx)(l.a,{client:N,children:Object(b.jsxs)("main",{className:"py-4",children:[Object(b.jsx)(o.ReactQueryDevtools,{initialIsOpen:!1,position:"top-right"}),Object(b.jsxs)("div",{className:"container-fluid pt-3 px-md-5",children:[Object(b.jsx)("h1",{className:"mb-3 text-center text-sw-yellow",children:"Star Wars Info"}),Object(b.jsx)(x,{setPage:n}),Object(b.jsxs)("div",{className:"horizontal-ruler",children:[Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]}),"planets"===s?Object(b.jsx)(f,{}):Object(b.jsx)(y,{})]})]})})};s(23);r.a.render(Object(b.jsx)(w,{}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.f66c10f5.chunk.js.map