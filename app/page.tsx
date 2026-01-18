import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import styles from './page.module.css'

// Dynamically import InteractiveMap with SSR disabled
const InteractiveMap = dynamic(() => import('@/components/InteractiveMap'), {
  ssr: false,
  loading: () => <div className={styles.mapPlaceholder}>Loading map...</div>
})

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroBackground}>
            <div className={styles.heroPattern}></div>
            <div className={styles.heroGradient}></div>
          </div>
          
          {/* Interactive World Map */}
          <div className={styles.worldMapSection}>
            <InteractiveMap />
          </div>
          
          {/* Content Below Map */}
          <div className="container">
            <div className={styles.heroContent}>
              <h1 className={styles.heroHeadline}>
                The Bridge to Global Scale
              </h1>
              <p className={styles.heroSubheadline}>
                For international founders ready to dominate the world's largest market, Seattle Venture Labs is your operational co-founder for US market entry.
              </p>
              <p className={styles.heroNarrative}>
              You've proven your success in your local market. Now you're ready for America—the world’s largest consumer market and deepest capital pool. But international founders face unique challenges: visa complexity, cultural translation, enterprise sales cycles, and VC expectations. Seattle Venture Labs exists to solve these problems. Based in the cloud capital of the world—home to AWS and Azure—we work alongside you as fractional co-founders, not just advisors. We help you land your first U.S. enterprise pilots, refine your pitch for American investors, and transform your company into a U.S. venture-backed powerhouse.
              </p>
              <div className={styles.heroActions}>
                <Button href="/admissions" variant="primary" arrow>Apply Now</Button>
                <Button href="/program" variant="secondary">Learn More</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Why Seattle Venture Labs?</h2>
            <p className={styles.sectionIntro}>
              Unlike traditional accelerators that offer advice and introductions, we work alongside you as operational partners—solving the specific problems international founders face in the US market.
            </p>
            <div className={styles.valueGrid}>
              <div className={styles.valueCard}>
                <h3 className={styles.valueTitle}>Seattle: Your US Operating Base</h3>
                <p className={styles.valueDescription}>
                  While Silicon Valley is where capital lives, Seattle is where enterprise technology is built. Home to AWS, Microsoft, and hundreds of cloud-first enterprises, Seattle offers the talent, partnerships, and cost efficiency to build your US operations—at 40% less than the Bay Area.
                </p>
              </div>
              <div className={styles.valueCard}>
                <h3 className={styles.valueTitle}>Fractional Co-founder Model</h3>
                <p className={styles.valueDescription}>
                  We don't just advise—we execute. Our partners join your weekly standups, make introductions from their networks, help close your first US pilot deals, and navigate visa and legal complexities. Think of us as a US-based co-founder who's done this before.
                </p>
              </div>
              <div className={styles.valueCard}>
                <h3 className={styles.valueTitle}>International Founder Expertise</h3>
                <p className={styles.valueDescription}>
                  Generic accelerators treat all founders the same. We specialize in the unique challenges of cross-border expansion: cultural translation for US buyers, visa pathways, "flipping" corporate structure, and positioning your story for American investors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Bridge Model - 3 Tracks */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">The Bridge Model</h2>
            <div className={styles.bridgeContent}>
              <p className={styles.bridgeIntro}>
                Each track addresses a specific barrier international founders face in the US market. Build from Seattle, validate with enterprise partners, then access Silicon Valley capital through our investor network. Choose based on your startup's stage and most pressing need.
              </p>
              <div className={styles.phaseGrid}>
                <div className={styles.phaseCard}>
                  <div className={styles.phaseNumber}>1</div>
                  <h3 className={styles.phaseTitle}>Launchpad</h3>
                  <p className={styles.phaseDuration}>8 Weeks • GTM Sprint • 15-20 hrs/week</p>
                  <p className={styles.phaseDescription}>
                    Validate US market demand through structured go-to-market execution. B2C founders target 10K+ users via content marketing; B2B founders secure 3-5 qualified enterprise pilot conversations. Top performers earn AI Summit stage at Plug and Play.
                  </p>
                  <span className={styles.phaseDeliverable}>→ B2C: 10K+ users | B2B: 3-5 pilot LOIs</span>
                </div>
                <div className={styles.phaseCard}>
                  <div className={styles.phaseNumber}>2</div>
                  <h3 className={styles.phaseTitle}>ProductLab</h3>
                  <p className={styles.phaseDuration}>12 Weeks • Technical Validation • 20-25 hrs/week</p>
                  <p className={styles.phaseDescription}>
                    Achieve technical credibility that passes US VC due diligence. Work with Seattle's enterprise engineering talent—the same teams that built AWS and Azure—to produce investor-ready technical documentation and architecture reviews.
                  </p>
                  <span className={styles.phaseDeliverable}>→ Technical audit + Enterprise-grade PoC</span>
                </div>
                <div className={styles.phaseCard}>
                  <div className={styles.phaseNumber}>3</div>
                  <h3 className={styles.phaseTitle}>Pitch & Win</h3>
                  <p className={styles.phaseDuration}>6 Weeks • Investor Readiness • 10-15 hrs/week</p>
                  <p className={styles.phaseDescription}>
                    Transform your pitch for American investors. Intensive coaching from active VCs, culminating in Demo Day with private investor meetings. Top performers compete in Startup World Cup for $1M investment prize.
                  </p>
                  <span className={styles.phaseDeliverable}>→ Demo Day + 10+ investor meetings</span>
                </div>
              </div>
              <div className={styles.bridgeActions}>
                <Button href="/program" variant="secondary" arrow>Explore All Tracks</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

