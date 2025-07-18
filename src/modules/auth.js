import { createOverlay } from './overlay.js';

function createInput(type, id, placeholder) {
  const input = document.createElement('input');
  input.type = type;
  input.id = id;
  input.className = 'border border-gray-300 text-gray-700 mt-12';
  input.placeholder = placeholder;
  input.required = true;
  return input;
}

function createButton(id, text) {
  const btn = document.createElement('button');
  btn.id = id;
  btn.textContent = text;
  btn.className = 'mt-12 submit_btn h-[35px] w-[50px] border border-gray-300 text-gray-700 color-black font-bold';
  return btn;
}

function createCardWithExit() {
  const card = document.createElement('div');
  card.className = 'card bg-white w-[auto] h-[380px]';

  const topPanel = document.createElement('div');
  topPanel.className = 'top_panel w-full h-[60px]';

  const exitBtn = document.createElement('button');
  exitBtn.className = 'exit_btn rounded-[5px] h-[30px] w-[40px] flex items-center justify-center';
  exitBtn.textContent = 'Back';

  topPanel.appendChild(exitBtn);
  card.appendChild(topPanel);

  return { card, exitBtn };
}

export function showLoginCard() {
  const userInput = createInput('text', 'user_login', 'Enter your email address');
  const userPassword = createInput('password', 'user_pass', 'Enter your password');
  const confirmBtn = createButton('btn_confirm', 'Next');

  const { card, exitBtn } = createCardWithExit();
  card.appendChild(userInput);
  card.appendChild(userPassword);
  card.appendChild(confirmBtn);

  const overlay = createOverlay(card);
  card.classList.add('card_login_animation');

  confirmBtn.addEventListener('click', () => {
    const login = document.getElementById('user_login').value.trim();
    const pass = document.getElementById('user_pass').value.trim();
    const stored = JSON.parse(localStorage.getItem(login));
    if (stored === null) return alert('Email or Password is incorrect!');
    if (Number(stored.password) === Number(pass)) {
      alert('Login successful');
      overlay.remove();
      card.remove();
    } else {
      alert('Login failed');
    }
  });

  exitBtn.addEventListener('click', () => {
    overlay.remove();
    card.remove();
  });
}

export function showSignupCard() {
  const userInput = createInput('text', 'user_login', 'Enter your email address');
  const userPassword = createInput('password', 'user_pass', 'Enter your password');
  const confirmBtn = createButton('btn_confirm', 'Next');

  const { card, exitBtn } = createCardWithExit();
  card.appendChild(userInput);
  card.appendChild(userPassword);
  card.appendChild(confirmBtn);

  const overlay = createOverlay(card);
  card.classList.add('card_login_animation');

  confirmBtn.addEventListener('click', () => {
    const login = document.getElementById('user_login').value;
    const pass = document.getElementById('user_pass').value;
    const data = { password: pass };
    localStorage.setItem(login, JSON.stringify(data));
    alert('Account created successfully');
    overlay.remove();
    card.remove();
  });

  exitBtn.addEventListener('click', () => {
    overlay.remove();
    card.remove();
  });
}

export function showActivationCard() {
  const { card, exitBtn } = createCardWithExit();

  const loginBox = document.createElement('div');
  loginBox.className = 'activation_box w-[50%] h-full text-white text-lg font-bold rounded-bl-[9px]';
  loginBox.textContent = 'Log In';

  const signupBox = document.createElement('div');
  signupBox.className = 'activation_box w-[50%] h-full text-white text-lg font-bold rounded-br-[9px]';
  signupBox.textContent = 'Sign Up';

  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper w-full h-full flex flex-row justify-evenly items-center transition-all duration-500';
  wrapper.appendChild(loginBox);
  wrapper.appendChild(signupBox);

  card.appendChild(wrapper);

  const overlay = createOverlay(card);

  exitBtn.addEventListener('click', () => {
    overlay.remove();
    card.remove();
  });

  loginBox.addEventListener('click', () => {
    overlay.remove();
    card.remove();
    showLoginCard();
  });

  signupBox.addEventListener('click', () => {
    overlay.remove();
    showSignupCard();
  });
}

export function initActivationToggle() {
  const btn = document.querySelector('#theme-btn2');
  if (btn) {
    btn.addEventListener('click', showActivationCard);
  }
}
