var customNum = prompt("입장객은 몇 명인가요?"); //입장객 수
var colNum = prompt("한 줄에 몇 명 앉나요?");   //열의 수
var rowNum;       //행의 수
var seatNo;       //좌석 번호

if(customNum % colNum === 0){
  rowNum = parseInt(customNum / colNum);
}
else{ //나머지가 있으면 한 줄(행)이 더 필요
  rowNum = parseInt(customNum / colNum) + 1;
}

document.write('<table>');
for(var i=0; i<rowNum; i++){
  document.write('<tr>');
  for(var j=1; j<=colNum; j++){
    seatNum = i * colNum + j;
    if(seatNum > customNum)
      break;
    document.write("<td>좌석" + seatNum + '</td>');
  }
  document.write('</tr>');
}
document.write('</table>');