var menu_strip = document.getElementById('Header_A1');
var click_rate = 0;



menu_strip.addEventListener("click", clicked );

function clicked(){

	var close = document.getElementById("close");

	if (click_rate%2 == 0) {
	close.src = "download.png";
	click_rate = click_rate + 1;
}
	else{
	close.src = "https://flyclipart.com/thumb2/menu-three-horizontal-lines-symbol-868496.png";
	click_rate = 0;
	}
}