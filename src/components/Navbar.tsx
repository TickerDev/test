import { Link, useRouterState } from '@tanstack/react-router'
import { useState, useRef, useEffect } from 'react'

const apCsaUnits = [
  { to: '/units/1', label: 'Unit 1: Primitive Types & Intro to Java' },
  { to: '/units/2', label: 'Unit 2: Using Objects' },
  { to: '/units/3', label: 'Unit 3: Writing Classes' },
  { to: '/units/4', label: 'Unit 4: Expressions, Math & Strings' },
  { to: '/units/5', label: 'Unit 5: Boolean Expressions & if Statements' },
  { to: '/units/6', label: 'Unit 6: Iteration' },
  { to: '/units/7', label: 'Unit 7: Arrays, 2D Arrays & ArrayList' },
  { to: '/units/8', label: 'Unit 8 & 9 & 10: Inheritance & Polymorphism' },
  { to: '/units/11', label: 'Unit 11: Recursion' },
  { to: '/units/12', label: 'Unit 12: Searching & Sorting' },
]

const cs3Units = [
  { to: '/cs3/1', label: 'Unit 1: Files & Exceptions' },
  { to: '/cs3/2', label: 'Unit 2: Sets & Maps' },
  { to: '/cs3/3', label: 'Unit 3: Regex' },
  { to: '/cs3/4', label: 'Unit 4: Iterators & Linked Lists' },
  { to: '/cs3/5', label: 'Unit 5: Stacks & Expressions' },
  { to: '/cs3/6', label: 'Unit 6: Writing Recursive Code' },
  { to: '/cs3/7', label: 'Unit 7: Queues & Priority Queues' },
  { to: '/cs3/8', label: 'Unit 8: Binary Trees' },
  { to: '/cs3/9', label: 'Unit 9: Multithreading in Java' },
  { to: '/cs3/10', label: 'Unit 10: Algorithms' },
]

const games = [
  { to: '/game', label: 'Tower of Hanoi' },
  { to: '/binary-game', label: 'Binary Game' },
  { to: '/binary-tetris', label: 'Binary Tetris' },
]

function NavDropdown({
  label,
  isActive,
  heading,
  items,
}: {
  label: string
  isActive: boolean
  heading: string
  items: { to: string; label: string }[]
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLLIElement>(null)
  const { location } = useRouterState()

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => { setOpen(false) }, [location.pathname])

  return (
    <li className="nav-dropdown" ref={ref}>
      <button
        className={`nav-dropdown-trigger${isActive ? ' active' : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        {label}
        <svg className="nav-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none">
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <div className="nav-dropdown-menu">
          <span className="nav-dropdown-heading">{heading}</span>
          {items.map(({ to, label }) => (
            <Link key={to} to={to} className="nav-dropdown-item">{label}</Link>
          ))}
        </div>
      )}
    </li>
  )
}

// Mobile: collapsible sections instead of hover dropdowns
function MobileSection({ heading, items }: { heading: string; items: { to: string; label: string }[] }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="mobile-section">
      <button className="mobile-section-trigger" onClick={() => setOpen((o) => !o)}>
        {heading}
        <svg className={`nav-chevron${open ? ' open' : ''}`} width="10" height="6" viewBox="0 0 10 6" fill="none">
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <div className="mobile-section-items">
          {items.map(({ to, label }) => (
            <Link key={to} to={to} className="mobile-link">{label}</Link>
          ))}
        </div>
      )}
    </div>
  )
}

export function Navbar() {
  const { location } = useRouterState()
  const [mobileOpen, setMobileOpen] = useState(false)
  const isGamePage = ['/game', '/binary-game', '/binary-tetris'].includes(location.pathname)

  // Close mobile menu on navigation
  useEffect(() => { setMobileOpen(false) }, [location.pathname])

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <nav>
        <Link to="/" className="brand">
          Mr. Yee's Classroom
        </Link>

        {/* Desktop nav */}
        <ul className="nav-links">
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : undefined}>Home</Link>
          </li>
          <NavDropdown label="AP CSA" isActive={location.pathname.startsWith('/units')} heading="Units" items={apCsaUnits} />
          <NavDropdown label="CS III" isActive={location.pathname.startsWith('/cs3')} heading="Units" items={cs3Units} />
          <NavDropdown label="Games" isActive={isGamePage} heading="Play & Learn" items={games} />

        </ul>

        {/* Hamburger button */}
        <button
          className={`hamburger${mobileOpen ? ' open' : ''}`}
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile overlay menu */}
      {mobileOpen && <div className="mobile-backdrop" onClick={() => setMobileOpen(false)} />}
      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        <Link to="/" className="mobile-link mobile-link-top">Home</Link>
        <MobileSection heading="AP CSA" items={apCsaUnits} />
        <MobileSection heading="CS III" items={cs3Units} />
        <MobileSection heading="Games" items={games} />
      </div>
    </>
  )
}
