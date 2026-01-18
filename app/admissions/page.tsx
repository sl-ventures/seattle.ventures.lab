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
              Choose your path to Silicon Valley success
            </p>
          </div>
        </section>

        {/* Track Selection Guide */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Find Your Track</h2>
            <p className={styles.introText}>
              Each track is designed for founders at different stages of their journey. 
              Use the guide below to identify which program best fits your current needs.
            </p>
            
            <div className={styles.trackComparisonTable}>
              <table className={styles.comparisonTable}>
                <thead>
                  <tr>
                    <th>Track</th>
                    <th>Ideal Candidate</th>
                    <th>Prerequisites</th>
                    <th>Duration</th>
                    <th>Cohort Start</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={styles.trackName}>
                      <span className={styles.trackBadge}>Track 1</span>
                      Launchpad
                    </td>
                    <td>Early-stage founders with a validated idea seeking market traction</td>
                    <td>
                      <ul className={styles.prerequisiteList}>
                        <li>Working MVP or prototype</li>
                        <li>Basic market understanding</li>
                        <li>Committed founding team</li>
                      </ul>
                    </td>
                    <td>8 weeks</td>
                    <td>Feb 3, Mar 3, Apr 7, May 5, Jun 2, Jul 7, Aug 4, Sep 1, Oct 6, Nov 3, Dec 1</td>
                  </tr>
                  <tr>
                    <td className={styles.trackName}>
                      <span className={styles.trackBadge}>Track 2</span>
                      ProductLab
                    </td>
                    <td>Technical founders with an existing product needing SV-level validation</td>
                    <td>
                      <ul className={styles.prerequisiteList}>
                        <li>Live product with users</li>
                        <li>Technical founding team</li>
                        <li>Initial traction (revenue or usage)</li>
                      </ul>
                    </td>
                    <td>12 weeks</td>
                    <td>Jan 13, Apr 6, Jul 6, Oct 5</td>
                  </tr>
                  <tr>
                    <td className={styles.trackName}>
                      <span className={styles.trackBadge}>Track 3</span>
                      Pitch & Win
                    </td>
                    <td>Investment-ready founders preparing for a US fundraise</td>
                    <td>
                      <ul className={styles.prerequisiteList}>
                        <li>$100K+ ARR or strong metrics</li>
                        <li>Clear US expansion plan</li>
                        <li>Ready for due diligence</li>
                      </ul>
                    </td>
                    <td>6 weeks</td>
                    <td>Feb 10, Sep 7</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Track Details */}
        <section className="section section-gray">
          <div className="container">
            <h2 className="section-title">Track Requirements</h2>
            <div className={styles.trackDetailGrid}>
              {/* Track 1 */}
              <div className={styles.trackDetailCard}>
                <div className={styles.trackDetailHeader}>
                  <span className={styles.trackLabel}>Track 1</span>
                  <h3 className={styles.trackDetailTitle}>Launchpad</h3>
                  <p className={styles.trackDuration}>8 Weeks • Next Cohort: Feb 3, 2026</p>
                </div>
                <div className={styles.trackDetailBody}>
                  <div className={styles.detailSection}>
                    <h4 className={styles.detailHeading}>Who Should Apply</h4>
                    <p className={styles.detailText}>
                      Early-stage founders who have a validated idea and working prototype but need help 
                      acquiring their first significant user base in the US market. Ideal for founders 
                      ready to execute aggressive go-to-market strategies.
                    </p>
                  </div>
                  <div className={styles.detailSection}>
                    <h4 className={styles.detailHeading}>Application Requirements</h4>
                    <ul className={styles.requirementList}>
                      <li>Working MVP or functional prototype</li>
                      <li>2-minute video pitch explaining your product and vision</li>
                      <li>LinkedIn profiles of founding team</li>
                      <li>Current user/customer metrics (if any)</li>
                      <li>Target market analysis for US</li>
                    </ul>
                  </div>
                  <div className={styles.detailSection}>
                    <h4 className={styles.detailHeading}>Selection Criteria</h4>
                    <ul className={styles.criteriaList}>
                      <li>Product potential for viral growth</li>
                      <li>Team&apos;s execution capability</li>
                      <li>Market opportunity in the US</li>
                      <li>Founder coachability</li>
                    </ul>
                  </div>
                </div>
                <div className={styles.trackDetailFooter}>
                  <Button href="#apply" variant="primary">Apply to Launchpad</Button>
                </div>
              </div>

              {/* Track 2 */}
              <div className={styles.trackDetailCard}>
                <div className={styles.trackDetailHeader}>
                  <span className={styles.trackLabel}>Track 2</span>
                  <h3 className={styles.trackDetailTitle}>ProductLab</h3>
                  <p className={styles.trackDuration}>12 Weeks • Next Cohort: Apr 6, 2026</p>
                </div>
                <div className={styles.trackDetailBody}>
                  <div className={styles.detailSection}>
                    <h4 className={styles.detailHeading}>Who Should Apply</h4>
                    <p className={styles.detailText}>
                      Technical founders who have built a working product but need Silicon Valley-standard 
                      technical validation to pass VC due diligence. Perfect for teams with strong 
                      engineering backgrounds seeking enterprise credibility.
                    </p>
                  </div>
                  <div className={styles.detailSection}>
                    <h4 className={styles.detailHeading}>Application Requirements</h4>
                    <ul className={styles.requirementList}>
                      <li>Live product with active users</li>
                      <li>Technical architecture documentation</li>
                      <li>GitHub/GitLab repository access (for review)</li>
                      <li>Technical team bios and backgrounds</li>
                      <li>Current MRR/ARR and growth metrics</li>
                      <li>5-minute technical demo video</li>
                    </ul>
                  </div>
                  <div className={styles.detailSection}>
                    <h4 className={styles.detailHeading}>Selection Criteria</h4>
                    <ul className={styles.criteriaList}>
                      <li>Technical innovation and complexity</li>
                      <li>Scalability potential of architecture</li>
                      <li>Team&apos;s technical depth</li>
                      <li>Product-market fit signals</li>
                    </ul>
                  </div>
                </div>
                <div className={styles.trackDetailFooter}>
                  <Button href="#apply" variant="primary">Apply to ProductLab</Button>
                </div>
              </div>

              {/* Track 3 */}
              <div className={styles.trackDetailCard}>
                <div className={styles.trackDetailHeader}>
                  <span className={styles.trackLabel}>Track 3</span>
                  <h3 className={styles.trackDetailTitle}>Pitch & Win</h3>
                  <p className={styles.trackDuration}>6 Weeks • Next Cohort: Feb 10, 2026</p>
                </div>
                <div className={styles.trackDetailBody}>
                  <div className={styles.detailSection}>
                    <h4 className={styles.detailHeading}>Who Should Apply</h4>
                    <p className={styles.detailText}>
                      Investment-ready founders who have proven traction and are ready to raise from 
                      US VCs. This track is for founders who need pitch refinement, VC introductions, 
                      and a platform to showcase their startup to Silicon Valley investors.
                    </p>
                  </div>
                  <div className={styles.detailSection}>
                    <h4 className={styles.detailHeading}>Application Requirements</h4>
                    <ul className={styles.requirementList}>
                      <li>$100K+ ARR or equivalent strong metrics</li>
                      <li>Current pitch deck (10-15 slides)</li>
                      <li>Financial model with projections</li>
                      <li>Cap table and current investors</li>
                      <li>Clear US market expansion strategy</li>
                      <li>3-minute pitch video</li>
                    </ul>
                  </div>
                  <div className={styles.detailSection}>
                    <h4 className={styles.detailHeading}>Selection Criteria</h4>
                    <ul className={styles.criteriaList}>
                      <li>Demonstrated product-market fit</li>
                      <li>Strong unit economics</li>
                      <li>Compelling founder narrative</li>
                      <li>Readiness for institutional investment</li>
                    </ul>
                  </div>
                </div>
                <div className={styles.trackDetailFooter}>
                  <Button href="#apply" variant="primary">Apply to Pitch & Win</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Timeline */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Application Timeline</h2>
            <p className={styles.introText}>
              Our rolling admissions process is designed for speed. 
              We respect your time and aim to provide decisions quickly.
            </p>
            <div className={styles.timelineGrid}>
              <div className={styles.timelineStep}>
                <div className={styles.stepNumber}>1</div>
                <h3 className={styles.stepTitle}>Submit Application</h3>
                <p className={styles.stepDescription}>
                  Complete the online application with all required materials. 
                  Save progress and return anytime before final submission.
                </p>
                <span className={styles.stepDuration}>Day 1</span>
              </div>
              <div className={styles.timelineStep}>
                <div className={styles.stepNumber}>2</div>
                <h3 className={styles.stepTitle}>Initial Review</h3>
                <p className={styles.stepDescription}>
                  Our team reviews your application and supporting materials. 
                  We assess fit for your selected track.
                </p>
                <span className={styles.stepDuration}>5-7 days</span>
              </div>
              <div className={styles.timelineStep}>
                <div className={styles.stepNumber}>3</div>
                <h3 className={styles.stepTitle}>Video Interview</h3>
                <p className={styles.stepDescription}>
                  30-minute video call with program directors to discuss your 
                  vision, challenges, and fit for the program.
                </p>
                <span className={styles.stepDuration}>Week 2</span>
              </div>
              <div className={styles.timelineStep}>
                <div className={styles.stepNumber}>4</div>
                <h3 className={styles.stepTitle}>Final Decision</h3>
                <p className={styles.stepDescription}>
                  Receive your admission decision along with program details, 
                  start dates, and onboarding materials.
                </p>
                <span className={styles.stepDuration}>Week 3</span>
              </div>
            </div>
          </div>
        </section>

        {/* Application Portal */}
        <section className="section section-gray" id="apply">
          <div className="container">
            <h2 className="section-title">Application Portal</h2>
            <div className={styles.applicationBox}>
              <p className={styles.applicationNote}>
                Ready to take the first step? Book a 15-minute discovery call with our admissions team to discuss 
                which track is right for you and get your questions answered.
              </p>
              <div className={styles.applicationForm}>
                <div className={styles.formNote}>
                  <a 
                    href="https://calendly.com/seattleventurelabs/discovery-call" 
                    className={styles.calendlyButton}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a 15-min Discovery Call
                  </a>
                  <p className={styles.emailNote}>
                    Prefer email? Reach us at{' '}
                    <a href="mailto:apply@seattleventurelabs.com" className={styles.emailLink}>
                      apply@seattleventurelabs.com
                    </a>
                  </p>
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
                <h3 className={styles.faqQuestion}>Can I apply to multiple tracks?</h3>
                <p className={styles.faqAnswer}>
                  Yes, you can apply to multiple tracks if you meet the prerequisites for each. 
                  We&apos;ll help you determine the best fit during the interview process. Some founders 
                  complete one track and later enroll in another.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What are the program fees?</h3>
                <p className={styles.faqAnswer}>
                  Program fees vary by track and are designed to be founder-friendly. 
                  Contact our admissions team for detailed pricing and available payment plans.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do I need to relocate?</h3>
                <p className={styles.faqAnswer}>
                  Launchpad can be completed remotely with periodic in-person sessions. 
                  ProductLab requires significant time in Seattle. Pitch & Win includes 
                  mandatory Demo Day attendance in Silicon Valley.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What about visa support?</h3>
                <p className={styles.faqAnswer}>
                  We provide guidance on B1/B2 visas for short-term program attendance 
                  and can assist with O-1 visa applications for founders planning longer US stays.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Is there investment included?</h3>
                <p className={styles.faqAnswer}>
                  Investment is not automatic with program enrollment. However, Pitch & Win 
                  graduates have direct access to our VC network, and top performers across 
                  all tracks are introduced to relevant investors.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What happens after the program?</h3>
                <p className={styles.faqAnswer}>
                  All graduates gain lifetime access to our alumni network, partner resources, 
                  and community events. You remain part of the Seattle Venture Labs ecosystem 
                  long after completing your track.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section section-gray">
          <div className="container">
            <div className={styles.cta}>
              <h2 className={styles.ctaTitle}>Ready to Start Your Journey?</h2>
              <p className={styles.ctaDescription}>
                Join the next generation of international founders building in America. 
                Choose your track and apply today.
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
