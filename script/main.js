// event pada saat link di klik
$('.page-scroll').on('click', function(e){
    // ambil isi href
    var tujuan =$(this).attr('href');

    // tangkap elemen
    var elemenTujuan = $(tujuan);

    // pindahkan scroll
    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1250, 'swing');

    e.preventDefault();
});



// Parallax

$(window).scroll(function(){

    var wScroll = $(this).scrollTop();

    // header
    $('header img').css({
        'transform' : 'translate(0px, '+wScroll/6+'%)'
    });

    $('header h1').css({
        'transform' : 'translate(0px, '+wScroll+'%)'
    });

    $('header p').css({
        'transform' : 'translate(0px, '+wScroll/2+'%)'
    });

    $('header a').css({
        'transform' : 'translate(0px, '+wScroll/1+'%)'
    });


    // Portfolio
    // design
    if (wScroll > $('.design').offset().top -400){
        $('.design-foto .figure-img').each(function(i){
            setTimeout(function(){
                $('.design-foto .figure-img').eq(i).addClass('muncul');
            }, 200 * (i+1));
        });
    }

    // developer
    if (wScroll > $('.developer').offset().top -380){
        $('.developer-foto .figure-img').each(function(i){
            setTimeout(function(){
                $('.developer-foto .figure-img').eq(i).addClass('muncul');
            }, 200 * (i+1));
        });
    }
});
