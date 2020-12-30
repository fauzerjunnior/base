/*
 * Include
 * Usage: //=include path/file.js
 */

/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */

!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});


/*
 * jQuery.appear
 * https://github.com/bas2k/jquery.appear/
 * http://code.google.com/p/jquery-appear/
 * http://bas2k.ru/
 *
 * Copyright (c) 2009 Michael Hixson
 * Copyright (c) 2012-2014 Alexander Brovikov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
!function(a){a.fn.appear=function(b,c){var d=a.extend({data:void 0,one:!0,accX:0,accY:0},c);return this.each(function(){var c=a(this);if(c.appeared=!1,!b)return void c.trigger("appear",d.data);var e=a(window),f=function(){if(!c.is(":visible"))return void(c.appeared=!1);var a=e.scrollLeft(),b=e.scrollTop(),f=c.offset(),g=f.left,h=f.top,i=d.accX,j=d.accY,k=c.height(),l=e.height(),m=c.width(),n=e.width();h+k+j>=b&&b+l+j>=h&&g+m+i>=a&&a+n+i>=g?c.appeared||c.trigger("appear",d.data):c.appeared=!1},g=function(){if(c.appeared=!0,d.one){e.unbind("scroll",f);var g=a.inArray(f,a.fn.appear.checks);g>=0&&a.fn.appear.checks.splice(g,1)}b.apply(this,arguments)};d.one?c.one("appear",d.data,g):c.bind("appear",d.data,g),e.scroll(f),a.fn.appear.checks.push(f),f()})},a.extend(a.fn.appear,{checks:[],timeout:null,checkAll:function(){var b=a.fn.appear.checks.length;if(b>0)for(;b--;)a.fn.appear.checks[b]()},run:function(){a.fn.appear.timeout&&clearTimeout(a.fn.appear.timeout),a.fn.appear.timeout=setTimeout(a.fn.appear.checkAll,20)}}),a.each(["append","prepend","after","before","attr","removeAttr","addClass","removeClass","toggleClass","remove","css","show","hide"],function(b,c){var d=a.fn[c];d&&(a.fn[c]=function(){var b=d.apply(this,arguments);return a.fn.appear.run(),b})})}(jQuery);
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/
jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return 0==b?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){return 0==b?c:b==e?c+d:(b/=e/2)<1?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return(b/=e/2)<1?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*(2*Math.PI)/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*(2*Math.PI)/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(2==(b/=e/2))return c+d;if(g||(g=e*(.3*1.5)),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return 1>b?-.5*(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*(2*Math.PI)/g))+c:h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*(2*Math.PI)/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),(b/=e/2)<1?d/2*(b*b*(((f*=1.525)+1)*b-f))+c:d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){return(b/=e)<1/2.75?d*(7.5625*b*b)+c:2/2.75>b?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:2.5/2.75>b?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},easeInOutBounce:function(a,b,c,d,e){return e/2>b?.5*jQuery.easing.easeInBounce(a,2*b,0,d,e)+c:.5*jQuery.easing.easeOutBounce(a,2*b-e,0,d,e)+.5*d+c}});
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});

/*!

  * Bootstrap v4.1.0 (https://getbootstrap.com/)

  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)

  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)

  */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery")):"function"==typeof define&&define.amd?define(["exports","jquery"],e):e(t.bootstrap={},t.jQuery)}(this,function(t,e){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function c(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},e=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),e.forEach(function(t){var e,n,i;e=r,i=o[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i})}return r}for(var r,n,o,a,l,f,h,u,d,p,g,m,_,v,E,y,b,T,C,w,I,D,A,S,O,N,k,L,P,x,j,R,M,H,W,F,U,B,K,V,Q,Y,G,q,z,X,J,Z,$,tt,et,nt,it,rt,ot,st,at,lt,ct,ft,ht,ut,dt,pt,gt=function(i){var e="transitionend";function t(t){var e=this,n=!1;return i(this).one(l.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||l.triggerTransitionEnd(e)},t),this}var l={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");e&&"#"!==e||(e=t.getAttribute("href")||"");try{return 0<i(document).find(e).length?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=i(t).css("transition-duration");return parseFloat(e)?(e=e.split(",")[0],1e3*parseFloat(e)):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){i(t).trigger(e)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var r=n[i],o=e[i],s=o&&l.isElement(o)?"element":(a=o,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(r).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+r+'".')}var a}};return i.fn.emulateTransitionEnd=t,i.event.special[l.TRANSITION_END]={bindType:e,delegateType:e,handle:function(t){if(i(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}},l}(e=e&&e.hasOwnProperty("default")?e.default:e),mt=(n="alert",a="."+(o="bs.alert"),l=(r=e).fn[n],f={CLOSE:"close"+a,CLOSED:"closed"+a,CLICK_DATA_API:"click"+a+".data-api"},h="alert",u="fade",d="show",p=function(){function i(t){this._element=t}var t=i.prototype;return t.close=function(t){t=t||this._element;var e=this._getRootElement(t);this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},t.dispose=function(){r.removeData(this._element,o),this._element=null},t._getRootElement=function(t){var e=gt.getSelectorFromElement(t),n=!1;return e&&(n=r(e)[0]),n||(n=r(t).closest("."+h)[0]),n},t._triggerCloseEvent=function(t){var e=r.Event(f.CLOSE);return r(t).trigger(e),e},t._removeElement=function(e){var n=this;if(r(e).removeClass(d),r(e).hasClass(u)){var t=gt.getTransitionDurationFromElement(e);r(e).one(gt.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(t)}else this._destroyElement(e)},t._destroyElement=function(t){r(t).detach().trigger(f.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var t=r(this),e=t.data(o);e||(e=new i(this),t.data(o,e)),"close"===n&&e[n](this)})},i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},s(i,null,[{key:"VERSION",get:function(){return"4.1.0"}}]),i}(),r(document).on(f.CLICK_DATA_API,'[data-dismiss="alert"]',p._handleDismiss(new p)),r.fn[n]=p._jQueryInterface,r.fn[n].Constructor=p,r.fn[n].noConflict=function(){return r.fn[n]=l,p._jQueryInterface},p),_t=(m="button",v="."+(_="bs.button"),E=".data-api",y=(g=e).fn[m],b="active",T="btn",w='[data-toggle^="button"]',I='[data-toggle="buttons"]',D="input",A=".active",S=".btn",O={CLICK_DATA_API:"click"+v+E,FOCUS_BLUR_DATA_API:(C="focus")+v+E+" blur"+v+E},N=function(){function n(t){this._element=t}var t=n.prototype;return t.toggle=function(){var t=!0,e=!0,n=g(this._element).closest(I)[0];if(n){var i=g(this._element).find(D)[0];if(i){if("radio"===i.type)if(i.checked&&g(this._element).hasClass(b))t=!1;else{var r=g(n).find(A)[0];r&&g(r).removeClass(b)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!g(this._element).hasClass(b),g(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!g(this._element).hasClass(b)),t&&g(this._element).toggleClass(b)},t.dispose=function(){g.removeData(this._element,_),this._element=null},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(_);t||(t=new n(this),g(this).data(_,t)),"toggle"===e&&t[e]()})},s(n,null,[{key:"VERSION",get:function(){return"4.1.0"}}]),n}(),g(document).on(O.CLICK_DATA_API,w,function(t){t.preventDefault();var e=t.target;g(e).hasClass(T)||(e=g(e).closest(S)),N._jQueryInterface.call(g(e),"toggle")}).on(O.FOCUS_BLUR_DATA_API,w,function(t){var e=g(t.target).closest(S)[0];g(e).toggleClass(C,/^focus(in)?$/.test(t.type))}),g.fn[m]=N._jQueryInterface,g.fn[m].Constructor=N,g.fn[m].noConflict=function(){return g.fn[m]=y,N._jQueryInterface},N),vt=(L="carousel",x="."+(P="bs.carousel"),j=".data-api",R=(k=e).fn[L],M={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},H={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},W="next",F="prev",U="left",B="right",K={SLIDE:"slide"+x,SLID:"slid"+x,KEYDOWN:"keydown"+x,MOUSEENTER:"mouseenter"+x,MOUSELEAVE:"mouseleave"+x,TOUCHEND:"touchend"+x,LOAD_DATA_API:"load"+x+j,CLICK_DATA_API:"click"+x+j},V="carousel",Q="active",Y="slide",G="carousel-item-right",q="carousel-item-left",z="carousel-item-next",X="carousel-item-prev",J={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},Z=function(){function o(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(e),this._element=k(t)[0],this._indicatorsElement=k(this._element).find(J.INDICATORS)[0],this._addEventListeners()}var t=o.prototype;return t.next=function(){this._isSliding||this._slide(W)},t.nextWhenVisible=function(){!document.hidden&&k(this._element).is(":visible")&&"hidden"!==k(this._element).css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(F)},t.pause=function(t){t||(this._isPaused=!0),k(this._element).find(J.NEXT_PREV)[0]&&(gt.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(t){var e=this;this._activeElement=k(this._element).find(J.ACTIVE_ITEM)[0];var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)k(this._element).one(K.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?W:F;this._slide(i,this._items[t])}},t.dispose=function(){k(this._element).off(x),k.removeData(this._element,P),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(t){return t=c({},M,t),gt.typeCheckConfig(L,t,H),t},t._addEventListeners=function(){var e=this;this._config.keyboard&&k(this._element).on(K.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&(k(this._element).on(K.MOUSEENTER,function(t){return e.pause(t)}).on(K.MOUSELEAVE,function(t){return e.cycle(t)}),"ontouchstart"in document.documentElement&&k(this._element).on(K.TOUCHEND,function(){e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval)}))},t._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},t._getItemIndex=function(t){return this._items=k.makeArray(k(t).parent().find(J.ITEM)),this._items.indexOf(t)},t._getItemByDirection=function(t,e){var n=t===W,i=t===F,r=this._getItemIndex(e),o=this._items.length-1;if((i&&0===r||n&&r===o)&&!this._config.wrap)return e;var s=(r+(t===F?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},t._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(k(this._element).find(J.ACTIVE_ITEM)[0]),r=k.Event(K.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return k(this._element).trigger(r),r},t._setActiveIndicatorElement=function(t){if(this._indicatorsElement){k(this._indicatorsElement).find(J.ACTIVE).removeClass(Q);var e=this._indicatorsElement.children[this._getItemIndex(t)];e&&k(e).addClass(Q)}},t._slide=function(t,e){var n,i,r,o=this,s=k(this._element).find(J.ACTIVE_ITEM)[0],a=this._getItemIndex(s),l=e||s&&this._getItemByDirection(t,s),c=this._getItemIndex(l),f=Boolean(this._interval);if(t===W?(n=q,i=z,r=U):(n=G,i=X,r=B),l&&k(l).hasClass(Q))this._isSliding=!1;else if(!this._triggerSlideEvent(l,r).isDefaultPrevented()&&s&&l){this._isSliding=!0,f&&this.pause(),this._setActiveIndicatorElement(l);var h=k.Event(K.SLID,{relatedTarget:l,direction:r,from:a,to:c});if(k(this._element).hasClass(Y)){k(l).addClass(i),gt.reflow(l),k(s).addClass(n),k(l).addClass(n);var u=gt.getTransitionDurationFromElement(s);k(s).one(gt.TRANSITION_END,function(){k(l).removeClass(n+" "+i).addClass(Q),k(s).removeClass(Q+" "+i+" "+n),o._isSliding=!1,setTimeout(function(){return k(o._element).trigger(h)},0)}).emulateTransitionEnd(u)}else k(s).removeClass(Q),k(l).addClass(Q),this._isSliding=!1,k(this._element).trigger(h);f&&this.cycle()}},o._jQueryInterface=function(i){return this.each(function(){var t=k(this).data(P),e=c({},M,k(this).data());"object"==typeof i&&(e=c({},e,i));var n="string"==typeof i?i:e.slide;if(t||(t=new o(this,e),k(this).data(P,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&(t.pause(),t.cycle())})},o._dataApiClickHandler=function(t){var e=gt.getSelectorFromElement(this);if(e){var n=k(e)[0];if(n&&k(n).hasClass(V)){var i=c({},k(n).data(),k(this).data()),r=this.getAttribute("data-slide-to");r&&(i.interval=!1),o._jQueryInterface.call(k(n),i),r&&k(n).data(P).to(r),t.preventDefault()}}},s(o,null,[{key:"VERSION",get:function(){return"4.1.0"}},{key:"Default",get:function(){return M}}]),o}(),k(document).on(K.CLICK_DATA_API,J.DATA_SLIDE,Z._dataApiClickHandler),k(window).on(K.LOAD_DATA_API,function(){k(J.DATA_RIDE).each(function(){var t=k(this);Z._jQueryInterface.call(t,t.data())})}),k.fn[L]=Z._jQueryInterface,k.fn[L].Constructor=Z,k.fn[L].noConflict=function(){return k.fn[L]=R,Z._jQueryInterface},Z),Et=(tt="collapse",nt="."+(et="bs.collapse"),it=($=e).fn[tt],rt={toggle:!0,parent:""},ot={toggle:"boolean",parent:"(string|element)"},st={SHOW:"show"+nt,SHOWN:"shown"+nt,HIDE:"hide"+nt,HIDDEN:"hidden"+nt,CLICK_DATA_API:"click"+nt+".data-api"},at="show",lt="collapse",ct="collapsing",ft="collapsed",ht="width",ut="height",dt={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},pt=function(){function a(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=$.makeArray($('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var n=$(dt.DATA_TOGGLE),i=0;i<n.length;i++){var r=n[i],o=gt.getSelectorFromElement(r);null!==o&&0<$(o).filter(t).length&&(this._selector=o,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=a.prototype;return t.toggle=function(){$(this._element).hasClass(at)?this.hide():this.show()},t.show=function(){var t,e,n=this;if(!this._isTransitioning&&!$(this._element).hasClass(at)&&(this._parent&&0===(t=$.makeArray($(this._parent).find(dt.ACTIVES).filter('[data-parent="'+this._config.parent+'"]'))).length&&(t=null),!(t&&(e=$(t).not(this._selector).data(et))&&e._isTransitioning))){var i=$.Event(st.SHOW);if($(this._element).trigger(i),!i.isDefaultPrevented()){t&&(a._jQueryInterface.call($(t).not(this._selector),"hide"),e||$(t).data(et,null));var r=this._getDimension();$(this._element).removeClass(lt).addClass(ct),(this._element.style[r]=0)<this._triggerArray.length&&$(this._triggerArray).removeClass(ft).attr("aria-expanded",!0),this.setTransitioning(!0);var o="scroll"+(r[0].toUpperCase()+r.slice(1)),s=gt.getTransitionDurationFromElement(this._element);$(this._element).one(gt.TRANSITION_END,function(){$(n._element).removeClass(ct).addClass(lt).addClass(at),n._element.style[r]="",n.setTransitioning(!1),$(n._element).trigger(st.SHOWN)}).emulateTransitionEnd(s),this._element.style[r]=this._element[o]+"px"}}},t.hide=function(){var t=this;if(!this._isTransitioning&&$(this._element).hasClass(at)){var e=$.Event(st.HIDE);if($(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();if(this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",gt.reflow(this._element),$(this._element).addClass(ct).removeClass(lt).removeClass(at),0<this._triggerArray.length)for(var i=0;i<this._triggerArray.length;i++){var r=this._triggerArray[i],o=gt.getSelectorFromElement(r);if(null!==o)$(o).hasClass(at)||$(r).addClass(ft).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var s=gt.getTransitionDurationFromElement(this._element);$(this._element).one(gt.TRANSITION_END,function(){t.setTransitioning(!1),$(t._element).removeClass(ct).addClass(lt).trigger(st.HIDDEN)}).emulateTransitionEnd(s)}}},t.setTransitioning=function(t){this._isTransitioning=t},t.dispose=function(){$.removeData(this._element,et),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(t){return(t=c({},rt,t)).toggle=Boolean(t.toggle),gt.typeCheckConfig(tt,t,ot),t},t._getDimension=function(){return $(this._element).hasClass(ht)?ht:ut},t._getParent=function(){var n=this,t=null;gt.isElement(this._config.parent)?(t=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(t=this._config.parent[0])):t=$(this._config.parent)[0];var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return $(t).find(e).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}),t},t._addAriaAndCollapsedClass=function(t,e){if(t){var n=$(t).hasClass(at);0<e.length&&$(e).toggleClass(ft,!n).attr("aria-expanded",n)}},a._getTargetFromElement=function(t){var e=gt.getSelectorFromElement(t);return e?$(e)[0]:null},a._jQueryInterface=function(i){return this.each(function(){var t=$(this),e=t.data(et),n=c({},rt,t.data(),"object"==typeof i&&i);if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(et,e)),"string"==typeof i){if("undefined"==typeof e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.1.0"}},{key:"Default",get:function(){return rt}}]),a}(),$(document).on(st.CLICK_DATA_API,dt.DATA_TOGGLE,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=$(this),e=gt.getSelectorFromElement(this);$(e).each(function(){var t=$(this),e=t.data(et)?"toggle":n.data();pt._jQueryInterface.call(t,e)})}),$.fn[tt]=pt._jQueryInterface,$.fn[tt].Constructor=pt,$.fn[tt].noConflict=function(){return $.fn[tt]=it,pt._jQueryInterface},pt),yt="undefined"!=typeof window&&"undefined"!=typeof document,bt=["Edge","Trident","Firefox"],Tt=0,Ct=0;Ct<bt.length;Ct+=1)if(yt&&0<=navigator.userAgent.indexOf(bt[Ct])){Tt=1;break}var wt=yt&&window.Promise?function(t){var e=!1;return function(){e||(e=!0,window.Promise.resolve().then(function(){e=!1,t()}))}}:function(t){var e=!1;return function(){e||(e=!0,setTimeout(function(){e=!1,t()},Tt))}};function It(t){return t&&"[object Function]"==={}.toString.call(t)}function Dt(t,e){if(1!==t.nodeType)return[];var n=getComputedStyle(t,null);return e?n[e]:n}function At(t){return"HTML"===t.nodeName?t:t.parentNode||t.host}function St(t){if(!t)return document.body;switch(t.nodeName){case"HTML":case"BODY":return t.ownerDocument.body;case"#document":return t.body}var e=Dt(t),n=e.overflow,i=e.overflowX,r=e.overflowY;return/(auto|scroll|overlay)/.test(n+r+i)?t:St(At(t))}var Ot={},Nt=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"all";if(t=t.toString(),Ot.hasOwnProperty(t))return Ot[t];switch(t){case"11":Ot[t]=-1!==navigator.userAgent.indexOf("Trident");break;case"10":Ot[t]=-1!==navigator.appVersion.indexOf("MSIE 10");break;case"all":Ot[t]=-1!==navigator.userAgent.indexOf("Trident")||-1!==navigator.userAgent.indexOf("MSIE")}return Ot.all=Ot.all||Object.keys(Ot).some(function(t){return Ot[t]}),Ot[t]};function kt(t){if(!t)return document.documentElement;for(var e=Nt(10)?document.body:null,n=t.offsetParent;n===e&&t.nextElementSibling;)n=(t=t.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&"BODY"!==i&&"HTML"!==i?-1!==["TD","TABLE"].indexOf(n.nodeName)&&"static"===Dt(n,"position")?kt(n):n:t?t.ownerDocument.documentElement:document.documentElement}function Lt(t){return null!==t.parentNode?Lt(t.parentNode):t}function Pt(t,e){if(!(t&&t.nodeType&&e&&e.nodeType))return document.documentElement;var n=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING,i=n?t:e,r=n?e:t,o=document.createRange();o.setStart(i,0),o.setEnd(r,0);var s,a,l=o.commonAncestorContainer;if(t!==l&&e!==l||i.contains(r))return"BODY"===(a=(s=l).nodeName)||"HTML"!==a&&kt(s.firstElementChild)!==s?kt(l):l;var c=Lt(t);return c.host?Pt(c.host,e):Pt(t,Lt(e).host)}function xt(t){var e="top"===(1<arguments.length&&void 0!==arguments[1]?arguments[1]:"top")?"scrollTop":"scrollLeft",n=t.nodeName;if("BODY"===n||"HTML"===n){var i=t.ownerDocument.documentElement;return(t.ownerDocument.scrollingElement||i)[e]}return t[e]}function jt(t,e){var n="x"===e?"Left":"Top",i="Left"===n?"Right":"Bottom";return parseFloat(t["border"+n+"Width"],10)+parseFloat(t["border"+i+"Width"],10)}function Rt(t,e,n,i){return Math.max(e["offset"+t],e["scroll"+t],n["client"+t],n["offset"+t],n["scroll"+t],Nt(10)?n["offset"+t]+i["margin"+("Height"===t?"Top":"Left")]+i["margin"+("Height"===t?"Bottom":"Right")]:0)}function Mt(){var t=document.body,e=document.documentElement,n=Nt(10)&&getComputedStyle(e);return{height:Rt("Height",t,e,n),width:Rt("Width",t,e,n)}}var Ht=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Wt=function(){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}(),Ft=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},Ut=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};function Bt(t){return Ut({},t,{right:t.left+t.width,bottom:t.top+t.height})}function Kt(t){var e={};try{if(Nt(10)){e=t.getBoundingClientRect();var n=xt(t,"top"),i=xt(t,"left");e.top+=n,e.left+=i,e.bottom+=n,e.right+=i}else e=t.getBoundingClientRect()}catch(t){}var r={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top},o="HTML"===t.nodeName?Mt():{},s=o.width||t.clientWidth||r.right-r.left,a=o.height||t.clientHeight||r.bottom-r.top,l=t.offsetWidth-s,c=t.offsetHeight-a;if(l||c){var f=Dt(t);l-=jt(f,"x"),c-=jt(f,"y"),r.width-=l,r.height-=c}return Bt(r)}function Vt(t,e){var n=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=Nt(10),r="HTML"===e.nodeName,o=Kt(t),s=Kt(e),a=St(t),l=Dt(e),c=parseFloat(l.borderTopWidth,10),f=parseFloat(l.borderLeftWidth,10);n&&"HTML"===e.nodeName&&(s.top=Math.max(s.top,0),s.left=Math.max(s.left,0));var h=Bt({top:o.top-s.top-c,left:o.left-s.left-f,width:o.width,height:o.height});if(h.marginTop=0,h.marginLeft=0,!i&&r){var u=parseFloat(l.marginTop,10),d=parseFloat(l.marginLeft,10);h.top-=c-u,h.bottom-=c-u,h.left-=f-d,h.right-=f-d,h.marginTop=u,h.marginLeft=d}return(i&&!n?e.contains(a):e===a&&"BODY"!==a.nodeName)&&(h=function(t,e){var n=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=xt(e,"top"),r=xt(e,"left"),o=n?-1:1;return t.top+=i*o,t.bottom+=i*o,t.left+=r*o,t.right+=r*o,t}(h,e)),h}function Qt(t){if(!t||!t.parentElement||Nt())return document.documentElement;for(var e=t.parentElement;e&&"none"===Dt(e,"transform");)e=e.parentElement;return e||document.documentElement}function Yt(t,e,n,i){var r=4<arguments.length&&void 0!==arguments[4]&&arguments[4],o={top:0,left:0},s=r?Qt(t):Pt(t,e);if("viewport"===i)o=function(t){var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=t.ownerDocument.documentElement,i=Vt(t,n),r=Math.max(n.clientWidth,window.innerWidth||0),o=Math.max(n.clientHeight,window.innerHeight||0),s=e?0:xt(n),a=e?0:xt(n,"left");return Bt({top:s-i.top+i.marginTop,left:a-i.left+i.marginLeft,width:r,height:o})}(s,r);else{var a=void 0;"scrollParent"===i?"BODY"===(a=St(At(e))).nodeName&&(a=t.ownerDocument.documentElement):a="window"===i?t.ownerDocument.documentElement:i;var l=Vt(a,s,r);if("HTML"!==a.nodeName||function t(e){var n=e.nodeName;return"BODY"!==n&&"HTML"!==n&&("fixed"===Dt(e,"position")||t(At(e)))}(s))o=l;else{var c=Mt(),f=c.height,h=c.width;o.top+=l.top-l.marginTop,o.bottom=f+l.top,o.left+=l.left-l.marginLeft,o.right=h+l.left}}return o.left+=n,o.top+=n,o.right-=n,o.bottom-=n,o}function Gt(t,e,i,n,r){var o=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===t.indexOf("auto"))return t;var s=Yt(i,n,o,r),a={top:{width:s.width,height:e.top-s.top},right:{width:s.right-e.right,height:s.height},bottom:{width:s.width,height:s.bottom-e.bottom},left:{width:e.left-s.left,height:s.height}},l=Object.keys(a).map(function(t){return Ut({key:t},a[t],{area:(e=a[t],e.width*e.height)});var e}).sort(function(t,e){return e.area-t.area}),c=l.filter(function(t){var e=t.width,n=t.height;return e>=i.clientWidth&&n>=i.clientHeight}),f=0<c.length?c[0].key:l[0].key,h=t.split("-")[1];return f+(h?"-"+h:"")}function qt(t,e,n){var i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return Vt(n,i?Qt(e):Pt(e,n),i)}function zt(t){var e=getComputedStyle(t),n=parseFloat(e.marginTop)+parseFloat(e.marginBottom),i=parseFloat(e.marginLeft)+parseFloat(e.marginRight);return{width:t.offsetWidth+i,height:t.offsetHeight+n}}function Xt(t){var e={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,function(t){return e[t]})}function Jt(t,e,n){n=n.split("-")[0];var i=zt(t),r={width:i.width,height:i.height},o=-1!==["right","left"].indexOf(n),s=o?"top":"left",a=o?"left":"top",l=o?"height":"width",c=o?"width":"height";return r[s]=e[s]+e[l]/2-i[l]/2,r[a]=n===a?e[a]-i[c]:e[Xt(a)],r}function Zt(t,e){return Array.prototype.find?t.find(e):t.filter(e)[0]}function $t(t,n,e){return(void 0===e?t:t.slice(0,function(t,e,n){if(Array.prototype.findIndex)return t.findIndex(function(t){return t[e]===n});var i=Zt(t,function(t){return t[e]===n});return t.indexOf(i)}(t,"name",e))).forEach(function(t){t.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var e=t.function||t.fn;t.enabled&&It(e)&&(n.offsets.popper=Bt(n.offsets.popper),n.offsets.reference=Bt(n.offsets.reference),n=e(n,t))}),n}function te(t,n){return t.some(function(t){var e=t.name;return t.enabled&&e===n})}function ee(t){for(var e=[!1,"ms","Webkit","Moz","O"],n=t.charAt(0).toUpperCase()+t.slice(1),i=0;i<e.length;i++){var r=e[i],o=r?""+r+n:t;if("undefined"!=typeof document.body.style[o])return o}return null}function ne(t){var e=t.ownerDocument;return e?e.defaultView:window}function ie(t,e,n,i){n.updateBound=i,ne(t).addEventListener("resize",n.updateBound,{passive:!0});var r=St(t);return function t(e,n,i,r){var o="BODY"===e.nodeName,s=o?e.ownerDocument.defaultView:e;s.addEventListener(n,i,{passive:!0}),o||t(St(s.parentNode),n,i,r),r.push(s)}(r,"scroll",n.updateBound,n.scrollParents),n.scrollElement=r,n.eventsEnabled=!0,n}function re(){var t,e;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(t=this.reference,e=this.state,ne(t).removeEventListener("resize",e.updateBound),e.scrollParents.forEach(function(t){t.removeEventListener("scroll",e.updateBound)}),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e))}function oe(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}function se(n,i){Object.keys(i).forEach(function(t){var e="";-1!==["width","height","top","right","bottom","left"].indexOf(t)&&oe(i[t])&&(e="px"),n.style[t]=i[t]+e})}function ae(t,e,n){var i=Zt(t,function(t){return t.name===e}),r=!!i&&t.some(function(t){return t.name===n&&t.enabled&&t.order<i.order});if(!r){var o="`"+e+"`",s="`"+n+"`";console.warn(s+" modifier is required by "+o+" modifier in order to work, be sure to include it before "+o+"!")}return r}var le=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],ce=le.slice(3);function fe(t){var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=ce.indexOf(t),i=ce.slice(n+1).concat(ce.slice(0,n));return e?i.reverse():i}var he={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};function ue(t,r,o,e){var s=[0,0],a=-1!==["right","left"].indexOf(e),n=t.split(/(\+|\-)/).map(function(t){return t.trim()}),i=n.indexOf(Zt(n,function(t){return-1!==t.search(/,|\s/)}));n[i]&&-1===n[i].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l=/\s*,\s*|\s+/,c=-1!==i?[n.slice(0,i).concat([n[i].split(l)[0]]),[n[i].split(l)[1]].concat(n.slice(i+1))]:[n];return(c=c.map(function(t,e){var n=(1===e?!a:a)?"height":"width",i=!1;return t.reduce(function(t,e){return""===t[t.length-1]&&-1!==["+","-"].indexOf(e)?(t[t.length-1]=e,i=!0,t):i?(t[t.length-1]+=e,i=!1,t):t.concat(e)},[]).map(function(t){return function(t,e,n,i){var r=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),o=+r[1],s=r[2];if(!o)return t;if(0===s.indexOf("%")){var a=void 0;switch(s){case"%p":a=n;break;case"%":case"%r":default:a=i}return Bt(a)[e]/100*o}if("vh"===s||"vw"===s)return("vh"===s?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*o;return o}(t,n,r,o)})})).forEach(function(n,i){n.forEach(function(t,e){oe(t)&&(s[i]+=t*("-"===n[e-1]?-1:1))})}),s}var de={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(t){var e=t.placement,n=e.split("-")[0],i=e.split("-")[1];if(i){var r=t.offsets,o=r.reference,s=r.popper,a=-1!==["bottom","top"].indexOf(n),l=a?"left":"top",c=a?"width":"height",f={start:Ft({},l,o[l]),end:Ft({},l,o[l]+o[c]-s[c])};t.offsets.popper=Ut({},s,f[i])}return t}},offset:{order:200,enabled:!0,fn:function(t,e){var n=e.offset,i=t.placement,r=t.offsets,o=r.popper,s=r.reference,a=i.split("-")[0],l=void 0;return l=oe(+n)?[+n,0]:ue(n,o,s,a),"left"===a?(o.top+=l[0],o.left-=l[1]):"right"===a?(o.top+=l[0],o.left+=l[1]):"top"===a?(o.left+=l[0],o.top-=l[1]):"bottom"===a&&(o.left+=l[0],o.top+=l[1]),t.popper=o,t},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(t,i){var e=i.boundariesElement||kt(t.instance.popper);t.instance.reference===e&&(e=kt(e));var r=Yt(t.instance.popper,t.instance.reference,i.padding,e,t.positionFixed);i.boundaries=r;var n=i.priority,o=t.offsets.popper,s={primary:function(t){var e=o[t];return o[t]<r[t]&&!i.escapeWithReference&&(e=Math.max(o[t],r[t])),Ft({},t,e)},secondary:function(t){var e="right"===t?"left":"top",n=o[e];return o[t]>r[t]&&!i.escapeWithReference&&(n=Math.min(o[e],r[t]-("right"===t?o.width:o.height))),Ft({},e,n)}};return n.forEach(function(t){var e=-1!==["left","top"].indexOf(t)?"primary":"secondary";o=Ut({},o,s[e](t))}),t.offsets.popper=o,t},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(t){var e=t.offsets,n=e.popper,i=e.reference,r=t.placement.split("-")[0],o=Math.floor,s=-1!==["top","bottom"].indexOf(r),a=s?"right":"bottom",l=s?"left":"top",c=s?"width":"height";return n[a]<o(i[l])&&(t.offsets.popper[l]=o(i[l])-n[c]),n[l]>o(i[a])&&(t.offsets.popper[l]=o(i[a])),t}},arrow:{order:500,enabled:!0,fn:function(t,e){var n;if(!ae(t.instance.modifiers,"arrow","keepTogether"))return t;var i=e.element;if("string"==typeof i){if(!(i=t.instance.popper.querySelector(i)))return t}else if(!t.instance.popper.contains(i))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),t;var r=t.placement.split("-")[0],o=t.offsets,s=o.popper,a=o.reference,l=-1!==["left","right"].indexOf(r),c=l?"height":"width",f=l?"Top":"Left",h=f.toLowerCase(),u=l?"left":"top",d=l?"bottom":"right",p=zt(i)[c];a[d]-p<s[h]&&(t.offsets.popper[h]-=s[h]-(a[d]-p)),a[h]+p>s[d]&&(t.offsets.popper[h]+=a[h]+p-s[d]),t.offsets.popper=Bt(t.offsets.popper);var g=a[h]+a[c]/2-p/2,m=Dt(t.instance.popper),_=parseFloat(m["margin"+f],10),v=parseFloat(m["border"+f+"Width"],10),E=g-t.offsets.popper[h]-_-v;return E=Math.max(Math.min(s[c]-p,E),0),t.arrowElement=i,t.offsets.arrow=(Ft(n={},h,Math.round(E)),Ft(n,u,""),n),t},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(p,g){if(te(p.instance.modifiers,"inner"))return p;if(p.flipped&&p.placement===p.originalPlacement)return p;var m=Yt(p.instance.popper,p.instance.reference,g.padding,g.boundariesElement,p.positionFixed),_=p.placement.split("-")[0],v=Xt(_),E=p.placement.split("-")[1]||"",y=[];switch(g.behavior){case he.FLIP:y=[_,v];break;case he.CLOCKWISE:y=fe(_);break;case he.COUNTERCLOCKWISE:y=fe(_,!0);break;default:y=g.behavior}return y.forEach(function(t,e){if(_!==t||y.length===e+1)return p;_=p.placement.split("-")[0],v=Xt(_);var n,i=p.offsets.popper,r=p.offsets.reference,o=Math.floor,s="left"===_&&o(i.right)>o(r.left)||"right"===_&&o(i.left)<o(r.right)||"top"===_&&o(i.bottom)>o(r.top)||"bottom"===_&&o(i.top)<o(r.bottom),a=o(i.left)<o(m.left),l=o(i.right)>o(m.right),c=o(i.top)<o(m.top),f=o(i.bottom)>o(m.bottom),h="left"===_&&a||"right"===_&&l||"top"===_&&c||"bottom"===_&&f,u=-1!==["top","bottom"].indexOf(_),d=!!g.flipVariations&&(u&&"start"===E&&a||u&&"end"===E&&l||!u&&"start"===E&&c||!u&&"end"===E&&f);(s||h||d)&&(p.flipped=!0,(s||h)&&(_=y[e+1]),d&&(E="end"===(n=E)?"start":"start"===n?"end":n),p.placement=_+(E?"-"+E:""),p.offsets.popper=Ut({},p.offsets.popper,Jt(p.instance.popper,p.offsets.reference,p.placement)),p=$t(p.instance.modifiers,p,"flip"))}),p},behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:function(t){var e=t.placement,n=e.split("-")[0],i=t.offsets,r=i.popper,o=i.reference,s=-1!==["left","right"].indexOf(n),a=-1===["top","left"].indexOf(n);return r[s?"left":"top"]=o[n]-(a?r[s?"width":"height"]:0),t.placement=Xt(e),t.offsets.popper=Bt(r),t}},hide:{order:800,enabled:!0,fn:function(t){if(!ae(t.instance.modifiers,"hide","preventOverflow"))return t;var e=t.offsets.reference,n=Zt(t.instance.modifiers,function(t){return"preventOverflow"===t.name}).boundaries;if(e.bottom<n.top||e.left>n.right||e.top>n.bottom||e.right<n.left){if(!0===t.hide)return t;t.hide=!0,t.attributes["x-out-of-boundaries"]=""}else{if(!1===t.hide)return t;t.hide=!1,t.attributes["x-out-of-boundaries"]=!1}return t}},computeStyle:{order:850,enabled:!0,fn:function(t,e){var n=e.x,i=e.y,r=t.offsets.popper,o=Zt(t.instance.modifiers,function(t){return"applyStyle"===t.name}).gpuAcceleration;void 0!==o&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s=void 0!==o?o:e.gpuAcceleration,a=Kt(kt(t.instance.popper)),l={position:r.position},c={left:Math.floor(r.left),top:Math.floor(r.top),bottom:Math.floor(r.bottom),right:Math.floor(r.right)},f="bottom"===n?"top":"bottom",h="right"===i?"left":"right",u=ee("transform"),d=void 0,p=void 0;if(p="bottom"===f?-a.height+c.bottom:c.top,d="right"===h?-a.width+c.right:c.left,s&&u)l[u]="translate3d("+d+"px, "+p+"px, 0)",l[f]=0,l[h]=0,l.willChange="transform";else{var g="bottom"===f?-1:1,m="right"===h?-1:1;l[f]=p*g,l[h]=d*m,l.willChange=f+", "+h}var _={"x-placement":t.placement};return t.attributes=Ut({},_,t.attributes),t.styles=Ut({},l,t.styles),t.arrowStyles=Ut({},t.offsets.arrow,t.arrowStyles),t},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(t){var e,n;return se(t.instance.popper,t.styles),e=t.instance.popper,n=t.attributes,Object.keys(n).forEach(function(t){!1!==n[t]?e.setAttribute(t,n[t]):e.removeAttribute(t)}),t.arrowElement&&Object.keys(t.arrowStyles).length&&se(t.arrowElement,t.arrowStyles),t},onLoad:function(t,e,n,i,r){var o=qt(r,e,t,n.positionFixed),s=Gt(n.placement,o,e,t,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return e.setAttribute("x-placement",s),se(e,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},pe=function(){function o(t,e){var n=this,i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};Ht(this,o),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=wt(this.update.bind(this)),this.options=Ut({},o.Defaults,i),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=e&&e.jquery?e[0]:e,this.options.modifiers={},Object.keys(Ut({},o.Defaults.modifiers,i.modifiers)).forEach(function(t){n.options.modifiers[t]=Ut({},o.Defaults.modifiers[t]||{},i.modifiers?i.modifiers[t]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(t){return Ut({name:t},n.options.modifiers[t])}).sort(function(t,e){return t.order-e.order}),this.modifiers.forEach(function(t){t.enabled&&It(t.onLoad)&&t.onLoad(n.reference,n.popper,n.options,t,n.state)}),this.update();var r=this.options.eventsEnabled;r&&this.enableEventListeners(),this.state.eventsEnabled=r}return Wt(o,[{key:"update",value:function(){return function(){if(!this.state.isDestroyed){var t={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};t.offsets.reference=qt(this.state,this.popper,this.reference,this.options.positionFixed),t.placement=Gt(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),t.originalPlacement=t.placement,t.positionFixed=this.options.positionFixed,t.offsets.popper=Jt(this.popper,t.offsets.reference,t.placement),t.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",t=$t(this.modifiers,t),this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t))}}.call(this)}},{key:"destroy",value:function(){return function(){return this.state.isDestroyed=!0,te(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[ee("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}.call(this)}},{key:"enableEventListeners",value:function(){return function(){this.state.eventsEnabled||(this.state=ie(this.reference,this.options,this.state,this.scheduleUpdate))}.call(this)}},{key:"disableEventListeners",value:function(){return re.call(this)}}]),o}();pe.Utils=("undefined"!=typeof window?window:global).PopperUtils,pe.placements=le,pe.Defaults=de;var ge,me,_e,ve,Ee,ye,be,Te,Ce,we,Ie,De,Ae,Se,Oe,Ne,ke,Le,Pe,xe,je,Re,Me,He,We,Fe,Ue,Be,Ke,Ve,Qe,Ye,Ge,qe,ze,Xe,Je,Ze,$e,tn,en,nn,rn,on,sn,an,ln,cn,fn,hn,un,dn,pn,gn,mn,_n,vn,En,yn,bn,Tn,Cn,wn,In,Dn,An,Sn,On,Nn,kn,Ln,Pn,xn,jn,Rn,Mn,Hn,Wn,Fn,Un,Bn,Kn,Vn,Qn,Yn,Gn,qn,zn,Xn,Jn,Zn,$n,ti,ei,ni,ii,ri,oi,si,ai,li,ci,fi,hi,ui,di,pi,gi,mi,_i,vi,Ei,yi,bi=(me="dropdown",ve="."+(_e="bs.dropdown"),Ee=".data-api",ye=(ge=e).fn[me],be=new RegExp("38|40|27"),Te={HIDE:"hide"+ve,HIDDEN:"hidden"+ve,SHOW:"show"+ve,SHOWN:"shown"+ve,CLICK:"click"+ve,CLICK_DATA_API:"click"+ve+Ee,KEYDOWN_DATA_API:"keydown"+ve+Ee,KEYUP_DATA_API:"keyup"+ve+Ee},Ce="disabled",we="show",Ie="dropup",De="dropright",Ae="dropleft",Se="dropdown-menu-right",Oe="position-static",Ne='[data-toggle="dropdown"]',ke=".dropdown form",Le=".dropdown-menu",Pe=".navbar-nav",xe=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",je="top-start",Re="top-end",Me="bottom-start",He="bottom-end",We="right-start",Fe="left-start",Ue={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},Be={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},Ke=function(){function l(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=l.prototype;return t.toggle=function(){if(!this._element.disabled&&!ge(this._element).hasClass(Ce)){var t=l._getParentFromElement(this._element),e=ge(this._menu).hasClass(we);if(l._clearMenus(),!e){var n={relatedTarget:this._element},i=ge.Event(Te.SHOW,n);if(ge(t).trigger(i),!i.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof pe)throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var r=this._element;"parent"===this._config.reference?r=t:gt.isElement(this._config.reference)&&(r=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(r=this._config.reference[0])),"scrollParent"!==this._config.boundary&&ge(t).addClass(Oe),this._popper=new pe(r,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===ge(t).closest(Pe).length&&ge(document.body).children().on("mouseover",null,ge.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),ge(this._menu).toggleClass(we),ge(t).toggleClass(we).trigger(ge.Event(Te.SHOWN,n))}}}},t.dispose=function(){ge.removeData(this._element,_e),ge(this._element).off(ve),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;ge(this._element).on(Te.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(t){return t=c({},this.constructor.Default,ge(this._element).data(),t),gt.typeCheckConfig(me,t,this.constructor.DefaultType),t},t._getMenuElement=function(){if(!this._menu){var t=l._getParentFromElement(this._element);this._menu=ge(t).find(Le)[0]}return this._menu},t._getPlacement=function(){var t=ge(this._element).parent(),e=Me;return t.hasClass(Ie)?(e=je,ge(this._menu).hasClass(Se)&&(e=Re)):t.hasClass(De)?e=We:t.hasClass(Ae)?e=Fe:ge(this._menu).hasClass(Se)&&(e=He),e},t._detectNavbar=function(){return 0<ge(this._element).closest(".navbar").length},t._getPopperConfig=function(){var e=this,t={};"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=c({},t.offsets,e._config.offset(t.offsets)||{}),t}:t.offset=this._config.offset;var n={placement:this._getPlacement(),modifiers:{offset:t,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(n.modifiers.applyStyle={enabled:!1}),n},l._jQueryInterface=function(e){return this.each(function(){var t=ge(this).data(_e);if(t||(t=new l(this,"object"==typeof e?e:null),ge(this).data(_e,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},l._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=ge.makeArray(ge(Ne)),n=0;n<e.length;n++){var i=l._getParentFromElement(e[n]),r=ge(e[n]).data(_e),o={relatedTarget:e[n]};if(r){var s=r._menu;if(ge(i).hasClass(we)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&ge.contains(i,t.target))){var a=ge.Event(Te.HIDE,o);ge(i).trigger(a),a.isDefaultPrevented()||("ontouchstart"in document.documentElement&&ge(document.body).children().off("mouseover",null,ge.noop),e[n].setAttribute("aria-expanded","false"),ge(s).removeClass(we),ge(i).removeClass(we).trigger(ge.Event(Te.HIDDEN,o)))}}}},l._getParentFromElement=function(t){var e,n=gt.getSelectorFromElement(t);return n&&(e=ge(n)[0]),e||t.parentNode},l._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||ge(t.target).closest(Le).length)):be.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!ge(this).hasClass(Ce))){var e=l._getParentFromElement(this),n=ge(e).hasClass(we);if((n||27===t.which&&32===t.which)&&(!n||27!==t.which&&32!==t.which)){var i=ge(e).find(xe).get();if(0!==i.length){var r=i.indexOf(t.target);38===t.which&&0<r&&r--,40===t.which&&r<i.length-1&&r++,r<0&&(r=0),i[r].focus()}}else{if(27===t.which){var o=ge(e).find(Ne)[0];ge(o).trigger("focus")}ge(this).trigger("click")}}},s(l,null,[{key:"VERSION",get:function(){return"4.1.0"}},{key:"Default",get:function(){return Ue}},{key:"DefaultType",get:function(){return Be}}]),l}(),ge(document).on(Te.KEYDOWN_DATA_API,Ne,Ke._dataApiKeydownHandler).on(Te.KEYDOWN_DATA_API,Le,Ke._dataApiKeydownHandler).on(Te.CLICK_DATA_API+" "+Te.KEYUP_DATA_API,Ke._clearMenus).on(Te.CLICK_DATA_API,Ne,function(t){t.preventDefault(),t.stopPropagation(),Ke._jQueryInterface.call(ge(this),"toggle")}).on(Te.CLICK_DATA_API,ke,function(t){t.stopPropagation()}),ge.fn[me]=Ke._jQueryInterface,ge.fn[me].Constructor=Ke,ge.fn[me].noConflict=function(){return ge.fn[me]=ye,Ke._jQueryInterface},Ke),Ti=(Qe="modal",Ge="."+(Ye="bs.modal"),qe=(Ve=e).fn[Qe],ze={backdrop:!0,keyboard:!0,focus:!0,show:!0},Xe={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},Je={HIDE:"hide"+Ge,HIDDEN:"hidden"+Ge,SHOW:"show"+Ge,SHOWN:"shown"+Ge,FOCUSIN:"focusin"+Ge,RESIZE:"resize"+Ge,CLICK_DISMISS:"click.dismiss"+Ge,KEYDOWN_DISMISS:"keydown.dismiss"+Ge,MOUSEUP_DISMISS:"mouseup.dismiss"+Ge,MOUSEDOWN_DISMISS:"mousedown.dismiss"+Ge,CLICK_DATA_API:"click"+Ge+".data-api"},Ze="modal-scrollbar-measure",$e="modal-backdrop",tn="modal-open",en="fade",nn="show",rn={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},on=function(){function r(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=Ve(t).find(rn.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._scrollbarWidth=0}var t=r.prototype;return t.toggle=function(t){return this._isShown?this.hide():this.show(t)},t.show=function(t){var e=this;if(!this._isTransitioning&&!this._isShown){Ve(this._element).hasClass(en)&&(this._isTransitioning=!0);var n=Ve.Event(Je.SHOW,{relatedTarget:t});Ve(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),Ve(document.body).addClass(tn),this._setEscapeEvent(),this._setResizeEvent(),Ve(this._element).on(Je.CLICK_DISMISS,rn.DATA_DISMISS,function(t){return e.hide(t)}),Ve(this._dialog).on(Je.MOUSEDOWN_DISMISS,function(){Ve(e._element).one(Je.MOUSEUP_DISMISS,function(t){Ve(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},t.hide=function(t){var e=this;if(t&&t.preventDefault(),!this._isTransitioning&&this._isShown){var n=Ve.Event(Je.HIDE);if(Ve(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=Ve(this._element).hasClass(en);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),Ve(document).off(Je.FOCUSIN),Ve(this._element).removeClass(nn),Ve(this._element).off(Je.CLICK_DISMISS),Ve(this._dialog).off(Je.MOUSEDOWN_DISMISS),i){var r=gt.getTransitionDurationFromElement(this._element);Ve(this._element).one(gt.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(r)}else this._hideModal()}}},t.dispose=function(){Ve.removeData(this._element,Ye),Ve(window,document,this._element,this._backdrop).off(Ge),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(t){return t=c({},ze,t),gt.typeCheckConfig(Qe,t,Xe),t},t._showElement=function(t){var e=this,n=Ve(this._element).hasClass(en);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,n&&gt.reflow(this._element),Ve(this._element).addClass(nn),this._config.focus&&this._enforceFocus();var i=Ve.Event(Je.SHOWN,{relatedTarget:t}),r=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,Ve(e._element).trigger(i)};if(n){var o=gt.getTransitionDurationFromElement(this._element);Ve(this._dialog).one(gt.TRANSITION_END,r).emulateTransitionEnd(o)}else r()},t._enforceFocus=function(){var e=this;Ve(document).off(Je.FOCUSIN).on(Je.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===Ve(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?Ve(this._element).on(Je.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||Ve(this._element).off(Je.KEYDOWN_DISMISS)},t._setResizeEvent=function(){var e=this;this._isShown?Ve(window).on(Je.RESIZE,function(t){return e.handleUpdate(t)}):Ve(window).off(Je.RESIZE)},t._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){Ve(document.body).removeClass(tn),t._resetAdjustments(),t._resetScrollbar(),Ve(t._element).trigger(Je.HIDDEN)})},t._removeBackdrop=function(){this._backdrop&&(Ve(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(t){var e=this,n=Ve(this._element).hasClass(en)?en:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=$e,n&&Ve(this._backdrop).addClass(n),Ve(this._backdrop).appendTo(document.body),Ve(this._element).on(Je.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._element.focus():e.hide())}),n&&gt.reflow(this._backdrop),Ve(this._backdrop).addClass(nn),!t)return;if(!n)return void t();var i=gt.getTransitionDurationFromElement(this._backdrop);Ve(this._backdrop).one(gt.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){Ve(this._backdrop).removeClass(nn);var r=function(){e._removeBackdrop(),t&&t()};if(Ve(this._element).hasClass(en)){var o=gt.getTransitionDurationFromElement(this._backdrop);Ve(this._backdrop).one(gt.TRANSITION_END,r).emulateTransitionEnd(o)}else r()}else t&&t()},t._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var r=this;if(this._isBodyOverflowing){Ve(rn.FIXED_CONTENT).each(function(t,e){var n=Ve(e)[0].style.paddingRight,i=Ve(e).css("padding-right");Ve(e).data("padding-right",n).css("padding-right",parseFloat(i)+r._scrollbarWidth+"px")}),Ve(rn.STICKY_CONTENT).each(function(t,e){var n=Ve(e)[0].style.marginRight,i=Ve(e).css("margin-right");Ve(e).data("margin-right",n).css("margin-right",parseFloat(i)-r._scrollbarWidth+"px")}),Ve(rn.NAVBAR_TOGGLER).each(function(t,e){var n=Ve(e)[0].style.marginRight,i=Ve(e).css("margin-right");Ve(e).data("margin-right",n).css("margin-right",parseFloat(i)+r._scrollbarWidth+"px")});var t=document.body.style.paddingRight,e=Ve(document.body).css("padding-right");Ve(document.body).data("padding-right",t).css("padding-right",parseFloat(e)+this._scrollbarWidth+"px")}},t._resetScrollbar=function(){Ve(rn.FIXED_CONTENT).each(function(t,e){var n=Ve(e).data("padding-right");"undefined"!=typeof n&&Ve(e).css("padding-right",n).removeData("padding-right")}),Ve(rn.STICKY_CONTENT+", "+rn.NAVBAR_TOGGLER).each(function(t,e){var n=Ve(e).data("margin-right");"undefined"!=typeof n&&Ve(e).css("margin-right",n).removeData("margin-right")});var t=Ve(document.body).data("padding-right");"undefined"!=typeof t&&Ve(document.body).css("padding-right",t).removeData("padding-right")},t._getScrollbarWidth=function(){var t=document.createElement("div");t.className=Ze,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},r._jQueryInterface=function(n,i){return this.each(function(){var t=Ve(this).data(Ye),e=c({},r.Default,Ve(this).data(),"object"==typeof n&&n);if(t||(t=new r(this,e),Ve(this).data(Ye,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},s(r,null,[{key:"VERSION",get:function(){return"4.1.0"}},{key:"Default",get:function(){return ze}}]),r}(),Ve(document).on(Je.CLICK_DATA_API,rn.DATA_TOGGLE,function(t){var e,n=this,i=gt.getSelectorFromElement(this);i&&(e=Ve(i)[0]);var r=Ve(e).data(Ye)?"toggle":c({},Ve(e).data(),Ve(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var o=Ve(e).one(Je.SHOW,function(t){t.isDefaultPrevented()||o.one(Je.HIDDEN,function(){Ve(n).is(":visible")&&n.focus()})});on._jQueryInterface.call(Ve(e),r,this)}),Ve.fn[Qe]=on._jQueryInterface,Ve.fn[Qe].Constructor=on,Ve.fn[Qe].noConflict=function(){return Ve.fn[Qe]=qe,on._jQueryInterface},on),Ci=(an="tooltip",cn="."+(ln="bs.tooltip"),fn=(sn=e).fn[an],hn="bs-tooltip",un=new RegExp("(^|\\s)"+hn+"\\S+","g"),gn={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!(pn={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"}),selector:!(dn={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"}),placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},_n="out",vn={HIDE:"hide"+cn,HIDDEN:"hidden"+cn,SHOW:(mn="show")+cn,SHOWN:"shown"+cn,INSERTED:"inserted"+cn,CLICK:"click"+cn,FOCUSIN:"focusin"+cn,FOCUSOUT:"focusout"+cn,MOUSEENTER:"mouseenter"+cn,MOUSELEAVE:"mouseleave"+cn},En="fade",yn="show",bn=".tooltip-inner",Tn=".arrow",Cn="hover",wn="focus",In="click",Dn="manual",An=function(){function i(t,e){if("undefined"==typeof pe)throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var t=i.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=sn(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),sn(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(sn(this.getTipElement()).hasClass(yn))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),sn.removeData(this.element,this.constructor.DATA_KEY),sn(this.element).off(this.constructor.EVENT_KEY),sn(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&sn(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===sn(this.element).css("display"))throw new Error("Please use show on visible elements");var t=sn.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){sn(this.element).trigger(t);var n=sn.contains(this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!n)return;var i=this.getTipElement(),r=gt.getUID(this.constructor.NAME);i.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&sn(i).addClass(En);var o="function"==typeof this.config.placement?this.config.placement.call(this,i,this.element):this.config.placement,s=this._getAttachment(o);this.addAttachmentClass(s);var a=!1===this.config.container?document.body:sn(this.config.container);sn(i).data(this.constructor.DATA_KEY,this),sn.contains(this.element.ownerDocument.documentElement,this.tip)||sn(i).appendTo(a),sn(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new pe(this.element,i,{placement:s,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:Tn},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){e._handlePopperPlacementChange(t)}}),sn(i).addClass(yn),"ontouchstart"in document.documentElement&&sn(document.body).children().on("mouseover",null,sn.noop);var l=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,sn(e.element).trigger(e.constructor.Event.SHOWN),t===_n&&e._leave(null,e)};if(sn(this.tip).hasClass(En)){var c=gt.getTransitionDurationFromElement(this.tip);sn(this.tip).one(gt.TRANSITION_END,l).emulateTransitionEnd(c)}else l()}},t.hide=function(t){var e=this,n=this.getTipElement(),i=sn.Event(this.constructor.Event.HIDE),r=function(){e._hoverState!==mn&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),sn(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};if(sn(this.element).trigger(i),!i.isDefaultPrevented()){if(sn(n).removeClass(yn),"ontouchstart"in document.documentElement&&sn(document.body).children().off("mouseover",null,sn.noop),this._activeTrigger[In]=!1,this._activeTrigger[wn]=!1,this._activeTrigger[Cn]=!1,sn(this.tip).hasClass(En)){var o=gt.getTransitionDurationFromElement(n);sn(n).one(gt.TRANSITION_END,r).emulateTransitionEnd(o)}else r();this._hoverState=""}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(t){sn(this.getTipElement()).addClass(hn+"-"+t)},t.getTipElement=function(){return this.tip=this.tip||sn(this.config.template)[0],this.tip},t.setContent=function(){var t=sn(this.getTipElement());this.setElementContent(t.find(bn),this.getTitle()),t.removeClass(En+" "+yn)},t.setElementContent=function(t,e){var n=this.config.html;"object"==typeof e&&(e.nodeType||e.jquery)?n?sn(e).parent().is(t)||t.empty().append(e):t.text(sn(e).text()):t[n?"html":"text"](e)},t.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},t._getAttachment=function(t){return pn[t.toUpperCase()]},t._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)sn(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==Dn){var e=t===Cn?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===Cn?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;sn(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}sn(i.element).closest(".modal").on("hide.bs.modal",function(){return i.hide()})}),this.config.selector?this.config=c({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||sn(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),sn(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?wn:Cn]=!0),sn(e.getTipElement()).hasClass(yn)||e._hoverState===mn?e._hoverState=mn:(clearTimeout(e._timeout),e._hoverState=mn,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===mn&&e.show()},e.config.delay.show):e.show())},t._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||sn(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),sn(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?wn:Cn]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=_n,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===_n&&e.hide()},e.config.delay.hide):e.hide())},t._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},t._getConfig=function(t){return"number"==typeof(t=c({},this.constructor.Default,sn(this.element).data(),t)).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),gt.typeCheckConfig(an,t,this.constructor.DefaultType),t},t._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},t._cleanTipClass=function(){var t=sn(this.getTipElement()),e=t.attr("class").match(un);null!==e&&0<e.length&&t.removeClass(e.join(""))},t._handlePopperPlacementChange=function(t){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},t._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(sn(t).removeClass(En),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},i._jQueryInterface=function(n){return this.each(function(){var t=sn(this).data(ln),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),sn(this).data(ln,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.1.0"}},{key:"Default",get:function(){return gn}},{key:"NAME",get:function(){return an}},{key:"DATA_KEY",get:function(){return ln}},{key:"Event",get:function(){return vn}},{key:"EVENT_KEY",get:function(){return cn}},{key:"DefaultType",get:function(){return dn}}]),i}(),sn.fn[an]=An._jQueryInterface,sn.fn[an].Constructor=An,sn.fn[an].noConflict=function(){return sn.fn[an]=fn,An._jQueryInterface},An),wi=(On="popover",kn="."+(Nn="bs.popover"),Ln=(Sn=e).fn[On],Pn="bs-popover",xn=new RegExp("(^|\\s)"+Pn+"\\S+","g"),jn=c({},Ci.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Rn=c({},Ci.DefaultType,{content:"(string|element|function)"}),Mn="fade",Wn=".popover-header",Fn=".popover-body",Un={HIDE:"hide"+kn,HIDDEN:"hidden"+kn,SHOW:(Hn="show")+kn,SHOWN:"shown"+kn,INSERTED:"inserted"+kn,CLICK:"click"+kn,FOCUSIN:"focusin"+kn,FOCUSOUT:"focusout"+kn,MOUSEENTER:"mouseenter"+kn,MOUSELEAVE:"mouseleave"+kn},Bn=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),(e.prototype.constructor=e).__proto__=n;var r=i.prototype;return r.isWithContent=function(){return this.getTitle()||this._getContent()},r.addAttachmentClass=function(t){Sn(this.getTipElement()).addClass(Pn+"-"+t)},r.getTipElement=function(){return this.tip=this.tip||Sn(this.config.template)[0],this.tip},r.setContent=function(){var t=Sn(this.getTipElement());this.setElementContent(t.find(Wn),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(Fn),e),t.removeClass(Mn+" "+Hn)},r._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},r._cleanTipClass=function(){var t=Sn(this.getTipElement()),e=t.attr("class").match(xn);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(n){return this.each(function(){var t=Sn(this).data(Nn),e="object"==typeof n?n:null;if((t||!/destroy|hide/.test(n))&&(t||(t=new i(this,e),Sn(this).data(Nn,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.1.0"}},{key:"Default",get:function(){return jn}},{key:"NAME",get:function(){return On}},{key:"DATA_KEY",get:function(){return Nn}},{key:"Event",get:function(){return Un}},{key:"EVENT_KEY",get:function(){return kn}},{key:"DefaultType",get:function(){return Rn}}]),i}(Ci),Sn.fn[On]=Bn._jQueryInterface,Sn.fn[On].Constructor=Bn,Sn.fn[On].noConflict=function(){return Sn.fn[On]=Ln,Bn._jQueryInterface},Bn),Ii=(Vn="scrollspy",Yn="."+(Qn="bs.scrollspy"),Gn=(Kn=e).fn[Vn],qn={offset:10,method:"auto",target:""},zn={offset:"number",method:"string",target:"(string|element)"},Xn={ACTIVATE:"activate"+Yn,SCROLL:"scroll"+Yn,LOAD_DATA_API:"load"+Yn+".data-api"},Jn="dropdown-item",Zn="active",$n={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},ti="offset",ei="position",ni=function(){function n(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+$n.NAV_LINKS+","+this._config.target+" "+$n.LIST_ITEMS+","+this._config.target+" "+$n.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,Kn(this._scrollElement).on(Xn.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var t=n.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?ti:ei,r="auto"===this._config.method?t:this._config.method,o=r===ei?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),Kn.makeArray(Kn(this._selector)).map(function(t){var e,n=gt.getSelectorFromElement(t);if(n&&(e=Kn(n)[0]),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[Kn(e)[r]().top+o,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function(){Kn.removeData(this._element,Qn),Kn(this._scrollElement).off(Yn),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(t){if("string"!=typeof(t=c({},qn,t)).target){var e=Kn(t.target).attr("id");e||(e=gt.getUID(Vn),Kn(t.target).attr("id",e)),t.target="#"+e}return gt.typeCheckConfig(Vn,t,zn),t},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var r=this._offsets.length;r--;){this._activeTarget!==this._targets[r]&&t>=this._offsets[r]&&("undefined"==typeof this._offsets[r+1]||t<this._offsets[r+1])&&this._activate(this._targets[r])}}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",");t=t.map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'});var n=Kn(t.join(","));n.hasClass(Jn)?(n.closest($n.DROPDOWN).find($n.DROPDOWN_TOGGLE).addClass(Zn),n.addClass(Zn)):(n.addClass(Zn),n.parents($n.NAV_LIST_GROUP).prev($n.NAV_LINKS+", "+$n.LIST_ITEMS).addClass(Zn),n.parents($n.NAV_LIST_GROUP).prev($n.NAV_ITEMS).children($n.NAV_LINKS).addClass(Zn)),Kn(this._scrollElement).trigger(Xn.ACTIVATE,{relatedTarget:e})},t._clear=function(){Kn(this._selector).filter($n.ACTIVE).removeClass(Zn)},n._jQueryInterface=function(e){return this.each(function(){var t=Kn(this).data(Qn);if(t||(t=new n(this,"object"==typeof e&&e),Kn(this).data(Qn,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.1.0"}},{key:"Default",get:function(){return qn}}]),n}(),Kn(window).on(Xn.LOAD_DATA_API,function(){for(var t=Kn.makeArray(Kn($n.DATA_SPY)),e=t.length;e--;){var n=Kn(t[e]);ni._jQueryInterface.call(n,n.data())}}),Kn.fn[Vn]=ni._jQueryInterface,Kn.fn[Vn].Constructor=ni,Kn.fn[Vn].noConflict=function(){return Kn.fn[Vn]=Gn,ni._jQueryInterface},ni),Di=(oi="."+(ri="bs.tab"),si=(ii=e).fn.tab,ai={HIDE:"hide"+oi,HIDDEN:"hidden"+oi,SHOW:"show"+oi,SHOWN:"shown"+oi,CLICK_DATA_API:"click"+oi+".data-api"},li="dropdown-menu",ci="active",fi="disabled",hi="fade",ui="show",di=".dropdown",pi=".nav, .list-group",gi=".active",mi="> li > .active",_i='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',vi=".dropdown-toggle",Ei="> .dropdown-menu .active",yi=function(){function i(t){this._element=t}var t=i.prototype;return t.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&ii(this._element).hasClass(ci)||ii(this._element).hasClass(fi))){var t,i,e=ii(this._element).closest(pi)[0],r=gt.getSelectorFromElement(this._element);if(e){var o="UL"===e.nodeName?mi:gi;i=(i=ii.makeArray(ii(e).find(o)))[i.length-1]}var s=ii.Event(ai.HIDE,{relatedTarget:this._element}),a=ii.Event(ai.SHOW,{relatedTarget:i});if(i&&ii(i).trigger(s),ii(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){r&&(t=ii(r)[0]),this._activate(this._element,e);var l=function(){var t=ii.Event(ai.HIDDEN,{relatedTarget:n._element}),e=ii.Event(ai.SHOWN,{relatedTarget:i});ii(i).trigger(t),ii(n._element).trigger(e)};t?this._activate(t,t.parentNode,l):l()}}},t.dispose=function(){ii.removeData(this._element,ri),this._element=null},t._activate=function(t,e,n){var i=this,r=("UL"===e.nodeName?ii(e).find(mi):ii(e).children(gi))[0],o=n&&r&&ii(r).hasClass(hi),s=function(){return i._transitionComplete(t,r,n)};if(r&&o){var a=gt.getTransitionDurationFromElement(r);ii(r).one(gt.TRANSITION_END,s).emulateTransitionEnd(a)}else s()},t._transitionComplete=function(t,e,n){if(e){ii(e).removeClass(ui+" "+ci);var i=ii(e.parentNode).find(Ei)[0];i&&ii(i).removeClass(ci),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(ii(t).addClass(ci),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),gt.reflow(t),ii(t).addClass(ui),t.parentNode&&ii(t.parentNode).hasClass(li)){var r=ii(t).closest(di)[0];r&&ii(r).find(vi).addClass(ci),t.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var t=ii(this),e=t.data(ri);if(e||(e=new i(this),t.data(ri,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.1.0"}}]),i}(),ii(document).on(ai.CLICK_DATA_API,_i,function(t){t.preventDefault(),yi._jQueryInterface.call(ii(this),"show")}),ii.fn.tab=yi._jQueryInterface,ii.fn.tab.Constructor=yi,ii.fn.tab.noConflict=function(){return ii.fn.tab=si,yi._jQueryInterface},yi);!function(t){if("undefined"==typeof t)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||4<=e[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(e),t.Util=gt,t.Alert=mt,t.Button=_t,t.Carousel=vt,t.Collapse=Et,t.Dropdown=bi,t.Modal=Ti,t.Popover=wi,t.Scrollspy=Ii,t.Tab=Di,t.Tooltip=Ci,Object.defineProperty(t,"__esModule",{value:!0})});

//# sourceMappingURL=bootstrap.bundle.min.js.map
/*
Plugin Name: 	BrowserSelector
Written by: 	Okler Themes - (http://www.okler.net)
*/
function scrollAndFocus(a,b,c){!function(d){d("body").addClass("scrolling"),d("html, body").animate({scrollTop:d(a).offset().top-(c?c:0)},300,function(){d("body").removeClass("scrolling"),setTimeout(function(){d(b).focus()},500)})}(jQuery)}!function(a){a.extend({browserSelector:function(){!function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))}(navigator.userAgent||navigator.vendor||window.opera);var b="ontouchstart"in window||navigator.msMaxTouchPoints,d=navigator.userAgent,e=d.toLowerCase(),f=function(a){return e.indexOf(a)>-1},g="gecko",h="webkit",i="safari",j="opera",k=document.documentElement,l=[!/opera|webtv/i.test(e)&&/msie\s(\d)/.test(e)?"ie ie"+parseFloat(navigator.appVersion.split("MSIE")[1]):f("firefox/2")?g+" ff2":f("firefox/3.5")?g+" ff3 ff3_5":f("firefox/3")?g+" ff3":f("gecko/")?g:f("opera")?j+(/version\/(\d+)/.test(e)?" "+j+RegExp.jQuery1:/opera(\s|\/)(\d+)/.test(e)?" "+j+RegExp.jQuery2:""):f("konqueror")?"konqueror":f("chrome")?h+" chrome":f("iron")?h+" iron":f("applewebkit/")?h+" "+i+(/version\/(\d+)/.test(e)?" "+i+RegExp.jQuery1:""):f("mozilla/")?g:"",f("j2me")?"mobile":f("iphone")?"iphone":f("ipod")?"ipod":f("mac")?"mac":f("darwin")?"mac":f("webtv")?"webtv":f("win")?"win":f("freebsd")?"freebsd":f("x11")||f("linux")?"linux":"","js"];c=l.join(" "),a.browser.mobile&&(c+=" mobile"),b&&(c+=" touch"),k.className+=" "+c;var m=!window.ActiveXObject&&"ActiveXObject"in window;if(m)return void a("html").removeClass("gecko").addClass("ie ie11");var n=document.documentMode||/Edge/.test(navigator.userAgent);return n?void a("html").addClass("edge"):void(/iPad|iPhone|iPod/.test(navigator.platform)&&a(document).ready(function(a){a(".image-frame").attr("onclick","return true")}))}}),a.browserSelector()}(jQuery),function(a){function b(a,b){return a.toFixed(b.decimals)}a.fn.countTo=function(b){return b=b||{},a(this).each(function(){function c(){k+=g,j++,d(k),"function"==typeof e.onUpdate&&e.onUpdate.call(h,k),j>=f&&(i.removeData("countTo"),clearInterval(l.interval),k=e.to,"function"==typeof e.onComplete&&e.onComplete.call(h,k))}function d(a){var b=e.formatter.call(h,a,e);i.html(b)}var e=a.extend({},a.fn.countTo.defaults,{from:a(this).data("from"),to:a(this).data("to"),speed:a(this).data("speed"),refreshInterval:a(this).data("refresh-interval"),decimals:a(this).data("decimals")},b),f=Math.ceil(e.speed/e.refreshInterval),g=(e.to-e.from)/f,h=this,i=a(this),j=0,k=e.from,l=i.data("countTo")||{};i.data("countTo",l),l.interval&&clearInterval(l.interval),l.interval=setInterval(c,e.refreshInterval),d(k)})},a.fn.countTo.defaults={from:0,to:0,speed:1e3,refreshInterval:100,decimals:0,formatter:b,onUpdate:null,onComplete:null}}(jQuery),function(a){/**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *       the user visible viewport of a web browser.
     *       only accounts for vertical position, not horizontal.
     */
var b=a(window);a.fn.visible=function(c,d,e,f){if(!(this.length<1)){e=e||"both";var g=this.length>1?this.eq(0):this,h="undefined"!=typeof f&&null!==f,i=h?a(f):b,j=h?i.position():0,k=g.get(0),l=i.outerWidth(),m=i.outerHeight(),n=d===!0?k.offsetWidth*k.offsetHeight:!0;if("function"==typeof k.getBoundingClientRect){var o=k.getBoundingClientRect(),p=h?o.top-j.top>=0&&o.top<m+j.top:o.top>=0&&o.top<m,q=h?o.bottom-j.top>0&&o.bottom<=m+j.top:o.bottom>0&&o.bottom<=m,r=h?o.left-j.left>=0&&o.left<l+j.left:o.left>=0&&o.left<l,s=h?o.right-j.left>0&&o.right<l+j.left:o.right>0&&o.right<=l,t=c?p||q:p&&q,u=c?r||s:r&&s,t=o.top<0&&o.bottom>m?!0:t,u=o.left<0&&o.right>l?!0:u;if("both"===e)return n&&t&&u;if("vertical"===e)return n&&t;if("horizontal"===e)return n&&u}else{var v=h?0:j,w=v+m,x=i.scrollLeft(),y=x+l,z=g.position(),A=z.top,B=A+g.height(),C=z.left,D=C+g.width(),E=c===!0?B:A,F=c===!0?A:B,G=c===!0?D:C,H=c===!0?C:D;if("both"===e)return!!n&&w>=F&&E>=v&&y>=H&&G>=x;if("vertical"===e)return!!n&&w>=F&&E>=v;if("horizontal"===e)return!!n&&y>=H&&G>=x}}}}(jQuery),function(a){"use strict";var b,c={action:function(){},runOnLoad:!1,duration:500},d=c,e=!1,f={};f.init=function(){for(var b=0;b<=arguments.length;b++){var c=arguments[b];switch(typeof c){case"function":d.action=c;break;case"boolean":d.runOnLoad=c;break;case"number":d.duration=c}}return this.each(function(){d.runOnLoad&&d.action(),a(this).resize(function(){f.timedAction.call(this)})})},f.timedAction=function(a,c){var f=function(){var a=d.duration;if(e){var c=new Date-b;if(a=d.duration-c,0>=a)return clearTimeout(e),e=!1,void d.action()}g(a)},g=function(a){e=setTimeout(f,a)};b=new Date,"number"==typeof c&&(d.duration=c),"function"==typeof a&&(d.action=a),e||f()},a.fn.afterResize=function(a){return f[a]?f[a].apply(this,Array.prototype.slice.call(arguments,1)):f.init.apply(this,arguments)}}(jQuery),function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){var b="waitForImages",c=function(a){return a.srcset&&a.sizes}(new Image);a.waitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage","cursor"],hasImageAttributes:["srcset"]},a.expr.pseudos["has-src"]=function(b){return a(b).is('img[src][src!=""]')},a.expr.pseudos.uncached=function(b){return a(b).is(":has-src")?!b.complete:!1},a.fn.waitForImages=function(){var d,e,f,g=0,h=0,i=a.Deferred(),j=this,k=[],l=a.waitForImages.hasImageProperties||[],m=a.waitForImages.hasImageAttributes||[],n=/url\(\s*(['"]?)(.*?)\1\s*\)/g;if(a.isPlainObject(arguments[0])?(f=arguments[0].waitForAll,e=arguments[0].each,d=arguments[0].finished):1===arguments.length&&"boolean"===a.type(arguments[0])?f=arguments[0]:(d=arguments[0],e=arguments[1],f=arguments[2]),d=d||a.noop,e=e||a.noop,f=!!f,!a.isFunction(d)||!a.isFunction(e))throw new TypeError("An invalid callback was supplied.");return this.each(function(){var b=a(this);f?b.find("*").addBack().each(function(){var b=a(this);b.is("img:has-src")&&!b.is("[srcset]")&&k.push({src:b.attr("src"),element:b[0]}),a.each(l,function(a,c){var d,e=b.css(c);if(!e)return!0;for(;d=n.exec(e);)k.push({src:d[2],element:b[0]})}),a.each(m,function(a,c){var d=b.attr(c);return d?void k.push({src:b.attr("src"),srcset:b.attr("srcset"),element:b[0]}):!0})}):b.find("img:has-src").each(function(){k.push({src:this.src,element:this})})}),g=k.length,h=0,0===g&&(d.call(j),i.resolveWith(j)),a.each(k,function(f,k){var l=new Image,m="load."+b+" error."+b;a(l).one(m,function n(b){var c=[h,g,"load"==b.type];return h++,e.apply(k.element,c),i.notifyWith(k.element,c),a(this).off(m,n),h==g?(d.call(j[0]),i.resolveWith(j[0]),!1):void 0}),c&&k.srcset&&(l.srcset=k.srcset,l.sizes=k.sizes),l.src=k.src}),i.promise()}}),function(a){a.fn.hover3d=function(b){var c=a.extend({selector:null,perspective:1e3,sensitivity:20,invert:!1,shine:!1,hoverInClass:"hover-in",hoverOutClass:"hover-out",hoverClass:"hover-3d"},b);return a.browser.mobile?void 0:this.each(function(){function b(a){g.addClass(c.hoverInClass+" "+c.hoverClass),currentX=currentY=0,setTimeout(function(){g.removeClass(c.hoverInClass)},400)}function d(a){var b=g.innerWidth(),d=g.innerHeight(),e=Math.round(a.pageX-g.offset().left),f=Math.round(a.pageY-g.offset().top),i=c.invert?(b/2-e)/c.sensitivity:-(b/2-e)/c.sensitivity,j=c.invert?-(d/2-f)/c.sensitivity:(d/2-f)/c.sensitivity,k=e-b/2,l=f-d/2,m=Math.atan2(l,k),n=180*m/Math.PI-90;0>n&&(n+=360),g.css({perspective:c.perspective+"px",transform:"rotateY("+i/2+"deg) rotateX("+j/2+"deg) translateX("+i/2+"px) scale(1.05)"}),g.find(".image-frame-action").css({perspective:c.perspective+"px",transform:"rotateY("+i/5+"deg) rotateX("+j/5+"deg) translateY("+j/5+"px) translateX("+i/5+"px)"}),g.find(".image-frame-inner-border").css({perspective:c.perspective+"px",transform:"translateX("+i/2+"px)"}),h.css("background","linear-gradient("+n+"deg, rgba(255,255,255,"+a.offsetY/d*.5+") 0%,rgba(255,255,255,0) 80%)")}function e(){g.addClass(c.hoverOutClass+" "+c.hoverClass),g.css({perspective:c.perspective+"px",transform:"none"}),setTimeout(function(){g.removeClass(c.hoverOutClass+" "+c.hoverClass),currentX=currentY=0},400)}var f=a(this),g=f.find(c.selector);currentX=0,currentY=0,c.shine&&g.append('<div class="shine"></div>');var h=a(this).find(".shine");f.css({perspective:c.perspective+"px"}),g.css({perspective:c.perspective+"px"}),h.css({position:"absolute",top:0,left:0,bottom:0,right:0,transform:"translateZ(1px)","z-index":9}),f.on("mouseenter",function(){return b()}),f.on("mousemove",function(a){return d(a)}),f.on("mouseleave",function(){return e()})})}}(jQuery),function(a){a.isFunction(a.fn.hover3d)&&a(function(){a(".hover-effect-3d").each(function(){var b=a(this);b.hover3d({selector:".image-frame"})})})}.apply(this,[jQuery]),jQuery(document).ready(function(a){function b(){c(a(".word-rotator.letters").find("b")),d(a(".word-rotator"))}function c(b){b.each(function(){var b=a(this),c=b.text().split(""),d=b.hasClass("is-visible");for(i in c)b.parents(".rotate-2").length>0&&(c[i]="<em>"+c[i]+"</em>"),c[i]=d?'<i class="in">'+c[i]+"</i>":"<i>"+c[i]+"</i>";var e=c.join("");b.html(e).css("opacity",1)})}function d(b){var c=l;b.each(function(){var b=a(this);if(b.hasClass("loading-bar"))c=m,setTimeout(function(){b.find(".word-rotator-words").addClass("is-loading")},n);else if(b.hasClass("clip")){var d=b.find(".word-rotator-words"),f=d.width()+10;d.css("width",f)}else if(!b.hasClass("type")){var g=b.find(".word-rotator-words b"),h=0;g.each(function(){var b=a(this).width();b>h&&(h=b)}),b.find(".word-rotator-words").css("width",h)}setTimeout(function(){e(b.find(".is-visible").eq(0))},c)})}function e(a){var b=j(a);if(a.parents(".word-rotator").hasClass("type")){var c=a.parent(".word-rotator-words");c.addClass("selected").removeClass("waiting"),setTimeout(function(){c.removeClass("selected"),a.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out")},q),setTimeout(function(){f(b,p)},r)}else if(a.parents(".word-rotator").hasClass("letters")){var d=a.children("i").length>=b.children("i").length?!0:!1;g(a.find("i").eq(0),a,d,o),h(b.find("i").eq(0),b,d,o)}else a.parents(".word-rotator").hasClass("clip")?a.parents(".word-rotator-words").animate({width:"2px"},s,function(){k(a,b),f(b)}):a.parents(".word-rotator").hasClass("loading-bar")?(a.parents(".word-rotator-words").removeClass("is-loading"),k(a,b),setTimeout(function(){e(b)},m),setTimeout(function(){a.parents(".word-rotator-words").addClass("is-loading")},n)):(k(a,b),setTimeout(function(){e(b)},l))}function f(a,b){a.parents(".word-rotator").hasClass("type")?(h(a.find("i").eq(0),a,!1,b),a.addClass("is-visible").removeClass("is-hidden")):a.parents(".word-rotator").hasClass("clip")&&a.parents(".word-rotator-words").animate({width:a.width()+10},s,function(){setTimeout(function(){e(a)},t)})}function g(b,c,d,f){if(b.removeClass("in").addClass("out"),b.is(":last-child")?d&&setTimeout(function(){e(j(c))},l):setTimeout(function(){g(b.next(),c,d,f)},f),b.is(":last-child")&&a("html").hasClass("no-csstransitions")){var h=j(c);k(c,h)}}function h(a,b,c,d){a.addClass("in").removeClass("out"),a.is(":last-child")?(b.parents(".word-rotator").hasClass("type")&&setTimeout(function(){b.parents(".word-rotator-words").addClass("waiting")},200),c||setTimeout(function(){e(b)},l)):setTimeout(function(){h(a.next(),b,c,d)},d)}function j(a){return a.is(":last-child")?a.parent().children().eq(0):a.next()}function k(a,b){a.removeClass("is-visible").addClass("is-hidden"),b.removeClass("is-hidden").addClass("is-visible")}var l=2500,m=3800,n=m-3e3,o=50,p=150,q=500,r=q+800,s=600,t=1500;b()}),function(a){a('[data-toggle="tooltip"]').tooltip(),a('[data-toggle="popover"]').popover()}(jQuery),function(){var a,b;a=this.jQuery||window.jQuery,b=a(window),a.fn.stick_in_parent=function(c){var d,e,f,g,h,i,j,k,l,m,n;for(null==c&&(c={}),n=c.sticky_class,h=c.inner_scrolling,m=c.recalc_every,l=c.parent,k=c.offset_top,j=c.spacer,e=c.bottoming,null==k&&(k=0),null==l&&(l=void 0),null==h&&(h=!0),null==n&&(n="is_stuck"),d=a(document),null==e&&(e=!0),f=function(c,f,g,i,o,p,q,r){var s,t,u,v,w,x,y,z,A,B,C,D;if(!c.data("sticky_kit")){if(c.data("sticky_kit",!0),w=d.height(),y=c.parent(),null!=l&&(y=y.closest(l)),!y.length)throw"failed to find stick parent";if(s=u=!1,(C=null!=j?j&&c.closest(j):a("<div />"))&&C.css("position",c.css("position")),z=function(){var a,b,e;return!r&&(w=d.height(),a=parseInt(y.css("border-top-width"),10),b=parseInt(y.css("padding-top"),10),f=parseInt(y.css("padding-bottom"),10),g=y.offset().top+a+b,i=y.height(),u&&(s=u=!1,null==j&&(c.insertAfter(C),C.detach()),c.css({position:"",top:"",width:"",bottom:""}).removeClass(n),e=!0),o=c.offset().top-(parseInt(c.css("margin-top"),10)||0)-k,p=c.outerHeight(!0),q=c.css("float"),C&&C.css({width:c.outerWidth(!0),height:p,display:c.css("display"),"vertical-align":c.css("vertical-align"),"float":q}),e)?D():void 0},z(),p!==i)return v=void 0,x=k,B=m,D=function(){var a,l,t,A;return!r&&(t=!1,null!=B&&(--B,0>=B&&(B=m,z(),t=!0)),t||d.height()===w||z(),t=b.scrollTop(),null!=v&&(l=t-v),v=t,u?(e&&(A=t+p+x>i+g,s&&!A&&(s=!1,c.css({position:"fixed",bottom:"",top:x}).trigger("sticky_kit:unbottom"))),o>t&&(u=!1,x=k,null==j&&("left"!==q&&"right"!==q||c.insertAfter(C),C.detach()),a={position:"",width:"",top:""},c.css(a).removeClass(n).trigger("sticky_kit:unstick")),h&&(a=b.height(),p+k>a&&!s&&(x-=l,x=Math.max(a-p,x),x=Math.min(k,x),u&&c.css({top:x+"px"})))):t>o&&(u=!0,a={position:"fixed",top:x},a.width="border-box"===c.css("box-sizing")?c.outerWidth()+"px":c.width()+"px",c.css(a).addClass(n),null==j&&(c.after(C),"left"!==q&&"right"!==q||C.append(c)),c.trigger("sticky_kit:stick")),u&&e&&(null==A&&(A=t+p+x>i+g),!s&&A))?(s=!0,"static"===y.css("position")&&y.css({position:"relative"}),c.css({position:"absolute",bottom:f,top:"auto"}).trigger("sticky_kit:bottom")):void 0},A=function(){return z(),D()},t=function(){return r=!0,b.off("touchmove",D),b.off("scroll",D),b.off("resize",A),a(document.body).off("sticky_kit:recalc",A),c.off("sticky_kit:detach",t),c.removeData("sticky_kit"),c.css({position:"",bottom:"",top:"",width:""}),y.position("position",""),u?(null==j&&("left"!==q&&"right"!==q||c.insertAfter(C),C.remove()),c.removeClass(n)):void 0},b.on("touchmove",D),b.on("scroll",D),b.on("resize",A),a(document.body).on("sticky_kit:recalc",A),c.on("sticky_kit:detach",t),setTimeout(D,0)}},g=0,i=this.length;i>g;g++)c=this[g],f(a(c));return this}}.call(this),function(a){var b=a(".quantity"),c=b.find(".plus"),d=b.find(".minus");c.on("click",function(){var b=a(this),c=b.prev();c.val(parseInt(c.val())+1)}),d.on("click",function(){var b=a(this),c=b.next();c.val(parseInt(c.val())>0?parseInt(c.val())-1:0)})}(jQuery),function(a){a(".rating input").change(function(){var b=a(this);a(".rating .selected").removeClass("selected"),b.closest("label").addClass("selected")})}(jQuery),function(a){var b={$wrapper:a(".footer-reveal"),init:function(){var a=this;return a.build(),a.events(),this},build:function(){var b=this,c=b.$wrapper.outerHeight(!0),d=a(window).height()-a(".header-body").height();return c>d?(a("#footer").removeClass("footer-reveal"),a(".main").css("margin-bottom",0)):(a("#footer").addClass("footer-reveal"),a(".main").css("margin-bottom",c)),this},events:function(){var b=this,c=a(window);return c.on("load",function(){c.afterResize(function(){b.build()})}),this}};a(".footer-reveal").get(0)&&b.init()}(jQuery),function(a){"use strict";var b={init:function(a){var b=this;return b.$wrapper=a,b.build(),this},build:function(){var b=this,c=b.$wrapper,d=c.data("skew-layer-from"),e=c.data("skew-layer-value");return a(window).on("load",function(){"right"==d&&c.addClass("skew-layer-from-right"),setTimeout(function(){c.css({left:e,transition:"ease left 300ms"})},300)}),this}};a("[data-skew-layer]").get(0)&&a("[data-skew-layer]").each(function(){var c=a(this);b.init(c)})}(jQuery),function(a){"use strict";var b={init:function(a){var b=this;return b.$wrapper=a,b.build(),this},build:function(){var b=this,c=b.$wrapper,d=c.data("to"),e=c.data("delay")?c.data("delay"):0,f="vertical"==c.data("direction")?{height:d+"%"}:{width:d+"%"};return a(window).on("load scroll",function(){c.visible(!0)&&a({to:0}).animate({to:1},e,function(){c.css(f)})}),this}};a(".progress-bar").get(0)&&a(".progress-bar").each(function(){var c=a(this);b.init(c)})}(jQuery);
/*!
 * jQuery Validation Plugin v1.17.0
 *
 * https://jqueryvalidation.org/
 *
 * Copyright (c) 2017 Jörn Zaefferer
 * Released under the MIT license
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.on("click.validate",":submit",function(b){c.submitButton=b.currentTarget,a(this).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(this).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.on("submit.validate",function(b){function d(){var d,e;return c.submitButton&&(c.settings.submitHandler||c.formSubmitted)&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),c.settings.submitHandler?(e=c.settings.submitHandler.call(c,c.currentForm,b),d&&d.remove(),void 0!==e?e:!1):!0}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c,d;return a(this[0]).is("form")?b=this.validate().form():(d=[],b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b,b||(d=d.concat(c.errorList))}),c.errorList=d),b},rules:function(b,c){var d,e,f,g,h,i,j=this[0];if(null!=j&&(!j.form&&j.hasAttribute("contenteditable")&&(j.form=this.closest("form")[0],j.name=this.attr("name")),null!=j.form)){if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(a,b){i[b]=f[b],delete f[b]}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g)),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}}),a.extend(a.expr.pseudos||a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){var c=a(b).val();return null!==c&&!!a.trim(""+c)},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:void 0===c?b:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(b,c){var d=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===c.which&&""===this.elementValue(b)||-1!==a.inArray(c.keyCode,d)||(b.name in this.submitted||b.name in this.invalid)&&this.element(b)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}."),step:a.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){!this.form&&this.hasAttribute("contenteditable")&&(this.form=a(this).closest("form")[0],this.name=a(this).attr("name"));var c=a.data(this.form,"validator"),d="on"+b.type.replace(/^validate/,""),e=c.settings;e[d]&&!a(this).is(e.ignore)&&e[d].call(c,this,b)}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){d[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",b).on("click.validate","select, option, [type='radio'], [type='checkbox']",b),this.settings.invalidHandler&&a(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c,d,e=this.clean(b),f=this.validationTargetFor(e),g=this,h=!0;return void 0===f?delete this.invalid[e.name]:(this.prepareElement(f),this.currentElements=a(f),d=this.groups[f.name],d&&a.each(this.groups,function(a,b){b===d&&a!==f.name&&(e=g.validationTargetFor(g.clean(g.findByName(a))),e&&e.name in g.invalid&&(g.currentElements.push(e),h=g.check(e)&&h))}),c=this.check(f)!==!1,h=h&&c,c?this.invalid[f.name]=!1:this.invalid[f.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),a(b).attr("aria-invalid",!c)),h},showErrors:function(b){if(b){var c=this;a.extend(this.errorMap,b),this.errorList=a.map(this.errorMap,function(a,b){return{message:a,element:c.findByName(b)[0]}}),this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var b=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(b)},resetElements:function(a){var b;if(this.settings.unhighlight)for(b=0;a[b];b++)this.settings.unhighlight.call(this,a[b],this.settings.errorClass,""),this.findByName(a[b].name).removeClass(this.settings.validClass);else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)void 0!==a[b]&&null!==a[b]&&a[b]!==!1&&c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var d=this.name||a(this).attr("name");return!d&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.hasAttribute("contenteditable")&&(this.form=a(this).closest("form")[0],this.name=d),d in c||!b.objectLength(a(this).rules())?!1:(c[d]=!0,!0)})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([])},reset:function(){this.resetInternals(),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d,e=a(b),f=b.type;return"radio"===f||"checkbox"===f?this.findByName(b.name).filter(":checked").val():"number"===f&&"undefined"!=typeof b.validity?b.validity.badInput?"NaN":e.val():(c=b.hasAttribute("contenteditable")?e.text():e.val(),"file"===f?"C:\\fakepath\\"===c.substr(0,12)?c.substr(12):(d=c.lastIndexOf("/"),d>=0?c.substr(d+1):(d=c.lastIndexOf("\\"),d>=0?c.substr(d+1):c)):"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f,g=a(b).rules(),h=a.map(g,function(a,b){return b}).length,i=!1,j=this.elementValue(b);if("function"==typeof g.normalizer?f=g.normalizer:"function"==typeof this.settings.normalizer&&(f=this.settings.normalizer),f){if(j=f.call(b,j),"string"!=typeof j)throw new TypeError("The normalizer should return a string value.");delete g.normalizer}for(d in g){e={method:d,parameters:g[d]};try{if(c=a.validator.methods[d].call(this,j,b,e.parameters),"dependency-mismatch"===c&&1===h){i=!0;continue}if(i=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(k){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",k),k instanceof TypeError&&(k.message+=".  Exception occurred when checking element "+b.id+", check the '"+e.method+"' method."),k}}return i?void 0:(this.objectLength(g)&&this.successList.push(b),!0)},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a];return void 0},defaultMessage:function(b,c){"string"==typeof c&&(c={method:c});var d=this.findDefined(this.customMessage(b.name,c.method),this.customDataMessage(b,c.method),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c.method],"<strong>Warning: No message defined for "+b.name+"</strong>"),e=/\$?\{(\d+)\}/g;return"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),d},formatAndAdd:function(a,b){var c=this.defaultMessage(a,b);this.errorList.push({message:c,element:a,method:b.method}),this.errorMap[a.name]=c,this.submitted[a.name]=c},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g,h=this.errorsFor(b),i=this.idOrName(b),j=a(b).attr("aria-describedby");h.length?(h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),h.html(c)):(h=a("<"+this.settings.errorElement+">").attr("id",i+"-error").addClass(this.settings.errorClass).html(c||""),d=h,this.settings.wrapper&&(d=h.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement.call(this,d,a(b)):d.insertAfter(b),h.is("label")?h.attr("for",i):0===h.parents("label[for='"+this.escapeCssMeta(i)+"']").length&&(f=h.attr("id"),j?j.match(new RegExp("\\b"+this.escapeCssMeta(f)+"\\b"))||(j+=" "+f):j=f,a(b).attr("aria-describedby",j),e=this.groups[b.name],e&&(g=this,a.each(g.groups,function(b,c){c===e&&a("[name='"+g.escapeCssMeta(b)+"']",g.currentForm).attr("aria-describedby",h.attr("id"))})))),!c&&this.settings.success&&(h.text(""),"string"==typeof this.settings.success?h.addClass(this.settings.success):this.settings.success(h,b)),this.toShow=this.toShow.add(h)},errorsFor:function(b){var c=this.escapeCssMeta(this.idOrName(b)),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+this.escapeCssMeta(d).replace(/\s+/g,", #")),this.errors().filter(e)},escapeCssMeta:function(a){return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+this.escapeCssMeta(b)+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return this.dependTypes[typeof a]?this.dependTypes[typeof a](a,b):!0},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(b){this.pending[b.name]||(this.pendingRequest++,a(b).addClass(this.settings.pendingClass),this.pending[b.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],a(b).removeClass(this.settings.pendingClass),c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.submitButton&&a("input:hidden[name='"+this.submitButton.name+"']",this.currentForm).remove(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b,c){return c="string"==typeof c&&c||"remote",a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,{method:c})})},destroy:function(){this.resetForm(),a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},normalizeAttributeRule:function(a,b,c,d){/min|max|step/.test(c)&&(null===b||/number|range|text/.test(b))&&(d=Number(d),isNaN(d)&&(d=void 0)),d||0===d?a[c]=d:b===c&&"range"!==b&&(a[c]=!0)},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),this.normalizeAttributeRule(e,g,c,d);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),this.normalizeAttributeRule(e,g,c,d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0!==e.param?e.param:!0:(a.data(c.form,"validator").resetElements(a(c)),delete b[d])}}),a.each(b,function(d,e){b[d]=a.isFunction(e)&&"normalizer"!==d?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:b.length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){
// Copyright (c) 2010-2013 Diego Perini, MIT licensed
// https://gist.github.com/dperini/729294
// see also https://mathiasbynens.be/demo/url-regex
// modified to allow protocol-relative URLs
return this.optional(b)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a)},date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a).toString())},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||d>=e},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||c>=a},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},step:function(b,c,d){var e,f=a(c).attr("type"),g="Step attribute on input type "+f+" is not supported.",h=["text","number","range"],i=new RegExp("\\b"+f+"\\b"),j=f&&!i.test(h.join()),k=function(a){var b=(""+a).match(/(?:\.(\d+))?$/);return b&&b[1]?b[1].length:0},l=function(a){return Math.round(a*Math.pow(10,e))},m=!0;if(j)throw new Error(g);return e=k(d),(k(b)>e||l(b)%l(d)!==0)&&(m=!1),this.optional(c)||m},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-equalTo-blur").length&&e.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d,e){if(this.optional(c))return"dependency-mismatch";e="string"==typeof e&&e||"remote";var f,g,h,i=this.previousValue(c,e);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),i.originalMessage=i.originalMessage||this.settings.messages[c.name][e],this.settings.messages[c.name][e]=i.message,d="string"==typeof d&&{url:d}||d,h=a.param(a.extend({data:b},d.data)),i.old===h?i.valid:(i.old=h,f=this,this.startRequest(c),g={},g[c.name]=b,a.ajax(a.extend(!0,{mode:"abort",port:"validate"+c.name,dataType:"json",data:g,context:f.currentForm,success:function(a){var d,g,h,j=a===!0||"true"===a;f.settings.messages[c.name][e]=i.originalMessage,j?(h=f.formSubmitted,f.resetInternals(),f.toHide=f.errorsFor(c),f.formSubmitted=h,f.successList.push(c),f.invalid[c.name]=!1,f.showErrors()):(d={},g=a||f.defaultMessage(c,{method:e,parameters:b}),d[c.name]=i.message=g,f.invalid[c.name]=!0,f.showErrors(d)),i.valid=j,f.stopRequest(c,j)}},d)),"pending")}}});var b,c={};return a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)}),a});
/**!
 * easyPieChart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license 
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.1.6
 **/
!function(a,b){"object"==typeof exports?module.exports=b(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],b):b(a.jQuery)}(this,function(a){var b=function(a,b){var c,d=document.createElement("canvas");a.appendChild(d),"undefined"!=typeof G_vmlCanvasManager&&G_vmlCanvasManager.initElement(d);var e=d.getContext("2d");d.width=d.height=b.size;var f=1;window.devicePixelRatio>1&&(f=window.devicePixelRatio,d.style.width=d.style.height=[b.size,"px"].join(""),d.width=d.height=b.size*f,e.scale(f,f)),e.translate(b.size/2,b.size/2),e.rotate((-0.5+b.rotate/180)*Math.PI);var g=(b.size-b.lineWidth)/2;b.scaleColor&&b.scaleLength&&(g-=b.scaleLength+2),Date.now=Date.now||function(){return+new Date};var h=function(a,b,c){c=Math.min(Math.max(-1,c||0),1);var d=0>=c?!0:!1;e.beginPath(),e.arc(0,0,g,0,2*Math.PI*c,d),e.strokeStyle=a,e.lineWidth=b,e.stroke()},i=function(){var a,c;e.lineWidth=1,e.fillStyle=b.scaleColor,e.save();for(var d=24;d>0;--d)d%6===0?(c=b.scaleLength,a=0):(c=.6*b.scaleLength,a=b.scaleLength-c),e.fillRect(-b.size/2+a,0,c,1),e.rotate(Math.PI/12);e.restore()},j=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)}}(),k=function(){b.scaleColor&&i(),b.trackColor&&h(b.trackColor,b.trackWidth||b.lineWidth,1)};this.getCanvas=function(){return d},this.getCtx=function(){return e},this.clear=function(){e.clearRect(b.size/-2,b.size/-2,b.size,b.size)},this.draw=function(a){b.scaleColor||b.trackColor?e.getImageData&&e.putImageData?c?e.putImageData(c,0,0):(k(),c=e.getImageData(0,0,b.size*f,b.size*f)):(this.clear(),k()):this.clear(),e.lineCap=b.lineCap;var d;d="function"==typeof b.barColor?b.barColor(a):b.barColor,h(d,b.lineWidth,a/100)}.bind(this),this.animate=function(a,c){var d=Date.now();b.onStart(a,c);var e=function(){var f=Math.min(Date.now()-d,b.animate.duration),g=b.easing(this,f,a,c-a,b.animate.duration);this.draw(g),b.onStep(a,c,g),f>=b.animate.duration?b.onStop(a,c):j(e)}.bind(this);j(e)}.bind(this)},c=function(a,c){var d={barColor:"#ef1e25",trackColor:"#f9f9f9",scaleColor:"#dfe0e0",scaleLength:5,lineCap:"round",lineWidth:3,trackWidth:void 0,size:110,rotate:0,animate:{duration:1e3,enabled:!0},easing:function(a,b,c,d,e){return b/=e/2,1>b?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},onStart:function(a,b){},onStep:function(a,b,c){},onStop:function(a,b){}};if("undefined"!=typeof b)d.renderer=b;else{if("undefined"==typeof SVGRenderer)throw new Error("Please load either the SVG- or the CanvasRenderer");d.renderer=SVGRenderer}var e={},f=0,g=function(){this.el=a,this.options=e;for(var b in d)d.hasOwnProperty(b)&&(e[b]=c&&"undefined"!=typeof c[b]?c[b]:d[b],"function"==typeof e[b]&&(e[b]=e[b].bind(this)));"string"==typeof e.easing&&"undefined"!=typeof jQuery&&jQuery.isFunction(jQuery.easing[e.easing])?e.easing=jQuery.easing[e.easing]:e.easing=d.easing,"number"==typeof e.animate&&(e.animate={duration:e.animate,enabled:!0}),"boolean"!=typeof e.animate||e.animate||(e.animate={duration:1e3,enabled:e.animate}),this.renderer=new e.renderer(a,e),this.renderer.draw(f),a.dataset&&a.dataset.percent?this.update(parseFloat(a.dataset.percent)):a.getAttribute&&a.getAttribute("data-percent")&&this.update(parseFloat(a.getAttribute("data-percent")))}.bind(this);this.update=function(a){return a=parseFloat(a),e.animate.enabled?this.renderer.animate(f,a):this.renderer.draw(a),f=a,this}.bind(this),this.disableAnimation=function(){return e.animate.enabled=!1,this},this.enableAnimation=function(){return e.animate.enabled=!0,this},g()};a.fn.easyPieChart=function(b){return this.each(function(){var d;a.data(this,"easyPieChart")||(d=a.extend({},b,a(this).data()),a.data(this,"easyPieChart",new c(this,d)))})}});
/**
 * jQuery gMap - Google Maps API V3
 *
 * @license MIT License; http://www.opensource.org/licenses/mit-license.php
 * @url   http://github.com/marioestrada/jQuery-gMap
 * @author  Mario Estrada <me@mario.ec> based on original plugin by Cedric Kastner <cedric@nur-text.de>
 * @version 2.1.5
 */
!function(a){a.fn.gMap=function(b,c){switch(b){case"addMarker":return a(this).trigger("gMap.addMarker",[c.latitude,c.longitude,c.content,c.icon,c.popup]);case"centerAt":return a(this).trigger("gMap.centerAt",[c.latitude,c.longitude,c.zoom]);case"clearMarkers":return a(this).trigger("gMap.clearMarkers")}var d=a.extend({},a.fn.gMap.defaults,b);return this.each(function(){var b=new google.maps.Map(this);a(this).data("gMap.reference",b);var c=new google.maps.Geocoder;d.address?c.geocode({address:d.address},function(a,c){a&&a.length&&b.setCenter(a[0].geometry.location)}):d.latitude&&d.longitude?b.setCenter(new google.maps.LatLng(d.latitude,d.longitude)):a.isArray(d.markers)&&d.markers.length>0?d.markers[0].address?c.geocode({address:d.markers[0].address},function(a,c){a&&a.length>0&&b.setCenter(a[0].geometry.location)}):b.setCenter(new google.maps.LatLng(d.markers[0].latitude,d.markers[0].longitude)):b.setCenter(new google.maps.LatLng(34.885931,9.84375)),b.setZoom(d.zoom),b.setMapTypeId(google.maps.MapTypeId[d.maptype]);var e={scrollwheel:d.scrollwheel,disableDoubleClickZoom:!d.doubleclickzoom};d.controls===!1?a.extend(e,{disableDefaultUI:!0}):0!==d.controls.length&&a.extend(e,d.controls,{disableDefaultUI:!0}),b.setOptions(e);var f,g,h=new google.maps.Marker;f=new google.maps.MarkerImage(d.icon.image),f.size=new google.maps.Size(d.icon.iconsize[0],d.icon.iconsize[1]),f.anchor=new google.maps.Point(d.icon.iconanchor[0],d.icon.iconanchor[1]),h.setIcon(f),d.icon.shadow&&(g=new google.maps.MarkerImage(d.icon.shadow),g.size=new google.maps.Size(d.icon.shadowsize[0],d.icon.shadowsize[1]),g.anchor=new google.maps.Point(d.icon.shadowanchor[0],d.icon.shadowanchor[1]),h.setShadow(g)),a(this).bind("gMap.centerAt",function(a,c,d,e){e&&b.setZoom(e),b.panTo(new google.maps.LatLng(parseFloat(c),parseFloat(d)))});var i=[];a(this).bind("gMap.clearMarkers",function(){for(;i[0];)i.pop().setMap(null)});var j;a(this).bind("gMap.addMarker",function(a,c,e,f,g,k){var l,m,n=new google.maps.LatLng(parseFloat(c),parseFloat(e)),o=new google.maps.Marker({position:n});if(g?(l=new google.maps.MarkerImage(g.image),l.size=new google.maps.Size(g.iconsize[0],g.iconsize[1]),l.anchor=new google.maps.Point(g.iconanchor[0],g.iconanchor[1]),o.setIcon(l),g.shadow&&(m=new google.maps.MarkerImage(g.shadow),m.size=new google.maps.Size(g.shadowsize[0],g.shadowsize[1]),m.anchor=new google.maps.Point(g.shadowanchor[0],g.shadowanchor[1]),h.setShadow(m))):(o.setIcon(h.getIcon()),o.setShadow(h.getShadow())),f){"_latlng"===f&&(f=c+", "+e);var p=new google.maps.InfoWindow({content:d.html_prepend+f+d.html_append});google.maps.event.addListener(o,"click",function(){j&&j.close(),p.open(b,o),j=p}),k&&google.maps.event.addListenerOnce(b,"tilesloaded",function(){p.open(b,o)})}o.setMap(b),i.push(o)});for(var k,l=this,m=function(b){return function(c,d){c&&c.length>0&&a(l).trigger("gMap.addMarker",[c[0].geometry.location.lat(),c[0].geometry.location.lng(),b.html,b.icon,b.popup])}},n=0;n<d.markers.length;n++)k=d.markers[n],k.address?("_address"===k.html&&(k.html=k.address),c.geocode({address:k.address},m(k))):a(this).trigger("gMap.addMarker",[k.latitude,k.longitude,k.html,k.icon,k.popup])})},a.fn.gMap.defaults={address:"",latitude:0,longitude:0,zoom:1,markers:[],controls:[],scrollwheel:!1,doubleclickzoom:!0,maptype:"ROADMAP",html_prepend:'<div class="gmap_marker">',html_append:"</div>",icon:{image:"http://www.google.com/mapfiles/marker.png",shadow:"http://www.google.com/mapfiles/shadow50.png",iconsize:[20,34],shadowsize:[37,34],iconanchor:[9,34],shadowanchor:[6,34]}}}(jQuery);
/*!
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2015 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  1.9.7
 *
 */
!function(a,b,c,d){var e=a(b);a.fn.lazyload=function(f){function g(){var b=0;i.each(function(){var c=a(this);if(!j.skip_invisible||c.is(":visible"))if(a.abovethetop(this,j)||a.leftofbegin(this,j));else if(a.belowthefold(this,j)||a.rightoffold(this,j)){if(++b>j.failure_limit)return!1}else c.trigger("appear"),b=0})}var h,i=this,j={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!1,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return f&&(d!==f.failurelimit&&(f.failure_limit=f.failurelimit,delete f.failurelimit),d!==f.effectspeed&&(f.effect_speed=f.effectspeed,delete f.effectspeed),a.extend(j,f)),h=j.container===d||j.container===b?e:a(j.container),0===j.event.indexOf("scroll")&&h.bind(j.event,function(){return g()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,(c.attr("src")===d||c.attr("src")===!1)&&c.is("img")&&c.attr("src",j.placeholder),c.one("appear",function(){if(!this.loaded){if(j.appear){var d=i.length;j.appear.call(b,d,j)}a("<img />").bind("load",function(){var d=c.attr("data-"+j.data_attribute);c.hide(),c.is("img")?c.attr("src",d):c.css("background-image","url('"+d+"')"),c[j.effect](j.effect_speed),b.loaded=!0;var e=a.grep(i,function(a){return!a.loaded});if(i=a(e),j.load){var f=i.length;j.load.call(b,f,j)}}).attr("src",c.attr("data-"+j.data_attribute))}}),0!==j.event.indexOf("scroll")&&c.bind(j.event,function(){b.loaded||c.trigger("appear")})}),e.bind("resize",function(){g()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&e.bind("pageshow",function(b){b.originalEvent&&b.originalEvent.persisted&&i.each(function(){a(this).trigger("appear")})}),a(c).ready(function(){g()}),this},a.belowthefold=function(c,f){var g;return g=f.container===d||f.container===b?(b.innerHeight?b.innerHeight:e.height())+e.scrollTop():a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return g=f.container===d||f.container===b?e.width()+e.scrollLeft():a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollTop():a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollLeft():a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return!(a.rightoffold(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.abovethetop(b,c))},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})}(jQuery,window,document);
/*!
 * Isotope PACKAGED v3.0.5
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2017 Metafizzy
 */

!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,s,a){function u(t,e,o){var n,s="$()."+i+'("'+e+'")';return t.each(function(t,u){var h=a.data(u,i);if(!h)return void r(i+" not initialized. Cannot call methods, i.e. "+s);var d=h[e];if(!d||"_"==e.charAt(0))return void r(s+" is not a valid method");var l=d.apply(h,o);n=void 0===n?l:n}),void 0!==n?n:t}function h(t,e){t.each(function(t,o){var n=a.data(o,i);n?(n.option(e),n._init()):(n=new s(o,e),a.data(o,i,n))})}a=a||e||t.jQuery,a&&(s.prototype.option||(s.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=n.call(arguments,1);return u(this,t,e)}return h(this,t),this},o(a))}function o(t){!t||t&&t.bridget||(t.bridget=i)}var n=Array.prototype.slice,s=t.console,r="undefined"==typeof s?function(){}:function(t){s.error(t)};return o(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},o=i[t]=i[t]||[];return o.indexOf(e)==-1&&o.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},o=i[t]=i[t]||{};return o[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var o=i.indexOf(e);return o!=-1&&i.splice(o,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var o=this._onceEvents&&this._onceEvents[t],n=0;n<i.length;n++){var s=i[n],r=o&&o[s];r&&(this.off(t,s),delete o[s]),s.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("get-size/get-size",[],function(){return e()}):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=t.indexOf("%")==-1&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<h;e++){var i=u[e];t[i]=0}return t}function o(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),e}function n(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var n=o(e);s.isBoxSizeOuter=r=200==t(n.width),i.removeChild(e)}}function s(e){if(n(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var s=o(e);if("none"==s.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==s.boxSizing,l=0;l<h;l++){var f=u[l],c=s[f],m=parseFloat(c);a[f]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,y=a.paddingTop+a.paddingBottom,g=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,I=a.borderTopWidth+a.borderBottomWidth,z=d&&r,x=t(s.width);x!==!1&&(a.width=x+(z?0:p+_));var S=t(s.height);return S!==!1&&(a.height=S+(z?0:y+I)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(y+I),a.outerWidth=a.width+g,a.outerHeight=a.height+v,a}}var r,a="undefined"==typeof console?e:function(t){console.error(t)},u=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],h=u.length,d=!1;return s}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var o=e[i],n=o+"MatchesSelector";if(t[n])return n}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e},i.makeArray=function(t){var e=[];if(Array.isArray(t))e=t;else if(t&&"object"==typeof t&&"number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e},i.removeFrom=function(t,e){var i=t.indexOf(e);i!=-1&&t.splice(i,1)},i.getParent=function(t,i){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,o){t=i.makeArray(t);var n=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!o)return void n.push(t);e(t,o)&&n.push(t);for(var i=t.querySelectorAll(o),s=0;s<i.length;s++)n.push(i[s])}}),n},i.debounceMethod=function(t,e,i){var o=t.prototype[e],n=e+"Timeout";t.prototype[e]=function(){var t=this[n];t&&clearTimeout(t);var e=arguments,s=this;this[n]=setTimeout(function(){o.apply(s,e),delete s[n]},i||100)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var o=t.console;return i.htmlInit=function(e,n){i.docReady(function(){var s=i.toDashed(n),r="data-"+s,a=document.querySelectorAll("["+r+"]"),u=document.querySelectorAll(".js-"+s),h=i.makeArray(a).concat(i.makeArray(u)),d=r+"-options",l=t.jQuery;h.forEach(function(t){var i,s=t.getAttribute(r)||t.getAttribute(d);try{i=s&&JSON.parse(s)}catch(a){return void(o&&o.error("Error parsing "+r+" on "+t.className+": "+a))}var u=new e(t,i);l&&l.data(t,n,u)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t){for(var e in t)return!1;return e=null,!0}function o(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function n(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var s=document.documentElement.style,r="string"==typeof s.transition?"transition":"WebkitTransition",a="string"==typeof s.transform?"transform":"WebkitTransform",u={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[r],h={transform:a,transition:r,transitionDuration:r+"Duration",transitionProperty:r+"Property",transitionDelay:r+"Delay"},d=o.prototype=Object.create(t.prototype);d.constructor=o,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.getSize=function(){this.size=e(this.element)},d.css=function(t){var e=this.element.style;for(var i in t){var o=h[i]||i;e[o]=t[i]}},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),o=t[e?"left":"right"],n=t[i?"top":"bottom"],s=this.layout.size,r=o.indexOf("%")!=-1?parseFloat(o)/100*s.width:parseInt(o,10),a=n.indexOf("%")!=-1?parseFloat(n)/100*s.height:parseInt(n,10);r=isNaN(r)?0:r,a=isNaN(a)?0:a,r-=e?s.paddingLeft:s.paddingRight,a-=i?s.paddingTop:s.paddingBottom,this.position.x=r,this.position.y=a},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),o=this.layout._getOption("originTop"),n=i?"paddingLeft":"paddingRight",s=i?"left":"right",r=i?"right":"left",a=this.position.x+t[n];e[s]=this.getXValue(a),e[r]="";var u=o?"paddingTop":"paddingBottom",h=o?"top":"bottom",d=o?"bottom":"top",l=this.position.y+t[u];e[h]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},d.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,e){this.getPosition();var i=this.position.x,o=this.position.y,n=parseInt(t,10),s=parseInt(e,10),r=n===this.position.x&&s===this.position.y;if(this.setPosition(t,e),r&&!this.isTransitioning)return void this.layoutPosition();var a=t-i,u=e-o,h={};h.transform=this.getTranslate(a,u),this.transition({to:h,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),o=this.layout._getOption("originTop");return t=i?t:-t,e=o?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},d.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var o=this.element.offsetHeight;o=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var l="opacity,"+n(a);d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(u,this,!1)}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)};var f={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,o=f[t.propertyName]||t.propertyName;if(delete e.ingProperties[o],i(e.ingProperties)&&this.disableTransition(),o in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[o]),o in e.onEnd){var n=e.onEnd[o];n.call(this),delete e.onEnd[o]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(u,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var c={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(c)},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){return r&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},o}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,o,n,s){return e(t,i,o,n,s)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,o,n){"use strict";function s(t,e){var i=o.getQueryElement(t);if(!i)return void(u&&u.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,h&&(this.$element=h(this.element)),this.options=o.extend({},this.constructor.defaults),this.option(e);var n=++l;this.element.outlayerGUID=n,f[n]=this,this._create();var s=this._getOption("initLayout");s&&this.layout()}function r(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],o=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var n=m[o]||1;return i*n}var u=t.console,h=t.jQuery,d=function(){},l=0,f={};s.namespace="outlayer",s.Item=n,s.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var c=s.prototype;o.extend(c,e.prototype),c.option=function(t){o.extend(this.options,t)},c._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},s.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},c._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),o.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},c.reloadItems=function(){this.items=this._itemize(this.element.children)},c._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,o=[],n=0;n<e.length;n++){var s=e[n],r=new i(s,this);o.push(r)}return o},c._filterFindItemElements=function(t){return o.filterFindElements(t,this.options.itemSelector)},c.getItemElements=function(){return this.items.map(function(t){return t.element})},c.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},c._init=c.layout,c._resetLayout=function(){this.getSize()},c.getSize=function(){this.size=i(this.element)},c._getMeasurement=function(t,e){var o,n=this.options[t];n?("string"==typeof n?o=this.element.querySelector(n):n instanceof HTMLElement&&(o=n),this[t]=o?i(o)[e]:n):this[t]=0},c.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},c._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},c._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var o=this._getItemLayoutPosition(t);o.item=t,o.isInstant=e||t.isLayoutInstant,i.push(o)},this),this._processLayoutQueue(i)}},c._getItemLayoutPosition=function(){return{x:0,y:0}},c._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},c.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},c._positionItem=function(t,e,i,o,n){o?t.goTo(e,i):(t.stagger(n*this.stagger),t.moveTo(e,i))},c._postLayout=function(){this.resizeContainer()},c.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},c._getContainerSize=d,c._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},c._emitCompleteOnItems=function(t,e){function i(){n.dispatchEvent(t+"Complete",null,[e])}function o(){r++,r==s&&i()}var n=this,s=e.length;if(!e||!s)return void i();var r=0;e.forEach(function(e){e.once(t,o)})},c.dispatchEvent=function(t,e,i){var o=e?[e].concat(i):i;if(this.emitEvent(t,o),h)if(this.$element=this.$element||h(this.element),e){var n=h.Event(e);n.type=t,this.$element.trigger(n,i)}else this.$element.trigger(t,i)},c.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},c.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},c.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},c.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){o.removeFrom(this.stamps,t),this.unignore(t)},this)},c._find=function(t){if(t)return"string"==typeof t&&(t=this.element.querySelectorAll(t)),t=o.makeArray(t)},c._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},c._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},c._manageStamp=d,c._getElementOffset=function(t){var e=t.getBoundingClientRect(),o=this._boundingRect,n=i(t),s={left:e.left-o.left-n.marginLeft,top:e.top-o.top-n.marginTop,right:o.right-e.right-n.marginRight,bottom:o.bottom-e.bottom-n.marginBottom};return s},c.handleEvent=o.handleEvent,c.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},c.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},c.onresize=function(){this.resize()},o.debounceMethod(s,"onresize",100),c.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},c.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},c.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},c.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},c.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},c.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},c.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},c.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},c.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},c.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},c.getItems=function(t){t=o.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},c.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),o.removeFrom(this.items,t)},this)},c.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete f[e],delete this.element.outlayerGUID,h&&h.removeData(this.element,this.constructor.namespace)},s.data=function(t){t=o.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&f[e]},s.create=function(t,e){var i=r(s);return i.defaults=o.extend({},s.defaults),o.extend(i.defaults,e),i.compatOptions=o.extend({},s.compatOptions),i.namespace=t,i.data=s.data,i.Item=r(n),o.htmlInit(i,t),h&&h.bridget&&h.bridget(t,i),i};var m={ms:1,s:1e3};return s.Item=n,s}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/item",["outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.Item=e(t.Outlayer))}(window,function(t){"use strict";function e(){t.Item.apply(this,arguments)}var i=e.prototype=Object.create(t.Item.prototype),o=i._create;i._create=function(){this.id=this.layout.itemGUID++,o.call(this),this.sortData={}},i.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var o=e[i];this.sortData[i]=o(this.element,this)}}};var n=i.destroy;return i.destroy=function(){n.apply(this,arguments),this.css({display:""})},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("get-size"),require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.LayoutMode=e(t.getSize,t.Outlayer))}(window,function(t,e){"use strict";function i(t){this.isotope=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}var o=i.prototype,n=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout","_getOption"];return n.forEach(function(t){o[t]=function(){return e.prototype[t].apply(this.isotope,arguments)}}),o.needsVerticalResizeLayout=function(){var e=t(this.isotope.element),i=this.isotope.size&&e;return i&&e.innerHeight!=this.isotope.size.innerHeight},o._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},o.getColumnWidth=function(){this.getSegmentSize("column","Width")},o.getRowHeight=function(){this.getSegmentSize("row","Height")},o.getSegmentSize=function(t,e){var i=t+e,o="outer"+e;if(this._getMeasurement(i,o),!this[i]){var n=this.getFirstItemSize();this[i]=n&&n[o]||this.isotope.size["inner"+e]}},o.getFirstItemSize=function(){var e=this.isotope.filteredItems[0];return e&&e.element&&t(e.element)},o.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},o.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},i.modes={},i.create=function(t,e){function n(){i.apply(this,arguments)}return n.prototype=Object.create(o),n.prototype.constructor=n,e&&(n.options=e),n.prototype.namespace=t,i.modes[t]=n,n},i}),function(t,e){"function"==typeof define&&define.amd?define("masonry-layout/masonry",["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");i.compatOptions.fitWidth="isFitWidth";var o=i.prototype;return o._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},o.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var o=this.columnWidth+=this.gutter,n=this.containerWidth+this.gutter,s=n/o,r=o-n%o,a=r&&r<1?"round":"floor";s=Math[a](s),this.cols=Math.max(s,1)},o.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,o=e(i);this.containerWidth=o&&o.innerWidth},o._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&e<1?"round":"ceil",o=Math[i](t.size.outerWidth/this.columnWidth);o=Math.min(o,this.cols);for(var n=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",s=this[n](o,t),r={x:this.columnWidth*s.col,y:s.y},a=s.y+t.size.outerHeight,u=o+s.col,h=s.col;h<u;h++)this.colYs[h]=a;return r},o._getTopColPosition=function(t){var e=this._getTopColGroup(t),i=Math.min.apply(Math,e);return{col:e.indexOf(i),y:i}},o._getTopColGroup=function(t){if(t<2)return this.colYs;for(var e=[],i=this.cols+1-t,o=0;o<i;o++)e[o]=this._getColGroupY(o,t);return e},o._getColGroupY=function(t,e){if(e<2)return this.colYs[t];var i=this.colYs.slice(t,t+e);return Math.max.apply(Math,i)},o._getHorizontalColPosition=function(t,e){var i=this.horizontalColIndex%this.cols,o=t>1&&i+t>this.cols;i=o?0:i;var n=e.size.outerWidth&&e.size.outerHeight;return this.horizontalColIndex=n?i+t:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,t)}},o._manageStamp=function(t){var i=e(t),o=this._getElementOffset(t),n=this._getOption("originLeft"),s=n?o.left:o.right,r=s+i.outerWidth,a=Math.floor(s/this.columnWidth);a=Math.max(0,a);var u=Math.floor(r/this.columnWidth);u-=r%this.columnWidth?0:1,u=Math.min(this.cols-1,u);for(var h=this._getOption("originTop"),d=(h?o.top:o.bottom)+i.outerHeight,l=a;l<=u;l++)this.colYs[l]=Math.max(d,this.colYs[l])},o._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},o._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},o.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/masonry",["../layout-mode","masonry-layout/masonry"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode"),require("masonry-layout")):e(t.Isotope.LayoutMode,t.Masonry)}(window,function(t,e){"use strict";var i=t.create("masonry"),o=i.prototype,n={_getElementOffset:!0,layout:!0,_getMeasurement:!0};for(var s in e.prototype)n[s]||(o[s]=e.prototype[s]);var r=o.measureColumns;o.measureColumns=function(){this.items=this.isotope.filteredItems,r.call(this)};var a=o._getOption;return o._getOption=function(t){return"fitWidth"==t?void 0!==this.options.isFitWidth?this.options.isFitWidth:this.options.fitWidth:a.apply(this.isotope,arguments)},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/fit-rows",["../layout-mode"],e):"object"==typeof exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("fitRows"),i=e.prototype;return i._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},i._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth+this.gutter,i=this.isotope.size.innerWidth+this.gutter;0!==this.x&&e+this.x>i&&(this.x=0,this.y=this.maxY);var o={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=e,o},i._getContainerSize=function(){return{height:this.maxY}},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/vertical",["../layout-mode"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("vertical",{horizontalAlignment:0}),i=e.prototype;return i._resetLayout=function(){this.y=0},i._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},i._getContainerSize=function(){return{height:this.y}},e}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","desandro-matches-selector/matches-selector","fizzy-ui-utils/utils","isotope-layout/js/item","isotope-layout/js/layout-mode","isotope-layout/js/layout-modes/masonry","isotope-layout/js/layout-modes/fit-rows","isotope-layout/js/layout-modes/vertical"],function(i,o,n,s,r,a){return e(t,i,o,n,s,r,a)}):"object"==typeof module&&module.exports?module.exports=e(t,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("isotope-layout/js/item"),require("isotope-layout/js/layout-mode"),require("isotope-layout/js/layout-modes/masonry"),require("isotope-layout/js/layout-modes/fit-rows"),require("isotope-layout/js/layout-modes/vertical")):t.Isotope=e(t,t.Outlayer,t.getSize,t.matchesSelector,t.fizzyUIUtils,t.Isotope.Item,t.Isotope.LayoutMode)}(window,function(t,e,i,o,n,s,r){function a(t,e){return function(i,o){for(var n=0;n<t.length;n++){var s=t[n],r=i.sortData[s],a=o.sortData[s];if(r>a||r<a){var u=void 0!==e[s]?e[s]:e,h=u?1:-1;return(r>a?1:-1)*h}}return 0}}var u=t.jQuery,h=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},d=e.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});d.Item=s,d.LayoutMode=r;var l=d.prototype;l._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),e.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var t in r.modes)this._initLayoutMode(t)},l.reloadItems=function(){this.itemGUID=0,e.prototype.reloadItems.call(this)},l._itemize=function(){for(var t=e.prototype._itemize.apply(this,arguments),i=0;i<t.length;i++){var o=t[i];o.id=this.itemGUID++}return this._updateItemsSortData(t),t},l._initLayoutMode=function(t){var e=r.modes[t],i=this.options[t]||{};this.options[t]=e.options?n.extend(e.options,i):i,this.modes[t]=new e(this)},l.layout=function(){return!this._isLayoutInited&&this._getOption("initLayout")?void this.arrange():void this._layout()},l._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},l.arrange=function(t){this.option(t),this._getIsInstant();var e=this._filter(this.items);this.filteredItems=e.matches,this._bindArrangeComplete(),this._isInstant?this._noTransition(this._hideReveal,[e]):this._hideReveal(e),this._sort(),this._layout()},l._init=l.arrange,l._hideReveal=function(t){this.reveal(t.needReveal),this.hide(t.needHide)},l._getIsInstant=function(){var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;return this._isInstant=e,e},l._bindArrangeComplete=function(){function t(){e&&i&&o&&n.dispatchEvent("arrangeComplete",null,[n.filteredItems])}var e,i,o,n=this;this.once("layoutComplete",function(){e=!0,t()}),this.once("hideComplete",function(){i=!0,t()}),this.once("revealComplete",function(){o=!0,t()})},l._filter=function(t){var e=this.options.filter;e=e||"*";for(var i=[],o=[],n=[],s=this._getFilterTest(e),r=0;r<t.length;r++){var a=t[r];if(!a.isIgnored){var u=s(a);u&&i.push(a),u&&a.isHidden?o.push(a):u||a.isHidden||n.push(a)}}return{matches:i,needReveal:o,needHide:n}},l._getFilterTest=function(t){
return u&&this.options.isJQueryFiltering?function(e){return u(e.element).is(t)}:"function"==typeof t?function(e){return t(e.element)}:function(e){return o(e.element,t)}},l.updateSortData=function(t){var e;t?(t=n.makeArray(t),e=this.getItems(t)):e=this.items,this._getSorters(),this._updateItemsSortData(e)},l._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=f(i)}},l._updateItemsSortData=function(t){for(var e=t&&t.length,i=0;e&&i<e;i++){var o=t[i];o.updateSortData()}};var f=function(){function t(t){if("string"!=typeof t)return t;var i=h(t).split(" "),o=i[0],n=o.match(/^\[(.+)\]$/),s=n&&n[1],r=e(s,o),a=d.sortDataParsers[i[1]];return t=a?function(t){return t&&a(r(t))}:function(t){return t&&r(t)}}function e(t,e){return t?function(e){return e.getAttribute(t)}:function(t){var i=t.querySelector(e);return i&&i.textContent}}return t}();d.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},l._sort=function(){if(this.options.sortBy){var t=n.makeArray(this.options.sortBy);this._getIsSameSortBy(t)||(this.sortHistory=t.concat(this.sortHistory));var e=a(this.sortHistory,this.options.sortAscending);this.filteredItems.sort(e)}},l._getIsSameSortBy=function(t){for(var e=0;e<t.length;e++)if(t[e]!=this.sortHistory[e])return!1;return!0},l._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw new Error("No layout mode: "+t);return e.options=this.options[t],e},l._resetLayout=function(){e.prototype._resetLayout.call(this),this._mode()._resetLayout()},l._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},l._manageStamp=function(t){this._mode()._manageStamp(t)},l._getContainerSize=function(){return this._mode()._getContainerSize()},l.needsResizeLayout=function(){return this._mode().needsResizeLayout()},l.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},l.prepended=function(t){var e=this._itemize(t);if(e.length){this._resetLayout(),this._manageStamps();var i=this._filterRevealAdded(e);this.layoutItems(this.filteredItems),this.filteredItems=i.concat(this.filteredItems),this.items=e.concat(this.items)}},l._filterRevealAdded=function(t){var e=this._filter(t);return this.hide(e.needHide),this.reveal(e.matches),this.layoutItems(e.matches,!0),e.matches},l.insert=function(t){var e=this.addItems(t);if(e.length){var i,o,n=e.length;for(i=0;i<n;i++)o=e[i],this.element.appendChild(o.element);var s=this._filter(e).matches;for(i=0;i<n;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;i<n;i++)delete e[i].isLayoutInstant;this.reveal(s)}};var c=l.remove;return l.remove=function(t){t=n.makeArray(t);var e=this.getItems(t);c.call(this,t);for(var i=e&&e.length,o=0;i&&o<i;o++){var s=e[o];n.removeFrom(this.filteredItems,s)}},l.shuffle=function(){for(var t=0;t<this.items.length;t++){var e=this.items[t];e.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},l._noTransition=function(t,e){var i=this.options.transitionDuration;this.options.transitionDuration=0;var o=t.apply(this,e);return this.options.transitionDuration=i,o},l.getFilteredItemElements=function(){return this.filteredItems.map(function(t){return t.element})},d});
/**
 * Owl Carousel v2.3.3
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this)},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,checkVisibility:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(a){var b=this.settings.margin||"",c=!this.settings.autoWidth,d=this.settings.rtl,e={width:"auto","margin-left":d?b:"","margin-right":d?"":b};!c&&this.$stage.children().css(e),a.css=e}},{filter:["width","items","settings"],run:function(a){var b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,c=null,d=this._items.length,e=!this.settings.autoWidth,f=[];for(a.items={merge:!1,width:b};d--;)c=this._mergers[d],c=this.settings.mergeFit&&Math.min(c,this.settings.items)||c,a.items.merge=c>1||a.items.merge,f[d]=e?b*c:this._items[d].width();this._widths=f}},{filter:["items","settings"],run:function(){var b=[],c=this._items,d=this.settings,e=Math.max(2*d.items,4),f=2*Math.ceil(c.length/2),g=d.loop&&c.length?d.rewind?e:Math.max(e,f):0,h="",i="";for(g/=2;g>0;)b.push(this.normalize(b.length/2,!0)),h+=c[b[b.length-1]][0].outerHTML,b.push(this.normalize(c.length-1-(b.length-1)/2,!0)),i=c[b[b.length-1]][0].outerHTML+i,g-=1;this._clones=b,a(h).addClass("cloned").appendTo(this.$stage),a(i).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var a=this.settings.rtl?1:-1,b=this._clones.length+this._items.length,c=-1,d=0,e=0,f=[];++c<b;)d=f[c-1]||0,e=this._widths[this.relative(c)]+this.settings.margin,f.push(d+e*a);this._coordinates=f}},{filter:["width","items","settings"],run:function(){var a=this.settings.stagePadding,b=this._coordinates,c={width:Math.ceil(Math.abs(b[b.length-1]))+2*a,"padding-left":a||"","padding-right":a||""};this.$stage.css(c)}},{filter:["width","items","settings"],run:function(a){var b=this._coordinates.length,c=!this.settings.autoWidth,d=this.$stage.children();if(c&&a.items.merge)for(;b--;)a.css.width=this._widths[this.relative(b)],d.eq(b).css(a.css);else c&&(a.css.width=a.items.width,d.css(a.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(a){a.current=a.current?this.$stage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;c<d;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass("active"),this.$stage.children(".center").removeClass("center"),this.settings.center&&this.$stage.children().eq(this.current()).addClass("center")}}],e.prototype.initializeStage=function(){this.$stage=this.$element.find("."+this.settings.stageClass),this.$stage.length||(this.$element.addClass(this.options.loadingClass),this.$stage=a("<"+this.settings.stageElement+' class="'+this.settings.stageClass+'"/>').wrap('<div class="'+this.settings.stageOuterClass+'"/>'),this.$element.append(this.$stage.parent()))},e.prototype.initializeItems=function(){var b=this.$element.find(".owl-item");if(b.length)return this._items=b.get().map(function(b){return a(b)}),this._mergers=this._items.map(function(){return 1}),void this.refresh();this.replace(this.$element.children().not(this.$stage.parent())),this.isVisible()?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)},e.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var a,b,c;a=this.$element.find("img"),b=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,c=this.$element.children(b).width(),a.length&&c<=0&&this.preloadAutoWidthImages(a)}this.initializeStage(),this.initializeItems(),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},e.prototype.isVisible=function(){return!this.settings.checkVisibility||this.$element.is(":visible")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){a<=b&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),"function"==typeof e.stagePadding&&(e.stagePadding=e.stagePadding()),delete e.responsive,e.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+d))):e=a.extend({},this.options),this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},e.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};b<c;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={},!this.is("valid")&&this.enter("valid")},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.isVisible()&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},e.prototype.registerEventHandlers=function(){a.support.transition&&this.$stage.on(a.support.transition.end+".owl.core",a.proxy(this.onTransitionEnd,this)),!1!==this.settings.responsive&&this.on(b,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",a.proxy(this.onDragEnd,this)))},e.prototype.onDragStart=function(b){var d=null;3!==b.which&&(a.support.transform?(d=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),d={x:d[16===d.length?12:4],y:d[16===d.length?13:5]}):(d=this.$stage.position(),d={x:this.settings.rtl?d.left+this.$stage.width()-this.width()+this.settings.margin:d.left,y:d.top}),this.is("animating")&&(a.support.transform?this.animate(d.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===b.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=a(b.target),this._drag.stage.start=d,this._drag.stage.current=d,this._drag.pointer=this.pointer(b),a(c).on("mouseup.owl.core touchend.owl.core",a.proxy(this.onDragEnd,this)),a(c).one("mousemove.owl.core touchmove.owl.core",a.proxy(function(b){var d=this.difference(this._drag.pointer,this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core",a.proxy(this.onDragMove,this)),Math.abs(d.x)<Math.abs(d.y)&&this.is("valid")||(b.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},e.prototype.onDragMove=function(a){var b=null,c=null,d=null,e=this.difference(this._drag.pointer,this.pointer(a)),f=this.difference(this._drag.stage.start,e);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(b=this.coordinates(this.minimum()),c=this.coordinates(this.maximum()+1)-b,f.x=((f.x-b)%c+c)%c+b):(b=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),c=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),d=this.settings.pullDrag?-1*e.x/5:0,f.x=Math.max(Math.min(f.x,b+d),c+d)),this._drag.stage.current=f,this.animate(f.x))},e.prototype.onDragEnd=function(b){var d=this.difference(this._drag.pointer,this.pointer(b)),e=this._drag.stage.current,f=d.x>0^this.settings.rtl?"left":"right";a(c).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==d.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==d.x?f:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=f,(Math.abs(d.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},e.prototype.closest=function(b,c){var e=-1,f=30,g=this.width(),h=this.coordinates();return this.settings.freeDrag||a.each(h,a.proxy(function(a,i){return"left"===c&&b>i-f&&b<i+f?e=a:"right"===c&&b>i-g-f&&b<i-g+f?e=a+1:this.op(b,"<",i)&&this.op(b,">",h[a+1]!==d?h[a+1]:i-g)&&(e="left"===c?a+1:a),-1===e},this)),this.settings.loop||(this.op(b,">",h[this.minimum()])?e=b=this.minimum():this.op(b,"<",h[this.maximum()])&&(e=b=this.maximum())),e},e.prototype.animate=function(b){var c=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),c&&(this.enter("animating"),this.trigger("translate")),a.support.transform3d&&a.support.transition?this.$stage.css({transform:"translate3d("+b+"px,0px,0px)",transition:this.speed()/1e3+"s"}):c?this.$stage.animate({left:b+"px"},this.speed(),this.settings.fallbackEasing,a.proxy(this.onTransitionEnd,this)):this.$stage.css({left:b+"px"})},e.prototype.is=function(a){return this._states.current[a]&&this._states.current[a]>0},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(b){return"string"===a.type(b)&&(this._invalidated[b]=!0,this.is("valid")&&this.leave("valid")),a.map(this._invalidated,function(a,b){return b})},e.prototype.reset=function(a){(a=this.normalize(a))!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(a,b){var c=this._items.length,e=b?0:this._clones.length;return!this.isNumeric(a)||c<1?a=d:(a<0||a>=c+e)&&(a=((a-e/2)%c+c)%c+e/2),a},e.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=this.settings,f=this._coordinates.length;if(e.loop)f=this._clones.length/2+this._items.length-1;else if(e.autoWidth||e.merge){if(b=this._items.length)for(c=this._items[--b].width(),d=this.$element.width();b--&&!((c+=this._items[b].width()+this.settings.margin)>d););f=b+1}else f=e.center?this._items.length-1:this._items.length-e.items;return a&&(f-=this._clones.length/2),Math.max(f,0)},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2==0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c,e=1,f=b-1;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(this.settings.rtl&&(e=-1,f=b+1),c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[f]||0))/2*e):c=this._coordinates[f]||0,c=Math.ceil(c))},e.prototype.duration=function(a,b,c){return 0===c?0:Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(a,b){var c=this.current(),d=null,e=a-this.relative(c),f=(e>0)-(e<0),g=this._items.length,h=this.minimum(),i=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=-1*f*g),a=c+e,(d=((a-h)%g+g)%g+h)!==a&&d-e<=i&&d-e>0&&(c=d-e,a=d,this.reset(c))):this.settings.rewind?(i+=1,a=(a%i+i)%i):a=Math.max(h,Math.min(i,a)),this.speed(this.duration(c,a,b)),this.current(a),this.isVisible()&&this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.onTransitionEnd=function(a){if(a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},e.prototype.viewport=function(){var d;return this.options.responsiveBaseElement!==b?d=a(this.options.responsiveBaseElement).width():b.innerWidth?d=b.innerWidth:c.documentElement&&c.documentElement.clientWidth?d=c.documentElement.clientWidth:console.warn("Can not detect viewport width."),d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(b,c){var e=this.relative(this._current);c=c===d?this._items.length:this.normalize(c,!0),b=b instanceof jQuery?b:a(b),this.trigger("add",{content:b,position:c}),b=this.prepare(b),0===this._items.length||c===this._items.length?(0===this._items.length&&this.$stage.append(b),0!==this._items.length&&this._items[c-1].after(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[c].before(b),this._items.splice(c,0,b),this._mergers.splice(c,0,1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[e]&&this.reset(this._items[e].index()),this.invalidate("items"),this.trigger("added",{content:b,position:c})},e.prototype.remove=function(a){(a=this.normalize(a,!0))!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.preloadAutoWidthImages=function(b){b.each(a.proxy(function(b,c){this.enter("pre-loading"),c=a(c),a(new Image).one("load",a.proxy(function(a){c.attr("src",a.target.src),c.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",c.attr("src")||c.attr("data-src")||c.attr("data-src-retina"))},this))},e.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),a(c).off(".owl.core"),!1!==this.settings.responsive&&(b.clearTimeout(this.resizeTimer),this.off(b,"resize",this._handlers.onThrottledResize));for(var d in this._plugins)this._plugins[d].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.remove(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:a<c;case">":return d?a<c:a>c;case">=":return d?a<=c:a>=c;case"<=":return d?a>=c:a<=c}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d,f,g){var h={item:{count:this._items.length,index:this.current()}},i=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),j=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},h,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(j)}),this.register({type:e.Type.Event,name:b}),this.$element.trigger(j),this.settings&&"function"==typeof this.settings[i]&&this.settings[i].call(this,j)),j},e.prototype.enter=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]===d&&(this._states.current[b]=0),this._states.current[b]++},this))},e.prototype.leave=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]--},this))},e.prototype.register=function(b){if(b.type===e.Type.Event){if(a.event.special[b.name]||(a.event.special[b.name]={}),!a.event.special[b.name].owl){var c=a.event.special[b.name]._default;a.event.special[b.name]._default=function(a){return!c||!c.apply||a.namespace&&-1!==a.namespace.indexOf("owl")?a.namespace&&a.namespace.indexOf("owl")>-1:c.apply(this,arguments)},a.event.special[b.name].owl=!0}}else b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags,this._states.tags[b.name]=a.grep(this._states.tags[b.name],a.proxy(function(c,d){return a.inArray(c,this._states.tags[b.name])===d},this)))},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.pointer=function(a){var c={x:null,y:null};return a=a.originalEvent||a||b.event,a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,a.pageX?(c.x=a.pageX,c.y=a.pageY):(c.x=a.clientX,c.y=a.clientY),c},e.prototype.isNumeric=function(a){return!isNaN(parseFloat(a))},e.prototype.difference=function(a,b){return{x:a.x-b.x,y:a.y-b.y}},a.fn.owlCarousel=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),f=d.data("owl.carousel");f||(f=new e(this,"object"==typeof b&&b),d.data("owl.carousel",f),a.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(b,c){f.register({type:e.Type.Event,name:c}),f.$element.on(c+".owl.carousel.core",a.proxy(function(a){a.namespace&&a.relatedTarget!==this&&(this.suppress([c]),f[c].apply(this,[].slice.call(arguments,1)),this.release([c]))},f))})),"string"==typeof b&&"_"!==b.charAt(0)&&f[b].apply(f,c)})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoRefresh:!0,autoRefreshInterval:500},e.prototype.watch=function(){this._interval||(this._visible=this._core.isVisible(),this._interval=b.setInterval(a.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},e.prototype.refresh=function(){this._core.isVisible()!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},e.prototype.destroy=function(){var a,c;b.clearInterval(this._interval);for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type))for(var c=this._core.settings,e=c.center&&Math.ceil(c.items/2)||c.items,f=c.center&&-1*e||0,g=(b.property&&b.property.value!==d?b.property.value:this._core.current())+f,h=this._core.clones().length,i=a.proxy(function(a,b){this.load(b)},this);f++<e;)this.load(h/2+this._core.relative(g)),h&&a.each(this._core.clones(this._core.relative(g)),i),g++},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={lazyLoad:!1},e.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src")||f.attr("data-srcset");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):f.is("source")?f.one("load.owl.lazy",a.proxy(function(){this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("srcset",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":'url("'+g+'")',opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(c){this._core=c,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&"position"===a.property.name&&(console.log("update called"),this.update())},this),"loaded.owl.lazy":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._intervalId=null;var d=this;a(b).on("load",function(){d._core.settings.autoHeight&&d.update()}),a(b).resize(function(){d._core.settings.autoHeight&&(null!=d._intervalId&&clearTimeout(d._intervalId),d._intervalId=setTimeout(function(){d.update()},250))})};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var b=this._core._current,c=b+this._core.settings.items,d=this._core.$stage.children().toArray().slice(b,c),e=[],f=0;a.each(d,function(b,c){e.push(a(c).height())}),f=Math.max.apply(null,e),this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault()},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};e.Defaults={video:!1,videoHeight:!1,videoWidth:!1},e.prototype.fetch=function(a,b){var c=function(){return a.attr("data-vimeo-id")?"vimeo":a.attr("data-vzaar-id")?"vzaar":"youtube"}(),d=a.attr("data-vimeo-id")||a.attr("data-youtube-id")||a.attr("data-vzaar-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else if(d[3].indexOf("vimeo")>-1)c="vimeo";else{if(!(d[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");c="vzaar"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},e.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?'style="width:'+c.width+"px;height:"+c.height+'px;"':"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(a){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?'<div class="owl-video-tn '+j+'" '+i+'="'+a+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+a+')"></div>',b.after(d),b.after(e)};if(b.wrap('<div class="owl-video-wrapper"'+g+"></div>"),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length)return l(h.attr(i)),h.remove(),!1;"youtube"===c.type?(f="//img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type?a.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}):"vzaar"===c.type&&a.ajax({type:"GET",url:"//vzaar.com/api/videos/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a.framegrab_url,l(f)}})},e.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},e.prototype.play=function(b){var c,d=a(b.target),e=d.closest("."+this._core.settings.itemClass),f=this._videos[e.attr("data-video")],g=f.width||"100%",h=f.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),e=this._core.items(this._core.relative(e.index())),this._core.reset(e.index()),"youtube"===f.type?c='<iframe width="'+g+'" height="'+h+'" src="//www.youtube.com/embed/'+f.id+"?autoplay=1&rel=0&v="+f.id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===f.type?c='<iframe src="//player.vimeo.com/video/'+f.id+'?autoplay=1" width="'+g+'" height="'+h+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>':"vzaar"===f.type&&(c='<iframe frameborder="0"height="'+h+'"width="'+g+'" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/'+f.id+'/player?autoplay=true"></iframe>'),a('<div class="owl-video-frame">'+c+"</div>").insertAfter(e.find(".owl-video")),this._playing=e.addClass("owl-video-playing"))},e.prototype.isInFullScreen=function(){var b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return b&&a(b).parent().hasClass("owl-video-frame")},e.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){a.namespace&&(this.swapping="translated"==a.type)},this),"translate.owl.carousel":a.proxy(function(a){a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&a.support.animation&&a.support.transition){
this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.one(a.support.animation.end,c).css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g)),f&&e.one(a.support.animation.end,c).addClass("animated owl-animated-in").addClass(f))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._call=null,this._time=0,this._timeout=0,this._paused=!0,this._handlers={"changed.owl.carousel":a.proxy(function(a){a.namespace&&"settings"===a.property.name?this._core.settings.autoplay?this.play():this.stop():a.namespace&&"position"===a.property.name&&this._paused&&(this._time=0)},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":a.proxy(function(a,b,c){a.namespace&&this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(a){a.namespace&&this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=a.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype._next=function(d){this._call=b.setTimeout(a.proxy(this._next,this,d),this._timeout*(Math.round(this.read()/this._timeout)+1)-this.read()),this._core.is("interacting")||c.hidden||this._core.next(d||this._core.settings.autoplaySpeed)},e.prototype.read=function(){return(new Date).getTime()-this._time},e.prototype.play=function(c,d){var e;this._core.is("rotating")||this._core.enter("rotating"),c=c||this._core.settings.autoplayTimeout,e=Math.min(this._time%(this._timeout||c),c),this._paused?(this._time=this.read(),this._paused=!1):b.clearTimeout(this._call),this._time+=this.read()%c-e,this._timeout=c,this._call=b.setTimeout(a.proxy(this._next,this,d),c-e)},e.prototype.stop=function(){this._core.is("rotating")&&(this._time=0,this._paused=!0,b.clearTimeout(this._call),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&!this._paused&&(this._time=this.read(),this._paused=!0,b.clearTimeout(this._call))},e.prototype.destroy=function(){var a,b;this.stop();for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(b){this._core=b,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,0,this._templates.pop())},this),"remove.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&this.draw()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)};e.Defaults={nav:!1,navText:['<span aria-label="Previous">&#x2039;</span>','<span aria-label="Next">&#x203a;</span>'],navSpeed:!1,navElement:'button type="button" role="presentation"',navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var b,c=this._core.settings;this._controls.$relative=(c.navContainer?a(c.navContainer):a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=a("<"+c.navElement+">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click",a.proxy(function(a){this.prev(c.navSpeed)},this)),this._controls.$next=a("<"+c.navElement+">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click",a.proxy(function(a){this.next(c.navSpeed)},this)),c.dotsData||(this._templates=[a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),this._controls.$absolute=(c.dotsContainer?a(c.dotsContainer):a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","button",a.proxy(function(b){var d=a(b.target).parent().is(this._controls.$absolute)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(d,c.dotsSpeed)},this));for(b in this._overrides)this._core[b]=a.proxy(this[b],this)},e.prototype.destroy=function(){var a,b,c,d,e;e=this._core.settings;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)"$relative"===b&&e.navContainer?this._controls[b].html(""):this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},e.prototype.update=function(){var a,b,c,d=this._core.clones().length/2,e=d+this._core.items().length,f=this._core.maximum(!0),g=this._core.settings,h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items;if("page"!==g.slideBy&&(g.slideBy=Math.min(g.slideBy,g.items)),g.dots||"page"==g.slideBy)for(this._pages=[],a=d,b=0,c=0;a<e;a++){if(b>=h||0===b){if(this._pages.push({start:Math.min(f,a-d),end:a-d+h-1}),Math.min(f,a-d)===f)break;b=0,++c}b+=this._core.mergers(this._core.relative(a))}},e.prototype.draw=function(){var b,c=this._core.settings,d=this._core.items().length<=c.items,e=this._core.relative(this._core.current()),f=c.loop||c.rewind;this._controls.$relative.toggleClass("disabled",!c.nav||d),c.nav&&(this._controls.$previous.toggleClass("disabled",!f&&e<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!f&&e>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!c.dots||d),c.dots&&(b=this._pages.length-this._controls.$absolute.children().length,c.dotsData&&0!==b?this._controls.$absolute.html(this._templates.join("")):b>0?this._controls.$absolute.append(new Array(b+1).join(this._templates[0])):b<0&&this._controls.$absolute.children().slice(b).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(a.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)}},e.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,a.proxy(function(a,c){return a.start<=b&&a.end>=b},this)).pop()},e.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},e.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},e.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},e.prototype.to=function(b,c,d){var e;!d&&this._pages.length?(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c)):a.proxy(this._overrides.to,this._core)(b,c)},a.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this._core=c,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(c){c.namespace&&"URLHash"===this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!c)return;this._hashes[c]=b.content}},this),"changed.owl.carousel":a.proxy(function(c){if(c.namespace&&"position"===c.property.name){var d=this._core.items(this._core.relative(this._core.current())),e=a.map(this._hashes,function(a,b){return a===d?b:null}).join();if(!e||b.location.hash.slice(1)===e)return;b.location.hash=e}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(a){var c=b.location.hash.substring(1),e=this._core.$stage.children(),f=this._hashes[c]&&e.index(this._hashes[c]);f!==d&&f!==this._core.current()&&this._core.to(this._core.relative(f),!1,!0)},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){function e(b,c){var e=!1,f=b.charAt(0).toUpperCase()+b.slice(1);return a.each((b+" "+h.join(f+" ")+f).split(" "),function(a,b){if(g[b]!==d)return e=!c||b,!1}),e}function f(a){return e(a,!0)}var g=a("<support>").get(0).style,h="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},j={csstransforms:function(){return!!e("transform")},csstransforms3d:function(){return!!e("perspective")},csstransitions:function(){return!!e("transition")},cssanimations:function(){return!!e("animation")}};j.csstransitions()&&(a.support.transition=new String(f("transition")),a.support.transition.end=i.transition.end[a.support.transition]),j.cssanimations()&&(a.support.animation=new String(f("animation")),a.support.animation.end=i.animation.end[a.support.animation]),j.csstransforms()&&(a.support.transform=new String(f("transform")),a.support.transform3d=j.csstransforms3d())}(window.Zepto||window.jQuery,window,document);
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(c,d){if(void 0===d||d===!1)return!0;if(e=c.split("_"),e.length>1){var f=b.find(p+"-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(p+"-"+c).html(d)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery";return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s);e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),A()});
/*
 *  Vide - v0.5.1
 *  Easy as hell jQuery plugin for video backgrounds.
 *  http://vodkabears.github.io/vide/
 *
 *  Made by Ilya Makarov
 *  Under MIT License
 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],b):b("object"==typeof exports?require("jquery"):a.jQuery)}(this,function(a){"use strict";function b(a){var b,c,d,e,f,g,h,i={};for(f=a.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,",").split(","),h=0,g=f.length;g>h&&(c=f[h],-1===c.search(/^(http|https|ftp):\/\//)&&-1!==c.search(":"));h++)b=c.indexOf(":"),d=c.substring(0,b),e=c.substring(b+1),e||(e=void 0),"string"==typeof e&&(e="true"===e||("false"===e?!1:e)),"string"==typeof e&&(e=isNaN(e)?e:+e),i[d]=e;return null==d&&null==e?a:i}function c(a){a=""+a;var b,c,d,e=a.split(/\s+/),f="50%",g="50%";for(d=0,b=e.length;b>d;d++)c=e[d],"left"===c?f="0%":"right"===c?f="100%":"top"===c?g="0%":"bottom"===c?g="100%":"center"===c?0===d?f="50%":g="50%":0===d?f=c:g=c;return{x:f,y:g}}function d(b,c){var d=function(){c(this.src)};a('<img src="'+b+'.gif">').on("load",d),a('<img src="'+b+'.jpg">').on("load",d),a('<img src="'+b+'.jpeg">').on("load",d),a('<img src="'+b+'.png">').on("load",d)}function e(c,d,e){if(this.$element=a(c),"string"==typeof d&&(d=b(d)),e?"string"==typeof e&&(e=b(e)):e={},"string"==typeof d)d=d.replace(/\.\w*$/,"");else if("object"==typeof d)for(var f in d)d.hasOwnProperty(f)&&(d[f]=d[f].replace(/\.\w*$/,""));this.settings=a.extend({},g,e),this.path=d;try{this.init()}catch(i){if(i.message!==h)throw i}}var f="vide",g={volume:1,playbackRate:1,muted:!0,loop:!0,autoplay:!0,position:"50% 50%",posterType:"detect",resizing:!0,bgColor:"transparent",className:""},h="Not implemented";e.prototype.init=function(){var b,e,g=this,i=g.path,j=i,k="",l=g.$element,m=g.settings,n=c(m.position),o=m.posterType;e=g.$wrapper=a("<div>").addClass(m.className).css({position:"absolute","z-index":-1,top:0,left:0,bottom:0,right:0,overflow:"hidden","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover","background-color":m.bgColor,"background-repeat":"no-repeat","background-position":n.x+" "+n.y}),"object"==typeof i&&(i.poster?j=i.poster:i.mp4?j=i.mp4:i.webm?j=i.webm:i.ogv&&(j=i.ogv)),"detect"===o?d(j,function(a){e.css("background-image","url("+a+")")}):"none"!==o&&e.css("background-image","url("+j+"."+o+")"),"static"===l.css("position")&&l.css("position","relative"),l.prepend(e),"object"==typeof i?(i.mp4&&(k+='<source src="'+i.mp4+'.mp4" type="video/mp4">'),i.webm&&(k+='<source src="'+i.webm+'.webm" type="video/webm">'),i.ogv&&(k+='<source src="'+i.ogv+'.ogv" type="video/ogg">'),b=g.$video=a("<video>"+k+"</video>")):b=g.$video=a('<video><source src="'+i+'.mp4" type="video/mp4"><source src="'+i+'.webm" type="video/webm"><source src="'+i+'.ogv" type="video/ogg"></video>');try{b.prop({autoplay:m.autoplay,loop:m.loop,volume:m.volume,muted:m.muted,defaultMuted:m.muted,playbackRate:m.playbackRate,defaultPlaybackRate:m.playbackRate})}catch(p){throw new Error(h)}b.css({margin:"auto",position:"absolute","z-index":-1,top:n.y,left:n.x,"-webkit-transform":"translate(-"+n.x+", -"+n.y+")","-ms-transform":"translate(-"+n.x+", -"+n.y+")","-moz-transform":"translate(-"+n.x+", -"+n.y+")",transform:"translate(-"+n.x+", -"+n.y+")",visibility:"hidden",opacity:0}).one("canplaythrough."+f,function(){g.resize()}).one("playing."+f,function(){b.css({visibility:"visible",opacity:1}),e.css("background-image","none")}),l.on("resize."+f,function(){m.resizing&&g.resize()}),e.append(b)},e.prototype.getVideoObject=function(){return this.$video[0]},e.prototype.resize=function(){if(this.$video){var a=this.$wrapper,b=this.$video,c=b[0],d=c.videoHeight,e=c.videoWidth,f=a.height(),g=a.width();g/e>f/d?b.css({width:g+2,height:"auto"}):b.css({width:"auto",height:f+2})}},e.prototype.destroy=function(){delete a[f].lookup[this.index],this.$video&&this.$video.off(f),this.$element.off(f).removeData(f),this.$wrapper.remove()},a[f]={lookup:[]},a.fn[f]=function(b,c){var d;return this.each(function(){d=a.data(this,f),d&&d.destroy(),d=new e(this,b,c),d.index=a[f].lookup.push(d)-1,a.data(this,f,d)}),this},a(document).ready(function(){var b=a(window);b.on("resize."+f,function(){for(var b,c=a[f].lookup.length,d=0;c>d;d++)b=a[f].lookup[d],b&&b.settings.resizing&&b.resize()}),b.on("unload."+f,function(){return!1}),a(document).find("[data-"+f+"-bg]").each(function(b,c){var d=a(c),e=d.data(f+"-options"),g=d.data(f+"-bg");d[f](g,e)})})});
/**
 * vivus - JavaScript library to make drawing animation on SVG
 * @version v0.4.2
 * @link https://github.com/maxwellito/vivus
 * @license MIT
 */
"use strict";!function(){function t(t){if("undefined"==typeof t)throw new Error('Pathformer [constructor]: "element" parameter is required');if(t.constructor===String&&(t=document.getElementById(t),!t))throw new Error('Pathformer [constructor]: "element" parameter is not related to an existing ID');if(!(t instanceof window.SVGElement||t instanceof window.SVGGElement||/^svg$/i.test(t.nodeName)))throw new Error('Pathformer [constructor]: "element" parameter must be a string or a SVGelement');this.el=t,this.scan(t)}function e(t,e,n){r(),this.isReady=!1,this.setElement(t,e),this.setOptions(e),this.setCallback(n),this.isReady&&this.init()}t.prototype.TYPES=["line","ellipse","circle","polygon","polyline","rect"],t.prototype.ATTR_WATCH=["cx","cy","points","r","rx","ry","x","x1","x2","y","y1","y2"],t.prototype.scan=function(t){for(var e,r,n,i,a=t.querySelectorAll(this.TYPES.join(",")),o=0;o<a.length;o++)r=a[o],e=this[r.tagName.toLowerCase()+"ToPath"],n=e(this.parseAttr(r.attributes)),i=this.pathMaker(r,n),r.parentNode.replaceChild(i,r)},t.prototype.lineToPath=function(t){var e={},r=t.x1||0,n=t.y1||0,i=t.x2||0,a=t.y2||0;return e.d="M"+r+","+n+"L"+i+","+a,e},t.prototype.rectToPath=function(t){var e={},r=parseFloat(t.x)||0,n=parseFloat(t.y)||0,i=parseFloat(t.width)||0,a=parseFloat(t.height)||0;if(t.rx||t.ry){var o=parseInt(t.rx,10)||-1,s=parseInt(t.ry,10)||-1;o=Math.min(Math.max(0>o?s:o,0),i/2),s=Math.min(Math.max(0>s?o:s,0),a/2),e.d="M "+(r+o)+","+n+" L "+(r+i-o)+","+n+" A "+o+","+s+",0,0,1,"+(r+i)+","+(n+s)+" L "+(r+i)+","+(n+a-s)+" A "+o+","+s+",0,0,1,"+(r+i-o)+","+(n+a)+" L "+(r+o)+","+(n+a)+" A "+o+","+s+",0,0,1,"+r+","+(n+a-s)+" L "+r+","+(n+s)+" A "+o+","+s+",0,0,1,"+(r+o)+","+n}else e.d="M"+r+" "+n+" L"+(r+i)+" "+n+" L"+(r+i)+" "+(n+a)+" L"+r+" "+(n+a)+" Z";return e},t.prototype.polylineToPath=function(t){var e,r,n={},i=t.points.trim().split(" ");if(-1===t.points.indexOf(",")){var a=[];for(e=0;e<i.length;e+=2)a.push(i[e]+","+i[e+1]);i=a}for(r="M"+i[0],e=1;e<i.length;e++)-1!==i[e].indexOf(",")&&(r+="L"+i[e]);return n.d=r,n},t.prototype.polygonToPath=function(e){var r=t.prototype.polylineToPath(e);return r.d+="Z",r},t.prototype.ellipseToPath=function(t){var e={},r=parseFloat(t.rx)||0,n=parseFloat(t.ry)||0,i=parseFloat(t.cx)||0,a=parseFloat(t.cy)||0,o=i-r,s=a,h=parseFloat(i)+parseFloat(r),l=a;return e.d="M"+o+","+s+"A"+r+","+n+" 0,1,1 "+h+","+l+"A"+r+","+n+" 0,1,1 "+o+","+l,e},t.prototype.circleToPath=function(t){var e={},r=parseFloat(t.r)||0,n=parseFloat(t.cx)||0,i=parseFloat(t.cy)||0,a=n-r,o=i,s=parseFloat(n)+parseFloat(r),h=i;return e.d="M"+a+","+o+"A"+r+","+r+" 0,1,1 "+s+","+h+"A"+r+","+r+" 0,1,1 "+a+","+h,e},t.prototype.pathMaker=function(t,e){var r,n,i=document.createElementNS("http://www.w3.org/2000/svg","path");for(r=0;r<t.attributes.length;r++)n=t.attributes[r],-1===this.ATTR_WATCH.indexOf(n.name)&&i.setAttribute(n.name,n.value);for(r in e)i.setAttribute(r,e[r]);return i},t.prototype.parseAttr=function(t){for(var e,r={},n=0;n<t.length;n++){if(e=t[n],-1!==this.ATTR_WATCH.indexOf(e.name)&&-1!==e.value.indexOf("%"))throw new Error("Pathformer [parseAttr]: a SVG shape got values in percentage. This cannot be transformed into 'path' tags. Please use 'viewBox'.");r[e.name]=e.value}return r};var r,n,i,a;e.LINEAR=function(t){return t},e.EASE=function(t){return-Math.cos(t*Math.PI)/2+.5},e.EASE_OUT=function(t){return 1-Math.pow(1-t,3)},e.EASE_IN=function(t){return Math.pow(t,3)},e.EASE_OUT_BOUNCE=function(t){var e=-Math.cos(.5*t*Math.PI)+1,r=Math.pow(e,1.5),n=Math.pow(1-t,2),i=-Math.abs(Math.cos(2.5*r*Math.PI))+1;return 1-n+i*n},e.prototype.setElement=function(t,e){if("undefined"==typeof t)throw new Error('Vivus [constructor]: "element" parameter is required');if(t.constructor===String&&(t=document.getElementById(t),!t))throw new Error('Vivus [constructor]: "element" parameter is not related to an existing ID');if(this.parentEl=t,e&&e.file){var r=document.createElement("object");r.setAttribute("type","image/svg+xml"),r.setAttribute("data",e.file),r.setAttribute("built-by-vivus","true"),t.appendChild(r),t=r}switch(t.constructor){case window.SVGSVGElement:case window.SVGElement:case window.SVGGElement:this.el=t,this.isReady=!0;break;case window.HTMLObjectElement:var n,i;i=this,n=function(e){if(!i.isReady){if(i.el=t.contentDocument&&t.contentDocument.querySelector("svg"),!i.el&&e)throw new Error("Vivus [constructor]: object loaded does not contain any SVG");return i.el?(t.getAttribute("built-by-vivus")&&(i.parentEl.insertBefore(i.el,t),i.parentEl.removeChild(t),i.el.setAttribute("width","100%"),i.el.setAttribute("height","100%")),i.isReady=!0,i.init(),!0):void 0}},n()||t.addEventListener("load",n);break;default:throw new Error('Vivus [constructor]: "element" parameter is not valid (or miss the "file" attribute)')}},e.prototype.setOptions=function(t){var r=["delayed","sync","async","nsync","oneByOne","scenario","scenario-sync"],n=["inViewport","manual","autostart"];if(void 0!==t&&t.constructor!==Object)throw new Error('Vivus [constructor]: "options" parameter must be an object');if(t=t||{},t.type&&-1===r.indexOf(t.type))throw new Error("Vivus [constructor]: "+t.type+" is not an existing animation `type`");if(this.type=t.type||r[0],t.start&&-1===n.indexOf(t.start))throw new Error("Vivus [constructor]: "+t.start+" is not an existing `start` option");if(this.start=t.start||n[0],this.isIE=-1!==window.navigator.userAgent.indexOf("MSIE")||-1!==window.navigator.userAgent.indexOf("Trident/")||-1!==window.navigator.userAgent.indexOf("Edge/"),this.duration=a(t.duration,120),this.delay=a(t.delay,null),this.dashGap=a(t.dashGap,1),this.forceRender=t.hasOwnProperty("forceRender")?!!t.forceRender:this.isIE,this.reverseStack=!!t.reverseStack,this.selfDestroy=!!t.selfDestroy,this.onReady=t.onReady,this.map=[],this.frameLength=this.currentFrame=this.delayUnit=this.speed=this.handle=null,this.ignoreInvisible=t.hasOwnProperty("ignoreInvisible")?!!t.ignoreInvisible:!1,this.animTimingFunction=t.animTimingFunction||e.LINEAR,this.pathTimingFunction=t.pathTimingFunction||e.LINEAR,this.delay>=this.duration)throw new Error("Vivus [constructor]: delay must be shorter than duration")},e.prototype.setCallback=function(t){if(t&&t.constructor!==Function)throw new Error('Vivus [constructor]: "callback" parameter must be a function');this.callback=t||function(){}},e.prototype.mapping=function(){var t,e,r,n,i,o,s,h;for(h=o=s=0,e=this.el.querySelectorAll("path"),t=0;t<e.length;t++)r=e[t],this.isInvisible(r)||(i={el:r,length:Math.ceil(r.getTotalLength())},isNaN(i.length)?window.console&&console.warn&&console.warn("Vivus [mapping]: cannot retrieve a path element length",r):(this.map.push(i),r.style.strokeDasharray=i.length+" "+(i.length+2*this.dashGap),r.style.strokeDashoffset=i.length+this.dashGap,i.length+=this.dashGap,o+=i.length,this.renderPath(t)));for(o=0===o?1:o,this.delay=null===this.delay?this.duration/3:this.delay,this.delayUnit=this.delay/(e.length>1?e.length-1:1),this.reverseStack&&this.map.reverse(),t=0;t<this.map.length;t++){switch(i=this.map[t],this.type){case"delayed":i.startAt=this.delayUnit*t,i.duration=this.duration-this.delay;break;case"oneByOne":i.startAt=s/o*this.duration,i.duration=i.length/o*this.duration;break;case"sync":case"async":case"nsync":i.startAt=0,i.duration=this.duration;break;case"scenario-sync":r=i.el,n=this.parseAttr(r),i.startAt=h+(a(n["data-delay"],this.delayUnit)||0),i.duration=a(n["data-duration"],this.duration),h=void 0!==n["data-async"]?i.startAt:i.startAt+i.duration,this.frameLength=Math.max(this.frameLength,i.startAt+i.duration);break;case"scenario":r=i.el,n=this.parseAttr(r),i.startAt=a(n["data-start"],this.delayUnit)||0,i.duration=a(n["data-duration"],this.duration),this.frameLength=Math.max(this.frameLength,i.startAt+i.duration)}s+=i.length,this.frameLength=this.frameLength||this.duration}},e.prototype.drawer=function(){var t=this;if(this.currentFrame+=this.speed,this.currentFrame<=0)this.stop(),this.reset();else{if(!(this.currentFrame>=this.frameLength))return this.trace(),this.handle=n(function(){t.drawer()}),void 0;this.stop(),this.currentFrame=this.frameLength,this.trace(),this.selfDestroy&&this.destroy()}this.callback(this),this.instanceCallback&&(this.instanceCallback(this),this.instanceCallback=null)},e.prototype.trace=function(){var t,e,r,n;for(n=this.animTimingFunction(this.currentFrame/this.frameLength)*this.frameLength,t=0;t<this.map.length;t++)r=this.map[t],e=(n-r.startAt)/r.duration,e=this.pathTimingFunction(Math.max(0,Math.min(1,e))),r.progress!==e&&(r.progress=e,r.el.style.strokeDashoffset=Math.floor(r.length*(1-e)),this.renderPath(t))},e.prototype.renderPath=function(t){if(this.forceRender&&this.map&&this.map[t]){var e=this.map[t],r=e.el.cloneNode(!0);e.el.parentNode.replaceChild(r,e.el),e.el=r}},e.prototype.init=function(){this.frameLength=0,this.currentFrame=0,this.map=[],new t(this.el),this.mapping(),this.starter(),this.onReady&&this.onReady(this)},e.prototype.starter=function(){switch(this.start){case"manual":return;case"autostart":this.play();break;case"inViewport":var t=this,e=function(){t.isInViewport(t.parentEl,1)&&(t.play(),window.removeEventListener("scroll",e))};window.addEventListener("scroll",e),e()}},e.prototype.getStatus=function(){return 0===this.currentFrame?"start":this.currentFrame===this.frameLength?"end":"progress"},e.prototype.reset=function(){return this.setFrameProgress(0)},e.prototype.finish=function(){return this.setFrameProgress(1)},e.prototype.setFrameProgress=function(t){return t=Math.min(1,Math.max(0,t)),this.currentFrame=Math.round(this.frameLength*t),this.trace(),this},e.prototype.play=function(t,e){if(this.instanceCallback=null,t&&"function"==typeof t)this.instanceCallback=t,t=null;else if(t&&"number"!=typeof t)throw new Error("Vivus [play]: invalid speed");return e&&"function"==typeof e&&!this.instanceCallback&&(this.instanceCallback=e),this.speed=t||1,this.handle||this.drawer(),this},e.prototype.stop=function(){return this.handle&&(i(this.handle),this.handle=null),this},e.prototype.destroy=function(){this.stop();var t,e;for(t=0;t<this.map.length;t++)e=this.map[t],e.el.style.strokeDashoffset=null,e.el.style.strokeDasharray=null,this.renderPath(t)},e.prototype.isInvisible=function(t){var e,r=t.getAttribute("data-ignore");return null!==r?"false"!==r:this.ignoreInvisible?(e=t.getBoundingClientRect(),!e.width&&!e.height):!1},e.prototype.parseAttr=function(t){var e,r={};if(t&&t.attributes)for(var n=0;n<t.attributes.length;n++)e=t.attributes[n],r[e.name]=e.value;return r},e.prototype.isInViewport=function(t,e){var r=this.scrollY(),n=r+this.getViewportH(),i=t.getBoundingClientRect(),a=i.height,o=r+i.top,s=o+a;return e=e||0,n>=o+a*e&&s>=r},e.prototype.getViewportH=function(){var t=this.docElem.clientHeight,e=window.innerHeight;return e>t?e:t},e.prototype.scrollY=function(){return window.pageYOffset||this.docElem.scrollTop},r=function(){e.prototype.docElem||(e.prototype.docElem=window.document.documentElement,n=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)}}(),i=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(t){return window.clearTimeout(t)}}())},a=function(t,e){var r=parseInt(t,10);return r>=0?r:e},"function"==typeof define&&define.amd?define([],function(){return e}):"object"==typeof exports?module.exports=e:window.Vivus=e}();
/*
Name: 			Theme Base
Written by: 	Okler Themes - (http://www.okler.net)
Theme Version:	1.0.0
*/

// Theme
(function( $ ) {

	'use strict';

	window.theme = {};

	// Theme Common Functions
	window.theme.fn = {

		getOptions: function(opts) {

			if (typeof(opts) == 'object') {

				return opts;

			} else if (typeof(opts) == 'string') {

				try {
					return JSON.parse(opts.replace(/'/g,'"').replace(';',''));
				} catch(e) {
					return {};
				}

			} else {

				return {};

			}

		},

		getOptionsSemicolon: function(opts) {

			if (typeof(opts) == 'object') {

				return opts;

			} else if (typeof(opts) == 'string') {

				try {
					return JSON.parse(opts.replace(/'/g,'"'));
				} catch(e) {
					return {};
				}

			} else {

				return {};

			}

		}

	};

}).apply( this, [ jQuery ]);

// Animate
(function(theme, $) {

	'use strict';

	theme = theme || {};

	var instanceName = '__animate';

	var PluginAnimate = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginAnimate.defaults = {
		accX: 0,
		accY: -80,
		delay: 100,
		duration: '750ms'
	};

	PluginAnimate.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginAnimate.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			var self = this,
				$el = this.options.wrapper,
				delay = 0,
				duration = this.options.duration,
				elTopDistance = $el.offset().top + 100,
				windowTopDistance = $(window).scrollTop();

			$el.addClass('appear-animation animated');

			if (!$('html').hasClass('no-csstransitions') && $(window).width() > 767 && elTopDistance >= windowTopDistance) {

				$el.appear(function() {

					$el.one('animation:show', function(ev) {
						delay = ($el.attr('data-appear-animation-delay') ? $el.attr('data-appear-animation-delay') : self.options.delay);
						duration = ($el.attr('data-appear-animation-duration') ? $el.attr('data-appear-animation-duration') : self.options.duration);

						if (duration != '750ms') {
							$el.css('animation-duration', duration);
						}

						$el.css('animation-delay', delay + 'ms');

						$el.addClass($el.attr('data-appear-animation') + ' appear-animation-visible');
					});

					$el.trigger('animation:show');

				}, {
					accX: self.options.accX,
					accY: self.options.accY
				});

			} else {

				$el.addClass('appear-animation-visible');

			}

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginAnimate: PluginAnimate
	});

	// jquery plugin
	$.fn.themePluginAnimate = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginAnimate($this, opts);
			}

		});
	};

}).apply(this, [window.theme, jQuery]);

// Carousel
(function(theme, $) {

	'use strict';

	theme = theme || {};

	var instanceName = '__carousel';

	var PluginCarousel = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginCarousel.defaults = {
		loop: true,
		responsive: {
			0: {
				items: 1
			},
			575: {
				items: 1
			},
			767: {
				items: 2
			},
			991: {
				items: 3
			},
			1199: {
				items: 4
			}
		},
		navText: [],
		clonePrevNext: false,
		vertical: false,
		rewind: false
	};

	PluginCarousel.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginCarousel.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			if (!($.isFunction($.fn.owlCarousel))) {
				return this;
			}

			var self = this,
				$el = this.options.wrapper;

			// Add Theme Class
			$el.addClass('owl-theme');

			// Force RTL according to HTML dir attribute
			if ($('html').attr('dir') == 'rtl') {
				this.options = $.extend(true, {}, this.options, {
					rtl: true
				});
			}

			if (this.options.items == 1) {
				this.options.responsive = {}
			}

			// Auto Height Fixes
			if (this.options.autoHeight) {
				var itemsHeight = [];

				$el.find('.owl-item').each(function(){
					if( $(this).hasClass('active') ) {
						itemsHeight.push( $(this).height() );
					}
				});

				$(window).afterResize(function() {
					$el.find('.owl-stage-outer').height( Math.max.apply(null, itemsHeight) );
				});

				$(window).on('load', function() {
					$el.find('.owl-stage-outer').height( Math.max.apply(null, itemsHeight) );
				});
			}

			// Initialize OwlCarousel
			$el.owlCarousel(this.options).addClass('owl-carousel-init');

			// Carousel Corner Left Bottom Style
			if( $('.carousel-corner-left-bottom').get(0) ) {
				$('.carousel-corner-left-bottom').on('drag.owl.carousel change.owl.carousel', function(e){
					$(this).find('.owl-item').addClass('changing');
				});

				$('.carousel-corner-left-bottom').on('changed.owl.carousel', function(e){
					setTimeout(function(){
						$('.carousel-corner-left-bottom').find('.owl-item').removeClass('changing');
					}, 500);
				});
			}

			// Carousel Center Active Items Style
			if( $el.hasClass('carousel-center-active-items') ) {
				var itemsActive    = $el.find('.owl-item.active'),
					indexCenter    = Math.floor( ($el.find('.owl-item.active').length - 1) / 2 ),
					itemCenter     = itemsActive.eq(indexCenter),
					itemCenterPrev = itemCenter.prev(),
					itemCenterNext = itemCenter.next();

				itemCenter.addClass('current');
				itemCenterPrev.addClass('remove-blur');
				itemCenterNext.addClass('remove-blur');

				$el.on('change.owl.carousel', function(event) {
				  	$el.find('.owl-item').removeClass('current');
					
					setTimeout(function(){
					  	var itemsActive    = $el.find('.owl-item.active'),
					  		itemCenter     = itemsActive.eq(indexCenter);

					  	itemCenter.addClass('current');

						// Add blur effect for first and last active items
					  	itemsActive.first().removeClass('remove-blur');
						itemsActive.last().removeClass('remove-blur');

					  	// Remove blur effect for elements at right and left of current item
					  	itemCenter.prev().addClass('remove-blur');
						itemCenter.next().addClass('remove-blur');

					}, 100);
				});

				$el.on('resized.owl.carousel', function(event) {
					if( $el.find('.owl-item.active').length == 1 ) {
						$el
							.css({
								width: '100%'
							})
							.addClass('rm-degrade-now');
					} else {
						$el
							.css({
								width: ''
							})
							.removeClass('rm-degrade-now');
					}

					$el.trigger('refresh.owl.carousel');
				});

				// Refresh
				$el.trigger('refresh.owl.carousel');
			}

			// Clone Prev Next
			if (this.options.clonePrevNext) {
				$el.find('.owl-item').each(function() {
					$(this).prev().find('div:not(.clone-inside)').clone().addClass('clone-inside prev').prependTo($(this));
					$(this).next().find('div:not(.clone-inside)').clone().addClass('clone-inside next').appendTo($(this));
				});

				$el.on('change.owl.carousel', function(){
					$el.find('.owl-item.active div:not(.prev)').css('opacity', 0);
				});

				$el.on('changed.owl.carousel', function(){
					$el.find('.owl-item').one('animationend', function(){
						$el.find('.owl-item div:not(.prev)').css('opacity', 1);
						$el.find('.owl-item.cloned div:not(.prev)').css('opacity', 0);
						$el.find('.owl-item.active div:not(.prev)').css('opacity', 1);
					});
						
				});

				$el.on('drag.owl.carousel', function(){
					$el.find('.owl-item div:not(.prev)').css('opacity', 1);
				});
			}

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginCarousel: PluginCarousel
	});

	// jquery plugin
	$.fn.themePluginCarousel = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginCarousel($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Chart Circular
(function(theme, $) {

	'use strict';

	theme = theme || {};

	var instanceName = '__chartCircular';

	var PluginChartCircular = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginChartCircular.defaults = {
		accX: 0,
		accY: -150,
		delay: 1,
		barColor: '#2388ed',
		trackColor: '#F1F3F7',
		scaleColor: false,
		scaleLength: 5,
		lineCap: 'square',
		lineWidth: 3,
		size: 150,
		rotate: 0,
		animate: ({
			duration: 2500,
			enabled: true
		})
	};

	PluginChartCircular.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginChartCircular.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			if (!($.isFunction($.fn.appear)) || !($.isFunction($.fn.easyPieChart))) {
				return this;
			}

			var self = this,
				$el = this.options.wrapper,
				value = ($el.attr('data-percent') ? $el.attr('data-percent') : 0),
				percentEl = $el.find('.percent');

			$.extend(true, self.options, {
				onStep: function(from, to, currentValue) {
					percentEl.html(parseInt(currentValue));
				}
			});

			$el.attr('data-percent', 0);

			$el.appear(function() {

				$el.easyPieChart(self.options);

				setTimeout(function() {

					$el.data('easyPieChart').update(value);
					$el.attr('data-percent', value);

				}, self.options.delay);

			}, {
				accX: self.options.accX,
				accY: self.options.accY
			});

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginChartCircular: PluginChartCircular
	});

	// jquery plugin
	$.fn.themePluginChartCircular = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginChartCircular($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Counter
(function(theme, $) {

	'use strict';

	theme = theme || {};

	var instanceName = '__counter';

	var PluginCounter = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginCounter.defaults = {
		accX: 0,
		accY: 0,
		speed: 3000,
		refreshInterval: 100,
		decimals: 0,
		onUpdate: null,
		onComplete: null
	};

	PluginCounter.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginCounter.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			if (!($.isFunction($.fn.countTo))) {
				return this;
			}

			var self = this,
				$el = this.options.wrapper;

			$.extend(self.options, {
				onComplete: function() {
					if ($el.data('append')) {
						$el.html($el.html() + $el.data('append'));
					}

					if ($el.data('prepend')) {
						$el.html($el.data('prepend') + $el.html());
					}
				}
			});

			$el.appear(function() {

				$el.countTo(self.options);

			}, {
				accX: self.options.accX,
				accY: self.options.accY
			});

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginCounter: PluginCounter
	});

	// jquery plugin
	$.fn.themePluginCounter = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginCounter($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Double Carousel
(function(theme, $) {

	'use strict';

	theme = theme || {};

	var instanceName = '__doubleCarousel';

	var PluginDoubleCarousel = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginDoubleCarousel.defaults = {
		loop: true,
		responsive: {
			0: {
				items: 1
			},
			479: {
				items: 1
			},
			768: {
				items: 1
			},
			979: {
				items: 2
			},
			1199: {
				items: 3
			}
		},
		margin: 20,
		mouseDrag: false,
		navText: [],
		autoplay: true,
		autoplayTimeout: 5000,
		rewind: false
	};

	PluginDoubleCarousel.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;
			this.$carousels = $el.find('.owl-carousel');
			this.$mainCarousel = $el.find('.wrapper-right .owl-carousel');
			this.$mirrorCarousel = $el.find('.wrapper-left .owl-carousel');

			this
				.setData()
				.setOptions(opts)
				.build()
				.navigation();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginDoubleCarousel.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			if (!($.isFunction($.fn.owlCarousel))) {
				return this;
			}

			var self 	  = this,
				$el 	  = this.options.wrapper,
				firstLoad = true;

			// Add Theme Class
			self.$carousels.addClass('owl-theme');

			if (this.options.items == 1) {
				this.options.responsive = {}
			}

			// Auto Height Fixes
			if (this.options.autoHeight) {
				var itemsHeight = [];

				self.$carousels.find('.owl-item').each(function(){
					if( $(this).hasClass('active') ) {
						itemsHeight.push( $(this).height() );
					}
				});

				$(window).afterResize(function() {
					self.$carousels.find('.owl-stage-outer').height( Math.max.apply(null, itemsHeight) );
				});

				$(window).on('load', function() {
					self.$carousels.find('.owl-stage-outer').height( Math.max.apply(null, itemsHeight) );
				});
			}

			// If Mobile
			if ($.browser.mobile) {
				this.options = $.extend(true, {}, this.options, {
					mouseDrag: true,
					margin: 0
				});
			}

			// Initialize Main Carousel
			self.$mainCarousel.owlCarousel(this.options).addClass('owl-carousel-init mirrored');

			// Remove autoplay from Mirror Carousel
			if( this.options.autoplay ) {
				this.options = $.extend(true, {}, this.options, {
					autoplay: false
				});
			}

			// Initialize Mirror Carousel
			self.$mirrorCarousel.owlCarousel(this.options).addClass('owl-carousel-init mirrored');			

			// Set the first item position of Mirror Carousel
			for( var i=1; i <= self.$mirrorCarousel.find('.owl-item.active').length - 1; i++ ) {
				self.$mirrorCarousel.trigger('prev.owl.carousel');
			}
			
			self.events();
			self.recalcCarouselsWidth();

			if( firstLoad == true ) {
				firstLoad = false;
				self.recalcCarouselsWidth();

				setTimeout(function(){
	        		self.$mirrorCarousel.addClass('show-carousel');
	        		self.$mainCarousel.addClass('show-carousel');

	        		self.refreshOnResize();
        		}, 500);
    		}

    		if( firstLoad == false ) {
    			self.setCurrentItem();
    		}

			return this;
		},

		setCurrentItem: function() {
			var self = this,
				flag = false;

			self.$mainCarousel.on('change.owl.carousel', function(event) {
			  	if (event.namespace && event.property.name === 'position' && flag == false) {
				    var target = event.relatedTarget.relative(event.property.value, true);
				    flag = true;

				    self.$mirrorCarousel.owlCarousel('to', target - (self.$mirrorCarousel.find('.owl-item.active').length - 1), 300, true);
				    self.$mirrorCarousel.find('.owl-item').removeClass('current');
			        self.$mainCarousel.find('.owl-item').removeClass('current');
			        
			        setTimeout(function(){
			        	self.$mirrorCarousel.find('.owl-item.active').eq( self.$mirrorCarousel.find('.owl-item.active').length - 1 ).addClass('current');
			        	self.$mainCarousel.find('.owl-item.active').eq(0).addClass('current');
			        }, 10);

			        flag = false;
			  	}
			});

			if( $.browser.mobile ) {
				self.$mirrorCarousel.on('change.owl.carousel', function(event) {
				  	if (event.namespace && event.property.name === 'position' && flag == false) {
					    var target = event.relatedTarget.relative(event.property.value, true);
					    flag = true;

					    self.$mainCarousel.owlCarousel('to', target - (self.$mainCarousel.find('.owl-item.active').length - 1), 300, true);
					    self.$mainCarousel.find('.owl-item').removeClass('current');
				        self.$mirrorCarousel.find('.owl-item').removeClass('current');
				        
				        setTimeout(function(){
				        	self.$mainCarousel.find('.owl-item.active').eq( self.$mainCarousel.find('.owl-item.active').length - 1 ).addClass('current');
				        	self.$mirrorCarousel.find('.owl-item.active').eq(0).addClass('current');
				        }, 10);

				     	flag = false;
				  	}
				});
			}
		},
		
		recalcCarouselsWidth: function() {
			var self 		     = this,
				$el 		     = this.options.wrapper,
				itemSize         = self.$mirrorCarousel.find('.owl-item').outerWidth(true),
				dividedItemSize  = itemSize / 2,
				totalActiveItems = self.$mirrorCarousel.find('.owl-item.active').length;

			if( totalActiveItems > 1 ) {
				
				self.$mirrorCarousel.width( $el.find('.wrapper-left').width() + dividedItemSize );
				setTimeout(function(){
					self.$mirrorCarousel.css({
						right: dividedItemSize
					});
				}, 500);
				
				self.$mainCarousel.width( $el.find('.wrapper-right').width() + dividedItemSize );

			} else {
				
				self.$mirrorCarousel.width( $el.find('.wrapper-left').width() );
				setTimeout(function(){
					self.$mirrorCarousel.css({
						right: 0
					});
				}, 500);
				
				self.$mainCarousel.width( $el.find('.wrapper-right').width() );

			}

			$(document).trigger('double.carousel.recalc.width');
		},

		refreshOnResize: function() {
			var self = this;

			$(document).ready(function(){
				$(window).afterResize(function(){
					
					// First - Refresh both carousels to set new sizes
					self.$mirrorCarousel.trigger('refresh.owl.carousel');
					self.$mainCarousel.trigger('refresh.owl.carousel');

					// Second - Recalc Carousels width based on new sizes
					setTimeout(function(){
						self.recalcCarouselsWidth();
					}, 600);

				}, false, 300);
			});
		},

		navigation: function() {
			var self       = this,
				$el        = this.options.wrapper,
				$leftArrow  = $el.find('.arrow-left'),
				$rightArrow = $el.find('.arrow-right');

			$leftArrow.on('click', function(e){
				self.$mainCarousel.trigger('prev.owl.carousel');
			});

			$rightArrow.on('click', function(e){
				self.$mainCarousel.trigger('next.owl.carousel');
			});
		},

		events: function() {
			var self = this;

			$(window).on('double.carousel.recalc.width', function(e){
					
				// Refresh carousels to set new sizes
				self.$mirrorCarousel.trigger('refresh.owl.carousel');
				self.$mainCarousel.trigger('refresh.owl.carousel');
				
				// Set current item
				self.$mirrorCarousel.find('.owl-item.active').eq( self.$mirrorCarousel.find('.owl-item.active').length - 1 ).addClass('current');
	        	self.$mainCarousel.find('.owl-item.active').eq(0).addClass('current');

				// Position the first item
				self.$mainCarousel.trigger('prev.owl.carousel').trigger('next.owl.carousel');
        		
			});
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginDoubleCarousel: PluginDoubleCarousel
	});

	// jquery plugin
	$.fn.themePluginDoubleCarousel = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginDoubleCarousel($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Float Element
(function(theme, $) {

	'use strict';

	theme = theme || {};

	var instanceName = '__floatElement';

	var PluginFloatElement = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginFloatElement.defaults = {
		startPos: 'top',
		speed: 3,
		horizontal: false,
		transition: false
	};

	PluginFloatElement.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginFloatElement.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			var self = this,
				$el = this.options.wrapper,
				$window = $(window),
				minus;

			if( self.options.style ) {
				console.log(self.options.style);
				$el.attr('style', self.options.style);
			}

			if( $window.width() > 767 ) {

				// Set Start Position
				if( self.options.startPos == 'none' ) {
					minus = '';
				} else if( self.options.startPos == 'top' ) {
					$el.css({
						top: 0
					});
					minus = '';
				} else {
					$el.css({
						bottom: 0
					});
					minus = '-';
				}

				// Set Transition
				if( self.options.transition ) {
					$el.css({
						transition: 'ease transform 500ms'
					});
				}

				// First Load
				self.movement(minus);	

				// Scroll
				$window.on('scroll', function(){
					self.movement(minus);				   
				});

			}

			return this;
		},

		movement: function(minus) {
			var self = this,
				$el = this.options.wrapper,
				$window = $(window),
				scrollTop = $window.scrollTop(),
		    	elementOffset = $el.offset().top,
		     	currentElementOffset = (elementOffset - scrollTop);

		   	var scrollPercent = 100 * currentElementOffset / ($window.height());

		   	if( $el.visible( true ) ) {

		   		if( !self.options.horizontal ) {

		   			$el.css({
			   			transform: 'translate3d(0, '+ minus + scrollPercent / self.options.speed +'%, 0)'
			   		});

		   		} else {

		   			$el.css({
			   			transform: 'translate3d('+ minus + scrollPercent / self.options.speed +'%, '+ minus + scrollPercent / self.options.speed +'%, 0)'
			   		});

		   		}
		   		
		   	}
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginFloatElement: PluginFloatElement
	});

	// jquery plugin
	$.fn.themePluginFloatElement = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginFloatElement($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Icon
(function(theme, $) {

	'use strict';

	theme = theme || {};

	var instanceName = '__icon';

	var PluginIcon = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginIcon.defaults = {
		color: '#2388ED',
		animated: false,
		delay: 300
	};

	PluginIcon.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginIcon.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			var self  	 = this,
				$el   	 = this.options.wrapper,
				color 	 = self.options.color,
				elTopDistance = $el.offset().top,
				windowTopDistance = $(window).scrollTop(),
				duration = ( self.options.animated && !self.options.strokeBased ) ? 200 : 100;

			// Check origin
			if( window.location.origin === 'file://' ) {
				$el.css('opacity', 1);
				return;
			}

			// Duration
			if( self.options.duration ) {
				duration = self.options.duration;
			}

			// Icon Wrapper
			var iconWrapper = $('<object class="animated-icon" type="image/svg+xml" data="'+ $el.attr('src') +'"></object>');

			if( $el.attr('style') ) {
				iconWrapper.attr('style', $el.attr('style'));
			}

			if( $el.attr('width') ) {
				iconWrapper.attr('width', $el.attr('width'));
			}

			iconWrapper.css('height', $el.height());

			$el.replaceWith(iconWrapper);

			$el = iconWrapper;

			var icon = new Vivus($($el)[0], {start: 'manual', type: 'sync', selfDestroy: true, duration: duration, onReady: function(obj){
				var styleElement = document.createElementNS("http://www.w3.org/2000/svg", "style"),
					animateStyle = '';

				// SVG Fill Based
				if( self.options.animated && !self.options.strokeBased || !self.options.animated && color && !self.options.strokeBased ) {
					animateStyle = 'stroke-width: 0.1px; fill-opacity: 0; transition: ease fill-opacity 300ms;';
					
					// Set Style on SVG inside object
					styleElement.textContent = 'path, line, rect, circle, line, polyline { fill: '+ color +'; stroke: '+ color +'; '+ animateStyle + (self.options.svgStyle ? self.options.svgStyle : "") + ' } .finished path { fill-opacity: 1; }';
					obj.el.appendChild(styleElement);
				}

				// SVG Stroke Based
				if( self.options.animated && self.options.strokeBased || !self.options.animated && color && self.options.strokeBased ) {

					// Set Style on SVG inside object
					styleElement.textContent = 'path, line, rect, circle, line, polyline { stroke: '+ color +'; ' + (self.options.svgStyle ? self.options.svgStyle : "") + '}';
					obj.el.appendChild(styleElement);
				}

				// devcode: !production
				$(window).on('styleSwitcher.modifyVars', function(e){
					if( self.options.color.toUpperCase() != '#FFF' ) {
						if( e.options.colorPrimary.toUpperCase() != self.options.color.toUpperCase() ) {
							
							var	styleElement = document.createElementNS("http://www.w3.org/2000/svg", "style"),
								svg          = obj.el;

							if( self.options.strokeBased ) {
								styleElement.textContent = 'path, line, rect, circle, line, polyline { stroke: '+ e.options.colorPrimary +'; }';
							} else {
								styleElement.textContent = 'path, line, rect, circle, line, polyline { fill: '+ e.options.colorPrimary +'; stroke: '+ e.options.colorPrimary +'; }';
							}
							svg.appendChild(styleElement);
						
						}
					}
				});
				// endcode

				$.event.trigger('theme.plugin.icon.svg.ready');
			}});

			// Isn't animated
			if( !self.options.animated ) {
				setTimeout(function(){
					icon.finish();
				}, 10);
				$el.css({ opacity: 1 });
			}

			// Animated
			if( self.options.animated && $(window).width() > 767 ) {
				
				// First Load
				if( $el.visible( true ) ) {
					self.startIconAnimation( icon, $el );
				} else if( elTopDistance < windowTopDistance ) {
					self.startIconAnimation( icon, $el );
				}

				// On Scroll
				$(window).on('scroll', function(){
					if( $el.visible( true ) ) {
						self.startIconAnimation( icon, $el );
					}
				});

			} else {
				
				$el.css({ opacity: 1 });

				$(window).on('theme.plugin.icon.svg.ready', function(){
					setTimeout(function(){
						icon.el.setAttribute('class', 'finished');
					}, 300);
				});
				
			}

			return this;
		},
		startIconAnimation: function(icon, $el) {
			var self = this;

			// Animate for better performance
			$({to:0}).animate({to:1}, ((self.options.strokeBased) ? self.options.delay : self.options.delay + 300 ), function() {
				$el.css({ opacity: 1 });
			});

			$({to:0}).animate({to:1}, self.options.delay, function() {
				icon.play(1);

				setTimeout(function(){
					icon.el.setAttribute('class', 'finished');
				}, icon.duration * 5 );
			});
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginIcon: PluginIcon
	});

	// jquery plugin
	$.fn.themePluginIcon = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginIcon($this, opts);
			}

		});
	};

}).apply(this, [window.theme, jQuery]);

// Image Background
(function(theme, $) {

	'use strict';

	theme = theme || {};

	var instanceName = '__imageBackground';

	var PluginImageBackground = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginImageBackground.defaults = {
		bgSize: 'cover',
		bgPosition: 'center'
	};

	PluginImageBackground.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginImageBackground.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			var self = this,
				$el = self.options.wrapper,
				important;

			if( !self.options.imageUrl ) {
				return;
			}

			$el.css({
				'background-image': 'url(' + self.options.imageUrl + ')',
				'background-size' : self.options.bgSize,
				'background-position': self.options.bgPosition,
				'background-repeat': 'no-repeat'
			});

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginImageBackground: PluginImageBackground
	});

	// jquery plugin
	$.fn.themePluginImageBackground = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginImageBackground($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Lazy Load
(function(theme, $) {

	'use strict';

	theme = theme || {};

	var instanceName = '__lazyload';

	var PluginLazyLoad = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginLazyLoad.defaults = {
		effect: 'show',
		appearEffect: '',
		appear: function(elements_left, settings) {
			
		},
		load: function(elements_left, settings) {
			$(this).addClass($.trim('lazy-load-loaded ' + settings.appearEffect));
		}
	};

	PluginLazyLoad.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginLazyLoad.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			if (!($.isFunction($.fn.lazyload))) {
				return this;
			}

			var self = this;

			self.options.wrapper.lazyload(this.options);

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginLazyLoad: PluginLazyLoad
	});

	// jquery plugin
	$.fn.themePluginLazyLoad = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginLazyLoad($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Lightbox
(function(theme, $) {

	'use strict';

	theme = theme || {};

	var instanceName = '__lightbox';

	var PluginLightbox = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginLightbox.defaults = {
		tClose: 'Close (Esc)', // Alt text on close button
		tLoading: 'Loading...', // Text that is displayed during loading. Can contain %curr% and %total% keys
		gallery: {
			tPrev: 'Previous (Left arrow key)', // Alt text on left arrow
			tNext: 'Next (Right arrow key)', // Alt text on right arrow
			tCounter: '%curr% of %total%' // Markup for "1 of 7" counter
		},
		image: {
			tError: '<a href="%url%">The image</a> could not be loaded.' // Error message when image could not be loaded
		},
		ajax: {
			tError: '<a href="%url%">The content</a> could not be loaded.' // Error message when ajax request failed
		},
		callbacks: {
			open: function() {
				$('html').addClass('lightbox-open');
			},
			close: function() {
				$('html').removeClass('lightbox-open');
			}
		}
	};

	PluginLightbox.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginLightbox.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			if (!($.isFunction($.fn.magnificPopup))) {
				return this;
			}

			this.options.wrapper.magnificPopup(this.options);

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginLightbox: PluginLightbox
	});

	// jquery plugin
	$.fn.themePluginLightbox = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginLightbox($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Loading Overlay
(function(theme, $) {

	'use strict';

	theme = theme || {};

	var loadingOverlayTemplate = [
		'<div class="loading-overlay">',
			'<div class="bounce-loader"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>',
		'</div>'
	].join('');

	var LoadingOverlay = function( $wrapper, options ) {
		return this.initialize( $wrapper, options );
	};

	LoadingOverlay.prototype = {

		options: {
			css: {}
		},

		initialize: function( $wrapper, options ) {
			this.$wrapper = $wrapper;

			this
				.setVars()
				.setOptions( options )
				.build()
				.events();

			this.$wrapper.data( 'loadingOverlay', this );
		},

		setVars: function() {
			this.$overlay = this.$wrapper.find('.loading-overlay');

			return this;
		},

		setOptions: function( options ) {
			if ( !this.$overlay.get(0) ) {
				this.matchProperties();
			}
			this.options     = $.extend( true, {}, this.options, options );
			this.loaderClass = this.getLoaderClass( this.options.css.backgroundColor );

			return this;
		},

		build: function() {
			if ( !this.$overlay.closest(document.documentElement).get(0) ) {
				if ( !this.$cachedOverlay ) {
					this.$overlay = $( loadingOverlayTemplate ).clone();

					if ( this.options.css ) {
						this.$overlay.css( this.options.css );
						this.$overlay.find( '.loader' ).addClass( this.loaderClass );
					}
				} else {
					this.$overlay = this.$cachedOverlay.clone();
				}

				this.$wrapper.append( this.$overlay );
			}

			if ( !this.$cachedOverlay ) {
				this.$cachedOverlay = this.$overlay.clone();
			}

			return this;
		},

		events: function() {
			var _self = this;

			if ( this.options.startShowing ) {
				_self.show();
			}

			if ( this.$wrapper.is('body') || this.options.hideOnWindowLoad ) {
				$( window ).on( 'load error', function() {
					_self.hide();
				});
			}

			if ( this.options.listenOn ) {
				$( this.options.listenOn )
					.on( 'loading-overlay:show beforeSend.ic', function( e ) {
						e.stopPropagation();
						_self.show();
					})
					.on( 'loading-overlay:hide complete.ic', function( e ) {
						e.stopPropagation();
						_self.hide();
					});
			}

			this.$wrapper
				.on( 'loading-overlay:show beforeSend.ic', function( e ) {
					if ( e.target === _self.$wrapper.get(0) ) {
						e.stopPropagation();
						_self.show();
						return true;
					}
					return false;
				})
				.on( 'loading-overlay:hide complete.ic', function( e ) {
					if ( e.target === _self.$wrapper.get(0) ) {
						e.stopPropagation();
						_self.hide();
						return true;
					}
					return false;
				});

			return this;
		},

		show: function() {
			this.build();

			this.position = this.$wrapper.css( 'position' ).toLowerCase();
			if ( this.position != 'relative' || this.position != 'absolute' || this.position != 'fixed' ) {
				this.$wrapper.css({
					position: 'relative'
				});
			}
			this.$wrapper.addClass( 'loading-overlay-showing' );
		},

		hide: function() {
			var _self = this;

			this.$wrapper.removeClass( 'loading-overlay-showing' );
			setTimeout(function() {
				if ( this.position != 'relative' || this.position != 'absolute' || this.position != 'fixed' ) {
					_self.$wrapper.css({ position: '' });
				}
			}, 500);
		},

		matchProperties: function() {
			var i,
				l,
				properties;

			properties = [
				'backgroundColor',
				'borderRadius'
			];

			l = properties.length;

			for( i = 0; i < l; i++ ) {
				var obj = {};
				obj[ properties[ i ] ] = this.$wrapper.css( properties[ i ] );

				$.extend( this.options.css, obj );
			}
		},

		getLoaderClass: function( backgroundColor ) {
			if ( !backgroundColor || backgroundColor === 'transparent' || backgroundColor === 'inherit' ) {
				return 'black';
			}

			var hexColor,
				r,
				g,
				b,
				yiq;

			var colorToHex = function( color ){
				var hex,
					rgb;

				if( color.indexOf('#') >- 1 ){
					hex = color.replace('#', '');
				} else {
					rgb = color.match(/\d+/g);
					hex = ('0' + parseInt(rgb[0], 10).toString(16)).slice(-2) + ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) + ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2);
				}

				if ( hex.length === 3 ) {
					hex = hex + hex;
				}

				return hex;
			};

			hexColor = colorToHex( backgroundColor );

			r = parseInt( hexColor.substr( 0, 2), 16 );
			g = parseInt( hexColor.substr( 2, 2), 16 );
			b = parseInt( hexColor.substr( 4, 2), 16 );
			yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

			return ( yiq >= 128 ) ? 'black' : 'white';
		}

	};

	// expose to scope
	$.extend(theme, {
		LoadingOverlay: LoadingOverlay
	});

	// expose as a jquery plugin
	$.fn.loadingOverlay = function( opts ) {
		return this.each(function() {
			var $this = $( this );

			var loadingOverlay = $this.data( 'loadingOverlay' );
			if ( loadingOverlay ) {
				return loadingOverlay;
			} else {
				var options = opts || $this.data( 'loading-overlay-options' ) || {};
				return new LoadingOverlay( $this, options );
			}
		});
	}

	// auto init
	$('[data-loading-overlay]').loadingOverlay();

}).apply(this, [window.theme, jQuery]);

// Masonry
(function(theme, $) {

	'use strict';

	theme = theme || {};

	var instanceName = '__masonry';

	var PluginMasonry = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginMasonry.defaults = {
		itemSelector: '.isotope-item'
	};

	PluginMasonry.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginMasonry.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			if (!($.isFunction($.fn.isotope))) {
				return this;
			}

			var self = this,
				$window = $(window);

			self.$loader = false;

			if (self.options.wrapper.closest('.masonry-loader').get(0)) {
				self.$loader = self.options.wrapper.closest('.masonry-loader');
				self.createLoader();
			}

			self.options.wrapper.one('layoutComplete', function(event, laidOutItems) {
				self.removeLoader();
			});

			self.options.wrapper.waitForImages(function() {
				self.options.wrapper.isotope(self.options);
			});

			setTimeout(function() {
				self.removeLoader();
			}, 3000);

			$window.afterResize(function(){
				self.options.wrapper.isotope('layout');
			});

			return this;
		},

		createLoader: function() {
			var self = this;

			var loaderTemplate = [
				'<div class="bounce-loader">',
					'<div class="bounce1"></div>',
					'<div class="bounce2"></div>',
					'<div class="bounce3"></div>',
				'</div>'
			].join('');

			self.$loader.append(loaderTemplate);

			return this;
		},

		removeLoader: function() {

			var self = this;

			if (self.$loader) {

				self.$loader.removeClass('masonry-loader-showing');

				setTimeout(function() {
					self.$loader.addClass('masonry-loader-loaded');
				}, 300);

			}

		}
	};

	// expose to scope
	$.extend(theme, {
		PluginMasonry: PluginMasonry
	});

	// jquery plugin
	$.fn.themePluginMasonry = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginMasonry($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Match Height
(function(theme, $) {

	'use strict';

	theme = theme || {};

	var instanceName = '__matchHeight';

	var PluginMatchHeight = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginMatchHeight.defaults = {
		byRow: true,
		property: 'height',
		target: null,
		remove: false
	};

	PluginMatchHeight.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginMatchHeight.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			if (!($.isFunction($.fn.matchHeight))) {
				return this;
			}

			var self = this;

			self.options.wrapper.matchHeight(self.options);

			return this;
		}

	};

	// expose to scope
	$.extend(theme, {
		PluginMatchHeight: PluginMatchHeight
	});

	// jquery plugin
	$.fn.themePluginMatchHeight = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginMatchHeight($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Parallax
(function(theme, $) {

	'use strict';

	theme = theme || {};

	var instanceName = '__parallax';

	var PluginParallax = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginParallax.defaults = {
		speed: 1.5,
		horizontalPosition: '50%',
		offset: 0,
		responsiveOffset: false,
		parallaxHeight: '180%'
	};

	PluginParallax.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginParallax.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			var self = this,
				$window = $(window),
				offset,
				optOffset,
				yPos,
				plxPos,
				bgpos,
				background;

			// Create Parallax Element
			background = $('<div class="parallax-background"></div>');

			// Set Style for Parallax Element
			background.css({
				'background-image' : 'url(' + self.options.wrapper.data('image-src') + ')',
				'background-size' : 'cover',
				'background-position' : 'center',
				'position' : 'absolute',
				'top' : 0,
				'left' : 0,
				'width' : '100%',
				'height' : (!$.browser.mobile) ? self.options.parallaxHeight : '100%'
			});

			// Add Parallax Element on DOM
			self.options.wrapper.prepend(background);

			// Set Overlfow Hidden / Position Relative / Min height to Parallax Wrapper
			self.options.wrapper.css({
				'position' : 'relative',
				'overflow' : 'hidden',
				'min-height': (self.options.minHeight) ? self.options.minHeight : ''
			});

			// Parallax Effect on Scroll & Resize
			var parallaxEffectOnScrolResize = function() {
				// Offset
				optOffset = self.options.offset;

				$window.on('scroll resize', function() {
					
					// Responsive Offset
					if( self.options.responsiveOffset ) {
						var window_w = $window.width(),
							responsiveOffset = self.options.responsiveOffset;

						if( responsiveOffset.constructor === Array ) {
							if( window_w > 1199 ) {
								optOffset = responsiveOffset[2];
							} else if( window_w > 991 ) {
								optOffset = responsiveOffset[1];
							} else if( window_w > 767 ) {
								optOffset = responsiveOffset[0];
							}
						}
					}

					offset  = self.options.wrapper.offset();
					yPos    = -($window.scrollTop() - (offset.top - 100)) / ((self.options.speed + 2 ));
					plxPos  = (yPos < 0) ? Math.abs(yPos) : -Math.abs(yPos);
					background.css({
						'transform' : 'translate3d(0, '+ ( (plxPos - 50) + (optOffset) ) +'px, 0)',
						'background-position-x' : self.options.horizontalPosition
					});
					
				});

				$window.trigger('scroll');
			}

			if (!$.browser.mobile) {
				parallaxEffectOnScrolResize();
			} else {
				if( self.options.enableOnMobile == true ) {
					parallaxEffectOnScrolResize();
				} else {
					self.options.wrapper.addClass('parallax-disabled');
				}
			}

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginParallax: PluginParallax
	});

	// jquery plugin
	$.fn.themePluginParallax = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginParallax($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Progress Bar
(function(theme, $) {

	'use strict';

	theme = theme || {};

	var instanceName = '__progressBar';

	var PluginProgressBar = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginProgressBar.defaults = {
		accX: 0,
		accY: -50,
		delay: 1
	};

	PluginProgressBar.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginProgressBar.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			if (!($.isFunction($.fn.appear))) {
				return this;
			}

			var self = this,
				$el = this.options.wrapper,
				delay = 1;

			$el.appear(function() {

				delay = ($el.attr('data-appear-animation-delay') ? $el.attr('data-appear-animation-delay') : self.options.delay);

				$el.addClass($el.attr('data-appear-animation'));

				setTimeout(function() {

					$el.animate({
						width: $el.attr('data-appear-progress-animation')
					}, 1500, 'easeOutQuad', function() {
						$el.find('.progress-bar-tooltip').animate({
							opacity: 1
						}, 500, 'easeOutQuad');
					});

				}, delay);

			}, {
				accX: self.options.accX,
				accY: self.options.accY
			});

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginProgressBar: PluginProgressBar
	});

	// jquery plugin
	$.fn.themePluginProgressBar = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginProgressBar($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Rmove Min Height Adter Load
(function(theme, $) {

	'use strict';

	theme = theme || {};

	var instanceName = '__removeMinHeight';

	var PluginRemoveMinHeight = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginRemoveMinHeight.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		build: function() {
			var self = this;

			$(window).on('load', function(){
				self.$el.css('min-height', 0);
			});

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginRemoveMinHeight: PluginRemoveMinHeight
	});

	// jquery plugin
	$.fn.themePluginRemoveMinHeight = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginRemoveMinHeight($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Revolution Slider
(function(theme, $) {

	'use strict';

	theme = theme || {};

	var instanceName = '__revolution';

	var PluginRevolutionSlider = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginRevolutionSlider.defaults = {
		sliderType: 'standard',
		sliderLayout: 'fullwidth',
		delay: 9000,
		gridwidth: 1170,
		gridheight: 500,
		spinner: 'spinner3',
		disableProgressBar: 'on',
		parallax: {
			type: 'off',
			bgparallax: 'off'
		},
		navigation: {
			keyboardNavigation: 'off',
			keyboard_direction: 'horizontal',
			mouseScrollNavigation: 'off',
			onHoverStop: 'off',
			touch: {
				touchenabled: 'on',
				swipe_threshold: 75,
				swipe_min_touches: 1,
				swipe_direction: 'horizontal',
				drag_block_vertical: false
			},
			arrows: {
				enable: true,
				hide_onmobile: false,
				hide_under: 0,
				hide_onleave: true,
				hide_delay: 200,
				hide_delay_mobile: 1200,
				left: {
					h_align: 'left',
					v_align: 'center',
					h_offset: 30,
					v_offset: 0
				},
				right: {
					h_align: 'right',
					v_align: 'center',
					h_offset: 30,
					v_offset: 0
				}
			}
		}
	};

	PluginRevolutionSlider.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build()
				.events();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginRevolutionSlider.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			if (!($.isFunction($.fn.revolution))) {
				return this;
			}

			// Single Slider Class
			if(this.options.wrapper.find('> ul > li').length == 1) {
				this.options.wrapper.addClass('slider-single-slide');
			}

			this.options.wrapper.revolution(this.options);

			return this;
		},

		events: function() {

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginRevolutionSlider: PluginRevolutionSlider
	});

	// jquery plugin
	$.fn.themePluginRevolutionSlider = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginRevolutionSlider($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Scroll to Top
(function(theme, $) {

	'use strict';

	theme = theme || {};

	var initialized = false;

	$.extend(theme, {

		PluginScrollToTop: {

			defaults: {
				wrapper: $('body'),
				offset: 150,
				buttonClass: 'scroll-to-top',
				iconClass: 'fas fa-chevron-up',
				delay: 1000,
				visibleMobile: false,
				label: false,
				easing: 'easeOutBack'
			},

			initialize: function(opts) {
				initialized = true;

				this
					.setOptions(opts)
					.build()
					.events();

				return this;
			},

			setOptions: function(opts) {
				this.options = $.extend(true, {}, this.defaults, opts);

				return this;
			},

			build: function() {
				var self = this,
					$el;

				// Base HTML Markup
				$el = $('<a />')
					.addClass(self.options.buttonClass)
					.attr({
						'href': '#',
					})
					.append(
						$('<i />')
						.addClass(self.options.iconClass)
				);

				// Visible Mobile
				if (!self.options.visibleMobile) {
					$el.addClass('hidden-mobile');
				}

				// Label
				if (self.options.label) {
					$el.append(
						$('<span />').html(self.options.label)
					);
				}

				this.options.wrapper.append($el);

				this.$el = $el;

				return this;
			},

			events: function() {
				var self = this,
					_isScrolling = false;

				// Click Element Action
				self.$el.on('click', function(e) {
					e.preventDefault();
					$('body, html').animate({
						scrollTop: 0
					}, self.options.delay, self.options.easing);
					return false;
				});

				// Show/Hide Button on Window Scroll event.
				$(window).scroll(function() {

					if (!_isScrolling) {

						_isScrolling = true;

						if ($(window).scrollTop() > self.options.offset) {

							self.$el.stop(true, true).addClass('visible');
							_isScrolling = false;

						} else {

							self.$el.stop(true, true).removeClass('visible');
							_isScrolling = false;

						}

					}

				});

				return this;
			}

		}

	});

}).apply(this, [window.theme, jQuery]);

// Counter
(function(theme, $) {

	'use strict';

	theme = theme || {};

	var instanceName = '__sliderRange';

	var PluginSliderRange = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginSliderRange.defaults = {
		start: [ 50, 250 ],
		connect: true,
		step: 1,
		range: {
			min: 0,
			max: 300
		}
	};

	PluginSliderRange.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginSliderRange.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			if (!($.isFunction($.fn.countTo))) {
				return this;
			}

			var self = this,
				$el = this.options.wrapper,
				priceLow = $('.price-range-low'),
				priceHigh = $('.price-range-high'),
				hiddenPriceLow = $('.hidden-price-range-low'),
				hiddenPriceHigh = $('.hidden-price-range-high');

			// Create Slider
			noUiSlider.create($el[0], {
				start: [ 50, 250 ],
				connect: true,
				step: 1,
				range: {
					'min': 0,
					'max': 300
				}
			});

			// Update Input values
			$el[0].noUiSlider.on('update', function( values, handle ) {
				var value = values[handle];

				if ( handle ) {
					priceHigh.text(Math.round(value));
					hiddenPriceHigh.val(Math.round(value));
				} else {
					priceLow.text(Math.round(value));
					hiddenPriceLow.val(Math.round(value));
				}
			});

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginSliderRange: PluginSliderRange
	});

	// jquery plugin
	$.fn.themePluginSliderRange = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginSliderRange($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Sort
(function(theme, $) {

	'use strict';

	theme = theme || {};

	var instanceName = '__sort';

	var PluginSort = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginSort.defaults = {
		useHash: true,
		itemSelector: '.isotope-item',
		layoutMode: 'masonry',
		filter: '*',
		hiddenStyle: {
			opacity: 0
		},
		visibleStyle: {
			opacity: 1
		},
		stagger: 30,
		isOriginLeft: ($('html').attr('dir') == 'rtl' ? false : true)
	};

	PluginSort.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginSort.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			if (!($.isFunction($.fn.isotope))) {
				return this;
			}

			var self = this,
				$source = this.options.wrapper,
				$destination = $('.sort-destination[data-sort-id="' + $source.attr('data-sort-id') + '"]'),
				$window = $(window);

			if ($destination.get(0)) {

				self.$source = $source;
				self.$destination = $destination;
				self.$loader = false;

				self.setParagraphHeight($destination);

				if (self.$destination.parents('.sort-destination-loader').get(0)) {
					self.$loader = self.$destination.parents('.sort-destination-loader');
					self.createLoader();
				}

				$destination.attr('data-filter', '*');

				$destination.one('layoutComplete', function(event, laidOutItems) {
					self.removeLoader();
				});

				$destination.waitForImages(function() {
					$destination.isotope(self.options);
					self.events();
				});

				setTimeout(function() {
					self.removeLoader();
				}, 3000);

			}

			return this;
		},

		events: function() {
			var self = this,
				filter = null,
				$window = $(window);

			self.$source.find('a').on('click', function(e) {
				e.preventDefault();

				filter = $(this).parent().data('option-value');

				self.setFilter(filter);

				if (e.originalEvent) {
					self.$source.trigger('filtered');
				}

				return this;
			});

			self.$destination.trigger('filtered');
			self.$source.trigger('filtered');

			if (self.options.useHash) {
				self.hashEvents();
			}

			$window.on('resize', function() {
				setTimeout(function() {
					self.$destination.isotope('layout');
				}, 300);
			});

			setTimeout(function() {
				$window.trigger('resize');
			}, 300);

			return this;
		},

		setFilter: function(filter) {
			var self = this,
				page = false,
				currentFilter = filter;

			self.$source.find('.nav-link.active').removeClass('active');
			self.$source.find('li[data-option-value="' + filter + '"] .nav-link').addClass('active');

			self.options.filter = currentFilter;

			if (self.$destination.attr('data-current-page')) {
				currentFilter = currentFilter + '[data-page-rel=' + self.$destination.attr('data-current-page') + ']';
			}

			self.$destination.attr('data-filter', filter).isotope({
				filter: currentFilter
			}).one('arrangeComplete', function( event, filteredItems ) {
				
				if (self.options.useHash) {
					if (window.location.hash != '' || self.options.filter.replace('.', '') != '*') {
						window.location.hash = self.options.filter.replace('.', '');
					}
				}
				
				$(window).trigger('scroll');

			}).trigger('filtered');

			return this;
		},

		hashEvents: function() {
			var self = this,
				hash = null,
				hashFilter = null,
				initHashFilter = '.' + location.hash.replace('#', '');

			if (initHashFilter != '.' && initHashFilter != '.*') {
				self.setFilter(initHashFilter);
			}

			$(window).on('hashchange', function(e) {

				hashFilter = '.' + location.hash.replace('#', '');
				hash = (hashFilter == '.' || hashFilter == '.*' ? '*' : hashFilter);

				self.setFilter(hash);

			});

			return this;
		},

		setParagraphHeight: function() {
			var self = this,
				minParagraphHeight = 0,
				paragraphs = $('span.image-frame-caption p', self.$destination);

			paragraphs.each(function() {
				if ($(this).height() > minParagraphHeight) {
					minParagraphHeight = ($(this).height() + 10);
				}
			});

			paragraphs.height(minParagraphHeight);

			return this;
		},

		createLoader: function() {
			var self = this;

			var loaderTemplate = [
				'<div class="bounce-loader">',
					'<div class="bounce1"></div>',
					'<div class="bounce2"></div>',
					'<div class="bounce3"></div>',
				'</div>'
			].join('');

			self.$loader.append(loaderTemplate);

			return this;
		},

		removeLoader: function() {

			var self = this;

			if (self.$loader) {

				self.$loader.removeClass('sort-destination-loader-showing');

				setTimeout(function() {
					self.$loader.addClass('sort-destination-loader-loaded');
				}, 300);

			}

		}

	};

	// expose to scope
	$.extend(theme, {
		PluginSort: PluginSort
	});

	// jquery plugin
	$.fn.themePluginSort = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginSort($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Steps
(function(theme, $) {
	
	'use strict';
	
	theme = theme || {};
	
	var instanceName = '__steps';

	var PluginSteps = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginSteps.defaults = {
		delay: 7000,
		animDelay: 300,
		hideDotsOnBack: true
	};

	PluginSteps.prototype = {
		initialize: function($el, opts) {
			if ( $el.data( instanceName ) ) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginSteps.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			var self = this,
				$el = this.options.wrapper,
				$item = $el.find('.item'),
				$window = $(window);

			// Set first item active class on page load
			if( !$el.find('.item.active').get(0) ) {
				$el.find('.item').eq(0).addClass('active');
			}

			var start = function(firstTime) {				
				var activeItem = $el.find('.item.active'),
					firstItem  = $el.find('.item').eq(0),
					nextItem   = ( activeItem.next().length == 0 ) ? firstItem : activeItem.next(),
					nextItem2  = ( nextItem.next().length == 0 ) ? firstItem : nextItem.next(),
					isLastItem = $el.find('.item').length - 1 == activeItem.index(),
					darkDots   = $el.find('.dots-color-dark'),
					darkDotsLeft = ( !firstTime ) ? parseFloat( nextItem2.css('left') ) / nextItem2.parent().width() * 100 : parseFloat( nextItem.css('left') ) / nextItem.parent().width() * 100,
					darkDotsWidth = 140,
					darkDotsTransitionDuration = self.options.delay - 1000;

				// If mobile
				if( $window.width() < 992 ) {
					darkDotsLeft = ( !firstTime ) ? parseFloat( nextItem2.css('top') ) / nextItem2.parent().height() * 100 : parseFloat( nextItem.css('top') ) / nextItem.parent().height() * 100;
				}

				// If not is the first time
				if( !firstTime ) {
					$('.item').removeClass('active');
					nextItem.addClass('active');
				}

				// Set dark dots transition duration
				darkDots.css({
					transition: 'linear left '+ darkDotsTransitionDuration +'ms'
				});

				// Check and set the value of left position for dark dots
				if( darkDotsLeft == 50 ) {
					darkDotsLeft = 50+'%';
				} else if( darkDotsLeft > 50 ) {
					darkDotsLeft = (darkDotsLeft + 20)+'%';
				} else {
					darkDotsLeft = (darkDotsLeft - 20)+'%';
				}

				// Set width and left position for dark dots
				darkDots.css({
					width: darkDotsWidth,
					left: darkDotsLeft,
					opacity: 1
				});

				// Hide dots when back
				if( isLastItem && self.options.hideDotsOnBack ) {
					darkDots.css({
						opacity: 0
					});
				}

				// Remove active border color from current item
				setTimeout(function(){
					nextItem.css({
						'border-color': $el.find('.dots-color').css('background-color')
					});
				}, (isLastItem) ? self.options.delay : self.options.delay );

				// Check if is first time
				if( !firstTime ) {
					
					// Set active border color for next item
					setTimeout(function(){
						nextItem2.css({
							'border-color': $el.find('.dots-color-dark').css('background-color')
						});
					}, self.options.delay);

					// Link Elements
					if( nextItem.data('link-to') ) {
						var link_to = nextItem.data('link-to');

						$('[data-link-id]').addClass('steps-shadow active');
						$('[data-link-id="'+ link_to +'"]').removeClass('active');
					}

				} else {
					
					// Remove active border color from first item
					setTimeout(function(){
						firstItem.css({
							'border-color': $el.find('.dots-color').css('background-color')
						});
					}, self.options.delay );

					// Set active border color for next item
					setTimeout(function(){
						nextItem.css({
							'border-color': $el.find('.dots-color-dark').css('background-color')
						});
					}, self.options.delay);

					// Link Elements
					if( firstItem.data('link-to') ) {
						var link_to = firstItem.data('link-to');

						$('[data-link-id]').addClass('steps-shadow active');
						$('[data-link-id="'+ link_to +'"]').removeClass('active');
					}
				
				}

							
			}

			var initialized = false;
			$window.on('scroll', function(){
				if( $el.visible( true ) && initialized == false ) {
					// Pevent to initialize again
					initialized = true;

					// Execute start() only one time (first time)
					start(true);

					// Execute start() every defined delay time
					setInterval(function(){
						start();
					}, self.options.delay);
				}
			});
			
			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginSteps: PluginSteps
	});

	// jquery plugin
	$.fn.themePluginSteps = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginSteps($this, opts);
			}
			
		});
	}

}).apply(this, [ window.theme, jQuery ]);

// Sticky
(function(theme, $) {
	
	'use strict';
	
	theme = theme || {};
	
	var instanceName = '__sticky';

	var PluginSticky = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginSticky.defaults = {
		
	};

	PluginSticky.prototype = {
		initialize: function($el, opts) {
			if ( $el.data( instanceName ) ) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build()
				.events();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginSticky.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			var self = this,
				$window = $(window),
				$html = $('html');
			
			if( !$.browser.mobile && !self.options.stickyStartAt ) {
				self.options.wrapper.stick_in_parent(self.options);
			}

			if( self.options.stickyStartAt ) {
				var $stickyWrapper = self.options.wrapper,
					$stickyBody     = self.options.wrapper.find('.sticky-body');

				// Set Sticky Wrapper Height
				$stickyWrapper.css({
					height: $stickyWrapper.outerHeight()
				});

				// Change Logo Src
				if( $stickyWrapper.find('img').attr('data-change-src') ) {
					var $logo      = $stickyWrapper.find('img'),
						logoSrc    = $logo.attr('src'),
						logoNewSrc = $logo.attr('data-change-src');

					self.changeLogoSrc = function(activate) {
						if(activate) {
							$logo.attr('src', logoNewSrc);
						} else {
							$logo.attr('src', logoSrc);
						}
					}
				}
			}
			
			return this;
		},
		events: function() {
			var self = this,
				$window = $(window),
				$html = $('html'),
				$logo = self.options.wrapper.find('img');

			$window.on('scroll', function(){

				if( self.options.stickyStartAt < $window.scrollTop() ) {
					$html.addClass('sticky-wrapper-active');
					
					if( $logo.attr('data-change-src') ) {
						self.changeLogoSrc(true);
					}
				} else {
					$html.removeClass('sticky-wrapper-active');
					
					if( $logo.attr('data-change-src') ) {
						self.changeLogoSrc(false);
					}
				}

			});
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginSticky: PluginSticky
	});

	// jquery plugin
	$.fn.themePluginSticky = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginSticky($this, opts);
			}
			
		});
	}

}).apply(this, [ window.theme, jQuery ]);

// Toggle
(function(theme, $) {

	'use strict';

	theme = theme || {};

	var instanceName = '__toggle';

	var PluginToggle = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginToggle.defaults = {
		duration: 350,
		isAccordion: false
	};

	PluginToggle.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginToggle.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			var self = this,
				$wrapper = this.options.wrapper,
				$items = $wrapper.find('.toggle'),
				$el = null;

			$items.each(function() {
				$el = $(this);

				if ($el.hasClass('active')) {
					$el.find('> p').addClass('preview-active');
					$el.find('> .toggle-content').slideDown(self.options.duration);
				}

				self.events($el);
			});

			if (self.options.isAccordion) {
				self.options.duration = self.options.duration / 2;
			}

			return this;
		},

		events: function($el) {
			var self = this,
				previewParCurrentHeight = 0,
				previewParAnimateHeight = 0,
				toggleContent = null;

			$el.find('> label').on('click', function(e) {

				var $this = $(this),
					parentSection = $this.parent(),
					parentWrapper = $this.parents('.toggle'),
					previewPar = null,
					closeElement = null;

				if (self.options.isAccordion && typeof(e.originalEvent) != 'undefined') {
					closeElement = parentWrapper.find('.toggle.active > label');

					if (closeElement[0] == $this[0]) {
						return;
					}
				}

				parentSection.toggleClass('active');

				// Preview Paragraph
				if (parentSection.find('> p').get(0)) {

					previewPar = parentSection.find('> p');
					previewParCurrentHeight = previewPar.css('height');
					previewPar.css('height', 'auto');
					previewParAnimateHeight = previewPar.css('height');
					previewPar.css('height', previewParCurrentHeight);

				}

				// Content
				toggleContent = parentSection.find('> .toggle-content');

				if (parentSection.hasClass('active')) {

					$(previewPar).animate({
						height: previewParAnimateHeight
					}, self.options.duration, function() {
						$(this).addClass('preview-active');
					});

					toggleContent.slideDown(self.options.duration, function() {
						if (closeElement) {
							closeElement.trigger('click');
						}
					});

				} else {

					$(previewPar).animate({
						height: 0
					}, self.options.duration, function() {
						$(this).removeClass('preview-active');
					});

					toggleContent.slideUp(self.options.duration);

				}

			});
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginToggle: PluginToggle
	});

	// jquery plugin
	$.fn.themePluginToggle = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginToggle($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Tweets
(function(theme, $) {

	'use strict';

	theme = theme || {};

	var instanceName = '__tweets';

	var PluginTweets = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginTweets.defaults = {
		username: null,
		count: 2,
		URL: 'php/twitter-feed.php'
	};

	PluginTweets.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginTweets.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			if (this.options.username == null || this.options.username == '') {
				return this;
			}

			var self = this,
				$wrapper = this.options.wrapper;

			$.ajax({
				type: 'GET',
				data: {
					twitter_screen_name: self.options.username,
					tweets_to_display: self.options.count
				},
				url: self.options.URL,
			}).done(function(html) {
				$wrapper.html(html).find('a').attr('target','_blank');
			});

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginTweets: PluginTweets
	});

	// jquery plugin
	$.fn.themePluginTweets = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginTweets($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Validation
(function(theme, $) {

	'use strict';

	theme = theme || {};

	var initialized = false;

	$.extend(theme, {

		PluginValidation: {

			defaults: {
				validator: {
					highlight: function(element) {
						$(element)
							.parent()
							.removeClass('has-success')
							.addClass('has-error');
					},
					success: function(element) {
						$(element)
							.parent()
							.removeClass('has-error')
							.addClass('has-success')
							.find('label.error')
							.remove();
					},
					errorPlacement: function(error, element) {
						if (element.attr('type') == 'radio' || element.attr('type') == 'checkbox') {
							error.appendTo(element.parent().parent());
						} else {
							error.insertAfter(element);
						}
					}
				},
				validateCaptchaURL: 'php/contact-form-verify-captcha.php',
				refreshCaptchaURL: 'php/contact-form-refresh-captcha.php'
			},

			initialize: function(opts) {
				initialized = true;

				this
					.setOptions(opts)
					.build();

				return this;
			},

			setOptions: function(opts) {
				this.options = $.extend(true, {}, this.defaults, opts);

				return this;
			},

			build: function() {
				var self = this;

				if (!($.isFunction($.validator))) {
					return this;
				}

				self.addMethods();
				self.setMessageGroups();

				$.validator.setDefaults(self.options.validator);

				return this;
			},

			addMethods: function() {
				var self = this;

				$.validator.addMethod('captcha', function(value, element, params) {
					var captchaValid = false;

					$.ajax({
						url: self.options.validateCaptchaURL,
						type: 'POST',
						async: false,
						dataType: 'json',
						data: {
							captcha: $.trim(value)
						},
						success: function(data) {
							if (data.response == 'success') {
								captchaValid = true;
							}
						}
					});

					if (captchaValid) {
						return true;
					}

				}, '');

				// Refresh Captcha
				$('#refreshCaptcha').on('click', function(e) {
					e.preventDefault();
					$.get(self.options.refreshCaptchaURL, function(url) {
						$('#captcha-image').attr('src', url);
					});					
				});

			},

			setMessageGroups: function() {

				$('.checkbox-group[data-msg-required], .radio-group[data-msg-required]').each(function() {
					var message = $(this).data('msg-required');
					$(this).find('input').attr('data-msg-required', message);
				});

			}

		}

	});

}).apply(this, [window.theme, jQuery]);

// Video Background
(function(theme, $) {

	'use strict';

	theme = theme || {};

	var instanceName = '__videobackground';

	var PluginVideoBackground = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginVideoBackground.defaults = {
		overlay: true,
		volume: 1,
		playbackRate: 1,
		muted: true,
		loop: true,
		autoplay: true,
		position: '50% 50%',
		posterType: 'detect',
		className: 'z-index-0'
	};

	PluginVideoBackground.prototype = {
		initialize: function($el, opts) {
			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginVideoBackground.defaults, opts, {
				path: this.$el.data('video-path'),
				wrapper: this.$el
			});

			return this;
		},

		build: function() {

			if (!($.isFunction($.fn.vide)) || (!this.options.path)) {
				return this;
			}

			if (this.options.overlay) {
				this.options.wrapper.prepend(
					$('<div />').addClass('video-overlay')
				);
			}

			this.options.wrapper.vide(this.options.path, this.options);

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginVideoBackground: PluginVideoBackground
	});

	// jquery plugin
	$.fn.themePluginVideoBackground = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginVideoBackground($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Account
(function(theme, $) {

	theme = theme || {};

	var initialized = false;

	$.extend(theme, {

		Account: {

			defaults: {
				wrapper: $('#headerAccount')
			},

			initialize: function($wrapper, opts) {
				if (initialized) {
					return this;
				}

				initialized = true;
				this.$wrapper = ($wrapper || this.defaults.wrapper);

				this
					.setOptions(opts)
					.events();

				return this;
			},

			setOptions: function(opts) {
				this.options = $.extend(true, {}, this.defaults, opts, theme.fn.getOptions(this.$wrapper.data('plugin-options')));

				return this;
			},

			events: function() {
				var self = this;

				self.$wrapper.find('input').on('focus', function() {
					self.$wrapper.addClass('open');

					$(document).mouseup(function(e) {
						if (!self.$wrapper.is(e.target) && self.$wrapper.has(e.target).length === 0) {
							self.$wrapper.removeClass('open');
						}
					});
				});

				$('#headerSignUp').on('click', function(e) {
					e.preventDefault();
					self.$wrapper.addClass('signup').removeClass('signin').removeClass('recover');
					self.$wrapper.find('.signup-form input:first').focus();
				});

				$('#headerSignIn').on('click', function(e) {
					e.preventDefault();
					self.$wrapper.addClass('signin').removeClass('signup').removeClass('recover');
					self.$wrapper.find('.signin-form input:first').focus();
				});

				$('#headerRecover').on('click', function(e) {
					e.preventDefault();
					self.$wrapper.addClass('recover').removeClass('signup').removeClass('signin');
					self.$wrapper.find('.recover-form input:first').focus();
				});

				$('#headerRecoverCancel').on('click', function(e) {
					e.preventDefault();
					self.$wrapper.addClass('signin').removeClass('signup').removeClass('recover');
					self.$wrapper.find('.signin-form input:first').focus();
				});
			}

		}

	});

}).apply(this, [window.theme, jQuery]);

// Nav
(function(theme, $) {

	theme = theme || {};

	var initialized = false;

	$.extend(theme, {

		Nav: {

			defaults: {
				wrapper: $('#mainNav'),
				scrollDelay: 600,
				scrollAnimation: 'easeOutQuad'
			},

			initialize: function($wrapper, opts) {
				if (initialized) {
					return this;
				}

				initialized = true;
				this.$wrapper = ($wrapper || this.defaults.wrapper);

				this
					.setOptions(opts)
					.build()
					.events();

				return this;
			},

			setOptions: function(opts) {
				this.options = $.extend(true, {}, this.defaults, opts, theme.fn.getOptions(this.$wrapper.data('plugin-options')));

				return this;
			},

			build: function() {
				var self = this,
					$html = $('html'),
					$header = $('#header'),
					thumbInfoPreview;

				// Add Arrows
				$header.find('.dropdown-toggle, .dropdown-submenu > a').append($('<i />').addClass('menu-arrow'));

				// Side Header
				if( $html.hasClass('side-header') || $html.hasClass('side-header-overlay-full-screen') ) {
					
					// Nano Scroll
					$('.nano').nanoScroller({
						alwaysVisible: true
					});
				}

				// Reverse
				self.checkReverse = function() {

					self.$wrapper.find('.dropdown-submenu').removeClass('dropdown-reverse');

					self.$wrapper.find('.dropdown-submenu:not(.manual)').each(function() {
						if(!$(this).find('.dropdown-menu').visible( false, true, 'horizontal' )  ) {
							$(this).addClass('dropdown-reverse');
						}
					});
				}

				if( !$html.hasClass('side-header') && !$html.hasClass('side-header-overlay-full-screen') ) {
					self.checkReverse();

	 				$(window).on('resize', function() {
						self.checkReverse();
	 				});
				}

				return this;
			},

			events: function() {
				var self    = this,
					$html   = $('html'),
					$header = $('#header'),
					$window = $(window),
					headerBodyHeight = $('.header-body').outerHeight();

				$header.find('a[href="#"]').on('click', function(e) {
					e.preventDefault();
				});

				// Mobile Arrows
				$header.find('.dropdown-toggle[href="#"], .dropdown-submenu a[href="#"], .dropdown-toggle[href!="#"] .menu-arrow, .dropdown-submenu a[href!="#"] .menu-arrow').on('click', function(e) {
					e.preventDefault();
					if ($window.width() < 992 || $html.hasClass('side-header') || $html.hasClass('side-header-overlay-full-screen')) {
						if( $(this).closest('li').hasClass('opened') ) {
							$(this).closest('li').find('> .dropdown-menu').slideUp(600, function(){
								$(this).closest('li').removeClass('opened');

								// Refresh Nano Scroll
								if( $html.hasClass('side-header') || $html.hasClass('side-header-overlay-full-screen') ) {
									$('.nano').nanoScroller();
								}
								
							});
						} else {
							$(this).closest('li').addClass('opened');
							$(this).closest('li').find('> .dropdown-menu').slideDown(600, function(){
								
								// Refresh Nano Scroll
								if( $html.hasClass('side-header') || $html.hasClass('side-header-overlay-full-screen') ) {
									$('.nano').nanoScroller();
								}
								
							});
						}
					}
				});

				// Touch Devices with normal resolutions
				if('ontouchstart' in document.documentElement) {
					$header.find('.dropdown-toggle:not([href="#"]), .dropdown-submenu > a:not([href="#"])')
						.on('touchstart click', function(e) {
							if($window.width() > 991) {

								e.stopPropagation();
								e.preventDefault();

								if(e.handled !== true) {

									var li = $(this).closest('li');

									if(li.hasClass('tapped')) {
										location.href = $(this).attr('href');
									}

									li.addClass('tapped');

									e.handled = true;
								} else {
									return false;
								}

								return false;

							}
						})
						.on('blur', function(e) {
							$(this).closest('li').removeClass('tapped');
						});

				}

				// Collapse Nav
				$header.find('[data-collapse-nav]').on('click', function(e) {
					$(this).parents('.collapse').removeClass('in');
				});

				// Mobile Menu Button
				var mobileMenuBtn = $('.header-btn-collapse-nav'),
					flagMenu = true;
				
				mobileMenuBtn.on('click', function(){
					if( flagMenu ) {
						$(this).toggleClass('active');
						$html.addClass('mobile-menu-opened');
					}
					flagMenu = false;
				});

				$('.header-nav-main nav').on('show.bs.collapse hide.bs.collapse', function (e) {
				    if( e.type == 'hide' ) {
					    $html.removeClass('mobile-menu-opened');
					    $(this).addClass('closed');
				    }
				    if( e.type == 'show' ) {
					    $(this).removeClass('closed');
				    }
				    flagMenu = true;
				});

				// Anchors Position
				$('[data-hash]').each(function() {

					var target    = ($(this).attr('href') != '#') ? $(this).attr('href') : '',
						offset    = ($(this).is("[data-hash-offset]") ? $(this).data('hash-offset') : 0),
						highlight = ($(this).is("[data-hash-highlight]") ? true : false);

					if($(target).get(0)) {
						$(this).on('click', function(e) {
							e.preventDefault();

							if( $window.width() < 992 ) {
								if( !$(e.target).is('i') ) {

									// Close Collapse if Opened
									$(this).parents('.collapse.show').collapse('hide');

									// Change state of mobile menu button
									$('.header-btn-collapse-nav').removeClass('active')

									// Scroll to target
									self.scrollToTarget(target, offset, highlight);
									
								}
							} else {
								// Scroll to target
								self.scrollToTarget(target, offset, highlight);
							}

							return;
						});
					}

				});

				// Side Header Nano Scroll On Resize
				if( $html.hasClass('side-header') ) {
					$window.on('resize', function(){
						if( $window.width() < 992 ) {
							$('.nano').nanoScroller({ destroy: true });
							$header.find('.header-nav').removeClass('nano');
						} else {
							$header.find('.header-nav').addClass('nano');
							$('.nano').nanoScroller();
						}
					});
				}

				// Side Header Toggle
				if( $html.hasClass('side-header-from-out') || $html.hasClass('side-header-overlay-full-screen') ) {
					$('.side-header-btn-toggle').on('click', function(){
						$header.toggleClass('side-header-show');
						
						if( $html.hasClass('side-header-overlay-full-screen') ) {
							$html.find('body').addClass('no-vertical-scroll');
						}
						return false;
					});

					$('.side-header-btn-close').on('click', function(){
						$header.removeClass('side-header-show');
						
						if( $html.hasClass('side-header-overlay-full-screen') ) {
							$html.find('body').removeClass('no-vertical-scroll');
						}
						return false;
					});
				}

				// Header Search Expanded
				var searchBtn  = $header.find('.header-search-button'),
					searchExpanded = $header.find('.header-search-expanded');
				
				if( searchExpanded ) {
					searchBtn.on('click', function(){
						$html.toggleClass('header-search-expanded-active');
					});
					
					$(document).mouseup(function(e) {
						if (!searchExpanded.is(e.target) && searchExpanded.has(e.target).length === 0) {
							$html.removeClass('header-search-expanded-active');
						}
					});
				}

				return this;
			},

			scrollToTarget: function(target, offset, highlight) {
				var self = this;

				$('body').addClass('scrolling');

				$('html, body').animate({
					scrollTop: $(target).offset().top - offset
				}, self.options.scrollDelay, self.options.scrollAnimation, function() {
					
					if( highlight ) {
						$(target).addClass('highlight-anim');

						setTimeout(function(){
							$(target).removeClass('highlight-anim');
						}, 1200);
					}

					$('body').removeClass('scrolling');
				});

				return this;

			}

		}

	});

}).apply(this, [window.theme, jQuery]);


// Newsletter
(function(theme, $) {

	theme = theme || {};

	var initialized = false;

	$.extend(theme, {

		Newsletter: {

			defaults: {
				wrapper: $('.newsletter-form')
			},

			initialize: function($wrapper, opts) {
				if (initialized) {
					return this;
				}

				initialized = true;
				this.$wrapper = ($wrapper || this.defaults.wrapper);

				this
					.setOptions(opts)
					.build();

				return this;
			},

			setOptions: function(opts) {
				this.options = $.extend(true, {}, this.defaults, opts, theme.fn.getOptions(this.$wrapper.data('plugin-options')));

				return this;
			},

			build: function() {
				if (!($.isFunction($.fn.validate))) {
					return this;
				}

				var self = this;

				self.$wrapper.each(function(){

					var $wrapper = $(this),
					    $email = $wrapper.find('.newsletter-email'),
						$success = $wrapper.find('.newsletter-form-success'),
						$error = $wrapper.find('.newsletter-form-error');

					$wrapper.validate({
						submitHandler: function(form) {

							$.ajax({
								type: 'POST',
								url: $wrapper.attr('action'),
								data: {
									'email': $email.val()
								},
								dataType: 'json'
							}).always(function(data, textStatus, jqXHR) {

								if (data.response == 'success') {
									$success.removeClass('d-none');
									$error.addClass('d-none');

									$email
										.val('')
										.blur();

									$wrapper.find('label.error').remove();

									// Uncomment the code below if want hide the Success message after a time
									// setTimeout(function(){
									// 	$success.addClass('d-none');
									// }, 5000);

									return;

								} else {
									$error.html(data.message);
									$error.removeClass('d-none');
									$success.addClass('d-none');

									$email
										.blur();

									$wrapper.find('label.error').remove();

									return;
								}

								$error.removeClass('d-none');
								$success.addClass('d-none');

								$wrapper.find('.has-success')
									.removeClass('has-success');
									
							});

						},
						rules: {
							newsletterEmail: {
								required: true,
								email: true
							}
						},
						errorPlacement: function(error, element) {
							if( !element.next().hasClass('input-group') ) {
								element.closest('.newsletter-form').append(error);
							} else {
								error.insertAfter(element.parent());
							}
						}
					});

				});

				return this;
			}

		}

	});

}).apply(this, [window.theme, jQuery]);

// Search
(function(theme, $) {

	theme = theme || {};

	var initialized = false;

	$.extend(theme, {

		Search: {

			defaults: {
				wrapper: $('#searchForm')
			},

			initialize: function($wrapper, opts) {
				if (initialized) {
					return this;
				}

				initialized = true;
				this.$wrapper = ($wrapper || this.defaults.wrapper);

				this
					.setOptions(opts)
					.build();

				return this;
			},

			setOptions: function(opts) {
				this.options = $.extend(true, {}, this.defaults, opts, theme.fn.getOptions(this.$wrapper.data('plugin-options')));

				return this;
			},

			build: function() {
				if (!($.isFunction($.fn.validate))) {
					return this;
				}

				this.$wrapper.validate({
					errorPlacement: function(error, element) {}
				});

				return this;
			}

		}

	});

}).apply(this, [window.theme, jQuery]);

// Sticky Header
(function(theme, $) {

	theme = theme || {};

	var initialized = false;

	$.extend(theme, {

		StickyHeader: {

			defaults: {
				wrapper: $('#header'),
				headerBody: $('#header .header-body'),
				stickyEnabled: true,
				stickyEnableOnBoxed: true,
				stickyEnableOnMobile: true,
				stickyStartAt: 0,
				stickyStartAtElement: false,
				stickySetTop: 0,
				stickyHeaderContainerHeight: false,
				stickyChangeLogo: false
			},

			initialize: function($wrapper, opts) {
				if (initialized) {
					return this;
				}

				initialized = true;
				this.$wrapper = ($wrapper || this.defaults.wrapper);

				this
					.setOptions(opts)
					.build()
					.events();

				return this;
			},

			setOptions: function(opts) {
				this.options = $.extend(true, {}, this.defaults, opts, theme.fn.getOptions(this.$wrapper.data('plugin-options')));

				return this;
			},

			build: function() {
				if (!this.options.stickyEnableOnBoxed && $('html').hasClass('boxed') || !this.options.stickyEnabled) {
					return this;
				}

				var self = this,
					$html = $('html'),
					$window = $(window),
					sideHeader = $html.hasClass('side-header'),
					initialHeaderTopHeight = self.options.wrapper.find('.header-top').outerHeight(),
					initialHeaderContainerHeight = self.options.wrapper.find('.header-container').outerHeight(),
					minHeight;

				// HTML Classes
				$html.addClass('sticky-header-enabled');

				if (parseInt(self.options.stickySetTop) < 0) {
					$html.addClass('sticky-header-negative');
				}

				// Set Start At
				if(self.options.stickyStartAtElement) {

					var $stickyStartAtElement = $(self.options.stickyStartAtElement);

					$(window).on('scroll resize', function() {
						self.options.stickyStartAt = $stickyStartAtElement.offset().top;
					});

					$(window).trigger('resize');
				}

				// Boxed
				if($html.hasClass('boxed') && (parseInt(self.options.stickyStartAt) == 0) && $window.width() > 991) {
					self.options.stickyStartAt = 30;
				}

				// Define Min Height value
				if( self.options.wrapper.find('.header-top').get(0) ) {
					minHeight = ( initialHeaderTopHeight + initialHeaderContainerHeight );
				} else {
					minHeight = initialHeaderContainerHeight;
				}

				// Set header Body Position When Always Sticky
				if( self.options.stickyStartAt == 0 ) {
					self.options.headerBody.css('position','fixed');
				}

				// Two Logos Effect
				if( self.options.wrapper.find('.header-logo img').length > 1 ) {
					self.options.wrapper.find('.header-logo .logo-2').removeClass('d-none');
				}

				// Set Wrapper Min Height
				$window.on('stickyHeader.activate stickyHeader.deactivate', function(){
					self.options.wrapper.css('min-height', minHeight);
				});

				// Sticky Header Container Height
				if( self.options.stickyHeaderContainerHeight ) {
					self.options.wrapper.find('.header-container').css('height', self.options.wrapper.find('.header-container').outerHeight());
				}

				// Check Sticky Header
				self.checkStickyHeader = function() {
					if ($window.scrollTop() >= parseInt(self.options.stickyStartAt)) {
						self.activateStickyHeader();
					} else {
						self.deactivateStickyHeader();
					}
				};
				
				// Activate Sticky Header
				self.activateStickyHeader = function() {

					if ($window.width() < 992) {
						if (!self.options.stickyEnableOnMobile) {
							self.deactivateStickyHeader();
							return;
						}
					} else {
						if (sideHeader) {
							self.deactivateStickyHeader();
							return;
						}
					}

					$html.addClass('sticky-header-active');

					// Set Header Body Position Fixed and top value
					if( self.options.stickyStartAt ) {
						self.options.headerBody.css('position','fixed');
						self.options.headerBody.css('top', self.options.stickySetTop);	
					}

					// Sticky Effect - Shrink
					if( self.options.wrapper.hasClass('header-effect-shrink') ) {

						// If Header Top
						if( self.options.wrapper.find('.header-top').get(0) ) {
							self.options.wrapper.find('.header-top').css({
								height: 0,
								'min-height': 0,
								overflow: 'hidden'
							});
						}

						// Header Container
						if( self.options.stickyHeaderContainerHeight ) {
							self.options.wrapper.find('.header-container').css({
								height: self.options.stickyHeaderContainerHeight,
								'min-height': 0
							});
						} else {
							self.options.wrapper.find('.header-container').css({
								height: (initialHeaderContainerHeight / 3) * 2, // one third of container height
								'min-height': 0
							});
						}

					}

					// Two Logos Effect
					if( self.options.wrapper.find('.header-logo img').length > 1 ) {
						var logo1 = $('#header .header-logo .logo-1'),
							logo2 = $('#header .header-logo .logo-2');

						// First Logo
						logo1.parent().css('pointer-events','none');
						logo1.removeClass('active');

						// Second Logo
						logo2.addClass('active');

					}

					// Set Logo Size and Position
					if (self.options.stickyChangeLogo) {
						self.changeLogo(true);
					}

					// Change Logo Src
					if( self.options.wrapper.find('.header-logo img').attr('data-change-src') ) {
						self.changeLogoSrc(true);
					}

					$.event.trigger({
						type: 'stickyHeader.activate'
					});
				};

				// Deactivate Sticky Header
				self.deactivateStickyHeader = function() {

					$html.removeClass('sticky-header-active');

					self.options.headerBody.css('top', 0);

					// Set Logo Size and Position
					if (self.options.stickyChangeLogo) {
						self.changeLogo(false);
					}

					// Change Logo Src
					if( self.options.wrapper.find('.header-logo img').attr('data-change-src') ) {
						self.changeLogoSrc(false);
					}

					// Reset Header Body Position
					self.options.headerBody.css('position', 'static');

					// Sticky Effect - Shrink
					if( self.options.wrapper.hasClass('header-effect-shrink') ) {

						// Boxed Layout
						if( $html.hasClass('boxed') ) {

							// Set Header Body Position Absolute
							self.options.headerBody.css('position','absolute');

							if( $window.scrollTop() > $('.body').offset().top ) {
								// Set Header Body Position Fixed
								self.options.headerBody.css('position','fixed');								
							}

						} else {
							// Set Header Body Position Fixed
							self.options.headerBody.css('position','fixed');
						}

						// If Header Top
						if( self.options.wrapper.find('.header-top').get(0) ) {
							self.options.wrapper.find('.header-top').css({
								height: initialHeaderTopHeight,
								overflow: 'visible'
							});
						}

						// Header Container
						self.options.wrapper.find('.header-container').css({
							height: initialHeaderContainerHeight
						});

					}

					// Two Logos Effect
					if( self.options.wrapper.find('.header-logo img').length > 1 ) {
						var logo1 = $('#header .header-logo .logo-1'),
							logo2 = $('#header .header-logo .logo-2');

						// First Logo
						logo1.parent().css('pointer-events','auto');
						logo1.addClass('active');

						// Second Logo
						logo2.removeClass('active');

					}

					$.event.trigger({
						type: 'stickyHeader.deactivate'
					});
				};

				// Always Sticky
				if (parseInt(self.options.stickyStartAt) <= 0) {
					self.activateStickyHeader();
				}

				// Set Logo Size and Position
				if (self.options.stickyChangeLogo) {

					var $logoWrapper = self.options.wrapper.find('.header-logo'),
						$logo = $logoWrapper.find('img'),
						logoWidth = $logo.attr('width'),
						logoHeight = $logo.attr('height'),
						logoSmallTop = parseInt($logo.attr('data-sticky-top') ? $logo.attr('data-sticky-top') : 0),
						logoSmallWidth = parseInt($logo.attr('data-sticky-width') ? $logo.attr('data-sticky-width') : 'auto'),
						logoSmallHeight = parseInt($logo.attr('data-sticky-height') ? $logo.attr('data-sticky-height') : 'auto');

					self.changeLogo = function(activate) {
						if(activate) {
							
							$logo.css({
								'top': logoSmallTop,
								'width': logoSmallWidth,
								'height': logoSmallHeight
							});

						} else {
							
							$logo.css({
								'top': 0,
								'width': logoWidth,
								'height': logoHeight
							});

						}
					}

				}

				// Change Logo Src
				if( self.options.wrapper.find('.header-logo img').attr('data-change-src') ) {
					var $logo = self.options.wrapper.find('.header-logo img'),
						logoSrc = $logo.attr('src'),
						logoNewSrc = $logo.attr('data-change-src');

					self.changeLogoSrc = function(activate) {
						if(activate) {
							$logo.attr('src', logoNewSrc);
						} else {
							$logo.attr('src', logoSrc);
						}
					}
				}

				return this;
			},

			events: function() {
				var self = this;

				if (!this.options.stickyEnableOnBoxed && $('body').hasClass('boxed') || !this.options.stickyEnabled) {
					return this;
				}

				if (!self.options.alwaysStickyEnabled) {
					$(window).on('scroll resize', function() {
						self.checkStickyHeader();
					});
				} else {
					self.activateStickyHeader();
				}

				return this;
			}

		}

	});

}).apply(this, [window.theme, jQuery]);
/********************************************
	-	THEMEPUNCH TOOLS Ver. 1.0     -
	 Last Update of Tools 08.03.2018
*********************************************/


/*
* @fileOverview TouchSwipe - jQuery Plugin
* @version 1.6.9
*
* @author Matt Bryson http://www.github.com/mattbryson
* @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
* @see http://labs.skinkers.com/touchSwipe/
* @see http://plugins.jquery.com/project/touchSwipe
*
* Copyright (c) 2010 Matt Bryson
* Dual licensed under the MIT or GPL Version 2 licenses.
*
*/



(function(a){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],a)}else{a(jQuery)}}(function(f){var y="1.6.9",p="left",o="right",e="up",x="down",c="in",A="out",m="none",s="auto",l="swipe",t="pinch",B="tap",j="doubletap",b="longtap",z="hold",E="horizontal",u="vertical",i="all",r=10,g="start",k="move",h="end",q="cancel",a="ontouchstart" in window,v=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled,d=window.navigator.pointerEnabled||window.navigator.msPointerEnabled,C="TouchSwipe";var n={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe",preventDefaultEvents:true};f.fn.swipetp=function(H){var G=f(this),F=G.data(C);if(F&&typeof H==="string"){if(F[H]){return F[H].apply(this,Array.prototype.slice.call(arguments,1))}else{f.error("Method "+H+" does not exist on jQuery.swipetp")}}else{if(!F&&(typeof H==="object"||!H)){return w.apply(this,arguments)}}return G};f.fn.swipetp.version=y;f.fn.swipetp.defaults=n;f.fn.swipetp.phases={PHASE_START:g,PHASE_MOVE:k,PHASE_END:h,PHASE_CANCEL:q};f.fn.swipetp.directions={LEFT:p,RIGHT:o,UP:e,DOWN:x,IN:c,OUT:A};f.fn.swipetp.pageScroll={NONE:m,HORIZONTAL:E,VERTICAL:u,AUTO:s};f.fn.swipetp.fingers={ONE:1,TWO:2,THREE:3,ALL:i};function w(F){if(F&&(F.allowPageScroll===undefined&&(F.swipe!==undefined||F.swipeStatus!==undefined))){F.allowPageScroll=m}if(F.click!==undefined&&F.tap===undefined){F.tap=F.click}if(!F){F={}}F=f.extend({},f.fn.swipetp.defaults,F);return this.each(function(){var H=f(this);var G=H.data(C);if(!G){G=new D(this,F);H.data(C,G)}})}function D(a5,aw){var aA=(a||d||!aw.fallbackToMouseEvents),K=aA?(d?(v?"MSPointerDown":"pointerdown"):"touchstart"):"mousedown",az=aA?(d?(v?"MSPointerMove":"pointermove"):"touchmove"):"mousemove",V=aA?(d?(v?"MSPointerUp":"pointerup"):"touchend"):"mouseup",T=aA?null:"mouseleave",aE=(d?(v?"MSPointerCancel":"pointercancel"):"touchcancel");var ah=0,aQ=null,ac=0,a2=0,a0=0,H=1,ar=0,aK=0,N=null;var aS=f(a5);var aa="start";var X=0;var aR=null;var U=0,a3=0,a6=0,ae=0,O=0;var aX=null,ag=null;try{aS.bind(K,aO);aS.bind(aE,ba)}catch(al){f.error("events not supported "+K+","+aE+" on jQuery.swipetp")}this.enable=function(){aS.bind(K,aO);aS.bind(aE,ba);return aS};this.disable=function(){aL();return aS};this.destroy=function(){aL();aS.data(C,null);aS=null};this.option=function(bd,bc){if(aw[bd]!==undefined){if(bc===undefined){return aw[bd]}else{aw[bd]=bc}}else{f.error("Option "+bd+" does not exist on jQuery.swipetp.options")}return null};function aO(be){if(aC()){return}if(f(be.target).closest(aw.excludedElements,aS).length>0){return}var bf=be.originalEvent?be.originalEvent:be;var bd,bg=bf.touches,bc=bg?bg[0]:bf;aa=g;if(bg){X=bg.length}else{be.preventDefault()}ah=0;aQ=null;aK=null;ac=0;a2=0;a0=0;H=1;ar=0;aR=ak();N=ab();S();if(!bg||(X===aw.fingers||aw.fingers===i)||aY()){aj(0,bc);U=au();if(X==2){aj(1,bg[1]);a2=a0=av(aR[0].start,aR[1].start)}if(aw.swipeStatus||aw.pinchStatus){bd=P(bf,aa)}}else{bd=false}if(bd===false){aa=q;P(bf,aa);return bd}else{if(aw.hold){ag=setTimeout(f.proxy(function(){aS.trigger("hold",[bf.target]);if(aw.hold){bd=aw.hold.call(aS,bf,bf.target)}},this),aw.longTapThreshold)}ap(true)}return null}function a4(bf){var bi=bf.originalEvent?bf.originalEvent:bf;if(aa===h||aa===q||an()){return}var be,bj=bi.touches,bd=bj?bj[0]:bi;var bg=aI(bd);a3=au();if(bj){X=bj.length}if(aw.hold){clearTimeout(ag)}aa=k;if(X==2){if(a2==0){aj(1,bj[1]);a2=a0=av(aR[0].start,aR[1].start)}else{aI(bj[1]);a0=av(aR[0].end,aR[1].end);aK=at(aR[0].end,aR[1].end)}H=a8(a2,a0);ar=Math.abs(a2-a0)}if((X===aw.fingers||aw.fingers===i)||!bj||aY()){aQ=aM(bg.start,bg.end);am(bf,aQ);ah=aT(bg.start,bg.end);ac=aN();aJ(aQ,ah);if(aw.swipeStatus||aw.pinchStatus){be=P(bi,aa)}if(!aw.triggerOnTouchEnd||aw.triggerOnTouchLeave){var bc=true;if(aw.triggerOnTouchLeave){var bh=aZ(this);bc=F(bg.end,bh)}if(!aw.triggerOnTouchEnd&&bc){aa=aD(k)}else{if(aw.triggerOnTouchLeave&&!bc){aa=aD(h)}}if(aa==q||aa==h){P(bi,aa)}}}else{aa=q;P(bi,aa)}if(be===false){aa=q;P(bi,aa)}}function M(bc){var bd=bc.originalEvent?bc.originalEvent:bc,be=bd.touches;if(be){if(be.length){G();return true}}if(an()){X=ae}a3=au();ac=aN();if(bb()||!ao()){aa=q;P(bd,aa)}else{if(aw.triggerOnTouchEnd||(aw.triggerOnTouchEnd==false&&aa===k)){bc.preventDefault();aa=h;P(bd,aa)}else{if(!aw.triggerOnTouchEnd&&a7()){aa=h;aG(bd,aa,B)}else{if(aa===k){aa=q;P(bd,aa)}}}}ap(false);return null}function ba(){X=0;a3=0;U=0;a2=0;a0=0;H=1;S();ap(false)}function L(bc){var bd=bc.originalEvent?bc.originalEvent:bc;if(aw.triggerOnTouchLeave){aa=aD(h);P(bd,aa)}}function aL(){aS.unbind(K,aO);aS.unbind(aE,ba);aS.unbind(az,a4);aS.unbind(V,M);if(T){aS.unbind(T,L)}ap(false)}function aD(bg){var bf=bg;var be=aB();var bd=ao();var bc=bb();if(!be||bc){bf=q}else{if(bd&&bg==k&&(!aw.triggerOnTouchEnd||aw.triggerOnTouchLeave)){bf=h}else{if(!bd&&bg==h&&aw.triggerOnTouchLeave){bf=q}}}return bf}function P(be,bc){var bd,bf=be.touches;if((J()||W())||(Q()||aY())){if(J()||W()){bd=aG(be,bc,l)}if((Q()||aY())&&bd!==false){bd=aG(be,bc,t)}}else{if(aH()&&bd!==false){bd=aG(be,bc,j)}else{if(aq()&&bd!==false){bd=aG(be,bc,b)}else{if(ai()&&bd!==false){bd=aG(be,bc,B)}}}}if(bc===q){ba(be)}if(bc===h){if(bf){if(!bf.length){ba(be)}}else{ba(be)}}return bd}function aG(bf,bc,be){var bd;if(be==l){aS.trigger("swipeStatus",[bc,aQ||null,ah||0,ac||0,X,aR]);if(aw.swipeStatus){bd=aw.swipeStatus.call(aS,bf,bc,aQ||null,ah||0,ac||0,X,aR);if(bd===false){return false}}if(bc==h&&aW()){aS.trigger("swipe",[aQ,ah,ac,X,aR]);if(aw.swipe){bd=aw.swipe.call(aS,bf,aQ,ah,ac,X,aR);if(bd===false){return false}}switch(aQ){case p:aS.trigger("swipeLeft",[aQ,ah,ac,X,aR]);if(aw.swipeLeft){bd=aw.swipeLeft.call(aS,bf,aQ,ah,ac,X,aR)}break;case o:aS.trigger("swipeRight",[aQ,ah,ac,X,aR]);if(aw.swipeRight){bd=aw.swipeRight.call(aS,bf,aQ,ah,ac,X,aR)}break;case e:aS.trigger("swipeUp",[aQ,ah,ac,X,aR]);if(aw.swipeUp){bd=aw.swipeUp.call(aS,bf,aQ,ah,ac,X,aR)}break;case x:aS.trigger("swipeDown",[aQ,ah,ac,X,aR]);if(aw.swipeDown){bd=aw.swipeDown.call(aS,bf,aQ,ah,ac,X,aR)}break}}}if(be==t){aS.trigger("pinchStatus",[bc,aK||null,ar||0,ac||0,X,H,aR]);if(aw.pinchStatus){bd=aw.pinchStatus.call(aS,bf,bc,aK||null,ar||0,ac||0,X,H,aR);if(bd===false){return false}}if(bc==h&&a9()){switch(aK){case c:aS.trigger("pinchIn",[aK||null,ar||0,ac||0,X,H,aR]);if(aw.pinchIn){bd=aw.pinchIn.call(aS,bf,aK||null,ar||0,ac||0,X,H,aR)}break;case A:aS.trigger("pinchOut",[aK||null,ar||0,ac||0,X,H,aR]);if(aw.pinchOut){bd=aw.pinchOut.call(aS,bf,aK||null,ar||0,ac||0,X,H,aR)}break}}}if(be==B){if(bc===q||bc===h){clearTimeout(aX);clearTimeout(ag);if(Z()&&!I()){O=au();aX=setTimeout(f.proxy(function(){O=null;aS.trigger("tap",[bf.target]);if(aw.tap){bd=aw.tap.call(aS,bf,bf.target)}},this),aw.doubleTapThreshold)}else{O=null;aS.trigger("tap",[bf.target]);if(aw.tap){bd=aw.tap.call(aS,bf,bf.target)}}}}else{if(be==j){if(bc===q||bc===h){clearTimeout(aX);O=null;aS.trigger("doubletap",[bf.target]);if(aw.doubleTap){bd=aw.doubleTap.call(aS,bf,bf.target)}}}else{if(be==b){if(bc===q||bc===h){clearTimeout(aX);O=null;aS.trigger("longtap",[bf.target]);if(aw.longTap){bd=aw.longTap.call(aS,bf,bf.target)}}}}}return bd}function ao(){var bc=true;if(aw.threshold!==null){bc=ah>=aw.threshold}return bc}function bb(){var bc=false;if(aw.cancelThreshold!==null&&aQ!==null){bc=(aU(aQ)-ah)>=aw.cancelThreshold}return bc}function af(){if(aw.pinchThreshold!==null){return ar>=aw.pinchThreshold}return true}function aB(){var bc;if(aw.maxTimeThreshold){if(ac>=aw.maxTimeThreshold){bc=false}else{bc=true}}else{bc=true}return bc}function am(bc,bd){if(aw.preventDefaultEvents===false){return}if(aw.allowPageScroll===m){bc.preventDefault()}else{var be=aw.allowPageScroll===s;switch(bd){case p:if((aw.swipeLeft&&be)||(!be&&aw.allowPageScroll!=E)){bc.preventDefault()}break;case o:if((aw.swipeRight&&be)||(!be&&aw.allowPageScroll!=E)){bc.preventDefault()}break;case e:if((aw.swipeUp&&be)||(!be&&aw.allowPageScroll!=u)){bc.preventDefault()}break;case x:if((aw.swipeDown&&be)||(!be&&aw.allowPageScroll!=u)){bc.preventDefault()}break}}}function a9(){var bd=aP();var bc=Y();var be=af();return bd&&bc&&be}function aY(){return !!(aw.pinchStatus||aw.pinchIn||aw.pinchOut)}function Q(){return !!(a9()&&aY())}function aW(){var bf=aB();var bh=ao();var be=aP();var bc=Y();var bd=bb();var bg=!bd&&bc&&be&&bh&&bf;return bg}function W(){return !!(aw.swipe||aw.swipeStatus||aw.swipeLeft||aw.swipeRight||aw.swipeUp||aw.swipeDown)}function J(){return !!(aW()&&W())}function aP(){return((X===aw.fingers||aw.fingers===i)||!a)}function Y(){return aR[0].end.x!==0}function a7(){return !!(aw.tap)}function Z(){return !!(aw.doubleTap)}function aV(){return !!(aw.longTap)}function R(){if(O==null){return false}var bc=au();return(Z()&&((bc-O)<=aw.doubleTapThreshold))}function I(){return R()}function ay(){return((X===1||!a)&&(isNaN(ah)||ah<aw.threshold))}function a1(){return((ac>aw.longTapThreshold)&&(ah<r))}function ai(){return !!(ay()&&a7())}function aH(){return !!(R()&&Z())}function aq(){return !!(a1()&&aV())}function G(){a6=au();ae=event.touches.length+1}function S(){a6=0;ae=0}function an(){var bc=false;if(a6){var bd=au()-a6;if(bd<=aw.fingerReleaseThreshold){bc=true}}return bc}function aC(){return !!(aS.data(C+"_intouch")===true)}function ap(bc){if(bc===true){aS.bind(az,a4);aS.bind(V,M);if(T){aS.bind(T,L)}}else{aS.unbind(az,a4,false);aS.unbind(V,M,false);if(T){aS.unbind(T,L,false)}}aS.data(C+"_intouch",bc===true)}function aj(bd,bc){var be=bc.identifier!==undefined?bc.identifier:0;aR[bd].identifier=be;aR[bd].start.x=aR[bd].end.x=bc.pageX||bc.clientX;aR[bd].start.y=aR[bd].end.y=bc.pageY||bc.clientY;return aR[bd]}function aI(bc){var be=bc.identifier!==undefined?bc.identifier:0;var bd=ad(be);bd.end.x=bc.pageX||bc.clientX;bd.end.y=bc.pageY||bc.clientY;return bd}function ad(bd){for(var bc=0;bc<aR.length;bc++){if(aR[bc].identifier==bd){return aR[bc]}}}function ak(){var bc=[];for(var bd=0;bd<=5;bd++){bc.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return bc}function aJ(bc,bd){bd=Math.max(bd,aU(bc));N[bc].distance=bd}function aU(bc){if(N[bc]){return N[bc].distance}return undefined}function ab(){var bc={};bc[p]=ax(p);bc[o]=ax(o);bc[e]=ax(e);bc[x]=ax(x);return bc}function ax(bc){return{direction:bc,distance:0}}function aN(){return a3-U}function av(bf,be){var bd=Math.abs(bf.x-be.x);var bc=Math.abs(bf.y-be.y);return Math.round(Math.sqrt(bd*bd+bc*bc))}function a8(bc,bd){var be=(bd/bc)*1;return be.toFixed(2)}function at(){if(H<1){return A}else{return c}}function aT(bd,bc){return Math.round(Math.sqrt(Math.pow(bc.x-bd.x,2)+Math.pow(bc.y-bd.y,2)))}function aF(bf,bd){var bc=bf.x-bd.x;var bh=bd.y-bf.y;var be=Math.atan2(bh,bc);var bg=Math.round(be*180/Math.PI);if(bg<0){bg=360-Math.abs(bg)}return bg}function aM(bd,bc){var be=aF(bd,bc);if((be<=45)&&(be>=0)){return p}else{if((be<=360)&&(be>=315)){return p}else{if((be>=135)&&(be<=225)){return o}else{if((be>45)&&(be<135)){return x}else{return e}}}}}function au(){var bc=new Date();return bc.getTime()}function aZ(bc){bc=f(bc);var be=bc.offset();var bd={left:be.left,right:be.left+bc.outerWidth(),top:be.top,bottom:be.top+bc.outerHeight()};return bd}function F(bc,bd){return(bc.x>bd.left&&bc.x<bd.right&&bc.y>bd.top&&bc.y<bd.bottom)}}}));

if(typeof(console) === 'undefined') {
    var console = {};
    console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = console.groupCollapsed = function() {};
}

if (window.tplogs==true)
	try {
		console.groupCollapsed("ThemePunch GreenSocks Logs");
	} catch(e) { }


var oldgs = window.GreenSockGlobals;
	oldgs_queue = window._gsQueue;
	
var punchgs = window.GreenSockGlobals = {};

if (window.tplogs==true)
	try {
		console.info("Build GreenSock SandBox for ThemePunch Plugins");
		console.info("GreenSock TweenLite Engine Initalised by ThemePunch Plugin");
	} catch(e) {}


/* TWEEN LITE */
/*!
 * VERSION: 1.19.1
 * DATE: 2017-01-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
!function(a,b){"use strict";var c={},d=a.document,e=a.GreenSockGlobals=a.GreenSockGlobals||a;if(!e.TweenLite){var f,g,h,i,j,k=function(a){var b,c=a.split("."),d=e;for(b=0;b<c.length;b++)d[c[b]]=d=d[c[b]]||{};return d},l=k("com.greensock"),m=1e-10,n=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},o=function(){},p=function(){var a=Object.prototype.toString,b=a.call([]);return function(c){return null!=c&&(c instanceof Array||"object"==typeof c&&!!c.push&&a.call(c)===b)}}(),q={},r=function(d,f,g,h){this.sc=q[d]?q[d].sc:[],q[d]=this,this.gsClass=null,this.func=g;var i=[];this.check=function(j){for(var l,m,n,o,p,s=f.length,t=s;--s>-1;)(l=q[f[s]]||new r(f[s],[])).gsClass?(i[s]=l.gsClass,t--):j&&l.sc.push(this);if(0===t&&g){if(m=("com.greensock."+d).split("."),n=m.pop(),o=k(m.join("."))[n]=this.gsClass=g.apply(g,i),h)if(e[n]=c[n]=o,p="undefined"!=typeof module&&module.exports,!p&&"function"==typeof define&&define.amd)define((a.GreenSockAMDPath?a.GreenSockAMDPath+"/":"")+d.split(".").pop(),[],function(){return o});else if(p)if(d===b){module.exports=c[b]=o;for(s in c)o[s]=c[s]}else c[b]&&(c[b][n]=o);for(s=0;s<this.sc.length;s++)this.sc[s].check()}},this.check(!0)},s=a._gsDefine=function(a,b,c,d){return new r(a,b,c,d)},t=l._class=function(a,b,c){return b=b||function(){},s(a,[],function(){return b},c),b};s.globals=e;var u=[0,0,1,1],v=t("easing.Ease",function(a,b,c,d){this._func=a,this._type=c||0,this._power=d||0,this._params=b?u.concat(b):u},!0),w=v.map={},x=v.register=function(a,b,c,d){for(var e,f,g,h,i=b.split(","),j=i.length,k=(c||"easeIn,easeOut,easeInOut").split(",");--j>-1;)for(f=i[j],e=d?t("easing."+f,null,!0):l.easing[f]||{},g=k.length;--g>-1;)h=k[g],w[f+"."+h]=w[h+f]=e[h]=a.getRatio?a:a[h]||new a};for(h=v.prototype,h._calcEnd=!1,h.getRatio=function(a){if(this._func)return this._params[0]=a,this._func.apply(null,this._params);var b=this._type,c=this._power,d=1===b?1-a:2===b?a:.5>a?2*a:2*(1-a);return 1===c?d*=d:2===c?d*=d*d:3===c?d*=d*d*d:4===c&&(d*=d*d*d*d),1===b?1-d:2===b?d:.5>a?d/2:1-d/2},f=["Linear","Quad","Cubic","Quart","Quint,Strong"],g=f.length;--g>-1;)h=f[g]+",Power"+g,x(new v(null,null,1,g),h,"easeOut",!0),x(new v(null,null,2,g),h,"easeIn"+(0===g?",easeNone":"")),x(new v(null,null,3,g),h,"easeInOut");w.linear=l.easing.Linear.easeIn,w.swing=l.easing.Quad.easeInOut;var y=t("events.EventDispatcher",function(a){this._listeners={},this._eventTarget=a||this});h=y.prototype,h.addEventListener=function(a,b,c,d,e){e=e||0;var f,g,h=this._listeners[a],k=0;for(this!==i||j||i.wake(),null==h&&(this._listeners[a]=h=[]),g=h.length;--g>-1;)f=h[g],f.c===b&&f.s===c?h.splice(g,1):0===k&&f.pr<e&&(k=g+1);h.splice(k,0,{c:b,s:c,up:d,pr:e})},h.removeEventListener=function(a,b){var c,d=this._listeners[a];if(d)for(c=d.length;--c>-1;)if(d[c].c===b)return void d.splice(c,1)},h.dispatchEvent=function(a){var b,c,d,e=this._listeners[a];if(e)for(b=e.length,b>1&&(e=e.slice(0)),c=this._eventTarget;--b>-1;)d=e[b],d&&(d.up?d.c.call(d.s||c,{type:a,target:c}):d.c.call(d.s||c))};var z=a.requestAnimationFrame,A=a.cancelAnimationFrame,B=Date.now||function(){return(new Date).getTime()},C=B();for(f=["ms","moz","webkit","o"],g=f.length;--g>-1&&!z;)z=a[f[g]+"RequestAnimationFrame"],A=a[f[g]+"CancelAnimationFrame"]||a[f[g]+"CancelRequestAnimationFrame"];t("Ticker",function(a,b){var c,e,f,g,h,k=this,l=B(),n=b!==!1&&z?"auto":!1,p=500,q=33,r="tick",s=function(a){var b,d,i=B()-C;i>p&&(l+=i-q),C+=i,k.time=(C-l)/1e3,b=k.time-h,(!c||b>0||a===!0)&&(k.frame++,h+=b+(b>=g?.004:g-b),d=!0),a!==!0&&(f=e(s)),d&&k.dispatchEvent(r)};y.call(k),k.time=k.frame=0,k.tick=function(){s(!0)},k.lagSmoothing=function(a,b){p=a||1/m,q=Math.min(b,p,0)},k.sleep=function(){null!=f&&(n&&A?A(f):clearTimeout(f),e=o,f=null,k===i&&(j=!1))},k.wake=function(a){null!==f?k.sleep():a?l+=-C+(C=B()):k.frame>10&&(C=B()-p+5),e=0===c?o:n&&z?z:function(a){return setTimeout(a,1e3*(h-k.time)+1|0)},k===i&&(j=!0),s(2)},k.fps=function(a){return arguments.length?(c=a,g=1/(c||60),h=this.time+g,void k.wake()):c},k.useRAF=function(a){return arguments.length?(k.sleep(),n=a,void k.fps(c)):n},k.fps(a),setTimeout(function(){"auto"===n&&k.frame<5&&"hidden"!==d.visibilityState&&k.useRAF(!1)},1500)}),h=l.Ticker.prototype=new l.events.EventDispatcher,h.constructor=l.Ticker;var D=t("core.Animation",function(a,b){if(this.vars=b=b||{},this._duration=this._totalDuration=a||0,this._delay=Number(b.delay)||0,this._timeScale=1,this._active=b.immediateRender===!0,this.data=b.data,this._reversed=b.reversed===!0,W){j||i.wake();var c=this.vars.useFrames?V:W;c.add(this,c._time),this.vars.paused&&this.paused(!0)}});i=D.ticker=new l.Ticker,h=D.prototype,h._dirty=h._gc=h._initted=h._paused=!1,h._totalTime=h._time=0,h._rawPrevTime=-1,h._next=h._last=h._onUpdate=h._timeline=h.timeline=null,h._paused=!1;var E=function(){j&&B()-C>2e3&&i.wake(),setTimeout(E,2e3)};E(),h.play=function(a,b){return null!=a&&this.seek(a,b),this.reversed(!1).paused(!1)},h.pause=function(a,b){return null!=a&&this.seek(a,b),this.paused(!0)},h.resume=function(a,b){return null!=a&&this.seek(a,b),this.paused(!1)},h.seek=function(a,b){return this.totalTime(Number(a),b!==!1)},h.restart=function(a,b){return this.reversed(!1).paused(!1).totalTime(a?-this._delay:0,b!==!1,!0)},h.reverse=function(a,b){return null!=a&&this.seek(a||this.totalDuration(),b),this.reversed(!0).paused(!1)},h.render=function(a,b,c){},h.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},h.isActive=function(){var a,b=this._timeline,c=this._startTime;return!b||!this._gc&&!this._paused&&b.isActive()&&(a=b.rawTime(!0))>=c&&a<c+this.totalDuration()/this._timeScale},h._enabled=function(a,b){return j||i.wake(),this._gc=!a,this._active=this.isActive(),b!==!0&&(a&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!a&&this.timeline&&this._timeline._remove(this,!0)),!1},h._kill=function(a,b){return this._enabled(!1,!1)},h.kill=function(a,b){return this._kill(a,b),this},h._uncache=function(a){for(var b=a?this:this.timeline;b;)b._dirty=!0,b=b.timeline;return this},h._swapSelfInParams=function(a){for(var b=a.length,c=a.concat();--b>-1;)"{self}"===a[b]&&(c[b]=this);return c},h._callback=function(a){var b=this.vars,c=b[a],d=b[a+"Params"],e=b[a+"Scope"]||b.callbackScope||this,f=d?d.length:0;switch(f){case 0:c.call(e);break;case 1:c.call(e,d[0]);break;case 2:c.call(e,d[0],d[1]);break;default:c.apply(e,d)}},h.eventCallback=function(a,b,c,d){if("on"===(a||"").substr(0,2)){var e=this.vars;if(1===arguments.length)return e[a];null==b?delete e[a]:(e[a]=b,e[a+"Params"]=p(c)&&-1!==c.join("").indexOf("{self}")?this._swapSelfInParams(c):c,e[a+"Scope"]=d),"onUpdate"===a&&(this._onUpdate=b)}return this},h.delay=function(a){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+a-this._delay),this._delay=a,this):this._delay},h.duration=function(a){return arguments.length?(this._duration=this._totalDuration=a,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==a&&this.totalTime(this._totalTime*(a/this._duration),!0),this):(this._dirty=!1,this._duration)},h.totalDuration=function(a){return this._dirty=!1,arguments.length?this.duration(a):this._totalDuration},h.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(a>this._duration?this._duration:a,b)):this._time},h.totalTime=function(a,b,c){if(j||i.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>a&&!c&&(a+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var d=this._totalDuration,e=this._timeline;if(a>d&&!c&&(a=d),this._startTime=(this._paused?this._pauseTime:e._time)-(this._reversed?d-a:a)/this._timeScale,e._dirty||this._uncache(!1),e._timeline)for(;e._timeline;)e._timeline._time!==(e._startTime+e._totalTime)/e._timeScale&&e.totalTime(e._totalTime,!0),e=e._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==a||0===this._duration)&&(J.length&&Y(),this.render(a,b,!1),J.length&&Y())}return this},h.progress=h.totalProgress=function(a,b){var c=this.duration();return arguments.length?this.totalTime(c*a,b):c?this._time/c:this.ratio},h.startTime=function(a){return arguments.length?(a!==this._startTime&&(this._startTime=a,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,a-this._delay)),this):this._startTime},h.endTime=function(a){return this._startTime+(0!=a?this.totalDuration():this.duration())/this._timeScale},h.timeScale=function(a){if(!arguments.length)return this._timeScale;if(a=a||m,this._timeline&&this._timeline.smoothChildTiming){var b=this._pauseTime,c=b||0===b?b:this._timeline.totalTime();this._startTime=c-(c-this._startTime)*this._timeScale/a}return this._timeScale=a,this._uncache(!1)},h.reversed=function(a){return arguments.length?(a!=this._reversed&&(this._reversed=a,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},h.paused=function(a){if(!arguments.length)return this._paused;var b,c,d=this._timeline;return a!=this._paused&&d&&(j||a||i.wake(),b=d.rawTime(),c=b-this._pauseTime,!a&&d.smoothChildTiming&&(this._startTime+=c,this._uncache(!1)),this._pauseTime=a?b:null,this._paused=a,this._active=this.isActive(),!a&&0!==c&&this._initted&&this.duration()&&(b=d.smoothChildTiming?this._totalTime:(b-this._startTime)/this._timeScale,this.render(b,b===this._totalTime,!0))),this._gc&&!a&&this._enabled(!0,!1),this};var F=t("core.SimpleTimeline",function(a){D.call(this,0,a),this.autoRemoveChildren=this.smoothChildTiming=!0});h=F.prototype=new D,h.constructor=F,h.kill()._gc=!1,h._first=h._last=h._recent=null,h._sortChildren=!1,h.add=h.insert=function(a,b,c,d){var e,f;if(a._startTime=Number(b||0)+a._delay,a._paused&&this!==a._timeline&&(a._pauseTime=a._startTime+(this.rawTime()-a._startTime)/a._timeScale),a.timeline&&a.timeline._remove(a,!0),a.timeline=a._timeline=this,a._gc&&a._enabled(!0,!0),e=this._last,this._sortChildren)for(f=a._startTime;e&&e._startTime>f;)e=e._prev;return e?(a._next=e._next,e._next=a):(a._next=this._first,this._first=a),a._next?a._next._prev=a:this._last=a,a._prev=e,this._recent=a,this._timeline&&this._uncache(!0),this},h._remove=function(a,b){return a.timeline===this&&(b||a._enabled(!1,!0),a._prev?a._prev._next=a._next:this._first===a&&(this._first=a._next),a._next?a._next._prev=a._prev:this._last===a&&(this._last=a._prev),a._next=a._prev=a.timeline=null,a===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},h.render=function(a,b,c){var d,e=this._first;for(this._totalTime=this._time=this._rawPrevTime=a;e;)d=e._next,(e._active||a>=e._startTime&&!e._paused)&&(e._reversed?e.render((e._dirty?e.totalDuration():e._totalDuration)-(a-e._startTime)*e._timeScale,b,c):e.render((a-e._startTime)*e._timeScale,b,c)),e=d},h.rawTime=function(){return j||i.wake(),this._totalTime};var G=t("TweenLite",function(b,c,d){if(D.call(this,c,d),this.render=G.prototype.render,null==b)throw"Cannot tween a null target.";this.target=b="string"!=typeof b?b:G.selector(b)||b;var e,f,g,h=b.jquery||b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType),i=this.vars.overwrite;if(this._overwrite=i=null==i?U[G.defaultOverwrite]:"number"==typeof i?i>>0:U[i],(h||b instanceof Array||b.push&&p(b))&&"number"!=typeof b[0])for(this._targets=g=n(b),this._propLookup=[],this._siblings=[],e=0;e<g.length;e++)f=g[e],f?"string"!=typeof f?f.length&&f!==a&&f[0]&&(f[0]===a||f[0].nodeType&&f[0].style&&!f.nodeType)?(g.splice(e--,1),this._targets=g=g.concat(n(f))):(this._siblings[e]=Z(f,this,!1),1===i&&this._siblings[e].length>1&&_(f,this,null,1,this._siblings[e])):(f=g[e--]=G.selector(f),"string"==typeof f&&g.splice(e+1,1)):g.splice(e--,1);else this._propLookup={},this._siblings=Z(b,this,!1),1===i&&this._siblings.length>1&&_(b,this,null,1,this._siblings);(this.vars.immediateRender||0===c&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-m,this.render(Math.min(0,-this._delay)))},!0),H=function(b){return b&&b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType)},I=function(a,b){var c,d={};for(c in a)T[c]||c in b&&"transform"!==c&&"x"!==c&&"y"!==c&&"width"!==c&&"height"!==c&&"className"!==c&&"border"!==c||!(!Q[c]||Q[c]&&Q[c]._autoCSS)||(d[c]=a[c],delete a[c]);a.css=d};h=G.prototype=new D,h.constructor=G,h.kill()._gc=!1,h.ratio=0,h._firstPT=h._targets=h._overwrittenProps=h._startAt=null,h._notifyPluginsOfEnabled=h._lazy=!1,G.version="1.19.1",G.defaultEase=h._ease=new v(null,null,1,1),G.defaultOverwrite="auto",G.ticker=i,G.autoSleep=120,G.lagSmoothing=function(a,b){i.lagSmoothing(a,b)},G.selector=a.$||a.jQuery||function(b){var c=a.$||a.jQuery;return c?(G.selector=c,c(b)):"undefined"==typeof d?b:d.querySelectorAll?d.querySelectorAll(b):d.getElementById("#"===b.charAt(0)?b.substr(1):b)};var J=[],K={},L=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,M=function(a){for(var b,c=this._firstPT,d=1e-6;c;)b=c.blob?1===a?this.end:a?this.join(""):this.start:c.c*a+c.s,c.m?b=c.m(b,this._target||c.t):d>b&&b>-d&&!c.blob&&(b=0),c.f?c.fp?c.t[c.p](c.fp,b):c.t[c.p](b):c.t[c.p]=b,c=c._next},N=function(a,b,c,d){var e,f,g,h,i,j,k,l=[],m=0,n="",o=0;for(l.start=a,l.end=b,a=l[0]=a+"",b=l[1]=b+"",c&&(c(l),a=l[0],b=l[1]),l.length=0,e=a.match(L)||[],f=b.match(L)||[],d&&(d._next=null,d.blob=1,l._firstPT=l._applyPT=d),i=f.length,h=0;i>h;h++)k=f[h],j=b.substr(m,b.indexOf(k,m)-m),n+=j||!h?j:",",m+=j.length,o?o=(o+1)%5:"rgba("===j.substr(-5)&&(o=1),k===e[h]||e.length<=h?n+=k:(n&&(l.push(n),n=""),g=parseFloat(e[h]),l.push(g),l._firstPT={_next:l._firstPT,t:l,p:l.length-1,s:g,c:("="===k.charAt(1)?parseInt(k.charAt(0)+"1",10)*parseFloat(k.substr(2)):parseFloat(k)-g)||0,f:0,m:o&&4>o?Math.round:0}),m+=k.length;return n+=b.substr(m),n&&l.push(n),l.setRatio=M,l},O=function(a,b,c,d,e,f,g,h,i){"function"==typeof d&&(d=d(i||0,a));var j,k=typeof a[b],l="function"!==k?"":b.indexOf("set")||"function"!=typeof a["get"+b.substr(3)]?b:"get"+b.substr(3),m="get"!==c?c:l?g?a[l](g):a[l]():a[b],n="string"==typeof d&&"="===d.charAt(1),o={t:a,p:b,s:m,f:"function"===k,pg:0,n:e||b,m:f?"function"==typeof f?f:Math.round:0,pr:0,c:n?parseInt(d.charAt(0)+"1",10)*parseFloat(d.substr(2)):parseFloat(d)-m||0};return("number"!=typeof m||"number"!=typeof d&&!n)&&(g||isNaN(m)||!n&&isNaN(d)||"boolean"==typeof m||"boolean"==typeof d?(o.fp=g,j=N(m,n?o.s+o.c:d,h||G.defaultStringFilter,o),o={t:j,p:"setRatio",s:0,c:1,f:2,pg:0,n:e||b,pr:0,m:0}):(o.s=parseFloat(m),n||(o.c=parseFloat(d)-o.s||0))),o.c?((o._next=this._firstPT)&&(o._next._prev=o),this._firstPT=o,o):void 0},P=G._internals={isArray:p,isSelector:H,lazyTweens:J,blobDif:N},Q=G._plugins={},R=P.tweenLookup={},S=0,T=P.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1,id:1},U={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},V=D._rootFramesTimeline=new F,W=D._rootTimeline=new F,X=30,Y=P.lazyRender=function(){var a,b=J.length;for(K={};--b>-1;)a=J[b],a&&a._lazy!==!1&&(a.render(a._lazy[0],a._lazy[1],!0),a._lazy=!1);J.length=0};W._startTime=i.time,V._startTime=i.frame,W._active=V._active=!0,setTimeout(Y,1),D._updateRoot=G.render=function(){var a,b,c;if(J.length&&Y(),W.render((i.time-W._startTime)*W._timeScale,!1,!1),V.render((i.frame-V._startTime)*V._timeScale,!1,!1),J.length&&Y(),i.frame>=X){X=i.frame+(parseInt(G.autoSleep,10)||120);for(c in R){for(b=R[c].tweens,a=b.length;--a>-1;)b[a]._gc&&b.splice(a,1);0===b.length&&delete R[c]}if(c=W._first,(!c||c._paused)&&G.autoSleep&&!V._first&&1===i._listeners.tick.length){for(;c&&c._paused;)c=c._next;c||i.sleep()}}},i.addEventListener("tick",D._updateRoot);var Z=function(a,b,c){var d,e,f=a._gsTweenID;if(R[f||(a._gsTweenID=f="t"+S++)]||(R[f]={target:a,tweens:[]}),b&&(d=R[f].tweens,d[e=d.length]=b,c))for(;--e>-1;)d[e]===b&&d.splice(e,1);return R[f].tweens},$=function(a,b,c,d){var e,f,g=a.vars.onOverwrite;return g&&(e=g(a,b,c,d)),g=G.onOverwrite,g&&(f=g(a,b,c,d)),e!==!1&&f!==!1},_=function(a,b,c,d,e){var f,g,h,i;if(1===d||d>=4){for(i=e.length,f=0;i>f;f++)if((h=e[f])!==b)h._gc||h._kill(null,a,b)&&(g=!0);else if(5===d)break;return g}var j,k=b._startTime+m,l=[],n=0,o=0===b._duration;for(f=e.length;--f>-1;)(h=e[f])===b||h._gc||h._paused||(h._timeline!==b._timeline?(j=j||aa(b,0,o),0===aa(h,j,o)&&(l[n++]=h)):h._startTime<=k&&h._startTime+h.totalDuration()/h._timeScale>k&&((o||!h._initted)&&k-h._startTime<=2e-10||(l[n++]=h)));for(f=n;--f>-1;)if(h=l[f],2===d&&h._kill(c,a,b)&&(g=!0),2!==d||!h._firstPT&&h._initted){if(2!==d&&!$(h,b))continue;h._enabled(!1,!1)&&(g=!0)}return g},aa=function(a,b,c){for(var d=a._timeline,e=d._timeScale,f=a._startTime;d._timeline;){if(f+=d._startTime,e*=d._timeScale,d._paused)return-100;d=d._timeline}return f/=e,f>b?f-b:c&&f===b||!a._initted&&2*m>f-b?m:(f+=a.totalDuration()/a._timeScale/e)>b+m?0:f-b-m};h._init=function(){var a,b,c,d,e,f,g=this.vars,h=this._overwrittenProps,i=this._duration,j=!!g.immediateRender,k=g.ease;if(g.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),e={};for(d in g.startAt)e[d]=g.startAt[d];if(e.overwrite=!1,e.immediateRender=!0,e.lazy=j&&g.lazy!==!1,e.startAt=e.delay=null,this._startAt=G.to(this.target,0,e),j)if(this._time>0)this._startAt=null;else if(0!==i)return}else if(g.runBackwards&&0!==i)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(j=!1),c={};for(d in g)T[d]&&"autoCSS"!==d||(c[d]=g[d]);if(c.overwrite=0,c.data="isFromStart",c.lazy=j&&g.lazy!==!1,c.immediateRender=j,this._startAt=G.to(this.target,0,c),j){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=k=k?k instanceof v?k:"function"==typeof k?new v(k,g.easeParams):w[k]||G.defaultEase:G.defaultEase,g.easeParams instanceof Array&&k.config&&(this._ease=k.config.apply(k,g.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(f=this._targets.length,a=0;f>a;a++)this._initProps(this._targets[a],this._propLookup[a]={},this._siblings[a],h?h[a]:null,a)&&(b=!0);else b=this._initProps(this.target,this._propLookup,this._siblings,h,0);if(b&&G._onPluginEvent("_onInitAllProps",this),h&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),g.runBackwards)for(c=this._firstPT;c;)c.s+=c.c,c.c=-c.c,c=c._next;this._onUpdate=g.onUpdate,this._initted=!0},h._initProps=function(b,c,d,e,f){var g,h,i,j,k,l;if(null==b)return!1;K[b._gsTweenID]&&Y(),this.vars.css||b.style&&b!==a&&b.nodeType&&Q.css&&this.vars.autoCSS!==!1&&I(this.vars,b);for(g in this.vars)if(l=this.vars[g],T[g])l&&(l instanceof Array||l.push&&p(l))&&-1!==l.join("").indexOf("{self}")&&(this.vars[g]=l=this._swapSelfInParams(l,this));else if(Q[g]&&(j=new Q[g])._onInitTween(b,this.vars[g],this,f)){for(this._firstPT=k={_next:this._firstPT,t:j,p:"setRatio",s:0,c:1,f:1,n:g,pg:1,pr:j._priority,m:0},h=j._overwriteProps.length;--h>-1;)c[j._overwriteProps[h]]=this._firstPT;(j._priority||j._onInitAllProps)&&(i=!0),(j._onDisable||j._onEnable)&&(this._notifyPluginsOfEnabled=!0),k._next&&(k._next._prev=k)}else c[g]=O.call(this,b,g,"get",l,g,0,null,this.vars.stringFilter,f);return e&&this._kill(e,b)?this._initProps(b,c,d,e,f):this._overwrite>1&&this._firstPT&&d.length>1&&_(b,this,c,this._overwrite,d)?(this._kill(c,b),this._initProps(b,c,d,e,f)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(K[b._gsTweenID]=!0),i)},h.render=function(a,b,c){var d,e,f,g,h=this._time,i=this._duration,j=this._rawPrevTime;if(a>=i-1e-7&&a>=0)this._totalTime=this._time=i,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(d=!0,e="onComplete",c=c||this._timeline.autoRemoveChildren),0===i&&(this._initted||!this.vars.lazy||c)&&(this._startTime===this._timeline._duration&&(a=0),(0>j||0>=a&&a>=-1e-7||j===m&&"isPause"!==this.data)&&j!==a&&(c=!0,j>m&&(e="onReverseComplete")),this._rawPrevTime=g=!b||a||j===a?a:m);else if(1e-7>a)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==h||0===i&&j>0)&&(e="onReverseComplete",d=this._reversed),0>a&&(this._active=!1,0===i&&(this._initted||!this.vars.lazy||c)&&(j>=0&&(j!==m||"isPause"!==this.data)&&(c=!0),this._rawPrevTime=g=!b||a||j===a?a:m)),this._initted||(c=!0);else if(this._totalTime=this._time=a,this._easeType){var k=a/i,l=this._easeType,n=this._easePower;(1===l||3===l&&k>=.5)&&(k=1-k),3===l&&(k*=2),1===n?k*=k:2===n?k*=k*k:3===n?k*=k*k*k:4===n&&(k*=k*k*k*k),1===l?this.ratio=1-k:2===l?this.ratio=k:.5>a/i?this.ratio=k/2:this.ratio=1-k/2}else this.ratio=this._ease.getRatio(a/i);if(this._time!==h||c){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!c&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=h,this._rawPrevTime=j,J.push(this),void(this._lazy=[a,b]);this._time&&!d?this.ratio=this._ease.getRatio(this._time/i):d&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==h&&a>=0&&(this._active=!0),0===h&&(this._startAt&&(a>=0?this._startAt.render(a,b,c):e||(e="_dummyGS")),this.vars.onStart&&(0!==this._time||0===i)&&(b||this._callback("onStart"))),f=this._firstPT;f;)f.f?f.t[f.p](f.c*this.ratio+f.s):f.t[f.p]=f.c*this.ratio+f.s,f=f._next;this._onUpdate&&(0>a&&this._startAt&&a!==-1e-4&&this._startAt.render(a,b,c),b||(this._time!==h||d||c)&&this._callback("onUpdate")),e&&(!this._gc||c)&&(0>a&&this._startAt&&!this._onUpdate&&a!==-1e-4&&this._startAt.render(a,b,c),d&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[e]&&this._callback(e),0===i&&this._rawPrevTime===m&&g!==m&&(this._rawPrevTime=0))}},h._kill=function(a,b,c){if("all"===a&&(a=null),null==a&&(null==b||b===this.target))return this._lazy=!1,this._enabled(!1,!1);b="string"!=typeof b?b||this._targets||this.target:G.selector(b)||b;var d,e,f,g,h,i,j,k,l,m=c&&this._time&&c._startTime===this._startTime&&this._timeline===c._timeline;if((p(b)||H(b))&&"number"!=typeof b[0])for(d=b.length;--d>-1;)this._kill(a,b[d],c)&&(i=!0);else{if(this._targets){for(d=this._targets.length;--d>-1;)if(b===this._targets[d]){h=this._propLookup[d]||{},this._overwrittenProps=this._overwrittenProps||[],e=this._overwrittenProps[d]=a?this._overwrittenProps[d]||{}:"all";break}}else{if(b!==this.target)return!1;h=this._propLookup,e=this._overwrittenProps=a?this._overwrittenProps||{}:"all"}if(h){if(j=a||h,k=a!==e&&"all"!==e&&a!==h&&("object"!=typeof a||!a._tempKill),c&&(G.onOverwrite||this.vars.onOverwrite)){for(f in j)h[f]&&(l||(l=[]),l.push(f));if((l||!a)&&!$(this,c,b,l))return!1}for(f in j)(g=h[f])&&(m&&(g.f?g.t[g.p](g.s):g.t[g.p]=g.s,i=!0),g.pg&&g.t._kill(j)&&(i=!0),g.pg&&0!==g.t._overwriteProps.length||(g._prev?g._prev._next=g._next:g===this._firstPT&&(this._firstPT=g._next),g._next&&(g._next._prev=g._prev),g._next=g._prev=null),delete h[f]),k&&(e[f]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return i},h.invalidate=function(){return this._notifyPluginsOfEnabled&&G._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],D.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-m,this.render(Math.min(0,-this._delay))),this},h._enabled=function(a,b){if(j||i.wake(),a&&this._gc){var c,d=this._targets;if(d)for(c=d.length;--c>-1;)this._siblings[c]=Z(d[c],this,!0);else this._siblings=Z(this.target,this,!0)}return D.prototype._enabled.call(this,a,b),this._notifyPluginsOfEnabled&&this._firstPT?G._onPluginEvent(a?"_onEnable":"_onDisable",this):!1},G.to=function(a,b,c){return new G(a,b,c)},G.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new G(a,b,c)},G.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new G(a,b,d)},G.delayedCall=function(a,b,c,d,e){return new G(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,lazy:!1,useFrames:e,overwrite:0})},G.set=function(a,b){return new G(a,0,b)},G.getTweensOf=function(a,b){if(null==a)return[];a="string"!=typeof a?a:G.selector(a)||a;var c,d,e,f;if((p(a)||H(a))&&"number"!=typeof a[0]){for(c=a.length,d=[];--c>-1;)d=d.concat(G.getTweensOf(a[c],b));for(c=d.length;--c>-1;)for(f=d[c],e=c;--e>-1;)f===d[e]&&d.splice(c,1)}else for(d=Z(a).concat(),c=d.length;--c>-1;)(d[c]._gc||b&&!d[c].isActive())&&d.splice(c,1);return d},G.killTweensOf=G.killDelayedCallsTo=function(a,b,c){"object"==typeof b&&(c=b,b=!1);for(var d=G.getTweensOf(a,b),e=d.length;--e>-1;)d[e]._kill(c,a)};var ba=t("plugins.TweenPlugin",function(a,b){this._overwriteProps=(a||"").split(","),this._propName=this._overwriteProps[0],this._priority=b||0,this._super=ba.prototype},!0);if(h=ba.prototype,ba.version="1.19.0",ba.API=2,h._firstPT=null,h._addTween=O,h.setRatio=M,h._kill=function(a){var b,c=this._overwriteProps,d=this._firstPT;if(null!=a[this._propName])this._overwriteProps=[];else for(b=c.length;--b>-1;)null!=a[c[b]]&&c.splice(b,1);for(;d;)null!=a[d.n]&&(d._next&&(d._next._prev=d._prev),d._prev?(d._prev._next=d._next,d._prev=null):this._firstPT===d&&(this._firstPT=d._next)),d=d._next;return!1},h._mod=h._roundProps=function(a){for(var b,c=this._firstPT;c;)b=a[this._propName]||null!=c.n&&a[c.n.split(this._propName+"_").join("")],b&&"function"==typeof b&&(2===c.f?c.t._applyPT.m=b:c.m=b),c=c._next},G._onPluginEvent=function(a,b){var c,d,e,f,g,h=b._firstPT;if("_onInitAllProps"===a){for(;h;){for(g=h._next,d=e;d&&d.pr>h.pr;)d=d._next;(h._prev=d?d._prev:f)?h._prev._next=h:e=h,(h._next=d)?d._prev=h:f=h,h=g}h=b._firstPT=e}for(;h;)h.pg&&"function"==typeof h.t[a]&&h.t[a]()&&(c=!0),h=h._next;return c},ba.activate=function(a){for(var b=a.length;--b>-1;)a[b].API===ba.API&&(Q[(new a[b])._propName]=a[b]);return!0},s.plugin=function(a){if(!(a&&a.propName&&a.init&&a.API))throw"illegal plugin definition.";var b,c=a.propName,d=a.priority||0,e=a.overwriteProps,f={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_mod",mod:"_mod",initAll:"_onInitAllProps"},g=t("plugins."+c.charAt(0).toUpperCase()+c.substr(1)+"Plugin",function(){ba.call(this,c,d),this._overwriteProps=e||[]},a.global===!0),h=g.prototype=new ba(c);h.constructor=g,g.API=a.API;for(b in f)"function"==typeof a[b]&&(h[f[b]]=a[b]);return g.version=a.version,ba.activate([g]),g},f=a._gsQueue){for(g=0;g<f.length;g++)f[g]();for(h in q)q[h].func||a.console.log("GSAP encountered missing dependency: "+h)}j=!1}}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenLite");
/* TIME LINE LITE */
/*!
 * VERSION: 1.17.0
 * DATE: 2015-05-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){e.call(this,t),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var i,s,r=this.vars;for(s in r)i=r[s],h(i)&&-1!==i.join("").indexOf("{self}")&&(r[s]=this._swapSelfInParams(i));h(r.tweens)&&this.add(r.tweens,0,r.align,r.stagger)},r=1e-10,n=i._internals,a=s._internals={},o=n.isSelector,h=n.isArray,l=n.lazyTweens,_=n.lazyRender,u=[],f=_gsScope._gsDefine.globals,c=function(t){var e,i={};for(e in t)i[e]=t[e];return i},p=a.pauseCallback=function(t,e,i,s){var n,a=t._timeline,o=a._totalTime,h=t._startTime,l=0>t._rawPrevTime||0===t._rawPrevTime&&a._reversed,_=l?0:r,f=l?r:0;if(e||!this._forcingPlayhead){for(a.pause(h),n=t._prev;n&&n._startTime===h;)n._rawPrevTime=f,n=n._prev;for(n=t._next;n&&n._startTime===h;)n._rawPrevTime=_,n=n._next;e&&e.apply(s||a.vars.callbackScope||a,i||u),(this._forcingPlayhead||!a._paused)&&a.seek(o)}},m=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},d=s.prototype=new e;return s.version="1.17.0",d.constructor=s,d.kill()._gc=d._forcingPlayhead=!1,d.to=function(t,e,s,r){var n=s.repeat&&f.TweenMax||i;return e?this.add(new n(t,e,s),r):this.set(t,s,r)},d.from=function(t,e,s,r){return this.add((s.repeat&&f.TweenMax||i).from(t,e,s),r)},d.fromTo=function(t,e,s,r,n){var a=r.repeat&&f.TweenMax||i;return e?this.add(a.fromTo(t,e,s,r),n):this.set(t,r,n)},d.staggerTo=function(t,e,r,n,a,h,l,_){var u,f=new s({onComplete:h,onCompleteParams:l,callbackScope:_,smoothChildTiming:this.smoothChildTiming});for("string"==typeof t&&(t=i.selector(t)||t),t=t||[],o(t)&&(t=m(t)),n=n||0,0>n&&(t=m(t),t.reverse(),n*=-1),u=0;t.length>u;u++)r.startAt&&(r.startAt=c(r.startAt)),f.to(t[u],e,c(r),u*n);return this.add(f,a)},d.staggerFrom=function(t,e,i,s,r,n,a,o){return i.immediateRender=0!=i.immediateRender,i.runBackwards=!0,this.staggerTo(t,e,i,s,r,n,a,o)},d.staggerFromTo=function(t,e,i,s,r,n,a,o,h){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,this.staggerTo(t,e,s,r,n,a,o,h)},d.call=function(t,e,s,r){return this.add(i.delayedCall(0,t,e,s),r)},d.set=function(t,e,s){return s=this._parseTimeOrLabel(s,0,!0),null==e.immediateRender&&(e.immediateRender=s===this._time&&!this._paused),this.add(new i(t,0,e),s)},s.exportRoot=function(t,e){t=t||{},null==t.smoothChildTiming&&(t.smoothChildTiming=!0);var r,n,a=new s(t),o=a._timeline;for(null==e&&(e=!0),o._remove(a,!0),a._startTime=0,a._rawPrevTime=a._time=a._totalTime=o._time,r=o._first;r;)n=r._next,e&&r instanceof i&&r.target===r.vars.onComplete||a.add(r,r._startTime-r._delay),r=n;return o.add(a,0),a},d.add=function(r,n,a,o){var l,_,u,f,c,p;if("number"!=typeof n&&(n=this._parseTimeOrLabel(n,0,!0,r)),!(r instanceof t)){if(r instanceof Array||r&&r.push&&h(r)){for(a=a||"normal",o=o||0,l=n,_=r.length,u=0;_>u;u++)h(f=r[u])&&(f=new s({tweens:f})),this.add(f,l),"string"!=typeof f&&"function"!=typeof f&&("sequence"===a?l=f._startTime+f.totalDuration()/f._timeScale:"start"===a&&(f._startTime-=f.delay())),l+=o;return this._uncache(!0)}if("string"==typeof r)return this.addLabel(r,n);if("function"!=typeof r)throw"Cannot add "+r+" into the timeline; it is not a tween, timeline, function, or string.";r=i.delayedCall(0,r)}if(e.prototype.add.call(this,r,n),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(c=this,p=c.rawTime()>r._startTime;c._timeline;)p&&c._timeline.smoothChildTiming?c.totalTime(c._totalTime,!0):c._gc&&c._enabled(!0,!1),c=c._timeline;return this},d.remove=function(e){if(e instanceof t)return this._remove(e,!1);if(e instanceof Array||e&&e.push&&h(e)){for(var i=e.length;--i>-1;)this.remove(e[i]);return this}return"string"==typeof e?this.removeLabel(e):this.kill(null,e)},d._remove=function(t,i){e.prototype._remove.call(this,t,i);var s=this._last;return s?this._time>s._startTime+s._totalDuration/s._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},d.append=function(t,e){return this.add(t,this._parseTimeOrLabel(null,e,!0,t))},d.insert=d.insertMultiple=function(t,e,i,s){return this.add(t,e||0,i,s)},d.appendMultiple=function(t,e,i,s){return this.add(t,this._parseTimeOrLabel(null,e,!0,t),i,s)},d.addLabel=function(t,e){return this._labels[t]=this._parseTimeOrLabel(e),this},d.addPause=function(t,e,s,r){var n=i.delayedCall(0,p,["{self}",e,s,r],this);return n.data="isPause",this.add(n,t)},d.removeLabel=function(t){return delete this._labels[t],this},d.getLabelTime=function(t){return null!=this._labels[t]?this._labels[t]:-1},d._parseTimeOrLabel=function(e,i,s,r){var n;if(r instanceof t&&r.timeline===this)this.remove(r);else if(r&&(r instanceof Array||r.push&&h(r)))for(n=r.length;--n>-1;)r[n]instanceof t&&r[n].timeline===this&&this.remove(r[n]);if("string"==typeof i)return this._parseTimeOrLabel(i,s&&"number"==typeof e&&null==this._labels[i]?e-this.duration():0,s);if(i=i||0,"string"!=typeof e||!isNaN(e)&&null==this._labels[e])null==e&&(e=this.duration());else{if(n=e.indexOf("="),-1===n)return null==this._labels[e]?s?this._labels[e]=this.duration()+i:i:this._labels[e]+i;i=parseInt(e.charAt(n-1)+"1",10)*Number(e.substr(n+1)),e=n>1?this._parseTimeOrLabel(e.substr(0,n-1),0,s):this.duration()}return Number(e)+i},d.seek=function(t,e){return this.totalTime("number"==typeof t?t:this._parseTimeOrLabel(t),e!==!1)},d.stop=function(){return this.paused(!0)},d.gotoAndPlay=function(t,e){return this.play(t,e)},d.gotoAndStop=function(t,e){return this.pause(t,e)},d.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,n,a,o,h,u=this._dirty?this.totalDuration():this._totalDuration,f=this._time,c=this._startTime,p=this._timeScale,m=this._paused;if(t>=u)this._totalTime=this._time=u,this._reversed||this._hasPausedChild()||(n=!0,o="onComplete",h=!!this._timeline.autoRemoveChildren,0===this._duration&&(0===t||0>this._rawPrevTime||this._rawPrevTime===r)&&this._rawPrevTime!==t&&this._first&&(h=!0,this._rawPrevTime>r&&(o="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,t=u+1e-4;else if(1e-7>t)if(this._totalTime=this._time=0,(0!==f||0===this._duration&&this._rawPrevTime!==r&&(this._rawPrevTime>0||0>t&&this._rawPrevTime>=0))&&(o="onReverseComplete",n=this._reversed),0>t)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(h=n=!0,o="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(h=!0),this._rawPrevTime=t;else{if(this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,0===t&&n)for(s=this._first;s&&0===s._startTime;)s._duration||(n=!1),s=s._next;t=0,this._initted||(h=!0)}else this._totalTime=this._time=this._rawPrevTime=t;if(this._time!==f&&this._first||i||h){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==f&&t>0&&(this._active=!0),0===f&&this.vars.onStart&&0!==this._time&&(e||this._callback("onStart")),this._time>=f)for(s=this._first;s&&(a=s._next,!this._paused||m);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;else for(s=this._last;s&&(a=s._prev,!this._paused||m);)(s._active||f>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;this._onUpdate&&(e||(l.length&&_(),this._callback("onUpdate"))),o&&(this._gc||(c===this._startTime||p!==this._timeScale)&&(0===this._time||u>=this.totalDuration())&&(n&&(l.length&&_(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[o]&&this._callback(o)))}},d._hasPausedChild=function(){for(var t=this._first;t;){if(t._paused||t instanceof s&&t._hasPausedChild())return!0;t=t._next}return!1},d.getChildren=function(t,e,s,r){r=r||-9999999999;for(var n=[],a=this._first,o=0;a;)r>a._startTime||(a instanceof i?e!==!1&&(n[o++]=a):(s!==!1&&(n[o++]=a),t!==!1&&(n=n.concat(a.getChildren(!0,e,s)),o=n.length))),a=a._next;return n},d.getTweensOf=function(t,e){var s,r,n=this._gc,a=[],o=0;for(n&&this._enabled(!0,!0),s=i.getTweensOf(t),r=s.length;--r>-1;)(s[r].timeline===this||e&&this._contains(s[r]))&&(a[o++]=s[r]);return n&&this._enabled(!1,!0),a},d.recent=function(){return this._recent},d._contains=function(t){for(var e=t.timeline;e;){if(e===this)return!0;e=e.timeline}return!1},d.shiftChildren=function(t,e,i){i=i||0;for(var s,r=this._first,n=this._labels;r;)r._startTime>=i&&(r._startTime+=t),r=r._next;if(e)for(s in n)n[s]>=i&&(n[s]+=t);return this._uncache(!0)},d._kill=function(t,e){if(!t&&!e)return this._enabled(!1,!1);for(var i=e?this.getTweensOf(e):this.getChildren(!0,!0,!1),s=i.length,r=!1;--s>-1;)i[s]._kill(t,e)&&(r=!0);return r},d.clear=function(t){var e=this.getChildren(!1,!0,!0),i=e.length;for(this._time=this._totalTime=0;--i>-1;)e[i]._enabled(!1,!1);return t!==!1&&(this._labels={}),this._uncache(!0)},d.invalidate=function(){for(var e=this._first;e;)e.invalidate(),e=e._next;return t.prototype.invalidate.call(this)},d._enabled=function(t,i){if(t===this._gc)for(var s=this._first;s;)s._enabled(t,!0),s=s._next;return e.prototype._enabled.call(this,t,i)},d.totalTime=function(){this._forcingPlayhead=!0;var e=t.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},d.duration=function(t){return arguments.length?(0!==this.duration()&&0!==t&&this.timeScale(this._duration/t),this):(this._dirty&&this.totalDuration(),this._duration)},d.totalDuration=function(t){if(!arguments.length){if(this._dirty){for(var e,i,s=0,r=this._last,n=999999999999;r;)e=r._prev,r._dirty&&r.totalDuration(),r._startTime>n&&this._sortChildren&&!r._paused?this.add(r,r._startTime-r._delay):n=r._startTime,0>r._startTime&&!r._paused&&(s-=r._startTime,this._timeline.smoothChildTiming&&(this._startTime+=r._startTime/this._timeScale),this.shiftChildren(-r._startTime,!1,-9999999999),n=0),i=r._startTime+r._totalDuration/r._timeScale,i>s&&(s=i),r=e;this._duration=this._totalDuration=s,this._dirty=!1}return this._totalDuration}return 0!==this.totalDuration()&&0!==t&&this.timeScale(this._totalDuration/t),this},d.paused=function(e){if(!e)for(var i=this._first,s=this._time;i;)i._startTime===s&&"isPause"===i.data&&(i._rawPrevTime=0),i=i._next;return t.prototype.paused.apply(this,arguments)},d.usesFrames=function(){for(var e=this._timeline;e._timeline;)e=e._timeline;return e===t._rootFramesTimeline},d.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},s},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t){"use strict";var e=function(){return(_gsScope.GreenSockGlobals||_gsScope)[t]};"function"==typeof define&&define.amd?define(["TweenLite"],e):"undefined"!=typeof module&&module.exports&&(require("./TweenLite.js"),module.exports=e())}("TimelineLite");


/* EASING PLUGIN*/
/*!
 * VERSION: 1.15.5
 * DATE: 2016-07-08
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("easing.Back",["easing.Ease"],function(a){var b,c,d,e=_gsScope.GreenSockGlobals||_gsScope,f=e.com.greensock,g=2*Math.PI,h=Math.PI/2,i=f._class,j=function(b,c){var d=i("easing."+b,function(){},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,d},k=a.register||function(){},l=function(a,b,c,d,e){var f=i("easing."+a,{easeOut:new b,easeIn:new c,easeInOut:new d},!0);return k(f,a),f},m=function(a,b,c){this.t=a,this.v=b,c&&(this.next=c,c.prev=this,this.c=c.v-b,this.gap=c.t-a)},n=function(b,c){var d=i("easing."+b,function(a){this._p1=a||0===a?a:1.70158,this._p2=1.525*this._p1},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,e.config=function(a){return new d(a)},d},o=l("Back",n("BackOut",function(a){return(a-=1)*a*((this._p1+1)*a+this._p1)+1}),n("BackIn",function(a){return a*a*((this._p1+1)*a-this._p1)}),n("BackInOut",function(a){return(a*=2)<1?.5*a*a*((this._p2+1)*a-this._p2):.5*((a-=2)*a*((this._p2+1)*a+this._p2)+2)})),p=i("easing.SlowMo",function(a,b,c){b=b||0===b?b:.7,null==a?a=.7:a>1&&(a=1),this._p=1!==a?b:0,this._p1=(1-a)/2,this._p2=a,this._p3=this._p1+this._p2,this._calcEnd=c===!0},!0),q=p.prototype=new a;return q.constructor=p,q.getRatio=function(a){var b=a+(.5-a)*this._p;return a<this._p1?this._calcEnd?1-(a=1-a/this._p1)*a:b-(a=1-a/this._p1)*a*a*a*b:a>this._p3?this._calcEnd?1-(a=(a-this._p3)/this._p1)*a:b+(a-b)*(a=(a-this._p3)/this._p1)*a*a*a:this._calcEnd?1:b},p.ease=new p(.7,.7),q.config=p.config=function(a,b,c){return new p(a,b,c)},b=i("easing.SteppedEase",function(a){a=a||1,this._p1=1/a,this._p2=a+1},!0),q=b.prototype=new a,q.constructor=b,q.getRatio=function(a){return 0>a?a=0:a>=1&&(a=.999999999),(this._p2*a>>0)*this._p1},q.config=b.config=function(a){return new b(a)},c=i("easing.RoughEase",function(b){b=b||{};for(var c,d,e,f,g,h,i=b.taper||"none",j=[],k=0,l=0|(b.points||20),n=l,o=b.randomize!==!1,p=b.clamp===!0,q=b.template instanceof a?b.template:null,r="number"==typeof b.strength?.4*b.strength:.4;--n>-1;)c=o?Math.random():1/l*n,d=q?q.getRatio(c):c,"none"===i?e=r:"out"===i?(f=1-c,e=f*f*r):"in"===i?e=c*c*r:.5>c?(f=2*c,e=f*f*.5*r):(f=2*(1-c),e=f*f*.5*r),o?d+=Math.random()*e-.5*e:n%2?d+=.5*e:d-=.5*e,p&&(d>1?d=1:0>d&&(d=0)),j[k++]={x:c,y:d};for(j.sort(function(a,b){return a.x-b.x}),h=new m(1,1,null),n=l;--n>-1;)g=j[n],h=new m(g.x,g.y,h);this._prev=new m(0,0,0!==h.t?h:h.next)},!0),q=c.prototype=new a,q.constructor=c,q.getRatio=function(a){var b=this._prev;if(a>b.t){for(;b.next&&a>=b.t;)b=b.next;b=b.prev}else for(;b.prev&&a<=b.t;)b=b.prev;return this._prev=b,b.v+(a-b.t)/b.gap*b.c},q.config=function(a){return new c(a)},c.ease=new c,l("Bounce",j("BounceOut",function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375}),j("BounceIn",function(a){return(a=1-a)<1/2.75?1-7.5625*a*a:2/2.75>a?1-(7.5625*(a-=1.5/2.75)*a+.75):2.5/2.75>a?1-(7.5625*(a-=2.25/2.75)*a+.9375):1-(7.5625*(a-=2.625/2.75)*a+.984375)}),j("BounceInOut",function(a){var b=.5>a;return a=b?1-2*a:2*a-1,a=1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375,b?.5*(1-a):.5*a+.5})),l("Circ",j("CircOut",function(a){return Math.sqrt(1-(a-=1)*a)}),j("CircIn",function(a){return-(Math.sqrt(1-a*a)-1)}),j("CircInOut",function(a){return(a*=2)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)})),d=function(b,c,d){var e=i("easing."+b,function(a,b){this._p1=a>=1?a:1,this._p2=(b||d)/(1>a?a:1),this._p3=this._p2/g*(Math.asin(1/this._p1)||0),this._p2=g/this._p2},!0),f=e.prototype=new a;return f.constructor=e,f.getRatio=c,f.config=function(a,b){return new e(a,b)},e},l("Elastic",d("ElasticOut",function(a){return this._p1*Math.pow(2,-10*a)*Math.sin((a-this._p3)*this._p2)+1},.3),d("ElasticIn",function(a){return-(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2))},.3),d("ElasticInOut",function(a){return(a*=2)<1?-.5*(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2)):this._p1*Math.pow(2,-10*(a-=1))*Math.sin((a-this._p3)*this._p2)*.5+1},.45)),l("Expo",j("ExpoOut",function(a){return 1-Math.pow(2,-10*a)}),j("ExpoIn",function(a){return Math.pow(2,10*(a-1))-.001}),j("ExpoInOut",function(a){return(a*=2)<1?.5*Math.pow(2,10*(a-1)):.5*(2-Math.pow(2,-10*(a-1)))})),l("Sine",j("SineOut",function(a){return Math.sin(a*h)}),j("SineIn",function(a){return-Math.cos(a*h)+1}),j("SineInOut",function(a){return-.5*(Math.cos(Math.PI*a)-1)})),i("easing.EaseLookup",{find:function(b){return a.map[b]}},!0),k(e.SlowMo,"SlowMo","ease,"),k(c,"RoughEase","ease,"),k(b,"SteppedEase","ease,"),o},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(){"use strict";var a=function(){return _gsScope.GreenSockGlobals||_gsScope};"function"==typeof define&&define.amd?define(["TweenLite"],a):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),module.exports=a())}();


/* CSS PLUGIN */
/*!
 * VERSION: 1.19.1
 * DATE: 2017-01-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(a,b){var c,d,e,f,g=function(){a.call(this,"css"),this._overwriteProps.length=0,this.setRatio=g.prototype.setRatio},h=_gsScope._gsDefine.globals,i={},j=g.prototype=new a("css");j.constructor=g,g.version="1.19.1",g.API=2,g.defaultTransformPerspective=0,g.defaultSkewType="compensated",g.defaultSmoothOrigin=!0,j="px",g.suffixMap={top:j,right:j,bottom:j,left:j,width:j,height:j,fontSize:j,padding:j,margin:j,perspective:j,lineHeight:""};var k,l,m,n,o,p,q,r,s=/(?:\-|\.|\b)(\d|\.|e\-)+/g,t=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,u=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,w=/(?:\d|\-|\+|=|#|\.)*/g,x=/opacity *= *([^)]*)/i,y=/opacity:([^;]*)/i,z=/alpha\(opacity *=.+?\)/i,A=/^(rgb|hsl)/,B=/([A-Z])/g,C=/-([a-z])/gi,D=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,E=function(a,b){return b.toUpperCase()},F=/(?:Left|Right|Width)/i,G=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,H=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,I=/,(?=[^\)]*(?:\(|$))/gi,J=/[\s,\(]/i,K=Math.PI/180,L=180/Math.PI,M={},N={style:{}},O=_gsScope.document||{createElement:function(){return N}},P=function(a,b){return O.createElementNS?O.createElementNS(b||"http://www.w3.org/1999/xhtml",a):O.createElement(a)},Q=P("div"),R=P("img"),S=g._internals={_specialProps:i},T=(_gsScope.navigator||{}).userAgent||"",U=function(){var a=T.indexOf("Android"),b=P("a");return m=-1!==T.indexOf("Safari")&&-1===T.indexOf("Chrome")&&(-1===a||parseFloat(T.substr(a+8,2))>3),o=m&&parseFloat(T.substr(T.indexOf("Version/")+8,2))<6,n=-1!==T.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T))&&(p=parseFloat(RegExp.$1)),b?(b.style.cssText="top:1px;opacity:.55;",/^0.55/.test(b.style.opacity)):!1}(),V=function(a){return x.test("string"==typeof a?a:(a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100:1},W=function(a){_gsScope.console&&console.log(a)},X="",Y="",Z=function(a,b){b=b||Q;var c,d,e=b.style;if(void 0!==e[a])return a;for(a=a.charAt(0).toUpperCase()+a.substr(1),c=["O","Moz","ms","Ms","Webkit"],d=5;--d>-1&&void 0===e[c[d]+a];);return d>=0?(Y=3===d?"ms":c[d],X="-"+Y.toLowerCase()+"-",Y+a):null},$=O.defaultView?O.defaultView.getComputedStyle:function(){},_=g.getStyle=function(a,b,c,d,e){var f;return U||"opacity"!==b?(!d&&a.style[b]?f=a.style[b]:(c=c||$(a))?f=c[b]||c.getPropertyValue(b)||c.getPropertyValue(b.replace(B,"-$1").toLowerCase()):a.currentStyle&&(f=a.currentStyle[b]),null==e||f&&"none"!==f&&"auto"!==f&&"auto auto"!==f?f:e):V(a)},aa=S.convertToPixels=function(a,c,d,e,f){if("px"===e||!e)return d;if("auto"===e||!d)return 0;var h,i,j,k=F.test(c),l=a,m=Q.style,n=0>d,o=1===d;if(n&&(d=-d),o&&(d*=100),"%"===e&&-1!==c.indexOf("border"))h=d/100*(k?a.clientWidth:a.clientHeight);else{if(m.cssText="border:0 solid red;position:"+_(a,"position")+";line-height:0;","%"!==e&&l.appendChild&&"v"!==e.charAt(0)&&"rem"!==e)m[k?"borderLeftWidth":"borderTopWidth"]=d+e;else{if(l=a.parentNode||O.body,i=l._gsCache,j=b.ticker.frame,i&&k&&i.time===j)return i.width*d/100;m[k?"width":"height"]=d+e}l.appendChild(Q),h=parseFloat(Q[k?"offsetWidth":"offsetHeight"]),l.removeChild(Q),k&&"%"===e&&g.cacheWidths!==!1&&(i=l._gsCache=l._gsCache||{},i.time=j,i.width=h/d*100),0!==h||f||(h=aa(a,c,d,e,!0))}return o&&(h/=100),n?-h:h},ba=S.calculateOffset=function(a,b,c){if("absolute"!==_(a,"position",c))return 0;var d="left"===b?"Left":"Top",e=_(a,"margin"+d,c);return a["offset"+d]-(aa(a,b,parseFloat(e),e.replace(w,""))||0)},ca=function(a,b){var c,d,e,f={};if(b=b||$(a,null))if(c=b.length)for(;--c>-1;)e=b[c],(-1===e.indexOf("-transform")||Da===e)&&(f[e.replace(C,E)]=b.getPropertyValue(e));else for(c in b)(-1===c.indexOf("Transform")||Ca===c)&&(f[c]=b[c]);else if(b=a.currentStyle||a.style)for(c in b)"string"==typeof c&&void 0===f[c]&&(f[c.replace(C,E)]=b[c]);return U||(f.opacity=V(a)),d=Ra(a,b,!1),f.rotation=d.rotation,f.skewX=d.skewX,f.scaleX=d.scaleX,f.scaleY=d.scaleY,f.x=d.x,f.y=d.y,Fa&&(f.z=d.z,f.rotationX=d.rotationX,f.rotationY=d.rotationY,f.scaleZ=d.scaleZ),f.filters&&delete f.filters,f},da=function(a,b,c,d,e){var f,g,h,i={},j=a.style;for(g in c)"cssText"!==g&&"length"!==g&&isNaN(g)&&(b[g]!==(f=c[g])||e&&e[g])&&-1===g.indexOf("Origin")&&("number"==typeof f||"string"==typeof f)&&(i[g]="auto"!==f||"left"!==g&&"top"!==g?""!==f&&"auto"!==f&&"none"!==f||"string"!=typeof b[g]||""===b[g].replace(v,"")?f:0:ba(a,g),void 0!==j[g]&&(h=new sa(j,g,j[g],h)));if(d)for(g in d)"className"!==g&&(i[g]=d[g]);return{difs:i,firstMPT:h}},ea={width:["Left","Right"],height:["Top","Bottom"]},fa=["marginLeft","marginRight","marginTop","marginBottom"],ga=function(a,b,c){if("svg"===(a.nodeName+"").toLowerCase())return(c||$(a))[b]||0;if(a.getCTM&&Oa(a))return a.getBBox()[b]||0;var d=parseFloat("width"===b?a.offsetWidth:a.offsetHeight),e=ea[b],f=e.length;for(c=c||$(a,null);--f>-1;)d-=parseFloat(_(a,"padding"+e[f],c,!0))||0,d-=parseFloat(_(a,"border"+e[f]+"Width",c,!0))||0;return d},ha=function(a,b){if("contain"===a||"auto"===a||"auto auto"===a)return a+" ";(null==a||""===a)&&(a="0 0");var c,d=a.split(" "),e=-1!==a.indexOf("left")?"0%":-1!==a.indexOf("right")?"100%":d[0],f=-1!==a.indexOf("top")?"0%":-1!==a.indexOf("bottom")?"100%":d[1];if(d.length>3&&!b){for(d=a.split(", ").join(",").split(","),a=[],c=0;c<d.length;c++)a.push(ha(d[c]));return a.join(",")}return null==f?f="center"===e?"50%":"0":"center"===f&&(f="50%"),("center"===e||isNaN(parseFloat(e))&&-1===(e+"").indexOf("="))&&(e="50%"),a=e+" "+f+(d.length>2?" "+d[2]:""),b&&(b.oxp=-1!==e.indexOf("%"),b.oyp=-1!==f.indexOf("%"),b.oxr="="===e.charAt(1),b.oyr="="===f.charAt(1),b.ox=parseFloat(e.replace(v,"")),b.oy=parseFloat(f.replace(v,"")),b.v=a),b||a},ia=function(a,b){return"function"==typeof a&&(a=a(r,q)),"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2)):parseFloat(a)-parseFloat(b)||0},ja=function(a,b){return"function"==typeof a&&(a=a(r,q)),null==a?b:"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2))+b:parseFloat(a)||0},ka=function(a,b,c,d){var e,f,g,h,i,j=1e-6;return"function"==typeof a&&(a=a(r,q)),null==a?h=b:"number"==typeof a?h=a:(e=360,f=a.split("_"),i="="===a.charAt(1),g=(i?parseInt(a.charAt(0)+"1",10)*parseFloat(f[0].substr(2)):parseFloat(f[0]))*(-1===a.indexOf("rad")?1:L)-(i?0:b),f.length&&(d&&(d[c]=b+g),-1!==a.indexOf("short")&&(g%=e,g!==g%(e/2)&&(g=0>g?g+e:g-e)),-1!==a.indexOf("_cw")&&0>g?g=(g+9999999999*e)%e-(g/e|0)*e:-1!==a.indexOf("ccw")&&g>0&&(g=(g-9999999999*e)%e-(g/e|0)*e)),h=b+g),j>h&&h>-j&&(h=0),h},la={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ma=function(a,b,c){return a=0>a?a+1:a>1?a-1:a,255*(1>6*a?b+(c-b)*a*6:.5>a?c:2>3*a?b+(c-b)*(2/3-a)*6:b)+.5|0},na=g.parseColor=function(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(a)if("number"==typeof a)c=[a>>16,a>>8&255,255&a];else{if(","===a.charAt(a.length-1)&&(a=a.substr(0,a.length-1)),la[a])c=la[a];else if("#"===a.charAt(0))4===a.length&&(d=a.charAt(1),e=a.charAt(2),f=a.charAt(3),a="#"+d+d+e+e+f+f),a=parseInt(a.substr(1),16),c=[a>>16,a>>8&255,255&a];else if("hsl"===a.substr(0,3))if(c=m=a.match(s),b){if(-1!==a.indexOf("="))return a.match(t)}else g=Number(c[0])%360/360,h=Number(c[1])/100,i=Number(c[2])/100,e=.5>=i?i*(h+1):i+h-i*h,d=2*i-e,c.length>3&&(c[3]=Number(a[3])),c[0]=ma(g+1/3,d,e),c[1]=ma(g,d,e),c[2]=ma(g-1/3,d,e);else c=a.match(s)||la.transparent;c[0]=Number(c[0]),c[1]=Number(c[1]),c[2]=Number(c[2]),c.length>3&&(c[3]=Number(c[3]))}else c=la.black;return b&&!m&&(d=c[0]/255,e=c[1]/255,f=c[2]/255,j=Math.max(d,e,f),k=Math.min(d,e,f),i=(j+k)/2,j===k?g=h=0:(l=j-k,h=i>.5?l/(2-j-k):l/(j+k),g=j===d?(e-f)/l+(f>e?6:0):j===e?(f-d)/l+2:(d-e)/l+4,g*=60),c[0]=g+.5|0,c[1]=100*h+.5|0,c[2]=100*i+.5|0),c},oa=function(a,b){var c,d,e,f=a.match(pa)||[],g=0,h=f.length?"":a;for(c=0;c<f.length;c++)d=f[c],e=a.substr(g,a.indexOf(d,g)-g),g+=e.length+d.length,d=na(d,b),3===d.length&&d.push(1),h+=e+(b?"hsla("+d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:"rgba("+d.join(","))+")";return h+a.substr(g)},pa="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(j in la)pa+="|"+j+"\\b";pa=new RegExp(pa+")","gi"),g.colorStringFilter=function(a){var b,c=a[0]+a[1];pa.test(c)&&(b=-1!==c.indexOf("hsl(")||-1!==c.indexOf("hsla("),a[0]=oa(a[0],b),a[1]=oa(a[1],b)),pa.lastIndex=0},b.defaultStringFilter||(b.defaultStringFilter=g.colorStringFilter);var qa=function(a,b,c,d){if(null==a)return function(a){return a};var e,f=b?(a.match(pa)||[""])[0]:"",g=a.split(f).join("").match(u)||[],h=a.substr(0,a.indexOf(g[0])),i=")"===a.charAt(a.length-1)?")":"",j=-1!==a.indexOf(" ")?" ":",",k=g.length,l=k>0?g[0].replace(s,""):"";return k?e=b?function(a){var b,m,n,o;if("number"==typeof a)a+=l;else if(d&&I.test(a)){for(o=a.replace(I,"|").split("|"),n=0;n<o.length;n++)o[n]=e(o[n]);return o.join(",")}if(b=(a.match(pa)||[f])[0],m=a.split(b).join("").match(u)||[],n=m.length,k>n--)for(;++n<k;)m[n]=c?m[(n-1)/2|0]:g[n];return h+m.join(j)+j+b+i+(-1!==a.indexOf("inset")?" inset":"")}:function(a){var b,f,m;if("number"==typeof a)a+=l;else if(d&&I.test(a)){for(f=a.replace(I,"|").split("|"),m=0;m<f.length;m++)f[m]=e(f[m]);return f.join(",")}if(b=a.match(u)||[],m=b.length,k>m--)for(;++m<k;)b[m]=c?b[(m-1)/2|0]:g[m];return h+b.join(j)+i}:function(a){return a}},ra=function(a){return a=a.split(","),function(b,c,d,e,f,g,h){var i,j=(c+"").split(" ");for(h={},i=0;4>i;i++)h[a[i]]=j[i]=j[i]||j[(i-1)/2>>0];return e.parse(b,h,f,g)}},sa=(S._setPluginRatio=function(a){this.plugin.setRatio(a);for(var b,c,d,e,f,g=this.data,h=g.proxy,i=g.firstMPT,j=1e-6;i;)b=h[i.v],i.r?b=Math.round(b):j>b&&b>-j&&(b=0),i.t[i.p]=b,i=i._next;if(g.autoRotate&&(g.autoRotate.rotation=g.mod?g.mod(h.rotation,this.t):h.rotation),1===a||0===a)for(i=g.firstMPT,f=1===a?"e":"b";i;){if(c=i.t,c.type){if(1===c.type){for(e=c.xs0+c.s+c.xs1,d=1;d<c.l;d++)e+=c["xn"+d]+c["xs"+(d+1)];c[f]=e}}else c[f]=c.s+c.xs0;i=i._next}},function(a,b,c,d,e){this.t=a,this.p=b,this.v=c,this.r=e,d&&(d._prev=this,this._next=d)}),ta=(S._parseToProxy=function(a,b,c,d,e,f){var g,h,i,j,k,l=d,m={},n={},o=c._transform,p=M;for(c._transform=null,M=b,d=k=c.parse(a,b,d,e),M=p,f&&(c._transform=o,l&&(l._prev=null,l._prev&&(l._prev._next=null)));d&&d!==l;){if(d.type<=1&&(h=d.p,n[h]=d.s+d.c,m[h]=d.s,f||(j=new sa(d,"s",h,j,d.r),d.c=0),1===d.type))for(g=d.l;--g>0;)i="xn"+g,h=d.p+"_"+i,n[h]=d.data[i],m[h]=d[i],f||(j=new sa(d,i,h,j,d.rxp[i]));d=d._next}return{proxy:m,end:n,firstMPT:j,pt:k}},S.CSSPropTween=function(a,b,d,e,g,h,i,j,k,l,m){this.t=a,this.p=b,this.s=d,this.c=e,this.n=i||b,a instanceof ta||f.push(this.n),this.r=j,this.type=h||0,k&&(this.pr=k,c=!0),this.b=void 0===l?d:l,this.e=void 0===m?d+e:m,g&&(this._next=g,g._prev=this)}),ua=function(a,b,c,d,e,f){var g=new ta(a,b,c,d-c,e,-1,f);return g.b=c,g.e=g.xs0=d,g},va=g.parseComplex=function(a,b,c,d,e,f,h,i,j,l){c=c||f||"","function"==typeof d&&(d=d(r,q)),h=new ta(a,b,0,0,h,l?2:1,null,!1,i,c,d),d+="",e&&pa.test(d+c)&&(d=[c,d],g.colorStringFilter(d),c=d[0],d=d[1]);var m,n,o,p,u,v,w,x,y,z,A,B,C,D=c.split(", ").join(",").split(" "),E=d.split(", ").join(",").split(" "),F=D.length,G=k!==!1;for((-1!==d.indexOf(",")||-1!==c.indexOf(","))&&(D=D.join(" ").replace(I,", ").split(" "),E=E.join(" ").replace(I,", ").split(" "),F=D.length),F!==E.length&&(D=(f||"").split(" "),F=D.length),h.plugin=j,h.setRatio=l,pa.lastIndex=0,m=0;F>m;m++)if(p=D[m],u=E[m],x=parseFloat(p),x||0===x)h.appendXtra("",x,ia(u,x),u.replace(t,""),G&&-1!==u.indexOf("px"),!0);else if(e&&pa.test(p))B=u.indexOf(")")+1,B=")"+(B?u.substr(B):""),C=-1!==u.indexOf("hsl")&&U,p=na(p,C),u=na(u,C),y=p.length+u.length>6,y&&!U&&0===u[3]?(h["xs"+h.l]+=h.l?" transparent":"transparent",h.e=h.e.split(E[m]).join("transparent")):(U||(y=!1),C?h.appendXtra(y?"hsla(":"hsl(",p[0],ia(u[0],p[0]),",",!1,!0).appendXtra("",p[1],ia(u[1],p[1]),"%,",!1).appendXtra("",p[2],ia(u[2],p[2]),y?"%,":"%"+B,!1):h.appendXtra(y?"rgba(":"rgb(",p[0],u[0]-p[0],",",!0,!0).appendXtra("",p[1],u[1]-p[1],",",!0).appendXtra("",p[2],u[2]-p[2],y?",":B,!0),y&&(p=p.length<4?1:p[3],h.appendXtra("",p,(u.length<4?1:u[3])-p,B,!1))),pa.lastIndex=0;else if(v=p.match(s)){if(w=u.match(t),!w||w.length!==v.length)return h;for(o=0,n=0;n<v.length;n++)A=v[n],z=p.indexOf(A,o),h.appendXtra(p.substr(o,z-o),Number(A),ia(w[n],A),"",G&&"px"===p.substr(z+A.length,2),0===n),o=z+A.length;h["xs"+h.l]+=p.substr(o)}else h["xs"+h.l]+=h.l||h["xs"+h.l]?" "+u:u;if(-1!==d.indexOf("=")&&h.data){for(B=h.xs0+h.data.s,m=1;m<h.l;m++)B+=h["xs"+m]+h.data["xn"+m];h.e=B+h["xs"+m]}return h.l||(h.type=-1,h.xs0=h.e),h.xfirst||h},wa=9;for(j=ta.prototype,j.l=j.pr=0;--wa>0;)j["xn"+wa]=0,j["xs"+wa]="";j.xs0="",j._next=j._prev=j.xfirst=j.data=j.plugin=j.setRatio=j.rxp=null,j.appendXtra=function(a,b,c,d,e,f){var g=this,h=g.l;return g["xs"+h]+=f&&(h||g["xs"+h])?" "+a:a||"",c||0===h||g.plugin?(g.l++,g.type=g.setRatio?2:1,g["xs"+g.l]=d||"",h>0?(g.data["xn"+h]=b+c,g.rxp["xn"+h]=e,g["xn"+h]=b,g.plugin||(g.xfirst=new ta(g,"xn"+h,b,c,g.xfirst||g,0,g.n,e,g.pr),g.xfirst.xs0=0),g):(g.data={s:b+c},g.rxp={},g.s=b,g.c=c,g.r=e,g)):(g["xs"+h]+=b+(d||""),g)};var xa=function(a,b){b=b||{},this.p=b.prefix?Z(a)||a:a,i[a]=i[this.p]=this,this.format=b.formatter||qa(b.defaultValue,b.color,b.collapsible,b.multi),b.parser&&(this.parse=b.parser),this.clrs=b.color,this.multi=b.multi,this.keyword=b.keyword,this.dflt=b.defaultValue,this.pr=b.priority||0},ya=S._registerComplexSpecialProp=function(a,b,c){"object"!=typeof b&&(b={parser:c});var d,e,f=a.split(","),g=b.defaultValue;for(c=c||[g],d=0;d<f.length;d++)b.prefix=0===d&&b.prefix,b.defaultValue=c[d]||g,e=new xa(f[d],b)},za=S._registerPluginProp=function(a){if(!i[a]){var b=a.charAt(0).toUpperCase()+a.substr(1)+"Plugin";ya(a,{parser:function(a,c,d,e,f,g,j){var k=h.com.greensock.plugins[b];return k?(k._cssRegister(),i[d].parse(a,c,d,e,f,g,j)):(W("Error: "+b+" js file not loaded."),f)}})}};j=xa.prototype,j.parseComplex=function(a,b,c,d,e,f){var g,h,i,j,k,l,m=this.keyword;if(this.multi&&(I.test(c)||I.test(b)?(h=b.replace(I,"|").split("|"),i=c.replace(I,"|").split("|")):m&&(h=[b],i=[c])),i){for(j=i.length>h.length?i.length:h.length,g=0;j>g;g++)b=h[g]=h[g]||this.dflt,c=i[g]=i[g]||this.dflt,m&&(k=b.indexOf(m),l=c.indexOf(m),k!==l&&(-1===l?h[g]=h[g].split(m).join(""):-1===k&&(h[g]+=" "+m)));b=h.join(", "),c=i.join(", ")}return va(a,this.p,b,c,this.clrs,this.dflt,d,this.pr,e,f)},j.parse=function(a,b,c,d,f,g,h){return this.parseComplex(a.style,this.format(_(a,this.p,e,!1,this.dflt)),this.format(b),f,g)},g.registerSpecialProp=function(a,b,c){ya(a,{parser:function(a,d,e,f,g,h,i){var j=new ta(a,e,0,0,g,2,e,!1,c);return j.plugin=h,j.setRatio=b(a,d,f._tween,e),j},priority:c})},g.useSVGTransformAttr=!0;var Aa,Ba="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),Ca=Z("transform"),Da=X+"transform",Ea=Z("transformOrigin"),Fa=null!==Z("perspective"),Ga=S.Transform=function(){this.perspective=parseFloat(g.defaultTransformPerspective)||0,this.force3D=g.defaultForce3D!==!1&&Fa?g.defaultForce3D||"auto":!1},Ha=_gsScope.SVGElement,Ia=function(a,b,c){var d,e=O.createElementNS("http://www.w3.org/2000/svg",a),f=/([a-z])([A-Z])/g;for(d in c)e.setAttributeNS(null,d.replace(f,"$1-$2").toLowerCase(),c[d]);return b.appendChild(e),e},Ja=O.documentElement||{},Ka=function(){var a,b,c,d=p||/Android/i.test(T)&&!_gsScope.chrome;return O.createElementNS&&!d&&(a=Ia("svg",Ja),b=Ia("rect",a,{width:100,height:50,x:100}),c=b.getBoundingClientRect().width,b.style[Ea]="50% 50%",b.style[Ca]="scaleX(0.5)",d=c===b.getBoundingClientRect().width&&!(n&&Fa),Ja.removeChild(a)),d}(),La=function(a,b,c,d,e,f){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=a._gsTransform,w=Qa(a,!0);v&&(t=v.xOrigin,u=v.yOrigin),(!d||(h=d.split(" ")).length<2)&&(n=a.getBBox(),0===n.x&&0===n.y&&n.width+n.height===0&&(n={x:parseFloat(a.hasAttribute("x")?a.getAttribute("x"):a.hasAttribute("cx")?a.getAttribute("cx"):0)||0,y:parseFloat(a.hasAttribute("y")?a.getAttribute("y"):a.hasAttribute("cy")?a.getAttribute("cy"):0)||0,width:0,height:0}),b=ha(b).split(" "),h=[(-1!==b[0].indexOf("%")?parseFloat(b[0])/100*n.width:parseFloat(b[0]))+n.x,(-1!==b[1].indexOf("%")?parseFloat(b[1])/100*n.height:parseFloat(b[1]))+n.y]),c.xOrigin=k=parseFloat(h[0]),c.yOrigin=l=parseFloat(h[1]),d&&w!==Pa&&(m=w[0],n=w[1],o=w[2],p=w[3],q=w[4],r=w[5],s=m*p-n*o,s&&(i=k*(p/s)+l*(-o/s)+(o*r-p*q)/s,j=k*(-n/s)+l*(m/s)-(m*r-n*q)/s,k=c.xOrigin=h[0]=i,l=c.yOrigin=h[1]=j)),v&&(f&&(c.xOffset=v.xOffset,c.yOffset=v.yOffset,v=c),e||e!==!1&&g.defaultSmoothOrigin!==!1?(i=k-t,j=l-u,v.xOffset+=i*w[0]+j*w[2]-i,v.yOffset+=i*w[1]+j*w[3]-j):v.xOffset=v.yOffset=0),f||a.setAttribute("data-svg-origin",h.join(" "))},Ma=function(a){var b,c=P("svg",this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),d=this.parentNode,e=this.nextSibling,f=this.style.cssText;if(Ja.appendChild(c),c.appendChild(this),this.style.display="block",a)try{b=this.getBBox(),this._originalGetBBox=this.getBBox,this.getBBox=Ma}catch(g){}else this._originalGetBBox&&(b=this._originalGetBBox());return e?d.insertBefore(this,e):d.appendChild(this),Ja.removeChild(c),this.style.cssText=f,b},Na=function(a){try{return a.getBBox()}catch(b){return Ma.call(a,!0)}},Oa=function(a){return!(!(Ha&&a.getCTM&&Na(a))||a.parentNode&&!a.ownerSVGElement)},Pa=[1,0,0,1,0,0],Qa=function(a,b){var c,d,e,f,g,h,i=a._gsTransform||new Ga,j=1e5,k=a.style;if(Ca?d=_(a,Da,null,!0):a.currentStyle&&(d=a.currentStyle.filter.match(G),d=d&&4===d.length?[d[0].substr(4),Number(d[2].substr(4)),Number(d[1].substr(4)),d[3].substr(4),i.x||0,i.y||0].join(","):""),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,c&&Ca&&((h="none"===$(a).display)||!a.parentNode)&&(h&&(f=k.display,k.display="block"),a.parentNode||(g=1,Ja.appendChild(a)),d=_(a,Da,null,!0),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,f?k.display=f:h&&Va(k,"display"),g&&Ja.removeChild(a)),(i.svg||a.getCTM&&Oa(a))&&(c&&-1!==(k[Ca]+"").indexOf("matrix")&&(d=k[Ca],c=0),e=a.getAttribute("transform"),c&&e&&(-1!==e.indexOf("matrix")?(d=e,c=0):-1!==e.indexOf("translate")&&(d="matrix(1,0,0,1,"+e.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",")+")",c=0))),c)return Pa;for(e=(d||"").match(s)||[],wa=e.length;--wa>-1;)f=Number(e[wa]),e[wa]=(g=f-(f|=0))?(g*j+(0>g?-.5:.5)|0)/j+f:f;return b&&e.length>6?[e[0],e[1],e[4],e[5],e[12],e[13]]:e},Ra=S.getTransform=function(a,c,d,e){if(a._gsTransform&&d&&!e)return a._gsTransform;var f,h,i,j,k,l,m=d?a._gsTransform||new Ga:new Ga,n=m.scaleX<0,o=2e-5,p=1e5,q=Fa?parseFloat(_(a,Ea,c,!1,"0 0 0").split(" ")[2])||m.zOrigin||0:0,r=parseFloat(g.defaultTransformPerspective)||0;if(m.svg=!(!a.getCTM||!Oa(a)),m.svg&&(La(a,_(a,Ea,c,!1,"50% 50%")+"",m,a.getAttribute("data-svg-origin")),Aa=g.useSVGTransformAttr||Ka),f=Qa(a),f!==Pa){if(16===f.length){var s,t,u,v,w,x=f[0],y=f[1],z=f[2],A=f[3],B=f[4],C=f[5],D=f[6],E=f[7],F=f[8],G=f[9],H=f[10],I=f[12],J=f[13],K=f[14],M=f[11],N=Math.atan2(D,H);m.zOrigin&&(K=-m.zOrigin,I=F*K-f[12],J=G*K-f[13],K=H*K+m.zOrigin-f[14]),m.rotationX=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),s=B*v+F*w,t=C*v+G*w,u=D*v+H*w,F=B*-w+F*v,G=C*-w+G*v,H=D*-w+H*v,M=E*-w+M*v,B=s,C=t,D=u),N=Math.atan2(-z,H),m.rotationY=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),s=x*v-F*w,t=y*v-G*w,u=z*v-H*w,G=y*w+G*v,H=z*w+H*v,M=A*w+M*v,x=s,y=t,z=u),N=Math.atan2(y,x),m.rotation=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),x=x*v+B*w,t=y*v+C*w,C=y*-w+C*v,D=z*-w+D*v,y=t),m.rotationX&&Math.abs(m.rotationX)+Math.abs(m.rotation)>359.9&&(m.rotationX=m.rotation=0,m.rotationY=180-m.rotationY),m.scaleX=(Math.sqrt(x*x+y*y)*p+.5|0)/p,m.scaleY=(Math.sqrt(C*C+G*G)*p+.5|0)/p,m.scaleZ=(Math.sqrt(D*D+H*H)*p+.5|0)/p,m.rotationX||m.rotationY?m.skewX=0:(m.skewX=B||C?Math.atan2(B,C)*L+m.rotation:m.skewX||0,Math.abs(m.skewX)>90&&Math.abs(m.skewX)<270&&(n?(m.scaleX*=-1,m.skewX+=m.rotation<=0?180:-180,m.rotation+=m.rotation<=0?180:-180):(m.scaleY*=-1,m.skewX+=m.skewX<=0?180:-180))),m.perspective=M?1/(0>M?-M:M):0,m.x=I,m.y=J,m.z=K,m.svg&&(m.x-=m.xOrigin-(m.xOrigin*x-m.yOrigin*B),m.y-=m.yOrigin-(m.yOrigin*y-m.xOrigin*C))}else if(!Fa||e||!f.length||m.x!==f[4]||m.y!==f[5]||!m.rotationX&&!m.rotationY){var O=f.length>=6,P=O?f[0]:1,Q=f[1]||0,R=f[2]||0,S=O?f[3]:1;m.x=f[4]||0,m.y=f[5]||0,i=Math.sqrt(P*P+Q*Q),j=Math.sqrt(S*S+R*R),k=P||Q?Math.atan2(Q,P)*L:m.rotation||0,l=R||S?Math.atan2(R,S)*L+k:m.skewX||0,Math.abs(l)>90&&Math.abs(l)<270&&(n?(i*=-1,l+=0>=k?180:-180,k+=0>=k?180:-180):(j*=-1,l+=0>=l?180:-180)),m.scaleX=i,m.scaleY=j,m.rotation=k,m.skewX=l,Fa&&(m.rotationX=m.rotationY=m.z=0,m.perspective=r,m.scaleZ=1),m.svg&&(m.x-=m.xOrigin-(m.xOrigin*P+m.yOrigin*R),m.y-=m.yOrigin-(m.xOrigin*Q+m.yOrigin*S))}m.zOrigin=q;for(h in m)m[h]<o&&m[h]>-o&&(m[h]=0)}return d&&(a._gsTransform=m,m.svg&&(Aa&&a.style[Ca]?b.delayedCall(.001,function(){Va(a.style,Ca)}):!Aa&&a.getAttribute("transform")&&b.delayedCall(.001,function(){a.removeAttribute("transform")}))),m},Sa=function(a){var b,c,d=this.data,e=-d.rotation*K,f=e+d.skewX*K,g=1e5,h=(Math.cos(e)*d.scaleX*g|0)/g,i=(Math.sin(e)*d.scaleX*g|0)/g,j=(Math.sin(f)*-d.scaleY*g|0)/g,k=(Math.cos(f)*d.scaleY*g|0)/g,l=this.t.style,m=this.t.currentStyle;if(m){c=i,i=-j,j=-c,b=m.filter,l.filter="";var n,o,q=this.t.offsetWidth,r=this.t.offsetHeight,s="absolute"!==m.position,t="progid:DXImageTransform.Microsoft.Matrix(M11="+h+", M12="+i+", M21="+j+", M22="+k,u=d.x+q*d.xPercent/100,v=d.y+r*d.yPercent/100;if(null!=d.ox&&(n=(d.oxp?q*d.ox*.01:d.ox)-q/2,o=(d.oyp?r*d.oy*.01:d.oy)-r/2,u+=n-(n*h+o*i),v+=o-(n*j+o*k)),s?(n=q/2,o=r/2,t+=", Dx="+(n-(n*h+o*i)+u)+", Dy="+(o-(n*j+o*k)+v)+")"):t+=", sizingMethod='auto expand')",-1!==b.indexOf("DXImageTransform.Microsoft.Matrix(")?l.filter=b.replace(H,t):l.filter=t+" "+b,(0===a||1===a)&&1===h&&0===i&&0===j&&1===k&&(s&&-1===t.indexOf("Dx=0, Dy=0")||x.test(b)&&100!==parseFloat(RegExp.$1)||-1===b.indexOf(b.indexOf("Alpha"))&&l.removeAttribute("filter")),!s){var y,z,A,B=8>p?1:-1;for(n=d.ieOffsetX||0,o=d.ieOffsetY||0,d.ieOffsetX=Math.round((q-((0>h?-h:h)*q+(0>i?-i:i)*r))/2+u),d.ieOffsetY=Math.round((r-((0>k?-k:k)*r+(0>j?-j:j)*q))/2+v),wa=0;4>wa;wa++)z=fa[wa],y=m[z],c=-1!==y.indexOf("px")?parseFloat(y):aa(this.t,z,parseFloat(y),y.replace(w,""))||0,A=c!==d[z]?2>wa?-d.ieOffsetX:-d.ieOffsetY:2>wa?n-d.ieOffsetX:o-d.ieOffsetY,l[z]=(d[z]=Math.round(c-A*(0===wa||2===wa?1:B)))+"px"}}},Ta=S.set3DTransformRatio=S.setTransformRatio=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,o,p,q,r,s,t,u,v,w,x,y,z=this.data,A=this.t.style,B=z.rotation,C=z.rotationX,D=z.rotationY,E=z.scaleX,F=z.scaleY,G=z.scaleZ,H=z.x,I=z.y,J=z.z,L=z.svg,M=z.perspective,N=z.force3D,O=z.skewY,P=z.skewX;if(O&&(P+=O,B+=O),((1===a||0===a)&&"auto"===N&&(this.tween._totalTime===this.tween._totalDuration||!this.tween._totalTime)||!N)&&!J&&!M&&!D&&!C&&1===G||Aa&&L||!Fa)return void(B||P||L?(B*=K,x=P*K,y=1e5,c=Math.cos(B)*E,f=Math.sin(B)*E,d=Math.sin(B-x)*-F,g=Math.cos(B-x)*F,x&&"simple"===z.skewType&&(b=Math.tan(x-O*K),b=Math.sqrt(1+b*b),d*=b,g*=b,O&&(b=Math.tan(O*K),b=Math.sqrt(1+b*b),c*=b,f*=b)),L&&(H+=z.xOrigin-(z.xOrigin*c+z.yOrigin*d)+z.xOffset,I+=z.yOrigin-(z.xOrigin*f+z.yOrigin*g)+z.yOffset,Aa&&(z.xPercent||z.yPercent)&&(q=this.t.getBBox(),H+=.01*z.xPercent*q.width,I+=.01*z.yPercent*q.height),q=1e-6,q>H&&H>-q&&(H=0),q>I&&I>-q&&(I=0)),u=(c*y|0)/y+","+(f*y|0)/y+","+(d*y|0)/y+","+(g*y|0)/y+","+H+","+I+")",L&&Aa?this.t.setAttribute("transform","matrix("+u):A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+u):A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+E+",0,0,"+F+","+H+","+I+")");if(n&&(q=1e-4,q>E&&E>-q&&(E=G=2e-5),q>F&&F>-q&&(F=G=2e-5),!M||z.z||z.rotationX||z.rotationY||(M=0)),B||P)B*=K,r=c=Math.cos(B),s=f=Math.sin(B),P&&(B-=P*K,r=Math.cos(B),s=Math.sin(B),"simple"===z.skewType&&(b=Math.tan((P-O)*K),b=Math.sqrt(1+b*b),r*=b,s*=b,z.skewY&&(b=Math.tan(O*K),b=Math.sqrt(1+b*b),c*=b,f*=b))),d=-s,g=r;else{if(!(D||C||1!==G||M||L))return void(A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) translate3d(":"translate3d(")+H+"px,"+I+"px,"+J+"px)"+(1!==E||1!==F?" scale("+E+","+F+")":""));c=g=1,d=f=0}k=1,e=h=i=j=l=m=0,o=M?-1/M:0,p=z.zOrigin,q=1e-6,v=",",w="0",B=D*K,B&&(r=Math.cos(B),s=Math.sin(B),i=-s,l=o*-s,e=c*s,h=f*s,k=r,o*=r,c*=r,f*=r),B=C*K,B&&(r=Math.cos(B),s=Math.sin(B),b=d*r+e*s,t=g*r+h*s,j=k*s,m=o*s,e=d*-s+e*r,h=g*-s+h*r,k*=r,o*=r,d=b,g=t),1!==G&&(e*=G,h*=G,k*=G,o*=G),1!==F&&(d*=F,g*=F,j*=F,m*=F),1!==E&&(c*=E,f*=E,i*=E,l*=E),(p||L)&&(p&&(H+=e*-p,I+=h*-p,J+=k*-p+p),L&&(H+=z.xOrigin-(z.xOrigin*c+z.yOrigin*d)+z.xOffset,I+=z.yOrigin-(z.xOrigin*f+z.yOrigin*g)+z.yOffset),q>H&&H>-q&&(H=w),q>I&&I>-q&&(I=w),q>J&&J>-q&&(J=0)),u=z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix3d(":"matrix3d(",u+=(q>c&&c>-q?w:c)+v+(q>f&&f>-q?w:f)+v+(q>i&&i>-q?w:i),u+=v+(q>l&&l>-q?w:l)+v+(q>d&&d>-q?w:d)+v+(q>g&&g>-q?w:g),C||D||1!==G?(u+=v+(q>j&&j>-q?w:j)+v+(q>m&&m>-q?w:m)+v+(q>e&&e>-q?w:e),u+=v+(q>h&&h>-q?w:h)+v+(q>k&&k>-q?w:k)+v+(q>o&&o>-q?w:o)+v):u+=",0,0,0,0,1,0,",u+=H+v+I+v+J+v+(M?1+-J/M:1)+")",A[Ca]=u};j=Ga.prototype,j.x=j.y=j.z=j.skewX=j.skewY=j.rotation=j.rotationX=j.rotationY=j.zOrigin=j.xPercent=j.yPercent=j.xOffset=j.yOffset=0,j.scaleX=j.scaleY=j.scaleZ=1,ya("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(a,b,c,d,f,h,i){if(d._lastParsedTransform===i)return f;d._lastParsedTransform=i;var j,k=i.scale&&"function"==typeof i.scale?i.scale:0;"function"==typeof i[c]&&(j=i[c],i[c]=b),k&&(i.scale=k(r,a));var l,m,n,o,p,s,t,u,v,w=a._gsTransform,x=a.style,y=1e-6,z=Ba.length,A=i,B={},C="transformOrigin",D=Ra(a,e,!0,A.parseTransform),E=A.transform&&("function"==typeof A.transform?A.transform(r,q):A.transform);if(d._transform=D,E&&"string"==typeof E&&Ca)m=Q.style,m[Ca]=E,m.display="block",m.position="absolute",O.body.appendChild(Q),l=Ra(Q,null,!1),D.svg&&(s=D.xOrigin,t=D.yOrigin,l.x-=D.xOffset,l.y-=D.yOffset,(A.transformOrigin||A.svgOrigin)&&(E={},La(a,ha(A.transformOrigin),E,A.svgOrigin,A.smoothOrigin,!0),s=E.xOrigin,t=E.yOrigin,l.x-=E.xOffset-D.xOffset,l.y-=E.yOffset-D.yOffset),(s||t)&&(u=Qa(Q,!0),l.x-=s-(s*u[0]+t*u[2]),l.y-=t-(s*u[1]+t*u[3]))),O.body.removeChild(Q),l.perspective||(l.perspective=D.perspective),null!=A.xPercent&&(l.xPercent=ja(A.xPercent,D.xPercent)),null!=A.yPercent&&(l.yPercent=ja(A.yPercent,D.yPercent));else if("object"==typeof A){if(l={scaleX:ja(null!=A.scaleX?A.scaleX:A.scale,D.scaleX),scaleY:ja(null!=A.scaleY?A.scaleY:A.scale,D.scaleY),scaleZ:ja(A.scaleZ,D.scaleZ),x:ja(A.x,D.x),y:ja(A.y,D.y),z:ja(A.z,D.z),xPercent:ja(A.xPercent,D.xPercent),yPercent:ja(A.yPercent,D.yPercent),perspective:ja(A.transformPerspective,D.perspective)},p=A.directionalRotation,null!=p)if("object"==typeof p)for(m in p)A[m]=p[m];else A.rotation=p;"string"==typeof A.x&&-1!==A.x.indexOf("%")&&(l.x=0,l.xPercent=ja(A.x,D.xPercent)),"string"==typeof A.y&&-1!==A.y.indexOf("%")&&(l.y=0,l.yPercent=ja(A.y,D.yPercent)),l.rotation=ka("rotation"in A?A.rotation:"shortRotation"in A?A.shortRotation+"_short":"rotationZ"in A?A.rotationZ:D.rotation,D.rotation,"rotation",B),Fa&&(l.rotationX=ka("rotationX"in A?A.rotationX:"shortRotationX"in A?A.shortRotationX+"_short":D.rotationX||0,D.rotationX,"rotationX",B),l.rotationY=ka("rotationY"in A?A.rotationY:"shortRotationY"in A?A.shortRotationY+"_short":D.rotationY||0,D.rotationY,"rotationY",B)),l.skewX=ka(A.skewX,D.skewX),l.skewY=ka(A.skewY,D.skewY)}for(Fa&&null!=A.force3D&&(D.force3D=A.force3D,o=!0),D.skewType=A.skewType||D.skewType||g.defaultSkewType,n=D.force3D||D.z||D.rotationX||D.rotationY||l.z||l.rotationX||l.rotationY||l.perspective,n||null==A.scale||(l.scaleZ=1);--z>-1;)v=Ba[z],E=l[v]-D[v],(E>y||-y>E||null!=A[v]||null!=M[v])&&(o=!0,f=new ta(D,v,D[v],E,f),v in B&&(f.e=B[v]),f.xs0=0,f.plugin=h,d._overwriteProps.push(f.n));return E=A.transformOrigin,D.svg&&(E||A.svgOrigin)&&(s=D.xOffset,t=D.yOffset,La(a,ha(E),l,A.svgOrigin,A.smoothOrigin),f=ua(D,"xOrigin",(w?D:l).xOrigin,l.xOrigin,f,C),f=ua(D,"yOrigin",(w?D:l).yOrigin,l.yOrigin,f,C),(s!==D.xOffset||t!==D.yOffset)&&(f=ua(D,"xOffset",w?s:D.xOffset,D.xOffset,f,C),f=ua(D,"yOffset",w?t:D.yOffset,D.yOffset,f,C)),E="0px 0px"),(E||Fa&&n&&D.zOrigin)&&(Ca?(o=!0,v=Ea,E=(E||_(a,v,e,!1,"50% 50%"))+"",f=new ta(x,v,0,0,f,-1,C),f.b=x[v],f.plugin=h,Fa?(m=D.zOrigin,E=E.split(" "),D.zOrigin=(E.length>2&&(0===m||"0px"!==E[2])?parseFloat(E[2]):m)||0,f.xs0=f.e=E[0]+" "+(E[1]||"50%")+" 0px",f=new ta(D,"zOrigin",0,0,f,-1,f.n),f.b=m,f.xs0=f.e=D.zOrigin):f.xs0=f.e=E):ha(E+"",D)),o&&(d._transformType=D.svg&&Aa||!n&&3!==this._transformType?2:3),j&&(i[c]=j),k&&(i.scale=k),f},prefix:!0}),ya("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),ya("borderRadius",{defaultValue:"0px",parser:function(a,b,c,f,g,h){b=this.format(b);var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],z=a.style;for(q=parseFloat(a.offsetWidth),r=parseFloat(a.offsetHeight),i=b.split(" "),j=0;j<y.length;j++)this.p.indexOf("border")&&(y[j]=Z(y[j])),m=l=_(a,y[j],e,!1,"0px"),-1!==m.indexOf(" ")&&(l=m.split(" "),m=l[0],l=l[1]),n=k=i[j],o=parseFloat(m),t=m.substr((o+"").length),u="="===n.charAt(1),u?(p=parseInt(n.charAt(0)+"1",10),n=n.substr(2),p*=parseFloat(n),s=n.substr((p+"").length-(0>p?1:0))||""):(p=parseFloat(n),s=n.substr((p+"").length)),""===s&&(s=d[c]||t),s!==t&&(v=aa(a,"borderLeft",o,t),w=aa(a,"borderTop",o,t),"%"===s?(m=v/q*100+"%",l=w/r*100+"%"):"em"===s?(x=aa(a,"borderLeft",1,"em"),m=v/x+"em",l=w/x+"em"):(m=v+"px",l=w+"px"),u&&(n=parseFloat(m)+p+s,k=parseFloat(l)+p+s)),g=va(z,y[j],m+" "+l,n+" "+k,!1,"0px",g);return g},prefix:!0,formatter:qa("0px 0px 0px 0px",!1,!0)}),ya("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",{defaultValue:"0px",parser:function(a,b,c,d,f,g){return va(a.style,c,this.format(_(a,c,e,!1,"0px 0px")),this.format(b),!1,"0px",f)},prefix:!0,formatter:qa("0px 0px",!1,!0)}),ya("backgroundPosition",{defaultValue:"0 0",parser:function(a,b,c,d,f,g){var h,i,j,k,l,m,n="background-position",o=e||$(a,null),q=this.format((o?p?o.getPropertyValue(n+"-x")+" "+o.getPropertyValue(n+"-y"):o.getPropertyValue(n):a.currentStyle.backgroundPositionX+" "+a.currentStyle.backgroundPositionY)||"0 0"),r=this.format(b);if(-1!==q.indexOf("%")!=(-1!==r.indexOf("%"))&&r.split(",").length<2&&(m=_(a,"backgroundImage").replace(D,""),m&&"none"!==m)){for(h=q.split(" "),i=r.split(" "),R.setAttribute("src",m),j=2;--j>-1;)q=h[j],k=-1!==q.indexOf("%"),k!==(-1!==i[j].indexOf("%"))&&(l=0===j?a.offsetWidth-R.width:a.offsetHeight-R.height,h[j]=k?parseFloat(q)/100*l+"px":parseFloat(q)/l*100+"%");q=h.join(" ")}return this.parseComplex(a.style,q,r,f,g)},formatter:ha}),ya("backgroundSize",{defaultValue:"0 0",formatter:function(a){return a+="",ha(-1===a.indexOf(" ")?a+" "+a:a)}}),ya("perspective",{defaultValue:"0px",prefix:!0}),ya("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),ya("transformStyle",{prefix:!0}),ya("backfaceVisibility",{prefix:!0}),ya("userSelect",{prefix:!0}),ya("margin",{parser:ra("marginTop,marginRight,marginBottom,marginLeft")}),ya("padding",{parser:ra("paddingTop,paddingRight,paddingBottom,paddingLeft")}),ya("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(a,b,c,d,f,g){var h,i,j;return 9>p?(i=a.currentStyle,j=8>p?" ":",",h="rect("+i.clipTop+j+i.clipRight+j+i.clipBottom+j+i.clipLeft+")",
b=this.format(b).split(",").join(j)):(h=this.format(_(a,this.p,e,!1,this.dflt)),b=this.format(b)),this.parseComplex(a.style,h,b,f,g)}}),ya("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),ya("autoRound,strictUnits",{parser:function(a,b,c,d,e){return e}}),ya("border",{defaultValue:"0px solid #000",parser:function(a,b,c,d,f,g){var h=_(a,"borderTopWidth",e,!1,"0px"),i=this.format(b).split(" "),j=i[0].replace(w,"");return"px"!==j&&(h=parseFloat(h)/aa(a,"borderTopWidth",1,j)+j),this.parseComplex(a.style,this.format(h+" "+_(a,"borderTopStyle",e,!1,"solid")+" "+_(a,"borderTopColor",e,!1,"#000")),i.join(" "),f,g)},color:!0,formatter:function(a){var b=a.split(" ");return b[0]+" "+(b[1]||"solid")+" "+(a.match(pa)||["#000"])[0]}}),ya("borderWidth",{parser:ra("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),ya("float,cssFloat,styleFloat",{parser:function(a,b,c,d,e,f){var g=a.style,h="cssFloat"in g?"cssFloat":"styleFloat";return new ta(g,h,0,0,e,-1,c,!1,0,g[h],b)}});var Ua=function(a){var b,c=this.t,d=c.filter||_(this.data,"filter")||"",e=this.s+this.c*a|0;100===e&&(-1===d.indexOf("atrix(")&&-1===d.indexOf("radient(")&&-1===d.indexOf("oader(")?(c.removeAttribute("filter"),b=!_(this.data,"filter")):(c.filter=d.replace(z,""),b=!0)),b||(this.xn1&&(c.filter=d=d||"alpha(opacity="+e+")"),-1===d.indexOf("pacity")?0===e&&this.xn1||(c.filter=d+" alpha(opacity="+e+")"):c.filter=d.replace(x,"opacity="+e))};ya("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(a,b,c,d,f,g){var h=parseFloat(_(a,"opacity",e,!1,"1")),i=a.style,j="autoAlpha"===c;return"string"==typeof b&&"="===b.charAt(1)&&(b=("-"===b.charAt(0)?-1:1)*parseFloat(b.substr(2))+h),j&&1===h&&"hidden"===_(a,"visibility",e)&&0!==b&&(h=0),U?f=new ta(i,"opacity",h,b-h,f):(f=new ta(i,"opacity",100*h,100*(b-h),f),f.xn1=j?1:0,i.zoom=1,f.type=2,f.b="alpha(opacity="+f.s+")",f.e="alpha(opacity="+(f.s+f.c)+")",f.data=a,f.plugin=g,f.setRatio=Ua),j&&(f=new ta(i,"visibility",0,0,f,-1,null,!1,0,0!==h?"inherit":"hidden",0===b?"hidden":"inherit"),f.xs0="inherit",d._overwriteProps.push(f.n),d._overwriteProps.push(c)),f}});var Va=function(a,b){b&&(a.removeProperty?(("ms"===b.substr(0,2)||"webkit"===b.substr(0,6))&&(b="-"+b),a.removeProperty(b.replace(B,"-$1").toLowerCase())):a.removeAttribute(b))},Wa=function(a){if(this.t._gsClassPT=this,1===a||0===a){this.t.setAttribute("class",0===a?this.b:this.e);for(var b=this.data,c=this.t.style;b;)b.v?c[b.p]=b.v:Va(c,b.p),b=b._next;1===a&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};ya("className",{parser:function(a,b,d,f,g,h,i){var j,k,l,m,n,o=a.getAttribute("class")||"",p=a.style.cssText;if(g=f._classNamePT=new ta(a,d,0,0,g,2),g.setRatio=Wa,g.pr=-11,c=!0,g.b=o,k=ca(a,e),l=a._gsClassPT){for(m={},n=l.data;n;)m[n.p]=1,n=n._next;l.setRatio(1)}return a._gsClassPT=g,g.e="="!==b.charAt(1)?b:o.replace(new RegExp("(?:\\s|^)"+b.substr(2)+"(?![\\w-])"),"")+("+"===b.charAt(0)?" "+b.substr(2):""),a.setAttribute("class",g.e),j=da(a,k,ca(a),i,m),a.setAttribute("class",o),g.data=j.firstMPT,a.style.cssText=p,g=g.xfirst=f.parse(a,j.difs,g,h)}});var Xa=function(a){if((1===a||0===a)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var b,c,d,e,f,g=this.t.style,h=i.transform.parse;if("all"===this.e)g.cssText="",e=!0;else for(b=this.e.split(" ").join("").split(","),d=b.length;--d>-1;)c=b[d],i[c]&&(i[c].parse===h?e=!0:c="transformOrigin"===c?Ea:i[c].p),Va(g,c);e&&(Va(g,Ca),f=this.t._gsTransform,f&&(f.svg&&(this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._gsTransform))}};for(ya("clearProps",{parser:function(a,b,d,e,f){return f=new ta(a,d,0,0,f,2),f.setRatio=Xa,f.e=b,f.pr=-10,f.data=e._tween,c=!0,f}}),j="bezier,throwProps,physicsProps,physics2D".split(","),wa=j.length;wa--;)za(j[wa]);j=g.prototype,j._firstPT=j._lastParsedTransform=j._transform=null,j._onInitTween=function(a,b,h,j){if(!a.nodeType)return!1;this._target=q=a,this._tween=h,this._vars=b,r=j,k=b.autoRound,c=!1,d=b.suffixMap||g.suffixMap,e=$(a,""),f=this._overwriteProps;var n,p,s,t,u,v,w,x,z,A=a.style;if(l&&""===A.zIndex&&(n=_(a,"zIndex",e),("auto"===n||""===n)&&this._addLazySet(A,"zIndex",0)),"string"==typeof b&&(t=A.cssText,n=ca(a,e),A.cssText=t+";"+b,n=da(a,n,ca(a)).difs,!U&&y.test(b)&&(n.opacity=parseFloat(RegExp.$1)),b=n,A.cssText=t),b.className?this._firstPT=p=i.className.parse(a,b.className,"className",this,null,null,b):this._firstPT=p=this.parse(a,b,null),this._transformType){for(z=3===this._transformType,Ca?m&&(l=!0,""===A.zIndex&&(w=_(a,"zIndex",e),("auto"===w||""===w)&&this._addLazySet(A,"zIndex",0)),o&&this._addLazySet(A,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(z?"visible":"hidden"))):A.zoom=1,s=p;s&&s._next;)s=s._next;x=new ta(a,"transform",0,0,null,2),this._linkCSSP(x,null,s),x.setRatio=Ca?Ta:Sa,x.data=this._transform||Ra(a,e,!0),x.tween=h,x.pr=-1,f.pop()}if(c){for(;p;){for(v=p._next,s=t;s&&s.pr>p.pr;)s=s._next;(p._prev=s?s._prev:u)?p._prev._next=p:t=p,(p._next=s)?s._prev=p:u=p,p=v}this._firstPT=t}return!0},j.parse=function(a,b,c,f){var g,h,j,l,m,n,o,p,s,t,u=a.style;for(g in b)n=b[g],"function"==typeof n&&(n=n(r,q)),h=i[g],h?c=h.parse(a,n,g,this,c,f,b):(m=_(a,g,e)+"",s="string"==typeof n,"color"===g||"fill"===g||"stroke"===g||-1!==g.indexOf("Color")||s&&A.test(n)?(s||(n=na(n),n=(n.length>3?"rgba(":"rgb(")+n.join(",")+")"),c=va(u,g,m,n,!0,"transparent",c,0,f)):s&&J.test(n)?c=va(u,g,m,n,!0,null,c,0,f):(j=parseFloat(m),o=j||0===j?m.substr((j+"").length):"",(""===m||"auto"===m)&&("width"===g||"height"===g?(j=ga(a,g,e),o="px"):"left"===g||"top"===g?(j=ba(a,g,e),o="px"):(j="opacity"!==g?0:1,o="")),t=s&&"="===n.charAt(1),t?(l=parseInt(n.charAt(0)+"1",10),n=n.substr(2),l*=parseFloat(n),p=n.replace(w,"")):(l=parseFloat(n),p=s?n.replace(w,""):""),""===p&&(p=g in d?d[g]:o),n=l||0===l?(t?l+j:l)+p:b[g],o!==p&&""!==p&&(l||0===l)&&j&&(j=aa(a,g,j,o),"%"===p?(j/=aa(a,g,100,"%")/100,b.strictUnits!==!0&&(m=j+"%")):"em"===p||"rem"===p||"vw"===p||"vh"===p?j/=aa(a,g,1,p):"px"!==p&&(l=aa(a,g,l,p),p="px"),t&&(l||0===l)&&(n=l+j+p)),t&&(l+=j),!j&&0!==j||!l&&0!==l?void 0!==u[g]&&(n||n+""!="NaN"&&null!=n)?(c=new ta(u,g,l||j||0,0,c,-1,g,!1,0,m,n),c.xs0="none"!==n||"display"!==g&&-1===g.indexOf("Style")?n:m):W("invalid "+g+" tween value: "+b[g]):(c=new ta(u,g,j,l-j,c,0,g,k!==!1&&("px"===p||"zIndex"===g),0,m,n),c.xs0=p))),f&&c&&!c.plugin&&(c.plugin=f);return c},j.setRatio=function(a){var b,c,d,e=this._firstPT,f=1e-6;if(1!==a||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(a||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;e;){if(b=e.c*a+e.s,e.r?b=Math.round(b):f>b&&b>-f&&(b=0),e.type)if(1===e.type)if(d=e.l,2===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2;else if(3===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3;else if(4===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4;else if(5===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4+e.xn4+e.xs5;else{for(c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}else-1===e.type?e.t[e.p]=e.xs0:e.setRatio&&e.setRatio(a);else e.t[e.p]=b+e.xs0;e=e._next}else for(;e;)2!==e.type?e.t[e.p]=e.b:e.setRatio(a),e=e._next;else for(;e;){if(2!==e.type)if(e.r&&-1!==e.type)if(b=Math.round(e.s+e.c),e.type){if(1===e.type){for(d=e.l,c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}}else e.t[e.p]=b+e.xs0;else e.t[e.p]=e.e;else e.setRatio(a);e=e._next}},j._enableTransforms=function(a){this._transform=this._transform||Ra(this._target,e,!0),this._transformType=this._transform.svg&&Aa||!a&&3!==this._transformType?2:3};var Ya=function(a){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};j._addLazySet=function(a,b,c){var d=this._firstPT=new ta(a,b,0,0,this._firstPT,2);d.e=c,d.setRatio=Ya,d.data=this},j._linkCSSP=function(a,b,c,d){return a&&(b&&(b._prev=a),a._next&&(a._next._prev=a._prev),a._prev?a._prev._next=a._next:this._firstPT===a&&(this._firstPT=a._next,d=!0),c?c._next=a:d||null!==this._firstPT||(this._firstPT=a),a._next=b,a._prev=c),a},j._mod=function(a){for(var b=this._firstPT;b;)"function"==typeof a[b.p]&&a[b.p]===Math.round&&(b.r=1),b=b._next},j._kill=function(b){var c,d,e,f=b;if(b.autoAlpha||b.alpha){f={};for(d in b)f[d]=b[d];f.opacity=1,f.autoAlpha&&(f.visibility=1)}for(b.className&&(c=this._classNamePT)&&(e=c.xfirst,e&&e._prev?this._linkCSSP(e._prev,c._next,e._prev._prev):e===this._firstPT&&(this._firstPT=c._next),c._next&&this._linkCSSP(c._next,c._next._next,e._prev),this._classNamePT=null),c=this._firstPT;c;)c.plugin&&c.plugin!==d&&c.plugin._kill&&(c.plugin._kill(b),d=c.plugin),c=c._next;return a.prototype._kill.call(this,f)};var Za=function(a,b,c){var d,e,f,g;if(a.slice)for(e=a.length;--e>-1;)Za(a[e],b,c);else for(d=a.childNodes,e=d.length;--e>-1;)f=d[e],g=f.type,f.style&&(b.push(ca(f)),c&&c.push(f)),1!==g&&9!==g&&11!==g||!f.childNodes.length||Za(f,b,c)};return g.cascadeTo=function(a,c,d){var e,f,g,h,i=b.to(a,c,d),j=[i],k=[],l=[],m=[],n=b._internals.reservedProps;for(a=i._targets||i.target,Za(a,k,m),i.render(c,!0,!0),Za(a,l),i.render(0,!0,!0),i._enabled(!0),e=m.length;--e>-1;)if(f=da(m[e],k[e],l[e]),f.firstMPT){f=f.difs;for(g in d)n[g]&&(f[g]=d[g]);h={};for(g in f)h[g]=k[e][g];j.push(b.fromTo(m[e],c,h,f))}return j},a.activate([g]),g},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"function"==typeof define&&define.amd?define(["TweenLite"],b):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),module.exports=b())}("CSSPlugin");


/* SPLIT TEXT UTIL */
/*!
 * VERSION: 0.5.6
 * DATE: 2017-01-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;!function(a){"use strict";var b=a.GreenSockGlobals||a,c=function(a){var c,d=a.split("."),e=b;for(c=0;c<d.length;c++)e[d[c]]=e=e[d[c]]||{};return e},d=c("com.greensock.utils"),e=function(a){var b=a.nodeType,c="";if(1===b||9===b||11===b){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===b||4===b)return a.nodeValue;return c},f=document,g=f.defaultView?f.defaultView.getComputedStyle:function(){},h=/([A-Z])/g,i=function(a,b,c,d){var e;return(c=c||g(a,null))?(a=c.getPropertyValue(b.replace(h,"-$1").toLowerCase()),e=a||c.length?a:c[b]):a.currentStyle&&(c=a.currentStyle,e=c[b]),d?e:parseInt(e,10)||0},j=function(a){return a.length&&a[0]&&(a[0].nodeType&&a[0].style&&!a.nodeType||a[0].length&&a[0][0])?!0:!1},k=function(a){var b,c,d,e=[],f=a.length;for(b=0;f>b;b++)if(c=a[b],j(c))for(d=c.length,d=0;d<c.length;d++)e.push(c[d]);else e.push(c);return e},l=/(?:\r|\n|\t\t)/g,m=/(?:\s\s+)/g,n=55296,o=56319,p=56320,q=127462,r=127487,s=127995,t=127999,u=function(a){return(a.charCodeAt(0)-n<<10)+(a.charCodeAt(1)-p)+65536},v=f.all&&!f.addEventListener,w=" style='position:relative;display:inline-block;"+(v?"*display:inline;*zoom:1;'":"'"),x=function(a,b){a=a||"";var c=-1!==a.indexOf("++"),d=1;return c&&(a=a.split("++").join("")),function(){return"<"+b+w+(a?" class='"+a+(c?d++:"")+"'>":">")}},y=d.SplitText=b.SplitText=function(a,b){if("string"==typeof a&&(a=y.selector(a)),!a)throw"cannot split a null element.";this.elements=j(a)?k(a):[a],this.chars=[],this.words=[],this.lines=[],this._originals=[],this.vars=b||{},this.split(b)},z=function(a,b,c){var d=a.nodeType;if(1===d||9===d||11===d)for(a=a.firstChild;a;a=a.nextSibling)z(a,b,c);else(3===d||4===d)&&(a.nodeValue=a.nodeValue.split(b).join(c))},A=function(a,b){for(var c=b.length;--c>-1;)a.push(b[c])},B=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},C=function(a,b,c){for(var d;a&&a!==b;){if(d=a._next||a.nextSibling)return d.textContent.charAt(0)===c;a=a.parentNode||a._parent}return!1},D=function(a){var b,c,d=B(a.childNodes),e=d.length;for(b=0;e>b;b++)c=d[b],c._isSplit?D(c):(b&&3===c.previousSibling.nodeType?c.previousSibling.nodeValue+=3===c.nodeType?c.nodeValue:c.firstChild.nodeValue:3!==c.nodeType&&a.insertBefore(c.firstChild,c),a.removeChild(c))},E=function(a,b,c,d,e,h,j){var k,l,m,n,o,p,q,r,s,t,u,v,w=g(a),x=i(a,"paddingLeft",w),y=-999,B=i(a,"borderBottomWidth",w)+i(a,"borderTopWidth",w),E=i(a,"borderLeftWidth",w)+i(a,"borderRightWidth",w),F=i(a,"paddingTop",w)+i(a,"paddingBottom",w),G=i(a,"paddingLeft",w)+i(a,"paddingRight",w),H=.2*i(a,"fontSize"),I=i(a,"textAlign",w,!0),J=[],K=[],L=[],M=b.wordDelimiter||" ",N=b.span?"span":"div",O=b.type||b.split||"chars,words,lines",P=e&&-1!==O.indexOf("lines")?[]:null,Q=-1!==O.indexOf("words"),R=-1!==O.indexOf("chars"),S="absolute"===b.position||b.absolute===!0,T=b.linesClass,U=-1!==(T||"").indexOf("++"),V=[];for(P&&1===a.children.length&&a.children[0]._isSplit&&(a=a.children[0]),U&&(T=T.split("++").join("")),l=a.getElementsByTagName("*"),m=l.length,o=[],k=0;m>k;k++)o[k]=l[k];if(P||S)for(k=0;m>k;k++)n=o[k],p=n.parentNode===a,(p||S||R&&!Q)&&(v=n.offsetTop,P&&p&&Math.abs(v-y)>H&&"BR"!==n.nodeName&&(q=[],P.push(q),y=v),S&&(n._x=n.offsetLeft,n._y=v,n._w=n.offsetWidth,n._h=n.offsetHeight),P&&((n._isSplit&&p||!R&&p||Q&&p||!Q&&n.parentNode.parentNode===a&&!n.parentNode._isSplit)&&(q.push(n),n._x-=x,C(n,a,M)&&(n._wordEnd=!0)),"BR"===n.nodeName&&n.nextSibling&&"BR"===n.nextSibling.nodeName&&P.push([])));for(k=0;m>k;k++)n=o[k],p=n.parentNode===a,"BR"!==n.nodeName?(S&&(s=n.style,Q||p||(n._x+=n.parentNode._x,n._y+=n.parentNode._y),s.left=n._x+"px",s.top=n._y+"px",s.position="absolute",s.display="block",s.width=n._w+1+"px",s.height=n._h+"px"),!Q&&R?n._isSplit?(n._next=n.nextSibling,n.parentNode.appendChild(n)):n.parentNode._isSplit?(n._parent=n.parentNode,!n.previousSibling&&n.firstChild&&(n.firstChild._isFirst=!0),n.nextSibling&&" "===n.nextSibling.textContent&&!n.nextSibling.nextSibling&&V.push(n.nextSibling),n._next=n.nextSibling&&n.nextSibling._isFirst?null:n.nextSibling,n.parentNode.removeChild(n),o.splice(k--,1),m--):p||(v=!n.nextSibling&&C(n.parentNode,a,M),n.parentNode._parent&&n.parentNode._parent.appendChild(n),v&&n.parentNode.appendChild(f.createTextNode(" ")),b.span&&(n.style.display="inline"),J.push(n)):n.parentNode._isSplit&&!n._isSplit&&""!==n.innerHTML?K.push(n):R&&!n._isSplit&&(b.span&&(n.style.display="inline"),J.push(n))):P||S?(n.parentNode&&n.parentNode.removeChild(n),o.splice(k--,1),m--):Q||a.appendChild(n);for(k=V.length;--k>-1;)V[k].parentNode.removeChild(V[k]);if(P){for(S&&(t=f.createElement(N),a.appendChild(t),u=t.offsetWidth+"px",v=t.offsetParent===a?0:a.offsetLeft,a.removeChild(t)),s=a.style.cssText,a.style.cssText="display:none;";a.firstChild;)a.removeChild(a.firstChild);for(r=" "===M&&(!S||!Q&&!R),k=0;k<P.length;k++){for(q=P[k],t=f.createElement(N),t.style.cssText="display:block;text-align:"+I+";position:"+(S?"absolute;":"relative;"),T&&(t.className=T+(U?k+1:"")),L.push(t),m=q.length,l=0;m>l;l++)"BR"!==q[l].nodeName&&(n=q[l],t.appendChild(n),r&&n._wordEnd&&t.appendChild(f.createTextNode(" ")),S&&(0===l&&(t.style.top=n._y+"px",t.style.left=x+v+"px"),n.style.top="0px",v&&(n.style.left=n._x-v+"px")));0===m?t.innerHTML="&nbsp;":Q||R||(D(t),z(t,String.fromCharCode(160)," ")),S&&(t.style.width=u,t.style.height=n._h+"px"),a.appendChild(t)}a.style.cssText=s}S&&(j>a.clientHeight&&(a.style.height=j-F+"px",a.clientHeight<j&&(a.style.height=j+B+"px")),h>a.clientWidth&&(a.style.width=h-G+"px",a.clientWidth<h&&(a.style.width=h+E+"px"))),A(c,J),A(d,K),A(e,L)},F=function(a,b,c,d){var g,h,i,j,k,p,v,w,x,y=b.span?"span":"div",A=b.type||b.split||"chars,words,lines",B=(-1!==A.indexOf("words"),-1!==A.indexOf("chars")),C="absolute"===b.position||b.absolute===!0,D=b.wordDelimiter||" ",E=" "!==D?"":C?"&#173; ":" ",F=b.span?"</span>":"</div>",G=!0,H=f.createElement("div"),I=a.parentNode;for(I.insertBefore(H,a),H.textContent=a.nodeValue,I.removeChild(a),a=H,g=e(a),v=-1!==g.indexOf("<"),b.reduceWhiteSpace!==!1&&(g=g.replace(m," ").replace(l,"")),v&&(g=g.split("<").join("{{LT}}")),k=g.length,h=(" "===g.charAt(0)?E:"")+c(),i=0;k>i;i++)if(p=g.charAt(i),p===D&&g.charAt(i-1)!==D&&i){for(h+=G?F:"",G=!1;g.charAt(i+1)===D;)h+=E,i++;i===k-1?h+=E:")"!==g.charAt(i+1)&&(h+=E+c(),G=!0)}else"{"===p&&"{{LT}}"===g.substr(i,6)?(h+=B?d()+"{{LT}}</"+y+">":"{{LT}}",i+=5):p.charCodeAt(0)>=n&&p.charCodeAt(0)<=o||g.charCodeAt(i+1)>=65024&&g.charCodeAt(i+1)<=65039?(w=u(g.substr(i,2)),x=u(g.substr(i+2,2)),j=w>=q&&r>=w&&x>=q&&r>=x||x>=s&&t>=x?4:2,h+=B&&" "!==p?d()+g.substr(i,j)+"</"+y+">":g.substr(i,j),i+=j-1):h+=B&&" "!==p?d()+p+"</"+y+">":p;a.outerHTML=h+(G?F:""),v&&z(I,"{{LT}}","<")},G=function(a,b,c,d){var e,f,g=B(a.childNodes),h=g.length,j="absolute"===b.position||b.absolute===!0;if(3!==a.nodeType||h>1){for(b.absolute=!1,e=0;h>e;e++)f=g[e],(3!==f.nodeType||/\S+/.test(f.nodeValue))&&(j&&3!==f.nodeType&&"inline"===i(f,"display",null,!0)&&(f.style.display="inline-block",f.style.position="relative"),f._isSplit=!0,G(f,b,c,d));return b.absolute=j,void(a._isSplit=!0)}F(a,b,c,d)},H=y.prototype;H.split=function(a){this.isSplit&&this.revert(),this.vars=a=a||this.vars,this._originals.length=this.chars.length=this.words.length=this.lines.length=0;for(var b,c,d,e=this.elements.length,f=a.span?"span":"div",g=("absolute"===a.position||a.absolute===!0,x(a.wordsClass,f)),h=x(a.charsClass,f);--e>-1;)d=this.elements[e],this._originals[e]=d.innerHTML,b=d.clientHeight,c=d.clientWidth,G(d,a,g,h),E(d,a,this.chars,this.words,this.lines,c,b);return this.chars.reverse(),this.words.reverse(),this.lines.reverse(),this.isSplit=!0,this},H.revert=function(){if(!this._originals)throw"revert() call wasn't scoped properly.";for(var a=this._originals.length;--a>-1;)this.elements[a].innerHTML=this._originals[a];return this.chars=[],this.words=[],this.lines=[],this.isSplit=!1,this},y.selector=a.$||a.jQuery||function(b){var c=a.$||a.jQuery;return c?(y.selector=c,c(b)):"undefined"==typeof document?b:document.querySelectorAll?document.querySelectorAll(b):document.getElementById("#"===b.charAt(0)?b.substr(1):b)},y.version="0.5.6"}(_gsScope),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"function"==typeof define&&define.amd?define([],b):"undefined"!=typeof module&&module.exports&&(module.exports=b())}("SplitText");


try{
	window.GreenSockGlobals = null;
	window._gsQueue = null;
	window._gsDefine = null;

	delete(window.GreenSockGlobals);
	delete(window._gsQueue);
	delete(window._gsDefine);	
   } catch(e) {}

try{
	window.GreenSockGlobals = oldgs;
	window._gsQueue = oldgs_queue;
	} catch(e) {}

if (window.tplogs==true)
	try {
		console.groupEnd();
	} catch(e) {}

(function(e,t){
		e.waitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage"]};e.expr[":"].uncached=function(t){var n=document.createElement("img");n.src=t.src;return e(t).is('img[src!=""]')&&!n.complete};e.fn.waitForImages=function(t,n,r){if(e.isPlainObject(arguments[0])){n=t.each;r=t.waitForAll;t=t.finished}t=t||e.noop;n=n||e.noop;r=!!r;if(!e.isFunction(t)||!e.isFunction(n)){throw new TypeError("An invalid callback was supplied.")}return this.each(function(){var i=e(this),s=[];if(r){var o=e.waitForImages.hasImageProperties||[],u=/url\((['"]?)(.*?)\1\)/g;i.find("*").each(function(){var t=e(this);if(t.is("img:uncached")){s.push({src:t.attr("src"),element:t[0]})}e.each(o,function(e,n){var r=t.css(n);if(!r){return true}var i;while(i=u.exec(r)){s.push({src:i[2],element:t[0]})}})})}else{i.find("img:uncached").each(function(){s.push({src:this.src,element:this})})}var f=s.length,l=0;if(f==0){t.call(i[0])}e.each(s,function(r,s){var o=new Image;e(o).bind("load error",function(e){l++;n.call(s.element,l,f,e.type=="load");if(l==f){t.call(i[0]);return false}});o.src=s.src})})};		
})(jQuery);

/**************************************************************************
 * jquery.themepunch.revolution.js - jQuery Plugin for Revolution Slider
 * @version: 5.4.7 (31.01.2018)
 * @requires jQuery v1.7 or later (tested on 1.9)
 * @author ThemePunch
**************************************************************************/

!function(jQuery,undefined){"use strict";var version={core:"5.4.7","revolution.extensions.actions.min.js":"2.1.0","revolution.extensions.carousel.min.js":"1.2.1","revolution.extensions.kenburn.min.js":"1.3.1","revolution.extensions.layeranimation.min.js":"3.6.4","revolution.extensions.navigation.min.js":"1.3.3","revolution.extensions.parallax.min.js":"2.2.0","revolution.extensions.slideanims.min.js":"1.7","revolution.extensions.video.min.js":"2.2.0"};jQuery.fn.extend({revolution:function(e){var i={delay:9e3,responsiveLevels:4064,visibilityLevels:[2048,1024,778,480],gridwidth:960,gridheight:500,minHeight:0,autoHeight:"off",sliderType:"standard",sliderLayout:"auto",fullScreenAutoWidth:"off",fullScreenAlignForce:"off",fullScreenOffsetContainer:"",fullScreenOffset:"0",hideCaptionAtLimit:0,hideAllCaptionAtLimit:0,hideSliderAtLimit:0,disableProgressBar:"off",stopAtSlide:-1,stopAfterLoops:-1,shadow:0,dottedOverlay:"none",startDelay:0,lazyType:"smart",spinner:"spinner0",shuffle:"off",viewPort:{enable:!1,outof:"wait",visible_area:"60%",presize:!1},fallbacks:{isJoomla:!1,panZoomDisableOnMobile:"off",simplifyAll:"on",nextSlideOnWindowFocus:"off",disableFocusListener:!0,ignoreHeightChanges:"off",ignoreHeightChangesSize:0,allowHTML5AutoPlayOnAndroid:!0},parallax:{type:"off",levels:[10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],origo:"enterpoint",speed:400,bgparallax:"off",opacity:"on",disable_onmobile:"off",ddd_shadow:"on",ddd_bgfreeze:"off",ddd_overflow:"visible",ddd_layer_overflow:"visible",ddd_z_correction:65,ddd_path:"mouse"},scrolleffect:{fade:"off",blur:"off",scale:"off",grayscale:"off",maxblur:10,on_layers:"off",on_slidebg:"off",on_static_layers:"off",on_parallax_layers:"off",on_parallax_static_layers:"off",direction:"both",multiplicator:1.35,multiplicator_layers:.5,tilt:30,disable_on_mobile:"on"},carousel:{easing:punchgs.Power3.easeInOut,speed:800,showLayersAllTime:"off",horizontal_align:"center",vertical_align:"center",infinity:"on",space:0,maxVisibleItems:3,stretch:"off",fadeout:"on",maxRotation:0,minScale:0,vary_fade:"off",vary_rotation:"on",vary_scale:"off",border_radius:"0px",padding_top:0,padding_bottom:0},navigation:{keyboardNavigation:"off",keyboard_direction:"horizontal",mouseScrollNavigation:"off",onHoverStop:"on",touch:{touchenabled:"off",touchOnDesktop:"off",swipe_treshold:75,swipe_min_touches:1,drag_block_vertical:!1,swipe_direction:"horizontal"},arrows:{style:"",enable:!1,hide_onmobile:!1,hide_onleave:!0,hide_delay:200,hide_delay_mobile:1200,hide_under:0,hide_over:9999,tmp:"",rtl:!1,left:{h_align:"left",v_align:"center",h_offset:20,v_offset:0,container:"slider"},right:{h_align:"right",v_align:"center",h_offset:20,v_offset:0,container:"slider"}},bullets:{container:"slider",rtl:!1,style:"",enable:!1,hide_onmobile:!1,hide_onleave:!0,hide_delay:200,hide_delay_mobile:1200,hide_under:0,hide_over:9999,direction:"horizontal",h_align:"left",v_align:"center",space:0,h_offset:20,v_offset:0,tmp:'<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>'},thumbnails:{container:"slider",rtl:!1,style:"",enable:!1,width:100,height:50,min_width:100,wrapper_padding:2,wrapper_color:"#f5f5f5",wrapper_opacity:1,tmp:'<span class="tp-thumb-image"></span><span class="tp-thumb-title"></span>',visibleAmount:5,hide_onmobile:!1,hide_onleave:!0,hide_delay:200,hide_delay_mobile:1200,hide_under:0,hide_over:9999,direction:"horizontal",span:!1,position:"inner",space:2,h_align:"left",v_align:"center",h_offset:20,v_offset:0},tabs:{container:"slider",rtl:!1,style:"",enable:!1,width:100,min_width:100,height:50,wrapper_padding:10,wrapper_color:"#f5f5f5",wrapper_opacity:1,tmp:'<span class="tp-tab-image"></span>',visibleAmount:5,hide_onmobile:!1,hide_onleave:!0,hide_delay:200,hide_delay_mobile:1200,hide_under:0,hide_over:9999,direction:"horizontal",span:!1,space:0,position:"inner",h_align:"left",v_align:"center",h_offset:20,v_offset:0}},extensions:"extensions/",extensions_suffix:".min.js",debugMode:!1};return e=jQuery.extend(!0,{},i,e),this.each(function(){var i=jQuery(this);e.minHeight=e.minHeight!=undefined?parseInt(e.minHeight,0):e.minHeight,e.scrolleffect.on="on"===e.scrolleffect.fade||"on"===e.scrolleffect.scale||"on"===e.scrolleffect.blur||"on"===e.scrolleffect.grayscale,"hero"==e.sliderType&&i.find(">ul>li").each(function(e){e>0&&jQuery(this).remove()}),e.jsFileLocation=e.jsFileLocation||getScriptLocation("themepunch.revolution.min.js"),e.jsFileLocation=e.jsFileLocation+e.extensions,e.scriptsneeded=getNeededScripts(e,i),e.curWinRange=0,e.rtl=!0,e.navigation!=undefined&&e.navigation.touch!=undefined&&(e.navigation.touch.swipe_min_touches=e.navigation.touch.swipe_min_touches>5?1:e.navigation.touch.swipe_min_touches),jQuery(this).on("scriptsloaded",function(){if(e.modulesfailing)return i.html('<div style="margin:auto;line-height:40px;font-size:14px;color:#fff;padding:15px;background:#e74c3c;margin:20px 0px;">!! Error at loading Slider Revolution 5.0 Extrensions.'+e.errorm+"</div>").show(),!1;_R.migration!=undefined&&(e=_R.migration(i,e)),punchgs.force3D=!0,"on"!==e.simplifyAll&&punchgs.TweenLite.lagSmoothing(1e3,16),prepareOptions(i,e),initSlider(i,e)}),i[0].opt=e,waitForScripts(i,e)})},getRSVersion:function(e){if(!0===e)return jQuery("body").data("tp_rs_version");var i=jQuery("body").data("tp_rs_version"),t="";t+="---------------------------------------------------------\n",t+="    Currently Loaded Slider Revolution & SR Modules :\n",t+="---------------------------------------------------------\n";for(var a in i)t+=i[a].alias+": "+i[a].ver+"\n";return t+="---------------------------------------------------------\n"},revremoveslide:function(e){return this.each(function(){var i=jQuery(this),t=i[0].opt;if(!(e<0||e>t.slideamount)&&i!=undefined&&i.length>0&&jQuery("body").find("#"+i.attr("id")).length>0&&t&&t.li.length>0&&(e>0||e<=t.li.length)){var a=jQuery(t.li[e]),n=a.data("index"),r=!1;t.slideamount=t.slideamount-1,t.realslideamount=t.realslideamount-1,removeNavWithLiref(".tp-bullet",n,t),removeNavWithLiref(".tp-tab",n,t),removeNavWithLiref(".tp-thumb",n,t),a.hasClass("active-revslide")&&(r=!0),a.remove(),t.li=removeArray(t.li,e),t.carousel&&t.carousel.slides&&(t.carousel.slides=removeArray(t.carousel.slides,e)),t.thumbs=removeArray(t.thumbs,e),_R.updateNavIndexes&&_R.updateNavIndexes(t),r&&i.revnext(),punchgs.TweenLite.set(t.li,{minWidth:"99%"}),punchgs.TweenLite.set(t.li,{minWidth:"100%"})}})},revaddcallback:function(e){return this.each(function(){this.opt&&(this.opt.callBackArray===undefined&&(this.opt.callBackArray=new Array),this.opt.callBackArray.push(e))})},revgetparallaxproc:function(){return jQuery(this)[0].opt.scrollproc},revdebugmode:function(){return this.each(function(){var e=jQuery(this);e[0].opt.debugMode=!0,containerResized(e,e[0].opt)})},revscroll:function(e){return this.each(function(){var i=jQuery(this);jQuery("body,html").animate({scrollTop:i.offset().top+i.height()-e+"px"},{duration:400})})},revredraw:function(e){return this.each(function(){var e=jQuery(this);containerResized(e,e[0].opt)})},revkill:function(e){var i=this,t=jQuery(this);if(punchgs.TweenLite.killDelayedCallsTo(_R.showHideNavElements),t!=undefined&&t.length>0&&jQuery("body").find("#"+t.attr("id")).length>0){t.data("conthover",1),t.data("conthover-changed",1),t.trigger("revolution.slide.onpause");var a=t.parent().find(".tp-bannertimer"),n=t[0].opt;n.tonpause=!0,t.trigger("stoptimer");r="resize.revslider-"+t.attr("id");jQuery(window).unbind(r),punchgs.TweenLite.killTweensOf(t.find("*"),!1),punchgs.TweenLite.killTweensOf(t,!1),t.unbind("hover, mouseover, mouseenter,mouseleave, resize");var r="resize.revslider-"+t.attr("id");jQuery(window).off(r),t.find("*").each(function(){var e=jQuery(this);e.unbind("on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer"),e.off("on, hover, mouseenter,mouseleave,mouseover, resize"),e.data("mySplitText",null),e.data("ctl",null),e.data("tween")!=undefined&&e.data("tween").kill(),e.data("kenburn")!=undefined&&e.data("kenburn").kill(),e.data("timeline_out")!=undefined&&e.data("timeline_out").kill(),e.data("timeline")!=undefined&&e.data("timeline").kill(),e.remove(),e.empty(),e=null}),punchgs.TweenLite.killTweensOf(t.find("*"),!1),punchgs.TweenLite.killTweensOf(t,!1),a.remove();try{t.closest(".forcefullwidth_wrapper_tp_banner").remove()}catch(e){}try{t.closest(".rev_slider_wrapper").remove()}catch(e){}try{t.remove()}catch(e){}return t.empty(),t.html(),t=null,n=null,delete i.c,delete i.opt,delete i.container,!0}return!1},revpause:function(){return this.each(function(){var e=jQuery(this);e!=undefined&&e.length>0&&jQuery("body").find("#"+e.attr("id")).length>0&&(e.data("conthover",1),e.data("conthover-changed",1),e.trigger("revolution.slide.onpause"),e[0].opt.tonpause=!0,e.trigger("stoptimer"))})},revresume:function(){return this.each(function(){var e=jQuery(this);e!=undefined&&e.length>0&&jQuery("body").find("#"+e.attr("id")).length>0&&(e.data("conthover",0),e.data("conthover-changed",1),e.trigger("revolution.slide.onresume"),e[0].opt.tonpause=!1,e.trigger("starttimer"))})},revstart:function(){var e=jQuery(this);if(e!=undefined&&e.length>0&&jQuery("body").find("#"+e.attr("id")).length>0&&e[0].opt!==undefined)return e[0].opt.sliderisrunning?(console.log("Slider Is Running Already"),!1):(e[0].opt.c=e,e[0].opt.ul=e.find(">ul"),runSlider(e,e[0].opt),!0)},revnext:function(){return this.each(function(){var e=jQuery(this);e!=undefined&&e.length>0&&jQuery("body").find("#"+e.attr("id")).length>0&&_R.callingNewSlide(e,1)})},revprev:function(){return this.each(function(){var e=jQuery(this);e!=undefined&&e.length>0&&jQuery("body").find("#"+e.attr("id")).length>0&&_R.callingNewSlide(e,-1)})},revmaxslide:function(){return jQuery(this).find(".tp-revslider-mainul >li").length},revcurrentslide:function(){var e=jQuery(this);if(e!=undefined&&e.length>0&&jQuery("body").find("#"+e.attr("id")).length>0)return parseInt(e[0].opt.act,0)+1},revlastslide:function(){return jQuery(this).find(".tp-revslider-mainul >li").length},revshowslide:function(e){return this.each(function(){var i=jQuery(this);i!=undefined&&i.length>0&&jQuery("body").find("#"+i.attr("id")).length>0&&_R.callingNewSlide(i,"to"+(e-1))})},revcallslidewithid:function(e){return this.each(function(){var i=jQuery(this);i!=undefined&&i.length>0&&jQuery("body").find("#"+i.attr("id")).length>0&&_R.callingNewSlide(i,e)})}});var _R=jQuery.fn.revolution;jQuery.extend(!0,_R,{getversion:function(){return version},compare_version:function(e){var i=jQuery("body").data("tp_rs_version");return(i=i===undefined?new Object:i).Core===undefined&&(i.Core=new Object,i.Core.alias="Slider Revolution Core",i.Core.name="jquery.themepunch.revolution.min.js",i.Core.ver=_R.getversion().core),"stop"!=e.check&&(_R.getversion().core<e.min_core?(e.check===undefined&&(console.log("%cSlider Revolution Warning (Core:"+_R.getversion().core+")","color:#c0392b;font-weight:bold;"),console.log("%c     Core is older than expected ("+e.min_core+") from "+e.alias,"color:#333"),console.log("%c     Please update Slider Revolution to the latest version.","color:#333"),console.log("%c     It might be required to purge and clear Server/Client side Caches.","color:#333")),e.check="stop"):_R.getversion()[e.name]!=undefined&&e.version<_R.getversion()[e.name]&&(e.check===undefined&&(console.log("%cSlider Revolution Warning (Core:"+_R.getversion().core+")","color:#c0392b;font-weight:bold;"),console.log("%c     "+e.alias+" ("+e.version+") is older than requiered ("+_R.getversion()[e.name]+")","color:#333"),console.log("%c     Please update Slider Revolution to the latest version.","color:#333"),console.log("%c     It might be required to purge and clear Server/Client side Caches.","color:#333")),e.check="stop")),i[e.alias]===undefined&&(i[e.alias]=new Object,i[e.alias].alias=e.alias,i[e.alias].ver=e.version,i[e.alias].name=e.name),jQuery("body").data("tp_rs_version",i),e},currentSlideIndex:function(e){var i=e.c.find(".active-revslide").index();return i=-1==i?0:i},simp:function(e,i,t){var a=Math.abs(e)-Math.floor(Math.abs(e/i))*i;return t?a:e<0?-1*a:a},iOSVersion:function(){var e=!1;return navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i)?navigator.userAgent.match(/OS 4_\d like Mac OS X/i)&&(e=!0):e=!1,e},isIE:function(e,i){var t=jQuery('<div style="display:none;"/>').appendTo(jQuery("body"));t.html("\x3c!--[if "+(i||"")+" IE "+(e||"")+"]><a>&nbsp;</a><![endif]--\x3e");var a=t.find("a").length;return t.remove(),a},is_mobile:function(){var e=["android","webos","iphone","ipad","blackberry","Android","webos",,"iPod","iPhone","iPad","Blackberry","BlackBerry"],i=!1;for(var t in e)navigator.userAgent.split(e[t]).length>1&&(i=!0);return i},is_android:function(){var e=["android","Android"],i=!1;for(var t in e)navigator.userAgent.split(e[t]).length>1&&(i=!0);return i},callBackHandling:function(e,i,t){try{e.callBackArray&&jQuery.each(e.callBackArray,function(e,a){a&&a.inmodule&&a.inmodule===i&&a.atposition&&a.atposition===t&&a.callback&&a.callback.call()})}catch(e){console.log("Call Back Failed")}},get_browser:function(){var e,i=navigator.appName,t=navigator.userAgent,a=t.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);return a&&null!=(e=t.match(/version\/([\.\d]+)/i))&&(a[2]=e[1]),(a=a?[a[1],a[2]]:[i,navigator.appVersion,"-?"])[0]},get_browser_version:function(){var e,i=navigator.appName,t=navigator.userAgent,a=t.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);return a&&null!=(e=t.match(/version\/([\.\d]+)/i))&&(a[2]=e[1]),(a=a?[a[1],a[2]]:[i,navigator.appVersion,"-?"])[1]},isSafari11:function(){return"safari"===jQuery.trim(_R.get_browser().toLowerCase())&&parseFloat(_R.get_browser_version())>=11},getHorizontalOffset:function(e,i){var t=gWiderOut(e,".outer-left"),a=gWiderOut(e,".outer-right");switch(i){case"left":return t;case"right":return a;case"both":return t+a}},callingNewSlide:function(e,i){var t=e.find(".next-revslide").length>0?e.find(".next-revslide").index():e.find(".processing-revslide").length>0?e.find(".processing-revslide").index():e.find(".active-revslide").index(),a=0,n=e[0].opt;e.find(".next-revslide").removeClass("next-revslide"),e.find(".active-revslide").hasClass("tp-invisible-slide")&&(t=n.last_shown_slide),i&&jQuery.isNumeric(i)||i.match(/to/g)?(a=1===i||-1===i?(a=t+i)<0?n.slideamount-1:a>=n.slideamount?0:a:(i=jQuery.isNumeric(i)?i:parseInt(i.split("to")[1],0))<0?0:i>n.slideamount-1?n.slideamount-1:i,e.find(".tp-revslider-slidesli:eq("+a+")").addClass("next-revslide")):i&&e.find(".tp-revslider-slidesli").each(function(){var e=jQuery(this);e.data("index")===i&&e.addClass("next-revslide")}),a=e.find(".next-revslide").index(),e.trigger("revolution.nextslide.waiting"),t===a&&t===n.last_shown_slide||a!==t&&-1!=a?swapSlide(e):e.find(".next-revslide").removeClass("next-revslide")},slotSize:function(e,i){i.slotw=Math.ceil(i.width/i.slots),"fullscreen"==i.sliderLayout?i.sloth=Math.ceil(jQuery(window).height()/i.slots):i.sloth=Math.ceil(i.height/i.slots),"on"==i.autoHeight&&e!==undefined&&""!==e&&(i.sloth=Math.ceil(e.height()/i.slots))},setSize:function(e){var i=(e.top_outer||0)+(e.bottom_outer||0),t=parseInt(e.carousel.padding_top||0,0),a=parseInt(e.carousel.padding_bottom||0,0),n=e.gridheight[e.curWinRange],r=0,o=-1===e.nextSlide||e.nextSlide===undefined?0:e.nextSlide;if(e.paddings=e.paddings===undefined?{top:parseInt(e.c.parent().css("paddingTop"),0)||0,bottom:parseInt(e.c.parent().css("paddingBottom"),0)||0}:e.paddings,e.rowzones&&e.rowzones.length>0)for(var s=0;s<e.rowzones[o].length;s++)r+=e.rowzones[o][s][0].offsetHeight;if(n=n<e.minHeight?e.minHeight:n,n=n<r?r:n,"fullwidth"==e.sliderLayout&&"off"==e.autoHeight&&punchgs.TweenLite.set(e.c,{maxHeight:n+"px"}),e.c.css({marginTop:t,marginBottom:a}),e.width=e.ul.width(),e.height=e.ul.height(),setScale(e),e.height=Math.round(e.gridheight[e.curWinRange]*(e.width/e.gridwidth[e.curWinRange])),e.height>e.gridheight[e.curWinRange]&&"on"!=e.autoHeight&&(e.height=e.gridheight[e.curWinRange]),"fullscreen"==e.sliderLayout||e.infullscreenmode){e.height=e.bw*e.gridheight[e.curWinRange];e.c.parent().width();var l=jQuery(window).height();if(e.fullScreenOffsetContainer!=undefined){try{var d=e.fullScreenOffsetContainer.split(",");d&&jQuery.each(d,function(e,i){l=jQuery(i).length>0?l-jQuery(i).outerHeight(!0):l})}catch(e){}try{e.fullScreenOffset.split("%").length>1&&e.fullScreenOffset!=undefined&&e.fullScreenOffset.length>0?l-=jQuery(window).height()*parseInt(e.fullScreenOffset,0)/100:e.fullScreenOffset!=undefined&&e.fullScreenOffset.length>0&&(l-=parseInt(e.fullScreenOffset,0))}catch(e){}}l=l<e.minHeight?e.minHeight:l,l-=i,e.c.parent().height(l),e.c.closest(".rev_slider_wrapper").height(l),e.c.css({height:"100%"}),e.height=l,e.minHeight!=undefined&&e.height<e.minHeight&&(e.height=e.minHeight),e.height=parseInt(r,0)>parseInt(e.height,0)?r:e.height}else e.minHeight!=undefined&&e.height<e.minHeight&&(e.height=e.minHeight),e.height=parseInt(r,0)>parseInt(e.height,0)?r:e.height,e.c.height(e.height);var c={height:t+a+i+e.height+e.paddings.top+e.paddings.bottom};e.c.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").css(c),e.c.closest(".rev_slider_wrapper").css(c),setScale(e)},enterInViewPort:function(e){e.waitForCountDown&&(countDown(e.c,e),e.waitForCountDown=!1),e.waitForFirstSlide&&(swapSlide(e.c),e.waitForFirstSlide=!1,setTimeout(function(){e.c.removeClass("tp-waitforfirststart")},500)),"playing"!=e.sliderlaststatus&&e.sliderlaststatus!=undefined||e.c.trigger("starttimer"),e.lastplayedvideos!=undefined&&e.lastplayedvideos.length>0&&jQuery.each(e.lastplayedvideos,function(i,t){_R.playVideo(t,e)})},leaveViewPort:function(e){e.sliderlaststatus=e.sliderstatus,e.c.trigger("stoptimer"),e.playingvideos!=undefined&&e.playingvideos.length>0&&(e.lastplayedvideos=jQuery.extend(!0,[],e.playingvideos),e.playingvideos&&jQuery.each(e.playingvideos,function(i,t){e.leaveViewPortBasedStop=!0,_R.stopVideo&&_R.stopVideo(t,e)}))},unToggleState:function(e){e!=undefined&&e.length>0&&jQuery.each(e,function(e,i){i.removeClass("rs-toggle-content-active")})},toggleState:function(e){e!=undefined&&e.length>0&&jQuery.each(e,function(e,i){i.addClass("rs-toggle-content-active")})},swaptoggleState:function(e){e!=undefined&&e.length>0&&jQuery.each(e,function(e,i){jQuery(i).hasClass("rs-toggle-content-active")?jQuery(i).removeClass("rs-toggle-content-active"):jQuery(i).addClass("rs-toggle-content-active")})},lastToggleState:function(e){var i=0;return e!=undefined&&e.length>0&&jQuery.each(e,function(e,t){i=t.hasClass("rs-toggle-content-active")}),i}});var _ISM=_R.is_mobile(),_ANDROID=_R.is_android(),checkIDS=function(e,i){if(e.anyid=e.anyid===undefined?[]:e.anyid,-1!=jQuery.inArray(i.attr("id"),e.anyid)){var t=i.attr("id")+"_"+Math.round(9999*Math.random());i.attr("id",t)}e.anyid.push(i.attr("id"))},removeArray=function(e,i){var t=[];return jQuery.each(e,function(e,a){e!=i&&t.push(a)}),t},removeNavWithLiref=function(e,i,t){t.c.find(e).each(function(){var e=jQuery(this);e.data("liref")===i&&e.remove()})},lAjax=function(e,i){return!jQuery("body").data(e)&&(i.filesystem?(i.errorm===undefined&&(i.errorm="<br>Local Filesystem Detected !<br>Put this to your header:"),console.warn("Local Filesystem detected !"),i.errorm=i.errorm+'<br>&lt;script type="text/javascript" src="'+i.jsFileLocation+e+i.extensions_suffix+'"&gt;&lt;/script&gt;',console.warn(i.jsFileLocation+e+i.extensions_suffix+" could not be loaded !"),console.warn("Please use a local Server or work online or make sure that you load all needed Libraries manually in your Document."),console.log(" "),i.modulesfailing=!0,!1):(jQuery.ajax({url:i.jsFileLocation+e+i.extensions_suffix+"?version="+version.core,dataType:"script",cache:!0,error:function(t){console.warn("Slider Revolution 5.0 Error !"),console.error("Failure at Loading:"+e+i.extensions_suffix+" on Path:"+i.jsFileLocation),console.info(t)}}),void jQuery("body").data(e,!0)))},getNeededScripts=function(e,i){var t=new Object,a=e.navigation;return t.kenburns=!1,t.parallax=!1,t.carousel=!1,t.navigation=!1,t.videos=!1,t.actions=!1,t.layeranim=!1,t.migration=!1,i.data("version")&&i.data("version").toString().match(/5./gi)?(i.find("img").each(function(){"on"==jQuery(this).data("kenburns")&&(t.kenburns=!0)}),("carousel"==e.sliderType||"on"==a.keyboardNavigation||"on"==a.mouseScrollNavigation||"on"==a.touch.touchenabled||a.arrows.enable||a.bullets.enable||a.thumbnails.enable||a.tabs.enable)&&(t.navigation=!0),i.find(".tp-caption, .tp-static-layer, .rs-background-video-layer").each(function(){var e=jQuery(this);(e.data("ytid")!=undefined||e.find("iframe").length>0&&e.find("iframe").attr("src").toLowerCase().indexOf("youtube")>0)&&(t.videos=!0),(e.data("vimeoid")!=undefined||e.find("iframe").length>0&&e.find("iframe").attr("src").toLowerCase().indexOf("vimeo")>0)&&(t.videos=!0),e.data("actions")!==undefined&&(t.actions=!0),t.layeranim=!0}),i.find("li").each(function(){jQuery(this).data("link")&&jQuery(this).data("link")!=undefined&&(t.layeranim=!0,t.actions=!0)}),!t.videos&&(i.find(".rs-background-video-layer").length>0||i.find(".tp-videolayer").length>0||i.find(".tp-audiolayer").length>0||i.find("iframe").length>0||i.find("video").length>0)&&(t.videos=!0),"carousel"==e.sliderType&&(t.carousel=!0),("off"!==e.parallax.type||e.viewPort.enable||"true"==e.viewPort.enable||"true"===e.scrolleffect.on||e.scrolleffect.on)&&(t.parallax=!0)):(t.kenburns=!0,t.parallax=!0,t.carousel=!1,t.navigation=!0,t.videos=!0,t.actions=!0,t.layeranim=!0,t.migration=!0),"hero"==e.sliderType&&(t.carousel=!1,t.navigation=!1),window.location.href.match(/file:/gi)&&(t.filesystem=!0,e.filesystem=!0),t.videos&&void 0===_R.isVideoPlaying&&lAjax("revolution.extension.video",e),t.carousel&&void 0===_R.prepareCarousel&&lAjax("revolution.extension.carousel",e),t.carousel||void 0!==_R.animateSlide||lAjax("revolution.extension.slideanims",e),t.actions&&void 0===_R.checkActions&&lAjax("revolution.extension.actions",e),t.layeranim&&void 0===_R.handleStaticLayers&&lAjax("revolution.extension.layeranimation",e),t.kenburns&&void 0===_R.stopKenBurn&&lAjax("revolution.extension.kenburn",e),t.navigation&&void 0===_R.createNavigation&&lAjax("revolution.extension.navigation",e),t.migration&&void 0===_R.migration&&lAjax("revolution.extension.migration",e),t.parallax&&void 0===_R.checkForParallax&&lAjax("revolution.extension.parallax",e),e.addons!=undefined&&e.addons.length>0&&jQuery.each(e.addons,function(i,t){"object"==typeof t&&t.fileprefix!=undefined&&lAjax(t.fileprefix,e)}),t},waitForScripts=function(e,i){var t=!0,a=i.scriptsneeded;i.addons!=undefined&&i.addons.length>0&&jQuery.each(i.addons,function(e,i){"object"==typeof i&&i.init!=undefined&&_R[i.init]===undefined&&(t=!1)}),a.filesystem||"undefined"!=typeof punchgs&&t&&(!a.kenburns||a.kenburns&&void 0!==_R.stopKenBurn)&&(!a.navigation||a.navigation&&void 0!==_R.createNavigation)&&(!a.carousel||a.carousel&&void 0!==_R.prepareCarousel)&&(!a.videos||a.videos&&void 0!==_R.resetVideo)&&(!a.actions||a.actions&&void 0!==_R.checkActions)&&(!a.layeranim||a.layeranim&&void 0!==_R.handleStaticLayers)&&(!a.migration||a.migration&&void 0!==_R.migration)&&(!a.parallax||a.parallax&&void 0!==_R.checkForParallax)&&(a.carousel||!a.carousel&&void 0!==_R.animateSlide)?e.trigger("scriptsloaded"):setTimeout(function(){waitForScripts(e,i)},50)},getScriptLocation=function(e){var i=new RegExp("themepunch.revolution.min.js","gi"),t="";return jQuery("script").each(function(){var e=jQuery(this).attr("src");e&&e.match(i)&&(t=e)}),t=t.replace("jquery.themepunch.revolution.min.js",""),t=t.replace("jquery.themepunch.revolution.js",""),t=t.split("?")[0]},setCurWinRange=function(e,i){var t=9999,a=0,n=0,r=0,o=jQuery(window).width(),s=i&&9999==e.responsiveLevels?e.visibilityLevels:e.responsiveLevels;s&&s.length&&jQuery.each(s,function(e,i){o<i&&(0==a||a>i)&&(t=i,r=e,a=i),o>i&&a<i&&(a=i,n=e)}),a<t&&(r=n),i?e.forcedWinRange=r:e.curWinRange=r},prepareOptions=function(e,i){i.carousel.maxVisibleItems=i.carousel.maxVisibleItems<1?999:i.carousel.maxVisibleItems,i.carousel.vertical_align="top"===i.carousel.vertical_align?"0%":"bottom"===i.carousel.vertical_align?"100%":"50%"},gWiderOut=function(e,i){var t=0;return e.find(i).each(function(){var e=jQuery(this);!e.hasClass("tp-forcenotvisible")&&t<e.outerWidth()&&(t=e.outerWidth())}),t},initSlider=function(container,opt){if(container==undefined)return!1;container.data("aimg")!=undefined&&("enabled"==container.data("aie8")&&_R.isIE(8)||"enabled"==container.data("amobile")&&_ISM)&&container.html('<img class="tp-slider-alternative-image" src="'+container.data("aimg")+'">'),container.find(">ul").addClass("tp-revslider-mainul"),opt.c=container,opt.ul=container.find(".tp-revslider-mainul"),opt.ul.find(">li").each(function(e){var i=jQuery(this);"on"==i.data("hideslideonmobile")&&_ISM&&i.remove(),(i.data("invisible")||!0===i.data("invisible"))&&(i.addClass("tp-invisible-slide"),i.appendTo(opt.ul))}),opt.addons!=undefined&&opt.addons.length>0&&jQuery.each(opt.addons,function(i,obj){"object"==typeof obj&&obj.init!=undefined&&_R[obj.init](eval(obj.params))}),opt.cid=container.attr("id"),opt.ul.css({visibility:"visible"}),opt.slideamount=opt.ul.find(">li").not(".tp-invisible-slide").length,opt.realslideamount=opt.ul.find(">li").length,opt.slayers=container.find(".tp-static-layers"),opt.slayers.data("index","staticlayers"),1!=opt.waitForInit&&(container[0].opt=opt,runSlider(container,opt))},onFullScreenChange=function(){jQuery("body").data("rs-fullScreenMode",!jQuery("body").data("rs-fullScreenMode")),jQuery("body").data("rs-fullScreenMode")&&setTimeout(function(){jQuery(window).trigger("resize")},200)},runSlider=function(e,i){if(i.sliderisrunning=!0,i.ul.find(">li").each(function(e){jQuery(this).data("originalindex",e)}),i.allli=i.ul.find(">li"),jQuery.each(i.allli,function(e,i){(i=jQuery(i)).data("origindex",i.index())}),i.li=i.ul.find(">li").not(".tp-invisible-slide"),"on"==i.shuffle){var t=new Object,a=i.ul.find(">li:first-child");t.fstransition=a.data("fstransition"),t.fsmasterspeed=a.data("fsmasterspeed"),t.fsslotamount=a.data("fsslotamount");for(var n=0;n<i.slideamount;n++){var r=Math.round(Math.random()*i.slideamount);i.ul.find(">li:eq("+r+")").prependTo(i.ul)}var o=i.ul.find(">li:first-child");o.data("fstransition",t.fstransition),o.data("fsmasterspeed",t.fsmasterspeed),o.data("fsslotamount",t.fsslotamount),i.allli=i.ul.find(">li"),i.li=i.ul.find(">li").not(".tp-invisible-slide")}if(i.inli=i.ul.find(">li.tp-invisible-slide"),i.thumbs=new Array,i.slots=4,i.act=-1,i.firststart=1,i.loadqueue=new Array,i.syncload=0,i.conw=e.width(),i.conh=e.height(),i.responsiveLevels.length>1?i.responsiveLevels[0]=9999:i.responsiveLevels=9999,jQuery.each(i.allli,function(e,t){var a=(t=jQuery(t)).find(".rev-slidebg")||t.find("img").first(),n=0;t.addClass("tp-revslider-slidesli"),t.data("index")===undefined&&t.data("index","rs-"+Math.round(999999*Math.random()));var r=new Object;r.params=new Array,r.id=t.data("index"),r.src=t.data("thumb")!==undefined?t.data("thumb"):a.data("lazyload")!==undefined?a.data("lazyload"):a.attr("src"),t.data("title")!==undefined&&r.params.push({from:RegExp("\\{\\{title\\}\\}","g"),to:t.data("title")}),t.data("description")!==undefined&&r.params.push({from:RegExp("\\{\\{description\\}\\}","g"),to:t.data("description")});for(n=1;n<=10;n++)t.data("param"+n)!==undefined&&r.params.push({from:RegExp("\\{\\{param"+n+"\\}\\}","g"),to:t.data("param"+n)});if(i.thumbs.push(r),t.data("link")!=undefined){var o=t.data("link"),s=t.data("target")||"_self",l="back"===t.data("slideindex")?0:60,d=t.data("linktoslide"),c=d;d!=undefined&&"next"!=d&&"prev"!=d&&i.allli.each(function(){var e=jQuery(this);e.data("origindex")+1==c&&(d=e.data("index"))}),"slide"!=o&&(d="no");var u='<div class="tp-caption slidelink" style="cursor:pointer;width:100%;height:100%;z-index:'+l+';" data-x="center" data-y="center" data-basealign="slide" ',p="scroll_under"===d?'[{"event":"click","action":"scrollbelow","offset":"100px","delay":"0"}]':"prev"===d?'[{"event":"click","action":"jumptoslide","slide":"prev","delay":"0.2"}]':"next"===d?'[{"event":"click","action":"jumptoslide","slide":"next","delay":"0.2"}]':'[{"event":"click","action":"jumptoslide","slide":"'+d+'","delay":"0.2"}]',f=' data-frames=\'[{"delay":0,"speed":100,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]\'';u="no"==d?u+f+" >":u+"data-actions='"+p+"'"+f+" >",u+='<a style="width:100%;height:100%;display:block"',u="slide"!=o?u+' target="'+s+'" href="'+o+'"':u,u+='><span style="width:100%;height:100%;display:block"></span></a></div>',t.append(u)}}),i.rle=i.responsiveLevels.length||1,i.gridwidth=cArray(i.gridwidth,i.rle),i.gridheight=cArray(i.gridheight,i.rle),"on"==i.simplifyAll&&(_R.isIE(8)||_R.iOSVersion())&&(e.find(".tp-caption").each(function(){var e=jQuery(this);e.removeClass("customin customout").addClass("fadein fadeout"),e.data("splitin",""),e.data("speed",400)}),i.allli.each(function(){var e=jQuery(this);e.data("transition","fade"),e.data("masterspeed",500),e.data("slotamount",1),(e.find(".rev-slidebg")||e.find(">img").first()).data("kenburns","off")})),i.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),i.autoHeight="fullscreen"==i.sliderLayout?"on":i.autoHeight,"fullwidth"==i.sliderLayout&&"off"==i.autoHeight&&e.css({maxHeight:i.gridheight[i.curWinRange]+"px"}),"auto"!=i.sliderLayout&&0==e.closest(".forcefullwidth_wrapper_tp_banner").length&&("fullscreen"!==i.sliderLayout||"on"!=i.fullScreenAutoWidth)){var s=e.parent(),l=s.css("marginBottom"),d=s.css("marginTop"),c=e.attr("id")+"_forcefullwidth";l=l===undefined?0:l,d=d===undefined?0:d,s.wrap('<div class="forcefullwidth_wrapper_tp_banner" id="'+c+'" style="position:relative;width:100%;height:auto;margin-top:'+d+";margin-bottom:"+l+'"></div>'),e.closest(".forcefullwidth_wrapper_tp_banner").append('<div class="tp-fullwidth-forcer" style="width:100%;height:'+e.height()+'px"></div>'),e.parent().css({marginTop:"0px",marginBottom:"0px"}),e.parent().css({position:"absolute"})}if(i.shadow!==undefined&&i.shadow>0&&(e.parent().addClass("tp-shadow"+i.shadow),e.parent().append('<div class="tp-shadowcover"></div>'),e.parent().find(".tp-shadowcover").css({backgroundColor:e.parent().css("backgroundColor"),backgroundImage:e.parent().css("backgroundImage")})),setCurWinRange(i),setCurWinRange(i,!0),!e.hasClass("revslider-initialised")){e.addClass("revslider-initialised"),e.addClass("tp-simpleresponsive"),e.attr("id")==undefined&&e.attr("id","revslider-"+Math.round(1e3*Math.random()+5)),checkIDS(i,e),i.firefox13=!1,i.ie=!jQuery.support.opacity,i.ie9=9==document.documentMode,i.origcd=i.delay;var u=jQuery.fn.jquery.split("."),p=parseFloat(u[0]),f=parseFloat(u[1]);parseFloat(u[2]||"0");1==p&&f<7&&e.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:'+u+" <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>"),p>1&&(i.ie=!1);var h=new Object;h.addedyt=0,h.addedvim=0,h.addedvid=0,i.scrolleffect.on&&(i.scrolleffect.layers=new Array),e.find(".tp-caption, .rs-background-video-layer").each(function(e){var t=jQuery(this),a=t.data(),n=a.autoplayonlyfirsttime,r=a.autoplay,o=(a.videomp4!==undefined||a.videowebm!==undefined||a.videoogv,t.hasClass("tp-audiolayer")),s=a.videoloop,l=!0,d=!1;a.startclasses=t.attr("class"),a.isparallaxlayer=a.startclasses.indexOf("rs-parallax")>=0,t.hasClass("tp-static-layer")&&_R.handleStaticLayers&&(_R.handleStaticLayers(t,i),i.scrolleffect.on&&("on"===i.scrolleffect.on_parallax_static_layers&&a.isparallaxlayer||"on"===i.scrolleffect.on_static_layers&&!a.isparallaxlayer)&&(d=!0),l=!1);var c=t.data("noposteronmobile")||t.data("noPosterOnMobile")||t.data("posteronmobile")||t.data("posterOnMobile")||t.data("posterOnMObile");t.data("noposteronmobile",c);var u=0;if(t.find("iframe").each(function(){punchgs.TweenLite.set(jQuery(this),{autoAlpha:0}),u++}),u>0&&t.data("iframes",!0),t.hasClass("tp-caption")){var p=t.hasClass("slidelink")?"width:100% !important;height:100% !important;":"",f=t.data(),g="",v=f.type,m="row"===v||"column"===v?"relative":"absolute",y="";"row"===v?(t.addClass("rev_row").removeClass("tp-resizeme"),y="rev_row_wrap"):"column"===v?(g=f.verticalalign===undefined?" vertical-align:bottom;":" vertical-align:"+f.verticalalign+";",y="rev_column",t.addClass("rev_column_inner").removeClass("tp-resizeme"),t.data("width","auto"),punchgs.TweenLite.set(t,{width:"auto"})):"group"===v&&t.removeClass("tp-resizeme");var w="",b="";"row"!==v&&"group"!==v&&"column"!==v?(w="display:"+t.css("display")+";",t.closest(".rev_column").length>0?(t.addClass("rev_layer_in_column"),l=!1):t.closest(".rev_group").length>0&&(t.addClass("rev_layer_in_group"),l=!1)):"column"===v&&(l=!1),f.wrapper_class!==undefined&&(y=y+" "+f.wrapper_class),f.wrapper_id!==undefined&&(b='id="'+f.wrapper_id+'"');var _="";t.hasClass("tp-no-events")&&(_=";pointer-events:none"),t.wrap("<div "+b+' class="tp-parallax-wrap '+y+'" style="'+g+" "+p+"position:"+m+";"+w+";visibility:hidden"+_+'"><div class="tp-loop-wrap" style="'+p+"position:"+m+";"+w+';"><div class="tp-mask-wrap" style="'+p+"position:"+m+";"+w+';" ></div></div></div>'),l&&i.scrolleffect.on&&("on"===i.scrolleffect.on_parallax_layers&&a.isparallaxlayer||"on"===i.scrolleffect.on_layers&&!a.isparallaxlayer)&&i.scrolleffect.layers.push(t.parent()),d&&i.scrolleffect.layers.push(t.parent()),"column"===v&&(t.append('<div class="rev_column_bg rev_column_bg_man_sized" style="visibility:hidden"></div>'),t.closest(".tp-parallax-wrap").append('<div class="rev_column_bg rev_column_bg_auto_sized"></div>'));var x=["pendulum","rotate","slideloop","pulse","wave"],j=t.closest(".tp-loop-wrap");jQuery.each(x,function(e,i){var a=t.find(".rs-"+i),n=a.data()||"";""!=n&&(j.data(n),j.addClass("rs-"+i),a.children(0).unwrap(),t.data("loopanimation","on"))}),t.attr("id")===undefined&&t.attr("id","layer-"+Math.round(999999999*Math.random())),checkIDS(i,t),punchgs.TweenLite.set(t,{visibility:"hidden"})}var R=t.data("actions");R!==undefined&&_R.checkActions(t,i,R),checkHoverDependencies(t,i),_R.checkVideoApis&&(h=_R.checkVideoApis(t,i,h)),o||1!=n&&"true"!=n&&"1sttime"!=r||"loopandnoslidestop"==s||t.closest("li.tp-revslider-slidesli").addClass("rs-pause-timer-once"),o||1!=r&&"true"!=r&&"on"!=r&&"no1sttime"!=r||"loopandnoslidestop"==s||t.closest("li.tp-revslider-slidesli").addClass("rs-pause-timer-always")}),e[0].addEventListener("mouseenter",function(){e.trigger("tp-mouseenter"),i.overcontainer=!0},{passive:!0}),e[0].addEventListener("mouseover",function(){e.trigger("tp-mouseover"),i.overcontainer=!0},{passive:!0}),e[0].addEventListener("mouseleave",function(){e.trigger("tp-mouseleft"),i.overcontainer=!1},{passive:!0}),e.find(".tp-caption video").each(function(e){var i=jQuery(this);i.removeClass("video-js vjs-default-skin"),i.attr("preload",""),i.css({display:"none"})}),"standard"!==i.sliderType&&(i.lazyType="all"),loadImages(e.find(".tp-static-layers"),i,0,!0),waitForCurrentImages(e.find(".tp-static-layers"),i,function(){e.find(".tp-static-layers img").each(function(){var e=jQuery(this),t=e.data("lazyload")!=undefined?e.data("lazyload"):e.attr("src"),a=getLoadObj(i,t);e.attr("src",a.src)})}),i.rowzones=[],i.allli.each(function(e){var t=jQuery(this);i.rowzones[e]=[],t.find(".rev_row_zone").each(function(){i.rowzones[e].push(jQuery(this))}),"all"!=i.lazyType&&("smart"!=i.lazyType||0!=e&&1!=e&&e!=i.slideamount&&e!=i.slideamount-1)||(loadImages(t,i,e),waitForCurrentImages(t,i,function(){}))});var g=getUrlVars("#")[0];if(g.length<9&&g.split("slide").length>1){var v=parseInt(g.split("slide")[1],0);v<1&&(v=1),v>i.slideamount&&(v=i.slideamount),i.startWithSlide=v-1}e.append('<div class="tp-loader '+i.spinner+'"><div class="dot1"></div><div class="dot2"></div><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'),i.loader=e.find(".tp-loader"),0===e.find(".tp-bannertimer").length&&e.append('<div class="tp-bannertimer" style="visibility:hidden"></div>'),e.find(".tp-bannertimer").css({width:"0%"}),i.ul.css({display:"block"}),prepareSlides(e,i),("off"!==i.parallax.type||i.scrolleffect.on)&&_R.checkForParallax&&_R.checkForParallax(e,i),_R.setSize(i),"hero"!==i.sliderType&&_R.createNavigation&&_R.createNavigation(e,i),_R.resizeThumbsTabs&&_R.resizeThumbsTabs&&_R.resizeThumbsTabs(i),contWidthManager(i);var m=i.viewPort;i.inviewport=!1,m!=undefined&&m.enable&&(jQuery.isNumeric(m.visible_area)||-1!==m.visible_area.indexOf("%")&&(m.visible_area=parseInt(m.visible_area)/100),_R.scrollTicker&&_R.scrollTicker(i,e)),"carousel"===i.sliderType&&_R.prepareCarousel&&(punchgs.TweenLite.set(i.ul,{opacity:0}),_R.prepareCarousel(i,new punchgs.TimelineLite,undefined,0),i.onlyPreparedSlide=!0),setTimeout(function(){if(!m.enable||m.enable&&i.inviewport||m.enable&&!i.inviewport&&"wait"==!m.outof)swapSlide(e);else if(i.c.addClass("tp-waitforfirststart"),i.waitForFirstSlide=!0,m.presize){var t=jQuery(i.li[0]);loadImages(t,i,0,!0),waitForCurrentImages(t.find(".tp-layers"),i,function(){_R.animateTheCaptions({slide:t,opt:i,preset:!0})})}_R.manageNavigation&&_R.manageNavigation(i),i.slideamount>1&&(!m.enable||m.enable&&i.inviewport?countDown(e,i):i.waitForCountDown=!0),setTimeout(function(){e.trigger("revolution.slide.onloaded")},100)},i.startDelay),i.startDelay=0,jQuery("body").data("rs-fullScreenMode",!1),window.addEventListener("fullscreenchange",onFullScreenChange,{passive:!0}),window.addEventListener("mozfullscreenchange",onFullScreenChange,{passive:!0}),window.addEventListener("webkitfullscreenchange",onFullScreenChange,{passive:!0});var y="resize.revslider-"+e.attr("id");jQuery(window).on(y,function(){if(e==undefined)return!1;0!=jQuery("body").find(e)&&contWidthManager(i);var t=!1;if("fullscreen"==i.sliderLayout){var a=jQuery(window).height();"mobile"==i.fallbacks.ignoreHeightChanges&&_ISM||"always"==i.fallbacks.ignoreHeightChanges?(i.fallbacks.ignoreHeightChangesSize=i.fallbacks.ignoreHeightChangesSize==undefined?0:i.fallbacks.ignoreHeightChangesSize,t=a!=i.lastwindowheight&&Math.abs(a-i.lastwindowheight)>i.fallbacks.ignoreHeightChangesSize):t=a!=i.lastwindowheight}(e.outerWidth(!0)!=i.width||e.is(":hidden")||t)&&(i.lastwindowheight=jQuery(window).height(),containerResized(e,i))}),hideSliderUnder(e,i),contWidthManager(i),i.fallbacks.disableFocusListener||"true"==i.fallbacks.disableFocusListener||!0===i.fallbacks.disableFocusListener||(e.addClass("rev_redraw_on_blurfocus"),tabBlurringCheck())}},cArray=function(e,i){if(!jQuery.isArray(e)){t=e;(e=new Array).push(t)}if(e.length<i)for(var t=e[e.length-1],a=0;a<i-e.length+2;a++)e.push(t);return e},checkHoverDependencies=function(e,i){var t=e.data();("sliderenter"===t.start||t.frames!==undefined&&t.frames[0]!=undefined&&"sliderenter"===t.frames[0].delay)&&(i.layersonhover===undefined&&(i.c.on("tp-mouseenter",function(){i.layersonhover&&jQuery.each(i.layersonhover,function(e,t){var a=t.data("closestli")||t.closest(".tp-revslider-slidesli"),n=t.data("staticli")||t.closest(".tp-static-layers");t.data("closestli")===undefined&&(t.data("closestli",a),t.data("staticli",n)),(a.length>0&&a.hasClass("active-revslide")||a.hasClass("processing-revslide")||n.length>0)&&(t.data("animdirection","in"),_R.playAnimationFrame&&_R.playAnimationFrame({caption:t,opt:i,frame:"frame_0",triggerdirection:"in",triggerframein:"frame_0",triggerframeout:"frame_999"}),t.data("triggerstate","on"))})}),i.c.on("tp-mouseleft",function(){i.layersonhover&&jQuery.each(i.layersonhover,function(e,t){t.data("animdirection","out"),t.data("triggered",!0),t.data("triggerstate","off"),_R.stopVideo&&_R.stopVideo(t,i),_R.playAnimationFrame&&_R.playAnimationFrame({caption:t,opt:i,frame:"frame_999",triggerdirection:"out",triggerframein:"frame_0",triggerframeout:"frame_999"})})}),i.layersonhover=new Array),i.layersonhover.push(e))},contWidthManager=function(e){var i=_R.getHorizontalOffset(e.c,"left");if("auto"==e.sliderLayout||"fullscreen"===e.sliderLayout&&"on"==e.fullScreenAutoWidth)"fullscreen"==e.sliderLayout&&"on"==e.fullScreenAutoWidth?punchgs.TweenLite.set(e.ul,{left:0,width:e.c.width()}):punchgs.TweenLite.set(e.ul,{left:i,width:e.c.width()-_R.getHorizontalOffset(e.c,"both")});else{var t=Math.ceil(e.c.closest(".forcefullwidth_wrapper_tp_banner").offset().left-i);punchgs.TweenLite.set(e.c.parent(),{left:0-t+"px",width:jQuery(window).width()-_R.getHorizontalOffset(e.c,"both")})}e.slayers&&"fullwidth"!=e.sliderLayout&&"fullscreen"!=e.sliderLayout&&punchgs.TweenLite.set(e.slayers,{left:i})},cv=function(e,i){return e===undefined?i:e},hideSliderUnder=function(e,i,t){var a=e.parent();jQuery(window).width()<i.hideSliderAtLimit?(e.trigger("stoptimer"),"none"!=a.css("display")&&a.data("olddisplay",a.css("display")),a.css({display:"none"})):e.is(":hidden")&&t&&(a.data("olddisplay")!=undefined&&"undefined"!=a.data("olddisplay")&&"none"!=a.data("olddisplay")?a.css({display:a.data("olddisplay")}):a.css({display:"block"}),e.trigger("restarttimer"),setTimeout(function(){containerResized(e,i)},150)),_R.hideUnHideNav&&_R.hideUnHideNav(i)},containerResized=function(e,i){if(e.trigger("revolution.slide.beforeredraw"),1==i.infullscreenmode&&(i.minHeight=jQuery(window).height()),setCurWinRange(i),setCurWinRange(i,!0),!_R.resizeThumbsTabs||!0===_R.resizeThumbsTabs(i)){if(hideSliderUnder(e,i,!0),contWidthManager(i),"carousel"==i.sliderType&&_R.prepareCarousel(i,!0),e===undefined)return!1;_R.setSize(i),i.conw=i.c.width(),i.conh=i.infullscreenmode?i.minHeight:i.c.height();var t=e.find(".active-revslide .slotholder"),a=e.find(".processing-revslide .slotholder");removeSlots(e,i,e,2),"standard"===i.sliderType&&(punchgs.TweenLite.set(a.find(".defaultimg"),{opacity:0}),t.find(".defaultimg").css({opacity:1})),"carousel"===i.sliderType&&i.lastconw!=i.conw&&(clearTimeout(i.pcartimer),i.pcartimer=setTimeout(function(){_R.prepareCarousel(i,!0),"carousel"==i.sliderType&&"on"===i.carousel.showLayersAllTime&&jQuery.each(i.li,function(e){_R.animateTheCaptions({slide:jQuery(i.li[e]),opt:i,recall:!0})})},100),i.lastconw=i.conw),_R.manageNavigation&&_R.manageNavigation(i),_R.animateTheCaptions&&e.find(".active-revslide").length>0&&_R.animateTheCaptions({slide:e.find(".active-revslide"),opt:i,recall:!0}),"on"==a.data("kenburns")&&_R.startKenBurn(a,i,a.data("kbtl")!==undefined?a.data("kbtl").progress():0),"on"==t.data("kenburns")&&_R.startKenBurn(t,i,t.data("kbtl")!==undefined?t.data("kbtl").progress():0),_R.animateTheCaptions&&e.find(".processing-revslide").length>0&&_R.animateTheCaptions({slide:e.find(".processing-revslide"),opt:i,recall:!0}),_R.manageNavigation&&_R.manageNavigation(i)}e.trigger("revolution.slide.afterdraw")},setScale=function(e){e.bw=e.width/e.gridwidth[e.curWinRange],e.bh=e.height/e.gridheight[e.curWinRange],e.bh>e.bw?e.bh=e.bw:e.bw=e.bh,(e.bh>1||e.bw>1)&&(e.bw=1,e.bh=1)},prepareSlides=function(e,i){if(e.find(".tp-caption").each(function(){var e=jQuery(this);e.data("transition")!==undefined&&e.addClass(e.data("transition"))}),i.ul.css({overflow:"hidden",width:"100%",height:"100%",maxHeight:e.parent().css("maxHeight")}),"on"==i.autoHeight&&(i.ul.css({overflow:"hidden",width:"100%",height:"100%",maxHeight:"none"}),e.css({maxHeight:"none"}),e.parent().css({maxHeight:"none"})),i.allli.each(function(e){var t=jQuery(this),a=t.data("originalindex");(i.startWithSlide!=undefined&&a==i.startWithSlide||i.startWithSlide===undefined&&0==e)&&t.addClass("next-revslide"),t.css({width:"100%",height:"100%",overflow:"hidden"})}),"carousel"===i.sliderType){i.ul.css({overflow:"visible"}).wrap('<div class="tp-carousel-wrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden;"></div>');var t='<div style="clear:both;display:block;width:100%;height:1px;position:relative;margin-bottom:-1px"></div>';i.c.parent().prepend(t),i.c.parent().append(t),_R.prepareCarousel(i)}e.parent().css({overflow:"visible"}),i.allli.find(">img").each(function(e){var t=jQuery(this),a=t.closest("li"),n=a.find(".rs-background-video-layer");n.addClass("defaultvid").css({zIndex:30}),t.addClass("defaultimg"),"on"==i.fallbacks.panZoomDisableOnMobile&&_ISM&&(t.data("kenburns","off"),t.data("bgfit","cover"));var r=a.data("mediafilter");r="none"===r||r===undefined?"":r,t.wrap('<div class="slotholder" style="position:absolute; top:0px; left:0px; z-index:0;width:100%;height:100%;"></div>'),n.appendTo(a.find(".slotholder"));var o=t.data();t.closest(".slotholder").data(o),n.length>0&&o.bgparallax!=undefined&&(n.data("bgparallax",o.bgparallax),n.data("showcoveronpause","on")),"none"!=i.dottedOverlay&&i.dottedOverlay!=undefined&&t.closest(".slotholder").append('<div class="tp-dottedoverlay '+i.dottedOverlay+'"></div>');var s=t.attr("src");o.src=s,o.bgfit=o.bgfit||"cover",o.bgrepeat=o.bgrepeat||"no-repeat",o.bgposition=o.bgposition||"center center";t.closest(".slotholder");var l=t.data("bgcolor"),d="";d=l!==undefined&&l.indexOf("gradient")>=0?'"background:'+l+';width:100%;height:100%;"':'"background-color:'+l+";background-repeat:"+o.bgrepeat+";background-image:url("+s+");background-size:"+o.bgfit+";background-position:"+o.bgposition+';width:100%;height:100%;"',t.data("mediafilter",r),r="on"===t.data("kenburns")?"":r;var c=jQuery('<div class="tp-bgimg defaultimg '+r+'" data-bgcolor="'+l+'" style='+d+"></div>");t.parent().append(c);var u=document.createComment("Runtime Modification - Img tag is Still Available for SEO Goals in Source - "+t.get(0).outerHTML);t.replaceWith(u),c.data(o),c.attr("src",s),"standard"!==i.sliderType&&"undefined"!==i.sliderType||c.css({opacity:0})}),i.scrolleffect.on&&"on"===i.scrolleffect.on_slidebg&&(i.allslotholder=new Array,i.allli.find(".slotholder").each(function(){jQuery(this).wrap('<div style="display:block;position:absolute;top:0px;left:0px;width:100%;height:100%" class="slotholder_fadeoutwrap"></div>')}),i.allslotholder=i.c.find(".slotholder_fadeoutwrap"))},removeSlots=function(e,i,t,a){i.removePrepare=i.removePrepare+a,t.find(".slot, .slot-circle-wrapper").each(function(){jQuery(this).remove()}),i.transition=0,i.removePrepare=0},cutParams=function(e){var i=e;return e!=undefined&&e.length>0&&(i=e.split("?")[0]),i},relativeRedir=function(e){return location.pathname.replace(/(.*)\/[^/]*/,"$1/"+e)},abstorel=function(e,i){var t=e.split("/"),a=i.split("/");t.pop();for(var n=0;n<a.length;n++)"."!=a[n]&&(".."==a[n]?t.pop():t.push(a[n]));return t.join("/")},imgLoaded=function(e,i,t){i.syncload--,i.loadqueue&&jQuery.each(i.loadqueue,function(i,a){var n=a.src.replace(/\.\.\/\.\.\//gi,""),r=self.location.href,o=document.location.origin,s=r.substring(0,r.length-1)+"/"+n,l=o+"/"+n,d=abstorel(self.location.href,a.src);r=r.substring(0,r.length-1)+n,(cutParams(o+=n)===cutParams(decodeURIComponent(e.src))||cutParams(r)===cutParams(decodeURIComponent(e.src))||cutParams(d)===cutParams(decodeURIComponent(e.src))||cutParams(l)===cutParams(decodeURIComponent(e.src))||cutParams(s)===cutParams(decodeURIComponent(e.src))||cutParams(a.src)===cutParams(decodeURIComponent(e.src))||cutParams(a.src).replace(/^.*\/\/[^\/]+/,"")===cutParams(decodeURIComponent(e.src)).replace(/^.*\/\/[^\/]+/,"")||"file://"===window.location.origin&&cutParams(e.src).match(new RegExp(n)))&&(a.progress=t,a.width=e.width,a.height=e.height)}),progressImageLoad(i)},progressImageLoad=function(e){3!=e.syncload&&e.loadqueue&&jQuery.each(e.loadqueue,function(i,t){if(t.progress.match(/prepared/g)&&e.syncload<=3){if(e.syncload++,"img"==t.type){var a=new Image;a.onload=function(){imgLoaded(this,e,"loaded"),t.error=!1},a.onerror=function(){imgLoaded(this,e,"failed"),t.error=!0},a.src=t.src}else jQuery.get(t.src,function(i){t.innerHTML=(new XMLSerializer).serializeToString(i.documentElement),t.progress="loaded",e.syncload--,progressImageLoad(e)}).fail(function(){t.progress="failed",e.syncload--,progressImageLoad(e)});t.progress="inload"}})},addToLoadQueue=function(e,i,t,a,n){var r=!1;if(i.loadqueue&&jQuery.each(i.loadqueue,function(i,t){t.src===e&&(r=!0)}),!r){var o=new Object;o.src=e,o.starttoload=jQuery.now(),o.type=a||"img",o.prio=t,o.progress="prepared",o.static=n,i.loadqueue.push(o)}},loadImages=function(e,i,t,a){e.find("img,.defaultimg, .tp-svg-layer").each(function(){var e=jQuery(this),n=e.data("lazyload")!==undefined&&"undefined"!==e.data("lazyload")?e.data("lazyload"):e.data("svg_src")!=undefined?e.data("svg_src"):e.attr("src"),r=e.data("svg_src")!=undefined?"svg":"img";e.data("start-to-load",jQuery.now()),addToLoadQueue(n,i,t,r,a)}),progressImageLoad(i)},getLoadObj=function(e,i){var t=new Object;return e.loadqueue&&jQuery.each(e.loadqueue,function(e,a){a.src==i&&(t=a)}),t},waitForCurrentImages=function(e,i,t){var a=!1;e.find("img,.defaultimg, .tp-svg-layer").each(function(){var t=jQuery(this),n=t.data("lazyload")!=undefined?t.data("lazyload"):t.data("svg_src")!=undefined?t.data("svg_src"):t.attr("src"),r=getLoadObj(i,n);if(t.data("loaded")===undefined&&r!==undefined&&r.progress&&r.progress.match(/loaded/g)){if(t.attr("src",r.src),"img"==r.type)if(t.hasClass("defaultimg"))_R.isIE(8)?defimg.attr("src",r.src):-1==r.src.indexOf("images/transparent.png")&&-1==r.src.indexOf("assets/transparent.png")||t.data("bgcolor")===undefined?t.css({backgroundImage:'url("'+r.src+'")'}):t.data("bgcolor")!==undefined&&t.css({background:t.data("bgcolor")}),e.data("owidth",r.width),e.data("oheight",r.height),e.find(".slotholder").data("owidth",r.width),e.find(".slotholder").data("oheight",r.height);else{var o=t.data("ww"),s=t.data("hh");t.data("owidth",r.width),t.data("oheight",r.height),o=o==undefined||"auto"==o||""==o?r.width:o,s=s==undefined||"auto"==s||""==s?r.height:s,!jQuery.isNumeric(o)&&o.indexOf("%")>0&&(s=o),t.data("ww",o),t.data("hh",s)}else"svg"==r.type&&"loaded"==r.progress&&(t.append('<div class="tp-svg-innercontainer"></div>'),t.find(".tp-svg-innercontainer").append(r.innerHTML));t.data("loaded",!0)}if(r&&r.progress&&r.progress.match(/inprogress|inload|prepared/g)&&(!r.error&&jQuery.now()-t.data("start-to-load")<5e3?a=!0:(r.progress="failed",r.reported_img||(r.reported_img=!0,console.warn(n+"  Could not be loaded !")))),1==i.youtubeapineeded&&(!window.YT||YT.Player==undefined)&&(a=!0,jQuery.now()-i.youtubestarttime>5e3&&1!=i.youtubewarning)){i.youtubewarning=!0;l="YouTube Api Could not be loaded !";"https:"===location.protocol&&(l+=" Please Check and Renew SSL Certificate !"),console.error(l),i.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>'+l+"</strong></div>")}if(1==i.vimeoapineeded&&!window.Vimeo&&(a=!0,jQuery.now()-i.vimeostarttime>5e3&&1!=i.vimeowarning)){i.vimeowarning=!0;var l="Vimeo Api Could not be loaded !";"https:"===location.protocol&&(l+=" Please Check and Renew SSL Certificate !"),console.error(l),i.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>'+l+"</strong></div>")}}),!_ISM&&i.audioqueue&&i.audioqueue.length>0&&jQuery.each(i.audioqueue,function(e,i){i.status&&"prepared"===i.status&&jQuery.now()-i.start<i.waittime&&(a=!0)}),jQuery.each(i.loadqueue,function(e,i){!0!==i.static||"loaded"==i.progress&&"failed"!==i.progress||("failed"==i.progress?i.reported||(i.reported=!0,console.warn("Static Image "+i.src+"  Could not be loaded in time. Error Exists:"+i.error)):!i.error&&jQuery.now()-i.starttoload<5e3?a=!0:i.reported||(i.reported=!0,console.warn("Static Image "+i.src+"  Could not be loaded within 5s! Error Exists:"+i.error)))}),a?punchgs.TweenLite.delayedCall(.18,waitForCurrentImages,[e,i,t]):punchgs.TweenLite.delayedCall(.18,t)},swapSlide=function(e){var i=e[0].opt;if(clearTimeout(i.waitWithSwapSlide),e.find(".processing-revslide").length>0)return i.waitWithSwapSlide=setTimeout(function(){swapSlide(e)},150),!1;var t=e.find(".active-revslide"),a=e.find(".next-revslide"),n=a.find(".defaultimg");if("carousel"!==i.sliderType||i.carousel.fadein||(punchgs.TweenLite.to(i.ul,1,{opacity:1}),i.carousel.fadein=!0),a.index()===t.index()&&!0!==i.onlyPreparedSlide)return a.removeClass("next-revslide"),!1;!0===i.onlyPreparedSlide&&(i.onlyPreparedSlide=!1,jQuery(i.li[0]).addClass("processing-revslide")),a.removeClass("next-revslide").addClass("processing-revslide"),-1===a.index()&&"carousel"===i.sliderType&&(a=jQuery(i.li[0])),a.data("slide_on_focus_amount",a.data("slide_on_focus_amount")+1||1),"on"==i.stopLoop&&a.index()==i.lastslidetoshow-1&&(e.find(".tp-bannertimer").css({visibility:"hidden"}),e.trigger("revolution.slide.onstop"),i.noloopanymore=1),a.index()===i.slideamount-1&&(i.looptogo=i.looptogo-1,i.looptogo<=0&&(i.stopLoop="on")),i.tonpause=!0,e.trigger("stoptimer"),i.cd=0,"off"===i.spinner&&(i.loader!==undefined?i.loader.css({display:"none"}):i.loadertimer=setTimeout(function(){i.loader!==undefined&&i.loader.css({display:"block"})},50)),loadImages(a,i,1),_R.preLoadAudio&&_R.preLoadAudio(a,i,1),waitForCurrentImages(a,i,function(){a.find(".rs-background-video-layer").each(function(){var e=jQuery(this);e.hasClass("HasListener")||(e.data("bgvideo",1),_R.manageVideoLayer&&_R.manageVideoLayer(e,i)),0==e.find(".rs-fullvideo-cover").length&&e.append('<div class="rs-fullvideo-cover"></div>')}),swapSlideProgress(n,e)})},swapSlideProgress=function(e,i){var t=i.find(".active-revslide"),a=i.find(".processing-revslide"),n=t.find(".slotholder"),r=a.find(".slotholder"),o=i[0].opt;o.tonpause=!1,o.cd=0,clearTimeout(o.loadertimer),o.loader!==undefined&&o.loader.css({display:"none"}),_R.setSize(o),_R.slotSize(e,o),_R.manageNavigation&&_R.manageNavigation(o);var s={};s.nextslide=a,s.currentslide=t,i.trigger("revolution.slide.onbeforeswap",s),o.transition=1,o.videoplaying=!1,a.data("delay")!=undefined?(o.cd=0,o.delay=a.data("delay")):o.delay=o.origcd,"true"==a.data("ssop")||!0===a.data("ssop")?o.ssop=!0:o.ssop=!1,i.trigger("nulltimer");var l=t.index(),d=a.index();o.sdir=d<l?1:0,"arrow"==o.sc_indicator&&(0==l&&d==o.slideamount-1&&(o.sdir=1),l==o.slideamount-1&&0==d&&(o.sdir=0)),o.lsdir=o.lsdir===undefined?o.sdir:o.lsdir,o.dirc=o.lsdir!=o.sdir,o.lsdir=o.sdir,t.index()!=a.index()&&1!=o.firststart&&_R.removeTheCaptions&&_R.removeTheCaptions(t,o),a.hasClass("rs-pause-timer-once")||a.hasClass("rs-pause-timer-always")?o.videoplaying=!0:i.trigger("restarttimer"),a.removeClass("rs-pause-timer-once");var c,u;if(o.currentSlide=t.index(),o.nextSlide=a.index(),"carousel"==o.sliderType)u=new punchgs.TimelineLite,_R.prepareCarousel(o,u),letItFree(i,r,n,a,t,u),o.transition=0,o.firststart=0;else{(u=new punchgs.TimelineLite({onComplete:function(){letItFree(i,r,n,a,t,u)}})).add(punchgs.TweenLite.set(r.find(".defaultimg"),{opacity:0})),u.pause(),_R.animateTheCaptions&&_R.animateTheCaptions({slide:a,opt:o,preset:!0}),1==o.firststart&&(punchgs.TweenLite.set(t,{autoAlpha:0}),o.firststart=0),punchgs.TweenLite.set(t,{zIndex:18}),punchgs.TweenLite.set(a,{autoAlpha:0,zIndex:20}),"prepared"==a.data("differentissplayed")&&(a.data("differentissplayed","done"),a.data("transition",a.data("savedtransition")),a.data("slotamount",a.data("savedslotamount")),a.data("masterspeed",a.data("savedmasterspeed"))),a.data("fstransition")!=undefined&&"done"!=a.data("differentissplayed")&&(a.data("savedtransition",a.data("transition")),a.data("savedslotamount",a.data("slotamount")),a.data("savedmasterspeed",a.data("masterspeed")),a.data("transition",a.data("fstransition")),a.data("slotamount",a.data("fsslotamount")),a.data("masterspeed",a.data("fsmasterspeed")),a.data("differentissplayed","prepared")),a.data("transition")==undefined&&a.data("transition","random"),c=0;var p=a.data("transition")!==undefined?a.data("transition").split(","):"fade",f=a.data("nexttransid")==undefined?-1:a.data("nexttransid");"on"==a.data("randomtransition")?f=Math.round(Math.random()*p.length):f+=1,f==p.length&&(f=0),a.data("nexttransid",f);var h=p[f];o.ie&&("boxfade"==h&&(h="boxslide"),"slotfade-vertical"==h&&(h="slotzoom-vertical"),"slotfade-horizontal"==h&&(h="slotzoom-horizontal")),_R.isIE(8)&&(h=11),u=_R.animateSlide(c,h,i,a,t,r,n,u),"on"==r.data("kenburns")&&(_R.startKenBurn(r,o),u.add(punchgs.TweenLite.set(r,{autoAlpha:0}))),u.pause()}_R.scrollHandling&&(_R.scrollHandling(o,!0,0),u.eventCallback("onUpdate",function(){_R.scrollHandling(o,!0,0)})),"off"!=o.parallax.type&&o.parallax.firstgo==undefined&&_R.scrollHandling&&(o.parallax.firstgo=!0,o.lastscrolltop=-999,_R.scrollHandling(o,!0,0),setTimeout(function(){o.lastscrolltop=-999,_R.scrollHandling(o,!0,0)},210),setTimeout(function(){o.lastscrolltop=-999,_R.scrollHandling(o,!0,0)},420)),_R.animateTheCaptions?"carousel"===o.sliderType&&"on"===o.carousel.showLayersAllTime?(jQuery.each(o.li,function(e){o.carousel.allLayersStarted?_R.animateTheCaptions({slide:jQuery(o.li[e]),opt:o,recall:!0}):o.li[e]===a?_R.animateTheCaptions({slide:jQuery(o.li[e]),maintimeline:u,opt:o,startslideanimat:0}):_R.animateTheCaptions({slide:jQuery(o.li[e]),opt:o,startslideanimat:0})}),o.carousel.allLayersStarted=!0):_R.animateTheCaptions({slide:a,opt:o,maintimeline:u,startslideanimat:0}):u!=undefined&&setTimeout(function(){u.resume()},30),punchgs.TweenLite.to(a,.001,{autoAlpha:1})},letItFree=function(e,i,t,a,n,r){var o=e[0].opt;"carousel"===o.sliderType||(o.removePrepare=0,punchgs.TweenLite.to(i.find(".defaultimg"),.001,{zIndex:20,autoAlpha:1,onComplete:function(){removeSlots(e,o,a,1)}}),a.index()!=n.index()&&punchgs.TweenLite.to(n,.2,{zIndex:18,autoAlpha:0,onComplete:function(){removeSlots(e,o,n,1)}})),e.find(".active-revslide").removeClass("active-revslide"),e.find(".processing-revslide").removeClass("processing-revslide").addClass("active-revslide"),o.act=a.index(),o.c.attr("data-slideactive",e.find(".active-revslide").data("index")),"scroll"!=o.parallax.type&&"scroll+mouse"!=o.parallax.type&&"mouse+scroll"!=o.parallax.type||(o.lastscrolltop=-999,_R.scrollHandling(o)),r.clear(),t.data("kbtl")!=undefined&&(t.data("kbtl").reverse(),t.data("kbtl").timeScale(25)),"on"==i.data("kenburns")&&(i.data("kbtl")!=undefined?(i.data("kbtl").timeScale(1),i.data("kbtl").play()):_R.startKenBurn(i,o)),a.find(".rs-background-video-layer").each(function(e){if(_ISM&&!o.fallbacks.allowHTML5AutoPlayOnAndroid)return!1;var i=jQuery(this);_R.resetVideo(i,o,!1,!0),punchgs.TweenLite.fromTo(i,1,{autoAlpha:0},{autoAlpha:1,ease:punchgs.Power3.easeInOut,delay:.2,onComplete:function(){_R.animcompleted&&_R.animcompleted(i,o)}})}),n.find(".rs-background-video-layer").each(function(e){if(_ISM)return!1;var i=jQuery(this);_R.stopVideo&&(_R.resetVideo(i,o),_R.stopVideo(i,o)),punchgs.TweenLite.to(i,1,{autoAlpha:0,ease:punchgs.Power3.easeInOut,delay:.2})});var s={};if(s.slideIndex=a.index()+1,s.slideLIIndex=a.index(),s.slide=a,s.currentslide=a,s.prevslide=n,o.last_shown_slide=n.index(),e.trigger("revolution.slide.onchange",s),e.trigger("revolution.slide.onafterswap",s),o.startWithSlide!==undefined&&"done"!==o.startWithSlide&&"carousel"===o.sliderType){for(var l=o.startWithSlide,d=0;d<=o.li.length-1;d++)jQuery(o.li[d]).data("originalindex")===o.startWithSlide&&(l=d);0!==l&&_R.callingNewSlide(o.c,l),o.startWithSlide="done"}o.duringslidechange=!1;var c=n.data("slide_on_focus_amount"),u=n.data("hideafterloop");0!=u&&u<=c&&o.c.revremoveslide(n.index());var p=-1===o.nextSlide||o.nextSlide===undefined?0:o.nextSlide;o.rowzones!=undefined&&(p=p>o.rowzones.length?o.rowzones.length:p),o.rowzones!=undefined&&o.rowzones.length>0&&o.rowzones[p]!=undefined&&p>=0&&p<=o.rowzones.length&&o.rowzones[p].length>0&&_R.setSize(o)},removeAllListeners=function(e,i){e.children().each(function(){try{jQuery(this).die("click")}catch(e){}try{jQuery(this).die("mouseenter")}catch(e){}try{jQuery(this).die("mouseleave")}catch(e){}try{jQuery(this).unbind("hover")}catch(e){}});try{e.die("click","mouseenter","mouseleave")}catch(e){}clearInterval(i.cdint),e=null},countDown=function(e,i){i.cd=0,i.loop=0,i.stopAfterLoops!=undefined&&i.stopAfterLoops>-1?i.looptogo=i.stopAfterLoops:i.looptogo=9999999,i.stopAtSlide!=undefined&&i.stopAtSlide>-1?i.lastslidetoshow=i.stopAtSlide:i.lastslidetoshow=999,i.stopLoop="off",0==i.looptogo&&(i.stopLoop="on");var t=e.find(".tp-bannertimer");e.on("stoptimer",function(){var e=jQuery(this).find(".tp-bannertimer");e[0].tween.pause(),"on"==i.disableProgressBar&&e.css({visibility:"hidden"}),i.sliderstatus="paused",_R.unToggleState(i.slidertoggledby)}),e.on("starttimer",function(){i.forcepause_viatoggle||(1!=i.conthover&&1!=i.videoplaying&&i.width>i.hideSliderAtLimit&&1!=i.tonpause&&1!=i.overnav&&1!=i.ssop&&(1===i.noloopanymore||i.viewPort.enable&&!i.inviewport||(t.css({visibility:"visible"}),t[0].tween.resume(),i.sliderstatus="playing")),"on"==i.disableProgressBar&&t.css({visibility:"hidden"}),_R.toggleState(i.slidertoggledby))}),e.on("restarttimer",function(){if(!i.forcepause_viatoggle){var e=jQuery(this).find(".tp-bannertimer");if(i.mouseoncontainer&&"on"==i.navigation.onHoverStop&&!_ISM)return!1;1===i.noloopanymore||i.viewPort.enable&&!i.inviewport||1==i.ssop||(e.css({visibility:"visible"}),e[0].tween.kill(),e[0].tween=punchgs.TweenLite.fromTo(e,i.delay/1e3,{width:"0%"},{force3D:"auto",width:"100%",ease:punchgs.Linear.easeNone,onComplete:a,delay:1}),i.sliderstatus="playing"),"on"==i.disableProgressBar&&e.css({visibility:"hidden"}),_R.toggleState(i.slidertoggledby)}}),e.on("nulltimer",function(){t[0].tween.kill(),t[0].tween=punchgs.TweenLite.fromTo(t,i.delay/1e3,{width:"0%"},{force3D:"auto",width:"100%",ease:punchgs.Linear.easeNone,onComplete:a,delay:1}),t[0].tween.pause(0),"on"==i.disableProgressBar&&t.css({visibility:"hidden"}),i.sliderstatus="paused"});var a=function(){0==jQuery("body").find(e).length&&(removeAllListeners(e,i),clearInterval(i.cdint)),e.trigger("revolution.slide.slideatend"),1==e.data("conthover-changed")&&(i.conthover=e.data("conthover"),e.data("conthover-changed",0)),_R.callingNewSlide(e,1)};t[0].tween=punchgs.TweenLite.fromTo(t,i.delay/1e3,{width:"0%"},{force3D:"auto",width:"100%",ease:punchgs.Linear.easeNone,onComplete:a,delay:1}),i.slideamount>1&&(0!=i.stopAfterLoops||1!=i.stopAtSlide)?e.trigger("starttimer"):(i.noloopanymore=1,e.trigger("nulltimer")),e.on("tp-mouseenter",function(){i.mouseoncontainer=!0,"on"!=i.navigation.onHoverStop||_ISM||(e.trigger("stoptimer"),e.trigger("revolution.slide.onpause"))}),e.on("tp-mouseleft",function(){i.mouseoncontainer=!1,1!=e.data("conthover")&&"on"==i.navigation.onHoverStop&&(1==i.viewPort.enable&&i.inviewport||0==i.viewPort.enable)&&(e.trigger("revolution.slide.onresume"),e.trigger("starttimer"))})},vis=function(){var e,i,t={hidden:"visibilitychange",webkitHidden:"webkitvisibilitychange",mozHidden:"mozvisibilitychange",msHidden:"msvisibilitychange"};for(e in t)if(e in document){i=t[e];break}return function(t){return t&&document.addEventListener(i,t,{pasive:!0}),!document[e]}}(),restartOnFocus=function(){jQuery(".rev_redraw_on_blurfocus").each(function(){var e=jQuery(this)[0].opt;if(e==undefined||e.c==undefined||0===e.c.length)return!1;1!=e.windowfocused&&(e.windowfocused=!0,punchgs.TweenLite.delayedCall(.3,function(){"on"==e.fallbacks.nextSlideOnWindowFocus&&e.c.revnext(),e.c.revredraw(),"playing"==e.lastsliderstatus&&e.c.revresume()}))})},lastStatBlur=function(){jQuery(".rev_redraw_on_blurfocus").each(function(){var e=jQuery(this)[0].opt;e.windowfocused=!1,e.lastsliderstatus=e.sliderstatus,e.c.revpause();var i=e.c.find(".active-revslide .slotholder"),t=e.c.find(".processing-revslide .slotholder");"on"==t.data("kenburns")&&_R.stopKenBurn(t,e),"on"==i.data("kenburns")&&_R.stopKenBurn(i,e)})},tabBlurringCheck=function(){var e=document.documentMode===undefined,i=window.chrome;1!==jQuery("body").data("revslider_focus_blur_listener")&&(jQuery("body").data("revslider_focus_blur_listener",1),e&&!i?jQuery(window).on("focusin",function(){restartOnFocus()}).on("focusout",function(){lastStatBlur()}):window.addEventListener?(window.addEventListener("focus",function(e){restartOnFocus()},{capture:!1,passive:!0}),window.addEventListener("blur",function(e){lastStatBlur()},{capture:!1,passive:!0})):(window.attachEvent("focus",function(e){restartOnFocus()}),window.attachEvent("blur",function(e){lastStatBlur()})))},getUrlVars=function(e){for(var i,t=[],a=window.location.href.slice(window.location.href.indexOf(e)+1).split("_"),n=0;n<a.length;n++)a[n]=a[n].replace("%3D","="),i=a[n].split("="),t.push(i[0]),t[i[0]]=i[1];return t}}(jQuery);

/********************************************
 * REVOLUTION 5.4.6.4 EXTENSION - ACTIONS
 * @version: 2.1.0 (22.11.2017)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
*********************************************/

!function($){"use strict";function getScrollRoot(){var e,t=document.documentElement,o=document.body,a=(void 0!==window.pageYOffset?window.pageYOffset:null)||o.scrollTop||t.scrollTop;return t.scrollTop=o.scrollTop=a+(a>0)?-1:1,e=t.scrollTop!==a?t:o,e.scrollTop=a,e}var _R=jQuery.fn.revolution,_ISM=_R.is_mobile(),extension={alias:"Actions Min JS",name:"revolution.extensions.actions.min.js",min_core:"5.4.5",version:"2.1.0"};jQuery.extend(!0,_R,{checkActions:function(e,t,o){if("stop"===_R.compare_version(extension).check)return!1;checkActions_intern(e,t,o)}});var checkActions_intern=function(e,t,o){o&&jQuery.each(o,function(o,a){a.delay=parseInt(a.delay,0)/1e3,e.addClass("tp-withaction"),t.fullscreen_esclistener||"exitfullscreen"!=a.action&&"togglefullscreen"!=a.action||(jQuery(document).keyup(function(t){27==t.keyCode&&jQuery("#rs-go-fullscreen").length>0&&e.trigger(a.event)}),t.fullscreen_esclistener=!0);var r="backgroundvideo"==a.layer?jQuery(".rs-background-video-layer"):"firstvideo"==a.layer?jQuery(".tp-revslider-slidesli").find(".tp-videolayer"):jQuery("#"+a.layer);switch(-1!=jQuery.inArray(a.action,["toggleslider","toggle_mute_video","toggle_global_mute_video","togglefullscreen"])&&e.data("togglelisteners",!0),a.action){case"togglevideo":jQuery.each(r,function(t,o){var a=(o=jQuery(o)).data("videotoggledby");void 0==a&&(a=new Array),a.push(e),o.data("videotoggledby",a)});break;case"togglelayer":jQuery.each(r,function(t,o){var r=(o=jQuery(o)).data("layertoggledby");void 0==r&&(r=new Array),r.push(e),o.data("layertoggledby",r),o.data("triggered_startstatus",a.layerstatus)});break;case"toggle_mute_video":case"toggle_global_mute_video":jQuery.each(r,function(t,o){var a=(o=jQuery(o)).data("videomutetoggledby");void 0==a&&(a=new Array),a.push(e),o.data("videomutetoggledby",a)});break;case"toggleslider":void 0==t.slidertoggledby&&(t.slidertoggledby=new Array),t.slidertoggledby.push(e);break;case"togglefullscreen":void 0==t.fullscreentoggledby&&(t.fullscreentoggledby=new Array),t.fullscreentoggledby.push(e)}switch(e.on(a.event,function(){if("click"===a.event&&e.hasClass("tp-temporarydisabled"))return!1;var o="backgroundvideo"==a.layer?jQuery(".active-revslide .slotholder .rs-background-video-layer"):"firstvideo"==a.layer?jQuery(".active-revslide .tp-videolayer").first():jQuery("#"+a.layer);if("stoplayer"==a.action||"togglelayer"==a.action||"startlayer"==a.action){if(o.length>0){var r=o.data();void 0!==r.clicked_time_stamp&&(new Date).getTime()-r.clicked_time_stamp>150&&(clearTimeout(r.triggerdelayIn),clearTimeout(r.triggerdelayOut)),r.clicked_time_stamp=(new Date).getTime(),"startlayer"==a.action||"togglelayer"==a.action&&"in"!=o.data("animdirection")?(r.animdirection="in",r.triggerstate="on",_R.toggleState(r.layertoggledby),_R.playAnimationFrame&&(clearTimeout(r.triggerdelayIn),r.triggerdelayIn=setTimeout(function(){_R.playAnimationFrame({caption:o,opt:t,frame:"frame_0",triggerdirection:"in",triggerframein:"frame_0",triggerframeout:"frame_999"})},1e3*a.delay))):("stoplayer"==a.action||"togglelayer"==a.action&&"out"!=o.data("animdirection"))&&(r.animdirection="out",r.triggered=!0,r.triggerstate="off",_R.stopVideo&&_R.stopVideo(o,t),_R.unToggleState(r.layertoggledby),_R.endMoveCaption&&(clearTimeout(r.triggerdelayOut),r.triggerdelayOut=setTimeout(function(){_R.playAnimationFrame({caption:o,opt:t,frame:"frame_999",triggerdirection:"out",triggerframein:"frame_0",triggerframeout:"frame_999"})},1e3*a.delay)))}}else!_ISM||"playvideo"!=a.action&&"stopvideo"!=a.action&&"togglevideo"!=a.action&&"mutevideo"!=a.action&&"unmutevideo"!=a.action&&"toggle_mute_video"!=a.action&&"toggle_global_mute_video"!=a.action?(a.delay="NaN"===a.delay||NaN===a.delay?0:a.delay,_R.isSafari11()?actionSwitches(o,t,a,e):punchgs.TweenLite.delayedCall(a.delay,function(){actionSwitches(o,t,a,e)},[o,t,a,e])):actionSwitches(o,t,a,e)}),a.action){case"togglelayer":case"startlayer":case"playlayer":case"stoplayer":var l=(r=jQuery("#"+a.layer)).data();r.length>0&&void 0!==l&&(void 0!==l.frames&&"bytrigger"!=l.frames[0].delay||void 0===l.frames&&"bytrigger"!==l.start)&&(l.triggerstate="on")}})},actionSwitches=function(tnc,opt,a,_nc){switch(a.action){case"scrollbelow":a.speed=void 0!==a.speed?a.speed:400,a.ease=void 0!==a.ease?a.ease:punchgs.Power2.easeOut,_nc.addClass("tp-scrollbelowslider"),_nc.data("scrolloffset",a.offset),_nc.data("scrolldelay",a.delay),_nc.data("scrollspeed",a.speed),_nc.data("scrollease",a.ease);var off=getOffContH(opt.fullScreenOffsetContainer)||0,aof=parseInt(a.offset,0)||0;off=off-aof||0,opt.scrollRoot=jQuery(document);var sobj={_y:opt.scrollRoot.scrollTop()};punchgs.TweenLite.to(sobj,a.speed/1e3,{_y:opt.c.offset().top+jQuery(opt.li[0]).height()-off,ease:a.ease,onUpdate:function(){opt.scrollRoot.scrollTop(sobj._y)}});break;case"callback":eval(a.callback);break;case"jumptoslide":switch(a.slide.toLowerCase()){case"+1":case"next":opt.sc_indicator="arrow",_R.callingNewSlide(opt.c,1);break;case"previous":case"prev":case"-1":opt.sc_indicator="arrow",_R.callingNewSlide(opt.c,-1);break;default:var ts=jQuery.isNumeric(a.slide)?parseInt(a.slide,0):a.slide;_R.callingNewSlide(opt.c,ts)}break;case"simplelink":window.open(a.url,a.target);break;case"toggleslider":opt.noloopanymore=0,"playing"==opt.sliderstatus?(opt.c.revpause(),opt.forcepause_viatoggle=!0,_R.unToggleState(opt.slidertoggledby)):(opt.forcepause_viatoggle=!1,opt.c.revresume(),_R.toggleState(opt.slidertoggledby));break;case"pauseslider":opt.c.revpause(),_R.unToggleState(opt.slidertoggledby);break;case"playslider":opt.noloopanymore=0,opt.c.revresume(),_R.toggleState(opt.slidertoggledby);break;case"playvideo":tnc.length>0&&_R.playVideo(tnc,opt);break;case"stopvideo":tnc.length>0&&_R.stopVideo&&_R.stopVideo(tnc,opt);break;case"togglevideo":tnc.length>0&&(_R.isVideoPlaying(tnc,opt)?_R.stopVideo&&_R.stopVideo(tnc,opt):_R.playVideo(tnc,opt));break;case"mutevideo":tnc.length>0&&_R.muteVideo(tnc,opt);break;case"unmutevideo":tnc.length>0&&_R.unMuteVideo&&_R.unMuteVideo(tnc,opt);break;case"toggle_mute_video":tnc.length>0&&(_R.isVideoMuted(tnc,opt)?_R.unMuteVideo(tnc,opt):_R.muteVideo&&_R.muteVideo(tnc,opt)),_nc.toggleClass("rs-toggle-content-active");break;case"toggle_global_mute_video":!0===opt.globalmute?(opt.globalmute=!1,void 0!=opt.playingvideos&&opt.playingvideos.length>0&&jQuery.each(opt.playingvideos,function(e,t){_R.unMuteVideo&&_R.unMuteVideo(t,opt)})):(opt.globalmute=!0,void 0!=opt.playingvideos&&opt.playingvideos.length>0&&jQuery.each(opt.playingvideos,function(e,t){_R.muteVideo&&_R.muteVideo(t,opt)})),_nc.toggleClass("rs-toggle-content-active");break;case"simulateclick":tnc.length>0&&tnc.click();break;case"toggleclass":tnc.length>0&&(tnc.hasClass(a.classname)?tnc.removeClass(a.classname):tnc.addClass(a.classname));break;case"gofullscreen":case"exitfullscreen":case"togglefullscreen":if(jQuery(".rs-go-fullscreen").length>0&&("togglefullscreen"==a.action||"exitfullscreen"==a.action)){jQuery(".rs-go-fullscreen").removeClass("rs-go-fullscreen");var gf=opt.c.closest(".forcefullwidth_wrapper_tp_banner").length>0?opt.c.closest(".forcefullwidth_wrapper_tp_banner"):opt.c.closest(".rev_slider_wrapper");opt.minHeight=opt.oldminheight,opt.infullscreenmode=!1,opt.c.revredraw(),jQuery(window).trigger("resize"),_R.unToggleState(opt.fullscreentoggledby)}else if(0==jQuery(".rs-go-fullscreen").length&&("togglefullscreen"==a.action||"gofullscreen"==a.action)){var gf=opt.c.closest(".forcefullwidth_wrapper_tp_banner").length>0?opt.c.closest(".forcefullwidth_wrapper_tp_banner"):opt.c.closest(".rev_slider_wrapper");gf.addClass("rs-go-fullscreen"),opt.oldminheight=opt.minHeight,opt.minHeight=jQuery(window).height(),opt.infullscreenmode=!0,opt.c.revredraw(),jQuery(window).trigger("resize"),_R.toggleState(opt.fullscreentoggledby)}break;default:var obj={};obj.event=a,obj.layer=_nc,opt.c.trigger("layeraction",[obj])}},getOffContH=function(e){if(void 0==e)return 0;if(e.split(",").length>1){var t=e.split(","),o=0;return t&&jQuery.each(t,function(e,t){jQuery(t).length>0&&(o+=jQuery(t).outerHeight(!0))}),o}return jQuery(e).height()}}(jQuery);

/********************************************
 * REVOLUTION 5.4 EXTENSION - CAROUSEL
 * @version: 1.2.1 (18.11.2016)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
*********************************************/
!function(a){"use strict";var b=jQuery.fn.revolution,c={alias:"Carousel Min JS",name:"revolution.extensions.carousel.min.js",min_core:"5.3.0",version:"1.2.1"};jQuery.extend(!0,b,{prepareCarousel:function(a,d,h,i){return"stop"!==b.compare_version(c).check&&(h=a.carousel.lastdirection=f(h,a.carousel.lastdirection),e(a),a.carousel.slide_offset_target=j(a),void(void 0!==i?g(a,h,!1,0):void 0==d?b.carouselToEvalPosition(a,h):g(a,h,!1)))},carouselToEvalPosition:function(a,c){var d=a.carousel;c=d.lastdirection=f(c,d.lastdirection);var e="center"===d.horizontal_align?(d.wrapwidth/2-d.slide_width/2-d.slide_globaloffset)/d.slide_width:(0-d.slide_globaloffset)/d.slide_width,h=b.simp(e,a.slideamount,!1),i=h-Math.floor(h),j=0,k=-1*(Math.ceil(h)-h),l=-1*(Math.floor(h)-h);j=i>=.3&&"left"===c||i>=.7&&"right"===c?k:i<.3&&"left"===c||i<.7&&"right"===c?l:j,j="off"===d.infinity?h<0?h:e>a.slideamount-1?e-(a.slideamount-1):j:j,d.slide_offset_target=j*d.slide_width,0!==Math.abs(d.slide_offset_target)?g(a,c,!0):b.organiseCarousel(a,c)},organiseCarousel:function(a,b,c,d){b=void 0===b||"down"==b||"up"==b||null===b||jQuery.isEmptyObject(b)?"left":b;for(var e=a.carousel,f=new Array,g=e.slides.length,i=("right"===e.horizontal_align?a.width:0,0);i<g;i++){var j=i*e.slide_width+e.slide_offset;"on"===e.infinity&&(j=j>e.wrapwidth-e.inneroffset&&"right"==b?e.slide_offset-(e.slides.length-i)*e.slide_width:j,j=j<0-e.inneroffset-e.slide_width&&"left"==b?j+e.maxwidth:j),f[i]=j}var k=999;e.slides&&jQuery.each(e.slides,function(d,h){var i=f[d];"on"===e.infinity&&(i=i>e.wrapwidth-e.inneroffset&&"left"===b?f[0]-(g-d)*e.slide_width:i,i=i<0-e.inneroffset-e.slide_width?"left"==b?i+e.maxwidth:"right"===b?f[g-1]+(d+1)*e.slide_width:i:i);var j=new Object;j.left=i+e.inneroffset;var l="center"===e.horizontal_align?(Math.abs(e.wrapwidth/2)-(j.left+e.slide_width/2))/e.slide_width:(e.inneroffset-j.left)/e.slide_width,n="center"===e.horizontal_align?2:1;if((c&&Math.abs(l)<k||0===l)&&(k=Math.abs(l),e.focused=d),j.width=e.slide_width,j.x=0,j.transformPerspective=1200,j.transformOrigin="50% "+e.vertical_align,"on"===e.fadeout)if("on"===e.vary_fade)j.autoAlpha=1-Math.abs(1/Math.ceil(e.maxVisibleItems/n)*l);else switch(e.horizontal_align){case"center":j.autoAlpha=Math.abs(l)<Math.ceil(e.maxVisibleItems/n-1)?1:1-(Math.abs(l)-Math.floor(Math.abs(l)));break;case"left":j.autoAlpha=l<1&&l>0?1-l:Math.abs(l)>e.maxVisibleItems-1?1-(Math.abs(l)-(e.maxVisibleItems-1)):1;break;case"right":j.autoAlpha=l>-1&&l<0?1-Math.abs(l):l>e.maxVisibleItems-1?1-(Math.abs(l)-(e.maxVisibleItems-1)):1}else j.autoAlpha=Math.abs(l)<Math.ceil(e.maxVisibleItems/n)?1:0;if(void 0!==e.minScale&&e.minScale>0)if("on"===e.vary_scale){j.scale=1-Math.abs(e.minScale/100/Math.ceil(e.maxVisibleItems/n)*l);var o=(e.slide_width-e.slide_width*j.scale)*Math.abs(l)}else{j.scale=l>=1||l<=-1?1-e.minScale/100:(100-e.minScale*Math.abs(l))/100;var o=(e.slide_width-e.slide_width*(1-e.minScale/100))*Math.abs(l)}void 0!==e.maxRotation&&0!=Math.abs(e.maxRotation)&&("on"===e.vary_rotation?(j.rotationY=Math.abs(e.maxRotation)-Math.abs((1-Math.abs(1/Math.ceil(e.maxVisibleItems/n)*l))*e.maxRotation),j.autoAlpha=Math.abs(j.rotationY)>90?0:j.autoAlpha):j.rotationY=l>=1||l<=-1?e.maxRotation:Math.abs(l)*e.maxRotation,j.rotationY=l<0?j.rotationY*-1:j.rotationY),j.x=-1*e.space*l,j.left=Math.floor(j.left),j.x=Math.floor(j.x),void 0!==j.scale?l<0?j.x-o:j.x+o:j.x,j.zIndex=Math.round(100-Math.abs(5*l)),j.transformStyle="3D"!=a.parallax.type&&"3d"!=a.parallax.type?"flat":"preserve-3d",punchgs.TweenLite.set(h,j)}),d&&(a.c.find(".next-revslide").removeClass("next-revslide"),jQuery(e.slides[e.focused]).addClass("next-revslide"),a.c.trigger("revolution.nextslide.waiting"));e.wrapwidth/2-e.slide_offset,e.maxwidth+e.slide_offset-e.wrapwidth/2}});var d=function(a){var b=a.carousel;b.infbackup=b.infinity,b.maxVisiblebackup=b.maxVisibleItems,b.slide_globaloffset="none",b.slide_offset=0,b.wrap=a.c.find(".tp-carousel-wrapper"),b.slides=a.c.find(".tp-revslider-slidesli"),0!==b.maxRotation&&("3D"!=a.parallax.type&&"3d"!=a.parallax.type?punchgs.TweenLite.set(b.wrap,{perspective:1200,transformStyle:"flat"}):punchgs.TweenLite.set(b.wrap,{perspective:1600,transformStyle:"preserve-3d"})),void 0!==b.border_radius&&parseInt(b.border_radius,0)>0&&punchgs.TweenLite.set(a.c.find(".tp-revslider-slidesli"),{borderRadius:b.border_radius})},e=function(a){void 0===a.bw&&b.setSize(a);var c=a.carousel,e=b.getHorizontalOffset(a.c,"left"),f=b.getHorizontalOffset(a.c,"right");void 0===c.wrap&&d(a),c.slide_width="on"!==c.stretch?a.gridwidth[a.curWinRange]*a.bw:a.c.width(),c.maxwidth=a.slideamount*c.slide_width,c.maxVisiblebackup>c.slides.length+1&&(c.maxVisibleItems=c.slides.length+2),c.wrapwidth=c.maxVisibleItems*c.slide_width+(c.maxVisibleItems-1)*c.space,c.wrapwidth="auto"!=a.sliderLayout?c.wrapwidth>a.c.closest(".tp-simpleresponsive").width()?a.c.closest(".tp-simpleresponsive").width():c.wrapwidth:c.wrapwidth>a.ul.width()?a.ul.width():c.wrapwidth,c.infinity=c.wrapwidth>=c.maxwidth?"off":c.infbackup,c.wrapoffset="center"===c.horizontal_align?(a.c.width()-f-e-c.wrapwidth)/2:0,c.wrapoffset="auto"!=a.sliderLayout&&a.outernav?0:c.wrapoffset<e?e:c.wrapoffset;var g="hidden";"3D"!=a.parallax.type&&"3d"!=a.parallax.type||(g="visible"),"right"===c.horizontal_align?punchgs.TweenLite.set(c.wrap,{left:"auto",right:c.wrapoffset+"px",width:c.wrapwidth,overflow:g}):punchgs.TweenLite.set(c.wrap,{right:"auto",left:c.wrapoffset+"px",width:c.wrapwidth,overflow:g}),c.inneroffset="right"===c.horizontal_align?c.wrapwidth-c.slide_width:0,c.realoffset=Math.abs(c.wrap.position().left),c.windhalf=jQuery(window).width()/2},f=function(a,b){return null===a||jQuery.isEmptyObject(a)?b:void 0===a?"right":a},g=function(a,c,d,e){var g=a.carousel;c=g.lastdirection=f(c,g.lastdirection);var h=new Object,i=d?punchgs.Power2.easeOut:g.easing;h.from=0,h.to=g.slide_offset_target,e=void 0===e?g.speed/1e3:e,e=d?.4:e,void 0!==g.positionanim&&g.positionanim.pause(),g.positionanim=punchgs.TweenLite.to(h,e,{from:h.to,onUpdate:function(){g.slide_offset=g.slide_globaloffset+h.from,g.slide_offset=b.simp(g.slide_offset,g.maxwidth),b.organiseCarousel(a,c,!1,!1)},onComplete:function(){g.slide_globaloffset="off"===g.infinity?g.slide_globaloffset+g.slide_offset_target:b.simp(g.slide_globaloffset+g.slide_offset_target,g.maxwidth),g.slide_offset=b.simp(g.slide_offset,g.maxwidth),b.organiseCarousel(a,c,!1,!0);var e=jQuery(a.li[g.focused]);a.c.find(".next-revslide").removeClass("next-revslide"),d&&b.callingNewSlide(a.c,e.data("index"))},ease:i})},h=function(a,b){return Math.abs(a)>Math.abs(b)?a>0?a-Math.abs(Math.floor(a/b)*b):a+Math.abs(Math.floor(a/b)*b):a},i=function(a,b,c){var c,c,d=b-a,e=b-c-a;return d=h(d,c),e=h(e,c),Math.abs(d)>Math.abs(e)?e:d},j=function(a){var c=0,d=a.carousel;if(void 0!==d.positionanim&&d.positionanim.kill(),"none"==d.slide_globaloffset)d.slide_globaloffset=c="center"===d.horizontal_align?d.wrapwidth/2-d.slide_width/2:0;else{d.slide_globaloffset=d.slide_offset,d.slide_offset=0;var e=a.c.find(".processing-revslide").index(),f="center"===d.horizontal_align?(d.wrapwidth/2-d.slide_width/2-d.slide_globaloffset)/d.slide_width:(0-d.slide_globaloffset)/d.slide_width;f=b.simp(f,a.slideamount,!1),e=e>=0?e:a.c.find(".active-revslide").index(),e=e>=0?e:0,c="off"===d.infinity?f-e:-i(f,e,a.slideamount),c*=d.slide_width}return c}}(jQuery);

/********************************************
 * REVOLUTION 5.4.6.4 EXTENSION - KEN BURN
 * @version: 1.3.1 (15.05.2017)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
*********************************************/
!function(a){"use strict";var b=jQuery.fn.revolution,c={alias:"KenBurns Min JS",name:"revolution.extensions.kenburn.min.js",min_core:"5.4",version:"1.3.1"};jQuery.extend(!0,b,{stopKenBurn:function(a){if("stop"===b.compare_version(c).check)return!1;void 0!=a.data("kbtl")&&a.data("kbtl").pause()},startKenBurn:function(a,d,e){if("stop"===b.compare_version(c).check)return!1;var f=a.data(),g=a.find(".defaultimg"),h=g.data("lazyload")||g.data("src"),j=(f.owidth,f.oheight,"carousel"===d.sliderType?d.carousel.slide_width:d.ul.width()),k=d.ul.height();if(a.data("kbtl")&&a.data("kbtl").kill(),e=e||0,0==a.find(".tp-kbimg").length){var m=g.data("mediafilter");m=void 0===m?"":m,a.append('<div class="tp-kbimg-wrap '+m+'" style="z-index:2;width:100%;height:100%;top:0px;left:0px;position:absolute;"><img class="tp-kbimg" src="'+h+'" style="position:absolute;" width="'+f.owidth+'" height="'+f.oheight+'"></div>'),a.data("kenburn",a.find(".tp-kbimg"))}var n=function(a,b,c,d,e,f,g){var h=a*c,i=b*c,j=Math.abs(d-h),k=Math.abs(e-i),l=new Object;return l.l=(0-f)*j,l.r=l.l+h,l.t=(0-g)*k,l.b=l.t+i,l.h=f,l.v=g,l},o=function(a,b,c,d,e){var f=a.bgposition.split(" ")||"center center",g="center"==f[0]?"50%":"left"==f[0]||"left"==f[1]?"0%":"right"==f[0]||"right"==f[1]?"100%":f[0],h="center"==f[1]?"50%":"top"==f[0]||"top"==f[1]?"0%":"bottom"==f[0]||"bottom"==f[1]?"100%":f[1];g=parseInt(g,0)/100||0,h=parseInt(h,0)/100||0;var i=new Object;return i.start=n(e.start.width,e.start.height,e.start.scale,b,c,g,h),i.end=n(e.start.width,e.start.height,e.end.scale,b,c,g,h),i},p=function(a,b,c){var d=c.scalestart/100,e=c.scaleend/100,f=void 0!=c.offsetstart?c.offsetstart.split(" ")||[0,0]:[0,0],g=void 0!=c.offsetend?c.offsetend.split(" ")||[0,0]:[0,0];c.bgposition="center center"==c.bgposition?"50% 50%":c.bgposition;var h=new Object,i=a*d,k=(c.owidth,c.oheight,a*e);c.owidth,c.oheight;if(h.start=new Object,h.starto=new Object,h.end=new Object,h.endo=new Object,h.start.width=a,h.start.height=h.start.width/c.owidth*c.oheight,h.start.height<b){var m=b/h.start.height;h.start.height=b,h.start.width=h.start.width*m}h.start.transformOrigin=c.bgposition,h.start.scale=d,h.end.scale=e,c.rotatestart=0===c.rotatestart?.01:c.rotatestart,h.start.rotation=c.rotatestart+"deg",h.end.rotation=c.rotateend+"deg";var n=o(c,a,b,f,h);f[0]=parseFloat(f[0])+n.start.l,g[0]=parseFloat(g[0])+n.end.l,f[1]=parseFloat(f[1])+n.start.t,g[1]=parseFloat(g[1])+n.end.t;var p=n.start.r-n.start.l,q=n.start.b-n.start.t,r=n.end.r-n.end.l,s=n.end.b-n.end.t;return f[0]=f[0]>0?0:p+f[0]<a?a-p:f[0],g[0]=g[0]>0?0:r+g[0]<a?a-r:g[0],f[1]=f[1]>0?0:q+f[1]<b?b-q:f[1],g[1]=g[1]>0?0:s+g[1]<b?b-s:g[1],h.starto.x=f[0]+"px",h.starto.y=f[1]+"px",h.endo.x=g[0]+"px",h.endo.y=g[1]+"px",h.end.ease=h.endo.ease=c.ease,h.end.force3D=h.endo.force3D=!0,h};void 0!=a.data("kbtl")&&(a.data("kbtl").kill(),a.removeData("kbtl"));var q=a.data("kenburn"),r=q.parent(),s=p(j,k,f),t=new punchgs.TimelineLite;if(t.pause(),s.start.transformOrigin="0% 0%",s.starto.transformOrigin="0% 0%",t.add(punchgs.TweenLite.fromTo(q,f.duration/1e3,s.start,s.end),0),t.add(punchgs.TweenLite.fromTo(r,f.duration/1e3,s.starto,s.endo),0),void 0!==f.blurstart&&void 0!==f.blurend&&(0!==f.blurstart||0!==f.blurend)){var u={a:f.blurstart},v={a:f.blurend,ease:s.endo.ease},w=new punchgs.TweenLite(u,f.duration/1e3,v);w.eventCallback("onUpdate",function(a){punchgs.TweenLite.set(a,{filter:"blur("+u.a+"px)",webkitFilter:"blur("+u.a+"px)"})},[r]),t.add(w,0)}t.progress(e),t.play(),a.data("kbtl",t)}})}(jQuery);

/************************************************
 * REVOLUTION 5.4.6.4 EXTENSION - LAYER ANIMATION
 * @version: 3.6.5 (08.03.2018)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
************************************************/
!function(e){"use strict";var t=jQuery.fn.revolution,i=(t.is_mobile(),t.is_android(),{alias:"LayerAnimation Min JS",name:"revolution.extensions.layeranimation.min.js",min_core:"5.4.6.4",version:"3.6.5"});jQuery.extend(!0,t,{updateMarkup:function(e,t){var i=jQuery(e).data();if(void 0!==i.start&&!i.frames_added&&void 0===i.frames){var a=new Array,n=h(l(),i.transform_in,void 0,!1),r=h(l(),i.transform_out,void 0,!1),o=h(l(),i.transform_hover,void 0,!1);jQuery.isNumeric(i.end)&&jQuery.isNumeric(i.start)&&jQuery.isNumeric(n.speed)&&(i.end=parseInt(i.end,0)-(parseInt(i.start,0)+parseFloat(n.speed,0))),a.push({frame:"0",delay:i.start,from:i.transform_in,to:i.transform_idle,split:i.splitin,speed:n.speed,ease:n.anim.ease,mask:i.mask_in,splitdelay:i.elementdelay}),a.push({frame:"5",delay:i.end,to:i.transform_out,split:i.splitout,speed:r.speed,ease:r.anim.ease,mask:i.mask_out,splitdelay:i.elementdelay}),i.transform_hover&&a.push({frame:"hover",to:i.transform_hover,style:i.style_hover,speed:o.speed,ease:o.anim.ease,splitdelay:i.elementdelay}),i.frames=a}if(!i.frames_added){if(i.inframeindex=0,i.outframeindex=-1,i.hoverframeindex=-1,void 0!==i.frames)for(var s=0;s<i.frames.length;s++)void 0!==i.frames[s].sfx_effect&&i.frames[s].sfx_effect.indexOf("block")>=0&&(0===s?(i.frames[s].from="o:0",i.frames[s].to="o:1"):i.frames[s].to="o:0",i._sfx="block"),void 0===i.frames[0].from&&(i.frames[0].from="o:inherit"),0===i.frames[0].delay&&(i.frames[0].delay=20),"hover"===i.frames[s].frame?i.hoverframeindex=s:"frame_999"!==i.frames[s].frame&&"frame_out"!==i.frames[s].frame&&"last"!==i.frames[s].frame&&"end"!==i.frames[s].frame||(i.outframeindex=s),void 0!==i.frames[s].split&&i.frames[s].split.match(/chars|words|lines/g)&&(i.splittext=!0);i.outframeindex=-1===i.outframeindex?-1===i.hoverframeindex?i.frames.length-1:i.frames.length-2:i.outframeindex,i.frames_added=!0}},animcompleted:function(e,i){var a=e.data(),n=a.videotype,r=a.autoplay,o=a.autoplayonlyfirsttime;null!=n&&"none"!=n&&(1==r||"true"==r||"on"==r||"1sttime"==r||o?(("carousel"!==i.sliderType||"carousel"===i.sliderType&&"on"===i.carousel.showLayersAllTime&&e.closest("li").hasClass("active-revslide")||"carousel"===i.sliderType&&"on"!==i.carousel.showLayersAllTime&&e.closest("li").hasClass("active-revslide"))&&t.playVideo(e,i),t.toggleState(e.data("videotoggledby")),(o||"1sttime"==r)&&(a.autoplayonlyfirsttime=!1,a.autoplay="off")):("no1sttime"==r&&(a.datasetautoplay="on"),t.unToggleState(e.data("videotoggledby"))))},handleStaticLayers:function(e,t){var i=parseInt(e.data("startslide"),0),a=parseInt(e.data("endslide"),0);i<0&&(i=0),a<0&&(a=t.realslideamount),0===i&&a===t.realslideamount-1&&(a=t.realslideamount+1),e.data("startslide",i),e.data("endslide",a)},animateTheCaptions:function(e){if("stop"===t.compare_version(i).check)return!1;var a=e.opt,n=e.slide,r=e.recall,o=e.maintimeline,s=e.preset,d=e.startslideanimat,l="carousel"===a.sliderType?0:a.width/2-a.gridwidth[a.curWinRange]*a.bw/2,m=n.data("index");if(a.layers=a.layers||new Object,a.layers[m]=a.layers[m]||n.find(".tp-caption"),a.layers.static=a.layers.static||a.c.find(".tp-static-layers").find(".tp-caption"),void 0===a.timelines&&t.createTimelineStructure(a),a.conh=a.c.height(),a.conw=a.c.width(),a.ulw=a.ul.width(),a.ulh=a.ul.height(),a.debugMode){n.addClass("indebugmode"),n.find(".helpgrid").remove(),a.c.find(".hglayerinfo").remove(),n.append('<div class="helpgrid" style="width:'+a.gridwidth[a.curWinRange]*a.bw+"px;height:"+a.gridheight[a.curWinRange]*a.bw+'px;"></div>');var c=n.find(".helpgrid");c.append('<div class="hginfo">Zoom:'+Math.round(100*a.bw)+"% &nbsp;&nbsp;&nbsp; Device Level:"+a.curWinRange+"&nbsp;&nbsp;&nbsp; Grid Preset:"+a.gridwidth[a.curWinRange]+"x"+a.gridheight[a.curWinRange]+"</div>"),a.c.append('<div class="hglayerinfo"></div>'),c.append('<div class="tlhg"></div>')}void 0!==m&&a.layers[m]&&jQuery.each(a.layers[m],function(e,i){var n=jQuery(this);t.updateMarkup(this,a),t.prepareSingleCaption({caption:n,opt:a,offsetx:l,offsety:0,index:e,recall:r,preset:s}),s&&0!==d||t.buildFullTimeLine({caption:n,opt:a,offsetx:l,offsety:0,index:e,recall:r,preset:s,regenerate:0===d}),r&&"carousel"===a.sliderType&&"on"===a.carousel.showLayersAllTime&&t.animcompleted(n,a)}),a.layers.static&&jQuery.each(a.layers.static,function(e,i){var n=jQuery(this),o=n.data();!0!==o.hoveredstatus&&!0!==o.inhoveroutanimation?(t.updateMarkup(this,a),t.prepareSingleCaption({caption:n,opt:a,offsetx:l,offsety:0,index:e,recall:r,preset:s}),s&&0!==d||!0===o.veryfirstststic||(t.buildFullTimeLine({caption:n,opt:a,offsetx:l,offsety:0,index:e,recall:r,preset:s,regenerate:0===d}),o.veryfirstststic=!0),r&&"carousel"===a.sliderType&&"on"===a.carousel.showLayersAllTime&&t.animcompleted(n,a)):t.prepareSingleCaption({caption:n,opt:a,offsetx:l,offsety:0,index:e,recall:r,preset:s})});var p=-1===a.nextSlide||void 0===a.nextSlide?0:a.nextSlide;void 0!==a.rowzones&&(p=p>a.rowzones.length?a.rowzones.length:p),null!=a.rowzones&&a.rowzones.length>0&&null!=a.rowzones[p]&&p>=0&&p<=a.rowzones.length&&a.rowzones[p].length>0&&t.setSize(a),s||void 0!==d&&(void 0!==m&&jQuery.each(a.timelines[m].layers,function(e,i){var n=i.layer.data();"none"!==i.wrapper&&void 0!==i.wrapper||("keep"==i.triggerstate&&"on"===n.triggerstate?t.playAnimationFrame({caption:i.layer,opt:a,frame:"frame_0",triggerdirection:"in",triggerframein:"frame_0",triggerframeout:"frame_999"}):i.timeline.restart())}),a.timelines.staticlayers&&jQuery.each(a.timelines.staticlayers.layers,function(e,i){var n=i.layer.data(),r=p>=i.firstslide&&p<=i.lastslide,o=p<i.firstslide||p>i.lastslide,s=i.timeline.getLabelTime("slide_"+i.firstslide),d=i.timeline.getLabelTime("slide_"+i.lastslide),l=n.static_layer_timeline_time,m="in"===n.animdirection||"out"!==n.animdirection&&void 0,c="bytrigger"===n.frames[0].delay,g=(n.frames[n.frames.length-1].delay,n.triggered_startstatus),u=n.lasttriggerstate;!0!==n.hoveredstatus&&1!=n.inhoveroutanimation&&(void 0!==l&&m&&("keep"==u?(t.playAnimationFrame({caption:i.layer,opt:a,frame:"frame_0",triggerdirection:"in",triggerframein:"frame_0",triggerframeout:"frame_999"}),n.triggeredtimeline.time(l)):!0!==n.hoveredstatus&&i.timeline.time(l)),"reset"===u&&"hidden"===g&&(i.timeline.time(0),n.animdirection="out"),r?m?p===i.lastslide&&(i.timeline.play(d),n.animdirection="in"):(c||"in"===n.animdirection||i.timeline.play(s),("visible"==g&&"keep"!==u||"keep"===u&&!0===m||"visible"==g&&void 0===m)&&(i.timeline.play(s+.01),n.animdirection="in")):o&&m&&i.timeline.play("frame_999"))})),null!=o&&setTimeout(function(){o.resume()},30)},prepareSingleCaption:function(e){var i=e.caption,a=i.data(),n=e.opt,r=e.recall,o=e.recall,s=(e.preset,jQuery("body").hasClass("rtl"));if(a._pw=void 0===a._pw?i.closest(".tp-parallax-wrap"):a._pw,a._lw=void 0===a._lw?i.closest(".tp-loop-wrap"):a._lw,a._mw=void 0===a._mw?i.closest(".tp-mask-wrap"):a._mw,a._responsive=a.responsive||"on",a._respoffset=a.responsive_offset||"on",a._ba=a.basealign||"grid",a._gw="grid"===a._ba?n.width:n.ulw,a._gh="grid"===a._ba?n.height:n.ulh,a._lig=void 0===a._lig?i.hasClass("rev_layer_in_group")?i.closest(".rev_group"):i.hasClass("rev_layer_in_column")?i.closest(".rev_column_inner"):i.hasClass("rev_column_inner")?i.closest(".rev_row"):"none":a._lig,a._column=void 0===a._column?i.hasClass("rev_column_inner")?i.closest(".rev_column"):"none":a._column,a._row=void 0===a._row?i.hasClass("rev_column_inner")?i.closest(".rev_row"):"none":a._row,a._ingroup=void 0===a._ingroup?!(i.hasClass("rev_group")||!i.closest(".rev_group")):a._ingroup,a._isgroup=void 0===a._isgroup?!!i.hasClass("rev_group"):a._isgroup,a._nctype=a.type||"none",a._cbgc_auto=void 0===a._cbgc_auto?"column"===a._nctype&&a._pw.find(".rev_column_bg_auto_sized"):a._cbgc_auto,a._cbgc_man=void 0===a._cbgc_man?"column"===a._nctype&&a._pw.find(".rev_column_bg_man_sized"):a._cbgc_man,a._slideid=a._slideid||i.closest(".tp-revslider-slidesli").data("index"),a._id=void 0===a._id?i.data("id")||i.attr("id"):a._id,a._slidelink=void 0===a._slidelink?void 0!==i.hasClass("slidelink")&&i.hasClass("slidelink"):a._slidelink,void 0===a._li&&(i.hasClass("tp-static-layer")?(a._isstatic=!0,a._li=i.closest(".tp-static-layers"),a._slideid="staticlayers"):a._li=i.closest(".tp-revslider-slidesli")),a._row=void 0===a._row?"column"===a._nctype&&a._pw.closest(".rev_row"):a._row,void 0===a._togglelisteners&&i.find(".rs-toggled-content")?(a._togglelisteners=!0,void 0===a.actions&&i.click(function(){t.swaptoggleState(i)})):a._togglelisteners=!1,"fullscreen"==n.sliderLayout&&(e.offsety=a._gh/2-n.gridheight[n.curWinRange]*n.bh/2),("on"==n.autoHeight||null!=n.minHeight&&n.minHeight>0)&&(e.offsety=n.conh/2-n.gridheight[n.curWinRange]*n.bh/2),e.offsety<0&&(e.offsety=0),n.debugMode){i.closest("li").find(".helpgrid").css({top:e.offsety+"px",left:e.offsetx+"px"});var d=n.c.find(".hglayerinfo");i.on("hover, mouseenter",function(){var e="";i.data()&&jQuery.each(i.data(),function(t,i){"object"!=typeof i&&(e=e+'<span style="white-space:nowrap"><span style="color:#27ae60">'+t+":</span>"+i+"</span>&nbsp; &nbsp; ")}),d.html(e)})}if("off"===(void 0===a.visibility?"oon":_(a.visibility,n)[n.forcedWinRange]||_(a.visibility,n)||"ooon")||a._gw<n.hideCaptionAtLimit&&"on"==a.captionhidden||a._gw<n.hideAllCaptionAtLimit?a._pw.addClass("tp-hidden-caption"):a._pw.removeClass("tp-hidden-caption"),a.layertype="html",e.offsetx<0&&(e.offsetx=0),null!=a.thumbimage&&null==a.videoposter&&(a.videoposter=a.thumbimage),i.find("img").length>0){var l=i.find("img");a.layertype="image",0==l.width()&&l.css({width:"auto"}),0==l.height()&&l.css({height:"auto"}),null==l.data("ww")&&l.width()>0&&l.data("ww",l.width()),null==l.data("hh")&&l.height()>0&&l.data("hh",l.height());var m=l.data("ww"),c=l.data("hh"),p="slide"==a._ba?n.ulw:n.gridwidth[n.curWinRange],g="slide"==a._ba?n.ulh:n.gridheight[n.curWinRange],u="full"===(m=_(l.data("ww"),n)[n.curWinRange]||_(l.data("ww"),n)||"auto")||"full-proportional"===m,f="full"===(c=_(l.data("hh"),n)[n.curWinRange]||_(l.data("hh"),n)||"auto")||"full-proportional"===c;if("full-proportional"===m){var h=l.data("owidth"),v=l.data("oheight");h/p<v/g?(m=p,c=v*(p/h)):(c=g,m=h*(g/v))}else m=u?p:!jQuery.isNumeric(m)&&m.indexOf("%")>0?m:parseFloat(m),c=f?g:!jQuery.isNumeric(c)&&c.indexOf("%")>0?c:parseFloat(c);m=void 0===m?0:m,c=void 0===c?0:c,"off"!==a._responsive?("grid"!=a._ba&&u?jQuery.isNumeric(m)?l.css({width:m+"px"}):l.css({width:m}):jQuery.isNumeric(m)?l.css({width:m*n.bw+"px"}):l.css({width:m}),"grid"!=a._ba&&f?jQuery.isNumeric(c)?l.css({height:c+"px"}):l.css({height:c}):jQuery.isNumeric(c)?l.css({height:c*n.bh+"px"}):l.css({height:c})):l.css({width:m,height:c}),a._ingroup&&"row"!==a._nctype&&(void 0!==m&&!jQuery.isNumeric(m)&&"string"===jQuery.type(m)&&m.indexOf("%")>0&&punchgs.TweenLite.set([a._lw,a._pw,a._mw],{minWidth:m}),void 0!==c&&!jQuery.isNumeric(c)&&"string"===jQuery.type(c)&&c.indexOf("%")>0&&punchgs.TweenLite.set([a._lw,a._pw,a._mw],{minHeight:c}))}if("slide"===a._ba)e.offsetx=0,e.offsety=0;else if(a._isstatic&&void 0!==n.carousel&&void 0!==n.carousel.horizontal_align&&"carousel"===n.sliderType){switch(n.carousel.horizontal_align){case"center":e.offsetx=0+(n.ulw-n.gridwidth[n.curWinRange]*n.bw)/2;break;case"left":break;case"right":e.offsetx=n.ulw-n.gridwidth[n.curWinRange]*n.bw}e.offsetx=e.offsetx<0?0:e.offsetx}var y="html5"==a.audio?"audio":"video";if(i.hasClass("tp-videolayer")||i.hasClass("tp-audiolayer")||i.find("iframe").length>0||i.find(y).length>0){if(a.layertype="video",t.manageVideoLayer&&t.manageVideoLayer(i,n,r,o),!r&&!o){a.videotype;t.resetVideo&&t.resetVideo(i,n,e.preset)}var T=a.aspectratio;null!=T&&T.split(":").length>1&&t.prepareCoveredVideo(n,i);l=i.find("iframe")?i.find("iframe"):l=i.find(y);var j=!i.find("iframe"),L=i.hasClass("coverscreenvideo");l.css({display:"block"}),null==i.data("videowidth")&&(i.data("videowidth",l.width()),i.data("videoheight",l.height()));m=_(i.data("videowidth"),n)[n.curWinRange]||_(i.data("videowidth"),n)||"auto",c=_(i.data("videoheight"),n)[n.curWinRange]||_(i.data("videoheight"),n)||"auto";m="auto"===m||!jQuery.isNumeric(m)&&m.indexOf("%")>0?"auto"===m?"auto":"grid"===a._ba?n.gridwidth[n.curWinRange]*n.bw:a._gw:parseFloat(m)*n.bw+"px",c="auto"===c||!jQuery.isNumeric(c)&&c.indexOf("%")>0?"auto"===c?"auto":"grid"===a._ba?n.gridheight[n.curWinRange]*n.bw:a._gh:parseFloat(c)*n.bh+"px",a.cssobj=void 0===a.cssobj?w(i,0):a.cssobj;var I=x(a.cssobj,n);if("auto"==I.lineHeight&&(I.lineHeight=I.fontSize+4),i.hasClass("fullscreenvideo")||L){e.offsetx=0,e.offsety=0,i.data("x",0),i.data("y",0);var W=a._gh;"on"==n.autoHeight&&(W=n.conh),i.css({width:a._gw,height:W})}else punchgs.TweenLite.set(i,{paddingTop:Math.round(I.paddingTop*n.bh)+"px",paddingBottom:Math.round(I.paddingBottom*n.bh)+"px",paddingLeft:Math.round(I.paddingLeft*n.bw)+"px",paddingRight:Math.round(I.paddingRight*n.bw)+"px",marginTop:I.marginTop*n.bh+"px",marginBottom:I.marginBottom*n.bh+"px",marginLeft:I.marginLeft*n.bw+"px",marginRight:I.marginRight*n.bw+"px",borderTopWidth:Math.round(I.borderTopWidth*n.bh)+"px",borderBottomWidth:Math.round(I.borderBottomWidth*n.bh)+"px",borderLeftWidth:Math.round(I.borderLeftWidth*n.bw)+"px",borderRightWidth:Math.round(I.borderRightWidth*n.bw)+"px",width:m,height:c});(0==j&&!L||1!=a.forcecover&&!i.hasClass("fullscreenvideo")&&!L)&&(l.width(m),l.height(c)),a._ingroup&&null!==a.videowidth&&void 0!==a.videowidth&&!jQuery.isNumeric(a.videowidth)&&a.videowidth.indexOf("%")>0&&punchgs.TweenLite.set([a._lw,a._pw,a._mw],{minWidth:a.videowidth})}k(i,n,0,a._responsive),i.hasClass("tp-resizeme")&&i.find("*").each(function(){k(jQuery(this),n,"rekursive",a._responsive)});var R=i.outerHeight(),C=i.css("backgroundColor");b(i,".frontcorner","left","borderRight","borderTopColor",R,C),b(i,".frontcornertop","left","borderRight","borderBottomColor",R,C),b(i,".backcorner","right","borderLeft","borderBottomColor",R,C),b(i,".backcornertop","right","borderLeft","borderTopColor",R,C),"on"==n.fullScreenAlignForce&&(e.offsetx=0,e.offsety=0),"block"===a._sfx&&void 0===a._bmask&&(a._bmask=jQuery('<div class="tp-blockmask"></div>'),a._mw.append(a._bmask)),a.arrobj=new Object,a.arrobj.voa=_(a.voffset,n)[n.curWinRange]||_(a.voffset,n)[0],a.arrobj.hoa=_(a.hoffset,n)[n.curWinRange]||_(a.hoffset,n)[0],a.arrobj.elx=_(a.x,n)[n.curWinRange]||_(a.x,n)[0],a.arrobj.ely=_(a.y,n)[n.curWinRange]||_(a.y,n)[0];var z=0==a.arrobj.voa.length?0:a.arrobj.voa,O=0==a.arrobj.hoa.length?0:a.arrobj.hoa,Q=0==a.arrobj.elx.length?0:a.arrobj.elx,S=0==a.arrobj.ely.length?0:a.arrobj.ely;a.eow=i.outerWidth(!0),a.eoh=i.outerHeight(!0),0==a.eow&&0==a.eoh&&(a.eow=n.ulw,a.eoh=n.ulh);var M="off"!==a._respoffset?parseInt(z,0)*n.bw:parseInt(z,0),P="off"!==a._respoffset?parseInt(O,0)*n.bw:parseInt(O,0),A="grid"===a._ba?n.gridwidth[n.curWinRange]*n.bw:a._gw,B="grid"===a._ba?n.gridheight[n.curWinRange]*n.bw:a._gh;"on"==n.fullScreenAlignForce&&(A=n.ulw,B=n.ulh),"none"!==a._lig&&null!=a._lig&&(A=a._lig.width(),B=a._lig.height(),e.offsetx=0,e.offsety=0),Q="center"===Q||"middle"===Q?A/2-a.eow/2+P:"left"===Q?P:"right"===Q?A-a.eow-P:"off"!==a._respoffset?Q*n.bw:Q,S="center"==S||"middle"==S?B/2-a.eoh/2+M:"top"==S?M:"bottom"==S?B-a.eoh-M:"off"!==a._respoffset?S*n.bw:S,s&&!a._slidelink&&(Q+=a.eow),a._slidelink&&(Q=0),a.calcx=parseInt(Q,0)+e.offsetx,a.calcy=parseInt(S,0)+e.offsety;var F=i.css("z-Index");if("row"!==a._nctype&&"column"!==a._nctype)punchgs.TweenLite.set(a._pw,{zIndex:F,top:a.calcy,left:a.calcx,overwrite:"auto"});else if("row"!==a._nctype)punchgs.TweenLite.set(a._pw,{zIndex:F,width:a.columnwidth,top:0,left:0,overwrite:"auto"});else if("row"===a._nctype){var X="grid"===a._ba?A+"px":"100%";punchgs.TweenLite.set(a._pw,{zIndex:F,width:X,top:0,left:e.offsetx,overwrite:"auto"})}if(void 0!==a.blendmode&&punchgs.TweenLite.set(a._pw,{mixBlendMode:a.blendmode}),"row"===a._nctype&&(a.columnbreak<=n.curWinRange?i.addClass("rev_break_columns"):i.removeClass("rev_break_columns")),"on"==a.loopanimation&&punchgs.TweenLite.set(a._lw,{minWidth:a.eow,minHeight:a.eoh}),"column"===a._nctype){var Y=void 0!==i[0]._gsTransform?i[0]._gsTransform.y:0,H=parseInt(a._column[0].style.paddingTop,0);punchgs.TweenLite.set(i,{y:0}),punchgs.TweenLite.set(a._cbgc_man,{y:parseInt(H+a._column.offset().top-i.offset().top,0)}),punchgs.TweenLite.set(i,{y:Y})}a._ingroup&&"row"!==a._nctype&&(void 0!==a._groupw&&!jQuery.isNumeric(a._groupw)&&a._groupw.indexOf("%")>0&&punchgs.TweenLite.set([a._lw,a._pw,a._mw],{minWidth:a._groupw}),void 0!==a._grouph&&!jQuery.isNumeric(a._grouph)&&a._grouph.indexOf("%")>0&&punchgs.TweenLite.set([a._lw,a._pw,a._mw],{minHeight:a._grouph}))},createTimelineStructure:function(e){e.timelines=e.timelines||new Object,e.c.find(".tp-revslider-slidesli, .tp-static-layers").each(function(){var t=jQuery(this),i=t.data("index");e.timelines[i]=e.timelines[i]||{},e.timelines[i].layers=e.timelines[i].layers||new Object,t.find(".tp-caption").each(function(t){var a,n,r,o,s;a=jQuery(this),n=e.timelines[i].layers,r=i,s=new punchgs.TimelineLite({paused:!0}),(n=n||new Object)[a.attr("id")]=n[a.attr("id")]||new Object,"staticlayers"===r&&(n[a.attr("id")].firstslide=a.data("startslide"),n[a.attr("id")].lastslide=a.data("endslide")),a.data("slideid",r),n[a.attr("id")].defclasses=o=a[0].className,n[a.attr("id")].wrapper=o.indexOf("rev_layer_in_column")>=0?a.closest(".rev_column_inner"):o.indexOf("rev_column_inner")>=0?a.closest(".rev_row"):o.indexOf("rev_layer_in_group")>=0?a.closest(".rev_group"):"none",n[a.attr("id")].timeline=s,n[a.attr("id")].layer=a,n[a.attr("id")].triggerstate=a.data("lasttriggerstate"),n[a.attr("id")].dchildren=o.indexOf("rev_row")>=0?a[0].getElementsByClassName("rev_column_inner"):o.indexOf("rev_column_inner")>=0?a[0].getElementsByClassName("tp-caption"):o.indexOf("rev_group")>=0?a[0].getElementsByClassName("rev_layer_in_group"):"none",a.data("timeline",s)})})},buildFullTimeLine:function(e){var i,a,n=e.caption,r=n.data(),s=e.opt,d={},l=g();if(!(i=s.timelines[r._slideid].layers[r._id]).generated||!0===e.regenerate){if(a=i.timeline,i.generated=!0,void 0!==r.current_timeline&&!0!==e.regenerate?(r.current_timeline_pause=r.current_timeline.paused(),r.current_timeline_time=r.current_timeline.time(),r.current_is_nc_timeline=a===r.current_timeline,r.static_layer_timeline_time=r.current_timeline_time):(r.static_layer_timeline_time=r.current_timeline_time,r.current_timeline_time=0,r.current_timeline&&r.current_timeline.clear()),a.clear(),d.svg=null!=r.svg_src&&n.find("svg"),d.svg&&(r.idlesvg=c(r.svg_idle,m()),punchgs.TweenLite.set(d.svg,r.idlesvg.anim)),-1!==r.hoverframeindex&&void 0!==r.hoverframeindex&&!n.hasClass("rs-hover-ready")){if(n.addClass("rs-hover-ready"),r.hovertimelines={},r.hoveranim=h(l,r.frames[r.hoverframeindex].to),r.hoveranim=y(r.hoveranim,r.frames[r.hoverframeindex].style),d.svg){var p=c(r.svg_hover,m());null!=r.hoveranim.anim.color&&(p.anim.fill=r.hoveranim.anim.color,r.idlesvg.anim.css.fill=d.svg.css("fill")),r.hoversvg=p}n.hover(function(e){var t={caption:jQuery(e.currentTarget),opt:s,firstframe:"frame_0",lastframe:"frame_999"},i=(o(t),t.caption),a=i.data(),n=a.frames[a.hoverframeindex];a.forcehover=n.force,a.hovertimelines.item=punchgs.TweenLite.to(i,n.speed/1e3,a.hoveranim.anim),(a.hoverzIndex||a.hoveranim.anim&&a.hoveranim.anim.zIndex)&&(a.basiczindex=void 0===a.basiczindex?a.cssobj.zIndex:a.basiczindex,a.hoverzIndex=void 0===a.hoverzIndex?a.hoveranim.anim.zIndex:a.hoverzIndex,a.inhoverinanimation=!0,0===n.speed&&(a.inhoverinanimation=!1),a.hovertimelines.pwhoveranim=punchgs.TweenLite.to(a._pw,n.speed/1e3,{overwrite:"auto",zIndex:a.hoverzIndex}),a.hovertimelines.pwhoveranim.eventCallback("onComplete",function(e){e.inhoverinanimation=!1},[a])),d.svg&&(a.hovertimelines.svghoveranim=punchgs.TweenLite.to([d.svg,d.svg.find("path")],n.speed/1e3,a.hoversvg.anim)),a.hoveredstatus=!0},function(e){var t={caption:jQuery(e.currentTarget),opt:s,firstframe:"frame_0",lastframe:"frame_999"},i=(o(t),t.caption),a=i.data(),n=a.frames[a.hoverframeindex];a.hoveredstatus=!1,a.inhoveroutanimation=!0,a.hovertimelines.item.pause(),a.hovertimelines.item=punchgs.TweenLite.to(i,n.speed/1e3,jQuery.extend(!0,{},a._gsTransformTo)),0==n.speed&&(a.inhoveroutanimation=!1),a.hovertimelines.item.eventCallback("onComplete",function(e){e.inhoveroutanimation=!1},[a]),void 0!==a.hovertimelines.pwhoveranim&&(a.hovertimelines.pwhoveranim=punchgs.TweenLite.to(a._pw,n.speed/1e3,{overwrite:"auto",zIndex:a.basiczindex})),d.svg&&punchgs.TweenLite.to([d.svg,d.svg.find("path")],n.speed/1e3,a.idlesvg.anim)})}for(var u=0;u<r.frames.length;u++)if(u!==r.hoverframeindex){var f=u===r.inframeindex?"frame_0":u===r.outframeindex||"frame_999"===r.frames[u].frame?"frame_999":"frame_"+u;r.frames[u].framename=f,i[f]={},i[f].timeline=new punchgs.TimelineLite({align:"normal"});var v=r.frames[u].delay,_=(r.triggered_startstatus,void 0!==v?jQuery.inArray(v,["slideenter","bytrigger","wait"])>=0?v:parseInt(v,0)/1e3:"wait");void 0!==i.firstslide&&"frame_0"===f&&(a.addLabel("slide_"+i.firstslide+"_pause",0),a.addPause("slide_"+i.firstslide+"_pause"),a.addLabel("slide_"+i.firstslide,"+=0.005")),void 0!==i.lastslide&&"frame_999"===f&&(a.addLabel("slide_"+i.lastslide+"_pause","+=0.01"),a.addPause("slide_"+i.lastslide+"_pause"),a.addLabel("slide_"+i.lastslide,"+=0.005")),jQuery.isNumeric(_)?a.addLabel(f,"+="+_):(a.addLabel("pause_"+u,"+=0.01"),a.addPause("pause_"+u),a.addLabel(f,"+=0.01")),a=t.createFrameOnTimeline({caption:e.caption,timeline:a,label:f,frameindex:u,opt:s})}e.regenerate||(r.current_is_nc_timeline&&(r.current_timeline=a),r.current_timeline_pause?a.pause(r.current_timeline_time):a.time(r.current_timeline_time))}},createFrameOnTimeline:function(e){var t=e.caption,i=t.data(),o=e.label,m=e.timeline,c=e.frameindex,g=e.opt,u=t,_={},b=g.timelines[i._slideid].layers[i._id],y=i.frames.length-1,w=i.frames[c].split,x=i.frames[c].split_direction,T=i.frames[c].sfx_effect,k=!1;if(x=void 0===x?"forward":x,-1!==i.hoverframeindex&&i.hoverframeindex==y&&(y-=1),_.content=new punchgs.TimelineLite({align:"normal"}),_.mask=new punchgs.TimelineLite({align:"normal"}),void 0===m.vars.id&&(m.vars.id=Math.round(1e5*Math.random())),"column"===i._nctype&&(m.add(punchgs.TweenLite.set(i._cbgc_man,{visibility:"visible"}),o),m.add(punchgs.TweenLite.set(i._cbgc_auto,{visibility:"hidden"}),o)),i.splittext&&0===c){void 0!==i.mySplitText&&i.mySplitText.revert();var j=t.find("a").length>0?t.find("a"):t;i.mySplitText=new punchgs.SplitText(j,{type:"chars,words,lines",charsClass:"tp-splitted tp-charsplit",wordsClass:"tp-splitted tp-wordsplit",linesClass:"tp-splitted tp-linesplit"}),t.addClass("splitted")}void 0!==i.mySplitText&&w&&w.match(/chars|words|lines/g)&&(u=i.mySplitText[w],k=!0);var L,I,W=c!==i.outframeindex?h(l(),i.frames[c].to,void 0,k,u.length-1):void 0!==i.frames[c].to&&null===i.frames[c].to.match(/auto:auto/g)?h(p(),i.frames[c].to,1==g.sdir,k,u.length-1):h(p(),i.frames[i.inframeindex].from,0==g.sdir,k,u.length-1),R=void 0!==i.frames[c].from?h(W,i.frames[i.inframeindex].from,1==g.sdir,k,u.length-1):void 0,C=i.frames[c].splitdelay;if(0!==c||e.fromcurrentstate?I=v(i.frames[c].mask):L=v(i.frames[c].mask),W.anim.ease=void 0===i.frames[c].ease?punchgs.Power1.easeInOut:i.frames[c].ease,void 0!==R&&(R.anim.ease=void 0===i.frames[c].ease?punchgs.Power1.easeInOut:i.frames[c].ease,R.speed=void 0===i.frames[c].speed?R.speed:i.frames[c].speed,R.anim.x=R.anim.x*g.bw||f(R.anim.x,g,i.eow,i.eoh,i.calcy,i.calcx,"horizontal"),R.anim.y=R.anim.y*g.bw||f(R.anim.y,g,i.eow,i.eoh,i.calcy,i.calcx,"vertical")),void 0!==W&&(W.anim.ease=void 0===i.frames[c].ease?punchgs.Power1.easeInOut:i.frames[c].ease,W.speed=void 0===i.frames[c].speed?W.speed:i.frames[c].speed,W.anim.x=W.anim.x*g.bw||f(W.anim.x,g,i.eow,i.eoh,i.calcy,i.calcx,"horizontal"),W.anim.y=W.anim.y*g.bw||f(W.anim.y,g,i.eow,i.eoh,i.calcy,i.calcx,"vertical")),t.data("iframes")&&m.add(punchgs.TweenLite.set(t.find("iframe"),{autoAlpha:1}),o+"+=0.001"),c===i.outframeindex&&(i.frames[c].to&&i.frames[c].to.match(/auto:auto/g),W.speed=void 0===i.frames[c].speed||"inherit"===i.frames[c].speed?i.frames[i.inframeindex].speed:i.frames[c].speed,W.anim.ease=void 0===i.frames[c].ease||"inherit"===i.frames[c].ease?i.frames[i.inframeindex].ease:i.frames[c].ease,W.anim.overwrite="auto"),0!==c||e.fromcurrentstate)0===c&&e.fromcurrentstate&&(W.speed=R.speed);else{if(u!=t){var z=jQuery.extend({},W.anim,!0);m.add(punchgs.TweenLite.set(t,W.anim),o),(W=l()).ease=z.ease,void 0!==z.filter&&(W.anim.filter=z.filter),void 0!==z["-webkit-filter"]&&(W.anim["-webkit-filter"]=z["-webkit-filter"])}R.anim.visibility="hidden",R.anim.immediateRender=!0,W.anim.visibility="visible"}e.fromcurrentstate&&(W.anim.immediateRender=!0);var O=-1;if(0===c&&!e.fromcurrentstate&&void 0!==i._bmask&&void 0!==T&&T.indexOf("block")>=0||c===i.outframeindex&&!e.fromcurrentstate&&void 0!==i._bmask&&void 0!==T&&T.indexOf("block")>=0){var Q=0===c?R.speed/1e3/2:W.speed/1e3/2,S=[{scaleY:1,scaleX:0,transformOrigin:"0% 50%"},{scaleY:1,scaleX:1,ease:W.anim.ease}],M={scaleY:1,scaleX:0,transformOrigin:"100% 50%",ease:W.anim.ease};switch(O=void 0===C?Q:C+Q,T){case"blocktoleft":case"blockfromright":S[0].transformOrigin="100% 50%",M.transformOrigin="0% 50%";break;case"blockfromtop":case"blocktobottom":S=[{scaleX:1,scaleY:0,transformOrigin:"50% 0%"},{scaleX:1,scaleY:1,ease:W.anim.ease}],M={scaleX:1,scaleY:0,transformOrigin:"50% 100%",ease:W.anim.ease};break;case"blocktotop":case"blockfrombottom":S=[{scaleX:1,scaleY:0,transformOrigin:"50% 100%"},{scaleX:1,scaleY:1,ease:W.anim.ease}],M={scaleX:1,scaleY:0,transformOrigin:"50% 0%",ease:W.anim.ease}}S[0].background=i.frames[c].sfxcolor,m.add(_.mask.fromTo(i._bmask,Q,S[0],S[1],C),o),m.add(_.mask.to(i._bmask,Q,M,O),o)}if(k)var P=s(u.length-1,x);if(0!==c||e.fromcurrentstate)if("block"===i._sfx_out&&c===i.outframeindex)m.add(_.content.staggerTo(u,.001,{autoAlpha:0,delay:O}),o),m.add(_.content.staggerTo(u,W.speed/1e3/2-.001,{x:0,delay:O}),o+"+=0.001");else if(k&&void 0!==P){F={to:d(W.anim)};for(var A in u){Y=jQuery.extend({},W.anim);for(var B in F.to)Y[B]=parseInt(F.to[B].values[F.to[B].index],0),F.to[B].index=F.to[B].index<F.to[B].len?F.to[B].index+1:0;void 0!==i.frames[c].color&&(Y.color=i.frames[c].color),void 0!==i.frames[c].bgcolor&&(Y.backgroundColor=i.frames[c].bgcolor),m.add(_.content.to(u[P[A]],W.speed/1e3,Y,C*A),o)}}else void 0!==i.frames[c].color&&(W.anim.color=i.frames[c].color),void 0!==i.frames[c].bgcolor&&(W.anim.backgroundColor=i.frames[c].bgcolor),m.add(_.content.staggerTo(u,W.speed/1e3,W.anim,C),o);else if("block"===i._sfx_in)m.add(_.content.staggerFromTo(u,.05,{x:0,y:0,autoAlpha:0},{x:0,y:0,autoAlpha:1,delay:O}),o);else if(k&&void 0!==P){var F={from:d(R.anim),to:d(W.anim)};for(var A in u){var X=jQuery.extend({},R.anim),Y=jQuery.extend({},W.anim);for(var B in F.from)X[B]=parseInt(F.from[B].values[F.from[B].index],0),F.from[B].index=F.from[B].index<F.from[B].len?F.from[B].index+1:0;Y.ease=X.ease,void 0!==i.frames[c].color&&(X.color=i.frames[c].color,Y.color=i.cssobj.styleProps.color),void 0!==i.frames[c].bgcolor&&(X.backgroundColor=i.frames[c].bgcolor,Y.backgroundColor=i.cssobj.styleProps["background-color"]),m.add(_.content.fromTo(u[P[A]],R.speed/1e3,X,Y,C*A),o)}}else void 0!==i.frames[c].color&&(R.anim.color=i.frames[c].color,W.anim.color=i.cssobj.styleProps.color),void 0!==i.frames[c].bgcolor&&(R.anim.backgroundColor=i.frames[c].bgcolor,W.anim.backgroundColor=i.cssobj.styleProps["background-color"]),m.add(_.content.staggerFromTo(u,R.speed/1e3,R.anim,W.anim,C),o);return void 0===I||!1===I||0===c&&e.ignorefirstframe||(I.anim.ease=void 0===I.anim.ease||"inherit"===I.anim.ease?i.frames[0].ease:I.anim.ease,I.anim.overflow="hidden",I.anim.x=I.anim.x*g.bw||f(I.anim.x,g,i.eow,i.eoh,i.calcy,i.calcx,"horizontal"),I.anim.y=I.anim.y*g.bw||f(I.anim.y,g,i.eow,i.eoh,i.calcy,i.calcx,"vertical")),0===c&&L&&!1!==L&&!e.fromcurrentstate||0===c&&e.ignorefirstframe?((I=new Object).anim=new Object,I.anim.overwrite="auto",I.anim.ease=W.anim.ease,I.anim.x=I.anim.y=0,L&&!1!==L&&(L.anim.x=L.anim.x*g.bw||f(L.anim.x,g,i.eow,i.eoh,i.calcy,i.calcx,"horizontal"),L.anim.y=L.anim.y*g.bw||f(L.anim.y,g,i.eow,i.eoh,i.calcy,i.calcx,"vertical"),L.anim.overflow="hidden")):0===c&&m.add(_.mask.set(i._mw,{overflow:"visible"}),o),void 0!==L&&void 0!==I&&!1!==L&&!1!==I?m.add(_.mask.fromTo(i._mw,R.speed/1e3,L.anim,I.anim,C),o):void 0!==I&&!1!==I&&m.add(_.mask.to(i._mw,W.speed/1e3,I.anim,C),o),m.addLabel(o+"_end"),i._gsTransformTo&&c===y&&i.hoveredstatus&&(i.hovertimelines.item=punchgs.TweenLite.to(t,0,i._gsTransformTo)),i._gsTransformTo=!1,_.content.eventCallback("onStart",a,[c,b,i._pw,i,m,W.anim,t,e.updateStaticTimeline,g]),_.content.eventCallback("onUpdate",n,[o,i._id,i._pw,i,m,c,jQuery.extend(!0,{},W.anim),e.updateStaticTimeline,t,g]),_.content.eventCallback("onComplete",r,[c,i.frames.length,y,i._pw,i,m,e.updateStaticTimeline,t,g]),m},endMoveCaption:function(e){e.firstframe="frame_0",e.lastframe="frame_999";var i=o(e),a=e.caption.data();if(void 0!==e.frame?i.timeline.play(e.frame):(!i.static||e.currentslide>=i.removeonslide||e.currentslide<i.showonslide)&&(i.outnow=new punchgs.TimelineLite,i.timeline.pause(),!0===a.visibleelement&&t.createFrameOnTimeline({caption:e.caption,timeline:i.outnow,label:"outnow",frameindex:e.caption.data("outframeindex"),opt:e.opt,fromcurrentstate:!0}).play()),e.checkchildrens&&i.timeline_obj&&i.timeline_obj.dchildren&&"none"!==i.timeline_obj.dchildren&&i.timeline_obj.dchildren.length>0)for(var n=0;n<i.timeline_obj.dchildren.length;n++)t.endMoveCaption({caption:jQuery(i.timeline_obj.dchildren[n]),opt:e.opt})},playAnimationFrame:function(e){e.firstframe=e.triggerframein,e.lastframe=e.triggerframeout;var i,a=o(e),n=e.caption.data(),r=0;for(var s in n.frames)n.frames[s].framename===e.frame&&(i=r),r++;void 0!==n.triggeredtimeline&&n.triggeredtimeline.pause(),n.triggeredtimeline=new punchgs.TimelineLite,a.timeline.pause();var d=!0===n.visibleelement;n.triggeredtimeline=t.createFrameOnTimeline({caption:e.caption,timeline:n.triggeredtimeline,label:"triggered",frameindex:i,updateStaticTimeline:!0,opt:e.opt,ignorefirstframe:!0,fromcurrentstate:d}).play()},removeTheCaptions:function(e,a){if("stop"===t.compare_version(i).check)return!1;var n=e.data("index"),r=new Array;a.layers[n]&&jQuery.each(a.layers[n],function(e,t){r.push(t)});var o=t.currentSlideIndex(a);r&&jQuery.each(r,function(e){var i=jQuery(this);"carousel"===a.sliderType&&"on"===a.carousel.showLayersAllTime?(clearTimeout(i.data("videoplaywait")),t.stopVideo&&t.stopVideo(i,a),t.removeMediaFromList&&t.removeMediaFromList(i,a),a.lastplayedvideos=[]):(I(i),clearTimeout(i.data("videoplaywait")),t.endMoveCaption({caption:i,opt:a,currentslide:o}),t.removeMediaFromList&&t.removeMediaFromList(i,a),a.lastplayedvideos=[])})}});var a=function(e,i,a,n,r,o,s,d,l){var m={};if(m.layer=s,m.eventtype=0===e?"enterstage":e===n.outframeindex?"leavestage":"framestarted",m.layertype=s.data("layertype"),n.active=!0,m.frame_index=e,m.layersettings=s.data(),l.c.trigger("revolution.layeraction",[m]),"on"==n.loopanimation&&L(n._lw,l.bw),"enterstage"===m.eventtype&&(n.animdirection="in",n.visibleelement=!0,t.toggleState(n.layertoggledby)),"none"!==i.dchildren&&void 0!==i.dchildren&&i.dchildren.length>0)if(0===e)for(var c=0;c<i.dchildren.length;c++)jQuery(i.dchildren[c]).data("timeline").play(0);else if(e===n.outframeindex)for(c=0;c<i.dchildren.length;c++)t.endMoveCaption({caption:jQuery(i.dchildren[c]),opt:l,checkchildrens:!0});punchgs.TweenLite.set(a,{visibility:"visible"}),n.current_frame=e,n.current_timeline=r,n.current_timeline_time=r.time(),d&&(n.static_layer_timeline_time=n.current_timeline_time),n.last_frame_started=e},n=function(e,t,i,a,n,r,o,s,d,l){"column"===a._nctype&&j(d,l),punchgs.TweenLite.set(i,{visibility:"visible"}),a.current_frame=r,a.current_timeline=n,a.current_timeline_time=n.time(),s&&(a.static_layer_timeline_time=a.current_timeline_time),void 0!==a.hoveranim&&!1===a._gsTransformTo&&(a._gsTransformTo=o,a._gsTransformTo&&a._gsTransformTo.startAt&&delete a._gsTransformTo.startAt,void 0===a.cssobj.styleProps.css?a._gsTransformTo=jQuery.extend(!0,{},a.cssobj.styleProps,a._gsTransformTo):a._gsTransformTo=jQuery.extend(!0,{},a.cssobj.styleProps.css,a._gsTransformTo)),a.visibleelement=!0},r=function(e,i,a,n,r,o,s,d,l){var m={};m.layer=d,m.eventtype=0===e?"enteredstage":e===i-1||e===a?"leftstage":"frameended",m.layertype=d.data("layertype"),m.layersettings=d.data(),l.c.trigger("revolution.layeraction",[m]),"leftstage"!==m.eventtype&&t.animcompleted(d,l),"leftstage"===m.eventtype&&t.stopVideo&&t.stopVideo(d,l),"column"===r._nctype&&(punchgs.TweenLite.to(r._cbgc_man,.01,{visibility:"hidden"}),punchgs.TweenLite.to(r._cbgc_auto,.01,{visibility:"visible"})),"leftstage"===m.eventtype&&(r.active=!1,punchgs.TweenLite.set(n,{visibility:"hidden",overwrite:"auto"}),r.animdirection="out",r.visibleelement=!1,t.unToggleState(r.layertoggledby),"video"===r._nctype&&t.resetVideo&&setTimeout(function(){t.resetVideo(d,l)},100)),r.current_frame=e,r.current_timeline=o,r.current_timeline_time=o.time(),s&&(r.static_layer_timeline_time=r.current_timeline_time)},o=function(e){var t={};return e.firstframe=void 0===e.firstframe?"frame_0":e.firstframe,e.lastframe=void 0===e.lastframe?"frame_999":e.lastframe,t.id=e.caption.data("id")||e.caption.attr("id"),t.slideid=e.caption.data("slideid")||e.caption.closest(".tp-revslider-slidesli").data("index"),t.timeline_obj=e.opt.timelines[t.slideid].layers[t.id],t.timeline=t.timeline_obj.timeline,t.ffs=t.timeline.getLabelTime(e.firstframe),t.ffe=t.timeline.getLabelTime(e.firstframe+"_end"),t.lfs=t.timeline.getLabelTime(e.lastframe),t.lfe=t.timeline.getLabelTime(e.lastframe+"_end"),t.ct=t.timeline.time(),t.static=null!=t.timeline_obj.firstslide||null!=t.timeline_obj.lastslide,t.static&&(t.showonslide=t.timeline_obj.firstslide,t.removeonslide=t.timeline_obj.lastslide),t},s=function(e,t){var i=new Array;switch(t){case"forward":case"random":for(var a=0;a<=e;a++)i.push(a);"random"===t&&(i=function(e){for(var t,i,a=e.length;0!==a;)i=Math.floor(Math.random()*a),t=e[a-=1],e[a]=e[i],e[i]=t;return e}(i));break;case"backward":for(a=0;a<=e;a++)i.push(e-a);break;case"middletoedge":var n=Math.ceil(e/2),r=n-1,o=n+1;i.push(n);for(a=0;a<n;a++)r>=0&&i.push(r),o<=e&&i.push(o),r--,o++;break;case"edgetomiddle":for(r=e,o=0,a=0;a<=Math.floor(e/2);a++)i.push(r),o<r&&i.push(o),r--,o++}return i},d=function(e){var t={};for(var i in e)"string"==typeof e[i]&&e[i].indexOf("|")>=0&&(void 0===t[i]&&(t[i]={index:0}),t[i].values=e[i].replace("[","").replace("]","").split("|"),t[i].len=t[i].values.length-1);return t},l=function(e){return(e=void 0===e?new Object:e).anim=void 0===e.anim?new Object:e.anim,e.anim.x=void 0===e.anim.x?0:e.anim.x,e.anim.y=void 0===e.anim.y?0:e.anim.y,e.anim.z=void 0===e.anim.z?0:e.anim.z,e.anim.rotationX=void 0===e.anim.rotationX?0:e.anim.rotationX,e.anim.rotationY=void 0===e.anim.rotationY?0:e.anim.rotationY,e.anim.rotationZ=void 0===e.anim.rotationZ?0:e.anim.rotationZ,e.anim.scaleX=void 0===e.anim.scaleX?1:e.anim.scaleX,e.anim.scaleY=void 0===e.anim.scaleY?1:e.anim.scaleY,e.anim.skewX=void 0===e.anim.skewX?0:e.anim.skewX,e.anim.skewY=void 0===e.anim.skewY?0:e.anim.skewY,e.anim.opacity=void 0===e.anim.opacity?1:e.anim.opacity,e.anim.transformOrigin=void 0===e.anim.transformOrigin?"50% 50%":e.anim.transformOrigin,e.anim.transformPerspective=void 0===e.anim.transformPerspective?600:e.anim.transformPerspective,e.anim.rotation=void 0===e.anim.rotation?0:e.anim.rotation,e.anim.force3D=void 0===e.anim.force3D?"auto":e.anim.force3D,e.anim.autoAlpha=void 0===e.anim.autoAlpha?1:e.anim.autoAlpha,e.anim.visibility=void 0===e.anim.visibility?"visible":e.anim.visibility,e.anim.overwrite=void 0===e.anim.overwrite?"auto":e.anim.overwrite,e.speed=void 0===e.speed?.3:e.speed,e.filter=void 0===e.filter?"blur(0px) grayscale(0%) brightness(100%)":e.filter,e["-webkit-filter"]=void 0===e["-webkit-filter"]?"blur(0px) grayscale(0%) brightness(100%)":e["-webkit-filter"],e},m=function(){var e=new Object;return e.anim=new Object,e.anim.stroke="none",e.anim.strokeWidth=0,e.anim.strokeDasharray="none",e.anim.strokeDashoffset="0",e},c=function(e,t){var i=e.split(";");return i&&jQuery.each(i,function(e,i){var a=i.split(":"),n=a[0],r=a[1];"sc"==n&&(t.anim.stroke=r),"sw"==n&&(t.anim.strokeWidth=r),"sda"==n&&(t.anim.strokeDasharray=r),"sdo"==n&&(t.anim.strokeDashoffset=r)}),t},p=function(){var e=new Object;return e.anim=new Object,e.anim.x=0,e.anim.y=0,e.anim.z=0,e},g=function(){var e=new Object;return e.anim=new Object,e.speed=.2,e},u=function(e,t,i,a,n){if(n=void 0===n?"":n,jQuery.isNumeric(parseFloat(e)))return parseFloat(e)+n;if(void 0===e||"inherit"===e)return t+"ext";if(e.split("{").length>1){var r=e.split(","),o=parseFloat(r[1].split("}")[0]);if(r=parseFloat(r[0].split("{")[1]),void 0!==i&&void 0!==a){parseInt(Math.random()*(o-r),0),parseInt(r,0);for(var s=0;s<a;s++)e=e+"|"+(parseInt(Math.random()*(o-r),0)+parseInt(r,0))+n;e+="]"}else e=Math.random()*(o-r)+r}return e},f=function(e,t,i,a,n,r,o){return!jQuery.isNumeric(e)&&e.match(/%]/g)?(e=e.split("[")[1].split("]")[0],"horizontal"==o?e=(i+2)*parseInt(e,0)/100:"vertical"==o&&(e=(a+2)*parseInt(e,0)/100)):e="top"===(e="left"===(e="layer_top"===(e="layer_left"===e?0-i:"layer_right"===e?i:e)?0-a:"layer_bottom"===e?a:e)||"stage_left"===e?0-i-r:"right"===e||"stage_right"===e?t.conw-r:"center"===e||"stage_center"===e?t.conw/2-i/2-r:e)||"stage_top"===e?0-a-n:"bottom"===e||"stage_bottom"===e?t.conh-n:"middle"===e||"stage_middle"===e?t.conh/2-a/2-n:e,e},h=function(e,t,i,a,n){var r=new Object;if(r=jQuery.extend(!0,{},r,e),void 0===t)return r;var o=t.split(";"),s="";return o&&jQuery.each(o,function(e,t){var o=t.split(":"),d=o[0],l=o[1];i&&"none"!==i&&null!=l&&l.length>0&&l.match(/\(R\)/)&&("["===(l="right"===(l=l.replace("(R)",""))?"left":"left"===l?"right":"top"===l?"bottom":"bottom"===l?"top":l)[0]&&"-"===l[1]?l=l.replace("[-","["):"["===l[0]&&"-"!==l[1]?l=l.replace("[","[-"):"-"===l[0]?l=l.replace("-",""):l[0].match(/[1-9]/)&&(l="-"+l)),null!=l&&(l=l.replace(/\(R\)/,""),"rotationX"!=d&&"rX"!=d||(r.anim.rotationX=u(l,r.anim.rotationX,a,n,"deg")),"rotationY"!=d&&"rY"!=d||(r.anim.rotationY=u(l,r.anim.rotationY,a,n,"deg")),"rotationZ"!=d&&"rZ"!=d||(r.anim.rotation=u(l,r.anim.rotationZ,a,n,"deg")),"scaleX"!=d&&"sX"!=d||(r.anim.scaleX=u(l,r.anim.scaleX,a,n)),"scaleY"!=d&&"sY"!=d||(r.anim.scaleY=u(l,r.anim.scaleY,a,n)),"opacity"!=d&&"o"!=d||(r.anim.opacity=u(l,r.anim.opacity,a,n)),"fb"==d&&(s=""===s?"blur("+parseInt(l,0)+"px)":s+" blur("+parseInt(l,0)+"px)"),"fg"==d&&(s=""===s?"grayscale("+parseInt(l,0)+"%)":s+" grayscale("+parseInt(l,0)+"%)"),"fbr"==d&&(s=""===s?"brightness("+parseInt(l,0)+"%)":s+" brightness("+parseInt(l,0)+"%)"),0===r.anim.opacity&&(r.anim.autoAlpha=0),r.anim.opacity=0==r.anim.opacity?1e-4:r.anim.opacity,"skewX"!=d&&"skX"!=d||(r.anim.skewX=u(l,r.anim.skewX,a,n)),"skewY"!=d&&"skY"!=d||(r.anim.skewY=u(l,r.anim.skewY,a,n)),"x"==d&&(r.anim.x=u(l,r.anim.x,a,n)),"y"==d&&(r.anim.y=u(l,r.anim.y,a,n)),"z"==d&&(r.anim.z=u(l,r.anim.z,a,n)),"transformOrigin"!=d&&"tO"!=d||(r.anim.transformOrigin=l.toString()),"transformPerspective"!=d&&"tP"!=d||(r.anim.transformPerspective=parseInt(l,0)),"speed"!=d&&"s"!=d||(r.speed=parseFloat(l)))}),""!==s&&(r.anim["-webkit-filter"]=s,r.anim.filter=s),r},v=function(e){if(void 0===e)return!1;var t=new Object;t.anim=new Object;var i=e.split(";");return i&&jQuery.each(i,function(e,i){var a=(i=i.split(":"))[0],n=i[1];"x"==a&&(t.anim.x=n),"y"==a&&(t.anim.y=n),"s"==a&&(t.speed=parseFloat(n)),"e"!=a&&"ease"!=a||(t.anim.ease=n)}),t},_=function(e,t,i){if(null==e&&(e=0),!jQuery.isArray(e)&&"string"===jQuery.type(e)&&(e.split(",").length>1||e.split("[").length>1)){var a=(e=(e=e.replace("[","")).replace("]","")).match(/'/g)?e.split("',"):e.split(",");e=new Array,a&&jQuery.each(a,function(t,i){i=(i=i.replace("'","")).replace("'",""),e.push(i)})}else{var n=e;jQuery.isArray(e)||(e=new Array).push(n)}n=e[e.length-1];if(e.length<t.rle)for(var r=1;r<=t.curWinRange;r++)e.push(n);return e};function b(e,t,i,a,n,r,o){var s=e.find(t);s.css("borderWidth",r+"px"),s.css(i,0-r+"px"),s.css(a,"0px solid transparent"),s.css(n,o)}var y=function(e,t){if(void 0===t)return e;var i=(t=(t=(t=(t=(t=(t=(t=(t=t.replace("c:","color:")).replace("bg:","background-color:")).replace("bw:","border-width:")).replace("bc:","border-color:")).replace("br:","borderRadius:")).replace("bs:","border-style:")).replace("td:","text-decoration:")).replace("zi:","zIndex:")).split(";");return i&&jQuery.each(i,function(t,i){var a=i.split(":");a[0].length>0&&("background-color"===a[0]&&a[1].indexOf("gradient")>=0&&(a[0]="background"),e.anim[a[0]]=a[1])}),e},w=function(e,t){var i,a=new Object,n=!1;if("rekursive"==t&&(i=e.closest(".tp-caption"))&&e.css("fontSize")===i.css("fontSize")&&e.css("fontWeight")===i.css("fontWeight")&&e.css("lineHeight")===i.css("lineHeight")&&(n=!0),a.basealign=e.data("basealign")||"grid",a.fontSize=n?void 0===i.data("fontsize")?parseInt(i.css("fontSize"),0)||0:i.data("fontsize"):void 0===e.data("fontsize")?parseInt(e.css("fontSize"),0)||0:e.data("fontsize"),a.fontWeight=n?void 0===i.data("fontweight")?parseInt(i.css("fontWeight"),0)||0:i.data("fontweight"):void 0===e.data("fontweight")?parseInt(e.css("fontWeight"),0)||0:e.data("fontweight"),a.whiteSpace=n?void 0===i.data("whitespace")?i.css("whitespace")||"normal":i.data("whitespace"):void 0===e.data("whitespace")?e.css("whitespace")||"normal":e.data("whitespace"),a.textAlign=n?void 0===i.data("textalign")?i.css("textalign")||"inherit":i.data("textalign"):void 0===e.data("textalign")?e.css("textalign")||"inherit":e.data("textalign"),a.zIndex=n?void 0===i.data("zIndex")?i.css("zIndex")||"inherit":i.data("zIndex"):void 0===e.data("zIndex")?e.css("zIndex")||"inherit":e.data("zIndex"),-1!==jQuery.inArray(e.data("layertype"),["video","image","audio"])||e.is("img")?a.lineHeight=0:a.lineHeight=n?void 0===i.data("lineheight")?parseInt(i.css("lineHeight"),0)||0:i.data("lineheight"):void 0===e.data("lineheight")?parseInt(e.css("lineHeight"),0)||0:e.data("lineheight"),a.letterSpacing=n?void 0===i.data("letterspacing")?parseFloat(i.css("letterSpacing"),0)||0:i.data("letterspacing"):void 0===e.data("letterspacing")?parseFloat(e.css("letterSpacing"))||0:e.data("letterspacing"),a.paddingTop=void 0===e.data("paddingtop")?parseInt(e.css("paddingTop"),0)||0:e.data("paddingtop"),a.paddingBottom=void 0===e.data("paddingbottom")?parseInt(e.css("paddingBottom"),0)||0:e.data("paddingbottom"),a.paddingLeft=void 0===e.data("paddingleft")?parseInt(e.css("paddingLeft"),0)||0:e.data("paddingleft"),a.paddingRight=void 0===e.data("paddingright")?parseInt(e.css("paddingRight"),0)||0:e.data("paddingright"),a.marginTop=void 0===e.data("margintop")?parseInt(e.css("marginTop"),0)||0:e.data("margintop"),a.marginBottom=void 0===e.data("marginbottom")?parseInt(e.css("marginBottom"),0)||0:e.data("marginbottom"),a.marginLeft=void 0===e.data("marginleft")?parseInt(e.css("marginLeft"),0)||0:e.data("marginleft"),a.marginRight=void 0===e.data("marginright")?parseInt(e.css("marginRight"),0)||0:e.data("marginright"),a.borderTopWidth=void 0===e.data("bordertopwidth")?parseInt(e.css("borderTopWidth"),0)||0:e.data("bordertopwidth"),a.borderBottomWidth=void 0===e.data("borderbottomwidth")?parseInt(e.css("borderBottomWidth"),0)||0:e.data("borderbottomwidth"),a.borderLeftWidth=void 0===e.data("borderleftwidth")?parseInt(e.css("borderLeftWidth"),0)||0:e.data("borderleftwidth"),a.borderRightWidth=void 0===e.data("borderrightwidth")?parseInt(e.css("borderRightWidth"),0)||0:e.data("borderrightwidth"),"rekursive"!=t){if(a.color=void 0===e.data("color")?"nopredefinedcolor":e.data("color"),a.whiteSpace=n?void 0===i.data("whitespace")?i.css("whiteSpace")||"nowrap":i.data("whitespace"):void 0===e.data("whitespace")?e.css("whiteSpace")||"nowrap":e.data("whitespace"),a.textAlign=n?void 0===i.data("textalign")?i.css("textalign")||"inherit":i.data("textalign"):void 0===e.data("textalign")?e.css("textalign")||"inherit":e.data("textalign"),a.fontWeight=n?void 0===i.data("fontweight")?parseInt(i.css("fontWeight"),0)||0:i.data("fontweight"):void 0===e.data("fontweight")?parseInt(e.css("fontWeight"),0)||0:e.data("fontweight"),a.minWidth=void 0===e.data("width")?parseInt(e.css("minWidth"),0)||0:e.data("width"),a.minHeight=void 0===e.data("height")?parseInt(e.css("minHeight"),0)||0:e.data("height"),null!=e.data("videowidth")&&null!=e.data("videoheight")){var r=e.data("videowidth"),o=e.data("videoheight");r="100%"===r?"none":r,o="100%"===o?"none":o,e.data("width",r),e.data("height",o)}a.maxWidth=void 0===e.data("width")?parseInt(e.css("maxWidth"),0)||"none":e.data("width"),a.maxHeight=-1!==jQuery.inArray(e.data("type"),["column","row"])?"none":void 0===e.data("height")?parseInt(e.css("maxHeight"),0)||"none":e.data("height"),a.wan=void 0===e.data("wan")?parseInt(e.css("-webkit-transition"),0)||"none":e.data("wan"),a.moan=void 0===e.data("moan")?parseInt(e.css("-moz-animation-transition"),0)||"none":e.data("moan"),a.man=void 0===e.data("man")?parseInt(e.css("-ms-animation-transition"),0)||"none":e.data("man"),a.ani=void 0===e.data("ani")?parseInt(e.css("transition"),0)||"none":e.data("ani")}return a.styleProps={borderTopLeftRadius:e[0].style.borderTopLeftRadius,borderTopRightRadius:e[0].style.borderTopRightRadius,borderBottomRightRadius:e[0].style.borderBottomRightRadius,borderBottomLeftRadius:e[0].style.borderBottomLeftRadius,background:e[0].style.background,boxShadow:e[0].style.boxShadow,"background-color":e[0].style["background-color"],"border-top-color":e[0].style["border-top-color"],"border-bottom-color":e[0].style["border-bottom-color"],"border-right-color":e[0].style["border-right-color"],"border-left-color":e[0].style["border-left-color"],"border-top-style":e[0].style["border-top-style"],"border-bottom-style":e[0].style["border-bottom-style"],"border-left-style":e[0].style["border-left-style"],"border-right-style":e[0].style["border-right-style"],"border-left-width":e[0].style["border-left-width"],"border-right-width":e[0].style["border-right-width"],"border-bottom-width":e[0].style["border-bottom-width"],"border-top-width":e[0].style["border-top-width"],color:e[0].style.color,"text-decoration":e[0].style["text-decoration"],"font-style":e[0].style["font-style"]},""!==a.styleProps.background&&void 0!==a.styleProps.background&&a.styleProps.background!==a.styleProps["background-color"]||delete a.styleProps.background,""==a.styleProps.color&&(a.styleProps.color=e.css("color")),a},x=function(e,t){var i=new Object;return e&&jQuery.each(e,function(a,n){var r=_(n,t)[t.curWinRange];i[a]=void 0!==r?r:e[a]}),i},T=function(e,t,i,a){return e="full"===(e=jQuery.isNumeric(e)?e*t+"px":e)?a:"auto"===e||"none"===e?i:e},k=function(e,t,i,a){var n=e.data();n=void 0===n?{}:n;try{if("BR"==e[0].nodeName||"br"==e[0].tagName)return!1}catch(e){}n.cssobj=void 0===n.cssobj?w(e,i):n.cssobj;var r=x(n.cssobj,t),o=t.bw,s=t.bh;"off"===a&&(o=1,s=1),"auto"==r.lineHeight&&(r.lineHeight=r.fontSize+4);var d={Top:r.marginTop,Bottom:r.marginBottom,Left:r.marginLeft,Right:r.marginRight};if("column"===n._nctype&&(punchgs.TweenLite.set(n._column,{paddingTop:Math.round(r.marginTop*s)+"px",paddingBottom:Math.round(r.marginBottom*s)+"px",paddingLeft:Math.round(r.marginLeft*o)+"px",paddingRight:Math.round(r.marginRight*o)+"px"}),d={Top:0,Bottom:0,Left:0,Right:0}),!e.hasClass("tp-splitted")){if(e.css("-webkit-transition","none"),e.css("-moz-transition","none"),e.css("-ms-transition","none"),e.css("transition","none"),(void 0!==e.data("transform_hover")||void 0!==e.data("style_hover"))&&punchgs.TweenLite.set(e,r.styleProps),punchgs.TweenLite.set(e,{fontSize:Math.round(r.fontSize*o)+"px",fontWeight:r.fontWeight,letterSpacing:Math.floor(r.letterSpacing*o)+"px",paddingTop:Math.round(r.paddingTop*s)+"px",paddingBottom:Math.round(r.paddingBottom*s)+"px",paddingLeft:Math.round(r.paddingLeft*o)+"px",paddingRight:Math.round(r.paddingRight*o)+"px",marginTop:d.Top*s+"px",marginBottom:d.Bottom*s+"px",marginLeft:d.Left*o+"px",marginRight:d.Right*o+"px",borderTopWidth:Math.round(r.borderTopWidth*s)+"px",borderBottomWidth:Math.round(r.borderBottomWidth*s)+"px",borderLeftWidth:Math.round(r.borderLeftWidth*o)+"px",borderRightWidth:Math.round(r.borderRightWidth*o)+"px",lineHeight:Math.round(r.lineHeight*s)+"px",textAlign:r.textAlign,overwrite:"auto"}),"rekursive"!=i){var l="slide"==r.basealign?t.ulw:t.gridwidth[t.curWinRange],m="slide"==r.basealign?t.ulh:t.gridheight[t.curWinRange],c=T(r.maxWidth,o,"none",l),p=T(r.maxHeight,s,"none",m),g=T(r.minWidth,o,"0px",l),u=T(r.minHeight,s,"0px",m);if(g=void 0===g?0:g,u=void 0===u?0:u,c=void 0===c?"none":c,p=void 0===p?"none":p,n._isgroup&&("#1/1#"===g&&(g=c=l),"#1/2#"===g&&(g=c=l/2),"#1/3#"===g&&(g=c=l/3),"#1/4#"===g&&(g=c=l/4),"#1/5#"===g&&(g=c=l/5),"#1/6#"===g&&(g=c=l/6),"#2/3#"===g&&(g=c=l/3*2),"#3/4#"===g&&(g=c=l/4*3),"#2/5#"===g&&(g=c=l/5*2),"#3/5#"===g&&(g=c=l/5*3),"#4/5#"===g&&(g=c=l/5*4),"#3/6#"===g&&(g=c=l/6*3),"#4/6#"===g&&(g=c=l/6*4),"#5/6#"===g&&(g=c=l/6*5)),n._ingroup&&(n._groupw=g,n._grouph=u),punchgs.TweenLite.set(e,{maxWidth:c,maxHeight:p,minWidth:g,minHeight:u,whiteSpace:r.whiteSpace,textAlign:r.textAlign,overwrite:"auto"}),"nopredefinedcolor"!=r.color&&punchgs.TweenLite.set(e,{color:r.color,overwrite:"auto"}),null!=n.svg_src){var f="nopredefinedcolor"!=r.color&&null!=r.color?r.color:null!=r.css&&"nopredefinedcolor"!=r.css.color&&null!=r.css.color?r.css.color:null!=r.styleProps.color?r.styleProps.color:null!=r.styleProps.css&&null!=r.styleProps.css.color&&r.styleProps.css.color;0!=f&&(punchgs.TweenLite.set(e.find("svg"),{fill:f,overwrite:"auto"}),punchgs.TweenLite.set(e.find("svg path"),{fill:f,overwrite:"auto"}))}}"column"===n._nctype&&(void 0===n._column_bg_set&&(n._column_bg_set=e.css("backgroundColor"),n._column_bg_image=e.css("backgroundImage"),n._column_bg_image_repeat=e.css("backgroundRepeat"),n._column_bg_image_position=e.css("backgroundPosition"),n._column_bg_image_size=e.css("backgroundSize"),n._column_bg_opacity=e.data("bgopacity"),n._column_bg_opacity=void 0===n._column_bg_opacity?1:n._column_bg_opacity,punchgs.TweenLite.set(e,{backgroundColor:"transparent",backgroundImage:""})),setTimeout(function(){j(e,t)},1),n._cbgc_auto&&n._cbgc_auto.length>0&&(n._cbgc_auto[0].style.backgroundSize=n._column_bg_image_size,jQuery.isArray(r.marginLeft)?punchgs.TweenLite.set(n._cbgc_auto,{borderTopWidth:r.marginTop[t.curWinRange]*s+"px",borderLeftWidth:r.marginLeft[t.curWinRange]*o+"px",borderRightWidth:r.marginRight[t.curWinRange]*o+"px",borderBottomWidth:r.marginBottom[t.curWinRange]*s+"px",backgroundColor:n._column_bg_set,backgroundImage:n._column_bg_image,backgroundRepeat:n._column_bg_image_repeat,backgroundPosition:n._column_bg_image_position,opacity:n._column_bg_opacity}):punchgs.TweenLite.set(n._cbgc_auto,{borderTopWidth:r.marginTop*s+"px",borderLeftWidth:r.marginLeft*o+"px",borderRightWidth:r.marginRight*o+"px",borderBottomWidth:r.marginBottom*s+"px",backgroundColor:n._column_bg_set,backgroundImage:n._column_bg_image,backgroundRepeat:n._column_bg_image_repeat,backgroundPosition:n._column_bg_image_position,opacity:n._column_bg_opacity}))),setTimeout(function(){e.css("-webkit-transition",e.data("wan")),e.css("-moz-transition",e.data("moan")),e.css("-ms-transition",e.data("man")),e.css("transition",e.data("ani"))},30)}},j=function(e,t){var i,a,n,r=e.data();r._cbgc_man&&r._cbgc_man.length>0&&(jQuery.isArray(r.cssobj.marginLeft)?(r.cssobj.marginLeft[t.curWinRange]*t.bw,i=r.cssobj.marginTop[t.curWinRange]*t.bh,a=r.cssobj.marginBottom[t.curWinRange]*t.bh,r.cssobj.marginRight[t.curWinRange],t.bw):(r.cssobj.marginLeft*t.bw,i=r.cssobj.marginTop*t.bh,a=r.cssobj.marginBottom*t.bh,r.cssobj.marginRight,t.bw),n=r._row.hasClass("rev_break_columns")?"100%":r._row.height()-(i+a)+"px",r._cbgc_man[0].style.backgroundSize=r._column_bg_image_size,punchgs.TweenLite.set(r._cbgc_man,{width:"100%",height:n,backgroundColor:r._column_bg_set,backgroundImage:r._column_bg_image,backgroundRepeat:r._column_bg_image_repeat,backgroundPosition:r._column_bg_image_position,overwrite:"auto",opacity:r._column_bg_opacity}))},L=function(e,t){var i=e.data();if(e.hasClass("rs-pendulum")&&null==i._loop_timeline){i._loop_timeline=new punchgs.TimelineLite;var a=null==e.data("startdeg")?-20:e.data("startdeg"),n=null==e.data("enddeg")?20:e.data("enddeg"),r=null==e.data("speed")?2:e.data("speed"),o=null==e.data("origin")?"50% 50%":e.data("origin"),s=null==e.data("easing")?punchgs.Power2.easeInOut:e.data("easing");a*=t,n*=t,i._loop_timeline.append(new punchgs.TweenLite.fromTo(e,r,{force3D:"auto",rotation:a,transformOrigin:o},{rotation:n,ease:s})),i._loop_timeline.append(new punchgs.TweenLite.fromTo(e,r,{force3D:"auto",rotation:n,transformOrigin:o},{rotation:a,ease:s,onComplete:function(){i._loop_timeline.restart()}}))}if(e.hasClass("rs-rotate")&&null==i._loop_timeline){i._loop_timeline=new punchgs.TimelineLite;a=null==e.data("startdeg")?0:e.data("startdeg"),n=null==e.data("enddeg")?360:e.data("enddeg"),r=null==e.data("speed")?2:e.data("speed"),o=null==e.data("origin")?"50% 50%":e.data("origin"),s=null==e.data("easing")?punchgs.Power2.easeInOut:e.data("easing");a*=t,n*=t,i._loop_timeline.append(new punchgs.TweenLite.fromTo(e,r,{force3D:"auto",rotation:a,transformOrigin:o},{rotation:n,ease:s,onComplete:function(){i._loop_timeline.restart()}}))}if(e.hasClass("rs-slideloop")&&null==i._loop_timeline){i._loop_timeline=new punchgs.TimelineLite;var d=null==e.data("xs")?0:e.data("xs"),l=null==e.data("ys")?0:e.data("ys"),m=null==e.data("xe")?0:e.data("xe"),c=null==e.data("ye")?0:e.data("ye");r=null==e.data("speed")?2:e.data("speed"),s=null==e.data("easing")?punchgs.Power2.easeInOut:e.data("easing");d*=t,l*=t,m*=t,c*=t,i._loop_timeline.append(new punchgs.TweenLite.fromTo(e,r,{force3D:"auto",x:d,y:l},{x:m,y:c,ease:s})),i._loop_timeline.append(new punchgs.TweenLite.fromTo(e,r,{force3D:"auto",x:m,y:c},{x:d,y:l,onComplete:function(){i._loop_timeline.restart()}}))}if(e.hasClass("rs-pulse")&&null==i._loop_timeline){i._loop_timeline=new punchgs.TimelineLite;var p=null==e.data("zoomstart")?0:e.data("zoomstart"),g=null==e.data("zoomend")?0:e.data("zoomend");r=null==e.data("speed")?2:e.data("speed"),s=null==e.data("easing")?punchgs.Power2.easeInOut:e.data("easing");i._loop_timeline.append(new punchgs.TweenLite.fromTo(e,r,{force3D:"auto",scale:p},{scale:g,ease:s})),i._loop_timeline.append(new punchgs.TweenLite.fromTo(e,r,{force3D:"auto",scale:g},{scale:p,onComplete:function(){i._loop_timeline.restart()}}))}if(e.hasClass("rs-wave")&&null==i._loop_timeline){i._loop_timeline=new punchgs.TimelineLite;var u=null==e.data("angle")?10:parseInt(e.data("angle"),0),f=null==e.data("radius")?10:parseInt(e.data("radius"),0),h=(r=null==e.data("speed")?-20:e.data("speed"),(o=null==e.data("origin")?"50% 50%":e.data("origin")).split(" ")),v=new Object;h.length>=1?(v.x=h[0],v.y=h[1]):(v.x="50%",v.y="50%");var _={a:0,ang:u,element:e,unit:f*=t,xoffset:0+(parseInt(v.x,0)/100-.5)*e.width(),yoffset:-1*f+(parseInt(v.y,0)/100-.5)*e.height()},b=parseInt(u,0),y=new punchgs.TweenLite.fromTo(_,r,{a:0+b},{a:360+b,force3D:"auto",ease:punchgs.Linear.easeNone});y.eventCallback("onUpdate",function(e){var t=e.a*(Math.PI/180),i=e.yoffset+e.unit*(1-Math.sin(t)),a=e.xoffset+Math.cos(t)*e.unit;punchgs.TweenLite.to(e.element,.1,{force3D:"auto",x:a,y:i})},[_]),y.eventCallback("onComplete",function(e){e._loop_timeline.restart()},[i]),i._loop_timeline.append(y)}},I=function(e){e.closest(".rs-pendulum, .rs-slideloop, .rs-pulse, .rs-wave").each(function(){null!=this._loop_timeline&&(this._loop_timeline.pause(),this._loop_timeline=null)})}}(jQuery);

/********************************************
 * REVOLUTION 5.4.6.4 EXTENSION - NAVIGATION
 * @version: 1.3.5 (06.04.2017)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
*********************************************/
!function(a){"use strict";var b=jQuery.fn.revolution,c=b.is_mobile(),d={alias:"Navigation Min JS",name:"revolution.extensions.navigation.min.js",min_core:"5.4.0",version:"1.3.5"};jQuery.extend(!0,b,{hideUnHideNav:function(a){var b=a.c.width(),c=a.navigation.arrows,d=a.navigation.bullets,e=a.navigation.thumbnails,f=a.navigation.tabs;m(c)&&y(a.c.find(".tparrows"),c.hide_under,b,c.hide_over),m(d)&&y(a.c.find(".tp-bullets"),d.hide_under,b,d.hide_over),m(e)&&y(a.c.parent().find(".tp-thumbs"),e.hide_under,b,e.hide_over),m(f)&&y(a.c.parent().find(".tp-tabs"),f.hide_under,b,f.hide_over),x(a)},resizeThumbsTabs:function(a,b){if(a.navigation&&a.navigation.tabs.enable||a.navigation&&a.navigation.thumbnails.enable){var c=(jQuery(window).width()-480)/500,d=new punchgs.TimelineLite,e=a.navigation.tabs,g=a.navigation.thumbnails,h=a.navigation.bullets;if(d.pause(),c=c>1?1:c<0?0:c,m(e)&&(b||e.width>e.min_width)&&f(c,d,a.c,e,a.slideamount,"tab"),m(g)&&(b||g.width>g.min_width)&&f(c,d,a.c,g,a.slideamount,"thumb"),m(h)&&b){var i=a.c.find(".tp-bullets");i.find(".tp-bullet").each(function(a){var b=jQuery(this),c=a+1,d=b.outerWidth()+parseInt(void 0===h.space?0:h.space,0),e=b.outerHeight()+parseInt(void 0===h.space?0:h.space,0);"vertical"===h.direction?(b.css({top:(c-1)*e+"px",left:"0px"}),i.css({height:(c-1)*e+b.outerHeight(),width:b.outerWidth()})):(b.css({left:(c-1)*d+"px",top:"0px"}),i.css({width:(c-1)*d+b.outerWidth(),height:b.outerHeight()}))})}d.play(),x(a)}return!0},updateNavIndexes:function(a){function d(a){c.find(a).lenght>0&&c.find(a).each(function(a){jQuery(this).data("liindex",a)})}var c=a.c;d(".tp-tab"),d(".tp-bullet"),d(".tp-thumb"),b.resizeThumbsTabs(a,!0),b.manageNavigation(a)},manageNavigation:function(a){var c=b.getHorizontalOffset(a.c.parent(),"left"),d=b.getHorizontalOffset(a.c.parent(),"right");m(a.navigation.bullets)&&("fullscreen"!=a.sliderLayout&&"fullwidth"!=a.sliderLayout&&(a.navigation.bullets.h_offset_old=void 0===a.navigation.bullets.h_offset_old?a.navigation.bullets.h_offset:a.navigation.bullets.h_offset_old,a.navigation.bullets.h_offset="center"===a.navigation.bullets.h_align?a.navigation.bullets.h_offset_old+c/2-d/2:a.navigation.bullets.h_offset_old+c-d),t(a.c.find(".tp-bullets"),a.navigation.bullets,a)),m(a.navigation.thumbnails)&&t(a.c.parent().find(".tp-thumbs"),a.navigation.thumbnails,a),m(a.navigation.tabs)&&t(a.c.parent().find(".tp-tabs"),a.navigation.tabs,a),m(a.navigation.arrows)&&("fullscreen"!=a.sliderLayout&&"fullwidth"!=a.sliderLayout&&(a.navigation.arrows.left.h_offset_old=void 0===a.navigation.arrows.left.h_offset_old?a.navigation.arrows.left.h_offset:a.navigation.arrows.left.h_offset_old,a.navigation.arrows.left.h_offset="right"===a.navigation.arrows.left.h_align?a.navigation.arrows.left.h_offset_old+d:a.navigation.arrows.left.h_offset_old+c,a.navigation.arrows.right.h_offset_old=void 0===a.navigation.arrows.right.h_offset_old?a.navigation.arrows.right.h_offset:a.navigation.arrows.right.h_offset_old,a.navigation.arrows.right.h_offset="right"===a.navigation.arrows.right.h_align?a.navigation.arrows.right.h_offset_old+d:a.navigation.arrows.right.h_offset_old+c),t(a.c.find(".tp-leftarrow.tparrows"),a.navigation.arrows.left,a),t(a.c.find(".tp-rightarrow.tparrows"),a.navigation.arrows.right,a)),m(a.navigation.thumbnails)&&e(a.c.parent().find(".tp-thumbs"),a.navigation.thumbnails),m(a.navigation.tabs)&&e(a.c.parent().find(".tp-tabs"),a.navigation.tabs)},createNavigation:function(a,f){if("stop"===b.compare_version(d).check)return!1;var g=a.parent(),j=f.navigation.arrows,n=f.navigation.bullets,r=f.navigation.thumbnails,s=f.navigation.tabs,t=m(j),v=m(n),x=m(r),y=m(s);h(a,f),i(a,f),t&&q(a,j,f),f.li.each(function(b){var c=jQuery(f.li[f.li.length-1-b]),d=jQuery(this);v&&(f.navigation.bullets.rtl?u(a,n,c,f):u(a,n,d,f)),x&&(f.navigation.thumbnails.rtl?w(a,r,c,"tp-thumb",f):w(a,r,d,"tp-thumb",f)),y&&(f.navigation.tabs.rtl?w(a,s,c,"tp-tab",f):w(a,s,d,"tp-tab",f))}),a.bind("revolution.slide.onafterswap revolution.nextslide.waiting",function(){var b=0==a.find(".next-revslide").length?a.find(".active-revslide").data("index"):a.find(".next-revslide").data("index");a.find(".tp-bullet").each(function(){var a=jQuery(this);a.data("liref")===b?a.addClass("selected"):a.removeClass("selected")}),g.find(".tp-thumb, .tp-tab").each(function(){var a=jQuery(this);a.data("liref")===b?(a.addClass("selected"),a.hasClass("tp-tab")?e(g.find(".tp-tabs"),s):e(g.find(".tp-thumbs"),r)):a.removeClass("selected")});var c=0,d=!1;f.thumbs&&jQuery.each(f.thumbs,function(a,e){c=!1===d?a:c,d=e.id===b||a===b||d});var h=c>0?c-1:f.slideamount-1,i=c+1==f.slideamount?0:c+1;if(!0===j.enable){var k=j.tmp;if(void 0!=f.thumbs[h]&&jQuery.each(f.thumbs[h].params,function(a,b){k=k.replace(b.from,b.to)}),j.left.j.html(k),k=j.tmp,i>f.slideamount)return;jQuery.each(f.thumbs[i].params,function(a,b){k=k.replace(b.from,b.to)}),j.right.j.html(k),j.rtl?(punchgs.TweenLite.set(j.left.j.find(".tp-arr-imgholder"),{backgroundImage:"url("+f.thumbs[i].src+")"}),punchgs.TweenLite.set(j.right.j.find(".tp-arr-imgholder"),{backgroundImage:"url("+f.thumbs[h].src+")"})):(punchgs.TweenLite.set(j.left.j.find(".tp-arr-imgholder"),{backgroundImage:"url("+f.thumbs[h].src+")"}),punchgs.TweenLite.set(j.right.j.find(".tp-arr-imgholder"),{backgroundImage:"url("+f.thumbs[i].src+")"}))}}),l(j),l(n),l(r),l(s),g.on("mouseenter mousemove",function(){g.hasClass("tp-mouseover")||(g.addClass("tp-mouseover"),punchgs.TweenLite.killDelayedCallsTo(p),t&&j.hide_onleave&&p(g.find(".tparrows"),j,"show"),v&&n.hide_onleave&&p(g.find(".tp-bullets"),n,"show"),x&&r.hide_onleave&&p(g.find(".tp-thumbs"),r,"show"),y&&s.hide_onleave&&p(g.find(".tp-tabs"),s,"show"),c&&(g.removeClass("tp-mouseover"),o(a,f)))}),g.on("mouseleave",function(){g.removeClass("tp-mouseover"),o(a,f)}),t&&j.hide_onleave&&p(g.find(".tparrows"),j,"hide",0),v&&n.hide_onleave&&p(g.find(".tp-bullets"),n,"hide",0),x&&r.hide_onleave&&p(g.find(".tp-thumbs"),r,"hide",0),y&&s.hide_onleave&&p(g.find(".tp-tabs"),s,"hide",0),x&&k(g.find(".tp-thumbs"),f),y&&k(g.find(".tp-tabs"),f),"carousel"===f.sliderType&&k(a,f,!0),("on"===f.navigation.touch.touchOnDesktop||"on"==f.navigation.touch.touchenabled&&c)&&k(a,f,"swipebased")}});var e=function(a,b){var d=(a.hasClass("tp-thumbs"),a.hasClass("tp-thumbs")?".tp-thumb-mask":".tp-tab-mask"),e=a.hasClass("tp-thumbs")?".tp-thumbs-inner-wrapper":".tp-tabs-inner-wrapper",f=a.hasClass("tp-thumbs")?".tp-thumb":".tp-tab",g=a.find(d),h=g.find(e),i=b.direction,j="vertical"===i?g.find(f).first().outerHeight(!0)+b.space:g.find(f).first().outerWidth(!0)+b.space,k="vertical"===i?g.height():g.width(),l=parseInt(g.find(f+".selected").data("liindex"),0),m=k/j,n="vertical"===i?g.height():g.width(),o=0-l*j,p="vertical"===i?h.height():h.width(),q=o<0-(p-n)?0-(p-n):q>0?0:o,r=h.data("offset");m>2&&(q=o-(r+j)<=0?o-(r+j)<0-j?r:q+j:q,q=o-j+r+k<j&&o+(Math.round(m)-2)*j<r?o+(Math.round(m)-2)*j:q),q=q<0-(p-n)?0-(p-n):q>0?0:q,"vertical"!==i&&g.width()>=h.width()&&(q=0),"vertical"===i&&g.height()>=h.height()&&(q=0),a.hasClass("dragged")||("vertical"===i?h.data("tmmove",punchgs.TweenLite.to(h,.5,{top:q+"px",ease:punchgs.Power3.easeInOut})):h.data("tmmove",punchgs.TweenLite.to(h,.5,{left:q+"px",ease:punchgs.Power3.easeInOut})),h.data("offset",q))},f=function(a,b,c,d,e,f){var g=c.parent().find(".tp-"+f+"s"),h=g.find(".tp-"+f+"s-inner-wrapper"),i=g.find(".tp-"+f+"-mask"),j=d.width*a<d.min_width?d.min_width:Math.round(d.width*a),k=Math.round(j/d.width*d.height),l="vertical"===d.direction?j:j*e+d.space*(e-1),m="vertical"===d.direction?k*e+d.space*(e-1):k,n="vertical"===d.direction?{width:j+"px"}:{height:k+"px"};b.add(punchgs.TweenLite.set(g,n)),b.add(punchgs.TweenLite.set(h,{width:l+"px",height:m+"px"})),b.add(punchgs.TweenLite.set(i,{width:l+"px",height:m+"px"}));var o=h.find(".tp-"+f);return o&&jQuery.each(o,function(a,c){"vertical"===d.direction?b.add(punchgs.TweenLite.set(c,{top:a*(k+parseInt(void 0===d.space?0:d.space,0)),width:j+"px",height:k+"px"})):"horizontal"===d.direction&&b.add(punchgs.TweenLite.set(c,{left:a*(j+parseInt(void 0===d.space?0:d.space,0)),width:j+"px",height:k+"px"}))}),b},g=function(a){var b=0,c=0,d=0,e=0,f=1,g=1,h=1;return"detail"in a&&(c=a.detail),"wheelDelta"in a&&(c=-a.wheelDelta/120),"wheelDeltaY"in a&&(c=-a.wheelDeltaY/120),"wheelDeltaX"in a&&(b=-a.wheelDeltaX/120),"axis"in a&&a.axis===a.HORIZONTAL_AXIS&&(b=c,c=0),d=b*f,e=c*f,"deltaY"in a&&(e=a.deltaY),"deltaX"in a&&(d=a.deltaX),(d||e)&&a.deltaMode&&(1==a.deltaMode?(d*=g,e*=g):(d*=h,e*=h)),d&&!b&&(b=d<1?-1:1),e&&!c&&(c=e<1?-1:1),e=navigator.userAgent.match(/mozilla/i)?10*e:e,(e>300||e<-300)&&(e/=10),{spinX:b,spinY:c,pixelX:d,pixelY:e}},h=function(a,c){"on"===c.navigation.keyboardNavigation&&jQuery(document).keydown(function(d){("horizontal"==c.navigation.keyboard_direction&&39==d.keyCode||"vertical"==c.navigation.keyboard_direction&&40==d.keyCode)&&(c.sc_indicator="arrow",c.sc_indicator_dir=0,b.callingNewSlide(a,1)),("horizontal"==c.navigation.keyboard_direction&&37==d.keyCode||"vertical"==c.navigation.keyboard_direction&&38==d.keyCode)&&(c.sc_indicator="arrow",c.sc_indicator_dir=1,b.callingNewSlide(a,-1))})},i=function(a,c){if("on"===c.navigation.mouseScrollNavigation||"carousel"===c.navigation.mouseScrollNavigation){c.isIEEleven=!!navigator.userAgent.match(/Trident.*rv\:11\./),c.isSafari=!!navigator.userAgent.match(/safari/i),c.ischrome=!!navigator.userAgent.match(/chrome/i);var d=c.ischrome?-49:c.isIEEleven||c.isSafari?-9:navigator.userAgent.match(/mozilla/i)?-29:-49,e=c.ischrome?49:c.isIEEleven||c.isSafari?9:navigator.userAgent.match(/mozilla/i)?29:49;a.on("mousewheel DOMMouseScroll",function(f){var h=g(f.originalEvent),i=a.find(".tp-revslider-slidesli.active-revslide").index(),j=a.find(".tp-revslider-slidesli.processing-revslide").index(),k=-1!=i&&0==i||-1!=j&&0==j,l=-1!=i&&i==c.slideamount-1||1!=j&&j==c.slideamount-1,m=!0;"carousel"==c.navigation.mouseScrollNavigation&&(k=l=!1),-1==j?h.pixelY<d?(k||(c.sc_indicator="arrow","reverse"!==c.navigation.mouseScrollReverse&&(c.sc_indicator_dir=1,b.callingNewSlide(a,-1)),m=!1),l||(c.sc_indicator="arrow","reverse"===c.navigation.mouseScrollReverse&&(c.sc_indicator_dir=0,b.callingNewSlide(a,1)),m=!1)):h.pixelY>e&&(l||(c.sc_indicator="arrow","reverse"!==c.navigation.mouseScrollReverse&&(c.sc_indicator_dir=0,b.callingNewSlide(a,1)),m=!1),k||(c.sc_indicator="arrow","reverse"===c.navigation.mouseScrollReverse&&(c.sc_indicator_dir=1,b.callingNewSlide(a,-1)),m=!1)):m=!1;var n=c.c.offset().top-jQuery("body").scrollTop(),o=n+c.c.height();return"carousel"!=c.navigation.mouseScrollNavigation?("reverse"!==c.navigation.mouseScrollReverse&&(n>0&&h.pixelY>0||o<jQuery(window).height()&&h.pixelY<0)&&(m=!0),"reverse"===c.navigation.mouseScrollReverse&&(n<0&&h.pixelY<0||o>jQuery(window).height()&&h.pixelY>0)&&(m=!0)):m=!1,0==m?(f.preventDefault(f),!1):void 0})}},j=function(a,b,d){return a=c?jQuery(d.target).closest("."+a).length||jQuery(d.srcElement).closest("."+a).length:jQuery(d.toElement).closest("."+a).length||jQuery(d.originalTarget).closest("."+a).length,!0===a||1===a?1:0},k=function(a,d,e){var f=d.carousel;jQuery(".bullet, .bullets, .tp-bullets, .tparrows").addClass("noSwipe"),f.Limit="endless";var h=(c||b.get_browser(),a),i="vertical"===d.navigation.thumbnails.direction||"vertical"===d.navigation.tabs.direction?"none":"vertical",k=d.navigation.touch.swipe_direction||"horizontal";i="swipebased"==e&&"vertical"==k?"none":e?"vertical":i,jQuery.fn.swipetp||(jQuery.fn.swipetp=jQuery.fn.swipe),jQuery.fn.swipetp.defaults&&jQuery.fn.swipetp.defaults.excludedElements||jQuery.fn.swipetp.defaults||(jQuery.fn.swipetp.defaults=new Object),jQuery.fn.swipetp.defaults.excludedElements="label, button, input, select, textarea, .noSwipe",h.swipetp({allowPageScroll:i,triggerOnTouchLeave:!0,treshold:d.navigation.touch.swipe_treshold,fingers:d.navigation.touch.swipe_min_touches,excludeElements:jQuery.fn.swipetp.defaults.excludedElements,swipeStatus:function(e,g,h,i,l,m,n){var o=j("rev_slider_wrapper",a,e),p=j("tp-thumbs",a,e),q=j("tp-tabs",a,e),r=jQuery(this).attr("class"),s=!!r.match(/tp-tabs|tp-thumb/gi);if("carousel"===d.sliderType&&(("move"===g||"end"===g||"cancel"==g)&&d.dragStartedOverSlider&&!d.dragStartedOverThumbs&&!d.dragStartedOverTabs||"start"===g&&o>0&&0===p&&0===q)){if(c&&("up"===h||"down"===h))return;switch(d.dragStartedOverSlider=!0,i=h&&h.match(/left|up/g)?Math.round(-1*i):i=Math.round(1*i),g){case"start":void 0!==f.positionanim&&(f.positionanim.kill(),f.slide_globaloffset="off"===f.infinity?f.slide_offset:b.simp(f.slide_offset,f.maxwidth)),f.overpull="none",f.wrap.addClass("dragged");break;case"move":if(d.c.find(".tp-withaction").addClass("tp-temporarydisabled"),f.slide_offset="off"===f.infinity?f.slide_globaloffset+i:b.simp(f.slide_globaloffset+i,f.maxwidth),"off"===f.infinity){var t="center"===f.horizontal_align?(f.wrapwidth/2-f.slide_width/2-f.slide_offset)/f.slide_width:(0-f.slide_offset)/f.slide_width;"none"!==f.overpull&&0!==f.overpull||!(t<0||t>d.slideamount-1)?t>=0&&t<=d.slideamount-1&&(t>=0&&i>f.overpull||t<=d.slideamount-1&&i<f.overpull)&&(f.overpull=0):f.overpull=i,f.slide_offset=t<0?f.slide_offset+(f.overpull-i)/1.1+Math.sqrt(Math.abs((f.overpull-i)/1.1)):t>d.slideamount-1?f.slide_offset+(f.overpull-i)/1.1-Math.sqrt(Math.abs((f.overpull-i)/1.1)):f.slide_offset}b.organiseCarousel(d,h,!0,!0);break;case"end":case"cancel":f.slide_globaloffset=f.slide_offset,f.wrap.removeClass("dragged"),b.carouselToEvalPosition(d,h),d.dragStartedOverSlider=!1,d.dragStartedOverThumbs=!1,d.dragStartedOverTabs=!1,setTimeout(function(){d.c.find(".tp-withaction").removeClass("tp-temporarydisabled")},19)}}else{if(("move"!==g&&"end"!==g&&"cancel"!=g||d.dragStartedOverSlider||!d.dragStartedOverThumbs&&!d.dragStartedOverTabs)&&!("start"===g&&o>0&&(p>0||q>0))){if("end"==g&&!s){if(d.sc_indicator="arrow","horizontal"==k&&"left"==h||"vertical"==k&&"up"==h)return d.sc_indicator_dir=0,b.callingNewSlide(d.c,1),!1;if("horizontal"==k&&"right"==h||"vertical"==k&&"down"==h)return d.sc_indicator_dir=1,b.callingNewSlide(d.c,-1),!1}return d.dragStartedOverSlider=!1,d.dragStartedOverThumbs=!1,d.dragStartedOverTabs=!1,!0}p>0&&(d.dragStartedOverThumbs=!0),q>0&&(d.dragStartedOverTabs=!0);var u=d.dragStartedOverThumbs?".tp-thumbs":".tp-tabs",v=d.dragStartedOverThumbs?".tp-thumb-mask":".tp-tab-mask",w=d.dragStartedOverThumbs?".tp-thumbs-inner-wrapper":".tp-tabs-inner-wrapper",x=d.dragStartedOverThumbs?".tp-thumb":".tp-tab",y=d.dragStartedOverThumbs?d.navigation.thumbnails:d.navigation.tabs;i=h&&h.match(/left|up/g)?Math.round(-1*i):i=Math.round(1*i);var z=a.parent().find(v),A=z.find(w),B=y.direction,C="vertical"===B?A.height():A.width(),D="vertical"===B?z.height():z.width(),E="vertical"===B?z.find(x).first().outerHeight(!0)+y.space:z.find(x).first().outerWidth(!0)+y.space,F=void 0===A.data("offset")?0:parseInt(A.data("offset"),0),G=0;switch(g){case"start":a.parent().find(u).addClass("dragged"),F="vertical"===B?A.position().top:A.position().left,A.data("offset",F),A.data("tmmove")&&A.data("tmmove").pause();break;case"move":if(C<=D)return!1;G=F+i,G=G>0?"horizontal"===B?G-A.width()*(G/A.width()*G/A.width()):G-A.height()*(G/A.height()*G/A.height()):G;var H="vertical"===B?0-(A.height()-z.height()):0-(A.width()-z.width());G=G<H?"horizontal"===B?G+A.width()*(G-H)/A.width()*(G-H)/A.width():G+A.height()*(G-H)/A.height()*(G-H)/A.height():G,"vertical"===B?punchgs.TweenLite.set(A,{top:G+"px"}):punchgs.TweenLite.set(A,{left:G+"px"});break;case"end":case"cancel":if(s)return G=F+i,G="vertical"===B?G<0-(A.height()-z.height())?0-(A.height()-z.height()):G:G<0-(A.width()-z.width())?0-(A.width()-z.width()):G,G=G>0?0:G,G=Math.abs(i)>E/10?i<=0?Math.floor(G/E)*E:Math.ceil(G/E)*E:i<0?Math.ceil(G/E)*E:Math.floor(G/E)*E,G="vertical"===B?G<0-(A.height()-z.height())?0-(A.height()-z.height()):G:G<0-(A.width()-z.width())?0-(A.width()-z.width()):G,G=G>0?0:G,"vertical"===B?punchgs.TweenLite.to(A,.5,{top:G+"px",ease:punchgs.Power3.easeOut}):punchgs.TweenLite.to(A,.5,{left:G+"px",ease:punchgs.Power3.easeOut}),G=G||("vertical"===B?A.position().top:A.position().left),A.data("offset",G),A.data("distance",i),setTimeout(function(){d.dragStartedOverSlider=!1,d.dragStartedOverThumbs=!1,d.dragStartedOverTabs=!1},100),a.parent().find(u).removeClass("dragged"),!1}}}})},l=function(a){a.hide_delay=jQuery.isNumeric(parseInt(a.hide_delay,0))?a.hide_delay/1e3:.2,a.hide_delay_mobile=jQuery.isNumeric(parseInt(a.hide_delay_mobile,0))?a.hide_delay_mobile/1e3:.2},m=function(a){return a&&a.enable},n=function(a){return a&&a.enable&&!0===a.hide_onleave&&(void 0===a.position||!a.position.match(/outer/g))},o=function(a,b){var d=a.parent();n(b.navigation.arrows)&&punchgs.TweenLite.delayedCall(c?b.navigation.arrows.hide_delay_mobile:b.navigation.arrows.hide_delay,p,[d.find(".tparrows"),b.navigation.arrows,"hide"]),n(b.navigation.bullets)&&punchgs.TweenLite.delayedCall(c?b.navigation.bullets.hide_delay_mobile:b.navigation.bullets.hide_delay,p,[d.find(".tp-bullets"),b.navigation.bullets,"hide"]),n(b.navigation.thumbnails)&&punchgs.TweenLite.delayedCall(c?b.navigation.thumbnails.hide_delay_mobile:b.navigation.thumbnails.hide_delay,p,[d.find(".tp-thumbs"),b.navigation.thumbnails,"hide"]),n(b.navigation.tabs)&&punchgs.TweenLite.delayedCall(c?b.navigation.tabs.hide_delay_mobile:b.navigation.tabs.hide_delay,p,[d.find(".tp-tabs"),b.navigation.tabs,"hide"])},p=function(a,b,c,d){switch(d=void 0===d?.5:d,c){case"show":punchgs.TweenLite.to(a,d,{autoAlpha:1,ease:punchgs.Power3.easeInOut,overwrite:"auto"});break;case"hide":punchgs.TweenLite.to(a,d,{autoAlpha:0,ease:punchgs.Power3.easeInOu,overwrite:"auto"})}},q=function(a,b,c){b.style=void 0===b.style?"":b.style,b.left.style=void 0===b.left.style?"":b.left.style,b.right.style=void 0===b.right.style?"":b.right.style,0===a.find(".tp-leftarrow.tparrows").length&&a.append('<div class="tp-leftarrow tparrows '+b.style+" "+b.left.style+'">'+b.tmp+"</div>"),0===a.find(".tp-rightarrow.tparrows").length&&a.append('<div class="tp-rightarrow tparrows '+b.style+" "+b.right.style+'">'+b.tmp+"</div>");var d=a.find(".tp-leftarrow.tparrows"),e=a.find(".tp-rightarrow.tparrows");b.rtl?(d.click(function(){c.sc_indicator="arrow",c.sc_indicator_dir=0,a.revnext()}),e.click(function(){c.sc_indicator="arrow",c.sc_indicator_dir=1,a.revprev()})):(e.click(function(){c.sc_indicator="arrow",c.sc_indicator_dir=0,a.revnext()}),d.click(function(){c.sc_indicator="arrow",c.sc_indicator_dir=1,a.revprev()})),b.right.j=a.find(".tp-rightarrow.tparrows"),b.left.j=a.find(".tp-leftarrow.tparrows"),b.padding_top=parseInt(c.carousel.padding_top||0,0),b.padding_bottom=parseInt(c.carousel.padding_bottom||0,0),t(d,b.left,c),t(e,b.right,c),b.left.opt=c,b.right.opt=c,"outer-left"!=b.position&&"outer-right"!=b.position||(c.outernav=!0)},r=function(a,b,c){var d=a.outerHeight(!0),f=(a.outerWidth(!0),void 0==b.opt?0:0==c.conh?c.height:c.conh),g="layergrid"==b.container?"fullscreen"==c.sliderLayout?c.height/2-c.gridheight[c.curWinRange]*c.bh/2:"on"==c.autoHeight||void 0!=c.minHeight&&c.minHeight>0?f/2-c.gridheight[c.curWinRange]*c.bh/2:0:0,h="top"===b.v_align?{top:"0px",y:Math.round(b.v_offset+g)+"px"}:"center"===b.v_align?{top:"50%",y:Math.round(0-d/2+b.v_offset)+"px"}:{top:"100%",y:Math.round(0-(d+b.v_offset+g))+"px"};a.hasClass("outer-bottom")||punchgs.TweenLite.set(a,h)},s=function(a,b,c){var e=(a.outerHeight(!0),a.outerWidth(!0)),f="layergrid"==b.container?"carousel"===c.sliderType?0:c.width/2-c.gridwidth[c.curWinRange]*c.bw/2:0,g="left"===b.h_align?{left:"0px",x:Math.round(b.h_offset+f)+"px"}:"center"===b.h_align?{left:"50%",x:Math.round(0-e/2+b.h_offset)+"px"}:{left:"100%",x:Math.round(0-(e+b.h_offset+f))+"px"};punchgs.TweenLite.set(a,g)},t=function(a,b,c){var d=a.closest(".tp-simpleresponsive").length>0?a.closest(".tp-simpleresponsive"):a.closest(".tp-revslider-mainul").length>0?a.closest(".tp-revslider-mainul"):a.closest(".rev_slider_wrapper").length>0?a.closest(".rev_slider_wrapper"):a.parent().find(".tp-revslider-mainul"),e=d.width(),f=d.height();if(r(a,b,c),s(a,b,c),"outer-left"!==b.position||"fullwidth"!=b.sliderLayout&&"fullscreen"!=b.sliderLayout?"outer-right"!==b.position||"fullwidth"!=b.sliderLayout&&"fullscreen"!=b.sliderLayout||punchgs.TweenLite.set(a,{right:0-a.outerWidth()+"px",x:b.h_offset+"px"}):punchgs.TweenLite.set(a,{left:0-a.outerWidth()+"px",x:b.h_offset+"px"}),a.hasClass("tp-thumbs")||a.hasClass("tp-tabs")){var g=a.data("wr_padding"),h=a.data("maxw"),i=a.data("maxh"),j=a.hasClass("tp-thumbs")?a.find(".tp-thumb-mask"):a.find(".tp-tab-mask"),k=parseInt(b.padding_top||0,0),l=parseInt(b.padding_bottom||0,0);h>e&&"outer-left"!==b.position&&"outer-right"!==b.position?(punchgs.TweenLite.set(a,{left:"0px",x:0,maxWidth:e-2*g+"px"}),punchgs.TweenLite.set(j,{maxWidth:e-2*g+"px"})):(punchgs.TweenLite.set(a,{maxWidth:h+"px"}),punchgs.TweenLite.set(j,{maxWidth:h+"px"})),i+2*g>f&&"outer-bottom"!==b.position&&"outer-top"!==b.position?(punchgs.TweenLite.set(a,{top:"0px",y:0,maxHeight:k+l+(f-2*g)+"px"}),punchgs.TweenLite.set(j,{maxHeight:k+l+(f-2*g)+"px"})):(punchgs.TweenLite.set(a,{maxHeight:i+"px"}),punchgs.TweenLite.set(j,{maxHeight:i+"px"})),"outer-left"!==b.position&&"outer-right"!==b.position&&(k=0,l=0),!0===b.span&&"vertical"===b.direction?(punchgs.TweenLite.set(a,{maxHeight:k+l+(f-2*g)+"px",height:k+l+(f-2*g)+"px",top:0-k,y:0}),r(j,b,c)):!0===b.span&&"horizontal"===b.direction&&(punchgs.TweenLite.set(a,{maxWidth:"100%",width:e-2*g+"px",left:0,x:0}),s(j,b,c))}},u=function(a,b,c,d){0===a.find(".tp-bullets").length&&(b.style=void 0===b.style?"":b.style,a.append('<div class="tp-bullets '+b.style+" "+b.direction+'"></div>'));var e=a.find(".tp-bullets"),f=c.data("index"),g=b.tmp;jQuery.each(d.thumbs[c.index()].params,function(a,b){g=g.replace(b.from,b.to)}),e.append('<div class="justaddedbullet tp-bullet">'+g+"</div>");var h=a.find(".justaddedbullet"),i=a.find(".tp-bullet").length,j=h.outerWidth()+parseInt(void 0===b.space?0:b.space,0),k=h.outerHeight()+parseInt(void 0===b.space?0:b.space,0);"vertical"===b.direction?(h.css({top:(i-1)*k+"px",left:"0px"}),e.css({height:(i-1)*k+h.outerHeight(),width:h.outerWidth()})):(h.css({left:(i-1)*j+"px",top:"0px"}),e.css({width:(i-1)*j+h.outerWidth(),height:h.outerHeight()})),h.find(".tp-bullet-image").css({backgroundImage:"url("+d.thumbs[c.index()].src+")"}),h.data("liref",f),h.click(function(){d.sc_indicator="bullet",a.revcallslidewithid(f),a.find(".tp-bullet").removeClass("selected"),jQuery(this).addClass("selected")}),h.removeClass("justaddedbullet"),b.padding_top=parseInt(d.carousel.padding_top||0,0),b.padding_bottom=parseInt(d.carousel.padding_bottom||0,0),b.opt=d,"outer-left"!=b.position&&"outer-right"!=b.position||(d.outernav=!0),e.addClass("nav-pos-hor-"+b.h_align),e.addClass("nav-pos-ver-"+b.v_align),e.addClass("nav-dir-"+b.direction),t(e,b,d)},w=function(a,b,c,d,e){var f="tp-thumb"===d?".tp-thumbs":".tp-tabs",g="tp-thumb"===d?".tp-thumb-mask":".tp-tab-mask",h="tp-thumb"===d?".tp-thumbs-inner-wrapper":".tp-tabs-inner-wrapper",i="tp-thumb"===d?".tp-thumb":".tp-tab",j="tp-thumb"===d?".tp-thumb-image":".tp-tab-image";if(b.visibleAmount=b.visibleAmount>e.slideamount?e.slideamount:b.visibleAmount,b.sliderLayout=e.sliderLayout,0===a.parent().find(f).length){b.style=void 0===b.style?"":b.style;var k=!0===b.span?"tp-span-wrapper":"",l='<div class="'+d+"s "+k+" "+b.position+" "+b.style+'"><div class="'+d+'-mask"><div class="'+d+'s-inner-wrapper" style="position:relative;"></div></div></div>';"outer-top"===b.position?a.parent().prepend(l):"outer-bottom"===b.position?a.after(l):a.append(l),b.padding_top=parseInt(e.carousel.padding_top||0,0),b.padding_bottom=parseInt(e.carousel.padding_bottom||0,0),"outer-left"!=b.position&&"outer-right"!=b.position||(e.outernav=!0)}var m=c.data("index"),n=a.parent().find(f),o=n.find(g),p=o.find(h),q="horizontal"===b.direction?b.width*b.visibleAmount+b.space*(b.visibleAmount-1):b.width,r="horizontal"===b.direction?b.height:b.height*b.visibleAmount+b.space*(b.visibleAmount-1),s=b.tmp;jQuery.each(e.thumbs[c.index()].params,function(a,b){s=s.replace(b.from,b.to)}),p.append('<div data-liindex="'+c.index()+'" data-liref="'+m+'" class="justaddedthumb '+d+'" style="width:'+b.width+"px;height:"+b.height+'px;">'+s+"</div>");var u=n.find(".justaddedthumb"),v=n.find(i).length,w=u.outerWidth()+parseInt(void 0===b.space?0:b.space,0),x=u.outerHeight()+parseInt(void 0===b.space?0:b.space,0);u.find(j).css({backgroundImage:"url("+e.thumbs[c.index()].src+")"}),"vertical"===b.direction?(u.css({top:(v-1)*x+"px",left:"0px"}),p.css({height:(v-1)*x+u.outerHeight(),width:u.outerWidth()})):(u.css({left:(v-1)*w+"px",top:"0px"}),p.css({width:(v-1)*w+u.outerWidth(),height:u.outerHeight()})),n.data("maxw",q),n.data("maxh",r),n.data("wr_padding",b.wrapper_padding);var y="outer-top"===b.position||"outer-bottom"===b.position?"relative":"absolute";"outer-top"!==b.position&&"outer-bottom"!==b.position||b.h_align;o.css({maxWidth:q+"px",maxHeight:r+"px",overflow:"hidden",position:"relative"}),n.css({maxWidth:q+"px",maxHeight:r+"px",overflow:"visible",position:y,background:b.wrapper_color,padding:b.wrapper_padding+"px",boxSizing:"contet-box"}),u.click(function(){e.sc_indicator="bullet";var b=a.parent().find(h).data("distance");b=void 0===b?0:b,Math.abs(b)<10&&(a.revcallslidewithid(m),a.parent().find(f).removeClass("selected"),jQuery(this).addClass("selected"))}),u.removeClass("justaddedthumb"),b.opt=e,n.addClass("nav-pos-hor-"+b.h_align),n.addClass("nav-pos-ver-"+b.v_align),n.addClass("nav-dir-"+b.direction),t(n,b,e)},x=function(a){var b=a.c.parent().find(".outer-top"),c=a.c.parent().find(".outer-bottom");a.top_outer=b.hasClass("tp-forcenotvisible")?0:b.outerHeight()||0,a.bottom_outer=c.hasClass("tp-forcenotvisible")?0:c.outerHeight()||0},y=function(a,b,c,d){b>c||c>d?a.addClass("tp-forcenotvisible"):a.removeClass("tp-forcenotvisible")}}(jQuery);

/********************************************
 * REVOLUTION 5.4.6.4 EXTENSION - NAVIGATION
 * @version: 1.3.5 (06.04.2017)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
*********************************************/
!function(a){"use strict";var b=jQuery.fn.revolution,c=b.is_mobile(),d={alias:"Navigation Min JS",name:"revolution.extensions.navigation.min.js",min_core:"5.4.0",version:"1.3.5"};jQuery.extend(!0,b,{hideUnHideNav:function(a){var b=a.c.width(),c=a.navigation.arrows,d=a.navigation.bullets,e=a.navigation.thumbnails,f=a.navigation.tabs;m(c)&&y(a.c.find(".tparrows"),c.hide_under,b,c.hide_over),m(d)&&y(a.c.find(".tp-bullets"),d.hide_under,b,d.hide_over),m(e)&&y(a.c.parent().find(".tp-thumbs"),e.hide_under,b,e.hide_over),m(f)&&y(a.c.parent().find(".tp-tabs"),f.hide_under,b,f.hide_over),x(a)},resizeThumbsTabs:function(a,b){if(a.navigation&&a.navigation.tabs.enable||a.navigation&&a.navigation.thumbnails.enable){var c=(jQuery(window).width()-480)/500,d=new punchgs.TimelineLite,e=a.navigation.tabs,g=a.navigation.thumbnails,h=a.navigation.bullets;if(d.pause(),c=c>1?1:c<0?0:c,m(e)&&(b||e.width>e.min_width)&&f(c,d,a.c,e,a.slideamount,"tab"),m(g)&&(b||g.width>g.min_width)&&f(c,d,a.c,g,a.slideamount,"thumb"),m(h)&&b){var i=a.c.find(".tp-bullets");i.find(".tp-bullet").each(function(a){var b=jQuery(this),c=a+1,d=b.outerWidth()+parseInt(void 0===h.space?0:h.space,0),e=b.outerHeight()+parseInt(void 0===h.space?0:h.space,0);"vertical"===h.direction?(b.css({top:(c-1)*e+"px",left:"0px"}),i.css({height:(c-1)*e+b.outerHeight(),width:b.outerWidth()})):(b.css({left:(c-1)*d+"px",top:"0px"}),i.css({width:(c-1)*d+b.outerWidth(),height:b.outerHeight()}))})}d.play(),x(a)}return!0},updateNavIndexes:function(a){function d(a){c.find(a).lenght>0&&c.find(a).each(function(a){jQuery(this).data("liindex",a)})}var c=a.c;d(".tp-tab"),d(".tp-bullet"),d(".tp-thumb"),b.resizeThumbsTabs(a,!0),b.manageNavigation(a)},manageNavigation:function(a){var c=b.getHorizontalOffset(a.c.parent(),"left"),d=b.getHorizontalOffset(a.c.parent(),"right");m(a.navigation.bullets)&&("fullscreen"!=a.sliderLayout&&"fullwidth"!=a.sliderLayout&&(a.navigation.bullets.h_offset_old=void 0===a.navigation.bullets.h_offset_old?a.navigation.bullets.h_offset:a.navigation.bullets.h_offset_old,a.navigation.bullets.h_offset="center"===a.navigation.bullets.h_align?a.navigation.bullets.h_offset_old+c/2-d/2:a.navigation.bullets.h_offset_old+c-d),t(a.c.find(".tp-bullets"),a.navigation.bullets,a)),m(a.navigation.thumbnails)&&t(a.c.parent().find(".tp-thumbs"),a.navigation.thumbnails,a),m(a.navigation.tabs)&&t(a.c.parent().find(".tp-tabs"),a.navigation.tabs,a),m(a.navigation.arrows)&&("fullscreen"!=a.sliderLayout&&"fullwidth"!=a.sliderLayout&&(a.navigation.arrows.left.h_offset_old=void 0===a.navigation.arrows.left.h_offset_old?a.navigation.arrows.left.h_offset:a.navigation.arrows.left.h_offset_old,a.navigation.arrows.left.h_offset="right"===a.navigation.arrows.left.h_align?a.navigation.arrows.left.h_offset_old+d:a.navigation.arrows.left.h_offset_old+c,a.navigation.arrows.right.h_offset_old=void 0===a.navigation.arrows.right.h_offset_old?a.navigation.arrows.right.h_offset:a.navigation.arrows.right.h_offset_old,a.navigation.arrows.right.h_offset="right"===a.navigation.arrows.right.h_align?a.navigation.arrows.right.h_offset_old+d:a.navigation.arrows.right.h_offset_old+c),t(a.c.find(".tp-leftarrow.tparrows"),a.navigation.arrows.left,a),t(a.c.find(".tp-rightarrow.tparrows"),a.navigation.arrows.right,a)),m(a.navigation.thumbnails)&&e(a.c.parent().find(".tp-thumbs"),a.navigation.thumbnails),m(a.navigation.tabs)&&e(a.c.parent().find(".tp-tabs"),a.navigation.tabs)},createNavigation:function(a,f){if("stop"===b.compare_version(d).check)return!1;var g=a.parent(),j=f.navigation.arrows,n=f.navigation.bullets,r=f.navigation.thumbnails,s=f.navigation.tabs,t=m(j),v=m(n),x=m(r),y=m(s);h(a,f),i(a,f),t&&q(a,j,f),f.li.each(function(b){var c=jQuery(f.li[f.li.length-1-b]),d=jQuery(this);v&&(f.navigation.bullets.rtl?u(a,n,c,f):u(a,n,d,f)),x&&(f.navigation.thumbnails.rtl?w(a,r,c,"tp-thumb",f):w(a,r,d,"tp-thumb",f)),y&&(f.navigation.tabs.rtl?w(a,s,c,"tp-tab",f):w(a,s,d,"tp-tab",f))}),a.bind("revolution.slide.onafterswap revolution.nextslide.waiting",function(){var b=0==a.find(".next-revslide").length?a.find(".active-revslide").data("index"):a.find(".next-revslide").data("index");a.find(".tp-bullet").each(function(){var a=jQuery(this);a.data("liref")===b?a.addClass("selected"):a.removeClass("selected")}),g.find(".tp-thumb, .tp-tab").each(function(){var a=jQuery(this);a.data("liref")===b?(a.addClass("selected"),a.hasClass("tp-tab")?e(g.find(".tp-tabs"),s):e(g.find(".tp-thumbs"),r)):a.removeClass("selected")});var c=0,d=!1;f.thumbs&&jQuery.each(f.thumbs,function(a,e){c=!1===d?a:c,d=e.id===b||a===b||d});var h=c>0?c-1:f.slideamount-1,i=c+1==f.slideamount?0:c+1;if(!0===j.enable){var k=j.tmp;if(void 0!=f.thumbs[h]&&jQuery.each(f.thumbs[h].params,function(a,b){k=k.replace(b.from,b.to)}),j.left.j.html(k),k=j.tmp,i>f.slideamount)return;jQuery.each(f.thumbs[i].params,function(a,b){k=k.replace(b.from,b.to)}),j.right.j.html(k),j.rtl?(punchgs.TweenLite.set(j.left.j.find(".tp-arr-imgholder"),{backgroundImage:"url("+f.thumbs[i].src+")"}),punchgs.TweenLite.set(j.right.j.find(".tp-arr-imgholder"),{backgroundImage:"url("+f.thumbs[h].src+")"})):(punchgs.TweenLite.set(j.left.j.find(".tp-arr-imgholder"),{backgroundImage:"url("+f.thumbs[h].src+")"}),punchgs.TweenLite.set(j.right.j.find(".tp-arr-imgholder"),{backgroundImage:"url("+f.thumbs[i].src+")"}))}}),l(j),l(n),l(r),l(s),g.on("mouseenter mousemove",function(){g.hasClass("tp-mouseover")||(g.addClass("tp-mouseover"),punchgs.TweenLite.killDelayedCallsTo(p),t&&j.hide_onleave&&p(g.find(".tparrows"),j,"show"),v&&n.hide_onleave&&p(g.find(".tp-bullets"),n,"show"),x&&r.hide_onleave&&p(g.find(".tp-thumbs"),r,"show"),y&&s.hide_onleave&&p(g.find(".tp-tabs"),s,"show"),c&&(g.removeClass("tp-mouseover"),o(a,f)))}),g.on("mouseleave",function(){g.removeClass("tp-mouseover"),o(a,f)}),t&&j.hide_onleave&&p(g.find(".tparrows"),j,"hide",0),v&&n.hide_onleave&&p(g.find(".tp-bullets"),n,"hide",0),x&&r.hide_onleave&&p(g.find(".tp-thumbs"),r,"hide",0),y&&s.hide_onleave&&p(g.find(".tp-tabs"),s,"hide",0),x&&k(g.find(".tp-thumbs"),f),y&&k(g.find(".tp-tabs"),f),"carousel"===f.sliderType&&k(a,f,!0),("on"===f.navigation.touch.touchOnDesktop||"on"==f.navigation.touch.touchenabled&&c)&&k(a,f,"swipebased")}});var e=function(a,b){var d=(a.hasClass("tp-thumbs"),a.hasClass("tp-thumbs")?".tp-thumb-mask":".tp-tab-mask"),e=a.hasClass("tp-thumbs")?".tp-thumbs-inner-wrapper":".tp-tabs-inner-wrapper",f=a.hasClass("tp-thumbs")?".tp-thumb":".tp-tab",g=a.find(d),h=g.find(e),i=b.direction,j="vertical"===i?g.find(f).first().outerHeight(!0)+b.space:g.find(f).first().outerWidth(!0)+b.space,k="vertical"===i?g.height():g.width(),l=parseInt(g.find(f+".selected").data("liindex"),0),m=k/j,n="vertical"===i?g.height():g.width(),o=0-l*j,p="vertical"===i?h.height():h.width(),q=o<0-(p-n)?0-(p-n):q>0?0:o,r=h.data("offset");m>2&&(q=o-(r+j)<=0?o-(r+j)<0-j?r:q+j:q,q=o-j+r+k<j&&o+(Math.round(m)-2)*j<r?o+(Math.round(m)-2)*j:q),q=q<0-(p-n)?0-(p-n):q>0?0:q,"vertical"!==i&&g.width()>=h.width()&&(q=0),"vertical"===i&&g.height()>=h.height()&&(q=0),a.hasClass("dragged")||("vertical"===i?h.data("tmmove",punchgs.TweenLite.to(h,.5,{top:q+"px",ease:punchgs.Power3.easeInOut})):h.data("tmmove",punchgs.TweenLite.to(h,.5,{left:q+"px",ease:punchgs.Power3.easeInOut})),h.data("offset",q))},f=function(a,b,c,d,e,f){var g=c.parent().find(".tp-"+f+"s"),h=g.find(".tp-"+f+"s-inner-wrapper"),i=g.find(".tp-"+f+"-mask"),j=d.width*a<d.min_width?d.min_width:Math.round(d.width*a),k=Math.round(j/d.width*d.height),l="vertical"===d.direction?j:j*e+d.space*(e-1),m="vertical"===d.direction?k*e+d.space*(e-1):k,n="vertical"===d.direction?{width:j+"px"}:{height:k+"px"};b.add(punchgs.TweenLite.set(g,n)),b.add(punchgs.TweenLite.set(h,{width:l+"px",height:m+"px"})),b.add(punchgs.TweenLite.set(i,{width:l+"px",height:m+"px"}));var o=h.find(".tp-"+f);return o&&jQuery.each(o,function(a,c){"vertical"===d.direction?b.add(punchgs.TweenLite.set(c,{top:a*(k+parseInt(void 0===d.space?0:d.space,0)),width:j+"px",height:k+"px"})):"horizontal"===d.direction&&b.add(punchgs.TweenLite.set(c,{left:a*(j+parseInt(void 0===d.space?0:d.space,0)),width:j+"px",height:k+"px"}))}),b},g=function(a){var b=0,c=0,d=0,e=0,f=1,g=1,h=1;return"detail"in a&&(c=a.detail),"wheelDelta"in a&&(c=-a.wheelDelta/120),"wheelDeltaY"in a&&(c=-a.wheelDeltaY/120),"wheelDeltaX"in a&&(b=-a.wheelDeltaX/120),"axis"in a&&a.axis===a.HORIZONTAL_AXIS&&(b=c,c=0),d=b*f,e=c*f,"deltaY"in a&&(e=a.deltaY),"deltaX"in a&&(d=a.deltaX),(d||e)&&a.deltaMode&&(1==a.deltaMode?(d*=g,e*=g):(d*=h,e*=h)),d&&!b&&(b=d<1?-1:1),e&&!c&&(c=e<1?-1:1),e=navigator.userAgent.match(/mozilla/i)?10*e:e,(e>300||e<-300)&&(e/=10),{spinX:b,spinY:c,pixelX:d,pixelY:e}},h=function(a,c){"on"===c.navigation.keyboardNavigation&&jQuery(document).keydown(function(d){("horizontal"==c.navigation.keyboard_direction&&39==d.keyCode||"vertical"==c.navigation.keyboard_direction&&40==d.keyCode)&&(c.sc_indicator="arrow",c.sc_indicator_dir=0,b.callingNewSlide(a,1)),("horizontal"==c.navigation.keyboard_direction&&37==d.keyCode||"vertical"==c.navigation.keyboard_direction&&38==d.keyCode)&&(c.sc_indicator="arrow",c.sc_indicator_dir=1,b.callingNewSlide(a,-1))})},i=function(a,c){if("on"===c.navigation.mouseScrollNavigation||"carousel"===c.navigation.mouseScrollNavigation){c.isIEEleven=!!navigator.userAgent.match(/Trident.*rv\:11\./),c.isSafari=!!navigator.userAgent.match(/safari/i),c.ischrome=!!navigator.userAgent.match(/chrome/i);var d=c.ischrome?-49:c.isIEEleven||c.isSafari?-9:navigator.userAgent.match(/mozilla/i)?-29:-49,e=c.ischrome?49:c.isIEEleven||c.isSafari?9:navigator.userAgent.match(/mozilla/i)?29:49;a.on("mousewheel DOMMouseScroll",function(f){var h=g(f.originalEvent),i=a.find(".tp-revslider-slidesli.active-revslide").index(),j=a.find(".tp-revslider-slidesli.processing-revslide").index(),k=-1!=i&&0==i||-1!=j&&0==j,l=-1!=i&&i==c.slideamount-1||1!=j&&j==c.slideamount-1,m=!0;"carousel"==c.navigation.mouseScrollNavigation&&(k=l=!1),-1==j?h.pixelY<d?(k||(c.sc_indicator="arrow","reverse"!==c.navigation.mouseScrollReverse&&(c.sc_indicator_dir=1,b.callingNewSlide(a,-1)),m=!1),l||(c.sc_indicator="arrow","reverse"===c.navigation.mouseScrollReverse&&(c.sc_indicator_dir=0,b.callingNewSlide(a,1)),m=!1)):h.pixelY>e&&(l||(c.sc_indicator="arrow","reverse"!==c.navigation.mouseScrollReverse&&(c.sc_indicator_dir=0,b.callingNewSlide(a,1)),m=!1),k||(c.sc_indicator="arrow","reverse"===c.navigation.mouseScrollReverse&&(c.sc_indicator_dir=1,b.callingNewSlide(a,-1)),m=!1)):m=!1;var n=c.c.offset().top-jQuery("body").scrollTop(),o=n+c.c.height();return"carousel"!=c.navigation.mouseScrollNavigation?("reverse"!==c.navigation.mouseScrollReverse&&(n>0&&h.pixelY>0||o<jQuery(window).height()&&h.pixelY<0)&&(m=!0),"reverse"===c.navigation.mouseScrollReverse&&(n<0&&h.pixelY<0||o>jQuery(window).height()&&h.pixelY>0)&&(m=!0)):m=!1,0==m?(f.preventDefault(f),!1):void 0})}},j=function(a,b,d){return a=c?jQuery(d.target).closest("."+a).length||jQuery(d.srcElement).closest("."+a).length:jQuery(d.toElement).closest("."+a).length||jQuery(d.originalTarget).closest("."+a).length,!0===a||1===a?1:0},k=function(a,d,e){var f=d.carousel;jQuery(".bullet, .bullets, .tp-bullets, .tparrows").addClass("noSwipe"),f.Limit="endless";var h=(c||b.get_browser(),a),i="vertical"===d.navigation.thumbnails.direction||"vertical"===d.navigation.tabs.direction?"none":"vertical",k=d.navigation.touch.swipe_direction||"horizontal";i="swipebased"==e&&"vertical"==k?"none":e?"vertical":i,jQuery.fn.swipetp||(jQuery.fn.swipetp=jQuery.fn.swipe),jQuery.fn.swipetp.defaults&&jQuery.fn.swipetp.defaults.excludedElements||jQuery.fn.swipetp.defaults||(jQuery.fn.swipetp.defaults=new Object),jQuery.fn.swipetp.defaults.excludedElements="label, button, input, select, textarea, .noSwipe",h.swipetp({allowPageScroll:i,triggerOnTouchLeave:!0,treshold:d.navigation.touch.swipe_treshold,fingers:d.navigation.touch.swipe_min_touches,excludeElements:jQuery.fn.swipetp.defaults.excludedElements,swipeStatus:function(e,g,h,i,l,m,n){var o=j("rev_slider_wrapper",a,e),p=j("tp-thumbs",a,e),q=j("tp-tabs",a,e),r=jQuery(this).attr("class"),s=!!r.match(/tp-tabs|tp-thumb/gi);if("carousel"===d.sliderType&&(("move"===g||"end"===g||"cancel"==g)&&d.dragStartedOverSlider&&!d.dragStartedOverThumbs&&!d.dragStartedOverTabs||"start"===g&&o>0&&0===p&&0===q)){if(c&&("up"===h||"down"===h))return;switch(d.dragStartedOverSlider=!0,i=h&&h.match(/left|up/g)?Math.round(-1*i):i=Math.round(1*i),g){case"start":void 0!==f.positionanim&&(f.positionanim.kill(),f.slide_globaloffset="off"===f.infinity?f.slide_offset:b.simp(f.slide_offset,f.maxwidth)),f.overpull="none",f.wrap.addClass("dragged");break;case"move":if(d.c.find(".tp-withaction").addClass("tp-temporarydisabled"),f.slide_offset="off"===f.infinity?f.slide_globaloffset+i:b.simp(f.slide_globaloffset+i,f.maxwidth),"off"===f.infinity){var t="center"===f.horizontal_align?(f.wrapwidth/2-f.slide_width/2-f.slide_offset)/f.slide_width:(0-f.slide_offset)/f.slide_width;"none"!==f.overpull&&0!==f.overpull||!(t<0||t>d.slideamount-1)?t>=0&&t<=d.slideamount-1&&(t>=0&&i>f.overpull||t<=d.slideamount-1&&i<f.overpull)&&(f.overpull=0):f.overpull=i,f.slide_offset=t<0?f.slide_offset+(f.overpull-i)/1.1+Math.sqrt(Math.abs((f.overpull-i)/1.1)):t>d.slideamount-1?f.slide_offset+(f.overpull-i)/1.1-Math.sqrt(Math.abs((f.overpull-i)/1.1)):f.slide_offset}b.organiseCarousel(d,h,!0,!0);break;case"end":case"cancel":f.slide_globaloffset=f.slide_offset,f.wrap.removeClass("dragged"),b.carouselToEvalPosition(d,h),d.dragStartedOverSlider=!1,d.dragStartedOverThumbs=!1,d.dragStartedOverTabs=!1,setTimeout(function(){d.c.find(".tp-withaction").removeClass("tp-temporarydisabled")},19)}}else{if(("move"!==g&&"end"!==g&&"cancel"!=g||d.dragStartedOverSlider||!d.dragStartedOverThumbs&&!d.dragStartedOverTabs)&&!("start"===g&&o>0&&(p>0||q>0))){if("end"==g&&!s){if(d.sc_indicator="arrow","horizontal"==k&&"left"==h||"vertical"==k&&"up"==h)return d.sc_indicator_dir=0,b.callingNewSlide(d.c,1),!1;if("horizontal"==k&&"right"==h||"vertical"==k&&"down"==h)return d.sc_indicator_dir=1,b.callingNewSlide(d.c,-1),!1}return d.dragStartedOverSlider=!1,d.dragStartedOverThumbs=!1,d.dragStartedOverTabs=!1,!0}p>0&&(d.dragStartedOverThumbs=!0),q>0&&(d.dragStartedOverTabs=!0);var u=d.dragStartedOverThumbs?".tp-thumbs":".tp-tabs",v=d.dragStartedOverThumbs?".tp-thumb-mask":".tp-tab-mask",w=d.dragStartedOverThumbs?".tp-thumbs-inner-wrapper":".tp-tabs-inner-wrapper",x=d.dragStartedOverThumbs?".tp-thumb":".tp-tab",y=d.dragStartedOverThumbs?d.navigation.thumbnails:d.navigation.tabs;i=h&&h.match(/left|up/g)?Math.round(-1*i):i=Math.round(1*i);var z=a.parent().find(v),A=z.find(w),B=y.direction,C="vertical"===B?A.height():A.width(),D="vertical"===B?z.height():z.width(),E="vertical"===B?z.find(x).first().outerHeight(!0)+y.space:z.find(x).first().outerWidth(!0)+y.space,F=void 0===A.data("offset")?0:parseInt(A.data("offset"),0),G=0;switch(g){case"start":a.parent().find(u).addClass("dragged"),F="vertical"===B?A.position().top:A.position().left,A.data("offset",F),A.data("tmmove")&&A.data("tmmove").pause();break;case"move":if(C<=D)return!1;G=F+i,G=G>0?"horizontal"===B?G-A.width()*(G/A.width()*G/A.width()):G-A.height()*(G/A.height()*G/A.height()):G;var H="vertical"===B?0-(A.height()-z.height()):0-(A.width()-z.width());G=G<H?"horizontal"===B?G+A.width()*(G-H)/A.width()*(G-H)/A.width():G+A.height()*(G-H)/A.height()*(G-H)/A.height():G,"vertical"===B?punchgs.TweenLite.set(A,{top:G+"px"}):punchgs.TweenLite.set(A,{left:G+"px"});break;case"end":case"cancel":if(s)return G=F+i,G="vertical"===B?G<0-(A.height()-z.height())?0-(A.height()-z.height()):G:G<0-(A.width()-z.width())?0-(A.width()-z.width()):G,G=G>0?0:G,G=Math.abs(i)>E/10?i<=0?Math.floor(G/E)*E:Math.ceil(G/E)*E:i<0?Math.ceil(G/E)*E:Math.floor(G/E)*E,G="vertical"===B?G<0-(A.height()-z.height())?0-(A.height()-z.height()):G:G<0-(A.width()-z.width())?0-(A.width()-z.width()):G,G=G>0?0:G,"vertical"===B?punchgs.TweenLite.to(A,.5,{top:G+"px",ease:punchgs.Power3.easeOut}):punchgs.TweenLite.to(A,.5,{left:G+"px",ease:punchgs.Power3.easeOut}),G=G||("vertical"===B?A.position().top:A.position().left),A.data("offset",G),A.data("distance",i),setTimeout(function(){d.dragStartedOverSlider=!1,d.dragStartedOverThumbs=!1,d.dragStartedOverTabs=!1},100),a.parent().find(u).removeClass("dragged"),!1}}}})},l=function(a){a.hide_delay=jQuery.isNumeric(parseInt(a.hide_delay,0))?a.hide_delay/1e3:.2,a.hide_delay_mobile=jQuery.isNumeric(parseInt(a.hide_delay_mobile,0))?a.hide_delay_mobile/1e3:.2},m=function(a){return a&&a.enable},n=function(a){return a&&a.enable&&!0===a.hide_onleave&&(void 0===a.position||!a.position.match(/outer/g))},o=function(a,b){var d=a.parent();n(b.navigation.arrows)&&punchgs.TweenLite.delayedCall(c?b.navigation.arrows.hide_delay_mobile:b.navigation.arrows.hide_delay,p,[d.find(".tparrows"),b.navigation.arrows,"hide"]),n(b.navigation.bullets)&&punchgs.TweenLite.delayedCall(c?b.navigation.bullets.hide_delay_mobile:b.navigation.bullets.hide_delay,p,[d.find(".tp-bullets"),b.navigation.bullets,"hide"]),n(b.navigation.thumbnails)&&punchgs.TweenLite.delayedCall(c?b.navigation.thumbnails.hide_delay_mobile:b.navigation.thumbnails.hide_delay,p,[d.find(".tp-thumbs"),b.navigation.thumbnails,"hide"]),n(b.navigation.tabs)&&punchgs.TweenLite.delayedCall(c?b.navigation.tabs.hide_delay_mobile:b.navigation.tabs.hide_delay,p,[d.find(".tp-tabs"),b.navigation.tabs,"hide"])},p=function(a,b,c,d){switch(d=void 0===d?.5:d,c){case"show":punchgs.TweenLite.to(a,d,{autoAlpha:1,ease:punchgs.Power3.easeInOut,overwrite:"auto"});break;case"hide":punchgs.TweenLite.to(a,d,{autoAlpha:0,ease:punchgs.Power3.easeInOu,overwrite:"auto"})}},q=function(a,b,c){b.style=void 0===b.style?"":b.style,b.left.style=void 0===b.left.style?"":b.left.style,b.right.style=void 0===b.right.style?"":b.right.style,0===a.find(".tp-leftarrow.tparrows").length&&a.append('<div class="tp-leftarrow tparrows '+b.style+" "+b.left.style+'">'+b.tmp+"</div>"),0===a.find(".tp-rightarrow.tparrows").length&&a.append('<div class="tp-rightarrow tparrows '+b.style+" "+b.right.style+'">'+b.tmp+"</div>");var d=a.find(".tp-leftarrow.tparrows"),e=a.find(".tp-rightarrow.tparrows");b.rtl?(d.click(function(){c.sc_indicator="arrow",c.sc_indicator_dir=0,a.revnext()}),e.click(function(){c.sc_indicator="arrow",c.sc_indicator_dir=1,a.revprev()})):(e.click(function(){c.sc_indicator="arrow",c.sc_indicator_dir=0,a.revnext()}),d.click(function(){c.sc_indicator="arrow",c.sc_indicator_dir=1,a.revprev()})),b.right.j=a.find(".tp-rightarrow.tparrows"),b.left.j=a.find(".tp-leftarrow.tparrows"),b.padding_top=parseInt(c.carousel.padding_top||0,0),b.padding_bottom=parseInt(c.carousel.padding_bottom||0,0),t(d,b.left,c),t(e,b.right,c),b.left.opt=c,b.right.opt=c,"outer-left"!=b.position&&"outer-right"!=b.position||(c.outernav=!0)},r=function(a,b,c){var d=a.outerHeight(!0),f=(a.outerWidth(!0),void 0==b.opt?0:0==c.conh?c.height:c.conh),g="layergrid"==b.container?"fullscreen"==c.sliderLayout?c.height/2-c.gridheight[c.curWinRange]*c.bh/2:"on"==c.autoHeight||void 0!=c.minHeight&&c.minHeight>0?f/2-c.gridheight[c.curWinRange]*c.bh/2:0:0,h="top"===b.v_align?{top:"0px",y:Math.round(b.v_offset+g)+"px"}:"center"===b.v_align?{top:"50%",y:Math.round(0-d/2+b.v_offset)+"px"}:{top:"100%",y:Math.round(0-(d+b.v_offset+g))+"px"};a.hasClass("outer-bottom")||punchgs.TweenLite.set(a,h)},s=function(a,b,c){var e=(a.outerHeight(!0),a.outerWidth(!0)),f="layergrid"==b.container?"carousel"===c.sliderType?0:c.width/2-c.gridwidth[c.curWinRange]*c.bw/2:0,g="left"===b.h_align?{left:"0px",x:Math.round(b.h_offset+f)+"px"}:"center"===b.h_align?{left:"50%",x:Math.round(0-e/2+b.h_offset)+"px"}:{left:"100%",x:Math.round(0-(e+b.h_offset+f))+"px"};punchgs.TweenLite.set(a,g)},t=function(a,b,c){var d=a.closest(".tp-simpleresponsive").length>0?a.closest(".tp-simpleresponsive"):a.closest(".tp-revslider-mainul").length>0?a.closest(".tp-revslider-mainul"):a.closest(".rev_slider_wrapper").length>0?a.closest(".rev_slider_wrapper"):a.parent().find(".tp-revslider-mainul"),e=d.width(),f=d.height();if(r(a,b,c),s(a,b,c),"outer-left"!==b.position||"fullwidth"!=b.sliderLayout&&"fullscreen"!=b.sliderLayout?"outer-right"!==b.position||"fullwidth"!=b.sliderLayout&&"fullscreen"!=b.sliderLayout||punchgs.TweenLite.set(a,{right:0-a.outerWidth()+"px",x:b.h_offset+"px"}):punchgs.TweenLite.set(a,{left:0-a.outerWidth()+"px",x:b.h_offset+"px"}),a.hasClass("tp-thumbs")||a.hasClass("tp-tabs")){var g=a.data("wr_padding"),h=a.data("maxw"),i=a.data("maxh"),j=a.hasClass("tp-thumbs")?a.find(".tp-thumb-mask"):a.find(".tp-tab-mask"),k=parseInt(b.padding_top||0,0),l=parseInt(b.padding_bottom||0,0);h>e&&"outer-left"!==b.position&&"outer-right"!==b.position?(punchgs.TweenLite.set(a,{left:"0px",x:0,maxWidth:e-2*g+"px"}),punchgs.TweenLite.set(j,{maxWidth:e-2*g+"px"})):(punchgs.TweenLite.set(a,{maxWidth:h+"px"}),punchgs.TweenLite.set(j,{maxWidth:h+"px"})),i+2*g>f&&"outer-bottom"!==b.position&&"outer-top"!==b.position?(punchgs.TweenLite.set(a,{top:"0px",y:0,maxHeight:k+l+(f-2*g)+"px"}),punchgs.TweenLite.set(j,{maxHeight:k+l+(f-2*g)+"px"})):(punchgs.TweenLite.set(a,{maxHeight:i+"px"}),punchgs.TweenLite.set(j,{maxHeight:i+"px"})),"outer-left"!==b.position&&"outer-right"!==b.position&&(k=0,l=0),!0===b.span&&"vertical"===b.direction?(punchgs.TweenLite.set(a,{maxHeight:k+l+(f-2*g)+"px",height:k+l+(f-2*g)+"px",top:0-k,y:0}),r(j,b,c)):!0===b.span&&"horizontal"===b.direction&&(punchgs.TweenLite.set(a,{maxWidth:"100%",width:e-2*g+"px",left:0,x:0}),s(j,b,c))}},u=function(a,b,c,d){0===a.find(".tp-bullets").length&&(b.style=void 0===b.style?"":b.style,a.append('<div class="tp-bullets '+b.style+" "+b.direction+'"></div>'));var e=a.find(".tp-bullets"),f=c.data("index"),g=b.tmp;jQuery.each(d.thumbs[c.index()].params,function(a,b){g=g.replace(b.from,b.to)}),e.append('<div class="justaddedbullet tp-bullet">'+g+"</div>");var h=a.find(".justaddedbullet"),i=a.find(".tp-bullet").length,j=h.outerWidth()+parseInt(void 0===b.space?0:b.space,0),k=h.outerHeight()+parseInt(void 0===b.space?0:b.space,0);"vertical"===b.direction?(h.css({top:(i-1)*k+"px",left:"0px"}),e.css({height:(i-1)*k+h.outerHeight(),width:h.outerWidth()})):(h.css({left:(i-1)*j+"px",top:"0px"}),e.css({width:(i-1)*j+h.outerWidth(),height:h.outerHeight()})),h.find(".tp-bullet-image").css({backgroundImage:"url("+d.thumbs[c.index()].src+")"}),h.data("liref",f),h.click(function(){d.sc_indicator="bullet",a.revcallslidewithid(f),a.find(".tp-bullet").removeClass("selected"),jQuery(this).addClass("selected")}),h.removeClass("justaddedbullet"),b.padding_top=parseInt(d.carousel.padding_top||0,0),b.padding_bottom=parseInt(d.carousel.padding_bottom||0,0),b.opt=d,"outer-left"!=b.position&&"outer-right"!=b.position||(d.outernav=!0),e.addClass("nav-pos-hor-"+b.h_align),e.addClass("nav-pos-ver-"+b.v_align),e.addClass("nav-dir-"+b.direction),t(e,b,d)},w=function(a,b,c,d,e){var f="tp-thumb"===d?".tp-thumbs":".tp-tabs",g="tp-thumb"===d?".tp-thumb-mask":".tp-tab-mask",h="tp-thumb"===d?".tp-thumbs-inner-wrapper":".tp-tabs-inner-wrapper",i="tp-thumb"===d?".tp-thumb":".tp-tab",j="tp-thumb"===d?".tp-thumb-image":".tp-tab-image";if(b.visibleAmount=b.visibleAmount>e.slideamount?e.slideamount:b.visibleAmount,b.sliderLayout=e.sliderLayout,0===a.parent().find(f).length){b.style=void 0===b.style?"":b.style;var k=!0===b.span?"tp-span-wrapper":"",l='<div class="'+d+"s "+k+" "+b.position+" "+b.style+'"><div class="'+d+'-mask"><div class="'+d+'s-inner-wrapper" style="position:relative;"></div></div></div>';"outer-top"===b.position?a.parent().prepend(l):"outer-bottom"===b.position?a.after(l):a.append(l),b.padding_top=parseInt(e.carousel.padding_top||0,0),b.padding_bottom=parseInt(e.carousel.padding_bottom||0,0),"outer-left"!=b.position&&"outer-right"!=b.position||(e.outernav=!0)}var m=c.data("index"),n=a.parent().find(f),o=n.find(g),p=o.find(h),q="horizontal"===b.direction?b.width*b.visibleAmount+b.space*(b.visibleAmount-1):b.width,r="horizontal"===b.direction?b.height:b.height*b.visibleAmount+b.space*(b.visibleAmount-1),s=b.tmp;jQuery.each(e.thumbs[c.index()].params,function(a,b){s=s.replace(b.from,b.to)}),p.append('<div data-liindex="'+c.index()+'" data-liref="'+m+'" class="justaddedthumb '+d+'" style="width:'+b.width+"px;height:"+b.height+'px;">'+s+"</div>");var u=n.find(".justaddedthumb"),v=n.find(i).length,w=u.outerWidth()+parseInt(void 0===b.space?0:b.space,0),x=u.outerHeight()+parseInt(void 0===b.space?0:b.space,0);u.find(j).css({backgroundImage:"url("+e.thumbs[c.index()].src+")"}),"vertical"===b.direction?(u.css({top:(v-1)*x+"px",left:"0px"}),p.css({height:(v-1)*x+u.outerHeight(),width:u.outerWidth()})):(u.css({left:(v-1)*w+"px",top:"0px"}),p.css({width:(v-1)*w+u.outerWidth(),height:u.outerHeight()})),n.data("maxw",q),n.data("maxh",r),n.data("wr_padding",b.wrapper_padding);var y="outer-top"===b.position||"outer-bottom"===b.position?"relative":"absolute";"outer-top"!==b.position&&"outer-bottom"!==b.position||b.h_align;o.css({maxWidth:q+"px",maxHeight:r+"px",overflow:"hidden",position:"relative"}),n.css({maxWidth:q+"px",maxHeight:r+"px",overflow:"visible",position:y,background:b.wrapper_color,padding:b.wrapper_padding+"px",boxSizing:"contet-box"}),u.click(function(){e.sc_indicator="bullet";var b=a.parent().find(h).data("distance");b=void 0===b?0:b,Math.abs(b)<10&&(a.revcallslidewithid(m),a.parent().find(f).removeClass("selected"),jQuery(this).addClass("selected"))}),u.removeClass("justaddedthumb"),b.opt=e,n.addClass("nav-pos-hor-"+b.h_align),n.addClass("nav-pos-ver-"+b.v_align),n.addClass("nav-dir-"+b.direction),t(n,b,e)},x=function(a){var b=a.c.parent().find(".outer-top"),c=a.c.parent().find(".outer-bottom");a.top_outer=b.hasClass("tp-forcenotvisible")?0:b.outerHeight()||0,a.bottom_outer=c.hasClass("tp-forcenotvisible")?0:c.outerHeight()||0},y=function(a,b,c,d){b>c||c>d?a.addClass("tp-forcenotvisible"):a.removeClass("tp-forcenotvisible")}}(jQuery);

/********************************************
 * REVOLUTION 5.4.6.4 EXTENSION - PARALLAX
 * @version: 2.2.3 (17.05.2017)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
*********************************************/
!function(a){"use strict";function e(a,b){a.lastscrolltop=b}var b=jQuery.fn.revolution,c=b.is_mobile(),d={alias:"Parallax Min JS",name:"revolution.extensions.parallax.min.js",min_core:"5.4.5",version:"2.2.3"};jQuery.extend(!0,b,{checkForParallax:function(a,e){function g(a){if("3D"==f.type||"3d"==f.type){a.find(".slotholder").wrapAll('<div class="dddwrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden"></div>'),a.find(".tp-parallax-wrap").wrapAll('<div class="dddwrapper-layer" style="width:100%;height:100%;position:absolute;top:0px;left:0px;z-index:5;overflow:'+f.ddd_layer_overflow+';"></div>'),a.find(".rs-parallaxlevel-tobggroup").closest(".tp-parallax-wrap").wrapAll('<div class="dddwrapper-layertobggroup" style="position:absolute;top:0px;left:0px;z-index:50;width:100%;height:100%"></div>');var b=a.find(".dddwrapper"),c=a.find(".dddwrapper-layer");a.find(".dddwrapper-layertobggroup").appendTo(b),"carousel"==e.sliderType&&("on"==f.ddd_shadow&&b.addClass("dddwrappershadow"),punchgs.TweenLite.set(b,{borderRadius:e.carousel.border_radius})),punchgs.TweenLite.set(a,{overflow:"visible",transformStyle:"preserve-3d",perspective:1600}),punchgs.TweenLite.set(b,{force3D:"auto",transformOrigin:"50% 50%"}),punchgs.TweenLite.set(c,{force3D:"auto",transformOrigin:"50% 50%",zIndex:5}),punchgs.TweenLite.set(e.ul,{transformStyle:"preserve-3d",transformPerspective:1600})}}if("stop"===b.compare_version(d).check)return!1;var f=e.parallax;if(!f.done){if(f.done=!0,c&&"on"==f.disable_onmobile)return!1;"3D"!=f.type&&"3d"!=f.type||(punchgs.TweenLite.set(e.c,{overflow:f.ddd_overflow}),punchgs.TweenLite.set(e.ul,{overflow:f.ddd_overflow}),"carousel"!=e.sliderType&&"on"==f.ddd_shadow&&(e.c.prepend('<div class="dddwrappershadow"></div>'),punchgs.TweenLite.set(e.c.find(".dddwrappershadow"),{force3D:"auto",transformPerspective:1600,transformOrigin:"50% 50%",width:"100%",height:"100%",position:"absolute",top:0,left:0,zIndex:0}))),e.li.each(function(){g(jQuery(this))}),("3D"==f.type||"3d"==f.type)&&e.c.find(".tp-static-layers").length>0&&(punchgs.TweenLite.set(e.c.find(".tp-static-layers"),{top:0,left:0,width:"100%",height:"100%"}),g(e.c.find(".tp-static-layers"))),f.pcontainers=new Array,f.pcontainer_depths=new Array,f.bgcontainers=new Array,f.bgcontainer_depths=new Array,e.c.find(".tp-revslider-slidesli .slotholder, .tp-revslider-slidesli .rs-background-video-layer").each(function(){var a=jQuery(this),b=a.data("bgparallax")||e.parallax.bgparallax;void 0!==(b="on"==b?1:b)&&"off"!==b&&(f.bgcontainers.push(a),f.bgcontainer_depths.push(e.parallax.levels[parseInt(b,0)-1]/100))});for(var h=1;h<=f.levels.length;h++)e.c.find(".rs-parallaxlevel-"+h).each(function(){var a=jQuery(this),b=a.closest(".tp-parallax-wrap");b.data("parallaxlevel",f.levels[h-1]),b.addClass("tp-parallax-container"),f.pcontainers.push(b),f.pcontainer_depths.push(f.levels[h-1])});"mouse"!=f.type&&"scroll+mouse"!=f.type&&"mouse+scroll"!=f.type&&"3D"!=f.type&&"3d"!=f.type||(a.mouseenter(function(b){var c=a.find(".active-revslide"),d=a.offset().top,e=a.offset().left,f=b.pageX-e,g=b.pageY-d;c.data("enterx",f),c.data("entery",g)}),a.on("mousemove.hoverdir, mouseleave.hoverdir, trigger3dpath",function(b,c){var d=c&&c.li?c.li:a.find(".active-revslide");if("enterpoint"==f.origo){var g=a.offset().top,h=a.offset().left;void 0==d.data("enterx")&&d.data("enterx",b.pageX-h),void 0==d.data("entery")&&d.data("entery",b.pageY-g);var i=d.data("enterx")||b.pageX-h,j=d.data("entery")||b.pageY-g,k=i-(b.pageX-h),l=j-(b.pageY-g),m=f.speed/1e3||.4}else var g=a.offset().top,h=a.offset().left,k=e.conw/2-(b.pageX-h),l=e.conh/2-(b.pageY-g),m=f.speed/1e3||3;"mouseleave"==b.type&&(k=f.ddd_lasth||0,l=f.ddd_lastv||0,m=1.5);for(var n=0;n<f.pcontainers.length;n++){var o=f.pcontainers[n],p=f.pcontainer_depths[n],q="3D"==f.type||"3d"==f.type?p/200:p/100,r=k*q,s=l*q;"scroll+mouse"==f.type||"mouse+scroll"==f.type?punchgs.TweenLite.to(o,m,{force3D:"auto",x:r,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(o,m,{force3D:"auto",x:r,y:s,ease:punchgs.Power3.easeOut,overwrite:"all"})}if("3D"==f.type||"3d"==f.type){var t=".tp-revslider-slidesli .dddwrapper, .dddwrappershadow, .tp-revslider-slidesli .dddwrapper-layer, .tp-static-layers .dddwrapper-layer";"carousel"===e.sliderType&&(t=".tp-revslider-slidesli .dddwrapper, .tp-revslider-slidesli .dddwrapper-layer, .tp-static-layers .dddwrapper-layer"),e.c.find(t).each(function(){var a=jQuery(this),c=f.levels[f.levels.length-1]/200,d=k*c,g=l*c,h=0==e.conw?0:Math.round(k/e.conw*c*100)||0,i=0==e.conh?0:Math.round(l/e.conh*c*100)||0,j=a.closest("li"),n=0,o=!1;a.hasClass("dddwrapper-layer")&&(n=f.ddd_z_correction||65,o=!0),a.hasClass("dddwrapper-layer")&&(d=0,g=0),j.hasClass("active-revslide")||"carousel"!=e.sliderType?"on"!=f.ddd_bgfreeze||o?punchgs.TweenLite.to(a,m,{rotationX:i,rotationY:-h,x:d,z:n,y:g,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(a,.5,{force3D:"auto",rotationY:0,rotationX:0,z:0,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(a,.5,{force3D:"auto",rotationY:0,x:0,y:0,rotationX:0,z:0,ease:punchgs.Power3.easeOut,overwrite:"all"}),"mouseleave"==b.type&&punchgs.TweenLite.to(jQuery(this),3.8,{z:0,ease:punchgs.Power3.easeOut})})}}),c&&(window.ondeviceorientation=function(b){var c=Math.round(b.beta||0)-70,d=Math.round(b.gamma||0),g=a.find(".active-revslide");if(jQuery(window).width()>jQuery(window).height()){var h=d;d=c,c=h}var i=a.width(),j=a.height(),k=360/i*d,l=180/j*c,m=f.speed/1e3||3,n=[];if(g.find(".tp-parallax-container").each(function(a){n.push(jQuery(this))}),a.find(".tp-static-layers .tp-parallax-container").each(function(){n.push(jQuery(this))}),jQuery.each(n,function(){var a=jQuery(this),b=parseInt(a.data("parallaxlevel"),0),c=b/100,d=k*c*2,e=l*c*4;punchgs.TweenLite.to(a,m,{force3D:"auto",x:d,y:e,ease:punchgs.Power3.easeOut,overwrite:"all"})}),"3D"==f.type||"3d"==f.type){var o=".tp-revslider-slidesli .dddwrapper, .dddwrappershadow, .tp-revslider-slidesli .dddwrapper-layer, .tp-static-layers .dddwrapper-layer";"carousel"===e.sliderType&&(o=".tp-revslider-slidesli .dddwrapper, .tp-revslider-slidesli .dddwrapper-layer, .tp-static-layers .dddwrapper-layer"),e.c.find(o).each(function(){var a=jQuery(this),c=f.levels[f.levels.length-1]/200,d=k*c,g=l*c*3,h=0==e.conw?0:Math.round(k/e.conw*c*500)||0,i=0==e.conh?0:Math.round(l/e.conh*c*700)||0,j=a.closest("li"),n=0,o=!1;a.hasClass("dddwrapper-layer")&&(n=f.ddd_z_correction||65,o=!0),a.hasClass("dddwrapper-layer")&&(d=0,g=0),j.hasClass("active-revslide")||"carousel"!=e.sliderType?"on"!=f.ddd_bgfreeze||o?punchgs.TweenLite.to(a,m,{rotationX:i,rotationY:-h,x:d,z:n,y:g,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(a,.5,{force3D:"auto",rotationY:0,rotationX:0,z:0,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(a,.5,{force3D:"auto",rotationY:0,z:0,x:0,y:0,rotationX:0,ease:punchgs.Power3.easeOut,overwrite:"all"}),"mouseleave"==b.type&&punchgs.TweenLite.to(jQuery(this),3.8,{z:0,ease:punchgs.Power3.easeOut})})}}));var i=e.scrolleffect;if(i.bgs=new Array,i.on){if("on"===i.on_slidebg)for(var h=0;h<e.allslotholder.length;h++)i.bgs.push(e.allslotholder[h]);i.multiplicator_layers=parseFloat(i.multiplicator_layers),i.multiplicator=parseFloat(i.multiplicator)}void 0!==i.layers&&0===i.layers.length&&(i.layers=!1),void 0!==i.bgs&&0===i.bgs.length&&(i.bgs=!1),b.scrollTicker(e,a)}},scrollTicker:function(a,d){1!=a.scrollTicker&&(a.scrollTicker=!0,c?(punchgs.TweenLite.ticker.fps(150),punchgs.TweenLite.ticker.addEventListener("tick",function(){b.scrollHandling(a)},d,!1,1)):document.addEventListener("scroll",function(c){b.scrollHandling(a,!0)},{passive:!0})),b.scrollHandling(a,!0)},scrollHandling:function(a,d,f){if(a.lastwindowheight=a.lastwindowheight||window.innerHeight,a.conh=0===a.conh||void 0===a.conh?a.infullscreenmode?a.minHeight:a.c.height():a.conh,a.lastscrolltop==window.scrollY&&!a.duringslidechange&&!d)return!1;punchgs.TweenLite.delayedCall(.2,e,[a,window.scrollY]);var g=a.c[0].getBoundingClientRect(),h=a.viewPort,i=a.parallax,j=g.top<0||g.height>a.lastwindowheight?g.top/g.height:g.bottom>a.lastwindowheight?(g.bottom-a.lastwindowheight)/g.height:0;if(a.scrollproc=j,b.callBackHandling&&b.callBackHandling(a,"parallax","start"),h.enable){var k=1-Math.abs(j);k=k<0?0:k,jQuery.isNumeric(h.visible_area)||-1!==h.visible_area.indexOf("%")&&(h.visible_area=parseInt(h.visible_area)/100),1-h.visible_area<=k?a.inviewport||(a.inviewport=!0,b.enterInViewPort(a)):a.inviewport&&(a.inviewport=!1,b.leaveViewPort(a))}if(c&&"on"==i.disable_onmobile)return!1;if("3d"!=i.type&&"3D"!=i.type){if(("scroll"==i.type||"scroll+mouse"==i.type||"mouse+scroll"==i.type)&&i.pcontainers)for(var l=0;l<i.pcontainers.length;l++)if(i.pcontainers[l].length>0){var m=i.pcontainers[l],n=i.pcontainer_depths[l]/100,o=Math.round(j*(-n*a.conh)*10)/10||0,p=void 0!==f?f:i.speedls/1e3||0;m.data("parallaxoffset",o),punchgs.TweenLite.to(m,p,{overwrite:"auto",force3D:"auto",y:o})}if(i.bgcontainers)for(var l=0;l<i.bgcontainers.length;l++){var q=i.bgcontainers[l],r=i.bgcontainer_depths[l],o=j*(-r*a.conh)||0,p=void 0!==f?f:i.speedbg/1e3||0;punchgs.TweenLite.to(q,p,{position:"absolute",top:"0px",left:"0px",backfaceVisibility:"hidden",force3D:"true",y:o+"px"})}}var s=a.scrolleffect;if(s.on&&("on"!==s.disable_on_mobile||!c)){var t=Math.abs(j)-s.tilt/100;if(t=t<0?0:t,!1!==s.layers){var u=1-t*s.multiplicator_layers,v={backfaceVisibility:"hidden",force3D:"true",z:.001,perspective:600};if("top"==s.direction&&j>=0&&(u=1),"bottom"==s.direction&&j<=0&&(u=1),u=u>1?1:u<0?0:u,"on"===s.fade&&(v.opacity=u),"on"===s.scale){var w=u;v.scale=1-w+1}if("on"===s.blur){var x=(1-u)*s.maxblur;v["-webkit-filter"]="blur("+x+"px)",v.filter="blur("+x+"px)"}if("on"===s.grayscale){var y=100*(1-u),z="grayscale("+y+"%)";v["-webkit-filter"]=void 0===v["-webkit-filter"]?z:v["-webkit-filter"]+" "+z,v.filter=void 0===v.filter?z:v.filter+" "+z}punchgs.TweenLite.set(s.layers,v)}if(!1!==s.bgs){var u=1-t*s.multiplicator,v={backfaceVisibility:"hidden",force3D:"true"};if("top"==s.direction&&j>=0&&(u=1),"bottom"==s.direction&&j<=0&&(u=1),u=u>1?1:u<0?0:u,"on"===s.fade&&(v.opacity=u),"on"===s.scale){var w=u;punchgs.TweenLite.set(jQuery(".tp-kbimg-wrap"),{transformOrigin:"50% 50%",scale:w,force3D:!0})}if("on"===s.blur){var x=(1-u)*s.maxblur;v["-webkit-filter"]="blur("+x+"px)",v.filter="blur("+x+"px)"}if("on"===s.grayscale){var y=100*(1-u),z="grayscale("+y+"%)";v["-webkit-filter"]=void 0===v["-webkit-filter"]?z:v["-webkit-filter"]+" "+z,v.filter=void 0===v.filter?z:v.filter+" "+z}punchgs.TweenLite.set(s.bgs,v)}}b.callBackHandling&&b.callBackHandling(a,"parallax","end")}})}(jQuery);

/************************************************
 * REVOLUTION 5.4.6.4 EXTENSION - SLIDE ANIMATIONS
 * @version: 1.8 (17.05.2017)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
************************************************/
!function(a){"use strict";var b=jQuery.fn.revolution,c={alias:"SlideAnimations Min JS",name:"revolution.extensions.slideanims.min.js",min_core:"5.4.5",version:"1.8"};jQuery.extend(!0,b,{animateSlide:function(a,d,e,f,h,i,j,k){return"stop"===b.compare_version(c).check?k:g(a,d,e,f,h,i,j,k)}});var d=function(a,c,d,e){var f=a,g=f.find(".defaultimg"),h=g.data("mediafilter"),i=f.data("zoomstart"),j=f.data("rotationstart");void 0!=g.data("currotate")&&(j=g.data("currotate")),void 0!=g.data("curscale")&&"box"==e?i=100*g.data("curscale"):void 0!=g.data("curscale")&&(i=g.data("curscale")),b.slotSize(g,c);var k=g.attr("src"),l=g.data("bgcolor"),m=c.width,n=c.height,o=g.data("fxof"),p=0;void 0===l&&(l=g.css("backgroundColor")),"on"==c.autoHeight&&(n=c.c.height()),void 0==o&&(o=0);var q=0,r=g.data("bgfit"),s=g.data("bgrepeat"),t=g.data("bgposition");void 0==r&&(r="cover"),void 0==s&&(s="no-repeat"),void 0==t&&(t="center center");var u="";switch(u=void 0!==l&&l.indexOf("gradient")>=0?"background:"+l:"background-color:"+l+";background-image:url("+k+");background-repeat:"+s+";background-size:"+r+";background-position:"+t,e){case"box":for(var v=0,w=0,x=0;x<c.slots;x++){w=0;for(var y=0;y<c.slots;y++)f.append('<div class="slot" style="position:absolute;top:'+(p+w)+"px;left:"+(o+v)+"px;width:"+c.slotw+"px;height:"+c.sloth+'px;overflow:hidden;"><div class="slotslide '+h+'" data-x="'+v+'" data-y="'+w+'" style="position:absolute;top:0px;left:0px;width:'+c.slotw+"px;height:"+c.sloth+'px;overflow:hidden;"><div style="position:absolute;top:'+(0-w)+"px;left:"+(0-v)+"px;width:"+m+"px;height:"+n+"px;"+u+';"></div></div></div>'),w+=c.sloth,void 0!=i&&void 0!=j&&punchgs.TweenLite.set(f.find(".slot").last(),{rotationZ:j});v+=c.slotw}break;case"vertical":case"horizontal":if("horizontal"==e){if(!d)var q=0-c.slotw;for(var y=0;y<c.slots;y++)f.append('<div class="slot" style="position:absolute;top:'+(0+p)+"px;left:"+(o+y*c.slotw)+"px;overflow:hidden;width:"+(c.slotw+.3)+"px;height:"+n+'px"><div class="slotslide '+h+'" style="position:absolute;top:0px;left:'+q+"px;width:"+(c.slotw+.6)+"px;height:"+n+'px;overflow:hidden;"><div style="position:absolute;top:0px;left:'+(0-y*c.slotw)+"px;width:"+m+"px;height:"+n+"px;"+u+';"></div></div></div>'),void 0!=i&&void 0!=j&&punchgs.TweenLite.set(f.find(".slot").last(),{rotationZ:j})}else{if(!d)var q=0-c.sloth;for(var y=0;y<c.slots+2;y++)f.append('<div class="slot" style="position:absolute;top:'+(p+y*c.sloth)+"px;left:"+o+"px;overflow:hidden;width:"+m+"px;height:"+c.sloth+'px"><div class="slotslide '+h+'" style="position:absolute;top:'+q+"px;left:0px;width:"+m+"px;height:"+c.sloth+'px;overflow:hidden;"><div style="position:absolute;top:'+(0-y*c.sloth)+"px;left:0px;width:"+m+"px;height:"+n+"px;"+u+';"></div></div></div>'),void 0!=i&&void 0!=j&&punchgs.TweenLite.set(f.find(".slot").last(),{rotationZ:j})}}},e=function(a,b,c,d){function y(){jQuery.each(v,function(a,c){c[0]!=b&&c[8]!=b||(q=c[1],r=c[2],s=t),t+=1})}var e=a[0].opt,f=punchgs.Power1.easeIn,g=punchgs.Power1.easeOut,h=punchgs.Power1.easeInOut,i=punchgs.Power2.easeIn,j=punchgs.Power2.easeOut,k=punchgs.Power2.easeInOut,m=(punchgs.Power3.easeIn,punchgs.Power3.easeOut),n=punchgs.Power3.easeInOut,o=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],p=[16,17,18,19,20,21,22,23,24,25,27],q=0,r=1,s=0,t=0,v=(new Array,[["boxslide",0,1,10,0,"box",!1,null,0,g,g,500,6],["boxfade",1,0,10,0,"box",!1,null,1,h,h,700,5],["slotslide-horizontal",2,0,0,200,"horizontal",!0,!1,2,k,k,700,3],["slotslide-vertical",3,0,0,200,"vertical",!0,!1,3,k,k,700,3],["curtain-1",4,3,0,0,"horizontal",!0,!0,4,g,g,300,5],["curtain-2",5,3,0,0,"horizontal",!0,!0,5,g,g,300,5],["curtain-3",6,3,25,0,"horizontal",!0,!0,6,g,g,300,5],["slotzoom-horizontal",7,0,0,400,"horizontal",!0,!0,7,g,g,300,7],["slotzoom-vertical",8,0,0,0,"vertical",!0,!0,8,j,j,500,8],["slotfade-horizontal",9,0,0,1e3,"horizontal",!0,null,9,j,j,2e3,10],["slotfade-vertical",10,0,0,1e3,"vertical",!0,null,10,j,j,2e3,10],["fade",11,0,1,300,"horizontal",!0,null,11,k,k,1e3,1],["crossfade",11,1,1,300,"horizontal",!0,null,11,k,k,1e3,1],["fadethroughdark",11,2,1,300,"horizontal",!0,null,11,k,k,1e3,1],["fadethroughlight",11,3,1,300,"horizontal",!0,null,11,k,k,1e3,1],["fadethroughtransparent",11,4,1,300,"horizontal",!0,null,11,k,k,1e3,1],["slideleft",12,0,1,0,"horizontal",!0,!0,12,n,n,1e3,1],["slideup",13,0,1,0,"horizontal",!0,!0,13,n,n,1e3,1],["slidedown",14,0,1,0,"horizontal",!0,!0,14,n,n,1e3,1],["slideright",15,0,1,0,"horizontal",!0,!0,15,n,n,1e3,1],["slideoverleft",12,7,1,0,"horizontal",!0,!0,12,n,n,1e3,1],["slideoverup",13,7,1,0,"horizontal",!0,!0,13,n,n,1e3,1],["slideoverdown",14,7,1,0,"horizontal",!0,!0,14,n,n,1e3,1],["slideoverright",15,7,1,0,"horizontal",!0,!0,15,n,n,1e3,1],["slideremoveleft",12,8,1,0,"horizontal",!0,!0,12,n,n,1e3,1],["slideremoveup",13,8,1,0,"horizontal",!0,!0,13,n,n,1e3,1],["slideremovedown",14,8,1,0,"horizontal",!0,!0,14,n,n,1e3,1],["slideremoveright",15,8,1,0,"horizontal",!0,!0,15,n,n,1e3,1],["papercut",16,0,0,600,"",null,null,16,n,n,1e3,2],["3dcurtain-horizontal",17,0,20,100,"vertical",!1,!0,17,h,h,500,7],["3dcurtain-vertical",18,0,10,100,"horizontal",!1,!0,18,h,h,500,5],["cubic",19,0,20,600,"horizontal",!1,!0,19,n,n,500,1],["cube",19,0,20,600,"horizontal",!1,!0,20,n,n,500,1],["flyin",20,0,4,600,"vertical",!1,!0,21,m,n,500,1],["turnoff",21,0,1,500,"horizontal",!1,!0,22,n,n,500,1],["incube",22,0,20,200,"horizontal",!1,!0,23,k,k,500,1],["cubic-horizontal",23,0,20,500,"vertical",!1,!0,24,j,j,500,1],["cube-horizontal",23,0,20,500,"vertical",!1,!0,25,j,j,500,1],["incube-horizontal",24,0,20,500,"vertical",!1,!0,26,k,k,500,1],["turnoff-vertical",25,0,1,200,"horizontal",!1,!0,27,k,k,500,1],["fadefromright",12,1,1,0,"horizontal",!0,!0,28,k,k,1e3,1],["fadefromleft",15,1,1,0,"horizontal",!0,!0,29,k,k,1e3,1],["fadefromtop",14,1,1,0,"horizontal",!0,!0,30,k,k,1e3,1],["fadefrombottom",13,1,1,0,"horizontal",!0,!0,31,k,k,1e3,1],["fadetoleftfadefromright",12,2,1,0,"horizontal",!0,!0,32,k,k,1e3,1],["fadetorightfadefromleft",15,2,1,0,"horizontal",!0,!0,33,k,k,1e3,1],["fadetobottomfadefromtop",14,2,1,0,"horizontal",!0,!0,34,k,k,1e3,1],["fadetotopfadefrombottom",13,2,1,0,"horizontal",!0,!0,35,k,k,1e3,1],["parallaxtoright",15,3,1,0,"horizontal",!0,!0,36,k,i,1500,1],["parallaxtoleft",12,3,1,0,"horizontal",!0,!0,37,k,i,1500,1],["parallaxtotop",14,3,1,0,"horizontal",!0,!0,38,k,f,1500,1],["parallaxtobottom",13,3,1,0,"horizontal",!0,!0,39,k,f,1500,1],["scaledownfromright",12,4,1,0,"horizontal",!0,!0,40,k,i,1e3,1],["scaledownfromleft",15,4,1,0,"horizontal",!0,!0,41,k,i,1e3,1],["scaledownfromtop",14,4,1,0,"horizontal",!0,!0,42,k,i,1e3,1],["scaledownfrombottom",13,4,1,0,"horizontal",!0,!0,43,k,i,1e3,1],["zoomout",13,5,1,0,"horizontal",!0,!0,44,k,i,1e3,1],["zoomin",13,6,1,0,"horizontal",!0,!0,45,k,i,1e3,1],["slidingoverlayup",27,0,1,0,"horizontal",!0,!0,47,h,g,2e3,1],["slidingoverlaydown",28,0,1,0,"horizontal",!0,!0,48,h,g,2e3,1],["slidingoverlayright",30,0,1,0,"horizontal",!0,!0,49,h,g,2e3,1],["slidingoverlayleft",29,0,1,0,"horizontal",!0,!0,50,h,g,2e3,1],["parallaxcirclesup",31,0,1,0,"horizontal",!0,!0,51,k,f,1500,1],["parallaxcirclesdown",32,0,1,0,"horizontal",!0,!0,52,k,f,1500,1],["parallaxcirclesright",33,0,1,0,"horizontal",!0,!0,53,k,f,1500,1],["parallaxcirclesleft",34,0,1,0,"horizontal",!0,!0,54,k,f,1500,1],["notransition",26,0,1,0,"horizontal",!0,null,46,k,i,1e3,1],["parallaxright",15,3,1,0,"horizontal",!0,!0,55,k,i,1500,1],["parallaxleft",12,3,1,0,"horizontal",!0,!0,56,k,i,1500,1],["parallaxup",14,3,1,0,"horizontal",!0,!0,57,k,f,1500,1],["parallaxdown",13,3,1,0,"horizontal",!0,!0,58,k,f,1500,1],["grayscale",11,5,1,300,"horizontal",!0,null,11,k,k,1e3,1],["grayscalecross",11,6,1,300,"horizontal",!0,null,11,k,k,1e3,1],["brightness",11,7,1,300,"horizontal",!0,null,11,k,k,1e3,1],["brightnesscross",11,8,1,300,"horizontal",!0,null,11,k,k,1e3,1],["blurlight",11,9,1,300,"horizontal",!0,null,11,k,k,1e3,1],["blurlightcross",11,10,1,300,"horizontal",!0,null,11,k,k,1e3,1],["blurstrong",11,9,1,300,"horizontal",!0,null,11,k,k,1e3,1],["blurstrongcross",11,10,1,300,"horizontal",!0,null,11,k,k,1e3,1]]);e.duringslidechange=!0,e.testanims=!1,1==e.testanims&&(e.nexttesttransform=void 0===e.nexttesttransform?34:e.nexttesttransform+1,e.nexttesttransform=e.nexttesttransform>70?0:e.nexttesttransform,b=v[e.nexttesttransform][0],console.log(b+"  "+e.nexttesttransform+"  "+v[e.nexttesttransform][1]+"  "+v[e.nexttesttransform][2])),jQuery.each(["parallaxcircles","slidingoverlay","slide","slideover","slideremove","parallax","parralaxto"],function(a,c){b==c+"horizontal"&&(b=1!=d?c+"left":c+"right"),b==c+"vertical"&&(b=1!=d?c+"up":c+"down")}),"random"==b&&(b=Math.round(Math.random()*v.length-1))>v.length-1&&(b=v.length-1),"random-static"==b&&(b=Math.round(Math.random()*o.length-1),b>o.length-1&&(b=o.length-1),b=o[b]),"random-premium"==b&&(b=Math.round(Math.random()*p.length-1),b>p.length-1&&(b=p.length-1),b=p[b]);var w=[12,13,14,15,16,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45];if(1==e.isJoomla&&void 0!=window.MooTools&&-1!=w.indexOf(b)){var x=Math.round(Math.random()*(p.length-2))+1;x>p.length-1&&(x=p.length-1),0==x&&(x=1),b=p[x]}y(),q>30&&(q=30),q<0&&(q=0);var z=new Object;return z.nexttrans=q,z.STA=v[s],z.specials=r,z},f=function(a,b){return void 0==b||jQuery.isNumeric(a)?a:void 0==a?a:a.split(",")[b]},g=function(a,b,c,g,h,i,j,k){function V(a,b,c,d,e){var f=a.find(".slot"),g=6,h=[2,1.2,.9,.7,.55,.42],j=a.width(),l=a.height();f.wrap('<div class="slot-circle-wrapper" style="overflow:hidden;position:absolute;border:1px solid #fff"></div>');for(var n=0;n<g;n++)f.parent().clone(!1).appendTo(i);a.find(".slot-circle-wrapper").each(function(a){if(a<g){var d=jQuery(this),f=d.find(".slot"),i=j>l?h[a]*j:h[a]*l,m=i,n=m/2-j/2+0,o=i/2-l/2+0,p=0!=a?"50%":"0",q=l/2-i/2,r=33==c?j/2-m/2:34==c?j-m:j/2-m/2,s={scale:1,transformOrigo:"50% 50%",width:m+"px",height:i+"px",top:q+"px",left:r+"px",borderRadius:p},t={scale:1,top:l/2-i/2,left:j/2-m/2,ease:e},u=o,v=33==c?n:34==c?n+j/2:n,w={width:j,height:l,autoAlpha:1,top:u+"px",position:"absolute",left:v+"px"},x={top:o+"px",left:n+"px",ease:e},y=b,z=0;k.add(punchgs.TweenLite.fromTo(d,y,s,t),z),k.add(punchgs.TweenLite.fromTo(f,y,w,x),z),k.add(punchgs.TweenLite.fromTo(d,.001,{autoAlpha:0},{autoAlpha:1}),0)}})}var l=c[0].opt,m=h.index(),n=g.index(),o=n<m?1:0;"arrow"==l.sc_indicator&&(o=l.sc_indicator_dir);var p=e(c,b,i,o),q=p.STA,r=p.specials,a=p.nexttrans;"on"==i.data("kenburns")&&(a=11);var s=g.data("nexttransid")||0,t=f(g.data("masterspeed"),s);t="default"===t?q[11]:"random"===t?Math.round(1e3*Math.random()+300):void 0!=t?parseInt(t,0):q[11],t=t>l.delay?l.delay:t,t+=q[4],l.slots=f(g.data("slotamount"),s),l.slots=void 0==l.slots||"default"==l.slots?q[12]:"random"==l.slots?Math.round(12*Math.random()+4):l.slots,l.slots=l.slots<1?"boxslide"==b?Math.round(6*Math.random()+3):"flyin"==b?Math.round(4*Math.random()+1):l.slots:l.slots,l.slots=(4==a||5==a||6==a)&&l.slots<3?3:l.slots,l.slots=0!=q[3]?Math.min(l.slots,q[3]):l.slots,l.slots=9==a?l.width/l.slots:10==a?l.height/l.slots:l.slots,l.rotate=f(g.data("rotate"),s),l.rotate=void 0==l.rotate||"default"==l.rotate?0:999==l.rotate||"random"==l.rotate?Math.round(360*Math.random()):l.rotate,l.rotate=l.ie||l.ie9?0:l.rotate,11!=a&&(null!=q[7]&&d(j,l,q[7],q[5]),null!=q[6]&&d(i,l,q[6],q[5])),k.add(punchgs.TweenLite.set(i.find(".defaultvid"),{y:0,x:0,top:0,left:0,scale:1}),0),k.add(punchgs.TweenLite.set(j.find(".defaultvid"),{y:0,x:0,top:0,left:0,scale:1}),0),k.add(punchgs.TweenLite.set(i.find(".defaultvid"),{y:"+0%",x:"+0%"}),0),k.add(punchgs.TweenLite.set(j.find(".defaultvid"),{y:"+0%",x:"+0%"}),0),k.add(punchgs.TweenLite.set(i,{autoAlpha:1,y:"+0%",x:"+0%"}),0),k.add(punchgs.TweenLite.set(j,{autoAlpha:1,y:"+0%",x:"+0%"}),0),k.add(punchgs.TweenLite.set(i.parent(),{backgroundColor:"transparent"}),0),k.add(punchgs.TweenLite.set(j.parent(),{backgroundColor:"transparent"}),0);var u=f(g.data("easein"),s),v=f(g.data("easeout"),s);if(u="default"===u?q[9]||punchgs.Power2.easeInOut:u||q[9]||punchgs.Power2.easeInOut,v="default"===v?q[10]||punchgs.Power2.easeInOut:v||q[10]||punchgs.Power2.easeInOut,0==a){var w=Math.ceil(l.height/l.sloth),x=0;i.find(".slotslide").each(function(a){var b=jQuery(this);x+=1,x==w&&(x=0),k.add(punchgs.TweenLite.from(b,t/600,{opacity:0,top:0-l.sloth,left:0-l.slotw,rotation:l.rotate,force3D:"auto",ease:u}),(15*a+30*x)/1500)})}if(1==a){var y,z=0;i.find(".slotslide").each(function(a){var b=jQuery(this),c=Math.random()*t+300,d=500*Math.random()+200;c+d>y&&(y=d+d,z=a),k.add(punchgs.TweenLite.from(b,c/1e3,{autoAlpha:0,force3D:"auto",rotation:l.rotate,ease:u}),d/1e3)})}if(2==a){var A=new punchgs.TimelineLite;j.find(".slotslide").each(function(){var a=jQuery(this);A.add(punchgs.TweenLite.to(a,t/1e3,{left:l.slotw,ease:u,force3D:"auto",rotation:0-l.rotate}),0),k.add(A,0)}),i.find(".slotslide").each(function(){var a=jQuery(this);A.add(punchgs.TweenLite.from(a,t/1e3,{left:0-l.slotw,ease:u,force3D:"auto",rotation:l.rotate}),0),k.add(A,0)})}if(3==a){var A=new punchgs.TimelineLite;j.find(".slotslide").each(function(){var a=jQuery(this);A.add(punchgs.TweenLite.to(a,t/1e3,{top:l.sloth,ease:u,rotation:l.rotate,force3D:"auto",transformPerspective:600}),0),k.add(A,0)}),i.find(".slotslide").each(function(){var a=jQuery(this);A.add(punchgs.TweenLite.from(a,t/1e3,{top:0-l.sloth,rotation:l.rotate,ease:v,force3D:"auto",transformPerspective:600}),0),k.add(A,0)})}if(4==a||5==a){setTimeout(function(){j.find(".defaultimg").css({opacity:0})},100);var B=t/1e3,A=new punchgs.TimelineLite;j.find(".slotslide").each(function(b){var c=jQuery(this),d=b*B/l.slots;5==a&&(d=(l.slots-b-1)*B/l.slots/1.5),A.add(punchgs.TweenLite.to(c,3*B,{transformPerspective:600,force3D:"auto",top:0+l.height,opacity:.5,rotation:l.rotate,ease:u,delay:d}),0),k.add(A,0)}),i.find(".slotslide").each(function(b){var c=jQuery(this),d=b*B/l.slots;5==a&&(d=(l.slots-b-1)*B/l.slots/1.5),A.add(punchgs.TweenLite.from(c,3*B,{top:0-l.height,opacity:.5,rotation:l.rotate,force3D:"auto",ease:punchgs.eo,delay:d}),0),k.add(A,0)})}if(6==a){l.slots<2&&(l.slots=2),l.slots%2&&(l.slots=l.slots+1);var A=new punchgs.TimelineLite;setTimeout(function(){j.find(".defaultimg").css({opacity:0})},100),j.find(".slotslide").each(function(a){var b=jQuery(this);if(a+1<l.slots/2)var c=90*(a+2);else var c=90*(2+l.slots-a);A.add(punchgs.TweenLite.to(b,(t+c)/1e3,{top:0+l.height,opacity:1,force3D:"auto",rotation:l.rotate,ease:u}),0),k.add(A,0)}),i.find(".slotslide").each(function(a){var b=jQuery(this);if(a+1<l.slots/2)var c=90*(a+2);else var c=90*(2+l.slots-a);A.add(punchgs.TweenLite.from(b,(t+c)/1e3,{top:0-l.height,opacity:1,force3D:"auto",rotation:l.rotate,ease:v}),0),k.add(A,0)})}if(7==a){t*=2,t>l.delay&&(t=l.delay);var A=new punchgs.TimelineLite;setTimeout(function(){j.find(".defaultimg").css({opacity:0})},100),j.find(".slotslide").each(function(){var a=jQuery(this).find("div");A.add(punchgs.TweenLite.to(a,t/1e3,{left:0-l.slotw/2+"px",top:0-l.height/2+"px",width:2*l.slotw+"px",height:2*l.height+"px",opacity:0,rotation:l.rotate,force3D:"auto",ease:u}),0),k.add(A,0)}),i.find(".slotslide").each(function(a){var b=jQuery(this).find("div");A.add(punchgs.TweenLite.fromTo(b,t/1e3,{left:0,top:0,opacity:0,transformPerspective:600},{left:0-a*l.slotw+"px",ease:v,force3D:"auto",top:"0px",width:l.width,height:l.height,opacity:1,rotation:0,delay:.1}),0),k.add(A,0)})}if(8==a){t*=3,t>l.delay&&(t=l.delay);var A=new punchgs.TimelineLite;j.find(".slotslide").each(function(){var a=jQuery(this).find("div");A.add(punchgs.TweenLite.to(a,t/1e3,{left:0-l.width/2+"px",top:0-l.sloth/2+"px",width:2*l.width+"px",height:2*l.sloth+"px",force3D:"auto",ease:u,opacity:0,rotation:l.rotate}),0),k.add(A,0)}),i.find(".slotslide").each(function(a){var b=jQuery(this).find("div");A.add(punchgs.TweenLite.fromTo(b,t/1e3,{left:0,top:0,opacity:0,force3D:"auto"},{left:"0px",top:0-a*l.sloth+"px",width:i.find(".defaultimg").data("neww")+"px",height:i.find(".defaultimg").data("newh")+"px",opacity:1,ease:v,rotation:0}),0),k.add(A,0)})}if(9==a||10==a){var D=0;i.find(".slotslide").each(function(a){var b=jQuery(this);D++,k.add(punchgs.TweenLite.fromTo(b,t/2e3,{autoAlpha:0,force3D:"auto",transformPerspective:600},{autoAlpha:1,ease:u,delay:a*l.slots/100/2e3}),0)})}if(27==a||28==a||29==a||30==a){var E=i.find(".slot"),F=27==a||28==a?1:2,G=27==a||29==a?"-100%":"+100%",H=27==a||29==a?"+100%":"-100%",I=27==a||29==a?"-80%":"80%",J=27==a||29==a?"+80%":"-80%",K=27==a||29==a?"+10%":"-10%",L={overwrite:"all"},M={autoAlpha:0,zIndex:1,force3D:"auto",ease:u},N={position:"inherit",autoAlpha:0,overwrite:"all",zIndex:1},O={autoAlpha:1,force3D:"auto",ease:v},P={overwrite:"all",zIndex:2,opacity:1,autoAlpha:1},Q={autoAlpha:1,force3D:"auto",overwrite:"all",ease:u},R={overwrite:"all",zIndex:2,autoAlpha:1},S={autoAlpha:1,force3D:"auto",ease:u},T=1==F?"y":"x";L[T]="0px",M[T]=G,N[T]=K,O[T]="0%",P[T]=H,Q[T]=G,R[T]=I,S[T]=J,E.append('<span style="background-color:rgba(0,0,0,0.6);width:100%;height:100%;position:absolute;top:0px;left:0px;display:block;z-index:2"></span>'),k.add(punchgs.TweenLite.fromTo(j,t/1e3,L,M),0),k.add(punchgs.TweenLite.fromTo(i.find(".defaultimg"),t/2e3,N,O),t/2e3),k.add(punchgs.TweenLite.fromTo(E,t/1e3,P,Q),0),k.add(punchgs.TweenLite.fromTo(E.find(".slotslide div"),t/1e3,R,S),0)}if(31==a||32==a||33==a||34==a){t=6e3,u=punchgs.Power3.easeInOut;var U=t/1e3;mas=U-U/5,_nt=a,fy=31==_nt?"+100%":32==_nt?"-100%":"0%",fx=33==_nt?"+100%":34==_nt?"-100%":"0%",ty=31==_nt?"-100%":32==_nt?"+100%":"0%",tx=33==_nt?"-100%":34==_nt?"+100%":"0%",k.add(punchgs.TweenLite.fromTo(j,U-.2*U,{y:0,x:0},{y:ty,x:tx,ease:v}),.2*U),k.add(punchgs.TweenLite.fromTo(i,U,{y:fy,x:fx},{y:"0%",x:"0%",ease:u}),0),i.find(".slot").remove(),i.find(".defaultimg").clone().appendTo(i).addClass("slot"),V(i,U,_nt,"in",u)}if(11==a){r>12&&(r=0);var D=0,W=2==r?"#000000":3==r?"#ffffff":"transparent";switch(r){case 0:k.add(punchgs.TweenLite.fromTo(i,t/1e3,{autoAlpha:0},{autoAlpha:1,force3D:"auto",ease:u}),0);break;case 1:k.add(punchgs.TweenLite.fromTo(i,t/1e3,{autoAlpha:0},{autoAlpha:1,force3D:"auto",ease:u}),0),k.add(punchgs.TweenLite.fromTo(j,t/1e3,{autoAlpha:1},{autoAlpha:0,force3D:"auto",ease:u}),0);break;case 2:case 3:case 4:k.add(punchgs.TweenLite.set(j.parent(),{backgroundColor:W,force3D:"auto"}),0),k.add(punchgs.TweenLite.set(i.parent(),{backgroundColor:"transparent",force3D:"auto"}),0),k.add(punchgs.TweenLite.to(j,t/2e3,{autoAlpha:0,force3D:"auto",ease:u}),0),k.add(punchgs.TweenLite.fromTo(i,t/2e3,{autoAlpha:0},{autoAlpha:1,force3D:"auto",ease:u}),t/2e3);break;case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:var X=jQuery.inArray(r,[9,10])>=0?5:jQuery.inArray(r,[11,12])>=0?10:0,Y=jQuery.inArray(r,[5,6,7,8])>=0?100:0,Z=jQuery.inArray(r,[7,8])>=0?300:0,$="blur("+X+"px) grayscale("+Y+"%) brightness("+Z+"%)",_="blur(0px) grayscale(0%) brightness(100%)";k.add(punchgs.TweenLite.fromTo(i,t/1e3,{autoAlpha:0,filter:$,"-webkit-filter":$},{autoAlpha:1,filter:_,"-webkit-filter":_,force3D:"auto",ease:u}),0),jQuery.inArray(r,[6,8,10])>=0&&k.add(punchgs.TweenLite.fromTo(j,t/1e3,{autoAlpha:1,filter:_,"-webkit-filter":_},{autoAlpha:0,force3D:"auto",ease:u,filter:$,"-webkit-filter":$}),0)}k.add(punchgs.TweenLite.set(i.find(".defaultimg"),{autoAlpha:1}),0),k.add(punchgs.TweenLite.set(j.find("defaultimg"),{autoAlpha:1}),0)}if(26==a){var D=0;t=0,k.add(punchgs.TweenLite.fromTo(i,t/1e3,{autoAlpha:0},{autoAlpha:1,force3D:"auto",ease:u}),0),k.add(punchgs.TweenLite.to(j,t/1e3,{autoAlpha:0,force3D:"auto",ease:u}),0),k.add(punchgs.TweenLite.set(i.find(".defaultimg"),{autoAlpha:1}),0),k.add(punchgs.TweenLite.set(j.find("defaultimg"),{autoAlpha:1}),0)}if(12==a||13==a||14==a||15==a){t=t,t>l.delay&&(t=l.delay),setTimeout(function(){punchgs.TweenLite.set(j.find(".defaultimg"),{autoAlpha:0})},100);var aa=l.width,ba=l.height,ca=i.find(".slotslide, .defaultvid"),da=0,ea=0,fa=1,ga=1,ha=1,ia=t/1e3,ja=ia;"fullwidth"!=l.sliderLayout&&"fullscreen"!=l.sliderLayout||(aa=ca.width(),ba=ca.height()),12==a?da=aa:15==a?da=0-aa:13==a?ea=ba:14==a&&(ea=0-ba),1==r&&(fa=0),2==r&&(fa=0),3==r&&(ia=t/1300),4!=r&&5!=r||(ga=.6),6==r&&(ga=1.4),5!=r&&6!=r||(ha=1.4,fa=0,aa=0,ba=0,da=0,ea=0),6==r&&(ha=.6);7==r&&(aa=0,ba=0);var la=i.find(".slotslide"),ma=j.find(".slotslide, .defaultvid");if(k.add(punchgs.TweenLite.set(h,{zIndex:15}),0),k.add(punchgs.TweenLite.set(g,{zIndex:20}),0),8==r?(k.add(punchgs.TweenLite.set(h,{zIndex:20}),0),k.add(punchgs.TweenLite.set(g,{zIndex:15}),0),k.add(punchgs.TweenLite.set(la,{left:0,top:0,scale:1,opacity:1,rotation:0,ease:u,force3D:"auto"}),0)):k.add(punchgs.TweenLite.from(la,ia,{left:da,top:ea,scale:ha,opacity:fa,rotation:l.rotate,ease:u,force3D:"auto"}),0),4!=r&&5!=r||(aa=0,ba=0),1!=r)switch(a){case 12:k.add(punchgs.TweenLite.to(ma,ja,{left:0-aa+"px",force3D:"auto",scale:ga,opacity:fa,rotation:l.rotate,ease:v}),0);break;case 15:k.add(punchgs.TweenLite.to(ma,ja,{left:aa+"px",force3D:"auto",scale:ga,opacity:fa,rotation:l.rotate,ease:v}),0);break;case 13:k.add(punchgs.TweenLite.to(ma,ja,{top:0-ba+"px",force3D:"auto",scale:ga,opacity:fa,rotation:l.rotate,ease:v}),0);break;case 14:k.add(punchgs.TweenLite.to(ma,ja,{top:ba+"px",force3D:"auto",scale:ga,opacity:fa,rotation:l.rotate,ease:v}),0)}}if(16==a){var A=new punchgs.TimelineLite;k.add(punchgs.TweenLite.set(h,{position:"absolute","z-index":20}),0),k.add(punchgs.TweenLite.set(g,{position:"absolute","z-index":15}),0),h.wrapInner('<div class="tp-half-one" style="position:relative; width:100%;height:100%"></div>'),h.find(".tp-half-one").clone(!0).appendTo(h).addClass("tp-half-two"),h.find(".tp-half-two").removeClass("tp-half-one");var aa=l.width,ba=l.height;"on"==l.autoHeight&&(ba=c.height()),h.find(".tp-half-one .defaultimg").wrap('<div class="tp-papercut" style="width:'+aa+"px;height:"+ba+'px;"></div>'),h.find(".tp-half-two .defaultimg").wrap('<div class="tp-papercut" style="width:'+aa+"px;height:"+ba+'px;"></div>'),h.find(".tp-half-two .defaultimg").css({position:"absolute",top:"-50%"}),h.find(".tp-half-two .tp-caption").wrapAll('<div style="position:absolute;top:-50%;left:0px;"></div>'),k.add(punchgs.TweenLite.set(h.find(".tp-half-two"),{width:aa,height:ba,overflow:"hidden",zIndex:15,position:"absolute",top:ba/2,left:"0px",transformPerspective:600,transformOrigin:"center bottom"}),0),k.add(punchgs.TweenLite.set(h.find(".tp-half-one"),{width:aa,height:ba/2,overflow:"visible",zIndex:10,position:"absolute",top:"0px",left:"0px",transformPerspective:600,transformOrigin:"center top"}),0);var oa=(h.find(".defaultimg"),Math.round(20*Math.random()-10)),pa=Math.round(20*Math.random()-10),qa=Math.round(20*Math.random()-10),ra=.4*Math.random()-.2,sa=.4*Math.random()-.2,ta=1*Math.random()+1,ua=1*Math.random()+1,va=.3*Math.random()+.3;k.add(punchgs.TweenLite.set(h.find(".tp-half-one"),{overflow:"hidden"}),0),k.add(punchgs.TweenLite.fromTo(h.find(".tp-half-one"),t/800,{width:aa,height:ba/2,position:"absolute",top:"0px",left:"0px",force3D:"auto",transformOrigin:"center top"},{scale:ta,rotation:oa,y:0-ba-ba/4,autoAlpha:0,ease:u}),0),k.add(punchgs.TweenLite.fromTo(h.find(".tp-half-two"),t/800,{width:aa,height:ba,overflow:"hidden",position:"absolute",top:ba/2,left:"0px",force3D:"auto",transformOrigin:"center bottom"},{scale:ua,rotation:pa,y:ba+ba/4,ease:u,autoAlpha:0,onComplete:function(){punchgs.TweenLite.set(h,{position:"absolute","z-index":15}),punchgs.TweenLite.set(g,{position:"absolute","z-index":20}),h.find(".tp-half-one").length>0&&(h.find(".tp-half-one .defaultimg").unwrap(),h.find(".tp-half-one .slotholder").unwrap()),h.find(".tp-half-two").remove()}}),0),A.add(punchgs.TweenLite.set(i.find(".defaultimg"),{autoAlpha:1}),0),null!=h.html()&&k.add(punchgs.TweenLite.fromTo(g,(t-200)/1e3,{scale:va,x:l.width/4*ra,y:ba/4*sa,rotation:qa,force3D:"auto",transformOrigin:"center center",ease:v},{autoAlpha:1,scale:1,x:0,y:0,rotation:0}),0),k.add(A,0)}if(17==a&&i.find(".slotslide").each(function(a){var b=jQuery(this);k.add(punchgs.TweenLite.fromTo(b,t/800,{opacity:0,rotationY:0,scale:.9,rotationX:-110,force3D:"auto",transformPerspective:600,transformOrigin:"center center"},{opacity:1,top:0,left:0,scale:1,rotation:0,rotationX:0,force3D:"auto",rotationY:0,ease:u,delay:.06*a}),0)}),18==a&&i.find(".slotslide").each(function(a){var b=jQuery(this);k.add(punchgs.TweenLite.fromTo(b,t/500,{autoAlpha:0,rotationY:110,scale:.9,rotationX:10,force3D:"auto",transformPerspective:600,transformOrigin:"center center"},{autoAlpha:1,top:0,left:0,scale:1,rotation:0,rotationX:0,force3D:"auto",rotationY:0,ease:u,delay:.06*a}),0)}),19==a||22==a){var A=new punchgs.TimelineLite;k.add(punchgs.TweenLite.set(h,{zIndex:20}),0),k.add(punchgs.TweenLite.set(g,{zIndex:20}),0),setTimeout(function(){j.find(".defaultimg").css({opacity:0})},100);var wa=90,fa=1,xa="center center ";1==o&&(wa=-90),19==a?(xa=xa+"-"+l.height/2,fa=0):xa+=l.height/2,punchgs.TweenLite.set(c,{transformStyle:"flat",backfaceVisibility:"hidden",transformPerspective:600}),i.find(".slotslide").each(function(a){var b=jQuery(this);A.add(punchgs.TweenLite.fromTo(b,t/1e3,{transformStyle:"flat",backfaceVisibility:"hidden",left:0,rotationY:l.rotate,z:10,top:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:xa,rotationX:wa},{left:0,rotationY:0,top:0,z:0,scale:1,force3D:"auto",rotationX:0,delay:50*a/1e3,ease:u}),0),A.add(punchgs.TweenLite.to(b,.1,{autoAlpha:1,delay:50*a/1e3}),0),k.add(A)}),j.find(".slotslide").each(function(a){var b=jQuery(this),c=-90;1==o&&(c=90),A.add(punchgs.TweenLite.fromTo(b,t/1e3,{transformStyle:"flat",backfaceVisibility:"hidden",autoAlpha:1,rotationY:0,top:0,z:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:xa,rotationX:0},{autoAlpha:1,rotationY:l.rotate,top:0,z:10,scale:1,rotationX:c,delay:50*a/1e3,force3D:"auto",ease:v}),0),k.add(A)}),k.add(punchgs.TweenLite.set(h,{zIndex:18}),0)}if(20==a){if(setTimeout(function(){j.find(".defaultimg").css({opacity:0})},100),1==o)var ya=-l.width,wa=80,xa="20% 70% -"+l.height/2;else var ya=l.width,wa=-80,xa="80% 70% -"+l.height/2;i.find(".slotslide").each(function(a){var b=jQuery(this),c=50*a/1e3;k.add(punchgs.TweenLite.fromTo(b,t/1e3,{left:ya,rotationX:40,z:-600,opacity:fa,top:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:xa,transformStyle:"flat",rotationY:wa},{left:0,rotationX:0,opacity:1,top:0,z:0,scale:1,rotationY:0,delay:c,ease:u}),0)}),j.find(".slotslide").each(function(a){var b=jQuery(this),c=50*a/1e3;if(c=a>0?c+t/9e3:0,1!=o)var d=-l.width/2,e=30,f="20% 70% -"+l.height/2;else var d=l.width/2,e=-30,f="80% 70% -"+l.height/2;v=punchgs.Power2.easeInOut,k.add(punchgs.TweenLite.fromTo(b,t/1e3,{opacity:1,rotationX:0,top:0,z:0,scale:1,left:0,force3D:"auto",transformPerspective:600,transformOrigin:f,transformStyle:"flat",rotationY:0},{opacity:1,rotationX:20,top:0,z:-600,left:d,force3D:"auto",rotationY:e,delay:c,ease:v}),0)})}if(21==a||25==a){setTimeout(function(){j.find(".defaultimg").css({opacity:0})},100);var wa=90,ya=-l.width,za=-wa;if(1==o)if(25==a){var xa="center top 0";wa=l.rotate}else{var xa="left center 0";za=l.rotate}else if(ya=l.width,wa=-90,25==a){var xa="center bottom 0";za=-wa,wa=l.rotate}else{var xa="right center 0";za=l.rotate}i.find(".slotslide").each(function(a){var b=jQuery(this),c=t/1.5/3;k.add(punchgs.TweenLite.fromTo(b,2*c/1e3,{left:0,transformStyle:"flat",rotationX:za,z:0,autoAlpha:0,top:0,scale:1,force3D:"auto",transformPerspective:1200,transformOrigin:xa,rotationY:wa},{left:0,rotationX:0,top:0,z:0,autoAlpha:1,scale:1,rotationY:0,force3D:"auto",delay:c/1e3,ease:u}),0)}),1!=o?(ya=-l.width,wa=90,25==a?(xa="center top 0",za=-wa,wa=l.rotate):(xa="left center 0",za=l.rotate)):(ya=l.width,wa=-90,25==a?(xa="center bottom 0",za=-wa,wa=l.rotate):(xa="right center 0",za=l.rotate)),j.find(".slotslide").each(function(a){var b=jQuery(this);k.add(punchgs.TweenLite.fromTo(b,t/1e3,{left:0,transformStyle:"flat",rotationX:0,z:0,autoAlpha:1,top:0,scale:1,force3D:"auto",transformPerspective:1200,transformOrigin:xa,rotationY:0},{left:0,rotationX:za,top:0,z:0,autoAlpha:1,force3D:"auto",scale:1,rotationY:wa,ease:v}),0)})}if(23==a||24==a){setTimeout(function(){j.find(".defaultimg").css({opacity:0})},100);var wa=-90,fa=1,Aa=0;if(1==o&&(wa=90),23==a){var xa="center center -"+l.width/2;fa=0}else var xa="center center "+l.width/2;punchgs.TweenLite.set(c,{transformStyle:"preserve-3d",backfaceVisibility:"hidden",perspective:2500}),i.find(".slotslide").each(function(a){var b=jQuery(this);k.add(punchgs.TweenLite.fromTo(b,t/1e3,{left:Aa,rotationX:l.rotate,force3D:"auto",opacity:fa,top:0,scale:1,transformPerspective:1200,transformOrigin:xa,rotationY:wa},{left:0,rotationX:0,autoAlpha:1,top:0,z:0,scale:1,rotationY:0,delay:50*a/500,ease:u}),0)}),wa=90,1==o&&(wa=-90),j.find(".slotslide").each(function(b){var c=jQuery(this);k.add(punchgs.TweenLite.fromTo(c,t/1e3,{left:0,rotationX:0,top:0,z:0,scale:1,force3D:"auto",transformStyle:"flat",transformPerspective:1200,transformOrigin:xa,rotationY:0},{left:Aa,rotationX:l.rotate,top:0,scale:1,rotationY:wa,delay:50*b/500,ease:v}),0),23==a&&k.add(punchgs.TweenLite.fromTo(c,t/2e3,{autoAlpha:1},{autoAlpha:0,delay:50*b/500+t/3e3,ease:v}),0)})}return k}}(jQuery);


/********************************************
 * REVOLUTION 5.4.6.4 EXTENSION - VIDEO FUNCTIONS
 * @version: 2.2.1 (15.01.2018)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
*********************************************/
!function(e){"use strict";function t(e){return void 0==e?-1:jQuery.isNumeric(e)?e:e.split(":").length>1?60*parseInt(e.split(":")[0],0)+parseInt(e.split(":")[1],0):e}var a=jQuery.fn.revolution,i=a.is_mobile(),o=(a.is_android(),{alias:"Video Min JS",name:"revolution.extensions.video.min.js",min_core:"5.4.6.4",version:"2.2.0"});jQuery.extend(!0,a,{preLoadAudio:function(e,t){if("stop"===a.compare_version(o).check)return!1;e.find(".tp-audiolayer").each(function(){var e=jQuery(this),i={};0===e.find("audio").length&&(i.src=void 0!=e.data("videomp4")?e.data("videomp4"):"",i.pre=e.data("videopreload")||"",void 0===e.attr("id")&&e.attr("audio-layer-"+Math.round(199999*Math.random())),i.id=e.attr("id"),i.status="prepared",i.start=jQuery.now(),i.waittime=1e3*e.data("videopreloadwait")||5e3,"auto"!=i.pre&&"canplaythrough"!=i.pre&&"canplay"!=i.pre&&"progress"!=i.pre||(void 0===t.audioqueue&&(t.audioqueue=[]),t.audioqueue.push(i),a.manageVideoLayer(e,t)))})},preLoadAudioDone:function(e,t,a){t.audioqueue&&t.audioqueue.length>0&&jQuery.each(t.audioqueue,function(t,i){e.data("videomp4")!==i.src||i.pre!==a&&"auto"!==i.pre||(i.status="loaded")})},resetVideo:function(e,o,d,r){var n=e.data();switch(n.videotype){case"youtube":n.player;try{if("on"==n.forcerewind){var s=-1==(g=t(e.data("videostartat"))),l=1===n.bgvideo||e.find(".tp-videoposter").length>0;void 0!=n.player&&(g=-1==g?0:g,n.player.seekTo(g),n.player.pauseVideo())}}catch(e){}0==e.find(".tp-videoposter").length&&1!==n.bgvideo&&!0!==d&&punchgs.TweenLite.to(e.find("iframe"),.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut});break;case"vimeo":if(!r){var u=e.data("vimeoplayer");try{if("on"==n.forcerewind){var s=-1==(g=t(n.videostartat)),l=1===n.bgvideo||e.find(".tp-videoposter").length>0;(0!==(g=-1==g?0:g)&&!s||l)&&(u.setCurrentTime(g),u.pause())}}catch(e){}}0==e.find(".tp-videoposter").length&&1!==n.bgvideo&&!0!==d&&punchgs.TweenLite.to(e.find("iframe"),.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut});break;case"html5":if(i&&1==n.disablevideoonmobile)return!1;var p="html5"==n.audio?"audio":"video",v=e.find(p),c=v[0];if(punchgs.TweenLite.to(v,.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut}),"on"==n.forcerewind&&!e.hasClass("videoisplaying"))try{var g=t(n.videostartat);c.currentTime=-1==g?0:g}catch(e){}("mute"==n.volume||a.lastToggleState(e.videomutetoggledby)||!0===o.globalmute)&&(c.muted=!0)}},isVideoMuted:function(e,t){var a=!1,i=e.data();switch(i.videotype){case"youtube":try{a=i.player.isMuted()}catch(e){}break;case"vimeo":try{"mute"==i.volume&&(a=!0)}catch(e){}break;case"html5":var o="html5"==i.audio?"audio":"video";e.find(o)[0].muted&&(a=!0)}return a},muteVideo:function(e,t){var a=e.data();switch(a.videotype){case"youtube":try{a.player.mute()}catch(e){}break;case"vimeo":try{var i=e.data("vimeoplayer");e.data("volume","mute"),i.setVolume(0)}catch(e){}break;case"html5":var o="html5"==a.audio?"audio":"video";e.find(o)[0].muted=!0}},unMuteVideo:function(e,t){if(!0!==t.globalmute){var a=e.data();switch(a.videotype){case"youtube":try{a.player.unMute()}catch(e){}break;case"vimeo":try{var i=e.data("vimeoplayer");e.data("volume","1"),i.setVolume(1)}catch(e){}break;case"html5":var o="html5"==a.audio?"audio":"video";e.find(o)[0].muted=!1}}},stopVideo:function(e,t){var a=e.data();switch(t.leaveViewPortBasedStop||(t.lastplayedvideos=[]),t.leaveViewPortBasedStop=!1,a.videotype){case"youtube":try{var i=a.player;if(2===i.getPlayerState()||5===i.getPlayerState())return;i.pauseVideo(),a.youtubepausecalled=!0,setTimeout(function(){a.youtubepausecalled=!1},80)}catch(e){console.log("Issue at YouTube Video Pause:"),console.log(e)}break;case"vimeo":try{e.data("vimeoplayer").pause(),a.vimeopausecalled=!0,setTimeout(function(){a.vimeopausecalled=!1},80)}catch(e){console.log("Issue at Vimeo Video Pause:"),console.log(e)}break;case"html5":var o="html5"==a.audio?"audio":"video",d=e.find(o),r=d[0];void 0!=d&&void 0!=r&&r.pause()}},playVideo:function(e,i){clearTimeout(e.data("videoplaywait"));var o=e.data();switch(o.videotype){case"youtube":if(0==e.find("iframe").length)e.append(e.data("videomarkup")),s(e,i,!0);else if(void 0!=o.player.playVideo){var r=t(e.data("videostartat")),n=o.player.getCurrentTime();1==e.data("nextslideatend-triggered")&&(n=-1,e.data("nextslideatend-triggered",0)),-1!=r&&r>n&&o.player.seekTo(r),!0!==o.youtubepausecalled&&o.player.playVideo()}else e.data("videoplaywait",setTimeout(function(){!0!==o.youtubepausecalled&&a.playVideo(e,i)},50));break;case"vimeo":if(0==e.find("iframe").length)e.removeData("vimeoplayer"),e.append(e.data("videomarkup")),s(e,i,!0);else if(e.hasClass("rs-apiready")){var l,u=e.find("iframe").attr("id");e.data("vimeoplayer")?l=e.data("vimeoplayer"):(l=new Vimeo.Player(u),e.data("vimeoplayer",l)),l.getPaused()?setTimeout(function(){var a=t(e.data("videostartat")),i=e.data("currenttime");i||(i=0),1==e.data("nextslideatend-triggered")&&(i=-1,e.data("nextslideatend-triggered",0)),-1!=a&&a>i&&l.setCurrentTime(a),l.play()},510):e.data("videoplaywait",setTimeout(function(){!0!==o.vimeopausecalled&&a.playVideo(e,i)},50))}else e.data("videoplaywait",setTimeout(function(){!0!==o.vimeopausecalled&&a.playVideo(e,i)},50));break;case"html5":var p="html5"==o.audio?"audio":"video",v=e.find(p),c=v[0];if(1!=v.parent().data("metaloaded"))d(c,"loadedmetadata",function(e){a.resetVideo(e,i),c.play();var o=t(e.data("videostartat")),d=c.currentTime;1==e.data("nextslideatend-triggered")&&(d=-1,e.data("nextslideatend-triggered",0)),-1!=o&&o>d&&(c.currentTime=o)}(e));else{c.play();var r=t(e.data("videostartat")),n=c.currentTime;1==e.data("nextslideatend-triggered")&&(n=-1,e.data("nextslideatend-triggered",0)),-1!=r&&r>n&&(c.currentTime=r)}}},isVideoPlaying:function(e,t){var a=!1;return void 0!=t.playingvideos&&jQuery.each(t.playingvideos,function(t,i){e.attr("id")==i.attr("id")&&(a=!0)}),a},removeMediaFromList:function(e,t){c(e,t)},prepareCoveredVideo:function(e,t){if(void 0===t.data("vimeoid")||void 0!==t.data("vimeoplayerloaded")){var i={};if(i.ifr=t.find("iframe, video"),i.asp=t.data("aspectratio"),i.wa=i.asp.split(":")[0],i.ha=i.asp.split(":")[1],i.vd=i.wa/i.ha,0===e.conw||0===e.conh)return a.setSize(e),clearTimeout(i.ifr.data("resizelistener")),void i.ifr.data("resizelistener",setTimeout(function(){a.prepareCoveredVideo(e,t)},100));var o=e.conw/e.conh,d=o/i.vd*100,r=i.vd/o*100;o>i.vd?punchgs.TweenLite.set(i.ifr,{height:d+"%",width:"100%",top:-(d-100)/2+"%",left:"0px",position:"absolute"}):punchgs.TweenLite.set(i.ifr,{width:r+"%",height:"100%",left:-(r-100)/2+"%",top:"0px",position:"absolute"}),i.ifr.hasClass("resizelistener")||(i.ifr.addClass("resizelistener"),jQuery(window).resize(function(){a.prepareCoveredVideo(e,t),clearTimeout(i.ifr.data("resizelistener")),i.ifr.data("resizelistener",setTimeout(function(){a.prepareCoveredVideo(e,t)},90))}))}},checkVideoApis:function(e,t,a){location.protocol;if((void 0!=e.data("ytid")||e.find("iframe").length>0&&e.find("iframe").attr("src").toLowerCase().indexOf("youtube")>0)&&(t.youtubeapineeded=!0),(void 0!=e.data("ytid")||e.find("iframe").length>0&&e.find("iframe").attr("src").toLowerCase().indexOf("youtube")>0)&&0==a.addedyt){t.youtubestarttime=jQuery.now(),a.addedyt=1;var i=document.createElement("script");i.src="https://www.youtube.com/iframe_api";var o=document.getElementsByTagName("script")[0],d=!0;jQuery("head").find("*").each(function(){"https://www.youtube.com/iframe_api"==jQuery(this).attr("src")&&(d=!1)}),d&&o.parentNode.insertBefore(i,o)}if((void 0!=e.data("vimeoid")||e.find("iframe").length>0&&e.find("iframe").attr("src").toLowerCase().indexOf("vimeo")>0)&&(t.vimeoapineeded=!0),(void 0!=e.data("vimeoid")||e.find("iframe").length>0&&e.find("iframe").attr("src").toLowerCase().indexOf("vimeo")>0)&&0==a.addedvim){t.vimeostarttime=jQuery.now(),a.addedvim=1;var r=document.createElement("script"),o=document.getElementsByTagName("script")[0],d=!0;r.src="https://player.vimeo.com/api/player.js",jQuery("head").find("*").each(function(){"https://player.vimeo.com/api/player.js"==jQuery(this).attr("src")&&(d=!1)}),d&&o.parentNode.insertBefore(r,o)}return a},manageVideoLayer:function(e,r,n,l){if("stop"===a.compare_version(o).check)return!1;var u=e.data(),v=u.videoattributes,c=u.ytid,g=u.vimeoid,m="auto"===u.videopreload||"canplay"===u.videopreload||"canplaythrough"===u.videopreload||"progress"===u.videopreload?"auto":u.videopreload,y=u.videomp4,f=u.videowebm,h=u.videoogv,b=u.allowfullscreenvideo,w=u.videocontrols,T="http",k="loop"==u.videoloop?"loop":"loopandnoslidestop"==u.videoloop?"loop":"",x=void 0!=y||void 0!=f?"html5":void 0!=c&&String(c).length>1?"youtube":void 0!=g&&String(g).length>1?"vimeo":"none",V="html5"==u.audio?"audio":"video",L="html5"==x&&0==e.find(V).length?"html5":"youtube"==x&&0==e.find("iframe").length?"youtube":"vimeo"==x&&0==e.find("iframe").length?"vimeo":"none";switch(k=!0===u.nextslideatend?"":k,u.videotype=x,L){case"html5":"controls"!=w&&(w="");V="video";"html5"==u.audio&&(V="audio",e.addClass("tp-audio-html5"));var C="";"video"===V&&(a.is_mobile()||a.isSafari11())&&("on"===u.autoplay||"true"===u.autoplay||!0===u.autoplay?C="muted playsinline autoplay":1!=u.videoinline&&"true"!==u.videoinline&&1!==u.videoinline||(C+=" playsinline"));var P="<"+V+" "+C+' style="object-fit:cover;background-size:cover;visible:hidden;width:100%; height:100%" class="" '+k+' preload="'+m+'">';"auto"==m&&(r.mediapreload=!0),"video"===V?(void 0!=f&&"firefox"==a.get_browser().toLowerCase()&&(P=P+'<source src="'+f+'" type="video/webm" />'),void 0!=y&&(P=P+'<source src="'+y+'" type="video/mp4" />'),void 0!=h&&(P=P+'<source src="'+h+'" type="video/ogg" />')):"audio"===V&&(void 0!=y&&(P=P+'<source src="'+y+'" type="audio/mpeg" />'),void 0!=h&&(P=P+'<source src="'+h+'" type="audio/ogg" />')),P=P+"</"+V+">";var I="";"true"!==b&&!0!==b||(I='<div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-full-screen">Full-Screen</button></div>'),"controls"==w&&(P=P+'<div class="tp-video-controls"><div class="tp-video-button-wrap"><button type="button" class="tp-video-button tp-vid-play-pause">Play</button></div><div class="tp-video-seek-bar-wrap"><input  type="range" class="tp-seek-bar" value="0"></div><div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-mute">Mute</button></div><div class="tp-video-vol-bar-wrap"><input  type="range" class="tp-volume-bar" min="0" max="1" step="0.1" value="1"></div>'+I+"</div>"),e.data("videomarkup",P),e.append(P),(i&&1==e.data("disablevideoonmobile")||a.isIE(8))&&e.find(V).remove(),e.find(V).each(function(t){var i=this,o=jQuery(this);o.parent().hasClass("html5vid")||o.wrap('<div class="html5vid" style="position:relative;top:0px;left:0px;width:100%;height:100%; overflow:hidden;"></div>'),1!=o.parent().data("metaloaded")&&d(i,"loadedmetadata",function(e){p(e,r),a.resetVideo(e,r)}(e))});break;case"youtube":T="https","none"==w&&-1==(v=v.replace("controls=1","controls=0")).toLowerCase().indexOf("controls")&&(v+="&controls=0"),(!0===u.videoinline||"true"===u.videoinline||1===u.videoinline||e.hasClass("rs-background-video-layer"))&&(v+="&playsinline=1");var _=t(e.data("videostartat")),S=t(e.data("videoendat"));-1!=_&&(v=v+"&start="+_),-1!=S&&(v=v+"&end="+S);var j=v.split("origin="+T+"://"),A="";j.length>1?(A=j[0]+"origin="+T+"://",self.location.href.match(/www/gi)&&!j[1].match(/www/gi)&&(A+="www."),A+=j[1]):A=v;var O="true"===b||!0===b?"allowfullscreen":"";e.data("videomarkup",'<iframe type="text/html" src="'+T+"://www.youtube.com/embed/"+c+"?"+A+'" '+O+' width="100%" height="100%" style="opacity:0;visibility:hidden;width:100%;height:100%"></iframe>');break;case"vimeo":T="https",e.data("videomarkup",'<iframe src="'+T+"://player.vimeo.com/video/"+g+"?"+v+'" webkitallowfullscreen mozallowfullscreen allowfullscreen width="100%" height="100%" style="opacity:0;visibility:hidden;100%;height:100%"></iframe>')}var Q=i&&"on"==e.data("noposteronmobile");if(void 0!=u.videoposter&&u.videoposter.length>2&&!Q)0==e.find(".tp-videoposter").length&&e.append('<div class="tp-videoposter noSwipe" style="cursor:pointer; position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:3;background-image:url('+u.videoposter+'); background-size:cover;background-position:center center;"></div>'),0==e.find("iframe").length&&e.find(".tp-videoposter").click(function(){if(a.playVideo(e,r),i){if(1==e.data("disablevideoonmobile"))return!1;punchgs.TweenLite.to(e.find(".tp-videoposter"),.3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(e.find("iframe"),.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut})}});else{if(i&&1==e.data("disablevideoonmobile"))return!1;0!=e.find("iframe").length||"youtube"!=x&&"vimeo"!=x||(e.removeData("vimeoplayer"),e.append(e.data("videomarkup")),s(e,r,!1))}"none"!=e.data("dottedoverlay")&&void 0!=e.data("dottedoverlay")&&1!=e.find(".tp-dottedoverlay").length&&e.append('<div class="tp-dottedoverlay '+e.data("dottedoverlay")+'"></div>'),e.addClass("HasListener"),1==e.data("bgvideo")&&punchgs.TweenLite.set(e.find("video, iframe"),{autoAlpha:0})}});var d=function(e,t,a){e.addEventListener?e.addEventListener(t,a,{capture:!1,passive:!0}):e.attachEvent(t,a,{capture:!1,passive:!0})},r=function(e,t,a){var i={};return i.video=e,i.videotype=t,i.settings=a,i},n=function(e,t){if(1==t.data("bgvideo")||1==t.data("forcecover")){1===t.data("forcecover")&&t.removeClass("fullscreenvideo").addClass("coverscreenvideo");var i=t.data("aspectratio");void 0===i&&i.split(":").length<=1&&t.data("aspectratio","16:9"),a.prepareCoveredVideo(e,t)}},s=function(e,o,d){var s=e.data(),p=e.find("iframe"),g="iframe"+Math.round(1e5*Math.random()+1),m=s.videoloop,y="loopandnoslidestop"!=m;if(m="loop"==m||"loopandnoslidestop"==m,n(o,e),p.attr("id",g),d&&e.data("startvideonow",!0),1!==e.data("videolistenerexist"))switch(s.videotype){case"youtube":C=new YT.Player(g,{events:{onStateChange:function(i){var d=e.closest(".tp-simpleresponsive"),n=(s.videorate,e.data("videostart"),u());if(i.data==YT.PlayerState.PLAYING)punchgs.TweenLite.to(e.find(".tp-videoposter"),.3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(e.find("iframe"),.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut}),"mute"==e.data("volume")||a.lastToggleState(e.data("videomutetoggledby"))||!0===o.globalmute?C.mute():(C.unMute(),C.setVolume(parseInt(e.data("volume"),0)||75)),o.videoplaying=!0,v(e,o),y?o.c.trigger("stoptimer"):o.videoplaying=!1,o.c.trigger("revolution.slide.onvideoplay",r(C,"youtube",e.data())),a.toggleState(s.videotoggledby);else{if(0==i.data&&m){var p=t(e.data("videostartat"));-1!=p&&C.seekTo(p),C.playVideo(),a.toggleState(s.videotoggledby)}n||0!=i.data&&2!=i.data||!("on"==e.data("showcoveronpause")&&e.find(".tp-videoposter").length>0||1===e.data("bgvideo")&&e.find(".rs-fullvideo-cover").length>0)||(1===e.data("bgvideo")?punchgs.TweenLite.to(e.find(".rs-fullvideo-cover"),.1,{autoAlpha:1,force3D:"auto",ease:punchgs.Power3.easeInOut}):punchgs.TweenLite.to(e.find(".tp-videoposter"),.1,{autoAlpha:1,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(e.find("iframe"),.1,{autoAlpha:0,ease:punchgs.Power3.easeInOut})),-1!=i.data&&3!=i.data&&(o.videoplaying=!1,o.tonpause=!1,c(e,o),d.trigger("starttimer"),o.c.trigger("revolution.slide.onvideostop",r(C,"youtube",e.data())),void 0!=o.currentLayerVideoIsPlaying&&o.currentLayerVideoIsPlaying.attr("id")!=e.attr("id")||a.unToggleState(s.videotoggledby)),0==i.data&&1==e.data("nextslideatend")?(l(),e.data("nextslideatend-triggered",1),o.c.revnext(),c(e,o)):(c(e,o),o.videoplaying=!1,d.trigger("starttimer"),o.c.trigger("revolution.slide.onvideostop",r(C,"youtube",e.data())),void 0!=o.currentLayerVideoIsPlaying&&o.currentLayerVideoIsPlaying.attr("id")!=e.attr("id")||a.unToggleState(s.videotoggledby))}},onReady:function(o){var d,r=a.is_mobile(),n=e.hasClass("tp-videolayer");if(r||a.isSafari11()){var l=n&&"off"!==e.data("autoplay");(e.hasClass("rs-background-video-layer")||l)&&(r&&n||(d=!0,C.setVolume(0),e.data("volume","mute"),C.mute(),clearTimeout(e.data("mobilevideotimr")),e.data("mobilevideotimr",setTimeout(function(){C.playVideo()},500))))}d||"mute"!=e.data("volume")||(C.setVolume(0),C.mute());var u=s.videorate;e.data("videostart");if(e.addClass("rs-apiready"),void 0!=u&&o.target.setPlaybackRate(parseFloat(u)),e.find(".tp-videoposter").unbind("click"),e.find(".tp-videoposter").click(function(){i||C.playVideo()}),e.data("startvideonow")){s.player.playVideo();var p=t(e.data("videostartat"));-1!=p&&s.player.seekTo(p)}e.data("videolistenerexist",1)}}});e.data("player",C);break;case"vimeo":for(var f,h=p.attr("src"),b={},w=h,T=/([^&=]+)=([^&]*)/g;f=T.exec(w);)b[decodeURIComponent(f[1])]=decodeURIComponent(f[2]);h=(h=void 0!=b.player_id?h.replace(b.player_id,g):h+"&player_id="+g).replace(/&api=0|&api=1/g,"");var k=a.is_mobile(),x=k||a.isSafari11(),V=e.hasClass("rs-background-video-layer");x&&V&&(h+="&background=1"),p.attr("src",h);var L,C=e.find("iframe")[0];jQuery("#"+g);if(e.data("vimeoplayer")?L=e.data("vimeoplayer"):(L=new Vimeo.Player(g),e.data("vimeoplayer",L)),x){var P;if(V)P=!0;else{var I=e.data("autoplay");"on"!==I&&"true"!==I&&!0!==I||(k&&e.data("autoplay",!1),P=!0)}P&&(L.setVolume(0),e.data("volume","mute"))}L.on("loaded",function(t){var a={};L.getVideoWidth().then(function(t){a.width=t,void 0!==a.width&&void 0!==a.height&&(e.data("aspectratio",a.width+":"+a.height),e.data("vimeoplayerloaded",!0),n(o,e))}),L.getVideoHeight().then(function(t){a.height=t,void 0!==a.width&&void 0!==a.height&&(e.data("aspectratio",a.width+":"+a.height),e.data("vimeoplayerloaded",!0),n(o,e))})}),e.addClass("rs-apiready"),L.on("play",function(t){e.data("nextslidecalled",0),punchgs.TweenLite.to(e.find(".tp-videoposter"),.3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(e.find("iframe"),.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut}),o.c.trigger("revolution.slide.onvideoplay",r(L,"vimeo",e.data())),o.videoplaying=!0,v(e,o),y?o.c.trigger("stoptimer"):o.videoplaying=!1,"mute"==e.data("volume")||a.lastToggleState(e.data("videomutetoggledby"))||!0===o.globalmute?L.setVolume(0):L.setVolume(parseInt(e.data("volume"),0)/100||.75),a.toggleState(s.videotoggledby)}),L.on("timeupdate",function(a){var i=t(e.data("videoendat"));if(e.data("currenttime",a.seconds),0!=i&&Math.abs(i-a.seconds)<1&&i>a.seconds&&1!=e.data("nextslidecalled"))if(m){L.play();var d=t(e.data("videostartat"));-1!=d&&L.setCurrentTime(d)}else 1==e.data("nextslideatend")&&(e.data("nextslideatend-triggered",1),e.data("nextslidecalled",1),o.c.revnext()),L.pause()}),L.on("ended",function(t){c(e,o),o.videoplaying=!1,o.c.trigger("starttimer"),o.c.trigger("revolution.slide.onvideostop",r(L,"vimeo",e.data())),1==e.data("nextslideatend")&&(e.data("nextslideatend-triggered",1),o.c.revnext()),void 0!=o.currentLayerVideoIsPlaying&&o.currentLayerVideoIsPlaying.attr("id")!=e.attr("id")||a.unToggleState(s.videotoggledby)}),L.on("pause",function(t){("on"==e.data("showcoveronpause")&&e.find(".tp-videoposter").length>0||1===e.data("bgvideo")&&e.find(".rs-fullvideo-cover").length>0)&&(1===e.data("bgvideo")?punchgs.TweenLite.to(e.find(".rs-fullvideo-cover"),.1,{autoAlpha:1,force3D:"auto",ease:punchgs.Power3.easeInOut}):punchgs.TweenLite.to(e.find(".tp-videoposter"),.1,{autoAlpha:1,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(e.find("iframe"),.1,{autoAlpha:0,ease:punchgs.Power3.easeInOut})),o.videoplaying=!1,o.tonpause=!1,c(e,o),o.c.trigger("starttimer"),o.c.trigger("revolution.slide.onvideostop",r(L,"vimeo",e.data())),void 0!=o.currentLayerVideoIsPlaying&&o.currentLayerVideoIsPlaying.attr("id")!=e.attr("id")||a.unToggleState(s.videotoggledby)}),e.find(".tp-videoposter").unbind("click"),e.find(".tp-videoposter").click(function(){if(!i)return L.play(),!1}),e.data("startvideonow")&&(L.play(),-1!=(_=t(e.data("videostartat")))&&L.setCurrentTime(_)),e.data("videolistenerexist",1)}else{var _=t(e.data("videostartat"));switch(s.videotype){case"youtube":d&&(s.player.playVideo(),-1!=_&&s.player.seekTo());break;case"vimeo":d&&((L=e.data("vimeoplayer")).play(),-1!=_&&L.seekTo(_))}}},l=function(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()},u=function(){try{if(void 0!==window.fullScreen)return window.fullScreen;var e=5;return jQuery.browser.webkit&&/Apple Computer/.test(navigator.vendor)&&(e=42),screen.width==window.innerWidth&&Math.abs(screen.height-window.innerHeight)<e}catch(e){}},p=function(e,o,n){if(i&&1==e.data("disablevideoonmobile"))return!1;var s=e.data(),p="html5"==s.audio?"audio":"video",g=e.find(p),m=g[0],y=g.parent(),f=s.videoloop,h="loopandnoslidestop"!=f;if(f="loop"==f||"loopandnoslidestop"==f,y.data("metaloaded",1),1!=e.data("bgvideo")||"none"!==s.videoloop&&!1!==s.videoloop||(h=!1),void 0==g.attr("control")&&(0!=e.find(".tp-video-play-button").length||i||e.append('<div class="tp-video-play-button"><i class="revicon-right-dir"></i><span class="tp-revstop">&nbsp;</span></div>'),e.find("video, .tp-poster, .tp-video-play-button").click(function(){e.hasClass("videoisplaying")?m.pause():m.play()})),1==e.data("forcecover")||e.hasClass("fullscreenvideo")||1==e.data("bgvideo"))if(1==e.data("forcecover")||1==e.data("bgvideo")){y.addClass("fullcoveredvideo");var b=e.data("aspectratio");void 0!==b&&1!=b.split(":").length||e.data("aspectratio","16:9"),a.prepareCoveredVideo(o,e)}else y.addClass("fullscreenvideo");var w=e.find(".tp-vid-play-pause")[0],T=e.find(".tp-vid-mute")[0],k=e.find(".tp-vid-full-screen")[0],x=e.find(".tp-seek-bar")[0],V=e.find(".tp-volume-bar")[0];void 0!=w&&d(w,"click",function(){1==m.paused?m.play():m.pause()}),void 0!=T&&d(T,"click",function(){0==m.muted?(m.muted=!0,T.innerHTML="Unmute"):(m.muted=!1,T.innerHTML="Mute")}),void 0!=k&&k&&d(k,"click",function(){m.requestFullscreen?m.requestFullscreen():m.mozRequestFullScreen?m.mozRequestFullScreen():m.webkitRequestFullscreen&&m.webkitRequestFullscreen()}),void 0!=x&&(d(x,"change",function(){var e=m.duration*(x.value/100);m.currentTime=e}),d(x,"mousedown",function(){e.addClass("seekbardragged"),m.pause()}),d(x,"mouseup",function(){e.removeClass("seekbardragged"),m.play()})),d(m,"canplaythrough",function(){a.preLoadAudioDone(e,o,"canplaythrough")}),d(m,"canplay",function(){a.preLoadAudioDone(e,o,"canplay")}),d(m,"progress",function(){a.preLoadAudioDone(e,o,"progress")}),d(m,"timeupdate",function(){var a=100/m.duration*m.currentTime,i=t(e.data("videoendat")),d=m.currentTime;if(void 0!=x&&(x.value=a),0!=i&&-1!=i&&Math.abs(i-d)<=.3&&i>d&&1!=e.data("nextslidecalled"))if(f){m.play();var r=t(e.data("videostartat"));-1!=r&&(m.currentTime=r)}else 1==e.data("nextslideatend")&&(e.data("nextslideatend-triggered",1),e.data("nextslidecalled",1),o.just_called_nextslide_at_htmltimer=!0,o.c.revnext(),setTimeout(function(){o.just_called_nextslide_at_htmltimer=!1},1e3)),m.pause()}),void 0!=V&&d(V,"change",function(){m.volume=V.value}),d(m,"play",function(){e.data("nextslidecalled",0);var t=e.data("volume");t=void 0!=t&&"mute"!=t?parseFloat(t)/100:t,a.is_mobile()||a.isSafari11()||(!0===o.globalmute?m.muted=!0:m.muted=!1,t>1&&(t/=100),"mute"==t?m.muted=!0:void 0!=t&&(m.volume=t)),e.addClass("videoisplaying");var i="html5"==s.audio?"audio":"video";v(e,o),h&&"audio"!=i?(o.videoplaying=!0,o.c.trigger("stoptimer"),o.c.trigger("revolution.slide.onvideoplay",r(m,"html5",s))):(o.videoplaying=!1,"audio"!=i&&o.c.trigger("starttimer"),o.c.trigger("revolution.slide.onvideostop",r(m,"html5",s))),punchgs.TweenLite.to(e.find(".tp-videoposter"),.3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(e.find(i),.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut});var d=e.find(".tp-vid-play-pause")[0],n=e.find(".tp-vid-mute")[0];void 0!=d&&(d.innerHTML="Pause"),void 0!=n&&m.muted&&(n.innerHTML="Unmute"),a.toggleState(s.videotoggledby)}),d(m,"pause",function(t){var i="html5"==s.audio?"audio":"video";!u()&&e.find(".tp-videoposter").length>0&&"on"==e.data("showcoveronpause")&&!e.hasClass("seekbardragged")&&(punchgs.TweenLite.to(e.find(".tp-videoposter"),.3,{autoAlpha:1,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(e.find(i),.3,{autoAlpha:0,ease:punchgs.Power3.easeInOut})),e.removeClass("videoisplaying"),o.videoplaying=!1,c(e,o),"audio"!=i&&o.c.trigger("starttimer"),o.c.trigger("revolution.slide.onvideostop",r(m,"html5",e.data()));var d=e.find(".tp-vid-play-pause")[0];void 0!=d&&(d.innerHTML="Play"),void 0!=o.currentLayerVideoIsPlaying&&o.currentLayerVideoIsPlaying.attr("id")!=e.attr("id")||a.unToggleState(s.videotoggledby)}),d(m,"ended",function(){l(),c(e,o),o.videoplaying=!1,c(e,o),"audio"!=p&&o.c.trigger("starttimer"),o.c.trigger("revolution.slide.onvideostop",r(m,"html5",e.data())),!0===e.data("nextslideatend")&&m.currentTime>0&&(1==!o.just_called_nextslide_at_htmltimer&&(e.data("nextslideatend-triggered",1),o.c.revnext(),o.just_called_nextslide_at_htmltimer=!0),setTimeout(function(){o.just_called_nextslide_at_htmltimer=!1},1500)),e.removeClass("videoisplaying")})},v=function(e,t){void 0==t.playingvideos&&(t.playingvideos=new Array),e.data("stopallvideos")&&void 0!=t.playingvideos&&t.playingvideos.length>0&&(t.lastplayedvideos=jQuery.extend(!0,[],t.playingvideos),jQuery.each(t.playingvideos,function(e,i){a.stopVideo(i,t)})),t.playingvideos.push(e),t.currentLayerVideoIsPlaying=e},c=function(e,t){void 0!=t.playingvideos&&jQuery.inArray(e,t.playingvideos)>=0&&t.playingvideos.splice(jQuery.inArray(e,t.playingvideos),1)}}(jQuery);
//=include vendor/custom.js
// Commom Plugins
(function($) {

	'use strict';

	// Scroll to Top Button.
	if (typeof theme.PluginScrollToTop !== 'undefined') {
		theme.PluginScrollToTop.initialize();
	}

	// Tooltips
	if ($.isFunction($.fn['tooltip'])) {
		$('[data-tooltip]:not(.manual), [data-plugin-tooltip]:not(.manual)').tooltip();
	}

	// Popover
	if ($.isFunction($.fn['popover'])) {
		$(function() {
			$('[data-plugin-popover]:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.popover(opts);
			});
		});
	}

	// Validations
	if (typeof theme.PluginValidation !== 'undefined') {
		theme.PluginValidation.initialize();
	}

	// Match Height
	if ($.isFunction($.fn['matchHeight'])) {

		$('.match-height').matchHeight();

		// Featured Boxes
		$('.featured-boxes .featured-box').matchHeight();

		// Featured Box Full
		$('.featured-box-full').matchHeight();

	}

}).apply(this, [jQuery]);

// Animate
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginAnimate'])) {

		$(document).ready(function(){
			$(function() {

				$('[data-appear-animation]').each(function() {
					var $this = $(this),
						opts;

					var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
					if (pluginOptions)
						opts = pluginOptions;

					$this.themePluginAnimate(opts);
				});

			});
		});

	}

}).apply(this, [jQuery]);

// Carousel
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginCarousel'])) {

		$(function() {
			$('[data-plugin-carousel]:not(.manual), .owl-carousel:not(.manual):not(.owl)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginCarousel(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Chart.Circular
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginChartCircular'])) {

		$(function() {
			$('[data-plugin-chart-circular]:not(.manual), .circular-bar-chart:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginChartCircular(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Counter
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginCounter'])) {

		$(function() {
			$('[data-plugin-counter]:not(.manual), .counters [data-to]').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginCounter(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Double Carousel
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginDoubleCarousel'])) {

		$(function() {
			$('[data-plugin-double-carousel]:not(.manual), .double-carousel:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginDoubleCarousel(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Float Element
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginFloatElement'])) {

		$(function() {
			$('[data-plugin-float-element]:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptionsSemicolon($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginFloatElement(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Animated Icon
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginIcon'])) {

		$(document).ready(function(){
			$(function() {

				$('[data-icon]').each(function() {
					var $this = $(this),
						opts;

					var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
					if (pluginOptions)
						opts = pluginOptions;

					$this.themePluginIcon(opts);
				});
				
			});
		});
	}

}).apply(this, [jQuery]);

// Image Background
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginImageBackground'])) {

		$(function() {
			$('[data-plugin-image-background]:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginImageBackground(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Lazy Load
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginLazyLoad'])) {

		$(function() {
			$('[data-plugin-lazyload]:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginLazyLoad(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Lightbox
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginLightbox'])) {

		$(function() {
			$('[data-plugin-lightbox]:not(.manual), .lightbox:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginLightbox(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Masonry
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginMasonry'])) {

		$(function() {
			$('[data-plugin-masonry]:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginMasonry(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Match Height
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginMatchHeight'])) {

		$(function() {
			$('[data-plugin-match-height]:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginMatchHeight(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Parallax
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginParallax'])) {

		$(function() {
			$('[data-plugin-parallax]:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginParallax(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Progress Bar
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginProgressBar'])) {

		$(function() {
			$('[data-plugin-progress-bar]:not(.manual), [data-appear-progress-animation]').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginProgressBar(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Rmove Min Height After Load
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginRemoveMinHeight'])) {

		$(function() {
			$('[data-plugin-remove-min-height]:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginRemoveMinHeight(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Revolution Slider
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginRevolutionSlider'])) {

		$(function() {
			$('[data-plugin-revolution-slider]:not(.manual), .slider-container .slider:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginRevolutionSlider(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Counter
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginSliderRange'])) {

		$(function() {
			$('[data-plugin-slider-range]:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginSliderRange(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Sort
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginSort'])) {

		$(function() {
			$('[data-plugin-sort]:not(.manual), .sort-source:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginSort(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Steps
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginSteps'])) {

		$(function() {
			$('[data-plugin-steps]:not(.manual), .steps:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginSteps(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Sticky
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginSticky'])) {

		$(function() {
			$('[data-plugin-sticky]:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginSticky(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Toggle
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginToggle'])) {

		$(function() {
			$('[data-plugin-toggle]:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginToggle(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Tweets
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginTweets'])) {

		$(function() {
			$('[data-plugin-tweets]:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginTweets(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Video Background
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginVideoBackground'])) {

		$(function() {
			$('[data-plugin-video-background]:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginVideoBackground(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Commom Partials
(function($) {

	'use strict';

	// Sticky Header
	if (typeof theme.StickyHeader !== 'undefined') {
		theme.StickyHeader.initialize();
	}

	// Sticky Secondary Header
	if (typeof theme.StickySecondaryHeader !== 'undefined') {
		theme.StickySecondaryHeader.initialize();
	}

	// Nav Menu
	if (typeof theme.Nav !== 'undefined') {
		theme.Nav.initialize();
	}

	// Search
	if (typeof theme.Search !== 'undefined') {
		theme.Search.initialize();
	}

	// Newsletter
	if (typeof theme.Newsletter !== 'undefined') {
		theme.Newsletter.initialize();
	}

	// Account
	if (typeof theme.Account !== 'undefined') {
		theme.Account.initialize();
	}

}).apply(this, [jQuery]);
/*
Name: 			Portfolio - Examples
Written by: 	Okler Themes - (http://www.okler.net)
Theme Version:	1.0.0
*/
(function($) {

	'use strict';

	/*
	Load More
	*/
	var portfolioLoadMore = {

		pages: 0,
		currentPage: 1,
		$wrapper: $('#portfolioLoadMoreWrapper'),
		$btn: $('#portfolioLoadMore'),
		$loader: $('#portfolioLoadMoreLoader'),

		build: function() {

			var self = this

			self.pages = self.$wrapper.data('total-pages');

			if(self.pages <= 1) {

				self.$btn.remove();
				return;

			} else {

				self.$btn.on('click', function() {
					self.loadMore();
				});

				// Infinite Scroll
				if(self.$btn.hasClass('btn-portfolio-infinite-scroll')) {
					self.$btn.appear(function() {
						self.$btn.trigger('click');
					}, {
						data: undefined,
						one: false,
						accX: 0,
						accY: 0
					});
				}

			}

		},
		loadMore: function() {

			var self = this,
				ajax_url;

			// Set Height For Loader
			self.$loader.css({
				height: self.$btn.outerHeight(true)
			});

			self.$btn.hide();
			self.$loader.show();

			ajax_url = 'ajax/portfolio-ajax-load-more-' + (parseInt(self.currentPage)+1) + '.html';

			// Change ajax url if attribute [data-ajax-url] exists at wrapper
			if( self.$wrapper.is('[data-ajax-url]') ) {
				var s = self.$wrapper.data('ajax-url');
				ajax_url = s.substring(0, s.lastIndexOf("."))+ '-' + (parseInt(self.currentPage)+1) + s.substring(s.lastIndexOf("."));
			}

			// Ajax
			$.ajax({
				url: ajax_url,
				complete: function(data) {

					var $items = $(data.responseText);

					setTimeout(function() {

						self.$wrapper.append($items)

						self.$wrapper.isotope('appended', $items);

						self.currentPage++;

						if(self.currentPage < self.pages) {
							self.$btn.show().blur();
						} else {
							self.$btn.remove();
						}

						// Carousel
						$(function() {
							$('[data-plugin-carousel]:not(.manual), .owl-carousel:not(.manual)').each(function() {
								var $this = $(this),
									opts;

								var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
								if (pluginOptions)
									opts = pluginOptions;

								$this.themePluginCarousel(opts);
							});
						});

						// Hover 3d
						$(function() {
							if ($.isFunction($.fn['hover3d'])) {

								$(function() {
									$('.hover-effect-3d').each(function() {
										var $this = $(this);

										$this.hover3d({
											selector: ".image-frame"
										});
									});
								});

							}
						});

						self.$loader.hide();

					}, 1000);

				}
			});

		}

	}

	if($('#portfolioLoadMoreWrapper').get(0)) {
		portfolioLoadMore.build();
	}

	/*
	Pagination
	*/
	var portfolioPagination = {

		pages: 0,
		$wrapper: $('#portfolioPaginationWrapper'),
		$filter: $('#portfolioPaginationFilter'),
		$pager: $('#portfolioPagination'),

		init: function() {

			var self = this;

			self.$filter.on('filtered', function(event, laidOutItems) {
				self.build();
				self.$filter.find('.active').trigger('click');
			});

		},

		calcPages: function() {

			var self = this,
				filter = self.$wrapper.attr('data-filter'),
				itemsPerPage = parseInt(self.$wrapper.attr('data-items-per-page')),
				$activeItems = self.$wrapper.find(filter + '.isotope-item');

			self.$wrapper.find('.isotope-item').removeAttr('data-page-rel');

			$activeItems.each(function(i) {
				var itemPage = Math.ceil((i+1)/itemsPerPage);

				$(this).attr('data-page-rel', ((itemPage == 0) ? 1 : itemPage));

				if (itemPage > 1) {
					$(this).hide();
				}
			});

			self.$wrapper.isotope('layout');

			return Math.ceil($activeItems.length/itemsPerPage);
		},

		build: function() {

			var self = this;

			self.pages = self.calcPages();

			self.$wrapper.removeAttr('data-current-page');

			self.$pager.empty().unbind();

			if(self.pages <= 1) {

				return;

			} else {

				self.$wrapper.attr('data-current-page', 1);

				self.$pager.bootpag({
					total: self.pages,
					page: 1
				}).on('page', function(event, num) {
					self.$wrapper.attr('data-current-page', num);
					self.$filter.find('.active').trigger('click');
				});

			}

			self.$filter.find('.active').trigger('click');

			self.$pager.find('li').addClass('page-item');
			self.$pager.find('a').addClass('page-link');

		}

	}

	if($('#portfolioPagination').get(0)) {
		portfolioPagination.init();
	}

	/*
	Combination Filters
	*/
	if($('#combinationFilters').get(0)) {

		$(window).on('load', function() {

			setTimeout(function() {

				var $grid = $('.portfolio-list').isotope({
					itemSelector: '.isotope-item',
					layoutMode: 'masonry',
					filter: '*',
					hiddenStyle: {
						opacity: 0
					},
					visibleStyle: {
						opacity: 1
					},
					stagger: 30,
					isOriginLeft: ($('html').attr('dir') == 'rtl' ? false : true)
				});

				var filters = {},
					$loader = $('.sort-destination-loader');

				$('.filters').on('click', 'a', function(e) {
					
					e.preventDefault();
					
					var $this = $(this);

					var $buttonGroup = $this.parents('.portfolio-filter-group');
					var filterGroup = $buttonGroup.attr('data-filter-group');
					
					filters[filterGroup] = $this.parent().attr('data-option-value');
					
					var filterValue = concatValues(filters);
					
					$grid.isotope({
						filter: filterValue
					});
				});

				$('.portfolio-filter-group').each(function(i, buttonGroup) {
					var $buttonGroup = $(buttonGroup);
					$buttonGroup.on('click', 'a', function() {
						$buttonGroup.find('.active').removeClass('active');
						$(this).addClass('active');
					});
				});

				var concatValues = function(obj) {
					var value = '';
					for (var prop in obj) {
						value += obj[prop];
					}
					return value;
				}

				$(window).on('resize', function() {
					setTimeout(function() {
						$grid.isotope('layout');
					}, 300);
				});

				if ($loader) {
					$loader.removeClass('sort-destination-loader-showing');

					setTimeout(function() {
						$loader.addClass('sort-destination-loader-loaded');
					}, 500);
				}

			}, 1000);

		});

	}

	/*
	Timeline Filter
	*/
	if( $('#timelineFilter').get(0) ) {

		var timelineWithFilter = {
			$timelineBody: $('#timelineFilterContent').find('.timeline-body'),
			$filter: $('#timelineFilter'),

			init: function() {
				var self = this;

				self.build();
			},
			build: function() {
				var self = this,
					$timelineBox = $('#timelineFilterContent').find('.timeline-box');

				// First Load
				self.organizeBoxes( $timelineBox );

				// Run Filter
				self.$filter.find('li > a').on('click', function(){
					var category = $(this).data('filter-category'),
						timelineBox = $('#timelineFilterContent').find('.timeline-box');

					// Set active class
					self.$filter.find('li > a').removeClass('active');
					$(this).addClass('active');

					// Run Filter
					self.$timelineBody.fadeOut('fast', function(){
						
						timelineBox.hide();

						if( category == '.all' ) {
							category = timelineBox;
						}

						self.organizeBoxes(category, timelineBox);

						self.$timelineBody.fadeIn('fast');
					});

					return false;
				});
			},
			organizeBoxes: function(category, timelineBox) {
				var self = this,
					flag = false;

				if( timelineBox ) {
					timelineBox.hide();
				}

				$(category).each(function(){
					if( !flag ) {
						$(this).removeClass('right').addClass('left');
						flag = true;
					} else {
						$(this).removeClass('left').addClass('right');
						flag = false;
					}

					$(this).show();
				});
			}
		}

		timelineWithFilter.init();

	}

	/*
	Timeline - Load More
	*/
	var timelineLoadMore = {

		pages: 0,
		currentPage: 1,
		$wrapper: $('#timelineLoadMoreWrapper'),
		$btn: $('#timelineLoadMore'),
		$loader: $('#timelineLoadMoreLoader'),

		build: function() {

			var self = this

			self.pages = self.$wrapper.data('total-pages');

			if(self.pages <= 1) {

				self.$btn.remove();
				return;

			} else {

				self.$btn.on('click', function() {
					self.loadMore();
				});

				// Infinite Scroll
				if(self.$btn.hasClass('btn-portfolio-infinite-scroll')) {
					self.$btn.appear(function() {
						self.$btn.trigger('click');
					}, {
						data: undefined,
						one: false,
						accX: 0,
						accY: 0
					});
				}

			}

		},
		loadMore: function() {

			var self = this;

			// Set Height For Loader
			self.$loader.css({
				height: self.$btn.outerHeight(true)
			});

			self.$btn.hide();
			self.$loader.show();

			// Ajax
			$.ajax({
				url: self.$wrapper.data('ajax-path') + (parseInt(self.currentPage)+1) + '.html',
				complete: function(data) {

					var $items = $(data.responseText);

					setTimeout(function() {

						self.$wrapper.append($items)
						self.currentPage++;

						if(self.currentPage < self.pages) {
							self.$btn.show().blur();
						} else {
							self.$btn.remove();
						}

						// Carousel
						$(function() {
							$('[data-plugin-carousel]:not(.manual), .owl-carousel:not(.manual)').each(function() {
								var $this = $(this),
									opts;

								var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
								if (pluginOptions)
									opts = pluginOptions;

								$this.themePluginCarousel(opts);
							});
						});

						// Hover 3d
						$(function() {
							if ($.isFunction($.fn['hover3d'])) {

								$(function() {
									$('.hover-effect-3d').each(function() {
										var $this = $(this);

										$this.hover3d({
											selector: ".image-frame"
										});
									});
								});

							}
						});

						// Timeline Filter
						if( $('#timelineFilter').get(0) ) {
							var category = $('#timelineFilter > li > a.active').data('filter-category'),
								timelineBox = $('#timelineFilterContent').find('.timeline-box');

							if( category == '.all' ) {
								category = timelineBox;
							}

							timelineWithFilter.organizeBoxes( category, timelineBox );
						}

						self.$loader.hide();

					}, 1000);

				}
			});

		}

	}

	if($('#timelineLoadMoreWrapper').get(0)) {
		timelineLoadMore.build();
	}

	/*
	Ajax on Page
	*/
	var ajaxOnPage = {

		pages: [],
		currentPage: 0,
		total: 0,
		$ajaxBox: $('#porfolioAjaxBox'),
		$ajaxBoxContent: $('#porfolioAjaxBoxContent'),

		build: function() {

			var self = this;

			$('a[data-ajax-on-page]').each(function() {
				self.add($(this));
			});

			$(document).on('mousedown', 'a[data-ajax-on-page]', function (ev) {
				if (ev.which == 2) {
					ev.preventDefault();
					return false;
				}
			});

			// Key Press
			$(document.documentElement).on('keyup', function(e) {

				if( !$('.mfp-wrap').get(0) ) {

					// Next
					if (e.keyCode == 39) {
						self.next();
					}

					// Prev
					if (e.keyCode == 37) {
						self.prev();
					}

				}

			});

		},

		add: function($el) {

			var self = this,
				href = $el.attr('data-href');

			self.pages.push(href);
			self.total++;

			$el.on('click', function(e) {
				e.preventDefault();
				self.show(self.pages.indexOf(href));
			});

		},

		events: function() {

			var self = this;

			// Close
			$('a[data-ajax-portfolio-close]').on('click', function(e) {
				e.preventDefault();
				self.close();
			});

			if (self.total <= 1) {

				$('a[data-ajax-portfolio-prev], a[data-ajax-portfolio-next]').remove();

			} else {

				// Prev
				$('a[data-ajax-portfolio-prev]').on('click', function(e) {
					e.preventDefault();
					self.prev();
				});

				// Next
				$('a[data-ajax-portfolio-next]').on('click', function(e) {
					e.preventDefault();
					self.next();
				});

			}

			// Carousel
			if ($.isFunction($.fn['themePluginCarousel'])) {

				$(function() {
					$('[data-plugin-carousel]:not(.manual), .owl-carousel:not(.manual)').each(function() {
						var $this = $(this),
							opts;

						var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
						if (pluginOptions)
							opts = pluginOptions;

						$this.themePluginCarousel(opts);
					});
				});

			}

		},

		close: function() {

			var self = this;

			self.$ajaxBoxContent.empty();
			self.$ajaxBox.removeClass('ajax-box-loading').addClass('ajax-box-init');

		},

		next: function() {

			var self = this;

			if(self.currentPage + 1 < self.total) {
				self.show(self.currentPage + 1);
			} else {
				self.show(0);
			}
		},

		prev: function() {

			var self = this;

			if((self.currentPage - 1) >= 0) {
				self.show(self.currentPage - 1);
			} else {
				self.show(self.total - 1);
			}
		},

		show: function(i) {

			var self = this;

			self.$ajaxBoxContent.empty();
			self.$ajaxBox.removeClass('ajax-box-init').addClass('ajax-box-loading');

			$('html, body').animate({
				scrollTop: self.$ajaxBox.offset().top - 100
			}, 300, 'easeOutQuad');

			self.currentPage = i;

			if (i < 0 || i > (self.total-1)) {
				self.close();
				return false;
			}

			// Ajax
			$.ajax({
				url: self.pages[i],
				complete: function(data) {
				
					setTimeout(function() {

						self.$ajaxBoxContent.html(data.responseText);
						self.$ajaxBox.removeClass('ajax-box-loading');

						self.events();

					}, 1000);

				}
			});

		}

	}

	if($('#porfolioAjaxBox').get(0)) {
		ajaxOnPage.build();
	}

	/*
	Ajax on Modal
	*/
	$('a[data-ajax-on-modal]').magnificPopup({
		type: 'ajax',
		tLoading: '<div class="bounce-loader"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>',
		mainClass: 'portfolio-ajax-modal',
		gallery: {
			enabled: true
		},
		callbacks: {
			ajaxContentAdded: function() {

				// Wrapper
				var $wrapper = $('.portfolio-ajax-modal');

				// Close
				$wrapper.find('a[data-ajax-portfolio-close]').on('click', function(e) {
					e.preventDefault();
					$.magnificPopup.close();
				});

				// Remove Next and Close
				if($('a[data-ajax-on-modal]').length <= 1) {
					
					$wrapper.find('a[data-ajax-portfolio-prev], a[data-ajax-portfolio-next]').remove();

				} else {

					// Prev
					$wrapper.find('a[data-ajax-portfolio-prev]').on('click', function(e) {
						e.preventDefault();
						$('.mfp-arrow-left').trigger('click');
						return false;
					});

					// Next
					$wrapper.find('a[data-ajax-portfolio-next]').on('click', function(e) {
						e.preventDefault();
						$('.mfp-arrow-right').trigger('click');
						return false;
					});

				}

				// Carousel
				$(function() {
					$('[data-plugin-carousel]:not(.manual), .owl-carousel:not(.manual)').each(function() {
						var $this = $(this),
							opts;

						var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
						if (pluginOptions)
							opts = pluginOptions;

						$this.themePluginCarousel(opts);
					});
				});

			}
		}
	});

}).apply(this, [jQuery]);

$(document).ready(function () {

    var url = window.location.href;
	 
 	$('.dropdown').each(function(){

	  	var href = $(this).find('a').attr('href');
	  	if(url == href){
	   		$(this).addClass('active');
	  	}

	}); 


	$('.wpcf7-form').addClass('contact-form form-style-2');
	$('.wpcf7-form-control').addClass('form-control'); 
	 
});