(this["webpackJsonpalgorand-marketplace"]=this["webpackJsonpalgorand-marketplace"]||[]).push([[0],{189:function(e,t,n){"use strict";t.a='#pragma version 6\r\ntxn ApplicationID\r\nint 0\r\n==\r\nbnz main_l8\r\ntxn OnCompletion\r\nint DeleteApplication\r\n==\r\nbnz main_l7\r\ntxna ApplicationArgs 0\r\nbyte "buy"\r\n==\r\nbnz main_l4\r\nerr\r\nmain_l4:\r\nglobal GroupSize\r\nint 2\r\n==\r\ngtxn 1 TypeEnum\r\nint pay\r\n==\r\ngtxn 1 Receiver\r\nglobal CreatorAddress\r\n==\r\n&&\r\ngtxn 1 Amount\r\nbyte "PRICE"\r\napp_global_get\r\ntxna ApplicationArgs 1\r\nbtoi\r\n*\r\n==\r\n&&\r\ngtxn 1 Sender\r\ngtxn 0 Sender\r\n==\r\n&&\r\n&&\r\nbnz main_l6\r\nint 0\r\nreturn\r\nmain_l6:\r\nbyte "SOLD"\r\nbyte "SOLD"\r\napp_global_get\r\ntxna ApplicationArgs 1\r\nbtoi\r\n+\r\napp_global_put\r\nint 1\r\nreturn\r\nmain_l7:\r\ntxn Sender\r\nglobal CreatorAddress\r\n==\r\nreturn\r\nmain_l8:\r\ntxn NumAppArgs\r\nint 4\r\n==\r\nassert\r\ntxn Note\r\nbyte "tutorial-marketplace:uv1"\r\n==\r\nassert\r\ntxna ApplicationArgs 3\r\nbtoi\r\nint 0\r\n>\r\nassert\r\nbyte "NAME"\r\ntxna ApplicationArgs 0\r\napp_global_put\r\nbyte "IMAGE"\r\ntxna ApplicationArgs 1\r\napp_global_put\r\nbyte "DESCRIPTION"\r\ntxna ApplicationArgs 2\r\napp_global_put\r\nbyte "PRICE"\r\ntxna ApplicationArgs 3\r\nbtoi\r\napp_global_put\r\nbyte "SOLD"\r\nint 0\r\napp_global_put\r\nint 1\r\nreturn'},190:function(e,t,n){"use strict";t.a="#pragma version 6\r\nint 1\r\nreturn"},197:function(e,t,n){},215:function(e,t){},217:function(e,t){},22:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return o})),n.d(t,"e",(function(){return s})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return l}));var r=n(9),c=n(119),a=n.n(c),o=function(t){return e.from(t,"base64").toString("utf-8")},s=function(t){return e.from(t,"utf8").toString("base64")},i=function(e){if(e)return e.slice(0,5)+"..."+e.slice(e.length-5,e.length)},u=function(e){if(e)return new a.a(e).shiftedBy(-r.a).toFixed(3)},l=function(e){if(e)return new a.a(e).shiftedBy(r.a).toNumber()}}).call(this,n(14).Buffer)},227:function(e,t){},229:function(e,t){},256:function(e,t){},258:function(e,t){},259:function(e,t){},264:function(e,t){},266:function(e,t){},272:function(e,t){},274:function(e,t){},293:function(e,t){},305:function(e,t){},308:function(e,t){},333:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(29),o=n.n(a),s=n(11),i=n(21),u=n(6),l=n(184),d=n(1),b=function(e){var t=e.name,n=e.coverImg,r=e.connect;return Object(d.jsxs)("div",{className:"d-flex justify-content-center flex-column text-center bg-black min-vh-100",children:[Object(d.jsxs)("div",{className:"mt-auto text-light mb-5",children:[Object(d.jsx)("div",{className:" ratio ratio-1x1 mx-auto mb-2",style:{maxWidth:"320px"},children:Object(d.jsx)("img",{src:n,alt:""})}),Object(d.jsx)("h1",{children:t}),Object(d.jsx)("p",{children:"Please connect your wallet to continue."}),Object(d.jsx)(l.a,{onClick:function(){return r()},variant:"outline-light",className:"rounded-pill px-3 mt-3",children:"Connect Wallet"})]}),Object(d.jsx)("p",{className:"mt-auto text-secondary",children:"Powered by Algorand"})]})},j=(n(197),n(343)),p=n(339),f=n(348),x=n(22),m=n(2),O=n(3),h=n(186),g=n.n(h),v=["size","address"],y=function(e){var t=e.size,n=e.address,r=Object(O.a)(e,v);return Object(d.jsx)("div",Object(m.a)(Object(m.a)({},r),{},{style:{width:"".concat(t,"px"),height:"".concat(t,"px")},children:Object(d.jsx)(g.a,{diameter:t,seed:parseInt(n.slice(2,10),16)})}))},w=function(e){var t=e.address,n=e.name,r=e.amount,c=e.symbol,a=e.disconnect;return t?Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(j.a,{children:[Object(d.jsxs)(j.a.Toggle,{variant:"light",align:"end",id:"dropdown-basic",className:"d-flex align-items-center border rounded-pill py-1",children:[r?Object(d.jsxs)(d.Fragment,{children:[Object(x.b)(r),Object(d.jsxs)("span",{className:"ms-1",children:[" ",c]})]}):Object(d.jsx)(p.a,{animation:"border",size:"sm",className:"opacity-25"}),Object(d.jsx)(y,{address:t,size:28,className:"ms-2 me-1"})]}),Object(d.jsxs)(j.a.Menu,{className:"shadow-lg border-0",children:[Object(d.jsx)(j.a.Item,{href:"https://testnet.algoexplorer.io/address/".concat(t),target:"_blank",children:Object(d.jsxs)(f.a,{direction:"horizontal",gap:2,children:[Object(d.jsx)("i",{className:"bi bi-person-circle fs-4"}),Object(d.jsxs)("div",{className:"d-flex flex-column",children:[n&&Object(d.jsx)("span",{className:"font-monospace",children:n}),Object(d.jsx)("span",{className:"font-monospace",children:Object(x.d)(t)})]})]})}),Object(d.jsx)(j.a.Divider,{}),Object(d.jsxs)(j.a.Item,{as:"button",className:"d-flex align-items-center",onClick:function(){a()},children:[Object(d.jsx)("i",{className:"bi bi-box-arrow-right me-2 fs-4"}),"Disconnect"]})]})]})}):null},N=n(342),A=n(346),I=n(36),C=n(344),k=n(345),P=n(188),S=function(e){var t=e.createProduct,n=Object(r.useState)(""),c=Object(u.a)(n,2),a=c[0],o=c[1],s=Object(r.useState)(""),i=Object(u.a)(s,2),b=i[0],j=i[1],p=Object(r.useState)(""),f=Object(u.a)(p,2),m=f[0],O=f[1],h=Object(r.useState)(0),g=Object(u.a)(h,2),v=g[0],y=g[1],w=Object(r.useCallback)((function(){return a&&b&&m&&v>0}),[a,b,m,v]),N=Object(r.useState)(!1),A=Object(u.a)(N,2),I=A[0],S=A[1],T=function(){return S(!1)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(l.a,{onClick:function(){return S(!0)},variant:"dark",className:"rounded-pill px-0",style:{width:"38px"},children:Object(d.jsx)("i",{className:"bi bi-plus"})}),Object(d.jsxs)(C.a,{show:I,onHide:T,centered:!0,children:[Object(d.jsx)(C.a.Header,{closeButton:!0,children:Object(d.jsx)(C.a.Title,{children:"New Product"})}),Object(d.jsx)(k.a,{children:Object(d.jsxs)(C.a.Body,{children:[Object(d.jsx)(P.a,{controlId:"inputName",label:"Product name",className:"mb-3",children:Object(d.jsx)(k.a.Control,{type:"text",onChange:function(e){o(e.target.value)},placeholder:"Enter name of product"})}),Object(d.jsx)(P.a,{controlId:"inputUrl",label:"Image URL",className:"mb-3",children:Object(d.jsx)(k.a.Control,{type:"text",placeholder:"Image URL",value:b,onChange:function(e){j(e.target.value)}})}),Object(d.jsx)(P.a,{controlId:"inputDescription",label:"Description",className:"mb-3",children:Object(d.jsx)(k.a.Control,{as:"textarea",placeholder:"description",style:{height:"80px"},onChange:function(e){O(e.target.value)}})}),Object(d.jsx)(P.a,{controlId:"inputPrice",label:"Price in ALGO",className:"mb-3",children:Object(d.jsx)(k.a.Control,{type:"text",placeholder:"Price",onChange:function(e){y(Object(x.c)(e.target.value))}})})]})}),Object(d.jsxs)(C.a.Footer,{children:[Object(d.jsx)(l.a,{variant:"outline-secondary",onClick:T,children:"Close"}),Object(d.jsx)(l.a,{variant:"dark",disabled:!w(),onClick:function(){t({name:a,image:b,description:m,price:v}),T()},children:"Save product"})]})]})]})},T=n(187),F=n(347),_=n(340),E=function(e){var t=e.address,n=e.product,c=e.buyProduct,a=e.deleteProduct,o=n.name,s=n.image,i=n.description,b=n.price,j=n.sold,p=n.appId,m=n.owner,O=Object(r.useState)(1),h=Object(u.a)(O,2),g=h[0],v=h[1];return Object(d.jsx)(T.a,{children:Object(d.jsxs)(F.a,{className:"h-100",children:[Object(d.jsx)(F.a.Header,{children:Object(d.jsxs)(f.a,{direction:"horizontal",gap:2,children:[Object(d.jsx)("span",{className:"font-monospace text-secondary",children:Object(x.d)(m)}),Object(d.jsx)(y,{size:28,address:m}),Object(d.jsxs)(_.a,{bg:"secondary",className:"ms-auto",children:[j," Sold"]})]})}),Object(d.jsx)("div",{className:"ratio ratio-4x3",children:Object(d.jsx)("img",{src:s,alt:o,style:{objectFit:"cover"}})}),Object(d.jsxs)(F.a.Body,{className:"d-flex flex-column text-center",children:[Object(d.jsx)(F.a.Title,{children:o}),Object(d.jsx)(F.a.Text,{className:"flex-grow-1",children:i}),Object(d.jsxs)(k.a,{className:"d-flex align-content-stretch flex-row gap-2",children:[Object(d.jsx)(P.a,{controlId:"inputCount",label:"Count",className:"w-25",children:Object(d.jsx)(k.a.Control,{type:"number",value:g,min:"1",max:"10",onChange:function(e){v(Number(e.target.value))}})}),Object(d.jsxs)(l.a,{variant:"outline-dark",onClick:function(){return c(n,g)},className:"w-75 py-3",children:["Buy for ",Object(x.b)(b)*g," ALGO"]}),n.owner===t&&Object(d.jsx)(l.a,{variant:"outline-danger",onClick:function(){return a(n)},className:"btn",children:Object(d.jsx)("i",{className:"bi bi-trash"})})]})]})]})},p)},D=function(){return Object(d.jsx)("div",{className:"d-flex justify-content-center",children:Object(d.jsx)(p.a,{animation:"border",role:"status",className:"opacity-25",children:Object(d.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})},B=function(){return Object(d.jsx)(I.a,{position:"bottom-center",autoClose:5e3,hideProgressBar:!0,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!1,pauseOnHover:!0})},L=function(e){var t=e.text;return Object(d.jsxs)("div",{children:[Object(d.jsx)("i",{className:"bi bi-check-circle-fill text-success mx-2"}),Object(d.jsx)("span",{className:"text-secondary mx-1",children:t})]})},R=function(e){var t=e.text;return Object(d.jsxs)("div",{children:[Object(d.jsx)("i",{className:"bi bi-x-circle-fill text-danger mx-2"}),Object(d.jsx)("span",{className:"text-secondary mx-1",children:t})]})},G={text:""};L.defaultProps=G,R.defaultProps=G;var z=n(76),M=n(341),U=function(e){var t=e.address,n=e.fetchBalance,c=Object(r.useState)([]),a=Object(u.a)(c,2),o=a[0],l=a[1],b=Object(r.useState)(!1),j=Object(u.a)(b,2),p=j[0],f=j[1],x=function(){var e=Object(i.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f(!0),Object(z.d)().then((function(e){e&&l(e)})).catch((function(e){console.log(e)})).finally((function(e){f(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){x()}),[]);var m=function(){var e=Object(i.a)(Object(s.a)().mark((function e(r){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f(!0),Object(z.b)(t,r).then((function(){Object(I.b)(Object(d.jsx)(L,{text:"Product added successfully."})),x(),n(t)})).catch((function(e){console.log(e),Object(I.b)(Object(d.jsx)(R,{text:"Failed to create a product."})),f(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(i.a)(Object(s.a)().mark((function e(r,c){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f(!0),Object(z.a)(t,r,c).then((function(){Object(I.b)(Object(d.jsx)(L,{text:"Product bought successfully"})),x(),n(t)})).catch((function(e){console.log(e),Object(I.b)(Object(d.jsx)(R,{text:"Failed to purchase product."})),f(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),h=function(){var e=Object(i.a)(Object(s.a)().mark((function e(r){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f(!0),Object(z.c)(t,r.appId).then((function(){Object(I.b)(Object(d.jsx)(L,{text:"Product deleted successfully"})),x(),n(t)})).catch((function(e){console.log(e),Object(I.b)(Object(d.jsx)(R,{text:"Failed to delete product."})),f(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return p?Object(d.jsx)(D,{}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-4",children:[Object(d.jsx)("h1",{className:"fs-4 fw-bold mb-0",children:"Street Food"}),Object(d.jsx)(S,{createProduct:m})]}),Object(d.jsx)(M.a,{xs:1,sm:2,lg:3,className:"g-3 mb-5 g-xl-4 g-xxl-5",children:Object(d.jsx)(d.Fragment,{children:o.map((function(e,n){return Object(d.jsx)(E,{address:t,product:e,buyProduct:O,deleteProduct:h},n)}))})})]})},H=n(9),W=n.p+"static/media/sandwich.2d312449.jpg",X=function(){var e=Object(r.useState)(null),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(null),o=Object(u.a)(a,2),l=o[0],j=o[1],p=Object(r.useState)(0),f=Object(u.a)(p,2),x=f[0],m=f[1],O=function(){var e=Object(i.a)(Object(s.a)().mark((function e(t){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:H.c.lookupAccountByID(t).do().then((function(e){var t=e.account.amount;m(t)})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(i.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:H.f.connect().then((function(e){var t=e[0];c(t.address),j(t.name),O(t.address)})).catch((function(e){console.log("Could not connect to MyAlgo wallet"),console.error(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(B,{}),n?Object(d.jsxs)(N.a,{fluid:"md",children:[Object(d.jsx)(A.a,{className:"justify-content-end pt-3 pb-5",children:Object(d.jsx)(A.a.Item,{children:Object(d.jsx)(w,{address:n,name:l,amount:x,disconnect:function(){c(null),j(null),m(null)},symbol:"ALGO"})})}),Object(d.jsx)("main",{children:Object(d.jsx)(U,{address:n,fetchBalance:O})})]}):Object(d.jsx)(b,{name:"Street Food",coverImg:W,connect:h})]})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,349)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))};n(330),n(331),n(332);o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(X,{})}),document.getElementById("root")),J()},76:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return x})),n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return O})),n.d(t,"d",(function(){return h}));var r=n(62),c=n(11),a=n(21),o=n(60),s=n(59),i=n(16),u=n.n(i),l=n(9),d=n(189),b=n(190),j=n(22),p=Object(o.a)((function e(t,n,r,c,a,o,i){Object(s.a)(this,e),this.name=t,this.image=n,this.description=r,this.price=c,this.sold=a,this.appId=o,this.owner=i})),f=function(){var t=Object(a.a)(Object(c.a)().mark((function t(n){var r,a,o;return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new TextEncoder,a=r.encode(n),t.next=4,l.b.compile(a).do();case 4:return o=t.sent,t.abrupt("return",new Uint8Array(e.from(o.result,"base64")));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(){var e=Object(a.a)(Object(c.a)().mark((function e(t,n){var r,a,o,s,i,j,p,x,m,O,h,g,v,y,w;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Adding product..."),e.next=3,l.b.getTransactionParams().do();case 3:return(r=e.sent).fee=u.a.ALGORAND_MIN_TX_FEE,r.flatFee=!0,e.next=8,f(d.a);case 8:return a=e.sent,e.next=11,f(b.a);case 11:return o=e.sent,s=(new TextEncoder).encode(l.d),i=(new TextEncoder).encode(n.name),j=(new TextEncoder).encode(n.image),p=(new TextEncoder).encode(n.description),x=u.a.encodeUint64(n.price),m=[i,j,p,x],O=u.a.makeApplicationCreateTxnFromObject({from:t,suggestedParams:r,onComplete:u.a.OnApplicationComplete.NoOpOC,approvalProgram:a,clearProgram:o,numLocalInts:l.j,numLocalByteSlices:l.i,numGlobalInts:l.h,numGlobalByteSlices:l.g,note:s,appArgs:m}),h=O.txID().toString(),e.next=22,l.f.signTransaction(O.toByte());case 22:return g=e.sent,console.log("Signed transaction with txID: %s",h),e.next=26,l.b.sendRawTransaction(g.blob).do();case 26:return e.next=28,u.a.waitForConfirmation(l.b,h,4);case 28:return v=e.sent,console.log("Transaction "+h+" confirmed in round "+v["confirmed-round"]),e.next=32,l.b.pendingTransactionInformation(h).do();case 32:return y=e.sent,w=y["application-index"],console.log("Created new app-id: ",w),e.abrupt("return",w);case 36:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),m=function(){var e=Object(a.a)(Object(c.a)().mark((function e(t,n,r){var a,o,s,i,d,b,j,p,f,x,m,O;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Buying product..."),e.next=3,l.b.getTransactionParams().do();case 3:for((a=e.sent).fee=u.a.ALGORAND_MIN_TX_FEE,a.flatFee=!0,o=(new TextEncoder).encode("buy"),s=u.a.encodeUint64(r),i=[o,s],d=u.a.makeApplicationCallTxnFromObject({from:t,appIndex:n.appId,onComplete:u.a.OnApplicationComplete.NoOpOC,suggestedParams:a,appArgs:i}),b=u.a.makePaymentTxnWithSuggestedParamsFromObject({from:t,to:n.owner,amount:n.price*r,suggestedParams:a}),j=[d,b],p=u.a.computeGroupID(j),f=0;f<2;f++)j[f].group=p;return e.next=16,l.f.signTransaction(j.map((function(e){return e.toByte()})));case 16:return x=e.sent,console.log("Signed group transaction"),e.next=20,l.b.sendRawTransaction(x.map((function(e){return e.blob}))).do();case 20:return m=e.sent,e.next=23,u.a.waitForConfirmation(l.b,m.txId,4);case 23:O=e.sent,console.log("Group transaction "+m.txId+" confirmed in round "+O["confirmed-round"]);case 25:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),O=function(){var e=Object(a.a)(Object(c.a)().mark((function e(t,n){var r,a,o,s,i,d,b;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Deleting application..."),e.next=3,l.b.getTransactionParams().do();case 3:return(r=e.sent).fee=u.a.ALGORAND_MIN_TX_FEE,r.flatFee=!0,a=u.a.makeApplicationDeleteTxnFromObject({from:t,suggestedParams:r,appIndex:n}),o=a.txID().toString(),e.next=10,l.f.signTransaction(a.toByte());case 10:return s=e.sent,console.log("Signed transaction with txID: %s",o),e.next=14,l.b.sendRawTransaction(s.blob).do();case 14:return e.next=16,u.a.waitForConfirmation(l.b,o,4);case 16:return i=e.sent,console.log("Transaction "+o+" confirmed in round "+i["confirmed-round"]),e.next=20,l.b.pendingTransactionInformation(o).do();case 20:d=e.sent,b=d.txn.txn.apid,console.log("Deleted app-id: ",b);case 23:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),h=function(){var t=Object(a.a)(Object(c.a)().mark((function t(){var n,a,o,s,i,u,d,b,j;return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Fetching products..."),n=(new TextEncoder).encode(l.d),a=e.from(n).toString("base64"),t.next=5,l.c.searchForTransactions().notePrefix(a).txType("appl").minRound(l.e).do();case 5:o=t.sent,s=[],i=Object(r.a)(o.transactions),t.prev=8,i.s();case 10:if((u=i.n()).done){t.next=20;break}if(d=u.value,!(b=d["created-application-index"])){t.next=18;break}return t.next=16,g(b);case 16:(j=t.sent)&&s.push(j);case 18:t.next=10;break;case 20:t.next=25;break;case 22:t.prev=22,t.t0=t.catch(8),i.e(t.t0);case 25:return t.prev=25,i.f(),t.finish(25);case 28:return console.log("Products fetched."),t.abrupt("return",s);case 30:case"end":return t.stop()}}),t,null,[[8,22,25,28]])})));return function(){return t.apply(this,arguments)}}(),g=function(){var e=Object(a.a)(Object(c.a)().mark((function e(t){var n,r,a,o,s,i,u,d,b,f,x,m;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.c.lookupApplications(t).includeAll(!0).do();case 3:if(!(n=e.sent).application.deleted){e.next=6;break}return e.abrupt("return",null);case 6:return r=n.application.params["global-state"],a=n.application.params.creator,o="",s="",i="",u=0,d=0,b=function(e,t){return t.find((function(t){return t.key===Object(j.e)(e)}))},void 0!==b("NAME",r)&&(f=b("NAME",r).value.bytes,o=Object(j.a)(f)),void 0!==b("IMAGE",r)&&(x=b("IMAGE",r).value.bytes,s=Object(j.a)(x)),void 0!==b("DESCRIPTION",r)&&(m=b("DESCRIPTION",r).value.bytes,i=Object(j.a)(m)),void 0!==b("PRICE",r)&&(u=b("PRICE",r).value.uint),void 0!==b("SOLD",r)&&(d=b("SOLD",r).value.uint),e.abrupt("return",new p(o,s,i,u,d,t,a));case 22:return e.prev=22,e.t0=e.catch(0),e.abrupt("return",null);case 25:case"end":return e.stop()}}),e,null,[[0,22]])})));return function(t){return e.apply(this,arguments)}}()}).call(this,n(14).Buffer)},9:function(e,t,n){"use strict";n.d(t,"b",(function(){return j})),n.d(t,"c",(function(){return p})),n.d(t,"f",(function(){return f})),n.d(t,"e",(function(){return x})),n.d(t,"d",(function(){return m})),n.d(t,"j",(function(){return O})),n.d(t,"i",(function(){return h})),n.d(t,"h",(function(){return g})),n.d(t,"g",(function(){return v})),n.d(t,"a",(function(){return y}));var r=n(16),c=n.n(r),a=n(185),o=n.n(a),s="",i="https://node.testnet.algoexplorerapi.io",u="",l="",d="https://algoindexer.testnet.algoexplorerapi.io",b="",j=new c.a.Algodv2(s,i,u),p=new c.a.Indexer(l,d,b),f=new o.a,x=21540981,m="tutorial-marketplace:uv1",O=0,h=0,g=2,v=3,y=6}},[[333,1,2]]]);
//# sourceMappingURL=main.2ff1b9a7.chunk.js.map