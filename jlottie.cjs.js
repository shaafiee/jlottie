/*!
 * @lottiefiles/jlottie v1.0.0
 */
"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var e="http://www.w3.org/2000/svg",n=[],r=[],a=-1,o=!1;function s(t,e,n,r,a,o,s,c,i,p,l,u){var h=[];e.hasOwnProperty("x")||e.length>=1&&(e.x=e[0],"p"!=i&&"s"!=i||(e.y=e[1])),n.hasOwnProperty("x")||n.length>=1&&(n.x=e[0],"p"!=i&&"s"!=i||(n.y=e[1])),"s"==i&&(e.x.length>1&&(e.x=e.x[0],e.y=e.y[0]),n.x.length>1&&(n.x=n.x[0],n.y=n.y[0]));for(var _,d,y=o-a,m=a,f=1;f<y;f++){if(d=1-(_=f/y),h.push({_comp:1,t:0}),m++,h[h.length-1]._frame=parseInt(m),h[h.length-1].t=parseInt(m),h[h.length-1].s=[],"ks"!=i)h[h.length-1].s.push(Math.pow(d,3)*t[0]+3*Math.pow(d,2)*_*(e.x+t[0])+3*d*Math.pow(_,2)*(n.x+r[0])+Math.pow(_,3)*r[0]),"x"!=i&&"y"!=i&&("p"!=i&&"s"!=i||h[h.length-1].s.push(Math.pow(d,3)*t[1]+3*Math.pow(d,2)*_*(e.y+t[1])+3*d*Math.pow(_,2)*(n.y+r[1])+Math.pow(_,3)*r[1]));else{h[h.length-1].s.push({i:[],o:[],v:[]});for(var g=0;g<t[0].i.length;g++)h[h.length-1].s[h[h.length-1].s.length-1].i.push([Math.pow(d,3)*t[0].i[g][0]+3*Math.pow(d,2)*_*(e.x+t[0].i[g][0])+3*d*Math.pow(_,2)*(n.x+r[0].i[g][0])+Math.pow(_,3)*r[0].i[g][0],Math.pow(d,3)*t[0].i[g][1]+3*Math.pow(d,2)*_*(e.y+t[0].i[g][1])+3*d*Math.pow(_,2)*(n.y+r[0].i[g][1])+Math.pow(_,3)*r[0].i[g][1]]),h[h.length-1].s[h[h.length-1].s.length-1].o.push([Math.pow(d,3)*t[0].o[g][0]+3*Math.pow(d,2)*_*(e.x+t[0].o[g][0])+3*d*Math.pow(_,2)*(n.x+r[0].o[g][0])+Math.pow(_,3)*r[0].o[g][0],Math.pow(d,3)*t[0].o[g][1]+3*Math.pow(d,2)*_*(e.y+t[0].o[g][1])+3*d*Math.pow(_,2)*(n.y+r[0].o[g][1])+Math.pow(_,3)*r[0].o[g][1]]),h[h.length-1].s[h[h.length-1].s.length-1].v.push([Math.pow(d,3)*t[0].v[g][0]+3*Math.pow(d,2)*_*(e.x+t[0].v[g][0])+3*d*Math.pow(_,2)*(n.x+r[0].v[g][0])+Math.pow(_,3)*r[0].v[g][0],Math.pow(d,3)*t[0].v[g][1]+3*Math.pow(d,2)*_*(e.y+t[0].v[g][1])+3*d*Math.pow(_,2)*(n.y+r[0].v[g][1])+Math.pow(_,3)*r[0].v[g][1]])}p&&"ks"!=i&&k(m,h[h.length-1].s,s,c,i,p,l,u)}return h}var c={};function i(t,e){for(var r=0;r<n[t]._refObj.length;r++)for(var a=n[t]._refObj[r],o=!1,s=e-1;s>=0;s--)for(var c=0;c<n[t]._scene[s]._transform.length;c++){if(n[t]._scene[s]._transform[c].refObj==a&&(currentObj=document.getElementById(n[t]._scene[s]._transform[c].refObj),currentObjOther=document.getElementById(n[t]._scene[s]._transform[c].refObjOther),n[t]._scene[s]._transform[c].isTween||n[t]._scene[s]._transform[c].combined.length>0)){n[t]._scene[s]._transform[c].isTween&&currentObj.setAttribute("d",n[t]._scene[s]._transform[c].dataString),currentObj.setAttribute("transform",n[t]._scene[s]._transform[c].combined),currentObjOther.setAttribute("opacity",n[t]._scene[s]._transform[c].opacity),o=!0;break}if(o)break}}function p(){for(var t,e=Date.now(),r=0;r<=a;r++)if(n[r]._loaded&&e-n[r]._lastTime>=n[r]._frameTime){if(n[r]._removed||n[r]._paused)continue;if(n[r]._lastTime=e,n[r]._currentFrame++,n[r]._currentFrame>=n[r]._totalFrames&&(n[r]._currentFrame=0,!n[r]._loop)){n[r]._paused=!0,c.goToAndStop(n[r]._totalFrames-1,"",n[r]._elementId);continue}for(var o=0;o<n[r]._scene[n[r]._currentFrame]._transform.length;o++)n[r]._scene[n[r]._currentFrame]._transform[o].refObj.length>0&&(t=document.getElementById(n[r]._scene[n[r]._currentFrame]._transform[o].refObj),currentObjOther=document.getElementById(n[r]._scene[n[r]._currentFrame]._transform[o].refObjOther),n[r]._scene[n[r]._currentFrame]._transform[o].isTween&&t.setAttribute("d",n[r]._scene[n[r]._currentFrame]._transform[o].dataString),t.setAttribute("transform",n[r]._scene[n[r]._currentFrame]._transform[o].combined),currentObjOther.setAttribute("opacity",n[r]._scene[n[r]._currentFrame]._transform[o].opacity)),n[r]._scene[n[r]._currentFrame]._transform[o].hide&&(document.getElementById(n[r]._scene[n[r]._currentFrame]._transform[o].stageObj).style.display="none"),n[r]._scene[n[r]._currentFrame]._transform[o].show&&(document.getElementById(n[r]._scene[n[r]._currentFrame]._transform[o].stageObj).style.display="block")}window.requestAnimationFrame(p)}function l(){var t={translateX:0,translateY:0,scaleFactorX:0,scaleFactorY:0,rotateAngle:0,opacityFactor:0,anchorX:0,anchorY:0,paddingX:0,paddingY:0,paddingAnchorX:0,paddingAnchorY:0,isTranslate:!1,dataString:"",isTween:!1,tweenShape:"",refObj:"",combined:"",translate:"",rotate:"",scale:"",opacity:1,hide:!1,show:!1,inPoint:-1,outPoint:-1,isLayer:!0,stageObj:"",isSet:!1};return t}function u(){var t={stageObj:"",refObj:"",hide:!1,show:!1};return t}function h(t,e,r){if(void 0===n[e]._scene[parseInt(r)])return t;for(var a=0;a<n[e]._scene[parseInt(r)]._transform.length;a++)if(n[e]._scene[parseInt(r)]._transform[a].refObj==t.refObj){t=n[e]._scene[parseInt(r)]._transform[a],found=1;break}return t}function _(t,e,a,o){o>n[t]._totalFrames&&(o=n[t]._totalFrames);var s=u();if(a>-1){r=a;for(var c=0;c<n[t]._scene[parseInt(r)]._transform.length;c++)if(n[t]._scene[parseInt(r)]._transform[c].stageObj==e){s=n[t]._scene[parseInt(r)]._transform[c];break}s.stageObj=e,s.show=!0,n[t]._scene[parseInt(r)]._transform.push(s)}if(s=u(),o>-1){r=o;for(c=0;c<n[t]._scene[parseInt(r)]._transform.length;c++)if(n[t]._scene[parseInt(r)]._transform[c].stageObj==e){s=n[t]._scene[parseInt(r)]._transform[c];break}s.stageObj=e,s.hide=!0,n[t]._scene[parseInt(r)]._transform.push(s)}else r=0;if(s=u(),o>-1&&a>0){r=0;for(c=0;c<n[t]._scene[parseInt(r)]._transform.length;c++)if(n[t]._scene[parseInt(r)]._transform[c].stageObj==e){s=n[t]._scene[parseInt(r)]._transform[c];break}s.stageObj=e,s.hide=!0,n[t]._scene[parseInt(r)]._transform.push(s)}var i=0;if(r>1)for(var p=0;p<=n[t]._totalFrames;p++)for(c=0;c<n[t]._scene[p]._transform.length;c++)n[t]._scene[p]._transform[c].stageObj==e&&(n[t]._scene[p]._transform[c].show&&(i=1),n[t]._scene[p]._transform[c].hide&&(i=0),1==i&&(n[t]._scene[p]._transform[c].show=!0))}function k(t,e,r,a,o,s,c,i){if(!(t<0||s<1||t>n[a]._totalFrames)){var p=l(),u=0;if(r&&(n[a].hasOwnProperty("_currentLayerGroup")?(n[a]._currentLayerGroup._inPoint>=0&&(p.inPoint=parseInt(n[a]._currentLayerGroup._inPoint)),n[a]._currentLayerGroup._outPoint>0&&(p.outPoint=parseInt(n[a]._currentLayerGroup._outPoint))):(n[a]._currentLayer._inPoint>=0&&(p.inPoint=parseInt(n[a]._currentLayer._inPoint)),n[a]._currentLayer._outPoint>0&&(p.outPoint=parseInt(n[a]._currentLayer._outPoint)))),p.inPoint<0&&p.outPoint<0&&t!=p.inPoint&&t!=p.outPoint)if(Array.isArray(e)){if(u=e[0],Number.isNaN(u))return}else if(u=e,Number.isNaN(u))return;r?(p.isLayer=!0,c.td>0?p.refObj="".concat(a,"_").concat(i,"_layerGroup").concat(c._layer):p.refObj="".concat(a,"_").concat(i,"_layerTranslate").concat(c._layer),p.refObjOther="".concat(a,"_").concat(i,"_layerGroup").concat(c._layer)):(p.isLayer=!1,p.refObj="".concat(a,"_group").concat(n[a]._currentShapeGroup),p.refObjOther="".concat(a,"_group").concat(n[a]._currentShapeGroup)),p.anchorX=c._anchorX,p.anchorY=c._anchorY,p=h(p,a,t),n[a]._instated.hasOwnProperty(p.refObj)||(n[a]._refObj.push(p.refObj),n[a]._objSize[p.refObj]=[],n[a]._objSize[p.refObj][0]=document.getElementById(p.refObj).getBoundingClientRect().width,n[a]._objSize[p.refObj][1]=document.getElementById(p.refObj).getBoundingClientRect().height),c._layer;var _,k,d=0;if("r"==o&&(p.rotateAngle+=u,c.hasOwnProperty("_anchorX")&&c.hasOwnProperty("_anchorY")?p.rotate="rotate(".concat(p.rotateAngle,",").concat(c._anchorX,",").concat(c._anchorY,") "):p.rotate="rotate(".concat(p.rotateAngle,",").concat(document.getElementById(p.refObj).getBoundingClientRect().width/2,",").concat(document.getElementById(p.refObj).getBoundingClientRect().height/2,") ")),"s"==o)p.scaleFactorX+=u,tempBoundingW=n[a]._objSize[p.refObj][0],tempBoundingH=n[a]._objSize[p.refObj][1],e.length>1?(p.scaleFactorY+=e[1],_=1-p.scaleFactorX/100,k=1-p.scaleFactorY/100):(_=1-p.scaleFactorX/100,k=1-p.scaleFactorX/100),p.scale="scale(".concat(p.scaleFactorX/100,",").concat(p.scaleFactorY/100,") "),p.paddingX=(p.anchorX-tempBoundingW)*_+tempBoundingW*_,p.paddingY=(p.anchorY-tempBoundingH)*k+tempBoundingH*k,p.paddingAnchorX=p.anchorX*_,p.paddingAnchorY=p.anchorY*k;"p"==o&&(d=e[1],c.hasOwnProperty("_anchorX")&&(p.translateX+=u),c.hasOwnProperty("_anchorY")&&(p.translateY+=d),p.translate="translate(".concat(p.translateX-p.anchorX,",").concat(p.translateY-p.anchorY,") "),p.isTranslate=!0),p.isTranslate||(p.translate="translate(".concat(p.paddingX,",").concat(p.paddingY,") ")),"o"==o&&(p.opacityFactor+=u,p.opacity=p.opacityFactor/100),p.combined=p.translate+p.scale+p.rotate,p.isSet=!0,n[a]._scene[parseInt(t)]._transform.push(p),n[a]._instated.hasOwnProperty(p.refObj)||(n[a]._instated[p.refObj]=1,n[a]._scene[0]._transform.push(p))}}function d(t,e,n,r,a,o,c){for(var i,p=0,l=t[e].k.length,u=l,h={x:0,y:0};p<l-1;){if(!0,!0,t[e].k[p].hasOwnProperty("_comp"));else{var _;a>-1&&k(t[e].k[p].t,t[e].k[p].s,n,r,e,a,o,c),t[e].k[p].hasOwnProperty("e")?i=t[e].k[p].e:t[e].k[p+1].hasOwnProperty("s")&&(i=t[e].k[p+1].s),t[e].k[p+1].hasOwnProperty("i")&&"ks"!=e&&(t[e].k[p+1].i.x<1&&(t[e].k[p+1].i.x=0),t[e].k[p+1].i.y<1&&(t[e].k[p+1].i.y=0)),t[e].k[p].hasOwnProperty("o")&&"ks"!=e&&(t[e].k[p].o.x<1&&(t[e].k[p].o.x=0),t[e].k[p].o.y<1&&(t[e].k[p].o.y=0));for(var d=(_=t[e].k[p+1].hasOwnProperty("i")&&t[e].k[p].hasOwnProperty("o")?s(t[e].k[p].s,t[e].k[p].o,t[e].k[p+1].i,i,t[e].k[p].t,t[e].k[p+1].t,n,r,e,a,o,c):t[e].k[p].hasOwnProperty("o")?s(t[e].k[p].s,t[e].k[p].o,h,i,t[e].k[p].t,t[e].k[p+1].t,n,r,e,a,o,c):s(t[e].k[p].s,h,h,i,t[e].k[p].t,t[e].k[p+1].t,n,r,e,a,o,c)).length-1;d>=0;d--)t[e].k.splice(p+1,0,_[d]);p+=(l=t[e].k.length)-u,u=l}p+=1}return t}function y(t,e,n,r,a,o,s,c){return t.hasOwnProperty(n)&&(t[n].hasOwnProperty("x")&&t[n].hasOwnProperty("y")&&(t=function(t,e,n,r,a,o,s,c){if(t[n].k=[],t[n].x.k.length>1&&(t[n]=d(t[n],"x",r,a,!1,s,c)),t[n].y.k.length>1&&(t[n]=d(t[n],"y",r,a,!1,s,c)),!Array.isArray(t[n].x.k)){for(var i=0;i<t[n].y.k.length;i++)t[n].y.k[i].hasOwnProperty("s")&&t[n].k.push({i:[0,0,0],o:[0,0,0],s:[t[n].x.k,t[n].y.k[i].s[0],0],t:t[n].y.k[i].t});for(i=0;i<t[n].k.length;i++)k(t[n].k[i].t,t[n].k[i].s,r,a,n,o,s,c);return t}if(!t[n].y.k.isArray){for(i=0;i<t[n].x.k.length;i++)t[n].x.k[i].hasOwnProperty("s")&&t[n].k.push({i:[0,0,0],o:[0,0,0],s:[t[n].x.k[i].s[0],t[n].y.k,0],t:t[n].x.k[i].t});for(i=0;i<t[n].k.length;i++)k(t[n].k[i].t,t[n].k[i].s,r,a,n,o,s,c);return t}if(t[n].x.k.length>t[n].y.k.length){for(i=0;i<t[n].x.k.length;i++)t[n].k.push({i:[0,0,0],o:[0,0,0],s:[t[n].x.k[i].s[0],0,0],t:t[n].x.k[i].t});for(i=0;i<t[n].y.k.length;i++)t[n].k[0].t>t[n].y.k[i].t?t[n].k.splice(i,0,{i:[0,0,0],o:[0,0,0],s:[0,t[n].y.k[i].s[0],0],t:t[n].y.k[i].t}):t[n].k[0].t<t[n].y.k[i].t?t[n].k.push({i:[0,0,0],o:[0,0,0],s:[0,t[n].y.k[i].s[0],0],t:t[n].y.k[i].t}):t[n].k[0].t==t[n].y.k[i].t&&(t[n].k.s[1]=t[n].y.k[i].s[0]);for(i=0;i<t[n].k.length;i++)k(t[n].k[i].t,t[n].k[i].s,r,a,n,o,s);return t}if(t[n].x.k.length<t[n].y.k.length){for(i=0;i<t[n].y.k.length;i++)t[n].k.push({i:[0,0,0],o:[0,0,0],s:[0,t[n].y.k[i].s[0],0],t:t[n].y.k[i].t});for(i=0;i<t[n].x.k.length;i++)t[n].k[0].t>t[n].x.k[i].t?t[n].k.splice(i,0,{i:[0,0,0],o:[0,0,0],s:[t[n].x.k[i].s[0],0,0],t:t[n].x.k[i].t}):t[n].k[0].t<t[n].x.k[i].t?t[n].k.push({i:[0,0,0],o:[0,0,0],s:[t[n].x.k[i].s[0],0,0],t:t[n].x.k[i].t}):t[n].k[0].t==t[n].x.k[i].t&&(t[n].k.s[0]=t[n].x.k[i].s[0]);for(i=0;i<t[n].k.length;i++)k(t[n].k[i].t,t[n].k[i].s,r,a,n,o,s,c);return t}return t}(t,0,n,r,a,o,s,c)),t[n].hasOwnProperty("k")&&t[n].k.length>1&&t[n].k[0].hasOwnProperty("s")&&(t=d(t,n,r,a,o,s,c))),t}function m(t,r,a,o,s){return"fl"==t.ty&&t.c.k.hasOwnProperty("s")&&(t=y(t,0,"c",!1,a,3,t,s)),"tr"==t.ty&&(t.hasOwnProperty("a")&&(t.a.k.hasOwnProperty("s")&&(t=y(t,0,"a",!1,a,2,t,s)).a.k[0].t>0&&(t._startI=!0),t.a.k.length>1&&(t._anchorX=t.a.k[0],t._anchorY=t.a.k[1])),t.hasOwnProperty("p")&&t.p.k.hasOwnProperty("s")&&(t=y(t,0,"p",!1,a,2,t,s)).p.k[0].t>0&&(t._startI=!0)),"sh"==t.ty&&(t.hasOwnProperty("ks")&&t.ks.k.length>1&&(t=function(t,e,n,r){return t}(t)),t=function(t,r,a,o,s){if(!t.ks.k.hasOwnProperty("v")){if(t.ks.k[0].hasOwnProperty("s")){var c,i="";c=(t=d(t,"ks",!1,a,-1,t,s)).ks.k[t.ks.k.length-1].hasOwnProperty("s")?t.ks.k.length:t.ks.k.length-1;for(var p=0;p<c;p++){var u=l();u.isLayer=!1,u.isTween=!0,u.refObj="".concat(a,"_shape").concat(t._shape),u.refObjOther="".concat(a,"_shape").concat(t._shape),u=h(u,a,t.ks.k[p].t),i="M".concat(t.ks.k[p].s[0].v[0][0],",").concat(t.ks.k[p].s[0].v[0][1]);for(var _=1;_<t.ks.k[p].s[0].v.length;_++)i="".concat(i," C").concat(t.ks.k[p].s[0].v[_-1][0]+t.ks.k[p].s[0].o[_-1][0],",").concat(t.ks.k[p].s[0].v[_-1][1]+t.ks.k[p].s[0].o[_-1][1]," ").concat(t.ks.k[p].s[0].v[_][0]+t.ks.k[p].s[0].i[_][0],",").concat(t.ks.k[p].s[0].v[_][1]+t.ks.k[p].s[0].i[_][1]," ").concat(t.ks.k[p].s[0].v[_][0],",").concat(t.ks.k[p].s[0].v[_][1]);if(t.ks.k[0].s[0].c&&(i="".concat(i," C").concat(t.ks.k[p].s[0].v[t.ks.k[p].s[0].v.length-1][0]+t.ks.k[p].s[0].o[t.ks.k[p].s[0].v.length-1][0],",").concat(t.ks.k[p].s[0].v[t.ks.k[p].s[0].v.length-1][1]+t.ks.k[p].s[0].o[t.ks.k[p].s[0].v.length-1][1]," ").concat(t.ks.k[p].s[0].v[0][0]+t.ks.k[p].s[0].i[0][0],",").concat(t.ks.k[p].s[0].v[0][1]+t.ks.k[p].s[0].i[0][1]," ").concat(t.ks.k[p].s[0].v[0][0],",").concat(t.ks.k[p].s[0].v[0][1]),i+=" Z"),u.dataString=i,0==p&&((k=document.createElementNS(e,"path")).setAttribute("fill","transparent"),k.setAttribute("id","".concat(a,"_shape").concat(t._shape)),k.setAttribute("d",i),k.classList.add("shape"),r.prepend(k),t._isShape=!0),t.ks.k[p].t>n[a]._totalFrames)break;n[a]._scene[parseInt(t.ks.k[p].t)]._transform.push(u)}}return t}for(i="M".concat(t.ks.k.v[0][0],",").concat(t.ks.k.v[0][1]),_=1;_<t.ks.k.v.length;_++)i="".concat(i," C").concat(t.ks.k.v[_-1][0]+t.ks.k.o[_-1][0],",").concat(t.ks.k.v[_-1][1]+t.ks.k.o[_-1][1]," ").concat(t.ks.k.v[_][0]+t.ks.k.i[_][0],",").concat(t.ks.k.v[_][1]+t.ks.k.i[_][1]," ").concat(t.ks.k.v[_][0],",").concat(t.ks.k.v[_][1]);var k;return t.ks.k.c&&(i="".concat(i," C").concat(t.ks.k.v[t.ks.k.v.length-1][0]+t.ks.k.o[t.ks.k.v.length-1][0],",").concat(t.ks.k.v[t.ks.k.v.length-1][1]+t.ks.k.o[t.ks.k.v.length-1][1]," ").concat(t.ks.k.v[0][0]+t.ks.k.i[0][0],",").concat(t.ks.k.v[0][1]+t.ks.k.i[0][1]," ").concat(t.ks.k.v[0][0],",").concat(t.ks.k.v[0][1]),i+=" Z"),t._data=i,(k=document.createElementNS(e,"path")).setAttribute("fill","transparent"),k.setAttribute("id","".concat(a,"_shape").concat(t._shape)),k.setAttribute("d",i),k.classList.add("shape"),r.prepend(k),t._isShape=!0,t}(t,r,a)),"rc"==t.ty&&(t.hasOwnProperty("ks")&&t.ks.k.length>1&&(t=function(t,e,n,r,a){return t}(t)),t=function(t,n,r,a,o){var s=document.createElementNS(e,"rect");return s.setAttribute("fill","transparent"),s.setAttribute("width",t.s.k[0]),s.setAttribute("height",t.s.k[1]),t.p.k.length>0&&(s.setAttribute("x",t.p.k[0]+t.s.k[0]/2),s.setAttribute("y",t.p.k[1]+t.s.k[1]/2)),s.setAttribute("id","".concat(r,"_shape").concat(t._shape)),s.classList.add("rectangle"),n.prepend(s),t._isShape=!0,t}(t,r,a)),t}function f(t,r,a,o,s){n[s].gradientCount++;var c="".concat(s,"_gradient").concat(n[s].gradientCount),i=document.createElementNS(e,"linearGradient");i.setAttribute("id",c),i.setAttribute("spreadMethod","pad"),i.setAttribute("gradientUnits","userSpaceOnUse"),i.setAttribute("x1",t.k[0]),i.setAttribute("x2",r.k[0]),i.setAttribute("y1",t.k[1]),i.setAttribute("y2",r.k[1]),n[s].defs.prepend(i);for(var p=[],l=[],u=[],h=0;h<o.p;h++)p.push("".concat(100*o.k.k[4*h+0],"%")),l.push("stop-color:rgb(".concat(parseInt(255*o.k.k[4*h+1]),",").concat(parseInt(255*o.k.k[4*h+2]),",").concat(parseInt(255*o.k.k[4*h+3]),");")),u.push("stop-opacity:1;");if(o.k.k.length>4*o.p)for(h=0;h<o.p;h++)u[h]="stop-opacity:".concat(o.k.k[2*h+4*o.p+1],";");for(h=0;h<o.p;h++){var _=document.createElementNS(e,"stop");_.setAttribute("offset",p[h]),_.setAttribute("style",l[h]+u[h]),i.append(_)}return"url(#".concat(c,")")}c.destroy=function(t){if(!(a<0))if(void 0===t){for(var e=[],r=0;r<=a;r++)e.push(n[r]._elementId);n=[];for(r=0;r<=e;r++)document.getElementById(e[r]).innerHTML="",a-=1}else{t.toString(),t=t.replace(/#/g,"");for(r=0;r<=a;r++)if(n[r]._elementId==t||n[r]._customName==t){n.splice(r,1),document.getElementById(t).innerHTML="",a-=1;break}}},c.play=function(t){if(!(a<0))if(void 0===t)for(var e=0;e<=a;e++)n[e]._paused=!1;else{t.toString(),t=t.replace(/#/g,"");for(e=0;e<=a;e++)if(n[e]._elementId==t||n[e]._customName==t){n[e]._paused=!1;break}}},c.stop=function(t){if(void 0===t)for(var e=0;e<=a;e++)n[e]._paused=!0;else{t.toString(),t=t.replace(/#/g,"");for(e=0;e<a;e++)if(n[e]._elementId==t||n[e]._customName==t){n[e]._paused=!0;break}}},c.goToAndStop=function(t,e,r){if(!(a<0))if(void 0===r)for(var o=0;o<=a;o++)n[o]._paused=!0,i(o,t);else{r.toString(),r=r.replace(/#/g,"");for(o=0;o<=a;o++)if(n[o]._elementId==r||n[o]._customName==r){n[o]._paused=!0,i(o,t);break}}},c.loadAnimation=function(t){if(void 0!==t.container||void 0!==t.path||void 0!==t.animationData){var e=!0,r=!0;if(void 0!==t.autoplay&&(!0!==t.autoplay&&!1!==t.autoplay||(e=t.autoplay)),void 0!==t.loop&&(!0!==t.loop&&!1!==t.loop||(r=t.loop)),void 0!==t.animationData&&t.animationData.length>0){var s=a+=1;n[s]=JSON.parse(http.responseText),n[s]._elementId=elementId,x(elementId,s,t.container,!0,!0)}else void 0!==t.path&&t.path&&function(t,e,r,o,s,c,i,p,l,u,h){var _=new XMLHttpRequest;_.open("GET",t,!0),_.onreadystatechange=function(){if(4==_.readyState&&200==_.status){var t=a+=1;n[t]=JSON.parse(_.responseText),n[t]._elementId=l,x(l,t,i,u,h)}},_.send()}(t.path,0,0,0,0,0,t.container,0,t.container.id,e,r);o||(o=!0,window.requestAnimationFrame(p))}};var g={1:"butt",2:"round",3:"square"};function b(t,e,n,r,a,o){var s={color:"",opacity:1,width:1,lineCap:"round",lineJoin:"round",miterLimit:0};return s.color="rgb(".concat(255*t.k[0],",").concat(255*t.k[1],",").concat(255*t.k[2],")"),s.opacity=e.k/100,s.width=n.k,s.lineCap=g[r],s.lineJoin=g[a],1==a&&(s.miterLimit=a),s}function w(t,e,n){return"rgb(".concat(255*t,",").concat(255*e,",").concat(255*n,")")}function v(t,e,n,r){for(var a=0;a<t.length;a++)t[a]._isShape&&(document.getElementById("".concat(n,"_shape").concat(t[a]._shape)).setAttribute("stroke",e.color),document.getElementById("".concat(n,"_shape").concat(t[a]._shape)).setAttribute("stroke-width",e.width),document.getElementById("".concat(n,"_shape").concat(t[a]._shape)).setAttribute("stroke-linecap",e.lineCap),document.getElementById("".concat(n,"_shape").concat(t[a]._shape)).setAttribute("stroke-linejoin",e.lineJoin),1==e.lineJoin&&document.getElementById("".concat(n,"_shape").concat(t[a]._shape)).setAttribute("stroke-miterlimit",e.miterLimit))}function O(t,e,n,r,a){for(var o=0;o<t.length;o++)t[o]._isShape&&void 0!==e&&(document.getElementById("".concat(n,"_shape").concat(t[o]._shape)).setAttribute("fill",e),document.getElementById("".concat(n,"_shape").concat(t[o]._shape)).setAttribute("fill-opacity",1))}function A(t,r,a,o,s,c,i){for(var p,l,u=!1,h=0;h<a.it.length;h++)if(a._isGradient=!1,n[r].shapeCount++,a.tt,"gr"==a.it[h].ty){a.it[h]._group=n[r].shapeCount;var _=document.createElementNS(e,"g");_.setAttribute("id","".concat(r,"_group").concat(n[r].shapeCount)),n[r]._currentShapeGroup=n[r].shapeCount,o.prepend(_),a.it[h]=A(t,r,a.it[h],_,"".concat(r,"_group").concat(n[r].shapeCount))}else a.it[h]._shape=n[r].shapeCount,a.it[h]=m(a.it[h],o,r),"tr"==a.it[h].ty&&(a.it[h]._trIndex=h,a.it[h].p.hasOwnProperty("k")&&a.it[h].p.k.length>1&&(a.it[h].hasOwnProperty("a")?document.getElementById(s).setAttribute("transform","matrix(1,0,0,1,".concat(a.it[h].p.k[0]-a.it[h].a.k[0],",").concat(a.it[h].p.k[1]-a.it[h].a.k[1],")")):document.getElementById(s).setAttribute("transform","matrix(1,0,0,1,".concat(a.it[h].p.k[0],",").concat(a.it[h].p.k[1],")")))),"fl"==a.it[h].ty&&a.it[h].c.k.length>1&&(p=w(a.it[h].c.k[0],a.it[h].c.k[1],a.it[h].c.k[2])),"st"==a.it[h].ty&&a.it[h].c.k.length>1&&(l=b(a.it[h].c,a.it[h].o,a.it[h].w,a.it[h].lc,a.it[h].lj,a.it[h].ml),u=!0),"gf"==a.it[h].ty&&(a._isGradient=!0,p=f(a.it[h].s,a.it[h].e,a.it[h].o,a.it[h].g,r));return O(a.it,p,r,a._isGradient),u&&v(a.it,l,r),a}function P(t,r,a,o,s,c,i){for(var p,l,u=!1,h=0;h<a.shapes.length;h++)if(a._isGradient=!1,n[r].shapeCount++,a.tt,"gr"==a.shapes[h].ty){a.shapes[h]._group=n[r].shapeCount;var _=document.createElementNS(e,"g");_.setAttribute("id","".concat(r,"_group").concat(n[r].shapeCount)),_.setAttribute("opacity",1),n[r]._currentShapeGroup=n[r].shapeCount,o.prepend(_),a.shapes[h]=A(t,r,a.shapes[h],_,"".concat(r,"_group").concat(n[r].shapeCount))}else a.shapes[h]._shape=n[r].shapeCount,a.shapes[h]=m(a.shapes[h],o,r),"tr"==a.shapes[h].ty&&(a.shapes[h]._trIndex=h,a.shapes[h].p.hasOwnProperty("k")&&a.shapes[h].p.k>1&&document.getElementById("".concat(r,"_").concat(i,"_layerGroup").concat(a._layer)).setAttribute("transform","matrix(1,0,0,1,".concat(a.shapes[h].p.k[0],",").concat(a.shapes[h].p.k[1],")"))),"fl"==a.shapes[h].ty&&a.shapes[h].c.k.length>1&&(p=w(a.shapes[h].c.k[0],a.shapes[h].c.k[1],a.shapes[h].c.k[2])),"st"==a.shapes[h].ty&&a.shapes[h].c.k.length>1&&(l=b(a.shapes[h].c,a.shapes[h].o,a.shapes[h].w,a.shapes[h].lc,a.shapes[h].lj,a.shapes[h].ml),u=!0),"gf"==a.shapes[h].ty&&(a._isGradient=!0,p=f(a.shapes[h].s,a.shapes[h].e,a.shapes[h].o,a.shapes[h].g,r));return O(a.shapes,p,r,a._isGradient),u&&v(a.shapes,l,r),a}function I(t,r,a,o,s,c){for(var i,p,l=0;l<o[s].length;l++)if(o[s][l].ind==o[s][r].parent){if(o[s][l].tt>0)for(var u=l-1;u>=0;u--)if(o[s][u].td>0){o[s][l]._mask="_".concat(t,"_").concat(c,"_layerMask").concat(o[s][u].ind),o[s][l]._isMasked=!0;break}return o[s][l]._addedToDom||I(t,l,a,o,s,c),n[t].layerCount++,o[s][r]._parent=o[s][l]._layer,newLayer=document.createElementNS(e,"g"),newLayer.setAttribute("id","".concat(t,"_").concat(c,"_layer").concat(o[s][r]._layer)),newLayer.setAttribute("mask",a),newLayer.setAttribute("opacity",1),document.getElementById("".concat(t,"_").concat(c,"_layerTranslate").concat(o[s][r]._parent)).prepend(newLayer),(p=document.createElementNS(e,"g")).setAttribute("id","".concat(t,"_").concat(c,"_layerTranslate").concat(o[s][r]._layer)),p.setAttribute("opacity",1),newLayer.prepend(p),o[s][r].w>0&&(newLayer.style.width=o[s][r].w),o[s][r].h>0&&(newLayer.style.height=o[s][r].h),(i=document.createElementNS(e,"g")).setAttribute("id","".concat(t,"_").concat(c,"_layerGroup").concat(o[s][r]._layer)),i.setAttribute("opacity",1),p.prepend(i),o[s][l]._child.push("_layerGroup".concat(o[s][r].parent)),o[s][l]._childId.push(r),void(o[s][l]._addedToDom=!0)}}function S(t,r,a,o,s,c){var i,p,l,u,h,k;n[r].depth++,c=n[r].depth;for(var d="",m=0;m<o[s].length;m++)o.layerCount++,o[s][m]._layer=o[s][m].ind,o[s][m]._child=[],o[s][m]._childId=[],o[s][m].parent>0||(o[s][m].td>0?(o[s][m]._isMask=!0,l=document.createElementNS(e,"mask"),d="_".concat(r,"_").concat(c,"_layerMask").concat(o[s][m].ind),l.setAttribute("id",d),l.setAttribute("mask-type","alpha"),l.setAttribute("opacity",1),n[r].defs.prepend(l),(i=document.createElementNS(e,"g")).setAttribute("id","".concat(r,"_").concat(c,"_layer").concat(o[s][m].ind)),i.setAttribute("style","display: block;"),i.setAttribute("opacity",1),l.prepend(i)):((i=document.createElementNS(e,"g")).setAttribute("id","".concat(r,"_").concat(c,"_layer").concat(o[s][m].ind)),i.setAttribute("opacity",1),a.prepend(i),o[s][m].tt>0&&(o[s][m]._mask=d,o[s][m]._isMasked=!0)),o[s][m]._addedToDom=!0,(u=document.createElementNS(e,"g")).setAttribute("id","".concat(r,"_").concat(c,"_layerTranslate").concat(o[s][m]._layer)),u.setAttribute("opacity",1),i.prepend(u),o[s][m].w>0&&(i.style.width=o[s][m].w),o[s][m].h>0&&(i.style.height=o[s][m].h),(p=document.createElementNS(e,"g")).setAttribute("id","".concat(r,"_").concat(c,"_layerGroup").concat(o[s][m]._layer)),p.setAttribute("opacity",1),u.prepend(p));for(m=0;m<o.layers.length;m++)if(o.layerCount=o[s][m]._layer,o[s][m].parent>0)for(var f=0;f<o.layers.length;f++)if(o[s][f].ind==o[s][m].parent){if(o[s][m].tt>0)for(var g=m-1;g>=0;g--)if(o[s][g].td>0){o[s][m]._mask="_".concat(r,"_").concat(c,"_layerMask").concat(o[s][g].ind);break}o.layerCount++,o[s][f]._addedToDom||I(r,f,d,o,s,c),o[s][m]._parent=o[s][f]._layer,(i=document.createElementNS(e,"g")).setAttribute("id","".concat(r,"_").concat(c,"_layer").concat(o[s][m]._layer)),i.setAttribute("opacity",1),document.getElementById("".concat(r,"_").concat(c,"_layerTranslate").concat(o[s][m]._parent)).prepend(i),(u=document.createElementNS(e,"g")).setAttribute("id","".concat(r,"_").concat(c,"_layerTranslate").concat(o[s][m]._layer)),u.setAttribute("opacity",1),i.prepend(u),o[s][m].w>0&&(i.style.width=o[s][m].w),o[s][m].h>0&&(i.style.height=o[s][m].h),(p=document.createElementNS(e,"g")).setAttribute("id","".concat(r,"_").concat(c,"_layerGroup").concat(o[s][m]._layer)),p.setAttribute("opacity",1),u.prepend(p),o[s][f]._child.push("".concat(r,"_").concat(c,"_layerGroup").concat(o[s][m].parent)),o[s][f]._childId.push(m),o[s][f]._addedToDom=!0}for(m=0;m<o.layers.length;m++){if(o[s][m]._inPoint=-1,o[s][m]._outPoint=-1,o[s][m].hasOwnProperty("ip")&&o[s][m].ip>=0&&(o[s][m]._inPoint=o[s][m].ip),o[s][m].hasOwnProperty("op")&&o[s][m].op>0?(o[s][m]._outPoint=o[s][m].op,o[s][m]._outPoint>o._totalFrames&&(o[s][m]._outPoint=o._totalFrames)):o[s][m]._outPoint=o._totalFrames,_(r,"".concat(r,"_").concat(c,"_layerGroup").concat(o[s][m]._layer),o[s][m]._inPoint,o[s][m]._outPoint),o.layerCount=o[s][m]._layer,i=document.getElementById("".concat(r,"_").concat(c,"_layer").concat(o[s][m]._layer)),p=document.getElementById("".concat(r,"_").concat(c,"_layerGroup").concat(o[s][m]._layer)),o[s][m].tt>0&&(document.getElementById("".concat(r,"_").concat(c,"_layer").concat(o[s][m]._layer)).setAttribute("mask","url(#".concat(o[s][m]._mask,")")),document.getElementById("".concat(r,"_").concat(c,"_layer").concat(o[s][m]._layer)).setAttribute("style","display: block;")),o._currentLayer=o[s][m]._layer,o._currentLayer._inPoint=o[s][m]._inPoint,o._currentLayer._outPoint=o[s][m]._outPoint,o[s][m].hasOwnProperty("refId")&&o.hasOwnProperty("assets")){for(var b=-1,w=0;w<o.assets.length;w++)if(o.assets[w].id==o[s][m].refId){b=w;break}b>=0&&(o.assets[b]=S(t,r,p,o.assets[b],"layers",c))}o[s][m].hasOwnProperty("shapes")?(o._currentLayerGroup=o[s][m]._layer,o._currentLayerGroup._inPoint=o[s][m]._inPoint,o._currentLayerGroup._outPoint=o[s][m]._outPoint,o[s][m]=P(t,r,o[s][m],p,"".concat(r,"_").concat(c,"_layerGroup").concat(o[s][m]._layer),0,o[s][m].td),o[s][m].hasOwnProperty("shapes")&&(o._boundingX=p.getBoundingClientRect().width/2,o._boundingY=p.getBoundingClientRect().height/2)):o[s][m]._inPoint,o[s][m].hasOwnProperty("ks")&&(o[s][m].ks.hasOwnProperty("a")&&o[s][m].ks.a.hasOwnProperty("k")&&o[s][m].ks.a.k.length>1&&(o[s][m]._anchorX=o[s][m].ks.a.k[0],o[s][m]._anchorY=o[s][m].ks.a.k[1]),o[s][m].ks.hasOwnProperty("p")&&(o[s][m].ks=y(o[s][m].ks,0,"p",!0,r,1,o[s][m],c),o[s][m].ks.p.hasOwnProperty("k")&&o[s][m].ks.p.k.length>1&&(o[s][m].ks.p.k[0].hasOwnProperty("s")||(h=0!=o[s][m]._anchorX?o[s][m].ks.p.k[0]-o[s][m]._anchorX:o[s][m].ks.p.k[0],k=0!=o[s][m]._anchorY?o[s][m].ks.p.k[1]-o[s][m]._anchorY:o[s][m].ks.p.k[1],o[s][m].td>0?document.getElementById("".concat(r,"_").concat(c,"_layerGroup").concat(o[s][m]._layer)).setAttribute("transform","matrix(1,0,0,1,".concat(h,",").concat(k,")")):document.getElementById("".concat(r,"_").concat(c,"_layer").concat(o[s][m]._layer)).setAttribute("transform","matrix(1,0,0,1,".concat(h,",").concat(k,")")),o[s][m]._posX=h,o[s][m]._posY=k))),o[s][m].ks.hasOwnProperty("r")&&o[s][m].ks.r.k.length>1&&o[s][m].ks.r.k[0].hasOwnProperty("s")&&(o[s][m].ks=y(o[s][m].ks,0,"r",!0,r,1,o[s][m],c)),o[s][m].ks.hasOwnProperty("s")&&o[s][m].ks.s.k.length>1&&o[s][m].ks.s.k[0].hasOwnProperty("s")&&(o[s][m].ks=y(o[s][m].ks,0,"s",!0,r,1,o[s][m],c)),o[s][m].ks.hasOwnProperty("o")&&o[s][m].ks.o.k.length>1&&o[s][m].ks.o.k[0].hasOwnProperty("s")&&(o[s][m].ks=y(o[s][m].ks,0,"o",!0,r,1,o[s][m],c)))}return o}function x(t,r,o,s,i,p){n[r]._loaded=!1;try{n[r].depth=0,n[r].shapeCount=0,n[r].layerCount=0,n[r]._removed=!1,n[r]._totalFrames=parseInt(n[r].op-n[r].ip),n[r]._frameTime=1/n[r].fr*1e3,n[r]._currentFrame=-1,n[r]._lastTime=Date.now(),n[r]._autoplay=s,n[r]._loop=i,n[r]._customName=p,n[r]._paused=!1,o.style.width=n[r].w,o.style.height=n[r].h,o.setAttribute("width",n[r].w),o.setAttribute("height",n[r].h);var l=document.createElementNS(e,"svg");l.setAttribute("xmlns",e),l.setAttributeNS(null,"width",n[r].w),l.setAttributeNS(null,"height",n[r].h),l.setAttributeNS(null,"viewBox","0 0 ".concat(n[r].w," ").concat(n[r].h)),l.setAttributeNS(null,"preserveAspectRatio","xMidYMid meet"),l.style.width="100%",l.style.height="100%",l.setAttributeNS(null,"id","_svg".concat(r)),o.prepend(l),n[r].defs=document.createElementNS(e,"defs"),n[r].defs.setAttributeNS(null,"id","_defs".concat(r)),n[r].gradientCount=0,n[r].maskCount=0,l.prepend(n[r].defs);var u=document.createElementNS(e,"g");u.setAttributeNS(null,"id","_lanim".concat(r)),l.append(u);var h=document.createElementNS(e,"g");h.setAttributeNS(null,"id","_compute".concat(r)),h.style.display="none",u.prepend(h),n[r]._scene=new Array(n[r]._totalFrames+1).fill(null).map((function(){return{_transform:[]}})),n[r]._instated={},n[r]._refObj=[],n[r]._objSize={},n[r]=S(t,r,u,n[r],"layers",0);var _=document.createElementNS(e,"clipPath");_.setAttributeNS(null,"id","_clip".concat(r)),n[r].defs.prepend(_);var k=document.createElementNS(e,"rect");k.setAttribute("x",0),k.setAttribute("y",0),k.setAttribute("width",n[r].w),k.setAttribute("height",n[r].h),_.append(k),u.setAttributeNS(null,"clip-path","url(#_clip".concat(r,")")),n[r]._buildDone=!0,1,n[r]._loaded=!0,n[r]._autoplay||c.goToAndStop(1,"",n[r]._elementId)}catch(t){a-=1,o.style.height=0,o.style.width=0,o.innerHTML="",n.splice(r,1)}}"object"===("undefined"==typeof exports?"undefined":t(exports))&&(module.exports=c);
//# sourceMappingURL=jlottie.cjs.js.map
