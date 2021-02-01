$("#os-phrases > h2")
    .css('opacity', 1).lettering( 'words' )
    .children( "span" ).lettering()
    .children( "span" ).lettering();

    $("#os-phrases > h3")
    .css('opacity', 1).lettering( 'words' )
    .children( "span" ).lettering()
    .children( "span" ).lettering();

        $("#os-phrases > p")
        .css('opacity', 1).lettering( 'words' )
        .children( "span" ).lettering()
        .children( "span" ).lettering();
    
/*Script reference "https://cdnjs.cloudflare.com/ajax/libs/lettering.js/0.6.1/jquery.lettering.min.js"*/
/* Orignal Lettering.JS 0.6.1 by Dave Rupert  - http://daverupert.com */
(function($){
    function injector(t,splitter,IhopeThisWorks,after){
        var a=t.text().split(splitter),inject='';
    if(a.length){
        $(a).each(function(i,item){
            inject+='<span class="'+IhopeThisWorks+(i+1)+'">'+item+'</span>'+after
            });
    t.empty().append(inject)
        }
    }
    var methods={
        init:function(){
            return this.each(function(){
                injector($(this),'','char','')
            }
        )},
        words:function(){
            return this.each(function(){
                injector($(this),' ','word',' ')
            })
        },lines:function(){
            return this.each(function(){
                var r="eefec303079ad17405c889e092e105b0";
                injector($(this).children("br").replaceWith(r).end(),r,'line','')
            })
        }
    };
    $.fn.lettering=function(method){
        if(method&&methods[method]){
            return methods[method].apply(this,[].slice.call(arguments,1))
        }
        else if(method==='letters'||!method){
            return methods.init.apply(this,[].slice.call(arguments,0))
        }
        $.error('Method '+method+' does not exist on jQuery.lettering');
        return this
    }
})(jQuery); $("#os-phrases > h2")
    .css('opacity', 1).lettering( 'words' )
    .children( "span" ).lettering()
    .children( "span" ).lettering();

    $("#os-phrases > h3")
    .css('opacity', 1).lettering( 'words' )
    .children( "span" ).lettering()
    .children( "span" ).lettering();

        $("#os-phrases > p")
        .css('opacity', 1).lettering( 'words' )
        .children( "span" ).lettering()
        .children( "span" ).lettering();

if (window.devicePixelRatio == 1.5) {
  alert("This is a high-density screen");
} else if (window.devicePixelRatio == 0.75) {
  alert("This is a low-density screen");
}
    
/*Script reference "https://cdnjs.cloudflare.com/ajax/libs/lettering.js/0.6.1/jquery.lettering.min.js"*/
/* Orignal Lettering.JS 0.6.1 by Dave Rupert  - http://daverupert.com */
(function($){
    function injector(t,splitter,IhopeThisWorks,after){
        var a=t.text().split(splitter),inject='';
    if(a.length){
        $(a).each(function(i,item){
            inject+='<span class="'+IhopeThisWorks+(i+1)+'">'+item+'</span>'+after
            });
    t.empty().append(inject)
        }
    }
    var methods={
        init:function(){
            return this.each(function(){
                injector($(this),'','char','')
            }
        )},
        words:function(){
            return this.each(function(){
                injector($(this),' ','word',' ')
            })
        },lines:function(){
            return this.each(function(){
                var r="eefec303079ad17405c889e092e105b0";
                injector($(this).children("br").replaceWith(r).end(),r,'line','')
            })
        }
    };
    $.fn.lettering=function(method){
        if(method&&methods[method]){
            return methods[method].apply(this,[].slice.call(arguments,1))
        }
        else if(method==='letters'||!method){
            return methods.init.apply(this,[].slice.call(arguments,0))
        }
        $.error('Method '+method+' does not exist on jQuery.lettering');
        return this
    }
})(jQuery);

//make meta viewport better scaling correct size for web browsing on different devices//
$(function(){
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
  var ww = ( $(window).width() < window.screen.width ) ? $(window).width() : window.screen.width; //get proper width
  var mw = 480; // min width of site
  var ratio =  ww / mw; //calculate ratio
  if( ww < mw){ //smaller than minimum size
   $('#Viewport').attr('content', 'initial-scale=' + ratio + ', maximum-scale=' + ratio + ', minimum-scale=' + ratio + ', user-scalable=yes, width=' + ww);
  }else{ //regular size
   $('#Viewport').attr('content', 'initial-scale=1.0, maximum-scale=2, minimum-scale=1.0, user-scalable=yes, width=' + ww);
  }
}
});