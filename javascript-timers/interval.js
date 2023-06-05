const countdownElement = document.querySelector('.countdown-display');
let countdownValue = 4;

const interval = setInterval(function () {
  countdownValue--;
  countdownElement.textContent = countdownValue.toString();

  if (countdownValue === 0) {
    countdownElement.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(interval);
  }
}, 1000);
