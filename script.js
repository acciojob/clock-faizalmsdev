function updateDateTime() {
  var currentDate = new Date();

  var year = currentDate.getFullYear();
  var month = formatDateTimeComponent(currentDate.getMonth() + 1);
  var day = formatDateTimeComponent(currentDate.getDate());

  var hours = formatDateTimeComponent(currentDate.getHours());
  var minutes = formatDateTimeComponent(currentDate.getMinutes());
  var seconds = formatDateTimeComponent(currentDate.getSeconds());

  var dateTimeString = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;

  document.getElementById("datetime").textContent = dateTimeString;
}

function formatDateTimeComponent(component) {
  return component.toString().padStart(2, "0");
}

// Call updateDateTime() initially to display the current date and time
updateDateTime();

// Update the date and time every second
setInterval(updateDateTime, 1000);
