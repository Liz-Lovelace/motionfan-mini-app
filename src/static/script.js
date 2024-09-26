window.Telegram.WebApp.setHeaderColor('#ffffff');
window.Telegram.WebApp.setBackgroundColor('#ffffff');
window.Telegram.WebApp.setBottomBarColor('#ffffff');
window.Telegram.WebApp.expand();

async function getUserData() {
  const response = await fetch('/api/getUserData');
  const data = await response.json();
  updateUI(data);
}

function updateUI(data) {
  document.getElementById('username').textContent = `@${data.username}`;
  document.getElementById('balance').textContent = data.money;
  document.getElementById('steps').textContent = data.steps;
  document.getElementById('distance').textContent = data.distance;
  document.getElementById('challengeProgress').textContent = data.challenge_progress;
  document.getElementById('challengeTotal').textContent = `из ${data.challenge_total}`;

  const characterImage = document.getElementById('characterImage');
  characterImage.src = data.avatarGender === 'female' ? 'assets/Woman.png' : 'assets/Man.png';
}

document.addEventListener('DOMContentLoaded', getUserData);

// this is used to fix an obscure bug on iOS where the page is always scrollable
function scrollToTop() {
  window.scrollTo(0, 0);
}

setInterval(scrollToTop, 30);
