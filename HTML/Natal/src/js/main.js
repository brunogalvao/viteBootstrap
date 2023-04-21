import '../scss/estilo.scss'

import { gsap } from "gsap"
import { Timeline } from 'gsap/gsap-core';
import { Tween } from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/src/all';
 
gsap.registerPlugin(ScrollTrigger, Timeline, Tween);

const pinnedImageWrappers = document.querySelectorAll('.js-wrap');

// funcao Array wrapper
if (pinnedImageWrappers) {
  pinnedImageWrappers.forEach((wrapper) => {
    const inner = wrapper.querySelector('.js-inner');

    const botanico = document.querySelector('.botanico');
    const tangua = document.querySelector('.tangua');
    const logo = document.querySelector('.logo');
    const floor = document.querySelector('.floor');
    const araucaria = document.querySelector('.araucaria');
    const arbustos = document.querySelector('.arbustos');
    const cloud = document.querySelector('.cloud');
    const cloudAnimation = document.querySelector('.cloud-animation');
    const scene2 = document.querySelector('.scene2');
    const arvoreNatal = document.querySelector('.arvoreNatal');
    const scene3 = document.querySelector('.scene3');
    const passeio = document.querySelector('.passeio');
    const parqueNautico = document.querySelector('.parqueNautico');
    const reiMago = document.querySelector('.reiMago');
    const palacioAvenida = document.querySelector('.palacioAvenida');
    const anjinho = document.querySelector('.anjinho');
    const federal = document.querySelector('.federal');
    const rodaGigante = document.querySelector('.rodaGigante');
    const cavalinho = document.querySelector('.cavalinho');
    const carrosselPasseio = document.querySelector('.carrosselPasseio');
    const memorialParanista = document.querySelector('.memorialParanista');
    const escola = document.querySelector('.escola');
    const musica = document.querySelector('.musica');
    const arvoreMusica = document.querySelector('.arvoreMusica');
    const gastronomia = document.querySelector('.gastronomia');
    const roteiro = document.querySelector('.roteiro');
    const scene15 = document.querySelector('.scene15');


    let sections = gsap.utils.toArray(".scene"),
      // sections = gsap.utils.toArray(".scene"),
      // sectionIncrement = duration / (sections.length - 1),
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          // start: "top top",
          // end: () => `+=${inner.offsetWidth}`,
          end: '+=1600%'
      }
    });

    tl.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
    });
    

    // gsap.to(".scene", {
    //   // x: () => -(inner.scrollWidth - document.documentElement.clientWidth) + 'px',            
    //   ease: 'none',
    //   scrollTrigger: {
    //       start: 'top',
    //       trigger: wrapper,
    //       pin: true,
    //       scrub: true,
    //       markers: true,
    //       invalidateOnRefresh: true,
    //       end: '+=12000%'
    //       // end: () => `+=${inner.offsetWidth}`            
    //   }
    // });


    gsap.to(araucaria, {
      x: -380,
      position: 'fixed',
      ease: 'none',
      scrollTrigger: {
        start: 'top top',
        // trigger: wrapper,
        pin: '.allContent',
        scrub: true,
        // markers: true,
        invalidateOnRefresh: true,
        end: () => `+=${inner.offsetWidth}`
      }
    })


    gsap.to(arbustos, {
      x: -200,
      position: 'fixed',
      ease: 'none',
      scrollTrigger: {
        start: 'top top',
        // trigger: wrapper,
        pin: '.allContent',
        scrub: true,
        // markers: true,
        invalidateOnRefresh: true,
        end: () => `+=${inner.offsetWidth}`
      }
    })

    gsap.to(botanico, {
      position: 'absolute',
      start: 'bottom'
    });

    gsap.to(tangua, {
      position: 'absolute',
      start: 'bottom'
    });

    gsap.to(logo, {
      position: 'absolute',
      start: 'bottom'
    });

    gsap.to(floor, {
      position: 'fixed',
      start: 'bottom',
      end: 'bottom'
    });

    gsap.to(cloud, {
      position: 'fixed',
      start: 'top',
    });

    gsap.to(cloudAnimation, {
      position: 'fixed',
      start: 'top',
    });

    gsap.to(scene2, {
      position: 'absolute',
      start: 'top',
    });

    gsap.to(arvoreNatal, {
      position: 'absolute',
      start: 'top',
    });

    gsap.to(scene3, {
      position: 'absolute',
      start: 'top',
    });

    gsap.to(passeio, {
      position: 'absolute',
      start: 'top',
    });

    gsap.to(parqueNautico, {
      position: 'absolute',
      start: 'top',
    });

    gsap.to(reiMago, {
      position: 'absolute',
      start: 'top',
    });

    gsap.to(palacioAvenida, {
      position: 'absolute',
      start: 'top',
    });

    gsap.to(anjinho, {
      position: 'absolute',
      start: 'top',
    });

    gsap.to(federal, {
      position: 'absolute',
      start: 'top',
    });

    gsap.to(rodaGigante, {
      position: 'absolute',
      start: 'top',
    });

    gsap.to(cavalinho, {
      position: 'absolute',
      start: 'top',
    });

    gsap.to(carrosselPasseio, {
      position: 'absolute',
      start: 'top',
    });

    gsap.to(memorialParanista, {
      position: 'absolute',
      start: 'top',
    });

    gsap.to(escola, {
      position: 'absolute',
      start: 'top',
    });

    gsap.to(musica, {
      position: 'absolute',
      start: 'top',
    });

    gsap.to(arvoreMusica, {
      position: 'absolute',
      start: 'top',
    });

    gsap.to(gastronomia, {
      position: 'absolute',
      start: 'top',
    });

    gsap.to(roteiro, {
      position: 'absolute',
      start: 'top',
    });

    gsap.to(scene15, {
      position: 'absolute',
      start: 'top',
    });

  });
}