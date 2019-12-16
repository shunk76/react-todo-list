(this["webpackJsonpreact-todo-list"]=this["webpackJsonpreact-todo-list"]||[]).push([[0],{14:function(t,e,a){},18:function(t,e,a){},19:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(7),i=a.n(o),s=(a(14),function(){return r.a.createElement("header",{className:"app__header"},r.a.createElement("h1",{className:"app__header__heading"},"ToDo List",r.a.createElement("br",null),"\u4eca\u70ba\u3059\u3079\u304d\u3053\u3068\u3092\u70ba\u305b"))}),c=a(1),l=a(2),p=a(4),d=a(3),u=a(5),h={priority:{high:"\ud83d\ude0d",middle:"\ud83d\ude00",low:"\ud83d\ude10"}},m=h.priority,y=function(t){function e(){return Object(c.a)(this,e),Object(p.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"priority-icon"},r.a.createElement("span",{className:"priority-icon__emoji",role:"img","aria-label":"Priority: ".concat(this.props.priority)},m[this.props.priority]),r.a.createElement("br",null),r.a.createElement("span",{className:"priority-icon__text"},this.props.priority))}}]),e}(n.Component),f=function(t){function e(){return Object(c.a)(this,e),Object(p.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this;return Object.keys(m).map((function(e,a){var n={key:a,value:e,tabIndex:Number(t.props.tabIndex)+a,className:"priority-list__item__button".concat(e===t.props.priority?" priority-list__item__button--selected":""),onMouseUp:t.props.handleChangePriority,onTouchEnd:t.props.handleChangePriority,onKeyUp:t.props.handleChangePriorityWithKeyBoard};return r.a.createElement("li",{key:e,className:"priority-list__item"},r.a.createElement("button",Object.assign({},n,{type:"button"}),r.a.createElement(y,{priority:e})))}))}}]),e}(n.Component),g=function(t){function e(){return Object(c.a)(this,e),Object(p.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"options"},r.a.createElement("dl",{className:"options__list"},r.a.createElement("div",{className:"options__list__item"},r.a.createElement("dt",{className:"options__list__item__heading"},"Priority"),r.a.createElement("dd",{className:"options__list__item__content"},r.a.createElement("ul",{className:"priority-list"},r.a.createElement(f,{handleChangePriority:this.props.handleChangePriority,handleChangePriorityWithKeyBoard:this.props.handleChangePriorityWithKeyBoard,priority:this.props.priority,tabIndex:"2"}))))))}}]),e}(n.Component),b=function(t){function e(){var t,a;Object(c.a)(this,e);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(r)))).handleClick=function(){a.props.addTodo(a.props.input),a.props.setTask(""),a.props.setPriority("middle")},a.handleEnter=function(t){t.shiftKey&&"Enter"===t.key&&(a.props.addTodo(a.props.input),a.props.setTask(""),a.props.setPriority("middle"))},a.handleChange=function(t){a.props.setTask(t.target.value)},a.handleChangePriority=function(t){a.props.setPriority(t.currentTarget.value)},a.handleChangePriorityWithKeyBoard=function(t){!1===t.shiftKey&&"Enter"===t.key&&a.props.setPriority(t.currentTarget.value)},a}return Object(u.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{onKeyPress:this.handleEnter},r.a.createElement("div",{className:"input-todo"},r.a.createElement("input",{id:"input",className:"input-todo__input",tabIndex:"1",value:this.props.input.task,onChange:this.handleChange,type:"text"}),r.a.createElement("button",{className:"input-todo__add-button",tabIndex:"5",onClick:this.handleClick,type:"button"},"Add")),r.a.createElement(g,{handleChangePriority:this.handleChangePriority,handleChangePriorityWithKeyBoard:this.handleChangePriorityWithKeyBoard,priority:this.props.input.priority}))}}]),e}(n.Component),k=a(8),v=function(t){function e(){var t,a;Object(c.a)(this,e);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(r)))).handleCheck=function(){a.props.doneTodo(a.props.id)},a.handleChangeTask=function(t){a.props.changeTask(a.props.id,t.target.value)},a}return Object(u.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t={true:"done",false:"not-yet"};return r.a.createElement("div",{className:"task"},r.a.createElement("input",{className:"task__check",type:"checkbox",onChange:this.handleCheck,checked:{true:"checked",false:""}[this.props.status]}),r.a.createElement(k.a,{className:"task__textarea","data-status":t[this.props.status],"data-editing":this.props.editing,onChange:this.handleChangeTask,value:this.props.task}),r.a.createElement("pre",{className:"task__text","data-status":t[this.props.status]},this.props.task))}}]),e}(n.Component),_=function(t){function e(){var t,a;Object(c.a)(this,e);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(r)))).handleUpdated=function(){a.props.updatedTask(a.props.id)},a.handleDidNotUpdate=function(){a.props.didNotUpdateTask(a.props.id)},a}return Object(u.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"task-buttons","data-editing":this.props.editing},r.a.createElement("button",{className:"task-buttons__button task-buttons__button__save",onClick:this.handleUpdated,title:"Save",type:"button"},r.a.createElement("span",{role:"img","aria-label":"save"},"\ud83d\ude46\u200d\u2642\ufe0f")," save"),r.a.createElement("button",{className:"task-buttons__button task-buttons__button__cancel",onClick:this.handleDidNotUpdate,title:"Cancel",type:"button"},"\u200d",r.a.createElement("span",{role:"img","aria-label":"cancel"},"\ud83d\ude45\u200d\u2642\ufe0f")," cancel"))}}]),e}(n.Component),E=function(t){function e(){var t,a;Object(c.a)(this,e);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(r)))).handleClick=function(t){a.props.handleToggle(),a.props.changePriority(a.props.id,t.currentTarget.value)},a}return Object(u.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this,e=Object.keys(m).filter((function(e){return e!==t.props.priority})).map((function(e,a){return r.a.createElement("li",{className:"other-priority__item",key:e},r.a.createElement("button",{key:a,className:"other-priority__button",value:e,onClick:t.handleClick,type:"button"},r.a.createElement(y,{priority:e})))}));return!0===this.props.show?r.a.createElement("ul",{className:"other-priority other-priority--show"},e):r.a.createElement("ul",{className:"other-priority"},e)}}]),e}(n.Component),T=function(t){function e(){return Object(c.a)(this,e),Object(p.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"priority"},r.a.createElement("button",{className:"priority__button",onClick:this.props.handleToggle,type:"button"},r.a.createElement(y,{priority:this.props.priority})),r.a.createElement(E,{priority:this.props.priority,id:this.props.id,changePriority:this.props.changePriority,show:this.props.show,handleToggle:this.props.handleToggle}))}}]),e}(n.Component),j=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(p.a)(this,Object(d.a)(e).call(this,t))).handleRemove=function(){a.props.removeTodo(a.props.id)},a.handleToggle=function(){a.setState({show:!a.state.show})},a.state={show:!1},a}return Object(u.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement("li",{className:"todo-list__item"},r.a.createElement(v,this.props),r.a.createElement(_,this.props),r.a.createElement(T,Object.assign({},this.props,{show:this.state.show,handleToggle:this.handleToggle})),r.a.createElement("time",{className:"todo-list__item__time",dateTime:this.props.time},this.props.time),r.a.createElement("button",{className:"todo-list__item__remove",onClick:this.handleRemove,title:"\u3053\u306eTodo\u3092\u524a\u9664\u3059\u308b"},"\ud83d\uddd1"))}}]),e}(n.Component),O=function(t){function e(){return Object(c.a)(this,e),Object(p.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this,e=this.props.tasks.map((function(e){var a={key:e.id,removeTodo:t.props.removeTodo,doneTodo:t.props.doneTodo,editingTodo:t.props.editingTodo,updatedTask:t.props.updatedTask,didNotUpdateTask:t.props.didNotUpdateTask,changeTask:t.props.changeTask,changePriority:t.props.changePriority};return r.a.createElement(j,Object.assign({},e,a))}));return r.a.createElement("ul",{className:"todo-list"},e)}}]),e}(n.Component),N=function(t,e){return String(t).padStart(e,"0")},C=function(){var t=new Date,e=t.getFullYear(),a=N(t.getMonth()+1,2),n=N(t.getDate(),2),r=N(t.getHours(),2),o=N(t.getMinutes(),2),i=N(t.getSeconds(),2);return"".concat(e,"-").concat(a,"-").concat(n," ").concat(r,":").concat(o,":").concat(i)},w=function(t){function e(t){var a;Object(c.a)(this,e),(a=Object(p.a)(this,Object(d.a)(e).call(this,t))).defaultState=function(){return{tasks:[{task:"Add your tasks or edit this!",before:"Add your tasks or edit this!",status:!1,editing:!1,time:C(),priority:"middle",id:0}],uniquId:1,input:{task:"",priority:"middle"}}},a.saveState=function(t){window.localStorage.setItem(a.storage,JSON.stringify(t))},a.handleSave=function(){a.saveState(a.state)},a.removeState=function(){window.localStorage.removeItem(a.storage),a.setState(a.defaultState())},a.setTask=function(t){var e=a.state.input;e.task=t,a.setState({input:e},a.handleSave)},a.setPriority=function(t){var e=a.state.input;e.priority=t,a.setState({input:e},a.handleSave)},a.addTodo=function(t){if(t.task=t.task.trim(),""!==t.task){var e=a.state,n=e.tasks,r=e.uniquId;n.unshift({task:t.task,before:t.task,status:!1,editing:!1,time:C(),priority:t.priority,id:r}),a.setState({tasks:n,uniquId:r+1},a.handleSave)}},a.removeTodo=function(t){a.setState({tasks:a.state.tasks.filter((function(e){return e.id!==t}))},a.handleSave)},a.doneTodo=function(t){a.setState(a.state.tasks.map((function(e){return e.id===t&&(e.status=!e.status),e})),a.handleSave)},a.updatedTask=function(t){a.setState(a.state.tasks.map((function(e){return e.id===t&&(e.editing=!1,e.before=e.task),e})),a.handleSave)},a.didNotUpdateTask=function(t){a.setState(a.state.tasks.map((function(e){return e.id===t&&(e.editing=!1,e.updated=!e.updated,e.task=e.before),e})),a.handleSave)},a.changeTask=function(t,e){a.setState(a.state.tasks.map((function(a){return a.id===t&&(a.editing=!0,a.task=e),a})),a.handleSave)},a.changePriority=function(t,e){a.setState(a.state.tasks.map((function(a){return a.id===t&&(a.priority=e,a.changingPriority=!1),a})),a.handleSave)},a.storage="app-state";var n=JSON.parse(localStorage.getItem(a.storage));return a.state=n||a.defaultState(),a}return Object(u.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this,e={tasks:this.state.tasks,removeTodo:this.removeTodo,doneTodo:this.doneTodo,editing:this.editingTodo,changeTask:this.changeTask,updatedTask:this.updatedTask,didNotUpdateTask:this.didNotUpdateTask,changePriority:this.changePriority};return r.a.createElement("div",{className:"todo"},r.a.createElement(b,{addTodo:this.addTodo,setPriority:this.setPriority,setTask:this.setTask,input:this.state.input}),r.a.createElement(O,e),r.a.createElement("p",{className:"remove-data"},"This app uses localStorage to store ToDo data.",r.a.createElement("br",null),r.a.createElement("button",{className:"remove-data__button",onClick:function(){return t.removeState()}},"Clear the data")))}}]),e}(n.Component),S=function(){return r.a.createElement("div",{className:"app__body"},r.a.createElement(w,null))},P=(new Date).getFullYear(),U=function(){return r.a.createElement("footer",{className:"app__footer"},r.a.createElement("p",{className:"align-center"},"Github repository: ",r.a.createElement("a",{href:"https://github.com/shunk76/react-todo-list"},"react-todo-list")),r.a.createElement("p",{className:"copy-right"},"\xa9 ",r.a.createElement("span",null,P)," ",r.a.createElement("a",{href:"https://bonyspike.asia"},"bonyspike.asia")))};a(18);var W=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s,null),r.a.createElement(S,null),r.a.createElement(U,null))},x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function A(t,e){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var a=t.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}i.a.render(r.a.createElement(W,null),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat(".","/service-worker.js");x?(!function(t,e){fetch(t).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):A(t,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):A(e,t)}))}}()},9:function(t,e,a){t.exports=a(19)}},[[9,1,2]]]);
//# sourceMappingURL=main.371ab30d.chunk.js.map