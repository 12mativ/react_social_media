"use strict";(self.webpackChunkreact_2=self.webpackChunkreact_2||[]).push([[124],{2124:function(t,s,e){e.r(s),e.d(s,{default:function(){return J}});var n=e(8185),r=e(7242),u=e(2032),i=e(5295),o=e(943),a=e(7124),c={},l={description:"ProfileInfo_description__945PC",head_img:"ProfileInfo_head_img__jr6KZ",status_input:"ProfileInfo_status_input__MR1Ys"},p=e(9552),d=e(3857),h=e(7522),f=function(t){var s=(0,a.useState)(!1),e=(0,d.Z)(s,2),n=e[0],r=e[1],u=(0,a.useState)(t.status),i=(0,d.Z)(u,2),o=i[0],c=i[1];(0,a.useEffect)((function(){c(t.status)}),[t.status]);return(0,h.jsxs)(h.Fragment,{children:[!n&&(0,h.jsx)("div",{children:(0,h.jsx)("span",{onDoubleClick:function(){r(!0)},children:t.status||"------"})}),n&&(0,h.jsx)("div",{children:(0,h.jsx)("input",{className:l.status_input,autoFocus:!0,value:o,onChange:function(t){c(t.currentTarget.value)},onBlur:function(){r(!1),t.updateStatus(o)},placeholder:"Your status"})})]})},x=function(t){var s=t.profile,e=t.status,n=t.updateStatus;if(!s)return(0,h.jsx)(p.Z,{});var r=[],u=1;for(var i in s.contacts)s.contacts[i]&&(r.push((0,h.jsxs)("li",{children:[i," - ",s.contacts[i]]},u)),u++);return(0,h.jsx)("div",{className:l.content,children:(0,h.jsxs)("div",{className:l.description,children:[(0,h.jsx)("img",{src:null===s.photos.large?null:s.photos.large,alt:""}),(0,h.jsx)(f,{status:e,updateStatus:n}),(0,h.jsx)("h1",{children:"About me"}),(0,h.jsx)("p",{children:s.aboutMe}),(0,h.jsx)("h2",{children:"Contacts"}),(0,h.jsx)("ul",{children:r})]})})},j=e(6441),_=e(8587),m="MyPosts_posts_header__PqCxF",v="MyPosts_post_field__JBC3B",g="MyPosts_submit_btn__W27Th",P="Post_item__NDEuW",Z="Post_desc__JS5Pl",S="Post_likes__m6sjG",C=function(t){return(0,h.jsxs)("div",{className:P,children:[(0,h.jsxs)("div",{className:Z,children:[(0,h.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/147/147142.png",alt:""}),(0,h.jsx)("span",{children:t.message})]}),(0,h.jsx)("div",{className:S,children:(0,h.jsxs)("span",{children:[t.likesCount," Likes"]})})]})},k=e(7575),b=e(7243),N=e(2545),y=N.Ry({postText:N.Z_().required("Required")}),I={postText:""},A=function(t){return(0,h.jsx)(k.J9,{initialValues:I,onSubmit:function(s,e){e.resetForm(),console.log(s),t.onAddPost(s.postText)},validationSchema:y,children:function(t){return(0,h.jsxs)(k.l0,{className:v,children:[(0,h.jsx)(b.g,{control:"textarea",name:"postText",noError:!0,placeholder:"Your post"}),(0,h.jsx)("button",{type:"submit",disabled:!t.isValid,className:"".concat(g," btn"),children:"Post"})]})}})},M=function(t){var s=(0,_.Z)(t.posts).reverse().map((function(t){return(0,h.jsx)(C,{message:t.message,likesCount:t.likesCount},t.id)}));return(0,h.jsxs)("div",{children:[(0,h.jsx)("h3",{className:m,children:"My posts"}),(0,h.jsx)(A,{onAddPost:function(s){t.addPost(s)}}),s]})},T=e(7800),D=(0,T.$j)((function(t){return{posts:t.profilePage.posts}}),(function(t){return{addPost:function(s){t((0,j.Wl)(s))}}}))(M),F=function(t){return(0,h.jsxs)("div",{className:c.content,children:[(0,h.jsx)(x,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),(0,h.jsx)(D,{store:t.store})]})},q=e(9131),R=e(1759),B=e(6743),E=function(t){(0,i.Z)(e,t);var s=(0,o.Z)(e);function e(){return(0,r.Z)(this,e),s.apply(this,arguments)}return(0,u.Z)(e,[{key:"componentDidMount",value:function(){var t=this.props.router.params.profileId;t||(t=this.props.userId),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return(0,h.jsx)(F,(0,n.Z)((0,n.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),e}(a.Component),J=(0,B.qC)((0,T.$j)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,userId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:j.et,getStatus:j.lR,updateStatus:j.Nf}),q.Z,R.D)(E)},1759:function(t,s,e){e.d(s,{D:function(){return f}});var n=e(8185),r=e(7242),u=e(2032),i=e(5295),o=e(943),a=e(7124),c=e(4042),l=e(7800),p=e(9131),d=e(7522),h=function(t){return{isAuth:t.auth.isAuth,userId:t.auth.userId}},f=function(t){var s=function(s){(0,i.Z)(a,s);var e=(0,o.Z)(a);function a(){return(0,r.Z)(this,a),e.apply(this,arguments)}return(0,u.Z)(a,[{key:"render",value:function(){return this.props.isAuth||this.props.router.params.profileId?(0,d.jsx)(t,(0,n.Z)({},this.props)):(0,d.jsx)(c.Fg,{to:"/login"})}}]),a}(a.Component);return(0,p.Z)((0,l.$j)(h)(s))}}}]);
//# sourceMappingURL=124.096e233b.chunk.js.map