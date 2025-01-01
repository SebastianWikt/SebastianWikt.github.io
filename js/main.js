$(document).ready(function(){

    $(".filter-button").click(function() {
        var value = $(this).attr('data-filter');

        if (value == "all"){
            $('.filter').show('1000');
        }
        else {
            $('.filter').not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');
        }
    });

    if ($('.filter-button').removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");

    //Owl-carousel

    $('.site-main .interest-area .owl-carousel').owlCarousel({
        loop:true,
        autoplay: true,
        dots: true,
        responsive:{
            0:{
                items: 1
            },
            544: {
                items: 2
            }
        }
    })


    //sticky nav

    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed(){
        if($('.header_area').length){
            $(window).scroll(function(){
                let scroll = $(window).scrollTop();
                if(scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                }
                else{
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }


    navbarFixed();


});




/*
let list = document.querySelectorAll('.list');
let itemBox = document.querySelectorAll('.itemBox');

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function() {
        for (let j = 0; j < list.length; j++) {
            list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        for (let k = 0; k < itemBox.length; k++) {
            itemBox[k].classList.remove('active');
            itemBox[k].classList.add('hide');

            if (itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all") {
            itemBox[k].classList.remove('hide');
            itemBox[k].classList.add('active');
            }    
        }
    })
}
*/