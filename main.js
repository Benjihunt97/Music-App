import musicData from './musicData.js';

const musicCard = (index, img, title, artist) => {
  return `
    <div class="music-list-item flex items-center gap-4" data-index="${index}">
      <img class="size-12 rounded-md object-cover bg-gray-100" src="${img}" alt="${title} by ${artist}">
      <div>
        <h3 class="text-sm font-semibold">${title}</h3>
        <p class="truncate max-w-[26ch] text-xs text-white/50">${artist}</p>
      </div>
              
      <button class="share-btn ml-auto">
        <i class="material-symbols-outlined text-white/50 text-lg">share</i>
      </button>
      <button class="song-edit">
        <i class="material-symbols-outlined text-white/50 text-lg">more_vert</i>
      </button>
    </div>
  `;
}

const musicList = document.getElementById('music-list');

const generateMusicCards = () => {
  let musicHTML = '';
  musicData.forEach((song, index) => {
    musicHTML += musicCard(index, song.img, song.title, song.artist);
  });
  musicList.innerHTML = musicHTML;

  // Event delegation for dynamically added elements
  musicList.addEventListener('click', (event) => {
    const track = event.target.closest('.music-list-item');
    if (track) {
      playMusic(track);
    }
  });
}

generateMusicCards();

const search = document.getElementById('search');

// Debounce function to limit the rate of function calls
const debounce = (func, delay) => {
  let debounceTimer;
  return function(...args) {
    const context = this;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  }
};

const filterTracks = () => {
  const searchValue = search.value.toLowerCase();
  
  Array.from(musicList.children).forEach(track => {
    const trackName = track.querySelector('h3').textContent.toLowerCase();
    const trackArtist = track.querySelector('p').textContent.toLowerCase();
    
    if (trackName.includes(searchValue) || trackArtist.includes(searchValue)) {
      track.style.display = 'flex';
    } else {
      track.style.display = 'none';
    }
  });
}

// Apply debounce to the search input event
search.addEventListener('input', debounce(filterTracks, 300));

const main = document.querySelector('main');
const musicPlayer = document.getElementById('music-player');
const musicPlayerContent = document.getElementById('player-content');
const backToTrackList = document.getElementById('back-to-track-list');

let currentAudio = null;
let updateTimer;

const musicPlayerDisplay = (img, title, artist, runTime) => {
  return `
    <div class="flex flex-col items-center justify-center">
      <img class="size-64 rounded-lg mb-5" src="${img}" alt="">
      <h3 class="font-bold text-2xl mb-1">${title}</h3>
      <p class="text-sm text-white/70 mb-4">${artist}</p>
    </div>
    
    <!-- track progress-->
    <div class="flex flex-wrap justify-between gap-y-2 w-full px-2 text-sm mt-36">
      <div class="relative w-full h-2 rounded-full bg-white/25 overflow-hidden shadow-inner shadow-neutral-800">
        <div id="progress-bar" class="absolute top-0 left-0 h-full rounded-full bg-gradient-to-br from-rose-700 to-rose-400 w-0"></div>
      </div>
      <p id="current-time">0:00</p>
      <p id="total-time">${runTime}</p>
    </div>
  `;
}

const playMusic = (track) => {
  if (currentAudio) {
    currentAudio.pause();
    clearInterval(updateTimer);
  }

  musicPlayerContent.innerHTML = '';

  const index = track.getAttribute('data-index');  // Get the index of the clicked item
  const currentSong = musicData[index];            // Fetch the song data using the index

  const currentImg = currentSong.img;
  const currentTitle = currentSong.title;
  const currentArtist = currentSong.artist;
  let runTime = currentSong.runTime || '0:00';  // Use default value if runTime is missing or invalid

  musicPlayerContent.innerHTML = musicPlayerDisplay(currentImg, currentTitle, currentArtist, runTime);

  // Simulate audio playing with a timer
  const totalSeconds = convertTimeToSeconds(runTime);
  let currentTime = 0;

  // Start "playing" the song by updating the time and progress bar
  updateTimer = setInterval(() => {
    currentTime += 1;

    // Update time display
    document.getElementById('current-time').textContent = formatTime(currentTime);

    // Update progress bar width
    const progressPercent = (currentTime / totalSeconds) * 100;
    document.getElementById('progress-bar').style.width = `${progressPercent}%`;

    // Stop the timer if the song ends
    if (currentTime >= totalSeconds) {
      clearInterval(updateTimer);
    }
  }, 1000);

  // Scroll to show the music player
  main.scrollLeft = main.clientWidth;
}

const convertTimeToSeconds = (time) => {
  if (!time || typeof time !== 'string' || !time.includes(':')) {
    return 0;
  }

  const [minutes, seconds] = time.split(':').map(Number);
  return (minutes * 60) + seconds;
}

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Handle back button and other dynamic functionality
backToTrackList.addEventListener('click', () => {
  if (currentAudio) {
    currentAudio.pause();
  }
  clearInterval(updateTimer);  // Stop the timer when going back to the main menu
  resetTime();  // Reset the time display and progress bar
  main.scrollLeft = 0;
});

// Function to reset the time display and progress bar
const resetTime = () => {
  const currentTimeDisplay = document.getElementById('current-time');
  const progressBar = document.getElementById('progress-bar');

  if (currentTimeDisplay) currentTimeDisplay.textContent = '0:00';
  if (progressBar) progressBar.style.width = '0%';
}
