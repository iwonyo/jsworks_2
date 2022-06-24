// 생성자 함수
function Book(title, author, price){
  this.title = title;
  this.author = author;
  this.price = price;
}

var web = new Book("html", '고경희', 30000);
var python = new Book("점프 투 파이썬", "박응용", 20000);
var django = new Book('점프 투 장고', '박응용', 20000);

var bookList = [web, python, django];

document.write(bookList[0].title);

for(let i = 0; i <bookList.length; i++){
  document.write('<p>' + bookList[i].title + '</p>');
}