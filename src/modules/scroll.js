export const srcoll = addEventListener('DOMContentLoaded', () => {
    document.querySelector('.nav__list').addEventListener('click', function (e) {
        e.preventDefault();
        if (e.target.classList.contains('nav__link')){
          const id = e.target.getAttribute('href');
          document.querySelector(id).scrollIntoView({behavior: 'smooth'});
        }
      });
})