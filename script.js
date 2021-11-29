var time = document.querySelector(".timing");
var display = document.querySelector(".display");
var timeplay = document.querySelector(".red");
var pause = document.querySelector(".pause");
var restart = document.querySelector(".restart");

setInterval(() => {
  let date = new Date();
  let hours = date.getHours();
  let minuts = date.getMinutes();
  let seconds = date.getSeconds();
  if (hours >= 13) {
    hours = hours - 12;
    time.textContent = hours + ":" + minuts + ":" + seconds + ":" + "PM";
  } else {
    time.textContent = hours + ":" + minuts + ":" + seconds + ":" + "AM";
  }
}, 1000);

let hour = 0;
let minut = 0;
let second = 0;
let start;
timeplay.addEventListener("click", () => {
  start = setInterval(() => {
    display.textContent = hour + ":" + minut + ":" + second;
    second++;
    if (second >= 60) {
      minut++;
      second = 0;
      if (minut >= 60) {
        minut = 0;
        hour++;
      }
    }
  }, 1000);
});
pause.addEventListener("click", () => {
  clearInterval(start);
  // console.log("pause");
});

restart.addEventListener("click", () => {
  hour = 0;
  minut = 0;
  second = 0;
});
