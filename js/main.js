// Mobile-friendly dropdown toggle for small screens
document.addEventListener('DOMContentLoaded', function () {
  // Only enhance if on mobile (screen ≤ 768px)
  if (window.innerWidth > 768) return;

  const dropdowns = document.querySelectorAll('.dropdown > a');
  
  dropdowns.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const submenu = this.nextElementSibling;
      if (submenu.style.display === 'block') {
        submenu.style.display = 'none';
      } else {
        // Close all others
        document.querySelectorAll('.submenu').forEach(el => {
          el.style.display = 'none';
        });
        submenu.style.display = 'block';
      }
    });
  });
});

// Optional: Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});