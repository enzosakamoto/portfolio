import { Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

const SECTIONS = [
  { id: 'home', label: 'Início' },
  { id: 'about', label: 'Sobre' },
  { id: 'experience', label: 'Experiência' },
  { id: 'tech', label: 'Tecnologias' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 12)
      // scroll spy
      let current = 'home'
      for (const sec of SECTIONS) {
        const el = document.getElementById(sec.id)
        if (el) {
          const rect = el.getBoundingClientRect()
          rect.top <= 120 && rect.bottom >= 120 && (current = sec.id)
        }
      }
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleNavClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setOpen(false)
    }
  }

  return (
    <header
      className="nav-glass fixed top-3 mx-auto left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl rounded-2xl px-5 md:px-8 py-3 flex items-center justify-between"
      data-scrolled={scrolled}
    >
      <div className="flex items-center gap-2">
        <Link
          to="/"
          className="text-base md:text-lg font-bold tracking-tight brand-gradient"
        >
          &lt;Enzo&nbsp;Sakamoto /&gt;
        </Link>
      </div>
      <nav className="hidden md:flex items-center gap-8 text-sm">
        {SECTIONS.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            onClick={handleNavClick(s.id)}
            className={`nav-link ${active === s.id ? 'active' : ''}`}
            aria-current={active === s.id ? 'page' : undefined}
          >
            {s.label}
          </a>
        ))}
      </nav>
      <div className="hidden md:flex items-center gap-4">
        <a
          href="#contact"
          onClick={handleNavClick('contact')}
          className="relative inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:via-indigo-400 hover:to-emerald-400 shadow-lg shadow-sky-900/40 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60"
        >
          <span>Contato</span>
        </a>
      </div>
      {/* Mobile */}
      <button
        aria-label="Abrir menu"
        className="md:hidden hamburger-btn relative w-11 h-11 flex flex-col items-center justify-center gap-[6px] rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
        data-open={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="w-6 h-[2px] bg-white rounded-full" />
        <span className="w-6 h-[2px] bg-white rounded-full" />
        <span className="w-6 h-[2px] bg-white rounded-full" />
      </button>
      {open && (
        <div
          className="md:hidden absolute top-full left-0 right-0 pt-4"
          role="dialog"
          aria-modal
        >
          <div className="mx-auto w-full max-w-5xl px-1">
            <div className="glass rounded-2xl p-6 flex flex-col gap-3 backdrop-blur-md mobile-menu-enter border border-white/10 bg-neutral-900/80">
              {SECTIONS.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={handleNavClick(s.id)}
                  className={`mobile-link ${active === s.id ? 'active' : ''}`}
                  aria-current={active === s.id ? 'page' : undefined}
                >
                  {s.label}
                </a>
              ))}
              <div className="mt-2 pt-3 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={handleNavClick('contact')}
                  className="w-full inline-flex justify-center rounded-xl px-4 py-3 bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-500 text-sm font-semibold text-white shadow shadow-sky-900/40 hover:from-sky-400 hover:via-indigo-400 hover:to-emerald-400 transition-colors"
                >
                  Falar comigo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
