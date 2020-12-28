(self.webpackChunki_trade_fe=self.webpackChunki_trade_fe||[]).push([[701],{7436:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var r=n(7294),o=n(7703),c=n(5323),i=(n(5553),n(3379)),a=n.n(i),l=n(9833),u={insert:"head",singleton:!1},s=(a()(l.Z,u),l.Z.locals,n(489)),p=n(363);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,c=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,c=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw c}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=w(e);if(t){var o=w(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(i,e);var t,n,o,c=g(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),E(v(t=c.call(this,e)),"setValue",(function(e){switch(t.props.type){case s.Ku.SINGLE_DATE:t.validateDateObject(e)&&t.setState({initValue:e});break;case s.Ku.MULTIPLE_DATE:break;case s.Ku.RANGE_DATE:e&&t.validateDateObject(e.from)&&t.validateDateObject(e.to)&&t.setState({initValue:e})}})),E(v(t),"getValue",(function(){return t.state.currentValue})),E(v(t),"handleChange",(function(e){t.setState({currentValue:e}),t.props.onChange(e)})),e.innerRef(v(t)),t.state={initValue:null,inputPlaceholder:"Select a day",isReady:!1,currentValue:null},t}return t=i,(n=[{key:"render",value:function(){var e=this.props,t=e.type,n=e.style,o=this.state,c=o.initValue,i=o.inputPlaceholder,a=o.isReady;return r.createElement("div",{className:"date-picker-custom-container",style:n},a&&r.createElement(N,{type:t,initValue:c,inputPlaceholder:i,onChange:this.handleChange}))}},{key:"validateDateObject",value:function(e){return e&&e.year&&e.month&&e.day}},{key:"componentDidMount",value:function(){switch(this.props.type){case s.Ku.SINGLE_DATE:this.setState({initValue:null,inputPlaceholder:"Select a day",isReady:!0});break;case s.Ku.MULTIPLE_DATE:this.setState({initValue:[],inputPlaceholder:"Select days",isReady:!0});break;case s.Ku.RANGE_DATE:this.setState({initValue:{from:null,to:null},inputPlaceholder:"Select a day range",isReady:!0})}}}])&&b(t.prototype,n),o&&b(t,o),i}(r.Component);x.defaultProps={type:s.Ku.SINGLE_DATE,onChange:function(){},innerRef:function(){}};var k=(0,o.$j)((function(e){return{language:e.app.language}}))(x),N=function(e){var t=f((0,r.useState)(e.initValue),2),n=t[0],o=t[1],i=f((0,r.useState)(e.initValue),1)[0],a=f((0,r.useState)(""),2),l=a[0],u=a[1],m=function(t){var n=t.target.value;switch(u(n),e.type){case s.Ku.SINGLE_DATE:if(/[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}/.test(n)){var r=n.split("/");o({year:parseInt(r[2]),month:parseInt(r[1]),day:parseInt(r[0])})}break;case s.Ku.RANGE_DATE:var c=n.replace(/\s/g,"");if(/[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}-[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}/.test(c)){var i=c.split("-")[0].split("/"),a=c.split("-")[1].split("/");o({from:{year:parseInt(i[2]),month:parseInt(i[1]),day:parseInt(i[0])},to:{year:parseInt(a[2]),month:parseInt(a[1]),day:parseInt(a[0])}})}}};return r.useEffect((function(){e.initValue!==i&&o(e.initValue)}),[e.initValue]),r.useEffect((function(){var t=function(){switch(e.type){case s.Ku.SINGLE_DATE:return n?"".concat(n.day,"/").concat(n.month,"/").concat(n.year):"";case s.Ku.MULTIPLE_DATE:return"Do not supported";case s.Ku.RANGE_DATE:if(n.from&&n.to){var t="".concat(n.from.day,"/").concat(n.from.month,"/").concat(n.from.year),r="".concat(n.to.day,"/").concat(n.to.month,"/").concat(n.to.year);return"".concat(t," - ").concat(r)}return"";default:return""}}();u(t),t&&e.onChange(n)}),[n]),r.createElement(c.ZP,{value:n,onChange:o,renderInput:function(t){var n=t.ref;return r.createElement("div",{className:"custom-input"},r.createElement("input",{ref:n,placeholder:e.inputPlaceholder,value:l,onChange:m}),l&&r.createElement("span",{onClick:function(){return o(e.initValue)}},r.createElement("img",{src:p.Z,alt:"dialog_close_icon"})))},shouldHighlightWeekends:!0,calendarClassName:"custom-calendar",calendarTodayClassName:"custom-today-day",calendarSelectedDayClassName:"custom-selected-day",calendarRangeStartClassName:"custom-range-start",calendarRangeBetweenClassName:"custom-range-between",calendarRangeEndClassName:"custom-range-end"})}},4809:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(7294),o=n(4184),c=n.n(o),i=n(3379),a=n.n(i),l=n(5020),u={insert:"head",singleton:!1};a()(l.Z,u),l.Z.locals;function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(a,e);var t,n,o,i=f(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),g(b(t=i.call(this,e)),"substract",(function(){var e=1e3*t.state.count-1e3*t.props.step;(e/=1e3)<0||(t.setState({isBefore:!0}),setTimeout((function(){t.setState({count:e,countBefore:(1e3*e+1e3*t.props.step)/1e3,countAfter:(1e3*e-1e3*t.props.step)/1e3,isBefore:!1,isWarn:!1}),t.props.onChange(t.state.count)}),200))})),g(b(t),"add",(function(){t.setState({isAfter:!0}),setTimeout((function(){var e=1e3*t.state.count+1e3*t.props.step;e/=1e3,t.setState({count:e,countBefore:(1e3*e-1e3*t.props.step)/1e3,countAfter:(1e3*e+1e3*t.props.step)/1e3,isAfter:!1,isWarn:!1}),t.props.onChange(t.state.count)}),200)})),g(b(t),"modify",(function(e){var n=e.target.value;if(n.includes(".")){if(!/^\d+\.\d+$/.test(n))return void t.setState({isWarn:!0});t.setState({isWarn:!1})}else t.setState({isWarn:!1});t.setState({count:n}),t.props.onChange(t.state.count)})),g(b(t),"inputValue",(function(e){var n=e.target.value;t.setState({count:n}),t.props.onChange(t.state.count)})),e.innerRef(b(t)),t.state={count:0,countBefore:-1,countAfter:1,isAfter:!1,isBefore:!1,isWarn:!1},t}return t=a,(n=[{key:"render",value:function(){var e=this,t=this.state,n=t.isBefore,o=t.isAfter,i=t.countBefore,a=t.countAfter,l=t.count,u=t.isWarn,s=this.props.style;return r.createElement("div",{style:s,className:c()(u?"warn":"","c-input")},r.createElement("button",{className:c()("c-ipt-button"),onClick:function(){return e.substract()}},"-"),r.createElement("span",{className:c()("c-ipt-span",n?"before":"",o?"after":""),"data-before":i,"data-after":a},r.createElement("input",{className:"c-ipt",type:"text",value:l,onBlur:function(t){return e.modify(t)},onChange:function(t){return e.inputValue(t)}})),r.createElement("button",{className:c()("c-ipt-button"),onClick:function(){return e.add()}},"+"))}}])&&p(t.prototype,n),o&&p(t,o),a}(r.Component);h.defaultProps={step:.1,onChange:function(){},innerRef:function(){}};var v=h},3375:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var r=n(7294),o=n(7703),c=n(4184),i=n.n(c),a=n(8078),l=n(4809),u=(n(7436),n(5974)),s=n(489),p=n(8622),m=n(363),f=n(3379),d=n.n(f),b=n(3051),y={insert:"head",singleton:!1},g=(d()(b.Z,y),b.Z.locals,n(8010));function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=k(e);if(t){var o=k(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return x(this,n)}}function x(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var N=[{id:"1",value:10,label:"RAGR01888123888"},{id:"1",value:11,label:"RAGR01888123222"},{id:"1",value:12,label:"RAGR01888123333"}],_=[{value:"HK",label:"HK"},{value:"VN",label:"VN"},{value:"CN",label:"CN"}],O=[{value:"2020-12-1",label:"2020-12-1"},{value:"2020-12-2",label:"2020-12-2"},{value:"2020-12-3",label:"2020-12-3"}],S=[{price:34,number:6},{price:39.9,number:16},{price:39.8,number:26},{price:39.7,number:26},{price:39.6,number:6}],j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(f,e);var t,n,o,c=E(f);function f(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(t=c.call(this,e)).state={isBuy:!0,showQueue:!1},t}return t=f,(n=[{key:"componentDidMount",value:function(){var e=this.props,t=e.data;e.language,this.setState({isBuy:this.props.isBuy}),this.stockIDRef.value=t.stockCode,this.priceRef.state.count=t.nominalPrice,this.quantityRef.state.count=t.ledgerQty}},{key:"stockName",value:function(){var e=this.props,t=e.data;switch(e.language.lang){case"zh-CN":case"zh-TW":return t.stockChineseShortName;default:return t.stockShortName}}},{key:"render",value:function(){var e=this,t=this.state,n=t.isBuy,o=t.showQueue,c=this.props,f=c.language;return c.data,r.createElement(r.Fragment,null,r.createElement("header",{className:i()("c-dialog-title")},r.createElement("b",null,(0,p.uu)((function(){return f.place_order_dialog_title}))),r.createElement("img",{className:i()("c-close-icon"),src:m.Z,alt:"quote-Icon-Close",onClick:function(){return e.props.onClose()}})),r.createElement("section",{className:i()("c-dialog-content")},r.createElement("div",{className:i()("c-item")},r.createElement("div",{className:i()("c-item-left")},(0,p.uu)((function(){return f.place_order_dialog_cash_account}))),r.createElement("div",{className:i()("c-item-right")},r.createElement(a.Z,{style:{height:"30px",width:"100%",textAlign:"left"},selectedOptions:[N[0]],options:N}))),r.createElement("div",{className:i()("c-item")},r.createElement("div",{className:i()("c-item-left")},r.createElement(a.Z,{className:"c-item",style:{height:"30px",width:"100%",textAlign:"left"},selectedOptions:[_[0]],options:_})),r.createElement("div",{className:i()("c-item-right")},r.createElement("input",{type:"text",ref:function(t){return e.stockIDRef=t}}))),r.createElement("div",{className:i()("c-item")},r.createElement("div",{className:i()("c-item-left"),style:{flex:1}},r.createElement("div",{className:i()("c-stock-name")},r.createElement("b",null,this.stockName())),r.createElement("div",{className:i()("c-stock-price"),style:{color:"#32BD73"}},r.createElement("span",null,u.oe.currencyFormatter("34.40")),r.createElement("span",null,"+",u.oe.currencyFormatter("15.00")),r.createElement("span",null,"(+21.50%)"))),r.createElement("div",{className:i()("c-item-right")},r.createElement("span",{style:{color:"#117AA6",cursor:"pointer"},onClick:function(){e.setState({showQueue:!o})}},(0,p.uu)((function(){return f.place_order_dialog_bid_ask_queue}))))),r.createElement("div",{className:i()("c-item")},r.createElement("div",{className:i()("c-item-left"),style:{flex:1,marginRight:"8px"}},r.createElement("button",{className:i()(n?"c-item-buy":""),onClick:function(){return e.setState({isBuy:!0})}},r.createElement("div",null,(0,p.uu)((function(){return f.common_buy}))),r.createElement("div",{className:i()("price-number-box")},u.oe.currencyFormatter("2000")," ",u.oe.currencyFormatter("34")))),r.createElement("div",{className:i()("c-item-right")},r.createElement("button",{className:i()(n?"":"c-item-sell"),onClick:function(){return e.setState({isBuy:!1})}},r.createElement("div",null,(0,p.uu)((function(){return f.common_sell}))),r.createElement("div",{className:i()("price-number-box")},u.oe.currencyFormatter("34.9")," ",u.oe.currencyFormatter("1000"))))),o?r.createElement(r.Fragment,null,r.createElement("div",{className:i()("c-item")},r.createElement("div",{className:i()("c-item-left")},(0,p.uu)((function(){return f.common_best_bid}))),r.createElement("div",{className:i()("c-item-right")},(0,p.uu)((function(){return f.common_best_ask})))),r.createElement("div",{className:i()("c-item-price-table")},S.map((function(e,t){return r.createElement("div",{key:t,className:i()("c-item-price-row")},r.createElement("div",{className:i()("c-item-price-row-left")},r.createElement("div",{className:i()("c-item-price-row-index")},"Bid ",+t+1),r.createElement("div",{className:i()("c-item-price-row-content")},r.createElement("div",{className:i()("c-item-price-row-price")},e.price),r.createElement("div",{className:i()("c-item-price-row-number")},e.number,r.createElement("span",null,"( 17)")))),r.createElement("div",{className:i()("c-item-price-row-right")},r.createElement("div",{className:i()("c-item-price-row-index")},"Ask ",+t+1),r.createElement("div",{className:i()("c-item-price-row-content")},r.createElement("div",{className:i()("c-item-price-row-price")},e.price),r.createElement("div",{className:i()("c-item-price-row-number")},e.number,r.createElement("span",null,"( 17)")))))})))):"",r.createElement("div",{className:i()("c-item")},r.createElement("div",{className:i()("c-item-left")},(0,p.uu)((function(){return f.common_order_type}))),r.createElement("div",{className:i()("c-item-right","button")},r.createElement(a.Z,{style:{height:"30px",width:"100%",textAlign:"left"},selectedOptions:[s.Jm[0]],options:s.Jm}))),r.createElement("div",{className:i()("c-item")},r.createElement("div",{className:i()("c-item-left")},(0,p.uu)((function(){return f.common_price}))),r.createElement("div",{className:i()("c-item-right")},r.createElement(l.Z,{style:{width:"100%",height:"30px"},innerRef:function(t){return e.priceRef=t}}))),r.createElement("div",{className:i()("c-item")},r.createElement("div",{className:i()("c-item-left")},(0,p.uu)((function(){return f.common_quantity}))),r.createElement("div",{className:i()("c-item-right")},r.createElement(l.Z,{style:{width:"100%",height:"30px"},innerRef:function(t){return e.quantityRef=t}}))),r.createElement("div",{className:i()("c-item")},r.createElement("div",{className:i()("c-item-left")},(0,p.uu)((function(){return f.place_order_dialog_good_till_date}))),r.createElement("div",{className:i()("c-item-right","button")},r.createElement(a.Z,{className:"c-item",style:{height:"30px",width:"100%",textAlign:"left"},selectedOptions:[O[0]],options:O}))),r.createElement("div",{className:i()("c-item")},r.createElement("div",{className:i()("c-item-left"),style:{flex:1}},r.createElement("div",{className:i()("c-item-flex")},r.createElement("span",null,(0,p.uu)((function(){return f.place_order_dialog_buy_cash}))),r.createElement("span",{style:{color:"#117AA6"}},u.oe.currencyFormatter("23000"))),r.createElement("div",{className:i()("c-item-flex")},r.createElement("span",null,(0,p.uu)((function(){return f.common_buying_power}))),r.createElement("span",null,u.oe.currencyFormatter("100810")))),r.createElement("div",{className:i()("c-item-right")},r.createElement("div",{className:i()("c-item-flex")},r.createElement("span",null,(0,p.uu)((function(){return f.place_order_dialog_sell_cash}))),r.createElement("span",{style:{color:"#CC2E2E"}},u.oe.currencyFormatter("1000"))),r.createElement("div",{className:i()("c-item-flex")},r.createElement("span",null,(0,p.uu)((function(){return f.place_order_dialog_gross_amount}))),r.createElement("span",null,u.oe.currencyFormatter("100810"))))),r.createElement("button",{onClick:function(){return(0,g.Te)((function(){return e.props.onClose()}))},style:{backgroundColor:n?"#CC3D3D":"#32BD73"},className:i()("c-item-submit")},(0,p.uu)((function(){return f.common_submit})))))}}])&&v(t.prototype,n),o&&v(t,o),f}(r.Component),C=(0,o.$j)((function(e){return{language:e.app.language}}))(j)},9833:function(e,t,n){"use strict";var r=n(3645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".date-picker-custom-container{background:#424f5f}.date-picker-custom-container .DatePicker{height:100%;width:100%;z-index:0}.date-picker-custom-container .custom-input{position:relative;height:100%;width:100%}.date-picker-custom-container .custom-input>input{background:#424f5f;border:none;padding:10px 20px;font-family:inherit;text-align:center;outline:none;color:#fff;height:100%;width:100%}.date-picker-custom-container .custom-input>input::placeholder{color:#fff}.date-picker-custom-container .custom-input>span{position:absolute;right:10px;top:50%;transform:translateY(-50%);display:flex;cursor:pointer}.date-picker-custom-container .custom-input>span>img{transform:scale(0.8)}.date-picker-custom-container .custom-today-day{color:#e67e22 !important;border:1px solid #e67e22 !important}.date-picker-custom-container .custom-today-day::after{visibility:hidden}.date-picker-custom-container .custom-selected-day{background:#1996e3}.date-picker-custom-container .custom-range-start,.date-picker-custom-container .custom-range-end{background:#1996e3}.date-picker-custom-container .custom-range-between{background:rgba(75,207,250,.4);color:#1996e3}",""]),t.Z=o},5020:function(e,t,n){"use strict";var r=n(3645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".c-input{width:100%;height:26px;background-color:#1a2129;border-radius:.2rem;display:flex;overflow:hidden;line-height:26px;border:2px solid transparent;box-sizing:border-box}.c-ipt{border:0;padding:0;margin:0;outline:none;color:inherit;background:none;display:block;height:26px;line-height:26px;text-align:center;width:100%}.c-ipt-span{color:inherit;line-height:26px;height:1rem;display:block;flex:1 1 5rem;font-size:12px;text-align:center;transform:translateY(-26px)}.c-ipt-span::before{display:block;content:attr(data-before)}.c-ipt-span::after{display:block;content:attr(data-after)}.c-ipt-span.before{transform:translateY(0);transition:transform .2s ease-in}.c-ipt-span.after{transform:translateY(-52px);transition:transform .2s ease-in}.warn{border:2px solid #e21918}.c-ipt-button{flex:0 0 auto;border:0;background:none;color:inherit;font-size:12px;height:26px;padding:0 13px;box-sizing:border-box;margin:0;width:1rem;outline:none;cursor:pointer}",""]),t.Z=o},3051:function(e,t,n){"use strict";var r=n(3645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".c-dialog-title{position:relative;width:460px;height:60px;line-height:60px;text-align:center}.c-dialog-title>.c-close-icon{position:absolute;right:30px;top:0;bottom:0;margin:auto 0;width:10px;cursor:pointer}.c-dialog-content{display:block;padding:0 30px 20px;box-sizing:border-box;color:#dae1e7}.c-dialog-content>.c-item{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px}.c-dialog-content>.c-item>.c-item-left{flex:0 0 100px;width:100px;margin-right:30px;border-radius:2px}.c-dialog-content>.c-item>.c-item-left>.c-stock-name{font-size:1.143em;margin-bottom:9px}.c-dialog-content>.c-item>.c-item-left>.c-stock-price{display:flex;justify-content:space-between;align-items:center}.c-dialog-content>.c-item>.c-item-left>.c-stock-price>span:first-child{font-size:1.429em}.c-dialog-content>.c-item>.c-item-left>.c-stock-price>span{margin-right:15px}.c-dialog-content>.c-item>.c-item-right{flex:1;border-radius:2px;text-align:right}.c-dialog-content>.c-item>.c-item-right>input{display:block;width:100%;height:30px;border:0 none;padding-left:10px;box-sizing:border-box;background:#424f5f;outline:none;color:inherit}.c-dialog-content>.c-item>button,.c-dialog-content>.c-item .c-item-buy{background-color:#cc3d3d}.c-dialog-content>.c-item>button,.c-dialog-content>.c-item .c-item-sell{background-color:#32bd73}.c-dialog-content>.c-item>div>button{display:block;border:0 none;border-radius:2px;width:100%;height:50px;background-color:#1a2129;color:inherit;outline:none;cursor:pointer}.c-dialog-content>.c-item>div>button:hover{-webkit-filter:brightness(1.1);filter:brightness(1.1)}.c-dialog-content>.c-item>div>button>.price-number-box{display:inline-block;margin-top:3px;padding:3px 9px 4px;border-radius:2px;box-sizing:border-box;overflow:hidden;background-color:rgba(255,255,255,.2)}.c-dialog-content>.c-item-price-table{margin-bottom:10px}.c-dialog-content>.c-item-price-table>.c-item-price-row{display:flex;justify-content:space-between;align-items:center;width:100%}.c-dialog-content>.c-item-price-table>.c-item-price-row>div{flex:1}.c-dialog-content>.c-item-price-table>.c-item-price-row .c-item-price-row-index{flex:0 0 40px;width:40px;text-align:center}.c-dialog-content>.c-item-price-table>.c-item-price-row .c-item-price-row-number{text-align:right}.c-dialog-content>.c-item-price-table>.c-item-price-row>.c-item-price-row-left{display:flex;justify-content:space-between;align-items:center;line-height:26px}.c-dialog-content>.c-item-price-table>.c-item-price-row>.c-item-price-row-left>.c-item-price-row-index{background-color:rgba(234,61,27,.3)}.c-dialog-content>.c-item-price-table>.c-item-price-row>.c-item-price-row-left>.c-item-price-row-content{flex:1;background-color:rgba(234,61,27,.05);display:flex;justify-content:space-around;align-items:center}.c-dialog-content>.c-item-price-table>.c-item-price-row>.c-item-price-row-right{display:flex;justify-content:space-between;align-items:center;line-height:26px}.c-dialog-content>.c-item-price-table>.c-item-price-row>.c-item-price-row-right>.c-item-price-row-index{background-color:rgba(43,211,121,.3)}.c-dialog-content>.c-item-price-table>.c-item-price-row>.c-item-price-row-right>.c-item-price-row-content{flex:1;background-color:rgba(43,211,121,.05);display:flex;justify-content:space-around;align-items:center}.c-dialog-content>.c-item-price-table>.c-item-price-row:first-child>.c-item-price-row-left>.c-item-price-row-content{background-color:rgba(234,61,27,.1)}.c-dialog-content>.c-item-price-table>.c-item-price-row:first-child>.c-item-price-row-right>.c-item-price-row-content{background-color:rgba(43,211,121,.1)}.c-dialog-content>.c-item-submit{display:block;margin-top:27px;width:100%;height:30px;border:0 none;border-radius:5px;outline:none;color:inherit;cursor:pointer}.c-dialog-content>.c-item-submit:hover{-webkit-filter:brightness(1.1);filter:brightness(1.1)}.c-item-flex{display:flex;justify-content:space-between;align-items:center}.c-item-flex>span{line-height:22px}",""]),t.Z=o},363:function(e,t,n){"use strict";t.Z=n.p+"static/src/assets/images/icons/quote_icon_close.png"},7434:function(e,t,n){"use strict";var r=n(7294),o=n(5697),c=n.n(o);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=(0,r.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,c=e.size,l=void 0===c?24:c,u=a(e,["color","size"]);return r.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),r.createElement("polyline",{points:"6 9 12 15 18 9"}))}));l.propTypes={color:c().string,size:c().oneOfType([c().string,c().number])},l.displayName="ChevronDown",t.Z=l},2802:function(e,t,n){"use strict";var r=n(7294),o=n(5697),c=n.n(o);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=(0,r.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,c=e.size,l=void 0===c?24:c,u=a(e,["color","size"]);return r.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),r.createElement("polyline",{points:"18 15 12 9 6 15"}))}));l.propTypes={color:c().string,size:c().oneOfType([c().string,c().number])},l.displayName="ChevronUp",t.Z=l},3777:function(e,t,n){"use strict";var r=n(7294),o=n(5697),c=n.n(o);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=(0,r.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,c=e.size,l=void 0===c?24:c,u=a(e,["color","size"]);return r.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),r.createElement("circle",{cx:"12",cy:"12",r:"10"}),r.createElement("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),r.createElement("line",{x1:"9",y1:"9",x2:"15",y2:"15"}))}));l.propTypes={color:c().string,size:c().oneOfType([c().string,c().number])},l.displayName="XCircle",t.Z=l}}]);