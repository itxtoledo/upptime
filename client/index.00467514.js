import{S as e,i as t,s as n,e as a,t as r,c as s,a as l,b as c,d as i,f as o,g as h,h as u,n as f,j as m,k as g,l as d,m as p,o as $,p as v,q as w,r as E,u as T,v as D,w as I,x as S,y as b,z as H,A as L,B as M,C as R,D as y}from"./client.f17071c6.js";import{O as N,L as A}from"./index.84a3f47c.js";function _(e,t,n){const a=e.slice();return a[5]=t[n],a}function O(e){let t,n,m,g=w.i18n.allSystemsOperational+"";return{c(){t=a("article"),n=r("✅   "),m=r(g),this.h()},l(e){t=s(e,"ARTICLE",{class:!0});var a=l(t);n=c(a,"✅   "),m=c(a,g),a.forEach(i),this.h()},h(){o(t,"class","good svelte-lf2whe")},m(e,a){h(e,t,a),u(t,n),u(t,m)},p:f,d(e){e&&i(t)}}}function U(e){let t,n,o,d,p=w.i18n.activeIncidents+"",$=e[1],v=[];for(let t=0;t<$.length;t+=1)v[t]=k(_(e,$,t));return{c(){t=a("h2"),n=r(p),o=m();for(let e=0;e<v.length;e+=1)v[e].c();d=D()},l(e){t=s(e,"H2",{});var a=l(t);n=c(a,p),a.forEach(i),o=g(e);for(let t=0;t<v.length;t+=1)v[t].l(e);d=D()},m(e,a){h(e,t,a),u(t,n),h(e,o,a);for(let t=0;t<v.length;t+=1)v[t].m(e,a);h(e,d,a)},p(e,t){if(2&t){let n;for($=e[1],n=0;n<$.length;n+=1){const a=_(e,$,n);v[n]?v[n].p(a,t):(v[n]=k(a),v[n].c(),v[n].m(d.parentNode,d))}for(;n<v.length;n+=1)v[n].d(1);v.length=$.length}},i:f,o:f,d(e){e&&i(t),e&&i(o),I(v,e),e&&i(d)}}}function V(e){let t,n;return t=new A({}),{c(){S(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,a){H(t,e,a),n=!0},p:f,i(e){n||(v(t.$$.fragment,e),n=!0)},o(e){p(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function k(e){let t,n,f,d,p,$,v,E,D,I,S,b,H,L,M=e[5].title.replace("🛑","").replace("⚠️","").trim()+"",R=w.i18n.activeIncidentSummary.replace(/\$DATE/g,new Date(e[5].created_at).toLocaleString()).replace(/\$POSTS/g,e[5].comments)+"",y=w.i18n.incidentReport.replace(/\$NUMBER/g,e[5].number)+"";return{c(){t=a("article"),n=a("div"),f=a("div"),d=a("h4"),p=r(M),$=m(),v=a("div"),E=r(R),D=m(),I=a("div"),S=a("a"),b=r(y),L=m(),this.h()},l(e){t=s(e,"ARTICLE",{class:!0});var a=l(t);n=s(a,"DIV",{class:!0});var r=l(n);f=s(r,"DIV",{});var o=l(f);d=s(o,"H4",{});var h=l(d);p=c(h,M),h.forEach(i),$=g(o),v=s(o,"DIV",{});var u=l(v);E=c(u,R),u.forEach(i),o.forEach(i),D=g(r),I=s(r,"DIV",{class:!0});var m=l(I);S=s(m,"A",{href:!0});var w=l(S);b=c(w,y),w.forEach(i),m.forEach(i),r.forEach(i),L=g(a),a.forEach(i),this.h()},h(){o(S,"href",H="/incident/"+e[5].number),o(I,"class","f r"),o(n,"class","f"),o(t,"class","down link svelte-lf2whe")},m(e,a){h(e,t,a),u(t,n),u(n,f),u(f,d),u(d,p),u(f,$),u(f,v),u(v,E),u(n,D),u(n,I),u(I,S),u(S,b),u(t,L)},p(e,t){2&t&&M!==(M=e[5].title.replace("🛑","").replace("⚠️","").trim()+"")&&T(p,M),2&t&&R!==(R=w.i18n.activeIncidentSummary.replace(/\$DATE/g,new Date(e[5].created_at).toLocaleString()).replace(/\$POSTS/g,e[5].comments)+"")&&T(E,R),2&t&&y!==(y=w.i18n.incidentReport.replace(/\$NUMBER/g,e[5].number)+"")&&T(b,y),2&t&&H!==(H="/incident/"+e[5].number)&&o(S,"href",H)},d(e){e&&i(t)}}}function x(e){let t,n,r,c,u,f=!e[1].length&&!e[0]&&O();const w=[V,U],E=[];function T(e,t){return e[0]?0:e[1].length?1:-1}return~(r=T(e))&&(c=E[r]=w[r](e)),{c(){f&&f.c(),t=m(),n=a("section"),c&&c.c(),this.h()},l(e){f&&f.l(e),t=g(e),n=s(e,"SECTION",{class:!0});var a=l(n);c&&c.l(a),a.forEach(i),this.h()},h(){o(n,"class","svelte-lf2whe")},m(e,a){f&&f.m(e,a),h(e,t,a),h(e,n,a),~r&&E[r].m(n,null),u=!0},p(e,[a]){e[1].length||e[0]?f&&(f.d(1),f=null):f?f.p(e,a):(f=O(),f.c(),f.m(t.parentNode,t));let s=r;r=T(e),r===s?~r&&E[r].p(e,a):(c&&(d(),p(E[s],1,1,(()=>{E[s]=null})),$()),~r?(c=E[r],c||(c=E[r]=w[r](e),c.c()),v(c,1),c.m(n,null)):c=null)},i(e){u||(v(c),u=!0)},o(e){p(c),u=!1},d(e){f&&f.d(e),e&&i(t),e&&i(n),~r&&E[r].d()}}}function C(e,t,n){let a=!0;const r=new N({userAgent:w["user-agent"]}),s=w.owner,l=w.repo;let c=[];return E((async()=>{n(1,c=(await r.issues.listForRepo({owner:s,repo:l,state:"open",filter:"all",sort:"created",direction:"desc",labels:"status"})).data),n(1,c=c.map(((e,t)=>(e.showHeading=0===t||new Date(c[t-1].created_at).toLocaleDateString()!==new Date(e.created_at).toLocaleDateString(),e)))),n(0,a=!1)})),[a,c]}class P extends e{constructor(e){super(),t(this,e,C,x,n,{})}}function B(e,t,n){const a=e.slice();return a[5]=t[n],a}function j(e){let t,n=e[1],a=[];for(let t=0;t<n.length;t+=1)a[t]=z(B(e,n,t));return{c(){for(let e=0;e<a.length;e+=1)a[e].c();t=D()},l(e){for(let t=0;t<a.length;t+=1)a[t].l(e);t=D()},m(e,n){for(let t=0;t<a.length;t+=1)a[t].m(e,n);h(e,t,n)},p(e,r){if(14&r){let s;for(n=e[1],s=0;s<n.length;s+=1){const l=B(e,n,s);a[s]?a[s].p(l,r):(a[s]=z(l),a[s].c(),a[s].m(t.parentNode,t))}for(;s<a.length;s+=1)a[s].d(1);a.length=n.length}},i:f,o:f,d(e){I(a,e),e&&i(t)}}}function F(e){let t,n;return t=new A({}),{c(){S(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,a){H(t,e,a),n=!0},p:f,i(e){n||(v(t.$$.fragment,e),n=!0)},o(e){p(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function z(e){let t,n,f,d,p,$,v,E,D,I,S,b,H=e[5].name+"",L=w.i18n.overallUptime.replace(/\$UPTIME/g,e[5].uptime)+"",R=w.i18n.averageResponseTime.replace(/\$TIME/g,e[5].time)+"";return{c(){t=a("article"),n=a("h4"),f=a("a"),d=r(H),$=m(),v=a("div"),E=m(),D=a("div"),I=m(),this.h()},l(e){t=s(e,"ARTICLE",{class:!0,style:!0});var a=l(t);n=s(a,"H4",{});var r=l(n);f=s(r,"A",{href:!0});var o=l(f);d=c(o,H),o.forEach(i),r.forEach(i),$=g(a),v=s(a,"DIV",{}),l(v).forEach(i),E=g(a),D=s(a,"DIV",{}),l(D).forEach(i),I=g(a),a.forEach(i),this.h()},h(){o(f,"href",p="/history/"+e[5].slug),o(t,"class",S=M(e[5].status+" link")+" svelte-b6aso6"),o(t,"style",b=`background-image: url("https://raw.githubusercontent.com/${e[2]}/${e[3]}/master/graphs/${e[5].slug}.png`)},m(e,a){h(e,t,a),u(t,n),u(n,f),u(f,d),u(t,$),u(t,v),v.innerHTML=L,u(t,E),u(t,D),D.innerHTML=R,u(t,I)},p(e,n){2&n&&H!==(H=e[5].name+"")&&T(d,H),2&n&&p!==(p="/history/"+e[5].slug)&&o(f,"href",p),2&n&&L!==(L=w.i18n.overallUptime.replace(/\$UPTIME/g,e[5].uptime)+"")&&(v.innerHTML=L),2&n&&R!==(R=w.i18n.averageResponseTime.replace(/\$TIME/g,e[5].time)+"")&&(D.innerHTML=R),2&n&&S!==(S=M(e[5].status+" link")+" svelte-b6aso6")&&o(t,"class",S),2&n&&b!==(b=`background-image: url("https://raw.githubusercontent.com/${e[2]}/${e[3]}/master/graphs/${e[5].slug}.png`)&&o(t,"style",b)},d(e){e&&i(t)}}}function q(e){let t,n,o,f,E,T,D,I=w.i18n.liveStatus+"";const S=[F,j],b=[];function H(e,t){return e[0]?0:e[1].length?1:-1}return~(E=H(e))&&(T=b[E]=S[E](e)),{c(){t=a("h2"),n=r(I),o=m(),f=a("section"),T&&T.c()},l(e){t=s(e,"H2",{});var a=l(t);n=c(a,I),a.forEach(i),o=g(e),f=s(e,"SECTION",{});var r=l(f);T&&T.l(r),r.forEach(i)},m(e,a){h(e,t,a),u(t,n),h(e,o,a),h(e,f,a),~E&&b[E].m(f,null),D=!0},p(e,[t]){let n=E;E=H(e),E===n?~E&&b[E].p(e,t):(T&&(d(),p(b[n],1,1,(()=>{b[n]=null})),$()),~E?(T=b[E],T||(T=b[E]=S[E](e),T.c()),v(T,1),T.m(f,null)):T=null)},i(e){D||(v(T),D=!0)},o(e){p(T),D=!1},d(e){e&&i(t),e&&i(o),e&&i(f),~E&&b[E].d()}}}function J(e,t,n){let a=!0;const r=new N({userAgent:w["user-agent"]}),s=w.owner,l=w.repo;let c=[];return E((async()=>{n(1,c=JSON.parse(atob((await r.repos.getContent({owner:s,repo:l,path:"history/summary.json"})).data.content.replace(/\n/g,"")))),n(0,a=!1)})),[a,c,s,l]}class G extends e{constructor(e){super(),t(this,e,J,q,n,{})}}function K(e,t,n){const a=e.slice();return a[5]=t[n],a}function Q(e){let t,n,d,p,$=w.i18n.pastIncidents+"",v=e[1],E=[];for(let t=0;t<v.length;t+=1)E[t]=Y(K(e,v,t));return{c(){t=a("h2"),n=r($),d=m();for(let e=0;e<E.length;e+=1)E[e].c();p=D(),this.h()},l(e){t=s(e,"H2",{class:!0});var a=l(t);n=c(a,$),a.forEach(i),d=g(e);for(let t=0;t<E.length;t+=1)E[t].l(e);p=D(),this.h()},h(){o(t,"class","svelte-18y4uo2")},m(e,a){h(e,t,a),u(t,n),h(e,d,a);for(let t=0;t<E.length;t+=1)E[t].m(e,a);h(e,p,a)},p(e,t){if(2&t){let n;for(v=e[1],n=0;n<v.length;n+=1){const a=K(e,v,n);E[n]?E[n].p(a,t):(E[n]=Y(a),E[n].c(),E[n].m(p.parentNode,p))}for(;n<E.length;n+=1)E[n].d(1);E.length=v.length}},i:f,o:f,d(e){e&&i(t),e&&i(d),I(E,e),e&&i(p)}}}function W(e){let t,n;return t=new A({}),{c(){S(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,a){H(t,e,a),n=!0},p:f,i(e){n||(v(t.$$.fragment,e),n=!0)},o(e){p(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function X(e){let t,n,o=new Date(e[5].created_at).toLocaleDateString()+"";return{c(){t=a("h3"),n=r(o)},l(e){t=s(e,"H3",{});var a=l(t);n=c(a,o),a.forEach(i)},m(e,a){h(e,t,a),u(t,n)},p(e,t){2&t&&o!==(o=new Date(e[5].created_at).toLocaleDateString()+"")&&T(n,o)},d(e){e&&i(t)}}}function Y(e){let t,n,f,d,p,$,v,E,D,I,S,b,H,L,M=e[5].title.replace("🛑","").replace("⚠️","").trim()+"",R=w.i18n.pastIncidentsResolved.replace(/\$MINUTES/g,((new Date(e[5].closed_at).getTime()-new Date(e[5].created_at).getTime())/6e4).toFixed(0)).replace(/\$POSTS/g,e[5].comments)+"",y=w.i18n.incidentReport.replace(/\$NUMBER/g,e[5].number)+"",N=e[5].showHeading&&X(e);return{c(){N&&N.c(),t=m(),n=a("article"),f=a("div"),d=a("div"),p=a("h4"),$=r(M),v=m(),E=a("div"),D=m(),I=a("div"),S=a("a"),b=r(y),L=m(),this.h()},l(e){N&&N.l(e),t=g(e),n=s(e,"ARTICLE",{class:!0});var a=l(n);f=s(a,"DIV",{class:!0});var r=l(f);d=s(r,"DIV",{});var o=l(d);p=s(o,"H4",{});var h=l(p);$=c(h,M),h.forEach(i),v=g(o),E=s(o,"DIV",{}),l(E).forEach(i),o.forEach(i),D=g(r),I=s(r,"DIV",{class:!0});var u=l(I);S=s(u,"A",{href:!0});var m=l(S);b=c(m,y),m.forEach(i),u.forEach(i),r.forEach(i),L=g(a),a.forEach(i),this.h()},h(){o(S,"href",H="/incident/"+e[5].number),o(I,"class","f r"),o(f,"class","f"),o(n,"class","down link")},m(e,a){N&&N.m(e,a),h(e,t,a),h(e,n,a),u(n,f),u(f,d),u(d,p),u(p,$),u(d,v),u(d,E),E.innerHTML=R,u(f,D),u(f,I),u(I,S),u(S,b),u(n,L)},p(e,n){e[5].showHeading?N?N.p(e,n):(N=X(e),N.c(),N.m(t.parentNode,t)):N&&(N.d(1),N=null),2&n&&M!==(M=e[5].title.replace("🛑","").replace("⚠️","").trim()+"")&&T($,M),2&n&&R!==(R=w.i18n.pastIncidentsResolved.replace(/\$MINUTES/g,((new Date(e[5].closed_at).getTime()-new Date(e[5].created_at).getTime())/6e4).toFixed(0)).replace(/\$POSTS/g,e[5].comments)+"")&&(E.innerHTML=R),2&n&&y!==(y=w.i18n.incidentReport.replace(/\$NUMBER/g,e[5].number)+"")&&T(b,y),2&n&&H!==(H="/incident/"+e[5].number)&&o(S,"href",H)},d(e){N&&N.d(e),e&&i(t),e&&i(n)}}}function Z(e){let t,n,r,c;const o=[W,Q],u=[];function f(e,t){return e[0]?0:e[1].length?1:-1}return~(n=f(e))&&(r=u[n]=o[n](e)),{c(){t=a("section"),r&&r.c()},l(e){t=s(e,"SECTION",{});var n=l(t);r&&r.l(n),n.forEach(i)},m(e,a){h(e,t,a),~n&&u[n].m(t,null),c=!0},p(e,[a]){let s=n;n=f(e),n===s?~n&&u[n].p(e,a):(r&&(d(),p(u[s],1,1,(()=>{u[s]=null})),$()),~n?(r=u[n],r||(r=u[n]=o[n](e),r.c()),v(r,1),r.m(t,null)):r=null)},i(e){c||(v(r),c=!0)},o(e){p(r),c=!1},d(e){e&&i(t),~n&&u[n].d()}}}function ee(e,t,n){let a=!0;const r=new N({userAgent:w["user-agent"]}),s=w.owner,l=w.repo;let c=[];return E((async()=>{n(1,c=(await r.issues.listForRepo({owner:s,repo:l,state:"closed",filter:"all",sort:"created",direction:"desc",labels:"status"})).data),n(1,c=c.map(((e,t)=>(e.showHeading=0===t||new Date(c[t-1].created_at).toLocaleDateString()!==new Date(e.created_at).toLocaleDateString(),e)))),n(0,a=!1)})),[a,c]}class te extends e{constructor(e){super(),t(this,e,ee,Z,n,{})}}function ne(e){let t,n=y(w["status-website"].introTitle)+"";return{c(){t=a("h1")},l(e){t=s(e,"H1",{}),l(t).forEach(i)},m(e,a){h(e,t,a),t.innerHTML=n},p:f,d(e){e&&i(t)}}}function ae(e){let t,n=y(w["status-website"].introMessage)+"";return{c(){t=a("p"),this.h()},l(e){t=s(e,"P",{class:!0}),l(t).forEach(i),this.h()},h(){o(t,"class","lead svelte-ngkazm")},m(e,a){h(e,t,a),t.innerHTML=n},p:f,d(e){e&&i(t)}}}function re(e){let t,n,r,c,u,f,d,$,E,T;document.title=t=e[0];let I=w["status-website"]&&function(e){let t,n,a=w["status-website"].introTitle&&ne(),r=w["status-website"].introMessage&&ae();return{c(){a&&a.c(),t=m(),r&&r.c(),n=D()},l(e){a&&a.l(e),t=g(e),r&&r.l(e),n=D()},m(e,s){a&&a.m(e,s),h(e,t,s),r&&r.m(e,s),h(e,n,s)},p(e,t){w["status-website"].introTitle&&a.p(e,t),w["status-website"].introMessage&&r.p(e,t)},d(e){a&&a.d(e),e&&i(t),r&&r.d(e),e&&i(n)}}}();return u=new P({}),d=new G({}),E=new te({}),{c(){n=m(),r=a("header"),I&&I.c(),c=m(),S(u.$$.fragment),f=m(),S(d.$$.fragment),$=m(),S(E.$$.fragment),this.h()},l(e){R('[data-svelte="svelte-1258swp"]',document.head).forEach(i),n=g(e),r=s(e,"HEADER",{class:!0});var t=l(r);I&&I.l(t),t.forEach(i),c=g(e),b(u.$$.fragment,e),f=g(e),b(d.$$.fragment,e),$=g(e),b(E.$$.fragment,e),this.h()},h(){o(r,"class","svelte-ngkazm")},m(e,t){h(e,n,t),h(e,r,t),I&&I.m(r,null),h(e,c,t),H(u,e,t),h(e,f,t),H(d,e,t),h(e,$,t),H(E,e,t),T=!0},p(e,[n]){(!T||1&n)&&t!==(t=e[0])&&(document.title=t),w["status-website"]&&I.p(e,n)},i(e){T||(v(u.$$.fragment,e),v(d.$$.fragment,e),v(E.$$.fragment,e),T=!0)},o(e){p(u.$$.fragment,e),p(d.$$.fragment,e),p(E.$$.fragment,e),T=!1},d(e){e&&i(n),e&&i(r),I&&I.d(),e&&i(c),L(u,e),e&&i(f),L(d,e),e&&i($),L(E,e)}}}function se(e,t,n){let a="Status";try{a=w["status-website"].name}catch(e){}return[a]}export default class extends e{constructor(e){super(),t(this,e,se,re,n,{})}}
