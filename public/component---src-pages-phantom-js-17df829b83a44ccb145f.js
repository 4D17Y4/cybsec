(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{273:function(e,t,n){"use strict";n.r(t);var a=n(3),o=n.n(a),r=n(0),i=n.n(r),s=n(1),l=n.n(s),c=n(5),u=n(277),d=n(22),p=n(17),m=n(276),h=n(26),f=n(282),g=n.n(f),y=(n(283),n(284),function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props.classes;return i.a.createElement(u.a,{className:e.root},i.a.createElement(h.a,{stagger:!0},i.a.createElement("article",null,i.a.createElement("header",null,i.a.createElement("h1",null,i.a.createElement(p.a,null,"phantomCTF"))),i.a.createElement(m.a,null,i.a.createElement("img",{src:g.a,alt:"phantomCTF"})),i.a.createElement("p",null,i.a.createElement(m.a,null,"First time a hacking competition was conducted on 4th January, 2020 in National Institute of Technology, Warangal by Team CybSec with the name PhantomCTF on the intranet accessible to NITW students only.")),i.a.createElement("p",null,"Second part i.e, phantomCTF 2.O is scheduled on 1st March, 2020. Click the below link to register while connecting to NITW college WiFi/LAN."),i.a.createElement("p",null,i.a.createElement(d.a,{href:"https://172.20.41.229/",target:"phantomCTF"},i.a.createElement("center",null,"Link is updated to PhantomCTF 2.O"))),i.a.createElement("p",null,"If link is not opening, proceed to advanced settings and click to open anyway."),i.a.createElement("p",null,"Don't use any ad-blockers and prefer browsers other than google chrome. "),i.a.createElement("p",null,"Make sure you are connected to NITW college LAN/WiFi, if still not working check on other college networks."),i.a.createElement("p",null,"If still not working message us or call us, we will register you. "),i.a.createElement("p",null,i.a.createElement(d.a,{href:"https://forms.gle/H5nhLLQduEdFpKSFA",target:"phantomCTF"},i.a.createElement("center",null,"Google Doc Link for Outsiders / who are not NITW students"))),i.a.createElement("p",null,"You need to be present at NITW to play this CTF"),i.a.createElement("p",null,"Accomodations should be managed by own "),i.a.createElement("p",null,"Bring your laptops and other stuffs to join this great event"),i.a.createElement("p",null,"Feel free to message us or call us. "))))},t}(i.a.Component));y.propTypes={classes:l.a.object},t.default=Object(c.a)(function(e){return{root:{}}})(y)},276:function(e,t,n){"use strict";var a=n(5),o=n(7),r=n(9),i=n(6),s=n.n(i),l=(n(8),n(3)),c=n.n(l),u=n(0),d=n.n(u),p=n(1),m=n.n(p),h=n(4),f=n.n(h),g=n(2),y=function(e){function t(){return e.apply(this,arguments)||this}c()(t,e);var n=t.prototype;return n.componentWillUnmount=function(){var e=this.props.sounds;this.unanimate(),e.fade&&e.fade.stop()},n.enter=function(){var e=this.props,t=e.energy,n=e.sounds,a=t.duration.enter;n.fade&&n.fade.play(),this.animate({keyframes:[{opacity:1,duration:a/3},{opacity:0,duration:a/5},{opacity:1,duration:a/2}]})},n.exit=function(){var e=this.props,t=e.energy,n=e.sounds,a=t.duration.exit;n.fade&&n.fade.play(),this.animate({keyframes:[{opacity:0,duration:a/3},{opacity:1,duration:a/5},{opacity:0,duration:a/2}]})},n.animate=function(e){this.unanimate(),Object(g.a)(Object.assign({targets:this.element,easing:"easeOutCubic"},e))},n.unanimate=function(){g.a.remove(this.element)},n.render=function(){var e=this,t=this.props,n=(t.theme,t.classes),a=(t.energy,t.audio,t.sounds,t.className),o=t.children,r=t.node,i=s()(t,["theme","classes","energy","audio","sounds","className","children","node"]);return d.a.createElement(r,Object.assign({ref:function(t){return e.element=t},className:f()(n.root,a)},i),o)},t}(d.a.PureComponent);y.displayName="Fader",y.propTypes={theme:m.a.any.isRequired,classes:m.a.any.isRequired,energy:m.a.any.isRequired,audio:m.a.any.isRequired,sounds:m.a.any.isRequired,className:m.a.any,children:m.a.any,node:m.a.string},y.defaultProps={node:"span"};n.d(t,"a",function(){return b});var b=Object(o.a)()(Object(a.a)(function(e){return{root:{display:"inline-block",opacity:0}}})(Object(r.a)()(y)))},277:function(e,t,n){"use strict";var a=n(5),o=(n(8),n(6)),r=n.n(o),i=n(3),s=n.n(i),l=n(0),c=n.n(l),u=n(1),d=n.n(u),p=n(4),m=n.n(p),h=n(276),f=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))||this).onRouteChangeStart=function(e){e.detail.isInternal&&t.element.exit()},t}s()(t,e);var n=t.prototype;return n.componentDidMount=function(){window.addEventListener("route-change-start",this.onRouteChangeStart)},n.componentWillUnmount=function(){window.removeEventListener("route-change-start",this.onRouteChangeStart)},n.render=function(){var e=this,t=this.props,n=(t.theme,t.classes),a=t.className,o=t.children,i=r()(t,["theme","classes","className","children"]);return c.a.createElement(h.a,Object.assign({className:m()(n.root,a),node:"main",ref:function(t){return e.element=t}},i),c.a.createElement("div",{className:n.frame}),c.a.createElement("div",{className:n.content},o))},t}(c.a.Component);f.displayName="Main",f.propTypes={theme:d.a.object.isRequired,classes:d.a.object.isRequired,className:d.a.any,children:d.a.any};var g=n(13);n.d(t,"a",function(){return y});var y=Object(a.a)(function(e){return{root:{flex:1,position:"relative",display:"flex",margin:[0,"auto"],maxWidth:1e3,width:"100%"},frame:{position:"absolute",zIndex:1,left:10,right:10,top:0,bottom:0,outline:"2px solid "+e.color.background.dark,outlineOffset:2,backgroundColor:Object(g.b)(e.color.background.dark,e.color.alpha)},content:{position:"relative",zIndex:2,flex:1,margin:[10,10,10,20],padding:[0,10,0,0],"& > *:last-child, & > article > *:last-child":{marginBottom:0}},"@media screen and (min-width: 768px)":{root:{minHeight:1},frame:{left:20,right:20,top:0,bottom:0},content:{overflowX:"hidden",overflowY:"auto",margin:[30,40,30,50],padding:[0,10,0,0],"& img":{maxWidth:"80%"}}},"@media screen and (min-width: 1025px)":{content:{margin:[50,60,50,70],padding:[0,10,0,0]}}}})(f)},282:function(e,t,n){e.exports=n.p+"static/phantomCTF-51cc4314c0add118e9bc5a48958b8075.jpg"},283:function(e,t,n){e.exports=n.p+"static/new-day-foster-home-c6007070cf0f0ec1a375728395ddf55a.jpg"},284:function(e,t,n){e.exports=n.p+"static/new-day-foster-home-logo-2b92da1d734e48fdbdd3fea405ffb938.jpg"}}]);
//# sourceMappingURL=component---src-pages-phantom-js-17df829b83a44ccb145f.js.map