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
                Each track addresses a specific barrier international founders face when entering the U.S. market. 
                Our methodology: build your U.S. operations from Seattle (40% lower cost than Bay Area, world-class enterprise talent), 
                validate with our Pacific Northwest and California partner network, then access Silicon Valley capital when you're ready.
              </p>
              <div className={styles.tracksTable}>
                <table className={styles.programTable}>
                  <thead>
                    <tr>
                      <th>Program</th>
                      <th>Duration</th>
                      <th>Time Commitment</th>
                      <th>Deliverable</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Launchpad</td>
                      <td>12 weeks</td>
                      <td>15-20 hrs/week</td>
                      <td>B2C: 1K ~ 10K+ users | B2B: 2-5 pilot LOIs</td>
                    </tr>
                    <tr>
                      <td>ProductLab</td>
                      <td>4 weeks</td>
                      <td>20-25 hrs/week</td>
                      <td>Technical audit + Enterprise-grade PoC</td>
                    </tr>
                    <tr>
                      <td>Pitch & Win</td>
                      <td>4 weeks</td>
                      <td>10-15 hrs/week</td>
                      <td>Demo Day + 10+ investor meetings</td>
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

                <h2 className={styles.trackTitle}>Launchpad</h2>
                <p className={styles.trackSubtitle}>The GTM Sprint</p>
                <div className={styles.trackMeta}>
                  <span className={styles.duration}>12 Weeks</span>
                  <span className={styles.focus}>Market Validation</span>
                </div>
              </div>

              <div className={styles.trackContent}>
                <div className={styles.trackDescription}>
                  <h3 className={styles.subHeading}>What You&apos;ll Achieve</h3>
                  <p className={styles.narrative}>
                    Validate U.S. market demand through structured go-to-market execution. This 12-week program 
                    (15-20 hours/week commitment) follows different paths based on your business model:
                  </p>
                  <ul className={styles.pathList}>
                    <li><strong>B2C Founders:</strong> Build an engaged American audience of 10,000+ users through content marketing, influencer partnerships, and community building.</li>
                    <li><strong>B2B Founders:</strong> Secure 3-5 qualified enterprise pilot conversations with American companies, including warm introductions through our Seattle enterprise network (Microsoft, Amazon ecosystem partners).</li>
                  </ul>
                  <p className={styles.narrative}>
                    Top performers across both paths earn a showcase opportunity at Plug and Play Tech Center&apos;s AI Summit.
                  </p>
                </div>

                <div className={styles.curriculumGrid}>
                  <div className={styles.weekBlock}>
                    <div className={styles.weekHeader}>
                      <span className={styles.weekNumber}>Week 1-2</span>
                      <h4 className={styles.weekTitle}>U.S. Market Deep-Dive & ICP Definition</h4>
                    </div>
                    <ul className={styles.weekList}>
                      <li>Comprehensive U.S. market analysis with competitive positioning</li>
                      <li>Define Ideal Customer Profile (ICP) tailored to American buyers</li>
                      <li>B2C: Identify content channels and viral opportunities</li>
                      <li>B2B: Map target accounts and decision-maker personas</li>
                    </ul>
                  </div>

                  <div className={styles.weekBlock}>
                    <div className={styles.weekHeader}>
                      <span className={styles.weekNumber}>Week 3-4</span>
                      <h4 className={styles.weekTitle}>Channel Strategy & Outreach Setup</h4>
                    </div>
                    <ul className={styles.weekList}>
                      <li>B2C: Platform strategies for TikTok, Instagram, YouTube</li>
                      <li>B2B: LinkedIn outreach sequences and email campaigns</li>
                      <li>Set up tracking, attribution, and CRM infrastructure</li>
                      <li>Develop messaging that resonates with American audiences</li>
                    </ul>
                  </div>

                  <div className={styles.weekBlock}>
                    <div className={styles.weekHeader}>
                      <span className={styles.weekNumber}>Week 5-6</span>
                      <h4 className={styles.weekTitle}>Content Production & Warm Introductions</h4>
                    </div>
                    <ul className={styles.weekList}>
                      <li>B2C: Video production and influencer partnership execution</li>
                      <li>B2B: Partner-facilitated introductions to target accounts</li>
                      <li>Weekly pipeline reviews with SVL mentors</li>
                      <li>Iterate messaging based on early response data</li>
                    </ul>
                  </div>

                  <div className={styles.weekBlock}>
                    <div className={styles.weekHeader}>
                      <span className={styles.weekNumber}>Week 7-12</span>
                      <h4 className={styles.weekTitle}>Execution Sprint & Results Documentation</h4>
                    </div>
                    <ul className={styles.weekList}>
                      <li>B2C: Full campaign launch with real-time optimization</li>
                      <li>B2B: Close pilot conversations and secure LOIs</li>
                      <li>Document learnings and build repeatable playbook</li>
                      <li>Prepare investor-ready traction narrative</li>
                    </ul>
                  </div>
                </div>

                <div className={styles.trackOutcome}>
                  <div className={styles.outcomeCard}>
                    <h4 className={styles.outcomeTitle}>Deliverable</h4>
                    <p className={styles.outcomeText}>B2C: 1k ~ 10K+ users | B2B: 2-5 pilot LOIs + GTM playbook</p>
                  </div>
                  <div className={styles.outcomeCard}>
                    <h4 className={styles.outcomeTitle}>Seattle Advantage</h4>
                    <p className={styles.outcomeText}>Access to Microsoft/Amazon ecosystem partners for B2B pilots; PNW tech community for early adopters</p>
                  </div>
                  <div className={styles.outcomeCard}>
                    <h4 className={styles.outcomeTitle}>Mentors</h4>
                    <p className={styles.outcomeText}>Growth marketers, Enterprise sales leaders, Seattle-based BD executives from Fortune 500 tech</p>
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
                
                <h2 className={styles.trackTitle}>ProductLab</h2>
                <p className={styles.trackSubtitle}>The Technical Siege</p>
                <div className={styles.trackMeta}>
                  <span className={styles.duration}>4 Weeks</span>
                  <span className={styles.focus}>Technical Integrity</span>
                </div>
              </div>

              <div className={styles.trackContent}>
                <div className={styles.trackDescription}>
                  <h3 className={styles.subHeading}>What You&apos;ll Achieve</h3>
                  <p className={styles.narrative}>
                    Achieve technical credibility that passes American VC due diligence. This 4-week program 
                    (20-25 hours/week commitment) connects you with Seattle&apos;s enterprise engineering talent—
                    the same teams that built AWS, Azure, and enterprise platforms at Microsoft and Amazon. 
                    You&apos;ll produce investor-ready technical documentation and an architecture review that 
                    demonstrates enterprise-grade scalability.
                  </p>
                </div>

                <div className={styles.curriculumGrid}>
                  <div className={styles.weekBlock}>
                    <div className={styles.weekHeader}>
                      <span className={styles.weekNumber}>Week 1</span>
                      <h4 className={styles.weekTitle}>Customer Discovery & Product Discovery</h4>
                    </div>
                    <ul className={styles.weekList}>
                      <li>Define target customer segments and core pain points</li>
                      <li>Validate problem statements with stakeholder interviews</li>
                      <li>Refine product positioning for American enterprise buyers</li>
                      <li>Identify critical product assumptions to test</li>
                    </ul>
                  </div>

                  <div className={styles.weekBlock}>
                    <div className={styles.weekHeader}>
                      <span className={styles.weekNumber}>Week 2</span>
                      <h4 className={styles.weekTitle}>Business Model Assessment & Technical Architecture Assessment</h4>
                    </div>
                    <ul className={styles.weekList}>
                      <li>Review pricing, margins, and U.S. GTM assumptions</li>
                      <li>Assess enterprise readiness and procurement fit</li>
                      <li>Technical architecture review with Seattle enterprise engineers</li>
                      <li>Identify scalability, security, and compliance gaps</li>
                    </ul>
                  </div>

                  <div className={styles.weekBlock}>
                    <div className={styles.weekHeader}>
                      <span className={styles.weekNumber}>Week 3-4</span>
                      <h4 className={styles.weekTitle}>Validation & Documentation</h4>
                    </div>
                    <ul className={styles.weekList}>
                      <li>Validate solution fit with pilot users or design partners</li>
                      <li>Prepare technical documentation for investor due diligence</li>
                      <li>Document architecture decisions and scalability roadmap</li>
                      <li>Finalize validation summary and next-step plan</li>
                    </ul>
                  </div>
                </div>

                <div className={styles.trackOutcome}>
                  <div className={styles.outcomeCard}>
                    <h4 className={styles.outcomeTitle}>Deliverable</h4>
                    <p className={styles.outcomeText}>Enterprise-grade PoC + Technical due diligence package</p>
                  </div>
                  <div className={styles.outcomeCard}>
                    <h4 className={styles.outcomeTitle}>Seattle Advantage</h4>
                    <p className={styles.outcomeText}>Access to UW CoMotion Labs; mentorship from AWS/Microsoft/Amazon engineering leadership</p>
                  </div>
                  <div className={styles.outcomeCard}>
                    <h4 className={styles.outcomeTitle}>Mentors</h4>
                    <p className={styles.outcomeText}>Senior engineers from AWS, Microsoft, Stripe, Airbnb; Enterprise architects with Fortune 500 experience</p>
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
  
                <h2 className={styles.trackTitle}>Pitch & Win</h2>
                <p className={styles.trackSubtitle}>The Capital Bridge</p>
                <div className={styles.trackMeta}>
                  <span className={styles.duration}>4 Weeks</span>
                  <span className={styles.focus}>Capital Injection</span>
                </div>
              </div>

              <div className={styles.trackContent}>
                <div className={styles.trackDescription}>
                  <h3 className={styles.subHeading}>What You&apos;ll Achieve</h3>
                  <p className={styles.narrative}>
                    Secure investment from Silicon Valley&apos;s top VCs. This 4-week program transforms your pitch 
                    into an investor magnet, culminating in a Demo Day with private VC room sessions and 
                    preparation for the Startup World Cup regional stage—where winners compete for a $1M investment prize. 
                    Gain direct pipeline access to Think Tank VC (Menlo Park, near Stanford with 100+ VCs) 
                    and Graphene Ventures (early-stage investors in Lyft and Snapchat).
                  </p>
                </div>

                <div className={styles.curriculumGrid}>
                  <div className={styles.weekBlock}>
                    <div className={styles.weekHeader}>
                      <span className={styles.weekNumber}>Week 1</span>
                      <h4 className={styles.weekTitle}>Pitch Deck Refinement & Storytelling Workshop</h4>
                    </div>
                    <ul className={styles.weekList}>
                      <li>Deconstruct and rebuild your pitch narrative for American investors</li>
                      <li>Financial modeling and unit economics optimization</li>
                      <li>Competitive positioning and market sizing frameworks</li>
                      <li>Storytelling techniques that resonate with Sand Hill Road</li>
                    </ul>
                  </div>

                  <div className={styles.weekBlock}>
                    <div className={styles.weekHeader}>
                      <span className={styles.weekNumber}>Week 2</span>
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
                      <span className={styles.weekNumber}>Week 3</span>
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
                      <span className={styles.weekNumber}>Week 4</span>
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
              Build in Seattle, validate in the Pacific Northwest, then access Silicon Valley capital. 
              Our dual-region partner network gives you the best of both ecosystems.
            </p>
            <div className={styles.partnerGrid}>
              <div className={styles.partnerCard}>
                <h3 className={styles.partnerName}>UW CoMotion Labs</h3>
                <p className={styles.partnerDescription}>
                  Seattle&apos;s premier startup incubator at Startup Hall. Technical resources, 
                  lab space, and connections to University of Washington research talent.
                </p>
              </div>
              <div className={styles.partnerCard}>
                <h3 className={styles.partnerName}>Seattle Enterprise Network</h3>
                <p className={styles.partnerDescription}>
                  Access to Microsoft, Amazon, and 500+ cloud-first enterprises for pilot 
                  opportunities, partnerships, and B2B validation in the enterprise capital of tech.
                </p>
              </div>
              <div className={styles.partnerCard}>
                <h3 className={styles.partnerName}>Plug and Play Tech Center</h3>
                <p className={styles.partnerDescription}>
                  World&apos;s largest startup accelerator platform. Silicon Valley Summits, 
                  corporate partnerships, and AI Summit stage for top performers.
                </p>
              </div>
              <div className={styles.partnerCard}>
                <h3 className={styles.partnerName}>Think Tank VC</h3>
                <p className={styles.partnerDescription}>
                  Menlo Park venture hub near Stanford with 100+ VCs. 
                  Direct access through flagship events like The Venture Revolution.
                </p>
              </div>
              <div className={styles.partnerCard}>
                <h3 className={styles.partnerName}>Graphene Ventures</h3>
                <p className={styles.partnerDescription}>
                  Palo Alto-based VC with portfolio including Lyft and Snapchat. 
                  Early-stage focus on enterprise software and consumer technology.
                </p>
              </div>
              <div className={styles.partnerCard}>
                <h3 className={styles.partnerName}>Startup World Cup</h3>
                <p className={styles.partnerDescription}>
                  Global pitch competition across 60+ countries with $1M investment prize. 
                  Regional winners compete at the Grand Finale in San Francisco.
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
