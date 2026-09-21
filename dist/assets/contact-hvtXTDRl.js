import{p as o}from"./transition-CgDA7fWS.js";document.addEventListener("DOMContentLoaded",()=>{if(!document.querySelector(".page.contact-page"))return;const y=document.querySelector(".logo a");y&&(y.textContent=o.personal.initials);const b=document.querySelector(".contact-card-header-main");b&&(b.innerHTML=`
      <h1>${o.contact.headline}</h1>
      <p>${o.contact.description}</p>
    `);const h=document.querySelector(".contact-info");h&&(h.innerHTML=`
      <div class="contact-info-item">
        <p class="label">Project Inquiries</p>
        <p><a href="mailto:${o.contact.email}" target="_blank">${o.contact.email}</a></p>
      </div>
      <div class="contact-info-item">
        <p class="label">Quick Chat / GitHub</p>
        <p><a href="${o.contact.quickChatUrl}" target="_blank" rel="noopener noreferrer">@${o.contact.quickChatHandle}</a></p>
      </div>
      <div class="contact-info-item">
        <p class="label">Location</p>
        <p>${o.contact.location}</p>
      </div>
    `),(()=>{const n=document.querySelectorAll(".client-option");n.forEach(e=>{e.addEventListener("click",()=>{n.forEach(a=>a.classList.remove("active")),e.classList.add("active");const t=e.querySelector('input[type="radio"]');t&&(t.checked=!0)})})})();const U=n=>{var I,q,L,T,x,j,O;n.preventDefault();const e=n.target,t=e.querySelector(".submit-btn"),a=document.getElementById("successMessage"),M=((I=e.querySelector("#firstName"))==null?void 0:I.value.trim())||"",w=((q=e.querySelector("#lastName"))==null?void 0:q.value.trim())||"",$=`${M} ${w}`.trim()||"Prospective Client",R=((L=e.querySelector("#email"))==null?void 0:L.value.trim())||"",D=((T=e.querySelector("#phone"))==null?void 0:T.value.trim())||"Not provided",r=e.querySelector("#projectType"),v=r&&r.selectedIndex>=0?r.options[r.selectedIndex].text:"General Inquiry",N=((x=e.querySelector("#message"))==null?void 0:x.value.trim())||"",c=((j=e.querySelector('input[name="emailClient"]:checked'))==null?void 0:j.value)||"gmail",l=((O=o.contact)==null?void 0:O.email)||"inbox.sourabhc@gmail.com",i=`Project Inquiry: ${v} - ${$}`,s=["Hello Sourabh,","","I would like to discuss a new project with you. Here are the details:","","--------------------------------------------------","CLIENT / CONTACT DETAILS","--------------------------------------------------",`• Name:         ${$}`,`• Email:        ${R}`,`• Phone:        ${D}`,"","--------------------------------------------------","PROJECT OVERVIEW","--------------------------------------------------",`• Project Type: ${v}`,"","• Project Details & Scope:",`${N}`,"","--------------------------------------------------","Sent via Sourabh Chouhan Portfolio Contact Form"].join(`\r
`),S=`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(l)}&su=${encodeURIComponent(i)}&body=${encodeURIComponent(s)}`,k=`mailto:${l}?subject=${encodeURIComponent(i)}&body=${encodeURIComponent(s)}`,E=`https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(l)}&subject=${encodeURIComponent(i)}&body=${encodeURIComponent(s)}`;let d=S,m="Gmail Web";if(c==="default"?(d=k,m="Default Mail App"):c==="outlook"&&(d=E,m="Outlook Web"),t.style.transform="translateY(-1px)",t.textContent=`Redirecting to ${m}...`,t.disabled=!0,setTimeout(()=>{window.location.href=d},150),a){a.innerHTML=`
        <p style="font-size: 1rem; margin-bottom: 0.35em;">
          ✓ Opening <strong>${m}</strong> with your pre-filled inquiry!
        </p>
        <p style="font-size: 0.8rem; opacity: 0.85;">
          Didn't redirect automatically? Select your preferred option below:
        </p>
        <div class="fallback-actions">
          <a href="${S}" target="_blank" rel="noopener noreferrer" class="fallback-btn ${c==="gmail"?"primary":""}">
            ✦ Open in Gmail
          </a>
          <a href="${k}" class="fallback-btn ${c==="default"?"primary":""}">
            ✉ Open Mail App
          </a>
          <a href="${E}" target="_blank" rel="noopener noreferrer" class="fallback-btn ${c==="outlook"?"primary":""}">
            ⚡ Open Outlook
          </a>
          <button type="button" class="fallback-btn" id="copyDetailsBtn">
            📋 Copy Message
          </button>
        </div>
      `,a.classList.add("show");const p=a.querySelector("#copyDetailsBtn");p&&p.addEventListener("click",()=>{const u=`To: ${l}
Subject: ${i}

${s}`,f=()=>{p.textContent="✓ Copied Details!",setTimeout(()=>{p.textContent="📋 Copy Message"},2500)};navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(u).then(f).catch(()=>{g(u,f)}):g(u,f)})}setTimeout(()=>{t.textContent="Send Message",t.disabled=!1,t.style.transform=""},2500)},g=(n,e)=>{const t=document.createElement("textarea");t.value=n,t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select();try{document.execCommand("copy"),e&&e()}catch(a){console.error("Clipboard copy failed:",a)}document.body.removeChild(t)};(()=>{document.querySelectorAll(".form-group input, .form-group textarea, .form-group select").forEach(e=>{e.addEventListener("focus",()=>{e.parentElement.style.transform="translateY(-2px)"}),e.addEventListener("blur",()=>{e.parentElement.style.transform=""})})})();const C=document.getElementById("contactForm");C&&C.addEventListener("submit",U)});
