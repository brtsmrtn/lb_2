(this.webpackJsonplb_2=this.webpackJsonplb_2||[]).push([[0],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"history",(function(){return Me}));var a=n(0),r=n.n(a),i=n(11),c=n.n(i),o=(n(88),n(14)),l=n(24),u="SET_URL",d=function(e){return{type:u,url:e}};function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return t.url;default:return e}}Object(l.a)({reducer:g});var s=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.urlInput}));return r.a.createElement("input",{type:"text",autoComplete:"off",spellCheck:"false",autoCorrect:"off",required:!0,value:t,placeholder:"https://medium.com/swlh/sexism-in-tech-an-inconvenient-truth-26df0329e39",onChange:function(t){return e(d(t.currentTarget.value.toLowerCase()))}})};function b(e,t){return!!t.find((function(t){return t.url===e}))}var f=n(67),p=n.n(f);function h(e){return p()(e)}var m=n(134),v=["#b3e5fc","#ffcdd2","#dcedc8","#c5cae9","#cfd8dc","#fff9c4","#d1c4e9","#ffccbc","#f0f4c3","#b2ebf2","#d7ccc8","#ffecb3","#f8bbd0","#b2dfdb","#f5f5f5"],y="LinkBiscuit",B="/lb_2/",O="to_read",k="to read",E="already read",x=n(35),j=n(16),M=0,T="LOAD_ITEMS",S="ADD_NEW_ITEM",_="ASSIGN_TAG_TO_ITEM",C=function(e,t){return{type:_,item:t,tag:e}},I="UNASSIGN_TAG_FROM_ITEM",w="TOGGLE_ITEM_STATUS",A=[];function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:var n=localStorage.getItem("".concat(y,"_items"));if(n){var a=JSON.parse(n);return M=Math.max.apply(Math,Object(j.a)(a.map((function(e){return Number(e.id)})))),a}return[];case S:return[].concat(Object(j.a)(e),[t.listItem]);case _:var r=t.item,i=t.tag,c=e.findIndex((function(e){return e.id===r.id}));return r.tags.filter((function(e){return e.title===i.title})).length?Object(j.a)(e):[].concat(Object(j.a)(e.slice(0,c)),[Object(x.a)(Object(x.a)({},r),{},{tags:[].concat(Object(j.a)(r.tags),[i])})],Object(j.a)(e.slice(c+1)));case I:var o=t.item,l=t.tag,u=o.tags.findIndex((function(e){return e.id===l.id})),d=[].concat(Object(j.a)(o.tags.slice(0,u)),Object(j.a)(o.tags.slice(u+1))),g=Object(x.a)(Object(x.a)({},o),{},{tags:d}),s=e.findIndex((function(e){return e.id===g.id}));return[].concat(Object(j.a)(e.slice(0,s)),[g],Object(j.a)(e.slice(s+1)));case w:var b=t.item,f=e.findIndex((function(e){return e.id===b.id}));return[].concat(Object(j.a)(e.slice(0,f)),[Object(x.a)(Object(x.a)({},b),{},{alreadyRead:!b.alreadyRead})],Object(j.a)(e.slice(f+1)));default:return e}}Object(l.a)({reducer:N});var D=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e})),n=t.items,a=t.urlInput;return r.a.createElement(m.a,{variant:"outlined",color:"primary",disabled:!h(a)||b(a,n)||a.length>=2083,onClick:function(){var t;e((t=a,M++,{type:S,listItem:{id:M.toString(),url:t,date:(new Date).getTime().toString(),alreadyRead:!1,tags:[]}})),e(d(""))}},"Add link")};var L="This one I've got already!",R="That link looks good.",W="That link still needs some sauce.",F="Beginning with http(s):// is a must.",G="The link is too long.",J={assigned:"Tag already assigned",submit:"Submit with 'Enter'",wrong:"Something is wrong",empty:void 0};var U=function(){var e=Object(o.c)((function(e){return e})),t=e.items,n=function(e,t){return function(e){return!!e}(e)?function(e){return/(http(s?)):\/\//i.test(e)}(e)?e.length>=2083?G:h(e)?b(e,t)?L:R:W:F:void 0}(e.urlInput,t);return n?r.a.createElement("p",null,"\u25b6 ",n):t.length?r.a.createElement("p",null,"\u25b6 Wanna read something? You've got ",t.length," link","",1===t.length?"":"s"," here."):r.a.createElement("p",null,"\u25b6 Start with adding ",r.a.createElement("i",null,"http(s)")," link in the field above.")},K=n(145),P=n(143),z=n(142),q=n(13),H=n(47),Y=n(40),Q=n(146),V=n(149),X=function(e){var t=e.editable,n=e.item,a=Object(o.b)();return r.a.createElement("div",null,n.tags.map((function(e,i){return r.a.createElement(V.a,Object.assign({key:e.id,label:e.title,style:{backgroundColor:e.color}},{"data-tag-index":i},t&&{onDelete:function(){n.tags.find((function(t){return t.id===e.id}))&&a(function(e,t){return{type:I,tag:e,item:t}}(e,n))}}))})))},Z=n(148),$=n(140),ee=n(150),te=n(144),ne=n(141),ae=0,re="LOAD_KNOWN_TAGS",ie="ADD_KNOWN_TAG",ce=[];function oe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case re:var n=localStorage.getItem("".concat(y,"_knownTags"));if(n){var a=JSON.parse(n);return ae=Math.max.apply(Math,Object(j.a)(a.map((function(e){return Number(e.id)})))),a}return[];case ie:return[].concat(Object(j.a)(e),[t.tag]);default:return e}}Object(l.a)({reducer:oe});var le="LOAD_TABS",ue="ADD_NEW_TAB",de=[{index:0,title:k,predefined:!0,coloredWith:""},{index:1,title:E,predefined:!0,coloredWith:""}],ge=de,se=Math.max.apply(Math,Object(j.a)(de.map((function(e){return e.index}))));function be(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case le:var n=localStorage.getItem("".concat(y,"_tabs"));if(n){var a=JSON.parse(n);return se=Math.max.apply(Math,Object(j.a)(a.map((function(e){return e.index})))),a}return de;case ue:return[].concat(Object(j.a)(e),[t.tab]);default:return e}}Object(l.a)({reducer:be});var fe=function(e){var t=e.item,n=Object(o.b)(),i=Object(o.c)((function(e){return e.knownTags})),c=Object(a.useState)(!1),l=Object(Y.a)(c,2),u=l[0],d=l[1],g=Object(a.useState)(void 0),s=Object(Y.a)(g,2),b=s[0],f=s[1],p=function(e,t){return t.find((function(t){return t.title===e}))},h=function(e,t){var a,r=e.target.value;if("Enter"===e.key&&r){var c=p(r,t.tags),o=p(r,i);if(!c)if(o)n(C(o,t)),f(J.empty);else{var l=(a=r,ae++,{type:ie,tag:{id:ae.toString(),title:a,color:v[ae>=v.length?v.length-1:ae-1]}});n(l),p(r,t.tags)?f(J.assigned):(n(function(e){return se++,{type:ue,tab:{index:se,title:e.title,predefined:!1,coloredWith:e.color}}}(l.tag)),n(C(l.tag,t)),f(J.empty))}}};return r.a.createElement("div",null,r.a.createElement(m.a,{variant:"outlined",color:"primary",onClick:function(){return d(!0)}},"Add tag"),r.a.createElement(Z.a,{open:u,onClose:function(){return d(!1)},"aria-labelledby":"form-dialog-title"},r.a.createElement($.a,null,r.a.createElement(ee.a,{style:{color:"black"}},"Add new tag or pick any from the list."),r.a.createElement(ee.a,{style:{fontStyle:"italic",fontSize:12,height:"20px"}},b),r.a.createElement(Q.a,{style:{marginBottom:"120px"},options:i,getOptionLabel:function(e){return e.title},getOptionSelected:function(e,t){return e.title===t.title},value:t.tags,clearOnBlur:!1,multiple:!0,disableClearable:!0,id:"tags-outlined",filterSelectedOptions:!0,selectOnFocus:!0,autoComplete:!0,onChange:function(e,a,r){a&&function(e,t,a){var r=e[e.length-1];"select-option"===t&&(p(r.title,a.tags)?f(J.submit):(n(C(r,a)),f(J.empty)))}(a,r,t)},ListboxProps:{style:{maxHeight:"100px"}},renderInput:function(e){return r.a.createElement(te.a,Object.assign({},e,{variant:"outlined",autoFocus:!0,onChange:function(e){return function(e,t){var n=e.target.value;if(n){var a=p(n,t.tags);f(a?J.assigned:J.submit)}else f(J.empty)}(e,t)},onKeyDown:function(e){return h(e,t)}}))},renderTags:function(){return r.a.createElement(X,{editable:!0,item:t})}})),r.a.createElement(ne.a,null,r.a.createElement(m.a,{onClick:function(){return d(!1)},color:"primary"},"Close"))))},pe=function(e){var t=e.item,n=Object(o.b)();return r.a.createElement("tr",null,r.a.createElement("td",null,t.url),r.a.createElement("td",null,t.date),r.a.createElement("td",null,r.a.createElement(m.a,{variant:"outlined",color:"primary",onClick:function(){n(function(e){return{type:w,item:e}}(t))}},t.alreadyRead?"Unread":"Read")),r.a.createElement("td",null,r.a.createElement(fe,{item:t,key:t.id})),r.a.createElement("td",null,r.a.createElement(X,{editable:!1,item:t,key:t.id})))},he=function(e){var t=e.displayTabs,n=e.selectedTabIndex,a=Object(o.c)((function(e){return e})).items;return r.a.createElement("div",null,t.map((function(e){var t=function(e){return e.title===k?a.filter((function(e){return!e.alreadyRead})):e.title===E?a.filter((function(e){return e.alreadyRead})):a.filter((function(t){return t.tags.find((function(t){return t.title===e.title}))}))}(e);return r.a.createElement("div",{role:"tabpanel",hidden:n!==e.index,id:"vertical-tabpanel-".concat(e.index),"aria-labelledby":"vertical-tab-".concat(e.index),key:e.index},t.length?r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"URL"),r.a.createElement("th",null,"Date"))),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement(pe,{item:e,key:e.id})})))):r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null)),r.a.createElement("tbody",null,"empty")))})))},me=Object(z.a)((function(e){return{label:{color:"#FFF000"},indicator:{backgroundColor:"blue"},root:{flexGrow:1,backgroundColor:e.palette.background.paper,boxShadow:"0 1px 3px 1px rgba(20,20,20, .3)",display:"flex",height:600,"& .MuiTabs-scroller":{"& span.MuiTabs-indicator":{backgroundColor:"black"},"& .MuiButtonBase-root":{visibility:"visible"},"& .MuiButtonBase-root span:nth-child(1)":{backgroundColor:"rgba(255,255,255,1)",color:"rgba(0, 0, 0, 1)",border:"none",height:"32px",width:"auto",display:"inline-flex",outline:0,boxSizing:"border-box",whiteSpace:"nowrap",borderRadius:"16px",verticalAlign:"middle",justifyContent:"center",textDecoration:"none",overflow:"hidden",paddingLeft:"12px",paddingRight:"12px",textOverflow:"ellipsis",maxWidth:"auto",cursor:"pointer"},"& .MuiButtonBase-root:nth-child(1) span:nth-child(1)":{backgroundColor:"rgba(255, 255, 255, 1)"},"& .MuiButtonBase-root:nth-child(2) span:nth-child(1)":{backgroundColor:"rgba(255, 255, 255, 1)"},"& .MuiButtonBase-root:nth-child(1)":{backgroundColor:"rgba(255, 255, 255, 1)"},"& .MuiButtonBase-root:nth-child(2)":{backgroundColor:"rgba(255, 255, 255, 1)"},"& .MuiButtonBase-root.chip-1":{background:"linear-gradient(90deg, rgba(255,255,255,0.5) 25%, ".concat(v[0]," 100%)")},"& .MuiButtonBase-root.chip-1:hover":{background:"linear-gradient(90deg, rgba(255,255,255,0.25) 0%, ".concat(v[0]," 10%)")},"& .MuiButtonBase-root.chip-2":{background:"linear-gradient(90deg, rgba(255,255,255,0.5) 25%, ".concat(v[1]," 100%)")},"& .MuiButtonBase-root.chip-2:hover":{background:"linear-gradient(90deg, rgba(255,255,255,0.25) 0%, ".concat(v[1]," 10%)")},"& .MuiButtonBase-root.chip-3":{background:"linear-gradient(90deg, rgba(255,255,255,0.5) 25%, ".concat(v[2]," 100%)")},"& .MuiButtonBase-root.chip-3:hover":{background:"linear-gradient(90deg, rgba(255,255,255,0.25) 0%, ".concat(v[2]," 10%)")},"& .MuiButtonBase-root.chip-4":{background:"linear-gradient(90deg, rgba(255,255,255,0.5) 25%, ".concat(v[3]," 100%)")},"& .MuiButtonBase-root.chip-4:hover":{background:"linear-gradient(90deg, rgba(255,255,255,0.25) 0%, ".concat(v[3]," 10%)")},"& .MuiButtonBase-root.chip-5":{background:"linear-gradient(90deg, rgba(255,255,255,0.5) 25%, ".concat(v[4]," 100%)")},"& .MuiButtonBase-root.chip-5:hover":{background:"linear-gradient(90deg, rgba(255,255,255,0.25) 0%, ".concat(v[4]," 10%)")},"& .MuiButtonBase-root.chip-6":{background:"linear-gradient(90deg, rgba(255,255,255,0.5) 25%, ".concat(v[5]," 100%)")},"& .MuiButtonBase-root.chip-6:hover":{background:"linear-gradient(90deg, rgba(255,255,255,0.25) 0%, ".concat(v[5]," 10%)")},"& .MuiButtonBase-root.chip-7":{background:"linear-gradient(90deg, rgba(255,255,255,0.5) 25%, ".concat(v[6]," 100%)")},"& .MuiButtonBase-root.chip-7:hover":{background:"linear-gradient(90deg, rgba(255,255,255,0.25) 0%, ".concat(v[6]," 10%)")},"& .MuiButtonBase-root.chip-8":{background:"linear-gradient(90deg, rgba(255,255,255,0.5) 25%, ".concat(v[7]," 100%)")},"& .MuiButtonBase-root.chip-8:hover":{background:"linear-gradient(90deg, rgba(255,255,255,0.25) 0%, ".concat(v[7]," 10%)")},"& .MuiButtonBase-root.chip-9":{background:"linear-gradient(90deg, rgba(255,255,255,0.5) 25%, ".concat(v[8]," 100%)")},"& .MuiButtonBase-root.chip-9:hover":{background:"linear-gradient(90deg, rgba(255,255,255,0.25) 0%, ".concat(v[8]," 10%)")},"& .MuiButtonBase-root.chip-10":{background:"linear-gradient(90deg, rgba(255,255,255,0.5) 25%, ".concat(v[9]," 100%)")},"& .MuiButtonBase-root.chip-10:hover":{background:"linear-gradient(90deg, rgba(255,255,255,0.25) 0%, ".concat(v[9]," 10%)")},"& .MuiButtonBase-root.chip-11":{background:"linear-gradient(90deg, rgba(255,255,255,0.5) 25%, ".concat(v[10]," 100%)")},"& .MuiButtonBase-root.chip-11:hover":{background:"linear-gradient(90deg, rgba(255,255,255,0.25) 0%, ".concat(v[10]," 10%)")},"& .MuiButtonBase-root.chip-12":{background:"linear-gradient(90deg, rgba(255,255,255,0.5) 25%, ".concat(v[11]," 100%)")},"& .MuiButtonBase-root.chip-12:hover":{background:"linear-gradient(90deg, rgba(255,255,255,0.25) 0%, ".concat(v[11]," 10%)")},"& .MuiButtonBase-root.chip-13":{background:"linear-gradient(90deg, rgba(255,255,255,0.5) 25%, ".concat(v[12]," 100%)")},"& .MuiButtonBase-root.chip-13:hover":{background:"linear-gradient(90deg, rgba(255,255,255,0.25) 0%, ".concat(v[12]," 10%)")},"& .MuiButtonBase-root.chip-14":{background:"linear-gradient(90deg, rgba(255,255,255,0.5) 25%, ".concat(v[13]," 100%)")},"& .MuiButtonBase-root.chip-14:hover":{background:"linear-gradient(90deg, rgba(255,255,255,0.25) 0%, ".concat(v[13]," 10%)")}}},tabs:{alignItems:"flex-end",borderRight:"1px solid rgba(240,240,240,1)",inkBarStyle:{background:"#000",height:"5px",marginTop:"-5px"}},tab:{opacity:1,background:"linear-gradient(90deg, rgba(255,255,255,0.5) 25%, ".concat(v[14]," 100%)"),width:200,alignContent:"flex-end",alignSelf:"flex-end",justifyItems:"flex-end",justifySelf:"flex-end",justifyContent:"flex-end",textAlign:"right",textTransform:"none","&:focus":{background:"linear-gradient(90deg, rgba(255,255,255,0) 0%, ".concat(v[14]," 10%)")},"&:hover":{background:"linear-gradient(90deg, rgba(255,255,255,0.25) 0%, ".concat(v[14]," 10%)"),opacity:1},"& span.MuiTab-wrapper, & span.MuiTouchRipple-root":{alignItems:"flex-end"},textColor:""}}})),ve=function(e){var t=e.displayTabs,n=me(),a=Object(q.f)().tabName,i=decodeURIComponent(a).replace("_"," "),c=t.find((function(e){return e.title===i})),o=c?c.index:0;return r.a.createElement("div",{className:n.root},r.a.createElement(K.a,{orientation:"vertical",variant:"scrollable",value:o,"aria-label":"Tabs",indicatorColor:"primary",className:n.tabs},t.map((function(e){if(e){var t=n.tab;return e.coloredWith&&(t+=" chip-".concat(e.index-1)),r.a.createElement(P.a,{key:e.index,component:H.a,to:"/lb_2/".concat(e.title.replace(" ","_")),label:"".concat(e.title),value:e.index,id:"vertical-tab-".concat(e.index),"aria-controls":"vertical-tabpanel-".concat(e.index),className:t})}}))),r.a.createElement(he,{displayTabs:t,selectedTabIndex:o}))},ye=Object(q.g)((function(){var e=Object(o.c)((function(e){return e})),t=e.items,n=e.tabs,a=n.filter((function(e){return e.predefined})).map((function(e){return e.title})),i=t.reduce((function(e,t){return t.tags.forEach((function(t){e.some((function(e){return e===t.title}))||e.push(t.title)})),e}),[]),c=a.concat(i),l=n.filter((function(e){return c.includes(e.title)}));return r.a.createElement("div",null,r.a.createElement(s,null),r.a.createElement(D,null),r.a.createElement(U,null),r.a.createElement(q.b,{exact:!0,path:B},r.a.createElement(q.a,{to:"".concat(B).concat(O)})),r.a.createElement(q.b,{exact:!0,path:"".concat(B,":tabName"),render:function(e){var t=e.location.pathname.replace(B,"").replace("_"," ");return l.find((function(e){return e.title===t}))?r.a.createElement(ve,{displayTabs:l}):r.a.createElement(q.a,{to:"".concat(B).concat(O)})}}))})),Be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,152)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))},Oe={knownTags:[],items:[],tabs:[]};var ke=function(){try{for(var e=0,t=Object.entries(Oe);e<t.length;e++){var n=Object(Y.a)(t[e],1)[0],a=localStorage.getItem("".concat(y,"_").concat(n));null!==a&&(Oe[n]=JSON.parse(a))}return Oe||void 0}catch(r){return void console.warn(r)}}(),Ee=Object(l.a)({reducer:{knownTags:oe,items:N,urlInput:g,tabs:be},preloadedState:ke});Ee.dispatch({type:"LOAD_ITEMS"}),Ee.dispatch({type:"LOAD_KNOWN_TAGS"}),Ee.dispatch({type:"LOAD_TABS"}),Ee.subscribe((function(){return function(e){try{for(var t=0,n=Object.entries(Oe);t<n.length;t++){var a=Object(Y.a)(n[t],1)[0],r=JSON.stringify(e[a]);localStorage.setItem("".concat(y,"_").concat(a),r)}}catch(i){console.warn(i)}}(Ee.getState())}));var xe=Ee,je=n(19),Me=Object(je.a)();c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:xe},r.a.createElement(q.c,{history:Me},r.a.createElement(ye,null))),","),document.getElementById("root")),Be()},88:function(e,t,n){}},[[101,1,2]]]);
//# sourceMappingURL=main.c2f1a056.chunk.js.map