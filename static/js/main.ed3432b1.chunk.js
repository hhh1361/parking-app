(this["webpackJsonpparking-app"]=this["webpackJsonpparking-app"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a(37)},,,,,function(e,t,a){},,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),c=a.n(r),o=a(3),l=a.n(o),i=(a(18),a(5)),s=a(2),d=a(4);function u(e,t,a,n){console.log("".concat(e,". Loading start."));var r=Date.now(),c=new URL("http://80.249.84.47:11000/");fetch(c+t,{method:"GET",headers:new Headers({Accept:"application/json","Content-Type":"application/json"})}).then((function(e){return e.json()})).then((function(t){a(t,n),console.log("".concat(e,". Loading completed in  ").concat((Date.now()-r)/1e3," seconds."))}),(function(t){console.log("Error: ",t),console.log("".concat(e,". Loading completed in  ").concat((Date.now()-r)/1e3," seconds."))}))}var m=Object(s.b)((function(e){return{}}),(function(e){return{setInput:function(t){e({type:"SET_INPUT",payload:t})},setModels:function(t,a){e({type:"SET_CAR_MODELS",payload:t}),e({type:"IS_LOADING",payload:a})},setLoading:function(){e({type:"IS_LOADING",payload:!0})}}}))((function(e){var t=e.field,a=e.header,r=e.options,o=e.input,l=e.setInput,i=e.setModels,s=e.setLoading,m=function(e){var a=e.target.classList[1],r=e.target.innerHTML,c=Object(n.a)(Object(n.a)({},o),{},Object(d.a)({},t,{id:a,name:r}));l(c),"car_brand"===t&&(s(),function(e,t,a){u("All car models","api/cars/brands/".concat(a,"/"),e,t)}(i,!1,a))};return c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("button",{className:"btn btn-outline-secondary dropdown-toggle",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},o[t].name||a),c.a.createElement("div",{className:"dropdown-menu"},r.map((function(e){return c.a.createElement("a",{className:"dropdown-item ".concat(e.id),href:"/#",onClick:m,key:e.id},e.name)}))))})),p=a(9),f=a.n(p),b=a(12);function y(e,t,a,n){return E.apply(this,arguments)}function E(){return(E=Object(b.a)(f.a.mark((function e(t,a,n,r){var c,o,l,i,s,d,u;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("All cars. Loading start."),c=Date.now(),o=new URL("http://80.249.84.47:11000/"),e.next=5,Promise.all([fetch(o+t,{method:"GET",headers:new Headers({Accept:"application/json","Content-Type":"application/json"})}),fetch(o+a,{method:"GET",headers:new Headers({Accept:"application/json","Content-Type":"application/json"})})]).then((function(e){return console.log("All cars. Loading completed in  ".concat((Date.now()-c)/1e3," seconds.")),e.map((function(e){return e.json()}))}));case 5:return l=e.sent,e.next=8,l[0].then((function(e){return e}));case 8:return i=e.sent,e.next=11,l[1].then((function(e){return e}));case 11:s=e.sent,i.length&&s.length?i[0].time_in?(u=i,d=s):(u=s,d=i):d=i.length?i:s,u&&d.forEach((function(e){u.some((function(t){return t.car===e.id}))?e.car_territory=!0:e.car_territory=!1})),n(d,r);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e,t){y("api/cars/","api/stat/here/",e,t)}function g(e,t,a,n,r,c){console.log("Loading start.");var o=Date.now(),l=new URL("http://80.249.84.47:11000/api/cars/add/");fetch(l+a,{method:t,headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(t){if(console.log("Loading completed in  ".concat((Date.now()-o)/1e3," seconds.")),"api/stat/add/"===a){for(var n=0;n<r.length;n++)if(r[n].id===t.car){r[n].car_territory=!r[n].car_territory;break}e([],!0),e(r,!1)}"api/cars/add/"===a&&(t.car_number?"\u042d\u0442\u043e \u043f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e."===t.car_number[0]?(console.log("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0433\u043e\u0441. \u043d\u043e\u043c\u0435\u0440 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f"),e(r,!1),c({state:!0,field:"input-modal",id:"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0433\u043e\u0441. \u043d\u043e\u043c\u0435\u0440 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f"})):(_(e,!1),c({state:!0,field:"input-modal",id:"\u0410\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d"}),console.log("\u0410\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d")):t.car_tenant&&("\u042d\u0442\u043e \u043f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c null."===t.car_tenant[0]?(console.log('\u041f\u043e\u043b\u0435 "\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f" \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e'),e(r,!1),c({state:!0,field:"input-modal",id:'\u041f\u043e\u043b\u0435 "\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f" \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e'})):(_(e,!1),c({state:!0,field:"input-modal",id:"\u0410\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d"}),console.log("\u0410\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d"))))}),(function(t){e(r,!1),console.log("Error: ",t),console.log("Loading completed in  ".concat((Date.now()-o)/1e3," seconds."))}))}a(26);var L=Object(s.b)((function(e){return{carList:e.carList,brands:e.brands,models:e.models,tenants:e.tenants,input:e.input}}),(function(e){return{sendCarInfo:function(t,a){e({type:"GET_CAR_LIST",payload:t}),e({type:"IS_LOADING",payload:a})},setLoading:function(){e({type:"IS_LOADING",payload:!0})},setModal:function(t){e({type:"SET_MODAL",payload:t})}}}))((function(e){var t,a=e.carList,n=e.brands,r=e.models,o=e.tenants,l=e.input,i=e.setLoading,s=e.setModal,d=e.sendCarInfo;return c.a.createElement("div",{className:"container"},c.a.createElement("input",{type:"text",className:"form-control",id:"car_number",placeholder:"\u0413\u043e\u0441. \u043d\u043e\u043c\u0435\u0440",onKeyUp:function(e){t=e.target.value,l.car_number=e.target.value}}),c.a.createElement(m,{field:"car_brand",input:l,options:n,header:"\u041c\u0430\u0440\u043a\u0430"}),c.a.createElement(m,{field:"car_model",input:l,options:r,header:"\u041c\u043e\u0434\u0435\u043b\u044c"}),c.a.createElement(m,{field:"car_tenant",input:l,options:o,header:"\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f"}),c.a.createElement("button",{type:"button",className:"btn btn-secondary btn-lg",onClick:function(){var e={car_number:t,car_brand:l.car_brand.id,car_model:l.car_model.id,car_tenant:l.car_tenant.id};i(!0),g(d,"POST","api/cars/add/",e,a,s)}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))}));a(27);var v=Object(s.b)((function(e){return{carList:e.carList,searchList:e.searchList}}),(function(e){return{setSearchList:function(t){e({type:"SET_SEARCH_LIST",payload:t})}}}))((function(e){var t=e.carList,a=e.setSearchList;return c.a.createElement("input",{placeholder:"0000 AA-0",onKeyUp:function(e){var n=e.target.value.toLowerCase(),r=t.filter((function(e){return e.car_number.toLowerCase().includes(n)}));e.target.value.length?a(r):a(null)},type:"text"})}));a(28);var h=Object(s.b)((function(e){return{carList:e.carList,sort:e.sort,onTerritory:e.onTerritory}}))((function(e){var t=e.target,a=e.text,n=e.btnClass;return c.a.createElement("button",{className:"btn btn-header btn-secondary btn-lg ".concat(n),type:"button","data-toggle":"collapse","data-target":"#".concat(t),"aria-expanded":"false","aria-controls":t},a)}));a(29);var N=Object(s.b)((function(e){return{mode:e.mode}}))((function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col d-flex justify-content-center"},c.a.createElement(h,{text:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c",btnClass:"btn-primary",target:"input-new-car"})),c.a.createElement("div",{className:"col d-flex justify-content-center"},c.a.createElement(h,{text:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0433\u043e\u0441. \u043d\u043e\u043c\u0435\u0440\u0443",btnClass:"btn-primary",target:"search-car"}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement("div",{className:"collapse multi-collapse",id:"input-new-car"},c.a.createElement("div",{className:"card card-body text-white bg-dark mb-3"},c.a.createElement(L,null))))),c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"collapse multi-collapse",id:"search-car"},c.a.createElement("div",{className:"card card-body text-white bg-dark mb-3"},c.a.createElement(v,null))))))}));a(30);var O=Object(s.b)((function(e){return{isModal:e.isModal}}),(function(e){return{changeModal:function(t){e({type:"SET_MODAL",payload:t})}}}))((function(e){var t=e.info,a=e.changeModal,n=t.car_brand,r=t.car_model,o=t.car_number,l=t.car_tenant,i=t.car_territory,s=t.id,d=i?"\u0414\u0430":"\u041d\u0435\u0442",u=i?"highlighted-row":"usual-row",m=function(e){e.preventDefault();var t={state:!0,field:e.target.className,value:"tenant"===e.target.className?l.name:d,id:"tenant"===e.target.className?l.id:null,carId:s};a(t)};return c.a.createElement(c.a.Fragment,null,c.a.createElement("tr",{className:u},c.a.createElement("td",null,o),c.a.createElement("td",null,n?n.name:null),c.a.createElement("td",null,r?r.name:null),c.a.createElement("td",{onClick:m,className:"tenant"},l.name),c.a.createElement("td",{onClick:m,className:"territory"},d)))}));a(31);var T=Object(s.b)((function(e){return{carList:e.carList,sort:e.sort}}),(function(e){return{setSortField:function(t){e({type:"SET_SORT_FIELD",payload:t})}}}))((function(e){var t,a=e.header,n=e.sort,r=e.setSortField;return t=n.field===a?n.reverse?"triangle-up":"triangle-down":"triangle-non",c.a.createElement("td",null,c.a.createElement("div",{className:"container",onClick:function(){n.field!==a?r({field:a,reverse:!1}):r({field:a,reverse:!n.reverse})}},c.a.createElement("div",{className:"header-text"},{car_number:"\u0413\u043e\u0441. \u043d\u043e\u043c\u0435\u0440",car_brand:"\u041c\u0430\u0440\u043a\u0430",car_model:"\u041c\u043e\u0434\u0435\u043b\u044c",car_tenant:"\u0410\u0440\u0435\u043d\u0434\u0430\u0442\u043e\u0440",car_territory:"\u0410\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c \u043d\u0430 \u0442\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u0438"}[a]),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:t}))))}));a(32);var S=Object(s.b)((function(e){return{carList:e.carList,searchList:e.searchList,sort:e.sort,onTerritory:e.onTerritory}}))((function(e){var t=e.carList,a=e.searchList||t,n=function(e,t){var a=e.field,n=e.reverse;return"default"===a?t:t.sort((function(e,t){return null===e[a]&&null===t[a]?0:null!==e[a]&&null===t[a]?-1:null===e[a]&&null!==t[a]?1:null!==e[a]&&null!==t[a]?e[a].name?e[a].name>t[a].name?n?-1:1:e[a].name<t[a].name?n?1:-1:0:e[a]>t[a]?n?-1:1:e[a]<t[a]?n?1:-1:0:0}))}(e.sort,a);return c.a.createElement("table",{className:"table table-dark table-hover table-bordered"},c.a.createElement("thead",null,c.a.createElement("tr",{className:"table-header"},["car_number","car_brand","car_model","car_tenant","car_territory"].map((function(e){return c.a.createElement(T,{header:e,key:e})})))),c.a.createElement("tbody",null,a.length?n.map((function(e){return c.a.createElement(O,{info:e,key:e.id})})):null))}));a(33);var j=Object(s.b)((function(e){return{isLoading:e.isLoading}}))((function(e){var t=e.isLoading,a=t?"LockOn":"LockOff";return c.a.createElement(c.a.Fragment,null,t?c.a.createElement("div",{className:"loader"}):null,c.a.createElement("div",{id:"skm_LockPane",className:a}))}));a(34);var C=Object(s.b)((function(e){return{modal:e.modal,carList:e.carList}}),(function(e){return{getParkedCarList:function(t,a){e({type:"GET_CAR_LIST",payload:t.filter((function(e){return!!e.car_territory}))}),e({type:"IS_LOADING",payload:a})},getFilteredCarList:function(t,a){e({type:"GET_CAR_LIST",payload:t}),e({type:"IS_LOADING",payload:a})},setCarOnTerrytory:function(t,a){e({type:"GET_CAR_LIST",payload:t}),e({type:"IS_LOADING",payload:a})},setLoading:function(){e({type:"IS_LOADING",payload:!0})},closeModal:function(){e({type:"CLOSE_MODAL",payload:!1})}}}))((function(e){var t=e.modal,a=e.carList,n=e.closeModal,r=e.setLoading,o=e.getFilteredCarList,l=e.getParkedCarList,i=e.setCarOnTerrytory,s="api/stat/add/";return c.a.createElement(c.a.Fragment,null,t.state?c.a.createElement("div",{id:"myModal"},c.a.createElement("div",{className:"modal-dialog"},"input-modal"!==t.field?c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-header"},c.a.createElement("h4",{className:"modal-title"},"\u0424\u0438\u043b\u044c\u0442\u0440"),c.a.createElement("button",{type:"button",className:"close",onClick:n},"\xd7")),c.a.createElement("div",{className:"modal-body"},c.a.createElement("div",{className:"container d-flex justify-content-between"},c.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){var e,a,c;r(!0),"tenant"===t.field&&(e=o,a=!1,c=t.id,y("api/cars/tenant/".concat(c,"/"),"api/stat/here/",e,a)),"territory"===t.field&&_(l,!1),n()}},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0444\u0438\u043b\u044c\u0442\u0440 \u043f\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044e ".concat(t.value)),c.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:function(){r(!0),_(o,!1),n()}},"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u0444\u0438\u043b\u044c\u0442\u0440"))),"territory"===t.field?c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-header"},c.a.createElement("h4",{className:"modal-title"},"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0441 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u0435\u043c")),c.a.createElement("div",{className:"modal-body"},c.a.createElement("div",{className:"container d-flex justify-content-between"},c.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){var e={time_in:(new Date).toLocaleTimeString(),days:(new Date).toLocaleDateString(),last_flag:!1,car:t.carId};r(!0),g(i,"POST",s,e,a),n()}},"\u041f\u0440\u0438\u0431\u044b\u0442\u0438e \u043d\u0430 \u043f\u0430\u0440\u043a\u043e\u0432\u043a\u0443"),c.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:function(){var e={time_out:(new Date).toLocaleTimeString(),last_flag:!0,car:t.carId};r(!0),g(i,"PUT",s,e,a),n()}},"\u0423\u0431\u044b\u0442\u0438\u0435 \u0441 \u043f\u0430\u0440\u043a\u043e\u0432\u043a\u0438")))):null):c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-header"},c.a.createElement("h4",{className:"modal-title"},t.id),c.a.createElement("button",{type:"button",className:"close",onClick:n},"\xd7"))))):null)}));a(35);var w=Object(s.b)((function(e){return{menu:e.menu}}),(function(e){return{getCarList:function(t,a){e({type:"GET_CAR_LIST",payload:t}),e({type:"IS_LOADING",payload:a})},getCarListOnTerritory:function(t){e({type:"GET_CARS_ON_TERRITORY",payload:t})},setCarBrands:function(t){e({type:"SET_CAR_BRANDS",payload:t})},setCarTenants:function(t){e({type:"SET_CAR_TENANTS",payload:t})}}}))((function(e){var t,a=e.getCarList,n=e.getCarListOnTerritory,r=e.setCarBrands,o=e.setCarTenants;return _(a,!1),u("Cars on territory","api/stat/here/",n,t),function(e,t){u("All car brands","api/cars/brands/",e,t)}(r),function(e,t){u("All tenants","api/tenants/",e,t)}(o),c.a.createElement("div",{className:"container"},c.a.createElement(N,null),c.a.createElement(S,null),c.a.createElement(j,null),c.a.createElement(C,null))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(36);var A={carList:[],searchList:null,onTerritory:[],modal:{state:!1,field:void 0,id:void 0},sort:{field:"default",reverse:!1},brands:[],models:[],tenants:[],input:{car_brand:{id:null,name:null},car_model:{id:null,name:null},car_tenant:{id:null,name:null},car_number:""},isLoading:!0};var I=Object(i.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CAR_LIST":return Object(n.a)(Object(n.a)({},e),{},{carList:t.payload});case"IS_LOADING":return Object(n.a)(Object(n.a)({},e),{},{isLoading:t.payload});case"SET_SORT_FIELD":return Object(n.a)(Object(n.a)({},e),{},{sort:t.payload});case"SET_MODAL":return Object(n.a)(Object(n.a)({},e),{},{modal:t.payload});case"CLOSE_MODAL":return Object(n.a)(Object(n.a)({},e),{},{modal:Object(n.a)(Object(n.a)({},e.modal),{},{state:t.payload})});case"GET_CARS_ON_TERRITORY":return Object(n.a)(Object(n.a)({},e),{},{onTerritory:t.payload});case"SET_SEARCH_LIST":return Object(n.a)(Object(n.a)({},e),{},{searchList:t.payload});case"SET_CAR_BRANDS":return Object(n.a)(Object(n.a)({},e),{},{brands:t.payload});case"SET_CAR_MODELS":return Object(n.a)(Object(n.a)({},e),{},{models:t.payload});case"SET_CAR_TENANTS":return Object(n.a)(Object(n.a)({},e),{},{tenants:t.payload});case"SET_INPUT":return Object(n.a)(Object(n.a)({},e),{},{input:t.payload});default:return e}}));I.subscribe((function(){})),l.a.render(c.a.createElement(s.a,{store:I},c.a.createElement(w,{store:I.getState()})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[13,1,2]]]);
//# sourceMappingURL=main.ed3432b1.chunk.js.map