// =====================
// NAV MOBILE
// =====================
function toggleMenu() {
  const links = document.getElementById('navLinks');
  links.classList.toggle('open');
}

// Ferme le menu au clic sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});

// =====================
// NAV — scroll effect
// =====================
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 60) {
    nav.style.background = 'rgba(242,239,233,0.95)';
    nav.style.backdropFilter = 'blur(8px)';
  } else {
    nav.style.background = '';
    nav.style.backdropFilter = '';
  }
});

// =====================
// LIGHTBOX
// =====================
function openLightbox(src) {
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  if (!lb || !img) return;
  img.src = src;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

// =====================
// CONTACT FORM — Formspree
// =====================
async function handleSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('contact-form');
  const btn = document.getElementById('submit-btn');
  const success = document.getElementById('form-success');
  const error = document.getElementById('form-error');

  btn.textContent = 'envoi...';
  btn.disabled = true;

  const data = new FormData(form);

  try {
    const res = await fetch('https://formspree.io/f/VOTRE_ID', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' }
    });

    if (res.ok) {
      form.reset();
      success.style.display = 'block';
      error.style.display = 'none';
      btn.style.display = 'none';
    } else {
      throw new Error('Erreur serveur');
    }
  } catch {
    error.style.display = 'block';
    success.style.display = 'none';
    btn.textContent = 'envoyer';
    btn.disabled = false;
  }
}

// =====================
// PRE-SELECT depuis URL param
// ex: contact.html?type=surf
// =====================
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const type = params.get('type');
  const select = document.getElementById('type');
  if (type && select) {
    select.value = type;
  }
});

// Protection images
document.addEventListener('contextmenu', (e) => {
  if (e.target.tagName === 'IMG') {
    e.preventDefault();
  }
});
