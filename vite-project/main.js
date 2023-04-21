import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="/vite.svg" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))


gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

/* Main navigation */
let panelsSection = document.querySelector("#panels"),
	panelsContainer = document.querySelector("#panels-container"),
	tween;
document.querySelectorAll(".anchor").forEach(anchor => {
	anchor.addEventListener("click", function(e) {
		e.preventDefault();
		let targetElem = document.querySelector(e.target.getAttribute("href")),
			y = targetElem;
		if (targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
			let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start,
				totalMovement = (panels.length - 1) * targetElem.offsetWidth;
			y = Math.round(tween.scrollTrigger.start + (targetElem.offsetLeft / totalMovement) * totalScroll);
		}
		gsap.to(window, {
			scrollTo: {
				y: y,
				autoKill: false
			},
			duration: 1
		});

    gsap.to('.araucaria', {
      x: -1380,
      // position: 'fixed',
      ease: 'none',
      scrollTrigger: {
        start: 'top top',
        trigger: wrapper,
        pin: '.allContent',
        scrub: true,
        markers: true,
        invalidateOnRefresh: true,
        end: () => `+=${inner.offsetWidth}`
      }
    })
    
	});
});




/* Panels */
const panels = gsap.utils.toArray("#panels-container .panel");
tween = gsap.to(panels, {
	xPercent: -100 * ( panels.length - 1 ),
	ease: "none",
	scrollTrigger: {
		trigger: "#panels-container",
		pin: true,
		start: "top top",
		scrub: 1,
		snap: {
			snapTo: 1 / (panels.length - 1),
			inertia: false,
			duration: {min: 0.1, max: 0.1}
		},
		end: () =>  "+=" + (panelsContainer.offsetWidth - innerWidth)
	}
});