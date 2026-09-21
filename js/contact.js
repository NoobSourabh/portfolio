// contact.js

import { portfolioData } from "./portfolio-data.js";

// Wait for DOM to fully load before executing
document.addEventListener("DOMContentLoaded", () => {
  // Check if current page is the contact page; exit if not
  const isContactPage = document.querySelector(".page.contact-page");
  if (!isContactPage) return;

  // Hydrate brand & contact details dynamically from portfolioData
  const logoLink = document.querySelector(".logo a");
  if (logoLink) logoLink.textContent = portfolioData.personal.initials;

  const headerMain = document.querySelector(".contact-card-header-main");
  if (headerMain) {
    headerMain.innerHTML = `
      <h1>${portfolioData.contact.headline}</h1>
      <p>${portfolioData.contact.description}</p>
    `;
  }

  const contactInfo = document.querySelector(".contact-info");
  if (contactInfo) {
    contactInfo.innerHTML = `
      <div class="contact-info-item">
        <p class="label">Project Inquiries</p>
        <p><a href="mailto:${portfolioData.contact.email}" target="_blank">${portfolioData.contact.email}</a></p>
      </div>
      <div class="contact-info-item">
        <p class="label">Quick Chat / GitHub</p>
        <p><a href="${portfolioData.contact.quickChatUrl}" target="_blank" rel="noopener noreferrer">@${portfolioData.contact.quickChatHandle}</a></p>
      </div>
      <div class="contact-info-item">
        <p class="label">Location</p>
        <p>${portfolioData.contact.location}</p>
      </div>
    `;
  }

  // Interactive radio option styling for email client selection
  const setupEmailClientOptions = () => {
    const clientOptions = document.querySelectorAll(".client-option");
    clientOptions.forEach((option) => {
      option.addEventListener("click", () => {
        clientOptions.forEach((opt) => opt.classList.remove("active"));
        option.classList.add("active");
        const radio = option.querySelector('input[type="radio"]');
        if (radio) radio.checked = true;
      });
    });
  };

  setupEmailClientOptions();

  // Handle form submission and redirect to email client automatically
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector(".submit-btn");
    const successMessage = document.getElementById("successMessage");

    const firstName = form.querySelector("#firstName")?.value.trim() || "";
    const lastName = form.querySelector("#lastName")?.value.trim() || "";
    const fullName = `${firstName} ${lastName}`.trim() || "Prospective Client";
    const email = form.querySelector("#email")?.value.trim() || "";
    const phone = form.querySelector("#phone")?.value.trim() || "Not provided";
    const projectTypeSelect = form.querySelector("#projectType");
    const projectType =
      projectTypeSelect && projectTypeSelect.selectedIndex >= 0
        ? projectTypeSelect.options[projectTypeSelect.selectedIndex].text
        : "General Inquiry";
    const message = form.querySelector("#message")?.value.trim() || "";

    const selectedClient =
      form.querySelector('input[name="emailClient"]:checked')?.value || "gmail";

    const recipientEmail = portfolioData.contact?.email || "inbox.sourabhc@gmail.com";
    const subject = `Project Inquiry: ${projectType} - ${fullName}`;

    const bodyLines = [
      `Hello Sourabh,`,
      ``,
      `I would like to discuss a new project with you. Here are the details:`,
      ``,
      `--------------------------------------------------`,
      `CLIENT / CONTACT DETAILS`,
      `--------------------------------------------------`,
      `• Name:         ${fullName}`,
      `• Email:        ${email}`,
      `• Phone:        ${phone}`,
      ``,
      `--------------------------------------------------`,
      `PROJECT OVERVIEW`,
      `--------------------------------------------------`,
      `• Project Type: ${projectType}`,
      ``,
      `• Project Details & Scope:`,
      `${message}`,
      ``,
      `--------------------------------------------------`,
      `Sent via Sourabh Chouhan Portfolio Contact Form`,
    ];

    const emailBody = bodyLines.join("\r\n");

    // Construct destination URLs
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipientEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(recipientEmail)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    let targetUrl = gmailUrl;
    let clientName = "Gmail Web";

    if (selectedClient === "default") {
      targetUrl = mailtoUrl;
      clientName = "Default Mail App";
    } else if (selectedClient === "outlook") {
      targetUrl = outlookUrl;
      clientName = "Outlook Web";
    }

    // Update button visual state immediately
    submitBtn.style.transform = "translateY(-1px)";
    submitBtn.textContent = `Redirecting to ${clientName}...`;
    submitBtn.disabled = true;

    // Trigger guaranteed automatic redirection
    // Directly setting window.location.href bypasses browser popup-blockers completely
    setTimeout(() => {
      window.location.href = targetUrl;
    }, 150);

    // Provide friendly confirmation, direct retry links, and 1-click clipboard copy
    if (successMessage) {
      successMessage.innerHTML = `
        <p style="font-size: 1rem; margin-bottom: 0.35em;">
          ✓ Opening <strong>${clientName}</strong> with your pre-filled inquiry!
        </p>
        <p style="font-size: 0.8rem; opacity: 0.85;">
          Didn't redirect automatically? Select your preferred option below:
        </p>
        <div class="fallback-actions">
          <a href="${gmailUrl}" target="_blank" rel="noopener noreferrer" class="fallback-btn ${selectedClient === 'gmail' ? 'primary' : ''}">
            ✦ Open in Gmail
          </a>
          <a href="${mailtoUrl}" class="fallback-btn ${selectedClient === 'default' ? 'primary' : ''}">
            ✉ Open Mail App
          </a>
          <a href="${outlookUrl}" target="_blank" rel="noopener noreferrer" class="fallback-btn ${selectedClient === 'outlook' ? 'primary' : ''}">
            ⚡ Open Outlook
          </a>
          <button type="button" class="fallback-btn" id="copyDetailsBtn">
            📋 Copy Message
          </button>
        </div>
      `;
      successMessage.classList.add("show");

      // Attach clipboard copy handler
      const copyBtn = successMessage.querySelector("#copyDetailsBtn");
      if (copyBtn) {
        copyBtn.addEventListener("click", () => {
          const fullText = `To: ${recipientEmail}\nSubject: ${subject}\n\n${emailBody}`;
          const onSuccess = () => {
            copyBtn.textContent = "✓ Copied Details!";
            setTimeout(() => {
              copyBtn.textContent = "📋 Copy Message";
            }, 2500);
          };

          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(fullText).then(onSuccess).catch(() => {
              fallbackCopy(fullText, onSuccess);
            });
          } else {
            fallbackCopy(fullText, onSuccess);
          }
        });
      }
    }

    // Allow re-submission without losing typed data
    setTimeout(() => {
      submitBtn.textContent = "Send Message";
      submitBtn.disabled = false;
      submitBtn.style.transform = "";
    }, 2500);
  };

  // Helper for clipboard copy fallback
  const fallbackCopy = (text, callback) => {
    const tempInput = document.createElement("textarea");
    tempInput.value = text;
    tempInput.style.position = "fixed";
    tempInput.style.opacity = "0";
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
      document.execCommand("copy");
      if (callback) callback();
    } catch (e) {
      console.error("Clipboard copy failed:", e);
    }
    document.body.removeChild(tempInput);
  };

  // Enhance form inputs with focus/blur animations
  const enhanceFormInputs = () => {
    const inputs = document.querySelectorAll(
      ".form-group input, .form-group textarea, .form-group select"
    );
    inputs.forEach((input) => {
      input.addEventListener("focus", () => {
        input.parentElement.style.transform = "translateY(-2px)";
      });
      input.addEventListener("blur", () => {
        input.parentElement.style.transform = "";
      });
    });
  };

  enhanceFormInputs();
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", handleFormSubmit);
  }
});