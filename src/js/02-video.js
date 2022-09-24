import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALE_STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlayerTimeUpdate, 1000));

function onPlayerTimeUpdate({ seconds }) {
  const valueOfPlayer = { seconds };

  const localStorageValue = JSON.stringify(valueOfPlayer);
  localStorage.setItem(LOCALE_STORAGE_KEY, localStorageValue);
}

saveTimePlayer();

function saveTimePlayer() {
  const saveData = localStorage.getItem(LOCALE_STORAGE_KEY);
  if (saveData) {
    const parceData = JSON.parse(saveData).seconds;
    player.setCurrentTime(parceData);
  }
}
