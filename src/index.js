import "./styles.css";

const navButtons = document.querySelectorAll('nav button[data-screen]');
const screens = document.querySelectorAll('.screen');

function showScreen(screenName) {
  screens.forEach(screen => {
    screen.classList.toggle('active', screen.id === `${screenName}-screen`);
  });

  navButtons.forEach(button => {
    button.classList.toggle('active', button.dataset.screen === screenName);
  });
}

navButtons.forEach(button => {
  button.addEventListener('click', () => {
    showScreen(button.dataset.screen);
  });
});

showScreen('home');