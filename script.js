const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});

document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
  });
});

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 120) {
      el.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function activateNavLink() {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop - 120) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", activateNavLink);
activateNavLink();

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const issue = document.getElementById("issue").value;

  const message = `Hello SeeScope 👋%0A
Name: ${name}%0A
Phone: ${phone}%0A
Issue: ${issue}`;

  const whatsappNumber = "6282103963"; // <-- OWNER NUMBER (no +)

  const url = `https://wa.me/${whatsappNumber}?text=${message}`;
  window.open(url, "_blank");
});
const form = document.getElementById("contactForm");
const modal = document.getElementById("successModal");
const continueBtn = document.getElementById("continueBtn");

let whatsappURL = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const issue = document.getElementById("issue").value.trim();

  if (!name || !phone || !issue) {
    alert("Please fill all fields");
    return;
  }

  const ownerNumber = "6282103963"; // test number
  const message = `Hello 👋%0A
Name: ${name}%0A
Phone: ${phone}%0A
Issue: ${issue}`;

  whatsappURL = `https://wa.me/${ownerNumber}?text=${message}`;

  // show modal instead of opening WhatsApp immediately
  modal.classList.add("show");
});

// when user confirms
continueBtn.addEventListener("click", function () {
  modal.classList.remove("show");
  window.open(whatsappURL, "_blank");
  form.reset();
});
