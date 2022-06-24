//함수 정의
function myFunction(){
    var a = parseInt("10") + '<br>';
    var b = parseInt("12.34") + '<br>';
    var c = parseInt("010") + '<br>';
    var d = parseInt("10", 8) + '<br>';
    var e = parseInt("0x10") + '<br>';
    var f = parseInt("40 years") + '<br>';

    var result = a + b + c + d + e + f;
    document.getElementById("demo").innerHTML = result;
           
}