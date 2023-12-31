$(function(){

    // banner
    var mySwiper1 = new Swiper ('.banner-swiper', {
        direction: 'horizontal', 
        loop: true, // 循环模式选项
        pagination: {
          el: '.swiper-pagination',
          clickable :true,
        },
    }) 

    // 典型用户解决方案
    $('.solutions .tab-nav li').click(function(){
        let index=$(this).index();
        $(this).siblings('li').removeClass('active');
        $(this).addClass('active');
        $('.solutions .section').removeClass('active');
        $('.solutions .section').eq(index).addClass('active');
    })

    // 可信时间戳®百科
    $('.qa-tab li').click(function(){
        let index=$(this).index();
        $(this).siblings('li').removeClass('active');
        $(this).addClass('active');
        $('.qa-content li').removeClass('active');
        $('.qa-content li').eq(index).addClass('active');
    })

    // 可信时间戳®典型案例
    function getCasesType(){
        //获取当前典型案例tab索引，计算tab坐标
        let activeX=$('.cases .tab-nav .active').position().left;
        let activeWidth=$('.cases .tab-nav .active').width();
        $('.valley').css({"top":'0',"left":(activeX+activeWidth/2-163)+'px'})
    }
    $('.cases .tab-nav li').click(function(){
        let index=$(this).index();
        $(this).siblings('li').removeClass('active');
        $(this).addClass('active');
        $('.cases .tab-content .tab-content-item').removeClass('active');
        $('.cases .tab-content .tab-content-item').eq(index).addClass('active');
        getCasesType();
    })
    

    // 可信时间戳®微课堂
    var mySwiper2 = new Swiper ('.video-swiper', {
        direction: 'horizontal', 
        loop: true, // 循环模式选项
        slidesPerView : 3,
        spaceBetween : 40,
    }) 


    // 可信时间戳®行业解决方案
    $('.scheme .tab-nav li').click(function(){
        let bgList=[
            './images/scheme-bg1.png',
            './images/scheme-bg2.png',
            './images/scheme-bg3.png',
            './images/scheme-bg4.png',
            './images/scheme-bg5.png',
            './images/scheme-bg6.png',
        ]
        let index=$(this).index();
        $(this).siblings('li').removeClass('active');
        $(this).addClass('active');
        $('.scheme .tab-content .tab-content-item').removeClass('active');
        $('.scheme .tab-content .tab-content-item').eq(index).addClass('active');
        $(".scheme .tab-content .tab-content-item").eq(index).css({"background-image":"url("+bgList[index]+")"})
    })

     

    // 图片懒加载配置项
    $(".lazy").lazyload({
        placeholder : "./images/hot-icon.png", 
        effect: "fadeIn", // effect(特效),值有show(直接显示),fadeIn(淡入),slideDown(下拉)等,常用fadeIn
        threshold: 200, // 提前开始加载，值为数字,代表页面高度.如设置为200,表示滚动条在离目标位置还有200的高度时就开始加载图片,可以做到不让用户察觉
        // event: 'click',  // 事件触发时才加载，值有click(点击),mouseover(鼠标划过),sporty(运动的),foobar(…).可以实现鼠标莫过或点击图片才开始加载,后两个值未测试…
        // container: $("#container"), // 对某容器中的图片实现效果，值为某容器.lazyload默认在拉动浏览器滚动条时生效,这个参数可以让你在拉动某DIV的滚动条时依次加载其中的图片
        failurelimit : 10, // 图片排序混乱时，值为数字.lazyload默认在找到第一张不在可见区域里的图片时则不再继续加载,但当HTML容器混乱的时候可能出现可见区域内图片并没加载出来的情况,failurelimit意在加载N张可见区域外的图片,以避免出现这个问题.
    });


    //证书
    var mySwiper3 = new Swiper ('.certificate-swiper', {
        direction: 'horizontal', 
        loop: true, // 循环模式选项
        slidesPerView: 'auto',
        loopedSlides:8,
        spaceBetween : 78,
    })
    var timer=null

    function move(){
        mySwiper3.slideNext();
        let realIndex=mySwiper3.realIndex;
        let slideLength=8;//mySwiper3.slides.length;
        let width=((realIndex+1)/slideLength);
        $('.progress').css({'width':width*100+'%'})        
    }

    function scrollSwiper(){
        clearInterval(timer);
        timer = null;
        timer = setInterval(move, 5000);
    }


    // footer
    $('.qrcodes li').mouseenter(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    })

    //返回顶部
    var showDistance= $('.solutions').offset().top
    $(window).scroll(function(){                 //修改goToTop按钮的top距离
        if($(this).scrollTop() > showDistance){
            $('.go-top').fadeIn();
            $('.fixed-tool').fadeIn();
        }else{
            $('.go-top').fadeOut();
            $('.fixed-tool').fadeOut();
        }
    });
    $('.go-top').click(function(){
        $('html ,body').animate({scrollTop: 0}, 300);
        return false;
    });


    //页面加载执行的方法
    function mounted(){
        // 获取当前导航的索引，计算导航当前页的坐标
        let navIndex=$('.big-nav .active').index();
        let X=$('.big-nav .active').offset().left;
        let Width=$('.big-nav .active').width();
        if(navIndex==1||navIndex==3){
            $('.nav-hump').css({"width":"520px","background-image":'url(./images/nav-hump2.png)',"bottom":'0',"left":(X+Width/2-260)+'px'})
        }else{
            $('.nav-hump').css({"width":"350px","background-image":'url(./images/nav-hump1.png)',"bottom":'0',"left":(X+Width/2-175)+'px'})
        }

        getCasesType();
        scrollSwiper();
        

    }
    mounted();

    window.addEventListener('resize', mounted)




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