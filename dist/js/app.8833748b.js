(function(e){function t(t){for(var r,a,c=t[0],s=t[1],u=t[2],l=0,p=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/vue-multi-apps/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var f=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"0a4e":function(e,t,n){},"264d":function(e,t,n){n("b768"),n("d248"),n("54df"),n("c17e"),n("1174"),n("3dc2"),n("3ecf"),n("8882"),n("e6fe"),n("944f"),n("fa79"),n("f7e1"),n("69ca"),n("d4b6"),n("cf20"),n("aaca"),n("d920"),n("8e0d"),n("ea7a"),n("1031"),n("fa9b"),n("4b5d"),n("070e"),n("16a4"),n("0abc"),n("4d79"),n("31d9"),n("ed2c"),n("1d75");var r=n("7037");e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===r(e)&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="fb15")}({"071d":function(e,t,n){},"0a06":function(e,t,n){"use strict";var r=n("c532"),o=n("30b5"),i=n("f6b4"),a=n("5270"),c=n("4a7b");function s(e){this.defaults=e,this.interceptors={request:new i,response:new i}}s.prototype.request=function(e){"string"===typeof e?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=c(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[a,void 0],n=Promise.resolve(e);this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));while(t.length)n=n.then(t.shift(),t.shift());return n},s.prototype.getUri=function(e){return e=c(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){s.prototype[e]=function(t,n){return this.request(r.merge(n||{},{method:e,url:t}))}})),r.forEach(["post","put","patch"],(function(e){s.prototype[e]=function(t,n,o){return this.request(r.merge(o||{},{method:e,url:t,data:n}))}})),e.exports=s},"0df6":function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},"1d2b":function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},2444:function(e,t,n){"use strict";(function(t){var r=n("c532"),o=n("c8af"),i={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function c(){var e;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof t&&"[object process]"===Object.prototype.toString.call(t))&&(e=n("b50d")),e}var s={adapter:c(),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){s.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){s.headers[e]=r.merge(i)})),e.exports=s}).call(this,n("4362"))},"2d83":function(e,t,n){"use strict";var r=n("387f");e.exports=function(e,t,n,o,i){var a=new Error(e);return r(a,t,n,o,i)}},"2e67":function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},"30b5":function(e,t,n){"use strict";var r=n("c532");function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var a=[];r.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(o(t)+"="+o(e))})))})),i=a.join("&")}if(i){var c=e.indexOf("#");-1!==c&&(e=e.slice(0,c)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},"387f":function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},3934:function(e,t,n){"use strict";var r=n("c532");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return function(){return!0}}()},4362:function(e,t,n){t.nextTick=function(e){var t=Array.prototype.slice.call(arguments);t.shift(),setTimeout((function(){e.apply(null,t)}),0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,r="/";t.cwd=function(){return r},t.chdir=function(t){e||(e=n("df7c")),r=e.resolve(t,r)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},"467f":function(e,t,n){"use strict";var r=n("2d83");e.exports=function(e,t,n){var o=n.config.validateStatus;!o||o(n.status)?e(n):t(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},"4a7b":function(e,t,n){"use strict";var r=n("c532");e.exports=function(e,t){t=t||{};var n={},o=["url","method","params","data"],i=["headers","auth","proxy"],a=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];r.forEach(o,(function(e){"undefined"!==typeof t[e]&&(n[e]=t[e])})),r.forEach(i,(function(o){r.isObject(t[o])?n[o]=r.deepMerge(e[o],t[o]):"undefined"!==typeof t[o]?n[o]=t[o]:r.isObject(e[o])?n[o]=r.deepMerge(e[o]):"undefined"!==typeof e[o]&&(n[o]=e[o])})),r.forEach(a,(function(r){"undefined"!==typeof t[r]?n[r]=t[r]:"undefined"!==typeof e[r]&&(n[r]=e[r])}));var c=o.concat(i).concat(a),s=Object.keys(t).filter((function(e){return-1===c.indexOf(e)}));return r.forEach(s,(function(r){"undefined"!==typeof t[r]?n[r]=t[r]:"undefined"!==typeof e[r]&&(n[r]=e[r])})),n}},5270:function(e,t,n){"use strict";var r=n("c532"),o=n("c401"),i=n("2e67"),a=n("2444");function c(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){c(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]}));var t=e.adapter||a.adapter;return t(e).then((function(t){return c(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(c(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},"7a77":function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},"7aac":function(e,t,n){"use strict";var r=n("c532");e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,i,a){var c=[];c.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&c.push("expires="+new Date(n).toGMTString()),r.isString(o)&&c.push("path="+o),r.isString(i)&&c.push("domain="+i),!0===a&&c.push("secure"),document.cookie=c.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},"83b9":function(e,t,n){"use strict";var r=n("d925"),o=n("e683");e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},8875:function(e,t,n){var r,o,i;(function(n,a){o=[],r=a,i="function"===typeof r?r.apply(t,o):r,void 0===i||(e.exports=i)})("undefined"!==typeof self&&self,(function(){function e(){if(document.currentScript)return document.currentScript;try{throw new Error}catch(l){var e,t,n,r=/.*at [^(]*\((.*):(.+):(.+)\)$/gi,o=/@([^@]*):(\d+):(\d+)\s*$/gi,i=r.exec(l.stack)||o.exec(l.stack),a=i&&i[1]||!1,c=i&&i[2]||!1,s=document.location.href.replace(document.location.hash,""),u=document.getElementsByTagName("script");a===s&&(e=document.documentElement.outerHTML,t=new RegExp("(?:[^\\n]+?\\n){0,"+(c-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),n=e.replace(t,"$1").trim());for(var f=0;f<u.length;f++){if("interactive"===u[f].readyState)return u[f];if(u[f].src===a)return u[f];if(a===s&&u[f].innerHTML&&u[f].innerHTML.trim()===n)return u[f]}return null}}return e}))},"8df4":function(e,t,n){"use strict";var r=n("7a77");function o(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e,t=new o((function(t){e=t}));return{token:t,cancel:e}},e.exports=o},9353:function(e,t,n){"use strict";var r=n("071d"),o=n.n(r);o.a},b50d:function(e,t,n){"use strict";var r=n("c532"),o=n("467f"),i=n("30b5"),a=n("83b9"),c=n("c345"),s=n("3934"),u=n("2d83");e.exports=function(e){return new Promise((function(t,f){var l=e.data,p=e.headers;r.isFormData(l)&&delete p["Content-Type"];var d=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",m=e.auth.password||"";p.Authorization="Basic "+btoa(h+":"+m)}var v=a(e.baseURL,e.url);if(d.open(e.method.toUpperCase(),i(v,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?c(d.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?d.response:d.responseText,i={data:r,status:d.status,statusText:d.statusText,headers:n,config:e,request:d};o(t,f,i),d=null}},d.onabort=function(){d&&(f(u("Request aborted",e,"ECONNABORTED",d)),d=null)},d.onerror=function(){f(u("Network Error",e,null,d)),d=null},d.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),f(u(t,e,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var g=n("7aac"),b=(e.withCredentials||s(v))&&e.xsrfCookieName?g.read(e.xsrfCookieName):void 0;b&&(p[e.xsrfHeaderName]=b)}if("setRequestHeader"in d&&r.forEach(p,(function(e,t){"undefined"===typeof l&&"content-type"===t.toLowerCase()?delete p[t]:d.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(d.withCredentials=!!e.withCredentials),e.responseType)try{d.responseType=e.responseType}catch(y){if("json"!==e.responseType)throw y}"function"===typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){d&&(d.abort(),f(e),d=null)})),void 0===l&&(l=null),d.send(l)}))}},bc3a:function(e,t,n){e.exports=n("cee4")},c345:function(e,t,n){"use strict";var r=n("c532"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,a={};return e?(r.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(a[t]&&o.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}})),a):a}},c401:function(e,t,n){"use strict";var r=n("c532");e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},c532:function(e,t,n){"use strict";var o=n("1d2b"),i=Object.prototype.toString;function a(e){return"[object Array]"===i.call(e)}function c(e){return"undefined"===typeof e}function s(e){return null!==e&&!c(e)&&null!==e.constructor&&!c(e.constructor)&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function u(e){return"[object ArrayBuffer]"===i.call(e)}function f(e){return"undefined"!==typeof FormData&&e instanceof FormData}function l(e){var t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer,t}function p(e){return"string"===typeof e}function d(e){return"number"===typeof e}function h(e){return null!==e&&"object"===r(e)}function m(e){return"[object Date]"===i.call(e)}function v(e){return"[object File]"===i.call(e)}function g(e){return"[object Blob]"===i.call(e)}function b(e){return"[object Function]"===i.call(e)}function y(e){return h(e)&&b(e.pipe)}function w(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams}function x(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function _(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function S(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==r(e)&&(e=[e]),a(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function C(){var e={};function t(t,n){"object"===r(e[n])&&"object"===r(t)?e[n]=C(e[n],t):e[n]=t}for(var n=0,o=arguments.length;n<o;n++)S(arguments[n],t);return e}function j(){var e={};function t(t,n){"object"===r(e[n])&&"object"===r(t)?e[n]=j(e[n],t):"object"===r(t)?e[n]=j({},t):e[n]=t}for(var n=0,o=arguments.length;n<o;n++)S(arguments[n],t);return e}function E(e,t,n){return S(t,(function(t,r){e[r]=n&&"function"===typeof t?o(t,n):t})),e}e.exports={isArray:a,isArrayBuffer:u,isBuffer:s,isFormData:f,isArrayBufferView:l,isString:p,isNumber:d,isObject:h,isUndefined:c,isDate:m,isFile:v,isBlob:g,isFunction:b,isStream:y,isURLSearchParams:w,isStandardBrowserEnv:_,forEach:S,merge:C,deepMerge:j,extend:E,trim:x}},c8af:function(e,t,n){"use strict";var r=n("c532");e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},cee4:function(e,t,n){"use strict";var r=n("c532"),o=n("1d2b"),i=n("0a06"),a=n("4a7b"),c=n("2444");function s(e){var t=new i(e),n=o(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n}var u=s(c);u.Axios=i,u.create=function(e){return s(a(u.defaults,e))},u.Cancel=n("7a77"),u.CancelToken=n("8df4"),u.isCancel=n("2e67"),u.all=function(e){return Promise.all(e)},u.spread=n("0df6"),e.exports=u,e.exports.default=u},d925:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},df7c:function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var o=e[r];"."===o?e.splice(r,1):".."===o?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e){"string"!==typeof e&&(e+="");var t,n=0,r=-1,o=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!o){n=t+1;break}}else-1===r&&(o=!1,r=t+1);return-1===r?"":e.slice(n,r)}function o(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",r=!1,i=arguments.length-1;i>=-1&&!r;i--){var a=i>=0?arguments[i]:e.cwd();if("string"!==typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(t=a+"/"+t,r="/"===a.charAt(0))}return t=n(o(t.split("/"),(function(e){return!!e})),!r).join("/"),(r?"/":"")+t||"."},t.normalize=function(e){var r=t.isAbsolute(e),a="/"===i(e,-1);return e=n(o(e.split("/"),(function(e){return!!e})),!r).join("/"),e||r||(e="."),e&&a&&(e+="/"),(r?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(o(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var n=e.length-1;n>=0;n--)if(""!==e[n])break;return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var o=r(e.split("/")),i=r(n.split("/")),a=Math.min(o.length,i.length),c=a,s=0;s<a;s++)if(o[s]!==i[s]){c=s;break}var u=[];for(s=c;s<o.length;s++)u.push("..");return u=u.concat(i.slice(c)),u.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,o=!0,i=e.length-1;i>=1;--i)if(t=e.charCodeAt(i),47===t){if(!o){r=i;break}}else o=!1;return-1===r?n?"/":".":n&&1===r?"/":e.slice(0,r)},t.basename=function(e,t){var n=r(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,n=0,r=-1,o=!0,i=0,a=e.length-1;a>=0;--a){var c=e.charCodeAt(a);if(47!==c)-1===r&&(o=!1,r=a+1),46===c?-1===t?t=a:1!==i&&(i=1):-1!==t&&(i=-1);else if(!o){n=a+1;break}}return-1===t||-1===r||0===i||1===i&&t===r-1&&t===n+1?"":e.slice(t,r)};var i="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("4362"))},e683:function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},f6b4:function(e,t,n){"use strict";var r=n("c532");function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},fb15:function(e,t,n){"use strict";if(n.r(t),"undefined"!==typeof window){var r=window.document.currentScript,o=n("8875");r=o(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:o});var i=r&&r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);i&&(n.p=i[1])}var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.items.length?n("section",{staticClass:"list"},e._l(e.items,(function(t,r){return n("ul",{key:r,staticClass:"list__container",style:{"border-left-color":e.colors[r]}},[n("li",{staticClass:"list__item"},[e._v(e._s(t.name))])])})),0):e._e()},c=[],s=n("bc3a"),u={name:"List",data:function(){return{items:[],colors:["#c7c7c7","#bcbd22","#dbdb8d","#17becf","#ff9896","#e377c2","#f7b6d2","#9edae5","#9467bd","#c5b0d5","#8c564b","#9591C2","#A1DDFF","#98df8a","#d62728","#c49c94"]}},mounted:function(){var e=this;s.get("https://pokeapi.co/api/v2/pokemon/?limit=10").then((function(t){return e.items=t.data.results})).catch((function(e){return console.log(e)}))}},f=u;n("9353");function l(e,t,n,r,o,i,a,c){var s,u="function"===typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(s=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},u._ssrRegister=s):o&&(s=c?function(){o.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:o),s)if(u.functional){u._injectStyles=s;var f=u.render;u.render=function(e,t){return s.call(t),f(e,t)}}else{var l=u.beforeCreate;u.beforeCreate=l?[].concat(l,s):[s]}return{exports:e,options:u}}var p=l(f,a,c,!1,null,"33a6c666",null),d=p.exports,h=d;t["default"]=h}})},2879:function(e,t,n){n("502c"),n("3dba"),n("09e2"),n("6e1f"),n("0001"),n("bf76"),n("c6e8"),n("eca9"),n("7627"),n("6f5f"),n("3f3d"),n("39a7"),n("5468");var r=n("7037");e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===r(e)&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="fb15")}({8128:function(e,t,n){"use strict";var r=n("f898"),o=n.n(r);o.a},8875:function(e,t,n){var r,o,i;(function(n,a){o=[],r=a,i="function"===typeof r?r.apply(t,o):r,void 0===i||(e.exports=i)})("undefined"!==typeof self&&self,(function(){function e(){if(document.currentScript)return document.currentScript;try{throw new Error}catch(l){var e,t,n,r=/.*at [^(]*\((.*):(.+):(.+)\)$/gi,o=/@([^@]*):(\d+):(\d+)\s*$/gi,i=r.exec(l.stack)||o.exec(l.stack),a=i&&i[1]||!1,c=i&&i[2]||!1,s=document.location.href.replace(document.location.hash,""),u=document.getElementsByTagName("script");a===s&&(e=document.documentElement.outerHTML,t=new RegExp("(?:[^\\n]+?\\n){0,"+(c-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),n=e.replace(t,"$1").trim());for(var f=0;f<u.length;f++){if("interactive"===u[f].readyState)return u[f];if(u[f].src===a)return u[f];if(a===s&&u[f].innerHTML&&u[f].innerHTML.trim()===n)return u[f]}return null}}return e}))},f898:function(e,t,n){},fb15:function(e,t,n){"use strict";if(n.r(t),"undefined"!==typeof window){var r=window.document.currentScript,o=n("8875");r=o(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:o});var i=r&&r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);i&&(n.p=i[1])}var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"image__wrapper"},[n("picture",{staticClass:"image__item"},[n("source",{attrs:{srcset:"https://picsum.photos/1360/800",media:"(min-width: 1400px)"}}),n("source",{attrs:{srcset:"https://placeimg.com/1000/800/nature",media:"(min-width: 1200px)"}}),n("source",{attrs:{srcset:"https://placeimg.com/800/800/nature",media:"(min-width: 960px)"}}),n("source",{attrs:{srcset:"https://placeimg.com/600/600/nature",media:"(min-width: 640px)"}}),n("img",{attrs:{src:"https://placeimg.com/200/200/nature",alt:"example"}})])])}],s={name:"ImageItem"},u=s;n("8128");function f(e,t,n,r,o,i,a,c){var s,u="function"===typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(s=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},u._ssrRegister=s):o&&(s=c?function(){o.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:o),s)if(u.functional){u._injectStyles=s;var f=u.render;u.render=function(e,t){return s.call(t),f(e,t)}}else{var l=u.beforeCreate;u.beforeCreate=l?[].concat(l,s):[s]}return{exports:e,options:u}}var l=f(u,a,c,!1,null,"543b77fc",null),p=l.exports,d=p;t["default"]=d}})},2895:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("NavBar",{on:{goTo:e.onGoTo}}),n("router-view")],1)},i=[],a=(n("b0c0"),n("e226")),c=n.n(a),s={name:"App",components:{NavBar:c.a},methods:{onGoTo:function(e){this.$route.name!==e&&this.$router.push({path:e}).catch((function(){}))}}},u=s,f=(n("034f"),n("2877")),l=Object(f["a"])(u,o,i,!1,null,null,null),p=l.exports,d=n("8c4f"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"page-not-found"},[e._v(" Page not found ")])},m=[],v={name:"ErrorPage"},g=v,b=(n("b579"),Object(f["a"])(g,h,m,!1,null,null,null)),y=b.exports,w=n("2879"),x=n.n(w),_=n("264d"),S=n.n(_);r["a"].use(d["a"]);var C=new d["a"]({routes:[{path:"/"},{path:"/list",name:"list",component:S.a},{path:"/image",name:"image",component:x.a},{path:"/home",redirect:"/"},{path:"*",component:y}]}),j=C;n("5825"),n("ecbb"),n("2895");r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(p)},router:j}).$mount("#app")},5825:function(e,t,n){},"85ec":function(e,t,n){},b579:function(e,t,n){"use strict";var r=n("0a4e"),o=n.n(r);o.a},e226:function(e,t,n){n("b171"),n("75c9"),n("9b51"),n("5e84"),n("41d4"),n("95f6"),n("2e3f"),n("a408"),n("9673"),n("d883"),n("af73"),n("9c61"),n("d569");var r=n("7037");e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===r(e)&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="fb15")}({8875:function(e,t,n){var r,o,i;(function(n,a){o=[],r=a,i="function"===typeof r?r.apply(t,o):r,void 0===i||(e.exports=i)})("undefined"!==typeof self&&self,(function(){function e(){if(document.currentScript)return document.currentScript;try{throw new Error}catch(l){var e,t,n,r=/.*at [^(]*\((.*):(.+):(.+)\)$/gi,o=/@([^@]*):(\d+):(\d+)\s*$/gi,i=r.exec(l.stack)||o.exec(l.stack),a=i&&i[1]||!1,c=i&&i[2]||!1,s=document.location.href.replace(document.location.hash,""),u=document.getElementsByTagName("script");a===s&&(e=document.documentElement.outerHTML,t=new RegExp("(?:[^\\n]+?\\n){0,"+(c-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),n=e.replace(t,"$1").trim());for(var f=0;f<u.length;f++){if("interactive"===u[f].readyState)return u[f];if(u[f].src===a)return u[f];if(a===s&&u[f].innerHTML&&u[f].innerHTML.trim()===n)return u[f]}return null}}return e}))},d5a8:function(e,t,n){},ed6b:function(e,t,n){"use strict";var r=n("d5a8"),o=n.n(r);o.a},fb15:function(e,t,n){"use strict";if(n.r(t),"undefined"!==typeof window){var r=window.document.currentScript,o=n("8875");r=o(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:o});var i=r&&r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);i&&(n.p=i[1])}var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("aside",{staticClass:"aside-wrapper",class:{"aside-wrapper__mini":e.mini}},[n("section",[n("div",{staticClass:"aside-wrapper__top"},[n("div",{staticClass:"aside-wrapper__picture",on:{click:e.openNav}},[n("img",{attrs:{src:"https://source.unsplash.com/random/80x80",alt:"random image"},on:{click:function(t){return e.goTo("home")}}})]),n("span",{staticClass:"aside-wrapper__main-text"},[e._v("Lorem ipsum")]),n("button",{staticClass:"aside-wrapper__btn",on:{click:e.closeNav}},[e._v("<")])]),n("nav",{staticClass:"aside-wrapper__nav"},[n("ul",[n("li",{staticClass:"aside-wrapper__nav-item",on:{click:function(t){return e.goTo("list")}}},[n("svg",{staticStyle:{"enable-background":"new 0 0 426.667 426.667"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 426.667 426.667","xml:space":"preserve",width:"30px",height:"30px"},on:{click:e.openNav}},[n("g",[n("g",[n("g",[n("path",{staticClass:"active-path",attrs:{d:"M362.667,42.667h-89.28C264.64,17.92,241.173,0,213.333,0s-51.307,17.92-60.053,42.667H64    c-23.573,0-42.667,19.093-42.667,42.667V384c0,23.573,19.093,42.667,42.667,42.667h298.667c23.573,0,42.667-19.093,42.667-42.667    V85.333C405.333,61.76,386.24,42.667,362.667,42.667z M213.333,42.667c11.733,0,21.333,9.493,21.333,21.333    c0,11.84-9.6,21.333-21.333,21.333S192,75.84,192,64C192,52.16,201.6,42.667,213.333,42.667z M256,341.333H106.667v-42.667H256    V341.333z M320,256H106.667v-42.667H320V256z M320,170.667H106.667V128H320V170.667z","data-original":"#000000","data-old_color":"#000000",fill:"#0000008A"}})])])])]),n("span",[e._v("list")])]),n("li",{staticClass:"aside-wrapper__nav-item",on:{click:function(t){return e.goTo("image")}}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"28px",viewBox:"0 -36 512.001 512",width:"28px"},on:{click:e.openNav}},[n("g",[n("path",{staticClass:"active-path",attrs:{d:"m8.785156 336.820312 115.558594-115.558593c2.980469-2.980469 6.941406-4.621094 11.15625-4.621094 4.21875 0 8.183594 1.644531 11.164062 4.628906l85.238282 85.234375 133.441406-133.441406c6.148438-6.148438 16.152344-6.152344 22.304688-.011719l115.566406 115.566407h8.785156v-269.921876c0-10.308593-8.386719-18.695312-18.695312-18.695312h-474.609376c-10.308593 0-18.695312 8.386719-18.695312 18.695312v318.125zm223.113282-241.003906c28.203124 0 51.152343 22.949219 51.152343 51.152344s-22.949219 51.148438-51.152343 51.148438c-28.203126 0-51.148438-22.945313-51.148438-51.148438s22.945312-51.152344 51.148438-51.152344zm0 0","data-original":"#000000","data-old_color":"#000000",fill:"#0000008A"}}),n("path",{staticClass:"active-path",attrs:{d:"m231.898438 168.117188c11.664062 0 21.152343-9.488282 21.152343-21.148438 0-11.664062-9.488281-21.152344-21.152343-21.152344-11.660157 0-21.148438 9.488282-21.148438 21.152344 0 11.660156 9.488281 21.148438 21.148438 21.148438zm0 0","data-original":"#000000","data-old_color":"#000000",fill:"#0000008A"}}),n("path",{staticClass:"active-path",attrs:{d:"m497 318.617188c-4.140625 0-7.894531-1.679688-10.609375-4.394532l-109.890625-109.894531-133.445312 133.445313c-2.980469 2.980468-6.941407 4.621093-11.15625 4.621093-4.21875 0-8.183594-1.644531-11.164063-4.628906l-85.234375-85.234375-109.890625 109.890625c-2.714844 2.714844-6.46875 4.394531-10.609375 4.394531h-15v53.605469c0 10.308594 8.386719 18.695313 18.695312 18.695313h474.609376c10.308593 0 18.695312-8.386719 18.695312-18.695313v-101.804687zm0 0","data-original":"#000000","data-old_color":"#000000",fill:"#0000008A"}})])]),n("span",[e._v("image")])])])])])])},c=[],s={name:"NavBar",data:function(){return{mini:!1}},methods:{openNav:function(){this.mini=!1},closeNav:function(){this.mini=!0},goTo:function(e){this.$emit("goTo",e)}}},u=s;n("ed6b");function f(e,t,n,r,o,i,a,c){var s,u="function"===typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(s=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},u._ssrRegister=s):o&&(s=c?function(){o.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:o),s)if(u.functional){u._injectStyles=s;var f=u.render;u.render=function(e,t){return s.call(t),f(e,t)}}else{var l=u.beforeCreate;u.beforeCreate=l?[].concat(l,s):[s]}return{exports:e,options:u}}var l=f(u,a,c,!1,null,null,null),p=l.exports,d=p;t["default"]=d}})},ecbb:function(e,t,n){}});
//# sourceMappingURL=app.8833748b.js.map