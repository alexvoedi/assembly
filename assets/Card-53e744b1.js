import{V as n,W as c,$ as G,Y as a,X as t,Z as J,br as Q,d as U,a1 as ee,a0 as x,aT as oe,b as u,a4 as re,m as s,a5 as i,aD as ne,a9 as te,bZ as de,a3 as h,bg as ae,T as se}from"./index-e716d3d9.js";const le=n([c("card",`
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
 `,[G({background:"var(--n-color-modal)"}),a("hoverable",[n("&:hover","box-shadow: var(--n-box-shadow);")]),a("content-segmented",[n(">",[t("content",{paddingTop:"var(--n-padding-bottom)"})])]),a("content-soft-segmented",[n(">",[t("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),a("footer-segmented",[n(">",[t("footer",{paddingTop:"var(--n-padding-bottom)"})])]),a("footer-soft-segmented",[n(">",[t("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),n(">",[c("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[t("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),t("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),t("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),t("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),t("content","flex: 1; min-width: 0;"),t("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[n("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),t("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),c("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[n("img",`
 display: block;
 width: 100%;
 `)]),a("bordered",`
 border: 1px solid var(--n-border-color);
 `,[n("&:target","border-color: var(--n-color-target);")]),a("action-segmented",[n(">",[t("action",[n("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),a("content-segmented, content-soft-segmented",[n(">",[t("content",{transition:"border-color 0.3s var(--n-bezier)"},[n("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),a("footer-segmented, footer-soft-segmented",[n(">",[t("footer",{transition:"border-color 0.3s var(--n-bezier)"},[n("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),a("embedded",`
 background-color: var(--n-color-embedded);
 `)]),J(c("card",`
 background: var(--n-color-modal);
 `,[a("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),Q(c("card",`
 background: var(--n-color-popover);
 `,[a("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),z={title:String,contentStyle:[Object,String],headerStyle:[Object,String],headerExtraStyle:[Object,String],footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"}},be=se(z),ie=Object.assign(Object.assign({},x.props),z),ge=U({name:"Card",props:ie,setup(r){const f=()=>{const{onClose:o}=r;o&&ne(o)},{inlineThemeDisabled:b,mergedClsPrefixRef:e,mergedRtlRef:m}=ee(r),l=x("Card","-card",le,de,r,e),p=oe("Card",m,e),g=u(()=>{const{size:o}=r,{self:{color:v,colorModal:C,colorTarget:y,textColor:S,titleTextColor:k,titleFontWeight:$,borderColor:w,actionColor:_,borderRadius:T,lineHeight:B,closeIconColor:P,closeIconColorHover:R,closeIconColorPressed:E,closeColorHover:O,closeColorPressed:j,closeBorderRadius:M,closeIconSize:I,closeSize:F,boxShadow:H,colorPopover:V,colorEmbedded:W,colorEmbeddedModal:D,colorEmbeddedPopover:K,[h("padding",o)]:L,[h("fontSize",o)]:Z,[h("titleFontSize",o)]:A},common:{cubicBezierEaseInOut:N}}=l.value,{top:X,left:Y,bottom:q}=ae(L);return{"--n-bezier":N,"--n-border-radius":T,"--n-color":v,"--n-color-modal":C,"--n-color-popover":V,"--n-color-embedded":W,"--n-color-embedded-modal":D,"--n-color-embedded-popover":K,"--n-color-target":y,"--n-text-color":S,"--n-line-height":B,"--n-action-color":_,"--n-title-text-color":k,"--n-title-font-weight":$,"--n-close-icon-color":P,"--n-close-icon-color-hover":R,"--n-close-icon-color-pressed":E,"--n-close-color-hover":O,"--n-close-color-pressed":j,"--n-border-color":w,"--n-box-shadow":H,"--n-padding-top":X,"--n-padding-bottom":q,"--n-padding-left":Y,"--n-font-size":Z,"--n-title-font-size":A,"--n-close-size":F,"--n-close-icon-size":I,"--n-close-border-radius":M}}),d=b?re("card",u(()=>r.size[0]),g,r):void 0;return{rtlEnabled:p,mergedClsPrefix:e,mergedTheme:l,handleCloseClick:f,cssVars:b?void 0:g,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){const{segmented:r,bordered:f,hoverable:b,mergedClsPrefix:e,rtlEnabled:m,onRender:l,embedded:p,tag:g,$slots:d}=this;return l==null||l(),s(g,{class:[`${e}-card`,this.themeClass,p&&`${e}-card--embedded`,{[`${e}-card--rtl`]:m,[`${e}-card--content${typeof r!="boolean"&&r.content==="soft"?"-soft":""}-segmented`]:r===!0||r!==!1&&r.content,[`${e}-card--footer${typeof r!="boolean"&&r.footer==="soft"?"-soft":""}-segmented`]:r===!0||r!==!1&&r.footer,[`${e}-card--action-segmented`]:r===!0||r!==!1&&r.action,[`${e}-card--bordered`]:f,[`${e}-card--hoverable`]:b}],style:this.cssVars,role:this.role},i(d.cover,o=>o&&s("div",{class:`${e}-card-cover`,role:"none"},o)),i(d.header,o=>o||this.title||this.closable?s("div",{class:`${e}-card-header`,style:this.headerStyle},s("div",{class:`${e}-card-header__main`,role:"heading"},o||this.title),i(d["header-extra"],v=>v&&s("div",{class:`${e}-card-header__extra`,style:this.headerExtraStyle},v)),this.closable?s(te,{clsPrefix:e,class:`${e}-card-header__close`,onClick:this.handleCloseClick,absolute:!0}):null):null),i(d.default,o=>o&&s("div",{class:`${e}-card__content`,style:this.contentStyle,role:"none"},o)),i(d.footer,o=>o&&[s("div",{class:`${e}-card__footer`,style:this.footerStyle,role:"none"},o)]),i(d.action,o=>o&&s("div",{class:`${e}-card__action`,role:"none"},o)))}});export{ge as _,be as a,z as c};
