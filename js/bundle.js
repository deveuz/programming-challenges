var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};(function(a,b){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define("Bundle",b):a.Bundle=b()})(this,function(){"use strict";function a(a,b){return 1-3*b+3*a}function b(a,b){return 3*b-6*a}function c(a){return 3*a}function d(d,e,f){return((a(e,f)*d+b(e,f))*d+c(e))*d}function e(d,e,f){return 3*a(e,f)*d*d+2*b(e,f)*d+c(e)}function f(a,b,c,e,f){var g,h,j=0;do h=b+(c-b)/2,g=d(h,e,f)-a,0<g?c=h:b=h;while(Math.abs(g)>k&&++j<l);return h}function g(a,b,c,f){for(var g,h=0;h<j;++h){if(g=e(b,c,f),0===g)return b;var i=d(b,c,f)-a;b-=i/g}return b}function h(a){return a}var i=function(a){a.forEach(function(a){a.hasOwnProperty("prepend")||Object.defineProperty(a,"prepend",{configurable:!0,enumerable:!0,writable:!0,value:function(){var a=Array.prototype.slice.call(arguments),b=document.createDocumentFragment();a.forEach(function(a){var c=a instanceof Node;b.appendChild(c?a:document.createTextNode(a+""))}),this.insertBefore(b,this.firstChild)}})})}([Element.prototype,Document.prototype,DocumentFragment.prototype]),j=4,k=1e-7,l=10,m=11,n=1/(m-1),o="function"==typeof Float32Array,p=function(a,b,c,j){function k(b){for(var d=0,h=1;h!=m-1&&l[h]<=b;++h)d+=n;--h;var i=(b-l[h])/(l[h+1]-l[h]),j=d+i*n,k=e(j,a,c);return k>=1e-3?g(b,j,a,c):0===k?j:f(b,d,d+n,a,c)}if(!(0<=a&&1>=a&&0<=c&&1>=c))throw new Error("bezier x values must be in [0, 1] range");if(a===b&&c===j)return h;for(var l=o?new Float32Array(m):Array(m),p=0;p<m;++p)l[p]=d(p*n,a,c);return function(a){return 0===a?0:1===a?1:d(k(a),b,j)}};(function(){var a=Math.floor,b=function(a){return Array.from(document.querySelectorAll(a))},c={element:{btn:b(".js--spin")[0],diff:b(".js--diff"),container:b(".js--spinner")[0]},isSpinning:!1,minChallenges:10,interval:150,ease:p(.66,.28,.99,.4),levels:[{color:"green",char:"!"},{color:"yellow",char:"!!"},{color:"red",char:"!!!"},{color:"purple",char:"!?!"}],getDifficultySettings:function(){return this.element.diff.filter(function(a){return a.checked}).map(function(a){return parseInt(a.dataset.level)})},getChallenges:function(){for(var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this.minChallenges,c=this.getDifficultySettings(),d=[],e=window["programming challenges v4.0"].filter(function(a){return-1!==c.indexOf(a.level)}),f=0;f<b;f++)d.push(e[a(Math.random()*e.length)]);return d},createChallengeCards:function(a){var b=this,c=[];return this.getChallenges(a).forEach(function(a){var d=b.levels[a.level],e=document.createElement("li");Object.assign(e,{className:"flex spinner__card border--radius margin--pxauto js--spinner-card border--"+d.color,innerHTML:"\n              <section class=\"flex__section margin--autopx\">\n                <span class=\"span span--large strict--center color--"+d.color+"\">"+d.char+"</span>\n              </section>\n              <section class=\"flex__section flex--column margin--autopx\">\n                <h3 class=\"margin--autopx\">"+a.label+"</h3>\n                <small class=\"margin--autopx\">"+a.notes+"</small>\n              </section>\n            "}),c.push(e)}),c},insertChallenges:function(a){for(var b=this,d=c.createChallengeCards(a),e=d.length,f=function(a){var c=b.ease(a/e)*e*b.interval;setTimeout(function(){b.element.container.prepend(d[a]),7<b.cards.length&&b.cards[b.cards.length-1].remove()},c)},g=0;g<e;g++)f(g)},spin:function(){this.isSpinning||this.insertChallenges(a(100*Math.random())+this.minChallenges)},get cards(){return b(".js--spinner-card")},setPosition:function(){var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:a(this.cards.length/2),c=this.cards[0].offsetHeight;console.log("Set position: ",b)}};c.element.btn.addEventListener("click",function(){return c.spin.call(c)}),c.insertChallenges(6)})();return{}});