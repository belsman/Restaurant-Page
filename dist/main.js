(()=>{"use strict";var e={774:(e,n,r)=>{r.d(n,{Z:()=>l});var t=r(645),a=r.n(t),i=r(667),o=r.n(i),c=r(621),s=a()((function(e){return e[1]})),d=o()(c);s.push([e.id,"body {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  margin: 0;\r\n}\r\n\r\nheader {\r\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n  letter-spacing: 1px;\r\n  font-size: 18px;\r\n  padding: 0.5rem;\r\n}\r\n\r\ndiv#content {\r\n  position: relative;\r\n  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url("+d+");\r\n  height: 100vh;\r\n}\r\n\r\ndiv#home {\r\n  text-align: center;\r\n  padding: 140px 0;\r\n}\r\n\r\ndiv#contact {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #111;\r\n  text-shadow: 1px 1px #ddd;\r\n}\r\n\r\nul.nav {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style-type: none;\r\n}\r\n\r\n.brand-log {\r\n  border: 1px solid #333;\r\n  border-radius: 4px;\r\n  padding: 0.8rem 0.8rem 0 0.8rem;\r\n}\r\n\r\n.active {\r\n  color: orangered;\r\n}\r\n\r\n.show {\r\n  display: block;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.menu-btn {\r\n  border: 1px solid #ccc;\r\n  background-color: #e8e8e8;\r\n  border-radius: 7px;\r\n  padding: 0.7rem 1rem;\r\n  color: #000;\r\n}\r\n\r\n.menu-items {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr;\r\n  grid-gap: 15px;\r\n}\r\n\r\na:hover {\r\n  text-decoration: none;\r\n  color: #333;\r\n}\r\n\r\na:visited {\r\n  text-decoration: none;\r\n}\r\n\r\nul.nav a {\r\n  padding: 14px 16px;\r\n}\r\n",""]);const l=s},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r=e(n);return n[2]?"@media ".concat(n[2]," {").concat(r,"}"):r})).join("")},n.i=function(e,r,t){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(t)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(a[o]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);t&&a[s[0]]||(r&&(s[2]?s[2]="".concat(r," and ").concat(s[2]):s[2]=r),n.push(s))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},379:(e,n,r)=>{var t,a=function(){var e={};return function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[n]=r}return e[n]}}(),i=[];function o(e){for(var n=-1,r=0;r<i.length;r++)if(i[r].identifier===e){n=r;break}return n}function c(e,n){for(var r={},t=[],a=0;a<e.length;a++){var c=e[a],s=n.base?c[0]+n.base:c[0],d=r[s]||0,l="".concat(s," ").concat(d);r[s]=d+1;var u=o(l),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:l,updater:h(p,n),references:1}),t.push(l)}return t}function s(e){var n=document.createElement("style"),t=e.attributes||{};if(void 0===t.nonce){var i=r.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(e){n.setAttribute(e,t[e])})),"function"==typeof e.insert)e.insert(n);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var d,l=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function u(e,n,r,t){var a=r?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(e.styleSheet)e.styleSheet.cssText=l(n,a);else{var i=document.createTextNode(a),o=e.childNodes;o[n]&&e.removeChild(o[n]),o.length?e.insertBefore(i,o[n]):e.appendChild(i)}}function p(e,n,r){var t=r.css,a=r.media,i=r.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var f=null,m=0;function h(e,n){var r,t,a;if(n.singleton){var i=m++;r=f||(f=s(n)),t=u.bind(null,r,i,!1),a=u.bind(null,r,i,!0)}else r=s(n),t=p.bind(null,r,n),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else a()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var r=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var t=0;t<r.length;t++){var a=o(r[t]);i[a].references--}for(var s=c(e,n),d=0;d<r.length;d++){var l=o(r[d]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}r=s}}}},621:(e,n,r)=>{e.exports=r.p+"c39c5cef67f82bb7c895.jpg"}},n={};function r(t){if(n[t])return n[t].exports;var a=n[t]={id:t,exports:{}};return e[t](a,a.exports,r),a.exports}r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var n=r.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{const e=[{name:"masa and kuli",price:300},{name:"tuwo",price:300},{name:"pounded yam",price:500},{name:"rice, beans, and stew",price:500},{name:"jollof rice and chicken",price:900},{name:"salad",price:200},{name:"kosai and kunun-aya",price:400},{name:"amala and ewedu",price:400},{name:"moi-moi",price:300},{name:"kenyan rice",price:300},{name:"romanian rice",price:300},{name:"pakistani rice",price:300},{name:"german rice",price:300}];var n=r(379),t=r.n(n),a=r(774);t()(a.Z,{insert:"head",singleton:!1}),a.Z.locals;const i=document.querySelector("div#content");var o;(o=i).appendChild((()=>{const e=document.createElement("header");return e.innerHTML='\n    <span class="brand-log">\n        <a href="">KADUNA RESTAURANT</a>\n    </span>\n    <ul class="nav d-flex">\n        <li><a href="" class="tablinks active" data-tab-content-id="home">HOME</a></li>\n        <li><a href="" class="tablinks" data-tab-content-id="menu">MENU</a></li>\n        <li><a href="" class="tablinks" data-tab-content-id="contact">CONTACT US</a></li>\n    </ul>',e.className="d-flex justify-content-between align-items-end",e})()),o.appendChild((()=>{const e=document.createElement("div");return e.id="home",e.classList.add("tab-content"),e.innerHTML='<h1>KADUNA RESTAURANT</h1>\n  <p class="lead">We offer you the most delicious, healthy and affordable food in the whole of Nigeria</p>\n  <a href="" id="menuBtn" class="tablinks menu-btn" data-tab-content-id="menu">Checkout our Menu</a>',e})()),(n=>{let r="";e.forEach((e=>{r+=(({name:e,price:n})=>`<div class="d-flex justify-content-between bg-light p-3 rounded">\n        <span class="text-uppercase">${e}</span>\n        <span><span class="text-success">NGN</span> ${n}</span>\n    </div>`)(e)}));const t=document.createElement("div");t.className="menu-items",t.innerHTML=r;const a=document.createElement("div");a.id="menu",a.className="tab-content hide p-3 my-3",a.appendChild(t),n.appendChild(a)})(i),(e=>{const n=document.createElement("div");n.id="contact",n.className="tab-content text-center hide bg-light p-3 m-3 rounded",n.innerHTML='\n        <h2>Wanna dine with us?</h2>\n        <p class="location">\n            We are located at: No 11, Gombe Road where you can ask anyone on the street about us\n        </p>\n        <p>\n            OR call us on: <i class="fa fa-phone"></i> +234 7XX XXXX XXX\n        </p>\n        <p>\n          OR <a href = "mailto: abc@example.com">Send Email <i class="fa fa-envelope"></i></a>\n        </p>',e.appendChild(n)})(i);const c=document.querySelectorAll("a.tablinks"),s=document.querySelectorAll("div.tab-content");c.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();const{tabContentId:n}=e.target.dataset,r=document.querySelector(`div#${n}`);c.forEach((e=>{e.classList.remove("active")})),s.forEach((e=>{e.classList.remove("show"),e.classList.add("hide")})),"menuBtn"===e.target.id&&c[1].classList.add("active"),e.target.classList.add("active"),r.classList.remove("hide"),r.classList.add("show")}))}))})()})();