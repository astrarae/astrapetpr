import { createOverlay } from './overlay.js';
import '/src/LEGACY_CODE/styles/music_player.css';

const themeAudios = [
  "https://pub-62223adbf3d544899589d9e959908c52.r2.dev/Kill_La_Kill_OST.mp3",
  "https://pub-62223adbf3d544899589d9e959908c52.r2.dev/attack_on_titan_ost.mp3",
  "https://pub-62223adbf3d544899589d9e959908c52.r2.dev/eva_ost.mp3",
  "https://pub-62223adbf3d544899589d9e959908c52.r2.dev/rascal_bunny.mp3",
  "https://pub-62223adbf3d544899589d9e959908c52.r2.dev/nano-ripe-tv-size.mp3"
];

function createThematicCard(id, audioUrl) {
  const card = document.createElement('div');
  card.className = 'thematic_card w-[50px] h-[450px] bg-white rounded-lg ml-6';
  card.id = id;

  const audio = new Audio(audioUrl);
  const overlay = document.createElement('div');
  overlay.className = 'thematic-overlay h-full bg-black opacity-50 flex flex-col justify-center items-center font-bold';
  overlay.textContent = 'Click to stop playing';
  let playing = false;

  card.addEventListener('mouseenter', () => {
    if (!playing) {
      audio.volume = 0.4;
      audio.play().catch(e => console.log(e));
      card.appendChild(overlay);
      playing = true;
    }
  });

  card.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
    overlay.remove();
    playing = false;
  });

  return card;
}

export function showThemesCard() {
  const themesCard = document.createElement('div');
  themesCard.className = 'themes_card w-[auto] h-[380px]';

  const topPanel = document.createElement('div');
  topPanel.className = 'theme-top-panel flex flex-row justify-end items-center w-full h-[60px] opacity-80';

  const exitButton = document.createElement('button');
  exitButton.className = 'exit_btn rounded-[5px] h-[30px] w-[40px] flex items-center justify-center';
  exitButton.textContent = 'Back';

  topPanel.appendChild(exitButton);
  themesCard.appendChild(topPanel);

  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper rounded-bl-[20px] rounded-br-[20px] w-full h-full flex flex-row justify-start items-center';

  themeAudios.forEach((url, index) => {
    wrapper.appendChild(createThematicCard(`thematic-card-${index + 1}`, url));
  });

  themesCard.appendChild(wrapper);

  const overlay = createOverlay(themesCard);

  exitButton.addEventListener('click', () => {
    overlay.remove();
    themesCard.remove();
  });
}

export function initThemeToggle() {
  const btn = document.querySelector('#theme-btn');
  if (btn) {
    btn.addEventListener('click', showThemesCard);
  }
}
