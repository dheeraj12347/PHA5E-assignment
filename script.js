// gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline();

tl.set(".head", {
    letterSpacing: "-2px"  // Adjust initial letter spacing
})
.from(".head", {
    opacity: 0,
    x: function(index) {
        return index % 2 === 0 ? -100 : 100;
    },
    duration: 1.2,
    stagger: 0.2,
    ease: "power3.out"
})
.to(".head", {
    y: "-31vh",
    x: "-27vw",
    scale: 0.3,
    duration: 1.5,
    ease: "power3.inOut",
    delay: 1,
    transformOrigin: "left top"
});
gsap.from(".items", {
    opacity: 0,
    y: -30,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
});

// Mobile View Animation
const mediaQuery = window.matchMedia("(max-width: 768px)");

if (mediaQuery.matches) {
    gsap.from(".list", {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power3.out"
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("themeToggle");
    let darkMode = false;

    toggleButton.addEventListener("click", function() {
        darkMode = !darkMode;
        document.body.setAttribute("data-theme", darkMode ? "dark" : "light");

        gsap.to("body", {
            backgroundColor: darkMode ? "#111" : "#ffffff",
            color: darkMode ? "#ffffff" : "#111",
            duration: 0.8,
            ease: "power2.inOut"
        });

        toggleButton.textContent = darkMode ? "☀️" : "🌙";
    });
});

tl.from(".image-container", {
    opacity: 0,
    scale: 0.95,
    duration: 0.5,  // Reduced from 1.5s to 0.5s
    ease: "power2.out"
});


const images = ["#img1", "#img2", "#img3", "#img4"];
const positions = [
  { x: "-35vw", y: "-22vh" }, // Top-left
  { x: "35vw", y: "-22vh" }, // Top-right
  { x: "-35vw", y: "27vh" }, // Bottom-left
  { x: "35vw", y: "27vh" } // Bottom-right
];

images.forEach((img, index) => {
  tl.fromTo(img, 
    { scale: 0, opacity: 0 }, 
    { 
      scale: 1, opacity: 1, 
      duration: 0.2, delay: index * 0.1, 
      ease: "back.out(1.5)"
    }
  ).to(img, {
    x: positions[index].x, y: positions[index].y, duration: 1, delay: 0.2
  });
});

gsap.utils.toArray(".image-container").forEach((img) => {
    img.addEventListener("mouseenter", () => {
      gsap.to(img, { rotate: gsap.utils.random(-20, 20), duration: 0.5 });
    });
    img.addEventListener("mouseleave", () => {
      gsap.to(img, { rotate: 0, duration: 0.5 });
    });
  });
   

// Text Animation
tl.from(".one", { x: -100, opacity: 0, duration: 0.6 })
  .from(".two", { x: 100, opacity: 0, duration: 0.6 })
  .from(".four", { x: -100, opacity: 0, duration: 0.6 })
  .from(".five", { x: 100, opacity: 0, duration: 0.6 })
  .from(".three", { scale: 0.1, opacity: 0, duration: 0.8, ease: "back.out(1.5)" });