(this["webpackJsonpit-logger-redux"]=this["webpackJsonpit-logger-redux"]||[]).push([[0],{33:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),s=c.n(a),r=c(10),l=c.n(r),i=c(3),o=c(4),d=c.n(o),u=c(7),j="GET_LOGS",h="ADD_LOG",b="DELETE_LOG",O="SET_CURRENT",m="CLEAR_CURRENT",p="UPDATE_LOG",f="SET_LOADING",x="LOGS_ERROR",g="SEARCH_LOGS",v="GET_TECHS",N="ADD_TECH",y="DELETE_TECH",T="TECHS_ERROR",w=function(){return{type:m}},E=function(){return{type:f}},L=Object(i.b)(null,{searchLogs:function(e){return function(){var t=Object(u.a)(d.a.mark((function t(c){var n,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,E(),t.next=4,fetch("./logs?q=".concat(e));case 4:return n=t.sent,t.next=7,n.json();case 7:a=t.sent,c({type:g,payload:a}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),c({type:x,payload:t.t0.response.statusText});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.searchLogs,c=Object(a.useRef)("");return Object(n.jsx)("nav",{style:{marginBottom:"30px"},children:Object(n.jsx)("div",{className:"nav-wrapper",children:Object(n.jsx)("form",{children:Object(n.jsxs)("div",{className:"input-field",children:[Object(n.jsx)("input",{id:"search",type:"search",placeholder:"Search Logs",ref:c,onChange:function(e){t(c.current.value)}}),Object(n.jsx)("label",{className:"label-icon",htmlFor:"search",children:Object(n.jsx)("i",{className:"material-icons",children:"search"})}),Object(n.jsx)("i",{className:"material-icons",children:"close"})]})})})})})),C=c(5),S=c.n(C),k=Object(i.b)(null,{deleteLog:function(e){return function(){var t=Object(u.a)(d.a.mark((function t(c){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,E(),t.next=4,fetch("./logs/".concat(e),{method:"DELETE"});case 4:c({type:b,payload:e}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),c({type:x,payload:t.t0.response.statusText});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},setCurrent:function(e){return{type:O,payload:e}}})((function(e){var t=e.log,c=e.deleteLog,s=e.setCurrent;return Object(n.jsxs)(a.Fragment,{children:[Object(n.jsx)("a",{href:"#edit-log-modal",className:"modal-trigger text-lighten-1 ".concat(t.attention?"red-text":"blue-text"),onClick:function(){return s(t)},children:t.message}),Object(n.jsx)("br",{}),Object(n.jsxs)("span",{className:"grey-text",children:["ID "," ",Object(n.jsxs)("span",{className:"black-text",children:["#",t.id]})," "," ","last updated by "," ",Object(n.jsx)("span",{className:"black-text",children:t.tech})," "," ","on ",t.date]}),Object(n.jsx)("a",{href:"#!",onClick:function(){c(t.id),S.a.toast({html:"Log Deleted"})},className:"secondary-content",children:Object(n.jsx)("i",{className:"material-icons grey-text",children:"delete"})})]})})),D=function(){return Object(n.jsxs)(a.Fragment,{children:[Object(n.jsx)("h1",{children:"Loading..."}),Object(n.jsx)("div",{className:"progress",children:Object(n.jsx)("div",{className:"indeterminate"})})]})},F=Object(i.b)((function(e){return{log:e.log}}),{getLogs:function(){return function(){var e=Object(u.a)(d.a.mark((function e(t){var c,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,E(),e.next=4,fetch("./logs");case 4:return c=e.sent,e.next=7,c.json();case 7:n=e.sent,t({type:j,payload:n}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:x,payload:e.t0.response.statusText});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.log,c=t.logs,s=t.loading,r=e.getLogs;return Object(a.useEffect)((function(){r()}),[]),s||null===c?Object(n.jsx)(D,{}):Object(n.jsx)(a.Fragment,{children:Object(n.jsxs)("ul",{className:"collection with-header",children:[Object(n.jsx)("li",{className:"collection-header",children:Object(n.jsx)("h4",{className:"center",children:"System Logs"})}),s||0!==c.length?c.map((function(e){return Object(n.jsx)("li",{className:"collection-item",children:Object(n.jsx)(k,{log:e})},e.id)})):Object(n.jsx)("li",{className:"collection-item",children:"No Logs Found"},"none")]})})})),R=function(e){return Object(n.jsxs)("div",{className:"fixed-action-btn",children:[Object(n.jsx)("a",{href:"#add-log-modal",className:"btn-floating btn-large blue darken-2 modal-trigger",children:Object(n.jsx)("i",{className:"large material-icons",children:"add"})}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#tech-list-modal",className:"btn-floating green modal-trigger",children:Object(n.jsx)("i",{className:"material-icons",children:"person"})})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#add-tech-modal",className:"btn-floating red modal-trigger",children:Object(n.jsx)("i",{className:"material-icons",children:"person_add"})})})]})]})},_=c(6),A=function(){return function(){var e=Object(u.a)(d.a.mark((function e(t){var c,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,G(),e.next=4,fetch("./techs");case 4:return c=e.sent,e.next=7,c.json();case 7:n=e.sent,t({type:v,payload:n}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:T,payload:e.t0.response.statusText});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()},G=function(){return{type:f}},P=Object(i.b)((function(e){return{tech:e.tech}}),{getTechs:A})((function(e){var t=e.getTechs,c=e.tech,s=c.techs,r=c.loading;return Object(a.useEffect)((function(){t()}),[]),!r&&null!==s&&s.map((function(e){return Object(n.jsxs)("option",{value:"".concat(e.firstName," ").concat(e.lastName),children:[e.firstName," ",e.lastName]},e.id)}))}));var M={width:"75%",height:"75%"},H=Object(i.b)((function(e){return{tech:e.tech}}),{addLog:function(e){return function(){var t=Object(u.a)(d.a.mark((function t(c){var n,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,E(),t.next=4,fetch("./logs",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 4:return n=t.sent,t.next=7,n.json();case 7:a=t.sent,c({type:h,payload:a}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),c({type:x,payload:t.t0.response.statusText});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.addLog,c=Object(a.useState)(""),s=Object(_.a)(c,2),r=s[0],l=s[1],i=Object(a.useState)(!1),o=Object(_.a)(i,2),d=o[0],u=o[1],j=Object(a.useState)(""),h=Object(_.a)(j,2),b=h[0],O=h[1];return Object(n.jsxs)("div",{id:"add-log-modal",className:"modal",style:M,children:[Object(n.jsxs)("div",{className:"modal-content",children:[Object(n.jsx)("h4",{children:"Enter System Log"}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("input",{type:"text",name:"message",value:r,onChange:function(e){return l(e.target.value)}}),Object(n.jsx)("label",{htmlFor:"message",className:"active",children:"Log Message"})]})]}),Object(n.jsx)("div",{className:"modal-content row",children:Object(n.jsx)("div",{className:"input-field",children:Object(n.jsxs)("select",{name:"tech",value:b,className:"browser-default",onChange:function(e){return O(e.target.value)},children:[Object(n.jsx)("option",{value:"",disabled:!0,children:"Select Technician"}),Object(n.jsx)(P,{})]})})}),Object(n.jsx)("div",{className:"modal-content row",children:Object(n.jsx)("div",{className:"input-field",children:Object(n.jsx)("p",{children:Object(n.jsxs)("label",{children:[Object(n.jsx)("input",{type:"checkbox",className:"filled-in",checked:d,value:d,onChange:function(e){return u(!d)}}),Object(n.jsx)("span",{children:"Needs Attention"})]})})})}),Object(n.jsx)("div",{className:"modal-footer",children:Object(n.jsx)("a",{href:"#!",onClick:function(){if(""===r||""===b)S.a.toast({html:"Please Enter a Message and Tech"});else{console.log(r,b,d);var e={message:r,tech:b,attention:d,date:(new Date).toLocaleDateString()};t(e),S.a.toast({html:"A Log is added By ".concat(b)}),l(""),O(""),u(!1)}},className:"modal-close waves-effects waves-green btn",children:"Enter"})})]})}));var I={width:"75%",height:"75%"},J=Object(i.b)((function(e){return{current:e.log.current}}),{updateLog:function(e){return function(){var t=Object(u.a)(d.a.mark((function t(c){var n,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,E(),t.next=4,fetch("./logs/".concat(e.id),{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 4:return n=t.sent,t.next=7,n.json();case 7:a=t.sent,c({type:p,payload:a}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),c({type:x,payload:t.t0.response.statusText});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},clearCurrent:w})((function(e){var t=e.current,c=e.updateLog,s=Object(a.useState)(""),r=Object(_.a)(s,2),l=r[0],i=r[1],o=Object(a.useState)(!1),d=Object(_.a)(o,2),u=d[0],j=d[1],h=Object(a.useState)(""),b=Object(_.a)(h,2),O=b[0],m=b[1];return Object(a.useEffect)((function(){t&&(i(t.message),j(t.attention),m(t.tech))}),[t]),Object(n.jsxs)("div",{id:"edit-log-modal",className:"modal",style:I,children:[Object(n.jsxs)("div",{className:"modal-content",children:[Object(n.jsx)("h4",{children:"Enter System Log"}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("input",{type:"text",name:"message",value:l,onChange:function(e){return i(e.target.value)}}),Object(n.jsx)("label",{htmlFor:"message",className:"active",children:"Log Message"})]})]}),Object(n.jsx)("div",{className:"modal-content row",children:Object(n.jsx)("div",{className:"input-field",children:Object(n.jsxs)("select",{name:"tech",value:O,className:"browser-default",onChange:function(e){return m(e.target.value)},children:[Object(n.jsx)("option",{value:"",disabled:!0,children:"Select Technician"}),Object(n.jsx)(P,{})]})})}),Object(n.jsx)("div",{className:"modal-content row",children:Object(n.jsx)("div",{className:"input-field",children:Object(n.jsx)("p",{children:Object(n.jsxs)("label",{children:[Object(n.jsx)("input",{type:"checkbox",className:"filled-in",checked:u,value:u,onChange:function(e){return j(!u)}}),Object(n.jsx)("span",{children:"Needs Attention"})]})})})}),Object(n.jsx)("div",{className:"modal-footer",children:Object(n.jsx)("a",{href:"#!",onClick:function(){if(""===l||""===O)S.a.toast({html:"Please Enter a Message and Tech"});else{var e={id:t.id,message:l,tech:O,attention:u,date:(new Date).toLocaleDateString()};c(e),w(),i(""),m(""),j(!1)}},className:"modal-close waves-effects waves-green btn",children:"Enter"})})]})}));var B=Object(i.b)(null,{addTech:function(e){return function(){var t=Object(u.a)(d.a.mark((function t(c){var n,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,G(),t.next=4,fetch("/techs",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 4:return n=t.sent,t.next=7,n.json();case 7:a=t.sent,c({type:N,payload:a}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),c({type:T,payload:t.t0.response.statusText});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.addTech,c=Object(a.useState)(""),s=Object(_.a)(c,2),r=s[0],l=s[1],i=Object(a.useState)(""),o=Object(_.a)(i,2),d=o[0],u=o[1];return Object(n.jsxs)("div",{id:"add-tech-modal",className:"modal",children:[Object(n.jsxs)("div",{className:"modal-content",children:[Object(n.jsx)("h4",{children:"New Technician"}),Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"input-field",children:[Object(n.jsx)("input",{type:"text",name:"firstName",value:r,onChange:function(e){return l(e.target.value)}}),Object(n.jsx)("label",{htmlFor:"firstName",className:"active",children:"First Name"})]})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"input-field",children:[Object(n.jsx)("input",{type:"text",name:"lastName",value:d,onChange:function(e){return u(e.target.value)}}),Object(n.jsx)("label",{htmlFor:"lastName",className:"active",children:"Last Name"})]})})]}),Object(n.jsx)("div",{className:"modal-footer",children:Object(n.jsx)("a",{href:"#!",onClick:function(){""===r||""===d?S.a.toast({html:"Please Enter the First Name and Last Name"}):(console.log({firstName:r,lastName:d}),t({firstName:r,lastName:d}),S.a.toast({html:"Technician ".concat(r," ").concat(d," was Added")}),l(""),u(""))},className:"modal-close waves-effects waves-green btn",children:"Enter"})})]})})),U=Object(i.b)(null,{deleteTech:function(e){return function(){var t=Object(u.a)(d.a.mark((function t(c){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,G(),t.next=4,fetch("./techs/".concat(e),{method:"DELETE"});case 4:c({type:y,payload:e}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),c({type:T,payload:t.t0.response.statusText});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.tech,c=e.deleteTech;return Object(n.jsx)("li",{className:"collection-item",children:Object(n.jsxs)("div",{children:[t.firstName," ",t.lastName,Object(n.jsx)("a",{href:"#!",className:"secondary-content",onClick:function(){c(t.id),S.a.toast({html:"Deleted Technician ".concat(t.firstName," ").concat(t.lastName)})},children:Object(n.jsx)("i",{className:"material-icons grey-text",children:"delete"})})]})})})),q=Object(i.b)((function(e){return{tech:e.tech}}),{getTechs:A})((function(e){var t=e.tech,c=t.techs,s=t.loading,r=e.getTechs;return Object(a.useEffect)((function(){r()}),[]),Object(n.jsx)(a.Fragment,{children:Object(n.jsx)("div",{id:"tech-list-modal",className:"modal",children:Object(n.jsxs)("div",{className:"modal-content",children:[Object(n.jsx)("h4",{children:"Technicial List"}),Object(n.jsx)("ul",{className:"collection",children:!s&&null!==c&&c.map((function(e){return Object(n.jsx)(U,{tech:e},e.id)}))})]})})})})),W=c(8),z=c(19),K=c(20),Q=c(12),V=c(2),X={logs:null,current:null,loading:!1,error:null},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(V.a)(Object(V.a)({},e),{},{logs:t.payload,loading:!1});case h:return Object(V.a)(Object(V.a)({},e),{},{logs:[].concat(Object(Q.a)(e.logs),[t.payload]),loading:!1});case g:return Object(V.a)(Object(V.a)({},e),{},{logs:t.payload});case b:return Object(V.a)(Object(V.a)({},e),{},{logs:e.logs.filter((function(e){return e.id!==t.payload})),loading:!1});case p:return Object(V.a)(Object(V.a)({},e),{},{logs:e.logs.map((function(e){return e.id===t.payload.id?t.payload:e})),loading:!1});case O:return Object(V.a)(Object(V.a)({},e),{},{current:t.payload});case m:return Object(V.a)(Object(V.a)({},e),{},{current:null});case x:return console.error(t.payload),Object(V.a)(Object(V.a)({},e),{},{error:t.payload});case f:return Object(V.a)(Object(V.a)({},e),{},{loading:!0});default:return e}},Z={techs:null,loading:!1,error:null},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(V.a)(Object(V.a)({},e),{},{techs:t.payload,loading:!1});case N:return console.log(t.payload),Object(V.a)(Object(V.a)({},e),{},{techs:[].concat(Object(Q.a)(e.techs),[t.payload]),loading:!1});case y:return Object(V.a)(Object(V.a)({},e),{},{techs:e.techs.filter((function(e){return e.id!==t.payload})),loading:!1});case f:return Object(V.a)(Object(V.a)({},e),{},{loading:!0});case T:return console.error(t.payload),Object(V.a)(Object(V.a)({},e),{},{error:t.payload,loading:!1});default:return e}},ee=Object(W.combineReducers)({log:Y,tech:$}),te=[z.a],ce=Object(W.createStore)(ee,{},Object(K.composeWithDevTools)(W.applyMiddleware.apply(void 0,te)));c(32),c(33);var ne=function(){return Object(a.useEffect)((function(){S.a.AutoInit()})),Object(n.jsx)(i.a,{store:ce,children:Object(n.jsxs)(a.Fragment,{children:[Object(n.jsx)(L,{}),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(R,{}),Object(n.jsx)(H,{}),Object(n.jsx)(J,{}),Object(n.jsx)(B,{}),Object(n.jsx)(q,{}),Object(n.jsx)(F,{})]})]})})},ae=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,35)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};l.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(ne,{})}),document.getElementById("root")),ae()}},[[34,1,2]]]);
//# sourceMappingURL=main.e169618c.chunk.js.map