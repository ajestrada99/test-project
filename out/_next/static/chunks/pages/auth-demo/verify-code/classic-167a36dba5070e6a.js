(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6173],{7590:function(e,t,a){"use strict";a.d(t,{P:function(){return h}});var r=a(67294),s=a(87357),o=a(90948),n=a(93155),i=a(85893);let d=(0,o.ZP)(n.Z)`
  input {
    text-align: center;
  }
`,c={TextFieldStyled:d},l=e=>(0,i.jsx)(c.TextFieldStyled,{...e}),u={left:"ArrowLeft",right:"ArrowRight",backspace:"Backspace"},h=r.forwardRef((e,t)=>{var a;let{value:o,length:n,onChange:d,TextFieldsProps:c,onComplete:h,validateChar:p,className:m,...g}=e,{onPaste:f,onFocus:x,onKeyDown:b,className:y,...v}=c||{},j=(a=(e,t)=>({character:o[t]||"",inputRef:r.createRef()}),n<=0?[]:Array.from({length:n},a)),w=e=>j.findIndex(({inputRef:t})=>t.current===e),k=()=>j.map(({character:e})=>e),Z=(e,t)=>{let a=k().map((a,r)=>e===r?t:a);return a.join("")},I=e=>{j[e]?.inputRef.current?.focus()},C=e=>{j[e]?.inputRef.current?.blur()},P=e=>{j[e]?.inputRef.current?.select()},D=e=>{e+1===n?C(e):j[e+1].character?P(e+1):I(e+1)},R=e=>{e>0&&P(e-1)},F=e=>{let t=e.target.value[0]||"",a=w(e.target);if("function"==typeof p&&!p(t,a))return;let r=Z(a,t);d?.(r),r.length===n&&h?.(r),""!==t?r.length<n?D(r.length-1):D(a):r[a]?P(a):R(a)},T=e=>{e.preventDefault(),e.target.select(),x?.(e)},_=e=>{let t=e.target,a=w(t);t.value===e.key?(e.preventDefault(),D(a)):(t.value||u.backspace!==e.key)&&u.left!==e.key?u.right===e.key&&(e.preventDefault(),P(a+1)):(e.preventDefault(),P(a-1)),b?.(e)},S=e=>{var t;e.preventDefault();let a=e.target,r=e.clipboardData.getData("text/plain"),s=w(a),o=k(),i=(t=r.split(""),o.reduce((e,t,a)=>{let{characters:r,restArrayMerged:o}=e;if(a<s)return{restArrayMerged:o,characters:[...r,t]};let[n,...i]=o;return{restArrayMerged:i,characters:[...r,n||""]}},{restArrayMerged:t,characters:[]}).characters),c=i.findIndex((e,t)=>t>s&&""===e),l=i.join("");d?.(l),l.length===n&&h?.(l),-1!==c?I(c):C(s),f?.(e)};return(0,i.jsx)(s.Z,{display:"flex",gap:"20px",alignItems:"center",ref:t,className:`MuiOtpInput-Box ${m||""}`,...g,children:j.map(({character:e,inputRef:t},a)=>(0,i.jsx)(l,{autoComplete:"one-time-code",value:e,inputRef:t,className:`MuiOtpInput-TextField MuiOtpInput-TextField-${a+1} ${y||""}`,onPaste:S,onFocus:T,onChange:F,onKeyDown:_,...v},a))})});h.defaultProps={value:"",length:4,validateChar:()=>!0,onChange:()=>{},onComplete:()=>{},TextFieldsProps:{}}},40341:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth-demo/verify-code/classic",function(){return a(37946)}])},83456:function(e,t,a){"use strict";a.d(t,{A:function(){return g}});var r=a(85893),s=a(41664),o=a.n(s),n=a(45697),i=a.n(n),d=a(87357),c=a(65582),l=a(26447),u=a(90948),h=a(2839),p=a(94690),m=(0,u.ZP)("div")(function(e){return{backgroundColor:e.theme.palette.background.default,backgroundRepeat:"no-repeat",backgroundPosition:"top center",backgroundImage:'url("/assets/gradient-bg.svg")',display:"flex",flex:"1 1 auto",flexDirection:"column",height:"100%"}}),g=function(e){var t=e.children;return(0,r.jsxs)(m,{children:[(0,r.jsx)(d.Z,{component:"header",sx:{left:0,position:"fixed",right:0,top:0,zIndex:function(e){return e.zIndex.appBar}},children:(0,r.jsx)(c.Z,{maxWidth:"lg",children:(0,r.jsx)(l.Z,{direction:"row",spacing:2,sx:{height:64},children:(0,r.jsxs)(l.Z,{alignItems:"center",component:o(),direction:"row",display:"inline-flex",href:p.H.index,spacing:1,sx:{textDecoration:"none"},children:[(0,r.jsx)(d.Z,{sx:{display:"inline-flex",height:24,width:24},children:(0,r.jsx)(h.T,{})}),(0,r.jsxs)(d.Z,{sx:{color:"text.primary",fontFamily:"'Plus Jakarta Sans', sans-serif",fontSize:14,fontWeight:800,letterSpacing:"0.3px",lineHeight:2.5,"& span":{color:"primary.main"}},children:["Devias Kit ",(0,r.jsx)("span",{children:"PRO"})]})]})})})}),(0,r.jsx)(d.Z,{sx:{alignItems:"center",display:"flex",justifyContent:"center",flex:"1 1 auto"},children:(0,r.jsx)(c.Z,{maxWidth:"sm",sx:{py:{xs:"60px",md:"120px"}},children:t})})]})};g.propTypes={children:i().node}},37946:function(e,t,a){"use strict";a.r(t);var r=a(85893),s=a(41664),o=a.n(s),n=a(74231),i=a(82175),d=a(30136),c=a(7590),l=a(87357),u=a(23795),h=a(53219),p=a(15861),m=a(66242),g=a(78445),f=a(44267),x=a(94054),b=a(40476),y=a(56815),v=a(11057),j=a(83456),w=a(94690),k={code:""},Z=n.Ry({code:n.Z_().min(6).max(6).required("Code is required")}),I=function(){var e=(0,i.TA)({initialValues:k,validationSchema:Z,onSubmit:function(){}});return(0,r.jsxs)("div",{children:[(0,r.jsx)(l.Z,{sx:{mb:4},children:(0,r.jsxs)(u.Z,{color:"text.primary",component:o(),href:w.H.dashboard.index,sx:{alignItems:"center",display:"inline-flex"},underline:"hover",children:[(0,r.jsx)(h.Z,{sx:{mr:1},children:(0,r.jsx)(d.Z,{})}),(0,r.jsx)(p.Z,{variant:"subtitle2",children:"Dashboard"})]})}),(0,r.jsxs)(m.Z,{elevation:16,children:[(0,r.jsx)(g.Z,{sx:{pb:0},title:"Verify code"}),(0,r.jsx)(f.Z,{children:(0,r.jsxs)("form",{noValidate:!0,onSubmit:e.handleSubmit,children:[(0,r.jsxs)(x.Z,{error:!!(e.touched.code&&e.errors.code),children:[(0,r.jsx)(b.Z,{sx:{display:"block",mb:2},children:"Code"}),(0,r.jsx)(c.P,{length:6,onBlur:function(){return e.handleBlur("code")},onChange:function(t){return e.setFieldValue("code",t)},onFocus:function(){return e.setFieldTouched("code")},sx:{"& .MuiFilledInput-input":{p:"14px"}},value:e.values.code}),!!(e.touched.code&&e.errors.code)&&(0,r.jsx)(y.Z,{children:e.errors.code})]}),(0,r.jsx)(v.Z,{fullWidth:!0,size:"large",sx:{mt:2},type:"submit",variant:"contained",children:"Verify"})]})})]})]})};I.getLayout=function(e){return(0,r.jsx)(j.A,{children:e})},t.default=I},94690:function(e,t,a){"use strict";a.d(t,{H:function(){return r}});var r={index:"/",checkout:"/checkout",contact:"/contact",pricing:"/pricing",auth:{auth0:{callback:"/auth/auth0/callback",login:"/auth/auth0/login"},jwt:{login:"/auth/jwt/login",register:"/auth/jwt/register"},firebase:{login:"/auth/firebase/login",register:"/auth/firebase/register"},amplify:{confirmRegister:"/auth/amplify/confirm-register",forgotPassword:"/auth/amplify/forgot-password",login:"/auth/amplify/login",register:"/auth/amplify/register",resetPassword:"/auth/amplify/reset-password"}},authDemo:{forgotPassword:{classic:"/auth-demo/forgot-password/classic",modern:"/auth-demo/forgot-password/modern"},login:{classic:"/auth-demo/login/classic",modern:"/auth-demo/login/modern"},register:{classic:"/auth-demo/register/classic",modern:"/auth-demo/register/modern"},resetPassword:{classic:"/auth-demo/reset-password/classic",modern:"/auth-demo/reset-password/modern"},verifyCode:{classic:"/auth-demo/verify-code/classic",modern:"/auth-demo/verify-code/modern"}},dashboard:{index:"/dashboard",academy:{index:"/dashboard/academy",courseDetails:"/dashboard/academy/courses/:courseId"},account:"/dashboard/account",analytics:"/dashboard/analytics",blank:"/dashboard/blank",blog:{index:"/dashboard/blog",postDetails:"/dashboard/blog/:postId",postCreate:"/dashboard/blog/create"},calendar:"/dashboard/calendar",chat:"/dashboard/chat",crypto:"/dashboard/crypto",customers:{index:"/dashboard/customers",details:"/dashboard/customers/:customerId",edit:"/dashboard/customers/:customerId/edit"},ecommerce:"/dashboard/ecommerce",fileManager:"/dashboard/file-manager",invoices:{index:"/dashboard/invoices",details:"/dashboard/invoices/:orderId"},jobs:{index:"/dashboard/jobs",create:"/dashboard/jobs/create",companies:{details:"/dashboard/jobs/companies/:companyId"}},kanban:"/dashboard/kanban",logistics:{index:"/dashboard/logistics",fleet:"/dashboard/logistics/fleet"},mail:"/dashboard/mail",orders:{index:"/dashboard/orders",details:"/dashboard/orders/:orderId"},products:{index:"/dashboard/products",create:"/dashboard/products/create"},social:{index:"/dashboard/social",profile:"/dashboard/social/profile",feed:"/dashboard/social/feed"}},components:{index:"/components",dataDisplay:{detailLists:"/components/data-display/detail-lists",tables:"/components/data-display/tables",quickStats:"/components/data-display/quick-stats"},lists:{groupedLists:"/components/lists/grouped-lists",gridLists:"/components/lists/grid-lists"},forms:"/components/forms",modals:"/components/modals",charts:"/components/charts",buttons:"/components/buttons",typography:"/components/typography",colors:"/components/colors",inputs:"/components/inputs"},docs:{analytics:{configuration:"/docs/analytics-configuration",eventTracking:"/docs/analytics-event-tracking",introduction:"/docs/analytics-introduction"},auth:{amplify:"/docs/auth-amplify",auth0:"/docs/auth-auth0",firebase:"/docs/auth-firebase",jwt:"/docs/auth-jwt"},changelog:"/docs/changelog",contact:"/docs/contact",dependencies:"/docs/dependencies",deployment:"/docs/deployment",environmentVariables:"/docs/environment-variables",gettingStarted:"/docs/getting-started",guards:{auth:"/docs/guards-auth",guest:"/docs/guards-guest",roleBased:"/docs/guards-role-based"},furtherSupport:"/docs/further-support",internationalization:"/docs/internationalization",mapbox:"/docs/mapbox",redux:"/docs/redux",routing:"/docs/routing",rtl:"/docs/rtl",serverCalls:"/docs/server-calls",settings:"/docs/settings",theming:"/docs/theming",welcome:"/docs/welcome"},401:"/401",404:"/404",500:"/500"}},30136:function(e,t,a){"use strict";var r=a(87462);a(67294);var s=a(85893);t.Z=function(e){return(0,s.jsxs)("svg",(0,r.Z)({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},e,{children:[(0,s.jsx)("path",{fill:"#fff",fillOpacity:.01,d:"m12 19-7-7 7-7"}),(0,s.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 12H5m0 0 7 7m-7-7 7-7"})]}))}}},function(e){e.O(0,[8926,5978,8471,3155,939,1141,8781,9774,2888,179],function(){return e(e.s=40341)}),_N_E=e.O()}]);