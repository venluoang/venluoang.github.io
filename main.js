const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// about container
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .about__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// service container
ScrollReveal().reveal(".service__card", {
  ...scrollRevealOption,
  interval: 500,
});

// portfolio container
ScrollReveal().reveal(".portfolio__card", {
  duration: 1000,
  interval: 500,
});

const hireMeButton = document.querySelector(".header__btn button");

hireMeButton.addEventListener("click", () => {
  scrollToContact();
});

function scrollToContact() {
  const contactSection = document.getElementById("contact");
  contactSection.scrollIntoView({ behavior: "smooth" });
}

const portfolioButton = document.querySelector(".about__btn button");

portfolioButton.addEventListener("click", () => {
  scrollToPortfolio();
});

function scrollToPortfolio() {
  const portfolioSection = document.getElementById("portfolio");
  portfolioSection.scrollIntoView({ behavior: "smooth" });
}

function submitForm() {
  // Get form data
  const formData = new FormData(document.getElementById('contactForm'));

  // You can perform additional validation or processing here if needed

  // Log form data to the console (for demonstration purposes)
  formData.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });

  // You can send the form data to a server using AJAX or fetch API
  // For demonstration, let's just display an alert
  alert('Form submitted successfully!');
}

document.addEventListener('DOMContentLoaded', function () {
  // Get the <h1> element
  const headerText = document.querySelector('.header__content h1');

  // Add the class to trigger the typing animation
  headerText.classList.add('typing-animation');
});

