// Get elements
const needle = document.getElementById("needle");
const speedNumber = document.getElementById("speed-number");
const testButton = document.getElementById("test-button");

// Add click event listener to test button
testButton.addEventListener("click", function() {
  // Show loading message
  speedNumber.textContent = "Testing...";
  
  // Make HTTP request to speed test API
  fetch("https://api.fast.com/netflix/speedtest?https=true")
    .then(response => response.json())
    .then(data => {
      // Get download speed in Mbps
      const speedMbps = data.download / 1000000;
      // Update speed number
      speedNumber.textContent = speedMbps.toFixed(2) + " Mbps";
      // Calculate rotation angle for needle
      const rotation = (speedMbps / 10) * 180 - 90;
      // Set needle rotation
      needle.style.transform = `rotate(${rotation}deg)`;
    })
    .catch(error => {
      // Show error message
      speedNumber.textContent = "Error: " + error.message;
    });
});
