function testfade() {
	var showhide = document.getElementById('showhide');
	showhide.className = showhide.className += " fade";
}

window.onload = testfade; 
function tellJoke(){
	var request = new XMLHttpRequest();
	request.open('GET', 'http://api.icndb.com/jokes/random', true);

	request.onload = function() {

		var data = JSON.parse(request.responseText);
		console.log(data.value.joke);
		document.getElementById("joke").innerHTML = data.value.joke;

	};

	request.onerror = function() {
  // There was a connection error of some sort
};

request.send();
}


function loadAjax() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("demo").innerHTML =
			this.responseText;
		}
	};
	xhttp.open("GET", "ajax_info.txt", true);
	xhttp.send();
}

/*config*/

var config = {

requestURL : ‘http://api.icndb.com/jokes/random’,

}