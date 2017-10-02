function updateTimer(){
	var now = new Date();
	var timeRemaining = endDate.getTime() - now.getTime();
	var seconds = Math.floor((timeRemaining / 1000) % 60);
	var minutes = Math.floor((timeRemaining /1000 / 60) % 60);
	var hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
	var days = Math.floor((timeRemaining / (1000 * 60 * 60 * 24)) % 7);
	var weeks = Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 7));

	document.getElementsByClassName("weeks")[0].innerHTML = weeks;
	document.getElementsByClassName("days")[0].innerHTML = days;
	document.getElementsByClassName("hours")[0].innerHTML = hours;
	document.getElementsByClassName("minutes")[0].innerHTML = minutes;
	document.getElementsByClassName("seconds")[0].innerHTML = seconds;
}

var endDate = new Date("January 10, 2018");
setInterval(function(){
	updateTimer();
},1000)


function updateTimer3(){
	var dragonDay = new Date();
	var timeRemaining = dragonDate.getTime() - dragonDay.getTime();
	var seconds = Math.floor((timeRemaining / 1000) % 60);
	var minutes = Math.floor((timeRemaining /1000 / 60) % 60);
	var hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
	var days = Math.floor((timeRemaining / (1000 * 60 * 60 * 24)) % 7);
	var weeks = Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 7));

	document.getElementsByClassName("w")[0].innerHTML = weeks;
	document.getElementsByClassName("d")[0].innerHTML = days;
	document.getElementsByClassName("h")[0].innerHTML = hours;
	document.getElementsByClassName("m")[0].innerHTML = minutes;
	document.getElementsByClassName("s")[0].innerHTML = seconds;
}

var dragonDate = new Date("August 30, 2018");
setInterval(function(){
	updateTimer3();
},1000)

function updateTimer2(){
	var hamDay = new Date();
	var timeRemaining = hamDate.getTime() - hamDay.getTime();
	var seconds = Math.floor((timeRemaining / 1000) % 60);
	var minutes = Math.floor((timeRemaining /1000 / 60) % 60);
	var hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
	var days = Math.floor((timeRemaining / (1000 * 60 * 60 * 24)) % 7);
	var weeks = Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 7));

	document.getElementsByClassName("wk")[0].innerHTML = weeks;
	document.getElementsByClassName("dy")[0].innerHTML = days;
	document.getElementsByClassName("hr")[0].innerHTML = hours;
	document.getElementsByClassName("mn")[0].innerHTML = minutes;
	document.getElementsByClassName("sd")[0].innerHTML = seconds;
}

var hamDate = new Date("May 22, 2018");
setInterval(function(){
	updateTimer2();
},1000)