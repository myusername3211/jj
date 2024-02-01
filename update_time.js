
window.onload = function() {
  // Function to update the time
  function updateTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    
    // Pad minutes and seconds with leading zeros
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Combine the strings
    var timeString = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    
    // Update the time display
    document.getElementById('real-time-clock').innerHTML = timeString;
  }
  
  // Update the time every second
  setInterval(updateTime, 1000);
  
  // Initialize the time display
  updateTime();
};
