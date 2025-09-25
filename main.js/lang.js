document.addEventListener('DOMContentLoaded', () => {
  let currentLang = localStorage.getItem('lang') || 'en';
  function applyTranslations(lang) {
    const t = translations[lang];
    document.querySelector('.form-box.login h1')?.textContent = t.loginTitle;
    document.querySelector('.form-box.register h1')?.textContent = t.registerTitle;
    document.querySelector('.form-box.register input[placeholder="username"]')?.setAttribute('placeholder', t.usernamePlaceholder);
    document.querySelector('.form-box.register input[type="email"]')?.setAttribute('placeholder', t.emailPlaceholder);
    document.querySelector('.form-box.register input[type="password"]')?.setAttribute('placeholder', t.passwordPlaceholder);
    document.querySelector('.form-box.login input[placeholder="Email"]')?.setAttribute('placeholder', t.emailPlaceholder);
    document.querySelector('.form-box.login input[placeholder="Password"]')?.setAttribute('placeholder', t.passwordPlaceholder);
    document.querySelector('.form-box.login button')?.textContent = t.loginButton;
    document.querySelector('.form-box.register button')?.textContent = t.registerButton;
    document.getElementById('addBtn')?.textContent = t.addTaskButton;
    document.getElementById('logout')?.textContent = t.logoutButton;
    const taskInput = document.getElementById('taskInput');
    if (taskInput) taskInput.placeholder = t.taskPlaceholder;
  }
  applyTranslations(currentLang);
  const languageSelect = document.getElementById('languageSelect');
  let currentLanguage = localStorage.getItem('language') || 'en';
  if (languageSelect) {
    languageSelect.value = currentLanguage;
    applyTranslations(currentLanguage);
    languageSelect.addEventListener('change', (e) => {
      currentLanguage = e.target.value;
      localStorage.setItem('language', currentLanguage);
      applyTranslations(currentLanguage);
    });
  }
});
