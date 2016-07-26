//var about = $('#about').offset().top + $('#about').height();
//
//
//$(window).on('scroll', function () {
//
//    stop = Math.round($(window).scrollTop());
//    if (stop > about) {
//        $('.before').addClass('after');
//    } else {
//        $('.before').removeClass('after');
//    }
//    
//});

$(document).on('click', 'a',function(e) {
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

$('document').ready(function() {
    $('header').css('display', 'none');
    $('header').fadeIn(1000);
    $('.about-contain').css('display', 'none');
    $('.about-contain').delay(400).fadeIn(1000);
    $('.circles').css('display', 'none');
    $('.circles').delay(200).fadeIn(1000);
    
   
});



var accordion = $('.accordion');

accordion.find('dd').hide();
accordion.find('dt').on('click',function(){
  
  $(this).toggleClass('open').next('dd').slideToggle().siblings('dd:visible').slideUp().prev('dt').removeClass('open');
    var title = $('.this').text();
ga('set', { page:'/portfolio/'+encodeURIComponent(title).toLowerCase(), title: title });
ga('send', 'pageview');    
    
    
});




var header = $('header');

header.find('nav').hide();
header.find('.menu').on('click',function(){
  
  $(this).toggleClass('open').next('nav').slideToggle(300).siblings('nav:visible').slideToggle(300);
  
});



$(document).ready(function(){
$(window).resize(function() {
  if ($(window).width() > 1017) {
      $('.menu').hide();
     $('nav').show();
  }
 else {
    $('nav').hide();
     $('.menu').show();
 }
 }).resize();
});




$('dt').click(function() {  
    $('.project-container:visible').toggleClass('in-view');
});


  $('dt').on('click',function(){
    if ($('.project-container').hasClass('in-view')) {
    $('.portfolio-header-position').slideUp();
    }
      
    else {
    $('.portfolio-header-position').slideDown().show();
    }
});

$('dt').click(function(){
$('.accordion dt.open:visible').toggleClass('active');
}); 

//$(document).ready(function () {
//    $('#menu a').on("click", function () {        $(this).parent().siblings().find("a").removeClass('selected');
//        $(this).addClass('selected');
//    });
//});

$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('#menu a').each(function () {
            $(this).removeClass('selected');
        })
        $(this).addClass('selected');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menu a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu a').removeClass("selected");

            currLink.addClass("selected");
        }
        else{
            currLink.removeClass("selected");
        }
    });
}






















//
//$(window).bind('scroll', function() {
//     if ($(window).scrollTop() > 190) {
//         $('.about-title-position').fadeOut(400);
//         $('.about-description-position').fadeOut(400);
//        $('.resume').fadeOut(400);
//
//     }
//     else {
//         $('.about-title-position').fadeIn(400);
//         $('.about-description-position').fadeIn(400);
//          $('.resume').fadeIn(400);
//     }
//});
      










//
//$('dt').on('click',function(){
//    if ($('.accordion dt').hasClass('active')) {
//     $('dt').show();
//    }
//      
//    else {
//    $('dt').hide();
//    }
//});



// $('dt').on('click',function(){
//    if ($('.project-container').hasClass('hidden')) {
//    $('.portfolio-header-position').show();
//    }
//              
//              else{
//              $('.portfolio-header-position').hide();
//              }

//$('dt').click(function() {     
//    if ('.accordion:visible') {
//    $('dt').fadeToggle();
//    }
//});


//$('li').click(function() {     
//    if($('.position-title:visible').length)
//        $('.position-title:visible').slideUp(200);
//    else
//        $('.position-title').slideDown(200);        
//});





