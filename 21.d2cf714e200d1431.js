"use strict";(self.webpackChunkbensegni_github_io=self.webpackChunkbensegni_github_io||[]).push([[21],{2021:(Rt,X,l)=>{l.r(X),l.d(X,{BlogModule:()=>_t});var f=l(6814),R=l(7062),L=l(1091),n=l(9468),q=l(5922);const fe=function(t){return{"background-image":t}};function ge(t,s){if(1&t&&n._UZ(0,"div",9),2&t){const e=n.oxw(2);n.Q6J("ngStyle",n.VKq(1,fe,"url("+e.post.coverImage+")"))}}function me(t,s){if(1&t&&(n.TgZ(0,"p")(1,"small"),n._uU(2),n.ALo(3,"date"),n.qZA()()),2&t){const e=n.oxw(2);n.xp6(2),n.hij("Created: ",n.lcZ(3,1,e.post.date),"")}}function ye(t,s){if(1&t&&(n.TgZ(0,"p"),n._uU(1),n.qZA()),2&t){const e=n.oxw(2);n.xp6(1),n.Oqu(e.post.description)}}function be(t,s){1&t&&n._UZ(0,"h5",10),2&t&&n.Q6J("innerText","Technologies:")}const z=function(t){return{id:t}};function Te(t,s){if(1&t&&n._UZ(0,"a",11),2&t){const e=n.oxw(2);n.Q6J("routerLink","./"+e.post.routeUrl)("state",n.VKq(3,z,e.post.id))("innerText","Read Article")}}function ve(t,s){if(1&t&&n._UZ(0,"a",11),2&t){const e=n.oxw(2);n.Q6J("routerLink","../"+e.post.routeUrl)("state",n.VKq(3,z,e.post.id))("innerText","Read Article")}}const xe=function(){return{"margin-bottom":".75rem"}},Ce=function(){return{}};function Ee(t,s){if(1&t&&(n.TgZ(0,"div",1),n.YNc(1,ge,1,3,"div",2),n.TgZ(2,"div",3)(3,"h4",4),n._uU(4),n.qZA(),n.YNc(5,me,4,3,"p",5),n.YNc(6,ye,2,1,"p",5),n.YNc(7,be,1,1,"h5",6),n._UZ(8,"app-skill-pills",7),n.YNc(9,Te,1,5,"a",8),n.YNc(10,ve,1,5,"a",8),n.qZA()()),2&t){const e=n.oxw();n.xp6(1),n.Q6J("ngIf",!e.blogMini),n.xp6(2),n.Q6J("ngStyle",e.blogMini?n.DdM(10,xe):n.DdM(11,Ce)),n.xp6(1),n.Oqu(e.post.title),n.xp6(1),n.Q6J("ngIf",!e.blogMini),n.xp6(1),n.Q6J("ngIf",!e.blogMini),n.xp6(1),n.Q6J("ngIf",!e.blogMini),n.xp6(1),n.Q6J("skills",e.post.keywords)("showLink",!1),n.xp6(1),n.Q6J("ngIf",!e.blogMini),n.xp6(1),n.Q6J("ngIf",e.blogMini)}}let Q=(()=>{class t{constructor(){this.blogMini=!1}static#e=this.\u0275fac=function(r){return new(r||t)};static#t=this.\u0275cmp=n.Xpm({type:t,selectors:[["app-blog-post"]],inputs:{post:"post",blogMini:"blogMini"},decls:1,vars:1,consts:[["class","blog-post",4,"ngIf"],[1,"blog-post"],["class","cover-image",3,"ngStyle",4,"ngIf"],[1,"post-details"],[3,"ngStyle"],[4,"ngIf"],[3,"innerText",4,"ngIf"],[3,"skills","showLink"],[3,"routerLink","state","innerText",4,"ngIf"],[1,"cover-image",3,"ngStyle"],[3,"innerText"],[3,"routerLink","state","innerText"]],template:function(r,o){1&r&&n.YNc(0,Ee,11,12,"div",0),2&r&&n.Q6J("ngIf",o.post)},dependencies:[R.rH,f.O5,f.PC,q.S,f.uU],styles:["[_nghost-%COMP%]{display:flex;width:100%}"]})}return t})();function we(t,s){1&t&&n._UZ(0,"app-blog-post",4),2&t&&n.Q6J("post",s.$implicit)}function _e(t,s){if(1&t&&(n.ynx(0),n.YNc(1,we,1,1,"app-blog-post",3),n.BQk()),2&t){const e=n.oxw();n.xp6(1),n.Q6J("ngForOf",e.blog$())}}let Re=(()=>{class t extends L.v{static#e=this.\u0275fac=function(){let e;return function(o){return(e||(e=n.n5z(t)))(o||t)}}();static#t=this.\u0275cmp=n.Xpm({type:t,selectors:[["app-blog"]],features:[n.qOj],decls:3,vars:2,consts:[[1,"blog"],[3,"innerText"],[4,"ngIf"],[3,"post",4,"ngFor","ngForOf"],[3,"post"]],template:function(r,o){1&r&&(n.TgZ(0,"div",0),n._UZ(1,"h3",1),n.YNc(2,_e,2,1,"ng-container",2),n.qZA()),2&r&&(n.xp6(1),n.Q6J("innerText","Blog"),n.xp6(1),n.Q6J("ngIf",o.blog$))},dependencies:[f.sg,f.O5,Q],encapsulation:2})}return t})();var Pe=l(3997),Ae=l(9397),ke=l(8180),$=l(2096),Se=l(7715),Ie=l(5592),Me=l(6328),Ne=l(2181),S=l(7398),Y=l(4716),Oe=l(4664);class I{}class M{}class b{constructor(s){this.normalizedNames=new Map,this.lazyUpdate=null,s?"string"==typeof s?this.lazyInit=()=>{this.headers=new Map,s.split("\n").forEach(e=>{const r=e.indexOf(":");if(r>0){const o=e.slice(0,r),a=o.toLowerCase(),i=e.slice(r+1).trim();this.maybeSetNormalizedName(o,a),this.headers.has(a)?this.headers.get(a).push(i):this.headers.set(a,[i])}})}:typeof Headers<"u"&&s instanceof Headers?(this.headers=new Map,s.forEach((e,r)=>{this.setHeaderEntries(r,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(s).forEach(([e,r])=>{this.setHeaderEntries(e,r)})}:this.headers=new Map}has(s){return this.init(),this.headers.has(s.toLowerCase())}get(s){this.init();const e=this.headers.get(s.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(s){return this.init(),this.headers.get(s.toLowerCase())||null}append(s,e){return this.clone({name:s,value:e,op:"a"})}set(s,e){return this.clone({name:s,value:e,op:"s"})}delete(s,e){return this.clone({name:s,value:e,op:"d"})}maybeSetNormalizedName(s,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,s)}init(){this.lazyInit&&(this.lazyInit instanceof b?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(s=>this.applyUpdate(s)),this.lazyUpdate=null))}copyFrom(s){s.init(),Array.from(s.headers.keys()).forEach(e=>{this.headers.set(e,s.headers.get(e)),this.normalizedNames.set(e,s.normalizedNames.get(e))})}clone(s){const e=new b;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof b?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([s]),e}applyUpdate(s){const e=s.name.toLowerCase();switch(s.op){case"a":case"s":let r=s.value;if("string"==typeof r&&(r=[r]),0===r.length)return;this.maybeSetNormalizedName(s.name,e);const o=("a"===s.op?this.headers.get(e):void 0)||[];o.push(...r),this.headers.set(e,o);break;case"d":const a=s.value;if(a){let i=this.headers.get(e);if(!i)return;i=i.filter(d=>-1===a.indexOf(d)),0===i.length?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,i)}else this.headers.delete(e),this.normalizedNames.delete(e)}}setHeaderEntries(s,e){const r=(Array.isArray(e)?e:[e]).map(a=>a.toString()),o=s.toLowerCase();this.headers.set(o,r),this.maybeSetNormalizedName(s,o)}forEach(s){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>s(this.normalizedNames.get(e),this.headers.get(e)))}}class Fe{encodeKey(s){return V(s)}encodeValue(s){return V(s)}decodeKey(s){return decodeURIComponent(s)}decodeValue(s){return decodeURIComponent(s)}}const He=/%(\d[a-f0-9])/gi,Ue={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function V(t){return encodeURIComponent(t).replace(He,(s,e)=>Ue[e]??s)}function N(t){return`${t}`}class T{constructor(s={}){if(this.updates=null,this.cloneFrom=null,this.encoder=s.encoder||new Fe,s.fromString){if(s.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function Le(t,s){const e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(o=>{const a=o.indexOf("="),[i,d]=-1==a?[s.decodeKey(o),""]:[s.decodeKey(o.slice(0,a)),s.decodeValue(o.slice(a+1))],c=e.get(i)||[];c.push(d),e.set(i,c)}),e}(s.fromString,this.encoder)}else s.fromObject?(this.map=new Map,Object.keys(s.fromObject).forEach(e=>{const r=s.fromObject[e],o=Array.isArray(r)?r.map(N):[N(r)];this.map.set(e,o)})):this.map=null}has(s){return this.init(),this.map.has(s)}get(s){this.init();const e=this.map.get(s);return e?e[0]:null}getAll(s){return this.init(),this.map.get(s)||null}keys(){return this.init(),Array.from(this.map.keys())}append(s,e){return this.clone({param:s,value:e,op:"a"})}appendAll(s){const e=[];return Object.keys(s).forEach(r=>{const o=s[r];Array.isArray(o)?o.forEach(a=>{e.push({param:r,value:a,op:"a"})}):e.push({param:r,value:o,op:"a"})}),this.clone(e)}set(s,e){return this.clone({param:s,value:e,op:"s"})}delete(s,e){return this.clone({param:s,value:e,op:"d"})}toString(){return this.init(),this.keys().map(s=>{const e=this.encoder.encodeKey(s);return this.map.get(s).map(r=>e+"="+this.encoder.encodeValue(r)).join("&")}).filter(s=>""!==s).join("&")}clone(s){const e=new T({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(s),e}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(s=>this.map.set(s,this.cloneFrom.map.get(s))),this.updates.forEach(s=>{switch(s.op){case"a":case"s":const e=("a"===s.op?this.map.get(s.param):void 0)||[];e.push(N(s.value)),this.map.set(s.param,e);break;case"d":if(void 0===s.value){this.map.delete(s.param);break}{let r=this.map.get(s.param)||[];const o=r.indexOf(N(s.value));-1!==o&&r.splice(o,1),r.length>0?this.map.set(s.param,r):this.map.delete(s.param)}}}),this.cloneFrom=this.updates=null)}}class De{constructor(){this.map=new Map}set(s,e){return this.map.set(s,e),this}get(s){return this.map.has(s)||this.map.set(s,s.defaultValue()),this.map.get(s)}delete(s){return this.map.delete(s),this}has(s){return this.map.has(s)}keys(){return this.map.keys()}}function G(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function K(t){return typeof Blob<"u"&&t instanceof Blob}function W(t){return typeof FormData<"u"&&t instanceof FormData}class P{constructor(s,e,r,o){let a;if(this.url=e,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=s.toUpperCase(),function Je(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||o?(this.body=void 0!==r?r:null,a=o):a=r,a&&(this.reportProgress=!!a.reportProgress,this.withCredentials=!!a.withCredentials,a.responseType&&(this.responseType=a.responseType),a.headers&&(this.headers=a.headers),a.context&&(this.context=a.context),a.params&&(this.params=a.params)),this.headers||(this.headers=new b),this.context||(this.context=new De),this.params){const i=this.params.toString();if(0===i.length)this.urlWithParams=e;else{const d=e.indexOf("?");this.urlWithParams=e+(-1===d?"?":d<e.length-1?"&":"")+i}}else this.params=new T,this.urlWithParams=e}serializeBody(){return null===this.body?null:G(this.body)||K(this.body)||W(this.body)||function Be(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof T?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||W(this.body)?null:K(this.body)?this.body.type||null:G(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof T?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(s={}){const e=s.method||this.method,r=s.url||this.url,o=s.responseType||this.responseType,a=void 0!==s.body?s.body:this.body,i=void 0!==s.withCredentials?s.withCredentials:this.withCredentials,d=void 0!==s.reportProgress?s.reportProgress:this.reportProgress;let c=s.headers||this.headers,g=s.params||this.params;const _=s.context??this.context;return void 0!==s.setHeaders&&(c=Object.keys(s.setHeaders).reduce((m,y)=>m.set(y,s.setHeaders[y]),c)),s.setParams&&(g=Object.keys(s.setParams).reduce((m,y)=>m.set(y,s.setParams[y]),g)),new P(e,r,a,{params:g,headers:c,context:_,reportProgress:d,responseType:o,withCredentials:i})}}var E=function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t}(E||{});class H{constructor(s,e=200,r="OK"){this.headers=s.headers||new b,this.status=void 0!==s.status?s.status:e,this.statusText=s.statusText||r,this.url=s.url||null,this.ok=this.status>=200&&this.status<300}}class U extends H{constructor(s={}){super(s),this.type=E.ResponseHeader}clone(s={}){return new U({headers:s.headers||this.headers,status:void 0!==s.status?s.status:this.status,statusText:s.statusText||this.statusText,url:s.url||this.url||void 0})}}class w extends H{constructor(s={}){super(s),this.type=E.Response,this.body=void 0!==s.body?s.body:null}clone(s={}){return new w({body:void 0!==s.body?s.body:this.body,headers:s.headers||this.headers,status:void 0!==s.status?s.status:this.status,statusText:s.statusText||this.statusText,url:s.url||this.url||void 0})}}class ee extends H{constructor(s){super(s,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${s.url||"(unknown url)"}`:`Http failure response for ${s.url||"(unknown url)"}: ${s.status} ${s.statusText}`,this.error=s.error||null}}function D(t,s){return{body:s,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials}}let te=(()=>{class t{constructor(e){this.handler=e}request(e,r,o={}){let a;if(e instanceof P)a=e;else{let c,g;c=o.headers instanceof b?o.headers:new b(o.headers),o.params&&(g=o.params instanceof T?o.params:new T({fromObject:o.params})),a=new P(e,r,void 0!==o.body?o.body:null,{headers:c,context:o.context,params:g,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials})}const i=(0,$.of)(a).pipe((0,Me.b)(c=>this.handler.handle(c)));if(e instanceof P||"events"===o.observe)return i;const d=i.pipe((0,Ne.h)(c=>c instanceof w));switch(o.observe||"body"){case"body":switch(a.responseType){case"arraybuffer":return d.pipe((0,S.U)(c=>{if(null!==c.body&&!(c.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return c.body}));case"blob":return d.pipe((0,S.U)(c=>{if(null!==c.body&&!(c.body instanceof Blob))throw new Error("Response is not a Blob.");return c.body}));case"text":return d.pipe((0,S.U)(c=>{if(null!==c.body&&"string"!=typeof c.body)throw new Error("Response is not a string.");return c.body}));default:return d.pipe((0,S.U)(c=>c.body))}case"response":return d;default:throw new Error(`Unreachable: unhandled observe type ${o.observe}}`)}}delete(e,r={}){return this.request("DELETE",e,r)}get(e,r={}){return this.request("GET",e,r)}head(e,r={}){return this.request("HEAD",e,r)}jsonp(e,r){return this.request("JSONP",e,{params:(new T).append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,r={}){return this.request("OPTIONS",e,r)}patch(e,r,o={}){return this.request("PATCH",e,D(o,r))}post(e,r,o={}){return this.request("POST",e,D(o,r))}put(e,r,o={}){return this.request("PUT",e,D(o,r))}static#e=this.\u0275fac=function(r){return new(r||t)(n.LFG(I))};static#t=this.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac})}return t})();function re(t,s){return s(t)}function Ze(t,s){return(e,r)=>s.intercept(e,{handle:o=>t(o,r)})}const qe=new n.OlP(""),A=new n.OlP(""),oe=new n.OlP("");function ze(){let t=null;return(s,e)=>{null===t&&(t=((0,n.f3M)(qe,{optional:!0})??[]).reduceRight(Ze,re));const r=(0,n.f3M)(n.HDt),o=r.add();return t(s,e).pipe((0,Y.x)(()=>r.remove(o)))}}let ie=(()=>{class t extends I{constructor(e,r){super(),this.backend=e,this.injector=r,this.chain=null,this.pendingTasks=(0,n.f3M)(n.HDt)}handle(e){if(null===this.chain){const o=Array.from(new Set([...this.injector.get(A),...this.injector.get(oe,[])]));this.chain=o.reduceRight((a,i)=>function Xe(t,s,e){return(r,o)=>e.runInContext(()=>s(r,a=>t(a,o)))}(a,i,this.injector),re)}const r=this.pendingTasks.add();return this.chain(e,o=>this.backend.handle(o)).pipe((0,Y.x)(()=>this.pendingTasks.remove(r)))}static#e=this.\u0275fac=function(r){return new(r||t)(n.LFG(M),n.LFG(n.lqb))};static#t=this.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac})}return t})();const Ve=/^\)\]\}',?\n/;let ce=(()=>{class t{constructor(e){this.xhrFactory=e}handle(e){if("JSONP"===e.method)throw new n.vHH(-2800,!1);const r=this.xhrFactory;return(r.\u0275loadImpl?(0,Se.D)(r.\u0275loadImpl()):(0,$.of)(null)).pipe((0,Oe.w)(()=>new Ie.y(a=>{const i=r.build();if(i.open(e.method,e.urlWithParams),e.withCredentials&&(i.withCredentials=!0),e.headers.forEach((u,p)=>i.setRequestHeader(u,p.join(","))),e.headers.has("Accept")||i.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){const u=e.detectContentTypeHeader();null!==u&&i.setRequestHeader("Content-Type",u)}if(e.responseType){const u=e.responseType.toLowerCase();i.responseType="json"!==u?u:"text"}const d=e.serializeBody();let c=null;const g=()=>{if(null!==c)return c;const u=i.statusText||"OK",p=new b(i.getAllResponseHeaders()),C=function Ge(t){return"responseURL"in t&&t.responseURL?t.responseURL:/^X-Request-URL:/m.test(t.getAllResponseHeaders())?t.getResponseHeader("X-Request-URL"):null}(i)||e.url;return c=new U({headers:p,status:i.status,statusText:u,url:C}),c},_=()=>{let{headers:u,status:p,statusText:C,url:j}=g(),h=null;204!==p&&(h=typeof i.response>"u"?i.responseText:i.response),0===p&&(p=h?200:0);let F=p>=200&&p<300;if("json"===e.responseType&&"string"==typeof h){const he=h;h=h.replace(Ve,"");try{h=""!==h?JSON.parse(h):null}catch(Z){h=he,F&&(F=!1,h={error:Z,text:h})}}F?(a.next(new w({body:h,headers:u,status:p,statusText:C,url:j||void 0})),a.complete()):a.error(new ee({error:h,headers:u,status:p,statusText:C,url:j||void 0}))},m=u=>{const{url:p}=g(),C=new ee({error:u,status:i.status||0,statusText:i.statusText||"Unknown Error",url:p||void 0});a.error(C)};let y=!1;const B=u=>{y||(a.next(g()),y=!0);let p={type:E.DownloadProgress,loaded:u.loaded};u.lengthComputable&&(p.total=u.total),"text"===e.responseType&&i.responseText&&(p.partialText=i.responseText),a.next(p)},k=u=>{let p={type:E.UploadProgress,loaded:u.loaded};u.lengthComputable&&(p.total=u.total),a.next(p)};return i.addEventListener("load",_),i.addEventListener("error",m),i.addEventListener("timeout",m),i.addEventListener("abort",m),e.reportProgress&&(i.addEventListener("progress",B),null!==d&&i.upload&&i.upload.addEventListener("progress",k)),i.send(d),a.next({type:E.Sent}),()=>{i.removeEventListener("error",m),i.removeEventListener("abort",m),i.removeEventListener("load",_),i.removeEventListener("timeout",m),e.reportProgress&&(i.removeEventListener("progress",B),null!==d&&i.upload&&i.upload.removeEventListener("progress",k)),i.readyState!==i.DONE&&i.abort()}})))}static#e=this.\u0275fac=function(r){return new(r||t)(n.LFG(f.JF))};static#t=this.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac})}return t})();const J=new n.OlP("XSRF_ENABLED"),le=new n.OlP("XSRF_COOKIE_NAME",{providedIn:"root",factory:()=>"XSRF-TOKEN"}),ue=new n.OlP("XSRF_HEADER_NAME",{providedIn:"root",factory:()=>"X-XSRF-TOKEN"});class de{}let et=(()=>{class t{constructor(e,r,o){this.doc=e,this.platform=r,this.cookieName=o,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,f.Mx)(e,this.cookieName),this.lastCookieString=e),this.lastToken}static#e=this.\u0275fac=function(r){return new(r||t)(n.LFG(f.K0),n.LFG(n.Lbi),n.LFG(le))};static#t=this.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac})}return t})();function tt(t,s){const e=t.url.toLowerCase();if(!(0,n.f3M)(J)||"GET"===t.method||"HEAD"===t.method||e.startsWith("http://")||e.startsWith("https://"))return s(t);const r=(0,n.f3M)(de).getToken(),o=(0,n.f3M)(ue);return null!=r&&!t.headers.has(o)&&(t=t.clone({headers:t.headers.set(o,r)})),s(t)}var v=function(t){return t[t.Interceptors=0]="Interceptors",t[t.LegacyInterceptors=1]="LegacyInterceptors",t[t.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",t[t.NoXsrfProtection=3]="NoXsrfProtection",t[t.JsonpSupport=4]="JsonpSupport",t[t.RequestsMadeViaParent=5]="RequestsMadeViaParent",t[t.Fetch=6]="Fetch",t}(v||{});function nt(...t){const s=[te,ce,ie,{provide:I,useExisting:ie},{provide:M,useExisting:ce},{provide:A,useValue:tt,multi:!0},{provide:J,useValue:!0},{provide:de,useClass:et}];for(const e of t)s.push(...e.\u0275providers);return(0,n.MR2)(s)}const pe=new n.OlP("LEGACY_INTERCEPTOR_FN");function st(){return function x(t,s){return{\u0275kind:t,\u0275providers:s}}(v.LegacyInterceptors,[{provide:pe,useFactory:ze},{provide:A,useExisting:pe,multi:!0}])}let rt=(()=>{class t{static#e=this.\u0275fac=function(r){return new(r||t)};static#t=this.\u0275mod=n.oAB({type:t});static#n=this.\u0275inj=n.cJS({providers:[nt(st())]})}return t})();var ut=l(1060);function dt(t,s){1&t&&n._UZ(0,"app-blog-post",3),2&t&&n.Q6J("post",s.$implicit)("blogMini",!0)}function pt(t,s){if(1&t&&(n.ynx(0),n._UZ(1,"h3",1),n.YNc(2,dt,1,2,"app-blog-post",2),n.BQk()),2&t){const e=n.oxw();n.xp6(1),n.Q6J("innerText","Articles"),n.xp6(1),n.Q6J("ngForOf",e.blog$)}}let ht=(()=>{class t{constructor(e){this._globalService=e,this.blog$=[]}ngOnInit(){this.blog$=this.assignBlogList()}ngOnChanges(e){e&&(this.blog$=this.assignBlogList())}assignBlogList(){return this._globalService.blog$().filter(e=>e.id!==this.articleId)}static#e=this.\u0275fac=function(r){return new(r||t)(n.Y36(L.v))};static#t=this.\u0275cmp=n.Xpm({type:t,selectors:[["app-blog-articles"]],inputs:{articleId:"articleId"},features:[n.TTD],decls:1,vars:1,consts:[[4,"ngIf"],[1,"articles-header",3,"innerText"],[3,"post","blogMini",4,"ngFor","ngForOf"],[3,"post","blogMini"]],template:function(r,o){1&r&&n.YNc(0,pt,3,2,"ng-container",0),2&r&&n.Q6J("ngIf",o.blog$)},dependencies:[f.sg,f.O5,Q],encapsulation:2})}return t})();var ft=l(8569);let gt=(()=>{class t{static#e=this.\u0275fac=function(r){return new(r||t)};static#t=this.\u0275cmp=n.Xpm({type:t,selectors:[["app-blog-contact-details"]],decls:10,vars:1,consts:[[1,"blog-contact"],[3,"innerText"],[1,"blog-contact-introduction"],["src","../../../assets/img/me/me_3.webp","alt","linkedin avatar",1,"blog-contact-image"],[1,"link-wrapper"],["href","https://www.linkedin.com/in/bensegni","target","_blank"]],template:function(r,o){1&r&&(n.TgZ(0,"div",0),n._UZ(1,"h3",1),n.TgZ(2,"div",2),n._UZ(3,"img",3),n.TgZ(4,"p"),n._uU(5,"Thanks for checking out this article! If you have any questions or are curious to learn more about Angular, feel free to send me a connection request and shoot me a message. I'm always happy to help out!"),n.qZA()(),n.TgZ(6,"div",4),n._UZ(7,"app-linkedin-icon"),n.TgZ(8,"a",5),n._uU(9,"linkedin.com/in/bensegni"),n.qZA()()()),2&r&&(n.xp6(1),n.Q6J("innerText","Get In Touch"))},dependencies:[ft.C]})}return t})();var mt=l(7763),yt=l(6593);let bt=(()=>{class t{constructor(e){this._sanitizer=e}transform(e){return this._sanitizer.bypassSecurityTrustHtml(e)}static#e=this.\u0275fac=function(r){return new(r||t)(n.Y36(yt.H7,16))};static#t=this.\u0275pipe=n.Yjl({name:"safeResource",type:t,pure:!0})}return t})();function Tt(t,s){1&t&&(n.TgZ(0,"p",18),n._uU(1,"Page Address is Copied!"),n.qZA())}function vt(t,s){if(1&t){const e=n.EpF();n.ynx(0),n.TgZ(1,"div",1)(2,"div",2)(3,"a",3),n._UZ(4,"img",4),n.ALo(5,"altText"),n.TgZ(6,"span"),n._uU(7,"Back to Blog Articles"),n.qZA()(),n._UZ(8,"h3",5),n.TgZ(9,"p")(10,"small"),n._uU(11),n.ALo(12,"date"),n.qZA()(),n.TgZ(13,"p",6)(14,"span",7),n._uU(15," Read Time: "),n.TgZ(16,"pre"),n._uU(17),n.ALo(18,"date"),n.qZA()(),n._UZ(19,"span",8),n.qZA(),n._UZ(20,"h4",5)(21,"app-skill-pills",9),n.TgZ(22,"div",10)(23,"button",11),n.NdJ("click",function(){n.CHM(e);const o=n.oxw();return n.KtG(o.copyURL())}),n._UZ(24,"img",12),n._uU(25,"Copy & Share"),n.qZA(),n._UZ(26,"div",13),n.YNc(27,Tt,2,0,"p",14),n.qZA(),n._UZ(28,"div",15),n.ALo(29,"safeResource"),n._UZ(30,"app-blog-contact-details"),n.qZA(),n.TgZ(31,"div",16),n._UZ(32,"app-blog-articles",17),n.qZA()(),n.BQk()}if(2&t){const e=n.oxw();n.xp6(4),n.Q6J("src",e.blogIcon,n.LSH)("alt",n.lcZ(5,14,e.blogIcon)),n.xp6(4),n.Q6J("innerText",e.article.title),n.xp6(3),n.hij("Created: ",n.lcZ(12,16,e.article.date),""),n.xp6(6),n.AsE("",n.xi3(18,18,1e3*e.averageReadingTime,"s")," ",e.minuteOrMinutes,""),n.xp6(2),n.Q6J("tooltip",e.readTimeToolTip),n.xp6(1),n.Q6J("innerText","Technologies:"),n.xp6(1),n.Q6J("skills",e.article.keywords),n.xp6(3),n.Q6J("src",e.shareIcon,n.LSH),n.xp6(2),n.Q6J("tooltip",e.toolTip),n.xp6(1),n.Q6J("ngIf",e.urlIsCopied),n.xp6(1),n.Q6J("innerHTML",n.lcZ(29,21,e.content),n.oJD),n.xp6(4),n.Q6J("articleId",e.article.id)}}const xt=[{path:"",component:Re},{path:":id",component:(()=>{class t{constructor(e,r,o){this._globalService=e,this._router=r,this._http=o,this.averageReadingTime=0,this.minuteOrMinutes="",this.blogIcon="../../../assets/img/blog_icon.svg",this.content="",this.urlIsCopied=!1,this.shareIcon="../../../assets/img/share_icon.svg",this.toolTip={toolTipTitle:"Copy & Share",text:"Click the button to easily copy the page address to your clipboard. Then, you can share the link wherever you like."},this.readTimeToolTip={toolTipTitle:"Read Time Evaluation",text:"Using the Medium model, this offers an estimate of how long it takes to read this article.",linkText:"Read About it Here",link:"https://blog.medium.com/read-time-and-you-bc2048ab620c"}}ngOnInit(){let e="";this._router.events.pipe((0,Pe.x)(()=>this._router.url===e),(0,Ae.b)(()=>e=this._router.url)).subscribe(()=>{this.urlIsCopied=!1,this.assignBlogArticle(this._router.url)})}assignBlogArticle(e){this.article=this._globalService.blog$().find(r=>e.includes(r.routeUrl)),this.getContent()}getContent(){this.article&&this._http.get(this.article.content,{responseType:"text"}).pipe((0,ke.q)(1)).subscribe(e=>{this.content=e,this.convertToReadingTime(this.content.split(" ").length)})}copyURL(){this.urlIsCopied=!0,navigator.clipboard.writeText(`https://bensegni.github.io${this._router.url}`).then().catch(e=>console.log(e))}convertToReadingTime(e){this.averageReadingTime=Math.floor(e/275),this.isItMinutesOrMinute(this.averageReadingTime)}isItMinutesOrMinute(e){this.minuteOrMinutes=e>1?"minutes":"minute"}static#e=this.\u0275fac=function(r){return new(r||t)(n.Y36(L.v),n.Y36(R.F0),n.Y36(te))};static#t=this.\u0275cmp=n.Xpm({type:t,selectors:[["app-blog-article"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"article-wrapper"],[1,"article"],["routerLink","..",1,"back-link"],[3,"src","alt"],[3,"innerText"],[1,"article-reading-time-wrapper"],[1,"article-reading-time"],[1,"reading-time-tooltip",3,"tooltip"],[3,"skills"],[1,"copy-url"],["value","click to copy",1,"copy-url-button",3,"click"],["alt","shareIcon | altText",3,"src"],[1,"copy-url-tooltip",3,"tooltip"],["class","copy-url-message",4,"ngIf"],[1,"content",3,"innerHTML"],[1,"articles"],[3,"articleId"],[1,"copy-url-message"]],template:function(r,o){1&r&&n.YNc(0,vt,33,23,"ng-container",0),2&r&&n.Q6J("ngIf",o.article)},dependencies:[R.rH,f.O5,ut.H,q.S,ht,gt,f.uU,mt.b,bt],encapsulation:2})}return t})()}];let Ct=(()=>{class t{static#e=this.\u0275fac=function(r){return new(r||t)};static#t=this.\u0275mod=n.oAB({type:t});static#n=this.\u0275inj=n.cJS({imports:[R.Bz.forChild(xt),R.Bz]})}return t})();var Et=l(6233),wt=l(9248);let _t=(()=>{class t{static#e=this.\u0275fac=function(r){return new(r||t)};static#t=this.\u0275mod=n.oAB({type:t});static#n=this.\u0275inj=n.cJS({imports:[Ct,f.ez,Et.A,wt.N,rt]})}return t})()}}]);