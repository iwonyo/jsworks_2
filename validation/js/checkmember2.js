//입력값 검증
var id = document.getElementById('memberid');
var pwd = document.getElementById('passwd');

id.onchange = checkId;
pwd.onchange = checkPwd;

function checkId(){
  if(id.value.length < 5 || id.value.length > 10 || id.value == ""){
    alert("아이디는 5자리의 영문과 숫자로 입력해주세요.");
    id.select();
  }
}

function checkPwd(){
  if(pwd.value.length < 8){
    alert("비밀번호는 8자리 이상 입력해주세요.");
    pwd.select();
  }
}

