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
            <h1 className={styles.pageTitle}>Program Tracks</h1>
            <p className={styles.pageSubtitle}>
              Three distinct paths to fundability, utilizing our partners as the &quot;testing ground.&quot;
            </p>
          </div>
        </section>

        {/* Program Overview */}
        <section className="section">
          <div className="container">
            <div className={styles.contentBlock}>
              <h2 className={styles.sectionHeading}>Program Overview</h2>
              <p className={styles.narrative}>
                Each track is designed to address a specific challenge in your journey to US market success. 
                Whether you need market validation, technical credibility, or capital injection, 
                we have a structured program to get you there—backed by our Silicon Valley partner network.
              </p>
              <div className={styles.tracksTable}>
                <table className={styles.programTable}>
                  <thead>
                    <tr>
                      <th>Track</th>
                      <th>Program</th>
                      <th>Duration</th>
                      <th>Objective</th>
                      <th>Deliverable</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Track 1</td>
                      <td>Launchpad</td>
                      <td>8 weeks</td>
                      <td>Market Validation</td>
                      <td>10,000+ users via SNS/Video</td>
                    </tr>
                    <tr>
                      <td>Track 2</td>
                      <td>ProductLab</td>
                      <td>12 weeks</td>
                      <td>Technical Integrity</td>
                      <td>PoC & SV Engineering Audit</td>
                    </tr>
                    <tr>
                      <td>Track 3</td>
                      <td>Pitch & Win</td>
                      <td>6 weeks</td>
                      <td>Capital Injection</td>
                      <td>Demo Day + Private VC Room</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Track 1: Launchpad */}
        <section className="section section-gray" id="track-1">
          <div className="container">
            <div className={styles.trackSection}>
              <div className={styles.trackHeader}>
                <span className={styles.trackLabel}>Track 1</span>
                <h2 className={styles.trackTitle}>Launchpad</h2>
                <p className={styles.trackSubtitle}>The GTM Sprint</p>
                <div className={styles.trackMeta}>
                  <span className={styles.duration}>8 Weeks</span>
                  <span className={styles.focus}>Market Validation</span>
                </div>
              </div>

              <div className={styles.trackContent}>
                <div className={styles.trackDescription}>
                  <h3 className={styles.subHeading}>What You&apos;ll Achieve</h3>
                  <p className={styles.narrative}>
                    Transform your product into a viral sensation. This intensive 8-week sprint focuses on 
                    acquiring your first 10,000+ users through strategic SNS campaigns and viral video content. 
                    Top performers are fast-tracked to the AI Summit stage at Plug and Play Tech Center 
                    for immediate market exposure to Silicon Valley&apos;s top investors and corporates.
                  </p>
                </div>

                <div className={styles.curriculumGrid}>
                  <div className={styles.weekBlock}>
                    <div className={styles.weekHeader}>
                      <span className={styles.weekNumber}>Week 1-2</span>
                      <h4 className={styles.weekTitle}>Market Research & ICP Definition</h4>
                    </div>
                    <ul className={styles.weekList}>
                      <li>Deep-dive into US market dynamics and competitor analysis</li>
                      <li>Define your Ideal Customer Profile (ICP) for the American market</li>
                      <li>Identify viral content opportunities in your niche</li>
                      <li>Set up analytics and tracking infrastructure</li>
                    </ul>
                  </div>

                  <div className={styles.weekBlock}>
                    <div className={styles.weekHeader}>
                      <span className={styles.weekNumber}>Week 3-4</span>
                      <h4 className={styles.weekTitle}>Content Strategy & SNS Campaign Setup</h4>
                    </div>
                    <ul className={styles.weekList}>
                      <li>Develop platform-specific content strategies (TikTok, Instagram, YouTube)</li>
                      <li>Create content calendar with viral hooks and trends</li>
                      <li>Set up paid campaign infrastructure and A/B testing frameworks</li>
                      <li>Influencer outreach and partnership development</li>
                    </ul>
                  </div>

                  <div className={styles.weekBlock}>
                    <div className={styles.weekHeader}>
                      <span className={styles.weekNumber}>Week 5-6</span>
                      <h4 className={styles.weekTitle}>Viral Video Production</h4>
                    </div>
                    <ul className={styles.weekList}>
                      <li>Professional video production for TikTok, YouTube Shorts, Instagram Reels</li>
                      <li>Hook optimization and engagement maximization techniques</li>
                      <li>User-generated content (UGC) campaign launch</li>
                      <li>Cross-platform content adaptation and distribution</li>
                    </ul>
                  </div>

                  <div className={styles.weekBlock}>
                    <div className={styles.weekHeader}>
                      <span className={styles.weekNumber}>Week 7-8</span>
                      <h4 className={styles.weekTitle}>Campaign Execution & User Acquisition</h4>
                    </div>
                    <ul className={styles.weekList}>
                      <li>Full-scale campaign launch across all platforms</li>
                      <li>Real-time optimization based on performance data</li>
                      <li>Community building and engagement automation</li>
                      <li>Conversion funnel optimization and retention strategies</li>
                    </ul>
                  </div>
                </div>

                <div className={styles.trackOutcome}>
                  <div className={styles.outcomeCard}>
                    <h4 className={styles.outcomeTitle}>Deliverable</h4>
                    <p className={styles.outcomeText}>10,000+ users/followers via organic and paid SNS campaigns</p>
                  </div>
                  <div className={styles.outcomeCard}>
                    <h4 className={styles.outcomeTitle}>Partner Integration</h4>
                    <p className={styles.outcomeText}>Top performers fast-tracked to AI Summit stage at Plug and Play Tech Center</p>
                  </div>
                  <div className={styles.outcomeCard}>
                    <h4 className={styles.outcomeTitle}>Mentors</h4>
                    <p className={styles.outcomeText}>Growth hackers, Content creators, Digital marketing experts from leading US agencies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Track 2: ProductLab */}
        <section className="section" id="track-2">
          <div className="container">
            <div className={styles.trackSection}>
              <div className={styles.trackHeader}>
                <span className={styles.trackLabel}>Track 2</span>
                <h2 className={styles.trackTitle}>ProductLab</h2>
                <p className={styles.trackSubtitle}>The Technical Siege</p>
                <div className={styles.trackMeta}>
                  <span className={styles.duration}>12 Weeks</span>
                  <span className={styles.focus}>Technical Integrity</span>
                </div>
              </div>

              <div className={styles.trackContent}>
                <div className={styles.trackDescription}>
                  <h3 className={styles.subHeading}>What You&apos;ll Achieve</h3>
                  <p className={styles.narrative}>
                    Validate your technology to Silicon Valley standards. This 12-week intensive program 
                    pairs you with ex-FAANG engineers and product managers from unicorn startups to 
                    build a production-ready Proof of Concept that passes the rigorous technical due diligence 
                    of top-tier VCs. Leverage UW CoMotion Labs resources and validate locally through 
                    the Los Altos and Blaine business ecosystems.
                  </p>
                </div>

                <div className={styles.curriculumGrid}>
                  <div className={styles.weekBlock}>
                    <div className={styles.weekHeader}>
                      <span className={styles.weekNumber}>Week 1-4</span>
                      <h4 className={styles.weekTitle}>Technical Architecture Review & PoC Development</h4>
                    </div>
                    <ul className={styles.weekList}>
                      <li>Comprehensive technical architecture assessment</li>
                      <li>Scalability and security audit by SV engineers</li>
                      <li>PoC scope definition with clear success metrics</li>
                      <li>Development sprint planning and milestone setting</li>
                    </ul>
                  </div>

                  <div className={styles.weekBlock}>
                    <div className={styles.weekHeader}>
                      <span className={styles.weekNumber}>Week 5-8</span>
                      <h4 className={styles.weekTitle}>SV Engineering Audit</h4>
                    </div>
                    <ul className={styles.weekList}>
                      <li>Code review sessions with Silicon Valley PMs and Engineers</li>
                      <li>Performance optimization and technical debt reduction</li>
                      <li>Cloud infrastructure optimization (AWS/GCP/Azure)</li>
                      <li>API design and documentation to enterprise standards</li>
                    </ul>
                  </div>

                  <div className={styles.weekBlock}>
                    <div className={styles.weekHeader}>
                      <span className={styles.weekNumber}>Week 9-12</span>
                      <h4 className={styles.weekTitle}>Product Iteration & Market Validation</h4>
                    </div>
                    <ul className={styles.weekList}>
                      <li>Beta testing with pilot customers in Los Altos ecosystem</li>
                      <li>Feedback integration and rapid iteration cycles</li>
                      <li>Technical documentation for investor due diligence</li>
                      <li>Production readiness certification</li>
                    </ul>
                  </div>
                </div>

                <div className={styles.trackOutcome}>
                  <div className={styles.outcomeCard}>
                    <h4 className={styles.outcomeTitle}>Deliverable</h4>
                    <p className={styles.outcomeText}>Production-ready PoC with SV-standard technical documentation</p>
                  </div>
                  <div className={styles.outcomeCard}>
                    <h4 className={styles.outcomeTitle}>Partner Integration</h4>
                    <p className={styles.outcomeText}>UW CoMotion Labs / Startup Hall for technical resources; Los Altos & Blaine business ecosystem for local validation</p>
                  </div>
                  <div className={styles.outcomeCard}>
                    <h4 className={styles.outcomeTitle}>Mentors</h4>
                    <p className={styles.outcomeText}>Ex-FAANG engineers, Product managers from unicorn startups (Stripe, Airbnb, Uber alumni)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Track 3: Pitch & Win */}
        <section className="section section-gray" id="track-3">
          <div className="container">
            <div className={styles.trackSection}>
              <div className={styles.trackHeader}>
                <span className={styles.trackLabel}>Track 3</span>
                <h2 className={styles.trackTitle}>Pitch & Win</h2>
                <p className={styles.trackSubtitle}>The Capital Bridge</p>
                <div className={styles.trackMeta}>
                  <span className={styles.duration}>6 Weeks</span>
                  <span className={styles.focus}>Capital Injection</span>
                </div>
              </div>

              <div className={styles.trackContent}>
                <div className={styles.trackDescription}>
                  <h3 className={styles.subHeading}>What You&apos;ll Achieve</h3>
                  <p className={styles.narrative}>
                    Secure investment from Silicon Valley&apos;s top VCs. This 6-week program transforms your pitch 
                    into an investor magnet, culminating in a Demo Day with private VC room sessions and 
                    preparation for the Startup World Cup regional stage—where winners compete for a $1M investment prize. 
                    Gain direct pipeline access to Think Tank VC (Menlo Park, near Stanford with 100+ VCs) 
                    and Graphene Ventures (early-stage investors in Lyft and Snapchat).
                  </p>
                </div>

                <div className={styles.curriculumGrid}>
                  <div className={styles.weekBlock}>
                    <div className={styles.weekHeader}>
                      <span className={styles.weekNumber}>Week 1-2</span>
                      <h4 className={styles.weekTitle}>Pitch Deck Refinement & Storytelling Workshop</h4>
                    </div>
                    <ul className={styles.weekList}>
                      <li>Deconstruct and rebuild your pitch narrative for US investors</li>
                      <li>Financial modeling and unit economics optimization</li>
                      <li>Competitive positioning and market sizing frameworks</li>
                      <li>Storytelling techniques that resonate with Sand Hill Road</li>
                    </ul>
                  </div>

                  <div className={styles.weekBlock}>
                    <div className={styles.weekHeader}>
                      <span className={styles.weekNumber}>Week 3-4</span>
                      <h4 className={styles.weekTitle}>Mock Pitch Sessions with VCs</h4>
                    </div>
                    <ul className={styles.weekList}>
                      <li>Weekly mock pitches with active VC partners</li>
                      <li>Q&A drilling and objection handling</li>
                      <li>Body language and presentation coaching</li>
                      <li>Term sheet negotiation fundamentals</li>
                    </ul>
                  </div>

                  <div className={styles.weekBlock}>
                    <div className={styles.weekHeader}>
                      <span className={styles.weekNumber}>Week 5</span>
                      <h4 className={styles.weekTitle}>Demo Day + Private VC Room Sessions</h4>
                    </div>
                    <ul className={styles.weekList}>
                      <li>Public Demo Day presentation (6 min pitch + 6 min Q&A)</li>
                      <li>Private 1:1 sessions with interested investors</li>
                      <li>Warm introductions to fund partners</li>
                      <li>Follow-up strategy and investor CRM setup</li>
                    </ul>
                  </div>

                  <div className={styles.weekBlock}>
                    <div className={styles.weekHeader}>
                      <span className={styles.weekNumber}>Week 6</span>
                      <h4 className={styles.weekTitle}>Startup World Cup Regional Competition Prep</h4>
                    </div>
                    <ul className={styles.weekList}>
                      <li>Competition-specific pitch optimization</li>
                      <li>Stage presence and high-pressure performance training</li>
                      <li>Regional finals preparation (chance for $1M grand prize)</li>
                      <li>Post-competition investor follow-up playbook</li>
                    </ul>
                  </div>
                </div>

                <div className={styles.trackOutcome}>
                  <div className={styles.outcomeCard}>
                    <h4 className={styles.outcomeTitle}>Deliverable</h4>
                    <p className={styles.outcomeText}>Demo Day presentation + Private VC meetings + Startup World Cup regional entry</p>
                  </div>
                  <div className={styles.outcomeCard}>
                    <h4 className={styles.outcomeTitle}>Partner Integration</h4>
                    <p className={styles.outcomeText}>Think Tank VC (Menlo Park), Graphene Ventures (invested in Lyft, Snapchat), Startup World Cup ($1M prize)</p>
                  </div>
                  <div className={styles.outcomeCard}>
                    <h4 className={styles.outcomeTitle}>Mentors</h4>
                    <p className={styles.outcomeText}>Active VC partners, Serial entrepreneurs with successful exits, Investment bankers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Network */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Our Partner Network</h2>
            <p className={styles.partnerIntro}>
              Every track is powered by our curated network of Silicon Valley partners, 
              ensuring you get real-world exposure and connections that matter.
            </p>
            <div className={styles.partnerGrid}>
              <div className={styles.partnerCard}>
                <h3 className={styles.partnerName}>Plug and Play Tech Center</h3>
                <p className={styles.partnerDescription}>
                  World&apos;s largest startup accelerator platform. Access to Silicon Valley Summits, 
                  corporate partnerships, and the AI Summit stage for top performers.
                </p>
              </div>
              <div className={styles.partnerCard}>
                <h3 className={styles.partnerName}>Think Tank VC</h3>
                <p className={styles.partnerDescription}>
                  Menlo Park venture hub just 1 mile from Stanford. Direct access to 100+ VCs 
                  and flagship events like The Venture Revolution.
                </p>
              </div>
              <div className={styles.partnerCard}>
                <h3 className={styles.partnerName}>Graphene Ventures</h3>
                <p className={styles.partnerDescription}>
                  Palo Alto-based VC with portfolio including Lyft and Snapchat. 
                  Focus on early-stage tech across enterprise software and consumer technology.
                </p>
              </div>
              <div className={styles.partnerCard}>
                <h3 className={styles.partnerName}>Startup World Cup</h3>
                <p className={styles.partnerDescription}>
                  Global pitch competition across 60+ countries with $1M investment prize. 
                  Regional winners compete at the Grand Finale in San Francisco.
                </p>
              </div>
              <div className={styles.partnerCard}>
                <h3 className={styles.partnerName}>UW CoMotion Labs</h3>
                <p className={styles.partnerDescription}>
                  Seattle&apos;s premier startup incubator at Startup Hall. Multi-industry labs 
                  for Software, Biotech, Medtech, IT, and Fintech startups.
                </p>
              </div>
              <div className={styles.partnerCard}>
                <h3 className={styles.partnerName}>Los Altos Chamber of Commerce</h3>
                <p className={styles.partnerDescription}>
                  Heart of Silicon Valley business community. Local validation opportunities 
                  and connections to established enterprises in the Bay Area.
                </p>
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
                Choose your track and start your journey to Silicon Valley success. 
                Rolling admissions available for all programs.
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
