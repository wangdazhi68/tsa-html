$(function(){
    //页面加载执行的方法
    function mounted(){
        console.log($('.big-nav .active').index())
        // 获取当前导航的索引，计算导航当前页的坐标
        let navIndex=$('.big-nav .active').index();
        let X=$('.big-nav .active').offset().left;
        let Width=$('.big-nav .active').width();
        if(navIndex==1||navIndex==3){
            $('.nav-hump').css({"width":"520px","background-image":'url(./images/nav-hump2.png)',"bottom":'0',"left":(X+Width/2-260)+'px'})
        }else{
            $('.nav-hump').css({"width":"350px","background-image":'url(./images/nav-hump1.png)',"bottom":'0',"left":(X+Width/2-175)+'px'})
        }
    }
    mounted();


    var mySwiper = new Swiper ('.swiper', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        
        // // 如果需要分页器
        // pagination: {
        //   el: '.swiper-pagination',
        // },
        
        // // 如果需要前进后退按钮
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
        
        // // 如果需要滚动条
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
    })  

    //banner中导航交互效果
    // $('.nav-tab ul,.tab-content').mouseenter(function(){
    //     $('.tab-content').addClass('tab-content-show');
    // })
    // $('.nav-tab ul,.tab-content').mouseleave(function(){
    //     $('.tab-content').removeClass('tab-content-show');
    //     $('.nav-tab ul li').removeClass('active');
    // })
    
    // $('.nav-tab ul li').mouseenter(function(){
    //     $(this).siblings().removeClass('active');
    //     $(this).addClass('active');
    //     let index=$(this).index();
    //     $('.content-wrap li').eq(index).siblings('li').hide();
    //     $('.content-wrap li').eq(index).show();
    // })


    // $('.nav-tab ul li').mouseleave(function(){
    //     let index=$(this).index();
    //     $('.tab-content').removeClass('tab-content-show');
    //     $('.content-wrap li').eq(index).hide();
    // })

    
})