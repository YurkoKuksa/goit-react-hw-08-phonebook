"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[663],{6663:function(n,e,t){t.r(e),t.d(e,{default:function(){return R}});var r,o,i,s=t(168),c=t(7924),a=c.ZP.div(r||(r=(0,s.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  font-size: 40;\n  color: #010101;\n"]))),l=c.ZP.h2(o||(o=(0,s.Z)(["\n  color: #686880;\n  margin-bottom: 10px;\n  font-size: 70px;\n  font-weight: 700;\n  text-shadow: ",";\n\n  &:hover {\n    color: #5b5885;\n  }\n"])),(function(n){return n.theme.shadows.small})),u=c.ZP.p(i||(i=(0,s.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: red;\n  font-weight: 700;\n\n  margin-top: 30px;\n"]))),d=t(2791),f=t(4420),p=t(234),h=t(3553),x=function(n){return n.contacts.contacts},m=function(n){return n.filter.filter},y=function(n){return n.contacts.loading},b=function(n){return n.contacts.error},v=((0,h.P1)([x,m],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),function(){return v=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},v.apply(this,arguments)});function g(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(t[r[o]]=n[r[o]])}return t}var w={color:"#38ad48",enabled:!0,size:50,style:{}},k=function(n){return parseFloat(n.toString()).toString()===n.toString()?n+"px":n.toString()},j=v(v({},{speed:100,still:!1,thickness:100}),{secondaryColor:"rgba(0,0,0,0.44)"});!function(n,e){void 0===e&&(e={});var t=e.insertAt;if(n&&"undefined"!==typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===t&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=n:o.appendChild(document.createTextNode(n))}}("@keyframes spinners-react-circular{0%{stroke-dashoffset:306}50%{stroke-dasharray:40,134}to{stroke-dasharray:1,174;stroke-dashoffset:132}}");var Z=function(n){var e=n.secondaryColor,t=n.speed,r=n.still,o=n.thickness,i=g(n,["secondaryColor","speed","still","thickness"]),s=o/100*4,c=r?{}:{animation:"spinners-react-circular "+140/t+"s linear infinite"};return d.createElement("svg",v({fill:"none"},i,{viewBox:"0 0 66 66"}),d.createElement("circle",{cx:"33",cy:"33",fill:"none",r:"28",stroke:e,strokeWidth:s}),d.createElement("circle",{cx:"33",cy:"33",fill:"none",r:"28",stroke:"currentColor",strokeDasharray:"1, 174",strokeDashoffset:"306",strokeLinecap:"round",strokeWidth:s,style:c}))};Z.defaultProps=j;var C,P,O,z,S,E,L,I=function(n){var e=function(e){var t=e.color,r=e.enabled,o=e.size,i=e.style,s=g(e,["color","enabled","size","style"]),c=v(v({},s),{style:v({color:t,overflow:"visible",width:k(o)},i)});return r?d.createElement(n,v({},c)):null};return e.defaultProps=w,e}(Z),T=c.ZP.div(C||(C=(0,s.Z)(["\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  background-color: rgb(0, 0, 0, 0.3);\n"]))),_=t(184),B=function(){return(0,_.jsx)(T,{children:(0,_.jsx)(I,{size:50,thickness:175,speed:100,color:"#4dc92b",secondaryColor:"rgba(0, 0, 0, 0.44)"})})},D=t(1087),F=c.ZP.label(P||(P=(0,s.Z)(["\n  margin: 10px;\n  font-size: 20px;\n  font-weight: 700;\n  display: flex;\n  flex-direction: column;\n"]))),N=c.ZP.input(O||(O=(0,s.Z)(["\n  height: 30px;\n  margin-top: 5px;\n"]))),W=t(7264),A=function(){var n=(0,f.I0)(),e=(0,f.v9)(m);return(0,_.jsxs)(F,{children:["Find contacts by name:\xa0",(0,_.jsx)(N,{type:"text",value:e,onChange:function(e){n((0,W.x)(e.target.value))}})]})},Y=t(5861),q=t(7757),G=t.n(q),H=c.ZP.p(z||(z=(0,s.Z)(["\n  font-size: 20px;\n  font-weight: 700;\n"]))),J=c.ZP.p(S||(S=(0,s.Z)(["\n  font-size: 20px;\n"]))),K=c.ZP.li(E||(E=(0,s.Z)(["\n  display: flex;\n  margin: 15px 0;\n"]))),M=c.ZP.button(L||(L=(0,s.Z)(["\n  display: block;\n\n  padding: 4px;\n  font-size: 16px;\n  font-weight: 600;\n  text-align: center;\n  text-decoration: none;\n  cursor: pointer;\n  border: none;\n  border-radius: 5px;\n  transition: background-color 0.3s, box-shadow 0.3s;\n  background-color: #3498db;\n  color: #fff;\n  box-shadow: ",";\n\n  &:hover {\n    background-color: #2476c7;\n    /* #3488db */\n  }\n\n  &:active {\n    transform: translateY(1px);\n    box-shadow: ",";\n  }\n"])),(function(n){var e=n.theme;return"".concat(e.shadows.button,", ").concat(e.shadows.inner)}),(function(n){return n.theme.shadows.hover})),Q=function(){var n=(0,f.I0)(),e=(0,f.v9)(x),t=(0,f.v9)(m),r=(0,f.v9)(y),o=e.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())||n.number.toLowerCase().includes(t.toLowerCase())})),i=function(){var e=(0,Y.Z)(G().mark((function e(t){return G().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n((0,p.ku)(t));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,_.jsx)("ul",{children:o.map((function(n){var e=n.id,t=n.name,o=n.number;return(0,_.jsxs)(K,{children:[(0,_.jsxs)(H,{children:[t,":\xa0 "]}),(0,_.jsxs)(J,{children:[" ",o," \xa0"]}),r===e&&(0,_.jsx)(B,{}),(0,_.jsx)(M,{onClick:function(){return i(e)},type:"button",disabled:r===e,children:"Delete"})]},e)}))})},R=function(){var n=(0,f.I0)(),e=(0,f.v9)(y),t=(0,f.v9)(b);return(0,d.useEffect)((function(){n((0,p.T8)())}),[n]),(0,_.jsxs)(a,{children:[e&&(0,_.jsx)(B,{}),(0,_.jsx)(l,{children:"Phonebook"}),(0,_.jsx)(D.l0,{}),(0,_.jsx)(l,{children:"Contacts"}),(0,_.jsx)(A,{}),e&&(0,_.jsx)(B,{}),t&&(0,_.jsx)(u,{children:"Something went wrong..."}),(0,_.jsx)(Q,{})]})}}}]);
//# sourceMappingURL=663.8fddefb6.chunk.js.map