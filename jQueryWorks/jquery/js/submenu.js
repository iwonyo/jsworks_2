$(function(){
    //'학교안내' 이벤트
    $(".btn1 a").on("mouseover", function(){
        let p = $(this);
        p.parent().next().show();
        p.css("background", "pink");
    });

    $(".btn1 a").on("mouseout", function(){
        let p = $(this);
        p.parent().next().hide();
        p.css("background", "white");
    });

    //'학교 생활' 이벤트
    $(".btn2").on("click", function(){
        $(".ul2").css({'display': "block"});
    });

    $(".btn2").on("mouseout", function(){
       $(".ul2").css({'display': "none"});
   });
});

