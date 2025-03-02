// Main JavaScript file for the site
document.addEventListener('DOMContentLoaded', function() {
  // Mobile navigation toggle
  const navToggle = document.querySelector('.nav-toggle');
  if (navToggle) {
    navToggle.addEventListener('click', function() {
      document.querySelector('.main-nav').classList.toggle('active');
    });
  }

  // Simple form validation
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      const requiredFields = form.querySelectorAll('[required]');
      let isValid = true;
      
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add('error');
        } else {
          field.classList.remove('error');
        }
      });

      if (!isValid) {
        e.preventDefault();
        alert('Please fill out all required fields');
      }
    });
  });

  // Handle subscription form submission
  const subscriptionForm = document.getElementById('subscription-form');
  
  if (subscriptionForm) {
    subscriptionForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const emailInput = document.getElementById('email');
      const email = emailInput.value;
      
      // Here you would typically send this to your email service
      // For now, let's just show a success message
      alert(`Thanks for subscribing with ${email}! This is a demo - in a real site, this would connect to an email service.`);
      
      // Reset the form
      subscriptionForm.reset();
    });
  }

  // Initialize contact form (if exists)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      // Simple form validation
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      if (name && email && message) {
        alert('Thanks for your message! This is a demo form - in a real site, this would submit to a backend service.');
        contactForm.reset();
      } else {
        alert('Please fill in all required fields');
      }
    });
  }

  // Add any other site functionality here
  console.log('Site JavaScript initialized');
});
