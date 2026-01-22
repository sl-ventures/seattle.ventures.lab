import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import styles from './page.module.css'

export default function Community() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className="container">
            <h1 className={styles.pageTitle}>Community</h1>
            <p className={styles.pageSubtitle}>
              The Forum: Your lifelong network of peers and mentors
            </p>
          </div>
        </section>

        {/* The Forum */}
        <section className="section">
          <div className="container">
            <div className={styles.contentBlock}>
              <h2 className={styles.sectionHeading}>SVL Connect: The Forum</h2>
              <p className={styles.narrative}>
                Access to Seattle Venture Labs does not end at graduation. You gain lifetime access to "The Forum," our proprietary digital ecosystem. This is where the hive mind lives. Imagine a space where a founder in Tokyo can instantly query a peer in New York about visa complexities, or where you can download the exact hiring contract used by a unicorn alumni to hire their first U.S. VP of Sales. The Forum is your safe harbor—a private, encrypted community for honest conversations about the hard things: founder psychology, board management, and the lonely reality of leadership.
              </p>
            </div>
          </div>
        </section>

        {/* Forum Features */}
        <section className="section section-gray">
          <div className="container">
            <h2 className="section-title">Forum Features</h2>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <h3 className={styles.featureTitle}>Mentor Booking</h3>
                <p className={styles.featureDescription}>
                  Calendar integration to book 1:1s with American VCs, experienced operators, and successful alumni. Get direct access to the people who've walked your path.
                </p>
              </div>
              <div className={styles.featureCard}>
                <h3 className={styles.featureTitle}>Resource Library</h3>
                <p className={styles.featureDescription}>
                  Legal templates for "Flipping" (changing domicile to the U.S.), U.S. hiring contracts, B2B sales scripts, and proven playbooks from successful cross-border startups.
                </p>
              </div>
              <div className={styles.featureCard}>
                <h3 className={styles.featureTitle}>Peer Channels</h3>
                <p className={styles.featureDescription}>
                  Slack-style discussion boards for real-time collaboration: #visa-issues, #fundraising-sf, #enterprise-sales, #board-management, and more specialized channels.
                </p>
              </div>
              <div className={styles.featureCard}>
                <h3 className={styles.featureTitle}>Alumni Network</h3>
                <p className={styles.featureDescription}>
                  Connect with founders who've successfully bridged to the U.S. market. Learn from their mistakes, celebrate their wins, and build lasting relationships.
                </p>
              </div>
            </div>
            <div className={styles.forumNote}>
              <p>
                <strong>Note:</strong> The Forum is a gated community platform for active cohort members and alumni. Access is granted upon program acceptance.
              </p>
            </div>
          </div>
        </section>

        {/* Events */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Events</h2>
            <div className={styles.eventsContent}>
              <div className={styles.eventCard}>
                <div className={styles.eventBadge}>Upcoming</div>
                <h3 className={styles.eventTitle}>Pitch & Win Demo Day: Q1 2026</h3>
                <p className={styles.eventDate}>March 2026</p>
                <p className={styles.eventDescription}>
                  The culmination of our 4-week Pitch & Win track. Investment-ready founders present to curated investors from Sand Hill Road and Seattle's top firms in closed-door boardroom sessions.
                </p>
              </div>
              <div className={styles.eventCard}>
                <div className={styles.eventBadge}>Annual</div>
                <h3 className={styles.eventTitle}>Seattle Summit</h3>
                <p className={styles.eventDate}>Summer 2026</p>
                <p className={styles.eventDescription}>
                  An annual gathering of the SVL community—founders, mentors, investors, and alumni. A week of workshops, networking, and strategic sessions in the heart of Seattle.
                </p>
              </div>
              <div className={styles.eventCard}>
                <div className={styles.eventBadge}>Ongoing</div>
                <h3 className={styles.eventTitle}>Office Hours</h3>
                <p className={styles.eventDate}>Weekly</p>
                <p className={styles.eventDescription}>
                  Regular office hours with partners and mentors. Get real-time feedback on your pitch, fundraising strategy, or operational challenges.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section section-gray">
          <div className="container">
            <div className={styles.cta}>
              <h2 className={styles.ctaTitle}>Join the Community</h2>
              <p className={styles.ctaDescription}>
                Access to The Forum begins when you're accepted into the program. Start your application today.
              </p>
              <Button href="/admissions" variant="primary" arrow>Apply Now</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

