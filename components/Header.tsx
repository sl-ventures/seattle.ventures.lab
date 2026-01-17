'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <nav className={styles.nav}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoText}>SVL</span>
          </Link>
          <ul className={styles.navLinks}>
            <li><Link href="/program" className={styles.navLink}>Program</Link></li>
            <li><Link href="/admissions" className={styles.navLink}>Admissions</Link></li>
            <li><Link href="/partners" className={styles.navLink}>Partners</Link></li>
            <li><Link href="/community" className={styles.navLink}>Community</Link></li>
            <li><Link href="/about" className={styles.navLink}>About</Link></li>
          </ul>
          <Link href="/admissions" className={styles.applyButton}>
            Apply Now
          </Link>
          <button 
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
        {mobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <Link href="/program" onClick={() => setMobileMenuOpen(false)}>Program</Link>
            <Link href="/admissions" onClick={() => setMobileMenuOpen(false)}>Admissions</Link>
            <Link href="/partners" onClick={() => setMobileMenuOpen(false)}>Partners</Link>
            <Link href="/community" onClick={() => setMobileMenuOpen(false)}>Community</Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
          </div>
        )}
      </div>
    </header>
  )
}

