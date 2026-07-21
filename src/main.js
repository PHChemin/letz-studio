import './styles/main.css'

/**
 * Interações leves — a página funciona sem JS.
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

  navPanel.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navPanel.setAttribute('data-open', 'false')
      navToggle.setAttribute('aria-expanded', 'false')
    })
  })
}

/** Entrada suave das seções */
const revealEls = document.querySelectorAll('[data-reveal]')
revealEls.forEach((el) => el.classList.add('reveal'))

if (revealEls.length && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          io.unobserve(entry.target)
        }
      })
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  )
  revealEls.forEach((el) => io.observe(el))
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'))
}

/** Carrosséis — setas + autoplay (padrão 7s) */
function initCarousel(root) {
  const track = root.querySelector('[data-carousel-track]')
  const slides = track ? [...track.children] : []
  if (!track || slides.length === 0) return

  const dotsWrap = root.querySelector('[data-carousel-dots]')
  const prevBtn = root.querySelector('[data-carousel-prev]')
  const nextBtn = root.querySelector('[data-carousel-next]')
  const intervalMs = Number(root.getAttribute('data-interval') || 7000)
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  let index = 0
  let timer = null

  slides.forEach((_, i) => {
    if (!dotsWrap) return
    const dot = document.createElement('button')
    dot.type = 'button'
    dot.className = 'carousel-dot'
    dot.setAttribute('aria-label', `Ir para item ${i + 1}`)
    dot.addEventListener('click', () => goTo(i))
    dotsWrap.appendChild(dot)
  })

  const dots = dotsWrap ? [...dotsWrap.children] : []

  function render() {
    track.style.transform = `translateX(-${index * 100}%)`
    dots.forEach((dot, i) => {
      dot.setAttribute('aria-current', i === index ? 'true' : 'false')
    })
  }

  function goTo(i) {
    index = (i + slides.length) % slides.length
    render()
    restart()
  }

  function next() {
    goTo(index + 1)
  }

  function prev() {
    goTo(index - 1)
  }

  function stop() {
    if (timer) {
      clearInterval(timer)
      timer = null
    }
  }

  function start() {
    if (reduceMotion || slides.length < 2) return
    stop()
    timer = setInterval(next, intervalMs)
  }

  function restart() {
    stop()
    start()
  }

  prevBtn?.addEventListener('click', prev)
  nextBtn?.addEventListener('click', next)

  root.addEventListener('pointerenter', stop)
  root.addEventListener('pointerleave', start)
  root.addEventListener('focusin', stop)
  root.addEventListener('focusout', start)

  let touchX = null
  track.addEventListener(
    'touchstart',
    (e) => {
      touchX = e.changedTouches[0].clientX
      stop()
    },
    { passive: true },
  )
  track.addEventListener(
    'touchend',
    (e) => {
      if (touchX == null) return
      const dx = e.changedTouches[0].clientX - touchX
      touchX = null
      if (Math.abs(dx) > 40) {
        if (dx < 0) next()
        else prev()
      } else {
        start()
      }
    },
    { passive: true },
  )

  render()
  start()
}

document.querySelectorAll('[data-carousel]').forEach(initCarousel)