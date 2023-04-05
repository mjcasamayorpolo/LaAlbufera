import Splide from '@splidejs/splide';
import lazyframe from "lazyframe";

new Splide( '#image-carousel' ).mount();

const videoContainer = document.getElementById('videoContainer');
const lazyVideo = document.createElement('div');
lazyVideo.classList.add('lazyframe');
lazyVideo.setAttribute('data-vendor','youtube');
lazyVideo.setAttribute('data-src', "https://www.youtube.com/embed/8mzRhBg2kBc");
lazyVideo.setAttribute('data-autoplay', false);
lazyframe(lazyVideo,{
    lazyload: true,
    autoplay: false
});
videoContainer.appendChild(lazyVideo);