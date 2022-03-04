class BaseComponent{opts={}
constructor(options){$.extend(this.opts,options);this.run();}
listen(events){let _this=this;for(let i=0;i<events.length;i++){let[$selector,action,callback]=events[i];$selector.on(action,function(){return callback.apply(_this,[$(this),...arguments]);});}
$(document).ready(function(){return _this.ready.apply(_this,[...arguments]);});}
ready(){}
run(){}};