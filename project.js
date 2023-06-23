function addToArray() {
}




function myFunction1() {
  var x = document.getElementById("whatpart");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunction2() {
  var x = document.getElementById("hypothesis");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunction3() {
  var x = document.getElementById("ideaimportant");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunction4() {
  var x = document.getElementById("emotionally");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunction5() {
  var x = document.getElementById("goodforXR");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunction6() {
  var x = document.getElementById("betterin3D");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunction7() {
  var x = document.getElementById("possibility");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function myFunction8() {
  var x = document.getElementById("auditing");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function myFunction9() {
  var x = document.getElementById("projectin3d");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function myFunction10() {
  var x = document.getElementById("designprinciples");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}




var map = L.map('map').setView([48.4633, -123.3118], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([48.4633, -123.3118]).addTo(map);
var circle = L.circle([48.4589455,-123.3069113], {
    color: '#009900',
    fillColor: '#b3ffb3',
    fillOpacity: 0.5,
    radius: 100
}).addTo(map);
var marker = L.marker([48.459993, -123.316114]).addTo(map);



function myDev() {
  alert("Sorry, our app is still in development. Check our twitter for updates!");
}

let array = [];
function addLocation() {
var marker = L.marker([48.457073, -123.325607]).addTo(map);

	
	addToArray(newLocation);
}

function submitWeather() {
	$("#output").show();
	let url = "https://api.weatherbit.io/v2.0/current?&key=ed8f3f8b7fed45dc94ef9f6b1e2f7b49";
	let city = $("#locationName").val();
	
	url = url + "&city=" + city;
	
	$.get(url, function(data) {
		document.getElementById("raw").innerHTML = JSON.stringify(data);
		displayResults(data);
});

function displayResults(data) {
	$("#resultCity").html(data.City);
	$("#resultWeather").html(data.Weather);
}}

	
	