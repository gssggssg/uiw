(this.webpackJsonpuiw=this.webpackJsonpuiw||[]).push([[168],{833:function(t,e,n){!function(t){"use strict";t.defineMode("smalltalk",(function(t){var e=/[+\-\/\\*~<>=@%|&?!.,:;^]/,n=/true|false|nil|self|super|thisContext/,i=function(t,e){this.next=t,this.parent=e},a=function(t,e,n){this.name=t,this.context=e,this.eos=n},r=function(){this.context=new i(o,null),this.expectVariable=!0,this.indentation=0,this.userIndentationDelta=0};r.prototype.userIndent=function(e){this.userIndentationDelta=e>0?e/t.indentUnit-this.indentation:0};var o=function(t,r,o){var h=new a(null,r,!1),x=t.next();return'"'===x?h=s(t,new i(s,r)):"'"===x?h=u(t,new i(u,r)):"#"===x?"'"===t.peek()?(t.next(),h=c(t,new i(c,r))):t.eatWhile(/[^\s.{}\[\]()]/)?h.name="string-2":h.name="meta":"$"===x?("<"===t.next()&&(t.eatWhile(/[^\s>]/),t.next()),h.name="string-2"):"|"===x&&o.expectVariable?h.context=new i(l,r):/[\[\]{}()]/.test(x)?(h.name="bracket",h.eos=/[\[{(]/.test(x),"["===x?o.indentation++:"]"===x&&(o.indentation=Math.max(0,o.indentation-1))):e.test(x)?(t.eatWhile(e),h.name="operator",h.eos=";"!==x):/\d/.test(x)?(t.eatWhile(/[\w\d]/),h.name="number"):/[\w_]/.test(x)?(t.eatWhile(/[\w\d_]/),h.name=o.expectVariable?n.test(t.current())?"keyword":"variable":null):h.eos=o.expectVariable,h},s=function(t,e){return t.eatWhile(/[^"]/),new a("comment",t.eat('"')?e.parent:e,!0)},u=function(t,e){return t.eatWhile(/[^']/),new a("string",t.eat("'")?e.parent:e,!1)},c=function(t,e){return t.eatWhile(/[^']/),new a("string-2",t.eat("'")?e.parent:e,!1)},l=function(t,e){var n=new a(null,e,!1);return"|"===t.next()?(n.context=e.parent,n.eos=!0):(t.eatWhile(/[^|]/),n.name="variable"),n};return{startState:function(){return new r},token:function(t,e){if(e.userIndent(t.indentation()),t.eatSpace())return null;var n=e.context.next(t,e.context,e);return e.context=n.context,e.expectVariable=n.eos,n.name},blankLine:function(t){t.userIndent(0)},indent:function(e,n){var i=e.context.next===o&&n&&"]"===n.charAt(0)?-1:e.userIndentationDelta;return(e.indentation+i)*t.indentUnit},electricChars:"]"}})),t.defineMIME("text/x-stsrc",{name:"smalltalk"})}(n(102))}}]);