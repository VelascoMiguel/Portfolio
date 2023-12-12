// Animaciones ANIMATE.CSS

function animateElementOnScroll(elementId, clase1, clase2) {
  const element = document.getElementById(elementId);
  if (!element) {
    return; // No se encontró el elemento, salimos de la función
  }

  const elementPosition = element.getBoundingClientRect();

  // Verifica si el elemento está en el viewport
  if (elementPosition.top < window.innerHeight + 100) {
    // Agrega la clase de animación para activarla
    element.classList.add(clase1, clase2);
  }
}

// Ejemplo de uso para la sección 'about-me'
window.addEventListener("scroll", function () {
  animateElementOnScroll(
    "about-me",
    "animate__animated",
    "animate__fadeInLeft"
  );
});

// Ejemplo de uso para otro elemento con ID 'other-element'
window.addEventListener("scroll", function () {
  animateElementOnScroll(
    "experience",
    "animate__animated",
    "animate__fadeInRight"
  );
});

// Ejemplo de uso para otro elemento con ID 'other-element'
window.addEventListener("scroll", function () {
  animateElementOnScroll(
    "princi-projects",
    "animate__animated",
    "animate__fadeInBottomLeft"
  );
});

// Ejemplo de uso para otro elemento con ID 'other-element'
window.addEventListener("scroll", function () {
  animateElementOnScroll(
    "projects",
    "animate__animated",
    "animate__fadeInBottomLeft"
  );
});

// Ejemplo de uso para otro elemento con ID 'other-element'
window.addEventListener("scroll", function () {
  animateElementOnScroll(
    "containerResume",
    "animate__animated",
    "animate__fadeInUp"
  );
});

// Ejemplo de uso para otro elemento con ID 'other-element'
window.addEventListener("scroll", function () {
  animateElementOnScroll("contact", "animate__animated", "animate__fadeInDown");
});

// CURSOR SHADOW
document.addEventListener("DOMContentLoaded", function () {
  const cursorShadow = document.querySelector(".cursor-shadow");

  document.addEventListener("mousemove", function (e) {
    cursorShadow.style.display = "block";
    cursorShadow.style.left = e.pageX - 15 + "px";
    cursorShadow.style.top = e.pageY - 15 + "px";
  });

  document.addEventListener("mouseout", function () {
    cursorShadow.style.display = "none";
  });
});

// // NOMBRE EN MOVIMIENTO
// document.addEventListener("DOMContentLoaded", function () {
//   const nameElement = document.getElementById("nameElement");
//   let position = 0;
//   let direction = 1;

//   function moveName() {
//     position += 0.1 * direction;
//     if (position > 100) {
//       direction = -1;
//     } else if (position < -100) {
//       direction = 1;
//     }
//     nameElement.style.transform = `translateX(${position}%)`;
//     requestAnimationFrame(moveName);
//   }

//   moveName();
// });

// CAMBIO DE COLOR DEL LOGO
document.addEventListener("DOMContentLoaded", function () {
  const logoElements = document.querySelectorAll(".logo");
  let isViolet = false;

  function toggleColorsAndShadow() {
    logoElements.forEach((logoElement) => {
      if (isViolet) {
        logoElement.style.backgroundColor = "#e2e2e2";
        logoElement.style.boxShadow = "none";
      } else {
        logoElement.style.backgroundColor = "#141414";
        logoElement.style.boxShadow =
          "linear-gradient(50.69deg,#a442f1 -2.44%,#cf07cf 101.96%)";
      }
    });

    isViolet = !isViolet;
  }

  setInterval(toggleColorsAndShadow, 1000); // Cambia los colores y la sombra cada segundo (1000 milisegundos)
});


// PROBANDO
let lastScrollTop = 0;

window.addEventListener('scroll', function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scroll hacia abajo
    document.querySelector('.scrolling-text-container').style.animationName = 'scrollLeft';
  } else {
    // Scroll hacia arriba
    document.querySelector('.scrolling-text-container').style.animationName = 'scrollRight';
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para considerar el scroll en la parte superior de la página
}, false);
