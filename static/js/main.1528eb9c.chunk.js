(this.webpackJsonpmolkky=this.webpackJsonpmolkky||[]).push([[0],{102:function(e){e.exports=JSON.parse('{"translation":{"start game":"Get started","home":"Home","language":"Language","settings":"Settings","dark-mode":"Dark mode","go-back":"Go back to homepage","not-found":"Looks like you missed your shot just like you always do in m\xf6lkky. It\'s fine, just go back and we\'ll keep this a secret.","cancel-game":"End the game","reset-game":"Reset the score","start-game":"Start the game"}}')},103:function(e){e.exports=JSON.parse('{"translation":{"start game":"Commencer","home":"Accueil","language":"Langue","settings":"Param\xe8tres","dark-mode":"Mode sombre","go-back":"Retour \xe0 la page d\'accueil","not-found":"On dirait que vous avez rat\xe9 votre coup, comme vous le fa\xeetes toujours \xe0 m\xf6lkky. C\'est correct, revenez \xe0 l\'arri\xe8re et nous garderons \xe7a secret.","cancel-game":"Terminer le jeu","reset-game":"R\xe9initialiser le score","start-game":"Commencer le jeu"}}')},137:function(e,n,t){},176:function(e,n,t){"use strict";t.r(n);var c=t(5),r=t(100),a=t(101),i=t(102),o=t(103),s=t(42),j=t(57),u={en:i,fr:o};s.a.use(a.a).use(r.a).use(j.e).init({resources:u,lng:"en",fallbackLng:"en",keySeparator:!1,interpolation:{escapeValue:!1}});s.a;var l=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var d=t(53),O=t(126),f=t(21),h=(t(137),t(44)),m=t(18),g=t(0),x=t.n(g),p=t(8),v=t(37),k="darkModeOn",y=t(13),w=t(118),M=t.n(w),S=t(119),$=t.n(S),C=t(75),L=t.n(C),W=t(120),I=t.n(W),z="game",E=t(14),N=t(117),T=t.n(N),P=t(114),D=t.n(P),U=t(116),F=t.n(U);function G(){var e=Object(y.a)(["\n      justify-content: center;\n      align-items: center;\n    "]);return G=function(){return e},e}function A(){var e=Object(y.a)(["\n  width: 100vw;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  padding-top: 20px;\n  padding-bottom: 20px;\n\n  ","\n"]);return A=function(){return e},e}var J=function(e){return Object(c.jsx)(R,Object(d.a)({},e))},R=Object(E.b)(p.e)(A(),(function(e){return e.$centered&&Object(E.a)(G())})),B=t(115),q=t.n(B),H=t(207);function V(){var e=Object(y.a)(["\n      button:last-child {\n        margin-top: 20px;\n      }\n    "]);return V=function(){return e},e}function K(){var e=Object(y.a)(["\n      display: flex;\n      justify-content: center;\n\n      button:last-child {\n        margin-left: 20px;\n      }\n    "]);return K=function(){return e},e}function Q(){var e=Object(y.a)(["\n  ","\n\n  ","\n"]);return Q=function(){return e},e}function X(){var e=Object(y.a)(["\n      flex: 1;\n    "]);return X=function(){return e},e}function Y(){var e=Object(y.a)(["\n  ","\n"]);return Y=function(){return e},e}var Z=function(e){var n=e.game,t=e.isMobile,r=e.resetGame,a=Object(H.a)(),i=Object(f.a)(a,1)[0];return Object(c.jsxs)(J,{$centered:!t,children:[Object(c.jsx)(_,{$isMobile:t,children:"Game"}),Object(c.jsxs)(ee,{$isMobile:t,children:[Object(c.jsx)(p.c,{color:"primary",fullWidth:t,onClick:r,size:t?"large":"medium",startIcon:Object(c.jsx)(D.a,{}),children:i("cancel-game")}),n.started?Object(c.jsx)(p.c,{color:"secondary",fullWidth:t,onClick:r,size:t?"large":"medium",startIcon:Object(c.jsx)(q.a,{}),children:i("reset-game")}):Object(c.jsx)(p.c,{color:"secondary",fullWidth:t,onClick:r,size:t?"large":"medium",startIcon:Object(c.jsx)(F.a,{}),children:i("start-game")})]})]})},_=E.b.div(Y(),(function(e){return e.$isMobile&&Object(E.a)(X())})),ee=E.b.div(Q(),(function(e){return!e.$isMobile&&Object(E.a)(K())}),(function(e){return e.$isMobile&&Object(E.a)(V())}));function ne(){var e=Object(y.a)(["\n      flex: 1;\n    "]);return ne=function(){return e},e}function te(){var e=Object(y.a)(["\n  ","\n"]);return te=function(){return e},e}var ce=E.b.div(te(),(function(e){return e.$isMobile&&Object(E.a)(ne())})),re={key:"home",component:function(){var e=Object(g.useState)(),n=Object(f.a)(e,2),t=n[0],r=n[1],a=Object(g.useState)(!0),i=Object(f.a)(a,2),o=i[0],s=i[1],j=Object(H.a)(),u=Object(f.a)(j,1)[0],l=Object(p.t)(),b=Object(p.s)(l.breakpoints.down("sm"));Object(g.useEffect)((function(){Object(v.b)(z).then((function(e){e&&r(e),s(!1)}))}),[r]);return o?null:t?Object(c.jsx)(Z,{game:t,resetGame:function(){Object(v.a)(z),r(void 0)},isMobile:b}):Object(c.jsxs)(J,{$centered:!b,children:[Object(c.jsx)(ce,{$isMobile:b,children:"Home"}),Object(c.jsx)("div",{children:Object(c.jsx)(p.c,{size:b?"large":"medium",color:"secondary",fullWidth:b,onClick:function(){var e={started:!1,players:[]};(function(e){return Object(v.c)(z,e)})(e).then((function(){return r(e)}))},endIcon:Object(c.jsx)(T.a,{}),children:u("start game")})})]})},path:"/",exact:!0},ae={key:"settings",path:"/settings",exact:!0};function ie(){var e=Object(y.a)(["\n  padding-bottom: env(safe-area-inset-bottom, 0) !important;\n  max-width: inherit !important;\n"]);return ie=function(){return e},e}function oe(){var e=Object(y.a)(["\n  position: static;\n  width: 100vw;\n  height: calc(env(safe-area-inset-bottom, -60px) + 60px);\n"]);return oe=function(){return e},e}var se=Object(E.b)(p.a)(oe()),je=Object(E.b)(p.b)(ie()),ue=function(){var e=Object(m.f)(),n=Object(m.g)(),t=Object(g.useState)(n.pathname),r=Object(f.a)(t,2),a=r[0],i=r[1],o=Object(H.a)(),s=Object(f.a)(o,1)[0];return Object(c.jsx)(p.h,{mdUp:!0,children:Object(c.jsxs)(se,{component:"footer",value:a,onChange:function(n,t){i(t),e.push(t)},children:[Object(c.jsx)(je,{value:re.path,label:s("home"),icon:re.path===a?Object(c.jsx)(M.a,{}):Object(c.jsx)($.a,{})}),Object(c.jsx)(je,{value:ae.path,label:s("settings"),icon:ae.path===a?Object(c.jsx)(L.a,{}):Object(c.jsx)(I.a,{})})]})})};function le(){var e=Object(y.a)(["\n  text-decoration: none;\n  color: white !important;\n"]);return le=function(){return e},e}var be=function(e){return Object(c.jsx)(de,Object(d.a)({},e))},de=Object(E.b)(h.b)(le());function Oe(){var e=Object(y.a)(["\n  display: flex;\n  flex: 1;\n\n  a {\n    display: flex;\n  }\n"]);return Oe=function(){return e},e}function fe(){var e=Object(y.a)(["\n      padding-top: env(safe-area-inset-top, 0);\n      box-shadow: none !important;\n\n      img {\n        height: 35px;\n      }\n    "]);return fe=function(){return e},e}function he(){var e=Object(y.a)(["\n  background: ",";\n\n  ","\n"]);return he=function(){return e},e}function me(){var e=Object(y.a)(["\n  margin-right: 20px;\n"]);return me=function(){return e},e}var ge="molkky.svg",xe=function(){var e=Object(H.a)(),n=Object(f.a)(e,1)[0],t=Object(p.t)(),r=Object(p.s)(t.breakpoints.down("sm"));return Object(c.jsx)(ve,{position:"static",color:r?"transparent":"primary",$isMobile:!0,$primarycolor:t.palette.primary.main,$secondarycolor:t.palette.primary.light,children:Object(c.jsxs)(p.r,{children:[Object(c.jsxs)(ke,{children:[Object(c.jsx)(p.h,{mdUp:!0,children:Object(c.jsx)("img",{src:"".concat("/molkky","/").concat(ge),alt:n("home")})}),Object(c.jsx)(p.h,{smDown:!0,children:Object(c.jsx)(h.b,{to:"/",children:Object(c.jsx)("img",{src:"".concat("/molkky","/").concat(ge),alt:n("home")})})})]}),Object(c.jsx)(p.h,{smDown:!0,children:Object(c.jsx)(pe,{to:"/settings",children:Object(c.jsx)(p.c,{startIcon:Object(c.jsx)(L.a,{}),color:"inherit",variant:"text",children:n("settings")})})})]})})},pe=Object(E.b)(be)(me()),ve=Object(E.b)(p.o)(he(),(function(e){return"linear-gradient(45deg, ".concat(e.$primarycolor," 0%, ").concat(e.$secondarycolor," 100%)")}),(function(e){return e.$isMobile&&Object(E.a)(fe())})),ke=E.b.div(Oe()),ye=t(122),we=t.n(ye),Me=t(123),Se=t.n(Me),$e=t(124),Ce=t.n($e),Le=t(121),We=t.n(Le),Ie="language";function ze(){var e=Object(y.a)(["\n  width: 100%;\n\n  .list-item {\n    padding-left: 73px;\n  }\n"]);return ze=function(){return e},e}var Ee=Object(E.b)(p.i)(ze()),Ne=function(e){var n=e.darkModeOn,t=e.toggleDarkModeOn,r=Object(g.useState)(!1),a=Object(f.a)(r,2),i=a[0],o=a[1],j=Object(H.a)(),u=Object(f.a)(j,1)[0],l=function(e){var n=e.currentTarget.id;s.a.changeLanguage(n),function(e){Object(v.c)(Ie,e)}(n),o(!1)};return Object(c.jsx)(J,{children:Object(c.jsx)(p.g,{container:!0,justify:"center",alignItems:"center",children:Object(c.jsx)(p.g,{item:!0,xs:12,sm:12,md:6,children:Object(c.jsxs)(Ee,{subheader:Object(c.jsx)(p.n,{children:u("settings")}),children:[Object(c.jsxs)(p.j,{button:!0,onClick:function(){o(!i)},children:[Object(c.jsx)(p.k,{children:Object(c.jsx)(We.a,{})}),Object(c.jsx)(p.m,{primary:u("language")}),i?Object(c.jsx)(we.a,{}):Object(c.jsx)(Se.a,{})]}),Object(c.jsx)(p.d,{in:i,timeout:"auto",unmountOnExit:!0,children:Object(c.jsxs)(p.i,{disablePadding:!0,children:[Object(c.jsx)(p.j,{button:!0,className:"list-item",id:"en",onClick:l,children:Object(c.jsx)(p.m,{primary:"English"})}),Object(c.jsx)(p.j,{button:!0,className:"list-item",id:"fr",onClick:l,children:Object(c.jsx)(p.m,{primary:"Fran\xe7ais"})})]})}),Object(c.jsx)(p.f,{}),Object(c.jsxs)(p.j,{children:[Object(c.jsx)(p.k,{children:Object(c.jsx)(Ce.a,{})}),Object(c.jsx)(p.m,{primary:u("dark-mode")}),Object(c.jsx)(p.l,{children:Object(c.jsx)(p.p,{edge:"end",onChange:t,checked:n,inputProps:{"aria-labelledby":"switch-list-label-wifi"}})})]})]})})})})};function Te(){var e=Object(y.a)(["\n  text-align: center;\n\n  .text {\n    font-size: 1.25rem;\n    margin-bottom: 35px;\n  }\n\n  .title {\n    font-size: 10rem;\n    font-weight: 900;\n  }\n"]);return Te=function(){return e},e}var Pe=E.b.div(Te()),De=[re,{key:"home",component:function(){var e=Object(H.a)(),n=Object(f.a)(e,1)[0];return Object(c.jsx)(J,{children:Object(c.jsxs)(Pe,{children:[Object(c.jsx)("div",{className:"title",children:"404"}),Object(c.jsx)("div",{className:"text",children:n("not-found")}),Object(c.jsx)(be,{to:"/",children:Object(c.jsx)(p.c,{color:"secondary",children:n("go-back")})})]})})}}],Ue=function(){var e=Object(p.s)("(prefers-color-scheme: dark)"),n=Object(g.useState)(!0),t=Object(f.a)(n,2),r=t[0],a=t[1],i=Object(g.useState)(e),o=Object(f.a)(i,2),j=o[0],u=o[1];Object(g.useEffect)((function(){Object(v.b)(k).then((function(e){e&&e!==j&&u(e),Object(v.b)(Ie).then((function(e){s.a.language!==e&&s.a.changeLanguage(e),a(!1)}))}))}),[u,a]);var l=function(){u(!j),function(e){Object(v.c)(k,e)}(!j)};return r?null:Object(c.jsx)(p.q,{theme:j?"darkUnderTheLake":"underTheLake",children:Object(c.jsxs)(h.a,{children:[Object(c.jsx)(xe,{}),Object(c.jsxs)(m.c,{children:[Object(c.jsx)(m.a,{exact:!0,path:ae.path,render:function(){return Object(c.jsx)(Ne,{darkModeOn:j,toggleDarkModeOn:l})}}),De.map((function(e){var n=e.key,t=Object(O.a)(e,["key"]);return Object(c.jsx)(m.a,Object(d.a)({},t),n)}))]}),Object(c.jsx)(ue,{})]})})},Fe=t(15),Ge=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,208)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),c(e),r(e),a(e),i(e)}))};t.n(Fe).a.render(Object(c.jsx)(x.a.StrictMode,{children:Object(c.jsx)(Ue,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/molkky",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/molkky","/service-worker.js");l?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var c=t.headers.get("content-type");404===t.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):b(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):b(n,e)}))}}(),Ge()}},[[176,1,2]]]);
//# sourceMappingURL=main.1528eb9c.chunk.js.map