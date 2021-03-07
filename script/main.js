// event pada saat link di klik
$(".page-scroll").on("click", function (e) {
  // ambil isi href
  var tujuan = $(this).attr("href");

  // tangkap elemen
  var elemenTujuan = $(tujuan);

  // pindahkan scroll
  $("html, body").animate(
    {
      scrollTop: elemenTujuan.offset().top - 50,
    },
    1250,
    "swing"
  );

  e.preventDefault();
});

// Parallax

$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  // header
  $(".jumbotron img").css({
    transform: "translate(0px, " + wScroll / 6 + "%)",
  });

  $(".jumbotron h1").css({
    transform: "translate(0px, " + wScroll + "%)",
  });

  $(".jumbotron p").css({
    transform: "translate(0px, " + wScroll / 2 + "%)",
  });

  $(".jumbotron a").css({
    transform: "translate(0px, " + wScroll + "%)",
  });

  // Portfolio
  // design
  if (wScroll > $(".section-portfolio").offset().top - 400) {
    $(".design-foto .figure-img").each(function (i) {
      setTimeout(function () {
        $(".design-foto .figure-img").eq(i).addClass("muncul");
      }, 200 * (i + 1));
    });
  }
});
