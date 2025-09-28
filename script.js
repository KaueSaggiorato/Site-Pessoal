particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 130,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#7c3bb1"
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.5
    },
    "size": {
      "value": 3
    },
    "line_linked": {
      "enable": true,
      "distance": 120,
      "color": "#7c3bb1",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out"
    }
  },
  "interactivity": {
    "detect_on": "window", 
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false
      },
      "resize": true
    },
    "modes": {
      "repulse": {
        "distance": 100, 
        "duration": 0.4   
      }
    }
  },
  "retina_detect": true
});

document.querySelector('.scroll-down').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});


document.getElementById('home').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

