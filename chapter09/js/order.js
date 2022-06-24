//checkbox에 접근할 변수 선언
var check = document.getElementById("shippingInfo");

//1. onClick 속성 사용 -> 함수 대입
//check.onclick = checkBox;

//2. addEventListener() 함수 사용
check.addEventListener("click", checkBox);

//주문 정보 요소에 접근
var billingName = document.getElementById("billingName");
var billingTel = document.getElementById("billingTel")
var billingAddr = document.getElementById("billingAddr")

//배송 정보 요소에 접근
var shippingName = document.getElementById("shippingName");
var shippingTel = document.getElementById("shippingTel");
var shippingAddr = document.getElementById("shippingAddr");

function checkBox(){
    if(check.checked==true){  //체크박스에 체크 되었다면
         shippingName.value = billingName.value;
         //주문 정보의 이름을 배송 정보의 이름에 대입
         shippingTel.value = billingTel.value;
         shippingAddr.value = billingAddr.value;
    }
    else{ //check.checked == false
        //배송 정보 초기화
        shippingName.value = "";
        shippingTel.value = "";
        shippingAddr.value = "";
    }
}