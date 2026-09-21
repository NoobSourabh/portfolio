// js/portfolio-loader.js
// Dynamically hydrates the portfolio DOM elements using portfolio data

import { portfolioData, getPortfolioData } from "./portfolio-data.js";

/**
 * Hydrates common layout elements: Navigation, Header, Footer
 */
export function hydrateCommonElements(data) {
  // 1. Logo branding
  const logoLinks = document.querySelectorAll(".logo a");
  logoLinks.forEach((logo) => {
    logo.textContent = data.personal.initials;
  });

  // 2. Navigation overlay links
  const navFindMe = document.querySelector(".nav-footer-item-copy");
  if (navFindMe) {
    navFindMe.innerHTML = `
      <p class="mn"><a href="${data.socials.github}" target="_blank" rel="noopener noreferrer">Github</a></p>
      <p class="mn"><a href="${data.socials.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      <p class="mn"><a href="${data.socials.leetcode}" target="_blank" rel="noopener noreferrer">LeetCode</a></p>
    `;
  }

  const navTouchEmail = document.querySelector(".nav-footer-item:last-child .nav-footer-item-copy");
  if (navTouchEmail) {
    navTouchEmail.innerHTML = `
      <p class="mn">
        <a href="mailto:${data.socials.email}" target="_blank">${data.socials.email}</a>
      </p>
    `;
  }

  // 3. Footer branding and links
  const footerHeader = document.querySelector(".footer-header h1");
  if (footerHeader) {
    footerHeader.textContent = data.personal.name;
  }

  const footerConnectCol = document.querySelectorAll(".footer-col")[2];
  if (footerConnectCol) {
    footerConnectCol.innerHTML = `
      <p>Connect</p>
      <p><a href="${data.socials.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      <p><a href="${data.socials.github}" target="_blank" rel="noopener noreferrer">Github</a></p>
      <p><a href="${data.socials.leetcode}" target="_blank" rel="noopener noreferrer">LeetCode</a></p>
      <p><a href="mailto:${data.socials.email}" target="_blank">Email</a></p>
    `;
  }

  const footerCreativeCol = document.querySelectorAll(".footer-col")[1];
  if (footerCreativeCol) {
    footerCreativeCol.innerHTML = `
      <p>Focus Areas</p>
      <p><a href="${data.socials.github}" target="_blank" rel="noopener noreferrer">Frontend & Motion</a></p>
      <p><a href="${data.socials.github}" target="_blank" rel="noopener noreferrer">AI Tools & Extensions</a></p>
      <p><a href="${data.socials.github}" target="_blank" rel="noopener noreferrer">Generative AI</a></p>
    `;
  }

  const copyrightInfo = document.querySelector(".copyright-info p.mn:first-child");
  if (copyrightInfo) {
    copyrightInfo.textContent = `© - ${data.personal.name} // 2026`;
  }
}

/**
 * Hydrates Homepage-specific elements: Hero, About, Services, Contact CTA
 */
export function hydrateHomePage(data) {
  const isHomePage = document.querySelector(".page.home-page");
  if (!isHomePage) return;

  // Title
  document.title = `${data.personal.name} | ${data.personal.role} & Creative Engineering`;

  // Hero section
  const heroHeader1 = document.querySelector(".hero-header-1 h1");
  if (heroHeader1) heroHeader1.textContent = data.personal.firstName;

  const heroHeader2 = document.querySelector(".hero-header-2 h1");
  if (heroHeader2) heroHeader2.textContent = data.personal.lastName;

  const resumeLink = document.querySelector(".hero-footer-scroll-down .resume-link");
  if (resumeLink) {
    resumeLink.href = data.personal.resumeUrl;
    resumeLink.textContent = "Fetch // Resume";
  }

  const heroTags = document.querySelector(".hero-footer-tags p.mn");
  if (heroTags) {
    heroTags.textContent = data.personal.modeTag;
  }

  // About Hero section
  const aboutHeroHeader = document.querySelector(".about-hero-header");
  if (aboutHeroHeader) {
    aboutHeroHeader.innerHTML = `
      <h1>Hi, I'm</h1>
      <h1>${data.personal.firstName}</h1>
    `;
  }

  const aboutBioPara = document.querySelector(".about-hero-bio p.ss");
  if (aboutBioPara) {
    aboutBioPara.textContent = data.personal.bio;
  }

  const aboutBioSub = document.querySelector(".about-hero-bio p.mn");
  if (aboutBioSub) {
    aboutBioSub.textContent = data.personal.subBio;
  }

  const aboutPortrait = document.querySelector(".about-hero-portrait img");
  if (aboutPortrait) {
    aboutPortrait.alt = `${data.personal.name} Portrait`;
  }

  // Services section
  const servicesHeaderTitle = document.querySelector(".services-header-title");
  if (servicesHeaderTitle) {
    servicesHeaderTitle.innerHTML = `
      <h1>Frontend Engineer</h1>
    `;
  }

  const serviceCards = document.querySelectorAll(".service-card");
  data.services.forEach((service, index) => {
    if (serviceCards[index]) {
      const titleEl = serviceCards[index].querySelector(".service-card-content h1");
      if (titleEl) titleEl.textContent = service.title;
      
      const imgEl = serviceCards[index].querySelector(".service-card-img img");
      if (imgEl && service.image) {
        imgEl.src = service.image;
        imgEl.alt = service.title;
      }
    }
  });

  // Featured Work Footer Link
  const featuredWorkFooter = document.querySelector(".featured-work-footer");
  if (featuredWorkFooter) {
    featuredWorkFooter.innerHTML = `
      <p class="mn">Project Portfolio [ 0${data.projects.length} ]</p>
      <p class="mn">///////////////////</p>
      <p class="mn"><a href="${data.socials.github}?tab=repositories" target="_blank" rel="noopener noreferrer">View All on GitHub</a></p>
    `;
  }
}

/**
 * Hydrates Contact page elements
 */
export function hydrateContactPage(data) {
  const isContactPage = document.querySelector(".page.contact-page");
  if (!isContactPage) return;

  document.title = `Contact | ${data.personal.name} | Portfolio`;

  const contactHeaderMain = document.querySelector(".contact-card-header-main");
  if (contactHeaderMain) {
    contactHeaderMain.innerHTML = `
      <h1>${data.contact.headline}</h1>
      <p>${data.contact.description}</p>
    `;
  }

  const contactInfo = document.querySelector(".contact-info");
  if (contactInfo) {
    contactInfo.innerHTML = `
      <div class="contact-info-item">
        <p class="label">Project Inquiries</p>
        <p><a href="mailto:${data.contact.email}" target="_blank">${data.contact.email}</a></p>
      </div>
      <div class="contact-info-item">
        <p class="label">Quick Chat / GitHub</p>
        <p><a href="${data.contact.quickChatUrl}" target="_blank" rel="noopener noreferrer">@${data.contact.quickChatHandle}</a></p>
      </div>
      <div class="contact-info-item">
        <p class="label">Location</p>
        <p>${data.contact.location}</p>
      </div>
    `;
  }
}

/**
 * Initialize all dynamic data hydration
 */
export async function initPortfolio() {
  const data = await getPortfolioData();
  hydrateCommonElements(data);
  hydrateHomePage(data);
  hydrateContactPage(data);
  return data;
}

// Immediately run hydration on script load if DOM is ready, or on DOMContentLoaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => initPortfolio());
} else {
  initPortfolio();
}
