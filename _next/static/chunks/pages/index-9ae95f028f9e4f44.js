(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4868)}])},4868:function(e,i,t){"use strict";t.r(i),t.d(i,{__N_SSG:function(){return m},default:function(){return u}});var s=t(5893),n=t(9008),r=t(7294),a=function(e){return{daily:"Last Day",weekly:"Last Week",monthly:"Last Month"}[e]},c=function(e){var i,t=e.timeframe,n=e.activity,r=n[t].current,c=n[t].previous;return(0,s.jsx)("article",{className:(i=n.title,"root-card "+i.trim().replace(" ","-").toLowerCase()),children:(0,s.jsxs)("div",{className:"content",children:[(0,s.jsxs)("div",{className:"first-row",children:[(0,s.jsx)("header",{children:(0,s.jsx)("h2",{children:n.title})}),(0,s.jsx)("button",{className:"ellipsis","aria-label":"further details",children:(0,s.jsx)("svg",{width:"21",height:"5",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z",fill:"#BBC0FF",fillRule:"evenodd"})})})]}),(0,s.jsxs)("div",{className:"data",children:[(0,s.jsxs)("div",{className:"current",children:[r," ",r>1?"hrs":"hr"]}),(0,s.jsxs)("div",{className:"previous",children:[a(t)," - ",c," ",c>1?"hrs":"hr"]})]})]})})},l=function(e){var i=e.timeframe,t=e.activities;return(0,s.jsx)("ul",{className:"root-activities",children:t.map((function(e){return(0,s.jsx)("li",{children:(0,s.jsx)(c,{activity:e,timeframe:i})},e.title)}))})},o=function(e){return"/frontend-mentor-io-time-tracking-dashboard"+e},d=function(e){var i=e.timeframe,t=e.setTimeframe;return(0,s.jsxs)("section",{className:"root-sidebar",children:[(0,s.jsxs)("header",{className:"user",children:[(0,s.jsx)("div",{className:"avatar-container",children:(0,s.jsx)("img",{className:"avatar",src:o("/images/image-jeremy.png"),alt:"user avatar"})}),(0,s.jsxs)("div",{className:"title-container",children:[(0,s.jsx)("div",{className:"subtitle",children:"Report for"}),(0,s.jsx)("h1",{className:"title",children:"Jeremy Robson"})]})]}),(0,s.jsxs)("div",{className:"timeframes",children:[(0,s.jsx)("button",{className:"daily"===i?"active":void 0,onClick:function(){return t("daily")},children:"Daily"}),(0,s.jsx)("button",{className:"weekly"===i?"active":void 0,onClick:function(){return t("weekly")},children:"Weekly"}),(0,s.jsx)("button",{className:"monthly"===i?"active":void 0,onClick:function(){return t("monthly")},children:"Monthly"})]})]})},m=!0,u=function(e){var i=e.activities,t=(0,r.useState)("weekly"),a=t[0],c=t[1];return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.default,{children:[(0,s.jsx)("meta",{name:"description",content:"Frontend Mentor | Time tracking dashboard"}),(0,s.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"./images/favicon-32x32.png"}),(0,s.jsx)("title",{children:"Frontend Mentor | Time tracking dashboard"})]}),(0,s.jsxs)("main",{children:[(0,s.jsx)(d,{timeframe:a,setTimeframe:c}),(0,s.jsx)(l,{timeframe:a,activities:i})]})]})}},9008:function(e,i,t){e.exports=t(5443)}},function(e){e.O(0,[774,888,179],(function(){return i=5301,e(e.s=i);var i}));var i=e.O();_N_E=i}]);