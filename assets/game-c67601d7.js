import{b_ as Ke,b$ as ee,m as n,d as Y,R as Je,a0 as se,ae as Ie,aL as Ot,aM as Pt,c0 as _t,V as E,W as w,ax as Ee,ay as It,bc as Bt,af as D,C as H,aP as zt,G as Dt,L as Le,P as ge,H as Qe,D as ne,b as j,a1 as fe,a4 as Be,aA as Mt,aC as Ut,aq as $e,aB as Ft,au as Te,F as we,a7 as $,ar as Et,c1 as $t,v as jt,b5 as At,aI as Pe,E as Ht,ai as ze,Q as je,bm as _e,Y as U,bz as Nt,c2 as Vt,a3 as Zt,bV as be,a8 as Wt,c3 as et,aS as Xt,c4 as Gt,bs as Yt,an as qt,c5 as Ae,X as J,bq as Kt,aQ as Jt,aR as Qt,c6 as eo,c7 as to,ah as oo,aD as He,c8 as no,l as ro,o as io,c as ao,e as oe,w as ae,f as ve,h as Ne,g as lo,N as so}from"./index-4ea20c40.js";import{A as uo}from"./Add-fe71c88a.js";import{_ as co}from"./Progress-980ce18e.js";import{_ as ue}from"./Button-8586155c.js";import{N as fo}from"./headers-93aa5d29.js";function ho(e,o,t,r){var i=-1,s=e==null?0:e.length;for(r&&s&&(t=e[++i]);++i<s;)t=o(t,e[i],i,e);return t}function go(e){return function(o){return e==null?void 0:e[o]}}var vo={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},po=go(vo);const mo=po;var wo=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,bo="\\u0300-\\u036f",xo="\\ufe20-\\ufe2f",Co="\\u20d0-\\u20ff",yo=bo+xo+Co,Ro="["+yo+"]",Lo=RegExp(Ro,"g");function To(e){return e=Ke(e),e&&e.replace(wo,mo).replace(Lo,"")}var ko=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function So(e){return e.match(ko)||[]}var Oo=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function Po(e){return Oo.test(e)}var tt="\\ud800-\\udfff",_o="\\u0300-\\u036f",Io="\\ufe20-\\ufe2f",Bo="\\u20d0-\\u20ff",zo=_o+Io+Bo,ot="\\u2700-\\u27bf",nt="a-z\\xdf-\\xf6\\xf8-\\xff",Do="\\xac\\xb1\\xd7\\xf7",Mo="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Uo="\\u2000-\\u206f",Fo=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",rt="A-Z\\xc0-\\xd6\\xd8-\\xde",Eo="\\ufe0e\\ufe0f",it=Do+Mo+Uo+Fo,at="['’]",Ve="["+it+"]",$o="["+zo+"]",lt="\\d+",jo="["+ot+"]",st="["+nt+"]",dt="[^"+tt+it+lt+ot+nt+rt+"]",Ao="\\ud83c[\\udffb-\\udfff]",Ho="(?:"+$o+"|"+Ao+")",No="[^"+tt+"]",ut="(?:\\ud83c[\\udde6-\\uddff]){2}",ct="[\\ud800-\\udbff][\\udc00-\\udfff]",le="["+rt+"]",Vo="\\u200d",Ze="(?:"+st+"|"+dt+")",Zo="(?:"+le+"|"+dt+")",We="(?:"+at+"(?:d|ll|m|re|s|t|ve))?",Xe="(?:"+at+"(?:D|LL|M|RE|S|T|VE))?",ft=Ho+"?",ht="["+Eo+"]?",Wo="(?:"+Vo+"(?:"+[No,ut,ct].join("|")+")"+ht+ft+")*",Xo="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Go="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Yo=ht+ft+Wo,qo="(?:"+[jo,ut,ct].join("|")+")"+Yo,Ko=RegExp([le+"?"+st+"+"+We+"(?="+[Ve,le,"$"].join("|")+")",Zo+"+"+Xe+"(?="+[Ve,le+Ze,"$"].join("|")+")",le+"?"+Ze+"+"+We,le+"+"+Xe,Go,Xo,lt,qo].join("|"),"g");function Jo(e){return e.match(Ko)||[]}function Qo(e,o,t){return e=Ke(e),o=t?void 0:o,o===void 0?Po(e)?Jo(e):So(e):e.match(o)||[]}var en="['’]",tn=RegExp(en,"g");function on(e){return function(o){return ho(Qo(To(o).replace(tn,"")),e,"")}}var nn=on(function(e,o,t){return e+(t?"-":"")+o.toLowerCase()});const rn=nn,an=ee("attach",n("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},n("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},n("g",{fill:"currentColor","fill-rule":"nonzero"},n("path",{d:"M3.25735931,8.70710678 L7.85355339,4.1109127 C8.82986412,3.13460197 10.4127766,3.13460197 11.3890873,4.1109127 C12.365398,5.08722343 12.365398,6.67013588 11.3890873,7.64644661 L6.08578644,12.9497475 C5.69526215,13.3402718 5.06209717,13.3402718 4.67157288,12.9497475 C4.28104858,12.5592232 4.28104858,11.9260582 4.67157288,11.5355339 L9.97487373,6.23223305 C10.1701359,6.0369709 10.1701359,5.72038841 9.97487373,5.52512627 C9.77961159,5.32986412 9.4630291,5.32986412 9.26776695,5.52512627 L3.96446609,10.8284271 C3.18341751,11.6094757 3.18341751,12.8758057 3.96446609,13.6568542 C4.74551468,14.4379028 6.01184464,14.4379028 6.79289322,13.6568542 L12.0961941,8.35355339 C13.4630291,6.98671837 13.4630291,4.77064094 12.0961941,3.40380592 C10.7293591,2.0369709 8.51328163,2.0369709 7.14644661,3.40380592 L2.55025253,8 C2.35499039,8.19526215 2.35499039,8.51184464 2.55025253,8.70710678 C2.74551468,8.90236893 3.06209717,8.90236893 3.25735931,8.70710678 Z"}))))),ln=ee("trash",n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},n("path",{d:"M432,144,403.33,419.74A32,32,0,0,1,371.55,448H140.46a32,32,0,0,1-31.78-28.26L80,144",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"}),n("rect",{x:"32",y:"64",width:"448",height:"80",rx:"16",ry:"16",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"}),n("line",{x1:"312",y1:"240",x2:"200",y2:"352",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"}),n("line",{x1:"312",y1:"352",x2:"200",y2:"240",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"}))),sn=ee("download",n("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},n("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},n("g",{fill:"currentColor","fill-rule":"nonzero"},n("path",{d:"M3.5,13 L12.5,13 C12.7761424,13 13,13.2238576 13,13.5 C13,13.7454599 12.8231248,13.9496084 12.5898756,13.9919443 L12.5,14 L3.5,14 C3.22385763,14 3,13.7761424 3,13.5 C3,13.2545401 3.17687516,13.0503916 3.41012437,13.0080557 L3.5,13 L12.5,13 L3.5,13 Z M7.91012437,1.00805567 L8,1 C8.24545989,1 8.44960837,1.17687516 8.49194433,1.41012437 L8.5,1.5 L8.5,10.292 L11.1819805,7.6109127 C11.3555469,7.43734635 11.6249713,7.4180612 11.8198394,7.55305725 L11.8890873,7.6109127 C12.0626536,7.78447906 12.0819388,8.05390346 11.9469427,8.2487716 L11.8890873,8.31801948 L8.35355339,11.8535534 C8.17998704,12.0271197 7.91056264,12.0464049 7.7156945,11.9114088 L7.64644661,11.8535534 L4.1109127,8.31801948 C3.91565056,8.12275734 3.91565056,7.80617485 4.1109127,7.6109127 C4.28447906,7.43734635 4.55390346,7.4180612 4.7487716,7.55305725 L4.81801948,7.6109127 L7.5,10.292 L7.5,1.5 C7.5,1.25454011 7.67687516,1.05039163 7.91012437,1.00805567 L8,1 L7.91012437,1.00805567 Z"}))))),dn=ee("cancel",n("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},n("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},n("g",{fill:"currentColor","fill-rule":"nonzero"},n("path",{d:"M2.58859116,2.7156945 L2.64644661,2.64644661 C2.82001296,2.47288026 3.08943736,2.45359511 3.2843055,2.58859116 L3.35355339,2.64644661 L8,7.293 L12.6464466,2.64644661 C12.8417088,2.45118446 13.1582912,2.45118446 13.3535534,2.64644661 C13.5488155,2.84170876 13.5488155,3.15829124 13.3535534,3.35355339 L8.707,8 L13.3535534,12.6464466 C13.5271197,12.820013 13.5464049,13.0894374 13.4114088,13.2843055 L13.3535534,13.3535534 C13.179987,13.5271197 12.9105626,13.5464049 12.7156945,13.4114088 L12.6464466,13.3535534 L8,8.707 L3.35355339,13.3535534 C3.15829124,13.5488155 2.84170876,13.5488155 2.64644661,13.3535534 C2.45118446,13.1582912 2.45118446,12.8417088 2.64644661,12.6464466 L7.293,8 L2.64644661,3.35355339 C2.47288026,3.17998704 2.45359511,2.91056264 2.58859116,2.7156945 L2.64644661,2.64644661 L2.58859116,2.7156945 Z"}))))),un=ee("retry",n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},n("path",{d:"M320,146s24.36-12-64-12A160,160,0,1,0,416,294",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-miterlimit: 10; stroke-width: 32px;"}),n("polyline",{points:"256 58 336 138 256 218",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"}))),cn=ee("rotateClockwise",n("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n("path",{d:"M3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 12.7916 15.3658 15.2026 13 16.3265V14.5C13 14.2239 12.7761 14 12.5 14C12.2239 14 12 14.2239 12 14.5V17.5C12 17.7761 12.2239 18 12.5 18H15.5C15.7761 18 16 17.7761 16 17.5C16 17.2239 15.7761 17 15.5 17H13.8758C16.3346 15.6357 18 13.0128 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 10.2761 2.22386 10.5 2.5 10.5C2.77614 10.5 3 10.2761 3 10Z",fill:"currentColor"}),n("path",{d:"M10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12ZM10 11C9.44772 11 9 10.5523 9 10C9 9.44772 9.44772 9 10 9C10.5523 9 11 9.44772 11 10C11 10.5523 10.5523 11 10 11Z",fill:"currentColor"}))),fn=ee("rotateClockwise",n("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n("path",{d:"M17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 12.7916 4.63419 15.2026 7 16.3265V14.5C7 14.2239 7.22386 14 7.5 14C7.77614 14 8 14.2239 8 14.5V17.5C8 17.7761 7.77614 18 7.5 18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H6.12422C3.66539 15.6357 2 13.0128 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 10.2761 17.7761 10.5 17.5 10.5C17.2239 10.5 17 10.2761 17 10Z",fill:"currentColor"}),n("path",{d:"M10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12ZM10 11C10.5523 11 11 10.5523 11 10C11 9.44772 10.5523 9 10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11Z",fill:"currentColor"}))),hn=ee("zoomIn",n("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n("path",{d:"M11.5 8.5C11.5 8.22386 11.2761 8 11 8H9V6C9 5.72386 8.77614 5.5 8.5 5.5C8.22386 5.5 8 5.72386 8 6V8H6C5.72386 8 5.5 8.22386 5.5 8.5C5.5 8.77614 5.72386 9 6 9H8V11C8 11.2761 8.22386 11.5 8.5 11.5C8.77614 11.5 9 11.2761 9 11V9H11C11.2761 9 11.5 8.77614 11.5 8.5Z",fill:"currentColor"}),n("path",{d:"M8.5 3C11.5376 3 14 5.46243 14 8.5C14 9.83879 13.5217 11.0659 12.7266 12.0196L16.8536 16.1464C17.0488 16.3417 17.0488 16.6583 16.8536 16.8536C16.68 17.0271 16.4106 17.0464 16.2157 16.9114L16.1464 16.8536L12.0196 12.7266C11.0659 13.5217 9.83879 14 8.5 14C5.46243 14 3 11.5376 3 8.5C3 5.46243 5.46243 3 8.5 3ZM8.5 4C6.01472 4 4 6.01472 4 8.5C4 10.9853 6.01472 13 8.5 13C10.9853 13 13 10.9853 13 8.5C13 6.01472 10.9853 4 8.5 4Z",fill:"currentColor"}))),gn=ee("zoomOut",n("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n("path",{d:"M11 8C11.2761 8 11.5 8.22386 11.5 8.5C11.5 8.77614 11.2761 9 11 9H6C5.72386 9 5.5 8.77614 5.5 8.5C5.5 8.22386 5.72386 8 6 8H11Z",fill:"currentColor"}),n("path",{d:"M14 8.5C14 5.46243 11.5376 3 8.5 3C5.46243 3 3 5.46243 3 8.5C3 11.5376 5.46243 14 8.5 14C9.83879 14 11.0659 13.5217 12.0196 12.7266L16.1464 16.8536L16.2157 16.9114C16.4106 17.0464 16.68 17.0271 16.8536 16.8536C17.0488 16.6583 17.0488 16.3417 16.8536 16.1464L12.7266 12.0196C13.5217 11.0659 14 9.83879 14 8.5ZM4 8.5C4 6.01472 6.01472 4 8.5 4C10.9853 4 13 6.01472 13 8.5C13 10.9853 10.9853 13 8.5 13C6.01472 13 4 10.9853 4 8.5Z",fill:"currentColor"}))),vn=Y({name:"ResizeSmall",render(){return n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},n("g",{fill:"none"},n("path",{d:"M5.5 4A1.5 1.5 0 0 0 4 5.5v1a.5.5 0 0 1-1 0v-1A2.5 2.5 0 0 1 5.5 3h1a.5.5 0 0 1 0 1h-1zM16 5.5A1.5 1.5 0 0 0 14.5 4h-1a.5.5 0 0 1 0-1h1A2.5 2.5 0 0 1 17 5.5v1a.5.5 0 0 1-1 0v-1zm0 9a1.5 1.5 0 0 1-1.5 1.5h-1a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 0 2.5-2.5v-1a.5.5 0 0 0-1 0v1zm-12 0A1.5 1.5 0 0 0 5.5 16h1.25a.5.5 0 0 1 0 1H5.5A2.5 2.5 0 0 1 3 14.5v-1.25a.5.5 0 0 1 1 0v1.25zM8.5 7A1.5 1.5 0 0 0 7 8.5v3A1.5 1.5 0 0 0 8.5 13h3a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 11.5 7h-3zM8 8.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3z",fill:"currentColor"})))}}),pn=Je&&"loading"in document.createElement("img"),mn=(e={})=>{var o;const{root:t=null}=e;return{hash:`${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):(o=e.threshold)!==null&&o!==void 0?o:"0"}`,options:Object.assign(Object.assign({},e),{root:(typeof t=="string"?document.querySelector(t):t)||document.documentElement})}},ke=new WeakMap,Se=new WeakMap,Oe=new WeakMap,wn=(e,o,t)=>{if(!e)return()=>{};const r=mn(o),{root:i}=r.options;let s;const u=ke.get(i);u?s=u:(s=new Map,ke.set(i,s));let c,d;s.has(r.hash)?(d=s.get(r.hash),d[1].has(e)||(c=d[0],d[1].add(e),c.observe(e))):(c=new IntersectionObserver(h=>{h.forEach(x=>{if(x.isIntersecting){const b=Se.get(x.target),R=Oe.get(x.target);b&&b(),R&&(R.value=!0)}})},r.options),c.observe(e),d=[c,new Set([e])],s.set(r.hash,d));let a=!1;const l=()=>{a||(Se.delete(e),Oe.delete(e),a=!0,d[1].has(e)&&(d[0].unobserve(e),d[1].delete(e)),d[1].size<=0&&s.delete(r.hash),s.size||ke.delete(i))};return Se.set(e,l),Oe.set(e,t),l},De=Object.assign(Object.assign({},se.props),{onPreviewPrev:Function,onPreviewNext:Function,showToolbar:{type:Boolean,default:!0},showToolbarTooltip:Boolean}),gt=Ie("n-image");var vt=globalThis&&globalThis.__awaiter||function(e,o,t,r){function i(s){return s instanceof t?s:new t(function(u){u(s)})}return new(t||(t=Promise))(function(s,u){function c(l){try{a(r.next(l))}catch(h){u(h)}}function d(l){try{a(r.throw(l))}catch(h){u(h)}}function a(l){l.done?s(l.value):i(l.value).then(c,d)}a((r=r.apply(e,o||[])).next())})};const pt=e=>e.includes("image/"),Ge=(e="")=>{const o=e.split("/"),r=o[o.length-1].split(/#|\?/)[0];return(/\.[^./\\]*$/.exec(r)||[""])[0]},Ye=/(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico)$/i,mt=e=>{if(e.type)return pt(e.type);const o=Ge(e.name||"");if(Ye.test(o))return!0;const t=e.thumbnailUrl||e.url||"",r=Ge(t);return!!(/^data:image\//.test(t)||Ye.test(r))};function bn(e){return vt(this,void 0,void 0,function*(){return yield new Promise(o=>{if(!e.type||!pt(e.type)){o("");return}o(window.URL.createObjectURL(e))})})}const xn=Je&&window.FileReader&&window.File;function Cn(e){return e.isDirectory}function yn(e){return e.isFile}function Rn(e,o){return vt(this,void 0,void 0,function*(){const t=[];let r,i=0;function s(){i++}function u(){i--,i||r(t)}function c(d){d.forEach(a=>{if(a){if(s(),o&&Cn(a)){const l=a.createReader();s(),l.readEntries(h=>{c(h),u()},()=>{u()})}else yn(a)&&(s(),a.file(l=>{t.push({file:l,entry:a,source:"dnd"}),u()},()=>{u()}));u()}})}return yield new Promise(d=>{r=d,c(e)}),t})}function ce(e){const{id:o,name:t,percentage:r,status:i,url:s,file:u,thumbnailUrl:c,type:d,fullPath:a,batchId:l}=e;return{id:o,name:t,percentage:r??null,status:i,url:s??null,file:u??null,thumbnailUrl:c??null,type:d??null,fullPath:a??null,batchId:l??null}}function Ln(e,o,t){return e=e.toLowerCase(),o=o.toLocaleLowerCase(),t=t.toLocaleLowerCase(),t.split(",").map(i=>i.trim()).filter(Boolean).some(i=>{if(i.startsWith(".")){if(e.endsWith(i))return!0}else if(i.includes("/")){const[s,u]=o.split("/"),[c,d]=i.split("/");if((c==="*"||s&&c&&c===s)&&(d==="*"||u&&d&&d===u))return!0}else return!0;return!1})}const wt=(e,o)=>{if(!e)return;const t=document.createElement("a");t.href=e,o!==void 0&&(t.download=o),document.body.appendChild(t),t.click(),document.body.removeChild(t)};function Tn(){return{toolbarIconColor:"rgba(255, 255, 255, .9)",toolbarColor:"rgba(0, 0, 0, .35)",toolbarBoxShadow:"none",toolbarBorderRadius:"24px"}}const kn=Ot({name:"Image",common:Pt,peers:{Tooltip:_t},self:Tn}),Sn=n("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n("path",{d:"M6 5C5.75454 5 5.55039 5.17688 5.50806 5.41012L5.5 5.5V14.5C5.5 14.7761 5.72386 15 6 15C6.24546 15 6.44961 14.8231 6.49194 14.5899L6.5 14.5V5.5C6.5 5.22386 6.27614 5 6 5ZM13.8536 5.14645C13.68 4.97288 13.4106 4.9536 13.2157 5.08859L13.1464 5.14645L8.64645 9.64645C8.47288 9.82001 8.4536 10.0894 8.58859 10.2843L8.64645 10.3536L13.1464 14.8536C13.3417 15.0488 13.6583 15.0488 13.8536 14.8536C14.0271 14.68 14.0464 14.4106 13.9114 14.2157L13.8536 14.1464L9.70711 10L13.8536 5.85355C14.0488 5.65829 14.0488 5.34171 13.8536 5.14645Z",fill:"currentColor"})),On=n("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n("path",{d:"M13.5 5C13.7455 5 13.9496 5.17688 13.9919 5.41012L14 5.5V14.5C14 14.7761 13.7761 15 13.5 15C13.2545 15 13.0504 14.8231 13.0081 14.5899L13 14.5V5.5C13 5.22386 13.2239 5 13.5 5ZM5.64645 5.14645C5.82001 4.97288 6.08944 4.9536 6.28431 5.08859L6.35355 5.14645L10.8536 9.64645C11.0271 9.82001 11.0464 10.0894 10.9114 10.2843L10.8536 10.3536L6.35355 14.8536C6.15829 15.0488 5.84171 15.0488 5.64645 14.8536C5.47288 14.68 5.4536 14.4106 5.58859 14.2157L5.64645 14.1464L9.79289 10L5.64645 5.85355C5.45118 5.65829 5.45118 5.34171 5.64645 5.14645Z",fill:"currentColor"})),Pn=n("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n("path",{d:"M4.089 4.216l.057-.07a.5.5 0 0 1 .638-.057l.07.057L10 9.293l5.146-5.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 .057.638l-.057.07L10.707 10l5.147 5.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.638.057l-.07-.057L10 10.707l-5.146 5.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1-.057-.638l.057-.07L9.293 10L4.146 4.854a.5.5 0 0 1-.057-.638l.057-.07l-.057.07z",fill:"currentColor"})),_n=n("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 1024 1024"},n("path",{fill:"currentColor",d:"M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"})),In=E([E("body >",[w("image-container","position: fixed;")]),w("image-preview-container",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 `),w("image-preview-overlay",`
 z-index: -1;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background: rgba(0, 0, 0, .3);
 `,[Ee()]),w("image-preview-toolbar",`
 z-index: 1;
 position: absolute;
 left: 50%;
 transform: translateX(-50%);
 border-radius: var(--n-toolbar-border-radius);
 height: 48px;
 bottom: 40px;
 padding: 0 12px;
 background: var(--n-toolbar-color);
 box-shadow: var(--n-toolbar-box-shadow);
 color: var(--n-toolbar-icon-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[w("base-icon",`
 padding: 0 8px;
 font-size: 28px;
 cursor: pointer;
 `),Ee()]),w("image-preview-wrapper",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 pointer-events: none;
 `,[It()]),w("image-preview",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: all;
 margin: auto;
 max-height: calc(100vh - 32px);
 max-width: calc(100vw - 32px);
 transition: transform .3s var(--n-bezier);
 `),w("image",`
 display: inline-flex;
 max-height: 100%;
 max-width: 100%;
 `,[Bt("preview-disabled",`
 cursor: pointer;
 `),E("img",`
 border-radius: inherit;
 `)])]),pe=32,bt=Y({name:"ImagePreview",props:Object.assign(Object.assign({},De),{onNext:Function,onPrev:Function,clsPrefix:{type:String,required:!0}}),setup(e){const o=se("Image","-image",In,kn,e,D(e,"clsPrefix"));let t=null;const r=H(null),i=H(null),s=H(void 0),u=H(!1),c=H(!1),{localeRef:d}=zt("Image");function a(){const{value:f}=i;if(!t||!f)return;const{style:m}=f,g=t.getBoundingClientRect(),k=g.left+g.width/2,S=g.top+g.height/2;m.transformOrigin=`${k}px ${S}px`}function l(f){var m,g;switch(f.key){case" ":f.preventDefault();break;case"ArrowLeft":(m=e.onPrev)===null||m===void 0||m.call(e);break;case"ArrowRight":(g=e.onNext)===null||g===void 0||g.call(e);break;case"Escape":Me();break}}Dt(u,f=>{f?Le("keydown",document,l):ge("keydown",document,l)}),Qe(()=>{ge("keydown",document,l)});let h=0,x=0,b=0,R=0,N=0,M=0,Z=0,Q=0,O=!1;function F(f){const{clientX:m,clientY:g}=f;b=m-h,R=g-x,At(q)}function p(f){const{mouseUpClientX:m,mouseUpClientY:g,mouseDownClientX:k,mouseDownClientY:S}=f,V=k-m,G=S-g,K=`vertical${G>0?"Top":"Bottom"}`,te=`horizontal${V>0?"Left":"Right"}`;return{moveVerticalDirection:K,moveHorizontalDirection:te,deltaHorizontal:V,deltaVertical:G}}function C(f){const{value:m}=r;if(!m)return{offsetX:0,offsetY:0};const g=m.getBoundingClientRect(),{moveVerticalDirection:k,moveHorizontalDirection:S,deltaHorizontal:V,deltaVertical:G}=f||{};let K=0,te=0;return g.width<=window.innerWidth?K=0:g.left>0?K=(g.width-window.innerWidth)/2:g.right<window.innerWidth?K=-(g.width-window.innerWidth)/2:S==="horizontalRight"?K=Math.min((g.width-window.innerWidth)/2,N-(V??0)):K=Math.max(-((g.width-window.innerWidth)/2),N-(V??0)),g.height<=window.innerHeight?te=0:g.top>0?te=(g.height-window.innerHeight)/2:g.bottom<window.innerHeight?te=-(g.height-window.innerHeight)/2:k==="verticalBottom"?te=Math.min((g.height-window.innerHeight)/2,M-(G??0)):te=Math.max(-((g.height-window.innerHeight)/2),M-(G??0)),{offsetX:K,offsetY:te}}function L(f){ge("mousemove",document,F),ge("mouseup",document,L);const{clientX:m,clientY:g}=f;O=!1;const k=p({mouseUpClientX:m,mouseUpClientY:g,mouseDownClientX:Z,mouseDownClientY:Q}),S=C(k);b=S.offsetX,R=S.offsetY,q()}const I=ne(gt,null);function v(f){var m,g;if((g=(m=I==null?void 0:I.previewedImgPropsRef.value)===null||m===void 0?void 0:m.onMousedown)===null||g===void 0||g.call(m,f),f.button!==0)return;const{clientX:k,clientY:S}=f;O=!0,h=k-b,x=S-R,N=b,M=R,Z=k,Q=S,q(),Le("mousemove",document,F),Le("mouseup",document,L)}function P(f){var m,g;(g=(m=I==null?void 0:I.previewedImgPropsRef.value)===null||m===void 0?void 0:m.onDblclick)===null||g===void 0||g.call(m,f);const k=he();y=y===k?1:k,q()}const T=1.5;let A=0,y=1,B=0;function _(){y=1,A=0}function z(){var f;_(),B=0,(f=e.onPrev)===null||f===void 0||f.call(e)}function W(){var f;_(),B=0,(f=e.onNext)===null||f===void 0||f.call(e)}function X(){B-=90,q()}function re(){B+=90,q()}function xe(){const{value:f}=r;if(!f)return 1;const{innerWidth:m,innerHeight:g}=window,k=Math.max(1,f.naturalHeight/(g-pe)),S=Math.max(1,f.naturalWidth/(m-pe));return Math.max(3,k*2,S*2)}function he(){const{value:f}=r;if(!f)return 1;const{innerWidth:m,innerHeight:g}=window,k=f.naturalHeight/(g-pe),S=f.naturalWidth/(m-pe);return k<1&&S<1?1:Math.max(k,S)}function Ce(){const f=xe();y<f&&(A+=1,y=Math.min(f,Math.pow(T,A)),q())}function ye(){if(y>.5){const f=y;A-=1,y=Math.max(.5,Math.pow(T,A));const m=f-y;q(!1);const g=C();y+=m,q(!1),y-=m,b=g.offsetX,R=g.offsetY,q()}}function Re(){const f=s.value;f&&wt(f,void 0)}function q(f=!0){var m;const{value:g}=r;if(!g)return;const{style:k}=g,S=$t((m=I==null?void 0:I.previewedImgPropsRef.value)===null||m===void 0?void 0:m.style);let V="";if(typeof S=="string")V=S+";";else for(const K in S)V+=`${rn(K)}: ${S[K]};`;const G=`transform-origin: center; transform: translateX(${b}px) translateY(${R}px) rotate(${B}deg) scale(${y});`;O?k.cssText=V+"cursor: grabbing; transition: none;"+G:k.cssText=V+"cursor: grab;"+G+(f?"":"transition: none;"),f||g.offsetHeight}function Me(){u.value=!u.value,c.value=!0}function Tt(){y=he(),A=Math.ceil(Math.log(y)/Math.log(T)),b=0,R=0,q()}const kt={setPreviewSrc:f=>{s.value=f},setThumbnailEl:f=>{t=f},toggleShow:Me};function St(f,m){if(e.showToolbarTooltip){const{value:g}=o;return n(jt,{to:!1,theme:g.peers.Tooltip,themeOverrides:g.peerOverrides.Tooltip,keepAliveOnHover:!1},{default:()=>d.value[m],trigger:()=>f})}else return f}const Ue=j(()=>{const{common:{cubicBezierEaseInOut:f},self:{toolbarIconColor:m,toolbarBorderRadius:g,toolbarBoxShadow:k,toolbarColor:S}}=o.value;return{"--n-bezier":f,"--n-toolbar-icon-color":m,"--n-toolbar-color":S,"--n-toolbar-border-radius":g,"--n-toolbar-box-shadow":k}}),{inlineThemeDisabled:Fe}=fe(),ie=Fe?Be("image-preview",void 0,Ue,e):void 0;return Object.assign({previewRef:r,previewWrapperRef:i,previewSrc:s,show:u,appear:Mt(),displayed:c,previewedImgProps:I==null?void 0:I.previewedImgPropsRef,handleWheel(f){f.preventDefault()},handlePreviewMousedown:v,handlePreviewDblclick:P,syncTransformOrigin:a,handleAfterLeave:()=>{_(),B=0,c.value=!1},handleDragStart:f=>{var m,g;(g=(m=I==null?void 0:I.previewedImgPropsRef.value)===null||m===void 0?void 0:m.onDragstart)===null||g===void 0||g.call(m,f),f.preventDefault()},zoomIn:Ce,zoomOut:ye,handleDownloadClick:Re,rotateCounterclockwise:X,rotateClockwise:re,handleSwitchPrev:z,handleSwitchNext:W,withTooltip:St,resizeToOrignalImageSize:Tt,cssVars:Fe?void 0:Ue,themeClass:ie==null?void 0:ie.themeClass,onRender:ie==null?void 0:ie.onRender},kt)},render(){var e,o;const{clsPrefix:t}=this;return n(we,null,(o=(e=this.$slots).default)===null||o===void 0?void 0:o.call(e),n(Ut,{show:this.show},{default:()=>{var r;return this.show||this.displayed?((r=this.onRender)===null||r===void 0||r.call(this),$e(n("div",{class:[`${t}-image-preview-container`,this.themeClass],style:this.cssVars,onWheel:this.handleWheel},n(Te,{name:"fade-in-transition",appear:this.appear},{default:()=>this.show?n("div",{class:`${t}-image-preview-overlay`,onClick:this.toggleShow}):null}),this.showToolbar?n(Te,{name:"fade-in-transition",appear:this.appear},{default:()=>{if(!this.show)return null;const{withTooltip:i}=this;return n("div",{class:`${t}-image-preview-toolbar`},this.onPrev?n(we,null,i(n($,{clsPrefix:t,onClick:this.handleSwitchPrev},{default:()=>Sn}),"tipPrevious"),i(n($,{clsPrefix:t,onClick:this.handleSwitchNext},{default:()=>On}),"tipNext")):null,i(n($,{clsPrefix:t,onClick:this.rotateCounterclockwise},{default:()=>n(fn,null)}),"tipCounterclockwise"),i(n($,{clsPrefix:t,onClick:this.rotateClockwise},{default:()=>n(cn,null)}),"tipClockwise"),i(n($,{clsPrefix:t,onClick:this.resizeToOrignalImageSize},{default:()=>n(vn,null)}),"tipOriginalSize"),i(n($,{clsPrefix:t,onClick:this.zoomOut},{default:()=>n(gn,null)}),"tipZoomOut"),i(n($,{clsPrefix:t,onClick:this.zoomIn},{default:()=>n(hn,null)}),"tipZoomIn"),i(n($,{clsPrefix:t,onClick:this.handleDownloadClick},{default:()=>_n}),"tipDownload"),i(n($,{clsPrefix:t,onClick:this.toggleShow},{default:()=>Pn}),"tipClose"))}}):null,n(Te,{name:"fade-in-scale-up-transition",onAfterLeave:this.handleAfterLeave,appear:this.appear,onEnter:this.syncTransformOrigin,onBeforeLeave:this.syncTransformOrigin},{default:()=>{const{previewedImgProps:i={}}=this;return $e(n("div",{class:`${t}-image-preview-wrapper`,ref:"previewWrapperRef"},n("img",Object.assign({},i,{draggable:!1,onMousedown:this.handlePreviewMousedown,onDblclick:this.handlePreviewDblclick,class:[`${t}-image-preview`,i.class],key:this.previewSrc,src:this.previewSrc,ref:"previewRef",onDragstart:this.handleDragStart}))),[[Et,this.show]])}})),[[Ft,{enabled:this.show}]])):null}}))}}),xt=Ie("n-image-group"),Bn=De,zn=Y({name:"ImageGroup",props:Bn,setup(e){let o;const{mergedClsPrefixRef:t}=fe(e),r=`c${Pe()}`,i=Ht(),s=d=>{var a;o=d,(a=c.value)===null||a===void 0||a.setPreviewSrc(d)};function u(d){var a,l;if(!(i!=null&&i.proxy))return;const x=i.proxy.$el.parentElement.querySelectorAll(`[data-group-id=${r}]:not([data-error=true])`);if(!x.length)return;const b=Array.from(x).findIndex(R=>R.dataset.previewSrc===o);~b?s(x[(b+d+x.length)%x.length].dataset.previewSrc):s(x[0].dataset.previewSrc),d===1?(a=e.onPreviewNext)===null||a===void 0||a.call(e):(l=e.onPreviewPrev)===null||l===void 0||l.call(e)}ze(xt,{mergedClsPrefixRef:t,setPreviewSrc:s,setThumbnailEl:d=>{var a;(a=c.value)===null||a===void 0||a.setThumbnailEl(d)},toggleShow:()=>{var d;(d=c.value)===null||d===void 0||d.toggleShow()},groupId:r});const c=H(null);return{mergedClsPrefix:t,previewInstRef:c,next:()=>{u(1)},prev:()=>{u(-1)}}},render(){return n(bt,{theme:this.theme,themeOverrides:this.themeOverrides,clsPrefix:this.mergedClsPrefix,ref:"previewInstRef",onPrev:this.prev,onNext:this.next,showToolbar:this.showToolbar,showToolbarTooltip:this.showToolbarTooltip},this.$slots)}}),Dn=Object.assign({alt:String,height:[String,Number],imgProps:Object,previewedImgProps:Object,lazy:Boolean,intersectionObserverOptions:Object,objectFit:{type:String,default:"fill"},previewSrc:String,fallbackSrc:String,width:[String,Number],src:String,previewDisabled:Boolean,loadDescription:String,onError:Function,onLoad:Function},De),Mn=Y({name:"Image",props:Dn,inheritAttrs:!1,setup(e){const o=H(null),t=H(!1),r=H(null),i=ne(xt,null),{mergedClsPrefixRef:s}=i||fe(e),u={click:()=>{if(e.previewDisabled||t.value)return;const a=e.previewSrc||e.src;if(i){i.setPreviewSrc(a),i.setThumbnailEl(o.value),i.toggleShow();return}const{value:l}=r;l&&(l.setPreviewSrc(a),l.setThumbnailEl(o.value),l.toggleShow())}},c=H(!e.lazy);je(()=>{var a;(a=o.value)===null||a===void 0||a.setAttribute("data-group-id",(i==null?void 0:i.groupId)||"")}),je(()=>{if(e.lazy&&e.intersectionObserverOptions){let a;const l=_e(()=>{a==null||a(),a=void 0,a=wn(o.value,e.intersectionObserverOptions,c)});Qe(()=>{l(),a==null||a()})}}),_e(()=>{var a;e.src,(a=e.imgProps)===null||a===void 0||a.src,t.value=!1});const d=H(!1);return ze(gt,{previewedImgPropsRef:D(e,"previewedImgProps")}),Object.assign({mergedClsPrefix:s,groupId:i==null?void 0:i.groupId,previewInstRef:r,imageRef:o,showError:t,shouldStartLoading:c,loaded:d,mergedOnClick:a=>{var l,h;u.click(),(h=(l=e.imgProps)===null||l===void 0?void 0:l.onClick)===null||h===void 0||h.call(l,a)},mergedOnError:a=>{if(!c.value)return;t.value=!0;const{onError:l,imgProps:{onError:h}={}}=e;l==null||l(a),h==null||h(a)},mergedOnLoad:a=>{const{onLoad:l,imgProps:{onLoad:h}={}}=e;l==null||l(a),h==null||h(a),d.value=!0}},u)},render(){var e,o;const{mergedClsPrefix:t,imgProps:r={},loaded:i,$attrs:s,lazy:u}=this,c=(o=(e=this.$slots).placeholder)===null||o===void 0?void 0:o.call(e),d=this.src||r.src,a=n("img",Object.assign(Object.assign({},r),{ref:"imageRef",width:this.width||r.width,height:this.height||r.height,src:this.showError?this.fallbackSrc:u&&this.intersectionObserverOptions?this.shouldStartLoading?d:void 0:d,alt:this.alt||r.alt,"aria-label":this.alt||r.alt,onClick:this.mergedOnClick,onError:this.mergedOnError,onLoad:this.mergedOnLoad,loading:pn&&u&&!this.intersectionObserverOptions?"lazy":"eager",style:[r.style||"",c&&!i?{height:"0",width:"0",visibility:"hidden"}:"",{objectFit:this.objectFit}],"data-error":this.showError,"data-preview-src":this.previewSrc||this.src}));return n("div",Object.assign({},s,{role:"none",class:[s.class,`${t}-image`,(this.previewDisabled||this.showError)&&`${t}-image--preview-disabled`]}),this.groupId?a:n(bt,{theme:this.theme,themeOverrides:this.themeOverrides,clsPrefix:t,ref:"previewInstRef",showToolbar:this.showToolbar,showToolbarTooltip:this.showToolbarTooltip},{default:()=>a}),!i&&c)}}),Un=w("text",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[U("strong",`
 font-weight: var(--n-font-weight-strong);
 `),U("italic",{fontStyle:"italic"}),U("underline",{textDecoration:"underline"}),U("code",`
 line-height: 1.4;
 display: inline-block;
 font-family: var(--n-font-famliy-mono);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-sizing: border-box;
 padding: .05em .35em 0 .35em;
 border-radius: var(--n-code-border-radius);
 font-size: .9em;
 color: var(--n-code-text-color);
 background-color: var(--n-code-color);
 border: var(--n-code-border);
 `)]),Fn=Object.assign(Object.assign({},se.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),En=Y({name:"Text",props:Fn,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=fe(e),r=se("Typography","-text",Un,Vt,e,o),i=j(()=>{const{depth:u,type:c}=e,d=c==="default"?u===void 0?"textColor":`textColor${u}Depth`:Zt("textColor",c),{common:{fontWeightStrong:a,fontFamilyMono:l,cubicBezierEaseInOut:h},self:{codeTextColor:x,codeBorderRadius:b,codeColor:R,codeBorder:N,[d]:M}}=r.value;return{"--n-bezier":h,"--n-text-color":M,"--n-font-weight-strong":a,"--n-font-famliy-mono":l,"--n-code-border-radius":b,"--n-code-text-color":x,"--n-code-color":R,"--n-code-border":N}}),s=t?Be("text",j(()=>`${e.type[0]}${e.depth||""}`),i,e):void 0;return{mergedClsPrefix:o,compitableTag:Nt(e,["as","tag"]),cssVars:t?void 0:i,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var e,o,t;const{mergedClsPrefix:r}=this;(e=this.onRender)===null||e===void 0||e.call(this);const i=[`${r}-text`,this.themeClass,{[`${r}-text--code`]:this.code,[`${r}-text--delete`]:this.delete,[`${r}-text--strong`]:this.strong,[`${r}-text--italic`]:this.italic,[`${r}-text--underline`]:this.underline}],s=(t=(o=this.$slots).default)===null||t===void 0?void 0:t.call(o);return this.code?n("code",{class:i,style:this.cssVars},this.delete?n("del",null,s):s):this.delete?n("del",{class:i,style:this.cssVars},s):n(this.compitableTag||"span",{class:i,style:this.cssVars},s)}}),de=Ie("n-upload"),Ct="__UPLOAD_DRAGGER__",yt=Y({name:"UploadDragger",[Ct]:!0,setup(e,{slots:o}){const t=ne(de,null);return t||be("upload-dragger","`n-upload-dragger` must be placed inside `n-upload`."),()=>{const{mergedClsPrefixRef:{value:r},mergedDisabledRef:{value:i},maxReachedRef:{value:s}}=t;return n("div",{class:[`${r}-upload-dragger`,(i||s)&&`${r}-upload-dragger--disabled`]},o)}}}),Rt=Y({name:"UploadTrigger",props:{abstract:Boolean},setup(e,{slots:o}){const t=ne(de,null);t||be("upload-trigger","`n-upload-trigger` must be placed inside `n-upload`.");const{mergedClsPrefixRef:r,mergedDisabledRef:i,maxReachedRef:s,listTypeRef:u,dragOverRef:c,openOpenFileDialog:d,draggerInsideRef:a,handleFileAddition:l,mergedDirectoryDndRef:h,triggerStyleRef:x}=t,b=j(()=>u.value==="image-card");function R(){i.value||s.value||d()}function N(O){O.preventDefault(),c.value=!0}function M(O){O.preventDefault(),c.value=!0}function Z(O){O.preventDefault(),c.value=!1}function Q(O){var F;if(O.preventDefault(),!a.value||i.value||s.value){c.value=!1;return}const p=(F=O.dataTransfer)===null||F===void 0?void 0:F.items;p!=null&&p.length?Rn(Array.from(p).map(C=>C.webkitGetAsEntry()),h.value).then(C=>{l(C)}).finally(()=>{c.value=!1}):c.value=!1}return()=>{var O;const{value:F}=r;return e.abstract?(O=o.default)===null||O===void 0?void 0:O.call(o,{handleClick:R,handleDrop:Q,handleDragOver:N,handleDragEnter:M,handleDragLeave:Z}):n("div",{class:[`${F}-upload-trigger`,(i.value||s.value)&&`${F}-upload-trigger--disabled`,b.value&&`${F}-upload-trigger--image-card`],style:x.value,onClick:R,onDrop:Q,onDragover:N,onDragenter:M,onDragleave:Z},b.value?n(yt,null,{default:()=>Wt(o.default,()=>[n($,{clsPrefix:F},{default:()=>n(uo,null)})])}):o)}}}),$n=Y({name:"UploadProgress",props:{show:Boolean,percentage:{type:Number,required:!0},status:{type:String,required:!0}},setup(){return{mergedTheme:ne(de).mergedThemeRef}},render(){return n(et,null,{default:()=>this.show?n(co,{type:"line",showIndicator:!1,percentage:this.percentage,status:this.status,height:2,theme:this.mergedTheme.peers.Progress,themeOverrides:this.mergedTheme.peerOverrides.Progress}):null})}}),jn=n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28"},n("g",{fill:"none"},n("path",{d:"M21.75 3A3.25 3.25 0 0 1 25 6.25v15.5A3.25 3.25 0 0 1 21.75 25H6.25A3.25 3.25 0 0 1 3 21.75V6.25A3.25 3.25 0 0 1 6.25 3h15.5zm.583 20.4l-7.807-7.68a.75.75 0 0 0-.968-.07l-.084.07l-7.808 7.68c.183.065.38.1.584.1h15.5c.204 0 .4-.035.583-.1l-7.807-7.68l7.807 7.68zM21.75 4.5H6.25A1.75 1.75 0 0 0 4.5 6.25v15.5c0 .208.036.408.103.593l7.82-7.692a2.25 2.25 0 0 1 3.026-.117l.129.117l7.82 7.692c.066-.185.102-.385.102-.593V6.25a1.75 1.75 0 0 0-1.75-1.75zm-3.25 3a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5zm0 1.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2z",fill:"currentColor"}))),An=n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28"},n("g",{fill:"none"},n("path",{d:"M6.4 2A2.4 2.4 0 0 0 4 4.4v19.2A2.4 2.4 0 0 0 6.4 26h15.2a2.4 2.4 0 0 0 2.4-2.4V11.578c0-.729-.29-1.428-.805-1.944l-6.931-6.931A2.4 2.4 0 0 0 14.567 2H6.4zm-.9 2.4a.9.9 0 0 1 .9-.9H14V10a2 2 0 0 0 2 2h6.5v11.6a.9.9 0 0 1-.9.9H6.4a.9.9 0 0 1-.9-.9V4.4zm16.44 6.1H16a.5.5 0 0 1-.5-.5V4.06l6.44 6.44z",fill:"currentColor"})));var Hn=globalThis&&globalThis.__awaiter||function(e,o,t,r){function i(s){return s instanceof t?s:new t(function(u){u(s)})}return new(t||(t=Promise))(function(s,u){function c(l){try{a(r.next(l))}catch(h){u(h)}}function d(l){try{a(r.throw(l))}catch(h){u(h)}}function a(l){l.done?s(l.value):i(l.value).then(c,d)}a((r=r.apply(e,o||[])).next())})};const me={paddingMedium:"0 3px",heightMedium:"24px",iconSizeMedium:"18px"},Nn=Y({name:"UploadFile",props:{clsPrefix:{type:String,required:!0},file:{type:Object,required:!0},listType:{type:String,required:!0}},setup(e){const o=ne(de),t=H(null),r=H(""),i=j(()=>{const{file:p}=e;return p.status==="finished"?"success":p.status==="error"?"error":"info"}),s=j(()=>{const{file:p}=e;if(p.status==="error")return"error"}),u=j(()=>{const{file:p}=e;return p.status==="uploading"}),c=j(()=>{if(!o.showCancelButtonRef.value)return!1;const{file:p}=e;return["uploading","pending","error"].includes(p.status)}),d=j(()=>{if(!o.showRemoveButtonRef.value)return!1;const{file:p}=e;return["finished"].includes(p.status)}),a=j(()=>{if(!o.showDownloadButtonRef.value)return!1;const{file:p}=e;return["finished"].includes(p.status)}),l=j(()=>{if(!o.showRetryButtonRef.value)return!1;const{file:p}=e;return["error"].includes(p.status)}),h=Xt(()=>r.value||e.file.thumbnailUrl||e.file.url),x=j(()=>{if(!o.showPreviewButtonRef.value)return!1;const{file:{status:p},listType:C}=e;return["finished"].includes(p)&&h.value&&C==="image-card"});function b(){o.submit(e.file.id)}function R(p){p.preventDefault();const{file:C}=e;["finished","pending","error"].includes(C.status)?M(C):["uploading"].includes(C.status)?Q(C):qt("upload","The button clicked type is unknown.")}function N(p){p.preventDefault(),Z(e.file)}function M(p){const{xhrMap:C,doChange:L,onRemoveRef:{value:I},mergedFileListRef:{value:v}}=o;Promise.resolve(I?I({file:Object.assign({},p),fileList:v}):!0).then(P=>{if(P===!1)return;const T=Object.assign({},p,{status:"removed"});C.delete(p.id),L(T,void 0,{remove:!0})})}function Z(p){const{onDownloadRef:{value:C}}=o;Promise.resolve(C?C(Object.assign({},p)):!0).then(L=>{L!==!1&&wt(p.url,p.name)})}function Q(p){const{xhrMap:C}=o,L=C.get(p.id);L==null||L.abort(),M(Object.assign({},p))}function O(){const{onPreviewRef:{value:p}}=o;if(p)p(e.file);else if(e.listType==="image-card"){const{value:C}=t;if(!C)return;C.click()}}const F=()=>Hn(this,void 0,void 0,function*(){const{listType:p}=e;p!=="image"&&p!=="image-card"||o.shouldUseThumbnailUrlRef.value(e.file)&&(r.value=yield o.getFileThumbnailUrlResolver(e.file))});return _e(()=>{F()}),{mergedTheme:o.mergedThemeRef,progressStatus:i,buttonType:s,showProgress:u,disabled:o.mergedDisabledRef,showCancelButton:c,showRemoveButton:d,showDownloadButton:a,showRetryButton:l,showPreviewButton:x,mergedThumbnailUrl:h,shouldUseThumbnailUrl:o.shouldUseThumbnailUrlRef,renderIcon:o.renderIconRef,imageRef:t,handleRemoveOrCancelClick:R,handleDownloadClick:N,handleRetryClick:b,handlePreviewClick:O}},render(){const{clsPrefix:e,mergedTheme:o,listType:t,file:r,renderIcon:i}=this;let s;const u=t==="image";u||t==="image-card"?s=!this.shouldUseThumbnailUrl(r)||!this.mergedThumbnailUrl?n("span",{class:`${e}-upload-file-info__thumbnail`},i?i(r):mt(r)?n($,{clsPrefix:e},{default:()=>jn}):n($,{clsPrefix:e},{default:()=>An})):n("a",{rel:"noopener noreferer",target:"_blank",href:r.url||void 0,class:`${e}-upload-file-info__thumbnail`,onClick:this.handlePreviewClick},t==="image-card"?n(Mn,{src:this.mergedThumbnailUrl||void 0,previewSrc:r.url||void 0,alt:r.name,ref:"imageRef"}):n("img",{src:this.mergedThumbnailUrl||void 0,alt:r.name})):s=n("span",{class:`${e}-upload-file-info__thumbnail`},i?i(r):n($,{clsPrefix:e},{default:()=>n(an,null)}));const d=n($n,{show:this.showProgress,percentage:r.percentage||0,status:this.progressStatus}),a=t==="text"||t==="image";return n("div",{class:[`${e}-upload-file`,`${e}-upload-file--${this.progressStatus}-status`,r.url&&r.status!=="error"&&t!=="image-card"&&`${e}-upload-file--with-url`,`${e}-upload-file--${t}-type`]},n("div",{class:`${e}-upload-file-info`},s,n("div",{class:`${e}-upload-file-info__name`},a&&(r.url&&r.status!=="error"?n("a",{rel:"noopener noreferer",target:"_blank",href:r.url||void 0,onClick:this.handlePreviewClick},r.name):n("span",{onClick:this.handlePreviewClick},r.name)),u&&d),n("div",{class:[`${e}-upload-file-info__action`,`${e}-upload-file-info__action--${t}-type`]},this.showPreviewButton?n(ue,{key:"preview",quaternary:!0,type:this.buttonType,onClick:this.handlePreviewClick,theme:o.peers.Button,themeOverrides:o.peerOverrides.Button,builtinThemeOverrides:me},{icon:()=>n($,{clsPrefix:e},{default:()=>n(Gt,null)})}):null,(this.showRemoveButton||this.showCancelButton)&&!this.disabled&&n(ue,{key:"cancelOrTrash",theme:o.peers.Button,themeOverrides:o.peerOverrides.Button,quaternary:!0,builtinThemeOverrides:me,type:this.buttonType,onClick:this.handleRemoveOrCancelClick},{icon:()=>n(Yt,null,{default:()=>this.showRemoveButton?n($,{clsPrefix:e,key:"trash"},{default:()=>n(ln,null)}):n($,{clsPrefix:e,key:"cancel"},{default:()=>n(dn,null)})})}),this.showRetryButton&&!this.disabled&&n(ue,{key:"retry",quaternary:!0,type:this.buttonType,onClick:this.handleRetryClick,theme:o.peers.Button,themeOverrides:o.peerOverrides.Button,builtinThemeOverrides:me},{icon:()=>n($,{clsPrefix:e},{default:()=>n(un,null)})}),this.showDownloadButton?n(ue,{key:"download",quaternary:!0,type:this.buttonType,onClick:this.handleDownloadClick,theme:o.peers.Button,themeOverrides:o.peerOverrides.Button,builtinThemeOverrides:me},{icon:()=>n($,{clsPrefix:e},{default:()=>n(sn,null)})}):null)),!u&&d)}}),Vn=Y({name:"UploadFileList",setup(e,{slots:o}){const t=ne(de,null);t||be("upload-file-list","`n-upload-file-list` must be placed inside `n-upload`.");const{abstractRef:r,mergedClsPrefixRef:i,listTypeRef:s,mergedFileListRef:u,fileListStyleRef:c,cssVarsRef:d,themeClassRef:a,maxReachedRef:l,showTriggerRef:h,imageGroupPropsRef:x}=t,b=j(()=>s.value==="image-card"),R=()=>u.value.map(M=>n(Nn,{clsPrefix:i.value,key:M.id,file:M,listType:s.value})),N=()=>b.value?n(zn,Object.assign({},x.value),{default:R}):n(et,{group:!0},{default:R});return()=>{const{value:M}=i,{value:Z}=r;return n("div",{class:[`${M}-upload-file-list`,b.value&&`${M}-upload-file-list--grid`,Z?a==null?void 0:a.value:void 0],style:[Z&&d?d.value:"",c.value]},N(),h.value&&!l.value&&b.value&&n(Rt,null,o))}}}),Zn=E([w("upload","width: 100%;",[U("dragger-inside",[w("upload-trigger",`
 display: block;
 `)]),U("drag-over",[w("upload-dragger",`
 border: var(--n-dragger-border-hover);
 `)])]),w("upload-dragger",`
 cursor: pointer;
 box-sizing: border-box;
 width: 100%;
 text-align: center;
 border-radius: var(--n-border-radius);
 padding: 24px;
 opacity: 1;
 transition:
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-dragger-color);
 border: var(--n-dragger-border);
 `,[E("&:hover",`
 border: var(--n-dragger-border-hover);
 `),U("disabled",`
 cursor: not-allowed;
 `)]),w("upload-trigger",`
 display: inline-block;
 box-sizing: border-box;
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 `,[E("+",[w("upload-file-list","margin-top: 8px;")]),U("disabled",`
 opacity: var(--n-item-disabled-opacity);
 cursor: not-allowed;
 `),U("image-card",`
 width: 96px;
 height: 96px;
 `,[w("base-icon",`
 font-size: 24px;
 `),w("upload-dragger",`
 padding: 0;
 height: 100%;
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `)])]),w("upload-file-list",`
 line-height: var(--n-line-height);
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 `,[E("a, img","outline: none;"),U("disabled",`
 opacity: var(--n-item-disabled-opacity);
 cursor: not-allowed;
 `,[w("upload-file","cursor: not-allowed;")]),U("grid",`
 display: grid;
 grid-template-columns: repeat(auto-fill, 96px);
 grid-gap: 8px;
 margin-top: 0;
 `),w("upload-file",`
 display: block;
 box-sizing: border-box;
 cursor: default;
 padding: 0px 12px 0 6px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `,[Ae(),w("progress",[Ae({foldPadding:!0})]),E("&:hover",`
 background-color: var(--n-item-color-hover);
 `,[w("upload-file-info",[J("action",`
 opacity: 1;
 `)])]),U("image-type",`
 border-radius: var(--n-border-radius);
 text-decoration: underline;
 text-decoration-color: #0000;
 `,[w("upload-file-info",`
 padding-top: 0px;
 padding-bottom: 0px;
 width: 100%;
 height: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 6px 0;
 `,[w("progress",`
 padding: 2px 0;
 margin-bottom: 0;
 `),J("name",`
 padding: 0 8px;
 `),J("thumbnail",`
 width: 32px;
 height: 32px;
 font-size: 28px;
 display: flex;
 justify-content: center;
 align-items: center;
 `,[E("img",`
 width: 100%;
 `)])])]),U("text-type",[w("progress",`
 box-sizing: border-box;
 padding-bottom: 6px;
 margin-bottom: 6px;
 `)]),U("image-card-type",`
 position: relative;
 width: 96px;
 height: 96px;
 border: var(--n-item-border-image-card);
 border-radius: var(--n-border-radius);
 padding: 0;
 display: flex;
 align-items: center;
 justify-content: center;
 transition: border-color .3s var(--n-bezier), background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 overflow: hidden;
 `,[w("progress",`
 position: absolute;
 left: 8px;
 bottom: 8px;
 right: 8px;
 width: unset;
 `),w("upload-file-info",`
 padding: 0;
 width: 100%;
 height: 100%;
 `,[J("thumbnail",`
 width: 100%;
 height: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 font-size: 36px;
 `,[E("img",`
 width: 100%;
 `)])]),E("&::before",`
 position: absolute;
 z-index: 1;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 opacity: 0;
 transition: opacity .2s var(--n-bezier);
 content: "";
 `),E("&:hover",[E("&::before","opacity: 1;"),w("upload-file-info",[J("thumbnail","opacity: .12;")])])]),U("error-status",[E("&:hover",`
 background-color: var(--n-item-color-hover-error);
 `),w("upload-file-info",[J("name","color: var(--n-item-text-color-error);"),J("thumbnail","color: var(--n-item-text-color-error);")]),U("image-card-type",`
 border: var(--n-item-border-image-card-error);
 `)]),U("with-url",`
 cursor: pointer;
 `,[w("upload-file-info",[J("name",`
 color: var(--n-item-text-color-success);
 text-decoration-color: var(--n-item-text-color-success);
 `,[E("a",`
 text-decoration: underline;
 `)])])]),w("upload-file-info",`
 position: relative;
 padding-top: 6px;
 padding-bottom: 6px;
 display: flex;
 flex-wrap: nowrap;
 `,[J("thumbnail",`
 font-size: 18px;
 opacity: 1;
 transition: opacity .2s var(--n-bezier);
 color: var(--n-item-icon-color);
 `,[w("base-icon",`
 margin-right: 2px;
 vertical-align: middle;
 transition: color .3s var(--n-bezier);
 `)]),J("action",`
 padding-top: inherit;
 padding-bottom: inherit;
 position: absolute;
 right: 0;
 top: 0;
 bottom: 0;
 width: 80px;
 display: flex;
 align-items: center;
 transition: opacity .2s var(--n-bezier);
 justify-content: flex-end;
 opacity: 0;
 `,[w("button",[E("&:not(:last-child)",{marginRight:"4px"}),w("base-icon",[E("svg",[Kt()])])]),U("image-type",`
 position: relative;
 max-width: 80px;
 width: auto;
 `),U("image-card-type",`
 z-index: 2;
 position: absolute;
 width: 100%;
 height: 100%;
 left: 0;
 right: 0;
 bottom: 0;
 top: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 `)]),J("name",`
 color: var(--n-item-text-color);
 flex: 1;
 display: flex;
 justify-content: center;
 text-overflow: ellipsis;
 overflow: hidden;
 flex-direction: column;
 text-decoration-color: #0000;
 font-size: var(--n-font-size);
 transition:
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier); 
 `,[E("a",`
 color: inherit;
 text-decoration: underline;
 `)])])])]),w("upload-file-input",`
 display: block;
 width: 0;
 height: 0;
 opacity: 0;
 `)]);var qe=globalThis&&globalThis.__awaiter||function(e,o,t,r){function i(s){return s instanceof t?s:new t(function(u){u(s)})}return new(t||(t=Promise))(function(s,u){function c(l){try{a(r.next(l))}catch(h){u(h)}}function d(l){try{a(r.throw(l))}catch(h){u(h)}}function a(l){l.done?s(l.value):i(l.value).then(c,d)}a((r=r.apply(e,o||[])).next())})};function Wn(e,o,t){const{doChange:r,xhrMap:i}=e;let s=0;function u(d){var a;let l=Object.assign({},o,{status:"error",percentage:s});i.delete(o.id),l=ce(((a=e.onError)===null||a===void 0?void 0:a.call(e,{file:l,event:d}))||l),r(l,d)}function c(d){var a;if(e.isErrorState){if(e.isErrorState(t)){u(d);return}}else if(t.status<200||t.status>=300){u(d);return}let l=Object.assign({},o,{status:"finished",percentage:s});i.delete(o.id),l=ce(((a=e.onFinish)===null||a===void 0?void 0:a.call(e,{file:l,event:d}))||l),r(l,d)}return{handleXHRLoad:c,handleXHRError:u,handleXHRAbort(d){const a=Object.assign({},o,{status:"removed",file:null,percentage:s});i.delete(o.id),r(a,d)},handleXHRProgress(d){const a=Object.assign({},o,{status:"uploading"});if(d.lengthComputable){const l=Math.ceil(d.loaded/d.total*100);a.percentage=l,s=l}r(a,d)}}}function Xn(e){const{inst:o,file:t,data:r,headers:i,withCredentials:s,action:u,customRequest:c}=e,{doChange:d}=e.inst;let a=0;c({file:t,data:r,headers:i,withCredentials:s,action:u,onProgress(l){const h=Object.assign({},t,{status:"uploading"}),x=l.percent;h.percentage=x,a=x,d(h)},onFinish(){var l;let h=Object.assign({},t,{status:"finished",percentage:a});h=ce(((l=o.onFinish)===null||l===void 0?void 0:l.call(o,{file:h}))||h),d(h)},onError(){var l;let h=Object.assign({},t,{status:"error",percentage:a});h=ce(((l=o.onError)===null||l===void 0?void 0:l.call(o,{file:h}))||h),d(h)}})}function Gn(e,o,t){const r=Wn(e,o,t);t.onabort=r.handleXHRAbort,t.onerror=r.handleXHRError,t.onload=r.handleXHRLoad,t.upload&&(t.upload.onprogress=r.handleXHRProgress)}function Lt(e,o){return typeof e=="function"?e({file:o}):e||{}}function Yn(e,o,t){const r=Lt(o,t);r&&Object.keys(r).forEach(i=>{e.setRequestHeader(i,r[i])})}function qn(e,o,t){const r=Lt(o,t);r&&Object.keys(r).forEach(i=>{e.append(i,r[i])})}function Kn(e,o,t,{method:r,action:i,withCredentials:s,responseType:u,headers:c,data:d}){const a=new XMLHttpRequest;a.responseType=u,e.xhrMap.set(t.id,a),a.withCredentials=s;const l=new FormData;if(qn(l,d,t),l.append(o,t.file),Gn(e,t,a),i!==void 0){a.open(r.toUpperCase(),i),Yn(a,c,t),a.send(l);const h=Object.assign({},t,{status:"uploading"});e.doChange(h)}}const Jn=Object.assign(Object.assign({},se.props),{name:{type:String,default:"file"},accept:String,action:String,customRequest:Function,directory:Boolean,directoryDnd:{type:Boolean,default:void 0},method:{type:String,default:"POST"},multiple:Boolean,showFileList:{type:Boolean,default:!0},data:[Object,Function],headers:[Object,Function],withCredentials:Boolean,responseType:{type:String,default:""},disabled:{type:Boolean,default:void 0},onChange:Function,onRemove:Function,onFinish:Function,onError:Function,onBeforeUpload:Function,isErrorState:Function,onDownload:Function,defaultUpload:{type:Boolean,default:!0},fileList:Array,"onUpdate:fileList":[Function,Array],onUpdateFileList:[Function,Array],fileListStyle:[String,Object],defaultFileList:{type:Array,default:()=>[]},showCancelButton:{type:Boolean,default:!0},showRemoveButton:{type:Boolean,default:!0},showDownloadButton:Boolean,showRetryButton:{type:Boolean,default:!0},showPreviewButton:{type:Boolean,default:!0},listType:{type:String,default:"text"},onPreview:Function,shouldUseThumbnailUrl:{type:Function,default:e=>xn?mt(e):!1},createThumbnailUrl:Function,abstract:Boolean,max:Number,showTrigger:{type:Boolean,default:!0},imageGroupProps:Object,inputProps:Object,triggerStyle:[String,Object],renderIcon:Function}),Qn=Y({name:"Upload",props:Jn,setup(e){e.abstract&&e.listType==="image-card"&&be("upload","when the list-type is image-card, abstract is not supported.");const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=fe(e),r=se("Upload","-upload",Zn,to,e,o),i=Jt(e),s=j(()=>{const{max:v}=e;return v!==void 0?b.value.length>=v:!1}),u=H(e.defaultFileList),c=D(e,"fileList"),d=H(null),a={value:!1},l=H(!1),h=new Map,x=Qt(c,u),b=j(()=>x.value.map(ce));function R(){var v;(v=d.value)===null||v===void 0||v.click()}function N(v){const P=v.target;Q(P.files?Array.from(P.files).map(T=>({file:T,entry:null,source:"input"})):null,v),P.value=""}function M(v){const{"onUpdate:fileList":P,onUpdateFileList:T}=e;P&&He(P,v),T&&He(T,v),u.value=v}const Z=j(()=>e.multiple||e.directory);function Q(v,P){if(!v||v.length===0)return;const{onBeforeUpload:T}=e;v=Z.value?v:[v[0]];const{max:A,accept:y}=e;v=v.filter(({file:_,source:z})=>z==="dnd"&&(y!=null&&y.trim())?Ln(_.name,_.type,y):!0),A&&(v=v.slice(0,A-b.value.length));const B=Pe();Promise.all(v.map(({file:_,entry:z})=>qe(this,void 0,void 0,function*(){var W;const X={id:Pe(),batchId:B,name:_.name,status:"pending",percentage:0,file:_,url:null,type:_.type,thumbnailUrl:null,fullPath:(W=z==null?void 0:z.fullPath)!==null&&W!==void 0?W:`/${_.webkitRelativePath||_.name}`};return!T||(yield T({file:X,fileList:b.value}))!==!1?X:null}))).then(_=>qe(this,void 0,void 0,function*(){let z=Promise.resolve();_.forEach(W=>{z=z.then(oo).then(()=>{W&&F(W,P,{append:!0})})}),yield z})).then(()=>{e.defaultUpload&&O()})}function O(v){const{method:P,action:T,withCredentials:A,headers:y,data:B,name:_}=e,z=v!==void 0?b.value.filter(X=>X.id===v):b.value,W=v!==void 0;z.forEach(X=>{const{status:re}=X;(re==="pending"||re==="error"&&W)&&(e.customRequest?Xn({inst:{doChange:F,xhrMap:h,onFinish:e.onFinish,onError:e.onError},file:X,action:T,withCredentials:A,headers:y,data:B,customRequest:e.customRequest}):Kn({doChange:F,xhrMap:h,onFinish:e.onFinish,onError:e.onError,isErrorState:e.isErrorState},_,X,{method:P,action:T,withCredentials:A,responseType:e.responseType,headers:y,data:B}))})}const F=(v,P,T={append:!1,remove:!1})=>{const{append:A,remove:y}=T,B=Array.from(b.value),_=B.findIndex(z=>z.id===v.id);if(A||y||~_){A?B.push(v):y?B.splice(_,1):B.splice(_,1,v);const{onChange:z}=e;z&&z({file:v,fileList:B,event:P}),M(B)}};function p(v){var P;if(v.thumbnailUrl)return v.thumbnailUrl;const{createThumbnailUrl:T}=e;return T?(P=T(v.file,v))!==null&&P!==void 0?P:v.url||"":v.url?v.url:v.file?bn(v.file):""}const C=j(()=>{const{common:{cubicBezierEaseInOut:v},self:{draggerColor:P,draggerBorder:T,draggerBorderHover:A,itemColorHover:y,itemColorHoverError:B,itemTextColorError:_,itemTextColorSuccess:z,itemTextColor:W,itemIconColor:X,itemDisabledOpacity:re,lineHeight:xe,borderRadius:he,fontSize:Ce,itemBorderImageCardError:ye,itemBorderImageCard:Re}}=r.value;return{"--n-bezier":v,"--n-border-radius":he,"--n-dragger-border":T,"--n-dragger-border-hover":A,"--n-dragger-color":P,"--n-font-size":Ce,"--n-item-color-hover":y,"--n-item-color-hover-error":B,"--n-item-disabled-opacity":re,"--n-item-icon-color":X,"--n-item-text-color":W,"--n-item-text-color-error":_,"--n-item-text-color-success":z,"--n-line-height":xe,"--n-item-border-image-card-error":ye,"--n-item-border-image-card":Re}}),L=t?Be("upload",void 0,C,e):void 0;ze(de,{mergedClsPrefixRef:o,mergedThemeRef:r,showCancelButtonRef:D(e,"showCancelButton"),showDownloadButtonRef:D(e,"showDownloadButton"),showRemoveButtonRef:D(e,"showRemoveButton"),showRetryButtonRef:D(e,"showRetryButton"),onRemoveRef:D(e,"onRemove"),onDownloadRef:D(e,"onDownload"),mergedFileListRef:b,triggerStyleRef:D(e,"triggerStyle"),shouldUseThumbnailUrlRef:D(e,"shouldUseThumbnailUrl"),renderIconRef:D(e,"renderIcon"),xhrMap:h,submit:O,doChange:F,showPreviewButtonRef:D(e,"showPreviewButton"),onPreviewRef:D(e,"onPreview"),getFileThumbnailUrlResolver:p,listTypeRef:D(e,"listType"),dragOverRef:l,openOpenFileDialog:R,draggerInsideRef:a,handleFileAddition:Q,mergedDisabledRef:i.mergedDisabledRef,maxReachedRef:s,fileListStyleRef:D(e,"fileListStyle"),abstractRef:D(e,"abstract"),acceptRef:D(e,"accept"),cssVarsRef:t?void 0:C,themeClassRef:L==null?void 0:L.themeClass,onRender:L==null?void 0:L.onRender,showTriggerRef:D(e,"showTrigger"),imageGroupPropsRef:D(e,"imageGroupProps"),mergedDirectoryDndRef:j(()=>{var v;return(v=e.directoryDnd)!==null&&v!==void 0?v:e.directory})});const I={clear:()=>{u.value=[]},submit:O,openOpenFileDialog:R};return Object.assign({mergedClsPrefix:o,draggerInsideRef:a,inputElRef:d,mergedTheme:r,dragOver:l,mergedMultiple:Z,cssVars:t?void 0:C,themeClass:L==null?void 0:L.themeClass,onRender:L==null?void 0:L.onRender,handleFileInputChange:N},I)},render(){var e,o;const{draggerInsideRef:t,mergedClsPrefix:r,$slots:i,directory:s,onRender:u}=this;if(i.default&&!this.abstract){const d=i.default()[0];!((e=d==null?void 0:d.type)===null||e===void 0)&&e[Ct]&&(t.value=!0)}const c=n("input",Object.assign({},this.inputProps,{ref:"inputElRef",type:"file",class:`${r}-upload-file-input`,accept:this.accept,multiple:this.mergedMultiple,onChange:this.handleFileInputChange,webkitdirectory:s||void 0,directory:s||void 0}));return this.abstract?n(we,null,(o=i.default)===null||o===void 0?void 0:o.call(i),n(eo,{to:"body"},c)):(u==null||u(),n("div",{class:[`${r}-upload`,t.value&&`${r}-upload--dragger-inside`,this.dragOver&&`${r}-upload--drag-over`,this.themeClass],style:this.cssVars},c,this.showTrigger&&this.listType!=="image-card"&&n(Rt,null,i),this.showFileList&&n(Vn,null,i)))}}),er={style:{"margin-bottom":"12px"}},ar=Y({__name:"game",setup(e){const o=no(),t=ro();function r({file:{file:i}}){if(!i){t.error("No file selected");return}o.uploadSave(i)}return(i,s)=>{const u=fo,c=ue,d=so,a=En,l=yt,h=Qn;return io(),ao(we,null,[oe(u,null,{default:ae(()=>[ve("Game")]),_:1}),oe(c,{onClick:s[0]||(s[0]=x=>Ne(o).resetGame())},{default:ae(()=>[ve(" Reset Game ")]),_:1}),oe(c,{onClick:s[1]||(s[1]=x=>Ne(o).downloadSave())},{default:ae(()=>[ve(" Download Save ")]),_:1}),oe(h,{accept:".json","directory-dnd":"","show-file-list":!1,"before-upload":()=>!1,onChange:s[2]||(s[2]=x=>r(x))},{default:ae(()=>[oe(l,null,{default:ae(()=>[lo("div",er,[oe(d,{size:"48",depth:3,class:"ico-mdi-file"})]),oe(a,{style:{"font-size":"16px"}},{default:ae(()=>[ve(" Click or drag a save game to this area to upload ")]),_:1})]),_:1})]),_:1})],64)}}});export{ar as default};
