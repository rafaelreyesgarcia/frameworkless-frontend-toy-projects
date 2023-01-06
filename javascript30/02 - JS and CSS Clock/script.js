const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate() {
  console.log('hi');

  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  console.log(`seconds: ${seconds}`);
  console.log(`secondsDegrees: ${secondsDegrees}`);

  if (secondsDegrees === 90) {
    secondHand.style.transition = 'none';
  } else {
    secondHand.style.transition = '';
  }


  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  console.log(`minutes: ${mins}`);

  const hour = now.getHours();
  const hourDegrees = ((hour / 60) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  console.log(`hour: ${hour}`);
}

setInterval(setDate, 1000);