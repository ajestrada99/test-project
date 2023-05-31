(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[32],{8396:function(e,t,s){"use strict";s.d(t,{Z:function(){return u}});var o,a=s(7294),r=s(4168),n=s(3421),d=s(8974);function i(e,t,s,o,r){let n="undefined"!=typeof window&&void 0!==window.matchMedia,[i,c]=a.useState(()=>r&&n?s(e).matches:o?o(e).matches:t);return(0,d.Z)(()=>{let t=!0;if(!n)return;let o=s(e),a=()=>{t&&c(o.matches)};return a(),o.addListener(a),()=>{t=!1,o.removeListener(a)}},[e,s,n]),i}let c=(o||(o=s.t(a,2))).useSyncExternalStore;function l(e,t,s,o){let r=a.useCallback(()=>t,[t]),n=a.useMemo(()=>{if(null!==o){let{matches:t}=o(e);return()=>t}return r},[r,e,o]),[d,i]=a.useMemo(()=>{if(null===s)return[r,()=>()=>{}];let t=s(e);return[()=>t.matches,e=>(t.addListener(e),()=>{t.removeListener(e)})]},[r,s,e]),l=c(i,d,n);return l}function u(e,t={}){let s=(0,r.Z)(),o="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches:a=!1,matchMedia:d=o?window.matchMedia:null,ssrMatchMedia:u=null,noSsr:h}=(0,n.Z)({name:"MuiUseMediaQuery",props:t,theme:s}),m="function"==typeof e?e(s):e;m=m.replace(/^@media( ?)/m,"");let p=(void 0!==c?l:i)(m,a,d,u,h);return p}},8974:function(e,t,s){"use strict";var o=s(6600);t.Z=o.Z},3982:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/401",function(){return s(6290)}])},2457:function(e,t,s){"use strict";s.d(t,{a:function(){return r}});var o=s(7294),a=s(510),r=function(){(0,o.useEffect)(function(){a.w.push({event:"page_view"})},[])}},6290:function(e,t,s){"use strict";s.r(t);var o=s(5893),a=s(1664),r=s.n(a),n=s(9008),d=s.n(n),i=s(8396),c=s(7357),l=s(9520),u=s(5861),h=s(3321),m=s(2734),p=s(2457),g=s(4690);t.default=function(){var e=(0,m.Z)(),t=(0,i.Z)(e.breakpoints.down("md"));return(0,p.a)(),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(d(),{children:(0,o.jsx)("title",{children:"Error: Authorization Required | Devias Kit PRO"})}),(0,o.jsx)(c.Z,{component:"main",sx:{alignItems:"center",display:"flex",flexGrow:1,py:"80px"},children:(0,o.jsxs)(l.Z,{maxWidth:"lg",children:[(0,o.jsx)(c.Z,{sx:{display:"flex",justifyContent:"center",mb:6},children:(0,o.jsx)(c.Z,{alt:"Not authorized",component:"img",src:"/assets/errors/error-401.png",sx:{height:"auto",maxWidth:"100%",width:400}})}),(0,o.jsx)(u.Z,{align:"center",variant:t?"h1":"h4",children:"401: Authorization required"}),(0,o.jsx)(u.Z,{align:"center",color:"text.secondary",sx:{mt:.5},children:"You either tried some shady route or you came here by mistake. Whichever it is, try using the navigation."}),(0,o.jsx)(c.Z,{sx:{display:"flex",justifyContent:"center",mt:6},children:(0,o.jsx)(h.Z,{component:r(),href:g.H.index,children:"Back to Home"})})]})})]})}},4690:function(e,t,s){"use strict";s.d(t,{H:function(){return o}});var o={index:"/",checkout:"/checkout",contact:"/contact",pricing:"/pricing",auth:{auth0:{callback:"/auth/auth0/callback",login:"/auth/auth0/login"},jwt:{login:"/auth/jwt/login",register:"/auth/jwt/register"},firebase:{login:"/auth/firebase/login",register:"/auth/firebase/register"},amplify:{confirmRegister:"/auth/amplify/confirm-register",forgotPassword:"/auth/amplify/forgot-password",login:"/auth/amplify/login",register:"/auth/amplify/register",resetPassword:"/auth/amplify/reset-password"}},authDemo:{forgotPassword:{classic:"/auth-demo/forgot-password/classic",modern:"/auth-demo/forgot-password/modern"},login:{classic:"/auth-demo/login/classic",modern:"/auth-demo/login/modern"},register:{classic:"/auth-demo/register/classic",modern:"/auth-demo/register/modern"},resetPassword:{classic:"/auth-demo/reset-password/classic",modern:"/auth-demo/reset-password/modern"},verifyCode:{classic:"/auth-demo/verify-code/classic",modern:"/auth-demo/verify-code/modern"}},dashboard:{index:"/dashboard",academy:{index:"/dashboard/academy",courseDetails:"/dashboard/academy/courses/:courseId"},account:"/dashboard/account",analytics:"/dashboard/analytics",blank:"/dashboard/blank",blog:{index:"/dashboard/blog",postDetails:"/dashboard/blog/:postId",postCreate:"/dashboard/blog/create"},calendar:"/dashboard/calendar",chat:"/dashboard/chat",crypto:"/dashboard/crypto",customers:{index:"/dashboard/customers",details:"/dashboard/customers/:customerId",edit:"/dashboard/customers/:customerId/edit"},ecommerce:"/dashboard/ecommerce",fileManager:"/dashboard/file-manager",invoices:{index:"/dashboard/invoices",details:"/dashboard/invoices/:orderId"},jobs:{index:"/dashboard/jobs",create:"/dashboard/jobs/create",companies:{details:"/dashboard/jobs/companies/:companyId"}},kanban:"/dashboard/kanban",logistics:{index:"/dashboard/logistics",fleet:"/dashboard/logistics/fleet"},mail:"/dashboard/mail",orders:{index:"/dashboard/orders",details:"/dashboard/orders/:orderId"},products:{index:"/dashboard/products",create:"/dashboard/products/create"},social:{index:"/dashboard/social",profile:"/dashboard/social/profile",feed:"/dashboard/social/feed"}},components:{index:"/components",dataDisplay:{detailLists:"/components/data-display/detail-lists",tables:"/components/data-display/tables",quickStats:"/components/data-display/quick-stats"},lists:{groupedLists:"/components/lists/grouped-lists",gridLists:"/components/lists/grid-lists"},forms:"/components/forms",modals:"/components/modals",charts:"/components/charts",buttons:"/components/buttons",typography:"/components/typography",colors:"/components/colors",inputs:"/components/inputs"},docs:{analytics:{configuration:"/docs/analytics-configuration",eventTracking:"/docs/analytics-event-tracking",introduction:"/docs/analytics-introduction"},auth:{amplify:"/docs/auth-amplify",auth0:"/docs/auth-auth0",firebase:"/docs/auth-firebase",jwt:"/docs/auth-jwt"},changelog:"/docs/changelog",contact:"/docs/contact",dependencies:"/docs/dependencies",deployment:"/docs/deployment",environmentVariables:"/docs/environment-variables",gettingStarted:"/docs/getting-started",guards:{auth:"/docs/guards-auth",guest:"/docs/guards-guest",roleBased:"/docs/guards-role-based"},furtherSupport:"/docs/further-support",internationalization:"/docs/internationalization",mapbox:"/docs/mapbox",redux:"/docs/redux",routing:"/docs/routing",rtl:"/docs/rtl",serverCalls:"/docs/server-calls",settings:"/docs/settings",theming:"/docs/theming",welcome:"/docs/welcome"},401:"/401",404:"/404",500:"/500"}}},function(e){e.O(0,[700,774,888,179],function(){return e(e.s=3982)}),_N_E=e.O()}]);