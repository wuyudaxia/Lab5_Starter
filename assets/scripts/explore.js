// explore.js

window.addEventListener('DOMContentLoaded', init);

const FACE_CLOSED = 'assets/images/smiling.png';
const FACE_OPEN = 'assets/images/smiling-open.png';

function voiceKey(voice) {
  return voice.voiceURI || `${voice.name}|${voice.lang}`;
}

function init() {
  const explore = document.getElementById('explore');
  const faceImg = explore.querySelector(':scope > img');
  const textarea = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const talkBtn = explore.querySelector('button');

  function populateVoiceList() {
    const synthVoices = speechSynthesis.getVoices();
    const prev = voiceSelect.value;

    voiceSelect.innerHTML = '';

    const placeholder = document.createElement('option');
    placeholder.value = 'select';
    placeholder.textContent = 'Select Voice:';
    placeholder.disabled = true;
    voiceSelect.appendChild(placeholder);

    synthVoices.forEach((voice) => {
      const opt = document.createElement('option');
      opt.value = voiceKey(voice);
      opt.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(opt);
    });

    if (prev && prev !== 'select') {
      const match = [...voiceSelect.options].some((o) => o.value === prev);
      if (match) {
        voiceSelect.value = prev;
      } else {
        placeholder.selected = true;
      }
    } else {
      placeholder.selected = true;
    }
  }

  populateVoiceList();
  speechSynthesis.addEventListener('voiceschanged', populateVoiceList);

  talkBtn.addEventListener('click', () => {
    const text = textarea.value;
    if (!text.trim() || voiceSelect.value === 'select') return;

    speechSynthesis.cancel();

    const voice = speechSynthesis
      .getVoices()
      .find((v) => voiceKey(v) === voiceSelect.value);

    const utterance = new SpeechSynthesisUtterance(text);
    if (voice) {
      utterance.voice = voice;
    }

    utterance.onstart = () => {
      faceImg.src = FACE_OPEN;
    };
    utterance.onend = () => {
      faceImg.src = FACE_CLOSED;
    };
    utterance.onerror = () => {
      faceImg.src = FACE_CLOSED;
    };

    speechSynthesis.speak(utterance);
  });
}
