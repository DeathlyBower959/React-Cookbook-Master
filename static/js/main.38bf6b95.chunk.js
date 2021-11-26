(this["webpackJsonpcookbook-master"]=this["webpackJsonpcookbook-master"]||[]).push([[0],{127:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n.n(i),c=n(17),s=n.n(c),a=(n(85),n(8)),o=n(3),l=n(11),d=n(7);function u(e,t){var n="cookbook-master-"+e,r=Object(i.useState)((function(){var e=localStorage.getItem(n);return null!==e?JSON.parse(e):"function"===typeof t?t():t})),c=Object(o.a)(r,2),s=c[0],a=c[1];return Object(i.useEffect)((function(){console.log("Saving ".concat(n," as data:\n").concat(JSON.stringify(s))),localStorage.setItem(n,JSON.stringify(s))}),[n,s]),[s,a]}var j=n(2),p=(n(64),n(70)),b=n(23),x=(n(86),n.p+"static/media/logo1024.983d1827.png"),h=n(0),O=function(e){var t=e.recipe,n=e.deleteRecipe,i=t.name,r=void 0===i?"No Name":i,c=t.image,s=t.description,a=void 0===s?"No Description":s,o=t.tags,d=t.id,u=null===o||void 0===o?void 0:o.join(", ");return Object(h.jsx)("div",{className:"grow",children:Object(h.jsx)("div",{id:d,className:"card",style:{marginBottom:"15px",borderRadius:"15px",transition:"height 1s ease-in-out"},children:Object(h.jsxs)("div",{className:"row no-gutters",children:[Object(h.jsx)("div",{className:"col-sm-3",style:{marginLeft:"10px",marginTop:"10px",marginBottom:"10px",paddingRight:"0px",width:"200px"},children:Object(h.jsx)(l.c,{to:"/recipe/".concat(d),children:Object(h.jsx)("img",{src:null!==c&&void 0!==c?c:x,style:{borderRadius:"10px"},className:"card-img-top h-100",alt:"Not found... :("})})}),Object(h.jsx)("div",{className:"col-sm-7",style:{paddingLeft:"0px",paddingTop:"3px"},children:Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)(l.c,{style:{color:"#000",textDecoration:"none"},to:"/recipe/".concat(d),children:Object(h.jsx)("h5",{className:"card-title",style:{marginBottom:"0px",marginLeft:"10px"},children:r})}),null==o?"":Object(h.jsx)("p",{style:{color:"#808080",margin:"2px auto 0px 18px"},children:u}),Object(h.jsx)("hr",{style:{margin:"10px auto 10px 10px"}}),Object(h.jsx)("p",{className:"card-text",style:{marginTop:"5px",marginLeft:"10px"},children:a}),Object(h.jsxs)("div",{children:[Object(h.jsx)(l.c,{to:"/edit/"+d,children:Object(h.jsx)(b.a,{style:{margin:"5px 5px 0px 5px"},children:"Edit"})}),Object(h.jsx)(b.a,{style:{margin:"5px 5px 0px 5px"},variant:"danger",onClick:function(){return n(d)},children:"Delete"})]})]})})]})})})},m=function(e){var t=e.filteredRecipes,n=e.deleteRecipe,i=t.map((function(e){return Object(h.jsx)(O,{recipe:e,deleteRecipe:n},e.id)}));return Object(h.jsxs)("div",{children:[i.length>0?i:Object(h.jsxs)(p.a,{style:{marginTop:"15px"},variant:"danger",children:[Object(h.jsx)(p.a.Heading,{children:"Hmm..."}),Object(h.jsx)("p",{children:"Seems like there are no recipes with that name!"})]}),Object(h.jsx)("div",{style:{marginTop:"20px"}})]})},g=n(53),v=n(79);var f=function(e){var t=e.recipes,n=e.deleteRecipe,r=e.isCrushed,c=Object(i.useState)(""),s=Object(o.a)(c,2),a=s[0],d=s[1],u=Object(i.useState)("none"),j=Object(o.a)(u,2),p=j[0],x=j[1],O=t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())&&("none"===p||e.tags.includes(p))})),f=function(e,t){"search"===t?d(e.target.value):"tag"===t&&x(e.target.value)},y=function(){var e=[];return t.forEach((function(t){var n;null===(n=t.tags)||void 0===n||n.forEach((function(t){e.includes(t)||e.push(t)}))})),e}().map((function(e,t){return Object(h.jsx)("option",{value:e,children:e},t)}));return Object(h.jsxs)("div",{className:"absolute-center-75",children:[Object(h.jsxs)("div",{style:{width:"80%",margin:"10px auto 10px auto",display:"flex"},children:[Object(h.jsx)(g.a,{placeholder:"Search Recipes","aria-label":"Search Recipes",onChange:function(e){return f(e,"search")}}),r?"":Object(h.jsxs)(v.a.Select,{value:p,onChange:function(e){return f(e,"tag")},style:{marginLeft:"10px",width:"20%"},children:[Object(h.jsx)("option",{children:"Choose..."},"none"),y]}),Object(h.jsx)(l.b,{to:"/create",children:Object(h.jsx)(b.a,{style:{marginLeft:"10px"},children:"New"})})]}),r?Object(h.jsx)("div",{style:{width:"80%",margin:"10px auto 10px auto",display:"flex"},children:Object(h.jsxs)(v.a.Select,{value:p,onChange:function(e){return f(e,"tag")},style:{width:"100%"},children:[Object(h.jsx)("option",{children:"Choose..."},"none"),y]})}):"",Object(h.jsx)("div",{className:"absolute-center-75",style:{width:"55%"},children:Object(h.jsx)(m,{filteredRecipes:O,deleteRecipe:n,isCrushed:r})})]})},y=n(39),k=n(78),C=n(77);var w=function(e){var t,n=e.recipes,r=e.setRecipes,c=e.isCrushed,s=Object(i.useState)(!1),a=Object(o.a)(s,2),d=a[0],O=a[1],m=u("cookbook_name","The Cookbook"),g=Object(o.a)(m,2),w=g[0],N=g[1],S=Object(i.useState)("Hmm..."),R=Object(o.a)(S,2),T=R[0],L=R[1],D=Object(i.useState)(!1),I=Object(o.a)(D,2),B=I[0],F=I[1],z=Object(i.useState)(),A=Object(o.a)(z,2),H=A[0],E=A[1],W=Object(h.jsx)("div",{style:{backgroundColor:"white",position:"fixed",top:"0",bottom:"0",left:"0",right:"0",overflow:"auto"},children:Object(h.jsxs)("div",{className:"absolute-center",children:[Object(h.jsxs)(p.a,{variant:"danger",children:[Object(h.jsx)(p.a.Heading,{children:"Hmm..."}),"Seems like you have no recipes! Try creating one below..."]}),Object(h.jsx)(l.b,{to:"/create",children:Object(h.jsx)(b.a,{children:"New Recipe"})})]})}),M=Object(h.jsxs)("div",{style:{backgroundColor:"white",position:"fixed",top:"0",bottom:"0",left:"0",right:"0",overflow:"auto"},children:[Object(h.jsxs)(y.a,{show:B,onHide:function(){return F(!1)},children:[Object(h.jsx)(y.a.Header,{closeButton:!0,children:Object(h.jsx)(y.a.Title,{children:T})}),Object(h.jsx)(y.a.Body,{children:"Are you sure you want to discard ".concat(null===H||void 0===H?"this recipe":"your changes","?")}),Object(h.jsxs)(y.a.Footer,{children:[Object(h.jsx)(b.a,{variant:"secondary",onClick:function(){return F(!1)},children:"Cancel"}),Object(h.jsx)(b.a,{variant:"primary",onClick:function(){return r((function(e){return F(!1),e.filter((function(e){return e.id!==H}))}))},children:"Yes"})]})]}),Object(h.jsx)("div",{style:{width:"75%",margin:"0px auto 10px auto",display:"block"},children:Object(h.jsxs)("div",{style:{display:"flex",paddingTop:"30px",justifyContent:"center",alignItems:"center"},children:[Object(h.jsx)("img",{src:x,width:"64px",height:"64px",style:{transform:"rotate(-20deg)"},alt:"Not found... :("}),Object(h.jsx)(k.a,{placement:"bottom",overlay:function(e){return Object(h.jsx)(C.a,Object(j.a)(Object(j.a)({},e),{},{children:"Double click me to rename!"}))},children:Object(h.jsx)("h1",{hidden:d,style:{textAlign:"center"},onDoubleClick:function(){O(!0)},children:w})}),Object(h.jsx)(v.a.Control,{hidden:!d,placeholder:"Recipe Name",style:{width:"40%"},onChange:function(e){var t;return N((null===(t=e.target.value)||void 0===t?void 0:t.length)>0?e.target.value:"The Cookbook")},onBlur:function(){O(!1)}}),Object(h.jsx)("img",{src:x,width:"64px",height:"64px",style:{transform:"rotate(20deg)"},alt:"Not found... :("})]})}),Object(h.jsx)(f,{deleteRecipe:function(e){var i;E(e),t=n.find((function(e){return e.id===H})),L((null===(i=t)||void 0===i?void 0:i.name)||"Hmm..."),F(!0)},recipes:n,isCrushed:c}),Object(h.jsx)(l.b,{to:"/shopping",children:Object(h.jsx)(b.a,{style:{position:"fixed",bottom:"10px",left:"10px"},variant:"primary",children:"Shopping List"})})]});return 0===n.length?W:M},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Are you sure you want to discard changes?",t=Object(i.useState)(!1),n=Object(o.a)(t,2),r=n[0],c=n[1];return Object(i.useEffect)((function(){return window.onbeforeunload=r&&function(){return e},function(){return[window.onbeforeload=null]}}),[r]),[function(){return c(!0)},function(){return c(!1)}]},S=n(132),R=n(26),T=function(e){var t,n,r,c=e.recipes,s=e.setRecipes,l=e.isCrushed,u=Object(d.g)().id,x=Object(i.useState)(null===u||void 0===u?{id:Object(S.a)()}:c.find((function(e){return e.id===u}))||{id:Object(S.a)()}),O=Object(o.a)(x,2),m=O[0],g=O[1],f=Object(i.useState)({name:!1,description:!1,prep:!1,cook:!1,ingredients:!1,steps:!1}),k=Object(o.a)(f,2),C=k[0],w=k[1],T=Object(i.useState)(!1),L=Object(o.a)(T,2),D=L[0],I=L[1],B=Object(i.useRef)(),F=Object(i.useRef)(),z=Object(i.useRef)(),A=Object(i.useRef)(),H=Object(i.useRef)(),E=Object(i.useRef)(),W=Object(i.useRef)(),M=Object(i.useRef)(),Y=N(),G=Object(o.a)(Y,2),P=G[0],J=G[1];Object(i.useEffect)((function(){var e,t,n,i,r,c,s,a,o;E.current.value=null!==(e=Object(R.formatTime)(null===(t=m.prep)||void 0===t?void 0:t.days,null===(n=m.prep)||void 0===n?void 0:n.hours,null===(i=m.prep)||void 0===i?void 0:i.minutes))&&void 0!==e?e:"",W.current.value=null!==(r=Object(R.formatTime)(null===(c=m.cook)||void 0===c?void 0:c.days,null===(s=m.cook)||void 0===s?void 0:s.hours,null===(a=m.cook)||void 0===a?void 0:a.minutes))&&void 0!==r?r:"",M.current.value=null!==(o=parseInt(m.servSize))&&void 0!==o?o:1}),[]);var q=function(e,t){if("name"===t&&(w((function(e){return Object(j.a)(Object(j.a)({},e),{},{name:!1})})),g(Object(j.a)(Object(j.a)({},m),{},{name:e.target.value}))),"desc"===t&&(w((function(e){return Object(j.a)(Object(j.a)({},e),{},{description:!1})})),g(Object(j.a)(Object(j.a)({},m),{},{description:e.target.value}))),"image"===t&&e.target.files&&e.target.files[0]){if(![".png",".jpg",".jpeg",".bmp",".ico"].some((function(t){return e.target.files[0].name.toLowerCase().endsWith(t)})))return e.target.value="",void g((function(e){return Object(j.a)(Object(j.a)({},e),{},{image:null})}));var n=new FileReader;n.onload=function(e){g(Object(j.a)(Object(j.a)({},m),{},{image:e.target.result}))},n.readAsDataURL(e.target.files[0])}if("tags"===t&&g(Object(j.a)(Object(j.a)({},m),{},{tags:e.target.value.split(", ")})),"prep"===t){var i,r,c,s,a,o;w((function(e){return Object(j.a)(Object(j.a)({},e),{},{prep:!1})}));var l=e.target.value.split(" "),d=Number(null!==(i=null===(r=l.find((function(e){return e.includes("d")||e.includes("days")})))||void 0===r?void 0:r.replace(/\D/g,""))&&void 0!==i?i:0),u=Number(null!==(c=null===(s=l.find((function(e){return e.includes("h")||e.includes("hours")})))||void 0===s?void 0:s.replace(/\D/g,""))&&void 0!==c?c:0),p=Number(null!==(a=null===(o=l.find((function(e){return e.includes("m")||e.includes("minutes")})))||void 0===o?void 0:o.replace(/\D/g,""))&&void 0!==a?a:0);g(Object(j.a)(Object(j.a)({},m),{},{prep:{days:d,hours:u,minutes:p}}))}if("cook"===t){var b,x,h,O,v,f;w((function(e){return Object(j.a)(Object(j.a)({},e),{},{cook:!1})}));var y=e.target.value.split(" "),k=Number(null!==(b=null===(x=y.find((function(e){return e.includes("d")||e.includes("days")})))||void 0===x?void 0:x.replace(/\D/g,""))&&void 0!==b?b:0),C=Number(null!==(h=null===(O=y.find((function(e){return e.includes("h")||e.includes("hours")})))||void 0===O?void 0:O.replace(/\D/g,""))&&void 0!==h?h:0),N=Number(null!==(v=null===(f=y.find((function(e){return e.includes("m")||e.includes("minutes")})))||void 0===f?void 0:f.replace(/\D/g,""))&&void 0!==v?v:0);g(Object(j.a)(Object(j.a)({},m),{},{cook:{days:k,hours:C,minutes:N}}))}"serv"===t&&(w((function(e){return Object(j.a)(Object(j.a)({},e),{},{servSize:!1})})),g(Object(j.a)(Object(j.a)({},m),{},{servSize:e.target.value}))),P()},X=function(e){var t=function(){var e={name:!1,description:!1,prep:!1,cook:!1,ingredients:!1,steps:!1},t=!1;return m.name&&""!==m.name&&(e.name=!0),m.description&&""!==m.description&&(e.description=!0),!m.prep||0===m.prep.days&&0===m.prep.hours&&0===m.prep.minutes||(e.prep=!0),!m.cook||0===m.cook.days&&0===m.cook.hours&&0===m.cook.minutes||(e.cook=!0),m.ingredients&&0!==m.ingredients.length&&(e.ingredients=!0),m.steps&&0!==m.steps.length&&(e.steps=!0),e.name&&e.description&&e.prep&&e.cook&&e.ingredients&&e.steps&&(t=!0),w({name:!e.name,description:!e.description,prep:!e.prep,cook:!e.cook,ingredients:!e.ingredients,steps:!e.steps}),t}();t||e.preventDefault(),t&&(s(null!==u?function(e){var t=e.filter((function(e){return e.id!==u}));return[].concat(Object(a.a)(t),[m])}:function(e){return[].concat(Object(a.a)(e),[m])}),J())},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"75%",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"10px",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0px",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return Object(j.a)(Object(j.a)({},i),{},{width:e,margin:"".concat(t," auto ").concat(n," auto"),display:"block"})};return Object(h.jsxs)("div",{style:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0",overflow:"auto",backgroundColor:"white"},children:[Object(h.jsxs)(y.a,{show:D,onHide:function(){return I(!1)},children:[Object(h.jsx)(y.a.Header,{closeButton:!0,children:Object(h.jsx)(y.a.Title,{children:m.name||"New Recipe"})}),Object(h.jsx)(y.a.Body,{children:"Are you sure you want to discard ".concat(null===u||void 0===u?"this recipe":"your changes","?")}),Object(h.jsxs)(y.a.Footer,{children:[Object(h.jsx)(b.a,{variant:"secondary",onClick:function(){return I(!1)},children:"Cancel"}),Object(h.jsx)(b.a,{variant:"primary",onClick:function(){J(),window.location="/"},children:"Yes"})]})]}),Object(h.jsxs)(v.a,{action:"/",children:[Object(h.jsx)("h1",{style:{textAlign:"center",paddingTop:"20px",marginBottom:"20px"},children:m.name||"Recipe Name"}),Object(h.jsx)(v.a.Control,{style:_("30%"),placeholder:"Recipe Name",value:m.name,onChange:function(e){return q(e,"name")}}),C.name?Object(h.jsx)("div",{style:_("50%"),children:Object(h.jsx)(p.a,{style:{textAlign:"center"},variant:"danger",onClose:function(){return w((function(e){return Object(j.a)(Object(j.a)({},e),{},{name:!1})}))},dismissible:!0,children:Object(h.jsx)("p",{children:"You didn't give this recipe a name!"})})}):Object(h.jsx)(h.Fragment,{}),Object(h.jsx)(v.a.Control,{style:_("60%"),as:"textarea",placeholder:"Recipe Description",rows:3,value:m.description,onChange:function(e){return q(e,"desc")}}),C.description?Object(h.jsx)("div",{style:_("50%"),children:Object(h.jsx)(p.a,{style:{textAlign:"center"},variant:"danger",onClose:function(){return w((function(e){return Object(j.a)(Object(j.a)({},e),{},{description:!1})}))},dismissible:!0,children:Object(h.jsx)("p",{children:"Seems like you didn't give this recipe a description!"})})}):Object(h.jsx)(h.Fragment,{}),Object(h.jsx)(v.a.Group,{style:_("40%"),children:Object(h.jsxs)("div",{style:{display:l?"block":"flex"},children:[null===m.image||void 0===m.image?"":Object(h.jsx)("button",{type:"button",onClick:function(){H.current.value="",g((function(e){return Object(j.a)(Object(j.a)({},e),{},{image:null})}))},style:{color:"red",width:"20px",fontWeight:"bold",backgroundColor:"rgba(0, 0, 0, 0)",borderWidth:"0px",marginRight:"5px"},children:"X"}),Object(h.jsx)(v.a.Control,{style:{marginRight:"10px"},ref:H,type:"file",accept:"image/*",onChange:function(e){return q(e,"image")}}),Object(h.jsx)(v.a.Control,{style:{marginTop:l?"5px":"0px"},placeholder:'Tags separated by ","',value:(null===(t=m.tags)||void 0===t?void 0:t.join(", "))||"",onChange:function(e){return q(e,"tags")}})]})}),Object(h.jsxs)(v.a.Group,{style:_("80%"),children:[Object(h.jsx)("div",{style:_("80%"),children:Object(h.jsxs)("div",{style:{display:l?"block":"flex"},children:[Object(h.jsx)(v.a.Control,{ref:E,style:{marginRight:"10px"},placeholder:"Prep Time (1h 2m)",onBlur:function(e){var t,n,i;return e.target.value=Object(R.formatTime)(null===(t=m.prep)||void 0===t?void 0:t.days,null===(n=m.prep)||void 0===n?void 0:n.hours,null===(i=m.prep)||void 0===i?void 0:i.minutes)},onChange:function(e){return q(e,"prep")}}),Object(h.jsx)(v.a.Control,{ref:W,style:{marginRight:"10px",marginTop:l?"5px":"0px"},placeholder:"Cook Time (3h 15m)",onBlur:function(e){var t,n,i;return e.target.value=Object(R.formatTime)(null===(t=m.cook)||void 0===t?void 0:t.days,null===(n=m.cook)||void 0===n?void 0:n.hours,null===(i=m.cook)||void 0===i?void 0:i.minutes)},onChange:function(e){return q(e,"cook")}}),Object(h.jsx)(v.a.Control,{ref:M,style:{marginTop:l?"5px":"0px"},type:"number",min:1,placeholder:"Serving Size",onBlur:function(e){e.target.value<1&&(e.target.value=1),e.target.value=parseInt(e.target.value),q(e,"serv")},onChange:function(e){return q(e,"serv")}})]})}),C.prep||C.cook?Object(h.jsx)("div",{style:_("50%"),children:Object(h.jsx)(p.a,{style:{textAlign:"center",marginRight:"10px"},variant:"danger",onClose:function(){return w((function(e){return Object(j.a)(Object(j.a)({},e),{},{prep:!1,cook:!1})}))},dismissible:!0,children:Object(h.jsx)("p",{children:"You didn't give this recipe any prep/cook time!"})})}):Object(h.jsx)(h.Fragment,{})]}),Object(h.jsx)("br",{}),Object(h.jsxs)(v.a.Group,{style:_("60%","10px","0px"),children:[Object(h.jsx)("h2",{children:"Ingredients: "}),Object(h.jsx)("div",{children:null===(n=m.ingredients)||void 0===n?void 0:n.map((function(e,t){return Object(h.jsxs)("div",{style:{display:"flex",marginTop:"20px"},children:[Object(h.jsx)("button",{type:"button",onClick:function(e){return t=e,g((function(e){return Object(j.a)(Object(j.a)({},e),{},{ingredients:e.ingredients.filter((function(e){return e.id!==t.target.id}))})})),void P();var t},id:e.id,variant:"danger",style:{color:"red",width:"20px",fontWeight:"bold",backgroundColor:"rgba(0, 0, 0, 0)",borderWidth:"0px"},children:"X"},t+"ingBut"),Object(h.jsxs)("p",{className:"gray-border",style:{fontSize:"1rem",margin:"0px auto 0px 10px",display:"block",color:"gray"},children:[e.amount," ",e.unit," | ",e.name]},t+"ingPar")]},t+"ingDiv")}))}),Object(h.jsxs)("div",{style:{display:l?"block":"flex",marginTop:"20px",marginLeft:"20px"},children:[Object(h.jsxs)("div",{style:{display:"flex",width:l?"80%":"20%"},children:[Object(h.jsx)(v.a.Control,{ref:B,placeholder:"2 1/2",style:{width:"40%",marginRight:"5px"}}),Object(h.jsxs)(v.a.Select,{ref:F,style:{width:"60%",marginRight:"5px"},children:[Object(h.jsx)("option",{value:"none",children:"Choose..."}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{}),Object(h.jsx)("option",{value:"tsp",children:"tsp"}),Object(h.jsx)("option",{value:"tbsp",children:"tbsp"}),Object(h.jsx)("option",{value:"fl-oz",children:"fl-oz"}),Object(h.jsx)("option",{value:"cup",children:"cup"}),Object(h.jsx)("option",{value:"pnt",children:"pint"}),Object(h.jsx)("option",{value:"qt",children:"quart"}),Object(h.jsx)("option",{value:"gal",children:"gallon"}),Object(h.jsx)("option",{value:"ml",children:"ml"}),Object(h.jsx)("option",{value:"l",children:"L"}),Object(h.jsx)("option",{value:"dl",children:"dl"}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{}),Object(h.jsx)("option",{value:"lb",children:"lb"}),Object(h.jsx)("option",{value:"oz",children:"oz"}),Object(h.jsx)("option",{value:"mg",children:"mg"}),Object(h.jsx)("option",{value:"g",children:"g"}),Object(h.jsx)("option",{value:"kg",children:"kg"})]})]}),Object(h.jsx)(v.a.Control,{ref:z,placeholder:"Ingredient Name",style:{width:"80%",marginTop:l?"5px":"0"}}),Object(h.jsx)(b.a,{variant:"success",onClick:function(){if(""!==B.current.value&&"Choose..."!==F.current.value&&""!==z.current.value){B.current.focus();var e={amount:B.current.value,unit:F.current.value,name:z.current.value,id:Object(S.a)()};B.current.value="",F.current.value="none",z.current.value="",g((function(t){var n,i,r;return(null===(n=t.ingredients)||void 0===n?void 0:n.some((function(t){return t.id===e.id})))?t:(w((function(e){return Object(j.a)(Object(j.a)({},e),{},{ingredients:!1})})),Object(j.a)(Object(j.a)({},t),{},{ingredients:null!==(i=null===(r=m.ingredients)||void 0===r?void 0:r.concat(e))&&void 0!==i?i:[e]}))})),P()}},style:{margin:l?"5px auto 5px 0px":"5px auto 5px 10px",display:"block"},children:"Add"})]}),C.ingredients?Object(h.jsx)("div",{style:_("70%","10px","0px"),children:Object(h.jsx)(p.a,{style:{textAlign:"center",marginLeft:"10px"},variant:"danger",onClose:function(){return w((function(e){return Object(j.a)(Object(j.a)({},e),{},{ingredients:!1})}))},dismissible:!0,children:Object(h.jsx)("p",{children:"You didn't give this recipe any ingredients! These are important you know..."})})}):Object(h.jsx)(h.Fragment,{})]}),Object(h.jsxs)(v.a.Group,{style:_("60%","30px","0px"),children:[Object(h.jsx)("h2",{children:"Steps: "}),Object(h.jsx)("div",{children:null===(r=m.steps)||void 0===r?void 0:r.map((function(e,t){return Object(h.jsxs)("div",{style:{display:"flex",marginTop:"20px"},children:[Object(h.jsx)("button",{type:"button",onClick:function(e){return t=e,g((function(e){return Object(j.a)(Object(j.a)({},e),{},{steps:e.steps.filter((function(e){return e.id!==t.target.id}))})})),void P();var t},id:e.id,variant:"danger",style:{color:"red",width:"20px",fontWeight:"bold",backgroundColor:"rgba(0, 0, 0, 0)",borderWidth:"0px"},children:"X"},t+"stepBut"),Object(h.jsxs)("div",{className:"gray-border",style:{fontSize:"1rem",color:"gray",margin:"0px auto 0px 10px",padding:"7px 15px 7px 8px",display:"block"},children:[Object(h.jsxs)("h6",{style:{marginBottom:"0px"},children:["Step ",t+1]},t+"stepDivh6"),Object(h.jsx)("p",{style:{margin:"5px 0px 0px 10px"},children:e.description},t+"stepDivPar")]},t+"stepDiv2")]},t+"stepDiv")}))}),Object(h.jsxs)("div",{style:{display:"flex",marginTop:"20px",marginLeft:"20px"},children:[Object(h.jsx)(v.a.Control,{ref:A,as:"textarea",rows:3,placeholder:"Combine the flour, salt...."}),Object(h.jsx)(b.a,{onClick:function(){if(""!==A.current.value){A.current.focus();var e={description:A.current.value,id:Object(S.a)()};A.current.value="",g((function(t){var n,i,r;return(null===(n=t.steps)||void 0===n?void 0:n.some((function(t){return t.id===e.id})))?t:(w((function(e){return Object(j.a)(Object(j.a)({},e),{},{steps:!1})})),Object(j.a)(Object(j.a)({},t),{},{steps:null!==(i=null===(r=m.steps)||void 0===r?void 0:r.concat(e))&&void 0!==i?i:[e]}))})),P()}},variant:"success",style:{margin:"5px auto 5px 10px",display:"block"},children:"Add"})]}),C.steps?Object(h.jsx)("div",{style:_("70%","10px","0px"),children:Object(h.jsx)(p.a,{style:{textAlign:"center",marginLeft:"10px"},variant:"danger",onClose:function(){return w((function(e){return Object(j.a)(Object(j.a)({},e),{},{steps:!1})}))},dismissible:!0,children:Object(h.jsx)("p",{children:"You didn't give this recipe any steps! This is important too..."})})}):Object(h.jsx)(h.Fragment,{})]}),Object(h.jsxs)("div",{style:{backgroundColor:"white",display:"flex",marginTop:"10px",justifyContent:"center",alignItems:"center",marginBottom:"40px"},children:[Object(h.jsx)(b.a,{variant:"secondary",style:{marginRight:"5px"},onClick:function(){I(!0)},children:"Cancel"}),Object(h.jsx)(b.a,{type:"submit",style:{marginLeft:"5px"},variant:"primary",onClick:function(e){return X(e)},children:null===u||void 0===u?"Create":"Edit"})]})]})]})},L=(n(90),function(e){var t,n,r,c=e.recipes,s=(e.isCrushed,e.updateShopping),u=Object(d.g)().id,j=c.find((function(e){return e.id===u})),O=Object(i.useState)([]),m=Object(o.a)(O,2),g=m[0],v=m[1];if(null===j||void 0===j)return Object(h.jsxs)("div",{className:"absolute-center",children:[Object(h.jsxs)(p.a,{variant:"danger",children:[Object(h.jsx)(p.a.Heading,{children:"Sorry!"}),Object(h.jsxs)("p",{children:["Im sorry, I can't find that recipe... ",Object(h.jsx)("br",{}),"Head back to the homepage and try again!"]})]}),Object(h.jsx)(l.b,{to:"/",children:Object(h.jsx)(b.a,{children:"Go Home"})})]});return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{style:{textAlign:"left",margin:"20px 20px auto 20px"},children:j.name||"Recipe Name"}),Object(h.jsx)("p",{style:{textAlign:"left",margin:"0px 20px 20px 20px"},children:j.description}),Object(h.jsxs)("div",{style:{display:"inline-block"},children:[Object(h.jsx)("img",{width:"300px",src:null!==(t=j.image)&&void 0!==t?t:x,style:{border:"2px solid #ced4da",borderRadius:"20px",margin:" auto 15px 20px 20px"},alt:"Not found... :("}),Object(h.jsxs)("div",{style:{border:"2px solid #ced4da",borderRadius:"15px",padding:"20px",display:"inline-block"},children:[Object(h.jsxs)("p",{children:[Object(h.jsx)("strong",{children:"Prep Time:"})," ",Object(R.parseFormat)(j.prep.days,j.prep.hours,j.prep.minutes)]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("strong",{children:"Cook Time:"})," ",Object(R.parseFormat)(j.cook.days,j.cook.hours,j.cook.minutes)]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("strong",{children:"Total Time:"})," ",Object(R.parseFormat)(j.prep.days+j.cook.days,j.prep.hours+j.cook.hours,j.prep.minutes+j.cook.minutes)]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("strong",{children:"Yields:"})," ",j.servSize," servings"]})]})]}),Object(h.jsxs)("div",{style:{margin:"20px auto 20px 30px"},children:[Object(h.jsx)("h2",{children:"Ingredients: "}),Object(h.jsxs)("div",{style:{marginLeft:"20px"},children:[null===(n=j.ingredients)||void 0===n?void 0:n.map((function(e,t){return Object(h.jsxs)("div",{style:{display:"flex",marginTop:"20px"},children:[Object(h.jsx)("span",{style:{display:"flex",alignItems:"center",textAlign:"center"},children:Object(h.jsx)("input",{type:"checkbox",className:"form-check-input",style:{padding:"0px"},onChange:function(t){return function(e,t){e.target.checked?v((function(e){return[].concat(Object(a.a)(e),[t])})):v((function(e){return e.filter((function(e){return e!==t}))}))}(t,e)}})}),Object(h.jsxs)("p",{className:"gray-border",style:{fontSize:"1rem",margin:"0px auto 0px 10px",display:"block"},children:[e.amount," ",e.unit," | ",e.name]},t+"ingPar")]},t+"ingDiv")})),Object(h.jsxs)(b.a,{variant:"outline-primary",style:{margin:"15px"},onClick:function(){0===g.length?j.ingredients.forEach((function(e){return s(e)})):g.forEach((function(e){return s(e)}))},children:["Add ",0===g.length?"":"".concat(g.length," "),"Ingredient",0===g.length||g.length>1?"s":""," To Shopping List"]})]})]}),Object(h.jsxs)("div",{style:{margin:"20px auto 20px 30px"},children:[Object(h.jsx)("h2",{children:"Steps: "}),Object(h.jsx)("div",{style:{marginLeft:"20px"},children:null===(r=j.steps)||void 0===r?void 0:r.map((function(e,t){return Object(h.jsx)("div",{style:{display:"flex",marginTop:"15px",maxWidth:"50%"},children:Object(h.jsxs)("div",{className:"gray-border",style:{fontSize:"1rem",margin:"0px auto 0px 10px",display:"block"},children:[Object(h.jsxs)("h6",{style:{color:"#6a7076",marginBottom:"0px"},children:["Step ",t+1]},t+"stepDivh6"),Object(h.jsx)("p",{style:{margin:"5px 0px 0px 10px"},children:e.description},t+"stepDivPar")]},t+"stepDiv2")},t+"stepDiv")}))})]}),Object(h.jsx)(l.b,{to:"/",children:Object(h.jsx)(b.a,{variant:"secondary",style:{marginLeft:"10px"},children:"Back"})}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{})]})}),D=n.p+"static/media/remove.551f372b.svg",I=n.p+"static/media/minus.21bf6372.svg",B=n.p+"static/media/plus.c3f02ad9.svg",F=n(25),z=(n(91),function(e){var t=e.item,n=e.addItem,i=e.deleteItem,r=t.name,c=t.amount,s=t.unit,a=t.id;return Object(h.jsx)("div",{className:"grow",children:Object(h.jsx)("div",{className:"card",style:{marginTop:"15px",borderRadius:"15px"},children:Object(h.jsxs)("div",{className:"row no-gutters",children:[Object(h.jsx)("div",{className:"col-sm-3",style:{marginLeft:"10px",marginTop:"5px",marginBottom:"5px",paddingRight:"0px",maxWidth:"100px"},children:Object(h.jsx)("img",{src:x,style:{borderRadius:"10px"},alt:"Not found... :(",width:"100%"})}),Object(h.jsx)("div",{className:"col-sm-10",style:{paddingLeft:"0px",paddingTop:"3px"},children:Object(h.jsxs)("div",{className:"card-body",style:{paddingBottom:"0px"},children:[Object(h.jsxs)("div",{style:{display:"flex"},children:[Object(h.jsxs)("h5",{className:"card-title",style:{marginLeft:"10px"},children:[Math.ceil(10*Object(F.evalFrac)(c))/10," ",s]}),Object(h.jsxs)("p",{className:"card-text",style:{marginLeft:"10px"},children:[" | ",r]})]}),Object(h.jsxs)("div",{style:{display:"flex"},children:[Object(h.jsx)("img",{width:"30px",style:{cursor:"pointer",margin:"0px 0px 0px 5px"},src:B,onClick:function(){return n(1,r,s)},alt:"Not found... :("}),Object(h.jsx)("img",{width:"30px",style:{cursor:"pointer",margin:"0px 0px 0px 5px"},src:Object(F.evalFrac)(c)<=.1?D:I,onClick:function(){return i(a)},alt:"Not found... :("})]})]})})]})},a)})}),A=(n(92),function(e){var t=e.items,n=e.addItem,i=e.deleteItem,r=t.map((function(e){return Object(h.jsx)(z,{item:e,addItem:n,deleteItem:i},e.id)}));return Object(h.jsx)("div",{children:r.length>0?r:Object(h.jsxs)(p.a,{style:{margin:"0px 15px"},variant:"danger",children:[Object(h.jsx)(p.a.Heading,{children:"Hmm..."}),Object(h.jsx)("p",{children:"Seems like there you have no items in your shopping list!"})]})})}),H=n(133),E=n.p+"static/media/red.ed6f7044.svg",W=(n(93),function(e){var t=e.shopping,n=e.setShopping,r=e.isCrushed,c=e.updateShopping,s=e.toasts,o=e.setToasts,d=Object(i.useRef)(),u=Object(i.useRef)(),p=Object(i.useRef)(),x=function(e,t,n){var i=d.current.value||(null!==e&&void 0!==e?e:""),r="none"===u.current.value?null!==n&&void 0!==n?n:"":u.current.value,s=p.current.value||(null!==t&&void 0!==t?t:"");""!==i&&""!==s&&""!==r&&(c({name:s,amount:i,unit:r,id:Object(S.a)()}),d.current.value="",p.current.value="")};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"centerDiv",children:[Object(h.jsx)("h1",{style:{margin:"20px"},children:"My Shopping List"}),Object(h.jsx)("hr",{}),Object(h.jsxs)("div",{style:{display:"flex"},children:[Object(h.jsxs)("div",{className:"addItemDiv",children:[Object(h.jsx)(v.a,{onSubmit:function(e){e.preventDefault(),x()},children:Object(h.jsxs)(v.a.Group,{style:{margin:"10px"},children:[Object(h.jsxs)("div",{style:{display:r?"block":"flex"},children:[Object(h.jsx)(v.a.Control,{ref:d,style:{margin:r?"auto auto 5px auto":"auto 5px auto auto"},placeholder:"2 1/2"}),Object(h.jsxs)(v.a.Select,{ref:u,style:{marginRight:"5px"},children:[Object(h.jsx)("option",{value:"none",children:"Choose..."}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{}),Object(h.jsx)("option",{value:"tsp",children:"tsp"}),Object(h.jsx)("option",{value:"Tbs",children:"tbsp"}),Object(h.jsx)("option",{value:"fl-oz",children:"fl-oz"}),Object(h.jsx)("option",{value:"cup",children:"cup"}),Object(h.jsx)("option",{value:"pnt",children:"pint"}),Object(h.jsx)("option",{value:"qt",children:"quart"}),Object(h.jsx)("option",{value:"gal",children:"gallon"}),Object(h.jsx)("option",{value:"ml",children:"ml"}),Object(h.jsx)("option",{value:"l",children:"L"}),Object(h.jsx)("option",{value:"dl",children:"dl"}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{}),Object(h.jsx)("option",{value:"lb",children:"lb"}),Object(h.jsx)("option",{value:"oz",children:"oz"}),Object(h.jsx)("option",{value:"mg",children:"mg"}),Object(h.jsx)("option",{value:"g",children:"g"}),Object(h.jsx)("option",{value:"kg",children:"kg"})]})]}),Object(h.jsxs)("div",{style:{display:r?"block":"flex"},children:[Object(h.jsx)(v.a.Control,{ref:p,style:{margin:"5px 0 0 0"},placeholder:"Ingredient Name"}),Object(h.jsx)(b.a,{type:"submit",style:{margin:r?"5px auto auto auto":"5px auto auto 5px"},children:"Add"})]})]})}),Object(h.jsx)(l.b,{to:"/",children:Object(h.jsx)(b.a,{style:{position:"absolute",bottom:"10px",left:"10px"},variant:"secondary",children:"Back"})})]}),Object(h.jsx)("div",{className:"separator"}),Object(h.jsx)("div",{className:"itemListDiv",children:Object(h.jsx)(A,{items:t,isCrushed:r,addItem:x,deleteItem:function(e){var i=t.find((function(t){return t.id===e}));void 0!==i&&(Object(F.evalFrac)(i.amount)>1?n((function(e){var t=e.indexOf(i),n=e;return n[t]=Object(j.a)(Object(j.a)({},i),{},{amount:Object(F.evalFrac)(i.amount)-1}),Object(a.a)(n)})):n((function(t){return t.filter((function(t){return t.id!==e}))})))}})})]})]}),Object(h.jsx)("div",{style:{position:"absolute",bottom:"0",right:"0",margin:"0px 15px 15px 0px"},children:s.map((function(e){return Object(h.jsxs)(H.a,{show:!0,style:{marginTop:"10px"},onClose:function(){return o((function(t){return t.filter((function(t){return t.id!==e.id}))}))},children:[Object(h.jsxs)(H.a.Header,{children:[Object(h.jsx)("img",{src:E,width:"15px",className:"rounded me-2",alt:""}),Object(h.jsx)("strong",{className:"me-auto",children:e.title})]}),Object(h.jsx)(H.a.Body,{children:e.errMsg})]})}))})]})}),M=n(69),Y=n.n(M),G=function(){var e=u("recipes",[]),t=Object(o.a)(e,2),n=t[0],r=t[1],c=u("shopping_list",[]),s=Object(o.a)(c,2),j=s[0],p=s[1],b=Object(i.useState)(!1),x=Object(o.a)(b,2),O=x[0],m=x[1],g=Object(i.useState)([]),v=Object(o.a)(g,2),f=v[0],y=v[1];Object(i.useEffect)((function(){window.addEventListener("resize",k.bind(undefined))}),[]);var k=function(){window.innerWidth<927?m(!0):m(!1)},C=function(e){var t=e.name.toLowerCase().split(" ").filter((function(e){return e.trim()})).join(" "),n=j.find((function(e){return e.name.toLowerCase().split(" ").join(" ")===t}));if(void 0===n)p((function(t){return[].concat(Object(a.a)(t),[e])}));else try{var i=Number(Y()(Object(F.evalFrac)(e.amount)).from(e.unit).to(n.unit))+Number(Object(F.evalFrac)(n.amount));n.unit!==e.unit&&(i=Y()(i).from(n.unit).toBest()),n.amount=i.val||i,n.unit=i.unit||n.unit,p((function(e){var i=e.filter((function(e){return e.name.toLowerCase().split(" ").join(" ")!==t}));return[].concat(Object(a.a)(i),[n])}))}catch(r){console.log(r),function(e,t){var n;y((function(i){return n=i.length+1,[].concat(Object(a.a)(i),[{title:e,errMsg:t,id:n}])})),setTimeout((function(){y((function(e){return e.filter((function(e){return e.id!==n}))}))}),9e3)}("Hmm... There was an error!",r.message)}};return Object(h.jsx)(l.a,{children:Object(h.jsxs)(d.c,{children:[Object(h.jsx)(d.a,{path:"/",exact:!0,element:Object(h.jsx)(w,{recipes:n,setRecipes:r,isCrushed:O})}),Object(h.jsx)(d.a,{path:"/shopping",element:Object(h.jsx)(W,{shopping:j,updateShopping:C,toasts:f,setToasts:y,setShopping:p,isCrushed:O})}),Object(h.jsx)(d.a,{path:"/create",element:Object(h.jsx)(T,{recipes:n,setRecipes:r,isCrushed:O})}),Object(h.jsx)(d.a,{path:"/edit/:id",element:Object(h.jsx)(T,{recipes:n,setRecipes:r,isCrushed:O})}),Object(h.jsx)(d.a,{path:"/recipe",exact:!0,element:Object(h.jsx)(L,{recipes:n,isCrushed:O})}),Object(h.jsx)(d.a,{path:"/recipe/:id",element:Object(h.jsx)(L,{recipes:n,updateShopping:C,isCrushed:O})})]})})};s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(G,{})}),document.getElementById("root"))},25:function(e,t){e.exports={evalFrac:function(e){for(var t=e.toString().split(/ +/),n=0,i=0;i<t.length;i++){var r=t[i].split("/");if(1===r.length)n+=parseInt(100*r[0])/100;else if(0!==parseInt(r[1])){var c=parseInt(r[0],10)/parseInt(r[1],10);n+=c=Math.round(1e3*c)/1e3}}return n}}},26:function(e,t){var n=function(e,t,n){var i="";return e&&e>0&&(i+=e,i+=e>1?" days, ":" day, "),t&&t>0&&(i+=t,i+=t>1?" hours, ":" hour, "),n&&n>0&&(i+=n,i+=n>1?" minutes, ":" minute, "),i.endsWith(", ")&&(i=i.slice(0,i.length-2)),i},i=function(e,t,n){var i=60*n+60*t*60+60*e*60*24;return{days:Math.floor(i/86400),hours:Math.floor(i%86400/3600),minutes:Math.floor(i%3600/60)}};e.exports={formatTime:n,parseTime:i,parseFormat:function(e,t,r){var c=i(e,t,r),s=c.days,a=c.hours,o=c.minutes;return n(s,a,o)}}},64:function(e,t,n){},86:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){}},[[127,1,2]]]);
//# sourceMappingURL=main.38bf6b95.chunk.js.map