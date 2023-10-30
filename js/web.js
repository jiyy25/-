// $(document).ready(function () {
//     $("h1 a").html("다지워")

//     $("#gnb > li").eq(1).find(".d1a").html("네이버")

//     //대메뉴의 소메뉴 중 첫번째 텍스트가 구글
//     $(".d2ul").eq(2).find(".d2a").eq(0).html("구글");
//     $("#gnb >li:eq(2) li:eq(0) a").html("구글");

//     // $("body").html("")

//     //모든 링크를 안되게 처리
//     $("a").attr("href", "#none")

//     $("h1 img").attr("src", "logo.jpg")
//     //attr(속성, 값)->속성에 접근

//     //toggleXClass, addClass, removeClass
//     $("h1 img").addClass("on")

//     //css(스타일, 값)
//     $("body").css("background", "yellow")

//     //자바스크립을 이용해 스타일이 들어감->동적객체
// })


$(document).ready(function () {
    //gif인 이미지 없애줘
    $('img[src$=".gif"]').css("display","none");

    //링크값이 없는 a태그 없애줘
    $('a[href="]').css("display", "none");

})