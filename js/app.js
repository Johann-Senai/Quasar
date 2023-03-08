// get dropdown button and dropdown content
var dropdownBtn = document.getElementsByClassName("dropbtn")[0];
var dropdownContent = document.getElementsByClassName("dropdown-content")[0];

// add click event listener to dropdown button
dropdownBtn.addEventListener("click", function() {
  // toggle show class on dropdown content
  dropdownContent.classList.toggle("show");
});
