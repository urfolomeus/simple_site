function startClock() {
  setDate();
  setTime();
  setInterval(setTime, 1000);
}

function setDate() {
  const now = luxon.DateTime.now();
  const dateString = now.toLocaleString(luxon.DateTime.DATE_FULL);
  document.querySelector(".date").innerHTML = dateString;
}

function setTime() {
  const now = luxon.DateTime.now();
  const timeString = now.toLocaleString(luxon.DateTime.TIME_24_WITH_SECONDS);
  document.querySelector(".time").innerHTML = timeString;
}
