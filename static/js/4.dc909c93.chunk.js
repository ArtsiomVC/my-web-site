(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{215:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t(5),s=t(51),i=(t(0),t(16)),r=t(33),c=t(1),d=["isAuth"],o=function(e){return{isAuth:e.auth.isAuth}};function u(e){return Object(r.b)(o,{})((function(n){var t=n.isAuth,r=Object(s.a)(n,d);return t?Object(c.jsx)(e,Object(a.a)({},r)):Object(c.jsx)(i.a,{to:"/login"})}))}},237:function(e,n,t){"use strict";t.r(n);var a=t(5),s=(t(0),t(106)),i=t(39),r=t(62),c=t(53),d=t(208),o=t(61),u=t.n(o),j=t(203),b=t(1),l=Object(j.a)((function(e){return{profileMyPost:{margin:"25px"},myPostContainer:{padding:"8px"},myPostButton:{padding:"15px 0px 15px 32px "}}})),p=function(e){var n=l();return Object(b.jsx)("div",{children:Object(b.jsx)(i.b,{onSubmit:e.onSubmit,render:function(e){var t=e.handleSubmit;return Object(b.jsx)("form",{onSubmit:t,children:Object(b.jsxs)("div",{className:n.myPostContainer,children:[Object(b.jsx)("div",{children:Object(b.jsx)(i.a,{name:"newMessageBody",component:c.b,validate:r.a,placeholder:"Enter you message"})}),Object(b.jsx)("div",{className:n.myPostButton,children:Object(b.jsx)(d.a,{variant:"contained",color:"info",endIcon:Object(b.jsx)(u.a,{}),type:"submit",name:"btnAddPost",children:"Send"})})]})})}})})},g=Object(j.a)((function(e){return{wrapperMessage:{padding:"5px",fontSize:"19px"}}})),f=function(e){var n=e.id,t=e.message,a=g();return Object(b.jsxs)("div",{className:a.wrapperMessage,children:[Object(b.jsxs)("span",{children:[n,"."]})," ",t]})},m=t(21),x=Object(j.a)((function(e){return{dialogUser:{padding:"4px",fontSize:"17px"},dialogUserLink:{textDecoration:"none",color:"#000000"}}})),O=function(e){var n=e.id,t=e.name,a=x(),s="/dialogs/"+n;return Object(b.jsx)("div",{className:a.dialogUser,children:Object(b.jsx)(m.b,{className:a.dialogUserLink,to:s,children:t})})},h=Object(j.a)((function(e){return{wrapperDialogs:{display:"grid",gridTemplateColumns:"2fr 10fr",gridGap:"1rem"},dialogUsers:{background:"#ffffff",borderRadius:"6px",padding:"20px"},dialogMessage:{background:"#ffffff",borderRadius:"6px",padding:"20px"}}})),v=function(e){var n=e.dialogsPage,t=e.sendMessage,a=h(),s=n,i=s.dialogsData.map((function(e){return Object(b.jsx)(O,{name:e.name,id:e.id},e.id)})),r=s.messageData.map((function(e){return Object(b.jsx)(f,{message:e.message,id:e.id},e.id)}));return Object(b.jsxs)("div",{className:a.wrapperDialogs,children:[Object(b.jsx)("div",{className:a.dialogUsers,children:i}),Object(b.jsxs)("div",{className:a.dialogMessage,children:[r,Object(b.jsx)("div",{children:Object(b.jsx)(p,{onSubmit:function(e){t(e.newMessageBody),e.newMessageBody=""}})})]})]})},y=t(33),M=t(215),w=t(38);n.default=Object(w.c)(Object(y.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(n){e(Object(s.b)(n))}}})),M.a)((function(e){return Object(b.jsx)(v,Object(a.a)({},e))}))}}]);
//# sourceMappingURL=4.dc909c93.chunk.js.map