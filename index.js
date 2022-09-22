var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).click();
  counter++;
  if (counter > 3) {
    counter = 1;
  }
}, 2500);

document.getElementById("mymodal").addEventListener("click", ()=>{
  document.getElementById("hide_btn_js").click();
});// To close the contact us form by clicking anywhere



$(document).ready(function(){
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
	});
});
