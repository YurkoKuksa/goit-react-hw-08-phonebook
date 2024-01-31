"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[437],{437:function(n,e,t){t.r(e),t.d(e,{default:function(){return an}});var r,o,i,a=t(2791),s=t(168),c=t(7924),l=c.ZP.div(r||(r=(0,s.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  font-size: 40;\n  color: #010101;\n"]))),u=c.ZP.h2(o||(o=(0,s.Z)(["\n  color: #686880;\n  margin-bottom: 10px;\n  font-size: 70px;\n  font-weight: 700;\n  text-shadow: ",";\n\n  &:hover {\n    color: #5b5885;\n  }\n"])),(function(n){return n.theme.shadows.small})),d=c.ZP.p(i||(i=(0,s.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: red;\n  font-weight: 700;\n\n  margin-top: 30px;\n"]))),f=t(3553),p=function(n){return n.contacts.contacts},h=function(n){return n.filter.filter},x=function(n){return n.contacts.loading},m=function(n){return n.contacts.error},b=((0,f.P1)([p,h],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),t(4420)),g=t(262),v=function(){return v=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},v.apply(this,arguments)};function y(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(t[r[o]]=n[r[o]])}return t}var w={color:"#38ad48",enabled:!0,size:50,style:{}},j=function(n){return parseFloat(n.toString()).toString()===n.toString()?n+"px":n.toString()},k=v(v({},{speed:100,still:!1,thickness:100}),{secondaryColor:"rgba(0,0,0,0.44)"});!function(n,e){void 0===e&&(e={});var t=e.insertAt;if(n&&"undefined"!==typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===t&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=n:o.appendChild(document.createTextNode(n))}}("@keyframes spinners-react-circular{0%{stroke-dashoffset:306}50%{stroke-dasharray:40,134}to{stroke-dasharray:1,174;stroke-dashoffset:132}}");var Z=function(n){var e=n.secondaryColor,t=n.speed,r=n.still,o=n.thickness,i=y(n,["secondaryColor","speed","still","thickness"]),s=o/100*4,c=r?{}:{animation:"spinners-react-circular "+140/t+"s linear infinite"};return a.createElement("svg",v({fill:"none"},i,{viewBox:"0 0 66 66"}),a.createElement("circle",{cx:"33",cy:"33",fill:"none",r:"28",stroke:e,strokeWidth:s}),a.createElement("circle",{cx:"33",cy:"33",fill:"none",r:"28",stroke:"currentColor",strokeDasharray:"1, 174",strokeDashoffset:"306",strokeLinecap:"round",strokeWidth:s,style:c}))};Z.defaultProps=k;var C,P,S,z,O,L,E,I,T,_,D,N=function(n){var e=function(e){var t=e.color,r=e.enabled,o=e.size,i=e.style,s=y(e,["color","enabled","size","style"]),c=v(v({},s),{style:v({color:t,overflow:"visible",width:j(o)},i)});return r?a.createElement(n,v({},c)):null};return e.defaultProps=w,e}(Z),A=c.ZP.div(C||(C=(0,s.Z)(["\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  background-color: rgb(0, 0, 0, 0.3);\n"]))),B=t(184),q=function(){return(0,B.jsx)(A,{children:(0,B.jsx)(N,{size:50,thickness:175,speed:100,color:"#4dc92b",secondaryColor:"rgba(0, 0, 0, 0.44)"})})},F=c.ZP.label(P||(P=(0,s.Z)(["\n  margin: 10px;\n  font-size: 20px;\n  font-weight: 700;\n  display: flex;\n  flex-direction: column;\n"]))),U=c.ZP.input(S||(S=(0,s.Z)(["\n  height: 30px;\n  margin-top: 5px;\n"]))),W=t(1580),Y=function(){var n=(0,b.I0)(),e=(0,b.v9)(h);return(0,B.jsxs)(F,{children:["Find contacts by name:\xa0",(0,B.jsx)(U,{type:"text",value:e,onChange:function(e){n((0,W.x)(e.target.value))}})]})},G=t(5861),R=t(7757),V=t.n(R),H=c.ZP.p(z||(z=(0,s.Z)(["\n  font-size: 20px;\n  font-weight: 700;\n"]))),J=c.ZP.p(O||(O=(0,s.Z)(["\n  font-size: 20px;\n"]))),K=c.ZP.li(L||(L=(0,s.Z)(["\n  display: flex;\n  margin: 15px 0;\n"]))),M=c.ZP.button(E||(E=(0,s.Z)(["\n  display: block;\n\n  padding: 4px;\n  font-size: 16px;\n  font-weight: 600;\n  text-align: center;\n  text-decoration: none;\n  cursor: pointer;\n  border: none;\n  border-radius: 5px;\n  transition: background-color 0.3s, box-shadow 0.3s;\n  background-color: #3498db;\n  color: #fff;\n  box-shadow: ",";\n\n  &:hover {\n    background-color: #2476c7;\n    /* #3488db */\n  }\n\n  &:active {\n    transform: translateY(1px);\n    box-shadow: ",";\n  }\n"])),(function(n){var e=n.theme;return"".concat(e.shadows.button,", ").concat(e.shadows.inner)}),(function(n){return n.theme.shadows.hover})),Q=function(){var n=(0,b.I0)(),e=(0,b.v9)(p),t=(0,b.v9)(h),r=(0,b.v9)(x),o=e.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())||n.number.toLowerCase().includes(t.toLowerCase())})),i=function(){var e=(0,G.Z)(V().mark((function e(t){return V().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n((0,g.ku)(t));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,B.jsx)("ul",{children:o.map((function(n){var e=n.id,t=n.name,o=n.number;return(0,B.jsxs)(K,{children:[(0,B.jsxs)(H,{children:[t,":\xa0 "]}),(0,B.jsxs)(J,{children:[" ",o," \xa0"]}),r===e&&(0,B.jsx)(q,{}),(0,B.jsx)(M,{onClick:function(){return i(e)},type:"button",disabled:r===e,children:"Delete"})]},e)}))})},X=t(9439),$=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")},nn=c.ZP.form(I||(I=(0,s.Z)(["\n  margin: 10px;\n  font-size: 20px;\n  display: flex;\n  flex-direction: column;\n"]))),en=c.ZP.label(T||(T=(0,s.Z)(["\n  margin: 10px;\n  font-size: 20px;\n  font-weight: 700;\n  display: flex;\n  flex-direction: column;\n"]))),tn=c.ZP.input(_||(_=(0,s.Z)(["\n  height: 40px;\n"]))),rn=c.ZP.button(D||(D=(0,s.Z)(["\n  display: block;\n\n  padding: 10px 20px;\n  font-size: 28px;\n  font-weight: 700;\n  text-align: center;\n  text-decoration: none;\n  cursor: pointer;\n  border: none;\n  border-radius: 5px;\n  transition: background-color 0.3s, box-shadow 0.3s;\n  background-color: #3498db;\n  color: #fff;\n  box-shadow: ",";\n\n  margin: 5px;\n\n  &:hover {\n    background-color: #2476c7;\n    /* #3488db */\n  }\n\n  &:active {\n    transform: translateY(1px);\n    box-shadow: ",";\n  }\n"])),(function(n){var e=n.theme;return"".concat(e.shadows.button,", ").concat(e.shadows.inner)}),(function(n){return n.theme.shadows.hover})),on=function(){var n=(0,b.I0)(),e=(0,b.v9)(p),t=(0,a.useState)(""),r=(0,X.Z)(t,2),o=r[0],i=r[1],s=(0,a.useState)(""),c=(0,X.Z)(s,2),l=c[0],u=c[1],d=function(n){var e=n.target,t=e.name,r=e.value;"name"===t?i(r):"number"===t&&u(r)};return(0,B.jsxs)(nn,{onSubmit:function(t){t.preventDefault();var r={id:$(),name:o,number:l};e.some((function(n){return n.name.toLowerCase()===r.name.toLowerCase()}))?alert('The contact with the name "'.concat(r.name,'" already exists. Please choose a different name.')):(n((0,g.G3)(r)),i(""),u(""))},children:[(0,B.jsxs)(en,{children:["Name: \xa0",(0,B.jsx)(tn,{onChange:d,value:o,type:"text",name:"name",required:!0})]}),(0,B.jsxs)(en,{children:["Number: \xa0",(0,B.jsx)(tn,{type:"tel",name:"number",onChange:d,value:l,required:!0})]}),(0,B.jsx)(rn,{children:"Add contact"})]})},an=function(){var n=(0,b.I0)(),e=(0,b.v9)(x),t=(0,b.v9)(m);return(0,a.useEffect)((function(){n((0,g.T8)())}),[n]),(0,B.jsx)(a.Suspense,{children:(0,B.jsxs)(l,{children:[e&&(0,B.jsx)(q,{}),(0,B.jsx)(u,{children:"Phonebook"}),(0,B.jsx)(on,{}),(0,B.jsx)(u,{children:"Contacts"}),(0,B.jsx)(Y,{}),e&&(0,B.jsx)(q,{}),t&&(0,B.jsx)(d,{children:"Something went wrong..."}),(0,B.jsx)(Q,{})]})})}}}]);
//# sourceMappingURL=437.fb163e5b.chunk.js.map