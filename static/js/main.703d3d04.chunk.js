(this.webpackJsonptask_tagsoft=this.webpackJsonptask_tagsoft||[]).push([[0],{235:function(e,t,a){e.exports=a(426)},413:function(e,t,a){},414:function(e,t,a){},426:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),o=a.n(c),l=a(36),i=a(35),s=a(56),u=a(199),m=a(68),p=a.n(m),d=function(){var e;return p.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.awrap(fetch("https://rickandmortyapi.com/api/character/"));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}))},h=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_LOADING":return!0;case"HANDLE_ERROR":case"HANDLE_SUCCESS":return!1;default:return e}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"HANDLE_ERROR":return!0;default:return e}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"HANDLE_SUCCESS":return t.characters;default:return e}},b=function(e){return e.isLoading},g=function(e){return e.loadingError},v=function(e){return e.characters},_=function(e){return v(e).length},N=Object(s.c)({characters:E,isLoading:h,loadingError:f}),k=Object(s.d)(N,{characters:[],isLoading:!1,loadingError:!1},Object(s.a)(u.a)),y=a(200),O=a(201),C=a(224),j=a(202),w=a(225),x=a(434),S=a(203),A=a.n(S),D=a(38),L=a(433),R={id:"id",name:"name",status:"status",gender:"gender"},I=a(94),H=a(3),M=a.n(H),F=a(431),T=a(222),U=function(e){var t=e.character,a=e.setModalValue,n=e.open;return r.a.createElement(F.a,{onClose:function(){return a(!1)},open:n},r.a.createElement(F.a.Header,null,"Add event"),r.a.createElement(F.a.Content,{image:!0},r.a.createElement(T.a,{wrapped:!0,size:"medium",src:t.image}),r.a.createElement("h1",null,t.name),r.a.createElement("div",null,"SPECIES:".concat(t.species))))},z=function(e){var t=e.character,a=Object(n.useState)(!1),c=Object(I.a)(a,2),o=c[0],l=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a.Row,{className:"table__row",onClick:function(){l(!0)}},Object.keys(R).map((function(e){return r.a.createElement(L.a.Cell,{className:M()({table__cell:!0,table__cell_desc:"gender"===e}),key:e},t[e])})),r.a.createElement(U,{character:t,open:o,setModalValue:l})))},B=Object(l.b)((function(e){return{characters:v(e)}}),null)(Object(D.d)((function(e){var t=e.characters,a=e.location,n=t.sort((function(e,t){return e.name.localeCompare(t.name)})).filter((function(e,t){return Math.floor(t/5)+1===+a.pathname.split("/")[1]}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{celled:!0},r.a.createElement(L.a.Header,null,r.a.createElement(L.a.Row,null,Object.keys(R).map((function(e){return r.a.createElement(L.a.HeaderCell,{key:R[e],className:"table__head-cell"},R[e])})))),r.a.createElement(L.a.Body,null,n.map((function(e){return r.a.createElement(z,{key:e.id,character:e})})))))}))),G=a(223),J=Object(l.b)((function(e){return{charactersCount:_(e)}}),null)(Object(D.d)((function(e){var t=e.charactersCount,a=+e.location.pathname.split("/")[1],n=Math.ceil(t/5),c=5*a-4,o=5*a>t?t:5*a;return r.a.createElement("footer",{className:"footer"},r.a.createElement("ul",{className:"pagination"},r.a.createElement(i.b,{to:"".concat(a-1),replace:!0,className:M()({"pagination__button pagination__button_prev":!0,pagination__button_disabled:1===a}),onClick:function(e){1===a&&e.preventDefault()}},"Previous"),Object(G.a)(Array(n).keys()).map((function(e){return r.a.createElement("li",{key:e},r.a.createElement(i.b,{to:"".concat(e+1),replace:!0,className:"pagination__button",activeClassName:"pagination__button_active"},e+1))})),r.a.createElement(i.b,{to:"".concat(a+1),replace:!0,className:M()({pagination__button:!0,pagination__button_disabled:a===n}),onClick:function(e){a===n&&e.preventDefault()}},"Next")),r.a.createElement("p",null,"Showing ".concat(c," to\n        ").concat(o," of ").concat(t," entries")))}))),P=(a(413),a(58)),V=(a(414),a(59));function $(){var e=Object(P.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  font-weight: bold;\n  font-size: 12px;\n  margin: 14px 0 0 -10px;\n"]);return $=function(){return e},e}function q(){var e=Object(P.a)(["\n  width: ","%;\n  height: 100%;\n  background-color: #6bccf9;\n  transition: width 0.5s ease-in-out;\n"]);return q=function(){return e},e}function K(){var e=Object(P.a)(["\n  position: relative;\n  width: 230px;\n  height: 15px;\n  margin-bottom: 13px;\n  background-color: white;\n  border: 1px solid #6bccf9; \n"]);return K=function(){return e},e}var Q=V.a.div(K()),W=V.a.div(q(),(function(e){return e.percentage})),X=V.a.div($()),Y=function(e){var t,a,n,c=e.percentage;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,null,r.a.createElement(W,{percentage:(t=0,a=c,n=100,Math.min(Math.max(t,a),n))})),r.a.createElement(X,null,"".concat(c,"%")))};function Z(){var e=Object(P.a)(["\n  display: flex;\n  flex-direction: row;\n"]);return Z=function(){return e},e}var ee=V.a.div(Z()),te=function(){var e=Object(n.useState)(10),t=Object(I.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"box-number"},"25"),r.a.createElement("div",{className:"block"},r.a.createElement("div",{className:"block__heading"},"\u041e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u043f\u0440\u043e\u0434\u0430\u0436\u0430\u043c"),r.a.createElement("div",{className:"block__text"},"\u0412\u044b \u0441\u0434\u0435\u043b\u0430\u043b\u0438 13 \u043f\u0440\u043e\u0434\u0430\u0436 \u0438 \u0437\u0430\u0440\u0430\u0431\u043e\u0442\u0430\u043b\u0438:"),r.a.createElement("div",{className:"block__price"},"$ 2 000"),r.a.createElement("div",{className:"wrapper__progress-bar"},r.a.createElement("div",{className:"progress-bar"},r.a.createElement("div",{className:"progress-bar__heading"},"\u041c\u0435\u0441\u044f\u0447\u043d\u044b\u0439 \u043f\u043b\u0430\u043d \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d \u043d\u0430"),r.a.createElement(ee,null,r.a.createElement(Y,{percentage:a})),r.a.createElement("div",{className:"progress-bar__container"},r.a.createElement("button",{className:"progress-bar__button",type:"button",onClick:function(){return function(e,t){var a=e+Math.random()*(t+1-e);c(Math.floor(a))}(10,100)}},"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"),r.a.createElement("p",{className:"progress-bar__text"},"\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c 8 \u0434\u043d\u0435\u0439"))))))},ae=function(e){function t(){var e,a;Object(y.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(C.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={activeItem:"home"},a.handleItemClick=function(e,t){var n=t.name;return a.setState({activeItem:n})},a}return Object(w.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.fetchCharacters)()}},{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.history,n=t.location;2===n.pathname.length&&/[1-4]/.test(n.pathname.slice(-1))||a.push({pathname:"/1"})}},{key:"render",value:function(){var e=this.state.activeItem,t=this.props,a=t.isLoading,n=t.loadingError,c=t.charactersCount;return a?r.a.createElement(A.a,{className:"spinner",type:"ThreeDots",color:"#324960"}):n?r.a.createElement("p",{className:"error-message"},"Sorry, something went wrong."):r.a.createElement("div",null,r.a.createElement(x.a,{pointing:!0},r.a.createElement(x.a.Item,{name:"home",active:"home"===e,onClick:this.handleItemClick}),r.a.createElement(x.a.Item,{name:"messages",active:"messages"===e,onClick:this.handleItemClick})),r.a.createElement("div",null,"home"===e&&c>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement(B,null),r.a.createElement(J,null)),"messages"===e&&r.a.createElement(r.a.Fragment,null,r.a.createElement(te,null))))}}]),t}(r.a.Component),ne=Object(l.b)((function(e){return{isLoading:b(e),loadingError:g(e),charactersCount:_(e)}}),{fetchCharacters:function(){return function(e){return p.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:e({type:"START_LOADING"});try{d().then((function(t){var a=t.results;e({type:"HANDLE_SUCCESS",characters:a})}))}catch(a){e({type:"HANDLE_ERROR"})}case 2:case"end":return t.stop()}}))}}})(Object(D.d)(ae));o.a.render(r.a.createElement(l.a,{store:k},r.a.createElement(i.a,null,r.a.createElement(ne,null))),document.getElementById("root"))}},[[235,1,2]]]);
//# sourceMappingURL=main.703d3d04.chunk.js.map