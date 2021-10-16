// const fetch = require('node-fetch');
import fetch from 'node-fetch';

const controller = 'Living Room';
const server = 'http://localhost:5005';
const spotifyPlaylist = '1xa9pTxg86HAK2YITlv5Oj?si=9027da9f5c744b5c';

const start = async () => {
  try {
    const promises = [];
    // Assign the preset
    promises.push(fetch(`${server}/preset/all`));
    // Start the playlist
    promises.push(fetch(`${server}/${controller}/spotify/now/spotify:user:spotify:playlist:${spotifyPlaylist}`));

    // Call the apis
    await Promise.all(promises).then(() => {
      console.log('APIs done.');
    })
  } catch (err) {
    console.log(err);
  }
}

start();