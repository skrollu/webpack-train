import { gsap } from 'gsap';

console.log("coucou")
gsap.to('#gsap', {rotation: 27, x: 300, duration: 1});

import Swup from 'swup'
import SwupFadeTheme from '@swup/fade-theme';
import SwupHeadPlugin from '@swup/head-plugin';

const swup = new Swup({
    linkSelector:
    'a[href^="' +
    window.location.origin +
    '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',
    plugins: [
        new SwupFadeTheme(),
        new SwupHeadPlugin()
        ]
});
