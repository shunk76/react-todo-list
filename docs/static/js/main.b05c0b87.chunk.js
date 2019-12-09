(this["webpackJsonpreact-todo-list2"]=this["webpackJsonpreact-todo-list2"]||[]).push([[0],{10:function(t,e,a){t.exports=a(20)},15:function(t,e,a){},19:function(t,e,a){},20:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(8),i=a.n(o),s=(a(15),function(){return r.a.createElement("header",{className:"app__header"},r.a.createElement("h1",{className:"app__header__heading"},"ToDo List",r.a.createElement("br",null),"\u4eca\u70ba\u3059\u3079\u304d\u3053\u3068\u3092\u70ba\u305b"))}),c=a(1),l=a(2),u=a(4),d=a(3),h=a(5),p=a(6),m={priority:{high:"\ud83d\ude0d",middle:"\ud83d\ude00",low:"\ud83d\ude10"}},f=m.priority,b=function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"priority-icon"},r.a.createElement("span",{className:"priority-icon__emoji",role:"img","aria-label":"Priority: ".concat(this.props.priority)},f[this.props.priority]),r.a.createElement("br",null),r.a.createElement("span",{className:"priority-icon__text"},this.props.priority))}}]),e}(n.Component),y=function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this;return Object.keys(f).map((function(e,a){var n=Number(t.props.tabIndex)+a,o={key:Date.now(),value:e,tabIndex:n,className:"priority-list__item__button".concat(e===t.props.priority?" priority-list__item__button--selected":""),onMouseUp:t.props.handleChangePriority,onTouchEnd:t.props.handleChangePriority,onKeyUp:t.props.handleChangePriorityWithKeyBoard};return r.a.createElement("li",{key:e,className:"priority-list__item"},r.a.createElement("button",Object.assign({},o,{type:"button"}),r.a.createElement(b,{priority:e})))}))}}]),e}(n.Component),g=function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"options"},r.a.createElement("dl",{className:"options__list"},r.a.createElement("div",{className:"options__list__item"},r.a.createElement("dt",{className:"options__list__item__heading"},"Priority"),r.a.createElement("dd",{className:"options__list__item__content"},r.a.createElement("ul",{className:"priority-list"},r.a.createElement(y,{handleChangePriority:this.props.handleChangePriority,handleChangePriorityWithKeyBoard:this.props.handleChangePriorityWithKeyBoard,priority:this.props.priority,tabIndex:"2"}))))))}}]),e}(n.Component),k=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(u.a)(this,Object(d.a)(e).call(this,t))).defaultState={task:"",priority:"middle"},a.state=a.defaultState,Object.getOwnPropertyNames(a.__proto__).forEach((function(t){return a[t]=a[t].bind(Object(p.a)(a))})),a}return Object(h.a)(e,t),Object(l.a)(e,[{key:"handleClick",value:function(){this.props.addTodo(this.state),this.setState(this.defaultState)}},{key:"handleEnter",value:function(t){t.shiftKey&&"Enter"===t.key&&(this.props.addTodo(this.state),this.setState(this.defaultState))}},{key:"handleChange",value:function(t){this.setState({task:t.target.value})}},{key:"handleChangePriority",value:function(t){this.setState({priority:t.currentTarget.value})}},{key:"handleChangePriorityWithKeyBoard",value:function(t){!1===t.shiftKey&&"Enter"===t.key&&this.setState({priority:t.currentTarget.value})}},{key:"render",value:function(){return r.a.createElement("div",{onKeyPress:this.handleEnter},r.a.createElement("div",{className:"input-todo"},r.a.createElement("input",{id:"input",className:"input-todo__input",tabIndex:"1",value:this.state.task,onChange:this.handleChange,type:"text"}),r.a.createElement("button",{className:"input-todo__add-button",tabIndex:"5",onClick:this.handleClick,type:"button"},"Add")),r.a.createElement(g,{handleChangePriority:this.handleChangePriority,handleChangePriorityWithKeyBoard:this.handleChangePriorityWithKeyBoard,priority:this.state.priority}))}}]),e}(n.Component),v=a(9),_=function(t){function e(t){var a;return Object(c.a)(this,e),a=Object(u.a)(this,Object(d.a)(e).call(this,t)),Object.getOwnPropertyNames(a.__proto__).forEach((function(t){return a[t]=a[t].bind(Object(p.a)(a))})),a}return Object(h.a)(e,t),Object(l.a)(e,[{key:"handleCheck",value:function(){this.props.doneTodo(this.props.id)}},{key:"handleChangeTask",value:function(t){this.props.changeTask(this.props.id,t.target.value)}},{key:"render",value:function(){var t={true:"done",false:"not-yet"};return r.a.createElement("div",{className:"task"},r.a.createElement("input",{className:"task__check",type:"checkbox",onChange:this.handleCheck,checked:{true:"checked",false:""}[this.props.status]}),r.a.createElement(v.a,{className:"task__textarea","data-status":t[this.props.status],"data-editing":this.props.editing,onChange:this.handleChangeTask,value:this.props.task}),r.a.createElement("pre",{className:"task__text","data-status":t[this.props.status]},this.props.task))}}]),e}(n.Component),E=function(t){function e(t){var a;return Object(c.a)(this,e),a=Object(u.a)(this,Object(d.a)(e).call(this,t)),Object.getOwnPropertyNames(a.__proto__).forEach((function(t){return a[t]=a[t].bind(Object(p.a)(a))})),a}return Object(h.a)(e,t),Object(l.a)(e,[{key:"handleUpdated",value:function(){this.props.updatedTask(this.props.id)}},{key:"handleDidNotUpdate",value:function(){this.props.didNotUpdateTask(this.props.id)}},{key:"render",value:function(){return r.a.createElement("div",{className:"task-buttons","data-editing":this.props.editing},r.a.createElement("button",{className:"task-buttons__button task-buttons__button__save",onClick:this.handleUpdated,title:"Save",type:"button"},r.a.createElement("span",{role:"img","aria-label":"save"},"\ud83d\ude46\u200d\u2642\ufe0f")," save"),r.a.createElement("button",{className:"task-buttons__button task-buttons__button__cancel",onClick:this.handleDidNotUpdate,title:"Cancel",type:"button"},"\u200d",r.a.createElement("span",{role:"img","aria-label":"cancel"},"\ud83d\ude45\u200d\u2642\ufe0f")," cancel"))}}]),e}(n.Component),O=function(t){function e(t){var a;return Object(c.a)(this,e),a=Object(u.a)(this,Object(d.a)(e).call(this,t)),Object.getOwnPropertyNames(a.__proto__).forEach((function(t){return a[t]=a[t].bind(Object(p.a)(a))})),a}return Object(h.a)(e,t),Object(l.a)(e,[{key:"handleClick",value:function(t){this.props.handleToggle(),this.props.changePriority(this.props.id,t.currentTarget.value)}},{key:"render",value:function(){var t=this,e=Object.keys(f).filter((function(e){return e!==t.props.priority})).map((function(e,a){return r.a.createElement("li",{className:"other-priority__item",key:e},r.a.createElement("button",{key:a,className:"other-priority__button",value:e,onClick:t.handleClick,type:"button"},r.a.createElement(b,{priority:e})))}));return!0===this.props.show?r.a.createElement("ul",{className:"other-priority other-priority--show"},e):r.a.createElement("ul",{className:"other-priority"},e)}}]),e}(n.Component),j=function(t){function e(t){var a;return Object(c.a)(this,e),a=Object(u.a)(this,Object(d.a)(e).call(this,t)),Object.getOwnPropertyNames(a.__proto__).forEach((function(t){return a[t]=a[t].bind(Object(p.a)(a))})),a}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"priority"},r.a.createElement("button",{className:"priority__button",onClick:this.props.handleToggle,type:"button"},r.a.createElement(b,{priority:this.props.priority})),r.a.createElement(O,{priority:this.props.priority,id:this.props.id,changePriority:this.props.changePriority,show:this.props.show,handleToggle:this.props.handleToggle}))}}]),e}(n.Component),N=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(u.a)(this,Object(d.a)(e).call(this,t))).state={show:!1},Object.getOwnPropertyNames(a.__proto__).forEach((function(t){return a[t]=a[t].bind(Object(p.a)(a))})),a}return Object(h.a)(e,t),Object(l.a)(e,[{key:"handleRemove",value:function(){this.props.removeTodo(this.props.id)}},{key:"handleToggle",value:function(){this.setState({show:!this.state.show})}},{key:"render",value:function(){return r.a.createElement("li",{className:"todo-list__item"},r.a.createElement(_,this.props),r.a.createElement(E,this.props),r.a.createElement(j,Object.assign({},this.props,{show:this.state.show,handleToggle:this.handleToggle})),r.a.createElement("time",{className:"todo-list__item__time",dateTime:this.props.time},this.props.time),r.a.createElement("button",{className:"todo-list__item__remove",onClick:this.handleRemove,title:"\u3053\u306eTodo\u3092\u524a\u9664\u3059\u308b"},"\ud83d\uddd1"))}}]),e}(n.Component),T=function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this,e=this.props.tasks.map((function(e){var a={key:e.id,removeTodo:t.props.removeTodo,doneTodo:t.props.doneTodo,editingTodo:t.props.editingTodo,updatedTask:t.props.updatedTask,didNotUpdateTask:t.props.didNotUpdateTask,changeTask:t.props.changeTask,changePriority:t.props.changePriority};return r.a.createElement(N,Object.assign({},e,a))}));return r.a.createElement("ul",{className:"todo-list"},e)}}]),e}(n.Component),C=function(t,e){return String(t).padStart(e,"0")},w=function(){var t=new Date,e=t.getFullYear(),a=C(t.getMonth()+1,2),n=C(t.getDate(),2),r=C(t.getHours(),2),o=C(t.getMinutes(),2),i=C(t.getSeconds(),2);return"".concat(e,"-").concat(a,"-").concat(n," ").concat(r,":").concat(o,":").concat(i)},S=function(t){function e(t){var a;Object(c.a)(this,e),(a=Object(u.a)(this,Object(d.a)(e).call(this,t))).defaultState=function(){return{tasks:[{task:"Add your tasks or edit this!",before:"Add your tasks or edit this!",status:!1,editing:!1,time:w(),priority:"middle",id:0}],uniquId:1}},a.saveState=function(t){window.localStorage.setItem(a.storage,JSON.stringify(t))},a.handleSave=function(){a.saveState(a.state)},a.removeState=function(){window.localStorage.removeItem(a.storage),a.setState(a.defaultState())},a.addTodo=function(t){if(t.task=t.task.trim(),""!==t.task){var e=a.state,n=e.tasks,r=e.uniquId;n.unshift({task:t.task,before:t.task,status:!1,editing:!1,time:w(),priority:t.priority,id:r}),a.setState({tasks:n,uniquId:r+1},a.handleSave)}},a.removeTodo=function(t){a.setState({tasks:a.state.tasks.filter((function(e){return e.id!==t}))},a.handleSave)},a.doneTodo=function(t){a.setState(a.state.tasks.map((function(e){return e.id===t&&(e.status=!e.status),e})),a.handleSave)},a.updatedTask=function(t){a.setState(a.state.tasks.map((function(e){return e.id===t&&(e.editing=!1,e.before=e.task),e})),a.handleSave)},a.didNotUpdateTask=function(t){a.setState(a.state.tasks.map((function(e){return e.id===t&&(e.editing=!1,e.updated=!e.updated,e.task=e.before),e})),a.handleSave)},a.changeTask=function(t,e){a.setState(a.state.tasks.map((function(a){return a.id===t&&(a.editing=!0,a.task=e),a})),a.handleSave)},a.changePriority=function(t,e){a.setState(a.state.tasks.map((function(a){return a.id===t&&(a.priority=e,a.changingPriority=!1),a})),a.handleSave)},a.storage="app-state";var n=JSON.parse(localStorage.getItem(a.storage));return a.state=n||a.defaultState(),a}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this,e={tasks:this.state.tasks,removeTodo:this.removeTodo,doneTodo:this.doneTodo,editing:this.editingTodo,changeTask:this.changeTask,updatedTask:this.updatedTask,didNotUpdateTask:this.didNotUpdateTask,changePriority:this.changePriority};return r.a.createElement("div",{className:"todo"},r.a.createElement(k,{addTodo:this.addTodo}),r.a.createElement(T,e),r.a.createElement("p",{className:"remove-data"},"This app uses localStorage to store ToDo data.",r.a.createElement("br",null),r.a.createElement("button",{className:"remove-data__button",onClick:function(){return t.removeState()}},"Clear the data")))}}]),e}(n.Component),P=function(){return r.a.createElement("div",{className:"app__body"},r.a.createElement(S,null))},U=(new Date).getFullYear(),W=function(){return r.a.createElement("footer",{className:"app__footer"},r.a.createElement("p",{className:"align-center"},"Github repository: ",r.a.createElement("a",{href:"https://github.com/shunk76/react-todo-list"},"react-todo-list")),r.a.createElement("p",{className:"copy-right"},"\xa9 ",r.a.createElement("span",null,U)," ",r.a.createElement("a",{href:"https://bonyspike.asia"},"bonyspike.asia")))};a(19);var x=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s,null),r.a.createElement(P,null),r.a.createElement(W,null))},I=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(t,e){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var a=t.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}i.a.render(r.a.createElement(x,null),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat(".","/service-worker.js");I?(!function(t,e){fetch(t).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):K(t,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):K(e,t)}))}}()}},[[10,1,2]]]);
//# sourceMappingURL=main.b05c0b87.chunk.js.map