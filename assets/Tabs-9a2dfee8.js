import{d as G,x as E,aU as ut,aV as vt,l as f,aZ as Ce,bJ as gt,bK as oe,bL as ht,P as u,Q as o,W as mt,T as n,R as y,V as xt,bl as yt,Y as ke,X as ne,aM as wt,b as U,a0 as Be,a1 as F,az as K,a5 as Ee,bM as zt,$ as L,O as Ct,aa as St,z as Le,bN as Rt,al as $t,F as Tt,a3 as Pt,a2 as _t,bq as Wt,b5 as kt,bs as Se,bC as pe,aK as Bt,C as ue,ae as Et,ab as M,bO as Lt,bh as At,aY as Re,bP as jt,ad as ve,am as Ot,an as It,bQ as Ht,ak as Ft}from"./index-96c4aac7.js";import{g as Y}from"./index-567e13ca.js";import{A as Mt}from"./Add-e7e8df74.js";const Dt=Ce(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[Ce("&::-webkit-scrollbar",{width:0,height:0})]),Vt=G({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=E(null);function r(c){!(c.currentTarget.offsetWidth<c.currentTarget.scrollWidth)||c.deltaY===0||(c.currentTarget.scrollLeft+=c.deltaY+c.deltaX,c.preventDefault())}const d=ut();return Dt.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:vt,ssr:d}),Object.assign({selfRef:e,handleWheel:r},{scrollTo(...c){var x;(x=e.value)===null||x===void 0||x.scrollTo(...c)}})},render(){return f("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});var Nt=/\s/;function Ut(e){for(var r=e.length;r--&&Nt.test(e.charAt(r)););return r}var Xt=/^\s+/;function Kt(e){return e&&e.slice(0,Ut(e)+1).replace(Xt,"")}var $e=0/0,Yt=/^[-+]0x[0-9a-f]+$/i,Gt=/^0b[01]+$/i,qt=/^0o[0-7]+$/i,Jt=parseInt;function Te(e){if(typeof e=="number")return e;if(gt(e))return $e;if(oe(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=oe(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=Kt(e);var d=Gt.test(e);return d||qt.test(e)?Jt(e.slice(2),d?2:8):Yt.test(e)?$e:+e}var Qt=function(){return ht.Date.now()};const ge=Qt;var Zt="Expected a function",ea=Math.max,ta=Math.min;function aa(e,r,d){var i,c,x,h,g,v,l=0,w=!1,C=!1,z=!0;if(typeof e!="function")throw new TypeError(Zt);r=Te(r)||0,oe(d)&&(w=!!d.leading,C="maxWait"in d,x=C?ea(Te(d.maxWait)||0,r):x,z="trailing"in d?!!d.trailing:z);function S(p){var T=i,O=c;return i=c=void 0,l=p,h=e.apply(O,T),h}function R(p){return l=p,g=setTimeout(W,r),w?S(p):h}function _(p){var T=p-v,O=p-l,H=r-T;return C?ta(H,x-O):H}function P(p){var T=p-v,O=p-l;return v===void 0||T>=r||T<0||C&&O>=x}function W(){var p=ge();if(P(p))return $(p);g=setTimeout(W,_(p))}function $(p){return g=void 0,z&&i?S(p):(i=c=void 0,h)}function k(){g!==void 0&&clearTimeout(g),l=0,i=v=c=g=void 0}function A(){return g===void 0?h:$(ge())}function m(){var p=ge(),T=P(p);if(i=arguments,c=this,v=p,T){if(g===void 0)return R(v);if(C)return clearTimeout(g),g=setTimeout(W,r),S(v)}return g===void 0&&(g=setTimeout(W,r)),h}return m.cancel=k,m.flush=A,m}var ra="Expected a function";function he(e,r,d){var i=!0,c=!0;if(typeof e!="function")throw new TypeError(ra);return oe(d)&&(i="leading"in d?!!d.leading:i,c="trailing"in d?!!d.trailing:c),aa(e,r,{leading:i,maxWait:r,trailing:c})}const oa=u([o("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[mt({background:"var(--n-color-modal)"}),n("hoverable",[u("&:hover","box-shadow: var(--n-box-shadow);")]),n("content-segmented",[u(">",[y("content",{paddingTop:"var(--n-padding-bottom)"})])]),n("content-soft-segmented",[u(">",[y("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),n("footer-segmented",[u(">",[y("footer",{paddingTop:"var(--n-padding-bottom)"})])]),n("footer-soft-segmented",[u(">",[y("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),u(">",[o("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[y("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),y("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),y("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),y("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),y("content","flex: 1; min-width: 0;"),y("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[u("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),y("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),o("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[u("img",`
 display: block;
 width: 100%;
 `)]),n("bordered",`
 border: 1px solid var(--n-border-color);
 `,[u("&:target","border-color: var(--n-color-target);")]),n("action-segmented",[u(">",[y("action",[u("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),n("content-segmented, content-soft-segmented",[u(">",[y("content",{transition:"border-color 0.3s var(--n-bezier)"},[u("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),n("footer-segmented, footer-soft-segmented",[u(">",[y("footer",{transition:"border-color 0.3s var(--n-bezier)"},[u("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),n("embedded",`
 background-color: var(--n-color-embedded);
 `)]),xt(o("card",`
 background: var(--n-color-modal);
 `,[n("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),yt(o("card",`
 background: var(--n-color-popover);
 `,[n("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),Ae={title:String,contentStyle:[Object,String],headerStyle:[Object,String],headerExtraStyle:[Object,String],footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"}},fa=Ct(Ae),na=Object.assign(Object.assign({},ne.props),Ae),pa=G({name:"Card",props:na,setup(e){const r=()=>{const{onClose:l}=e;l&&K(l)},{inlineThemeDisabled:d,mergedClsPrefixRef:i,mergedRtlRef:c}=ke(e),x=ne("Card","-card",oa,zt,e,i),h=wt("Card",c,i),g=U(()=>{const{size:l}=e,{self:{color:w,colorModal:C,colorTarget:z,textColor:S,titleTextColor:R,titleFontWeight:_,borderColor:P,actionColor:W,borderRadius:$,lineHeight:k,closeIconColor:A,closeIconColorHover:m,closeIconColorPressed:p,closeColorHover:T,closeColorPressed:O,closeBorderRadius:H,closeIconSize:q,closeSize:D,boxShadow:X,colorPopover:I,colorEmbedded:ie,colorEmbeddedModal:se,colorEmbeddedPopover:le,[L("padding",l)]:J,[L("fontSize",l)]:Q,[L("titleFontSize",l)]:de},common:{cubicBezierEaseInOut:ce}}=x.value,{top:be,left:Z,bottom:ee}=Y(J);return{"--n-bezier":ce,"--n-border-radius":$,"--n-color":w,"--n-color-modal":C,"--n-color-popover":I,"--n-color-embedded":ie,"--n-color-embedded-modal":se,"--n-color-embedded-popover":le,"--n-color-target":z,"--n-text-color":S,"--n-line-height":k,"--n-action-color":W,"--n-title-text-color":R,"--n-title-font-weight":_,"--n-close-icon-color":A,"--n-close-icon-color-hover":m,"--n-close-icon-color-pressed":p,"--n-close-color-hover":T,"--n-close-color-pressed":O,"--n-border-color":P,"--n-box-shadow":X,"--n-padding-top":be,"--n-padding-bottom":ee,"--n-padding-left":Z,"--n-font-size":Q,"--n-title-font-size":de,"--n-close-size":D,"--n-close-icon-size":q,"--n-close-border-radius":H}}),v=d?Be("card",U(()=>e.size[0]),g,e):void 0;return{rtlEnabled:h,mergedClsPrefix:i,mergedTheme:x,handleCloseClick:r,cssVars:d?void 0:g,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender}},render(){const{segmented:e,bordered:r,hoverable:d,mergedClsPrefix:i,rtlEnabled:c,onRender:x,embedded:h,tag:g,$slots:v}=this;return x==null||x(),f(g,{class:[`${i}-card`,this.themeClass,h&&`${i}-card--embedded`,{[`${i}-card--rtl`]:c,[`${i}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${i}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${i}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${i}-card--bordered`]:r,[`${i}-card--hoverable`]:d}],style:this.cssVars,role:this.role},F(v.cover,l=>l&&f("div",{class:`${i}-card-cover`,role:"none"},l)),F(v.header,l=>l||this.title||this.closable?f("div",{class:`${i}-card-header`,style:this.headerStyle},f("div",{class:`${i}-card-header__main`,role:"heading"},l||this.title),F(v["header-extra"],w=>w&&f("div",{class:`${i}-card-header__extra`,style:this.headerExtraStyle},w)),this.closable?f(Ee,{clsPrefix:i,class:`${i}-card-header__close`,onClick:this.handleCloseClick,absolute:!0}):null):null),F(v.default,l=>l&&f("div",{class:`${i}-card__content`,style:this.contentStyle,role:"none"},l)),F(v.footer,l=>l&&[f("div",{class:`${i}-card__footer`,style:this.footerStyle,role:"none"},l)]),F(v.action,l=>l&&f("div",{class:`${i}-card__action`,role:"none"},l)))}}),ye=St("n-tabs"),je={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},ua=G({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:je,setup(e){const r=Le(ye,null);return r||Rt("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:r.paneStyleRef,class:r.paneClassRef,mergedClsPrefix:r.mergedClsPrefixRef}},render(){return f("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),ia=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},Wt(je,["displayDirective"])),xe=G({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:ia,setup(e){const{mergedClsPrefixRef:r,valueRef:d,typeRef:i,closableRef:c,tabStyleRef:x,tabChangeIdRef:h,onBeforeLeaveRef:g,triggerRef:v,handleAdd:l,activateTab:w,handleClose:C}=Le(ye);return{trigger:v,mergedClosable:U(()=>{if(e.internalAddable)return!1;const{closable:z}=e;return z===void 0?c.value:z}),style:x,clsPrefix:r,value:d,type:i,handleClose(z){z.stopPropagation(),!e.disabled&&C(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){l();return}const{name:z}=e,S=++h.id;if(z!==d.value){const{value:R}=g;R?Promise.resolve(R(e.name,d.value)).then(_=>{_&&h.id===S&&w(z)}):w(z)}}}},render(){const{internalAddable:e,clsPrefix:r,name:d,disabled:i,label:c,tab:x,value:h,mergedClosable:g,style:v,trigger:l,$slots:{default:w}}=this,C=c??x;return f("div",{class:`${r}-tabs-tab-wrapper`},this.internalLeftPadded?f("div",{class:`${r}-tabs-tab-pad`}):null,f("div",Object.assign({key:d,"data-name":d,"data-disabled":i?!0:void 0},$t({class:[`${r}-tabs-tab`,h===d&&`${r}-tabs-tab--active`,i&&`${r}-tabs-tab--disabled`,g&&`${r}-tabs-tab--closable`,e&&`${r}-tabs-tab--addable`],onClick:l==="click"?this.activateTab:void 0,onMouseenter:l==="hover"?this.activateTab:void 0,style:e?void 0:v},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),f("span",{class:`${r}-tabs-tab__label`},e?f(Tt,null,f("div",{class:`${r}-tabs-tab__height-placeholder`}," "),f(Pt,{clsPrefix:r},{default:()=>f(Mt,null)})):w?w():typeof C=="object"?C:_t(C??d)),g&&this.type==="card"?f(Ee,{clsPrefix:r,class:`${r}-tabs-tab__close`,onClick:this.handleClose,disabled:i}):null))}}),sa=o("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[n("segment-type",[o("tabs-rail",[u("&.transition-disabled","color: red;",[o("tabs-tab",`
 transition: none;
 `)])])]),n("top",[o("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),n("left",[o("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),n("left, right",`
 flex-direction: row;
 `,[o("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),o("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),n("right",`
 flex-direction: row-reverse;
 `,[o("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),o("tabs-bar",`
 left: 0;
 `)]),n("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[o("tab-pane",`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),o("tabs-bar",`
 top: 0;
 `)]),o("tabs-rail",`
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[o("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[o("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[n("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 `),u("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),n("flex",[o("tabs-nav",{width:"100%"},[o("tabs-wrapper",{width:"100%"},[o("tabs-tab",{marginRight:0})])])]),o("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[y("prefix, suffix",`
 display: flex;
 align-items: center;
 `),y("prefix","padding-right: 16px;"),y("suffix","padding-left: 16px;")]),n("top, bottom",[o("tabs-nav-scroll-wrapper",[u("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),u("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),n("shadow-start",[u("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),n("shadow-end",[u("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])]),n("left, right",[o("tabs-nav-scroll-wrapper",[u("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),u("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),n("shadow-start",[u("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),n("shadow-end",[u("&::after",`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])]),o("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[o("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[u("&::-webkit-scrollbar",`
 width: 0;
 height: 0;
 `)]),u("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),o("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),o("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),o("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),o("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[n("disabled",{cursor:"not-allowed"}),y("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),y("label",`
 display: flex;
 align-items: center;
 `)]),o("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[u("&.transition-disabled",`
 transition: none;
 `),n("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),o("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),o("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[u("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),u("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),u("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),u("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),u("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),o("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),n("line-type, bar-type",[o("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[u("&:hover",{color:"var(--n-tab-text-color-hover)"}),n("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),n("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),o("tabs-nav",[n("line-type",[n("top",[y("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),o("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),o("tabs-bar",`
 bottom: -1px;
 `)]),n("left",[y("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),o("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),o("tabs-bar",`
 right: -1px;
 `)]),n("right",[y("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),o("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),o("tabs-bar",`
 left: -1px;
 `)]),n("bottom",[y("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),o("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),o("tabs-bar",`
 top: -1px;
 `)]),y("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),o("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),o("tabs-bar",`
 border-radius: 0;
 `)]),n("card-type",[y("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),o("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),o("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 `),o("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[n("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[y("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),kt("disabled",[u("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),n("closable","padding-right: 8px;"),n("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),n("disabled","color: var(--n-tab-text-color-disabled);")]),o("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")]),n("left, right",[o("tabs-wrapper",`
 flex-direction: column;
 `,[o("tabs-tab-wrapper",`
 flex-direction: column;
 `,[o("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])])]),n("top",[n("card-type",[o("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[n("active",`
 border-bottom: 1px solid #0000;
 `)]),o("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),n("left",[n("card-type",[o("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[n("active",`
 border-right: 1px solid #0000;
 `)]),o("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),n("right",[n("card-type",[o("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[n("active",`
 border-left: 1px solid #0000;
 `)]),o("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),n("bottom",[n("card-type",[o("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[n("active",`
 border-top: 1px solid #0000;
 `)]),o("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),la=Object.assign(Object.assign({},ne.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),va=G({name:"Tabs",props:la,setup(e,{slots:r}){var d,i,c,x;const{mergedClsPrefixRef:h,inlineThemeDisabled:g}=ke(e),v=ne("Tabs","-tabs",sa,jt,e,h),l=E(null),w=E(null),C=E(null),z=E(null),S=E(null),R=E(!0),_=E(!0),P=Se(e,["labelSize","size"]),W=Se(e,["activeName","value"]),$=E((i=(d=W.value)!==null&&d!==void 0?d:e.defaultValue)!==null&&i!==void 0?i:r.default?(x=(c=pe(r.default())[0])===null||c===void 0?void 0:c.props)===null||x===void 0?void 0:x.name:null),k=Bt(W,$),A={id:0},m=U(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});ue(k,()=>{A.id=0,H(),q()});function p(){var t;const{value:a}=k;return a===null?null:(t=l.value)===null||t===void 0?void 0:t.querySelector(`[data-name="${a}"]`)}function T(t){if(e.type==="card")return;const{value:a}=w;if(a&&t){const s=`${h.value}-tabs-bar--disabled`,{barWidth:b,placement:B}=e;if(t.dataset.disabled==="true"?a.classList.add(s):a.classList.remove(s),["top","bottom"].includes(B)){if(O(["top","maxHeight","height"]),typeof b=="number"&&t.offsetWidth>=b){const j=Math.floor((t.offsetWidth-b)/2)+t.offsetLeft;a.style.left=`${j}px`,a.style.maxWidth=`${b}px`}else a.style.left=`${t.offsetLeft}px`,a.style.maxWidth=`${t.offsetWidth}px`;a.style.width="8192px",a.offsetWidth}else{if(O(["left","maxWidth","width"]),typeof b=="number"&&t.offsetHeight>=b){const j=Math.floor((t.offsetHeight-b)/2)+t.offsetTop;a.style.top=`${j}px`,a.style.maxHeight=`${b}px`}else a.style.top=`${t.offsetTop}px`,a.style.maxHeight=`${t.offsetHeight}px`;a.style.height="8192px",a.offsetHeight}}}function O(t){const{value:a}=w;if(a)for(const s of t)a.style[s]=""}function H(){if(e.type==="card")return;const t=p();t&&T(t)}function q(t){var a;const s=(a=S.value)===null||a===void 0?void 0:a.$el;if(!s)return;const b=p();if(!b)return;const{scrollLeft:B,offsetWidth:j}=s,{offsetLeft:N,offsetWidth:ae}=b;B>N?s.scrollTo({top:0,left:N,behavior:"smooth"}):N+ae>B+j&&s.scrollTo({top:0,left:N+ae-j,behavior:"smooth"})}const D=E(null);let X=0,I=null;function ie(t){const a=D.value;if(a){X=t.getBoundingClientRect().height;const s=`${X}px`,b=()=>{a.style.height=s,a.style.maxHeight=s};I?(b(),I(),I=null):I=b}}function se(t){const a=D.value;if(a){const s=t.getBoundingClientRect().height,b=()=>{document.body.offsetHeight,a.style.maxHeight=`${s}px`,a.style.height=`${Math.max(X,s)}px`};I?(I(),I=null,b()):I=b}}function le(){const t=D.value;if(t){t.style.maxHeight="",t.style.height="";const{paneWrapperStyle:a}=e;if(typeof a=="string")t.style.cssText=a;else if(a){const{maxHeight:s,height:b}=a;s!==void 0&&(t.style.maxHeight=s),b!==void 0&&(t.style.height=b)}}}const J={value:[]},Q=E("next");function de(t){const a=k.value;let s="next";for(const b of J.value){if(b===a)break;if(b===t){s="prev";break}}Q.value=s,ce(t)}function ce(t){const{onActiveNameChange:a,onUpdateValue:s,"onUpdate:value":b}=e;a&&K(a,t),s&&K(s,t),b&&K(b,t),$.value=t}function be(t){const{onClose:a}=e;a&&K(a,t)}function Z(){const{value:t}=w;if(!t)return;const a="transition-disabled";t.classList.add(a),H(),t.classList.remove(a)}let ee=0;function Oe(t){var a;if(t.contentRect.width===0&&t.contentRect.height===0||ee===t.contentRect.width)return;ee=t.contentRect.width;const{type:s}=e;(s==="line"||s==="bar")&&Z(),s!=="segment"&&fe((a=S.value)===null||a===void 0?void 0:a.$el)}const Ie=he(Oe,64);ue([()=>e.justifyContent,()=>e.size],()=>{ve(()=>{const{type:t}=e;(t==="line"||t==="bar")&&Z()})});const te=E(!1);function He(t){var a;const{target:s,contentRect:{width:b}}=t,B=s.parentElement.offsetWidth;if(!te.value)B<b&&(te.value=!0);else{const{value:j}=z;if(!j)return;B-b>j.$el.offsetWidth&&(te.value=!1)}fe((a=S.value)===null||a===void 0?void 0:a.$el)}const Fe=he(He,64);function Me(){const{onAdd:t}=e;t&&t(),ve(()=>{const a=p(),{value:s}=S;!a||!s||s.scrollTo({left:a.offsetLeft,top:0,behavior:"smooth"})})}function fe(t){if(!t)return;const{placement:a}=e;if(a==="top"||a==="bottom"){const{scrollLeft:s,scrollWidth:b,offsetWidth:B}=t;R.value=s<=0,_.value=s+B>=b}else{const{scrollTop:s,scrollHeight:b,offsetHeight:B}=t;R.value=s<=0,_.value=s+B>=b}}const De=he(t=>{fe(t.target)},64);Et(ye,{triggerRef:M(e,"trigger"),tabStyleRef:M(e,"tabStyle"),paneClassRef:M(e,"paneClass"),paneStyleRef:M(e,"paneStyle"),mergedClsPrefixRef:h,typeRef:M(e,"type"),closableRef:M(e,"closable"),valueRef:k,tabChangeIdRef:A,onBeforeLeaveRef:M(e,"onBeforeLeave"),activateTab:de,handleClose:be,handleAdd:Me}),Lt(()=>{H(),q()}),At(()=>{const{value:t}=C;if(!t)return;const{value:a}=h,s=`${a}-tabs-nav-scroll-wrapper--shadow-start`,b=`${a}-tabs-nav-scroll-wrapper--shadow-end`;R.value?t.classList.remove(s):t.classList.add(s),_.value?t.classList.remove(b):t.classList.add(b)});const we=E(null);ue(k,()=>{if(e.type==="segment"){const t=we.value;t&&ve(()=>{t.classList.add("transition-disabled"),t.offsetWidth,t.classList.remove("transition-disabled")})}});const Ve={syncBarPosition:()=>{H()}},ze=U(()=>{const{value:t}=P,{type:a}=e,s={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[a],b=`${t}${s}`,{self:{barColor:B,closeIconColor:j,closeIconColorHover:N,closeIconColorPressed:ae,tabColor:Ne,tabBorderColor:Ue,paneTextColor:Xe,tabFontWeight:Ke,tabBorderRadius:Ye,tabFontWeightActive:Ge,colorSegment:qe,fontWeightStrong:Je,tabColorSegment:Qe,closeSize:Ze,closeIconSize:et,closeColorHover:tt,closeColorPressed:at,closeBorderRadius:rt,[L("panePadding",t)]:re,[L("tabPadding",b)]:ot,[L("tabPaddingVertical",b)]:nt,[L("tabGap",b)]:it,[L("tabGap",`${b}Vertical`)]:st,[L("tabTextColor",a)]:lt,[L("tabTextColorActive",a)]:dt,[L("tabTextColorHover",a)]:ct,[L("tabTextColorDisabled",a)]:bt,[L("tabFontSize",t)]:ft},common:{cubicBezierEaseInOut:pt}}=v.value;return{"--n-bezier":pt,"--n-color-segment":qe,"--n-bar-color":B,"--n-tab-font-size":ft,"--n-tab-text-color":lt,"--n-tab-text-color-active":dt,"--n-tab-text-color-disabled":bt,"--n-tab-text-color-hover":ct,"--n-pane-text-color":Xe,"--n-tab-border-color":Ue,"--n-tab-border-radius":Ye,"--n-close-size":Ze,"--n-close-icon-size":et,"--n-close-color-hover":tt,"--n-close-color-pressed":at,"--n-close-border-radius":rt,"--n-close-icon-color":j,"--n-close-icon-color-hover":N,"--n-close-icon-color-pressed":ae,"--n-tab-color":Ne,"--n-tab-font-weight":Ke,"--n-tab-font-weight-active":Ge,"--n-tab-padding":ot,"--n-tab-padding-vertical":nt,"--n-tab-gap":it,"--n-tab-gap-vertical":st,"--n-pane-padding-left":Y(re,"left"),"--n-pane-padding-right":Y(re,"right"),"--n-pane-padding-top":Y(re,"top"),"--n-pane-padding-bottom":Y(re,"bottom"),"--n-font-weight-strong":Je,"--n-tab-color-segment":Qe}}),V=g?Be("tabs",U(()=>`${P.value[0]}${e.type[0]}`),ze,e):void 0;return Object.assign({mergedClsPrefix:h,mergedValue:k,renderedNames:new Set,tabsRailElRef:we,tabsPaneWrapperRef:D,tabsElRef:l,barElRef:w,addTabInstRef:z,xScrollInstRef:S,scrollWrapperElRef:C,addTabFixed:te,tabWrapperStyle:m,handleNavResize:Ie,mergedSize:P,handleScroll:De,handleTabsResize:Fe,cssVars:g?void 0:ze,themeClass:V==null?void 0:V.themeClass,animationDirection:Q,renderNameListRef:J,onAnimationBeforeLeave:ie,onAnimationEnter:se,onAnimationAfterEnter:le,onRender:V==null?void 0:V.onRender},Ve)},render(){const{mergedClsPrefix:e,type:r,placement:d,addTabFixed:i,addable:c,mergedSize:x,renderNameListRef:h,onRender:g,paneWrapperClass:v,paneWrapperStyle:l,$slots:{default:w,prefix:C,suffix:z}}=this;g==null||g();const S=w?pe(w()).filter(m=>m.type.__TAB_PANE__===!0):[],R=w?pe(w()).filter(m=>m.type.__TAB__===!0):[],_=!R.length,P=r==="card",W=r==="segment",$=!P&&!W&&this.justifyContent;h.value=[];const k=()=>{const m=f("div",{style:this.tabWrapperStyle,class:[`${e}-tabs-wrapper`]},$?null:f("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),_?S.map((p,T)=>(h.value.push(p.props.name),me(f(xe,Object.assign({},p.props,{internalCreatedByPane:!0,internalLeftPadded:T!==0&&(!$||$==="center"||$==="start"||$==="end")}),p.children?{default:p.children.tab}:void 0)))):R.map((p,T)=>(h.value.push(p.props.name),me(T!==0&&!$?We(p):p))),!i&&c&&P?_e(c,(_?S.length:R.length)!==0):null,$?null:f("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return f("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},P&&c?f(Re,{onResize:this.handleTabsResize},{default:()=>m}):m,P?f("div",{class:`${e}-tabs-pad`}):null,P?null:f("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},A=W?"top":d;return f("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${r}-type`,`${e}-tabs--${x}-size`,$&&`${e}-tabs--flex`,`${e}-tabs--${A}`],style:this.cssVars},f("div",{class:[`${e}-tabs-nav--${r}-type`,`${e}-tabs-nav--${A}`,`${e}-tabs-nav`]},F(C,m=>m&&f("div",{class:`${e}-tabs-nav__prefix`},m)),W?f("div",{class:`${e}-tabs-rail`,ref:"tabsRailElRef"},_?S.map((m,p)=>(h.value.push(m.props.name),f(xe,Object.assign({},m.props,{internalCreatedByPane:!0,internalLeftPadded:p!==0}),m.children?{default:m.children.tab}:void 0))):R.map((m,p)=>(h.value.push(m.props.name),p===0?m:We(m)))):f(Re,{onResize:this.handleNavResize},{default:()=>f("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(A)?f(Vt,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:k}):f("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll},k()))}),i&&c&&P?_e(c,!0):null,F(z,m=>m&&f("div",{class:`${e}-tabs-nav__suffix`},m))),_&&(this.animated&&(A==="top"||A==="bottom")?f("div",{ref:"tabsPaneWrapperRef",style:l,class:[`${e}-tabs-pane-wrapper`,v]},Pe(S,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Pe(S,this.mergedValue,this.renderedNames)))}});function Pe(e,r,d,i,c,x,h){const g=[];return e.forEach(v=>{const{name:l,displayDirective:w,"display-directive":C}=v.props,z=R=>w===R||C===R,S=r===l;if(v.key!==void 0&&(v.key=l),S||z("show")||z("show:lazy")&&d.has(l)){d.has(l)||d.add(l);const R=!z("if");g.push(R?Ot(v,[[It,S]]):v)}}),h?f(Ht,{name:`${h}-transition`,onBeforeLeave:i,onEnter:c,onAfterEnter:x},{default:()=>g}):g}function _e(e,r){return f(xe,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:r,disabled:typeof e=="object"&&e.disabled})}function We(e){const r=Ft(e);return r.props?r.props.internalLeftPadded=!0:r.props={internalLeftPadded:!0},r}function me(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}export{pa as _,ua as a,va as b,Ae as c,fa as d};
