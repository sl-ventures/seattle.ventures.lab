import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import styles from './page.module.css'

export default function Program() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className="container">
            <h1 className={styles.pageTitle}>The 6-Month Crucible</h1>
            <p className={styles.pageSubtitle}>
              Benchmarking Alchemist's Curriculum Rigor
            </p>
          </div>
        </section>

        {/* Philosophy */}
        <section className="section">
          <div className="container">
            <div className={styles.contentBlock}>
              <h2 className={styles.sectionHeading}>The Philosophy</h2>
              <p className={styles.narrative}>
                We believe that standard acceleration is insufficient for international startups. You do not need a class on how to pitch; you need a strategic overhaul of your narrative for the American ear. Our program is a six-month residency designed to strip away the localized constraints of your business model and rebuild it for infinite scalability.
              </p>
            </div>
          </div>
        </section>

        {/* Phase I */}
        <section className="section section-gray" id="phase-i">
          <div className="container">
            <div className={styles.phaseSection}>
              <div className={styles.phaseHeader}>
                <span className={styles.phaseLabel}>Phase I</span>
                <h2 className={styles.phaseTitle}>The Cultural & Legal Flip</h2>
                <p className={styles.phaseWeeks}>Weeks 1-8</p>
              </div>
              <div className={styles.phaseContent}>
                <p className={styles.phaseNarrative}>
                  The journey begins not with sales, but with structure. In your first eight weeks, you will sit with our legal architects to execute the "Flip"—establishing your Delaware C-Corp and safeguarding your IP. Simultaneously, we dismantle your pitch. We move you away from the modest, traction-based narratives common in Europe and Asia, and push you toward the vision-based storytelling that Silicon Valley investors demand. You will learn to speak the language of "Unicorn potential" rather than "sustainable growth."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Phase II */}
        <section className="section" id="phase-ii">
          <div className="container">
            <div className={styles.phaseSection}>
              <div className={styles.phaseHeader}>
                <span className={styles.phaseLabel}>Phase II</span>
                <h2 className={styles.phaseTitle}>US Market Immersion</h2>
                <p className={styles.phaseWeeks}>Weeks 9-16</p>
              </div>
              <div className={styles.phaseContent}>
                <p className={styles.phaseNarrative}>
                  This is where the theory ends and the friction begins. You will not be emailing customers; you will be deployed into the US enterprise ecosystem. Leveraging the Forum Ventures benchmark of "fractional co-founding," our partners work alongside you to secure your first five US pilot contracts. We utilize Seattle's proximity to giants like Microsoft and Amazon to force-multiply your network. You are expected to be on the ground, shaking hands, and closing deals that validate your cross-border thesis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Phase III */}
        <section className="section section-gray" id="phase-iii">
          <div className="container">
            <div className={styles.phaseSection}>
              <div className={styles.phaseHeader}>
                <span className={styles.phaseLabel}>Phase III</span>
                <h2 className={styles.phaseTitle}>The Fundraising Circuit</h2>
                <p className={styles.phaseWeeks}>Weeks 17-24</p>
              </div>
              <div className={styles.phaseContent}>
                <p className={styles.phaseNarrative}>
                  By the final phase, you are no longer an "international startup"—you are a US company with global DNA. We curate exclusive, closed-door sessions with partners from Sand Hill Road and Seattle's top firms. This is not a public demo day of theater; these are high-stakes boardroom meetings arranged for founders who have proven their metrics. The program culminates in a transition to our Alumni Forum, ensuring your support network remains active long after the term sheet is signed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mentorship */}
        <section className="section" id="mentorship">
          <div className="container">
            <h2 className="section-title">The Fractional Co-founder</h2>
            <div className={styles.mentorshipContent}>
              <p className={styles.narrative}>
                Benchmarking Forum Ventures' approach, our mentorship model goes beyond traditional advisor relationships. Our partners act as fractional co-founders, working alongside you to secure your first US pilot contracts, navigate enterprise sales cycles, and build the relationships that matter. This is not mentorship by email—this is operational partnership on the ground.
              </p>
              <div className={styles.mentorshipGrid}>
                <div className={styles.mentorshipCard}>
                  <h3 className={styles.cardTitle}>1:1 Mentor Booking</h3>
                  <p className={styles.cardDescription}>
                    Calendar integration to book dedicated sessions with US VCs and experienced operators who understand the cross-border journey.
                  </p>
                </div>
                <div className={styles.mentorshipCard}>
                  <h3 className={styles.cardTitle}>Resource Library</h3>
                  <p className={styles.cardDescription}>
                    Legal templates for "Flipping" (changing domicile to US), US hiring contracts, B2B sales scripts, and proven playbooks from successful alumni.
                  </p>
                </div>
                <div className={styles.mentorshipCard}>
                  <h3 className={styles.cardTitle}>Peer Channels</h3>
                  <p className={styles.cardDescription}>
                    Slack-style discussion boards for real-time collaboration: #visa-issues, #fundraising-sf, #enterprise-sales, and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section section-gray">
          <div className="container">
            <div className={styles.cta}>
              <h2 className={styles.ctaTitle}>Ready to Begin?</h2>
              <p className={styles.ctaDescription}>
                Applications for the March 2026 and August 2026 batches are now open.
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
