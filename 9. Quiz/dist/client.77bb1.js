!function(c){function t(t){for(var e,n,o=t[0],r=t[1],a=t[2],i=0,u=[];i<o.length;i++)n=o[i],s[n]&&u.push(s[n][0]),s[n]=0;for(e in r)Object.prototype.hasOwnProperty.call(r,e)&&(c[e]=r[e]);for(p&&p(t);u.length;)u.shift()();return f.push.apply(f,a||[]),l()}function l(){for(var t,e=0;e<f.length;e++){for(var n=f[e],o=!0,r=1;r<n.length;r++){var a=n[r];0!==s[a]&&(o=!1)}o&&(f.splice(e--,1),t=i(i.s=n[0]))}return t}var n={},s={0:0},f=[];function i(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return c[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=c,i.c=n,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="./dist/";var e=window.webpackJsonp=window.webpackJsonp||[],o=e.push.bind(e);e.push=t,e=e.slice();for(var r=0;r<e.length;r++)t(e[r]);var p=o;f.push([17,1]),l()}([,,,,,,function(t){t.exports=[{question:"What is the most consumed manufactured drink in the world?",answer:["Tea","Beer","Coca-cola","Pepsi"],final:0},{question:"Which country has the wine making region known as the Barossa Valley?",answer:["France","Australia","Germany","Italy"],final:1},{question:"Where did Mulligatawny soup originate?",answer:["Malaysia","India","Thailand","China"],final:1},{question:"Which country is the origin of the beef stew known as Daube?",answer:["Austria","Sweden","France","Germany"],final:2},{question:"What fruit is traditionally used in an Eve's Pudding?",answer:["Pineapples","Oranges","Strawberries","Apples"],final:3},{question:"If you were having a cocktail of Guinness and Champagne what would it be called?",answer:["Red Velvet","Blue Velvet","Black Velvet","Gold Velvet"],final:2},{question:"In which country did Tea originate?",answer:["Japan","Thailand","United Kingdom","China"],final:3},{question:"If you were in Australia and eating a 'sinker' what would you be having?",answer:["Spaghetti","Pie","Fries","Soup"],final:1},{question:"Clam Chowder originated in which country?",answer:["Australia","United Kingdom","USA","Spain"],final:2},{question:"A macaroon is typically made using which nut?",answer:["Almonds","Pistachios","Peanuts","Cashews"],final:0}]},function(t,e,n){"use strict";var r=n(0),a=n.n(r);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t){return(c="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(t){return o(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":o(t)})(t)}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var u=function(t){function u(t){var e,n,o,r,a,i;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),n=this,o=l(u).call(this,t),e=!o||"object"!==c(o)&&"function"!=typeof o?f(n):o,r=f(f(e)),i=function(){e.setState(function(t){return{start:!t.start}}),window.scroll(0,0)},(a="isStart")in r?Object.defineProperty(r,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[a]=i,e.state={start:!1},e}var e,n,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(u,r["Component"]),e=u,(n=[{key:"render",value:function(){return a.a.createElement("header",{className:this.state.start?"header fade-in":"header intro"},a.a.createElement("div",null,a.a.createElement("img",{src:"./assets/coffee-cup.svg",alt:"Logo",className:this.state.start?"header--logo":"header--logo__large fade-in"}),this.state.start?"":a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"What is food, really?"),a.a.createElement("p",null,"This food and drink trivia let you know more about your knowledge of food!"),a.a.createElement("button",{onClick:this.isStart},"Start"))))}}])&&i(e.prototype,n),o&&i(e,o),u}();e.a=u},,,,,,,function(t,p,y){"use strict";(function(t){var a=y(0),i=y.n(a),e=y(4),u=(y(24),y(15));function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){return(o="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function(t){return n(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)})(t)}function c(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function l(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var r=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,s(e).apply(this,arguments))}var n,o,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(e,a["Component"]),n=e,(o=[{key:"render",value:function(){return i.a.createElement(u.a,null)}}])&&c(n.prototype,o),r&&c(n,r),e}();p.a=Object(e.hot)(t)(r)}).call(this,y(9)(t))},function(t,S,_){"use strict";(function(t){var a=_(0),i=_.n(a),e=_(1),n=_.n(e),o=_(4),r=_(3),u=_.n(r),c=_(5),l=_(6),s=_(7),f=_(16);function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t){return(y="function"==typeof Symbol&&"symbol"===p(Symbol.iterator)?function(t){return p(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":p(t)})(t)}function m(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function b(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function w(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var v=function(t){function r(t){var n,e,o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),e=this,o=h(r).call(this,t),g(w(w(n=!o||"object"!==y(o)&&"function"!=typeof o?w(e):o)),"triggerAnimation",function(t){n.setState({animate:t})}),g(w(w(n)),"getAnswer",function(t,e){n.setState({answer:m(n.state.answer).concat([e===n.state.list[n.state.id].final]),id:n.state.next,next:n.state.next+1,finish:n.state.next+1>n.state.totalQuestion}),window.scroll(0,0)}),n.state={id:0,answer:[],totalQuestion:l.length,list:l,next:1,finish:!1,animate:!0},n}var e,n,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(r,a["Component"]),e=r,(n=[{key:"componentDidUpdate",value:function(t,e){this.state.id!==e.id&&this.setState({animate:!0})}},{key:"render",value:function(){var o=this;return this.state.finish?i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,null),i.a.createElement(f.a,{answer:this.state.answer.filter(function(t){return!0===t}).length,totalQuestion:this.state.totalQuestion})):i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,null),i.a.createElement("section",{className:"quiz"},i.a.createElement("div",{className:"quiz__image"},i.a.createElement(u.a,{height:500},i.a.createElement("img",{src:"./assets/q".concat(this.state.id+1<10?"0"+(this.state.id+1):this.state.id+1,".jpg"),alt:"",className:this.state.animate?"fade-in":""}))),i.a.createElement("div",{className:"quiz__wrapper"},i.a.createElement("div",{className:"quiz__question"},i.a.createElement("h2",null,this.state.list[this.state.id].question)),i.a.createElement(c.TransitionGroup,{className:"quiz__answer"},this.state.list[this.state.id].answer.map(function(t,e){var n=Math.max(0,100*e);return i.a.createElement(c.CSSTransition,{key:"a"+o.state.id+" "+t,timeout:400,classNames:"fade",unmountOnExit:!0,onExited:function(){o.triggerAnimation(!1)}},i.a.createElement("button",{onClick:function(t){return o.getAnswer(t,e)},key:"a"+o.state.id+" "+t,className:"quiz__answer--item",style:{transitionDelay:"".concat(n,"ms")}},t))})))))}}])&&b(e.prototype,n),o&&b(e,o),r}();v.propTypes={id:n.a.number,answer:n.a.array,totalQuestion:n.a.number,list:n.a.object},S.a=Object(o.hot)(t)(v)}).call(this,_(9)(t))},function(t,e,n){"use strict";var r=n(0),a=n.n(r),o=n(3),i=n.n(o),u=n(1),c=n.n(u);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t){return(s="function"==typeof Symbol&&"symbol"===l(Symbol.iterator)?function(t){return l(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":l(t)})(t)}function f(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function m(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var b=function(t){function u(t){var o,e,n,r,a,i;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),e=this,n=p(u).call(this,t),o=!n||"object"!==s(n)&&"function"!=typeof n?m(e):n,r=m(m(o)),i=function(t){console.log(t);var e="I have finished this food quiz and get ".concat(o.props.answer," out of ").concat(o.props.totalQuestion,"!"),n=window.location.href;switch(console.log(encodeURIComponent(e)),t){case"twitter":window.open("http://twitter.com/share?text=".concat(encodeURIComponent(e),"&url=").concat(encodeURIComponent(n),"&hashtags=quiz,food"));break;case"facebook":window.open("https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURIComponent(n),"&t=").concat(encodeURIComponent(e)))}},(a="share")in r?Object.defineProperty(r,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[a]=i,o}var e,n,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(u,r["Component"]),e=u,(n=[{key:"render",value:function(){var t=this;return a.a.createElement(a.a.Fragment,null,a.a.createElement("section",{className:"result fade-in"},a.a.createElement("div",{className:"result__image"},a.a.createElement(i.a,{height:500},a.a.createElement("img",{src:"./assets/result-tanya-patrikeyeva-423820-unsplash.jpg",alt:"Thank you for answering this quiz!"}))),a.a.createElement("div",{className:"result__text"},a.a.createElement("h1",null,"Your Results"),a.a.createElement("p",null,"You get ",a.a.createElement("strong",null,this.props.answer)," out of",a.a.createElement("strong",null," ",this.props.totalQuestion," "),"! Well done!"),a.a.createElement("button",{className:"result__button result__button--twitter",onClick:function(){return t.share("twitter")}},"Share in Twitter"),a.a.createElement("button",{className:"result__button result__button--facebook",onClick:function(){return t.share("facebook")}},"Share in Facebook"))))}}])&&f(e.prototype,n),o&&f(e,o),u}();b.propTypes={answer:c.a.number,totalQuestion:c.a.number},e.a=b},function(t,e,n){t.exports=n(18)},function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),a=n(2),i=n.n(a),u=n(14);i.a.render(r.a.createElement(u.a,null),document.getElementById("app"))},,,,,,function(t,e,n){var o=n(25);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(27)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){}]);