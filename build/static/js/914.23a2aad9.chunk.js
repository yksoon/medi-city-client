"use strict";(self.webpackChunkco_kr_medicity_membership=self.webpackChunkco_kr_medicity_membership||[]).push([[914],{7020:function(e,n,s){s.d(n,{t:function(){return r}});var r=/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,16}$/},2858:function(e,n,s){s(7313);var r=s(2135),t=s(6417);n.Z=function(){return(0,t.jsx)("footer",{children:(0,t.jsxs)("div",{className:"footer_content",children:[(0,t.jsx)("img",{src:"/img/common/logo.png",alt:""}),(0,t.jsxs)("ul",{className:"sitemap",children:[(0,t.jsx)("li",{children:(0,t.jsx)(r.rU,{to:"",children:"\ud68c\uc0ac\uc18c\uac1c"})}),(0,t.jsx)("li",{children:(0,t.jsx)(r.rU,{to:"",children:"\uc11c\ube44\uc2a4 \uc18c\uac1c"})}),(0,t.jsx)("li",{children:(0,t.jsx)(r.rU,{to:"",children:"\uacf5\uc9c0\uc0ac\ud56d"})}),(0,t.jsx)("li",{children:(0,t.jsx)(r.rU,{to:"",className:"blue",children:"\uc774\uc6a9\uc57d\uad00"})}),(0,t.jsx)("li",{children:(0,t.jsx)(r.rU,{to:"",className:"blue",children:"\uac1c\uc778\uc815\ubcf4\ucc98\ub9ac\ubc29\uce68"})}),(0,t.jsx)("li",{children:(0,t.jsx)(r.rU,{to:"",children:"\uace0\uac1d\uc13c\ud130"})}),(0,t.jsx)("li",{children:(0,t.jsx)(r.rU,{to:"",children:"\uc81c\ud734\ubb38\uc758"})})]}),(0,t.jsxs)("address",{children:["\ubc95\uc778\uba85:(\uc8fc)\uba54\ub514\uc528\ud2f0 | \uacbd\uae30\ub3c4 \uace0\uc591\uc2dc \uc77c\uc0b0\ub3d9\uad6c \ubb34\uad81\ud654\ub85c \uc131\uc6b0\uc0ac\uce74\ub974\ud0c0\uc6cc 43-55, 304\ud638 | \ub300\ud45c:\ubc15\uc131\ubbfc | \uc0ac\uc5c5\uc790\ub4f1\ub85d\ubc88\ud638:588-86-02555",(0,t.jsx)("br",{}),"\ub300\ud45c\uc804\ud654 : 031-000-0000 | \uc774\uba54\uc77c : support@medi-city.co.kr",(0,t.jsx)("br",{}),"\ud1b5\uc2e0\ud310\ub9e4\ubc88\ud638:\uc81c2023-\uacbd\uae30\uace0\uc591-12345\ud638 | \uac1c\uc778\uc815\ubcf4\uad00\ub9ac\ucc45\uc784\uc790 : \ubc31\uad11\ub3d9 | \uba54\uc77c : security@medi-city.co.kr | Copyright\xa9Medi-City All Rights Reserved."]})]})})}},3212:function(e,n,s){s.d(n,{Z:function(){return x}});var r=s(9439),t=s(7313),a=s(8467),i=s(2135),l=s(8418),c=s(7983),d=s(7388),u=s(9121),o=s(3638);var h=s(5554),m=s(8625),_=s(6417);var x=function(e){e.props;var n=(0,t.useState)(""),s=(0,r.Z)(n,2),x=s[0],f=s[1],p=(0,t.useState)(""),j=(0,r.Z)(p,2),g=j[0],k=j[1],v=(0,t.useState)(!1),b=(0,r.Z)(v,2),y=b[0],N=b[1],w=(0,t.useRef)(null),S=(0,t.useRef)(null),Z=(0,a.s0)(),L=(0,h.I0)(),C=(0,m.Z)().alert,I=(0,h.v9)((function(e){return e.userInfo.userInfo}));(0,h.v9)((function(e){return e.codes.resultCode})),(0,t.useEffect)((function(){I||w.current.focus()}),[]);var R=function(){return x?g?(L((0,o._k)({isLoading:!0})),void function(e,n,s,r,t){(0,c.I)("post",e,n).then((function(e){var n,s=e.headers.result_code;if("0000"===s){n=e.data.result_info;for(var a=["md_licenses_number","signin_policy","signin_policy_cd","user_idx","user_pwd","user_role","user_role_cd","user_salt"],i=0;i<a.length;i++)delete n[a[i]];r((0,d.fB)(JSON.stringify(n))),r((0,d.jJ)(JSON.stringify(n))),r((0,o._k)({isLoading:!1})),window.location.replace(l.j.main_url)}else"1003"===s&&((0,u.lQ)("log",e),(0,u.lQ)("decLog",e),(0,u.o5)({type:"alert",hook:t,message:e.headers.result_message_ko}),r((0,o._k)({isLoading:!1})))})).catch((function(e){(0,u.UO)(e,r,t)}))}(l.H.api_login,{signup_type:"000",user_id:x,user_pwd:g},0,L,C)):((0,u.o5)({type:"alert",hook:C,message:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"}),S.current.focus(),!1):((0,u.o5)({type:"alert",hook:C,message:"\uc544\uc774\ub514\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"}),w.current.focus(),!1)},M=function(e){"Enter"===e.key&&R()};return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)("header",{children:(0,_.jsxs)("div",{className:"header_content",children:[(0,_.jsx)("h1",{className:"logo",children:(0,_.jsx)(i.rU,{to:l.j.main_url,children:(0,_.jsx)("img",{src:"/img/common/logo.png",alt:""})})}),(0,_.jsxs)("div",{className:"flex",children:[(0,_.jsx)("div",{className:"login",children:I?(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("div",{className:"flex profile",children:[(0,_.jsxs)("div",{children:[(0,_.jsxs)("h5",{children:["\ud658\uc601\ud569\ub2c8\ub2e4"," ","".concat(I.user_name_first_ko).concat(I.user_name_last_ko),"\ub2d8"]}),y?(0,_.jsx)(_.Fragment,{children:(0,_.jsx)("p",{className:"font-12",id:"header_logout",children:"\ub85c\uadf8\uc544\uc6c3"})}):(0,_.jsx)(i.rU,{className:"font-12",id:"header_logout",onClick:function(){N(!0),L((0,o._k)({isLoading:!0}));var e=l.H.api_signout;(0,c.I)("post",e,{}).then((function(e){"0000"===e.headers.result_code&&(L((0,d.QL)(null)),f(""),k(""),N(!1),L((0,o._k)({isLoading:!1})),Z(l.j.main_url))})).catch((function(e){(0,u.UO)(e,L,C),L((0,d.QL)(null)),N(!1),Z(l.j.main_url)}))},children:"\ub85c\uadf8\uc544\uc6c3"})]}),(0,_.jsxs)(i.rU,{to:l.j.myPage_url,className:"profile_img_wrap",children:[(0,_.jsx)("span",{className:"profile_img",children:(0,_.jsx)("img",{src:"img/common/profile01.png",alt:""})}),(0,_.jsx)("div",{id:"gradeLabel",className:"grade",name:"gold",children:(0,_.jsx)("img",{src:"img/common/grade_gold.png",alt:""})})]})]})}):(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("div",{className:"flex",children:[(0,_.jsx)("input",{type:"email",placeholder:"ID",className:"login",onChange:function(e){f(e.currentTarget.value)},onKeyDown:M,ref:w}),(0,_.jsx)("input",{type:"password",placeholder:"PASSWORD",className:"login",onChange:function(e){k(e.currentTarget.value)},onKeyDown:M,ref:S}),(0,_.jsx)(i.rU,{className:"login",id:"header_login",onClick:R,children:"LOGIN"}),(0,_.jsx)(i.rU,{to:l.j.signup_url,className:"login",children:"SIGN UP"})]}),(0,_.jsx)(i.rU,{to:l.j.findId_url,className:"font-12",children:"\ub85c\uadf8\uc778\uc5d0 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud558\uc600\ub098\uc694?"})]})}),(0,_.jsx)("nav",{id:"menu",onClick:function(){var e=document.getElementById("menu"),n=document.getElementById("sitemap");e.classList.contains("nav_on")?(n.style.left="-200vh",e.classList.remove("nav_on")):(n.style.left=0,e.classList.add("nav_on"))},children:(0,_.jsxs)("div",{className:"menu",children:[(0,_.jsx)("span",{}),(0,_.jsx)("span",{}),(0,_.jsx)("span",{})]})}),(0,_.jsx)("div",{id:"sitemap",children:(0,_.jsxs)("div",{children:[(0,_.jsxs)("div",{children:[(0,_.jsx)("h3",{className:"font-38",children:"SERVICE"}),(0,_.jsxs)("ul",{children:[(0,_.jsx)("li",{children:(0,_.jsxs)("a",{href:"sitemap.html",children:[(0,_.jsx)("span",{children:(0,_.jsx)("img",{src:"/img/main/quick09.png",alt:""})}),(0,_.jsx)("p",{children:"\uc804\uccb4 \uc11c\ube44\uc2a4"})]})}),(0,_.jsx)("li",{children:(0,_.jsxs)("a",{href:"",children:[(0,_.jsx)("span",{children:(0,_.jsx)("img",{src:"/img/main/quick03.png",alt:""})}),(0,_.jsx)("p",{children:"\ud638\ud154 \ud2b9\uac00"})]})}),(0,_.jsx)("li",{children:(0,_.jsxs)("a",{href:"",children:[(0,_.jsx)("span",{children:(0,_.jsx)("img",{src:"/img/main/quick04.png",alt:""})}),(0,_.jsx)("p",{children:"MEDI ART"})]})}),(0,_.jsx)("li",{children:(0,_.jsxs)("a",{href:"",children:[(0,_.jsx)("span",{children:(0,_.jsx)("img",{src:"/img/main/quick05.png",alt:""})}),(0,_.jsx)("p",{children:"\uc138\ubb34/\ud68c\uacc4 \ucee8\uc124\ud305"})]})}),(0,_.jsx)("li",{children:(0,_.jsxs)("a",{href:"",children:[(0,_.jsx)("span",{children:(0,_.jsx)("img",{src:"/img/main/quick06.png",alt:""})}),(0,_.jsx)("p",{children:"MICE/PCO"})]})})]})]}),(0,_.jsxs)("div",{className:"flex",children:[(0,_.jsxs)("div",{children:[(0,_.jsx)("h3",{className:"font-38",children:"COMMUNITY"}),(0,_.jsxs)("ul",{children:[(0,_.jsx)("li",{children:(0,_.jsxs)("a",{href:"",children:[(0,_.jsx)("span",{children:(0,_.jsx)("img",{src:"/img/main/quick10.png",alt:""})}),(0,_.jsx)("p",{children:"\ud559\ud68c\uc18c\uc2dd"})]})}),(0,_.jsx)("li",{children:(0,_.jsxs)("a",{href:"",children:[(0,_.jsx)("span",{children:(0,_.jsx)("img",{src:"/img/main/quick11.png",alt:""})}),(0,_.jsx)("p",{children:"EVENT"})]})})]})]}),(0,_.jsxs)("div",{children:[(0,_.jsx)("h3",{className:"font-38",children:"MEMBERSHIP"}),(0,_.jsxs)("ul",{children:[(0,_.jsx)("li",{children:(0,_.jsxs)("a",{href:"",children:[(0,_.jsx)("span",{children:(0,_.jsx)("img",{src:"/img/main/quick02.png",alt:""})}),(0,_.jsx)("p",{children:"MEDI POINT"})]})}),(0,_.jsx)("li",{children:(0,_.jsxs)("a",{href:"",children:[(0,_.jsx)("span",{children:(0,_.jsx)("img",{src:"/img/main/quick07.png",alt:""})}),(0,_.jsx)("p",{children:"K-MEDI CREATOR"})]})}),(0,_.jsx)("li",{children:(0,_.jsxs)("a",{href:"",children:[(0,_.jsx)("span",{children:(0,_.jsx)("img",{src:"/img/main/quick08.png",alt:""})}),(0,_.jsx)("p",{children:"MYPAGE"})]})})]})]})]})]})}),(0,_.jsx)(i.rU,{to:l.j.main_url,className:"home",children:(0,_.jsx)("img",{src:"/img/common/header_home.png",alt:""})})]})]})})})}},4914:function(e,n,s){s.r(n),s.d(n,{default:function(){return S}});var r=s(3433),t=s(9439),a=s(7313),i=s(8467),l=s(2135),c=s(8418),d=s(5554),u=s(7983),o=s(613),h=s(3212),m=s(2858),_=s(9121),x=s(6417),f=(0,a.forwardRef)((function(e,n){var s=n.accountType,r=n.inputID,i=e.idStatus,l=(0,a.useState)("0"),d=(0,t.Z)(l,2),o=d[0],h=d[1];return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("h5",{children:["\uc544\uc774\ub514 ",(0,x.jsx)("span",{className:"red",children:"*"})]}),(0,x.jsxs)("div",{className:"flex",children:[(0,x.jsxs)("div",{children:[(0,x.jsx)("input",{type:"hidden",ref:s,value:"000"}),(0,x.jsx)("input",{type:"email",className:"input w600",onKeyUp:function(e){var n=c.H.api_user_check,t={signup_type:"".concat(s.current.value),user_id:"".concat(r.current.value)};(0,u.I)("post",n,t).then((function(e){var n=e;"0000"===n.headers.result_code?(h("0000"),i(!0)):"1000"===n.headers.result_code&&(h("1000"),i(!1))})).catch((function(e){(0,_.lQ)("log",e),(0,_.lQ)("decLog",e),h("400"),i(!1)}))},ref:r})]}),"0000"===o?(0,x.jsx)("p",{className:"mark green",id:"mark_id",children:"\uc0ac\uc6a9 \uac00\ub2a5\ud55c \uc544\uc774\ub514 \uc785\ub2c8\ub2e4"}):"400"===o?(0,x.jsx)("p",{className:"mark red",id:"mark_id",children:"\uc544\uc774\ub514\ub294 \uc774\uba54\uc77c \ud615\uc2dd\uc73c\ub85c \uc785\ub825\ud558\uc138\uc694"}):"1000"===o?(0,x.jsx)("p",{className:"mark red",id:"mark_id",children:"\uc774\ubbf8 \uc0ac\uc6a9\uc911\uc778 \uc544\uc774\ub514\uc785\ub2c8\ub2e4"}):(0,x.jsx)("p",{className:"mark red",id:"mark_id",children:"\uc544\uc774\ub514\ub294 \uc774\uba54\uc77c \ud615\uc2dd\uc73c\ub85c \uc785\ub825\ud558\uc138\uc694"})]})]})})),p=s(7020),j=(0,a.forwardRef)((function(e,n){var s=(0,a.useState)(!1),r=(0,t.Z)(s,2),i=r[0],l=r[1],c=(0,a.useState)(!1),d=(0,t.Z)(c,2),u=d[0],o=d[1],h=(0,a.useState)(""),m=(0,t.Z)(h,2),_=m[0],f=m[1],j=(0,a.useState)(""),g=(0,t.Z)(j,2),k=g[0],v=g[1],b=(0,a.useState)("1"),y=(0,t.Z)(b,2),N=y[0],w=y[1],S=n.inputPW,Z=(0,a.useRef)(),L=e.pwStatus,C=function(){_===k?i&&u?(w("4"),L(!0)):(w("3"),L(!1)):i&&u?(w("2"),L(!1)):(w("1"),L(!1))};return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("div",{className:"flex",children:[(0,x.jsxs)("div",{children:[(0,x.jsxs)("h5",{children:["\ube44\ubc00\ubc88\ud638 ",(0,x.jsx)("span",{className:"red",children:"*"})]}),(0,x.jsx)("input",{type:"password",className:"input w370",onKeyUp:function(e){return function(e){var n=e.target.value;l(p.t.test(n)),f(n)}(e)},ref:S,onBlur:C})]}),(0,x.jsxs)("div",{children:[(0,x.jsxs)("h5",{children:["\ube44\ubc00\ubc88\ud638 \ud655\uc778 ",(0,x.jsx)("span",{className:"red",children:"*"})]}),(0,x.jsx)("input",{type:"password",className:"input w370",onKeyUp:function(e){return function(e){var n=e.target.value;o(p.t.test(n)),v(n)}(e)},ref:Z,onBlur:C})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("h5",{children:"\xa0"}),function(e){switch(e){case"1":case"3":default:return(0,x.jsx)("p",{className:"mark",id:"mark_pw",children:"\ube44\ubc00\ubc88\ud638\ub294 \ud2b9\uc218\ubb38\uc790, \ubb38\uc790, \uc22b\uc790 \ud3ec\ud568 \ud615\ud0dc\uc758 6~16\uc790\ub9ac\ub85c \uc785\ub825\ud574\uc8fc\uc138\uc694"});case"2":return(0,x.jsx)("p",{className:"mark red",id:"mark_pw",children:"\ube44\ubc00\ubc88\ud638\ub97c \ud655\uc778\ud574\uc8fc\uc138\uc694"});case"4":return(0,x.jsx)("p",{className:"mark green",id:"mark_pw",children:"\uc0ac\uc6a9 \uac00\ub2a5\ud55c \ube44\ubc00\ubc88\ud638 \uc785\ub2c8\ub2e4"})}}(N)]})]})})})),g=(0,a.forwardRef)((function(e,n){var s=n.user_name_first_ko,r=n.user_name_last_ko,t=n.user_name_first_en,a=n.user_name_last_en;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{children:[(0,x.jsxs)("h5",{children:["\uc131\uba85 (\uad6d\ubb38) ",(0,x.jsx)("span",{className:"red",children:"*"})]}),(0,x.jsx)("input",{type:"name",className:"input w180",placeholder:"\uc131",ref:s}),(0,x.jsx)("input",{type:"name",className:"input w180",placeholder:"\uc774\ub984",ref:r})]}),(0,x.jsxs)("div",{children:[(0,x.jsxs)("h5",{children:["\uc131\uba85 (\uc601\ubb38) ",(0,x.jsx)("span",{className:"red",children:"*"})]}),(0,x.jsx)("input",{type:"name",className:"input w180",placeholder:"First name",ref:t}),(0,x.jsx)("input",{type:"name",className:"input w180",placeholder:"Last name",ref:a})]})]})})),k=s(3638),v=s(8625),b=(0,a.forwardRef)((function(e,n){var s=n.inputMobile1,r=n.inputMobile2,i=n.inputMobile3,h=n.inter_phone_number,m=e.mobileStatus,f=(0,d.I0)(),p=(0,v.Z)().alert,j=(0,a.useRef)(null),g=(0,a.useRef)(null),b=(0,a.useRef)(null),y=(0,a.useRef)(null),N=(0,a.useRef)(null),w=(0,a.useState)(300),S=(0,t.Z)(w,2),Z=S[0],L=S[1],C=(0,a.useRef)(null),I=(0,a.useState)(!1),R=(0,t.Z)(I,2),M=R[0],U=R[1],E=(0,a.useState)(!1),Q=(0,t.Z)(E,2),A=Q[0],F=Q[1];(0,a.useEffect)((function(){if(M)return C.current=setInterval((function(){L((function(e){return e-5})),q()}),5e3),function(){return clearInterval(C.current)};clearInterval(C.current)}),[M]),(0,a.useEffect)((function(){Z<=0&&((0,_.lQ)("log","time out"),clearInterval(C.current),O(),(0,_.o5)({type:"alert",hook:p,message:"\uc778\uc99d\uc744 \ub2e4\uc2dc \uc9c4\ud589\ud574\uc8fc\uc138\uc694"}))}),[Z]);var O=function(){U(!1),clearInterval(C.current)};function B(e){switch(e){case 1:n="phone_check_after_btn",s="block",document.getElementById(n).style.display=s,z();break;case 2:z()}var n,s}var P=function(e){e.target===s.current&&(/^[0-9]{1,3}$/.test(e.target.value)||(e.target.value=e.target.value.slice(0,-1)),e.target.value.length>=3&&r.current.focus()),e.target===r.current&&(/^[0-9]{1,4}$/.test(e.target.value)||(e.target.value=e.target.value.slice(0,-1)),e.target.value.length>=4&&i.current.focus()),e.target===i.current&&(/^[0-9]{1,4}$/.test(e.target.value)||(e.target.value=e.target.value.slice(0,-1)))},z=function(){f((0,k._k)({isLoading:!0}));var e=c.H.api_user_cert;(0,u.I)("post",e,{certification_tool:"000",certification_type:"000"}).then((function(e){var n=e.data.result_info;localStorage.setItem("certification_idx",n.certification_idx),D(n)})).catch((function(e){(0,_.lQ)("log",e),(0,_.lQ)("decLog",e),(0,_.o5)({type:"alert",hook:p,message:"\uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694"}),f((0,k._k)({isLoading:!1}))}))},D=function(e){N.current.value=e.token_version_id,g.current.value=e.enc_data,b.current.value=e.integrity_value,y.current.value=e.m,T(e.form_url)},T=function(e){var n=document.getElementById("form");U(!0);window.open("","auth","width=200,height=200,resizeable,scrollbars");n.action=e,n.mothod="POST",n.target="auth",n.submit()},q=function(){var e=localStorage.getItem("certification_idx"),n=c.H.api_user_cert_result+"/".concat(e);e&&(0,u.I)("get",n,{}).then((function(e){(0,_.lQ)("log",e);var n=e.data.result_info;"0000"===e.headers.result_code?(f((0,o.k)(n)),m(!0),O(),f((0,k._k)({isLoading:!1})),F(!0),K(n)):((0,_.lQ)("log",e),(0,_.o5)({type:"alert",hook:p,message:"\uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694"}),f((0,k._k)({isLoading:!1})))})).catch((function(e){(0,_.lQ)("log",e),(0,_.lQ)("decLog",e),f((0,k._k)({isLoading:!0,error:"Y"}))}))},K=function(e){var n=e.mobile_no,t=n.slice(0,3),a=n.slice(3,7),l=n.slice(-4);s.current.value=t,r.current.value=a,i.current.value=l};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{children:[(0,x.jsxs)("div",{className:"flex mb15",children:[(0,x.jsxs)("h5",{className:"m0",children:["\ud734\ub300\uc804\ud654 ",(0,x.jsx)("span",{className:"red",children:"*"})]}),(0,x.jsx)("div",{id:"phone_check_after_btn",children:(0,x.jsx)(l.rU,{className:"font-12 mr10 ml10",onClick:function(e){B(2)},children:"\uc778\uc99d\ubc88\ud638\uac00 \uc624\uc9c0 \uc54a\uc558\ub098\uc694?"})})]}),(0,x.jsx)("div",{className:"flex",children:(0,x.jsxs)("div",{id:"phone_num",className:"m0",children:[(0,x.jsx)("input",{type:"hidden",ref:h,value:"82"}),(0,x.jsx)("input",{type:"tel",className:"input w120 hold",id:"phone_num1",ref:s,onKeyUp:function(e){P(e)},value:"010",readOnly:!0}),(0,x.jsx)("input",{type:"tel",className:"input w140 hold",id:"phone_num2",ref:r,onKeyUp:function(e){P(e)},readOnly:!0}),(0,x.jsx)("input",{type:"tel",className:"input w140 hold",id:"phone_num3",ref:i,onKeyUp:function(e){P(e)},readOnly:!0})]})})]}),A?(0,x.jsx)("div",{id:"phone_check_before",children:(0,x.jsx)("div",{className:"flex",children:(0,x.jsx)(l.rU,{className:"subbtn hold m0",id:"phoneCheck",style:{cursor:"auto"},children:"\uc778\uc99d \uc644\ub8cc"})})}):(0,x.jsx)("div",{id:"phone_check_before",children:(0,x.jsx)(l.rU,{className:"subbtn on m0",onClick:function(e){B(1)},children:"\uc778\uc99d \ubc88\ud638"})}),A?(0,x.jsx)("p",{className:"mark green",id:"mark_tel",children:"\ud734\ub300\ud3f0 \uc778\uc99d\uc744 \uc644\ub8cc\ud588\uc2b5\ub2c8\ub2e4."}):(0,x.jsx)("p",{className:"mark",id:"mark_tel",children:"\ud734\ub300\ud3f0 \uc778\uc99d\uc744 \uc9c4\ud589\ud574\uc8fc\uc138\uc694."}),(0,x.jsxs)("form",{name:"form",id:"form",ref:j,children:[(0,x.jsx)("input",{type:"hidden",id:"m",name:"m",value:"",ref:y}),(0,x.jsx)("input",{type:"hidden",id:"token_version_id",name:"token_version_id",value:"",ref:N}),(0,x.jsx)("input",{type:"hidden",id:"enc_data",name:"enc_data",ref:g}),(0,x.jsx)("input",{type:"hidden",id:"integrity_value",name:"integrity_value",ref:b})]})]})})),y=(0,a.forwardRef)((function(e,n){var s=n.md_licenses_number;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("h5",{children:"\uba74\ud5c8\ubc88\ud638"}),(0,x.jsx)("input",{type:"text",className:"input w370",ref:s})]})})),N=(0,a.forwardRef)((function(e,n){var s=n.organization_name_ko,r=n.department_name_ko,t=n.specialized_name_ko;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{children:[(0,x.jsx)("h5",{children:"\uc18c\uc18d \uae30\uad00"}),(0,x.jsx)("input",{type:"text",className:"input w280",ref:s})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("h5",{children:"\uc804\uacf5\uacfc"}),(0,x.jsx)("input",{type:"text",className:"input w280",ref:r})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("h5",{children:"\uc804\uacf5\ubd84\uc57c"}),(0,x.jsx)("input",{type:"text",className:"input w280",ref:t})]})]})})),w=(0,a.forwardRef)((function(e,n){var s=e.termChkMain,o=e.privacyChkMain,h=e.marketingChkMain,m=(0,a.useState)(!1),f=(0,t.Z)(m,2),p=f[0],j=f[1],g=(0,a.useState)(""),b=(0,t.Z)(g,2),y=b[0],N=b[1],w=(0,a.useState)([]),S=(0,t.Z)(w,2),Z=S[0],L=S[1],C=(0,a.useState)(!1),I=(0,t.Z)(C,2),R=I[0],M=I[1],U=(0,a.useState)(!1),E=(0,t.Z)(U,2),Q=E[0],A=E[1],F=(0,a.useState)(!1),O=(0,t.Z)(F,2),B=O[0],P=O[1],z=(0,a.useState)(!1),D=(0,t.Z)(z,2),T=D[0],q=D[1],K=(0,a.useState)(!1),H=(0,t.Z)(K,2),Y=H[0],W=H[1],$=(0,a.useState)(!1),G=(0,t.Z)($,2),J=G[0],V=G[1],X=(0,a.useState)(!1),ee=(0,t.Z)(X,2),ne=ee[0],se=ee[1],re=(0,a.useState)({}),te=(0,t.Z)(re,2),ae=te[0],ie=te[1],le=(0,a.useState)({}),ce=(0,t.Z)(le,2),de=ce[0],ue=ce[1],oe=(0,a.useState)({}),he=(0,t.Z)(oe,2),me=he[0],_e=he[1],xe=(0,d.I0)(),fe=(0,v.Z)().alert,pe=(0,i.s0)(),je=n.termsChk,ge=n.privacyChk,ke=n.marketingChk,ve=n.marketing_sms,be=n.marketing_mail;(0,a.useEffect)((function(){ye()}),[]);var ye=function(){xe((0,k._k)({isLoading:!0}));var e=c.H.api_terms_list;(0,u.I)("post",e,{page_num:1,page_size:3}).then((function(e){var n=[];if("0000"===e.headers.result_code){n=(0,r.Z)(e.data.result_info);for(var s=0;s<n.length;s++){var t=n[s].terms_type_cd,a=n[s].terms_type,i=n[s].conditions,l=n[s].terms_idx;switch(t){case"100":var c={};c.title=a,c.content=i,c.terms_idx=l,ie(c);break;case"000":var d={};d.title=a,d.content=i,d.terms_idx=l,ue(d);break;case"400":var u={};u.title=n[s].terms_type,u.content=i,u.terms_idx=l,_e(u)}}xe((0,k._k)({isLoading:!1}))}else xe((0,k._k)({isLoading:!0,error:"Y"})),(0,_.o5)({type:"alert",hook:fe,message:"\uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694"})})).catch((function(e){(0,_.lQ)("log",e),(0,_.lQ)("decLog",e),xe((0,k._k)({isLoading:!0,error:"Y"})),(0,_.o5)({type:"alert",hook:fe,message:"\uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694",callback:function(){return xe((0,k._k)({isLoading:!1})),void pe(c.j.main_url)}})}))},Ne=function(){j(!0)},we=function(e){switch(e.target.id){case"agree_term":if(!J)return(0,_.lQ)("alert","\uc774\uc6a9\uc57d\uad00\uc744 \ud655\uc778\ud574\uc8fc\uc138\uc694"),!1;M(e.target.checked),e.target.checked?s(ae.terms_idx):s("");break;case"agree_privacy":if(!ne)return(0,_.lQ)("alert","\uac1c\uc778\uc815\ubcf4\ucc98\ub9ac\ubc29\uce68\uc744 \ud655\uc778\ud574\uc8fc\uc138\uc694"),!1;A(e.target.checked),e.target.checked?o(de.terms_idx):o("");break;case"agree_marketing":P(e.target.checked),q(e.target.checked),W(e.target.checked),e.target.checked?h(me.terms_idx):h("");break;case"marketing_sms":P(e.target.checked),q(e.target.checked),e.target.checked?h(me.terms_idx):h(Y?me.terms_idx:"");break;case"marketing_mail":P(e.target.checked),W(e.target.checked),e.target.checked?h(me.terms_idx):h(T?me.terms_idx:"");break;case"agree_all":if(!J||!ne)return(0,_.lQ)("alert","\uc774\uc6a9\uc57d\uad00, \uac1c\uc778\uc815\ubcf4\ucc98\ub9ac\ubc29\uce68\uc744 \ud655\uc778\ud574\uc8fc\uc138\uc694"),e.target.checked=!1,!1;e.target.checked?(M(!0),A(!0),P(!0),q(!0),W(!0)):(M(!1),A(!1),P(!1),q(!1),W(!1))}};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{className:"term_top flex start between",children:[(0,x.jsxs)("div",{className:"flex start ",children:[(0,x.jsxs)("h5",{children:["\uc57d\uad00\uc5d0 \ub3d9\uc758\ud558\uaca0\uc2b5\ub2c8\uae4c? ",(0,x.jsx)("span",{className:"red",children:"*"})]}),(0,x.jsx)("p",{className:"mark red",id:"mark_tel",children:"\uc774\uc6a9\uc57d\uad00\uc744 \ud655\uc778\ud574\uc8fc\uc138\uc694"})]}),(0,x.jsx)("input",{type:"checkbox",id:"agree_all",className:"hide",onChange:function(e){return we(e)}}),(0,x.jsx)("label",{htmlFor:"agree_all",className:"checkbox",children:(0,x.jsxs)("svg",{width:"9.772",height:"7.181",viewBox:"0 0 9.772 7.181",fill:"#bdbdbd",children:[(0,x.jsx)("path",{d:"M0,6.181a1,1,0,0,1-.707-.293,1,1,0,0,1,0-1.414L4.474-.707a1,1,0,0,1,1.414,0,1,1,0,0,1,0,1.414L.707,5.888A1,1,0,0,1,0,6.181Z",transform:"translate(3.591 1)"}),(0,x.jsx)("path",{d:"M2.591,3.591A1,1,0,0,1,1.883,3.3L-.707.707a1,1,0,0,1,0-1.414,1,1,0,0,1,1.414,0L3.3,1.883a1,1,0,0,1-.707,1.707Z",transform:"translate(1 3.591)"})]})})]}),(0,x.jsxs)("div",{className:"linebox",children:[(0,x.jsxs)("div",{className:"flex between",children:[(0,x.jsxs)("h6",{children:["\uc774\uc6a9\uc57d\uad00"," ",(0,x.jsx)(l.rU,{className:"font-12",onClick:function(e){V(!0),ae&&(N(ae.title),L(ae.content),Ne())},children:"\uc804\ubb38\ubcf4\uae30"})]}),(0,x.jsx)("input",{type:"checkbox",id:"agree_term",className:"hide",ref:je,checked:R,onChange:function(e){return we(e)}}),(0,x.jsx)("label",{htmlFor:"agree_term",className:"checkbox",children:(0,x.jsxs)("svg",{width:"9.772",height:"7.181",viewBox:"0 0 9.772 7.181",fill:"#bdbdbd",children:[(0,x.jsx)("path",{d:"M0,6.181a1,1,0,0,1-.707-.293,1,1,0,0,1,0-1.414L4.474-.707a1,1,0,0,1,1.414,0,1,1,0,0,1,0,1.414L.707,5.888A1,1,0,0,1,0,6.181Z",transform:"translate(3.591 1)"}),(0,x.jsx)("path",{d:"M2.591,3.591A1,1,0,0,1,1.883,3.3L-.707.707a1,1,0,0,1,0-1.414,1,1,0,0,1,1.414,0L3.3,1.883a1,1,0,0,1-.707,1.707Z",transform:"translate(1 3.591)"})]})})]}),(0,x.jsxs)("div",{className:"flex between",children:[(0,x.jsxs)("h6",{children:["\uac1c\uc778\uc815\ubcf4\ucc98\ub9ac\ub3d9\uc758"," ",(0,x.jsx)(l.rU,{className:"font-12",onClick:function(e){se(!0),de&&(N(de.title),L(de.content),Ne())},children:"\uc804\ubb38\ubcf4\uae30"})]}),(0,x.jsx)("input",{type:"checkbox",id:"agree_privacy",className:"hide",ref:ge,checked:Q,onChange:function(e){return we(e)}}),(0,x.jsx)("label",{htmlFor:"agree_privacy",className:"checkbox",children:(0,x.jsxs)("svg",{width:"9.772",height:"7.181",viewBox:"0 0 9.772 7.181",fill:"#bdbdbd",children:[(0,x.jsx)("path",{d:"M0,6.181a1,1,0,0,1-.707-.293,1,1,0,0,1,0-1.414L4.474-.707a1,1,0,0,1,1.414,0,1,1,0,0,1,0,1.414L.707,5.888A1,1,0,0,1,0,6.181Z",transform:"translate(3.591 1)"}),(0,x.jsx)("path",{d:"M2.591,3.591A1,1,0,0,1,1.883,3.3L-.707.707a1,1,0,0,1,0-1.414,1,1,0,0,1,1.414,0L3.3,1.883a1,1,0,0,1-.707,1.707Z",transform:"translate(1 3.591)"})]})})]}),(0,x.jsxs)("div",{className:"flex between",children:[(0,x.jsxs)("div",{children:[(0,x.jsxs)("h6",{children:["\ub9c8\ucf00\ud305 \uc218\uc2e0 \ub3d9\uc758 (\uc120\ud0dd)"," ",(0,x.jsx)(l.rU,{className:"font-12",onClick:function(e){me&&(N(me.title),L(me.content),Ne())},children:"\uc804\ubb38\ubcf4\uae30"})]}),(0,x.jsxs)("div",{className:"flex marketing",children:[(0,x.jsxs)("div",{children:[(0,x.jsx)("input",{type:"checkbox",id:"marketing_sms",className:"hide",checked:T,ref:ve,onChange:function(e){return we(e)}}),(0,x.jsxs)("label",{htmlFor:"marketing_sms",children:[(0,x.jsxs)("svg",{width:"9.772",height:"7.181",viewBox:"0 0 3.585 2.635",fill:"#bdbdbd",children:[(0,x.jsx)("path",{id:"\uc120_77","data-name":"\uc120 77",d:"M-.633,1.635a.366.366,0,0,1-.259-.107.367.367,0,0,1,0-.519l1.9-1.9a.367.367,0,0,1,.519,0,.367.367,0,0,1,0,.519l-1.9,1.9A.366.366,0,0,1-.633,1.635Z",transform:"translate(1.951 1)"}),(0,x.jsx)("path",{id:"\uc120_76","data-name":"\uc120 76",d:"M.317.684A.366.366,0,0,1,.058.577L-.893-.374a.367.367,0,0,1,0-.519.367.367,0,0,1,.519,0L.577.058A.367.367,0,0,1,.317.684Z",transform:"translate(1 1.951)"})]}),"SMS"]})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("input",{type:"checkbox",id:"marketing_mail",className:"hide",checked:Y,ref:be,onChange:function(e){return we(e)}}),(0,x.jsxs)("label",{htmlFor:"marketing_mail",children:[(0,x.jsxs)("svg",{width:"9.772",height:"7.181",viewBox:"0 0 3.585 2.635",fill:"#bdbdbd",children:[(0,x.jsx)("path",{id:"\uc120_77","data-name":"\uc120 77",d:"M-.633,1.635a.366.366,0,0,1-.259-.107.367.367,0,0,1,0-.519l1.9-1.9a.367.367,0,0,1,.519,0,.367.367,0,0,1,0,.519l-1.9,1.9A.366.366,0,0,1-.633,1.635Z",transform:"translate(1.951 1)"}),(0,x.jsx)("path",{id:"\uc120_76","data-name":"\uc120 76",d:"M.317.684A.366.366,0,0,1,.058.577L-.893-.374a.367.367,0,0,1,0-.519.367.367,0,0,1,.519,0L.577.058A.367.367,0,0,1,.317.684Z",transform:"translate(1 1.951)"})]}),"E-mail"]})]})]})]}),(0,x.jsx)("input",{type:"checkbox",id:"agree_marketing",className:"hide",ref:ke,checked:B,onChange:function(e){return we(e)}}),(0,x.jsx)("label",{htmlFor:"agree_marketing",className:"checkbox",children:(0,x.jsxs)("svg",{width:"9.772",height:"7.181",viewBox:"0 0 9.772 7.181",fill:"#bdbdbd",children:[(0,x.jsx)("path",{d:"M0,6.181a1,1,0,0,1-.707-.293,1,1,0,0,1,0-1.414L4.474-.707a1,1,0,0,1,1.414,0,1,1,0,0,1,0,1.414L.707,5.888A1,1,0,0,1,0,6.181Z",transform:"translate(3.591 1)"}),(0,x.jsx)("path",{d:"M2.591,3.591A1,1,0,0,1,1.883,3.3L-.707.707a1,1,0,0,1,0-1.414,1,1,0,0,1,1.414,0L3.3,1.883a1,1,0,0,1-.707,1.707Z",transform:"translate(1 3.591)"})]})})]})]}),(0,x.jsx)(_.WK,{isOpen:p,handleModalClose:function(){j(!1),N(""),L([])},content:Z,title:y})]})}));var S=function(){var e=(0,i.s0)(),n=(0,d.I0)(),s=(0,v.Z)().alert,p={accountType:(0,a.useRef)(null),inputID:(0,a.useRef)(null),inputPW:(0,a.useRef)(null),user_name_first_ko:(0,a.useRef)(null),user_name_last_ko:(0,a.useRef)(null),user_name_first_en:(0,a.useRef)(null),user_name_last_en:(0,a.useRef)(null),md_licenses_number:(0,a.useRef)(null),organization_name_ko:(0,a.useRef)(null),department_name_ko:(0,a.useRef)(null),specialized_name_ko:(0,a.useRef)(null),inter_phone_number:(0,a.useRef)(null),inputMobile1:(0,a.useRef)(null),inputMobile2:(0,a.useRef)(null),inputMobile3:(0,a.useRef)(null),termsChk:(0,a.useRef)(null),privacyChk:(0,a.useRef)(null),marketingChk:(0,a.useRef)(null),marketing_sms:(0,a.useRef)(null),marketing_mail:(0,a.useRef)(null)},S=(0,a.useState)(!1),Z=(0,t.Z)(S,2),L=Z[0],C=Z[1],I=(0,a.useState)(!1),R=(0,t.Z)(I,2),M=R[0],U=R[1],E=(0,a.useState)(!1),Q=(0,t.Z)(E,2),A=Q[0],F=Q[1],O=(0,a.useState)(""),B=(0,t.Z)(O,2),P=B[0],z=B[1],D=(0,a.useState)(""),T=(0,t.Z)(D,2),q=T[0],K=T[1],H=(0,a.useState)(""),Y=(0,t.Z)(H,2),W=Y[0],$=Y[1],G=(0,d.v9)((function(e){return e.certInfo.certInfo})),J=localStorage.getItem("certification_idx"),V=function(){var e=String(P)+String(q)+String(W),n=(0,r.Z)(e).join();return","===n.slice(-1)&&(n=n.slice(0,-1)),n},X=function(){return L?M?""===p.user_name_first_ko.current.value||""===p.user_name_last_ko.current.value||""===p.user_name_first_en.current.value||""===p.user_name_last_en.current.value?((0,_.o5)({type:"alert",hook:s,message:"\uc131\uba85\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"}),p.user_name_first_ko.current.focus(),!1):A?p.user_name_first_ko.current.value+p.user_name_last_ko.current.value!==G.name?((0,_.o5)({type:"alert",hook:s,message:"\uc131\uba85\uc774 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4"}),p.user_name_first_ko.current.focus(),!1):!(!p.termsChk.current.checked||!p.privacyChk.current.checked)||((0,_.o5)({type:"alert",hook:s,message:"\uc57d\uad00\uc5d0 \ub3d9\uc758\ud574\uc8fc\uc138\uc694"}),p.termsChk.current.focus(),!1):((0,_.o5)({type:"alert",hook:s,message:"\ud734\ub300\ud3f0 \uc778\uc99d\uc744 \uc644\ub8cc\ud574\uc8fc\uc138\uc694"}),p.inputMobile2.current.focus(),!1):((0,_.o5)({type:"alert",hook:s,message:"\ube44\ubc00\ubc88\ud638\ub97c \ud655\uc778\ud574\uc8fc\uc138\uc694"}),p.inputPW.current.focus(),!1):((0,_.o5)({type:"alert",hook:s,message:"\uc544\uc774\ub514\ub97c \ud655\uc778\ud574\uc8fc\uc138\uc694"}),p.inputID.current.focus(),!1)};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(h.Z,{}),(0,x.jsx)("div",{id:"con_area",children:(0,x.jsxs)("div",{className:"form sign",id:"sign_form",children:[(0,x.jsx)("h3",{className:"title",children:"\ud68c\uc6d0\uac00\uc785"}),(0,x.jsxs)("div",{children:[(0,x.jsx)(f,{ref:p,idStatus:function(e){C(e)}}),(0,x.jsx)(j,{ref:p,pwStatus:function(e){U(e)}}),(0,x.jsx)("div",{className:"flex",children:(0,x.jsx)(g,{ref:p})}),(0,x.jsx)("div",{className:"flex end",children:(0,x.jsx)(b,{ref:p,mobileStatus:function(e){F(e)}})}),(0,x.jsx)("div",{children:(0,x.jsx)(y,{ref:p})}),(0,x.jsx)("div",{className:"flex",children:(0,x.jsx)(N,{ref:p})}),(0,x.jsxs)("div",{className:"term_wrap",children:[(0,x.jsx)(w,{ref:p,termChkMain:function(e){z(e)},privacyChkMain:function(e){K(e)},marketingChkMain:function(e){$(e)}}),(0,x.jsxs)("div",{className:"btn_box",children:[(0,x.jsx)(l.rU,{className:"mainbtn btn01",onClick:function(){if(X()){n((0,k._k)({isLoading:!0}));var r,t,a,i=G.birth_date.slice(0,4),l=G.birth_date.slice(4,6),d=G.birth_date.slice(-2);switch("1"===G.gender?r="0":"0"===G.gender&&(r="1"),"M"===G.auth_type?t="000":"X"===G.auth_type||"F"===G.auth_type?t="100":"C"!==G.auth_type&&"S"!==G.auth_type||(t="900"),G.mobile_co){case"1":a="000";break;case"2":a="100";break;case"3":a="200";break;case"5":a="300";break;case"6":a="400";break;case"7":a="500";break;default:a="900"}var h={user_id:p.inputID.current.value,user_pwd:p.inputPW.current.value,user_name_first_ko:p.user_name_first_ko.current.value,user_name_last_ko:p.user_name_last_ko.current.value,user_name_first_en:p.user_name_first_en.current.value,user_name_last_en:p.user_name_last_en.current.value,md_licenses_number:p.md_licenses_number.current.value,auth_code:J,inter_phone_number:p.inter_phone_number.current.value,mobile1:p.inputMobile1.current.value,mobile2:p.inputMobile2.current.value,mobile3:p.inputMobile3.current.value,signup_type:p.accountType.current.value,organization_name_ko:p.organization_name_ko.current.value,specialized_name_ko:p.specialized_name_ko.current.value,department_name_ko:p.department_name_ko.current.value,sms_yn:p.marketing_sms.current.checked?"Y":"N",email_yn:p.marketing_mail.current.checked?"Y":"N",certification_idx:J,birth_yyyy:i,birth_mm:l,birth_dd:d,gender:r,user_ci:G.ci,user_di:G.di,certification_tool:t,certification_type:"000",terms_idx:V(),mobile_agency:a},m=c.H.api_user;(0,u.I)("post",m,h).then((function(r){"0000"===r.headers.result_code?(localStorage.removeItem("certification_idx"),n((0,o.k)(null)),n((0,k._k)({isLoading:!1})),e(c.j.signup_ok_url)):((0,_.lQ)("log",r),(0,_.o5)({type:"alert",hook:s,message:r.headers.result_message_ko}),n((0,k._k)({isLoading:!1})))})).catch((function(e){(0,_.lQ)("log",e),(0,_.lQ)("decLog",e),(0,_.o5)({type:"alert",hook:s,message:"\uc7a0\uc2dc \ud6c4\uc5d0 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694."}),n((0,k._k)({isLoading:!1}))}))}},children:"\uac00\uc785\ud558\uae30"}),(0,x.jsx)(l.rU,{to:"/",className:"mainbtn btn02",children:"\ub4a4\ub85c\uac00\uae30"})]})]})]})]})}),(0,x.jsx)(m.Z,{})]})}}}]);