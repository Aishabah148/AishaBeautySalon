/* ============================================================
   Crown & Beauty Hair Studio — interactions
   Vanilla JS only. Data is hard-coded for demonstration.
   ============================================================ */

/* ---------------- Services data ---------------- */
const SERVICES = [
  {
    name: "Knotless Braids",
    price: "$180",
    desc: "Lightweight, tension-free braids that protect your scalp and last for weeks.",
    img: "https://images.pexels.com/photos/34191088/pexels-photo-34191088.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Close-up of textured knotless braids",
  },
  {
    name: "Box Braids",
    price: "$150",
    desc: "Classic, versatile box braids styled to suit your face shape and personality.",
    img: "https://images.pexels.com/photos/11515382/pexels-photo-11515382.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Portrait of a woman with box braids",
  },
  {
    name: "Cornrows",
    price: "$90",
    desc: "Neat, intricate cornrow patterns — from simple lines to bold geometric designs.",
    img: "https://images.pexels.com/photos/32426283/pexels-photo-32426283.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Close-up of a woman wearing cornrows",
  },
  {
    name: "Wig Installation",
    price: "$120",
    desc: "Flawless, natural-looking wig installs with a secure fit and seamless hairline.",
    img: "https://images.pexels.com/photos/6923529/pexels-photo-6923529.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "A woman styling a wig indoors",
  },
  {
    name: "Wig Styling",
    price: "$80",
    desc: "Custom cuts, curls and colour to bring your wig to life and frame your face.",
    img: "https://images.pexels.com/photos/6923214/pexels-photo-6923214.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Fashion portrait of a woman with a styled wig",
  },
  {
    name: "Natural Hair Styling",
    price: "$70",
    desc: "Celebrate your texture with tailored twist-outs, bantu knots and defined curls.",
    img: "https://images.pexels.com/photos/1858222/pexels-photo-1858222.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Woman with curly natural hair",
  },
  {
    name: "Hair Washing",
    price: "$40",
    desc: "A soothing, deep-cleansing wash and conditioning to refresh your scalp and strands.",
    img: "https://images.pexels.com/photos/3993451/pexels-photo-3993451.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Stylist washing a client's hair at the salon",
  },
  {
    name: "Hair Treatment",
    price: "$95",
    desc: "Nourishing deep treatments and protein therapy to restore strength and shine.",
    img: "https://images.pexels.com/photos/23349910/pexels-photo-23349910.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Client receiving a hair treatment at the salon",
  },
  {
    name: "Bridal Hairstyles",
    price: "$250",
    desc: "Romantic, long-lasting bridal updos and braided styles for your special day.",
    img: "https://images.pexels.com/photos/38573121/pexels-photo-38573121.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Bride with an elegant updo and veil",
  },
  {
    name: "Hair Extensions",
    price: "$200",
    desc: "Premium length and volume with seamless, blendable extensions applied with care.",
    img: "https://images.pexels.com/photos/39952875/pexels-photo-39952875.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Portrait of a woman with voluminous hair extensions",
  },
];

/* ---------------- Gallery data ---------------- */
const GALLERY = [
  { cat: "braids", img: "https://images.pexels.com/photos/16563139/pexels-photo-16563139.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Intricate braided bun from above", label: "Braided Updo" },
  { cat: "braids", img: "https://images.pexels.com/photos/13767165/pexels-photo-13767165.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Woman with box braids in foliage", label: "Box Braids" },
  { cat: "braids", img: "https://images.pexels.com/photos/32426283/pexels-photo-32426283.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Close-up of cornrows", label: "Cornrows" },
  { cat: "braids", img: "https://images.pexels.com/photos/31065905/pexels-photo-31065905.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Braided updo with decorative pins", label: "Accessorised Braids" },
  { cat: "wigs", img: "https://images.pexels.com/photos/6923529/pexels-photo-6923529.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Woman styling a wig", label: "Wig Install" },
  { cat: "wigs", img: "https://images.pexels.com/photos/6923214/pexels-photo-6923214.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Fashion portrait with wig", label: "Styled Wig" },
  { cat: "wigs", img: "https://images.pexels.com/photos/6923222/pexels-photo-6923222.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Model with long blonde wig", label: "Long Wig" },
  { cat: "natural", img: "https://images.pexels.com/photos/1858222/pexels-photo-1858222.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Woman with curly afro hair", label: "Natural Curls" },
  { cat: "natural", img: "https://images.pexels.com/photos/2520446/pexels-photo-2520446.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Smiling woman with curly hair", label: "Curly Joy" },
  { cat: "natural", img: "https://images.pexels.com/photos/18039499/pexels-photo-18039499.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Young woman with afro hair", label: "Afro Volume" },
  { cat: "bridal", img: "https://images.pexels.com/photos/38573121/pexels-photo-38573121.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Bride with elegant updo and veil", label: "Bridal Updo" },
  { cat: "bridal", img: "https://images.pexels.com/photos/31255042/pexels-photo-31255042.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Overhead view of bridal hairstyle with pearls", label: "Pearl Bridal" },
  { cat: "bridal", img: "https://images.pexels.com/photos/15283423/pexels-photo-15283423.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Bride with braided hairstyle side profile", label: "Bridal Braids" },
  { cat: "transformations", img: "https://images.pexels.com/photos/35382770/pexels-photo-35382770.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Vibrant braided hairstyle with colour", label: "Colour Pop" },
  { cat: "transformations", img: "https://images.pexels.com/photos/36784759/pexels-photo-36784759.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Woman with long styled hair", label: "Length & Volume" },
  { cat: "transformations", img: "https://images.pexels.com/photos/31987393/pexels-photo-31987393.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Stylish woman with natural curls", label: "Texture Refresh" },
];

/* ---------------- Testimonials data ---------------- */
const TESTIMONIALS = [
  {
    name: "Amara O.",
    role: "Knotless Braids Client",
    rating: 5,
    text: "Absolutely the best braiding experience I've had. The stylists are gentle, quick and the result lasted way longer than I expected. I left feeling like a queen.",
    avatar: "https://images.pexels.com/photos/7665704/pexels-photo-7665704.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
  },
  {
    name: "Jasmine T.",
    role: "Bridal Hairstyle Client",
    rating: 5,
    text: "They did my bridal updo and it was perfection from the trial to the wedding day. Calm, professional and so talented. I cried happy tears!",
    avatar: "https://images.pexels.com/photos/28280965/pexels-photo-28280965.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
  },
  {
    name: "Nia B.",
    role: "Wig Installation Client",
    rating: 5,
    text: "My wig install looked like it grew from my scalp. The hairline was flawless and it stayed secure all week. Crown & Beauty is my go-to now.",
    avatar: "https://images.pexels.com/photos/16869444/pexels-photo-16869444.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
  },
  {
    name: "Danielle K.",
    role: "Natural Hair Client",
    rating: 4,
    text: "Loved the deep treatment and twist-out. My curls have never felt healthier. The studio is beautiful and the team genuinely cares about your hair.",
    avatar: "https://images.pexels.com/photos/10426587/pexels-photo-10426587.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
  },
];

/* ============================================================
   Render: Services
   ============================================================ */
function renderServices() {
  const grid = document.getElementById("services-grid");
  if (!grid) return;
  grid.innerHTML = SERVICES.map(
    (s) => `
      <article class="service-card reveal">
        <div class="img-wrap">
          <img src="${s.img}" alt="${s.alt}" loading="lazy" />
          <span class="price-tag">${s.price}</span>
        </div>
        <div class="p-5 flex flex-col flex-1">
          <h3 class="font-serif text-lg text-chocolate">${s.name}</h3>
          <p class="mt-2 text-sm text-chocolate/60 leading-relaxed flex-1">${s.desc}</p>
          <a href="#appointment" data-scroll class="btn-outline mt-4 self-start" style="padding:.6rem 1.2rem;font-size:.8rem;">Book Now</a>
        </div>
      </article>`
  ).join("");
}

/* ============================================================
   Render: Gallery
   ============================================================ */
function renderGallery() {
  const grid = document.getElementById("gallery-grid");
  if (!grid) return;
  grid.innerHTML = GALLERY.map(
    (g, i) => `
      <figure class="gallery-item animate-in" data-cat="${g.cat}" data-index="${i}" tabindex="0" role="button" aria-label="View: ${g.label}">
        <img src="${g.img}" alt="${g.alt}" loading="lazy" />
        <div class="overlay"><span>${g.label}</span></div>
        <span class="zoom-icon">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3M11 8v6M8 11h6" stroke-linecap="round"/></svg>
        </span>
      </figure>`
  ).join("");
}

/* ============================================================
   Render: Testimonials
   ============================================================ */
function renderTestimonials() {
  const slides = document.getElementById("testimonial-slides");
  const dots = document.getElementById("testimonial-dots");
  if (!slides || !dots) return;
  slides.innerHTML = TESTIMONIALS.map(
    (t) => `
      <div class="testimonial-slide">
        <div class="testimonial-card">
          <div class="stars mb-4" aria-label="${t.rating} out of 5 stars">
            ${starsMarkup(t.rating)}
          </div>
          <p class="text-chocolate/75 italic leading-relaxed text-lg font-serif">“${t.text}”</p>
          <div class="mt-6 flex items-center justify-center gap-3">
            <img src="${t.avatar}" alt="Portrait of ${t.name}" class="w-12 h-12 rounded-full object-cover ring-2 ring-gold/40" loading="lazy" />
            <div class="text-left">
              <p class="font-semibold text-chocolate">${t.name}</p>
              <p class="text-xs text-gold-dark uppercase tracking-widest">${t.role}</p>
            </div>
          </div>
        </div>
      </div>`
  ).join("");
  dots.innerHTML = TESTIMONIALS.map(
    (_, i) => `<button class="dot ${i === 0 ? "active" : ""}" data-dot="${i}" aria-label="Go to testimonial ${i + 1}"></button>`
  ).join("");
}

function starsMarkup(rating) {
  let out = "";
  for (let i = 0; i < 5; i++) {
    out +=
      i < rating
        ? `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l3 6.5 7 .9-5 4.8 1.2 7L12 18l-6.2 3.2L7 14.2 2 9.4l7-.9z"/></svg>`
        : `<svg class="w-5 h-5 opacity-30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l3 6.5 7 .9-5 4.8 1.2 7L12 18l-6.2 3.2L7 14.2 2 9.4l7-.9z"/></svg>`;
  }
  return out;
}

/* ============================================================
   Populate service select
   ============================================================ */
function populateServiceSelect() {
  const select = document.getElementById("service");
  if (!select) return;
  SERVICES.forEach((s) => {
    const opt = document.createElement("option");
    opt.value = s.name;
    opt.textContent = `${s.name} — from ${s.price}`;
    select.appendChild(opt);
  });
}

/* ============================================================
   Mobile navigation
   ============================================================ */
function initMobileNav() {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");
  const openIcon = document.getElementById("menu-open-icon");
  const closeIcon = document.getElementById("menu-close-icon");
  if (!toggle || !menu) return;

  const close = () => {
    menu.classList.add("hidden");
    openIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
  };
  const open = () => {
    menu.classList.remove("hidden");
    openIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
  };

  toggle.addEventListener("click", () => {
    menu.classList.contains("hidden") ? open() : close();
  });

  // close on link click
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
}

/* ============================================================
   Smooth scroll (for [data-scroll])
   ============================================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[data-scroll]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
}

/* ============================================================
   Navbar scroll state + back-to-top
   ============================================================ */
function initScrollEffects() {
  const navbar = document.getElementById("navbar");
  const backTop = document.getElementById("back-to-top");
  const onScroll = () => {
    const y = window.scrollY;
    if (navbar) navbar.classList.toggle("scrolled", y > 40);
    if (backTop) {
      if (y > 500) {
        backTop.classList.remove("opacity-0", "translate-y-4", "pointer-events-none");
      } else {
        backTop.classList.add("opacity-0", "translate-y-4", "pointer-events-none");
      }
    }
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (backTop) {
    backTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

/* ============================================================
   Reveal on scroll (IntersectionObserver)
   ============================================================ */
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("visible"));
    return;
  }
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
  );
  els.forEach((el) => obs.observe(el));
}

/* ============================================================
   Gallery filtering
   ============================================================ */
function initGalleryFilter() {
  const filters = document.querySelectorAll(".filter-btn");
  const items = document.querySelectorAll(".gallery-item");
  const empty = document.getElementById("gallery-empty");
  if (!filters.length) return;

  filters.forEach((btn) => {
    btn.addEventListener("click", () => {
      filters.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");

      const filter = btn.dataset.filter;
      let shown = 0;
      items.forEach((item) => {
        const match = filter === "all" || item.dataset.cat === filter;
        if (match) {
          item.classList.remove("is-hidden");
          // restart the entrance animation
          item.classList.remove("animate-in");
          void item.offsetWidth;
          item.classList.add("animate-in");
          shown++;
        } else {
          item.classList.add("is-hidden");
        }
      });
      if (empty) empty.classList.toggle("hidden", shown !== 0);
    });
  });
}

/* ============================================================
   Lightbox
   ============================================================ */
function initLightbox() {
  const lb = document.getElementById("lightbox");
  const lbImg = document.getElementById("lightbox-img");
  const lbCaption = document.getElementById("lightbox-caption");
  const closeBtn = document.getElementById("lightbox-close");
  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");
  if (!lb) return;

  let current = 0;
  let visibleItems = [];

  const open = (index) => {
    visibleItems = Array.from(document.querySelectorAll(".gallery-item")).filter(
      (el) => !el.classList.contains("is-hidden")
    );
    if (!visibleItems.length) return;
    current = ((index % visibleItems.length) + visibleItems.length) % visibleItems.length;
    show();
    lb.classList.remove("hidden");
    lb.classList.add("flex");
    document.body.classList.add("lightbox-open");
  };
  const close = () => {
    lb.classList.add("hidden");
    lb.classList.remove("flex");
    document.body.classList.remove("lightbox-open");
  };
  const show = () => {
    const el = visibleItems[current];
    const img = el.querySelector("img");
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    const label = el.querySelector(".overlay span");
    lbCaption.textContent = label ? label.textContent : "";
  };
  const next = () => { current = (current + 1) % visibleItems.length; show(); };
  const prev = () => { current = (current - 1 + visibleItems.length) % visibleItems.length; show(); };

  // open on item click / enter
  document.querySelectorAll(".gallery-item").forEach((item, i) => {
    item.addEventListener("click", () => open(i));
    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(i); }
    });
  });

  closeBtn.addEventListener("click", close);
  nextBtn.addEventListener("click", next);
  prevBtn.addEventListener("click", prev);
  lb.addEventListener("click", (e) => { if (e.target === lb) close(); });
  document.addEventListener("keydown", (e) => {
    if (lb.classList.contains("hidden")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  });
}

/* ============================================================
   Testimonial slider
   ============================================================ */
function initTestimonialSlider() {
  const slides = document.getElementById("testimonial-slides");
  const prev = document.getElementById("testimonial-prev");
  const next = document.getElementById("testimonial-next");
  const dotsWrap = document.getElementById("testimonial-dots");
  if (!slides) return;

  let index = 0;
  const total = TESTIMONIALS.length;
  let timer = null;

  const go = (i) => {
    index = ((i % total) + total) % total;
    slides.style.transform = `translateX(-${index * 100}%)`;
    dotsWrap.querySelectorAll(".dot").forEach((d, di) =>
      d.classList.toggle("active", di === index)
    );
  };
  const nextSlide = () => go(index + 1);
  const prevSlide = () => go(index - 1);
  const start = () => { stop(); timer = setInterval(nextSlide, 6000); };
  const stop = () => { if (timer) clearInterval(timer); };

  if (next) next.addEventListener("click", () => { nextSlide(); start(); });
  if (prev) prev.addEventListener("click", () => { prevSlide(); start(); });
  dotsWrap.addEventListener("click", (e) => {
    const dot = e.target.closest(".dot");
    if (!dot) return;
    go(Number(dot.dataset.dot));
    start();
  });
  // pause on hover
  const track = document.getElementById("testimonial-track");
  if (track) {
    track.addEventListener("mouseenter", stop);
    track.addEventListener("mouseleave", start);
  }

  go(0);
  start();
}

/* ============================================================
   Appointment form validation
   ============================================================ */
function initAppointmentForm() {
  const form = document.getElementById("appointment-form");
  if (!form) return;
  const success = document.getElementById("form-success");
  const dateInput = document.getElementById("date");

  // prevent past dates
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.min = today;
  }

  const validators = {
    fullName: (v) => (v.trim().length >= 2 ? "" : "Please enter your full name."),
    phone: (v) => {
      const cleaned = v.replace(/[\s\-()]/g, "");
      return /^[+]?[0-9]{7,15}$/.test(cleaned) ? "" : "Enter a valid phone number.";
    },
    email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? "" : "Enter a valid email address."),
    service: (v) => (v ? "" : "Please choose a service."),
    date: (v) => {
      if (!v) return "Please pick a date.";
      const picked = new Date(v);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return picked >= today ? "" : "Date cannot be in the past.";
    },
    time: (v) => (v ? "" : "Please pick a time."),
  };

  const setError = (name, msg) => {
    const input = form.querySelector(`[name="${name}"]`);
    const errEl = form.querySelector(`[data-error-for="${name}"]`);
    if (errEl) errEl.textContent = msg;
    if (input) input.classList.toggle("invalid", !!msg);
  };

  const validateField = (name) => {
    const input = form.querySelector(`[name="${name}"]`);
    if (!input) return true;
    const msg = validators[name] ? validators[name](input.value) : "";
    setError(name, msg);
    return !msg;
  };

  // live validation after first blur
  Object.keys(validators).forEach((name) => {
    const input = form.querySelector(`[name="${name}"]`);
    if (!input) return;
    input.addEventListener("blur", () => validateField(name));
    input.addEventListener("input", () => {
      if (input.classList.contains("invalid")) validateField(name);
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;
    Object.keys(validators).forEach((name) => {
      if (!validateField(name)) valid = false;
    });

    if (!valid) {
      // focus first invalid
      const firstInvalid = form.querySelector(".invalid");
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // success — this is a frontend-only demo; nothing is sent anywhere
    form.querySelectorAll("input, select, textarea").forEach((el) => (el.value = ""));
    form.querySelectorAll(".invalid").forEach((el) => el.classList.remove("invalid"));
    Object.keys(validators).forEach((name) => setError(name, ""));

    success.textContent =
      "Thank you! Your appointment request has been received. We'll be in touch soon to confirm.";
    success.classList.remove("hidden");
    success.classList.add("animate-fade-in");
    setTimeout(() => {
      success.classList.add("hidden");
      success.classList.remove("animate-fade-in");
    }, 6000);
  });
}

/* ============================================================
   Footer year
   ============================================================ */
function initYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

/* ============================================================
   Init
   ============================================================ */
function init() {
  renderServices();
  renderGallery();
  renderTestimonials();
  populateServiceSelect();
  initMobileNav();
  initSmoothScroll();
  initScrollEffects();
  initReveal();
  initGalleryFilter();
  initLightbox();
  initTestimonialSlider();
  initAppointmentForm();
  initYear();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
