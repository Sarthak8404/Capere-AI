/* ==========================================================================
   Capere AI Landing Page Interactive Script - Unified Local Business OS
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initFaqAccordion();
  initRoiCalculator();
  initSmsSimulator();
  initDemoModal();
  initHeroSlideshow();
  initScrollReveal();
});

/* ==========================================================================
   Mobile Menu Navigation Toggle
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      toggleBtn.classList.toggle("active");
      
      const spans = toggleBtn.querySelectorAll("span");
      if (navMenu.classList.contains("active")) {
        spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
        spans[1].style.opacity = "0";
        spans[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
      } else {
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
      }
    });

    navMenu.querySelectorAll("a").forEach(item => {
      item.addEventListener("click", () => {
        navMenu.classList.remove("active");
        const spans = toggleBtn.querySelectorAll("span");
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
      });
    });
  }
}

/* ==========================================================================
   Unified Mock Data
   ========================================================================== */
const smsConversation = [
  { type: "notification", text: "📞 Incoming Call..." },
  { type: "notification", text: "❌ Call Missed from (214) 555-0814 at 2:14 PM" },
  { type: "outbound", text: "Hi, this is Apex Air Solutions. We just missed your call. Need to book a service or have a quick question?" },
  { type: "inbound", text: "Hey, looking to book a service consult this week if possible." },
  { type: "outbound", text: "We have an open slot tomorrow at 2:00 PM. Reply YES to confirm booking." },
  { type: "inbound", text: "YES please" },
  { type: "outbound", text: "Confirmed. Your booking is set for tomorrow at 2:00 PM. Booking ID: #CAP-9842." }
];

const consoleLogs = [
  { type: "info", text: "System Initializing... Capere OS core modules ready." },
  { type: "success-log", text: "Lead Recovery active: Missed Call Text Back initialized." },
  { type: "alert-log", text: "⚠️ Inbound call missed from (214) 555-8942. Auto-responder active..." },
  { type: "success-log", text: "✓ SMS recovery successful. Lead booked for 2:00 PM tomorrow. Revenue saved: $1,500." },
  { type: "info", text: "Reputation Engine: Review request dispatched to client #9832." },
  { type: "success-log", text: "✓ Google 5-star review received. Automated review response posted." },
  { type: "info", text: "Capere Local Growth Engine: Weekly indexing posts completed on Google Business Profile." },
  { type: "success-log", text: "✓ Visibility audit: GBP organic visibility increased 14% this month." },
  { type: "info", text: "Local Growth Engine: 15 active location landing domains verified live." }
];

let currentSimInterval = null;
let currentConsoleInterval = null;

/* ==========================================================================
   SMS Technology Simulator
   ========================================================================== */
function initSmsSimulator() {
  runSimulation();
}

function runSimulation() {
  const container = document.getElementById("sim-message-box");
  if (!container) return;
  
  container.innerHTML = "";
  let step = 0;
  
  function addNextMessage() {
    if (step >= smsConversation.length) {
      currentSimInterval = setTimeout(() => {
        container.innerHTML = "";
        step = 0;
        addNextMessage();
      }, 8000);
      return;
    }
    
    const msgData = smsConversation[step];
    const msgElement = document.createElement("div");
    msgElement.className = `msg ${msgData.type}`;
    msgElement.textContent = msgData.text;
    
    container.appendChild(msgElement);
    container.scrollTop = container.scrollHeight;
    
    step++;
    
    let delay = 1800;
    if (msgData.type === "notification") delay = 1000;
    if (msgData.text.length > 80) delay = 2500;
    
    currentSimInterval = setTimeout(addNextMessage, delay);
  }
  
  addNextMessage();
}

function restartSimulation() {
  if (currentSimInterval) {
    clearTimeout(currentSimInterval);
  }
  runSimulation();
}



/* ==========================================================================
   ROI Calculator Core Math
   ========================================================================== */
function initRoiCalculator() {
  const jobSlider = document.getElementById("calc-job-value");
  const callSlider = document.getElementById("calc-missed-calls");
  const rateSlider = document.getElementById("calc-close-rate");
  const suburbSlider = document.getElementById("calc-suburbs");
  
  if (jobSlider) {
    jobSlider.value = 1500;
    callSlider.value = 25;
    rateSlider.value = 35;
    suburbSlider.value = 15;

    const inputs = [jobSlider, callSlider, rateSlider, suburbSlider];
    inputs.forEach(input => {
      input.addEventListener("input", () => {
        updateCalculatorValues();
      });
    });
    
    updateCalculatorValues();
  }
}

function updateCalculatorValues() {
  const jobValue = Number(document.getElementById("calc-job-value").value);
  const lostLeads = Number(document.getElementById("calc-missed-calls").value);
  const closeRate = Number(document.getElementById("calc-close-rate").value);
  const lostCompetitors = Number(document.getElementById("calc-suburbs").value);
  
  document.getElementById("calc-val-job-text").textContent = `$${jobValue.toLocaleString()}`;
  document.getElementById("calc-val-missed-text").textContent = lostLeads;
  document.getElementById("calc-val-rate-text").textContent = `${closeRate}%`;
  document.getElementById("calc-val-suburbs-text").textContent = `${lostCompetitors} ${lostCompetitors === 1 ? 'Customer' : 'Customers'}`;
  
  // Math Configuration
  const missedLeadsLoss = lostLeads * (closeRate / 100) * jobValue;
  const searchLeadsLoss = lostCompetitors * jobValue;
  
  // Total Revenue Going to Competitors
  const revenueGoingToCompetitors = missedLeadsLoss + searchLeadsLoss;
  
  // Revenue You Could Win Back (recovering 70% of missed leads & capturing 30% of search competitors)
  const revenueYouCouldWinBack = (lostLeads * 0.70 * (closeRate / 100) * jobValue) + (lostCompetitors * 0.30 * jobValue);
  
  const pricingInvestment = 497;
  const estimatedMonthlyProfit = Math.max(0, revenueYouCouldWinBack - pricingInvestment);
  const breakEvenJobs = (pricingInvestment / jobValue).toFixed(1);
  
  // Dynamic 40% opportunity recovery math
  const dynamicWinRevenue = revenueGoingToCompetitors * 0.40;

  // DOM Updates
  document.getElementById("res-monthly-loss").textContent = `$${Math.round(revenueGoingToCompetitors).toLocaleString()}`;
  document.getElementById("res-monthly-recovered").textContent = `$${Math.round(revenueYouCouldWinBack).toLocaleString()}`;
  document.getElementById("res-investment-cost").textContent = `$${pricingInvestment}/mo`;
  document.getElementById("res-net-profit").textContent = `$${Math.round(estimatedMonthlyProfit).toLocaleString()}/mo`;
  document.getElementById("res-break-even-jobs").textContent = breakEvenJobs;

  // Dynamic Insight DOM Updates
  document.getElementById("res-dyn-loss-val").textContent = `$${Math.round(revenueGoingToCompetitors).toLocaleString()}`;
  document.getElementById("res-dyn-win-val").textContent = `$${Math.round(dynamicWinRevenue).toLocaleString()}`;
}

/* ==========================================================================
   FAQ Accordion Functionality
   ========================================================================== */
function initFaqAccordion() {
  const questions = document.querySelectorAll(".faq-question");
  
  questions.forEach(q => {
    q.addEventListener("click", () => {
      const item = q.parentElement;
      const isOpen = item.classList.contains("faq-open");
      
      document.querySelectorAll(".faq-item").forEach(i => i.classList.remove("faq-open"));
      
      if (!isOpen) {
        item.classList.add("faq-open");
      }
    });
  });
}

/* ==========================================================================
   Booking Demo Modal Interface
   ========================================================================== */
function initDemoModal() {
  const dateInput = document.getElementById("form-date");
  if (dateInput) {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate() + 1;
    
    if (mm < 10) mm = '0' + mm;
    if (dd < 10) dd = '0' + dd;
    
    dateInput.min = `${yyyy}-${mm}-${dd}`;
  }
}

function openDemoModal(packageName = "Capere AI Growth System") {
  const modal = document.getElementById("demo-modal");
  const packageSelect = document.getElementById("form-package");
  const successScreen = document.getElementById("form-success-message");
  const form = document.getElementById("booking-form");
  
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
    
    if (successScreen) successScreen.style.display = "none";
    if (form) form.style.display = "block";
    
    if (packageSelect) {
      packageSelect.value = packageName;
    }
  }
}

function closeDemoModal() {
  const modal = document.getElementById("demo-modal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

window.addEventListener("click", (e) => {
  const modal = document.getElementById("demo-modal");
  if (e.target === modal) {
    closeDemoModal();
  }
});

function selectTimeSlot(button) {
  const slots = button.parentElement.querySelectorAll(".time-slot");
  slots.forEach(btn => btn.classList.remove("selected"));
  button.classList.add("selected");
  document.getElementById("form-time-selected").value = button.textContent;
}

function handleBookingSubmit(event) {
  event.preventDefault();
  
  const name = document.getElementById("form-name").value;
  const phone = document.getElementById("form-phone").value;
  const business = document.getElementById("form-business").value;
  const date = document.getElementById("form-date").value;
  
  console.log("DEMO RESERVED:", { name, phone, business, date });
  
  const form = document.getElementById("booking-form");
  const successScreen = document.getElementById("form-success-message");
  
  if (form && successScreen) {
    form.style.display = "none";
    successScreen.style.display = "flex";
  }
}

/* ==========================================================================
   Hero Section Image Slideshow (Carousel)
   ========================================================================== */
function initHeroSlideshow() {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".slideshow-dots .dot");
  
  if (slides.length === 0) return;
  
  let currentSlide = 0;
  let slideInterval = null;
  const intervalTime = 3000;
  
  function goToSlide(n) {
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));
    
    slides[n].classList.add("active");
    if (dots[n]) dots[n].classList.add("active");
    
    currentSlide = n;
  }
  
  function nextSlide() {
    let next = (currentSlide + 1) % slides.length;
    goToSlide(next);
  }
  
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      goToSlide(index);
      resetInterval();
    });
  });
  
  function startInterval() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }
  
  function resetInterval() {
    clearInterval(slideInterval);
    startInterval();
  }
  
  startInterval();
}

// Qatchup-style Features Switcher Tabs Manager
function switchFeatureTab(index) {
  const tabLinks = document.querySelectorAll(".tabs-menu .tab-link");
  const tabPanes = document.querySelectorAll(".tabs-content .tab-pane");
  
  tabLinks.forEach((link, idx) => {
    if (idx === index) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
  
  tabPanes.forEach((pane, idx) => {
    if (idx === index) {
      pane.classList.add("active");
    } else {
      pane.classList.remove("active");
    }
  });
}

/* ==========================================================================
   Scroll Reveal Animation System (IntersectionObserver API)
   ========================================================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-zoom");
  if (revealElements.length === 0) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        obs.unobserve(entry.target); // Unobserve to play animation only once
      }
    });
  }, {
    threshold: 0.05, // Trigger when 5% is visible
    rootMargin: "0px 0px -40px 0px"
  });

  revealElements.forEach(el => observer.observe(el));
}
