console.log("script.js loaded");

const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');
registerBtn.addEventListener('click', () => container.classList.add('active'));
loginBtn.addEventListener('click', () => container.classList.remove('active'));
const loginForm = document.querySelector('.form-box.login form');
const registerForm = document.querySelector('.form-box.register form');
let users = JSON.parse(localStorage.getItem('users')) || [];
registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = registerForm.querySelector('input[type="text"]').value.trim();
  const email = registerForm.querySelector('input[type="email"]').value.trim();
  const password = registerForm.querySelector('input[type="password"]').value.trim();
  if (!username || !email || !password) {
    alert("Please fill all fields!");
    return;
  }
  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    alert(" Email already registered!");
    return;
  }
  const newUser = { username, email, password };
  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));
  localStorage.setItem('currentUser', email);

  window.location.href = "home.html";
});
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = loginForm.querySelector('input[placeholder="Email"]').value.trim();
  const password = loginForm.querySelector('input[placeholder="Password"]').value.trim();
  if (!email || !password) {
    alert(" Please fill all fields!");
    return;
  }
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(u => u.email === email);
  if (!user) {
    alert(" User not found. Please register first!");
    return;
  }
  if (user.password !== password) {
    alert("Incorrect password");
    return;
  }
  localStorage.setItem('currentUser', email);
  window.location.href = "home.html";
});
