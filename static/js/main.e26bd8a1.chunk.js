(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{107:function(e,t,n){},115:function(e,t,n){},116:function(e,t,n){},117:function(e,t,n){},118:function(e,t,n){},122:function(e,t,n){},123:function(e,t,n){},124:function(e,t,n){"use strict";n.r(t);var a=n(4),c=n(0),r=n.n(c),o=n(15),i=n.n(o),s=(n(88),n.p,n(89),n(18)),j=n(22),d=n(23),l=n(24),b=n(25),u=n(27),h=n(26),O=(n(34),n(90),n(28),n(13)),m=n(10),f=n(14),x=n(7),p=n(8),v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:123456789,t=e,n=987654321,a=4294967295;return function(){var e=((n=36969*(65535&n)+(n>>16)&a)<<16)+(t=18e3*(65535&t)+(t>>16)&a)&a;return(e/=4294967296)+.5}},g=function(e){return e.id},y={first_name:["Anthony","Jacob","Bob","Bara"],last_name:["Nguyen","Hershberger","Myers","Smith"],DOB:["1981/12/25","1999/6/22","2010/2/11"],sex:["M","F"],phone_number:["xxx-xxx-xxx"],number_of_patients:[0,1,2,3,4,5,6],HospitalName:["SQL Injections","Flask Exploits","Athen's Health"]};function C(){var e=Object(c.useState)([{name:"first_name",title:"First Name"},{name:"last_name",title:"Last Name"},{name:"DOB",title:"Date of Birth"},{name:"sex",title:"Sex"},{name:"phone_number",title:"Phone Number"},{name:"number_of_patients",title:"Number of Patients"},{name:"HospitalName",title:"Hospital Name"}]),t=Object(f.a)(e,1)[0],n=Object(c.useState)(function(e){for(var t=e.columnValues,n=void 0===t?y:t,a=e.length,c=e.random,r=void 0===c?v(329972281):c,o=[],i=Object.keys(n),s=function(e){var t={};i.forEach((function(a){var c=n[a];if("function"!==typeof c){for(;2===c.length&&"object"===typeof c[1];)c=c[1][t[c[0]]];var o=c[Math.floor(r()*c.length)];t[a]="object"===typeof o?Object(m.a)({},o):o}else t[a]=c({random:r,index:e,record:t})})),o.push(t)},j=0;j<a;j+=1)s(j);return o}({columnValues:Object(m.a)({id:function(e){return e.index}},y),length:4})),r=Object(f.a)(n,2),o=r[0],i=r[1];return Object(a.jsx)("div",{className:"card",children:Object(a.jsxs)(p.a,{rows:o,columns:t,getRowId:g,children:[Object(a.jsx)(x.k,{}),Object(a.jsx)(x.h,{}),Object(a.jsx)(x.c,{onCommitChanges:function(e){var t,n=e.added,a=e.changed,c=e.deleted;if(n){var r=o.length>0?o[o.length-1].id+1:0;t=[].concat(Object(O.a)(o),Object(O.a)(n.map((function(e,t){return Object(m.a)({id:r+t},e)}))))}if(a&&(t=o.map((function(e){return a[e.id]?Object(m.a)(Object(m.a)({},e),a[e.id]):e}))),c){var s=new Set(c);t=o.filter((function(e){return!s.has(e.id)}))}i(t)}}),Object(a.jsx)(p.c,{}),Object(a.jsx)(p.f,{}),Object(a.jsx)(p.e,{}),Object(a.jsx)(p.d,{showAddCommand:!0,showEditCommand:!0,showDeleteCommand:!0}),Object(a.jsx)(p.g,{}),Object(a.jsx)(p.b,{})]})})}var w=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={},a.handleChange=a.handleChange.bind(Object(b.a)(a)),a}return Object(l.a)(n,[{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(j.a)({},n,a))}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"DoctorsPage",children:[Object(a.jsx)("header",{children:Object(a.jsx)("p",{children:"Doctor's Data Uploader"})}),Object(a.jsx)("div",{}),Object(a.jsx)(C,{})]})}}]),n}(r.a.Component),S=(n(107),n(125),function(e){return e.id}),D={hospital_name:["sql injectors","flask exploit","phpmyadmin nerds"],street_address:["342 SE Cari St.","457 NW Nooj Ave.","3243 W Waat St."],city:["corvegas","corvallis","beton","portland"],state:["oregon","washington","ohio","california"],zip_code:["97034","23646","36237","79673","48734"]};function N(){var e=Object(c.useState)([{name:"hospital_name",title:"Hospital Name"},{name:"street_address",title:"Street Address"},{name:"city",title:"City"},{name:"state",title:"State"},{name:"zip_code",title:"Zip Code"}]),t=Object(f.a)(e,1)[0],n=Object(c.useState)(function(e){for(var t=e.columnValues,n=void 0===t?D:t,a=e.length,c=e.random,r=void 0===c?v(329972281):c,o=[],i=Object.keys(n),s=function(e){var t={};i.forEach((function(a){var c=n[a];if("function"!==typeof c){for(;2===c.length&&"object"===typeof c[1];)c=c[1][t[c[0]]];var o=c[Math.floor(r()*c.length)];t[a]="object"===typeof o?Object(m.a)({},o):o}else t[a]=c({random:r,index:e,record:t})})),o.push(t)},j=0;j<a;j+=1)s(j);return o}({columnValues:Object(m.a)({id:function(e){return e.index}},D),length:8})),r=Object(f.a)(n,2),o=r[0],i=r[1];return Object(a.jsx)("div",{className:"card",children:Object(a.jsxs)(p.a,{rows:o,columns:t,getRowId:S,children:[Object(a.jsx)(x.k,{}),Object(a.jsx)(x.h,{}),Object(a.jsx)(x.c,{onCommitChanges:function(e){var t,n=e.added,a=e.changed,c=e.deleted;if(n){var r=o.length>0?o[o.length-1].id+1:0;t=[].concat(Object(O.a)(o),Object(O.a)(n.map((function(e,t){return Object(m.a)({id:r+t},e)}))))}if(a&&(t=o.map((function(e){return a[e.id]?Object(m.a)(Object(m.a)({},e),a[e.id]):e}))),c){var s=new Set(c);t=o.filter((function(e){return!s.has(e.id)}))}i(t)}}),Object(a.jsx)(p.c,{}),Object(a.jsx)(p.f,{}),Object(a.jsx)(p.e,{}),Object(a.jsx)(p.d,{showAddCommand:!0,showEditCommand:!0,showDeleteCommand:!0}),Object(a.jsx)(p.g,{}),Object(a.jsx)(p.b,{})]})})}var _=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={validate:!1,name:"",streetAddress:"",city:"",state:"",zipCode:""},a.handleChange=a.handleChange.bind(Object(b.a)(a)),a}return Object(l.a)(n,[{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(j.a)({},n,a))}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"HopitalPage",children:[Object(a.jsx)("header",{children:"Hospital's Data Uploader"}),Object(a.jsx)(N,{})]})}}]),n}(r.a.Component),k=(n(115),function(e){return e.id}),I={provider_name:["All Father","City Farm"],deductable:[100.5,200]};function A(){var e=Object(c.useState)([{name:"provider_name",title:"Provider Name"},{name:"deductable",title:"Deductable"}]),t=Object(f.a)(e,1)[0],n=Object(c.useState)(function(e){for(var t=e.columnValues,n=void 0===t?I:t,a=e.length,c=e.random,r=void 0===c?v(329972281):c,o=[],i=Object.keys(n),s=function(e){var t={};i.forEach((function(a){var c=n[a];if("function"!==typeof c){for(;2===c.length&&"object"===typeof c[1];)c=c[1][t[c[0]]];var o=c[Math.floor(r()*c.length)];t[a]="object"===typeof o?Object(m.a)({},o):o}else t[a]=c({random:r,index:e,record:t})})),o.push(t)},j=0;j<a;j+=1)s(j);return o}({columnValues:Object(m.a)({id:function(e){return e.index}},I),length:2})),r=Object(f.a)(n,2),o=r[0],i=r[1];return Object(a.jsx)("div",{className:"card",children:Object(a.jsxs)(p.a,{rows:o,columns:t,getRowId:k,children:[Object(a.jsx)(x.k,{}),Object(a.jsx)(x.h,{}),Object(a.jsx)(x.c,{onCommitChanges:function(e){var t,n=e.added,a=e.changed,c=e.deleted;if(n){var r=o.length>0?o[o.length-1].id+1:0;t=[].concat(Object(O.a)(o),Object(O.a)(n.map((function(e,t){return Object(m.a)({id:r+t},e)}))))}if(a&&(t=o.map((function(e){return a[e.id]?Object(m.a)(Object(m.a)({},e),a[e.id]):e}))),c){var s=new Set(c);t=o.filter((function(e){return!s.has(e.id)}))}i(t)}}),Object(a.jsx)(p.c,{}),Object(a.jsx)(p.f,{}),Object(a.jsx)(p.e,{}),Object(a.jsx)(p.d,{showAddCommand:!0,showEditCommand:!0,showDeleteCommand:!0}),Object(a.jsx)(p.g,{}),Object(a.jsx)(p.b,{})]})})}var P=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={},a.handleChange=a.handleChange.bind(Object(b.a)(a)),a}return Object(l.a)(n,[{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(j.a)({},n,a))}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("header",{children:"Insurance Provider's Data Upload"}),Object(a.jsx)(A,{})]})}}]),n}(r.a.Component),E=(n(116),function(e){return e.id}),H={first_name:["Anthony","Jacob","Bob","Bara"],last_name:["Nguyen","Hershberger","Myers","Smith"],DOB:["1981/12/25","1999/6/22","2010/2/11"],sex:["M","F"],weight:[168,156,300,120],height:[72,72,300,30],phone_number:["xxx-xxx-xxx"],blood_type:["O-","O+","AB+","AB-","A+","A-","B+","B-"],medication_allergies:[1,0],insuranceProvider:["All-Father","Red Sword"],employeeID:[1,2,3,4],hospitalName:["SQL Injections","Flask Exploits","Athen's Health"]};function B(){var e=Object(c.useState)([{name:"first_name",title:"First Name"},{name:"last_name",title:"Last Name"},{name:"DOB",title:"Date of Birth"},{name:"weight",title:"Weight"},{name:"height",title:"Height"},{name:"sex",title:"Sex"},{name:"phone_number",title:"Phone Number"},{name:"blood_type",title:"Blood Type"},{name:"medication_allergies",title:"Medication Allergies"},{name:"insuranceProvider",title:"Insurance Provider"},{name:"employeeID",title:"Doctor's ID"},{name:"hospitalName",title:"Hospital Name"}]),t=Object(f.a)(e,1)[0],n=Object(c.useState)(function(e){for(var t=e.columnValues,n=void 0===t?H:t,a=e.length,c=e.random,r=void 0===c?v(329972281):c,o=[],i=Object.keys(n),s=function(e){var t={};i.forEach((function(a){var c=n[a];if("function"!==typeof c){for(;2===c.length&&"object"===typeof c[1];)c=c[1][t[c[0]]];var o=c[Math.floor(r()*c.length)];t[a]="object"===typeof o?Object(m.a)({},o):o}else t[a]=c({random:r,index:e,record:t})})),o.push(t)},j=0;j<a;j+=1)s(j);return o}({columnValues:Object(m.a)({id:function(e){return e.index}},H),length:8})),r=Object(f.a)(n,2),o=r[0],i=r[1];return Object(a.jsx)("div",{className:"card",children:Object(a.jsxs)(p.a,{rows:o,columns:t,getRowId:E,children:[Object(a.jsx)(x.k,{}),Object(a.jsx)(x.h,{}),Object(a.jsx)(x.c,{onCommitChanges:function(e){var t,n=e.added,a=e.changed,c=e.deleted;if(n){var r=o.length>0?o[o.length-1].id+1:0;t=[].concat(Object(O.a)(o),Object(O.a)(n.map((function(e,t){return Object(m.a)({id:r+t},e)}))))}if(a&&(t=o.map((function(e){return a[e.id]?Object(m.a)(Object(m.a)({},e),a[e.id]):e}))),c){var s=new Set(c);t=o.filter((function(e){return!s.has(e.id)}))}i(t)}}),Object(a.jsx)(p.c,{}),Object(a.jsx)(p.f,{}),Object(a.jsx)(p.e,{}),Object(a.jsx)(p.d,{showAddCommand:!0,showEditCommand:!0,showDeleteCommand:!0}),Object(a.jsx)(p.g,{}),Object(a.jsx)(p.b,{})]})})}var V=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={},a.handleChange=a.handleChange.bind(Object(b.a)(a)),a}return Object(l.a)(n,[{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(j.a)({},n,a))}},{key:"render",value:function(){return Object(a.jsxs)("div",{class:"PatientsPage",children:[Object(a.jsx)("header",{children:Object(a.jsx)("p",{children:"Patient's Data Uploader"})}),Object(a.jsx)(B,{})]})}}]),n}(r.a.Component),M=(n(117),function(e){return e.id}),F={drug_name:["Oxycoton","Ibuprofen"]};function R(){var e=Object(c.useState)([{name:"drug_name",title:"Drug Name"}]),t=Object(f.a)(e,1)[0],n=Object(c.useState)(function(e){for(var t=e.columnValues,n=void 0===t?F:t,a=e.length,c=e.random,r=void 0===c?v(329972281):c,o=[],i=Object.keys(n),s=function(e){var t={};i.forEach((function(a){var c=n[a];if("function"!==typeof c){for(;2===c.length&&"object"===typeof c[1];)c=c[1][t[c[0]]];var o=c[Math.floor(r()*c.length)];t[a]="object"===typeof o?Object(m.a)({},o):o}else t[a]=c({random:r,index:e,record:t})})),o.push(t)},j=0;j<a;j+=1)s(j);return o}({columnValues:Object(m.a)({id:function(e){return e.index}},F),length:2})),r=Object(f.a)(n,2),o=r[0],i=r[1];return Object(a.jsx)("div",{className:"card",children:Object(a.jsxs)(p.a,{rows:o,columns:t,getRowId:M,children:[Object(a.jsx)(x.k,{}),Object(a.jsx)(x.h,{}),Object(a.jsx)(x.c,{onCommitChanges:function(e){var t,n=e.added,a=e.changed,c=e.deleted;if(n){var r=o.length>0?o[o.length-1].id+1:0;t=[].concat(Object(O.a)(o),Object(O.a)(n.map((function(e,t){return Object(m.a)({id:r+t},e)}))))}if(a&&(t=o.map((function(e){return a[e.id]?Object(m.a)(Object(m.a)({},e),a[e.id]):e}))),c){var s=new Set(c);t=o.filter((function(e){return!s.has(e.id)}))}i(t)}}),Object(a.jsx)(p.c,{}),Object(a.jsx)(p.f,{}),Object(a.jsx)(p.e,{}),Object(a.jsx)(p.d,{showAddCommand:!0,showEditCommand:!0,showDeleteCommand:!0}),Object(a.jsx)(p.g,{}),Object(a.jsx)(p.b,{})]})})}var U=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"DrugsPage",children:[Object(a.jsx)("header",{children:Object(a.jsx)("p",{children:"Drug's Data Uploader"})}),Object(a.jsx)("div",{}),Object(a.jsx)(R,{})]})}}]),n}(r.a.Component),L=n(134),W=n(135),z=n(133);n(118);var J=function(){return Object(a.jsx)("div",{children:Object(a.jsxs)(L.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(a.jsx)(L.a.Brand,{href:"https://ninjaco1.github.io/my-app/#/",children:"Hospital for SQL Injectors"}),Object(a.jsx)(L.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(a.jsxs)(L.a.Collapse,{id:"responsive-navbar-nav",children:[Object(a.jsx)(W.a,{className:"mr-auto",children:Object(a.jsxs)(z.a,{title:"Data Uploaders",id:"collapsable-nav-dropdown",children:[Object(a.jsx)(z.a.Item,{href:"/my-app/#/hospitals",children:"Hospitals"}),Object(a.jsx)(z.a.Item,{href:"/my-app/#/doctors",children:"Doctors"}),Object(a.jsx)(z.a.Item,{href:"/my-app/#/patients",children:"Patients"}),Object(a.jsx)(z.a.Item,{href:"/my-app/#/insurance",children:"Insurance Providers"}),Object(a.jsx)(z.a.Item,{href:"/my-app/#/pharmacies",children:"Pharmacies"}),Object(a.jsx)(z.a.Item,{href:"/my-app/#/drugs",children:"Drugs"}),Object(a.jsx)(z.a.Item,{href:"/my-app/#/relationships",children:"Relationships"})]})}),Object(a.jsx)(W.a,{})]})]})})},Q=(n(122),function(e){return e.id}),T={hospital_name:["sql injectors","flask exploit","phpmyadmin nerds"],street_address:["342 SE Cari St.","457 NW Nooj Ave.","3243 W Waat St."],city:["corvegas","corvallis","beton","portland"],state:["oregon","washington","ohio","california"],zip_code:["97034","23646","36237","79673","48734"]};function q(){var e=Object(c.useState)([{name:"hospital_name",title:"Hospital Name"},{name:"street_address",title:"Street Address"},{name:"city",title:"City"},{name:"state",title:"State"},{name:"zip_code",title:"Zip Code"}]),t=Object(f.a)(e,1)[0],n=Object(c.useState)(function(e){for(var t=e.columnValues,n=void 0===t?T:t,a=e.length,c=e.random,r=void 0===c?v(329972281):c,o=[],i=Object.keys(n),s=function(e){var t={};i.forEach((function(a){var c=n[a];if("function"!==typeof c){for(;2===c.length&&"object"===typeof c[1];)c=c[1][t[c[0]]];var o=c[Math.floor(r()*c.length)];t[a]="object"===typeof o?Object(m.a)({},o):o}else t[a]=c({random:r,index:e,record:t})})),o.push(t)},j=0;j<a;j+=1)s(j);return o}({columnValues:Object(m.a)({id:function(e){return e.index}},T),length:8})),r=Object(f.a)(n,2),o=r[0],i=r[1];return Object(a.jsx)("div",{className:"card",children:Object(a.jsxs)(p.a,{rows:o,columns:t,getRowId:Q,children:[Object(a.jsx)(x.k,{}),Object(a.jsx)(x.h,{}),Object(a.jsx)(x.c,{onCommitChanges:function(e){var t,n=e.added,a=e.changed,c=e.deleted;if(n){var r=o.length>0?o[o.length-1].id+1:0;t=[].concat(Object(O.a)(o),Object(O.a)(n.map((function(e,t){return Object(m.a)({id:r+t},e)}))))}if(a&&(t=o.map((function(e){return a[e.id]?Object(m.a)(Object(m.a)({},e),a[e.id]):e}))),c){var s=new Set(c);t=o.filter((function(e){return!s.has(e.id)}))}i(t)}}),Object(a.jsx)(p.c,{}),Object(a.jsx)(p.f,{}),Object(a.jsx)(p.e,{}),Object(a.jsx)(p.d,{showAddCommand:!0,showEditCommand:!0,showDeleteCommand:!0}),Object(a.jsx)(p.g,{}),Object(a.jsx)(p.b,{})]})})}var Z=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={validate:!1},a.handleChange=a.handleChange.bind(Object(b.a)(a)),a}return Object(l.a)(n,[{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(j.a)({},n,a))}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("header",{children:"Pharmacy's Data Uploader"}),Object(a.jsx)(q,{})]})}}]),n}(r.a.Component),G=function(e){return e.id},K={drug_name:["Ibuprofen","Epineferon","Morphine","Oxycodone","Codeine","Aspirin"],pharmacyID:[1,2,3]};function X(){var e=Object(c.useState)([{name:"drug_name",title:"Drug's Name"},{name:"pharmacyID",title:"Pharmacies ID"}]),t=Object(f.a)(e,1)[0],n=Object(c.useState)(function(e){for(var t=e.columnValues,n=void 0===t?K:t,a=e.length,c=e.random,r=void 0===c?v(329972281):c,o=[],i=Object.keys(n),s=function(e){var t={};i.forEach((function(a){var c=n[a];if("function"!==typeof c){for(;2===c.length&&"object"===typeof c[1];)c=c[1][t[c[0]]];var o=c[Math.floor(r()*c.length)];t[a]="object"===typeof o?Object(m.a)({},o):o}else t[a]=c({random:r,index:e,record:t})})),o.push(t)},j=0;j<a;j+=1)s(j);return o}({columnValues:Object(m.a)({id:function(e){return e.index}},K),length:8})),r=Object(f.a)(n,2),o=r[0],i=r[1];return Object(a.jsx)("div",{className:"card",children:Object(a.jsxs)(p.a,{rows:o,columns:t,getRowId:G,children:[Object(a.jsx)(x.k,{}),Object(a.jsx)(x.h,{}),Object(a.jsx)(x.c,{onCommitChanges:function(e){var t,n=e.added,a=e.changed,c=e.deleted;if(n){var r=o.length>0?o[o.length-1].id+1:0;t=[].concat(Object(O.a)(o),Object(O.a)(n.map((function(e,t){return Object(m.a)({id:r+t},e)}))))}if(a&&(t=o.map((function(e){return a[e.id]?Object(m.a)(Object(m.a)({},e),a[e.id]):e}))),c){var s=new Set(c);t=o.filter((function(e){return!s.has(e.id)}))}i(t)}}),Object(a.jsx)(p.c,{}),Object(a.jsx)(p.f,{}),Object(a.jsx)(p.e,{}),Object(a.jsx)(p.d,{showAddCommand:!0,showEditCommand:!0,showDeleteCommand:!0}),Object(a.jsx)(p.g,{}),Object(a.jsx)(p.b,{})]})})}var Y=function(e){return e.id},$={providerName:["All-Father","Red Sword"],HospitalName:["SQL Injections","Flask Exploits","Athen's Health"]};function ee(){var e=Object(c.useState)([{name:"providerName",title:"Provider's Name"},{name:"HospitalName",title:"Hospital's Name"}]),t=Object(f.a)(e,1)[0],n=Object(c.useState)(function(e){for(var t=e.columnValues,n=void 0===t?$:t,a=e.length,c=e.random,r=void 0===c?v(329972281):c,o=[],i=Object.keys(n),s=function(e){var t={};i.forEach((function(a){var c=n[a];if("function"!==typeof c){for(;2===c.length&&"object"===typeof c[1];)c=c[1][t[c[0]]];var o=c[Math.floor(r()*c.length)];t[a]="object"===typeof o?Object(m.a)({},o):o}else t[a]=c({random:r,index:e,record:t})})),o.push(t)},j=0;j<a;j+=1)s(j);return o}({columnValues:Object(m.a)({id:function(e){return e.index}},$),length:8})),r=Object(f.a)(n,2),o=r[0],i=r[1];return Object(a.jsx)("div",{className:"card",children:Object(a.jsxs)(p.a,{rows:o,columns:t,getRowId:Y,children:[Object(a.jsx)(x.k,{}),Object(a.jsx)(x.h,{}),Object(a.jsx)(x.c,{onCommitChanges:function(e){var t,n=e.added,a=e.changed,c=e.deleted;if(n){var r=o.length>0?o[o.length-1].id+1:0;t=[].concat(Object(O.a)(o),Object(O.a)(n.map((function(e,t){return Object(m.a)({id:r+t},e)}))))}if(a&&(t=o.map((function(e){return a[e.id]?Object(m.a)(Object(m.a)({},e),a[e.id]):e}))),c){var s=new Set(c);t=o.filter((function(e){return!s.has(e.id)}))}i(t)}}),Object(a.jsx)(p.c,{}),Object(a.jsx)(p.f,{}),Object(a.jsx)(p.e,{}),Object(a.jsx)(p.d,{showAddCommand:!0,showEditCommand:!0,showDeleteCommand:!0}),Object(a.jsx)(p.g,{}),Object(a.jsx)(p.b,{})]})})}var te=function(e){return e.id},ne={patient_id:[1,2,3,4],pharmacy_id:[1,2,3,4]};function ae(){var e=Object(c.useState)([{name:"patient_id",title:"Patient's ID"},{name:"pharmacy_id",title:"Pharmacies ID"}]),t=Object(f.a)(e,1)[0],n=Object(c.useState)(function(e){for(var t=e.columnValues,n=void 0===t?ne:t,a=e.length,c=e.random,r=void 0===c?v(329972281):c,o=[],i=Object.keys(n),s=function(e){var t={};i.forEach((function(a){var c=n[a];if("function"!==typeof c){for(;2===c.length&&"object"===typeof c[1];)c=c[1][t[c[0]]];var o=c[Math.floor(r()*c.length)];t[a]="object"===typeof o?Object(m.a)({},o):o}else t[a]=c({random:r,index:e,record:t})})),o.push(t)},j=0;j<a;j+=1)s(j);return o}({columnValues:Object(m.a)({id:function(e){return e.index}},ne),length:8})),r=Object(f.a)(n,2),o=r[0],i=r[1];return Object(a.jsx)("div",{className:"card",children:Object(a.jsxs)(p.a,{rows:o,columns:t,getRowId:te,children:[Object(a.jsx)(x.k,{}),Object(a.jsx)(x.h,{}),Object(a.jsx)(x.c,{onCommitChanges:function(e){var t,n=e.added,a=e.changed,c=e.deleted;if(n){var r=o.length>0?o[o.length-1].id+1:0;t=[].concat(Object(O.a)(o),Object(O.a)(n.map((function(e,t){return Object(m.a)({id:r+t},e)}))))}if(a&&(t=o.map((function(e){return a[e.id]?Object(m.a)(Object(m.a)({},e),a[e.id]):e}))),c){var s=new Set(c);t=o.filter((function(e){return!s.has(e.id)}))}i(t)}}),Object(a.jsx)(p.c,{}),Object(a.jsx)(p.f,{}),Object(a.jsx)(p.e,{}),Object(a.jsx)(p.d,{showAddCommand:!0,showEditCommand:!0,showDeleteCommand:!0}),Object(a.jsx)(p.g,{}),Object(a.jsx)(p.b,{})]})})}var ce=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={validate:!1},a.handleChange=a.handleChange.bind(Object(b.a)(a)),a}return Object(l.a)(n,[{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(j.a)({},n,a))}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("header",{children:"DrugsPharmacy's Data Uploader"}),Object(a.jsx)(X,{}),Object(a.jsx)("header",{children:"InsuranceHospitals's Data Uploader"}),Object(a.jsx)(ee,{}),Object(a.jsx)("header",{children:"PharmaciesPatients's Data Uploader"}),Object(a.jsx)(ae,{})]})}}]),n}(r.a.Component);n(123);var re=function(){return Object(a.jsx)("div",{class:"HomePage",children:"Home Page"})};var oe=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(J,{}),Object(a.jsx)(s.a,{exact:!0,path:"/",component:re}),Object(a.jsx)(s.a,{path:"/doctors",component:w}),Object(a.jsx)(s.a,{path:"/hospitals",component:_}),Object(a.jsx)(s.a,{path:"/insurance",component:P}),Object(a.jsx)(s.a,{path:"/patients",component:V}),Object(a.jsx)(s.a,{path:"/pharmacies",component:Z}),Object(a.jsx)(s.a,{path:"/drugs",component:U}),Object(a.jsx)(s.a,{path:"/relationships",component:ce})]})},ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,136)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))},se=n(35);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(se.a,{children:Object(a.jsx)(oe,{})})}),document.getElementById("root")),ie()},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){}},[[124,1,2]]]);
//# sourceMappingURL=main.e26bd8a1.chunk.js.map