$(function(){
  //menu btn click > menu opens
  $('.nav').click(function(){
    $('.nav_container')
      .addClass('menuOn');
      // 축소해짐
    $('#intro_inner,#about_inner,#project_inner,#design_inner,#contact_inner')
      .addClass('scaleChange');
  });

  // 닫기창
  $('.close_nav').click(function(){
    $('.nav_container')
      .removeClass('menuOn');
      $('#intro_inner,#about_inner,#project_inner,#design_inner,#contact_inner')
      .removeClass('scaleChange');
  });
  // 메뉴 닫기창2
  $('.gnb > li').click(function(){
    $('.nav_container')
      .removeClass('menuOn');
      $('#intro_inner,#about_inner,#project_inner,#design_inner,#contact_inner')
      .removeClass('scaleChange');
  });

  // section change effect
  $('ul > li').eq(0).click(function(){
    $('#intro').addClass('on');
    $('#about').removeClass('on');
    $('#project').removeClass('on');
    $('#design').removeClass('on');
    $('#contact').removeClass('on');
  });
  $('ul > li').eq(1).click(function(){
    $('#about').addClass('on');
    $('#project').removeClass('on');
    $('#design').removeClass('on');
    $('#contact').removeClass('on');
    $('#intro').removeClass('on');
  });
  $('ul > li').eq(2).click(function(){
    $('#project').addClass('on');
    $('#design').removeClass('on');
    $('#contact').removeClass('on');
    $('#about').removeClass('on');
    $('#intro').removeClass('on');
  });
  $('ul > li').eq(3).click(function(){
    $('#design').addClass('on');
    $('#contact').removeClass('on');
    $('#about').removeClass('on');
    $('#project').removeClass('on');
    $('#intro').removeClass('on');
  });
  $('ul > li').eq(4).click(function(){
    $('#contact').addClass('on');
    $('#about').removeClass('on');
    $('#project').removeClass('on');
    $('#design').removeClass('on');
    $('#intro').removeClass('on');
  });
});

// 메뉴활성화
$('li').click(function() {
 $('li').removeClass('on');
 $(this).addClass('on');
});

//이미지 롤오버(rolliver)효과
$(document).ready(function(){
    $("img").hover(function() {
        var temp = $(this).attr("src");
        $(this).attr("src", $(this).attr("data-alt-src"));
        $(this).attr("data-alt-src", temp);
    });
});
