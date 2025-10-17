<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CounselCare - Online Counseling Services</title>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet" />

  <style>
  /* Base styles */
*, *::before, *::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  font-family: 'Open Sans', sans-serif;
  background-color: #F5F7FA;
  color: #333333;
  line-height: 1.6;
}

/* Navigation styling */
header {
  background: #6C5CE7;
  padding: 15px 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

header nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

header a.logo {
  color: #FFFFFF;
  font-size: 24px;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
  text-decoration: none;
}

#navLinks {
  display: flex;
  flex-direction: row;
  gap: 15px;
  list-style: none;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  justify-content: center;
}

#navLinks a {
  color: #FFFFFF;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  padding: 6px 12px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

#navLinks a:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

/* Slideshow styles */
.slide {
  opacity: 0;
  transition: opacity 1s ease-in-out;
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.slide:first-child {
  opacity: 1;
}

/* Hero Section */
.hero {
  position: relative;
  width: 100%;
  height: 70vh;
  min-height: 500px;
  overflow: hidden;
  text-align: center;
  color: #FFFFFF;
  padding: 0 20px;
}

.hero h1 {
  font-size: 56px;
  margin-bottom: 20px;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
}

.hero p {
  font-size: 20px;
  margin-bottom: 30px;
}

.hero a {
  display: inline-block;
  padding: 14px 40px;
  background: #6C5CE7;
  color: #FFFFFF;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 600;
  font-size: 16px;
}

/* Features Section */
.features {
  padding: 80px 0;
  background: #F5F7FA;
}

.features .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.feature-box {
  background: #FFFFFF;
  padding: 40px 30px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
}

.feature-box div {
  font-size: 48px;
  margin-bottom: 20px;
  color: #6C5CE7;
}

.feature-box h3 {
  font-size: 20px;
  margin-bottom: 15px;
  color: #333333;
}

.feature-box p {
  color: #636E72;
  font-size: 14px;
}

/* CTA Section */
.cta {
  padding: 80px 0;
  text-align: center;
  background: #FFFFFF;
}

.cta h2 {
  font-size: 36px;
  margin-bottom: 30px;
  color: #333333;
  font-family: 'Montserrat', sans-serif;
}

.cta a {
  display: inline-block;
  padding: 14px 40px;
  background: #6C5CE7;
  color: #FFFFFF;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 600;
  font-size: 16px;
}

/* Footer */
footer {
  background: #2D3436;
  color: #FFFFFF;
  padding: 50px 0 20px;
}

footer .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
}

footer h3 {
  margin-bottom: 20px;
  font-size: 18px;
}

footer ul {
  list-style: none;
  padding: 0;
}

footer ul li a {
  color: #B2BEC3;
  text-decoration: none;
  font-size: 14px;
}

footer .bottom {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #B2BEC3;
  font-size: 14px;
}

/* Mobile optimization */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 32px;
  }

  .hero p {
    font-size: 16px;
  }

  .hero a {
    font-size: 14px;
    padding: 12px 24px;
  }

  .cta h2 {
    font-size: 28px;
  }

  .cta a {
    font-size: 14px;
    padding: 12px 24px;
  }

  header nav {
    flex-direction: column;
    align-items: center;
    padding: 10px 15px;
  }

  #navLinks {
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
  }

  #navLinks a {
    font-size: 13px;
    padding: 6px 10px;
  }

  .features .container {
    grid-template-columns: 1fr;
  }

  footer .container {
    grid-template-columns: 1fr;
    text-align: center;
  }
}
</style>
</head>
<body>

  <!-- Header -->
  <header>
    <nav>
      <a href="/index.html" class="logo">CounselCare</a>
      <ul id="navLinks">
        <li><a href="/index.html">HOME</a></li>
        <li><a href="/how-it-works.html">HOW IT WORKS</a></li>
        <li><a href="/contact.html">CONTACT US</a></li>
        <li><a href="/about.html">ABOUT US</a></li>
        <li><a href="/login.html" style="border:2px solid #FFFFFF; border-radius:25px;">Login</a></li>
      </ul>
    </nav>
  </header>

<!-- Hero Slideshow Section -->
<section style="position:relative; width:100%; height:70vh; min-height:500px; overflow:hidden;">
  <div id="slideshow" style="position:absolute; top:0; left:0; width:100%; height:100%;">
    <div class="slide" style="position:absolute; width:100%; height:100%; background-image:url('images/ema.jpg'); background-size:cover; background-position:center; opacity:1; transition:opacity 1s;"></div>
    <div class="slide" style="position:absolute; width:100%; height:100%; background-image:url('images/deposit.jpg'); background-size:cover; background-position:center; opacity:0; transition:opacity 1s;"></div>
    <div class="slide" style="position:absolute; width:100%; height:100%; background-image:url('images/image (1).jpg'); background-size:cover; background-position:center; opacity:0; transition:opacity 1s;"></div>
  </div>
  <div style="position:relative; z-index:10; text-align:center; color:#FFFFFF; padding:0 20px;">
    <h1 style="font-size:56px; margin-bottom:20px; font-weight:600; font-family:'Montserrat', sans-serif;">Online Counseling Services</h1>
    <p style="font-size:20px; margin-bottom:30px;">Professional therapy from the comfort of your home</p>
    <a href="/signup.html" style="display:inline-block; padding:14px 40px; background:#6C5CE7; color:#FFFFFF; text-decoration:none; border-radius:5px; font-weight:600; font-size:16px;">Get Started</a>
  </div>
</section>


  <!-- Features Section -->
  <section class="features">
    <div class="container">
      <div class="feature-box">
        <div>🎧</div>
        <h3>Experienced Therapists</h3>
        <p>Get matched with a licensed therapist who meets your needs.</p>
      </div>
      <div class="feature-box">
        <div>💻</div>
        <h3>Convenient & Secure</h3>
        <p>Access therapy sessions through our private and secure platform</p>
      </div>
      <div class="feature-box">
        <div>📅</div>
        <h3>Flexible Scheduling</h3>
        <p>Choose a time that works for
                  <p>Choose a time that works for you with evening and weekend sessions available</p>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="cta">
    <h2>Ready To Start Your Session?</h2>
    <a href="/bookings.html">Book Now</a>
  </section>

  <!-- Footer -->
  <footer>
    <div class="container">
      <div>
        <h3>About</h3>
        <ul>
          <li><a href="/about.html">Our Mission</a></li>
          <li><a href="/about.html">Careers</a></li>
          <li><a href="/about.html">Our Team</a></li>
        </ul>
      </div>
      <div>
        <h3>Services</h3>
        <ul>
          <li><a href="#">Individual Therapy</a></li>
          <li><a href="#">Couples Counseling</a></li>
          <li><a href="#">Group Sessions</a></li>
        </ul>
      </div>
      <div>
        <h3>Contact</h3>
        <ul>
          <li><a href="/contact.html">Support</a></li>
          <li><a href="/contact.html">Emergency</a></li>
          <li><a href="/contact.html">Feedback</a></li>
        </ul>
      </div>
      <div>
        <h3>FAQ</h3>
        <ul>
          <li><a href="#">Getting Started</a></li>
          <li><a href="#">Billing</a></li>
          <li><a href="#">Privacy & Security</a></li>
        </ul>
      </div>
    </div>
    <div class="bottom">
      <p>&copy; 2025 CounselCare. All rights reserved</p>
    </div>
  </footer>

  <!-- Slideshow Script -->
  <script>
    document.addEventListener("DOMContentLoaded", () => {
      const slides = document.querySelectorAll(".slide");
      let current = 0;

      setInterval(() => {
        slides[current].style.opacity = 0;
        current = (current + 1) % slides.length;
        slides[current].style.opacity = 1;
      }, 4000);
    });
  </script>

</body>
</html>

