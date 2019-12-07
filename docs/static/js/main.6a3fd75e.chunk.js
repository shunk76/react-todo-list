(this["webpackJsonpreact-todo-list2"]=this["webpackJsonpreact-todo-list2"]||[]).push([[0],{10:function(t,e,a){t.exports=a(20)},15:function(t,e,a){},19:function(t,e,a){},20:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),r=a(8),s=a.n(r),o=(a(15),function(){return i.a.createElement("header",{className:"app__header"},i.a.createElement("h1",{className:"app__header__heading"},"ToDo List",i.a.createElement("br",null),"\u4eca\u70ba\u3059\u3079\u304d\u3053\u3068\u3092\u70ba\u305b"))}),c=a(1),l=a(2),u=a(4),h=a(3),p=a(6),d=a(5),m={priority:{high:"\ud83d\ude0d",middle:"\ud83d\ude00",low:"\ud83d\ude10"}},y=m.priority,b=function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"priority-icon"},i.a.createElement("span",{className:"priority-icon__emoji",role:"img","aria-label":"Priority: ".concat(this.props.priority)},y[this.props.priority]),i.a.createElement("br",null),i.a.createElement("span",{className:"priority-icon__text"},this.props.priority))}}]),e}(n.Component),k=function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this;return Object.keys(y).map((function(e,a){var n=Number(t.props.tabIndex)+a,r={key:Date.now(),value:e,tabIndex:n,className:"priority-list__item__button".concat(e===t.props.priority?" priority-list__item__button--selected":""),onMouseUp:t.props.handleChangePriority,onTouchEnd:t.props.handleChangePriority,onKeyUp:t.props.handleChangePriorityWithKeyBoard};return i.a.createElement("li",{key:e,className:"priority-list__item"},i.a.createElement("button",Object.assign({},r,{type:"button"}),i.a.createElement(b,{priority:e})))}))}}]),e}(n.Component),f=function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"options"},i.a.createElement("dl",{className:"options__list"},i.a.createElement("div",{className:"options__list__item"},i.a.createElement("dt",{className:"options__list__item__heading"},"Priority"),i.a.createElement("dd",{className:"options__list__item__content"},i.a.createElement("ul",{className:"priority-list"},i.a.createElement(k,{handleChangePriority:this.props.handleChangePriority,handleChangePriorityWithKeyBoard:this.props.handleChangePriorityWithKeyBoard,priority:this.props.priority,tabIndex:"2"}))))))}}]),e}(n.Component),_=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(u.a)(this,Object(h.a)(e).call(this,t))).defaultState={task:"",priority:"middle"},a.state=a.defaultState,Object.getOwnPropertyNames(a.__proto__).forEach((function(t){return a[t]=a[t].bind(Object(p.a)(a))})),a}return Object(d.a)(e,t),Object(l.a)(e,[{key:"handleClick",value:function(){this.props.addTodo(this.state),this.setState(this.defaultState)}},{key:"handleEnter",value:function(t){t.shiftKey&&"Enter"===t.key&&(this.props.addTodo(this.state),this.setState(this.defaultState))}},{key:"handleChange",value:function(t){this.setState({task:t.target.value})}},{key:"handleChangePriority",value:function(t){this.setState({priority:t.currentTarget.value})}},{key:"handleChangePriorityWithKeyBoard",value:function(t){!1===t.shiftKey&&"Enter"===t.key&&this.setState({priority:t.currentTarget.value})}},{key:"render",value:function(){return i.a.createElement("div",{onKeyPress:this.handleEnter},i.a.createElement("div",{className:"input-todo"},i.a.createElement("input",{id:"input",className:"input-todo__input",tabIndex:"1",value:this.state.task,onChange:this.handleChange,type:"text"}),i.a.createElement("button",{className:"input-todo__add-button",tabIndex:"5",onClick:this.handleClick,type:"button"},"Add")),i.a.createElement(f,{handleChangePriority:this.handleChangePriority,handleChangePriorityWithKeyBoard:this.handleChangePriorityWithKeyBoard,priority:this.state.priority}))}}]),e}(n.Component),g=a(9),v=function(t){function e(t){var a;return Object(c.a)(this,e),a=Object(u.a)(this,Object(h.a)(e).call(this,t)),Object.getOwnPropertyNames(a.__proto__).forEach((function(t){return a[t]=a[t].bind(Object(p.a)(a))})),a}return Object(d.a)(e,t),Object(l.a)(e,[{key:"handleCheck",value:function(){this.props.doneTodo(this.props.id)}},{key:"handleChangeTask",value:function(t){this.props.changeTask(this.props.id,t.target.value)}},{key:"render",value:function(){var t={true:"done",false:"not-yet"};return i.a.createElement("div",{className:"task"},i.a.createElement("input",{className:"task__check",type:"checkbox",onChange:this.handleCheck,checked:{true:"checked",false:""}[this.props.status]}),i.a.createElement(g.a,{className:"task__textarea","data-status":t[this.props.status],"data-editing":this.props.editing,onChange:this.handleChangeTask,value:this.props.task}),i.a.createElement("pre",{className:"task__text","data-status":t[this.props.status]},this.props.task))}}]),e}(n.Component),O=function(t){function e(t){var a;return Object(c.a)(this,e),a=Object(u.a)(this,Object(h.a)(e).call(this,t)),Object.getOwnPropertyNames(a.__proto__).forEach((function(t){return a[t]=a[t].bind(Object(p.a)(a))})),a}return Object(d.a)(e,t),Object(l.a)(e,[{key:"handleUpdated",value:function(){this.props.updatedTask(this.props.id)}},{key:"handleDidNotUpdate",value:function(){this.props.didNotUpdateTask(this.props.id)}},{key:"render",value:function(){return i.a.createElement("div",{className:"task-buttons","data-editing":this.props.editing},i.a.createElement("button",{className:"task-buttons__button task-buttons__button__save",onClick:this.handleUpdated,title:"Save",type:"button"},i.a.createElement("span",{role:"img","aria-label":"save"},"\ud83d\ude46\u200d\u2642\ufe0f")," save"),i.a.createElement("button",{className:"task-buttons__button task-buttons__button__cancel",onClick:this.handleDidNotUpdate,title:"Cancel",type:"button"},"\u200d",i.a.createElement("span",{role:"img","aria-label":"cancel"},"\ud83d\ude45\u200d\u2642\ufe0f")," cancel"))}}]),e}(n.Component),E=function(t){function e(t){var a;return Object(c.a)(this,e),a=Object(u.a)(this,Object(h.a)(e).call(this,t)),Object.getOwnPropertyNames(a.__proto__).forEach((function(t){return a[t]=a[t].bind(Object(p.a)(a))})),a}return Object(d.a)(e,t),Object(l.a)(e,[{key:"handleClick",value:function(t){this.props.handleToggle(),this.props.changePriority(this.props.id,t.currentTarget.value)}},{key:"render",value:function(){var t=this,e=Object.keys(y).filter((function(e){return e!==t.props.priority})).map((function(e,a){return i.a.createElement("li",{className:"other-priority__item",key:e},i.a.createElement("button",{key:a,className:"other-priority__button",value:e,onClick:t.handleClick,type:"button"},i.a.createElement(b,{priority:e})))}));return!0===this.props.show?i.a.createElement("ul",{className:"other-priority other-priority--show"},e):i.a.createElement("ul",{className:"other-priority"},e)}}]),e}(n.Component),j=function(t){function e(t){var a;return Object(c.a)(this,e),a=Object(u.a)(this,Object(h.a)(e).call(this,t)),Object.getOwnPropertyNames(a.__proto__).forEach((function(t){return a[t]=a[t].bind(Object(p.a)(a))})),a}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"priority"},i.a.createElement("button",{className:"priority__button",onClick:this.props.handleToggle,type:"button"},i.a.createElement(b,{priority:this.props.priority})),i.a.createElement(E,{priority:this.props.priority,id:this.props.id,changePriority:this.props.changePriority,show:this.props.show,handleToggle:this.props.handleToggle}))}}]),e}(n.Component),N=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(u.a)(this,Object(h.a)(e).call(this,t))).state={show:!1},Object.getOwnPropertyNames(a.__proto__).forEach((function(t){return a[t]=a[t].bind(Object(p.a)(a))})),a}return Object(d.a)(e,t),Object(l.a)(e,[{key:"handleRemove",value:function(){this.props.removeTodo(this.props.id)}},{key:"handleToggle",value:function(){this.setState({show:!this.state.show})}},{key:"render",value:function(){return i.a.createElement("li",{className:"todo-list__item"},i.a.createElement(v,this.props),i.a.createElement(O,this.props),i.a.createElement(j,Object.assign({},this.props,{show:this.state.show,handleToggle:this.handleToggle})),i.a.createElement("time",{className:"todo-list__item__time",dateTime:this.props.time},this.props.time),i.a.createElement("button",{className:"todo-list__item__remove",onClick:this.handleRemove,title:"\u3053\u306eTodo\u3092\u524a\u9664\u3059\u308b"},"\ud83d\uddd1"))}}]),e}(n.Component),T=function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this,e=this.props.tasks.map((function(e){var a={key:e.id,removeTodo:t.props.removeTodo,doneTodo:t.props.doneTodo,editingTodo:t.props.editingTodo,updatedTask:t.props.updatedTask,didNotUpdateTask:t.props.didNotUpdateTask,changeTask:t.props.changeTask,changePriority:t.props.changePriority};return i.a.createElement(N,Object.assign({},e,a))}));return i.a.createElement("ul",{className:"todo-list"},e)}}]),e}(n.Component),C=function(t,e){return String(t).padStart(e,"0")},S=function(){var t=new Date,e=t.getFullYear(),a=C(t.getMonth()+1,2),n=C(t.getDate(),2),i=C(t.getHours(),2),r=C(t.getMinutes(),2),s=C(t.getSeconds(),2);return"".concat(e,"-").concat(a,"-").concat(n," ").concat(i,":").concat(r,":").concat(s)},P=function(t){function e(t){var a;Object(c.a)(this,e),(a=Object(u.a)(this,Object(h.a)(e).call(this,t))).defaultState={tasks:[{task:"Add your tasks or edit this!",before:"Add your tasks or edit this!",status:!1,editing:!1,time:S(),priority:"middle",id:0}],uniquId:1},a.storage="app-state";var n=JSON.parse(localStorage.getItem(a.storage));return a.state=n||JSON.parse(JSON.stringify(a.defaultState)),Object.getOwnPropertyNames(a.__proto__).forEach((function(t){return a[t]=a[t].bind(Object(p.a)(a))})),a}return Object(d.a)(e,t),Object(l.a)(e,[{key:"saveState",value:function(t){window.localStorage.setItem(this.storage,JSON.stringify(t))}},{key:"handleSave",value:function(){this.saveState(this.state)}},{key:"removeState",value:function(){window.localStorage.removeItem(this.storage),this.setState(this.defaultState)}},{key:"addTodo",value:function(t){if(t.task=t.task.trim(),""!==t.task){var e=this.state,a=e.tasks,n=e.uniquId;a.unshift({task:t.task,before:t.task,status:!1,editing:!1,time:S(),priority:t.priority,id:n}),this.setState({tasks:a,uniquId:n+1},this.handleSave)}}},{key:"removeTodo",value:function(t){this.setState({tasks:this.state.tasks.filter((function(e){return e.id!==t}))},this.handleSave)}},{key:"doneTodo",value:function(t){this.setState(this.state.tasks.map((function(e){return e.id===t&&(e.status=!e.status),e})),this.handleSave)}},{key:"updatedTask",value:function(t){this.setState(this.state.tasks.map((function(e){return e.id===t&&(e.editing=!1,e.before=e.task),e})),this.handleSave)}},{key:"didNotUpdateTask",value:function(t){this.setState(this.state.tasks.map((function(e){return e.id===t&&(e.editing=!1,e.updated=!e.updated,e.task=e.before),e})),this.handleSave)}},{key:"changeTask",value:function(t,e){this.setState(this.state.tasks.map((function(a){return a.id===t&&(a.editing=!0,a.task=e),a})),this.handleSave)}},{key:"changePriority",value:function(t,e){this.setState(this.state.tasks.map((function(a){return a.id===t&&(a.priority=e,a.changingPriority=!1),a})),this.handleSave)}},{key:"render",value:function(){var t=this,e={tasks:this.state.tasks,removeTodo:this.removeTodo,doneTodo:this.doneTodo,editing:this.editingTodo,changeTask:this.changeTask,updatedTask:this.updatedTask,didNotUpdateTask:this.didNotUpdateTask,changePriority:this.changePriority};return i.a.createElement("div",{className:"todo"},i.a.createElement(_,{addTodo:this.addTodo}),i.a.createElement(T,e),i.a.createElement("p",{className:"remove-data"},"This app uses localStorage to store ToDo data.",i.a.createElement("br",null),i.a.createElement("button",{className:"remove-data__button",onClick:function(){return t.removeState()}},"Clear the data")))}}]),e}(n.Component),w=function(){return i.a.createElement("div",{className:"app__body"},i.a.createElement(P,null))},I=(new Date).getFullYear(),U=function(){return i.a.createElement("footer",{className:"app__footer"},i.a.createElement("p",{className:"align-center"},"Github repository: ",i.a.createElement("a",{href:"https://github.com/shunk76/react-todo-list"},"react-todo-list")),i.a.createElement("p",{className:"copy-right"},"\xa9 ",i.a.createElement("span",null,I)," ",i.a.createElement("a",{href:"https://bonyspike.asia"},"bonyspike.asia")))};a(19);var x=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(o,null),i.a.createElement(w,null),i.a.createElement(U,null))};s.a.render(i.a.createElement(x,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.6a3fd75e.chunk.js.map