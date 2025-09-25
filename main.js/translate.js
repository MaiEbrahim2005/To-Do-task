const translations = {
  en: {
    loginTitle: "Login",
    registerTitle: "Register",
    usernamePlaceholder: "Username",
    emailPlaceholder: "Email",
    passwordPlaceholder: "Password",
    loginButton: "Login",
    registerButton: "Register",
    addTaskButton: "Add",
    logoutButton: "Logout",
    taskPlaceholder: "Enter a new task...",
  },
  ar: {
    loginTitle: "تسجيل الدخول",
    registerTitle: "إنشاء حساب",
    usernamePlaceholder: "اسم المستخدم",
    emailPlaceholder: "البريد الإلكتروني",
    passwordPlaceholder: "كلمة المرور",
    loginButton: "دخول",
    registerButton: "تسجيل",
    addTaskButton: "أضف",
    logoutButton: "تسجيل خروج",
    taskPlaceholder: "اكتب مهمة جديدة...",
  }
};
let currentLanguage = localStorage.getItem('language') || 'en';
function applyTranslations(lang) {
  const t = translations[lang];
  const loginTitle = document.querySelector('.form-box.login h1');
  if (loginTitle) loginTitle.textContent = t.loginTitle;
  const registerTitle = document.querySelector('.form-box.register h1');
  if (registerTitle) registerTitle.textContent = t.registerTitle;
  const usernameInput = document.querySelector('.form-box.register input[placeholder="username"]');
  if (usernameInput) usernameInput.placeholder = t.usernamePlaceholder;
  const emailInputs = document.querySelectorAll('input[type="email"]');
  emailInputs.forEach(input => input.placeholder = t.emailPlaceholder);
  const passwordInputs = document.querySelectorAll('input[type="password"]');
  passwordInputs.forEach(input => input.placeholder = t.passwordPlaceholder);
  const loginBtn = document.querySelector('.form-box.login button');
  if (loginBtn) loginBtn.textContent = t.loginButton;
  const registerBtn = document.querySelector('.form-box.register button');
  if (registerBtn) registerBtn.textContent = t.registerButton;
  const addBtn = document.getElementById('addBtn');
  if (addBtn) addBtn.textContent = t.addTaskButton;
  const logoutBtn = document.getElementById('logout');
  if (logoutBtn) logoutBtn.textContent = t.logoutButton;
  const taskInput = document.getElementById('taskInput');
  if (taskInput) taskInput.placeholder = t.taskPlaceholder;
}
applyTranslations(currentLanguage);
const languageSelect = document.getElementById('languageSelect');
if (languageSelect) {
  languageSelect.value = currentLanguage;
  languageSelect.addEventListener('change', (e) => {
    currentLanguage = e.target.value;
    localStorage.setItem('language', currentLanguage);
    applyTranslations(currentLanguage);
  });
}