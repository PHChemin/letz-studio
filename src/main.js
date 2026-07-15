import './styles/main.css'

/**
 * Light interactions for the landing skeleton.
 * Prefer progressive enhancement — the page should work without JS.
 */

const yearEl = document.querySelector('[data-year]')
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear())
}

const navToggle = document.querySelector('[data-nav-toggle]')
const navPanel = document.querySelector('[data-nav-panel]')

if (navToggle && navPanel) {
  navToggle.addEventListener('click', () => {
    const open = navPanel.getAttribute('data-open') === 'true'
    navPanel.setAttribute('data-open', open ? 'false' : 'true')
    navToggle.setAttribute('aria-expanded', open ? 'false' : 'true')
  })
}
