
/* Language switcher with localStorage and accessible toggles */
document.addEventListener('DOMContentLoaded', function () {
  const elems = document.querySelectorAll('[data-en]');
  const btnEn = document.getElementById('lang-en');
  const btnBg = document.getElementById('lang-bg');

  function setLanguage(lang){
    elems.forEach(el => {
      const text = (lang === 'bg') ? el.dataset.bg : el.dataset.en;
      // allow HTML in some fields (like email link)
      if (/<[a-z][\s\S]*>/i.test(text)) el.innerHTML = text;
      else el.textContent = text;
    });
    btnEn.setAttribute('aria-pressed', lang === 'en');
    btnBg.setAttribute('aria-pressed', lang === 'bg');
    localStorage.setItem('ibr_lang', lang);
    document.documentElement.lang = (lang === 'bg') ? 'bg' : 'en';
  }

  btnEn.addEventListener('click', () => setLanguage('en'));
  btnBg.addEventListener('click', () => setLanguage('bg'));

  // initialize from localStorage or browser preference
  const saved = localStorage.getItem('ibr_lang');
  if(saved) setLanguage(saved);
  else {
    const prefersBg = navigator.language && navigator.language.startsWith('bg');
    setLanguage(prefersBg ? 'bg' : 'en');
  }

  // Simple form validation
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function(e){
    const email = document.getElementById('email').value.trim();
    if(!email.includes('@')){
      e.preventDefault();
      alert((localStorage.getItem('ibr_lang') === 'bg') ? 'Моля въведете валиден имейл.' : 'Please enter a valid email.');
    }
  });
});
