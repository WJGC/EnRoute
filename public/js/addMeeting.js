/* When the user clicks on cancel 
navigate back to homepage */
$("#cancel").click(function(){
  window.location.href = "/home";
});


/* set meeting place */
let vicinity = sessionStorage.getItem("vicinity");
let address = sessionStorage.getItem("address");
document.getElementById("meetingPlace").innerHTML = "Meeting will be set at " + vicinity;

$("#vicinity").value = vicinity;
$("#address").value = address;

/* When the user clicks on add Meeting 
navigate back to homepage and pass values for new meeting */
$("#submitBtn").click(function(){
	sessionStorage.setItem('activeMeeting', 'true');
	let ten = $("#ten").checked;
	let five = $("#five").checked;
	let two = $("#two").checked;
	let friend = $("#friendName").value;
	
	sessionStorage.setItem('friendName', friend);

	console.log(ten);
	console.log(five);
	console.log(two);

	if(ten) {
		sessionStorage.setItem('ten', 'true');
	} else {
		sessionStorage.setItem('ten', 'false');
	}
	if(five) {
		sessionStorage.setItem('five', 'true');
	} else {
		sessionStorage.setItem('five', 'false');
	}
	if(two) {
		sessionStorage.setItem('two', 'true');
	} else {
		sessionStorage.setItem('two', 'false');
	}
});