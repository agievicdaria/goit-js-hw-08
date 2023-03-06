import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_KEY = "videoplayer-current-time";

player.on('timeupdate', throttle(e => {
    localStorage.setItem(STORAGE_KEY, e.seconds);
}, 500) )

player.setCurrentTime(localStorage.getItem(STORAGE_KEY)).then(function(seconds) {
}).catch(function(error) {
    if(localStorage.getItem(STORAGE_KEY) < 0) {
        console.log(error);
    }
});
