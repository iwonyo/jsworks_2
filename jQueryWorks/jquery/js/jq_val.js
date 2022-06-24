// val() 함수
$(document).ready(function(){
    $("button").on('click', function(){
        var text = $("#t_input").val();
        $("#t_output").val(text);
    });

});