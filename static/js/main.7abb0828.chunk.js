(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n(1),c=n.n(s),r=n(6),i=n.n(r),u=(n(13),n(2)),o=n(7),l=function(t){var e=t.add,n=t.total,c=Object(s.useState)(""),r=Object(u.a)(c,2),i=r[0],l=r[1];return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"row d-flex justify-content-center",children:[Object(a.jsx)("input",{value:i,type:"text",onChange:function(t){return l(t.target.value)}}),Object(a.jsx)("button",{disabled:""===i,className:"btn btn-primary fas fa-plus",onClick:function(){return function(){var t={id:n.length+1,massage:i};e([].concat(Object(o.a)(n),[t])),l("")}()}})]})})},j=function(t){var e=t.totalTasks;return 0===e?Object(a.jsx)("p",{className:"alert alert-info text-center",children:"tidak ada tasks yang perlu dikerjakan"}):Object(a.jsxs)("p",{className:"alert alert-info text-center",children:["kamu memiliki ",Object(a.jsx)("b",{children:e})," tasks "]})},d=(n(14),function(t){var e=t.massage,n=t.id,s=t.setTask,r=t.currentTask,i=c.a.useState(!1),o=Object(u.a)(i,2),l=o[0],j=o[1];return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"row d-flex justify-content-center",children:[Object(a.jsx)("i",{onClick:function(){return j((function(t){return!t}))},className:l?"fas fa-check-square":"far fa-square"}),Object(a.jsx)("li",{className:"col-md-9 col-sm-5 ",children:e}),Object(a.jsx)("button",{onClick:function(){return function(){var t=r.filter((function(t){return t.id!==n}));s(t)}()},className:"col-md-2 col-sm-1 fa fa-trash"})]})})}),b=function(t){var e=t.tasks,n=t.setTask;return e.map((function(t){return Object(a.jsx)(d,{massage:t.massage,id:t.id,setTask:n,currentTask:e},t.id)}))},f=(n(15),function(){var t=Object(s.useState)([]),e=Object(u.a)(t,2),n=e[0],c=e[1];return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"container ",children:[Object(a.jsx)("h1",{className:"text-center text-uppercase",children:"my tasks"}),Object(a.jsx)(j,{totalTasks:n.length}),Object(a.jsx)(l,{add:c,total:n}),Object(a.jsx)(b,{tasks:n,setTask:c})]})})}),m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,c=e.getLCP,r=e.getTTFB;n(t),a(t),s(t),c(t),r(t)}))};n(16);i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(f,{})}),document.getElementById("root")),m()}},[[17,1,2]]]);
//# sourceMappingURL=main.7abb0828.chunk.js.map