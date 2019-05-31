// var count = 0
// setInterval(function () {
//     if (count > 1) {
//         count = 1;
//         $('.head-msg').find('li').css({
//             top: '0'
//         })
//     } else {
//         count++;
//     }
//     $('.head-msg').find('li').animate({
//         top: '-26' * count
//     }, 1000)
// }, 2000)





// $('.headNav ul li').mouseover(function () {
//     $(this).css({
//         'border-bottom': '2px solid red'
//     })
// })
// $('.headNav ul li').mouseout(function () {
//     $(this).css({
//         'border-bottom': '0'
//     })
// })
// $('.a li').eq(1).on('mouseover', function () {
//     $('.state').css({
//         'display': 'block'
//     })
// })
// $('.a li').eq(2).on('mouseover', function () {
//     $('.food').css({
//         'display': 'block'
//     })
// })
// $('.a li').eq(6).on('mouseover', function () {
//     $('.find').css({
//         'display': 'block'
//     })
// })
// $('.a li').eq(8).on('mouseover', function () {
//     $('.brand').css({
//         'display': 'block'
//     })
// })
// $('.a li').eq(1).on('mouseout', function () {
//     $('.state').css({
//         'display': 'none'
//     })
// })
// $('.a li').eq(2).on('mouseout', function () {
//     $('.food').css({
//         'display': 'none'
//     })
// })
// $('.a li').eq(6).on('mouseout', function () {
//     $('.find').css({
//         'display': 'none'
//     })
// })
// $('.a li').eq(8).on('mouseout', function () {
//     $('.brand').css({
//         'display': 'none'
//     })
// })
// $('.place a').on('mouseover', function () {
//     $(this).css({
//         'color': 'red'
//     })
// })
// $('.fooder p').on('mouseover', function () {
//     $(this).css({
//         'color': 'red'
//     })
// })
// $('.place a').on('mouseout', function () {
//     $(this).css({
//         'color': '#000'
//     })
// })
// $('.fooder p').on('mouseout', function () {
//     $(this).css({
//         'color': '#000'
//     })
// })
// $('.winertwo i').on('mouseover', function () {
//     $(this).css({
//         'color': 'red'
//     })
// })
// $('.winertwo i').on('mouseout', function () {
//     $(this).css({
//         'color': '#000'
//     })
// })
// $('.find p').on('mouseover', function () {
//     $(this).css({
//         'color': 'red'
//     })
// })
// $('.find p').on('mouseout', function () {
//     $(this).css({
//         'color': '#000'
//     })
// })
// $('.brand p').on('mouseover', function () {
//     $(this).css({
//         'color': 'red'
//     })
// })
// $('.brand p').on('mouseout', function () {
//     $(this).css({
//         'color': '#000'
//     })
// })
// $(function () {
//     var titleTop = $('.headNav').offset().top;
//     $(document).on('scroll', function () {
//         if ($(document).scrollTop() > titleTop) {
//             $('.headNav').css({
//                 "position": "fixed",
//                 "top": 0
//             })
//         } else {
//             $('.headNav').css({
//                 'position': 'absolute',
//                 "top": "138px"
//             })
//         }
//     })
// })
// $(function () {
//     $(document).on("scroll", function () {
//         if ($(document).scrollTop() > 600) {
//             $('.float div').eq(4).css({
//                 'display': 'block'
//             })
//         } else {
//             $('.float div').eq(4).css({
//                 'display': 'none'
//             })
//         }
//     })
// })
// $(function () {
//     $('.float div').eq(4).on('click', function () {
//         $('html,body').stop(true).animate({
//             'scrollTop': '0'
//         }, 2000)
//     })
// })









// function Ban() {
//     this.banner = $('.tracker');
//     this.banners = $('.tracker .ban a img');
//     this.count = $('.tracker .ban a img').length - 1;
//     this.track = $('.track')
//     this.init()
// }
// Ban.prototype = {
//     init: function () {
//         this.slideshow();
//         this.evenbind();
//         this.slide();
//         this.slider();
//         this.sl();
//     },
//     slide: function () {
//         $('.track').on('mouseover', function () {
//             $('.item').stop(true).fadeIn(500);
//         })
//         $('.track').on('mouseout', function () {
//             $('.item').stop(true).fadeOut(500);
//         })
//         $(function () {
//             for (var i = 0; i < $('.item a').length; i++) {
//                 $('.item a div').eq(i).css({
//                     'left': 17 + (i * 160)
//                 })
//             }
//         })
//         $('.item div').on('mouseover', function () {
//             $('.item div').removeClass('act');
//             $(this).addClass('act')
//         })
//     },
//     appear: function () {
//         clearInterval(this.timer);
//     },
//     move: function () {
//         this.slideshow()
//     },
//     slider: function () {
//         var __this = this
//         $('.item a').on('mouseover', function () {            
//             $('.tracker .ban a img').fadeOut(500)
//             $('.tracker .ban a img').eq(6 - $(this).index()).fadeIn(500)
//             console.log( $('.tracker .ban a img').eq(6 - $(this).index()))
//         __this.count = 6 - $(this).index(); 
//         })
//     },
//     slideshow: function () {
//         var _this = this;     
//         this.timer = setInterval(function () {
//             $('.item div').removeClass('act');
//             $('.item div').eq(7 - _this.count).addClass('act')
//             $('.tracker .ban a img').stop(true).fadeOut(500);
//             $('.tracker .ban a img').eq(_this.count - 1).stop(true).fadeIn(500);
//             _this.count--;
//             if (_this.count < 1) {
//                 _this.count = _this.banners.length;
//             }

//         }, 4000)
//     },
//     sl : function(){
//         $('.item div').eq(0).addClass('act')
//     },
//     evenbind: function () {
//         this.track.on('mouseover',$.proxy(this.appear,this));
//         this.track.on('mouseout', $.proxy(this.move,this));
//     }
// }
// new Ban();








// $('.lists').css({
//     'width': ($('.lists li').length + 1) * $('.lists li').eq(0).outerWidth() + 'px'
// })
// $(function () {
//     var count = 0
//     $('.prevr').on('click', function () {
//         count++;
//         if (count > (Math.ceil($('.lists li').length / 4) - 1)) {
//             count = Math.ceil($('.lists li').length / 4) - 1
//         }
//         var amount = Math.min(4, ($('.lists li').length - count * 4))
//         $('.lists').stop(true).animate({
//             left: (-count * 4 + (4 - amount)) * $('.lists li').eq(0).outerWidth(true) + 'px'
//         }, 1000)
//     });
//     $('.prevl').on('click', function () {
//         count--;
//         if (count < 0) {
//             count = 0
//         }
//         var amount = Math.min(4, ($('.lists li').length - count * 4))
//         $('.lists').stop(true).animate({
//             left: (-count * 4 + (4 - amount)) * $('.lists li').eq(0).outerWidth(true) + 'px'
//         }, 1000)
//     })
//     $('.lists li').on('mouseover',function(){
//         $(this).addClass('set')
//     })
//     $('.lists li').on('mouseout',function(){
//         $(this).removeClass('set')
//     })
//     $('.big img').on('mouseover',function(){
//         $(this).stop().animate({
//             'width' : '290',
//             'height' : '290'
//         },2000)
//     })
//     $('.big img').on('mouseout',function(){
//         $(this).stop().animate({
//             'width' : '265',
//             'height' : '265'
//         },2000)
//     })
// })








// $(function () {
//     $('.home-wine .action-tab li').on('mouseover', function () {
//         $(this).addClass('activetwo').siblings().removeClass('activetwo')
//         $('.js-tab>div').eq($(this).index()).addClass('shower').siblings().removeClass('shower')
//     })
//     $('.js-t div ul li h3 a').on('mouseover', function () {
//         $(this).addClass('red')
//     })
//     $('.js-t div ul li h3 a').on('mouseout', function () {
//         $(this).removeClass('red')
//     })
//     $('.js-tab .videos section').on('mouseover', function () {
//         $(this).find('p').addClass('bg')
//     })
//     $('.js-tab .videos section').on('mouseout', function () {
//         $(this).find('p').removeClass('bg')
//     })

// })
// $('.clicke dl dt section').on('click', function () {
//     $('.shade').eq($(this).parent().parent().index()).addClass('block')
// })
// $('.shade i').on('click', function () {
//     $('.shade').removeClass('block')
// })
// $('.clicke .videos').on('mouseover', function () {
//     $(this).addClass('settwo')
// })
// $('.clicke .videos').on('mouseout', function () {
//     $(this).removeClass('settwo')
// })
// $('.clicke .videos .a-btn').on('mouseover', function () {
//     $(this).addClass('redtwo')
// })
// $('.clicke .videos .a-btn').on('mouseout', function () {
//     $(this).removeClass('redtwo')
// })
// $('.home li').on('mouseover', function () {
//     $(this).addClass('settwo')
// })
// $('.home li').on('mouseout', function () {
//     $(this).removeClass('settwo')
// })
// $('.breed li').on('mouseover', function () {
//     $(this).addClass('settwo')
// })
// $('.breed li').on('mouseout', function () {
//     $(this).removeClass('settwo')
// })