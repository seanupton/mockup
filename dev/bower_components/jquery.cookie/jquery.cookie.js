!function(a,b,c){function d(a){return a}function e(a){return f(decodeURIComponent(a.replace(h," ")))}function f(a){return 0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")),a}function g(a){return i.json?JSON.parse(a):a}var h=/\+/g,i=a.cookie=function(f,h,j){if(h!==c){if(j=a.extend({},i.defaults,j),null===h&&(j.expires=-1),"number"==typeof j.expires){var k=j.expires,l=j.expires=new Date;l.setDate(l.getDate()+k)}return h=i.json?JSON.stringify(h):String(h),b.cookie=[encodeURIComponent(f),"=",i.raw?h:encodeURIComponent(h),j.expires?"; expires="+j.expires.toUTCString():"",j.path?"; path="+j.path:"",j.domain?"; domain="+j.domain:"",j.secure?"; secure":""].join("")}for(var m=i.raw?d:e,n=b.cookie.split("; "),o=f?null:{},p=0,q=n.length;q>p;p++){var r=n[p].split("="),s=m(r.shift()),t=m(r.join("="));if(f&&f===s){o=g(t);break}f||(o[s]=g(t))}return o};i.defaults={},a.removeCookie=function(b,c){return null!==a.cookie(b)?(a.cookie(b,null,c),!0):!1}}(jQuery,document);