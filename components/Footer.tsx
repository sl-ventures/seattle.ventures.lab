import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div className={styles.footerAbout}>
            <div className={styles.logo}>SVL</div>
            <p className={styles.footerDescription}>
              Seattle Venture Labs exists to build the bridge between regional success and global dominance. 
              We transform foreign disruptors into U.S. venture-backed powerhouses.
            </p>
          </div>
          <div className={styles.footerNav}>
            <h4 className={styles.footerHeading}>Program</h4>
            <Link href="/program" className={styles.footerLink}>Overview</Link>
            <Link href="/program#track-1" className={styles.footerLink}>Launchpad</Link>
            <Link href="/program#track-2" className={styles.footerLink}>ProductLab</Link>
            <Link href="/program#track-3" className={styles.footerLink}>Pitch & Win</Link>
          </div>
          <div className={styles.footerNav}>
            <h4 className={styles.footerHeading}>Resources</h4>
            <Link href="/admissions" className={styles.footerLink}>Apply</Link>
            <Link href="/partners" className={styles.footerLink}>Partners</Link>
            <Link href="/community" className={styles.footerLink}>Community</Link>
          </div>
          <div className={styles.footerContact}>
            <h4 className={styles.footerHeading}>Contact</h4>
            <a href="mailto:info@seattleventurelabs.com" className={styles.footerLink}>
              info@seattleventurelabs.com
            </a>
            <p className={styles.footerAddress}>
              Seattle, Washington<br />
              United States
            </p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© 2026 Seattle Venture Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

