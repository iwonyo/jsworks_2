// text() 함수 사용하기
$(document).ready(function(){
    $("#btn").click(function(){
        msg();  //msg() 호출
    })

    function msg(){
        $('.msg').text('메시지가 변경되었습니다.');
        $('.msg').css('background', 'pink');
    }
});
