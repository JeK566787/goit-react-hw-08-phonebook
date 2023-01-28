"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[501],{501:function(e,l,r){r.r(l),r.d(l,{default:function(){return p}});var i=r(896),n=r(9439),a=r(7697),t=r(4224),o=r(2791),s=r(1405),d=r(7689),u=r(9273),c=r(184),v=function(){var e=(0,o.useState)(""),l=(0,n.Z)(e,2),r=l[0],i=l[1],v=(0,o.useState)(""),p=(0,n.Z)(v,2),m=p[0],h=p[1],f=(0,s.I0)(),b=(0,d.s0)(),x=function(e){var l=e.target,r=l.name,n=l.value;"email"===r&&i(n),"password"===r&&h(n)};return(0,c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),f((0,u.Ib)({email:r,password:m})),i(""),h(""),b("/contacts")},children:[(0,c.jsx)("label",{children:(0,c.jsx)(a.I,{p:"5",borderColor:"lime",_placeholder:{opacity:1,color:"gray.500"},focusBorderColor:"lime",variant:"flushed",mt:"50px",placeholder:"Write your email",name:"email",type:"email",required:!0,value:r,onChange:x})}),(0,c.jsx)("label",{children:(0,c.jsx)(a.I,{p:"5",layerStyle:"input",borderColor:"lime",_placeholder:{opacity:1,color:"gray.500"},variant:"flushed",focusBorderColor:"lime",mt:"10px",placeholder:"Write your password",name:"password",type:"password",required:!0,value:m,onChange:x,minLength:8})}),(0,c.jsx)(t.z,{mt:"15px",type:"submit",colorScheme:"teal",variant:"outline",children:"LOG IN"})]})},p=function(){return(0,c.jsx)("section",{children:(0,c.jsxs)("div",{children:[(0,c.jsx)(i.M,{textStyle:"h2",mt:"50px",children:"Please log in"}),(0,c.jsx)(v,{})]})})}},7697:function(e,l,r){r.d(l,{I:function(){return P}});var i=r(1413),n=r(4925),a=r(9439),t=r(9886),o=r(4591),s=r(7872),d=r(9219),u=r(9477),c=r(1999),v=r(6992),p=r(2791),m=r(184),h=["id","isRequired","isInvalid","isDisabled","isReadOnly"],f=["getRootProps","htmlProps"],b=(0,t.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),x=(0,a.Z)(b,2),y=x[0],Z=x[1],g=(0,t.k)({strict:!1,name:"FormControlContext"}),I=(0,a.Z)(g,2),C=I[0],k=I[1];var R=(0,s.G)((function(e,l){var r=(0,d.jC)("Form",e),t=function(e){var l=e.id,r=e.isRequired,t=e.isInvalid,s=e.isDisabled,d=e.isReadOnly,u=(0,n.Z)(e,h),c=(0,p.useId)(),m=l||"field-".concat(c),f="".concat(m,"-label"),b="".concat(m,"-feedback"),x="".concat(m,"-helptext"),y=(0,p.useState)(!1),Z=(0,a.Z)(y,2),g=Z[0],I=Z[1],C=(0,p.useState)(!1),k=(0,a.Z)(C,2),R=k[0],j=k[1],q=(0,p.useState)(!1),F=(0,a.Z)(q,2),S=F[0],P=F[1],_=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({id:x},e),{},{ref:(0,o.lq)(l,(function(e){e&&j(!0)}))})}),[x]),O=(0,p.useCallback)((function(){var e,l,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},r),{},{ref:n,"data-focus":(0,v.PB)(S),"data-disabled":(0,v.PB)(s),"data-invalid":(0,v.PB)(t),"data-readonly":(0,v.PB)(d),id:null!=(e=r.id)?e:f,htmlFor:null!=(l=r.htmlFor)?l:m})}),[m,s,S,t,d,f]),T=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({id:b},e),{},{ref:(0,o.lq)(l,(function(e){e&&I(!0)})),"aria-live":"polite"})}),[b]),B=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)((0,i.Z)({},e),u),{},{ref:l,role:"group"})}),[u]),N=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},e),{},{ref:l,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!r,isInvalid:!!t,isReadOnly:!!d,isDisabled:!!s,isFocused:!!S,onFocus:function(){return P(!0)},onBlur:function(){return P(!1)},hasFeedbackText:g,setHasFeedbackText:I,hasHelpText:R,setHasHelpText:j,id:m,labelId:f,feedbackId:b,helpTextId:x,htmlProps:u,getHelpTextProps:_,getErrorMessageProps:T,getRootProps:B,getLabelProps:O,getRequiredIndicatorProps:N}}((0,u.Lr)(e)),s=t.getRootProps,b=(t.htmlProps,(0,n.Z)(t,f)),x=(0,v.cx)("chakra-form-control",e.className);return(0,m.jsx)(C,{value:b,children:(0,m.jsx)(y,{value:r,children:(0,m.jsx)(c.m.div,(0,i.Z)((0,i.Z)({},s({},l)),{},{className:x,__css:r.container}))})})}));R.displayName="FormControl",(0,s.G)((function(e,l){var r=k(),n=Z(),a=(0,v.cx)("chakra-form__helper-text",e.className);return(0,m.jsx)(c.m.div,(0,i.Z)((0,i.Z)({},null==r?void 0:r.getHelpTextProps(e,l)),{},{__css:n.helperText,className:a}))})).displayName="FormHelperText";var j=["isDisabled","isInvalid","isReadOnly","isRequired"],q=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function F(e){var l=function(e){var l,r,a,t=k(),o=e.id,s=e.disabled,d=e.readOnly,u=e.required,c=e.isRequired,p=e.isInvalid,m=e.isReadOnly,h=e.isDisabled,f=e.onFocus,b=e.onBlur,x=(0,n.Z)(e,q),y=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==t?void 0:t.hasFeedbackText)&&(null==t?void 0:t.isInvalid)&&y.push(t.feedbackId);(null==t?void 0:t.hasHelpText)&&y.push(t.helpTextId);return(0,i.Z)((0,i.Z)({},x),{},{"aria-describedby":y.join(" ")||void 0,id:null!=o?o:null==t?void 0:t.id,isDisabled:null!=(l=null!=s?s:h)?l:null==t?void 0:t.isDisabled,isReadOnly:null!=(r=null!=d?d:m)?r:null==t?void 0:t.isReadOnly,isRequired:null!=(a=null!=u?u:c)?a:null==t?void 0:t.isRequired,isInvalid:null!=p?p:null==t?void 0:t.isInvalid,onFocus:(0,v.v0)(null==t?void 0:t.onFocus,f),onBlur:(0,v.v0)(null==t?void 0:t.onBlur,b)})}(e),r=l.isDisabled,a=l.isInvalid,t=l.isReadOnly,o=l.isRequired,s=(0,n.Z)(l,j);return(0,i.Z)((0,i.Z)({},s),{},{disabled:r,readOnly:t,required:o,"aria-invalid":(0,v.Qm)(a),"aria-required":(0,v.Qm)(o),"aria-readonly":(0,v.Qm)(t)})}var S=["htmlSize"],P=(0,s.G)((function(e,l){var r=e.htmlSize,a=(0,n.Z)(e,S),t=(0,d.jC)("Input",a),o=F((0,u.Lr)(a)),s=(0,v.cx)("chakra-input",e.className);return(0,m.jsx)(c.m.input,(0,i.Z)((0,i.Z)({size:r},o),{},{__css:t.field,ref:l,className:s}))}));P.displayName="Input",P.id="Input"},896:function(e,l,r){r.d(l,{M:function(){return d}});var i=r(1413),n=r(4925),a=r(1999),t=r(7872),o=r(184),s=["axis"],d=(0,a.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});d.displayName="Center";var u={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}};(0,t.G)((function(e,l){var r=e.axis,t=void 0===r?"both":r,d=(0,n.Z)(e,s);return(0,o.jsx)(a.m.div,(0,i.Z)((0,i.Z)({ref:l,__css:u[t]},d),{},{position:"absolute"}))}))}}]);
//# sourceMappingURL=501.527a5774.chunk.js.map