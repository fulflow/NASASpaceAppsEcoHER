var myGame = new WizardOrpheus('', `You're an expert in the field of climate change. Your goal is to answer any questions about women empowerment in the field of climate change. You are a helpful assistant.`)

myGame.createUserAction({
  name: 'message',
  parameters: ['Message from user to game'],
  howBotShouldHandle: 'Respond to the user'
})

// Using the button and text box to get user input
document.getElementById('submit-button').addEventListener('click', function() {
    let userInput = document.getElementById('user-input').value;
    myGame.message(userInput);

    const conversationLog = document.getElementById('conversation');
    const userMessage = document.createElement('li');
    userMessage.classList.add('user-message');
    userMessage.textContent = userInput;
    conversationLog.appendChild(userMessage);

    document.getElementById('user-input').value = '';
});

myGame.botAction('respond', 'Send a text response to the user', { message: 'What you want to say to the user' }, data => {
  const conversationLog = document.getElementById('conversation');
  const botMessage = document.createElement('li');
  botMessage.classList.add('bot-message');
  const botAvatar = document.createElement('span');
  botAvatar.classList.add('bot-avatar');
  botMessage.appendChild(botAvatar);
  const botBubble = document.createElement('div');
  botBubble.classList.add('bot-bubble');
  botBubble.textContent = data.message;
  botMessage.appendChild(botBubble);
  conversationLog.appendChild(botMessage);

  document.getElementById('score').innerHTML = data.currentVariables.score.value;
})

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".explore__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".explore__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".explore__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".explore__content .explore__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".chef__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".chef__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".chef__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".chef__list li", {
  ...scrollRevealOption,
  delay: 1500,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});

function initAutocomplete() {
  const input = document.getElementById("search-box");
  const autocomplete = new google.maps.places.Autocomplete(input);

  autocomplete.addListener("place_changed", () => {
    const place = autocomplete.getPlace();
    console.log(place.address_components); // You can use this to display address components
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initAutocomplete();
});