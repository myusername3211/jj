
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

  function updateExpiration() {
    const now = new Date();
    now.setHours(now.getHours() + 2);
    now.setMinutes(now.getMinutes() + 30);

    // Define the months array to get the month in "Sep" format
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    // Get month, day, year
    const month = months[now.getMonth()];
    const day = now.getDate();
    const year = now.getFullYear();

    // Get hours and minutes
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert 24-hour format to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // If hour is 0, display as 12
    minutes = minutes < 10 ? '0' + minutes : minutes; // Add leading zero if necessary

    // Combine all to create the formatted string
    const formattedDate = `Expires ${month} ${day}, ${year} at ${hours}:${minutes} ${ampm}`;

    document.getElementById("expires").textContent = `Expires ${month} ${day}, ${year} at ${hours}:${minutes} ${ampm}`;
  }
  
  // Update the time every second
  setInterval(updateTime, 1000);
  
  // Initialize the time display
  updateTime();
  updateExpiration();
};
