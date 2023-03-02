$(document).ready(function () {
    // 헤더 스크롤 이벤트
    $(window).scroll(function(){
        // 스크롤 위치 값
        let pos = $(window).scrollTop()
        let current = (pos / ($(document).outerHeight()-$(window).height()))*100

        if(pos >= 30){
            $(".header").addClass("on")
        }else{
            $(".header").removeClass("on")
        }
    })



    // 햄버거 클릭
    $(".header .hamburger").click(function(){
        $(".header .hamburger").toggleClass("on")
        $(".hbg-nav").toggleClass("on")
    }) 

    //1차메뉴 클릭 시 2차 메뉴 나오기
    const $snd_nav = $(".hbg-nav #snd-menu")
    const $fst_nav = $(".hbg-nav #fst-menu .fst")
    $snd_nav.eq(0).show()
    $fst_nav.eq(0).addClass("on")

    $fst_nav.click(function(){
        let i = $(this).index();
        $fst_nav.removeClass("on").eq(i).addClass("on")
        $snd_nav.hide().eq(i).show()
    })

    // 2차메뉴 클릭시 3차메뉴 나오기
    let prev = -1;
    const $sndmenu_nav = $(".hbg-nav #snd-menu .snd")

    $sndmenu_nav.click(function(){
        // alert()
        let i =  $sndmenu_nav.index(this)
        const ul_height = $(this).find("ul li").length *35+"px";
        // alert(ul_height)


        $sndmenu_nav.removeClass("on")
        if(prev == i){
            $(this).removeClass("on")
            $sndmenu_nav.find("ul").css("height","")
            prev = -1;
        }else{
            $(this).toggleClass("on")
            $sndmenu_nav.find("ul").css("height","")
            $sndmenu_nav.eq(i).find("ul").css("height", ul_height )
            prev = i
        }
    })



    // 공지사항
    const swiper0 = new Swiper(".notice",{
        // 자동으로 작동
        autoplay:{
            delay: 1500
        },
        // 무한
        loop:true,
        // 수직 작동
        direction: "vertical"
    })

    // 메인비주얼
    const swiper1 = new Swiper(".main-b",{
        autoplay:{
            delay: 8000,
            disableOnInteraction: false,
        },
        loop:true,
        // 화면에 나오는 개수
        slidesPerView : 1,
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
    });
    swiper1.on('transitionEnd', function() {
        $(".swiper-pagination1 span").eq(0).text(swiper1.realIndex+1);
        $(".swiper-pagination1 span").eq(2).text(swiper1.slides.length - 2);
        console.log('now index :::', swiper1.realIndex);
    });
    // 마우스 오버시 멈춤
    $('.main .main-list .left').hover(function(){
        swiper1.autoplay.stop();
    }, function(){
        swiper1.autoplay.start();
    });




    // 베스트 셀러
    const swiper2 = new Swiper(".bst-seller",{
        // 자동으로 작동
        autoplay:{
            delay: 1500,
            disableOnInteraction: false
        },
        // 무한
        loop:true,
        // 화면에 나오는 개수
        slidesPerView : 7,
        /*마진*/
        spaceBetween: 20,
        /*버튼 동작*/
        navigation:{
            nextEl: ".swiper.bst-seller .swiper-button-next.bst",
            prevEl: ".swiper.bst-seller .swiper-button-prev.bst"
        },
    })
    // 마우스 오버시 멈춤
    $('.swiper.bst-seller .swiper-slide').on('mouseover', function(){
        swiper2.autoplay.stop();
    });
    $('.swiper.bst-seller .swiper-slide').on('mouseout', function(){
        swiper2.autoplay.start();
    });



    //tab/mobile 베스트셀러
    const $tab_bst_slide = $(".tab-bst .bst-content")
    const $tab_bst_nav = $(".tab-bst ul li")
    $tab_bst_slide.eq(0).show()
    $tab_bst_nav.eq(0).addClass("on")

    const swiper4 = new Swiper(".bst-content",{
        // 모바일 우선이라서 모바일 기준
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
        slidesPerView: "3",
        spaceBetween: 0,
        /*버튼 동작*/
        navigation:{
            nextEl: ".bst-content .swiper-button-next.tab",
            prevEl: ".bst-content .swiper-button-prev.tab"
        },
        // 슬라이더가 불러올 떄마다 새로고침을 해주는 역할 > display:none > block 변경되었을때 먹통되는 것을 방지
        observer:true,
        observeParents:true
    })
    $tab_bst_nav.click(function(e){
        e.preventDefault()
        let i = $(this).index();
        $tab_bst_nav.removeClass("on").eq(i).addClass("on")
        $tab_bst_slide.hide().eq(i).show()
        // 탭 메뉴클릭할때마다 제품 순서가 처음으로 가는 코드
        swiper4[i].slideTp(0,100)
    })





    // 컬렉션
    const swiper3 = new Swiper(".swiper.col",{
        // 자동으로 작동
        autoplay:{
            delay: 4500,
            disableOnInteraction: false
        },
        // 무한
        loop:true,
        // 화면에 나오는 개수
        slidesPerView : 1,
        /*마진*/
        spaceBetween: 200,
        /*버튼 동작*/
        navigation:{
            nextEl: ".col .swiper-button-next.c",
            prevEl: ".col .swiper-button-prev.c"
        },
    })
    // 마우스 오버시 멈춤
    $('.col .swiper-slide .right .col-pro').hover(function(){
        swiper3.autoplay.stop();
    }, function(){
        swiper3.autoplay.start();
    });
    
    



    // tab/mobile 혜택
    const swiper5 = new Swiper(".bnf-img",{
        /*자동으로 작동*/
        autoplay:{
            delay: 3500,
        },
        // 무한
        loop:true,
        // 화면에 나오는 개수
        slidesPerView : 1,
        // centeredSlides: true,
        /*마진*/
        spaceBetween: 20,
        navigation:{
            nextEl: ".bnf-img .swiper-button-next.bnf",
            prevEl: ".bnf-img .swiper-button-prev.bnf"
        },
        /*페이지*/
        pagination:{
            el: ".swiper-pagination",
            dynamicBullets: true,
            
        },
    })





    // 서비스 애니메이션
    AOS.init({
    })

    // 애니메이트 wow
    new WOW({
        animateClass: "animate__animated",
        mobile: false,
    }).init()



});


// sns
// const $tab_nav = $(".subway-sns-content .content-wrap > ul li");
// const $tab_list = $(".subway-sns-content .tab-content")
// $tab_list.eq(0).show();
// $tab_nav.eq(0).addClass("on")

// $tab_nav.click(function(){
//     let i = $(this).index();
//     $tab_list.hide().eq(i).show()
//     $tab_nav.removeClass("on").eq(i).addClass("on")
// })