import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import BookingWidget from './BookingWidget'
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
              Your operational co-founder for U.S. market entry—not another accelerator, but a partner who works alongside you
            </p>
          </div>
        </section>

        {/* program Selection Guide */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Find Your Program</h2>
            <p className={styles.introText}>
              We specialize in international founders facing the unique challenges of U.S. expansion: 
              visa complexity, cultural translation, enterprise sales cycles, and American VC expectations. 
              Each program addresses a specific barrier—choose based on your most pressing need.
            </p>
            
            <div className={styles.programComparisonTable}>
              <table className={styles.comparisonTable}>
                <thead>
                  <tr>
                    <th>program</th>
                    <th>Ideal Candidate</th>
                    <th>Prerequisites</th>
                    <th>Duration</th>
                    <th>Cohort Start</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={styles.programName}>
                    
                      Launchpad
                    </td>
                    <td>International founders with a validated idea seeking U.S. market traction</td>
                    <td>
                      <ul className={styles.prerequisiteList}>
                        <li>Working MVP or prototype</li>
                        <li>Basic market understanding</li>
                        <li>Committed founding team</li>
                      </ul>
                    </td>
                    <td>12 weeks</td>
                    <td>The first week of April, June, August, Setempber, November</td>
                  </tr>
                  <tr>
                    <td className={styles.programName}>
                   
                      ProductLab
                    </td>
                    <td>International technical founders needing U.S. enterprise credibility</td>
                    <td>
                      <ul className={styles.prerequisiteList}>
                        <li>Live product with users</li>
                        <li>Technical founding team</li>
                        <li>Initial traction (revenue or usage)</li>
                      </ul>
                    </td>
                    <td>4 weeks</td>
                    <td>5 times a year</td>
                  </tr>
                  <tr>
                    <td className={styles.programName}>
            
                      Pitch & Win
                    </td>
                    <td>International founders ready to raise from American VCs</td>
                    <td>
                      <ul className={styles.prerequisiteList}>
                        <li>$100K+ ARR or strong metrics</li>
                        <li>Clear U.S. expansion plan</li>
                        <li>Ready for due diligence</li>
                      </ul>
                    </td>
                    <td>4 weeks</td>
                    <td>April, September</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Program Details */}
        <section className="section section-gray">
          <div className="container">
            <h2 className="section-title">Program Requirements</h2>
            <div className={styles.programDetailGrid}>
              {/* Program 1 */}
              <div className={styles.programDetailCard}>
                <div className={styles.programDetailHeader}>
                  <h3 className={styles.programDetailTitle}>Launchpad</h3>
                  <div className={styles.programMeta}>
                    <span className={styles.metaPill}>12 Weeks</span>
                    <span className={styles.metaPill}>Next Cohort: The first week of April, 2026</span>
                  </div>
                </div>
                <div className={styles.programDetailBody}>
                  <div className={styles.detailSection}>
                    <h4 className={styles.detailHeading}>Who Should Apply</h4>
                    <p className={styles.detailText}>
                      International founders who have proven success in their home market and are ready to 
                      validate U.S. demand. We work alongside you as fractional co-founders—joining your standups, 
                      making introductions, and helping close your first American customers or users.
                    </p>
                  </div>
                  <div className={styles.detailSection}>
                    <h4 className={styles.detailHeading}>Application Requirements</h4>
                    <ul className={styles.requirementList}>
                      <li>Working MVP or functional prototype</li>
                      <li>2-minute video pitch explaining your product and vision</li>
                      <li>LinkedIn profiles of founding team</li>
                      <li>Traction in your home market (users, revenue, or pilots)</li>
                      <li>Clear thesis on why the U.S. market matters for your company</li>
                    </ul>
                  </div>
                  <div className={styles.detailSection}>
                    <h4 className={styles.detailHeading}>Selection Criteria</h4>
                    <ul className={styles.criteriaList}>
                      <li>Home market traction that translates to U.S. opportunity</li>
                      <li>Team&apos;s execution capability and coachability</li>
                      <li>Willingness to adapt product/messaging for American buyers</li>
                      <li>Commitment to 15-20 hours/week for 12 weeks</li>
                    </ul>
                  </div>
                </div>
                <div className={styles.programDetailFooter}>
                  <Button href="#apply" variant="primary">Apply to Launchpad</Button>
                </div>
              </div>

              {/* Program 2 */}
              <div className={styles.programDetailCard}>
                <div className={styles.programDetailHeader}>
                  <h3 className={styles.programDetailTitle}>ProductLab</h3>
                  <div className={styles.programMeta}>
                    <span className={styles.metaPill}>4 Weeks</span>
                    <span className={styles.metaPill}>Next Cohort: Apr 6, 2026</span>
                  </div>
                </div>
                <div className={styles.programDetailBody}>
                  <div className={styles.detailSection}>
                    <h4 className={styles.detailHeading}>Who Should Apply</h4>
                    <p className={styles.detailText}>
                      International technical founders who need enterprise-grade credibility for American 
                      buyers and investors. Work with Seattle&apos;s enterprise engineering talent—the same teams 
                      that built AWS and Azure—to produce documentation that passes U.S. VC due diligence.
                    </p>
                  </div>
                  <div className={styles.detailSection}>
                    <h4 className={styles.detailHeading}>Application Requirements</h4>
                    <ul className={styles.requirementList}>
                      <li>Live product with active users</li>
                      <li>Technical architecture documentation</li>
                      <li>GitHub/GitLab repository access (for review)</li>
                      <li>Technical team bios and backgrounds</li>
                      <li>5-minute technical demo video</li>
                    </ul>
                  </div>
                  <div className={styles.detailSection}>
                    <h4 className={styles.detailHeading}>Selection Criteria</h4>
                    <ul className={styles.criteriaList}>
                      <li>Technical innovation with enterprise potential</li>
                      <li>Architecture that can scale for U.S. enterprise requirements</li>
                      <li>Team&apos;s technical depth and willingness to iterate</li>
                      <li>Commitment to 20-25 hours/week for 4 weeks</li>
                    </ul>
                  </div>
                </div>
                <div className={styles.programDetailFooter}>
                  <Button href="#apply" variant="primary">Apply to ProductLab</Button>
                </div>
              </div>

              {/* Program 3 */}
              <div className={styles.programDetailCard}>
                <div className={styles.programDetailHeader}>
                  <h3 className={styles.programDetailTitle}>Pitch & Win</h3>
                  <div className={styles.programMeta}>
                    <span className={styles.metaPill}>4 Weeks</span>
                    <span className={styles.metaPill}>Next Cohort: April 10, 2026</span>
                  </div>
                </div>
                <div className={styles.programDetailBody}>
                  <div className={styles.detailSection}>
                    <h4 className={styles.detailHeading}>Who Should Apply</h4>
                    <p className={styles.detailText}>
                      International founders ready to raise from American VCs but need to translate their 
                      pitch for Sand Hill Road. We transform your narrative, connect you directly to our 
                      VC network (Graphene, Pegasus, Think Tank), and prepare you for Startup World Cup.
                    </p>
                  </div>
                  <div className={styles.detailSection}>
                    <h4 className={styles.detailHeading}>Application Requirements</h4>
                    <ul className={styles.requirementList}>
                      <li>$100K+ ARR or equivalent strong metrics</li>
                      <li>Current pitch deck (10-15 slides)</li>
                      <li>Financial model with projections</li>
                      <li>Cap table and current investors</li>
                      <li>Clear U.S. market expansion strategy</li>
                      <li>3-minute pitch video</li>
                    </ul>
                  </div>
                  <div className={styles.detailSection}>
                    <h4 className={styles.detailHeading}>Selection Criteria</h4>
                    <ul className={styles.criteriaList}>
                      <li>Demonstrated product-market fit in home market</li>
                      <li>Strong unit economics that translate to U.S. market</li>
                      <li>Compelling founder narrative for American investors</li>
                      <li>Commitment to 10-15 hours/week for 4 weeks</li>
                    </ul>
                  </div>
                </div>
                <div className={styles.programDetailFooter}>
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
              We move fast because you need to move fast. Our rolling admissions process 
              respects your time—no months of waiting, no bureaucratic delays.
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
                  We assess fit for your selected program.
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
                We&apos;re not the right fit for everyone—and that&apos;s intentional. We work deeply with a small 
                number of international founders rather than broadly with many. Book a 15-minute discovery 
                call to see if there&apos;s mutual fit.
              </p>
              <div className={styles.applicationForm}>
                <BookingWidget />
                <p className={styles.emailNote}>
                  Prefer email? Reach us at{' '}
                  <a href="mailto:jsong@seattlepartners.us" className={styles.emailLink}>
                    jsong@seattlepartners.us
                  </a>
                </p>
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
                <h3 className={styles.faqQuestion}>Can I apply to multiple programs?</h3>
                <p className={styles.faqAnswer}>
                  Yes, you can apply to multiple programs if you meet the prerequisites for each. 
                  We&apos;ll help you determine the best fit during the interview process. Some founders 
                  complete one program and later enroll in another.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What are the program fees?</h3>
                <p className={styles.faqAnswer}>
                  Program fees vary by program and are designed to be founder-friendly. 
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
                  and can assist with O-1 visa applications for founders planning longer U.S. stays.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Is there investment included?</h3>
                <p className={styles.faqAnswer}>
                  Investment is not automatic with program enrollment. However, Pitch & Win 
                  graduates have direct access to our VC network, and top performers across 
                  all programs are introduced to relevant investors.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What happens after the program?</h3>
                <p className={styles.faqAnswer}>
                  All graduates gain lifetime access to our alumni network, partner resources, 
                  and community events. You remain part of the Seattle Venture Labs ecosystem 
                  long after completing your program.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section section-gray">
          <div className="container">
            <div className={styles.cta}>
              <h2 className={styles.ctaTitle}>Build from Seattle. Raise in Silicon Valley.</h2>
              <p className={styles.ctaDescription}>
                You&apos;ve proven success in your home market. Now let us help you dominate the world&apos;s 
                largest market—with a U.S.-based co-founder who&apos;s done this before.
              </p>
              <a href="mailto:jsong@seattlepartners.us" className={styles.ctaButton}>
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
