gsap.from('.title-1', {
    scrollTrigger: '.title-1',
    duration: 3,
    ease: "power3.out",
    x: -860,
    delay: 1,
});

// Scroll to contact section
document.getElementById("section-contact-btn").addEventListener("click", () => {
    gsap.to(window, {
        duration: 1,
        scrollTo: { y: "#section-contact" }
    });
});


const links = document.querySelectorAll("nav a");

    links.forEach(link => {
      // Guardamos el texto original en data-text
      link.dataset.original = link.textContent;

      link.addEventListener("mouseenter", () => {
        gsap.to(link, {
          duration: 1,
          scrambleText: {
            text: link.dataset.original, // volverá al mismo texto
            chars: "lowerCase",
            speed: 5,
            // revealDelay: 0.1
          }
        });
      });

      link.addEventListener("mouseleave", () => {
        gsap.to(link, {
          duration: 1,
          scrambleText: {
            text: link.dataset.original, // otra vez al mismo texto
            chars: "lowerCase",
            speed: 5,
            rightToLeft: true
            // revealDelay: 0.1
          }
        });
      });
    });

// const sT = gsap.utils.toArray('.scramble');
// sT.forEach(item => {
//     let tween = gsap.to(item, {
//         duration: 1,
//         scrambleText: {
//             text: ".scrambled-text",
//             chars: "<&!§8("
//         },
//         paused: true
//     });

//     item.addEventListener('mouseenter', () => {
//         tween.play();
//     });

//     item.addEventListener("mouseleave", () => {
//         tween.reverse();
//     });
// });