//자리배치도 프로그램

var customNum = prompt("입장객은 몇 명인가요?")
var colNum = prompt("한 줄에 몇 명 앉나요?");
var rowNum, i, j;

if(customNum % colNum == 0)
  rowNum = parseInt(customNum / colNum);
else
  rowNum = parseInt(customNum / colNum + 1);

//좌석번호 배치
document.write('<table>');
for(i = 0; i < rowNum; i++){
  document.write('<tr>')
  for(j = 1; j <= colNum; j++){
    var seatNum = i * colNum + j;
    if(seatNum > customNum)
      break;
    document.write("<td>좌석" + seatNum + "</td>")
  }
  document.write("</tr>")
}
document.write('</table>')
