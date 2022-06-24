window.onload = function(){
    let now = new Date();  //날짜 객체 생성
    let firstDay = new Date("2022-5-9");
    
    let passedTime = now.getTime() - firstDay.getTime();  //지난 시간 계산(밀리초)
    console.log(passedTime + "ms");
    
    passedTime = Math.round(passedTime/(24*60*60*1000)); 
    //밀리초(ms) ->초(s)로 환산후 일(day)로 환산.. 24시간 60분 60초 1000밀리초
    
    document.querySelector("#day").innerText = passedTime;
    //document.getElementById("day").innerHTML = passedTime;
}

