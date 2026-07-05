// ===============================
// AOS Animation
// ===============================
AOS.init({
  duration: 1000,
  once: true,
  easing: "ease-in-out",
});

// ===============================
// Typing Animation
// ===============================
new Typed(".typing", {
  strings: [
    "Data Analyst",
    "Power BI Developer",
    "SQL Developer",
    "Python Programmer",
    "Business Analyst",
  ],
  typeSpeed: 80,
  backSpeed: 50,
  backDelay: 1500,
  loop: true,
});
//
// ===============================
// Animated Counter
// ===============================
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");

    const count = +counter.innerText;

    const increment = target / 100;

    if (count < target) {
      counter.innerText = `${Math.ceil(count + increment)}`;

      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

// ===============================
// Active Navigation
// ===============================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-list a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;

    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// ===============================
// Sticky Navbar
// ===============================
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");

  if (window.scrollY > 50) {
    header.style.background = "rgba(5,10,20,.95)";
    header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";
  } else {
    header.style.background = "rgba(10,20,35,.65)";
    header.style.boxShadow = "none";
  }
});

// ===============================
// Dark Mode Toggle
// ===============================
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");

  if (document.body.classList.contains("light-theme")) {
    themeBtn.classList.remove("ri-moon-line");
    themeBtn.classList.add("ri-sun-line");
  } else {
    themeBtn.classList.remove("ri-sun-line");
    themeBtn.classList.add("ri-moon-line");
  }
});

// ===============================
// Scroll To Top Button
// ===============================
const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.style.position = "fixed";
topBtn.style.bottom = "30px";
topBtn.style.right = "30px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#3b82f6";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "9999";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ===============================
// Smooth Hover Animation
// ===============================
const cards = document.querySelectorAll(
  ".project-card,.about-card,.skill-card,.certificate-card,.contact-card,.stat-card",
);

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    card.style.transform = `perspective(1000px)
        rotateX(${-(y - rect.height / 2) / 25}deg)
        rotateY(${(x - rect.width / 2) / 25}deg)
        translateY(-8px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
  });
});

// ===============================
// Loading Animation
// ===============================
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});
// Dashboard Image Popup

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close-modal");

document.querySelectorAll(".dashboard-gallery img").forEach(img=>{

    img.addEventListener("click",function(e){

        e.preventDefault();

        modal.style.display="flex";

        modalImg.src=this.src;

    });

});

closeBtn.onclick=function(){

    modal.style.display="none";

}

modal.onclick=function(){

    modal.style.display="none";

}