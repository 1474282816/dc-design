(self.webpackChunk_dckj_dc_design=self.webpackChunk_dckj_dc_design||[]).push([[675],{71100:function(K,B,E){"use strict";var R=E(27544),d=E(67294),O=E(67915);function P(u,r){return H(u)||C(u,r)||_(u,r)||T()}function T(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(u,r){if(u){if(typeof u=="string")return w(u,r);var t=Object.prototype.toString.call(u).slice(8,-1);if(t==="Object"&&u.constructor&&(t=u.constructor.name),t==="Map"||t==="Set")return Array.from(u);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return w(u,r)}}function w(u,r){(r==null||r>u.length)&&(r=u.length);for(var t=0,a=new Array(r);t<r;t++)a[t]=u[t];return a}function C(u,r){var t=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(t!=null){var a,l,s,c,y=[],p=!0,S=!1;try{if(s=(t=t.call(u)).next,r===0){if(Object(t)!==t)return;p=!1}else for(;!(p=(a=s.call(t)).done)&&(y.push(a.value),y.length!==r);p=!0);}catch(o){S=!0,l=o}finally{try{if(!p&&t.return!=null&&(c=t.return(),Object(c)!==c))return}finally{if(S)throw l}}return y}}function H(u){if(Array.isArray(u))return u}var k={toString:function(r){return typeof r.type=="string"&&r.type in this?"enum"in r?this.enum(r):this[r.type](r):r.type?this.getValidClassName(r)||r.type:"const"in r?"".concat(r.const):"oneOf"in r?this.oneOf(r):"unknown"},string:function(r){return r.type},number:function(r){return r.type},boolean:function(r){return r.type},any:function(r){return r.type},object:function(r){var t=this,a=[];return Object.entries(r.properties||{}).forEach(function(l){var s,c=P(l,2),y=c[0],p=c[1];a.push("".concat(y).concat((s=r.required)!==null&&s!==void 0&&s.includes(y)?"":"?",": ").concat(p.type==="object"?"object":t.toString(p)))}),a.length?"{ ".concat(a.join("; ")," }"):"{}"},array:function(r){if(r.items){var t=this.getValidClassName(r.items);return t?"".concat(t,"[]"):"".concat(this.toString(r.items),"[]")}return"any[]"},element:function(r){return"<".concat(r.componentName," />")},function:function(r){var t=this,a=r.signature;if(!a)return"Function";var l="oneOf"in a?a.oneOf:[a];return l.map(function(s){return"".concat(s.isAsync?"async ":"","(").concat(s.arguments.map(function(c){return"".concat(c.key,": ").concat(t.toString(c))}).join(", "),") => ").concat(t.toString(s.returnType))}).join(" | ")},dom:function(r){return r.className||"DOM"},enum:function(r){return r.enum.map(function(t){return JSON.stringify(t)}).join(" | ")},oneOf:function(r){var t=this;return r.oneOf.map(function(a){return t.getValidClassName(a)||t.toString(a)}).join(" | ")},getValidClassName:function(r){return"className"in r&&typeof r.className=="string"&&r.className!=="__type"?r.className:null}},W=function(r){var t=(0,d.useState)(function(){return k.toString(r)}),a=P(t,2),l=a[0],s=a[1];return(0,d.useEffect)(function(){s(k.toString(r))},[r]),d.createElement("code",null,l)},D=function(r){var t,a=(0,R.eL)(),l=a.frontmatter,s=(0,R.cc)(),c=s.components,y=r.id||l.atomId,p=(0,R.YB)();if(!y)throw new Error("`id` properties if required for API component!");var S=c==null?void 0:c[y];return d.createElement("div",{className:"markdown"},d.createElement(O.Z,null,d.createElement("thead",null,d.createElement("tr",null,d.createElement("th",null,p.formatMessage({id:"api.component.name"})),d.createElement("th",null,p.formatMessage({id:"api.component.description"})),d.createElement("th",null,p.formatMessage({id:"api.component.type"})),d.createElement("th",null,p.formatMessage({id:"api.component.default"})))),d.createElement("tbody",null,S&&(t=S.propsConfig)!==null&&t!==void 0&&t.properties?Object.entries(S.propsConfig.properties).map(function(o){var m,g=P(o,2),v=g[0],j=g[1];return d.createElement("tr",{key:v},d.createElement("td",null,v),d.createElement("td",null,j.description||"--"),d.createElement("td",null,d.createElement(W,j)),d.createElement("td",null,d.createElement("code",null,(m=S.propsConfig.required)!==null&&m!==void 0&&m.includes(v)?p.formatMessage({id:"api.component.required"}):JSON.stringify(j.default)||"--")))}):d.createElement("tr",null,d.createElement("td",{colSpan:4},p.formatMessage({id:"api.component.".concat(c?"not.found":"unavailable")},{id:y}))))))};B.Z=D},35532:function(K,B,E){"use strict";var R=E(67294);function d(){return d=Object.assign?Object.assign.bind():function(T){for(var _=1;_<arguments.length;_++){var w=arguments[_];for(var C in w)Object.prototype.hasOwnProperty.call(w,C)&&(T[C]=w[C])}return T},d.apply(this,arguments)}var O=function(_){return React.createElement("span",d({className:"dumi-default-badge"},_))},P=null},67915:function(K,B,E){"use strict";E.d(B,{Z:function(){return r}});var R=E(93096),d=E.n(R),O=E(67294),P=["children"];function T(t,a){return k(t)||H(t,a)||w(t,a)||_()}function _(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function w(t,a){if(t){if(typeof t=="string")return C(t,a);var l=Object.prototype.toString.call(t).slice(8,-1);if(l==="Object"&&t.constructor&&(l=t.constructor.name),l==="Map"||l==="Set")return Array.from(t);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return C(t,a)}}function C(t,a){(a==null||a>t.length)&&(a=t.length);for(var l=0,s=new Array(a);l<a;l++)s[l]=t[l];return s}function H(t,a){var l=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(l!=null){var s,c,y,p,S=[],o=!0,m=!1;try{if(y=(l=l.call(t)).next,a===0){if(Object(l)!==l)return;o=!1}else for(;!(o=(s=y.call(l)).done)&&(S.push(s.value),S.length!==a);o=!0);}catch(g){m=!0,c=g}finally{try{if(!o&&l.return!=null&&(p=l.return(),Object(p)!==p))return}finally{if(m)throw c}}return S}}function k(t){if(Array.isArray(t))return t}function W(t,a){if(t==null)return{};var l=D(t,a),s,c;if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(t);for(c=0;c<y.length;c++)s=y[c],!(a.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(l[s]=t[s])}return l}function D(t,a){if(t==null)return{};var l={},s=Object.keys(t),c,y;for(y=0;y<s.length;y++)c=s[y],!(a.indexOf(c)>=0)&&(l[c]=t[c]);return l}var u=function(a){var l=a.children,s=W(a,P),c=(0,O.useRef)(null),y=(0,O.useState)(!1),p=T(y,2),S=p[0],o=p[1],m=(0,O.useState)(!1),g=T(m,2),v=g[0],j=g[1];return(0,O.useEffect)(function(){var I=c.current;if(I){var e=d()(function(){o(I.scrollLeft>0),j(I.scrollLeft<I.scrollWidth-I.offsetWidth)},100);return e(),I.addEventListener("scroll",e),window.addEventListener("resize",e),function(){I.removeEventListener("scroll",e),window.removeEventListener("resize",e)}}},[]),O.createElement("div",{className:"dumi-default-table"},O.createElement("div",{className:"dumi-default-table-content",ref:c,"data-left-folded":S||void 0,"data-right-folded":v||void 0},O.createElement("table",s,l)))},r=u},66313:function(K,B,E){"use strict";var R=E(70593),d=E(67294);function O(e){"@babel/helpers - typeof";return O=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},O(e)}function P(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(e);n&&(f=f.filter(function(L){return Object.getOwnPropertyDescriptor(e,L).enumerable})),i.push.apply(i,f)}return i}function T(e){for(var n=1;n<arguments.length;n++){var i=arguments[n]!=null?arguments[n]:{};n%2?P(Object(i),!0).forEach(function(f){_(e,f,i[f])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):P(Object(i)).forEach(function(f){Object.defineProperty(e,f,Object.getOwnPropertyDescriptor(i,f))})}return e}function _(e,n,i){return n=w(n),n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function w(e){var n=C(e,"string");return O(n)==="symbol"?n:String(n)}function C(e,n){if(O(e)!=="object"||e===null)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var f=i.call(e,n||"default");if(O(f)!=="object")return f;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function H(e,n){return D(e)||W(e,n)||t(e,n)||k()}function k(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function W(e,n){var i=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(i!=null){var f,L,b,A,N=[],x=!0,F=!1;try{if(b=(i=i.call(e)).next,n===0){if(Object(i)!==i)return;x=!1}else for(;!(x=(f=b.call(i)).done)&&(N.push(f.value),N.length!==n);x=!0);}catch($){F=!0,L=$}finally{try{if(!x&&i.return!=null&&(A=i.return(),Object(A)!==A))return}finally{if(F)throw L}}return N}}function D(e){if(Array.isArray(e))return e}function u(e){return l(e)||a(e)||t(e)||r()}function r(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function t(e,n){if(e){if(typeof e=="string")return s(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);if(i==="Object"&&e.constructor&&(i=e.constructor.name),i==="Map"||i==="Set")return Array.from(e);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return s(e,n)}}function a(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function l(e){if(Array.isArray(e))return s(e)}function s(e,n){(n==null||n>e.length)&&(n=e.length);for(var i=0,f=new Array(n);i<n;i++)f[i]=e[i];return f}function c(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=[];return[].concat(e).forEach(function(f,L){var b="".concat(n?"".concat(n,"-"):"").concat(L);switch(f==null?void 0:f.type){case"ul":{var A,N=((A=i[i.length-1])===null||A===void 0?void 0:A.children)||i,x=c(f.props.children||[],b);N.push.apply(N,u(x));break}case"li":{var F=c(f.props.children,b);i.push({title:[].concat(f.props.children).filter(function($){return $.type!=="ul"}),key:b,children:F,isLeaf:!F.length});break}default:}}),i}var y=function(n){var i=useState(c(n)),f=H(i,2),L=f[0],b=f[1];return useEffect(function(){b(c(n))},[n]),L},p=function(n){var i=n.isLeaf,f=n.expanded;return i?React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(FileOutlined,{fill:"currentColor"})):f?React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(FolderOpenOutlined,{fill:"currentColor"})):React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(FolderOutlined,{fill:"currentColor"}))},S=function(n){var i=n.isLeaf,f=n.expanded;return i?React.createElement("span",{className:"tree-switcher-leaf-line"}):f?React.createElement("span",{className:"tree-switcher-line-icon"},React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(MinusSquareOutlined,{fill:"currentColor"}))):React.createElement("span",{className:"tree-switcher-line-icon"},React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(PlusSquareOutlined,{fill:"currentColor"})))},o=function(){return{height:0,opacity:0}},m=function(n){var i=n.scrollHeight;return{height:i,opacity:1}},g=function(n){return{height:n?n.offsetHeight:0}},v=function(n,i){return(i==null?void 0:i.deadline)===!0||i.propertyName==="height"},j={motionName:"ant-motion-collapse",onAppearStart:o,onEnterStart:o,onAppearActive:m,onEnterActive:m,onLeaveStart:g,onLeaveActive:o,onAppearEnd:v,onEnterEnd:v,onLeaveEnd:v,motionDeadline:500},I=function(e){var n=y(e.children),i=createRef(),f=function(b,A){var N=A.isLeaf;N||b.shiftKey||b.metaKey||b.ctrlKey||i.current.onNodeExpand(b,A)};return React.createElement(Tree,{className:"dumi-default-tree",icon:p,ref:i,itemHeight:20,showLine:!0,selectable:!1,virtual:!1,motion:T(T({},j),{},{motionAppear:!1}),onClick:f,treeData:[{key:"0",title:e.title||"<root>",children:n}],defaultExpandAll:!0,switcherIcon:S})}},93096:function(K,B,E){var R="Expected a function",d=NaN,O="[object Symbol]",P=/^\s+|\s+$/g,T=/^[-+]0x[0-9a-f]+$/i,_=/^0b[01]+$/i,w=/^0o[0-7]+$/i,C=parseInt,H=typeof E.g=="object"&&E.g&&E.g.Object===Object&&E.g,k=typeof self=="object"&&self&&self.Object===Object&&self,W=H||k||Function("return this")(),D=Object.prototype,u=D.toString,r=Math.max,t=Math.min,a=function(){return W.Date.now()};function l(o,m,g){var v,j,I,e,n,i,f=0,L=!1,b=!1,A=!0;if(typeof o!="function")throw new TypeError(R);m=S(m)||0,c(g)&&(L=!!g.leading,b="maxWait"in g,I=b?r(S(g.maxWait)||0,m):I,A="trailing"in g?!!g.trailing:A);function N(h){var M=v,U=j;return v=j=void 0,f=h,e=o.apply(U,M),e}function x(h){return f=h,n=setTimeout(V,m),L?N(h):e}function F(h){var M=h-i,U=h-f,J=m-M;return b?t(J,I-U):J}function $(h){var M=h-i,U=h-f;return i===void 0||M>=m||M<0||b&&U>=I}function V(){var h=a();if($(h))return z(h);n=setTimeout(V,F(h))}function z(h){return n=void 0,A&&v?N(h):(v=j=void 0,e)}function G(){n!==void 0&&clearTimeout(n),f=0,v=i=j=n=void 0}function X(){return n===void 0?e:z(a())}function Z(){var h=a(),M=$(h);if(v=arguments,j=this,i=h,M){if(n===void 0)return x(i);if(b)return n=setTimeout(V,m),N(i)}return n===void 0&&(n=setTimeout(V,m)),e}return Z.cancel=G,Z.flush=X,Z}function s(o,m,g){var v=!0,j=!0;if(typeof o!="function")throw new TypeError(R);return c(g)&&(v="leading"in g?!!g.leading:v,j="trailing"in g?!!g.trailing:j),l(o,m,{leading:v,maxWait:m,trailing:j})}function c(o){var m=typeof o;return!!o&&(m=="object"||m=="function")}function y(o){return!!o&&typeof o=="object"}function p(o){return typeof o=="symbol"||y(o)&&u.call(o)==O}function S(o){if(typeof o=="number")return o;if(p(o))return d;if(c(o)){var m=typeof o.valueOf=="function"?o.valueOf():o;o=c(m)?m+"":m}if(typeof o!="string")return o===0?o:+o;o=o.replace(P,"");var g=_.test(o);return g||w.test(o)?C(o.slice(2),g?2:8):T.test(o)?d:+o}K.exports=s}}]);
