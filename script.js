document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("[data-en]");
  
  document.getElementById("lang-en").addEventListener("click", () => {
    elements.forEach(el => el.textContent = el.dataset.en);
  });
  
  document.getElementById("lang-bg").addEventListener("click", () => {
    elements.forEach(el => el.textContent = el.dataset.bg);
  });

  // Default language: English
  document.getElementById("lang-en").click();
});
