(this.webpackJsonptote_shop=this.webpackJsonptote_shop||[]).push([[0],{107:function(e,t,a){e.exports={about:"About_about__3g6IA"}},110:function(e,t,a){e.exports={about:"Faq_about__1aiGh"}},118:function(e,t,a){},119:function(e,t,a){},12:function(e,t,a){e.exports={block:"Contact_block__uL8ZP",blockInput:"Contact_blockInput__3WE4h",button:"Contact_button__35LTo",form__control:"Contact_form__control__3CHc4",error:"Contact_error__233Bo",input:"Contact_input__1WU7j"}},19:function(e,t,a){e.exports={header:"Header_header__3VMM1",title:"Header_title__Zw1hp",login:"Header_login__2eb6U",search:"Header_search__3a6cg",prifile:"Header_prifile__2NT75",cart:"Header_cart__1p9ps",activeLink:"Header_activeLink__2h-1y"}},21:function(e,t,a){e.exports={overlay:"Drawer_overlay__-er4i",overlayVisible:"Drawer_overlayVisible__3B5Xo",drawer:"Drawer_drawer__14YBj",title:"Drawer_title__2nseP",card:"Drawer_card__3VlCT",title__block:"Drawer_title__block__1bvjx",amount:"Drawer_amount__13kSP",block__items:"Drawer_block__items__2dnLQ",info:"Drawer_info__1SxM2"}},243:function(e,t,a){"use strict";a.r(t);var r,c=a(0),n=a.n(c),i=a(53),s=a.n(i),o=(a(118),a(112)),l=(a(119),a(9)),u=a(19),d=a.n(u),j=a(24),b=a(8),h=a(16),m=a.n(h),p=a(28),x=a(7),O=a(31),f=a.n(O),_=function(){return f.a.get("https://615eef1aaf36590017204685.mockapi.io/catalog")},v=function(e){return f.a.post("https://615eef1aaf36590017204685.mockapi.io/cart",e)},g=function(){return f.a.get("https://615eef1aaf36590017204685.mockapi.io/cart")},y=function(e){return f.a.delete("https://615eef1aaf36590017204685.mockapi.io/cart/".concat(e))},C=function(e,t){return f.a.put("https://615eef1aaf36590017204685.mockapi.io/cart/".concat(t),e)},w=function(e){return f.a.post("https://615eef1aaf36590017204685.mockapi.io/contact",e)},k="ADD_CART",N="DISABLEINPUT",L={items:[],orders:[],isOrderComplete:!1,disabled:!1},A=function(e){return{type:k,payload:e}},S=function(e){return{type:N,payload:e}},q=function(e){return function(){var t=Object(p.a)(m.a.mark((function t(a){var r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a(T(!0)),t.next=4,y(e);case 4:return t.next=6,g();case 6:r=t.sent,a(A(r.data)),a(T(!1)),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b"),console.error(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},I="ADD_CARD",D="SEARCH",E="DISABLE",M={items:[],search:"",isLoaded:!0,disabled:!1},T=function(e){return{type:E,payload:e}},B=a(1),F=function(e){var t=e.clickOpenedCart,a=Object(b.d)((function(e){return e.card.search})),r=Object(b.c)();return Object(B.jsx)(B.Fragment,{children:Object(B.jsxs)("div",{className:d.a.header,children:[Object(B.jsx)(j.b,{exact:!0,to:"/",children:Object(B.jsxs)("div",{className:d.a.title,children:[Object(B.jsx)("h1",{children:"Tote"}),Object(B.jsx)("h3",{children:"Funky Printed Bags"})]})}),Object(B.jsx)("div",{className:d.a.menu_block,children:Object(B.jsxs)("ul",{children:[Object(B.jsx)("li",{children:Object(B.jsx)(j.b,{exact:!0,to:"/",activeClassName:d.a.activeLink,children:"Shop"})}),Object(B.jsx)("li",{children:Object(B.jsx)(j.b,{exact:!0,to:"/about",activeClassName:d.a.activeLink,children:"About"})}),Object(B.jsx)("li",{children:Object(B.jsx)(j.b,{exact:!0,to:"/faq",activeClassName:d.a.activeLink,children:"FAQ"})}),Object(B.jsx)("li",{children:Object(B.jsx)(j.b,{exact:!0,to:"/contact",activeClassName:d.a.activeLink,children:"Contact"})})]})}),Object(B.jsxs)("div",{className:d.a.login,children:[Object(B.jsx)("img",{src:"img/search.svg",className:d.a.search,alt:"search"}),Object(B.jsx)("input",{onChange:function(e){r(function(e){return{type:D,payload:e}}(e.target.value))},value:a,placeholder:"Search"}),Object(B.jsxs)("div",{className:d.a.prifile,children:[Object(B.jsx)("img",{src:"img/icons8.svg",alt:"profile"}),Object(B.jsx)("p",{children:"Log In"})]}),Object(B.jsx)("img",{src:"img/cart.svg",alt:"cart",className:d.a.cart,onClick:t})]})]})})},H=a(107),P=a.n(H),R=function(){return Object(B.jsxs)("div",{className:P.a.about,children:[Object(B.jsx)("h1",{children:"About"}),Object(B.jsx)("p",{children:"I'm a paragraph. Click here to add your own text and edit me. It\u2019s easy. Just click \u201cEdit Text\u201d or double click me to add your own content and make changes to the font. I\u2019m a great place for you to tell a story and let your users know a little more about you."})]})},Y=a(55),V=a.n(Y),Z=a(32),Q=a.n(Z),U=function(e){var t=e.id,a=e.price,r=e.title,c=e.images,n=e.info,i=e.onCartItems,s=e.isAddCard,o=e.onRemoveCard,l=e.disabled,u=c.small,d=c.large,j={title:r,price:a,small:u,large:d,info:n,parentId:t,amount:1};return Object(B.jsxs)("div",{className:Q.a.cart,children:[Object(B.jsx)("div",{className:Q.a.cart__image,children:Object(B.jsx)("img",{src:u,onMouseOver:function(e){return e.currentTarget.src=d},onMouseOut:function(e){return e.currentTarget.src=u},alt:"cart"})}),Object(B.jsxs)("div",{className:Q.a.cart__price,children:[Object(B.jsx)("h4",{children:r}),Object(B.jsx)("hr",{}),Object(B.jsxs)("h4",{children:["$",a]}),Object(B.jsx)("div",{children:s(t)?Object(B.jsx)("button",{disabled:l,onClick:function(){return o(t)},className:"".concat(Q.a.itemCart," ").concat(l&&Q.a.btn),children:"Item In Cart"}):Object(B.jsx)("button",{className:"".concat(l&&Q.a.btn),disabled:l,onClick:function(){return i(j)},children:"Add to Cart"})})]})]})},$=a(108),G=function(e){return Object(B.jsxs)($.a,Object(x.a)(Object(x.a)({speed:2,width:420,height:600,viewBox:"0 0 420 600",backgroundColor:"#e4e2e2",foregroundColor:"#d1d1d1"},e),{},{children:[Object(B.jsx)("rect",{x:"185",y:"470",rx:"0",ry:"0",width:"50",height:"2"}),Object(B.jsx)("rect",{x:"160",y:"480",rx:"0",ry:"0",width:"100",height:"15"}),Object(B.jsx)("rect",{x:"110",y:"440",rx:"0",ry:"0",width:"200",height:"15"}),Object(B.jsx)("rect",{x:"5",y:"0",rx:"0",ry:"0",width:"410",height:"420"}),Object(B.jsx)("rect",{x:"5",y:"530",rx:"0",ry:"0",width:"410",height:"30"})]}))},J=n.a.memo((function(){var e=Object(b.d)((function(e){return e.card})),t=Object(b.d)((function(e){return e.cart})),a=Object(b.c)(),r=function(e){a(function(e){return function(){var t=Object(p.a)(m.a.mark((function t(a){var r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a(T(!0)),t.next=4,v(e);case 4:return t.next=6,g();case 6:r=t.sent,a(A(r.data)),a(T(!1)),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"),console.error(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}(e))},c=function(e){var r=t.items.find((function(t){return Number(t.parentId)===Number(e)}));a(q(r.id))},n=function(e){return t.items.some((function(t){return Number(t.parentId)===Number(e)}))},i=e.items.filter((function(t){return t.title.toLowerCase().includes(e.search.toLowerCase())}));return Object(B.jsxs)("div",{className:V.a.block,children:[e.search&&Object(B.jsx)("div",{className:V.a.search,children:Object(B.jsxs)("h2",{children:["Search by request: ",e.search," "]})}),Object(B.jsx)("div",{className:V.a.cart,children:e.isLoaded?Array(12).fill(0).map((function(e,t){return Object(B.jsx)(G,{},t)})):i.map((function(t){return Object(B.jsx)(U,Object(x.a)({disabled:e.disabled,onRemoveCard:c,isAddCard:n,onCartItems:r},t),t.id)}))})]})})),X=a(12),z=a.n(X),W="ADD_MESSAGE",K=function(e){return{type:W,payload:e}},ee=a(245),te=a(244),ae=a(76),re=function(e){return e?void 0:"Field is required!"},ce=function(e){return e&&/[^a-zA-Z\u0430-\u044f\u0410-\u042f0-9 ]/i.test(e)?"Only alphanumeric characters":void 0},ne=function(e){return function(t){return t&&t.length>e?"Must be ".concat(e," characters or less"):void 0}},ie=ne(15),se=ne(100),oe=(r=2,function(e){return e&&e.length<r?"Must be ".concat(r," characters or more"):void 0}),le=function(e){return e&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)?"Invalid email address":void 0},ue=function(e){return e&&!/^(0|[1-9][0-9]{10})$/i.test(e)?"Invalid phone number, must be 11 digits":void 0},de=function(e){return e&&/.+@aol\.com/.test(e)?"Really? You still use AOL for your email?":void 0},je=function(e){var t=e.input,a=e.meta,r=(e.child,Object(ae.a)(e,["input","meta","child"])),c=a.touched&&a.error;return Object(B.jsxs)("div",{className:z.a.form__control+" "+(c?z.a.error:""),children:[Object(B.jsx)("input",Object(x.a)(Object(x.a)({className:z.a.input},t),r)),a.touched&&(a.error&&Object(B.jsx)("span",{className:z.a.form__control,children:a.error})||a.warning&&Object(B.jsx)("span",{className:z.a.form__control,children:a.warning}))]})},be=function(e){var t=e.input,a=e.meta,r=(e.child,Object(ae.a)(e,["input","meta","child"])),c=a.touched&&a.error;return Object(B.jsxs)("div",{className:z.a.form__control+" "+(c?z.a.error:""),children:[Object(B.jsx)("textarea",Object(x.a)(Object(x.a)({},t),r)),a.touched&&(a.error&&Object(B.jsx)("span",{className:z.a.form__control,children:a.error})||a.warning&&Object(B.jsx)("span",{className:z.a.form__control,children:a.warning}))]})},he=Object(te.a)({form:"contact"})((function(e){var t=e.addContact,a=e.handleSubmit;return Object(B.jsx)("div",{className:z.a.blockInput,children:Object(B.jsxs)("form",{onSubmit:a,children:[Object(B.jsxs)("div",{children:[Object(B.jsx)("label",{children:"First Name"}),Object(B.jsx)(ee.a,{type:"text",placeholder:"Enter Your First Name",name:"firstName",validate:[re,ie,oe],warn:ce,component:je})]}),Object(B.jsxs)("div",{children:[Object(B.jsx)("label",{children:"Last Name"}),Object(B.jsx)(ee.a,{type:"text",placeholder:"Enter Your Last Name",name:"lastName",validate:[re,ie,oe],warn:ce,component:je})]}),Object(B.jsxs)("div",{children:[Object(B.jsx)("label",{children:"Email"}),Object(B.jsx)(ee.a,{type:"email",placeholder:"Enter Your Email",name:"email",validate:[re,le],warn:de,component:je})]}),Object(B.jsxs)("div",{children:[Object(B.jsx)("label",{children:"Phone"}),Object(B.jsx)(ee.a,{type:"number",placeholder:"Enter Your Phone",name:"phone",component:je,validate:[re,ue]})]}),Object(B.jsxs)("div",{children:[Object(B.jsx)("label",{children:"Message"}),Object(B.jsx)(ee.a,{type:"text",placeholder:"Type your message here...",name:"message",validate:[re,se],warn:ce,component:be})]}),Object(B.jsx)("button",{className:z.a.button,onClick:t,children:"Submit"})]})})})),me=function(){var e=Object(b.c)();return Object(B.jsxs)("div",{className:z.a.block,children:[Object(B.jsx)("div",{children:Object(B.jsx)("h1",{children:"Contact"})}),Object(B.jsxs)("div",{children:[Object(B.jsx)("h3",{children:"You're welcome to contact us with any inquiry"}),Object(B.jsx)("p",{children:" Tel: 123-456-7890 | info@my-domain.com"})]}),Object(B.jsx)(he,{onSubmit:function(t){e(function(e){return function(){var t=Object(p.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(K(e)),t.next=3,w(e);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}})]})},pe=a(110),xe=a.n(pe),Oe=function(){return Object(B.jsxs)("div",{className:xe.a.about,children:[Object(B.jsx)("h1",{children:"FAQ"}),Object(B.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque eaque hic repellendus rerum sunt totam. Accusantium aliquam consequatur ea id ipsum possimus quas quos recusandae similique unde? Ad animi consequuntur dicta esse et fugiat hic maxime molestias nam non optio perspiciatis placeat, possimus provident, quia reiciendis, rem soluta totam unde voluptatum? Deserunt maxime quaerat voluptates. Beatae error incidunt minima officiis quae, repudiandae vel. Aut deserunt dolorem illum odio odit, vel voluptate? A accusantium, aperiam asperiores culpa dolorum hic impedit iusto molestias numquam perferendis quae quisquam quo quos repudiandae vero? Ab doloremque hic iusto, magni natus non saepe veritatis voluptatum."})]})},fe=a(21),_e=a.n(fe),ve=function(e){var t=e.small,a=e.title,r=e.price,c=e.id,n=e.onRemove,i=e.amount,s=e.disabled,o=Object(b.c)();return Object(B.jsxs)("div",{className:_e.a.card,children:[Object(B.jsx)("img",{src:t,alt:""}),Object(B.jsxs)("div",{className:_e.a.title__block,children:[Object(B.jsx)("h4",{children:a}),Object(B.jsx)("div",{children:Object(B.jsxs)("span",{children:["$",r]})}),Object(B.jsx)("div",{children:Object(B.jsxs)("span",{children:["Amount ",Object(B.jsx)("input",{disabled:s,className:_e.a.amount,onChange:function(e){var t=e.target.value,a={amount:Number(t)};o(function(e,t){return function(){var a=Object(p.a)(m.a.mark((function a(r){var c;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r(S(!0)),a.next=4,C(e,t);case 4:return a.next=6,g();case 6:c=a.sent,r(A(c.data)),r(S(!1)),a.next=15;break;case 11:a.prev=11,a.t0=a.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0442\u043e\u0432\u0430\u0440\u0430"),console.error(a.t0);case 15:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(e){return a.apply(this,arguments)}}()}(a,c))},value:i,type:"number",min:"0",max:"100"})]})})]}),Object(B.jsx)("svg",{onClick:function(){return n(c)},version:"1.1",id:"cross-11",xmlns:"http://www.w3.org/2000/svg",width:"11px",height:"11px",viewBox:"0 0 11 11",children:Object(B.jsx)("path",{d:"M2.2,1.19l3.3,3.3L8.8,1.2C8.9314,1.0663,9.1127,0.9938,9.3,1C9.6761,1.0243,9.9757,1.3239,10,1.7 c0.0018,0.1806-0.0705,0.3541-0.2,0.48L6.49,5.5L9.8,8.82C9.9295,8.9459,10.0018,9.1194,10,9.3C9.9757,9.6761,9.6761,9.9757,9.3,10 c-0.1873,0.0062-0.3686-0.0663-0.5-0.2L5.5,6.51L2.21,9.8c-0.1314,0.1337-0.3127,0.2062-0.5,0.2C1.3265,9.98,1.02,9.6735,1,9.29 C0.9982,9.1094,1.0705,8.9359,1.2,8.81L4.51,5.5L1.19,2.18C1.0641,2.0524,0.9955,1.8792,1,1.7C1.0243,1.3239,1.3239,1.0243,1.7,1 C1.8858,0.9912,2.0669,1.06,2.2,1.19z"})})]})},ge=function(e){var t=e.onClose,a=e.opened,r=Object(b.c)(),c=Object(b.d)((function(e){return e.cart})),n=function(e){r(q(e))},i=c.items.reduce((function(e,t){return Number(t.price)*t.amount+Number(e)}),0);return Object(B.jsx)("div",{onClick:t,className:"".concat(_e.a.overlay," ").concat(a&&_e.a.overlayVisible),children:Object(B.jsxs)("div",{onClick:function(e){return e.stopPropagation()},className:_e.a.drawer,children:[Object(B.jsxs)("div",{className:_e.a.title,children:[Object(B.jsx)("svg",{onClick:t,version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 407.436 407.436",children:Object(B.jsx)("polygon",{points:"112.814,0 91.566,21.178 273.512,203.718 91.566,386.258 112.814,407.436 315.869,203.718 "})}),Object(B.jsx)("h1",{children:"Cart"})]}),Object(B.jsx)("div",{className:_e.a.block__items,children:c.isLoaded?c.items.map((function(e){return Object(B.jsx)(ve,Object(x.a)({disabled:c.disabled,onRemove:n},e),e.id)})):Object(B.jsx)("div",{children:"Loading"})}),Object(B.jsxs)("div",{className:_e.a.info,children:[Object(B.jsx)("h2",{children:"Subtotal:"}),Object(B.jsxs)("h2",{children:["$ ",i.toFixed(2)]}),Object(B.jsx)("hr",{})]}),Object(B.jsx)("button",{children:"Checkout"})]})})},ye=function(){var e=Object(b.c)(),t=n.a.useState(!1),a=Object(o.a)(t,2),r=a[0],c=a[1];n.a.useEffect((function(){e(function(){var e=Object(p.a)(m.a.mark((function e(t){var a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_();case 3:return a=e.sent,t((c=a.data,{type:I,payload:c})),e.next=7,g();case 7:r=e.sent,t(A(r.data)),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0438\u043d\u0438\u0446\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u0438"),console.error(e.t0);case 15:case"end":return e.stop()}var c}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[]);var i=function(){c(!r)};return Object(B.jsxs)("div",{className:"app",children:[Object(B.jsx)(F,{clickOpenedCart:i}),Object(B.jsx)(ge,{opened:r,onClose:i}),Object(B.jsx)(l.a,{path:"/about",render:function(){return Object(B.jsx)(R,{})}}),Object(B.jsx)(l.a,{exact:!0,path:"/",render:function(){return Object(B.jsx)(J,{})}}),Object(B.jsx)(l.a,{path:"/faq",render:function(){return Object(B.jsx)(Oe,{})}}),Object(B.jsx)(l.a,{path:"/contact",render:function(){return Object(B.jsx)(me,{})}})]})},Ce=a(10),we=a(111),ke=a(246),Ne=Object(Ce.c)({contact:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:return Object(x.a)(Object(x.a)({},e),{},{state:t.payload});default:return e}},form:ke.a,card:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(x.a)(Object(x.a)({},e),{},{items:t.payload,isLoaded:!1});case D:return Object(x.a)(Object(x.a)({},e),{},{search:t.payload});case E:return Object(x.a)(Object(x.a)({},e),{},{disabled:t.payload});default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(x.a)(Object(x.a)({},e),{},{items:t.payload,isLoaded:!0});case N:return Object(x.a)(Object(x.a)({},e),{},{disabled:t.payload});default:return e}}}),Le=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ce.d,Ae=Object(Ce.e)(Ne,Le(Object(Ce.a)(we.a)));s.a.render(Object(B.jsx)(n.a.StrictMode,{children:Object(B.jsx)(j.a,{children:Object(B.jsx)(b.a,{store:Ae,children:Object(B.jsx)(ye,{})})})}),document.getElementById("root"))},32:function(e,t,a){e.exports={cart:"Card_cart__2G7g4",cart__image:"Card_cart__image__7DASy",cart__price:"Card_cart__price__6y9EY",itemCart:"Card_itemCart__jOMQL",btn:"Card_btn__2IulK"}},55:function(e,t,a){e.exports={block:"Shop_block__3uSLF",cart:"Shop_cart__1U5gu",search:"Shop_search__1t7Qi"}}},[[243,1,2]]]);
//# sourceMappingURL=main.ca0544c0.chunk.js.map