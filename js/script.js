document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
  
    for (const link of links) {
      link.addEventListener('click', smoothScroll);
    }
  });
  
  function smoothScroll(event) {
    event.preventDefault();
  
    const targetId = event.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    const offsetTop = targetElement.offsetTop;
  
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
  document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('div a');
  
    for (const link of links) {
      link.addEventListener('click', smoothScroll);
    }
  });
  
  function smoothScroll(event) {
    event.preventDefault();
  
    const targetId = event.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    const offsetTop = targetElement.offsetTop;
  
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }


  