(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{376:function(t,n,o){"use strict";var e=o(2),r=o(382);e({target:"String",proto:!0,forced:o(383)("link")},{link:function(t){return r(this,"a","href",t)}})},379:function(t,n,o){var content=o(389);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(158).default)("cf37291c",content,!0,{sourceMap:!1})},382:function(t,n,o){var e=o(5),r=o(25),c=o(14),l=/"/g,f=e("".replace);t.exports=function(t,n,o,e){var v=c(r(t)),d="<"+n;return""!==o&&(d+=" "+o+'="'+f(c(e),l,"&quot;")+'"'),d+">"+v+"</"+n+">"}},383:function(t,n,o){var e=o(3);t.exports=function(t){return e((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}))}},388:function(t,n,o){"use strict";o(379)},389:function(t,n,o){var e=o(157)(!1);e.push([t.i,'.button{width:100%;height:48px;padding:11px 24px;margin:10px 0;border-radius:5px;grid-gap:10px;gap:10px;border:none;display:flex;justify-content:center;align-items:center;flex-wrap:wrap;background-color:#000;color:#fff;transition:transform .3s ease,background-color .3s ease,color .3s ease}.button:hover{background-color:#9600b5;transform:scale(1.15);cursor:pointer}.button__text{font-size:16px;font-weight:400;font-family:sans-serif;font-feature-settings:"kern";font-kerning:normal;line-height:26px}.button__icon{height:20px}@media(min-width:768px){.button{width:142px}}',""]),t.exports=e},400:function(t,n,o){"use strict";o.r(n);o(376);var e=o(0),r=Object(e.c)({props:{component:{type:Object}},setup:function(t){var n=Object(e.a)((function(){return t.component.getParameters()}));return{link:Object(e.a)((function(){var t;return(null===(t=n.value)||void 0===t?void 0:t.link)||"#"})),alt:Object(e.a)((function(){var t;return(null===(t=n.value)||void 0===t?void 0:t.alt)||"Click Button"})),text:Object(e.a)((function(){var t;return(null===(t=n.value)||void 0===t?void 0:t.text)||"Click Me"})),icon:Object(e.a)((function(){var t;return(null===(t=n.value)||void 0===t?void 0:t.icon)||""})),iconalt:Object(e.a)((function(){var t;return(null===(t=n.value)||void 0===t?void 0:t.iconalt)||""}))}}}),c=(o(388),o(50)),component=Object(c.a)(r,(function(){var t=this,n=t._self._c;t._self._setupProxy;return n("button",{staticClass:"button",attrs:{href:t.link,alt:t.alt}},[t.icon?n("img",{staticClass:"button__icon",attrs:{src:t.icon,alt:t.iconalt}}):t._e(),t._v(" "),n("span",{staticClass:"button__text"},[t._v(" "+t._s(t.text)+" ")])])}),[],!1,null,null,null);n.default=component.exports}}]);