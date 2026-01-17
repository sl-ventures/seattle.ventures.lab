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
                For the world's most ambitious founders, Seattle Venture Labs is the definitive gateway to the US market and Tier-1 venture capital.
              </p>
              <p className={styles.heroNarrative}>
                You have conquered your local market. You have built a product that defies borders. But the chasm between regional success and global dominance is vast. Seattle Venture Labs exists to build that bridge. We do not just offer advice; we reconstruct your business foundation for American resilience. Situated in the cloud capital of the world, we act as your operational co-founder, transforming foreign disruptors into US venture-backed powerhouses.
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
            <div className={styles.valueGrid}>
              <div className={styles.valueCard}>
                <h3 className={styles.valueTitle}>The Bridge Model</h3>
                <p className={styles.valueDescription}>
                  Three distinct tracks to fundability. Whether you need market validation (Launchpad), technical credibility (ProductLab), or capital injection (Pitch & Win)—we have a proven path for you.
                </p>
              </div>
              <div className={styles.valueCard}>
                <h3 className={styles.valueTitle}>Fractional Co-founder</h3>
                <p className={styles.valueDescription}>
                  Our partners work alongside you as operational co-founders, securing your first US pilot contracts and force-multiplying your network through Seattle's enterprise ecosystem.
                </p>
              </div>
              <div className={styles.valueCard}>
                <h3 className={styles.valueTitle}>Tier-1 Access</h3>
                <p className={styles.valueDescription}>
                  Exclusive closed-door sessions with partners from Sand Hill Road and Seattle's top firms. This is not theater—these are high-stakes boardroom meetings for proven founders.
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
                We offer three distinct paths to fundability, each utilizing our Silicon Valley partner network as the ultimate "testing ground." Choose your track based on your startup's current stage and most pressing need—market validation, technical credibility, or capital injection.
              </p>
              <div className={styles.phaseGrid}>
                <div className={styles.phaseCard}>
                  <div className={styles.phaseNumber}>1</div>
                  <h3 className={styles.phaseTitle}>Launchpad</h3>
                  <p className={styles.phaseDuration}>8 Weeks • GTM Sprint</p>
                  <p className={styles.phaseDescription}>
                    Transform your product into a viral sensation. Acquire 10,000+ users through strategic SNS campaigns and video content. Top performers fast-track to AI Summit stage at Plug and Play Tech Center.
                  </p>
                  <span className={styles.phaseDeliverable}>→ 10,000+ users via SNS/Video</span>
                </div>
                <div className={styles.phaseCard}>
                  <div className={styles.phaseNumber}>2</div>
                  <h3 className={styles.phaseTitle}>ProductLab</h3>
                  <p className={styles.phaseDuration}>12 Weeks • Technical Siege</p>
                  <p className={styles.phaseDescription}>
                    Validate your technology to Silicon Valley standards. Work with ex-FAANG engineers to build a production-ready PoC that passes rigorous VC technical due diligence. Leverage UW CoMotion Labs resources.
                  </p>
                  <span className={styles.phaseDeliverable}>→ PoC & SV Engineering Audit</span>
                </div>
                <div className={styles.phaseCard}>
                  <div className={styles.phaseNumber}>3</div>
                  <h3 className={styles.phaseTitle}>Pitch & Win</h3>
                  <p className={styles.phaseDuration}>6 Weeks • Capital Bridge</p>
                  <p className={styles.phaseDescription}>
                    Secure investment from Silicon Valley's top VCs. Culminate in Demo Day with private VC room sessions. Prepare for Startup World Cup regional stage—compete for $1M investment prize.
                  </p>
                  <span className={styles.phaseDeliverable}>→ Demo Day + Private VC Room</span>
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

