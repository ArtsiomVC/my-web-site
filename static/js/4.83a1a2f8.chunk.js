(this["webpackJsonpmy-web-site"]=this["webpackJsonpmy-web-site"]||[]).push([[4],{236:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var s=t(10),i=t(49),a=(t(0),t(18)),r=t(37),c=t(2),d=["isAuth"],o=function(e){return{isAuth:e.auth.isAuth}};function u(e){return Object(r.b)(o,{})((function(n){var t=n.isAuth,r=Object(i.a)(n,d);return t?Object(c.jsx)(e,Object(s.a)({},r)):Object(c.jsx)(a.a,{to:"/login"})}))}},243:function(e,n,t){"use strict";t.r(n);var s=t(10),i=(t(0),t(110)),a=t(43),r=t(60),c=t(231),d=t(68),o=t.n(d),u=t(223),j=t(2),b=Object(u.a)((function(e){return{profileMyPost:{margin:"25px"},myPostContainer:{padding:"8px"},myPostButton:{padding:"15px 0px 15px 32px "}}})),l=function(e){var n=b();return Object(j.jsx)("div",{children:Object(j.jsx)(a.b,{onSubmit:e.onSubmit,render:function(e){var t=e.handleSubmit;return Object(j.jsx)("form",{onSubmit:t,children:Object(j.jsxs)("div",{className:n.myPostContainer,children:[Object(j.jsx)("div",{children:Object(r.d)("Enter you message","newMessageBody",[],r.c,"Message")}),Object(j.jsx)("div",{className:n.myPostButton,children:Object(j.jsx)(c.a,{variant:"contained",color:"info",endIcon:Object(j.jsx)(o.a,{}),type:"submit",name:"btnAddPost",children:"Send"})})]})})}})})},g=Object(u.a)((function(e){return{wrapperMessage:{padding:"5px",fontSize:"19px"}}})),p=function(e){var n=e.id,t=e.message,s=g();return Object(j.jsxs)("div",{className:s.wrapperMessage,children:[Object(j.jsxs)("span",{children:[n,"."]})," ",t]})},m=t(21),x=Object(u.a)((function(e){return{dialogUser:{padding:"4px",fontSize:"17px"},dialogUserLink:{textDecoration:"none",color:"#000000"}}})),f=function(e){var n=e.id,t=e.name,s=x(),i="/dialogs/"+n;return Object(j.jsx)("div",{className:s.dialogUser,children:Object(j.jsx)(m.b,{className:s.dialogUserLink,to:i,children:t})})},O=Object(u.a)((function(e){return{wrapperDialogs:{display:"grid",gridTemplateColumns:"2fr 10fr",gridGap:"1rem"},dialogUsers:{background:e.palette.common.white,borderRadius:"6px",padding:"20px"},dialogMessage:{background:"#ffffff",borderRadius:"6px",padding:"20px"}}})),h=function(e){var n=e.dialogsPage,t=e.sendMessage,s=O(),i=n,a=i.dialogsData.map((function(e){return Object(j.jsx)(f,{name:e.name,id:e.id},e.id)})),r=i.messageData.map((function(e){return Object(j.jsx)(p,{message:e.message,id:e.id},e.id)}));return Object(j.jsxs)("div",{className:s.wrapperDialogs,children:[Object(j.jsx)("div",{className:s.dialogUsers,children:a}),Object(j.jsxs)("div",{className:s.dialogMessage,children:[r,Object(j.jsx)("div",{children:Object(j.jsx)(l,{onSubmit:function(e){t(e.newMessageBody),e.newMessageBody=""}})})]})]})},v=t(37),y=t(236),w=t(42);n.default=Object(w.c)(Object(v.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(n){e(Object(i.b)(n))}}})),y.a)((function(e){return Object(j.jsx)(h,Object(s.a)({},e))}))}}]);
//# sourceMappingURL=4.83a1a2f8.chunk.js.map