


function showTime() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  let time = h + ":" + m + ":" + s;
  document.querySelector(".digitalClock").innerText = time;
  document.querySelector(".digitalClock").textContent = time;
}
setInterval(showTime, 1000);
