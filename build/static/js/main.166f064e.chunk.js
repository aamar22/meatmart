(this.webpackJsonpamazon=this.webpackJsonpamazon||[]).push([[0],{47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},64:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c(3),s=c.n(a),i=c(24),r=c.n(i),o=(c(47),c(37)),l=c(12),j=(c(48),c(49),c(19)),d=c(38),u=c.n(d),h=c(39),b=c.n(h),O=Object(a.createContext)(),p=function(e){var t=e.reducer,c=e.initialState,s=e.children;return Object(n.jsx)(O.Provider,{value:Object(a.useReducer)(t,c),children:s})},m=function(){return Object(a.useContext)(O)},x=c(30),g=(x.a.initializeApp({apiKey:"AIzaSyBWrdJ7heEEJY_pW77UyDg0e8XJdGleVjc",authDomain:"fir-1486b.firebaseapp.com",projectId:"fir-1486b",storageBucket:"fir-1486b.appspot.com",messagingSenderId:"914262624104",appId:"1:914262624104:web:00c06e7b3580b6e46a78dd",measurementId:"G-1RDXZFQ7D1"}).firestore(),x.a.auth());var f=function(){var e=m(),t=Object(l.a)(e,2),c=t[0],a=c.basket,s=c.user;return t[1],Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)(j.b,{to:"/",children:Object(n.jsx)("img",{className:"header_logo",src:"http://onlinemeatshop.in/image/catalog/blog/chicken%20(3).png"})}),Object(n.jsxs)("div",{className:"header_search",children:[Object(n.jsx)("input",{className:"header_searchInput",type:"text"}),Object(n.jsx)(u.a,{className:"header_searchIcon"})]}),Object(n.jsxs)("div",{className:"header_nav",children:[Object(n.jsx)(j.b,{to:!s&&"/login",children:Object(n.jsxs)("div",{onClick:function(){s&&g.signOut()},className:"header_option",children:[Object(n.jsxs)("span",{className:"header_optionLineOne",children:["Hello ",s?s.email:"Guest"]}),Object(n.jsx)("span",{className:"header_optionLineTwo",children:s?"Sign Out":"Sign In"})]})}),Object(n.jsxs)("div",{className:"header_option",children:[Object(n.jsx)("span",{className:"header_optionLineOne",children:"Returns"}),Object(n.jsx)("span",{className:"header_optionLineTwo",children:"Orders"})]}),Object(n.jsx)(j.b,{to:"/checkout",children:Object(n.jsxs)("div",{className:"header_optionBasket",children:[Object(n.jsx)(b.a,{}),Object(n.jsx)("span",{className:"header_optionLineTwo header_basketCount",children:null===a||void 0===a?void 0:a.length})]})})]})]})};c(58),c(59);var v=function(e){var t=e.id,c=e.tittle,a=e.image,s=e.price,i=e.rating,r=m(),o=Object(l.a)(r,2),j=(o[0].basket,o[1]);return Object(n.jsxs)("div",{className:"product",children:[Object(n.jsxs)("div",{className:"product_info",children:[Object(n.jsx)("p",{children:c}),Object(n.jsxs)("p",{className:"product_price",children:[Object(n.jsx)("small",{children:"$"}),Object(n.jsx)("strong",{children:s})]}),Object(n.jsx)("div",{className:"product_rating",children:Array(i).fill().map((function(e,t){return Object(n.jsx)("p",{children:"@"})}))})]}),Object(n.jsx)("img",{src:a,alt:""}),Object(n.jsx)("button",{onClick:function(){j({type:"ADD_TO_BASKET",item:{id:t,tittle:c,image:a,price:s,rating:i}})},children:"Add to Basket"})]})};var _=function(){return Object(n.jsx)("div",{className:"home",children:Object(n.jsxs)("div",{className:"home_container",children:[Object(n.jsx)("img",{className:"home_image",src:"https://cdn2.tendercuts.in/banners/20200918075600.jpg",alt:""}),Object(n.jsxs)("div",{className:"home_row",children:[Object(n.jsx)(v,{id:"24",tittle:"Chicken Curry Cut (Skin On)",price:29.99,image:"https://cdn1.tendercuts.in/media/catalog/product//c/h/chk_whl_skin_on-base.jpg",rating:5}),Object(n.jsx)(v,{id:"25",tittle:"Chicken Drumsticks",price:29.99,image:"https://cdn1.tendercuts.in/media/catalog/product//c/h/chk_drm_skin_off-base.jpg",rating:5}),Object(n.jsx)(v,{id:"26",tittle:"Japanese Quail (Kaadai)",price:29.99,image:"https://cdn1.tendercuts.in/media/catalog/product//c/h/chk_jap_kaadai-base.jpg",rating:5})]}),Object(n.jsx)("div",{className:"home_row",children:Object(n.jsx)(v,{id:"27",tittle:"Prawn Medium Deshelled (1 Kg)",price:29.99,image:"https://cdn1.tendercuts.in/media/catalog/product//p/r/pr_sf_prawn.jpg",rating:5})})]})})},k=(c(60),c(9));var N=function(){var e=Object(k.f)(),t=Object(a.useState)(""),c=Object(l.a)(t,2),s=c[0],i=c[1],r=Object(a.useState)(""),o=Object(l.a)(r,2),d=o[0],u=o[1];return Object(n.jsxs)("div",{className:"login",children:[Object(n.jsx)(j.b,{to:"/",children:Object(n.jsx)("img",{className:"login_logo",src:"http://onlinemeatshop.in/image/catalog/blog/chicken%20(3).png"})}),Object(n.jsxs)("div",{className:"login_container",children:[Object(n.jsx)("h1",{children:"sign in"}),Object(n.jsxs)("form",{children:[Object(n.jsx)("h5",{children:"E-mail"}),Object(n.jsx)("input",{type:"text",value:s,onChange:function(e){return i(e.target.value)}}),Object(n.jsx)("h5",{children:"Password"}),Object(n.jsx)("input",{type:"password",value:d,onChange:function(e){return u(e.target.value)}}),Object(n.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),g.signInWithEmailAndPassword(s,d).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login_sigInButton",children:"Sign In"})]}),Object(n.jsx)("p",{children:"By continuing, you agree to Amazon's Conditions of Use and Privacy Notice."}),Object(n.jsx)("button",{onClick:function(t){t.preventDefault(),g.createUserWithEmailAndPassword(s,d).then((function(t){t&&e.push("/"),console.log(t)})).catch((function(e){return alert(e.message)}))},className:"login_registerButton",children:"Create your amazon account"})]})]})},S=(c(61),c(62),c(40)),y=c.n(S),E=c(31),C=c(21),w=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},T=function(e,t){switch(console.log(t),t.type){case"ADD_TO_BASKET":return Object(C.a)(Object(C.a)({},e),{},{basket:[].concat(Object(E.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var c=e.basket.findIndex((function(e){return e.id===t.id})),n=Object(E.a)(e.basket);return c>=0?n.splice(c,1):console.warn("Cant remove product (id:".concat(t.id,")as Its not in basket")),Object(C.a)(Object(C.a)({},e),{},{basket:n});case"SET_USER":return Object(C.a)(Object(C.a)({},e),{},{user:t.user});default:return e}};var I=function(){var e=m(),t=Object(l.a)(e,2),c=t[0].basket;return t[1],Object(n.jsxs)("div",{className:"subtotal",children:[Object(n.jsx)(y.a,{renderText:function(e){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("p",{children:["Subtotal (",null===c||void 0===c?void 0:c.length," items): ",Object(n.jsx)("strong",{children:e})]}),Object(n.jsxs)("small",{className:"subtotal_gift",children:[Object(n.jsx)("input",{type:"checkbox"}),"This order contain a gift"]})]})},decimalScale:2,value:w(c),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(n.jsx)("button",{children:"Proceed to Checkout"})]})};c(64);var A=function(e){var t=e.id,c=e.image,a=e.tittle,s=e.price,i=e.rating,r=m(),o=Object(l.a)(r,2),j=(o[0].basket,o[1]);return Object(n.jsxs)("div",{className:"checkoutProduct",children:[Object(n.jsx)("img",{className:"checkoutProduct_image",src:c}),Object(n.jsxs)("div",{className:"checkoutProduct_info",children:[Object(n.jsx)("p",{className:"checkoutProduct_title",children:a}),Object(n.jsxs)("p",{className:"checkoutProduct_price",children:[Object(n.jsx)("small",{children:"$"}),Object(n.jsx)("strong",{children:s})]}),Object(n.jsx)("div",{className:"checkoutProduct_rating",children:Array(i).fill().map((function(e,t){return Object(n.jsx)("p",{children:"@"})}))}),Object(n.jsx)("button",{onClick:function(){j({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove from Basket"})]})]})};var B=function(){var e=m(),t=Object(l.a)(e,2),c=t[0],a=c.basket,s=c.user;return t[1],Object(n.jsxs)("div",{className:"checkout",children:[Object(n.jsxs)("div",{className:"checkout_left",children:[Object(n.jsx)("img",{className:"checkout_ad",src:"https://d2407na1z3fc0t.cloudfront.net/Slider/banner_5fecb997f3c8a?format=webp",alt:""}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("h3",{children:["Hello,",null===s||void 0===s?void 0:s.email]}),Object(n.jsx)("h2",{className:"checkout_title",children:"Your shopping Basket"}),a.map((function(e){return Object(n.jsx)(A,{id:e.id,tittle:e.tittle,image:e.image,price:e.price,rating:e.rating})}))]})]}),Object(n.jsxs)("div",{className:"checkout_right",children:[Object(n.jsx)(I,{}),Object(n.jsx)("h2",{children:"The subtotal with go here"})]})]})};var P=function(){var e=m(),t=Object(l.a)(e,2);Object(o.a)(t[0]);var c=t[1];return Object(a.useEffect)((function(){g.onAuthStateChanged((function(e){console.log("THE USER IS >>> ",e),c(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(n.jsx)(j.a,{children:Object(n.jsx)("div",{className:"app",children:Object(n.jsxs)(k.c,{children:[Object(n.jsx)(k.a,{path:"/login",children:Object(n.jsx)(N,{})}),Object(n.jsxs)(k.a,{path:"/checkout",children:[Object(n.jsx)(f,{}),Object(n.jsx)(B,{})]}),Object(n.jsxs)(k.a,{path:"/",children:[Object(n.jsx)(f,{}),Object(n.jsx)(_,{})]})]})})})},D=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,78)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(p,{initialState:{basket:[],user:null},reducer:T,children:Object(n.jsx)(P,{})})}),document.getElementById("root")),D()}},[[66,1,2]]]);
//# sourceMappingURL=main.166f064e.chunk.js.map