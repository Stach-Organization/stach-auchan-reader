(this["webpackJsonpstach-auchan-reader"]=this["webpackJsonpstach-auchan-reader"]||[]).push([[0],{10:function(e,t,c){},11:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),r=c.n(n),s=c(4),i=c.n(s),l=(c(10),c(2)),o=(c(11),function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("header",{children:Object(a.jsx)("nav",{className:"flex items-center justify-between flex-wrap bg-gray-800 p-6 w-full z-10 top-0",children:Object(a.jsx)("div",{className:"flex items-center flex-shrink-0 text-white mr-6",children:Object(a.jsx)("a",{className:"text-white no-underline hover:text-white hover:no-underline",href:"#",children:Object(a.jsx)("span",{className:"text-2xl pl-2",children:"Stach House Auchan"})})})})})})}),d=function(e){var t=e.type,c=void 0===t?"checkbox":t,n=e.name,r=e.checked,s=void 0!==r&&r,i=e.onChange;return Object(a.jsx)("input",{type:c,name:n,checked:s,onChange:i})},x=function(e){var t=e.name,c=e.sum;return Object(a.jsx)("div",{className:"relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg w-64 mr-2",children:Object(a.jsx)("div",{className:"flex-auto p-4",children:Object(a.jsx)("div",{className:"flex flex-wrap",children:Object(a.jsxs)("div",{className:"relative w-full pr-4 max-w-full flex-grow flex-1",children:[Object(a.jsx)("h5",{className:"text-gray-500 uppercase font-bold text-xs",children:t}),Object(a.jsxs)("span",{className:"font-semibold text-xl text-gray-800",children:[c,"\u20ac"]})]})})})})},u=["Lucas","Quentin","Geoffrey"],j=function(e){var t=e.data,c=Object(n.useState)(0),r=Object(l.a)(c,2),s=r[0],i=r[1],o=Object(n.useState)(u.map((function(e){return{name:e,total:0}}))),j=Object(l.a)(o,2),m=j[0],b=j[1],h=Object(n.useState)(new Map),p=Object(l.a)(h,2),f=p[0],O=p[1];Object(n.useEffect)((function(){var e=0;t.data.map((function(t,c){var a=t.prix;e+=parseFloat(a)})),i(Number(e.toFixed(2)))}),[]);var g=Object(n.useCallback)((function(e){var t=e.target,c=t.name,a=t.checked;O((function(e){var t=new Map(e);return t.set(c,a),a||t.set("all-".concat(w(c)),a),S(t,w(c))===u.length&&t.set("all-".concat(w(c)),a),N(t),t}))}),[]),v=Object(n.useCallback)((function(e){var t=e.target,c=t.name,a=t.checked;O((function(e){var t=new Map(e);return u.map((function(e){t.set("".concat(e,"-").concat(w(c)),a)})),t.set(c,a),N(t),t}))}),[]),w=function(e){return e.split("-")[1]},N=function(e){var t=u.map((function(t){return{name:t,total:y(e,t)}}));b(t)},y=function(e,c){var a=0;return t.data.map((function(t,n){e.get("".concat(c,"-").concat(n))&&(a+=k(e,n))})),Number(a.toFixed(2))},k=function(e,c){var a=parseFloat(t.data[c].prix),n=S(e,c);return 0===n?0:a/n},S=function(e,t){var c=0;return u.map((function(a){e.get("".concat(a,"-").concat(t))&&c++})),c};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"flex flex-col",children:Object(a.jsx)("div",{className:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:Object(a.jsx)("div",{className:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",children:Object(a.jsx)("div",{className:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg",children:Object(a.jsxs)("table",{className:"min-w-full divide-y divide-gray-200 table-auto",children:[Object(a.jsx)("thead",{className:"bg-gray-50",children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{scope:"col",className:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Nom de l'article"}),Object(a.jsx)("th",{scope:"col",className:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Prix"}),u.map((function(e){return Object(a.jsx)("th",{scope:"col",className:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider",children:e})})),Object(a.jsx)("th",{scope:"col",className:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Tous"})]})}),Object(a.jsx)("tbody",{className:"bg-white divide-y divide-gray-200",children:t.data.map((function(e,t){var c=e.name,n=e.prix;return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:Object(a.jsx)("p",{className:"text-sm text-gray-900 text-left",children:c})}),Object(a.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:Object(a.jsx)("p",{className:"text-sm text-gray-900 text-center",children:n})}),u.map((function(e){return Object(a.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:Object(a.jsx)(d,{name:"".concat(e,"-").concat(t),checked:f.get("".concat(e,"-").concat(t)),onChange:g})})})),Object(a.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:Object(a.jsx)(d,{name:"all-".concat(t),checked:f.get("all-".concat(t)),onChange:v})})]},t)}))})]})})})})}),Object(a.jsx)("div",{className:"flex mt-10 justify-center",children:m.map((function(e){var t=e.name,c=e.total;return Object(a.jsx)(x,{name:t,sum:c})}))}),Object(a.jsxs)("div",{className:"flex mt-10 justify-center mb-10",children:[Object(a.jsx)(x,{name:"Total",sum:s}),Object(a.jsx)(x,{name:"V\xe9rification Total",sum:m.reduce((function(e,t){return Number((e+t.total).toFixed(2))}),0)})]})]})};var m=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(!1),i=Object(l.a)(s,2),d=i[0],x=i[1];return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(o,{}),Object(a.jsxs)("div",{children:[!d&&Object(a.jsxs)("form",{onSubmit:function(e){(function(e){try{JSON.parse(e)}catch(t){return!1}return!0})(c)&&x(!0),e.preventDefault()},children:[Object(a.jsx)("label",{children:"Code JSON :"}),Object(a.jsx)("textarea",{value:c,onChange:function(e){r(e.target.value)},className:"w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none",rows:"4"}),Object(a.jsx)("input",{className:"py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none",type:"submit",value:"Submit"})]}),d&&Object(a.jsx)(j,{data:JSON.parse(c)})]})]})},b=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(m,{})}),document.getElementById("root")),b()}},[[12,1,2]]]);
//# sourceMappingURL=main.d63f53c4.chunk.js.map