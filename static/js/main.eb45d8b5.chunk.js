(this.webpackJsonpmotc=this.webpackJsonpmotc||[]).push([[0],{112:function(n,t,e){"use strict";e.r(t);var i={};e.r(i),e.d(i,"loading",(function(){return T})),e.d(i,"loaded",(function(){return J})),e.d(i,"hasNoMore",(function(){return Q})),e.d(i,"getSpotList",(function(){return F})),e.d(i,"getMoreSpotList",(function(){return X}));var o={};e.r(o),e.d(o,"loading",(function(){return V})),e.d(o,"loaded",(function(){return _})),e.d(o,"hasNoMore",(function(){return $})),e.d(o,"getSpotCityList",(function(){return nn})),e.d(o,"getMoreSpotCityList",(function(){return tn}));var a={};e.r(a),e.d(a,"getCityDetail",(function(){return cn}));var c={};e.r(c),e.d(c,"GetAllCity",(function(){return hn})),e.d(c,"getSpotCityIndex",(function(){return jn})),e.d(c,"fixLngChange",(function(){return On})),e.d(c,"fixLatChange",(function(){return mn})),e.d(c,"fixZoomChange",(function(){return yn})),e.d(c,"fixNewCoordinates",(function(){return Cn}));var r,s,d,p,l,u=e(0),b=e(28),g=e.n(b),x=e(12),f=e(13),h=e(15),j=e(14),O=e(17),m=e(5),y=e(7),C=e(2),v=e(3),S=Object(v.a)(r||(r=Object(C.a)(["\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n  }\n  ol, ul {\n    list-style: none;\n  }\n  blockquote, q {\n    quotes: none;\n  }\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: '';\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n"]))),A=e(22),N=e(59),w=e(60),k=e(6),I="SpotList/CHANGE_ALL_LIST",L="SpotList/LOADING",M="SpotList/LOADED",D="SpotList/HAS_NO_MORE",E=Object(k.fromJS)({scenicSpotList:[],loading:!1,hasMore:!0}),P=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return n.set("loading",!0);case M:return n.set("loading",!1);case D:return n.set("hasMore",!1);case I:return n.set("scenicSpotList",t.data);default:return n}},z=e(23),B=e(18),H=e.n(B),T=function(){return{type:L}},J=function(){return{type:M}},Q=function(){return{type:D}},G=function(n){return{type:I,data:Object(k.List)(n)}},F=function(n){return function(t){0===n.length&&H.a.get("https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot",{params:{$top:30,$format:"JSON"}}).then((function(n){t(G(n.data))})).catch((function(){console.log("error")}))}},X=function(n,t,e,i){return function(o){t&&i&&H.a.get("https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot",{params:{$top:30,$skip:e,$format:"JSON"}}).then((function(e){var i=[].concat(Object(z.a)(n),Object(z.a)(e.data));0===e.data.length&&t?o(Q()):o(G(i)),o(J())})).catch((function(){console.log("error")}))}},U="SpotCityList/CHANGE_CITY_LIST",Y="SpotCityList/LOADING",W="SpotCityList/LOADED",K="SpotCityList/HAS_NO_MORE",q=Object(k.fromJS)({City:[{CityName:"\u81fa\u5317\u5e02",CityNameEN:"Taipei",Citylist:[],hasMore:!0,loading:!1},{CityName:"\u65b0\u5317\u5e02",CityNameEN:"NewTaipei",Citylist:[],hasMore:!0,loading:!1},{CityName:"\u6843\u5712\u5e02",CityNameEN:"Taoyuan",Citylist:[],hasMore:!0,loading:!1},{CityName:"\u53f0\u4e2d\u5e02",CityNameEN:"Taichung",Citylist:[],hasMore:!0,loading:!1},{CityName:"\u81fa\u5357\u5e02",CityNameEN:"Tainan",Citylist:[],hasMore:!0,loading:!1},{CityName:"\u9ad8\u96c4\u5e02",CityNameEN:"Kaohsiung",Citylist:[],hasMore:!0,loading:!1},{CityName:"\u57fa\u9686\u5e02",CityNameEN:"Keelung",Citylist:[],hasMore:!0,loading:!1},{CityName:"\u65b0\u7af9\u5e02",CityNameEN:"Hsinchu",Citylist:[],hasMore:!0,loading:!1},{CityName:"\u65b0\u7af9\u7e23",CityNameEN:"HsinchuCounty",Citylist:[],hasMore:!0,loading:!1},{CityName:"\u82d7\u6817\u7e23",CityNameEN:"MiaoliCounty",Citylist:[],hasMore:!0,loading:!1},{CityName:"\u5f70\u5316\u7e23",CityNameEN:"ChanghuaCounty",Citylist:[],hasMore:!0,loading:!1},{CityName:"\u5357\u6295\u7e23",CityNameEN:"NantouCounty",Citylist:[],hasMore:!0,loading:!1},{CityName:"\u96f2\u6797\u7e23",CityNameEN:"YunlinCounty",Citylist:[],hasMore:!0,loading:!1},{CityName:"\u5609\u7fa9\u7e23",CityNameEN:"ChiayiCounty",Citylist:[],hasMore:!0,loading:!1},{CityName:"\u5609\u7fa9\u5e02",CityNameEN:"Chiayi",Citylist:[],hasMore:!0,loading:!1},{CityName:"\u5c4f\u6771\u7e23",CityNameEN:"PingtungCounty",Citylist:[],hasMore:!0,loading:!1},{CityName:"\u5b9c\u862d\u7e23",CityNameEN:"YilanCounty",Citylist:[],hasMore:!0,loading:!1},{CityName:"\u82b1\u84ee\u7e23",CityNameEN:"HualienCounty",Citylist:[],hasMore:!0,loading:!1},{CityName:"\u81fa\u6771\u7e23",CityNameEN:"TaitungCounty",Citylist:[],hasMore:!0,loading:!1},{CityName:"\u91d1\u9580\u7e23",CityNameEN:"KinmenCounty",Citylist:[],hasMore:!0,loading:!1},{CityName:"\u6f8e\u6e56\u7e23",CityNameEN:"PenghuCounty",Citylist:[],hasMore:!0,loading:!1},{CityName:"\u9023\u6c5f\u7e23",CityNameEN:"LienchiangCounty",Citylist:[],hasMore:!0,loading:!1}]}),R=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:return n.setIn(["City",t.index,"loading"],!0);case W:return n.setIn(["City",t.index,"loading"],!1);case K:return n.setIn(["City",t.index,"hasMore"],!1);case U:return n.setIn(["City",t.index,"Citylist"],t.data);default:return n}},Z=function(n,t){return{type:U,data:Object(k.List)(n),index:t}},V=function(n){return{type:Y,index:n}},_=function(n){return{type:W,index:n}},$=function(n){return{type:K,index:n}},nn=function(n,t,e){return function(i){0===e.length&&H.a.get("https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/".concat(n),{params:{$top:30,$format:"JSON"}}).then((function(n){var e=Z(n.data,t);i(e)})).catch((function(){console.log("error")}))}},tn=function(n,t,e,i,o,a){return function(c){i&&a&&H.a.get("https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/".concat(n),{params:{$top:30,$skip:o,$format:"JSON"}}).then((function(n){var i=[].concat(Object(z.a)(e),Object(z.a)(n.data));0===n.data.length?c($(t)):c(Z(i,t)),c(_(t))})).catch((function(){console.log("error")}))}},en="SpotDetail/GET_DETAIL",on=Object(k.fromJS)({CityDetail:[]}),an=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:on,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case en:return n.set("CityDetail",t.data);default:return n}},cn=function(n){return function(t){H.a.get("https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot",{params:{$filter:"id eq '".concat(n,"'"),$format:"JSON"}}).then((function(n){var e,i=(e=n.data,{type:en,data:Object(k.List)(e)});t(i)})).catch((function(){console.log("error")}))}},rn="ScenicSpotMap/GET_MAP_ALL_COORDINATES",sn="ScenicSpotMap/GET_SPOT_CITY_INDEX",dn="ScenicSpotMap/FIX_LNG_CHANGE",pn="ScenicSpotMap/FIX_LAT_CHANGE",ln="ScenicSpotMap/FIX_ZOOM_CHANGE",un="ScenicSpotMap/FIX_CITY_INDEX",bn="ScenicSpotMap/IS_NEW_COORDINATES",gn="ScenicSpotMap/NOT_NEW_COORDINATES",xn=Object(k.fromJS)({lng:121.5,lat:25.08,zoom:9,isNewCoordinates:!1,cityIndex:void 0,stores:{}}),fn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xn,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case rn:return n.set("stores",Object(k.fromJS)(t.data));case sn:return n.set("cityIndex",t.data);case dn:return n.set("lng",t.data);case pn:return n.set("lat",t.data);case ln:return n.set("zoom",t.data);case un:return n.set("cityIndex",t.data);case bn:case gn:return n.set("isNewCoordinates",t.data);default:return n}},hn=function(){return function(n){H.a.get("https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot",{params:{$format:"JSON"}}).then((function(t){var e=[];t.data.map((function(n){var t=n.ID,i=n.Name,o=n.Address,a=n.Position,c=a.PositionLat,r=a.PositionLon;return e.push({type:"Feature",geometry:{type:"Point",coordinates:[r,c]},properties:{id:"".concat(t),address:"".concat(o),name:"".concat(i)}}),e}));var i={type:"FeatureCollection",features:[].concat(e)};n(function(n){return{type:rn,data:n}}(i))})).catch((function(){console.log("error")}))}},jn=function(n){return{type:sn,data:n}},On=function(n){return{type:dn,data:n}},mn=function(n){return{type:pn,data:n}},yn=function(n){return{type:ln,data:n}},Cn=function(n,t,e,i){return function(o){o(n!==e||t!==i?{type:bn,data:!1}:function(n){return{type:gn,data:n}}(!0))}},vn=Object(w.combineReducers)({scenicSpot:P,spotCity:R,spotDetail:an,SpotMap:fn}),Sn=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||A.c,An=Object(A.d)(vn,Sn(Object(A.a)(N.a))),Nn=v.b.div(s||(s=Object(C.a)(["\n text-align: center;\n height: 130px;\n width:100%;\n border-bottom:2px solid #eee;\n"]))),wn=v.b.div(d||(d=Object(C.a)(["\n  margin:20px 0;\n"]))),kn=v.b.div(p||(p=Object(C.a)(["\n display:flex;\n justify-content:center;\n"]))),In=Object(v.b)(O.b)(l||(l=Object(C.a)(["\n  text-decoration: none;\n  font-weight:bold;\n  cursor:pointer;\n  margin: 0 10px;\n  padding: 10px;\n  font-size:20px;\n  border:1px solid black;\n  &:hover {\n  background:black;\n  color:white;\n  border:1px solid white;\n  }\n  color:black;\n  &:focus{\n  background:black;\n  color:white;\n  border:1px solid white;\n  }\n"]))),Ln=e(1);var Mn,Dn,En,Pn,zn,Bn,Hn,Tn,Jn,Qn,Gn,Fn=Object(y.b)((function(n){return{scenicSpotList:n.getIn(["scenicSpot","scenicSpotList"])}}),(function(n){return{handleSpotList:function(t){n(i.getSpotList(t))}}}))((function(n){var t=n.handleSpotList,e=n.scenicSpotList.toJS();return Object(Ln.jsxs)(Nn,{children:[Object(Ln.jsx)(wn,{children:"MOTC"}),Object(Ln.jsxs)(kn,{children:[Object(Ln.jsx)(In,{to:"/scenicSpot",onClick:function(){return t(e)},children:"\u5168\u90e8"}),Object(Ln.jsx)(In,{to:"/scenicSpot/city/".concat("\u81fa\u5317\u5e02"),children:"\u7e23\u5e02"}),Object(Ln.jsx)(In,{to:"/scenicSpot/ScenicSpotMap",children:"\u5730\u5716"})]})]})})),Xn=v.b.div(Mn||(Mn=Object(C.a)(["\n padding: 80px 0;\n margin: 150px 100px;\n box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);\n "]))),Un=v.b.div(Dn||(Dn=Object(C.a)(["\n text-align: center;\n font-size: 25px;\n font-weight: 800;\n "]))),Yn=v.b.div(En||(En=Object(C.a)(["\n margin-top: 50px;\n text-align: center;\n font-size: 15px;\n font-weight: 400;\n "]))),Wn=v.b.div(Pn||(Pn=Object(C.a)(["\n margin-top: 50px;\n text-align: center;\n font-size: 20px;\n font-weight: 600;\n "]))),Kn=function(n){Object(h.a)(e,n);var t=Object(j.a)(e);function e(){return Object(x.a)(this,e),t.apply(this,arguments)}return Object(f.a)(e,[{key:"render",value:function(){return Object(Ln.jsxs)(Xn,{children:[Object(Ln.jsx)(Un,{children:"MOTC \u89c0\u5149\u666f\u9ede"}),Object(Ln.jsxs)(Yn,{children:["\u4f7f\u7528\u5957\u4ef6",Object(Ln.jsx)("br",{}),"axios",Object(Ln.jsx)("br",{}),"immutable",Object(Ln.jsx)("br",{}),"react-immutable",Object(Ln.jsx)("br",{}),"react-redux",Object(Ln.jsx)("br",{}),"react-router-dom",Object(Ln.jsx)("br",{}),"react-thunk",Object(Ln.jsx)("br",{}),"redux",Object(Ln.jsx)("br",{}),"redux-immutable",Object(Ln.jsx)("br",{}),"styled-components"]}),Object(Ln.jsx)(Wn,{children:"\u4f5c\u8005: \u8a31\u9438\u9419"})]})}}]),e}(u.Component),qn=v.b.div(zn||(zn=Object(C.a)(["\n padding: 20px;\n text-align: center;\n font-size: 40px;\n line-height:40px;\n height:250px;\n"]))),Rn=Object(v.b)(O.b)(Bn||(Bn=Object(C.a)(["\n  text-decoration: none;\n  color:#777\n"]))),Zn=v.b.div(Hn||(Hn=Object(C.a)(["\n z-index: 1;\n overflow: hidden;\n cursor: pointer;\n min-height: 200px;\n position: relative;\n margin: 50px 30px;\n padding: 15px 30px;\n box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);\n .SpotListImg{\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 20px;\n  width:150px;\n  height:150px;\n }\n  &:after {\n   z-index: -1;\n   position: absolute;\n   bottom: 10px;\n   left: 10px;\n   content: '","';\n   font-size: 80px;\n   color: #888;\n   opaticy: 0.2;\n   transform: skewX(-36deg);\n  }\n"])),(function(n){return n.index})),Vn=v.b.div(Tn||(Tn=Object(C.a)(["\n z-index: 2;\n font-size: 25px;\n font-weight: 800;\n text-align: center;\n line-height: 75px;\n height: 75px;\n width: 100%;\n background: whitesmoke;\n color: #888; \n"]))),_n=v.b.div(Jn||(Jn=Object(C.a)(["\n z-index: 2;\n font-size: 25px;\n padding:10px 30px;\n"]))),$n=v.b.div(Qn||(Qn=Object(C.a)(["\n font-size: 15px;\n padding:10px 35px;\n"]))),nt=v.b.div(Gn||(Gn=Object(C.a)(["\n z-index: 2;\n max-width:50%;\n margin-top: 10px;\n padding:0px 30px;\n"])));var tt,et,it,ot,at,ct,rt,st,dt,pt=Object(y.b)((function(n){return{scenicSpotList:n.getIn(["scenicSpot","scenicSpotList"]),loading:n.getIn(["scenicSpot","loading"]),hasMore:n.getIn(["scenicSpot","hasMore"])}}),(function(n){return{handleloading:function(){n(i.loading())},handlehasMoreList:function(t,e,o,a){n(i.getMoreSpotList(t,e,o,a))}}}))((function(n){var t=n.scenicSpotList,e=n.hasMore,i=n.loading,o=n.handleloading,a=n.handlehasMoreList,c=t.toJS(),r=Object(u.useRef)(),s=Object(u.useCallback)((function(n){r.current&&r.current.disconnect(),r.current=new IntersectionObserver((function(n){n[0].isIntersecting&&(o(),a(c,e,c.length,i))})),n&&r.current.observe(n)}),[e,i,o,a,c]);return 0!==c.length||i?c.map((function(n,t){var e=n.ID,i=n.Name,o=n.Address,a=n.Description,r=n.Picture;return c.length===t+1?Object(Ln.jsx)(Rn,{to:"scenicSpot/scenicSpotDetail/".concat(e),children:Object(Ln.jsxs)(Zn,{index:t+1,ref:s,children:[Object(Ln.jsx)(_n,{children:i}),Object(Ln.jsx)($n,{children:o}),Object(Ln.jsx)(nt,{children:a||"\u6c92\u6709\u7c21\u4ecb"}),Object(Ln.jsx)("img",{className:"SpotListImg",alt:r.PictureDescription1,src:r.PictureUrl1?r.PictureUrl1:"\u6c92\u6709\u5716\u7247"})]})},e):Object(Ln.jsx)(Rn,{to:"scenicSpot/scenicSpotDetail/".concat(e),children:Object(Ln.jsxs)(Zn,{index:t+1,children:[Object(Ln.jsx)(_n,{children:i}),Object(Ln.jsx)($n,{children:o}),Object(Ln.jsx)(nt,{children:a||"\u6c92\u6709\u7c21\u4ecb"}),Object(Ln.jsx)("img",{className:"SpotListImg",alt:r.PictureDescription1,src:r.PictureUrl1?r.PictureUrl1:"\u6c92\u6709\u5716\u7247"})]})},e)})):Object(Ln.jsx)(qn,{children:"Loading..."})})),lt=function(n){Object(h.a)(e,n);var t=Object(j.a)(e);function e(){return Object(x.a)(this,e),t.apply(this,arguments)}return Object(f.a)(e,[{key:"render",value:function(){return Object(Ln.jsxs)(Ln.Fragment,{children:[Object(Ln.jsx)(Vn,{children:"\u98a8\u666f"}),Object(Ln.jsx)(pt,{})]})}}]),e}(u.Component),ut=e(62),bt=v.b.div(tt||(tt=Object(C.a)(["\n padding: 20px;\n text-align: center;\n font-size: 40px;\n line-height:40px;\n height:250px;\n"]))),gt=Object(v.b)(O.b)(et||(et=Object(C.a)(["\n  text-decoration: none;\n  color:#777\n"]))),xt=v.b.div(it||(it=Object(C.a)(["\n cursor: pointer;\n min-height: 200px;\n position: relative;\n margin: 50px 30px;\n padding: 15px 30px;\n box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);\n .SpotListImg{\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 20px;\n  width:150px;\n  height:150px;\n }\n  &:after {\n   z-index: -1;\n   position: absolute;\n   bottom: 10px;\n   left: 10px;\n   content: '","';\n   font-size: 80px;\n   color: #888;\n   opaticy: 0.2;\n   transform: skewX(-36deg);\n  }\n"])),(function(n){return n.index})),ft=(v.b.div(ot||(ot=Object(C.a)(["\n font-size: 25px;\n font-weight: 800;\n text-align: center;\n line-height: 75px;\n height: 75px;\n width: 100%;\n background: whitesmoke;\n color: #888;\n"]))),v.b.div(at||(at=Object(C.a)(["\n font-size: 25px;\n padding:10px 30px;\n"])))),ht=v.b.div(ct||(ct=Object(C.a)(["\n font-size: 15px;\n padding:10px 35px;\n"]))),jt=v.b.div(rt||(rt=Object(C.a)(["\n max-width:500px;\n margin-top: 10px;\n padding:0px 30px;\n"]))),Ot=v.b.div(st||(st=Object(C.a)(["\n display: flex;\n justify-content: center;\n flex-wrap: wrap;\n line-height: 50px;\n min-height: 50px;\n background: whitesmoke;\n"]))),mt=Object(v.b)(O.b)(dt||(dt=Object(C.a)(["\n text-decoration: none;\n cursor: pointer;\n border: 1px solid white;\n margin:5px;\n padding:10px;\n color: #888;\n font-weight: 800;\n font-size: 10px;\n &:hover {\n  background:white;\n  color: #666;\n }\n &:focus{\n  background:white;\n  color: #666;\n }\n  "])));var yt=Object(y.b)((function(n){return{SpotCityList:n.getIn(["spotCity","City"])}}),(function(n){return{handleLoading:function(t){n(o.loading(t))},handleHasMoreList:function(t,e,i,a,c,r){n(o.getMoreSpotCityList(t,e,i,a,c,r))}}}))((function(n){var t=n.SpotCityList,e=n.handleLoading,i=n.handleHasMoreList,o=t.toJS(),a=Object(m.e)(),c=o.map((function(n){var t=Object.values(n).slice(0,1);return Object(ut.a)(t,1)[0]})).indexOf("".concat(a.cityname)),r=o[c].CityName,s=o[c].CityNameEN,d=o[c].Citylist,p=o[c].Citylist.length,l=o[c].hasMore,b=o[c].loading,g=Object(u.useRef)(),x=Object(u.useCallback)((function(n){g.current&&g.current.disconnect(),g.current=new IntersectionObserver((function(n){n[0].isIntersecting&&(e(c),i(s,c,d,l,p,b))})),n&&g.current.observe(n)}),[s,c,d,p,l,b,i,e]);return 0!==o.length||b?o.map((function(n){return n.CityName===a.cityname?n.Citylist.map((function(t,e){var i=t.ID,o=t.Name,a=t.Address,c=t.Description,s=t.Picture;return n.Citylist.length===e+1?Object(Ln.jsx)(gt,{to:"".concat(r,"/scenicSpotDetail/").concat(i),children:Object(Ln.jsxs)(xt,{index:e+1,ref:x,children:[Object(Ln.jsx)(ft,{children:o}),Object(Ln.jsx)(ht,{children:a}),Object(Ln.jsx)(jt,{children:c||"\u6c92\u6709\u7c21\u4ecb"}),Object(Ln.jsx)("img",{className:"SpotListImg",alt:s.PictureDescription1,src:s.PictureUrl1?s.PictureUrl1:"\u6c92\u6709\u5716\u7247"})]})},i):Object(Ln.jsx)(gt,{to:"".concat(r,"/scenicSpotDetail/").concat(i),children:Object(Ln.jsxs)(xt,{index:e+1,children:[Object(Ln.jsx)(ft,{children:o}),Object(Ln.jsx)(ht,{children:a}),Object(Ln.jsx)(jt,{children:c||"\u6c92\u6709\u7c21\u4ecb"}),Object(Ln.jsx)("img",{className:"SpotListImg",alt:s.PictureDescription1,src:s.PictureUrl1?s.PictureUrl1:"\u6c92\u6709\u5716\u7247"})]})},i)})):null})):Object(Ln.jsx)(bt,{children:"Loading..."})}));var Ct,vt,St,At,Nt,wt,kt,It,Lt,Mt,Dt,Et,Pt,zt,Bt,Ht,Tt=Object(y.b)((function(n){return{City:n.getIn(["spotCity","City"])}}),(function(n){return{handleSpotCityList:function(t,e,i){n(o.getSpotCityList(t,e,i))}}}))((function(n){var t=n.City,e=n.handleSpotCityList,i=t.toJS();return Object(Ln.jsx)(Ot,{children:i.map((function(n,t){var i=n.CityName,o=n.CityNameEN,a=n.Citylist;return Object(Ln.jsx)(mt,{to:"/scenicSpot/city/".concat(i),onClick:function(){e(o,t,a)},children:n.CityName},o)}))})})),Jt=function(n){Object(h.a)(e,n);var t=Object(j.a)(e);function e(){return Object(x.a)(this,e),t.apply(this,arguments)}return Object(f.a)(e,[{key:"render",value:function(){return Object(Ln.jsxs)(Ln.Fragment,{children:[Object(Ln.jsx)(Tt,{}),Object(Ln.jsx)(yt,{})]})}}]),e}(u.Component),Qt=v.b.div(Ct||(Ct=Object(C.a)(["\n padding: 50px;\n"]))),Gt=v.b.div(vt||(vt=Object(C.a)(["\n padding: 20px;\n display: flex;\n flex-direction: column;\n justify-content: center;\n align-items: center;\n box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);\n"]))),Ft=v.b.div(St||(St=Object(C.a)(["\n margin: 50px;\n font-weight: bold;\n text-align: center;\n font-size: 30px;\n background: white;\n"]))),Xt=v.b.div(At||(At=Object(C.a)(["\n display: flex;\n color:#666;\n font-size: 15px;\n flex-direction: row;\n flex-wrap: wrap;\n justify-content: center;\n align-items: center;  \n padding: 5px;\n background: #888;\n"]))),Ut=v.b.div(Nt||(Nt=Object(C.a)(["\npadding:20px;\nbackground: whitesmoke;\n"]))),Yt=v.b.div(wt||(wt=Object(C.a)(["\npadding:20px;\nbackground: whitesmoke;\n"]))),Wt=v.b.div(kt||(kt=Object(C.a)(["\n margin-top: 50px;\n padding:50px 20px;\n font-size:25px;\n background: whitesmoke;\n"]))),Kt=v.b.div(It||(It=Object(C.a)(["\n background: whitesmoke;\n align-self: flex-start;\n"]))),qt=v.b.div(Lt||(Lt=Object(C.a)(["\n background: whitesmoke;\n align-self: flex-start;\n"]))),Rt=v.b.div(Mt||(Mt=Object(C.a)(["\n background: whitesmoke;\n align-self: flex-start;\n"]))),Zt=v.b.div(Dt||(Dt=Object(C.a)(["\n background: whitesmoke;\n align-self: flex-start;\n"]))),Vt=v.b.div(Et||(Et=Object(C.a)(["\n background: whitesmoke;\n align-self: flex-start;\n"]))),_t=v.b.div(Pt||(Pt=Object(C.a)(["\n background: url(",");\n background-position: center;\n background-repeat: no-repeat;\n background-size: cover;\n height:500px;\n width:100%;\n"])),(function(n){return n.img})),$t=v.b.div(zt||(zt=Object(C.a)(["\n display: flex;\n flex-direction: row;\n justify-content: space-between;\n width:100%;\n"]))),ne=v.b.div(Bt||(Bt=Object(C.a)(["\n background-color: #aaaa;\n padding: 10px;\n color: whitesmoke;\n font-weight: bold;\n"]))),te=v.b.div(Ht||(Ht=Object(C.a)(["\n background-color: coral;\n padding: 10px;\n color: red;\n font-weight: bold;\n"]))),ee=function(n){var t=n.indexOf("T"),e=n.slice(0,t),i=n.lastIndexOf("+08:00"),o=n.slice(t+1,i);return console.log(e,o),"".concat(e," ").concat(o)};var ie,oe,ae,ce,re,se,de,pe,le,ue,be=Object(y.b)((function(n){return{CityDetail:n.getIn(["spotDetail","CityDetail"])}}),(function(n){return{handleCityDetail:function(t){n(a.getCityDetail(t))}}}))((function(n){var t=n.CityDetail,e=n.handleCityDetail,i=Object(m.e)(),o=t.toJS();if(0===o.length)return e(i.detailId),null;var a=o[0].ID;return i.detailId!==a&&e(i.detailId),Object(Ln.jsx)(Qt,{children:Object(Ln.jsxs)(Gt,{children:[Object(Ln.jsx)(Ft,{children:o[0].Name}),Object(Ln.jsxs)(Xt,{children:[Object(Ln.jsxs)(Ut,{children:["\u89c0\u5149\u5c40\u6a94\u6848\u66f4\u65b0\u6642\u9593:",ee(o[0].SrcUpdateTime)]}),Object(Ln.jsxs)(Yt,{children:["\u672c\u5e73\u53f0\u8cc7\u6599\u66f4\u65b0\u6642\u9593:",ee(o[0].UpdateTime)]})]}),Object(Ln.jsx)(Wt,{children:o[0].DescriptionDetail?o[0].DescriptionDetail:"\u6c92\u6709\u8cc7\u8a0a"}),Object(Ln.jsxs)(Kt,{children:["\u670d\u52d9\u96fb\u8a71:",o[0].Phone?o[0].Phone:"\u6c92\u6709\u8cc7\u8a0a"]}),Object(Ln.jsxs)(qt,{children:["\u666f\u9ede\u5730\u5740:",o[0].Address?o[0].Address:"\u6c92\u6709\u8cc7\u8a0a"]}),Object(Ln.jsxs)(Rt,{children:["\u90f5\u905e\u5340\u865f:",o[0].ZipCode?o[0].ZipCode:"\u6c92\u6709\u8cc7\u8a0a"]}),Object(Ln.jsxs)(Zt,{children:["\u4ea4\u901a\u8cc7\u8a0a:",o[0].TravelInfo?o[0].TravelInfo:"\u6c92\u6709\u8cc7\u8a0a"]}),Object(Ln.jsxs)(Vt,{children:["\u958b\u653e\u6642\u9593:",o[0].OpenTime?o[0].OpenTime:"\u6c92\u6709\u8cc7\u8a0a"]}),Object(Ln.jsx)(_t,{img:o[0].Picture.PictureUrl1?o[0].Picture.PictureUrl1:"\u6c92\u6709\u5716\u7247"}),Object(Ln.jsxs)($t,{children:[Object(Ln.jsxs)(ne,{children:["\u7968\u50f9\u8cc7\u8a0a:",o[0].TicketInfo?o[0].TicketInfo:"\u6c92\u6709\u8cc7\u8a0a"]}),Object(Ln.jsxs)(te,{children:["\u8b66\u544a\u53ca\u6ce8\u610f\u4e8b\u9805:",o[0].Remarks?o[0].Remarks:"\u6c92\u6709\u8cc7\u8a0a"]})]})]})})})),ge=function(n){Object(h.a)(e,n);var t=Object(j.a)(e);function e(){return Object(x.a)(this,e),t.apply(this,arguments)}return Object(f.a)(e,[{key:"render",value:function(){return Object(Ln.jsx)(be,{})}}]),e}(u.Component),xe=v.b.div(ie||(ie=Object(C.a)(['\n position: relative;\n display: grid;\n grid-template-columns: 500px auto;\n grid-template-rows: 80vh;\n  grid-template-areas:\n    "side main"\n']))),fe=v.b.div(oe||(oe=Object(C.a)(["\n grid-area: side;\n box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);\n padding: 10px 10px;\n overflow-y: scroll;\n::-webkit-scrollbar {\n width: 5px;\n}\n\n::-webkit-scrollbar-track {\n background: #f1f1f1;\n}\n\n::-webkit-scrollbar-thumb {\n background: green;\n}\n\n::-webkit-scrollbar-thumb:hover {\n background: green;\n}\n"]))),he=v.b.div(ae||(ae=Object(C.a)(["\n display: flex;\n flex-direction: row;\n flex-wrap: wrap;\n justify-content: center;\n margin-top: 10px;\n box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);\n padding: 5px 10px;\n"]))),je=v.b.div(ce||(ce=Object(C.a)(["\n cursor: pointer;\n border-radius: 23px;\n display: flex;\n flex-direction: column;\n margin: 20px 10px;\n padding: 15px 30px;\n box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);\n"]))),Oe=v.b.div(re||(re=Object(C.a)(["\n margin: 10px 2.5px 0px 2.5px;\n border-radius: 23px;\n width: 100px;\n cursor: pointer;\n text-align: center;\n font-size: 10px;\n padding: 10px;\n box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);\n"]))),me=v.b.div(se||(se=Object(C.a)(["\n font-size: 20px;\n font-weight: bold;\n text-align: center;\n"]))),ye=v.b.div(de||(de=Object(C.a)(["\n margin:20px 2.5px;\n font-size: 10px;\n font-weight: 600;\n"]))),Ce=v.b.div(pe||(pe=Object(C.a)(["\n margin:20px 2.5px;\n font-size: 10px;\n font-weight: 400;\n text-align: end;\n"]))),ve=(v.b.div(le||(le=Object(C.a)(["\n background-color: rgba(35, 55, 75, 0.9);\n grid-area: main;\n color: #ffffff;\n padding: 6px 12px;\n font: 15px/24px monospace;\n z-index: 1;\n position: absolute;\n top: 0;\n left: 0;\n margin: 12px;\n border-radius: 4px;\n"]))),v.b.div(ue||(ue=Object(C.a)(["\n overflow: hidden;\n position: absolute;\n grid-area: main;\n top: 0;\n right: 0;\n left: 0;\n bottom: 0;\n .mapboxgl-control-container{\n  display:none;\n }\n .mapCard{\n     position: absolute;\n     padding: 10px;\n     top: -250px;\n     left: -160px;\n     background: red;\n     height: 200px;\n     width: 300px;\n     .mapCardTitle{\n      font-size: 20px;\n      text-align: center;\n      color: snow;\n      margin: 20px;\n     }\n     .mapCardAddress{\n      font-size:15px;\n      text-align: center;\n      color: snow;\n      margin: 10px;\n     }\n     .mapCardBtn{\n      display: flex;\n      margin: 40px auto;\n      padding: 10px;\n      font-weight: bold;\n      cursor: pointer;\n      font-size: 20px;\n      border: 1px solid black;\n      color: black;\n     }\n }\n .mapboxgl-popup {\n  position: absolute;\n  top: 0;\n  left: 0;\n }\n .mapboxgl-popup-close-button {\n  position: absolute;\n  font-size: 20px;\n  border: 3px solid black;\n  border-radius: 35px;\n  top: -260px;\n  right: -170px;\n }\n"]))));var Se=function(n,t,e,i,o){return Object(Ln.jsxs)(Ln.Fragment,{children:[Object(Ln.jsx)(Oe,{onClick:function(){e(n)},children:"\u5168\u90e8"}),t.map((function(n,t){return Object(Ln.jsx)(Oe,{onClick:function(){i(n.CityNameEN,t,n.Citylist),o(t)},children:n.CityName},n.CityName)}))]})},Ae=function(n,t,e,i,o,a,c,r){return void 0!==t&&n[t].Citylist!==[]?n[t].Citylist.map((function(n){return Object(Ln.jsxs)(je,{onClick:function(){a(Number(n.Position.PositionLat)),o(Number(n.Position.PositionLon)),c(12),r(e,i,n.Position.PositionLon,n.Position.PositionLat)},children:[Object(Ln.jsx)(me,{children:n.Name}),Object(Ln.jsx)(ye,{children:n.Address}),Object(Ln.jsx)(Ce,{children:n.Phone})]},n.ID)})):Object(Ln.jsx)("div",{children:"\u8acb\u9078\u4e00\u500b\u7e23\u5e02"})},Ne=Object(y.b)((function(n){return{City:n.getIn(["spotCity","City"]),cityIndex:n.getIn(["SpotMap","cityIndex"]),lng:n.getIn(["SpotMap","lng"]),lat:n.getIn(["SpotMap","lat"])}}),(function(n){return{handleSpotCityList:function(t,e,i){n(o.getSpotCityList(t,e,i))},handleSpotIndex:function(t){n(c.getSpotCityIndex(t))},handleLng:function(t){n(c.fixLngChange(t))},handleLat:function(t){n(c.fixLatChange(t))},handleZoom:function(t){n(c.fixZoomChange(t))},handleNewCoordinates:function(t,e,i,o){n(c.fixNewCoordinates(t,e,i,o))}}}))((function(n){var t=n.CityAll,e=n.City,i=n.cityIndex,o=n.lng,a=n.lat,c=n.handleSpotList,r=n.handleSpotCityList,s=n.handleSpotIndex,d=n.handleLng,p=n.handleLat,l=n.handleZoom,u=n.handleNewCoordinates,b=t,g=e.toJS();return Object(Ln.jsxs)(fe,{children:[Object(Ln.jsx)(he,{children:Se(b,g,c,r,s)}),Ae(g,i,o,a,d,p,l,u)]})})),we=e(25),ke=e.n(we),Ie=e(61);ke.a.workerClass=Ie.a,ke.a.accessToken="pk.eyJ1IjoidmluY2VudDE5OTYxMTEyIiwiYSI6ImNrbWJuOWJpZzFvMWgyb2xhcnhjdjdieG8ifQ.dQitPZUergSwkepHFAJPhA";var Le=Object(y.b)((function(n){return{lng:n.getIn(["SpotMap","lng"]),lat:n.getIn(["SpotMap","lat"]),zoom:n.getIn(["SpotMap","zoom"]),stores:n.getIn(["SpotMap","stores"]),isNewCoordinates:n.getIn(["SpotMap","isNewCoordinates"])}}),(function(n){return{handleLng:function(t){n(On(t))},handleLat:function(t){n(mn(t))},handleZoom:function(t){n(yn(t))},handleGetAllCity:function(){n(hn())}}}))((function(n){var t=n.lng,e=n.lat,i=n.zoom,o=n.isNewCoordinates,a=n.stores,c=n.handleGetAllCity,r=Object(u.useRef)(),s=a.toJS();return Object(u.useEffect)((function(){c()}),[c]),Object(u.useEffect)((function(){var n=new ke.a.Map({container:r.current,style:"mapbox://styles/mapbox/outdoors-v11",center:[t,e],zoom:i});return n.on("load",(function(){n.loadImage("data:image/png;base64,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",(function(t,e){if(t)throw t;n.addImage("cityMarker",e),n.addSource("points",{type:"geojson",data:s}),n.addLayer({id:"points",type:"symbol",source:"points",layout:{"icon-image":"cityMarker","icon-size":.2}})})),o||function(n,t,e){n.flyTo({center:[t,e],zoom:15})}(n,t,e)})),n.on("click","points",(function(t){!function(n,t){var e=t.features[0].geometry.coordinates,i=t.features[0].properties.name,o=t.features[0].properties.address;for(;Math.abs(t.lngLat.lng-e[0])>180;)e[0]+=t.lngLat.lng>e[0]?360:-360;(new ke.a.Popup).setLngLat(e).setHTML('\n    <div class="mapCard">\n    <div class="mapCardTitle">'.concat(i,'</div>\n    <div class="mapCardAddress">').concat(o,'</div>\n    <button class="mapCardBtn">\u95b1\u8b80\u8a73\u60c5</button>\n    </div>\n  ')).addTo(n)}(n,t)})),n.on("mouseenter","points",(function(){n.getCanvas().style.cursor="pointer"})),n.on("mouseleave","points",(function(){n.getCanvas().style.cursor=""})),function(){return n.remove()}}),[s,t,e,i,o]),Object(Ln.jsx)(Ln.Fragment,{children:Object(Ln.jsx)(ve,{ref:r})})})),Me=function(n){Object(h.a)(e,n);var t=Object(j.a)(e);function e(){return Object(x.a)(this,e),t.apply(this,arguments)}return Object(f.a)(e,[{key:"render",value:function(){return Object(Ln.jsx)(Ln.Fragment,{children:Object(Ln.jsxs)(xe,{children:[Object(Ln.jsx)(Ne,{}),Object(Ln.jsx)(Le,{})]})})}}]),e}(u.Component),De=function(n){Object(h.a)(e,n);var t=Object(j.a)(e);function e(){return Object(x.a)(this,e),t.apply(this,arguments)}return Object(f.a)(e,[{key:"render",value:function(){return Object(Ln.jsxs)(Ln.Fragment,{children:[Object(Ln.jsx)(S,{}),Object(Ln.jsx)(y.a,{store:An,children:Object(Ln.jsxs)(O.a,{basename:"/MOTC",children:[Object(Ln.jsx)(Fn,{}),Object(Ln.jsx)(m.a,{path:"/",exact:!0,component:Kn}),Object(Ln.jsx)(m.a,{path:"/scenicSpot",exact:!0,component:lt}),Object(Ln.jsx)(m.a,{path:"/scenicSpot/ScenicSpotMap",exact:!0,component:Me}),Object(Ln.jsx)(m.a,{path:"/scenicSpot/city/:cityname",exact:!0,component:Jt}),Object(Ln.jsx)(m.a,{path:"/scenicSpot/scenicSpotDetail/:detailId",exact:!0,component:ge}),Object(Ln.jsx)(m.a,{path:"/scenicSpot/:cityname/scenicSpotDetail/:detailId",exact:!0,component:ge})]})})]})}}]),e}(u.Component);g.a.render(Object(Ln.jsx)(De,{}),document.getElementById("root"))}},[[112,1,2]]]);
//# sourceMappingURL=main.eb45d8b5.chunk.js.map