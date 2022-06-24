//유효성 검사

function checkMember(){
  var form = document.regForm;  //폼 이름
  var id = form.mid.value;      //mid 값
  var pwd = form.passwd.value;  //passwd 값
  var name = form.name.value;   //name 값

  //비밀번호 정규 표현식 설정
  var pwd_pat1 = /[0-9A-Za-z]/;  //영문자, 숫자 
  var pwd_pat2 = /[~!@#$%^&*]/;  //특수문자

  if(id.length != 5){
    alert("아이디는 5자까지 가능합니다.");
    return false;
  }
  else if(pwd.length != 8 || !pwd_pat1.test(pwd) || !pwd_pat2.test(pwd)){
    alert("패스워드는 영문자, 숫자, 특수문자 포함 8자까지 가능합니다.");
    return false;
  }
  else if(name==""){
    alert("이름은 필수 입력 항목입니다.")
    return false;
  }
  else{
    form.submit();   //전송
  }
}
