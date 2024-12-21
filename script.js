document.addEventListener("DOMContentLoaded", () => {
  // Particles.js configuration
  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#4a90e2" },
      shape: { type: "circle", stroke: { width: 0, color: "#000000" } },
      opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#4a90e2",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: true,
  });

  // Typed.js configuration
  const typed = new Typed("#typed-text", {
    strings: ["Web Developer|", "UI/UX Designer|", "Creative Thinker|"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
  });

  // Theme toggle functionality
  const themeSwitch = document.getElementById("theme-switch");
  const body = document.body;

  themeSwitch.addEventListener("change", () => {
    if (themeSwitch.checked) {
      body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  });

  // Check for saved theme preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-theme");
    themeSwitch.checked = true;
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      const headerOffset = 60; // Adjust this value based on your header height
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    });
  });
});

// Intersection Observer for section reveals
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate__animated", "animate__fadeIn");
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});

// About Me Page
const aboutSection = document.getElementById("about");
aboutSection.innerHTML = `
    <div class="container">
        <h2>About Me</h2>
                <div class="profile">
                    <img src="/profile-pic.jpg" alt="Your Name" id="profile-picture">
                    <div class="bio">
                        <p>Hello! I'm a passionate web developer and designer with a keen eye for detail and a love for creating beautiful, functional websites. With a few years of experience in both front-end and back-end development, I strive to craft user-friendly and visually appealing digital experiences.</p>
                        <p>My journey in web development started with a curiosity for how things work on the internet, and it has evolved into a fulfilling career where I get to bring ideas to life through code and design. Additionally, my proficiency in Adobe Photoshop enhances my ability to offer comprehensive design solutions, further bridging the gap between technical functionality and innovative visual design.</p>
                    </div>
                </div>
        <div class="skills">
            <h3>Skills</h3>
            <div class="skill-bars">
                <div class="skill-bar">
                    <div class="skill-name">HTML/CSS</div>
                    <div class="skill-progress" data-progress="80%"></div>
                </div>
                <div class="skill-bar">
                    <div class="skill-name">JavaScript</div>
                    <div class="skill-progress" data-progress="85%"></div>
                </div>
                <div class="skill-bar">
                    <div class="skill-name">PHP</div>
                    <div class="skill-progress" data-progress="90%"></div>
                </div>
                <div class="skill-bar">
                    <div class="skill-name">UI/UX Design</div>
                    <div class="skill-progress" data-progress="70%"></div>
                </div>
                <div class="skill-bar">
                    <div class="skill-name">Node.js</div>
                    <div class="skill-progress" data-progress="80%"></div>
                </div>
                <div class="skill-bar">
                    <div class="skill-name">Photoshop</div>
                    <div class="skill-progress" data-progress="60%"></div>
                </div>
            </div>
        </div>
    </div>
`;

// Animate skill bars
const skillBars = document.querySelectorAll(".skill-progress");
const animateSkillBars = () => {
  skillBars.forEach((bar) => {
    const progress = bar.getAttribute("data-progress");
    bar.style.width = progress;
  });
};

// Trigger skill bar animation when the about section is in view
const aboutObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateSkillBars();
        aboutObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

aboutObserver.observe(aboutSection);

// Works Page
const worksSection = document.getElementById("works");
worksSection.innerHTML = `
    <div class="container">
        <h2>My Works</h2>
        <div class="work-filters">
            <button class="filter-btn active" data-filter="all">All</button>
            <button class="filter-btn" data-filter="web">Web Development</button>
            <button class="filter-btn" data-filter="design">Graphic Design</button>
        </div>
        <div class="work-grid">
            <div class="work-item web">
                <img src="chrono1.png" alt="Project 1">
                <div class="work-info">
                    <h3>Chronologix</h3>
                    <p>A responsive Time Logging system designed for Professionals. ChronoloGix is licensed under ChronoVerse Inc.</p>
                </div>
            </div>
            <div class="work-item design">
                <img src="/poster.png" alt="Project 2">
                <div class="work-info">
                    <h3>Tamaraw Basketball Team Poster</h3>
                    <p>A poster for the Tamaraw basketball team - WMSU PALARO 2024</p>
                </div>
            </div>
            <div class="work-item web">
                <img src="/ene1.png" alt="Project 3">
                <div class="work-info">
                    <h3>Environmental Engineering Portal</h3>
                    <p>A software engineering project aimed to help EnE Students at WMSU using a Web Portal.</p>
                </div>
            </div>
            <div class="work-item design">
                <img src="/hapinoy1.png" alt="Project 4">
                <div class="work-info">
                    <h3>Hapinoy Logo Design</h3>
                    <p>Hapinoy is a social enterprise that partners with sari-sari store owners through education, linkages to capital, new business opportunities, and technology enablement.</p>
                </div>
            </div>
            <div class="work-item web">
                <img src="/ecowatt1.png" alt="Project 5">
                <div class="work-info">
                    <h3>Eco Watt</h3>
                    <p>A machine learning website that calculates the estimated bill for each appliance based on your watts usage</p>
                </div>
            </div>
            <div class="work-item design">
                <img src="/photo1.JPG" alt="Project 6">
                <div class="work-info">
                    <h3>Photography</h3>
                    <p>Photos taken during WMSU Palaro 2024</p>
                </div>
            </div>
            <div class="work-item web">
                <img src="/powerhouse1.png" alt="Project 7">
                <div class="work-info">
                    <h3>Powerhouse</h3>
                    <p>An ecommerce website for gym goers which users can buy gym equipments as well as applying for gym subscriptions</p>
                </div>
            </div>
            <div class="work-item design">
                <img src="/advocposter.png" alt="Project 8">
                <div class="work-info">
                    <h3>Logo Design Collection</h3>
                    <p>Branding</p>
                </div>
            </div>
        </div>
    </div>
`;

// Work filter functionality
const filterButtons = document.querySelectorAll(".filter-btn");
const workItems = document.querySelectorAll(".work-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    workItems.forEach((item) => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// Animate work items when they come into view
const workObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate__animated", "animate__fadeInUp");
        workObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

workItems.forEach((item) => {
  workObserver.observe(item);
});

// Profile picture hover effect
const profilePicture = document.getElementById("profile-picture");
profilePicture.addEventListener("mouseover", () => {
  profilePicture.style.transform = "scale(1.1) rotate(5deg)";
});
profilePicture.addEventListener("mouseout", () => {
  profilePicture.style.transform = "scale(1) rotate(0deg)";
});

// Modal functionality
const modal = document.createElement("div");
modal.className = "modal";
modal.innerHTML = `
    <div class="modal-content">
        <span class="close">&times;</span>
        <div class="modal-slider">
            <img class="modal-image" src="" alt="Project Image">
        </div>
        <button class="modal-nav left-nav">&lt;</button>
        <button class="modal-nav right-nav">&gt;</button>
        <h3 class="modal-title"></h3>
        <p class="modal-description"></p>
    </div>
`;
document.body.appendChild(modal);

const closeModal = modal.querySelector(".close");
closeModal.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

const workItemImages = [
  [
    "/chrono1.png",
    "/chrono2.png",
    "/chrono3.png",
    "/chrono4.png",
  ],
  ["/poster.png"],
  [
    "/ene1.png",
    "/ene2.png",
    "/ene3.png",
    "/ene4.png",
  ],
  [
    "/hapinoy1.png",
    "/hapinoy2.png",
    "/hapinoy3.png",
  ],
  [
    "/ecowatt1.png",
    "/ecowatt2.png",
    "/ecowatt3.png",
  ],
  [
    "/photo1.JPG",
    "/photo2.JPG",
    "/photo3.JPG",
    "/photo4.JPG",
  ],
  [
    "/powerhouse1.png",
    "/powerhouse2.png",
    "/powerhouse3.png",
  ],
  ["/advocposter.png"],

];

workItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    const img = item.querySelector("img");
    const title = item.querySelector("h3").textContent;
    const description = item.querySelector("p").textContent;
    let currentImageIndex = 0; // Initialize index for navigation

    // Update modal with initial image, title, and description
    modal.querySelector(".modal-image").src = img.src;
    modal.querySelector(".modal-title").textContent = title;
    modal.querySelector(".modal-description").textContent = description;

    // Check if the current item has multiple images
    const images = workItemImages[index]; // Retrieve image array for the clicked item

    const updateModalImage = () => {
      modal.querySelector(".modal-image").src = images[currentImageIndex];
    };

    document.querySelector(".left-nav").addEventListener("click", () => {
      if (currentImageIndex > 0) {
        currentImageIndex--;
        updateModalImage();
      }
    });

    document.querySelector(".right-nav").addEventListener("click", () => {
      if (currentImageIndex < images.length - 1) {
        currentImageIndex++;
        updateModalImage();
      }
    });

    modal.style.display = "block";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const contactItems = document.querySelectorAll(".contact-item");

  contactItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.style.transform = "translateY(-5px)";
      item.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
    });

    item.addEventListener("mouseleave", () => {
      item.style.transform = "translateY(0)";
      item.style.boxShadow = "none";
    });

    item.addEventListener("click", () => {
      const info = item.getAttribute("data-info");
      const [platform, value] = info.split(": ");

      // Adjusting URL handling for different platforms
      switch (
        platform.trim() // Added trim() to remove any accidental whitespace
      ) {
        case "Facebook":
        case "Instagram":
        case "GitHub":
        case "LinkedIn":
          window.open(value.trim(), "_blank"); // Opens the provided URL in a new tab
          break;
        case "Email":
          window.location.href = `mailto:${value.trim()}`;
          break;
        case "Phone":
          window.location.href = `tel:${value.replace(/\D/g, "")}`;
          break;
        case "Location":
          window.open(
            `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              value.trim()
            )}`,
            "_blank"
          );
          break;
      }
    });
  });
});

// Add more JavaScript for additional interactivity and dynamic content as needed
