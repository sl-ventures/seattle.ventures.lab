import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import styles from './page.module.css'

export default function Admissions() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className="container">
            <h1 className={styles.pageTitle}>Admissions</h1>
            <p className={styles.pageSubtitle}>
              Benchmarking Alchemist's Exclusivity
            </p>
          </div>
        </section>

        {/* Who We Are Looking For */}
        <section className="section">
          <div className="container">
            <div className={styles.contentBlock}>
              <h2 className={styles.sectionHeading}>Who We Are Looking For</h2>
              <p className={styles.narrative}>
                We are seeking the outliers who feel constrained by their geography. We invest in technical founders who have built complex solutions—often in B2B SaaS, Deep Tech, or Logistics—and have already demonstrated traction in their home country. We are less interested in "ideas" and more interested in "proven engines" that need a larger fuel tank.
              </p>
            </div>
          </div>
        </section>

        {/* 2026 Cohort Schedule */}
        <section className="section section-gray">
          <div className="container">
            <h2 className="section-title">The 2026 Cohort Schedule</h2>
            <p className={styles.scheduleIntro}>
              The doors to Seattle Venture Labs open twice a year.
            </p>
            <div className={styles.cohortGrid}>
              <div className={styles.cohortCard}>
                <div className={styles.cohortBadge}>March 2026</div>
                <h3 className={styles.cohortTitle}>Q1/Q2 Enterprise Focus</h3>
                <p className={styles.cohortDescription}>
                  Designed for founders ready to capitalize on Q1/Q2 enterprise budget cycles. Applications open in late 2025. This cohort focuses heavily on enterprise sales alignment and typically graduates during the peak of the Fall fundraising season.
                </p>
                <div className={styles.cohortDetails}>
                  <p><strong>Applications Open:</strong> Late 2025</p>
                  <p><strong>Program Start:</strong> March 2026</p>
                  <p><strong>Graduation:</strong> Fall 2026</p>
                </div>
              </div>
              <div className={styles.cohortCard}>
                <div className={styles.cohortBadge}>August 2026</div>
                <h3 className={styles.cohortTitle}>Deep Tech & Product Velocity</h3>
                <p className={styles.cohortDescription}>
                  Tailored for deep-tech and longer cycle startups. This cohort uses the quiet winter months to build product velocity, emerging in early Spring 2027 ready to dominate the market.
                </p>
                <div className={styles.cohortDetails}>
                  <p><strong>Applications Open:</strong> Early 2026</p>
                  <p><strong>Program Start:</strong> August 2026</p>
                  <p><strong>Graduation:</strong> Spring 2027</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="section">
          <div className="container">
            <div className={styles.contentBlock}>
              <h2 className={styles.sectionHeading}>Application Process</h2>
              <p className={styles.narrative}>
                Our application is rigorous by design. We ask you to detail not just your victories, but your "near-death" moments. We require a video introduction because we need to feel your energy and your command of English—the lingua franca of global business. Expect a multi-stage interview process where we challenge your assumptions about the US market. We accept less than 2% of applicants because we dedicate 100% of our resources to those who make the cut.
              </p>
            </div>
          </div>
        </section>

        {/* Application Portal */}
        <section className="section section-gray" id="apply">
          <div className="container">
            <h2 className="section-title">Application Portal</h2>
            <div className={styles.applicationBox}>
              <p className={styles.applicationNote}>
                The Bridge Application Portal handles complex international data with save-progress capability, video pitch upload, and LinkedIn integration.
              </p>
              <div className={styles.applicationForm}>
                <div className={styles.formNote}>
                  <p>Application portal coming soon. For now, please contact us at:</p>
                  <a href="mailto:apply@seattleventurelabs.com" className={styles.emailLink}>
                    apply@seattleventurelabs.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What are the investment terms?</h3>
                <p className={styles.faqAnswer}>
                  We invest $150K-$250K in exchange for equity, typically 5-7% of the company. Terms are standardized to ensure fairness and speed.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do I need to relocate to Seattle?</h3>
                <p className={styles.faqAnswer}>
                  While we expect significant time on the ground in Seattle during the program, we understand the complexities of international relocation. We work with founders on a case-by-case basis.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What if I'm already incorporated in the US?</h3>
                <p className={styles.faqAnswer}>
                  If you already have a US entity, we'll work with your existing structure and focus on the cultural and market immersion aspects of the program.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How long does the application process take?</h3>
                <p className={styles.faqAnswer}>
                  The full process typically takes 4-6 weeks from initial application to final decision, including multiple interview rounds and reference checks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section section-gray">
          <div className="container">
            <div className={styles.cta}>
              <h2 className={styles.ctaTitle}>Ready to Apply?</h2>
              <p className={styles.ctaDescription}>
                Join the next generation of international founders building in America.
              </p>
              <a href="mailto:apply@seattleventurelabs.com" className={styles.ctaButton}>
                Contact Admissions
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

