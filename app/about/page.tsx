import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import styles from './page.module.css'

export default function About() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className="container">
            <h1 className={styles.pageTitle}>About Seattle Venture Labs</h1>
            <p className={styles.pageSubtitle}>
              The operational partner for international founders entering the U.S.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="section">
          <div className="container">
            <div className={styles.contentBlock}>
              <h2 className={styles.sectionHeading}>Our Mission</h2>
              <p className={styles.narrative}>
                Seattle Venture Labs helps international founders succeed in the world's largest market. We're not another accelerator offering advice and introductions—we're operational co-founders who work alongside you to solve the specific problems of U.S. market entry: navigating visa pathways, translating your pitch for American investors, landing enterprise pilot deals, and building the operational foundation for U.S. scale.
              </p>
            </div>
          </div>
        </section>

        {/* Seattle Advantage */}
        <section className="section section-gray" id="seattle-advantage">
          <div className="container">
            <h2 className="section-title">The Seattle Advantage</h2>
            <div className={styles.advantageContent}>
              <p className={styles.narrative}>
                While Silicon Valley is the bank, Seattle is the engine room. This city builds the infrastructure that runs the modern world. For an international founder, Seattle offers a unique strategic advantage: it is the geographic midpoint between the capital markets of the East and the innovation hubs of Asia. It is a city of builders, not just talkers. By basing your U.S. operations here, you gain access to the same talent pool that built AWS and Azure, while maintaining a cost of operation that allows your seed capital to extend significantly further than in the Bay Area.
              </p>
              <div className={styles.advantageGrid}>
                <div className={styles.advantageCard}>
                  <h3 className={styles.cardTitle}>Enterprise Access</h3>
                  <p className={styles.cardDescription}>
                    Proximity to Microsoft, Amazon, and other tech giants provides unparalleled opportunities for enterprise partnerships and pilot contracts.
                  </p>
                </div>
                <div className={styles.advantageCard}>
                  <h3 className={styles.cardTitle}>Talent Pool</h3>
                  <p className={styles.cardDescription}>
                    Access to the same engineering talent that built cloud infrastructure, AI platforms, and enterprise software at scale.
                  </p>
                </div>
                <div className={styles.advantageCard}>
                  <h3 className={styles.cardTitle}>Cost Efficiency</h3>
                  <p className={styles.cardDescription}>
                    Your seed capital goes further in Seattle than in the Bay Area, allowing you to build more runway and hire more aggressively.
                  </p>
                </div>
                <div className={styles.advantageCard}>
                  <h3 className={styles.cardTitle}>Geographic Bridge</h3>
                  <p className={styles.cardDescription}>
                    Strategic location between Asian markets and East Coast capital, making it ideal for cross-border operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Hubs */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Our Hubs</h2>
            <div className={styles.advantageContent}>
              <p className={styles.narrative}>
                Seattle Venture Labs operates across three strategic hubs, each designed to accelerate a
                different stage of growth for international founders.
              </p>
              <div className={styles.advantageGrid}>
                <div className={styles.advantageCard}>
                  <h3 className={styles.cardTitle}>Seattle</h3>
                  <p className={styles.cardDescription}>
                    Your operating base for building the core team, product, and enterprise traction with
                    access to world-class engineering talent and cloud infrastructure leaders.
                  </p>
                </div>
                <div className={styles.advantageCard}>
                  <h3 className={styles.cardTitle}>Silicon Valley</h3>
                  <p className={styles.cardDescription}>
                    The capital and partnership hub where founders deepen investor relationships, refine
                    fundraising narratives, and plug into the Bay Area venture ecosystem.
                  </p>
                </div>
                <div className={styles.advantageCard}>
                  <h3 className={styles.cardTitle}>Detroit</h3>
                  <p className={styles.cardDescription}>
                    The industrial and manufacturing corridor for pilots in mobility, logistics, and
                    advanced hardware—connecting founders to operators who scale real-world deployments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Leadership Team</h2>
            <div className={styles.teamGrid}>
              <div className={styles.teamCard}>
                <div className={styles.teamPhoto}>
                  <Image src="/images/team/el.png" alt="Ed Lee" fill />
                </div>
                <h3 className={styles.teamName}>Ed Lee</h3>
                <p className={styles.teamTitle}>Co-Founder, CEO</p>
                <p className={styles.teamBio}>
                  Ed has founded and co-founded multiple startups with two successful exits. Former CEO of KY Ventures in Korea, he specializes in identifying high-impact solutions for cross-border programs.
                </p>
                <div className={styles.teamSocial}>
                  <a href="https://www.linkedin.com/in/ed-lee-b61414115/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                </div>
              </div>
              <div className={styles.teamCard}>
                <div className={styles.teamPhoto}>
                  <Image src="/images/team/js.png" alt="Jaehee Song" fill />
                </div>
                <h3 className={styles.teamName}>Jaehee Song</h3>
                <p className={styles.teamTitle}>Co-Founder, Managing Partner</p>
                <p className={styles.teamBio}>
                  With over 20 years in data engineering and AI, Jaehee has scaled platforms for multiple successful startups as a founder and investor, helping companies navigate the U.S. market.
                </p>
                <div className={styles.teamSocial}>
                  <a href="https://www.linkedin.com/in/jaehee-song-b223002/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                </div>
              </div>
              <div className={styles.teamCard}>
                <div className={styles.teamPhoto}>
                  <Image src="/images/team/jimchoi.jpg" alt="Jim Choi" fill />
                </div>
                <h3 className={styles.teamName}>Jim Choi</h3>
                <p className={styles.teamTitle}>Associate Advisor</p>
                <p className={styles.teamBio}>
                  A business strategist with 12+ years in eClinical solutions and M&A, Jim bridges diverse business cultures across the U.S., EU, and Asia to foster growth for emerging companies.
                </p>
                <div className={styles.teamSocial}>
                  <a href="https://www.linkedin.com/in/jimchoi1/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                </div>
              </div>
              <div className={styles.teamCard}>
                <div className={styles.teamPhoto}>
                  <Image src="/images/team/leannle.jpeg" alt="LeAnn Le" fill />
                </div>
                <h3 className={styles.teamName}>LeAnn Lee</h3>
                <p className={styles.teamTitle}>Associate Consultant</p>
                <p className={styles.teamBio}>
                  A PhD Candidate at UW exploring Engineered Living Materials, LeAnn advises startups on U.S. market strategy, investor outreach, and high-profile innovation events.
                </p>
                <div className={styles.teamSocial}>
                  <a href="https://www.linkedin.com/in/leannle-uw/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                </div>
              </div>
            </div>
            <p className={styles.teamNote}>
              Our team combines deep venture capital experience with operational expertise in scaling international startups. We've been in your shoes—navigating visa complexities, understanding cultural nuances, and building bridges between markets.
            </p>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="section section-gray">
          <div className="container">
            <h2 className="section-title">What Makes Us Different</h2>
            <div className={styles.differentiatorGrid}>
              <div className={styles.differentiatorItem}>
                <h3 className={styles.differentiatorTitle}>Fractional Co-founder Model</h3>
                <p className={styles.differentiatorDescription}>
                  Traditional accelerators offer advice and introductions. We work alongside you as operational partners: 
                  joining your weekly standups, making calls on your behalf, helping close deals, and navigating 
                  the complexities of U.S. market entry. Think of us as a U.S.-based co-founder who's done this before.
                </p>
              </div>
              <div className={styles.differentiatorItem}>
                <h3 className={styles.differentiatorTitle}>International Founder Expertise</h3>
                <p className={styles.differentiatorDescription}>
                  Y Combinator, Techstars, and 500 Global treat all founders the same. We specialize in the unique 
                  challenges of cross-border expansion: visa pathways (B1/B2, O-1), corporate "flipping" to Delaware, 
                  cultural translation for American enterprise buyers, and positioning your story for American investors.
                </p>
              </div>
              <div className={styles.differentiatorItem}>
                <h3 className={styles.differentiatorTitle}>Seattle Operating Base</h3>
                <p className={styles.differentiatorDescription}>
                  Silicon Valley is where capital lives—but it's expensive and competitive. Seattle offers 
                  world-class enterprise talent (AWS, Microsoft), 40% lower operating costs, and access to 
                  the same investor networks through our Bay Area partners. Build here, raise there.
                </p>
              </div>
              <div className={styles.differentiatorItem}>
                <h3 className={styles.differentiatorTitle}>Selective Cohorts</h3>
                <p className={styles.differentiatorDescription}>
                  We work deeply with a small number of founders rather than broadly with many. 
                  This means real operational support, not just curriculum and demo day. 
                  Every accepted founder gets meaningful partner time and attention.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

