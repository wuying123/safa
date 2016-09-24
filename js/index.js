$(function(){
//  1.轮播
    var num=0;
    setInterval(function(){
        num++;
        if(num==2){
            num=0;
        }
        var value=$('.box img').eq(num);
        value.css('zIndex',1);
        $('.box img').not(value).css('zIndex',0);
    },3000)
//2.翻牌
    $('.tv-list .mask').each(function(index,value){
        $(this).mouseover(function(){
            $(this).toggleClass('active');
        })
        $(this).mouseout(function(){
            $(this).toggleClass('active');
        })
    })

//3.
    var lis0=$('.tv-use .bottom  .hot-list .card-pull').eq(0).find('li');
    lis0.eq(0).find('.bottom').css('display','block');
    var lis01=lis0.eq(0);
    lis01.find('.bottom').css('display','block');
    lis0.not(lis01).find('.bottom').css('display','none');
    lis0.hover(function () {
        var index=$(this).index();
        if(index!=0){
            $(this).find('.bottom').css('display','block');
            lis0.eq(0).find('.bottom').css('display','none');
            lis0.not(lis0[index]).find('.bottom').css('display','none');
        }else if(index==0){
            lis0.eq(0).find('.bottom').css('display','block');
            lis0.not(lis0[index]).find('.bottom').css('display','none');
        }
    });
    var lis=$('.tv-use .bottom  .hot-list .card-pull').eq(1).find('li');
    lis.eq(0).find('.bottom').css('display','block');
    var lis1=lis.eq(0);
    lis1.find('.bottom').css('display','block');
    lis.not(lis1).find('.bottom').css('display','none');
    lis.hover(function () {
        var index=$(this).index();
        if(index!=0){
            $(this).find('.bottom').css('display','block');
            lis.eq(0).find('.bottom').css('display','none');
            lis.not(lis[index]).find('.bottom').css('display','none');
        } else if(index==0){
            lis.eq(0).find('.bottom').css('display','block');
            lis.not(lis[index]).find('.bottom').css('display','none');
        }
    });
    $('.hot-list .sel span').click(function () {
        var index=$(this).index();
        var val=this;
        $(this).css('borderBottom','2px solid #34BFFF');
        $('.hot-list .sel span').not(val).css('borderBottom','none');
        if(index==0){
            $('.hot-list .card-pull').eq(0).css('display','block');
            $('.hot-list .card-pull').eq(1).css('display','none');
        }
        if(index==1){
            $('.hot-list .card-pull').eq(1).css('display','block');
            $('.hot-list .card-pull').eq(0).css('display','none');
        }
    })
//4.
    $('.app-bottom li .con .mask').hover(function () {
        $(this).toggleClass('active');
    })
//5.small-nav
    $('.nav-small span').click(function () {
        $('.nav-out ul').toggleClass('active');
    })
































































































})