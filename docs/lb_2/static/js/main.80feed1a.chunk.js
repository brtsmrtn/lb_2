(this.webpackJsonplink_biscuit=this.webpackJsonplink_biscuit||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(1),s=n.n(i),o=n(8),l=n.n(o),c=n(7),u=n(2),r=n(3),d=n(5),h=n(4);var f=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;Object(u.a)(this,n);var i=(a=t.call(this,e)).props.value;return a.state={value:i},a}return Object(r.a)(n,[{key:"handleChange",value:function(e){this.props.onChange(e)}},{key:"componentWillReceiveProps",value:function(e){var t=e.value;this.setState({value:t}),console.log("addlink change#1")}},{key:"render",value:function(){return Object(a.jsx)("input",{type:"text",autoComplete:"off",spellCheck:"false",autoCorrect:"off",required:!0,placeholder:"https://medium.com/swlh/sexism-in-tech-an-inconvenient-truth-26df0329e39",value:this.state.value,onChange:this.handleChange.bind(this)})}}]),n}(s.a.Component),b=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;Object(u.a)(this,n);var i=(a=t.call(this,e)).props.disabled;return a.state={disabled:i},a}return Object(r.a)(n,[{key:"handleChange",value:function(e){this.props.onClick(e),console.log("submit change#2")}},{key:"componentWillReceiveProps",value:function(e){var t=e.disabled;this.setState({disabled:t}),console.log("submit change#1")}},{key:"render",value:function(){return Object(a.jsx)("input",{type:"submit",value:"Add link",disabled:this.state.disabled,onClick:this.handleChange.bind(this)})}}]),n}(s.a.Component),v=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;Object(u.a)(this,n);var i=(a=t.call(this,e)).props.message;return a.state={message:i},a}return Object(r.a)(n,[{key:"componentWillReceiveProps",value:function(e){var t=e.message;this.setState({message:t}),console.log("prompt change#1")}},{key:"render",value:function(){return Object(a.jsxs)("p",{children:["\u25b6 ",this.state.message]})}}]),n}(s.a.Component),g=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={value:"",disabled:!0,message:"Use this place for storing interesting pieces of the web you actually want to read."},a}return Object(r.a)(n,[{key:"prevalidateLink",value:function(e){var t,n,a=!0,i="Use this place for storing interesting pieces of the web you actually want to read.";return console.log("prevalidateLink#1"),e&&(n=e,console.log("validateLink#1"),/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(n)?(a=!1,i="Looks great"):i="Something's going on, but it's not quite it"),this.setState((t={},Object(c.a)(t,"message",i),Object(c.a)(t,"disabled",a),t)),e}},{key:"handleLinkChange",value:function(e){this.setState({value:this.prevalidateLink(e.currentTarget.value)}),console.log("handleLinkChange#1")}},{key:"SubmitForm",value:function(e){}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(f,{value:this.state.value,onChange:this.handleLinkChange.bind(this)}),Object(a.jsx)(b,{disabled:this.state.disabled,onClick:this.SubmitForm.bind(this)}),Object(a.jsx)(v,{message:this.state.message})]})}}]),n}(s.a.Component),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),s(e),o(e)}))};l.a.render(Object(a.jsx)(g,{}),document.getElementById("root")),p()}},[[14,1,2]]]);
//# sourceMappingURL=main.80feed1a.chunk.js.map