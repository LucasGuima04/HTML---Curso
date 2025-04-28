var Num1 = document.getElementById('txtNum1')
var counter = document.getElementById('Counter')


function UseButton() {
  let CountNum = Number(Num1.value)
  const startingMinutes = CountNum
  let time = startingMinutes * 60;

  setInterval(updateCountdown, 1000);
  function updateCountdown () {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    counter.innerHTML = `${minutes} : ${seconds}` ;
    time--;
  }
}

