// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
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
});
