/* When the user clicks on cancel 
navigate back to homepage */
document.getElementById("cancel").addEventListener("click",function(){
  window.location.href = "/home";
});


/* set meeting place */
let vicinity = sessionStorage.getItem("vicinity");
let address = sessionStorage.getItem("address");
document.getElementById("meetingPlace").innerHTML = "Meeting will be set at " + vicinity;

document.getElementById("vicinity").value = vicinity;
document.getElementById("address").value = address;

/* When the user clicks on add Meeting 
navigate back to homepage and pass values for new meeting */
document.getElementById("submitBtn").addEventListener("click",function(){
	sessionStorage.setItem('activeMeeting', 'true');
	let ten = document.getElementById("ten").checked;
	let five = document.getElementById("five").checked;
	let two = document.getElementById("two").checked;
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