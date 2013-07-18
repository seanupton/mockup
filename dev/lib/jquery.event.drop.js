!function(a){a.fn.drop=function(b,c,d){var e="string"==typeof b?b:"",f=a.isFunction(b)?b:a.isFunction(c)?c:null;return 0!==e.indexOf("drop")&&(e="drop"+e),d=(b==f?c:d)||{},f?this.bind(e,d,f):this.trigger(e)},a.drop=function(b){b=b||{},d.multi=b.multi===!0?1/0:b.multi===!1?1:isNaN(b.multi)?d.multi:b.multi,d.delay=b.delay||d.delay,d.tolerance=a.isFunction(b.tolerance)?b.tolerance:null===b.tolerance?null:d.tolerance,d.mode=b.mode||d.mode||"intersect"};var b=a.event,c=b.special,d=a.event.special.drop={multi:1,delay:20,mode:"overlap",targets:[],datakey:"dropdata",noBubble:!0,add:function(){var b=a.data(this,d.datakey);b.related+=1},remove:function(){a.data(this,d.datakey).related-=1},setup:function(){if(!a.data(this,d.datakey)){var b={related:0,active:[],anyactive:0,winner:0,location:{}};a.data(this,d.datakey,b),d.targets.push(this)}},teardown:function(){var b=a.data(this,d.datakey)||{};if(!b.related){a.removeData(this,d.datakey);var c=this;d.targets=a.grep(d.targets,function(a){return a!==c})}},handler:function(b,e){var f;if(e)switch(b.type){case"mousedown":case"touchstart":f=a(d.targets),"string"==typeof e.drop&&(f=f.filter(e.drop)),f.each(function(){var b=a.data(this,d.datakey);b.active=[],b.anyactive=0,b.winner=0}),e.droppable=f,c.drag.hijack(b,"dropinit",e);break;case"mousemove":case"touchmove":d.event=b,d.timer||d.tolerate(e);break;case"mouseup":case"touchend":d.timer=clearTimeout(d.timer),e.propagates&&(c.drag.hijack(b,"drop",e),c.drag.hijack(b,"dropend",e))}},locate:function(b,c){var e=a.data(b,d.datakey),f=a(b),g=f.offset()||{},h=f.outerHeight(),i=f.outerWidth(),j={elem:b,width:i,height:h,top:g.top,left:g.left,right:g.left+i,bottom:g.top+h};return e&&(e.location=j,e.index=c,e.elem=b),j},contains:function(a,b){return(b[0]||b.left)>=a.left&&(b[0]||b.right)<=a.right&&(b[1]||b.top)>=a.top&&(b[1]||b.bottom)<=a.bottom},modes:{intersect:function(a,b,c){return this.contains(c,[a.pageX,a.pageY])?1e9:this.modes.overlap.apply(this,arguments)},overlap:function(a,b,c){return Math.max(0,Math.min(c.bottom,b.bottom)-Math.max(c.top,b.top))*Math.max(0,Math.min(c.right,b.right)-Math.max(c.left,b.left))},fit:function(a,b,c){return this.contains(c,b)?1:0},middle:function(a,b,c){return this.contains(c,[b.left+.5*b.width,b.top+.5*b.height])?1:0}},sort:function(a,b){return b.winner-a.winner||a.index-b.index},tolerate:function(b){var e,f,g,h,i,j,k,l,m=0,n=b.interactions.length,o=[d.event.pageX,d.event.pageY],p=d.tolerance||d.modes[d.mode];do if(l=b.interactions[m]){if(!l)return;l.drop=[],i=[],j=l.droppable.length,p&&(g=d.locate(l.proxy)),e=0;do if(k=l.droppable[e]){if(h=a.data(k,d.datakey),f=h.location,!f)continue;h.winner=p?p.call(d,d.event,g,f):d.contains(f,o)?1:0,i.push(h)}while(++e<j);i.sort(d.sort),e=0;do(h=i[e])&&(h.winner&&l.drop.length<d.multi?(h.active[m]||h.anyactive||(c.drag.hijack(d.event,"dropstart",b,m,h.elem)[0]!==!1?(h.active[m]=1,h.anyactive+=1):h.winner=0),h.winner&&l.drop.push(h.elem)):h.active[m]&&1==h.anyactive&&(c.drag.hijack(d.event,"dropend",b,m,h.elem),h.active[m]=0,h.anyactive-=1));while(++e<j)}while(++m<n);d.last&&o[0]==d.last.pageX&&o[1]==d.last.pageY?delete d.timer:d.timer=setTimeout(function(){d.tolerate(b)},d.delay),d.last=d.event}};c.dropinit=c.dropstart=c.dropend=d}(jQuery);