function digitalClock() {
  let now = new Date();
  let minute = now.getMinutes();
  let hour = now.getHours();
  let second = now.getSeconds();

  // check pm or am
  let amOrPm = hour < 12 ? "AM" : "PM";

  if (hour > 12) {
    hour = hour - 12;
  }
  hour = ("0" + hour).substr(-2);
  minute = ("0" + minute).substr(-2);
  second = ("0" + second).substr(-2);

  // Display time

  document.querySelector(
    "#digital-clock"
  ).innerHTML = `${hour} : ${minute} : ${second} ${amOrPm}`;

  var t = setTimeout(digitalClock, 500);
}

document.querySelector(".btn-1")
  .addEventListener('click', event => {
    console.log('we are here')
    event.target.innerHTML = "hello"
  })