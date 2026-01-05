import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import styles from './page.module.css'

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
          
          {/* World Map Animation - Refined Realistic Minimalist Map */}
          <div className={styles.worldMapSection}>
            <svg className={styles.worldMapSvg} viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
              {/* Refined realistic minimalist world map */}
              <g className={styles.mapOutline}>
                {/* North America */}
                <path d="M120,100 L140,90 L180,85 L220,100 L260,110 L280,140 L290,180 L270,220 L240,240 L210,230 L180,200 L150,180 L130,150 Z" fill="var(--color-gray-200)" />
                <path d="M240,240 L250,260 L245,280 L235,275 Z" fill="var(--color-gray-200)" /> {/* Central America */}
                
                {/* South America */}
                <path d="M245,280 L280,290 L310,320 L320,360 L310,420 L280,450 L250,430 L235,380 L230,320 Z" fill="var(--color-gray-200)" />
                
                {/* Greenland */}
                <path d="M320,60 L360,55 L380,80 L350,110 L310,100 Z" fill="var(--color-gray-200)" />
                
                {/* Europe */}
                <path d="M480,120 L520,110 L560,115 L580,140 L570,170 L530,180 L490,170 L470,140 Z" fill="var(--color-gray-200)" />
                <path d="M465,115 L480,105 L490,115 L475,125 Z" fill="var(--color-gray-200)" /> {/* UK/Ireland area */}
                
                {/* Africa */}
                <path d="M490,185 L550,180 L600,200 L630,240 L620,300 L580,380 L540,400 L510,380 L480,300 L470,240 Z" fill="var(--color-gray-200)" />
                <path d="M630,300 L650,310 L645,350 L620,340 Z" fill="var(--color-gray-200)" /> {/* Madagascar */}
                
                {/* Asia */}
                <path d="M580,120 L700,100 L850,110 L920,140 L940,200 L900,260 L800,280 L700,260 L600,240 L580,180 Z" fill="var(--color-gray-200)" />
                <path d="M700,260 L740,320 L780,310 L760,260 Z" fill="var(--color-gray-200)" /> {/* India area */}
                <path d="M850,280 L880,320 L920,310 L900,270 Z" fill="var(--color-gray-200)" /> {/* SE Asia area */}
                <path d="M880,180 L900,170 L910,190 L895,200 Z" fill="var(--color-gray-200)" /> {/* Korea/Japan area */}
                
                {/* Australia */}
                <path d="M820,350 L880,340 L920,370 L910,420 L850,440 L810,410 Z" fill="var(--color-gray-200)" />
              </g>
              
              {/* USA destination point (Seattle/West Coast) */}
              <circle cx="160" cy="140" r="10" fill="var(--color-primary)" className={styles.usaPoint}>
                <animate attributeName="r" values="10;15;10" dur="2s" repeatCount="indefinite"/>
              </circle>
              
              {/* Origin points with labels */}
              <g className={styles.originGroup}>
                <circle cx="895" cy="185" r="4" fill="var(--color-primary)" className={styles.originPoint}/>
                <text x="895" y="175" textAnchor="middle" fontSize="10" fill="var(--color-gray-700)" className={styles.locationLabel}>Korea</text>
              </g>
              
              <g className={styles.originGroup}>
                <circle cx="875" cy="290" r="4" fill="var(--color-primary)" className={styles.originPoint}/>
                <text x="875" y="280" textAnchor="middle" fontSize="10" fill="var(--color-gray-700)" className={styles.locationLabel}>Vietnam</text>
              </g>
              
              <g className={styles.originGroup}>
                <circle cx="475" cy="115" r="4" fill="var(--color-primary)" className={styles.originPoint}/>
                <text x="475" y="105" textAnchor="middle" fontSize="10" fill="var(--color-gray-700)" className={styles.locationLabel}>Dublin</text>
              </g>
              
              <g className={styles.originGroup}>
                <circle cx="560" cy="145" r="4" fill="var(--color-primary)" className={styles.originPoint}/>
                <text x="560" y="135" textAnchor="middle" fontSize="10" fill="var(--color-gray-700)" className={styles.locationLabel}>Moldova</text>
              </g>
              
              <g className={styles.originGroup}>
                <circle cx="490" cy="155" r="4" fill="var(--color-primary)" className={styles.originPoint}/>
                <text x="490" y="145" textAnchor="middle" fontSize="10" fill="var(--color-gray-700)" className={styles.locationLabel}>Spain</text>
              </g>
              
              <g className={styles.originGroup}>
                <circle cx="245" cy="265" r="4" fill="var(--color-primary)" className={styles.originPoint}/>
                <text x="245" y="255" textAnchor="middle" fontSize="10" fill="var(--color-gray-700)" className={styles.locationLabel}>Panama</text>
              </g>
              
              <g className={styles.originGroup}>
                <circle cx="260" cy="410" r="4" fill="var(--color-primary)" className={styles.originPoint}/>
                <text x="260" y="400" textAnchor="middle" fontSize="10" fill="var(--color-gray-700)" className={styles.locationLabel}>Chile</text>
              </g>
              
              <g className={styles.originGroup}>
                <circle cx="295" cy="340" r="4" fill="var(--color-primary)" className={styles.originPoint}/>
                <text x="295" y="330" textAnchor="middle" fontSize="10" fill="var(--color-gray-700)" className={styles.locationLabel}>Brazil</text>
              </g>
              
              <g className={styles.originGroup}>
                <circle cx="590" cy="260" r="4" fill="var(--color-primary)" className={styles.originPoint}/>
                <text x="590" y="250" textAnchor="middle" fontSize="10" fill="var(--color-gray-700)" className={styles.locationLabel}>Nairobi</text>
              </g>
              
              <g className={styles.originGroup}>
                <circle cx="560" cy="380" r="4" fill="var(--color-primary)" className={styles.originPoint}/>
                <text x="560" y="370" textAnchor="middle" fontSize="10" fill="var(--color-gray-700)" className={styles.locationLabel}>Cape Town</text>
              </g>
              
              <g className={styles.originGroup}>
                <circle cx="740" cy="290" r="4" fill="var(--color-primary)" className={styles.originPoint}/>
                <text x="740" y="280" textAnchor="middle" fontSize="10" fill="var(--color-gray-700)" className={styles.locationLabel}>India</text>
              </g>
              
              {/* Animated connection lines */}
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0"/>
                  <stop offset="50%" stopColor="var(--color-primary)" stopOpacity="0.6"/>
                  <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0"/>
                </linearGradient>
              </defs>
              
              {/* Connection paths */}
              <path id="pathKorea" d="M 895 185 Q 527 100 160 140" fill="none" stroke="url(#lineGradient)" strokeWidth="2" className={styles.connectionLine} opacity="0.4"/>
              <circle r="5" fill="var(--color-primary)" className={styles.travelDot}>
                <animateMotion dur="5s" repeatCount="indefinite"><mpath href="#pathKorea"/></animateMotion>
              </circle>
              
              <path id="pathVietnam" d="M 875 290 Q 517 215 160 140" fill="none" stroke="url(#lineGradient)" strokeWidth="2" className={styles.connectionLine} opacity="0.4"/>
              <circle r="5" fill="var(--color-primary)" className={styles.travelDot}>
                <animateMotion dur="5.5s" repeatCount="indefinite" begin="0.5s"><mpath href="#pathVietnam"/></animateMotion>
              </circle>
              
              <path id="pathDublin" d="M 475 115 Q 317 100 160 140" fill="none" stroke="url(#lineGradient)" strokeWidth="2" className={styles.connectionLine} opacity="0.4"/>
              <circle r="5" fill="var(--color-primary)" className={styles.travelDot}>
                <animateMotion dur="4s" repeatCount="indefinite" begin="1s"><mpath href="#pathDublin"/></animateMotion>
              </circle>
              
              <path id="pathMoldova" d="M 560 145 Q 360 120 160 140" fill="none" stroke="url(#lineGradient)" strokeWidth="2" className={styles.connectionLine} opacity="0.4"/>
              <circle r="5" fill="var(--color-primary)" className={styles.travelDot}>
                <animateMotion dur="4.5s" repeatCount="indefinite" begin="1.5s"><mpath href="#pathMoldova"/></animateMotion>
              </circle>
              
              <path id="pathSpain" d="M 490 155 Q 325 130 160 140" fill="none" stroke="url(#lineGradient)" strokeWidth="2" className={styles.connectionLine} opacity="0.4"/>
              <circle r="5" fill="var(--color-primary)" className={styles.travelDot}>
                <animateMotion dur="4.2s" repeatCount="indefinite" begin="2s"><mpath href="#pathSpain"/></animateMotion>
              </circle>
              
              <path id="pathPanama" d="M 245 265 Q 202 202 160 140" fill="none" stroke="url(#lineGradient)" strokeWidth="2" className={styles.connectionLine} opacity="0.4"/>
              <circle r="5" fill="var(--color-primary)" className={styles.travelDot}>
                <animateMotion dur="3s" repeatCount="indefinite" begin="2.5s"><mpath href="#pathPanama"/></animateMotion>
              </circle>
              
              <path id="pathChile" d="M 260 410 Q 210 275 160 140" fill="none" stroke="url(#lineGradient)" strokeWidth="2" className={styles.connectionLine} opacity="0.4"/>
              <circle r="5" fill="var(--color-primary)" className={styles.travelDot}>
                <animateMotion dur="4.8s" repeatCount="indefinite" begin="3s"><mpath href="#pathChile"/></animateMotion>
              </circle>
              
              <path id="pathBrazil" d="M 295 340 Q 227 240 160 140" fill="none" stroke="url(#lineGradient)" strokeWidth="2" className={styles.connectionLine} opacity="0.4"/>
              <circle r="5" fill="var(--color-primary)" className={styles.travelDot}>
                <animateMotion dur="4.3s" repeatCount="indefinite" begin="3.5s"><mpath href="#pathBrazil"/></animateMotion>
              </circle>
              
              <path id="pathNairobi" d="M 590 260 Q 375 200 160 140" fill="none" stroke="url(#lineGradient)" strokeWidth="2" className={styles.connectionLine} opacity="0.4"/>
              <circle r="5" fill="var(--color-primary)" className={styles.travelDot}>
                <animateMotion dur="5.2s" repeatCount="indefinite" begin="4s"><mpath href="#pathNairobi"/></animateMotion>
              </circle>
              
              <path id="pathCapeTown" d="M 560 380 Q 360 260 160 140" fill="none" stroke="url(#lineGradient)" strokeWidth="2" className={styles.connectionLine} opacity="0.4"/>
              <circle r="5" fill="var(--color-primary)" className={styles.travelDot}>
                <animateMotion dur="5.8s" repeatCount="indefinite" begin="4.5s"><mpath href="#pathCapeTown"/></animateMotion>
              </circle>
              
              <path id="pathIndia" d="M 740 290 Q 450 215 160 140" fill="none" stroke="url(#lineGradient)" strokeWidth="2" className={styles.connectionLine} opacity="0.4"/>
              <circle r="5" fill="var(--color-primary)" className={styles.travelDot}>
                <animateMotion dur="4.7s" repeatCount="indefinite" begin="5s"><mpath href="#pathIndia"/></animateMotion>
              </circle>
              
              {/* USA Label */}
              <text x="160" y="125" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--color-primary)" className={styles.usaLabel}>USA</text>
            </svg>
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
                  We don't just accelerate—we reconstruct. Our six-month program transforms your business foundation for American resilience, from legal structure to market narrative.
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

        {/* Portfolio Highlights */}
        <section className="section section-gray">
          <div className="container">
            <h2 className="section-title">Portfolio Highlights</h2>
            <div className={styles.portfolioGrid}>
              <div className={styles.portfolioCard}>
                <div className={styles.portfolioPlaceholder}>
                  <span>Company Logo</span>
                </div>
                <h3 className={styles.portfolioTitle}>From Seoul to Seattle</h3>
                <p className={styles.portfolioDescription}>
                  $2M Seed Secured • B2B SaaS • Enterprise Focus
                </p>
              </div>
              <div className={styles.portfolioCard}>
                <div className={styles.portfolioPlaceholder}>
                  <span>Company Logo</span>
                </div>
                <h3 className={styles.portfolioTitle}>From London to Los Angeles</h3>
                <p className={styles.portfolioDescription}>
                  $3.5M Series A • Deep Tech • Healthcare Innovation
                </p>
              </div>
              <div className={styles.portfolioCard}>
                <div className={styles.portfolioPlaceholder}>
                  <span>Company Logo</span>
                </div>
                <h3 className={styles.portfolioTitle}>From Berlin to Boston</h3>
                <p className={styles.portfolioDescription}>
                  $1.8M Seed • Logistics Tech • Supply Chain Solutions
                </p>
              </div>
            </div>
            <div className={styles.portfolioActions}>
              <Button href="/portfolio" variant="secondary" arrow>View Full Portfolio</Button>
            </div>
          </div>
        </section>

        {/* The Bridge Model */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">The Bridge Model</h2>
            <div className={styles.bridgeContent}>
              <p className={styles.bridgeIntro}>
                We believe that standard acceleration is insufficient for international startups. You do not need a class on how to pitch; you need a strategic overhaul of your narrative for the American ear. Our program is a six-month residency designed to strip away the localized constraints of your business model and rebuild it for infinite scalability.
              </p>
              <div className={styles.phaseGrid}>
                <div className={styles.phaseCard}>
                  <div className={styles.phaseNumber}>I</div>
                  <h3 className={styles.phaseTitle}>The Cultural & Legal Flip</h3>
                  <p className={styles.phaseDuration}>Weeks 1-8</p>
                  <p className={styles.phaseDescription}>
                    Establish your Delaware C-Corp, safeguard your IP, and transform your pitch from traction-based narratives to vision-based storytelling that Silicon Valley investors demand.
                  </p>
                </div>
                <div className={styles.phaseCard}>
                  <div className={styles.phaseNumber}>II</div>
                  <h3 className={styles.phaseTitle}>US Market Immersion</h3>
                  <p className={styles.phaseDuration}>Weeks 9-16</p>
                  <p className={styles.phaseDescription}>
                    Deploy into the US enterprise ecosystem. Our partners work alongside you to secure your first five US pilot contracts, leveraging Seattle's proximity to Microsoft and Amazon.
                  </p>
                </div>
                <div className={styles.phaseCard}>
                  <div className={styles.phaseNumber}>III</div>
                  <h3 className={styles.phaseTitle}>The Fundraising Circuit</h3>
                  <p className={styles.phaseDuration}>Weeks 17-24</p>
                  <p className={styles.phaseDescription}>
                    By now, you are a US company with global DNA. We curate exclusive sessions with partners from Sand Hill Road and Seattle's top firms, culminating in transition to our Alumni Forum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

