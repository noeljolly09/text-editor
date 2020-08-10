function editor(){
  textfield.document.designMode = 'On';}

function execCmd(command){
  textfield.document.execCommand(command, false, null);}


  function bgColor() {
    var x = document.getElementById("textfield");
    x.style.backgroundColor = "white";
  }

  // function textColor(){
  //   var x = document.getElementById("textfield");
  //   x.style.fontcolor = "white";
  // }

  // function createTable(){
  //   var table = '';
  //   var rows;
  //   var cols;
  //
  //   rows = prompt("enter no. of rows");
  //   cols = prompt("enter no. of cols");
  //
  //   for(r = 1; r<= rows; r++)
  //   {
  //     table += '<tr>';
  //     for(var t = 1; t<= cols; t++)
  //     {
  //       table += '<td>' + t +'</td>';
  //     }
  //     table += '</tr>';
  //   }
  //   document.write('<table border=1>' + table + '</table>');
  // }
