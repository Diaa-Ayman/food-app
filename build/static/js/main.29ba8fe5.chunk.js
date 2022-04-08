(this["webpackJsonpreact-the-complete-guide"]=this["webpackJsonpreact-the-complete-guide"]||[]).push([[0],[,,function(e,t,n){e.exports={"order-card":"OrderForm_order-card__ddTkq","order-form":"OrderForm_order-form__2s09p",input:"OrderForm_input__11ogS",orderBtn:"OrderForm_orderBtn__2SqnO",invalid:"OrderForm_invalid__3naIX","invalid-message":"OrderForm_invalid-message__1pSo_"}},,,function(e,t,n){e.exports={cart:"Cart_cart__Qkovm",total:"Cart_total__2IEo-",actions:"Cart_actions__sLS-0","button--alt":"Cart_button--alt__3Ut9U",button:"Cart_button__26Rf6",scroll:"Cart_scroll__1shAa"}},,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1Vy8Z",summary:"CartItem_summary__M08Wv",price:"CartItem_price__1gJM_",amount:"CartItem_amount__1DbEV",actions:"CartItem_actions__-oBnr"}},,,function(e,t,n){e.exports={meal:"MealItem_meal__1doai",description:"MealItem_description__dx4NG",price:"MealItem_price__uzp2T"}},,,function(e,t,n){e.exports={backdrop:"Modal_backdrop__x3IBK",modal:"Modal_modal__1cS-O","slide-down":"Modal_slide-down__ixTMz"}},function(e,t,n){e.exports={button:"HeaderCartButton_button__1rvYT",icon:"HeaderCartButton_icon__3ROYJ",badge:"HeaderCartButton_badge__2cVOK",bump:"HeaderCartButton_bump__26Wrj"}},function(e,t,n){e.exports={meals:"meals_meals__3M9WW",loading:"meals_loading__2PKzO",error:"meals_error__3AvFA"}},,function(e,t,n){e.exports={header:"Header_header__2mr8B","main-image":"Header_main-image__5JTmD",signIn:"Header_signIn__2DI13"}},function(e,t,n){e.exports={form:"MealItemForm_form__1fO40","meal-form-input":"MealItemForm_meal-form-input__39CAb"}},,function(e,t,n){e.exports={card:"Card_card__12-2Q"}},function(e,t,n){e.exports={input:"Input_input__3Qnof","ui-input":"Input_ui-input__248ht"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__8JIvg"}},function(e,t,n){e.exports={done:"OrderDone_done__16OoC"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(8),i=n.n(c),o=(n(28),n(3)),s=n(6),l=n.n(s),d=n(12),u=n(4),m=n(20),j=n.n(m),b=n(0),O=function(e){var t="".concat(j.a.card," ").concat(e.className);return Object(b.jsx)("div",{className:t,children:e.children})},f=n(7),p=n.n(f),x=function(e){var t="$".concat(e.price.toFixed(2));return Object(b.jsxs)("li",{className:p.a["cart-item"],children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:e.name}),Object(b.jsxs)("div",{className:p.a.summary,children:[Object(b.jsx)("span",{className:p.a.price,children:t}),Object(b.jsxs)("span",{className:p.a.amount,children:["x ",e.amount]})]})]}),Object(b.jsxs)("div",{className:p.a.actions,children:[Object(b.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(b.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},h=n(5),_=n.n(h),v=n(13),N=n.n(v),C=function(e){return Object(b.jsx)("div",{className:N.a.backdrop,onClick:e.onClose})},g=function(e){return Object(b.jsx)("div",{className:N.a.modal,children:Object(b.jsx)("div",{className:N.a.content,children:e.children})})},A=function(e){var t=document.getElementById("overlay");return Object(b.jsxs)(a.Fragment,{children:[i.a.createPortal(Object(b.jsx)(C,{onClose:e.onClose}),t),i.a.createPortal(Object(b.jsx)(g,{children:e.children}),t)]})},y=r.a.createContext({items:[],totalAmount:0,orderDone:!1,makeOrderDone:function(){},addItem:function(e){},removeItem:function(e){},clear:function(){}}),I=n(2),D=n.n(I),S=n(21),w=n.n(S),k=r.a.forwardRef((function(e,t){return Object(b.jsxs)("div",{className:"".concat(w.a["ui-input"]," ").concat(e.className),children:[Object(b.jsxs)("label",{htmlFor:e.id,children:[e.label,":"]}),Object(b.jsx)("input",Object(u.a)(Object(u.a)({ref:t},e.input),{},{onChange:e.getValue}))]})})),E=function(e){return""===e.trim()},F=function(e){var t=Object(a.useState)({validName:!0,validAddress:!0,validPhone:!0}),n=Object(o.a)(t,2),r=n[0],c=n[1],i=Object(a.useRef)(),s=Object(a.useRef)(),l=Object(a.useRef)(),d=r.validName?D.a.input:"".concat(D.a.input," ").concat(D.a.invalid),u=r.validAddress?D.a.input:"".concat(D.a.input," ").concat(D.a.invalid),m=r.validAddress?D.a.input:"".concat(D.a.input," ").concat(D.a.invalid);return Object(b.jsx)(O,{className:D.a["order-card"],children:Object(b.jsxs)("form",{className:D.a["order-form"],onSubmit:function(t){t.preventDefault();var n=i.current.value,a=s.current.value,r=l.current.value,o=!E(n),d=!E(a),u=5===r.trim().length;c({validName:o,validAddress:d,validPhone:u}),o&&d&&u&&e.onConfirm({name:n,address:a,phone:r})},children:[Object(b.jsx)(k,{ref:i,label:"name",id:"name",input:{type:"text"},className:d}),!r.validName&&Object(b.jsx)("p",{className:D.a["invalid-message"],children:"Please Enter your name!"}),Object(b.jsx)(k,{ref:s,label:"address",id:"address",input:{type:"text"},className:u}),!r.validAddress&&Object(b.jsx)("p",{className:D.a["invalid-message"],children:"Please Enter your address!"}),Object(b.jsx)(k,{ref:l,label:"phone-number",id:"phoneNumber",input:{type:"tel"},className:m}),!r.validPhone&&Object(b.jsx)("p",{className:D.a["invalid-message"],children:"not a phone number!"}),Object(b.jsx)("button",{className:D.a.orderBtn,children:"Submit"})]})})},M=function(e){var t=Object(a.useContext)(y),n=t.items,r=t.totalAmount,c=Object(a.useState)(!1),i=Object(o.a)(c,2),s=i[0],m=i[1],j=Object(a.useState)(!1),O=Object(o.a)(j,2),f=O[0],p=O[1],h="$".concat(r.toFixed(2)),v=n.length>0,N=function(e){t.addItem(Object(u.a)(Object(u.a)({},e),{},{amount:1}))},C=function(e){t.removeItem(e)},g=function(){var e=Object(d.a)(l.a.mark((function e(n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),a=t.items.map((function(e){var t=e.title;return[e.amount,t]})),e.next=4,fetch("https://againredux-default-rtdb.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({user:n,order:a})});case 4:e.sent,m(!1),p(!0),t.clear();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=Object(b.jsx)("ul",{className:_.a.cart,children:n.map((function(e){return Object(b.jsx)(x,{name:e.title,amount:e.amount,price:e.price,onAdd:N.bind(null,e),onRemove:C.bind(null,e.id)},e.id)}))}),D=Object(b.jsx)(a.Fragment,{children:Object(b.jsxs)("div",{className:_.a.scroll,children:[I,Object(b.jsxs)("div",{className:_.a.total,children:[Object(b.jsx)("span",{children:"Total Amount"}),Object(b.jsx)("span",{children:h})]}),Object(b.jsx)(F,{onConfirm:g}),Object(b.jsxs)("div",{className:_.a.actions,children:[Object(b.jsx)("button",{className:_.a["button--alt"],onClick:e.onClose,children:"Close"}),v&&Object(b.jsx)("button",{className:_.a.button,children:"Order"})]})]})}),S=Object(b.jsxs)(a.Fragment,{children:[Object(b.jsx)("div",{children:Object(b.jsx)("p",{children:"Your order is sent successfully. You will reseve the order after 30 min from now"})}),Object(b.jsx)("div",{className:_.a.actions,children:Object(b.jsx)("button",{className:_.a["button--alt"],onClick:e.onClose,children:"Close"})})]}),w=Object(b.jsx)("p",{children:"ON SENDING ORDER...."});return Object(b.jsxs)(A,{onClose:e.onClose,children:[s&&!f&&w,f&&S,!s&&!f&&D]})},R=function(){return Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(b.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},B=n(14),T=n.n(B),H=function(e){var t=Object(a.useContext)(y).items.reduce((function(e,t){return e+t.amount}),0);return Object(b.jsxs)("button",{className:T.a.button,onClick:e.onClick,children:[Object(b.jsx)("span",{className:T.a.icon,children:Object(b.jsx)(R,{})}),Object(b.jsx)("span",{children:"Your cart"}),Object(b.jsx)("span",{className:T.a.badge,children:t})]})},P=n.p+"static/media/meals.2971f633.jpg",Y=n(17),J=n.n(Y),V=function(e){return Object(b.jsxs)(a.Fragment,{children:[Object(b.jsxs)("header",{className:J.a.header,children:[Object(b.jsx)("h1",{children:"FoodMood"}),Object(b.jsx)(H,{onClick:e.onShow})]}),Object(b.jsx)("div",{className:J.a["main-image"],children:Object(b.jsx)("img",{src:P,alt:"A table full of delicious food!"})})]})},z=n(18),L=n.n(z),U=function(e){var t=Object(a.useRef)();return Object(b.jsxs)("form",{className:L.a.form,onSubmit:function(n){n.preventDefault();var a=+t.current.value;e.onAddToCart(a)},children:[Object(b.jsx)(k,{className:L.a["meal-form-input"],ref:t,label:"Amount",input:{id:"amount",type:"number",min:1,max:5,step:1,defaultValue:1}}),Object(b.jsx)("button",{children:"+ Add"})]})},W=n(10),q=n.n(W),G=function(e){var t=e.meal,n=t.id,r=t.title,c=t.desc,i=t.price,o=Object(a.useContext)(y);return Object(b.jsxs)("li",{className:q.a.meal,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{className:q.a.name,children:r}),Object(b.jsx)("p",{className:q.a.description,children:c}),Object(b.jsxs)("p",{className:q.a.price,children:["$",i.toFixed(2)]})]}),Object(b.jsx)("div",{children:Object(b.jsx)(U,{onAddToCart:function(e){o.addItem({id:n,title:r,desc:c,price:i,amount:e})}})})]})},K=n(22),Q=n.n(K),$=function(){return Object(b.jsxs)("section",{className:Q.a.summary,children:[Object(b.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(b.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(b.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},X=n(15),Z=n.n(X),ee=function(e){var t=Object(a.useState)([]),n=Object(o.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(!0),s=Object(o.a)(i,2),u=s[0],m=s[1],j=Object(a.useState)(),f=Object(o.a)(j,2),p=f[0],x=f[1];if(Object(a.useEffect)((function(){var e=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://new-c93da-default-rtdb.firebaseio.com/meals.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Something went Wrong!");case 5:return e.next=7,t.json();case 7:for(r in n=e.sent,a=[],n)a.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});c(a),m(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){m(!1),x(e.message)}))}),[]),u)return Object(b.jsx)("section",{className:Z.a.loading,children:Object(b.jsx)("h2",{children:" LOADING....."})});if(p)return Object(b.jsx)("section",{className:Z.a.error,children:Object(b.jsx)("p",{children:p})});var h=Object(b.jsx)("ul",{children:r.map((function(e){return Object(b.jsx)(G,{meal:{id:e.id,title:e.name,desc:e.description,price:e.price}},e.id)}))});return Object(b.jsxs)("div",{children:[Object(b.jsx)($,{}),Object(b.jsx)("section",{className:Z.a.meals,children:Object(b.jsx)(O,{children:h})})]})},te=n(23),ne=n.n(te),ae=function(){return Object(b.jsx)("div",{className:ne.a.done,children:Object(b.jsx)("h4",{children:"YOUR ORDER IS SENT SUCCESSFULLY!"})})},re=n(19),ce={items:[],totalAmount:0,orderDone:!1},ie=function(e,t){if("ADD"===t.type){var n,a=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[a],c=e.totalAmount+t.item.amount*t.item.price;if(r){var i=Object(u.a)(Object(u.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(re.a)(e.items))[a]=i}else n=e.items.concat(t.item);return{items:n,totalAmount:c,orderDone:e.orderDone}}if("REMOVE"===t.type){var o,s=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[s],d=e.totalAmount-l.price;if(1===l.amount)o=e.items.filter((function(e){return e.id!==t.id}));else{var m=Object(u.a)(Object(u.a)({},l),{},{amount:l.amount-1});(o=Object(re.a)(e.items))[s]=m}return{items:o,totalAmount:d,orderDone:e.orderDone}}if("DONE"===t.type){return{items:e.items,totalAmount:e.totalAmount,orderDone:!0}}return t.type,ce},oe=function(e){var t=Object(a.useReducer)(ie,ce),n=Object(o.a)(t,2),r=n[0],c=n[1],i={items:r.items,totalAmount:r.totalAmount,orderDone:r.orderDone,makeOrderDone:function(){c({type:"DONE"})},addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})},clear:function(){c({type:"CLEAR"})}};return Object(b.jsx)(y.Provider,{value:i,children:e.children})};var se=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),i=Object(o.a)(c,2),s=i[0],l=i[1];return Object(a.useEffect)((function(){var e=setTimeout((function(){r(!1)}),2500);return function(){clearTimeout(e)}}),[n]),Object(b.jsxs)(oe,{children:[n&&Object(b.jsx)(ae,{}),s&&Object(b.jsx)(M,{onClose:function(){l(!1)},onDone:function(){r(!0)}}),Object(b.jsx)(V,{onShow:function(){l(!0)}}),Object(b.jsx)(ee,{})]})};i.a.render(Object(b.jsx)(se,{}),document.getElementById("root"))}],[[31,1,2]]]);
//# sourceMappingURL=main.29ba8fe5.chunk.js.map