(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"40d3":function(e,t,n){"use strict";var a=n("c8eb"),s=n.n(a);s.a},a751:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{staticClass:"bg-grey-3 column"},[n("div",{staticClass:"row q-pa-sm bg-primary"},[n("q-input",{staticClass:"col",attrs:{square:"",filled:"","bg-color":"white",placeholder:"Add task",dense:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addTask(t)}},scopedSlots:e._u([{key:"append",fn:function(){return[n("q-btn",{attrs:{round:"",dense:"",flat:"",icon:"add"},on:{click:e.addTask}})]},proxy:!0}]),model:{value:e.newTask,callback:function(t){e.newTask=t},expression:"newTask"}})],1),n("q-list",{staticClass:"bg-white",attrs:{separator:"",bordered:""}},e._l(e.tasks,(function(t,a){return n("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t.title,class:{"done bg-blue-1":t.done},attrs:{clickable:""},on:{click:function(e){t.done=!t.done}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-checkbox",{staticClass:"no-pointer-events",attrs:{color:"primary"},model:{value:t.done,callback:function(n){e.$set(t,"done",n)},expression:"task.done"}})],1),n("q-item-section",[n("q-item-label",[e._v(" "+e._s(t.title))])],1),t.done?n("q-item-section",{attrs:{side:""}},[n("q-btn",{attrs:{flat:"",round:"",dense:"",color:"primary",icon:"delete"},on:{click:function(t){return t.stopPropagation(),e.deleteTask(a)}}})],1):e._e()],1)})),1),e.tasks.length?e._e():n("div",{staticClass:"no-tasks absolute-center"},[n("q-icon",{attrs:{name:"check",size:"100px",color:"primary"}}),n("div",{staticClass:"text-h5 text-primary text-center"},[e._v("\n      No tasks\n    ")])],1)],1)},s=[],i={data:function(){return{newTask:"",tasks:[]}},methods:{deleteTask:function(e){var t=this;this.$q.dialog({title:"Confirm",message:"Really delete?",cancel:!0,persistent:!0}).onOk((function(){t.tasks.splice(e,1),t.$q.notify("Task deleted")}))},addTask:function(){this.tasks.push({title:this.newTask,done:!1}),this.newTask=""}}},o=i,c=(n("40d3"),n("2877")),r=n("9989"),l=n("27f9"),d=n("9c40"),u=n("1c1c"),k=n("66e5"),p=n("4074"),f=n("8f8e"),m=n("0170"),b=n("0016"),h=n("714f"),q=n("eebe"),v=n.n(q),w=Object(c["a"])(o,a,s,!1,null,null,null);t["default"]=w.exports;v()(w,"components",{QPage:r["a"],QInput:l["a"],QBtn:d["a"],QList:u["a"],QItem:k["a"],QItemSection:p["a"],QCheckbox:f["a"],QItemLabel:m["a"],QIcon:b["a"]}),v()(w,"directives",{Ripple:h["a"]})},c8eb:function(e,t,n){}}]);