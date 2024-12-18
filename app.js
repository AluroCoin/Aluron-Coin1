const $circle = document.querySelector('#circle');
const $score = document.querySelector('#score');

function start () {
  setScore(getScore());
  setImage();

  
}

function setScore (score) {
  localStorage.setItem('score', score);
  $score.textContent = score;
}

function setImage () {
  if (getScore() > 500 ){
    $circle.setAttribute('src', './assets/aluron.PNG')
  }
  
}

function getScore () {
  return Number (localStorage.getItem('score') ?? 0);


}

function add0ne () {
  setScore(getScore() + 1345);
  setImage();
  
}




$circle.addEventListener('click', (event) => {
  const rect = $circle.getBoundingClientRect();
  const offfsetX = event.clientX - rect.left - rect.width / 2;
  const offfsetY = event.clientY - rect.top - rect.height / 2;

  const DEG = 59

  const tiltX = (offfsetY / rect.height) * DEG;
  const tiltY = (offfsetX / rect.width) * -DEG;

  $circle.style.setProperty('--tiltX', `${tiltX}deg`);
  $circle.style.setProperty('--tiltY', `${tiltY}deg`);

  setTimeout(() => {
    $circle.style.setProperty('--tiltX', `0deg`);
    $circle.style.setProperty('--tiltY', `0deg`);
  }, 300)


  const plus0ne = document.createElement('div');
  plus0ne.classList.add('plus-one');
  plus0ne.textContent = '+1';
  plus0ne.style.left = `${event.clientX - rect.left}px`;
  plus0ne.style.top = `${event.clientY - rect.top}px`;


  $circle.parentElement.appendChild(plus0ne);

  add0ne();

  setTimeout(() => {
    plus0ne.remove();
    
  }, 2000)

  
})

start();
