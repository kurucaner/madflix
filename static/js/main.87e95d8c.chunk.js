(this.webpackJsonpmyproject=this.webpackJsonpmyproject||[]).push([[0],{32:function(n,e,t){"use strict";t.r(e);var r,a,c,i,o,s,d,b,j,l,u,h,p,x,m,g,f,v,O,w,y,k,S,_,z=t(1),G=t.n(z),M=t(18),T=t.n(M),I=t(8),B=t(2),E=t.p+"static/media/madflix.29fbcb50.jpeg",N=t.p+"static/media/tmdb_logo.f15b6632.svg",R=t(3),W=t(4),U=W.b.div(r||(r=Object(R.a)(["\n  background: var(--darkGrey);\n  padding: 0 20px;\n"]))),A=W.b.div(a||(a=Object(R.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  max-width: var(--maxWidth);\n  padding: 20px 0;\n  margin: 0 auto;\n  height: 80px;\n"]))),C=W.b.img(c||(c=Object(R.a)(["\n  width: 130px;\n  height: 80px;\n\n  @media screen and (max-width: 400px) {\n    width: 150px;\n  }\n"]))),D=W.b.img(i||(i=Object(R.a)(["\n  width: 100px;\n\n  @media screen and (max-width: 500px) {\n    width: 80px;\n  }\n"]))),F=t(0),L=function(){return Object(F.jsx)(U,{children:Object(F.jsxs)(A,{children:[Object(F.jsx)(I.b,{to:"/madflix",children:Object(F.jsx)(C,{src:E,alt:"rmdb-logo"})}),Object(F.jsx)(D,{src:N,alt:"tmdb_logo"})]})})},H="https://api.themoviedb.org/3/",J="9b9db796275919f97fb742c582ab0008",q="".concat(H,"search/movie?api_key=").concat(J,"&language=en-US&query="),P="".concat(H,"movie/upcoming?api_key=").concat(J,"&language=en-US"),K=("".concat(H,"authentication/token/new?api_key=").concat(J),"".concat(H,"authentication/token/validate_with_login?api_key=").concat(J),"".concat(H,"authentication/session/new?api_key=").concat(J),"http://image.tmdb.org/t/p/"),Q="w1280",V="w780",X=W.b.div(o||(o=Object(R.a)(["\n  background: linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0) 41%,\n      rgba(0, 0, 0, 0.65) 100%\n    ),\n    url(","), var(--darkGrey);\n  background-size: 100%, cover;\n  background-position: center;\n  height: 600px;\n  position: relative;\n  animation: animateHeroImage 1s;\n\n  @keyframes animateHeroImage {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n"])),(function(n){return n.image})),Y=W.b.div(s||(s=Object(R.a)(["\n  padding: 20px;\n  max-width: var(--maxWidth);\n  margin: 0 auto;\n"]))),Z=W.b.div(d||(d=Object(R.a)(["\n  z-index: 100;\n  max-width: 700px;\n  position: absolute;\n  bottom: 40px;\n  margin-right: 20px;\n  min-height: 100px;\n  color: var(--white);\n\n  h1 {\n    font-size: var(--fontSuperBig);\n\n    @media screen and (max-width: 720px) {\n      font-size: var(--fontBig);\n    }\n  }\n\n  p {\n    font-size: var(--fontMed);\n\n    @media screen and (max-width: 720px) {\n      font-size: var(--fontSmall);\n    }\n  }\n\n  @media screen and (max-width: 720px) {\n    max-width: 100%;\n  }\n"]))),$=function(n){var e=n.image,t=n.title,r=n.text;return Object(F.jsx)(X,{image:e,children:Object(F.jsx)(Y,{children:Object(F.jsxs)(Z,{children:[Object(F.jsx)("h1",{children:t}),Object(F.jsx)("p",{children:r})]})})})},nn=W.b.div(b||(b=Object(R.a)(["\n  max-width: var(--maxWidth);\n  margin: 0 auto;\n  padding: 0 20px;\n\n  h1 {\n    color: var(--medGrey);\n\n    @media screen and (max-width: 768px) {\n      font-size: var(--fontBig);\n    }\n  }\n"]))),en=W.b.div(j||(j=Object(R.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  grid-gap: 2rem;\n"]))),tn=function(n){var e=n.header,t=n.children;return Object(F.jsxs)(nn,{children:[Object(F.jsx)("h1",{children:e}),Object(F.jsx)(en,{children:t})]})},rn=W.b.img(l||(l=Object(R.a)(["\n  width: 100%;\n  max-width: 720px;\n  transition: all 0.3s;\n  object-fit: cover;\n  border-radius: 20px;\n  animation: animateThumb 0.5s;\n\n  :hover {\n    opacity: 0.8;\n  }\n\n  @keyframes animateThumb {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n"]))),an=function(n){var e=n.image,t=n.movieId,r=n.clickable;return Object(F.jsx)("div",{children:r?Object(F.jsx)(I.b,{to:"/".concat(t),children:Object(F.jsx)(rn,{src:e,alt:"movie-thumb"})}):Object(F.jsx)(rn,{src:e,alt:"movie-thumb"})})},cn=W.b.div(u||(u=Object(R.a)(["\n  border: 5px solid var(--lightGrey);\n  border-top: 5px solid var(--medGrey);\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  animation: spin 0.8s linear infinite;\n  margin: 20px auto;\n\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"]))),on=t(5),sn=W.b.div(h||(h=Object(R.a)(["\n  display: flex;\n  align-items: center;\n  height: 100px;\n  background: var(--darkGrey);\n  padding: 0 20px;\n"]))),dn=W.b.div(p||(p=Object(R.a)(["\n  position: relative;\n  max-width: var(--maxWidth);\n  width: 100%;\n  height: 55px;\n  background: var(--medGrey);\n  margin: 0 auto;\n  border-radius: 40px;\n  color: var(--white);\n\n  img {\n    position: absolute;\n    left: 15px;\n    top: 14px;\n    width: 30px;\n  }\n\n  input {\n    font-size: var(--fontBig);\n    position: absolute;\n    left: 0;\n    margin: 8px 0;\n    padding: 0 0 0 60px;\n    border: 0;\n    width: 95%;\n    background: transparent;\n    height: 40px;\n    color: var(--white);\n\n    :focus {\n      outline: none;\n    }\n  }\n"]))),bn=t.p+"static/media/search-icon.cd820f5a.svg",jn=function(n){var e=n.setSearchTerm,t=Object(z.useState)(""),r=Object(on.a)(t,2),a=r[0],c=r[1];var i=Object(z.useRef)(!0);return Object(z.useEffect)((function(){if(!i.current){var n=setTimeout((function(){e(a)}),500);return function(){return clearTimeout(n)}}i.current=!1}),[e,a]),Object(F.jsx)(sn,{children:Object(F.jsxs)(dn,{children:[Object(F.jsx)("img",{src:bn,alt:"search-icon"}),Object(F.jsx)("input",{type:"text",placeholder:"Search Movie",onChange:function(n){c(n.target.value)},value:a})]})})},ln=W.b.button(x||(x=Object(R.a)(["\n  display: block;\n  background: var(--darkGrey);\n  width: 25%;\n  min-width: 200px;\n  height: 60px;\n  border-radius: 30px;\n  color: var(--white);\n  border: 0;\n  font-size: var(--fontBig);\n  margin: 20px auto;\n  transition: all 0.3s;\n  outline: none;\n  cursor: pointer;\n\n  :hover {\n    opacity: 0.8;\n  }\n"]))),un=function(n){var e=n.text,t=n.callback;return Object(F.jsx)(ln,{type:"button",onClick:t,children:e})},hn=t(6),pn=t.n(hn),xn=t(13),mn=t(11),gn=t(9),fn={fetchMovies:function(){var n=Object(gn.a)(pn.a.mark((function n(e,t){var r;return pn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e?"".concat(q).concat(e,"&page=").concat(t):"".concat(P,"&page=").concat(t),n.next=3,fetch(r);case 3:return n.next=5,n.sent.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),fetchMovie:function(){var n=Object(gn.a)(pn.a.mark((function n(e){var t;return pn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(H,"movie/").concat(e,"?api_key=").concat(J),n.next=3,fetch(t);case 3:return n.next=5,n.sent.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),fetchCredits:function(){var n=Object(gn.a)(pn.a.mark((function n(e){var t;return pn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(H,"movie/").concat(e,"/credits?api_key=").concat(J),n.next=3,fetch(t);case 3:return n.next=5,n.sent.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},vn=fn,On={page:0,results:[],total_pages:0,total_results:0},wn=t.p+"static/media/no_image.22d2aa4d.jpg",yn=function(){var n=function(){var n=Object(z.useState)(""),e=Object(on.a)(n,2),t=e[0],r=e[1],a=Object(z.useState)(On),c=Object(on.a)(a,2),i=c[0],o=c[1],s=Object(z.useState)(!1),d=Object(on.a)(s,2),b=d[0],j=d[1],l=Object(z.useState)(!1),u=Object(on.a)(l,2),h=u[0],p=u[1],x=Object(z.useState)(!1),m=Object(on.a)(x,2),g=m[0],f=m[1],v=function(){var n=Object(gn.a)(pn.a.mark((function n(e){var t,r,a=arguments;return pn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:"",n.prev=1,p(!1),j(!0),n.next=6,vn.fetchMovies(t,e);case 6:r=n.sent,o((function(n){return Object(mn.a)(Object(mn.a)({},r),{},{results:e>1?[].concat(Object(xn.a)(n.results),Object(xn.a)(r.results)):Object(xn.a)(r.results)})})),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),p(!0);case 13:j(!1);case 14:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(e){return n.apply(this,arguments)}}();return Object(z.useEffect)((function(){o(On),v(1,t)}),[t]),Object(z.useEffect)((function(){g&&(v(i.page+1,t),f(!1))}),[g,t,i.page]),{state:i,loading:b,error:h,searchTerm:t,setSearchTerm:r,setIsLoadingMore:f}}(),e=n.state,t=n.loading,r=n.error,a=n.setSearchTerm,c=n.searchTerm,i=n.setIsLoadingMore;return r?Object(F.jsx)("div",{children:"Something went wrong..."}):Object(F.jsxs)(F.Fragment,{children:[e.results[0]?Object(F.jsx)($,{image:"".concat(K).concat(Q).concat(e.results[0].backdrop_path),title:e.results[0].original_title,text:e.results[0].overview}):null,Object(F.jsx)(jn,{setSearchTerm:a}),Object(F.jsx)(tn,{header:c?"Search Results":"Upcoming Movies",children:e.results.map((function(n){return Object(F.jsx)(an,{clickable:!0,image:n.poster_path?K+V+n.poster_path:wn,movieId:n.id},n.id)}))}),t&&Object(F.jsx)(cn,{}),e.page<e.total_pages&&!t&&Object(F.jsx)(un,{text:"Load More",callback:function(){return i(!0)}})]})},kn=W.b.div(m||(m=Object(R.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 70px;\n  background: var(--medGrey);\n  color: var(--white);\n"]))),Sn=W.b.div(g||(g=Object(R.a)(["\n  display: flex;\n  width: 100%;\n  max-width: var(--maxWidth);\n  padding: 0 20px;\n\n  span {\n    font-size: var(--fontMed);\n    color: var(--white);\n    padding-right: 10px;\n\n    @media screen and (max-width: 768px) {\n      font-size: var(--fontSmall);\n    }\n  }\n"]))),_n=function(n){var e=n.movieTitle;return Object(F.jsx)(kn,{children:Object(F.jsxs)(Sn,{children:[Object(F.jsx)(I.b,{to:"/",children:Object(F.jsx)("span",{children:"Home"})}),Object(F.jsx)("span",{children:"|"}),Object(F.jsx)("span",{children:e})]})})},zn=W.b.div(f||(f=Object(R.a)(["\n  background: ",";\n  background-size: cover;\n  background-position: center;\n  padding: 40px 20px;\n  animation: animateMovieInfo 1s;\n\n  @keyframes animateMovieInfo {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n"])),(function(n){var e=n.backdrop;return e?"url(".concat(K).concat(Q).concat(e,")"):"#000"})),Gn=W.b.div(v||(v=Object(R.a)(["\n  display: flex;\n  max-width: var(--maxWidth);\n  margin: 0 auto;\n  background: rgba(0, 0, 0, 0.7);\n  border-radius: 20px;\n\n  @media screen and (max-width: 768px) {\n    display: block;\n    max-height: none;\n  }\n"]))),Mn=W.b.div(O||(O=Object(R.a)(["\n  width: 100%;\n  padding: 20px 40px;\n  color: var(--white);\n  overflow: hidden;\n\n  .rating-directors {\n    display: flex;\n    justify-content: flex-start;\n  }\n\n  .score {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 35px;\n    height: 35px;\n    background: #fff;\n    color: #000;\n    font-weight: 800;\n    border-radius: 50%;\n    margin: 0;\n  }\n\n  .date {\n    margin: 0 0 0 40px;\n\n    p{\n      margin-left: -14px;\n    }\n\n  }\n\n  .director {\n    margin: 0 0 0 40px;\n\n    p {\n      margin: 0;\n    }\n  }\n\n  h1 {\n    @media screen and (max-width: 768px) {\n      font-size: var(--fontBig);\n    }\n  }\n"]))),Tn=function(n){var e=n.movie;return Object(F.jsx)(zn,{backdrop:e.backdrop_path,children:Object(F.jsxs)(Gn,{children:[Object(F.jsx)(an,{image:e.poster_path?"".concat(K).concat(V).concat(e.poster_path):wn,clickable:!1}),Object(F.jsxs)(Mn,{children:[Object(F.jsx)("h1",{children:e.title}),Object(F.jsx)("h3",{children:"PLOT"}),Object(F.jsx)("p",{children:e.overview}),Object(F.jsxs)("div",{className:"rating-directors",children:[Object(F.jsxs)("div",{children:[Object(F.jsx)("h3",{children:"RATING"}),Object(F.jsx)("div",{className:"score",children:e.vote_average})]}),Object(F.jsxs)("div",{className:"director",children:[Object(F.jsxs)("h3",{children:["DIRECTOR",e.directors.length>1?"S":""]}),e.directors.map((function(n){return Object(F.jsx)("p",{children:n.name},n.credit_id)}))]}),Object(F.jsxs)("div",{children:[Object(F.jsx)("h3",{children:"RELEASE DATE"}),Object(F.jsx)("div",{className:"date",children:Object(F.jsx)("p",{children:e.release_date})})]})]})]})]})})},In=function(n){var e=Math.floor(n/60),t=n%60;return"".concat(e,"h ").concat(t,"m")},Bn=function(n){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(n)},En=W.b.div(w||(w=Object(R.a)(["\n  display: flex;\n  align-items: center;\n  min-height: 100px;\n  background: var(--darkGrey);\n  padding: 0 20px;\n"]))),Nn=W.b.div(y||(y=Object(R.a)(["\n  display: flex;\n  max-width: var(--maxWidth);\n  width: 100%;\n  margin: 0 auto;\n\n  .column {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: var(--medGrey);\n    border-radius: 20px;\n    margin: 0 20px;\n    flex: 1;\n\n    :first-child {\n      margin-left: 0;\n    }\n\n    :last-child {\n      margin-right: 0;\n    }\n  }\n\n  @media screen and (max-width: 768px) {\n    display: block;\n\n    .column {\n      margin: 20px 0;\n    }\n  }\n"]))),Rn=function(n){var e=n.time,t=n.budget,r=n.revenue;return Object(F.jsx)(En,{children:Object(F.jsxs)(Nn,{children:[Object(F.jsx)("div",{className:"column",children:Object(F.jsxs)("p",{children:["Running time: ",In(e)]})}),Object(F.jsx)("div",{className:"column",children:Object(F.jsxs)("p",{children:["Budget: ",Bn(t)]})}),Object(F.jsx)("div",{className:"column",children:Object(F.jsxs)("p",{children:["Revenue: ",Bn(r)]})})]})})},Wn=W.b.div(k||(k=Object(R.a)(["\n  color: var(--white);\n  background: var(--darkGrey);\n  border-radius: 20px;\n  padding: 5px;\n  text-align: center;\n\n  h3 {\n    margin: 10px 0 0 0;\n  }\n\n  p {\n    margin: 5px 0;\n  }\n"]))),Un=W.b.img(S||(S=Object(R.a)(["\n  display: block;\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  border-radius: 15px;\n"]))),An=function(n){var e=n.name,t=n.character,r=n.imageUrl;return Object(F.jsxs)(Wn,{children:[Object(F.jsx)(Un,{src:r,alt:"actor-thumb"}),Object(F.jsx)("h3",{children:e}),Object(F.jsx)("p",{children:t})]})},Cn=function(){var n=function(n){var e=Object(z.useState)({}),t=Object(on.a)(e,2),r=t[0],a=t[1],c=Object(z.useState)(!0),i=Object(on.a)(c,2),o=i[0],s=i[1],d=Object(z.useState)(!1),b=Object(on.a)(d,2),j=b[0],l=b[1];return Object(z.useEffect)((function(){var e=function(){var e=Object(gn.a)(pn.a.mark((function e(){var t,r,c;return pn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(!0),l(!1),e.next=5,vn.fetchMovie(n);case 5:return t=e.sent,e.next=8,vn.fetchCredits(n);case 8:r=e.sent,c=r.crew.filter((function(n){return"Director"===n.job})),a(Object(mn.a)(Object(mn.a)({},t),{},{actors:r.cast,directors:c})),s(!1),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),l(!0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),{state:r,loading:o,error:j}}(Object(B.h)().movieId),e=n.state,t=n.loading,r=n.error;return t?Object(F.jsx)(cn,{}):r?Object(F.jsx)("div",{children:"Something went wrong..."}):Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(_n,{movieTitle:e.original_title}),Object(F.jsx)(Tn,{movie:e}),Object(F.jsx)(Rn,{time:e.runtime,budget:e.budget,revenue:e.revenue}),Object(F.jsx)(tn,{header:"Actors",children:e.actors.map((function(n){return Object(F.jsx)(An,{name:n.name,character:n.character,imageUrl:n.profile_path?"".concat(K).concat(V).concat(n.profile_path):wn},n.credit_id)}))})]})},Dn=function(){return Object(F.jsx)("div",{children:"NotFound"})},Fn=Object(W.a)(_||(_=Object(R.a)(["\n  :root {\n    --maxWidth: 1280px;\n    --white: #fff;\n    --lightGrey: #eee;\n    --medGrey: #353535;\n    --darkGrey: #1c1c1c;\n    --fontSuperBig: 2.5rem;\n    --fontBig: 1.5rem;\n    --fontMed: 1.2rem;\n    --fontSmall: 1rem;\n  }\n\n  * {\n    box-sizing: border-box;\n    font-family: 'Abel', sans-serif;\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    \n    h1 {\n      font-size: 2rem;\n      font-weight: 600;\n      color: var(--white);\n    }\n\n    h3 {\n      font-size: 1.1rem;\n      font-weight: 600;\n    }\n\n    p {\n      font-size: 1rem;\n      color: var(--white);\n    }\n  }\n"]))),Ln=function(){return Object(F.jsxs)(I.a,{children:[Object(F.jsx)(L,{}),Object(F.jsxs)(B.c,{children:[Object(F.jsx)(B.a,{path:"/madflix",element:Object(F.jsx)(yn,{})}),Object(F.jsx)(B.a,{path:"/:movieId",element:Object(F.jsx)(Cn,{})}),Object(F.jsx)(B.a,{path:"/*",element:Object(F.jsx)(Dn,{})})]}),Object(F.jsx)(Fn,{})]})};T.a.render(Object(F.jsx)(G.a.StrictMode,{children:Object(F.jsx)(Ln,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.87e95d8c.chunk.js.map