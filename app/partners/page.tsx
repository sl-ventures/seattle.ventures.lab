import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './page.module.css'

const partners = {
  vcs: [
    {
      name: 'ShuckerVC',
      description: 'Invests in early-stage B2B software startups alongside leading venture capital firms, providing hands-on operational support.'
    },
    {
      name: 'Graphene Ventures',
      description: 'A venture capital firm focused on early-stage technology companies in enterprise software and consumer technology.'
    },
    {
      name: 'Hico Ventures',
      description: 'Focuses on early-stage startups solving big problems using artificial intelligence and/or blockchain technology.'
    },
    {
      name: 'TechEquity',
      description: 'Works at the intersection of technology and policy to build a more equitable tech economy and address inequities in the industry.'
    }
  ],
  accelerators: [
    {
      name: 'Plug and Play',
      description: 'A global innovation platform and startup accelerator connecting startups to major corporations and investors worldwide.'
    },
    {
      name: 'UW CoMotion Startup Hall',
      description: 'A multi-industry labs system at the University of Washington that serves as a bridge between academia and industry, hosting startups from both the UW community and beyond.'
    }
  ],
  communities: [
    {
      name: 'AI Summit',
      description: 'A global event series and community dedicated to the practical business applications of AI, fostering education and collaboration.'
    },
    {
      name: 'Los Altos Chamber of Commerce',
      description: 'Supports local business growth and provides networking and advocacy in the Silicon Valley region.'
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
              Collaborating with leading venture firms, accelerators, and communities to scale global innovation.
            </p>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="section">
          <div className="container">
            <div className={styles.partnersSection}>
              <h2 className={styles.sectionTitle}>Venture Capital</h2>
              <div className={styles.grid}>
                {partners.vcs.map((partner) => (
                  <div key={partner.name} className={styles.partnerCard}>
                    <h3 className={styles.partnerName}>{partner.name}</h3>
                    <p className={styles.partnerDescription}>{partner.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.partnersSection}>
              <h2 className={styles.sectionTitle}>Accelerators & Incubators</h2>
              <div className={styles.grid}>
                {partners.accelerators.map((partner) => (
                  <div key={partner.name} className={styles.partnerCard}>
                    <h3 className={styles.partnerName}>{partner.name}</h3>
                    <p className={styles.partnerDescription}>{partner.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.partnersSection}>
              <h2 className={styles.sectionTitle}>Communities</h2>
              <div className={styles.grid}>
                {partners.communities.map((partner) => (
                  <div key={partner.name} className={styles.partnerCard}>
                    <h3 className={styles.partnerName}>{partner.name}</h3>
                    <p className={styles.partnerDescription}>{partner.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

