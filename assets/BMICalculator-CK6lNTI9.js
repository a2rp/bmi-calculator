import{R as m,j as e,d as o,u as be,T as r}from"./index-k4R5R2SR.js";const pe=o.div`
  position: fixed; inset: 0;
  background: rgba(0,0,0,.45);
  display: grid; place-items: center;
  z-index: 50;
`,fe=o.div`
  width: min(520px, 92vw);
  background: var(--card);
  color: var(--text);
  border: 1px solid var(--border);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,.35);
  padding: 18px;
`,je=o.h3`
  margin: 0 0 6px;
`,ye=o.p`
  margin: 0; color: var(--muted);
`,ve=o.div`
  display: flex; gap: 10px; justify-content: flex-end;
  padding-top: 16px; margin-top: 16px;
  border-top: 1px solid var(--border);
`,re=o.button`
  padding: 10px 14px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: var(--card);
  color: var(--text);
  &:hover { filter: brightness(1.02); }
`,we=o(re)`
  border-color: #ef4444;
`;function Z({open:t,title:s,description:l,confirmLabel:d="Confirm",cancelLabel:k="Cancel",onConfirm:g,onClose:c}){const x=m.useRef(null),N=m.useRef(null);if(m.useEffect(()=>{var T;if(!t)return;N.current=document.activeElement;const y=document.body.style.overflow;document.body.style.overflow="hidden";const f=x.current,b=f==null?void 0:f.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');(T=b==null?void 0:b[0])==null||T.focus();const F=h=>{if(h.key==="Escape"&&(c==null||c()),h.key==="Tab"&&b&&b.length){const v=Array.from(b),R=v[0],C=v[v.length-1];h.shiftKey&&document.activeElement===R?(h.preventDefault(),C.focus()):!h.shiftKey&&document.activeElement===C&&(h.preventDefault(),R.focus())}};return document.addEventListener("keydown",F),()=>{var h,v;document.body.style.overflow=y,document.removeEventListener("keydown",F),N.current&&((v=(h=N.current).focus)==null||v.call(h))}},[t,c]),!t)return null;const S=y=>{y.target===y.currentTarget&&(c==null||c())};return e.jsx(pe,{onMouseDown:S,role:"presentation",children:e.jsxs(fe,{ref:x,role:"dialog","aria-modal":"true","aria-labelledby":"confirm-title","aria-describedby":"confirm-desc",children:[e.jsx(je,{id:"confirm-title",children:s}),e.jsx(ye,{id:"confirm-desc",children:l}),e.jsxs(ve,{children:[e.jsx(re,{onClick:c,children:k}),e.jsx(we,{onClick:()=>{g==null||g(),c==null||c()},children:d})]})]})})}const J=o.div`
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 20px;
`,ke=o.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;
`,Ne=o.form`
  display: grid;
  gap: 16px;
`,K=o.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 180px 1fr;
  align-items: center;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,M=o.label`
  font-weight: 600;
`,O=o.div`
  display: flex; gap: 10px; align-items: center; flex-wrap: wrap;
`,_=o.input`
  width: 140px;
  max-width: 100%;
  padding: 10px 12px;
  border: 1px solid var(--border);
  background: var(--card);
  color: var(--text);
  border-radius: 10px;
  outline: none;
  &[aria-invalid="true"] { border-color: #ef4444; }
`,Q=o.select`
  padding: 10px 12px;
  border: 1px solid var(--border);
  background: var(--card);
  color: var(--text);
  border-radius: 10px;
`,B=o.button`
  padding: 10px 14px;
  border: 1px solid var(--border);
  background: var(--card);
  color: var(--text);
  border-radius: 10px;
  &:hover { filter: brightness(1.02); }
`,E=o.span`
  display: inline-block;
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: ${({tone:t})=>t||"var(--card)"};
  color: var(--text);
`,Se=o.table`
  width: 100%;
  border-collapse: collapse;
  th, td {
    border-bottom: 1px solid var(--border);
    padding: 10px;
    text-align: left;
  }
  th { font-weight: 700; }
`,V=o.div`
  font-size: 12px; color: var(--muted);
`,W=o.div`
  font-size: 12px; color: #ef4444;
`,X=o.div`
  display: flex; gap: 10px; flex-wrap: wrap;
`;function Ie(t,s,l){return Math.max(s,Math.min(l,t))}const ne=.45359237,Re=30.48,Ue=2.54;function ee(t,s){const l=Number(t);return Number.isFinite(l)?s==="lb"?l*ne:l:NaN}function De({cm:t,ft:s,inch:l},d){if(d==="cm"){const x=Number(t);return Number.isFinite(x)?x/100:NaN}const k=Number(s),g=Number(l);return!Number.isFinite(k)||!Number.isFinite(g)?NaN:(k*Re+g*Ue)/100}function te(t,s){return s==="lb"?t/ne:t}function Fe(t){return t<18.5?{key:"underweight",color:"rgba(59,130,246,.15)"}:t<25?{key:"normal",color:"rgba(34,197,94,.15)"}:t<30?{key:"overweight",color:"rgba(234,179,8,.15)"}:t<35?{key:"obese1",color:"rgba(248,113,113,.18)"}:t<40?{key:"obese2",color:"rgba(239,68,68,.22)"}:{key:"obese3",color:"rgba(220,38,38,.26)"}}function Te(t){const s=18.5*t*t,l=24.9*t*t;return[s,l]}function ie(t){const s=new Date(t),l=new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Kolkata",month:"short",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).formatToParts(s),d=y=>{var f;return((f=l.find(b=>b.type===y))==null?void 0:f.value)||""},k=d("month"),g=d("day"),c=d("year"),x=d("hour"),N=d("minute"),S=d("second");return`${k} ${g}, ${c}, ${x}:${N}:${S} hrs`}const H="bmi.history.v1";function $e(){var q;const{t}=be(),[s,l]=m.useState("kg"),[d,k]=m.useState("cm"),[g,c]=m.useState(""),[x,N]=m.useState(""),[S,y]=m.useState(""),[f,b]=m.useState(""),[F,T]=m.useState(null),[h,v]=m.useState(null),[R,C]=m.useState(null),[a,A]=m.useState({}),[L,z]=m.useState(()=>{try{return JSON.parse(localStorage.getItem(H)||"[]")}catch{return[]}});function se(){const i={},p=Number(g);if(!(p>0))i.weight=t("bmi.err.positive");else{const n=ee(p,s);n>=20&&n<=300||(i.weight=t("bmi.err.range.weight"))}if(d==="cm"){const n=Number(x);n>0?n>=100&&n<=250||(i.height=t("bmi.err.range.height")):i.height=t("bmi.err.positive")}else{const n=Number(S),j=Number(f);n>0||j>0?(n>=3&&n<=8||(i.height=t("bmi.err.range.height")),j>=0&&j<12||(i.heightIn=t("bmi.err.inches"))):i.height=t("bmi.err.positive")}return A(i),Object.keys(i).length===0}function oe(){c(""),N(""),y(""),b(""),T(null),v(null),C(null),A({})}function ce(i){if(i==null||i.preventDefault(),!se())return;const p=ee(g,s),n=De({cm:x,ft:S,inch:f},d);if(!Number.isFinite(p)||!Number.isFinite(n)||n===0){A({generic:t("bmi.err.generic")});return}const j=p/(n*n),D=Number(j.toFixed(2)),I=Fe(D),[u,$]=Te(n),w=te(u,s),ue=te($,s);T(D),v(I),C([Number(w.toFixed(1)),Number(ue.toFixed(1))]);const ge={id:crypto.randomUUID(),ts:new Date().toISOString(),weight:Number(g),weightUnit:s,height:d==="cm"?{unit:"cm",cm:Number(x)}:{unit:"ftin",ft:Number(S),inch:Number(f)},bmi:D,category:I.key};z(xe=>{const P=[ge,...xe].slice(0,20);return localStorage.setItem(H,JSON.stringify(P)),P})}function ae(i){z(p=>{const n=p.filter(j=>j.id!==i);return localStorage.setItem(H,JSON.stringify(n)),n})}function le(){localStorage.removeItem(H),z([])}function de(){if(L.length===0)return;const i=["timestamp","weight","weight_unit","height","height_unit","bmi","category"],p=L.map(u=>{const $=u.height.unit==="cm"?u.height.cm:`${u.height.ft}ft ${u.height.inch}in`,w=u.height.unit;return[u.ts,u.weight,u.weightUnit,$,w,u.bmi,u.category]}),n=[i,...p].map(u=>u.map($=>{const w=String($??"");return w.includes(",")||w.includes('"')||w.includes(`
`)?`"${w.replace(/"/g,'""')}"`:w}).join(",")).join(`
`),j=new Blob([n],{type:"text/csv;charset=utf-8;"}),D=URL.createObjectURL(j),I=document.createElement("a");I.href=D,I.download=`bmi_history_${new Date().toISOString().slice(0,10)}.csv`,document.body.appendChild(I),I.click(),I.remove(),URL.revokeObjectURL(D)}const he=()=>d==="cm"?e.jsxs(O,{children:[e.jsx(_,{id:"height-cm",inputMode:"decimal",placeholder:t("bmi.ph.height.cm"),value:x,onChange:i=>N(i.target.value.replace(",",".")),"aria-invalid":!!a.height,"aria-describedby":a.height?"err-height":void 0}),e.jsx(E,{children:t("bmi.unit.cm")})]}):e.jsxs(O,{children:[e.jsx(_,{id:"height-ft",inputMode:"numeric",placeholder:t("bmi.ph.height.ft"),value:S,onChange:i=>y(i.target.value.replace(",",".")),"aria-invalid":!!a.height,"aria-describedby":a.height||a.heightIn?"err-height":void 0}),e.jsx(E,{children:"ft"}),e.jsx(_,{id:"height-in",inputMode:"decimal",placeholder:t("bmi.ph.height.in"),value:f,onChange:i=>{const p=i.target.value.replace(",","."),n=Number(p);if(Number.isFinite(n)){const j=Ie(n,0,11.9);b(String(j))}else b(p)},"aria-invalid":!!a.heightIn,"aria-describedby":a.heightIn?"err-height":void 0}),e.jsx(E,{children:"in"})]}),[me,G]=m.useState(!1),[U,Y]=m.useState({open:!1,row:null});return e.jsxs(ke,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:e.jsx(r,{keyName:"bmi.title"})}),e.jsx("p",{className:"muted",children:e.jsx(r,{keyName:"bmi.desc"})})]}),e.jsxs(J,{as:Ne,onSubmit:ce,noValidate:!0,children:[e.jsxs(K,{children:[e.jsx(M,{htmlFor:"unit-weight",children:e.jsx(r,{keyName:"bmi.label.weightUnit"})}),e.jsx(O,{children:e.jsxs(Q,{id:"unit-weight",value:s,onChange:i=>l(i.target.value),"aria-label":t("bmi.label.weightUnit"),children:[e.jsx("option",{value:"kg",children:t("bmi.unit.kg")}),e.jsx("option",{value:"lb",children:t("bmi.unit.lb")})]})})]}),e.jsxs(K,{children:[e.jsx(M,{htmlFor:"weight",children:e.jsx(r,{keyName:"bmi.label.weight"})}),e.jsxs(O,{children:[e.jsx(_,{id:"weight",inputMode:"decimal",placeholder:t("bmi.ph.weight"),value:g,onChange:i=>c(i.target.value.replace(",",".")),"aria-invalid":!!a.weight,"aria-describedby":a.weight?"err-weight":void 0}),e.jsx(E,{children:s.toUpperCase()})]}),a.weight&&e.jsx(W,{id:"err-weight",children:a.weight}),e.jsx(V,{children:t("bmi.help.weight")})]}),e.jsxs(K,{children:[e.jsx(M,{htmlFor:"unit-height",children:e.jsx(r,{keyName:"bmi.label.heightUnit"})}),e.jsx(O,{children:e.jsxs(Q,{id:"unit-height",value:d,onChange:i=>k(i.target.value),"aria-label":t("bmi.label.heightUnit"),children:[e.jsx("option",{value:"cm",children:t("bmi.unit.cm")}),e.jsx("option",{value:"ftin",children:t("bmi.unit.ftin")})]})})]}),e.jsxs(K,{children:[e.jsx(M,{children:e.jsx(r,{keyName:"bmi.label.height"})}),e.jsxs("div",{children:[e.jsx(he,{}),(a.height||a.heightIn)&&e.jsx(W,{id:"err-height",children:a.height||a.heightIn}),e.jsx(V,{children:t("bmi.help.height")})]})]}),a.generic&&e.jsx(W,{role:"alert",children:a.generic}),e.jsxs(X,{children:[e.jsx(B,{type:"submit",children:e.jsx(r,{keyName:"bmi.action.calc"})}),e.jsx(B,{type:"button",onClick:oe,children:e.jsx(r,{keyName:"bmi.action.reset"})})]})]}),F!==null&&e.jsxs(J,{"aria-live":"polite",children:[e.jsx("h3",{children:e.jsx(r,{keyName:"bmi.result.title"})}),e.jsxs("p",{children:[e.jsxs("strong",{children:[e.jsx(r,{keyName:"bmi.result.bmi"}),":"]})," ",F]}),e.jsxs("p",{children:[e.jsxs("strong",{children:[e.jsx(r,{keyName:"bmi.result.category"}),":"]})," ",e.jsx(E,{tone:h==null?void 0:h.color,children:e.jsx(r,{keyName:`bmi.cat.${h==null?void 0:h.key}`})})]}),R&&e.jsxs("p",{children:[e.jsxs("strong",{children:[e.jsx(r,{keyName:"bmi.result.healthyRange"}),":"]})," ",R[0]," – ",R[1]," ",s.toUpperCase()]}),e.jsx(V,{children:e.jsx(r,{keyName:"bmi.disclaimer"})})]}),e.jsxs(J,{children:[e.jsx("h3",{children:e.jsx(r,{keyName:"bmi.history.title"})}),L.length===0?e.jsx("p",{children:e.jsx(r,{keyName:"bmi.history.empty"})}):e.jsxs(e.Fragment,{children:[e.jsxs(Se,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(r,{keyName:"bmi.th.date"})}),e.jsx("th",{children:e.jsx(r,{keyName:"bmi.th.weight"})}),e.jsx("th",{children:e.jsx(r,{keyName:"bmi.th.height"})}),e.jsx("th",{children:e.jsx(r,{keyName:"bmi.th.bmi"})}),e.jsx("th",{children:e.jsx(r,{keyName:"bmi.th.category"})}),e.jsx("th",{})]})}),e.jsx("tbody",{children:L.map(i=>e.jsxs("tr",{children:[e.jsx("td",{children:ie(i.ts)}),e.jsxs("td",{children:[i.weight," ",i.weightUnit.toUpperCase()]}),e.jsx("td",{children:i.height.unit==="cm"?`${i.height.cm} cm`:`${i.height.ft} ft ${i.height.inch} in`}),e.jsx("td",{children:i.bmi}),e.jsx("td",{children:e.jsx(r,{keyName:`bmi.cat.${i.category}`})}),e.jsx("td",{children:e.jsx(B,{type:"button",onClick:()=>Y({open:!0,row:i}),children:e.jsx(r,{keyName:"bmi.history.delete"})})})]},i.id))})]}),e.jsx(Z,{open:me,title:t("confirm.clearHistory.title"),description:t("confirm.clearHistory.desc"),confirmLabel:t("confirm.clearHistory.confirm"),cancelLabel:t("confirm.cancel"),onConfirm:le,onClose:()=>G(!1)}),e.jsx(Z,{open:U.open,title:t("confirm.deleteRow.title"),description:t("confirm.deleteRow.desc",{bmi:((q=U.row)==null?void 0:q.bmi)??"",date:U.row?ie(U.row.ts):""}),confirmLabel:t("confirm.deleteRow.confirm"),cancelLabel:t("confirm.cancel"),onConfirm:()=>U.row&&ae(U.row.id),onClose:()=>Y({open:!1,row:null})}),e.jsxs(X,{style:{marginTop:12},children:[e.jsx(B,{type:"button",onClick:de,children:e.jsx(r,{keyName:"bmi.history.export"})}),e.jsx(B,{type:"button",onClick:()=>G(!0),children:e.jsx(r,{keyName:"bmi.history.clear"})})]})]})]})]})}export{$e as default};
