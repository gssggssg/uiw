(this.webpackJsonpuiw=this.webpackJsonpuiw||[]).push([[159],{823:function(t,e,n){!function(t){"use strict";t.defineMode("q",(function(t){var e,n=t.indentUnit,o=new RegExp("^("+["abs","acos","aj","aj0","all","and","any","asc","asin","asof","atan","attr","avg","avgs","bin","by","ceiling","cols","cor","cos","count","cov","cross","csv","cut","delete","deltas","desc","dev","differ","distinct","div","do","each","ej","enlist","eval","except","exec","exit","exp","fby","fills","first","fkeys","flip","floor","from","get","getenv","group","gtime","hclose","hcount","hdel","hopen","hsym","iasc","idesc","if","ij","in","insert","inter","inv","key","keys","last","like","list","lj","load","log","lower","lsq","ltime","ltrim","mavg","max","maxs","mcount","md5","mdev","med","meta","min","mins","mmax","mmin","mmu","mod","msum","neg","next","not","null","or","over","parse","peach","pj","plist","prd","prds","prev","prior","rand","rank","ratios","raze","read0","read1","reciprocal","reverse","rload","rotate","rsave","rtrim","save","scan","select","set","setenv","show","signum","sin","sqrt","ss","ssr","string","sublist","sum","sums","sv","system","tables","tan","til","trim","txf","type","uj","ungroup","union","update","upper","upsert","value","var","view","views","vs","wavg","where","where","while","within","wj","wj1","wsum","xasc","xbar","xcol","xcols","xdesc","xexp","xgroup","xkey","xlog","xprev","xrank"].join("|")+")$"),i=/[|/&^!+:\\\-*%$=~#;@><,?_\'\"\[\(\]\)\s{}]/;function r(t,n){var c=t.sol(),u=t.next();if(e=null,c){if("/"==u)return(n.tokenize=s)(t,n);if("\\"==u)return t.eol()||/\s/.test(t.peek())?(t.skipToEnd(),/^\\\s*$/.test(t.current())?(n.tokenize=a)(t):n.tokenize=r,"comment"):(n.tokenize=r,"builtin")}if(/\s/.test(u))return"/"==t.peek()?(t.skipToEnd(),"comment"):"whitespace";if('"'==u)return(n.tokenize=l)(t,n);if("`"==u)return t.eatWhile(/[A-Za-z\d_:\/.]/),"symbol";if("."==u&&/\d/.test(t.peek())||/\d/.test(u)){var d=null;return t.backUp(1),t.match(/^\d{4}\.\d{2}(m|\.\d{2}([DT](\d{2}(:\d{2}(:\d{2}(\.\d{1,9})?)?)?)?)?)/)||t.match(/^\d+D(\d{2}(:\d{2}(:\d{2}(\.\d{1,9})?)?)?)/)||t.match(/^\d{2}:\d{2}(:\d{2}(\.\d{1,9})?)?/)||t.match(/^\d+[ptuv]{1}/)?d="temporal":(t.match(/^0[NwW]{1}/)||t.match(/^0x[\da-fA-F]*/)||t.match(/^[01]+[b]{1}/)||t.match(/^\d+[chijn]{1}/)||t.match(/-?\d*(\.\d*)?(e[+\-]?\d+)?(e|f)?/))&&(d="number"),!d||(u=t.peek())&&!i.test(u)?(t.next(),"error"):d}return/[A-Za-z]|\./.test(u)?(t.eatWhile(/[A-Za-z._\d]/),o.test(t.current())?"keyword":"variable"):/[|/&^!+:\\\-*%$=~#;@><\.,?_\']/.test(u)?null:/[{}\(\[\]\)]/.test(u)?null:"error"}function s(t,e){return t.skipToEnd(),/\/\s*$/.test(t.current())?(e.tokenize=c)(t,e):e.tokenize=r,"comment"}function c(t,e){var n=t.sol()&&"\\"==t.peek();return t.skipToEnd(),n&&/^\\\s*$/.test(t.current())&&(e.tokenize=r),"comment"}function a(t){return t.skipToEnd(),"comment"}function l(t,e){for(var n,o=!1,i=!1;n=t.next();){if('"'==n&&!o){i=!0;break}o=!o&&"\\"==n}return i&&(e.tokenize=r),"string"}function u(t,e,n){t.context={prev:t.context,indent:t.indent,col:n,type:e}}function d(t){t.indent=t.context.indent,t.context=t.context.prev}return{startState:function(){return{tokenize:r,context:null,indent:0,col:0}},token:function(t,n){t.sol()&&(n.context&&null==n.context.align&&(n.context.align=!1),n.indent=t.indentation());var o=n.tokenize(t,n);if("comment"!=o&&n.context&&null==n.context.align&&"pattern"!=n.context.type&&(n.context.align=!0),"("==e)u(n,")",t.column());else if("["==e)u(n,"]",t.column());else if("{"==e)u(n,"}",t.column());else if(/[\]\}\)]/.test(e)){for(;n.context&&"pattern"==n.context.type;)d(n);n.context&&e==n.context.type&&d(n)}else"."==e&&n.context&&"pattern"==n.context.type?d(n):/atom|string|variable/.test(o)&&n.context&&(/[\}\]]/.test(n.context.type)?u(n,"pattern",t.column()):"pattern"!=n.context.type||n.context.align||(n.context.align=!0,n.context.col=t.column()));return o},indent:function(t,e){var o=e&&e.charAt(0),i=t.context;if(/[\]\}]/.test(o))for(;i&&"pattern"==i.type;)i=i.prev;var r=i&&o==i.type;return i?"pattern"==i.type?i.col:i.align?i.col+(r?0:1):i.indent+(r?0:n):0}}})),t.defineMIME("text/x-q","q")}(n(102))}}]);