/* When the user clicks on cancel 
navigate back to homepage*/
document.getElementById("cancel").addEventListener("click",function(){
  window.location.href = "index.handlebars";
});

/* When the user clicks on add Meeting 
navigate back to homepage and pass values for new meeting*/
document.getElementById("submitBtn").addEventListener("click",function(){
  window.location.href = "index.handlebars";
});