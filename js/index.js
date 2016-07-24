$(function(){
	var $menu=$('.menu');
	var $navbox=$('.nav-box');
    var $list=$(".list");
    var ch=document.documentElement.clientHeight;
    $(window).resize(function(){
        var cw=document.documentElement.clientWidth;
        if(cw<768){
            var cw=$menu.attr('id');
        }
    })
    $menu.click(function(){
        var ids=$(this).attr('id');
        if(ids=='active'){
            $(this).removeAttr('id');
            $navbox.css({ background:"rgba(0,0,0,0.8)"});
            $list.css({height:"0",paddingTop:"0",display:"none"})
        }else{
            $(this).attr('id','active');
            $navbox.css({background:"#000"});
            $list.css({height:(ch-44),paddingTop:"20px",display:"block",zIndex:"22"})
            
        }
    })

// 轮播图
var $out=$('.banner');
    var $box=$('.banner .box');
    var $imgs=$('.box .ban');
    var $lis=$('.boxs li');
    var $btn=$('.btn');
    var $btnl=$('.btn .btnl');
    var $btnr=$('.btn .btnr');
    $imgs.css('z-index','1');
    $imgs.eq(0).css('z-index','2');
    $lis.eq(0).css('background','red');
    $btn.css('display','none');
    //var flag=true;
    var index=$(this).index();
    var num=0;
    var t;
    t=setInterval(move,1000);//move()就只能执行一次，不能循环了
    function move(){
        num++;
        //判断下标是否越界
        if(num==$imgs.length){
            num=0;
        }
        $lis.css('background','#ccc').eq(num).css('background','red');
        $imgs.css('z-index','1').eq(num).css('z-index','2');
    }
    $out.mouseover(function(){
        clearInterval(t);
        $btn.css('display','block');
    })
    $out.mouseout(function(){
        t=setInterval(move,1000);
        $btn.css('display','none');
    })
    $btnl.click(function(){
   
        mover();
    
    })
    $btnr.click(function(){

        move();

    })
    function mover(){
        num--;
        if(num<0){
            num=$imgs.length-1;
        }
        $lis.css('background','#ccc').eq(num).css('background','red');
        $imgs.css('z-index','1').eq(num).css('z-index','2');
    }
    $lis.click(function(){
        var index=$(this).index();
        $lis.css('background','#ccc').eq(index).css('background','red');
        $imgs.css('z-index','1').eq(index).css('z-index','2');
        num=index;
    })



})