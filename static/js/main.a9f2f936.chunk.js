(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{45:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(15),d=c.n(s),o=c(5),l=c(22),i=c(7),r=c(21),j=c(3),u=c(34),b=c(1),h=function(e){var t=e.todo,c=e.handleCheck,a=e.handleDelete,s=Object(n.useState)(t.completed),d=Object(i.a)(s,2),o=d[0],l=d[1];Object(n.useEffect)((function(){l(t.completed),o?document.getElementById(t.id).classList.add("checked"):document.getElementById(t.id).classList.remove("checked")}));return Object(b.jsxs)("div",{className:"todo-row",id:t.id,children:[Object(b.jsxs)("div",{className:"sub",children:[Object(b.jsx)("input",{className:"todo",type:"checkbox",id:t.id,checked:o,onChange:c}),Object(b.jsx)("span",{className:"todo",children:t.id}),Object(b.jsx)("p",{className:"todo",children:t.title})]}),o&&Object(b.jsx)(u.a,{size:18,color:"red",id:t.id,onClick:a,onMouseDown:function(e){e.target.classList.add("delete-icon")}})]})},O=function(e){var t=e.todoList,c=e.handleCheck,n=e.handleDelete;return Object(b.jsx)("div",{className:"todo-list",children:Object(b.jsx)("div",{children:t&&t.map((function(e){return Object(b.jsx)(h,{todo:e,handleCheck:c,handleDelete:n},e.id)}))})})},m=c(49),f=c(50);var p=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(m.a,{className:"navbar",children:[Object(b.jsx)(f.a.Link,{as:r.b,to:"/list",className:"link",children:"Todo List"}),Object(b.jsx)(f.a.Link,{as:r.b,to:"/unchecked",className:"link",children:"Active"}),Object(b.jsx)(f.a.Link,{as:r.b,to:"/checked",className:"link",children:"Completed"})]})})};c(45);var x=function(){var e=Object(n.useState)(),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)([]),d=Object(i.a)(s,2),u=d[0],h=d[1],m=Object(n.useState)([]),f=Object(i.a)(m,2),x=f[0],v=f[1],k=Object(n.useState)([]),g=Object(i.a)(k,2),N=g[0],C=g[1],L=function(){var e=u.filter((function(e){return!0===e.completed})),t=u.filter((function(e){return!1===e.completed}));v(e),C(t)},D=function(e){var t=Number(e.target.id),c=Object(l.a)(u);c=c.map((function(e){return t===e.id&&(e.completed?e.completed=!1:e.completed=!0),e})),h(c),L()},S=function(e){var t=e.target.parentNode,c=Number(t.id);console.log(c);var n=Object(l.a)(u).filter((function(e){return e.id!==c}));h(n),console.log(u)};return Object(n.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/todos").then((function(e){return e.json()})).then((function(e){return h(e.filter((function(e){return e.id<21})))}))}),[h]),Object(n.useEffect)((function(){u.length,L()}),[u.length]),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"ToDo-app"}),Object(b.jsxs)(r.a,{children:[Object(b.jsx)(p,{}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("form",{children:[Object(b.jsx)("input",{className:"add-task",type:"text",name:"title",onChange:function(e){var t,c=u.length+1,n=(t={},Object(o.a)(t,e.target.name,e.target.value),Object(o.a)(t,"completed",!1),Object(o.a)(t,"id",c),t);a(n)}}),Object(b.jsx)("button",{onClick:function(e){var t=document.querySelector(".add-task");""===t.value?(e.preventDefault(),console.log("ingrese tarea")):(e.preventDefault(),h([].concat(Object(l.a)(u),[c])),t.value="",a())},onMouseDown:function(){document.querySelector(".btn-add").classList.add("btn-add-selected"),setTimeout((function(){document.querySelector(".btn-add").classList.remove("btn-add-selected")}),100)},className:"btn-add",children:"add"})]}),Object(b.jsx)("button",{className:"btn-clean",onClick:function(){h(u.filter((function(e){return!1===e.completed})))},children:"clean fullfileds"})]}),Object(b.jsx)(j.c,{children:Object(b.jsx)(j.a,{path:"/list",element:Object(b.jsx)(O,{todoList:u,handleCheck:D,handleDelete:S})})}),Object(b.jsx)(j.c,{children:Object(b.jsx)(j.a,{path:"/unchecked",element:Object(b.jsx)(O,{todoList:N,handleCheck:D})})}),Object(b.jsx)(j.c,{children:Object(b.jsx)(j.a,{path:"/checked",element:Object(b.jsx)(O,{todoList:x,handleCheck:D,handleDelete:S})})})]})]})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,51)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,d=t.getTTFB;c(e),n(e),a(e),s(e),d(e)}))};d.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root")),v()}},[[46,1,2]]]);
//# sourceMappingURL=main.a9f2f936.chunk.js.map