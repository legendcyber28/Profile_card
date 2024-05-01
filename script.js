// Get the subscribe button element
var subscribeBtn = document.getElementById("subscribeBtn");

// Get the popup element
var popup = document.getElementById("popup");

// Get the Instagram option element
var instaOption = document.getElementById("instaOption");

// Get the LinkedIn option element
var linkdinOption = document.getElementById("linkdinOption");

// Add a click event listener to the subscribe button
subscribeBtn.addEventListener("click", function() {
  // Show the popup
  popup.style.display = "block";
});

// Add a click event listener to the Instagram option
instaOption.addEventListener("click", function() {
  // Redirect to Instagram
  window.location.href = "https://www.instagram.com/techfitprashant/";
});

// Add a click event listener to the LinkedIn option
linkdinOption.addEventListener("click", function() {
  // Redirect to LinkedIn
  window.location.href = "https://www.linkedin.com/in/prashant-katheriya/";
});
