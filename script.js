
// Smooth Scrolling for Navigation Links
document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const sectionId = this.getAttribute('href').substring(1);
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  });
});

// Scroll to a specific section (used in the Explore Services button)
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Hero Section Slideshow Animation
let slideIndex = 0;

// Contact Form Functionality
document.getElementById('sendEmail').addEventListener('click', function () {
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  const email = 'waniyakhan9780@gmail.com'; // Replace with Saima's email
  const subject = `Mahendi Inquiry from ${name}`;
  const body = `Name: ${name}%0APhone: ${phone}%0AMessage: ${message}`;

  window.open(`mailto:${email}?subject=${subject}&body=${body}`);
});
