(this["webpackJsonpfind-me"]=this["webpackJsonpfind-me"]||[]).push([[0],{37:function(n,e,t){},38:function(n,e,t){"use strict";t.r(e);var r,o,i,c,a,s,d,m,l=t(2),u=t.n(l),b=t(24),j=t.n(b),h=t(6),f=t(4),p=t(5),O=p.a.div(r||(r=Object(f.a)(['\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 18% 68% 1fr;\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  text-align: center;\n  align-items: center;\n  overflow: hidden;\n  height: 100vh;\n\n  grid-template-areas:\n    "a"\n    "b"\n    "c";\n  a {\n    grid-area: a;\n  }\n  b {\n    grid-area: b;\n    /* height: 1000px; */\n  }\n  c {\n    grid-area: c;\n  }\n']))),x=t(10),g=p.a.div(o||(o=Object(f.a)(["\n  position: absolute;\n"]))),v=p.a.ul(i||(i=Object(f.a)(["\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  top: ",";\n  left: ",";\n  z-index: 1;\n  padding: 0rem;\n  background-color: wheat;\n  max-width: fit-content;\n  margin: 0;\n  list-style: none;\n  li {\n    padding: 1rem;\n\n    background-color: var(--msOrange);\n    outline: 0.15rem solid var(--msBrown);\n    box-shadow: 0rem 0.4rem var(--msBrown);\n    text-shadow: 0rem 0.09rem var(--msRed);\n    margin-bottom: 0.4rem;\n    color: white;\n    :hover {\n      cursor: pointer;\n    }\n  }\n"])),(function(n){return n.yPos}),(function(n){return n.xPos})),w=t(1),y={pointer1:!1,pointer2:!1},k=function(n){var e=n.pos,t=n.setPointers,r=n.pointers,o=n.setPos,i=Object(l.useState)(y),c=Object(h.a)(i,1)[0];return Object(w.jsx)(v,{xPos:e.x+"px",yPos:e.y+"px",onClick:function(){return o((function(n){return Object(x.a)(Object(x.a)({},n),{},{showMenu:!1})}))},children:Object(w.jsxs)(g,{children:[Object(w.jsx)("li",{onClick:function(){c.pointer1||t((function(n){return Object(x.a)(Object(x.a)({},n),{},{pointer1:{x:e.x,y:e.y,showPointer:!0,name:"Pink Teddy"}})}))},children:r.pointer1.name}),Object(w.jsx)("li",{onClick:function(){c.pointer2||t((function(n){return Object(x.a)(Object(x.a)({},n),{},{pointer2:{x:e.x,y:e.y,showPointer:!0,name:"Wine Bottle"}})}))},children:r.pointer2.name})]})})},C=t.p+"static/media/background.cc7e45cc.png",B=p.a.div(c||(c=Object(f.a)(["\n  img {\n  }\n"]))),P=function(){return Object(w.jsx)(B,{children:Object(w.jsx)("img",{src:C,alt:"bg"})})},S=p.a.div(a||(a=Object(f.a)(["\n  position: relative;\n  top: ",";\n  left: ",";\n"])),(function(n){return n.yPos}),(function(n){return n.xPos})),I=(p.a.div(s||(s=Object(f.a)(["\n  position: absolute;\n  padding: 1rem;\n  background-color: var(--msOrange);\n  outline: 0.15rem solid var(--msBrown);\n  box-shadow: 0rem 0.4rem var(--msBrown);\n  text-shadow: 0rem 0.09rem var(--msRed);\n  color: white;\n"]))),p.a.div(d||(d=Object(f.a)(["\n  position: absolute;\n  padding: 0.1rem 0.35rem;\n  background-color: var(--msRed);\n  border-radius: 10rem;\n  z-index: 2;\n  transform: translate(-50%, -50%);\n  color: white;\n  border: 0.2rem solid var(--msCream);\n  box-shadow: 0rem 0.15rem var(--msBrown);\n"])))),R=function(n){var e=n.pointer;return Object(w.jsx)(S,{xPos:e.x+"px",yPos:e.y+"px",children:Object(w.jsx)(I,{children:e.name})})},z=p.a.div(m||(m=Object(f.a)(["\n  max-height: 100%;\n\n  overflow: scroll;\n"])));function T(n,e){return n.x.start<=e.x&&e.x<=n.x.end&&n.y.start<=e.y&&e.y<=n.y.end}var M={x:0,y:0,showMenu:!1},E={pointer1:{x:0,y:0,showPointer:!1,name:"Pink Teddy"},pointer2:{x:0,y:0,showPointer:!1,name:"Wine Bottle"}},Y=t(16);t(39);Y.a.initializeApp({apiKey:"AIzaSyDtTYSaX3NURtISBG_uvxcfEGTPQ8ivff4",authDomain:"find-me-24e85.firebaseapp.com",projectId:"find-me-24e85",storageBucket:"find-me-24e85.appspot.com",messagingSenderId:"815847569589",appId:"1:815847569589:web:4fe039854691103a26a6fc"});var A,D=Y.a.firestore();Y.a;D.collection("correctPointers").get().then((function(n){n.forEach((function(n){A=n.data()}))})),document.addEventListener("contextmenu",(function(n){n.preventDefault()}));var U,F,N,W,L,K,G,J,X,H,Q,V,_,q,Z,$,nn,en,tn=function(n){var e=n.setIsCorrect,t=n.setCheck,r=n.check,o=Object(l.useState)(M),i=Object(h.a)(o,2),c=i[0],a=i[1],s=Object(l.useState)(E),d=Object(h.a)(s,2),m=d[0],u=d[1];return Object(l.useEffect)((function(){r&&e((function(n){return{pointer1:T(A.pointer1,m.pointer1),pointer2:T(A.pointer2,m.pointer2)}})),t(!1)}),[r,e,m,t]),Object(w.jsxs)(z,{onContextMenu:function(n){!function(n){var e=n.target.getBoundingClientRect();c.showMenu?a((function(n){return Object(x.a)(Object(x.a)({},n),{},{showMenu:!1})})):a({x:n.clientX-e.left,y:n.clientY-e.top,showMenu:!0})}(n)},children:[c.showMenu&&Object(w.jsx)(k,{setPos:a,pos:c,setPointers:u,pointers:m}),m.pointer1.showPointer&&Object(w.jsx)(R,{pointer:m.pointer1}),m.pointer2.showPointer&&Object(w.jsx)(R,{pointer:m.pointer2}),Object(w.jsx)(P,{})]})},rn=p.a.div(U||(U=Object(f.a)(["\n  h1,\n  h2,\n  h3 {\n    height: 100%;\n\n    width: fit-content;\n    margin: 0 auto;\n    margin-top: 1rem;\n    padding: 0rem 5rem;\n    border-radius: 1rem;\n    color: white;\n    background-color: var(--msOrange);\n    outline: 0.15rem solid var(--msBrown);\n    box-shadow: 0rem 0.4rem var(--msBrown);\n    text-shadow: 0rem 0.09rem var(--msRed);\n  }\n  h1 {\n  }\n  h2 {\n    font-size: 01rem;\n  }\n  h3 {\n    font-size: 0.76rem;\n    margin-bottom: 2rem;\n  }\n  background: url(",");\n  background-position: top left;\n  background-attachment: scroll;\n  background-blend-mode: overlay;\n  background-size: 150%;\n  border-radius: 0.4rem;\n  box-shadow: 0rem 0.11rem rgba(248, 239, 224, 0.05);\n  margin-bottom: 0.2rem;\n  padding-top: 1rem;\n"])),(function(n){return n.img})),on=t.p+"static/media/header-bg.06094b49.png",cn=function(n){var e="0".concat(n%60).slice(-2),t="".concat(Math.floor(n/60)),r="0".concat(t%60).slice(-2);return" ".concat(r," : ").concat(e)},an=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=Object(l.useState)(n),t=Object(h.a)(e,2),r=t[0],o=t[1],i=Object(l.useState)(!1),c=Object(h.a)(i,2),a=c[0],s=c[1],d=Object(l.useState)(!1),m=Object(h.a)(d,2),u=m[0],b=m[1],j=Object(l.useRef)(null),f=function(){s(!0),b(!0),j.current=setInterval((function(){o((function(n){return n+1}))}),1e3)},p=function(){clearInterval(j.current),b(!1)},O=function(){b(!0),j.current=setInterval((function(){o((function(n){return n+1}))}),1e3)},x=function(){clearInterval(j.current),s(!1),b(!1),o(0)};return{timer:r,isActive:a,isPaused:u,handleStart:f,handlePause:p,handleResume:O,handleReset:x}},sn=0,dn=function(n){var e=n.isCorrect,t=an(0),r=t.timer,o=t.handleStart,i=t.handlePause,c=Object(l.useState)(!0),a=Object(h.a)(c,2),s=a[0],d=a[1];return Object(l.useEffect)((function(){s&&(d(!1),o()),e.pointer1&&e.pointer2&&(i(),sn=r)}),[s,e,r,i,o]),Object(w.jsxs)("div",{className:"Timer",children:[Object(w.jsx)("h3",{children:cn(r)}),Object(w.jsx)("div",{className:"Timer-card"})]})},mn=function(n){var e=n.isCorrect;return Object(w.jsxs)(rn,{img:on,children:[Object(w.jsx)("h1",{children:"Find Me Maple"}),Object(w.jsx)("h2",{children:"Right Click to set the Pointers"}),Object(w.jsx)("h3",{children:"and than submit to see if you are correct"}),Object(w.jsx)(dn,{isCorrect:e})]})},ln=p.a.div(F||(F=Object(f.a)(["\n  color: white;\n  margin: auto 0;\n  height: 100%;\n  padding: 0.7rem;\n"]))),un=p.a.button(N||(N=Object(f.a)(["\n  color: var(--msCream);\n  background-color: var(--msBlue);\n  outline: 0.15rem solid var(--msBrown);\n  box-shadow: 0rem 0.4rem var(--msBrown);\n  text-shadow: 0rem 0.095rem var(--msPurple);\n\n  width: fit-content;\n  margin: 0 auto;\n  border: none;\n  padding: 0.35rem 5rem;\n  padding-top: 0.45rem;\n  border-radius: 1rem;\n  font-size: 1.25rem;\n  font-family: inherit;\n  font-weight: 700;\n  cursor: pointer;\n"]))),bn=p.a.div(W||(W=Object(f.a)(["\n  font-size: 0.5rem;\n  margin-top: 0.25rem;\n"]))),jn=p.a.div(L||(L=Object(f.a)(["\n  position: relative;\n  margin-top: 0.5rem;\n  font-size: 0.8rem;\n  font-family: inherit;\n  font-weight: 500;\n  display: flex;\n\n  align-content: center;\n  align-items: center;\n  align-self: center;\n  justify-content: center;\n"]))),hn=p.a.div(K||(K=Object(f.a)(["\n  margin-left: 0.2rem;\n  font-weight: 700;\n"]))),fn=p.a.div(G||(G=Object(f.a)(['\n  :after {\n    content: "\u2714";\n    color: green;\n    margin-right: 0.25rem;\n  }\n']))),pn=p.a.div(J||(J=Object(f.a)(['\n  :after {\n    content: "\u2715";\n    color: red;\n    margin-right: 0.25rem;\n  }\n']))),On=function(n){var e=n.setCheck,t=n.isCorrect;return Object(w.jsxs)(ln,{children:[Object(w.jsx)(un,{onClick:function(){return e(!0)},children:"SUBMIT"}),t.pointer1?Object(w.jsxs)(jn,{children:[Object(w.jsx)(fn,{}),"You have found the ",Object(w.jsx)(hn,{children:"Pink Teddy"}),"."]}):Object(w.jsxs)(jn,{children:[Object(w.jsx)(pn,{}),"You haven't found the ",Object(w.jsx)(hn,{children:"Pink Teddy"}),"."]}),t.pointer2?Object(w.jsxs)(jn,{children:[Object(w.jsx)(fn,{}),"You have found the ",Object(w.jsx)(hn,{children:"Wine Bottle"}),"."]}):Object(w.jsxs)(jn,{children:[Object(w.jsx)(pn,{}),"You haven't found ",Object(w.jsx)(hn,{children:"Wine Bottle"}),"."]}),Object(w.jsx)(bn,{children:"THIS SITE WAS CREATED BY YUVAL KARIF 24-7-2021"})]})},xn=p.a.input(X||(X=Object(f.a)(["\n  border-radius: 1rem;\n  border: 1px solid var(--msBrown);\n  box-shadow: 0rem 0.2rem var(--msBrown);\n  padding: 0.25rem 0;\n  text-align: center;\n\n  font-family: inherit;\n  font-weight: 500;\n  font-size: 1.5rem;\n  width: 70%;\n  margin-top: 0.5rem;\n"]))),gn=p.a.button(H||(H=Object(f.a)(["\n  position: relative;\n  margin-top: 1rem;\n  border-radius: 1rem;\n  border: 1px solid var(--msBrown);\n  box-shadow: 0rem 0.2rem var(--msBrown);\n  padding: 0.3rem 1rem;\n  text-align: center;\n  background-color: white;\n  color: var(--msCream);\n  background-color: var(--msBlue);\n\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  :hover {\n    color: var(--msCream);\n    background-color: var(--msRed);\n  }\n"]))),vn=function(n){var e=n.setIsSubmited,t=Object(l.useState)("Unknown Player"),r=Object(h.a)(t,2),o=r[0],i=r[1];return Object(w.jsxs)("div",{className:"submit-screen",children:[" ",Object(w.jsx)("div",{children:"You have indeed"}),Object(w.jsx)("div",{children:"Found My Maple"}),Object(w.jsx)("div",{children:cn(sn)}),Object(w.jsx)(xn,{onChange:function(n){return function(n){i(n.target.value)}(n)}}),Object(w.jsx)(gn,{onClick:function(){!function(n,e){D.collection("scores").add({name:n,time:e}).then((function(n){console.log("Document written with ID: ",n.id)})).catch((function(n){console.error("Error adding document: ",n)}))}(o,sn),e(!0)},children:"SUBMIT YOUR SCORE !"})]})},wn=t(20),yn=t.n(wn),kn=t(29),Cn=t(28),Bn=p.a.div(Q||(Q=Object(f.a)(['\n  margin-top: 1rem;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n  gap: 0.2rem 1rem;\n  grid-template-areas:\n    "."\n    "."\n    "."\n    "."\n    "."\n    "."\n    "."\n    "."\n    "."\n    ".";\n  width: 100%;\n  height: 100%;\n']))),Pn=p.a.div(V||(V=Object(f.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 0.2rem 1rem;\n\n  background-color: var(--msOrange);\n  outline: 0.3rem solid var(--msCream);\n  box-shadow: 0rem 0.2rem var(--msCream);\n  font-size: 1.5rem;\n"]))),Sn=p.a.div(_||(_=Object(f.a)(["\n  display: flex;\n  width: fit-content;\n"]))),In=p.a.div(q||(q=Object(f.a)(["\n  display: flex;\n  height: fit-content;\n  margin-right: 0.35rem;\n"]))),Rn=p.a.button(Z||(Z=Object(f.a)(["\n  position: relative;\n  margin-top: 1rem;\n  border-radius: 1rem;\n  border: 1px solid var(--msBrown);\n  box-shadow: 0rem 0.2rem var(--msBrown);\n  padding: 0.3rem 1rem;\n  text-align: center;\n  background-color: white;\n  color: var(--msCream);\n  background-color: var(--msBlue);\n\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  :hover {\n    color: var(--msCream);\n    background-color: var(--msRed);\n  }\n"]))),zn=function(){var n=Object(l.useState)([]),e=Object(h.a)(n,2),t=e[0],r=e[1],o=Object(l.useState)([]),i=Object(h.a)(o,2),c=i[0],a=i[1],s=Object(l.useState)(!0),d=Object(h.a)(s,2),m=d[0],u=d[1];function b(){return(b=Object(Cn.a)(yn.a.mark((function n(){return yn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,D.collection("scores").get().then((function(n){n.forEach((function(n){r((function(e){return[].concat(Object(kn.a)(e),[n.data()])}))}))}));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(l.useEffect)((function(){m?(u(!1),function(){b.apply(this,arguments)}()):a([].concat(t).sort((function(n,e){return n.time-e.time})).slice(0,10))}),[m,t]),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("div",{children:"Leaderboard"}),Object(w.jsx)(Bn,{children:c.map((function(n,e){return Object(w.jsxs)(Pn,{children:[Object(w.jsxs)(Sn,{children:[Object(w.jsx)(In,{children:e+1+"."}),Object(w.jsx)("div",{children:n.name})]}),Object(w.jsxs)("div",{children:[" ",cn(n.time)]})]},e)}))}),Object(w.jsx)(Rn,{onClick:function(){window.location.reload(!1)},children:"CLICK TO RESTART"})]})},Tn=p.a.div($||($=Object(f.a)(["\n  background: black;\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  opacity: 80%;\n  z-index: 3;\n  top: 0;\n  bottom: 0;\n"]))),Mn=p.a.div(nn||(nn=Object(f.a)(["\n  font-size: 2rem;\n  color: white;\n  text-align: center;\n"]))),En=p.a.div(en||(en=Object(f.a)(["\n  position: absolute;\n  font-size: 2rem;\n  color: white;\n  text-align: center;\n  z-index: 6;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font: inherit;\n  font-weight: 500;\n  width: 350px;\n  padding: 2rem 3rem;\n  border-radius: 1rem;\n  color: white;\n  background-color: var(--msOrange);\n  outline: 0.15rem solid var(--msBrown);\n  box-shadow: 0rem 0.4rem var(--msBrown);\n  text-shadow: 0rem 0.15rem var(--msRed);\n"]))),Yn=function(){var n=Object(l.useState)(!1),e=Object(h.a)(n,2),t=e[0],r=e[1];return Object(w.jsxs)(Mn,{children:[Object(w.jsx)(En,{children:t?Object(w.jsx)(zn,{}):Object(w.jsx)(vn,{setIsSubmited:r})}),Object(w.jsx)(Tn,{})]})};var An=function(){var n=Object(l.useState)({pointer1:!1,pointer2:!1}),e=Object(h.a)(n,2),t=e[0],r=e[1],o=Object(l.useState)(!1),i=Object(h.a)(o,2),c=i[0],a=i[1];return Object(w.jsxs)(w.Fragment,{children:[t.pointer1&&t.pointer2&&Object(w.jsx)(Yn,{}),Object(w.jsxs)(O,{className:"App",children:[Object(w.jsx)(mn,{isCorrect:t,children:"YO"}),Object(w.jsx)(tn,{setIsCorrect:r,check:c,setCheck:a}),Object(w.jsx)(On,{setCheck:a,isCorrect:t})]})]})};t(37);j.a.render(Object(w.jsx)(u.a.StrictMode,{children:Object(w.jsx)(An,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.03847de3.chunk.js.map