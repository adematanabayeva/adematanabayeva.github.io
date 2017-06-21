$(document).ready(function() {
  // alert();
  // confirm();
  // prompt();
  $('h1').on("click", function() {
    $('h1').delay(3000).fadeOut().delay(1000).fadeIn();
    $('h1').addClass('active');
  })
  // $('img').on("click", function() {
  //   $(this).slideUp(500);
  // })
//    $('li').on("click", function() {
//    $(this).addClass('active');
//
//  })
//$('li').on('click', function() {
  //$(this).removeClass('active');
  //})
   $('li').on("click", function() {
     $('li').removeClass('active');
     $(this).addClass('active');
   })
   $("#clicked").on("click", function () {
     $("h1").toggleClass("active");
     $("h1").html("<h2>Clicked</h2>");
   })
   $(".vandamm").on("mouseover", function () {
     //$(".vandamm").attr("src", "images/1 (1).jpg")
     $(".vandamm").attr("width", "90%");
   })
   $(".vandamm").on("mouseout", function () {
     //$(".vandamm").attr("src", "images/1 (1).jpg")
      $(".vandamm").attr("width", "30%");
   })
})
