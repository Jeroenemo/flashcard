$(document).ready(function(){
// with on
  $(".front",".card").on("click", function(){
    $(this).hide();
    $(this).siblings(".back").show();
  });
  $(".back",".card").on("click",function(){
    $(this).hide();
    $(this).siblings(".front").show();
  });


// with click
//   $(".front",".card").click(function(){
//     $(this).hide();
//     $(this).siblings(".back").show();
//   });
//   $(".back",".card").click(function(){
//     $(this).hide();
//     $(this).siblings(".front").show();
//   });
});

// When using siblings, siblings apply to all classes/ids within the same div.