(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"8/g6":function(e,t,n){"use strict";var o=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=i.default.memo(i.default.forwardRef((function(t,n){return i.default.createElement(a.default,(0,r.default)({ref:n},t),e)})));0;return n.muiName=a.default.muiName,n};var r=o(n("pVnL")),i=o(n("q1tI")),a=o(n("UJJ5"))},RXBc:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),r=n.n(o),i=n("Bl7J"),a=n("vrFN"),c=n("hlFM"),l=n("ofer"),s=n("wx14"),u=n("Ff2n"),d=(n("TOwV"),n("iuhU")),p=n("NqtD"),f=n("ye/S"),m=n("H2TA"),b=n("Z3vd");b.a.styles;var h=o.forwardRef((function(e,t){var n=e.children,r=e.classes,i=e.className,a=e.color,c=void 0===a?"default":a,l=e.component,f=void 0===l?"div":l,m=e.disabled,b=void 0!==m&&m,h=e.disableElevation,E=void 0!==h&&h,g=e.disableFocusRipple,v=void 0!==g&&g,x=e.disableRipple,O=void 0!==x&&x,y=e.fullWidth,j=void 0!==y&&y,C=e.orientation,w=void 0===C?"horizontal":C,R=e.size,S=void 0===R?"medium":R,k=e.variant,T=void 0===k?"outlined":k,L=Object(u.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"]),N=Object(d.a)(r.grouped,r["grouped".concat(Object(p.a)(w))],r["grouped".concat(Object(p.a)(T))],r["grouped".concat(Object(p.a)(T)).concat(Object(p.a)(w))],r["grouped".concat(Object(p.a)(T)).concat("default"!==c?Object(p.a)(c):"")],b&&r.disabled);return o.createElement(f,Object(s.a)({role:"group",className:Object(d.a)(r.root,i,j&&r.fullWidth,E&&r.disableElevation,"contained"===T&&r.contained,"vertical"===w&&r.vertical),ref:t},L),o.Children.map(n,(function(e){return o.isValidElement(e)?o.cloneElement(e,{className:Object(d.a)(N,e.props.className),color:e.props.color||c,disabled:e.props.disabled||b,disableElevation:e.props.disableElevation||E,disableFocusRipple:v,disableRipple:O,fullWidth:j,size:e.props.size||S,variant:e.props.variant||T}):null})))})),E=Object(m.a)((function(e){return{root:{display:"inline-flex",borderRadius:e.shape.borderRadius},contained:{boxShadow:e.shadows[2]},disableElevation:{boxShadow:"none"},disabled:{},fullWidth:{width:"100%"},vertical:{flexDirection:"column"},grouped:{minWidth:40},groupedHorizontal:{"&:not(:first-child)":{borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-child)":{borderTopRightRadius:0,borderBottomRightRadius:0}},groupedVertical:{"&:not(:first-child)":{borderTopRightRadius:0,borderTopLeftRadius:0},"&:not(:last-child)":{borderBottomRightRadius:0,borderBottomLeftRadius:0}},groupedText:{},groupedTextHorizontal:{"&:not(:last-child)":{borderRight:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")}},groupedTextVertical:{"&:not(:last-child)":{borderBottom:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")}},groupedTextPrimary:{"&:not(:last-child)":{borderColor:Object(f.c)(e.palette.primary.main,.5)}},groupedTextSecondary:{"&:not(:last-child)":{borderColor:Object(f.c)(e.palette.secondary.main,.5)}},groupedOutlined:{},groupedOutlinedHorizontal:{"&:not(:first-child)":{marginLeft:-1},"&:not(:last-child)":{borderRightColor:"transparent"}},groupedOutlinedVertical:{"&:not(:first-child)":{marginTop:-1},"&:not(:last-child)":{borderBottomColor:"transparent"}},groupedOutlinedPrimary:{"&:hover":{borderColor:e.palette.primary.main}},groupedOutlinedSecondary:{"&:hover":{borderColor:e.palette.secondary.main}},groupedContained:{boxShadow:"none"},groupedContainedHorizontal:{"&:not(:last-child)":{borderRight:"1px solid ".concat(e.palette.grey[400]),"&$disabled":{borderRight:"1px solid ".concat(e.palette.action.disabled)}}},groupedContainedVertical:{"&:not(:last-child)":{borderBottom:"1px solid ".concat(e.palette.grey[400]),"&$disabled":{borderBottom:"1px solid ".concat(e.palette.action.disabled)}}},groupedContainedPrimary:{"&:not(:last-child)":{borderColor:e.palette.primary.dark}},groupedContainedSecondary:{"&:not(:last-child)":{borderColor:e.palette.secondary.dark}}}}),{name:"MuiButtonGroup"})(h),g=n("rePB"),v=n("wpWl"),x=n("i8i4"),O=n.n(x);function y(e){return e&&e.ownerDocument||document}var j=n("bfFb"),C=n("Ovef");function w(e){return e.substring(2).toLowerCase()}var R=function(e){var t=e.children,n=e.disableReactTree,r=void 0!==n&&n,i=e.mouseEvent,a=void 0===i?"onClick":i,c=e.onClickAway,l=e.touchEvent,s=void 0===l?"onTouchEnd":l,u=o.useRef(!1),d=o.useRef(null),p=o.useRef(!1),f=o.useRef(!1);o.useEffect((function(){return p.current=!0,function(){p.current=!1}}),[]);var m=o.useCallback((function(e){d.current=x.findDOMNode(e)}),[]),b=Object(j.a)(t.ref,m),h=Object(C.a)((function(e){var t=f.current;if(f.current=!1,p.current&&d.current&&!function(e){return document.documentElement.clientWidth<e.clientX||document.documentElement.clientHeight<e.clientY}(e))if(u.current)u.current=!1;else{var n;if(e.composedPath)n=e.composedPath().indexOf(d.current)>-1;else n=!y(d.current).documentElement.contains(e.target)||d.current.contains(e.target);n||!r&&t||c(e)}})),E=function(e){return function(n){f.current=!0;var o=t.props[e];o&&o(n)}},g={ref:b};return!1!==s&&(g[s]=E(s)),o.useEffect((function(){if(!1!==s){var e=w(s),t=y(d.current),n=function(){u.current=!0};return t.addEventListener(e,h),t.addEventListener("touchmove",n),function(){t.removeEventListener(e,h),t.removeEventListener("touchmove",n)}}}),[h,s]),!1!==a&&(g[a]=E(a)),o.useEffect((function(){if(!1!==a){var e=w(a),t=y(d.current);return t.addEventListener(e,h),function(){t.removeEventListener(e,h)}}}),[h,a]),o.createElement(o.Fragment,null,o.cloneElement(t,g))};function S(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){return null==t?e:function(){for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];e.apply(this,o),t.apply(this,o)}}),(function(){}))}var k=n("ODXe"),T=n("zLVn"),L=n("dI71"),N=!1,z=n("0PSK"),M=function(e){function t(t,n){var o;o=e.call(this,t,n)||this;var r,i=n&&!n.isMounting?t.enter:t.appear;return o.appearStatus=null,t.in?i?(r="exited",o.appearStatus="entering"):r="entered":r=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",o.state={status:r},o.nextCallback=null,o}Object(L.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(t="entering"):"entering"!==n&&"entered"!==n||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,o=this.props.timeout;return e=t=n=o,null!=o&&"number"!=typeof o&&(e=o.exit,t=o.enter,n=void 0!==o.appear?o.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),"entering"===t?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},n.performEnter=function(e){var t=this,n=this.props.enter,o=this.context?this.context.isMounting:e,r=this.props.nodeRef?[o]:[O.a.findDOMNode(this),o],i=r[0],a=r[1],c=this.getTimeouts(),l=o?c.appear:c.enter;!e&&!n||N?this.safeSetState({status:"entered"},(function(){t.props.onEntered(i)})):(this.props.onEnter(i,a),this.safeSetState({status:"entering"},(function(){t.props.onEntering(i,a),t.onTransitionEnd(l,(function(){t.safeSetState({status:"entered"},(function(){t.props.onEntered(i,a)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),o=this.props.nodeRef?void 0:O.a.findDOMNode(this);t&&!N?(this.props.onExit(o),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(o),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:"exited"},(function(){e.props.onExited(o)}))}))}))):this.safeSetState({status:"exited"},(function(){e.props.onExited(o)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(o){n&&(n=!1,t.nextCallback=null,e(o))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:O.a.findDOMNode(this),o=null==e&&!this.props.addEndListener;if(n&&!o){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=r[0],a=r[1];this.props.addEndListener(i,a)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,o=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,Object(T.a)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return r.a.createElement(z.a.Provider,{value:null},"function"==typeof n?n(e,o):r.a.cloneElement(r.a.Children.only(n),o))},t}(r.a.Component);function D(){}M.contextType=z.a,M.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:D,onEntering:D,onEntered:D,onExit:D,onExiting:D,onExited:D},M.UNMOUNTED="unmounted",M.EXITED="exited",M.ENTERING="entering",M.ENTERED="entered",M.EXITING="exiting";var P=M,B=n("aXM8"),I=n("cNwE");function H(e,t){var n=e.timeout,o=e.style,r=void 0===o?{}:o;return{duration:r.transitionDuration||"number"==typeof n?n:n[t.mode]||0,delay:r.transitionDelay}}function A(e){return"scale(".concat(e,", ").concat(Math.pow(e,2),")")}var W={entering:{opacity:1,transform:A(1)},entered:{opacity:1,transform:"none"}},F=o.forwardRef((function(e,t){var n=e.children,r=e.disableStrictModeCompat,i=void 0!==r&&r,a=e.in,c=e.onEnter,l=e.onEntered,d=e.onEntering,p=e.onExit,f=e.onExited,m=e.onExiting,b=e.style,h=e.timeout,E=void 0===h?"auto":h,g=e.TransitionComponent,v=void 0===g?P:g,x=Object(u.a)(e,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),O=o.useRef(),y=o.useRef(),C=Object(B.a)()||I.a,w=C.unstable_strictMode&&!i,R=o.useRef(null),S=Object(j.a)(n.ref,t),T=Object(j.a)(w?R:void 0,S),L=function(e){return function(t,n){if(e){var o=w?[R.current,t]:[t,n],r=Object(k.a)(o,2),i=r[0],a=r[1];void 0===a?e(i):e(i,a)}}},N=L(d),z=L((function(e,t){!function(e){e.scrollTop}(e);var n,o=H({style:b,timeout:E},{mode:"enter"}),r=o.duration,i=o.delay;"auto"===E?(n=C.transitions.getAutoHeightDuration(e.clientHeight),y.current=n):n=r,e.style.transition=[C.transitions.create("opacity",{duration:n,delay:i}),C.transitions.create("transform",{duration:.666*n,delay:i})].join(","),c&&c(e,t)})),M=L(l),D=L(m),F=L((function(e){var t,n=H({style:b,timeout:E},{mode:"exit"}),o=n.duration,r=n.delay;"auto"===E?(t=C.transitions.getAutoHeightDuration(e.clientHeight),y.current=t):t=o,e.style.transition=[C.transitions.create("opacity",{duration:t,delay:r}),C.transitions.create("transform",{duration:.666*t,delay:r||.333*t})].join(","),e.style.opacity="0",e.style.transform=A(.75),p&&p(e)})),U=L(f);return o.useEffect((function(){return function(){clearTimeout(O.current)}}),[]),o.createElement(v,Object(s.a)({appear:!0,in:a,nodeRef:w?R:void 0,onEnter:z,onEntered:M,onEntering:N,onExit:F,onExited:U,onExiting:D,addEndListener:function(e,t){var n=w?e:t;"auto"===E&&(O.current=setTimeout(n,y.current||0))},timeout:"auto"===E?null:E},x),(function(e,t){return o.cloneElement(n,Object(s.a)({style:Object(s.a)({opacity:0,transform:A(.75),visibility:"exited"!==e||a?void 0:"hidden"},W[e],b,n.props.style),ref:T},t))}))}));F.muiSupportAuto=!0;var U=F,q=n("kKAo"),V=o.forwardRef((function(e,t){var n=e.action,r=e.classes,i=e.className,a=e.message,c=e.role,l=void 0===c?"alert":c,p=Object(u.a)(e,["action","classes","className","message","role"]);return o.createElement(q.a,Object(s.a)({role:l,square:!0,elevation:6,className:Object(d.a)(r.root,i),ref:t},p),o.createElement("div",{className:r.message},a),n?o.createElement("div",{className:r.action},n):null)})),_=Object(m.a)((function(e){var t="light"===e.palette.type?.8:.98,n=Object(f.b)(e.palette.background.default,t);return{root:Object(s.a)({},e.typography.body2,Object(g.a)({color:e.palette.getContrastText(n),backgroundColor:n,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:e.shape.borderRadius,flexGrow:1},e.breakpoints.up("sm"),{flexGrow:"initial",minWidth:288})),message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiSnackbarContent"})(V),G=o.forwardRef((function(e,t){var n=e.action,r=e.anchorOrigin,i=(r=void 0===r?{vertical:"bottom",horizontal:"center"}:r).vertical,a=r.horizontal,c=e.autoHideDuration,l=void 0===c?null:c,f=e.children,m=e.classes,b=e.className,h=e.ClickAwayListenerProps,E=e.ContentProps,g=e.disableWindowBlurListener,x=void 0!==g&&g,O=e.message,y=e.onClose,j=e.onEnter,w=e.onEntered,k=e.onEntering,T=e.onExit,L=e.onExited,N=e.onExiting,z=e.onMouseEnter,M=e.onMouseLeave,D=e.open,P=e.resumeHideDuration,B=e.TransitionComponent,I=void 0===B?U:B,H=e.transitionDuration,A=void 0===H?{enter:v.b.enteringScreen,exit:v.b.leavingScreen}:H,W=e.TransitionProps,F=Object(u.a)(e,["action","anchorOrigin","autoHideDuration","children","classes","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onClose","onEnter","onEntered","onEntering","onExit","onExited","onExiting","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"]),q=o.useRef(),V=o.useState(!0),G=V[0],J=V[1],X=Object(C.a)((function(){y&&y.apply(void 0,arguments)})),Z=Object(C.a)((function(e){y&&null!=e&&(clearTimeout(q.current),q.current=setTimeout((function(){X(null,"timeout")}),e))}));o.useEffect((function(){return D&&Z(l),function(){clearTimeout(q.current)}}),[D,l,Z]);var $=function(){clearTimeout(q.current)},K=o.useCallback((function(){null!=l&&Z(null!=P?P:.5*l)}),[l,P,Z]);return o.useEffect((function(){if(!x&&D)return window.addEventListener("focus",K),window.addEventListener("blur",$),function(){window.removeEventListener("focus",K),window.removeEventListener("blur",$)}}),[x,K,D]),!D&&G?null:o.createElement(R,Object(s.a)({onClickAway:function(e){y&&y(e,"clickaway")}},h),o.createElement("div",Object(s.a)({className:Object(d.a)(m.root,m["anchorOrigin".concat(Object(p.a)(i)).concat(Object(p.a)(a))],b),onMouseEnter:function(e){z&&z(e),$()},onMouseLeave:function(e){M&&M(e),K()},ref:t},F),o.createElement(I,Object(s.a)({appear:!0,in:D,onEnter:S((function(){J(!1)}),j),onEntered:w,onEntering:k,onExit:T,onExited:S((function(){J(!0)}),L),onExiting:N,timeout:A,direction:"top"===i?"down":"up"},W),f||o.createElement(_,Object(s.a)({message:O,action:n},E)))))})),J=Object(m.a)((function(e){var t={top:8},n={bottom:8},o={justifyContent:"flex-end"},r={justifyContent:"flex-start"},i={top:24},a={bottom:24},c={right:24},l={left:24},u={left:"50%",right:"auto",transform:"translateX(-50%)"};return{root:{zIndex:e.zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},anchorOriginTopCenter:Object(s.a)({},t,Object(g.a)({},e.breakpoints.up("sm"),Object(s.a)({},i,u))),anchorOriginBottomCenter:Object(s.a)({},n,Object(g.a)({},e.breakpoints.up("sm"),Object(s.a)({},a,u))),anchorOriginTopRight:Object(s.a)({},t,o,Object(g.a)({},e.breakpoints.up("sm"),Object(s.a)({left:"auto"},i,c))),anchorOriginBottomRight:Object(s.a)({},n,o,Object(g.a)({},e.breakpoints.up("sm"),Object(s.a)({left:"auto"},a,c))),anchorOriginTopLeft:Object(s.a)({},t,r,Object(g.a)({},e.breakpoints.up("sm"),Object(s.a)({right:"auto"},i,l))),anchorOriginBottomLeft:Object(s.a)({},n,r,Object(g.a)({},e.breakpoints.up("sm"),Object(s.a)({right:"auto"},a,l)))}}),{flip:!1,name:"MuiSnackbar"})(G),X=n("PsDL"),Z=n("ZPUd"),$=n.n(Z);function K(){var e,t=null!==(null!==(e=new URLSearchParams(window.location.search).get("ref"))&&void 0!==e?e:"").match(/^(http:\/\/|http:\\|)pitek\.(w|home)\.staszic\.waw\.pl(|\/(.*))$/g),n=r.a.useState(t),o=n[0],i=n[1],a=function(e,t){"clickaway"!==t&&i(!1)};return r.a.createElement("div",null,r.a.createElement(J,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:o,onClose:a,message:"You seem to have been redirected from my staszic website. Don't worry, it's supposed to be like that.",action:r.a.createElement(r.a.Fragment,null,r.a.createElement(X.a,{size:"small","aria-label":"close",color:"inherit",onClick:a},r.a.createElement($.a,{fontSize:"small"})))}))}t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(a.a,{title:"Home"}),r.a.createElement(c.a,{mb:4},r.a.createElement(l.a,{variant:"h2"},"Hello there")),r.a.createElement(c.a,{mb:4},r.a.createElement(l.a,null,"My name's Piotr Grynfelder. I'm a final grade student at Staszic High School in Warsaw, which is considered to be one of the best in Poland. My major interests are Mathematics, Computer Science and Physics. This site is likely to become my blog in the future.")),r.a.createElement(c.a,{mb:4},r.a.createElement(E,{variant:"contained",color:"primary"},r.a.createElement(b.a,{href:"https://github.com/pitek1",target:"_blank",rel:"noreferrer"},"Github"),r.a.createElement(b.a,{href:"https://fb.com/pgrynfelder",target:"_blank",rel:"noreferrer"},"Facebook"),r.a.createElement(b.a,{href:"https://instagram.com/pgrynfelder",target:"_blank",rel:"noreferrer"},"Instagram"))),r.a.createElement(K,null))}},UJJ5:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var o=n("wx14"),r=n("Ff2n"),i=n("q1tI"),a=n("iuhU"),c=n("H2TA"),l=n("NqtD"),s=i.forwardRef((function(e,t){var n=e.children,c=e.classes,s=e.className,u=e.color,d=void 0===u?"inherit":u,p=e.component,f=void 0===p?"svg":p,m=e.fontSize,b=void 0===m?"default":m,h=e.htmlColor,E=e.titleAccess,g=e.viewBox,v=void 0===g?"0 0 24 24":g,x=Object(r.a)(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return i.createElement(f,Object(o.a)({className:Object(a.a)(c.root,s,"inherit"!==d&&c["color".concat(Object(l.a)(d))],"default"!==b&&c["fontSize".concat(Object(l.a)(b))]),focusable:"false",viewBox:v,color:h,"aria-hidden":!E||void 0,role:E?"img":void 0,ref:t},x),n,E?i.createElement("title",null,E):null)}));s.muiName="SvgIcon";var u=Object(c.a)((function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}}),{name:"MuiSvgIcon"})(s)},ZPUd:function(e,t,n){"use strict";var o=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n("q1tI")),i=(0,o(n("8/g6")).default)(r.default.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.default=i}}]);
//# sourceMappingURL=component---src-pages-index-js-e669524b4c8b0e7d0f42.js.map