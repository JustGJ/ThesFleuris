(this["webpackJsonpthes-fleuris"]=this["webpackJsonpthes-fleuris"]||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports={navbar:"Navbar_navbar__1lFFz",navigation:"Navbar_navigation__h-dCd",link:"Navbar_link__2RtUz",social:"Navbar_social__3ff_B",cart:"Navbar_cart__1T77p",home:"Navbar_home__acb8f",login:"Navbar_login__3THoS",active:"Navbar_active__1MmUE"}},,,,,function(e,a,t){e.exports={sideBar:"HamburgerMenu_sideBar__eEZfa",menu:"HamburgerMenu_menu__1oP-6",login:"HamburgerMenu_login__2D0Lg",toggleButton:"HamburgerMenu_toggleButton__228j9",social:"HamburgerMenu_social__22oiY",navigation:"HamburgerMenu_navigation__ipcD-",active:"HamburgerMenu_active__2zx7V"}},function(e,a,t){e.exports={footer:"Footer_footer__3li9l",containerDiscover:"Footer_containerDiscover__3XM8k",discover:"Footer_discover__1sJmc",navigation:"Footer_navigation__3wrYj",containerInfos:"Footer_containerInfos__5gkZe",social:"Footer_social__2tzMa",follow:"Footer_follow__25Iw5",infos:"Footer_infos__3vDC2",submitEmail:"Footer_submitEmail__1vgaJ"}},,function(e,a,t){e.exports={emptyCart:"Cart_emptyCart__2adF2",cartContent:"Cart_cartContent__g0Oxm",cart:"Cart_cart__1nmEU",cardDetails:"Cart_cardDetails__3ozCX",buttons:"Cart_buttons__3S0O3",total:"Cart_total__Kffxl"}},,function(e,a,t){e.exports={showInfos:"ToBuy_showInfos__2Fa1l",popup:"ToBuy_popup__3ztqj",infosContent:"ToBuy_infosContent__1hMDl",infos:"ToBuy_infos__27d6Y",quantite:"ToBuy_quantite__1Qxrk",actions:"ToBuy_actions__m5Z7K"}},function(e,a,t){e.exports={opinions:"Opinion_opinions__88ep_",title:"Opinion_title__aTOLj",autor:"Opinion_autor__3gwFv",arrowRight:"Opinion_arrowRight__XahPL",arrowLeft:"Opinion_arrowLeft__1m3c8"}},function(e,a,t){e.exports={card:"CardItem_card__rjcs6",cardContent:"CardItem_cardContent__1ZBHP",cardActions:"CardItem_cardActions__1-Pa-",buttons:"CardItem_buttons__2BpnO",remove:"CardItem_remove__2Uegn",cart:"CardItem_cart__2gwQF"}},,,,,,,,,,,,,,,,,,,function(e,a,t){e.exports={card:"New_card__2CUoH",informations:"New_informations__1a-zc"}},,,function(e,a,t){e.exports={news:"News_news__3bz9W",cardTea:"News_cardTea__1FkkW"}},,,,,,function(e,a,t){e.exports={background:"Header_background__yXuBq"}},function(e,a,t){e.exports=t.p+"static/media/camomille.84f78f81.png"},function(e,a,t){e.exports=t.p+"static/media/romarin.9c8a4463.png"},function(e,a,t){e.exports=t.p+"static/media/earlGrey.ffb42a96.png"},,function(e,a,t){e.exports=t.p+"static/media/home.496253e3.jpg"},function(e,a,t){e.exports=t.p+"static/media/accessories.791ef8ea.jpg"},function(e,a,t){e.exports=t.p+"static/media/blog.3cda4c23.jpg"},function(e,a,t){e.exports=t.p+"static/media/contact.d7726ee3.jpg"},function(e,a,t){e.exports=t.p+"static/media/Tea.249f92f8.jpg"},,,,,,,,,function(e,a,t){e.exports=t(78)},,,,,,,,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(29),c=t.n(l),i=t(21),o=t(46),m=t(47),s=t(63),u=t(62),E=t(2),d=t(3),p=t(48),_=t.n(p),v=function(e){var a=e.background,t=e.title,n={backgroundImage:"url("+a+")"};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:_.a.background,style:n},r.a.createElement("h3",null,t)))},b=t(49),f=t.n(b),g=t(50),h=t.n(g),C=t(51),N=t.n(C),y=t(17),F=t(52),k=t(18),x=t.n(k),j=function(e){var a=e.img,t=e.name,l=e.price,c=e.poids,i=e.showInfo,o=Object(n.useState)(1),m=Object(y.a)(o,2),s=m[0],u=m[1];return r.a.createElement("div",{className:x.a.showInfos,id:"ToBuy"},r.a.createElement("div",{className:x.a.infosContent},r.a.createElement("img",{src:a,alt:a}),r.a.createElement("div",{className:x.a.infos},r.a.createElement("h3",null,t),r.a.createElement("p",null,"Prix : ",l," \u20ac"),r.a.createElement("p",null,"Poids : ",c," gr"),r.a.createElement("div",{className:x.a.quantite},r.a.createElement("label",{htmlFor:"Quantit\xe9"},"Quantit\xe9 :"),r.a.createElement("input",{type:"number",name:"Quantit\xe9",id:"Quantit\xe9",min:"1",max:"10",value:s,onChange:function(e){return u(e.target.value)}})),r.a.createElement("div",{className:x.a.actions},r.a.createElement("button",null,"Ajouter au panier"),r.a.createElement("button",{onClick:i},"Retour \xe0 la boutique")))))},w=t(39),O=t.n(w),T=function(e){var a=e.newTea,t=e.addCart,l=Object(n.useState)(!1),c=Object(y.a)(l,2),i=c[0],o=c[1],m=function(){o(!i)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:O.a.card},r.a.createElement("div",{className:O.a.informations},r.a.createElement(F.a,{to:"/#ToBuy",smooth:!0,offset:-70,duration:500},r.a.createElement("img",{src:a.imgSrc,alt:a.imgSrc,onClick:m})),r.a.createElement("button",{onClick:function(){return t(a)}},"Ajouter au panier"),r.a.createElement("h2",null,a.name),r.a.createElement("span",null,a.price," \u20ac")),i&&r.a.createElement(j,{img:a.imgSrc,name:a.name,price:a.price,poids:a.poids,showInfo:m})))},B=t(42),S=t.n(B),I=function(e){var a=e.addCart,t=[{id:1,imgSrc:h.a,name:"Romarin",price:5,quantity:1},{id:2,imgSrc:N.a,name:"Earl Grey",price:2,quantity:1},{id:3,imgSrc:f.a,name:"Camomille",price:8,quantity:1}];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:S.a.news},r.a.createElement("h2",null,"Nouveaut\xe9s"),r.a.createElement("p",null,"Nos derniers produits selectionn\xe9s. ",r.a.createElement("br",null)," Arrivage chaque semaine")),t.map((function(e){return r.a.createElement("div",{key:e.id,className:S.a.cardTea},r.a.createElement(T,{newTea:e,addCart:a}))})))},q=t(19),A=t.n(q),M=function(){var e=[{id:1,opinion:"\xab Une qualit\xe9 formidable, des saveurs agr\xe9ables \xbb",autor:"Sonia Petit"},{id:2,opinion:"\xab Meilleur rapport qualit\xe9 prix, un large choix \xbb",autor:"Julie Brun"},{id:3,opinion:"\xab Un service de qualit\xe9, de vrais professionnels \xbb",autor:"Ren\xe9 Laroche"}],a=Object(n.useState)(0),t=Object(y.a)(a,2),l=t[0],c=t[1],i=e[l].opinion,o=e[l].autor;return r.a.createElement("div",{className:A.a.opinions},r.a.createElement("div",{className:A.a.arrowLeft,onClick:function(){c(0===l?e.length-1:l-1),console.log(l)}}),"     ",r.a.createElement("div",null,r.a.createElement("p",{className:A.a.title},i),r.a.createElement("p",{className:A.a.autor},o)),r.a.createElement("div",{className:A.a.arrowRight,onClick:function(){c(l!==e.length-1?l+1:0),console.log(l)}}),"    ")},z=t(53),D=t.n(z),P=function(e){var a=e.addCart;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{background:D.a,title:"C'est toujours l'heure du th\xe9 gr\xe2ce aux tisanes fleuries"}),r.a.createElement(I,{addCart:a}),"blog",r.a.createElement(M,null))},H=t(54),L=t.n(H),Q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{background:L.a,title:"Accessoires"}),"cards")},R=t(55),U=t.n(R),J=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{background:U.a,title:"Blog des Th\xe9s Fleuris"}),"cards")},X=t(56),Z=t.n(X),G=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{background:Z.a,title:"Contactez-nous"}),"formulaire")},V=t(57),Y=t.n(V),K=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{background:Y.a,title:"Achetez vos th\xe9s favoris"}))},W=function(){return r.a.createElement("div",null,"LOGIN")},$=t(20),ee=t.n($),ae=function(e){var a=e.item,t=(e.modifier,e.supprimer);return r.a.createElement("div",{className:ee.a.card},r.a.createElement("img",{src:a.imgSrc,alt:""}),r.a.createElement("div",{className:ee.a.cardContent},r.a.createElement("h4",null,a.name),r.a.createElement("span",null,a.price," \u20ac")),r.a.createElement("div",{className:ee.a.cardActions},r.a.createElement("div",{className:ee.a.buttons},r.a.createElement("label",null,"Quantit\xe9",r.a.createElement("input",{type:"number"}),r.a.createElement("button",{type:"submit"},"Valider"))),r.a.createElement("button",{type:"button",className:ee.a.remove,onClick:function(){return t(a.id)}},"Supprimer")))},te=t(16),ne=t.n(te),re=function(e){var a=e.cart,t=e.modifier,n=e.supprimer,l=e.reinitialiser,c=e.total,i=0;if(c.length)for(var o=0;o<c.length;o++)i+=c[o].price;var m=function(){return r.a.createElement("div",{className:ne.a.emptyCart},r.a.createElement("p",null,"Panier vide !"),r.a.createElement(E.b,{to:"/"},"Ajouter des articles au panier"))},s=function(){return r.a.createElement("div",{className:ne.a.cartContent},a.map((function(e){return r.a.createElement("div",{className:ne.a.cart,key:e.id},r.a.createElement(ae,{item:e,modifier:t,supprimer:n}))})),r.a.createElement("div",{className:ne.a.cardDetails},r.a.createElement("div",{className:ne.a.total},"Total : ",i," \u20ac"),r.a.createElement("div",{className:ne.a.buttons},r.a.createElement("button",{className:ne.a.emptyButton,onClick:l},"R\xe9initialiser"),r.a.createElement("button",{className:ne.a.checkout},"Paiement"))))};return r.a.createElement(r.a.Fragment,null,a.length?r.a.createElement(s,null):r.a.createElement(m,null))},le=t(58),ce=t(92),ie=t(33),oe=t.n(ie),me=t(35),se=t.n(me),ue=t(36),Ee=t.n(ue),de=t(37),pe=t.n(de),_e=t(34),ve=t.n(_e),be=t(13),fe=t.n(be),ge=function(e){var a=e.total,t=Object(d.f)(),l=Object(n.useRef)(null),c=function(){l.current.classList.remove(fe.a.active)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:fe.a.sideBar},"/cart"!==t.pathname&&r.a.createElement(E.b,{to:"/cart"},r.a.createElement(ce.a,{badgeContent:a.length,color:"secondary"},r.a.createElement(oe.a,{className:fe.a.cart}))),r.a.createElement(E.b,{to:"/ThesFleuris"},"Th\xe9s Fleuries"),r.a.createElement("div",{className:fe.a.toggleButton,onClick:function(){l.current.classList.toggle(fe.a.active)}},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))),r.a.createElement("div",{ref:l,className:fe.a.menu},r.a.createElement("div",{className:fe.a.login},r.a.createElement(ve.a,null),r.a.createElement(E.b,{to:"/login"},"Connexion")),r.a.createElement("ul",{className:fe.a.navigation},r.a.createElement("li",null,r.a.createElement(E.b,{to:"/tea",onClick:c},"Th\xe9s")),r.a.createElement("li",null,r.a.createElement(E.b,{to:"/accessories",onClick:c},"Accessoires")),r.a.createElement("li",null,r.a.createElement(E.b,{to:"/blog",onClick:c},"Blog")),r.a.createElement("li",null,r.a.createElement(E.b,{to:"/about",onClick:c},"\xc0 propos")),r.a.createElement("li",null,r.a.createElement(E.b,{to:"/contact",onClick:c},"Contact"))),r.a.createElement("div",{className:fe.a.social},r.a.createElement(se.a,null),r.a.createElement(Ee.a,null),r.a.createElement(pe.a,null))))},he=t(8),Ce=t.n(he),Ne=function(e){var a=e.total,t=Object(d.f)();return Object(le.useMediaQuery)({query:"(max-width: 600px"})?r.a.createElement(r.a.Fragment,null,r.a.createElement(ge,{total:a})):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:Ce.a.navbar},r.a.createElement("ul",{className:Ce.a.navigation},r.a.createElement("li",null,r.a.createElement(E.c,{activeClassName:Ce.a.active,to:"/tea"},"Th\xe9s")),r.a.createElement("li",null,r.a.createElement(E.c,{activeClassName:Ce.a.active,to:"/accessories"},"Accessoires")),r.a.createElement("li",null,r.a.createElement(E.c,{activeClassName:Ce.a.active,to:"/blog"},"Blog")),r.a.createElement("li",null,r.a.createElement(E.c,{activeClassName:Ce.a.active,to:"/contact"},"Contact"))),r.a.createElement("div",{className:Ce.a.home},r.a.createElement(E.b,{to:"/ThesFleuris"},"Th\xe9s Fleuries")),r.a.createElement("div",{className:Ce.a.link},r.a.createElement("div",{className:Ce.a.login},r.a.createElement(ve.a,null),r.a.createElement(E.b,{to:"/login"},"Connexion")),r.a.createElement("div",{className:Ce.a.social},r.a.createElement(se.a,null),r.a.createElement(Ee.a,null),r.a.createElement(pe.a,null),"/cart"!==t.pathname&&r.a.createElement(E.b,{to:"/cart"},r.a.createElement(ce.a,{badgeContent:a.length,color:"secondary"},r.a.createElement(oe.a,{className:Ce.a.cart})))))))},ye=t(14),Fe=t.n(ye),ke=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:Fe.a.footer},r.a.createElement("div",{className:Fe.a.containerDiscover},r.a.createElement("div",{className:Fe.a.discover},r.a.createElement("h1",null,"D\xe9couvrez ",r.a.createElement("br",null)," les th\xe9s Fleuris"),r.a.createElement("ul",{className:Fe.a.navigation},r.a.createElement("li",null,r.a.createElement(E.b,{to:"/tea"},"Boutique")),r.a.createElement("li",null,r.a.createElement(E.b,{to:"/accessories"},"Accessoires")),r.a.createElement("li",null,r.a.createElement(E.b,{to:"/about"},"\xc0 propos")),r.a.createElement("li",null,r.a.createElement(E.b,{to:"/blog"},"Blog")),r.a.createElement("li",null,r.a.createElement(E.b,{to:"/contact"},"Contact"))),r.a.createElement("span",null,r.a.createElement(E.b,{to:"/contact"},"Visitez nos boutiques")),r.a.createElement("p",null,"Service client : 01 23 45 67 89")),r.a.createElement("div",{className:Fe.a.containerInfos},r.a.createElement("p",null,"Aide"),r.a.createElement("div",{className:Fe.a.infos},r.a.createElement(E.b,{to:"/"},"FAQ"),r.a.createElement(E.b,{to:"/"},"Livraison et retours"),r.a.createElement(E.b,{to:"/"},"Politique du magasin"),r.a.createElement(E.b,{to:"/"},"Mode de paiement"),r.a.createElement(E.b,{to:"/"},"Mentions l\xe9gales"),r.a.createElement(E.b,{to:"/"},"Politique en mati\xe8re de cookies"),r.a.createElement(E.b,{to:"/"},"Politique de confidentialit\xe9"),r.a.createElement(E.b,{to:"/"},"Conditions d'utilisation"))),r.a.createElement("div",{className:Fe.a.follow},r.a.createElement("p",null,"Suivez-nous"),r.a.createElement("div",{className:Fe.a.social},r.a.createElement(E.b,{to:"/"},"Facebook"),r.a.createElement(E.b,{to:"/"},"Instagram"),r.a.createElement(E.b,{to:"/"},"Pinterest")))),r.a.createElement("div",{className:Fe.a.submitEmail},r.a.createElement("input",{type:"email",id:"email",placeholder:"Saisissez votre e-mail*"}),r.a.createElement("button",{type:"submit",id:"email"},"S'abonner"))))},xe=(t(77),function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={cart:[],total:[]},e.handleAddToCart=function(a){var t={id:a.id,imgSrc:a.imgSrc,name:a.name,price:a.price,quantity:a.quantity},n=Object(i.a)(e.state.cart);n.push(t);var r={id:a.id,price:a.price},l=Object(i.a)(e.state.total);l.push(r),e.setState({cart:n,total:l})},e.handleUpdateQuantity=function(a,t,n,r,l){var c=e.state.cart.findIndex((function(e){return e.id===a})),o={id:a,imgSrc:t,name:n,quantity:r,price:l},m=Object(i.a)(e.state.cart);m[c]=o,e.setState({cart:m})},e.handleDeleteCartItem=function(a){var t=e.state.cart.findIndex((function(e){return e.id===a})),n=Object(i.a)(e.state.cart);n.splice(t,1);var r=Object(i.a)(e.state.cart);r.splice(t,1),e.setState({cart:n,total:r})},e.handleEmptyCart=function(){e.setState({cart:"",total:""})},e}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(E.a,null,r.a.createElement(Ne,{total:this.state.total}),r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/ThesFleuris"},r.a.createElement(P,{addCart:this.handleAddToCart})),r.a.createElement(d.a,{path:"/tea",component:K}),r.a.createElement(d.a,{path:"/accessories",component:Q}),r.a.createElement(d.a,{path:"/blog",component:J}),r.a.createElement(d.a,{path:"/contact",component:G}),r.a.createElement(d.a,{path:"/login",component:W}),r.a.createElement(d.a,{path:"/cart"},r.a.createElement(re,{cart:this.state.cart,modifier:this.handleUpdateQuantity,supprimer:this.handleDeleteCartItem,reinitialiser:this.handleEmptyCart,total:this.state.total})),r.a.createElement(d.a,{path:"/ThesFleuris",component:P})),r.a.createElement(ke,null))}}]),t}(n.Component));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(xe,null)),document.getElementById("root"))}],[[66,1,2]]]);
//# sourceMappingURL=main.12def4d6.chunk.js.map