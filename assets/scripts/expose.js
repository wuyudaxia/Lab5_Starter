// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const expose = document.getElementById('expose');
  const hornSelect = document.getElementById('horn-select');
  const hornImage = expose.querySelector(':scope > img');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playBtn = expose.querySelector('button');
  const audio = expose.querySelector('audio');

  const jsConfetti = new window.JSConfetti();

  const horns = {
    'air-horn': {
      img: 'assets/images/air-horn.svg',
      sound: 'assets/audio/air-horn.mp3',
    },
    'car-horn': {
      img: 'assets/images/car-horn.svg',
      sound: 'assets/audio/car-horn.mp3',
    },
    'party-horn': {
      img: 'assets/images/party-horn.svg',
      sound: 'assets/audio/party-horn.mp3',
    },
  };

  function applyVolume(sliderVal) {
    const n = Number(sliderVal);
    audio.volume = n / 100;

    let level;
    if (n === 0) level = 0;
    else if (n < 33) level = 1;
    else if (n < 67) level = 2;
    else level = 3;

    volumeIcon.src = `assets/icons/volume-level-${level}.svg`;
    volumeIcon.alt = `Volume level ${level}`;
  }

  hornSelect.addEventListener('change', () => {
    const key = hornSelect.value;
    const horn = horns[key];
    if (!horn) return;
    hornImage.src = horn.img;
    audio.src = horn.sound;
  });

  volumeSlider.addEventListener('input', () => applyVolume(volumeSlider.value));

  playBtn.addEventListener('click', () => {
    const key = hornSelect.value;
    if (!horns[key]) return;

    if (key === 'party-horn') {
      jsConfetti.addConfetti();
    }

    audio.currentTime = 0;
    audio.play().catch(() => {});
  });

  applyVolume(volumeSlider.value);
}
