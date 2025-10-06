document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  }

  if (document.querySelector('.slideshow')) {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
          slide.classList.add('active');
        }
      });
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
    }

    setInterval(nextSlide, 5000);
  }

  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const email = document.getElementById('email').value.toLowerCase();
      const password = document.getElementById('password').value;

      if (!email || !password) {
        alert('Please fill in all fields');
        return;
      }

      if (email.includes('admin')) {
        window.location.href = '/dashboard-admin.html';
      } else if (email.includes('therapist')) {
        window.location.href = '/dashboard-therapist.html';
      } else {
        window.location.href = '/dashboard-client.html';
      }
    });
  }

  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;

      if (!email || !password || !confirmPassword) {
        alert('Please fill in all fields');
        return;
      }

      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }

      if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        return;
      }

      window.location.href = '/dashboard-client.html';
    });
  }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const fullName = document.getElementById('fullName').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;

      if (!fullName || !email || !subject || !message) {
        alert('Please fill in all required fields');
        return;
      }

      if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
      }

      alert('Thank you for contacting us! We will get back to you soon.');
      contactForm.reset();
    });
  }

  const googleLogin = document.getElementById('googleLogin');
  const microsoftLogin = document.getElementById('microsoftLogin');
  const googleSignup = document.getElementById('googleSignup');
  const microsoftSignup = document.getElementById('microsoftSignup');

  if (googleLogin) {
    googleLogin.addEventListener('click', function() {
      alert('Google login would be implemented here');
      window.location.href = '/dashboard-client.html';
    });
  }

  if (microsoftLogin) {
    microsoftLogin.addEventListener('click', function() {
      alert('Microsoft login would be implemented here');
      window.location.href = '/dashboard-client.html';
    });
  }

  if (googleSignup) {
    googleSignup.addEventListener('click', function() {
      alert('Google signup would be implemented here');
      window.location.href = '/dashboard-client.html';
    });
  }

  if (microsoftSignup) {
    microsoftSignup.addEventListener('click', function() {
      alert('Microsoft signup would be implemented here');
      window.location.href = '/dashboard-client.html';
    });
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
    });
  });
});
