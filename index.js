
var counter = 1 ;
setInterval (function(){
  document.getElementById ('radio'+ counter).click();
  counter ++ ;
  if (counter > 3) {
    counter = 1 ;
  }
} , 2500 );



