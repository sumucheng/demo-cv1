parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var n=document.querySelector("#html"),r=document.querySelector("#style"),a="/* 今天要画一个太极八卦图！\n * 首先要准备一个div\n */\n#div1{\n    border:1px solid black;\n    width:300px;\n    height:300px;\n}\n/* 再把div变成一个圆\n */\n#div1{\n    border-radius:50%;\n    box-shadow:0 0 3px rgba(0,0,0,0.5);\n    border:none;\n}\n/* 然后把这个圆涂成一黑一白\n */\n#div1{\n    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%); \n}\n/* 画一个小球\n */\n#div1::before{  \n    background: black;\n    width:50%;\n    height:50%;\n    border-radius:50%;\n    left:50%;\n    transform:translateX(-50%);\n    \n}\n/* 再画一个小球\n */\n#div1::after{\n    background: white;\n    width:50%;\n    height:50%;\n    border-radius:50%;\n    top:50%;\n    left:50%;\n    transform:translateX(-50%);\n}\n/* 在小球的中间再加一个小球\n*/\n#div1::before{  \n    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n}\n#div1::after{\n    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);    \n}\n",e="",d=0,i=function i(){setTimeout(function(){"\n"===a[d]?e+="<br>":" "===a[d]?e+="&nbsp;":e+=a[d],n.innerHTML=e,r.innerHTML=a.substring(0,d),window.scrollTo(0,999999),n.scrollTo(0,999999),(d+=1)<a.length&&i()},15)};i();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.fdde0682.js.map