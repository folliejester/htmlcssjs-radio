const songs = ['song (1).mp3',
  'song (2).mp3',
  'song (3).mp3',
  'song (4).mp3',
  'song (5).mp3',
  'song (6).mp3',
  'song (7).mp3',
  'song (8).mp3',
  'song (9).mp3',
  'song (10).mp3',
  'song (11).mp3']; // MP3 files in folder
  let currentSong;
  
  function randomSong() {
    let nextSong;
    do {
      nextSong = songs[Math.floor(Math.random() * songs.length)];
    } while (nextSong === currentSong);
    currentSong = nextSong;
    document.querySelector('#audio').src = nextSong;
    document.querySelector('#audio').play(); 
  }
  
  randomSong();
  
  document.querySelector('#audio').addEventListener('ended', randomSong);
