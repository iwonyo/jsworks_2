//Circle 생성자 함수 만들기
function Circle(radius){ //생성자 함수
    this.radius = radius;

    this.length = function(){ //원의 둘레 : 2 * PI * 반지름
        var length = Math.floor(2 * Math.PI * this.radius);
        return length;
    }

    this.area = function(){ //원의 넓이 : 반지름 * 반지름 * PI
        var area = Math.floor(Math.PI * this.radius * this.radius);
        return area;
    }
}

var r = parseInt(prompt("원의 반지름은? (cm)", ""))

var circle = new Circle(r);

document.write("반지름이 " + r + "cm일 때<br>원의 둘레 : 약 " +
circle.length() + "cm<br>원의 넓이 : 약 " + circle.area() +"cm<sup>2</sup>");
                

