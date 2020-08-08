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
