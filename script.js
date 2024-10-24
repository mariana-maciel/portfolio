document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img'); // Select all images
  
    // Initially add the hidden class to all images
    images.forEach(image => {
      image.classList.add('hidden-on-scroll');
    });
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('hidden-on-scroll');
          entry.target.classList.add('show-on-scroll');
          observer.unobserve(entry.target); // Stop observing once it's animated
        }
      });
    }, { threshold: 0.1 }); // Start animation when 10% is visible
  
    // Observe each image
    images.forEach(image => {
      observer.observe(image);
    });
  });
  

