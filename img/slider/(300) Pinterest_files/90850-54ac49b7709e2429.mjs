(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[90850],{693099:(e,n,t)=>{t.d(n,{AA:()=>a,E9:()=>g,EU:()=>w,IO:()=>p,KH:()=>l,QR:()=>_,Uw:()=>i,ZR:()=>f,dy:()=>c,eA:()=>u,k7:()=>r,rT:()=>m,tz:()=>d,u9:()=>h,zR:()=>s,zu:()=>o});const o="OPEN_UNAUTH",i="openUnauthType",a="_isAfterLogin",r="_lastVisitedPages",s="_lastVisitedPagesBeforeLogin",c="_lastVisitedBoardPages",_="_lastVisitedPagesBeforeNavPage",l="_lastVisitedSessionPages",d="_unauthVisitedPages",u=20,g="unauthTopicsFollowed",m=["US","CA","NZ","AU"],p=new Set(["GB","IE"]),w=new Set(["AT","BE","CH","DE","DK","ES","FR","IT","NL","NO","PT","SE"]),f=new Set(["BR","MX","AR","CL","CO","PE"]),h="ad_img"},81759:(e,n,t)=>{t.d(n,{CC:()=>f,Ff:()=>N,H$:()=>v,Mt:()=>w,Yi:()=>y,Yy:()=>A,Z4:()=>p,dc:()=>E,dp:()=>h,i$:()=>g,p9:()=>k,t_:()=>u,vV:()=>m});var o=t(231486),i=t(6637),a=t(826067),r=t(400660),s=t(226198),c=t(867820),_=t(622096),l=t(957161),d=t(693099);const u=()=>(0,l.qn)(d.tz,""),g=()=>{const e=u();let n;try{n=JSON.parse(e)}catch(t){n=[]}return n},m=()=>(0,l.L_)(d.tz),p=(e,n)=>{const t=g(),o=t.length,i=o?t[0].path:"";if(o<d.eA&&(!o||e!==i)){const o={path:e,pageType:n,ts:Date.now()};(0,l.Nh)(d.tz,JSON.stringify([o].concat(t)))}},w=(e,n,t,o,i,a,r=d.k7)=>{const s=(0,l.qn)(r)?JSON.parse((0,l.qn)(r)):[];if(!s[0]||s[0].path!==e){const c=[{path:e,ts:Date.now(),pin_id:t||0,first_pin_image_signature:n||"",first_pin_id:t||"",image_info:o||"",pin_description:i||"",is_shared:!!a,pin_invite_code:a}];(0,l.Nh)(r,JSON.stringify(c.concat(s)))}},f=({path:e,image:n,dominant_color:t,pin_description:o,pin_id:i})=>{const a=(()=>{const e=(0,_.qn)(d.KH);if(!e)return[];let n;try{n=JSON.parse(e)}catch(t){n=[]}return n})();if(!a[0]||a[0].path!==e){const r=[{path:e,image:n,pin_description:o||"",dominant_color:t||"",pin_id:i||""}];(0,_.Nh)(d.KH,JSON.stringify(r.concat(a)))}};function h(e,n,t,o,i,a){w(e,n,t,o,i,a,d.zR)}const v=(e,n)=>{var t,o;w(e,n.image_signature,n.id,null===(t=n.images)||void 0===t?void 0:t["236x"],null!==(o=n.description)&&void 0!==o?o:"","",d.dy)};function k(e,n,t,o,i){w(e,n,t,o,i,"",d.QR)}function E(){return g().filter((e=>"closeup"===e.pageType)).length}function y(){const e=i.Z.create("UnauthUserDataResource");return new Promise(((n,t)=>{e.callGet().then((e=>{const i=e.resource_response.data,a=!!o.U2(s.x3);return i?((0,r.Wn)(i.medium_image_url)&&(i.medium_image_url=""),(0,c.My)("mweb.unauth.personalized_login.fetch_user_info.info.user_info_found.logged_out_cookie_"+(a?"true":"false")),n(i)):((0,c.My)("mweb.unauth.personalized_login.fetch_user_info.info.no_user_info.logged_out_cookie_"+(a?"true":"false")),t({}))})).catch((e=>{if(e&&e.message){const n=e.message.replace(/\s/g,"_").toLowerCase();(0,c.My)(`mweb.unauth.personalized_login.fetch_user_info.error.${n}`)}else(0,c.My)("mweb.unauth.personalized_login.fetch_user_info.error.unknown");return t(e)}))}))}function R({i18n:e,location:n}){const t=n.pathname.startsWith("/signup"),o=n.pathname.startsWith("/login");if(!t&&!o)return{showPLPBanner:!1,pinForBanner:null};let i;try{i=JSON.parse((0,_.qn)(d.KH))}catch(a){i=[]}if(i&&i.length>0){const n=i[0];if(n)return n.bannerCopy=e._('More ideas like this await', 'page banner with pin image that was signed up from', 'page banner with pin image that was signed up from'),{showPLPBanner:Boolean(n.image),pinForBanner:n}}return{showPLPBanner:!1,pinForBanner:null}}const A=e=>e.search&&e.search.startsWith("?next=")?e.search.split("?next=")[1]:null;function O({i18n:e,location:n}){var t;const o=(null===(t=n.state)||void 0===t?void 0:t.next)||A(n);if(o){const n=o.indexOf("?"),t=(0,a.mB)(o.substring(n));if(t.url&&t.media)return{showPLPBanner:!0,pinForBanner:{image:{url:(0,a.Jx)(t.media),height:1,width:1},pinDescription:t.description,bannerCopy:e._('Save this idea and discover more inspiration like it.', 'page banner with pin image that was signed up from', 'page banner with pin image that was signed up from')}}}return{showPLPBanner:!1,pinForBanner:null}}function N({i18n:e,location:n}){return O({i18n:e,location:n}).showPLPBanner?O({i18n:e,location:n}):R({i18n:e,location:n}).showPLPBanner?R({i18n:e,location:n}):{showPLPBanner:!1,pinForBanner:null}}},400660:(e,n,t)=>{function o(e){return Boolean(null==e?void 0:e.is_matured_new_user)}t.d(n,{IR:()=>r,V0:()=>o,Wn:()=>a,xT:()=>i});const i=e=>!!e&&2===e.login_state,a=e=>!(!e||!e.match(/\/static\/images\/user\/default_\d+\.png$/));function r(e){return!e||void 0===e.third_party_marketing_tracking_enabled||null===e.third_party_marketing_tracking_enabled||e.third_party_marketing_tracking_enabled}},743413:(e,n,t)=>{t.d(n,{BG:()=>b,Bf:()=>R,J3:()=>E,Nv:()=>p,Ph:()=>g,Un:()=>m,Y7:()=>k,ay:()=>w,bJ:()=>f,gC:()=>h,lv:()=>I,me:()=>v,pK:()=>y});var o=t(172071),i=t(966113),a=t(330102),r=t(957161);const{ADMO_TV_WEB_PIXEL_URL:s,ADMO_TV_WEB_REZ_LOGIN_URL:c,ADMO_TV_LOGIN_EVENT_PIXEL_URL:_,ADMO_TV_REGISTRATION_EVENT_PIXEL_URL:l,ADMO_TV_DEFAULT_LOGGED_IN_USERS_PIXEL_URL:d,ADMO_TV_BILLING_ACCOUNT_CONVERSION_EVENT_PIXEL_URL:u}=i.Z.settings,g="admo-tv-d-ses",m="admo-tv-m-ses",p="admo-tv-d-rez-login",w="admo-tv-m-rez-login",f="admo-tv-d-login",h="admo-tv-m-login",v="admo-tv-def-login",k="admo-tv-d-reg",E="admo-tv-m-reg",y="admo-tv-d-billing",R="admo-tv-m-billing",A={"admo-tv-d-ses":s,"admo-tv-m-ses":s,"admo-tv-d-rez-login":c,"admo-tv-m-rez-login":c,"admo-tv-d-login":_,"admo-tv-m-login":_,"admo-tv-d-reg":l,"admo-tv-m-reg":l,"admo-tv-d-billing":u,"admo-tv-m-billing":u,"admo-tv-def-login":d};function O(e,n){o.Z.increment("admo_tracking_pixel",1,{event_category:e,event_name:"All"}),"All"!==n&&o.Z.increment("admo_tracking_pixel",1,{event_category:e,event_name:n})}function N(){for(const n of Object.keys(A)){let t=(0,r.qn)(n);if(t){const o=(0,a.zj)({src:A[n],id:n,height:1,width:1,sandbox:"allow-scripts",style:"display:none;"});if(!document.getElementById(n)){var e;null===(e=document.body)||void 0===e||e.appendChild(o),t=t.split("#");const[i,a]=t;O(i,a),(0,r.L_)(n)}}}}function I(e,n){function t(e,n){const t=(0,a.zj)({src:A[e],id:e,height:1,width:1,sandbox:"allow-scripts",style:"display:none;"});var o;document.getElementById(e)||(null===(o=document.body)||void 0===o||o.appendChild(t),n(),N())}document.getElementById(e)?N():("complete"===document.readyState&&t(e,n),window.addEventListener("load",function e(n,o){return i=>{t(n,o),window.removeEventListener(i,e)}}(e,n)))}function P(e,n,t){A[e]&&(0,r.Nh)(e,`${n}#${t}`)}function S(e,n,t){return o=>{P(e,n,t),window.removeEventListener(o,S)}}function b(e,n,t){"complete"===document.readyState?P(e,n,t):window.addEventListener("load",S(e,n,t))}},56641:(e,n,t)=>{t.d(n,{Z:()=>a});var o=t(567831),i=t(867820);function a(e,n){if(n&&!(()=>{try{return window.localStorage.test=2,!1}catch(e){return!0}})()){const n=window.open(e,"_blank");return n&&(n.opener=null),n}{const n=(0,o.Z)(e);return setTimeout((()=>{(0,i.My)("setting_new_window_location")}),0),window.location.href=n,window}}},995146:(e,n,t)=>{t.d(n,{a$:()=>l,kv:()=>_,pH:()=>d});var o=t(643913),i=t(6637),a=t(966113),r=t(584595),s=t(867820);const c=(e,n,t,o)=>{const i=e=>{const n=new Error(e.statusText);throw n.response=e,!n.api_error_code&&n.response&&(n.api_error_code=n.response.code,n.message=n.response.message),n},a={credentials:"include",mode:"cors"};return"POST"===t&&(a.method="POST",a.body=n,a.headers={"Content-type":"application/x-www-form-urlencoded; charset=UTF-8","X-Pinterest-InstallId":o},o||(0,s.My)(`unauth.auth_handshake.cross_domain.no_unauth_id.${t}`)),fetch(e,a).then((e=>200===e.status||401===e.status||409===e.status?e:(i(e),{}))).then((e=>e.json())).then((e=>"success"===e.status?Promise.resolve(e):e.code===r.Zn?(e.api_error_code=e.code,Promise.reject(e)):(i(e),{}))).catch((e=>{throw e}))},_=(e,n=!1)=>i.Z.create("HandshakeSessionResource",{token:e,isRegistration:n}).callCreate(),l=(e,{facebookToken:n,inviteCode:t,locale:i,referrer:r,unauthId:s})=>{const _=(e.business_name?"partner/handshake":(e.gplus_code||e.gplus_id_token)&&"gplus/handshake")||e.facebook_id&&"facebook/handshake"||"email/handshake",l={};if(l.email=e.email||"",l.username=e.username||"",l.password=e.password||"",l.first_name=e.first_name||"",l.last_name=e.last_name||"",l.country=e.country||"",l.locale=i,l.referrer=r,e.age){const n=new Date;n.setFullYear(n.getFullYear()-e.age);const t=parseInt(n/1e3,10);l.birthday=t.toString()}if(e.birthday&&(l.birthday=e.birthday),e.custom_gender&&(l.custom_gender=e.custom_gender),e.gender&&(l.gender=e.gender),e.business_name&&(l.account_type=e.account_type,l.business_name=e.business_name,l.first_name=e.business_name),t&&(l.invite_code=t),e.facebook_id){const t=n||e.facebook_token||"";l.facebook_id=e.facebook_id,l.facebook_token=t,l.social_username=e.social_username||""}else(e.gplus_code||e.gplus_id_token)&&(l.password=e.password||"",l.one_time_code=e.gplus_code,l.id_token=e.gplus_id_token,l.redirect_uri=e.gplus_redirect_uri);return e.recaptchaV3Token&&(l.recaptcha_v3_token=e.recaptchaV3Token),c(`${a.Z.settings.ACCOUNTS_PINTEREST_URL}/v3/register/${_}/`,(0,o.Z)(l),"POST",s)},d=(e,{facebookToken:n,recaptchaV3Token:t,referrer:i,unauthId:r})=>{const s=(e.mfa_token?"mfa/handshake":e.gplus_id_token&&"gplus/handshake")||e.facebook_id&&"facebook/handshake"||"handshake",_={};if(e.username_or_email&&(_.username_or_email=e.username_or_email.trim(),_.password=e.password,_.referrer=i),e.facebook_id){const t=n||e.facebook_token||"";_.facebook_id=e.facebook_id,_.facebook_token=t,_.facebook_autologin=e.facebook_autologin||!1}return e.gplus_id_token&&(_.gplus_id_token=e.gplus_id_token,_.gplus_access_token=e.gplus_access_token,_.gplus_expires_at=e.gplus_expires_at,_.gplus_autologin=e.gplus_autologin||!1),e.mfa_token&&(_.mfa_token=e.mfa_token),t&&(_.token=t),c(`${a.Z.settings.ACCOUNTS_PINTEREST_URL}/v3/login/${s}/`,(0,o.Z)(_),"POST",r)}},589486:(e,n,t)=>{t.d(n,{Z:()=>R});var o=t(231486),i=t(6637),a=t(966113),r=t(743413),s=t(584595),c=t(290148),_=t(81759),l=t(817656),d=t(532975),u=t(487116),g=t(330102),m=t(297507),p=t(3223),w=t(995146),f=t(867820),h=t(226198);const v=function(e,n,t="",o="",i="",a=""){let s="referrer_unknown";try{const e=document.referrer;s=e?e.indexOf("/t.co/")>-1?"twitter":e.indexOf("google.")>-1?"google":e.indexOf("bing.")>-1?"bing":e.indexOf("facebook.")>-1?"facebook":"other":"direct"}catch(h){}const _=(0,c.eD)(e),l=n===Object(n)?n.container:"container_unknown";(0,f.My)("login.referrer."+s+"."+_),(0,f.My)("login.container."+l+"."+_),(0,f.My)("login.type."+_);const d=(0,c.eD)(e)||"method_unknown",u=n.page||"page_unknown";e.gplus_autologin?((0,f.My)("web_autologin_google"),(0,f.My)("new_web_autologin_google",{page:u,referrer:s,container:l})):e.facebook_autologin?((0,f.My)("web_autologin_facebook"),(0,f.My)("new_web_autologin_facebook",{page:u,referrer:s,container:l})):((0,f.My)(`web_login.${d}.success.${u}.${l}.${s}.tier1`),(0,f.My)(`new_web_login.${d}.success`,{page:u,referrer:s,container:l})),(0,p.c_)({country:t,countryFromHostName:o,countryFromIp:i})&&(0,m.yP)({id:r.bJ,eventCategory:"Logins",eventName:"Desktop"}),(0,p.$r)({country:t,countryFromHostName:o,countryFromIp:i,regionFromIp:a})&&(0,m.jw)({id:"flashtalking-d-login",eventCategory:"Logins",eventName:"Desktop"}),(0,p.NR)(t,a)&&(0,m.EN)({pixelId:g.Rj,eventCategory:"Logins",eventName:"Desktop"}),(0,p.Fc)({country:t,countryFromHostName:o,countryFromIp:i})&&(0,m.Be)({pixelId:g.HO,eventCategory:"Logins",eventName:"Desktop"});const w=e.facebook_autologin||e.gplus_autologin||e.autologin?"autologin":"login";(0,f.De)({action:w,event:"success",type:_})},k=(e,n)=>{(0,f.My)(`web_cross_domain_login.${e}.${(0,c.eD)(n)}`)},E=(e,n,t="other",o=!1)=>{if(e){const i=e.http_status===l.Ej?l.Ej:e.api_error_code;let a=i;s.qF.has(i)&&(a=s.qF.get(i));const{container:r}=n;o?(0,f.My)(`unauth_web_client_cctld_login_api_error.${String(a)}.${r||"unknow_container"}.${t}`):(0,f.My)(`unauth_web_client_login_api_error.${String(a)}.${r||"unknow_container"}.${t}`),(0,f.De)({action:"login",event:"fail",type:t})}},y=function(e,n,t){"autologin"===(e.facebook_autologin||e.gplus_autologin||e.autologin?"autologin":"login")&&(0,f.dy)({event:n,provider:t})},R=({creds:e,loginContext:n,loggingData:t={},isAccountSwitch:r=!1,recaptchaV2Token:s,recaptchaV3Token:l})=>{if(function(e){return!e.mfa_resend&&!!e.username_or_email}(e)){const o=a.Z.settings.CORS_HANDSHAKE_DOMAINS;if(n&&-1!==o.indexOf(n.origin))return function({creds:e,recaptchaV3Token:n,loggingData:t,loginContext:o}){k("attempt",e);const{referrer:i,facebookToken:a,unauthId:r}=o;return(0,w.pH)(e,{recaptchaV3Token:n,referrer:i,facebookToken:a,unauthId:r}).then((n=>{if(n&&n.data){k("success_with_token",e);const o=n.data;return(0,w.kv)(o).then((n=>(k("success_token_exchanged",e),v(e,t),Promise.resolve())),(n=>{throw k("success_token_not_exchanged",e),n}))}throw k("success_without_token",e),new Error}),(n=>{throw k("failure",e),E(n,t,(0,c.eD)(e),!0),n}))}({creds:e,recaptchaV3Token:l,loggingData:t,loginContext:n})}const g=e.google_open_id_token?"google":"facebook";y(e,"login_api_call_start",g);const m=(0,_.t_)(),p={...e,get_user:e.get_user||e.switch_account&&r,app_type_from_client:7===n.appType?7:5,visited_pages_before_login:m||null,recaptchaV2Token:s,recaptchaV3Token:l};return i.Z.create("UserSessionResource",p).callCreate({showError:!1,async:!0}).then((n=>{const{client_context:i}=n||{},{country:a,country_from_hostname:r,country_from_ip:s,region_from_ip:c}=i||{};return v(e,t,a,r,s,c),y(e,"login_api_call_success",g),(0,d.B)(!1),o.zN(h.e7.name),o.zN(h.x3.name),(0,u.D)("login").then((()=>n))}),(n=>(E(n,t,(0,c.eD)(e)),y(e,"login_api_call_failure",g),Promise.reject(n))))}},532975:(e,n,t)=>{t.d(n,{B:()=>a,a:()=>i});var o=t(704177);const i=()=>o.ZP.localStorage.getItem("uoiou")||!1,a=e=>{o.ZP.localStorage.setItem("uoiou",!!e)}},180630:(e,n,t)=>{t.d(n,{W:()=>s,Z:()=>r});var o=t(330102);function i(e,n,t=3){if(window._sendFacebookPixel)"NewOrRezUsers"===e||"MAU"===e?window._sendFacebookPixel("trackCustom",e):window._sendFacebookPixel("track",e),n();else if(t>0){const o=Math.floor(3e3/t);setTimeout((()=>{i(e,n,t-1)}),o)}}function a(e,n){return t=>{i(e,n),window.removeEventListener(t,a)}}function r(e,n){"complete"===document.readyState?i(e,n):window.addEventListener("load",a(e,n))}function s(){document.getElementById("facebookPixel")||("complete"===document.readyState&&function(){const e=(0,o.zj)({src:"https://"+location.hostname+"/fb.html",id:"facebookPixel",sandbox:"allow-scripts allow-same-origin",style:"display: none;"});if(!document.body)throw new Error("missing <body>");document.body.appendChild(e),e.contentWindow.addEventListener("load",(()=>window._sendFacebookPixel=e.contentWindow.fbq))}(),window.addEventListener("load",s))}},283943:(e,n,t)=>{t.d(n,{aU:()=>s,hq:()=>r,o_:()=>i});var o=t(425288);const{Provider:i,useHook:a}=(0,o.Z)("AuthenticationContext");function r(){return a().loginContext}function s(){return a().logout}},584595:(e,n,t)=>{t.d(n,{$j:()=>T,Cx:()=>Z,D4:()=>P,E:()=>c,E6:()=>O,H9:()=>V,Jt:()=>C,Jw:()=>a,NF:()=>s,OW:()=>l,Pv:()=>L,RL:()=>E,ZP:()=>U,Zn:()=>R,_K:()=>m,aG:()=>g,an:()=>N,at:()=>D,bd:()=>_,cZ:()=>d,dO:()=>u,hU:()=>w,iK:()=>v,iZ:()=>b,lg:()=>p,nY:()=>h,nf:()=>k,oP:()=>f,pH:()=>o,qF:()=>x,rM:()=>S,rm:()=>I,tL:()=>r,tz:()=>i,xN:()=>A,yV:()=>y});const o=101,i=93,a=117,r=116,s=111,c=118,_=9,l=8,d=16,u=12,g=3,m=18,p=105,w=79,f=78,h=77,v=76,k=1402,E=85,y=88,R=1201,A=30,O=84,N=83,I=2901,P=2904,S=2905,b=95,T=19,L=113,D=91,C=2501,V=3050,Z=[l,_],x=new Map([[1,"INVALID_PARAMETERS"],[100,"INVALID_NETWORK_ACCESS_TOKEN"],[p,"FACEBOOK_ACCOUNT_NOT_LINKED"],[u,"API_SERVER_ERROR"],[1202,"LOGIN_MFA_TOKEN_INVALID"],[1203,"MFA_CONNECTION_ERROR"],[13,"API_DOWN"],[181,"GPLUS_CONNECTION_ERROR"],[14,"API_SERVER_SPAM_CONTENT"],[d,"API_REQUEST_TIMEOUT"],[50,"API_ERROR_PIN_NOT_FOUND"],[h,"INVALID_PASSWORD_FB_USER"],[f,"INVALID_PASSWORD_ERROR_CODE"],[w,"INVALID_EMAIL_ERROR_CODE"],[80,"INVALID_EMAIL_OR_PASSWORD"],[82,"LOGIN_DEACTIVATED_USER"],[N,"LOGIN_POLICY_VIOLATION_USER"],[E,"AUTO_PASSWORD_RESET_ERROR_CODE"],[86,"LOGIN_PANICKED_USER"],[87,"LOGIN_SOFT_BANNED_USER"],[i,"API_ERROR_UNDERAGE_REGISTER_ATTEMPT"],[r,"API_ERROR_OVERAGE_REGISTER_ATTEMPT"],[99,"LOGIN_PASSWORD_NOT_CREATED"],[l,"API_LIMIT_EXCEEDED_ERROR"],[_,"API_EVENT_BLOCKED_ERROR"],[T,"USER_IN_SAFE_MODE"],[O,"LOGIN_VOLUNTARILY_DEACTIVATED_USER"],[E,"LOGIN_BAD_PASSWORD_ASK_RESET"],[R,"LOGIN_MFA_REQUIRED"],[A,"LOGIN_USER_NOT_FOUND"],[y,"LOGIN_HARD_BANNED_USER"],[429,"RESPONSE_CODE_TOO_MANY_REQUESTS"],[I,"SAR_DOWNLOAD_LIMIT"],[P,"SAR_EMAIL_UNVERIFIED"],[S,"SAR_EMAIL_MISSING"]]),U=[l,_,T,N,E,y]},290148:(e,n,t)=>{t.d(n,{Ny:()=>u,ZP:()=>m,eD:()=>w,lp:()=>p});var o=t(231486),i=t(794230),a=t(704115),r=t(332730),s=t(6637),c=t(704177),_=t(966113),l=t(226198),d=t(867820);const u=Object.freeze({SOFT_BANNED:0,RATE_LIMITED:1,LOGIN_ASSISTANCE:2,PASSWORD_RESET_SENT:3,PREVENT_FACEBOOK_REGISTER:4,PREVENT_GOOGLE_REGISTER:5,SUSPENDED:6});class g{static defaultLoginRedirectUrl(){return window.location.pathname===_.Z.settings.PASSWORD_RESET_URL||window.location.pathname===_.Z.settings.LOGIN_URL||window.location.pathname.startsWith(_.Z.settings.ADD_SECONDARY_ACCOUNT_PAGE)?"/":window.location.pathname+window.location.search}static defaultSocialLoginRedirectUrl(){return window.location.pathname.startsWith(_.Z.settings.ADD_SECONDARY_ACCOUNT_PAGE)?"/":window.location.pathname}static isExceedRecaptchaLocalLimit(){const e=c.ZP.localStorage.getItem("urh");if(e&&e.indexOf("|")>-1){const n=e.split("|");return 3===n.length&&(new Date).getTime()/1e3-parseInt(n[0],10)<=3600}return!1}static updateRecaptchaTimeStamp(){const e=c.ZP.localStorage.getItem("urh");let n=[];e&&(n=e.split("|"),3===n.length&&n.shift());const t=((new Date).getTime()/1e3).toString();n.push(t);const o=n.join("|");c.ZP.localStorage.setItem("urh",o)}static isFullyLoggedIn(e,n){return e&&1===n}static handleRedirect(e){if(!e){e="/";const n=(0,a.Z)();if(n){const t=n.next;t&&(e=t,delete n.next),e=(0,i.Z)(e,n)}}(0,r.Z)(e)}static handleRedirectWithFallbackWindowLocation(){this.handleRedirect(this.defaultLoginRedirectUrl())}static handleSignupRedirect(e,n){c.ZP.localStorage.setItem("signupTime",Date.now()),!n&&e&&"/"!==e?g.handleRedirect(e):g.handleRedirect("/")}static storeLoginCredentialsToBrowser(e){if(navigator.credentials&&e.username_or_email)try{const n=new window.PasswordCredential({id:e.username_or_email,password:e.password});navigator.credentials.store(n).then((()=>{(0,d.My)("navigatorCredentials.store.success")}))}catch(n){(0,d.My)("navigatorCredentials.store.error")}}static retrieveLoginCredentialsFromBrowser(){const e=window.navigator.credentials;if(!e)return new Promise(((e,n)=>{n()}));return e.get({password:!0,mediation:"silent"})}static attemptLoginWithBrowserCredentials(e,n,t){if(!e)return new Promise(((e,n)=>{n("No credentials")}));let o,i;e.password?(i="include",o=new FormData,o.append("username",e.id),o.append("password",e.password)):i=e;return fetch("/resource/UserSessionResource/create/",{method:"POST",body:o,credentials:i,headers:{Accept:"application/json, text/javascript, */*","X-CSRFToken":n||"","X-Pinterest-AppState":t,"X-Requested-With":"XMLHttpRequest"}}).then((e=>{if(200!==e.status){const n=new Error(e.statusText);throw n.response=e,n}return(0,d.My)("navigatorCredentials.login.success"),e.json()})).catch((e=>((0,d.My)("navigatorCredentials.login.failure"),Promise.reject(e))))}static fetchRecentlyLoggedOutUser(e){if(e)return Promise.reject();const n=s.Z.create("UnauthUserDataResource");return new Promise(((e,t)=>{n.callGet().then((n=>{const i=n.resource_response.data,a=!!o.U2(l.x3);return i?(i.connected_to_facebook||i.connected_to_google||i.has_password||(0,d.My)("unauth.personalized_login.no_login_methods_found"),(0,d.My)("unauth.personalized_login.fetch_user_info.info.user_info_found.logged_out_cookie_"+(a?"true":"false")),e(i)):((0,d.My)("unauth.personalized_login.fetch_user_info.info.no_user_info.logged_out_cookie_"+(a?"true":"false")),t({}))})).catch((e=>{if(e.message){const n=e.message.replace(/\s/g,"_").toLowerCase();(0,d.My)(`unauth.personalized_login.fetch_user_info.error.${n}`)}else(0,d.My)("unauth.personalized_login.fetch_user_info.error.unknown");return t(e)}))}))}static handleLoginMfa(e,n,t){(0,d.My)("multi_step_login"),g.storeLoginCredentialsToBrowser(e),t?t(e,n):(0,d.My)("unauth.login.error.CLIENT_ERROR.null_mfa_handler")}}const m=g;function p(e){return e.facebook_id?"facebook":e.google_open_id_token?"google_one_tap":e.gplus_id_token?"google":e.line_id_token?"line":e.username_or_email?"email":"other"}function w(e){return e.mfa_token?"mfa_token":e.mfa_resend?"mfa_resend":p(e)}},817656:(e,n,t)=>{t.d(n,{AB:()=>o,Ej:()=>i,Sf:()=>a});const o=412,i=429,a=500},487116:(e,n,t)=>{t.d(n,{D:()=>r,N:()=>a});var o=t(172071);const i=.1;async function a(){const e=navigator.serviceWorker;if(o.Z.increment("web_service_worker.update",i),e&&e.getRegistration){const t=await e.getRegistration();if(!t)return o.Z.increment("web_service_worker.update.registration.not_exist",i),await async function(){const e=navigator.serviceWorker;if(o.Z.increment("web_service_worker.install",i),e&&e.register)try{const n=await e.register("/sw.js");return o.Z.increment("web_service_worker.install.success",i),n}catch(n){throw o.Z.increment("web_service_worker.install.error",i),n}}();o.Z.increment("web_service_worker.update.registration.exist",i);try{return await t.update(),o.Z.increment("web_service_worker.update.success",i),t}catch(n){throw o.Z.increment("web_service_worker.update.fail",i),n}}}async function r(e){const n=navigator.serviceWorker;if(o.Z.increment("web_service_worker.unregister",i,{source:e||"unknown"}),n&&n.getRegistration)try{const t=await n.getRegistration();t?(o.Z.increment("web_service_worker.unregister.registration.exist",i,{source:e||"unknown"}),await t.unregister(),o.Z.increment("web_service_worker.unregister.success",i,{source:e||"unknown"}),async function(e){const n=navigator.serviceWorker;if(o.Z.increment("web_service_worker.clear_app_shell",i,{source:e||"unknown"}),n&&window.caches){const n=(await window.caches.keys()).find((e=>e.startsWith("workbox-precaching")));n?(o.Z.increment("web_service_worker.clear_app_shell.precache.exist",i,{source:e||"unknown"}),(await window.caches.open(n)).delete("/sw-shell.html"),o.Z.increment("web_service_worker.clear_app_shell.delete",i,{source:e||"unknown"})):o.Z.increment("web_service_worker.clear_app_shell.precache.not_exist",i,{source:e})}}(e)):o.Z.increment("web_service_worker.unregister.registration.not_exist",i,{source:e||"unknown"})}catch(t){o.Z.increment("web_service_worker.unregister.fail",i,{source:e||"unknown"})}}},297507:(e,n,t)=>{t.d(n,{X:()=>E,fh:()=>u,Xn:()=>f,Um:()=>l,Kv:()=>p,jO:()=>d,yP:()=>y,EN:()=>m,Be:()=>v,KT:()=>k,jw:()=>w,kQ:()=>g,o4:()=>h});var o=t(172071),i=t(957161);var a=t(549872),r=t(38),s=t(887432),c=t(743413),_=t(180630);function l(){(0,_.W)(),(0,_.Z)("PageView",(()=>{o.Z.increment("fb_tracking_pixel",1,{event_category:"PageView",event_name:"AllViews"})})),(0,_.Z)("ViewContent",(()=>{o.Z.increment("fb_tracking_pixel",1,{event_category:"ViewContent",event_name:"AuthViews"})}))}function d(){!function(){function e(){const e=document.createElement("script");e.src="https://www.googletagmanager.com/gtag/js?id=AW-819016158";const n="gtag-id-1";function t(){dataLayer.push(arguments)}e.id=n,e.async=!0,document.getElementById(n)||document.body.insertBefore(e,document.body.firstChild),window.dataLayer=window.dataLayer||[],t("js",new Date),t("config","AW-819016158"),t("event","page_view",{send_to:"AW-819016158"})}"complete"===document.readyState&&e(),window.addEventListener("load",e)}()}function u(e){if(e){const n=e.unauthId,t=e.userId;n&&t&&((0,i.qn)("dpm_pixel_login_event")?(0,s.FB)(n,t,(()=>{o.Z.increment("dpm_tracking_pixel",1,{event_category:"PageView",event_name:"AllViews"}),o.Z.increment("dpm_tracking_pixel",1,{event_category:"PageView",event_name:"AuthViews"})})):(0,s.FB)(n,t,(()=>{o.Z.increment("dpm_tracking_pixel",1,{event_category:"PageView",event_name:"AllViews"}),o.Z.increment("dpm_tracking_pixel",1,{event_category:"PageView",event_name:"AuthViews"}),o.Z.increment("dpm_tracking_pixel",1,{event_category:"PageView",event_name:"UniqueViews"})})))}}function g(e){if(e){const n=e.unauthId;n&&(0,s.e7)(n,(()=>{o.Z.increment("dpm_tracking_pixel",1,{event_category:"PageView",event_name:"AllViews"}),o.Z.increment("dpm_tracking_pixel",1,{event_category:"PageView",event_name:"UnAuthViews"}),o.Z.increment("dpm_tracking_pixel",1,{event_category:"PageView",event_name:"UniqueViews"})}))}}function m(e){if(e){const n=e.pixelId,t=e.userId?e.userId:"",i=e.eventCategory,a=e.eventName;n&&i&&a&&(0,s.l8)(n,t,i,a,(()=>{o.Z.increment("dpm_tracking_pixel",1,{event_category:i,event_name:"All"}),"All"!==a&&o.Z.increment("dpm_tracking_pixel",1,{event_category:i,event_name:a})}))}}function p(e){if(e){const n=e.id,t=e.eventName;n&&t&&(0,r.VC)(n,(()=>{o.Z.increment("flashtalking_tracking_pixel",1,{event_category:"PageView",event_name:"AllViews"}),o.Z.increment("flashtalking_tracking_pixel",1,{event_category:"PageView",event_name:t})}))}}function w(e){if(e){const n=e.id,t=e.eventCategory,i=e.eventName;n&&t&&i&&(0,r.Rs)(n,t,i,(()=>{o.Z.increment("flashtalking_tracking_pixel",1,{event_category:t,event_name:"All"}),"All"!==i&&o.Z.increment("flashtalking_tracking_pixel",1,{event_category:t,event_name:i})}))}}function f(e){if(e){const n=e.unauthId,t=e.userId;n&&t&&(0,a.IV)(n,t,(()=>{o.Z.increment("dentsu_tracking_pixel",1,{event_category:"PageView",event_name:"AllViews"}),o.Z.increment("dentsu_tracking_pixel",1,{event_category:"PageView",event_name:"AuthViews"})}))}}function h(e){if(e){const n=e.unauthId;n&&(0,a.Ob)(n,(()=>{o.Z.increment("dentsu_tracking_pixel",1,{event_category:"PageView",event_name:"AllViews"}),o.Z.increment("dentsu_tracking_pixel",1,{event_category:"PageView",event_name:"UnAuthViews"})}))}}function v(e){if(e){const n=e.pixelId,t=e.eventCategory,o=e.eventName;n&&t&&o&&(0,a.sX)(n,t,o)}}function k(){(0,a.Ii)((()=>{o.Z.increment("dentsu_tracking_pixel",1,{event_category:"PageViews (Facebook)",event_name:"AllViews"})}))}function E(e){if(e){const n=e.id,t=e.eventName,i=e.eventCategory?e.eventCategory:"PageView";n&&t&&(0,c.lv)(n,(()=>{o.Z.increment("admo_tracking_pixel",1,{event_category:i,event_name:"AllViews"}),o.Z.increment("admo_tracking_pixel",1,{event_category:i,event_name:t})}))}}function y(e){if(e){const n=e.id,t=e.eventCategory,o=e.eventName;n&&t&&o&&(0,c.BG)(n,t,o)}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/90850-54ac49b7709e2429.mjs.map