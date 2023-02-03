const theme = 'theme';
const dataTheme = 'data-theme';
const themeTab = '.theme-tab';
const switcherBtn = '.switcher-btn';
const dark = 'dark';
const light = 'light';
const open = 'open';
const active = 'active';

const modalOpen = '[data-open]';
const modalClose = '[data-close]';
const isVisible = 'is-visible';

const root = document.documentElement;

/* Theme */
const toggleTheme = document.querySelector(themTab);
const switcher = document.querySelectorAll(switcherBtn);
const currentTheme = localStorage.getItem(theme);


const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);

// Full Site Modal "open buttons"
for(const el of openModal){
  el.addEventListener('click', function(){
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  })
}

// Full Site Modal "open buttons"
for(const el of closeModal){
  el.addEventListener('click', function(){
    this.parentElement.parentElement.classList.remove(isVisible);
  })
}