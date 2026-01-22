import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './page.module.css'

const partners = {
  vcs: [
    {
      name: 'Graphene Ventures',
      logo: '/images/partners/graphene.svg',
      website: 'https://graphenevc.com',
      location: 'Palo Alto, CA',
      focus: 'Early-stage technology',
      description: 'Graphene Ventures is a Palo Alto-based venture capital firm with an exceptional track record in early-stage technology investments. Their portfolio includes landmark companies like Lyft and Snapchat, demonstrating their ability to identify transformative consumer and enterprise technologies before they hit mainstream adoption. For Seattle Venture Labs founders, Graphene provides direct access to Silicon Valley\'s most connected investor network and hands-on guidance from partners who have scaled companies from seed to IPO.',
      highlights: ['Lyft & Snapchat early investor', 'Consumer & enterprise tech focus', 'Seed to Series A investments']
    },
    {
      name: 'Pegasus Tech Ventures',
      logo: '/images/partners/pegasus.svg',
      website: 'https://pegasustechventures.com',
      location: 'San Jose, CA',
      focus: 'Global innovation',
      description: 'Pegasus Tech Ventures is a global venture capital firm and the organizer of Startup World Cup, the world\'s largest startup competition with regional events in 60+ countries. With offices across the U.S., Asia, and Europe, Pegasus specializes in cross-border investments and helping international founders navigate global expansion. Their $1M Grand Prize at Startup World Cup has become one of the most coveted prizes in the startup ecosystem.',
      highlights: ['Startup World Cup organizer ($1M prize)', '60+ country global network', 'Cross-border investment expertise']
    },
    {
      name: 'ShuckerVC',
      logo: '/images/partners/shuckervc.svg',
      website: 'https://www.shucker.vc/',
      location: 'Silicon Valley, CA',
      focus: 'B2B software',
      description: 'ShuckerVC invests in early-stage, U.S.-based B2B software startups alongside leading venture capital firms. What sets them apart is their unique support model: after investment, they dedicate a full-time Support Partner to manage back-office functions—bookkeeping, hiring, operations—allowing founders to focus entirely on product and customers. This model secures their place in oversubscribed rounds alongside top lead investors. They prefer technical founders targeting markets ripe for digital transformation.',
      highlights: ['Full-time Support Partner included', 'Technical founder focus', 'Co-invests with top VCs']
    },
    {
      name: 'Hico Ventures',
      logo: '/images/partners/hico.svg',
      website: 'https://hico.vc/hico-ventures/',
      location: 'Silicon Valley, CA',
      focus: 'AI & digital assets',
      description: 'Hico Ventures is an early-stage VC fund investing in AI and the digital asset space, aspiring to be the first institutional check in a startup\'s journey. "Hico" stands for High Conviction and Highly Collaborative—they overcome conviction scarcity by conducting rigorous due diligence and forming meaningful partnerships with a selective pool of companies. Though based in Silicon Valley, they are geography-agnostic investors. Their global platform provides post-investment support across business development, marketing, fundraising, and talent, backed by partnerships with SK Networks (F500 conglomerate) and Bow Capital (UC ecosystem fund).',
      highlights: ['$250K–$1M checks, leads rounds', 'SK Networks & Bow Capital network', 'AGI-focused AI thesis']
    }
  ],
  accelerators: [
    {
      name: 'Plug and Play Tech Center',
      logo: '/images/partners/plugandplay.svg',
      website: 'https://plugandplaytechcenter.com',
      location: 'Sunnyvale, CA',
      focus: 'Corporate innovation',
      description: 'Plug and Play is the world\'s largest startup accelerator platform, connecting early-stage companies with over 500 corporate partners including industry leaders in fintech, health, mobility, and enterprise tech. Their Sunnyvale headquarters hosts 50+ themed accelerator programs annually, and their global network spans 40+ locations worldwide. For Seattle Venture Labs founders, Plug and Play provides showcase opportunities at their AI Summit and direct introductions to Fortune 500 innovation teams.',
      highlights: ['500+ corporate partners', '40+ global locations', 'AI Summit showcase opportunities']
    },
    {
      name: 'UW CoMotion Labs',
      logo: '/images/partners/comotion.svg',
      website: 'https://comotion.uw.edu/startups-incubation/comotion-labs/comotion-labs-technology-incubator/',
      location: 'Seattle, WA',
      focus: 'Tech startup incubation',
      description: 'CoMotion Labs is a multi-industry incubator program hosting early-stage startups across four locations—three on UW campus and one in downtown Seattle. The Tech+ Incubator at Startup Hall supports startups in IT, software, AI/ML, fintech, edtech, and social impact. Members benefit from a robust network of mentors, investors, and peer startups, plus partner programs with Plug and Play, Founders Co-Op, and WTIA. Crucially, CoMotion Labs nurtures success without taking equity or IP—providing space, learning, mentoring, and networking entirely founder-friendly.',
      highlights: ['No equity or IP taken', 'Plug and Play partnership', '100+ desks, 6 conference rooms']
    }
  ],
  communities: [
    {
      name: 'AI Summit',
      logo: '/images/partners/aisummit.svg',
      website: 'https://techequity-ai.org/',
      location: 'Global events',
      focus: 'AI business applications',
      description: 'AI Summit is the world\'s leading event series dedicated to the practical business applications of artificial intelligence. Their conferences attract thousands of enterprise decision-makers, AI practitioners, and investors seeking to understand how AI transforms industries. Seattle Venture Labs\' top-performing founders earn showcase slots at AI Summit events, putting them in front of potential customers, partners, and investors actively seeking AI solutions.',
      highlights: ['10,000+ annual attendees', 'Enterprise AI decision-makers', 'Showcase stage for top founders']
    },
    {
      name: 'Startup World Cup',
      logo: '/images/partners/startupworldcup.svg',
      website: 'https://startupworldcup.io',
      location: 'San Francisco, CA',
      focus: 'Global pitch competition',
      description: 'Startup World Cup is the world\'s largest startup pitch competition, with regional events in over 60 countries leading to a Grand Finale in San Francisco. The competition offers a $1M investment prize and unparalleled exposure to global investors and corporate partners. Seattle Venture Labs\' Pitch & Win track prepares founders for regional competitions, and our partnership provides direct pathways to the Seattle regional finals.',
      highlights: ['$1M Grand Prize', '60+ country competition', 'Global investor exposure']
    },
    {
      name: 'TechEquity',
      logo: '/images/partners/techequity.svg',
      website: 'https://techequitycollaborative.org',
      location: 'San Francisco, CA',
      focus: 'Equitable tech economy',
      description: 'TechEquity works at the intersection of technology and policy to build a more equitable tech economy. They bring together technologists, policymakers, and community leaders to address systemic inequities in the industry. For Seattle Venture Labs, this partnership reflects our commitment to building an inclusive ecosystem where founders from all backgrounds can succeed in the U.S. market.',
      highlights: ['Policy & tech intersection', 'Inclusive ecosystem building', 'Community leadership']
    }
  ]
}

export default function Partners() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <h1 className={styles.pageTitle}>Our Partners</h1>
            <p className={styles.pageSubtitle}>
              We've built a curated network of venture capital firms, accelerators, and communities 
              that provide our founders with capital, customers, and connections to scale globally.
            </p>
          </div>
        </section>

        {/* Venture Capital */}
        <section className="section">
          <div className="container">
            <div className={styles.partnersSection}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Venture Capital</h2>
                <p className={styles.sectionSubtitle}>
                  Direct relationships with funds that understand international founders and cross-border expansion
                </p>
              </div>
              <div className={styles.grid}>
                {partners.vcs.map((partner) => (
                  <div key={partner.name} className={styles.partnerCard}>
                    <div className={styles.cardHeader}>
                      <div className={styles.logoContainer}>
                        <div className={styles.logoPlaceholder}>
                          {partner.name.split(' ').map(w => w[0]).join('')}
                        </div>
                      </div>
                      <div className={styles.headerInfo}>
                        <h3 className={styles.partnerName}>{partner.name}</h3>
                        <div className={styles.partnerMeta}>
                          <span className={styles.metaItem}>{partner.location}</span>
                          <span className={styles.metaDivider}>•</span>
                          <span className={styles.metaItem}>{partner.focus}</span>
                        </div>
                      </div>
                    </div>
                    <p className={styles.partnerDescription}>{partner.description}</p>
                    <div className={styles.highlights}>
                      {partner.highlights.map((highlight, idx) => (
                        <span key={idx} className={styles.highlightTag}>{highlight}</span>
                      ))}
                    </div>
                    <a href={partner.website} target="_blank" rel="noopener noreferrer" className={styles.partnerLink}>
                      Visit Website →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Accelerators & Incubators */}
        <section className="section section-gray">
          <div className="container">
            <div className={styles.partnersSection}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Accelerators & Incubators</h2>
                <p className={styles.sectionSubtitle}>
                  World-class programs and facilities that amplify our founders' growth trajectory
                </p>
              </div>
              <div className={styles.grid}>
                {partners.accelerators.map((partner) => (
                  <div key={partner.name} className={styles.partnerCard}>
                    <div className={styles.cardHeader}>
                      <div className={styles.logoContainer}>
                        <div className={styles.logoPlaceholder}>
                          {partner.name.split(' ').map(w => w[0]).join('').slice(0, 3)}
                        </div>
                      </div>
                      <div className={styles.headerInfo}>
                        <h3 className={styles.partnerName}>{partner.name}</h3>
                        <div className={styles.partnerMeta}>
                          <span className={styles.metaItem}>{partner.location}</span>
                          <span className={styles.metaDivider}>•</span>
                          <span className={styles.metaItem}>{partner.focus}</span>
                        </div>
                      </div>
                    </div>
                    <p className={styles.partnerDescription}>{partner.description}</p>
                    <div className={styles.highlights}>
                      {partner.highlights.map((highlight, idx) => (
                        <span key={idx} className={styles.highlightTag}>{highlight}</span>
                      ))}
                    </div>
                    <a href={partner.website} target="_blank" rel="noopener noreferrer" className={styles.partnerLink}>
                      Visit Website →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Communities */}
        <section className="section">
          <div className="container">
            <div className={styles.partnersSection}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Communities & Events</h2>
                <p className={styles.sectionSubtitle}>
                  Platforms that showcase our founders to investors, customers, and the global tech ecosystem
                </p>
              </div>
              <div className={styles.gridThree}>
                {partners.communities.map((partner) => (
                  <div key={partner.name} className={styles.partnerCard}>
                    <div className={styles.cardHeader}>
                      <div className={styles.logoContainer}>
                        <div className={styles.logoPlaceholder}>
                          {partner.name.split(' ').map(w => w[0]).join('').slice(0, 3)}
                        </div>
                      </div>
                      <div className={styles.headerInfo}>
                        <h3 className={styles.partnerName}>{partner.name}</h3>
                        <div className={styles.partnerMeta}>
                          <span className={styles.metaItem}>{partner.location}</span>
                          <span className={styles.metaDivider}>•</span>
                          <span className={styles.metaItem}>{partner.focus}</span>
                        </div>
                      </div>
                    </div>
                    <p className={styles.partnerDescription}>{partner.description}</p>
                    <div className={styles.highlights}>
                      {partner.highlights.map((highlight, idx) => (
                        <span key={idx} className={styles.highlightTag}>{highlight}</span>
                      ))}
                    </div>
                    <a href={partner.website} target="_blank" rel="noopener noreferrer" className={styles.partnerLink}>
                      Visit Website →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Become a Partner CTA */}
        <section className="section section-gray">
          <div className="container">
            <div className={styles.ctaSection}>
              <h2 className={styles.ctaTitle}>Become a Partner</h2>
              <p className={styles.ctaDescription}>
                We're always looking to expand our network with venture firms, accelerators, and communities 
                that share our mission of helping international founders succeed in the U.S. market.
              </p>
              <a href="mailto:jsong@seattlepartners.us" className={styles.ctaButton}>
                Contact Us About Partnership
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
