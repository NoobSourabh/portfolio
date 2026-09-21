// featured-work.js

// Import GSAP and ScrollTrigger plugin
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioData } from "./portfolio-data.js";

// Wait for DOM to fully load before executing
document.addEventListener("DOMContentLoaded", () => {
  // Check if current page is the homepage; exit if not
  const isHomePage = document.querySelector(".page.home-page");
  if (!isHomePage) return;

  // Register ScrollTrigger plugin with GSAP
  gsap.registerPlugin(ScrollTrigger);

  let scrollTriggerInstance = null; // Stores ScrollTrigger instance for cleanup

  // Populate featured titles dynamically for Tools & Technologies
  const renderFeaturedTitles = () => {
    const featuredTitlesContainer = document.querySelector(".featured-titles");
    if (!featuredTitlesContainer) return;

    featuredTitlesContainer.innerHTML = "";

    // Section title
    const headerWrapper = document.createElement("div");
    headerWrapper.className = "featured-title-wrapper";
    headerWrapper.innerHTML = `<h1 class="featured-title">${portfolioData.featuredWorkHeader || "Tools & Stack"}</h1>`;
    featuredTitlesContainer.appendChild(headerWrapper);

    const titleSlides = [
      {
        title: "React & Next.js",
        image: "/images/tools/react.svg",
      },
      {
        title: "TypeScript & JS",
        image: "/images/tools/typescript.svg",
      },
      {
        title: "Tailwind & Motion",
        image: "/images/tools/tailwindcss.svg",
      },
      {
        title: "AI & Modern Tools",
        image: "/images/tools/cursor.svg",
      },
      {
        title: "State & Flow",
        image: "/images/tools/redux.svg",
      },
    ];

    titleSlides.forEach((slide) => {
      const wrapper = document.createElement("div");
      wrapper.className = "featured-title-wrapper";
      wrapper.innerHTML = `
        <div class="featured-title-img">
          <img src="${slide.image}" alt="${slide.title}" />
        </div>
        <h1 class="featured-title">
          ${slide.title}
        </h1>
      `;
      featuredTitlesContainer.appendChild(wrapper);
    });
  };

  // Render titles on load
  renderFeaturedTitles();

  // Initialize animations
  const initAnimations = () => {
    // Disable animations on small screens (width <= 1000px)
    if (window.innerWidth <= 1000) {
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill(); // Clean up existing ScrollTrigger
        scrollTriggerInstance = null;
      }
      return;
    }

    // Kill existing ScrollTrigger instance to prevent duplicates
    if (scrollTriggerInstance) {
      scrollTriggerInstance.kill();
    }

    const projects = portfolioData.projects || [];
    const projectCount = projects.length || 8;

    // Create section indicators and progress dots
    const indicatorContainer = document.querySelector(".featured-work-indicator");
    if (indicatorContainer) {
      indicatorContainer.innerHTML = ""; // Clear existing content
      const numSections = Math.min(5, Math.max(3, Math.ceil(projectCount / 2)));
      for (let section = 1; section <= numSections; section++) {
        const sectionNumber = document.createElement("p");
        sectionNumber.className = "mn";
        sectionNumber.textContent = `0${section}`;
        indicatorContainer.appendChild(sectionNumber);
        for (let i = 0; i < 10; i++) {
          const indicator = document.createElement("div");
          indicator.className = "indicator";
          indicatorContainer.appendChild(indicator);
        }
      }
    }

    // Tools and technologies data
    const tools = [
      { name: "Cursor", file: "cursor.svg" },
      { name: "Antigravity", file: "antigravity.svg" },
      { name: "Windsurf", file: "windsurf.svg" },
      { name: "React", file: "react.svg" },
      { name: "Next.js", file: "nextjs.svg" },
      { name: "TypeScript", file: "typescript.svg" },
      { name: "JavaScript", file: "javascript.svg" },
      { name: "Tailwind CSS", file: "tailwindcss.svg" },
      { name: "Redux Toolkit", file: "redux.svg" },
      { name: "Framer Motion", file: "framer-motion.svg" },
      { name: "GSAP", file: "gsap.svg" },
      { name: "HTML5", file: "html5.svg" },
      { name: "CSS3", file: "css3.svg" },
      { name: "Git & GitHub", file: "git-github.svg" },
      { name: "VS Code", file: "vscode.svg" },
      { name: "Zustand", file: "zustand.svg" },
    ];

    // Define image card positions for small and large screens (16 cards)
    const featuredCardPosSmall = [
      { y: 150, x: 800 },
      { y: 1350, x: 300 },
      { y: 1100, x: 1800 },
      { y: 1400, x: 950 },
      { y: 250, x: 2100 },
      { y: 400, x: 650 },
      { y: 950, x: 1550 },
      { y: 850, x: 750 },
      { y: 750, x: 2350 },
      { y: 200, x: 1500 },
      { y: 1250, x: 2600 },
      { y: 550, x: 2800 },
      { y: 1500, x: 1400 },
      { y: 350, x: 3200 },
      { y: 1050, x: 3100 },
      { y: 700, x: 1900 },
    ];
    const featuredCardPosLarge = [
      { y: 800, x: 1200 },
      { y: 1900, x: 2200 },
      { y: 300, x: 2600 },
      { y: 1400, x: 3200 },
      { y: 600, x: 3700 },
      { y: 2100, x: 4100 },
      { y: 400, x: 4500 },
      { y: 1600, x: 4800 },
      { y: 900, x: 5200 },
      { y: 2300, x: 1600 },
      { y: 350, x: 5700 },
      { y: 1800, x: 3500 },
      { y: 1200, x: 2800 },
      { y: 500, x: 6200 },
      { y: 2000, x: 5400 },
      { y: 1100, x: 4400 },
    ];
    // Select position set based on screen width
    const featuredCardPos =
      window.innerWidth >= 1600 ? featuredCardPosLarge : featuredCardPosSmall;

    // Set up featured titles container
    const featuredTitles = document.querySelector(".featured-titles");
    const moveDistance = window.innerWidth * 5; // Distance for title movement across 6 slides

    // Create tool cards dynamically
    const imagesContainer = document.querySelector(".featured-images");
    imagesContainer.innerHTML = ""; // Clear existing content
    tools.forEach((tool, index) => {
      const featuredImgCard = document.createElement("div");
      featuredImgCard.className = `featured-img-card featured-img-card-${index + 1}`;
      const img = document.createElement("img");
      img.src = `/images/tools/${tool.file}`;
      img.alt = tool.name;
      featuredImgCard.appendChild(img);
      // Set initial position from predefined coordinates
      const position = featuredCardPos[index] || { x: 1000 + index * 200, y: 500 };
      gsap.set(featuredImgCard, {
        x: position.x,
        y: position.y,
      });
      imagesContainer.appendChild(featuredImgCard);
    });

    // Initialize image cards with hidden and scaled-down state
    const featuredImgCards = document.querySelectorAll(".featured-img-card");
    featuredImgCards.forEach((featuredImgCard) => {
      gsap.set(featuredImgCard, {
        z: -1500, // Push back in depth
        scale: 0, // Scale down to invisible
      });
    });

    // Create ScrollTrigger for horizontal title scroll and card fly-through
    scrollTriggerInstance = ScrollTrigger.create({
      trigger: ".featured-work",
      start: "top top",
      end: `+=${window.innerHeight * 5}px`,
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        // Move titles horizontally based on scroll progress
        if (featuredTitles) {
          const xPosition = -moveDistance * self.progress;
          gsap.set(featuredTitles, {
            x: xPosition,
          });
        }

        // Animate image cards (z-position and scale) with stagger
        featuredImgCards.forEach((featuredImgCard, index) => {
          const staggerOffset = index * (0.8 / featuredImgCards.length);
          const scaledProgress = (self.progress - staggerOffset) * 2;
          const individualProgress = Math.max(0, Math.min(1, scaledProgress));
          const newZ = -1500 + 3000 * individualProgress;
          const scaleProgress = Math.min(1, individualProgress * 10);
          const scale = Math.max(0, Math.min(1, scaleProgress));
          gsap.set(featuredImgCard, {
            z: newZ,
            scale: scale,
          });
        });

        // Update indicator opacity based on scroll progress
        const indicators = document.querySelectorAll(".indicator");
        const totalIndicators = indicators.length;
        if (totalIndicators > 0) {
          const progressPerIndicator = 1 / totalIndicators;
          indicators.forEach((indicator, index) => {
            const indicatorStart = index * progressPerIndicator;
            const indicatorOpacity = self.progress > indicatorStart ? 1 : 0.2;
            gsap.to(indicator, {
              opacity: indicatorOpacity,
              duration: 0.3,
            });
          });
        }
      },
    });
  };

  // Run animations on page load
  initAnimations();

  // Re-run animations on window resize to recalculate positions and trigger points
  window.addEventListener("resize", () => {
    initAnimations();
  });
});