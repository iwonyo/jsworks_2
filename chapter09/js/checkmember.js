//name 속성으로 유효성 검사하기

function checkMember(){
    let form = document.regForm;
    let id = form.id.value;
    let pwd1 = form.pwd1.value;
    let pwd2 = form.pwd2.value;
    let email = form.email.value;

    //비밀번호 정규 표현식
    let pwd1_pat1 = /[0-9A-Za-z]/;
    let pwd1_pat2 = /[~!@#$%^&*]/;

    if(id.length < 4 || id.length > 15){
        alert("아이디는 4자 이상 15자리 미만입니다.");
        form.id.select();
        return false;
    }
    else if(pwd1.length < 8 || !pwd1_pat1.test(pwd1) || !pwd1_pat2.test(pwd1) ){
        alert("비밀번호는 영문자, 숫자, 특수문자 포함 8자 이상입니다.");
        form.pwd1.select();
        return false;
    }
    else if(pwd1 != pwd2){
        alert("비밀번호가 일치하지 않습니다.");
        form.pwd2.select();
        return false;
    }
    else if(email.length == 0){
        alert("이메일은 필수 입력항목입니다.");
        form.email.focus();
        return false;
    }
}
