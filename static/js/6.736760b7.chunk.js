(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[6],{61:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"c",(function(){return s})),a.d(t,"b",(function(){return u}));var n=a(63),r=a(0),c=a.n(r),l=(a(62),function(e){var t=e.children,a=e.url;return c.a.createElement("a",{className:"btn btn--primary",href:a,target:"_blank",rel:"noopener noreferrer"},t)}),s=function(e){var t=e.children,a=Object(n.a)(e,["children"]);return c.a.createElement("button",Object.assign({className:"btn btn--submit"},a,{type:"submit"}),t)},u=function(e){var t=e.children,a=e.url;return c.a.createElement("a",{className:"btn btn--secondary",href:a,target:"_blank",rel:"noopener noreferrer"},t)}},62:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(64),l=a(76),s=a(65),u=a.n(s),o=a(66),i=a(82),m=a(67),p=a.n(m);Object(m.init)("user_UlGyHxSEcHEqc8VPJ464R");var f=function(){var e=Object(o.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.send("default_service","template_bxvoz6t",t,Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_USER_IDm,"user_UlGyHxSEcHEqc8VPJ464R");case 3:a=e.sent,console.log("Email send sucessfully",a),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),n=e.t0,console.log("Error while sending Email",e.t0),console.log(typeof Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_USER_ID);case 12:return e.abrupt("return",[a,n]);case 13:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),E=a(61),b=(a(80),function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],s=t[1],m=Object(n.useState)(""),p=Object(i.a)(m,2),b=p[0],v=p[1],d=Object(n.useState)(""),g=Object(i.a)(d,2),O=g[0],_=g[1],h=Object(n.useState)({userName:!1,email:!1,message:!1}),S=Object(i.a)(h,2),N=S[0],j=S[1],C=function(){var e=Object(o.a)(u.a.mark((function e(t){var n,r,c,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={userName:a,email:b,message:O},e.next=4,f(n);case 4:if(r=e.sent,c=Object(i.a)(r,1),!(l=c[0])){e.next=13;break}return console.log("Response from custom form",l),v(""),_(""),s(""),e.abrupt("return");case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(e,t){j((function(a){return Object(l.a)(Object(l.a)({},a),{},Object(c.a)({},e,t))}))};return r.a.createElement("div",{className:"custom-form u-container"},r.a.createElement("form",{className:"form",onSubmit:C},r.a.createElement("label",{htmlFor:"userName"},"Name:"),r.a.createElement("div",{className:"input__group"},r.a.createElement("input",{type:"text",name:"userName",value:a,onChange:function(e){s(e.target.value),e.target.value.length>=2?y("userName",!1):y("userName",!0)},placeholder:"Your Name....",required:!0,autoComplete:"off"}),N.userName&&r.a.createElement("small",null,"Oops!! Don't leave it empty!.")),r.a.createElement("label",{htmlFor:"email"},"Email:"),r.a.createElement("div",{className:"input__group"},r.a.createElement("input",{type:"email",name:"email",value:b,onChange:function(e){v(e.target.value),e.target.value.length>=1?y("email",function(e){return!/^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}(e.target.value)):y("email",!0)},placeholder:"Your Email....",required:!0,autoComplete:"off"}),N.email&&r.a.createElement("small",null,"Oops!! Seems this is not a valid email.")),r.a.createElement("label",{htmlFor:"message"},"Message:"),r.a.createElement("div",{className:"input__group"},r.a.createElement("textarea",{value:O,name:"message",id:"message",onChange:function(e){_(e.target.value),y("message",!1),e.target.value.length>=5?y("message",!1):y("message",!0)},placeholder:"Hi! Drop your message here",required:!0}),N.message&&r.a.createElement("small",null,"Oops!! Don't leave an empty message.")),r.a.createElement(E.c,null,"Send Message!")))});a(81),t.default=function(){return r.a.createElement("div",{className:"contactpage u-container"},r.a.createElement("h2",{className:"secondary-heading",id:"contact"},"Contact Me"),r.a.createElement(b,null))}}}]);
//# sourceMappingURL=6.736760b7.chunk.js.map