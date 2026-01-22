'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './page.module.css'

// Sample portfolio data - in production, this would come from a CMS or API
const portfolioCompanies = [
  {
    id: 1,
    name: 'TechCorp Seoul',
    origin: 'Seoul, South Korea',
    sector: 'B2B SaaS',
    funding: '$2M Seed',
    description: 'Enterprise software solutions for global teams',
    logo: 'Company Logo'
  },
  {
    id: 2,
    name: 'DeepTech London',
    origin: 'London, UK',
    sector: 'Deep Tech',
    funding: '$3.5M Series A',
    description: 'Healthcare innovation through AI and machine learning',
    logo: 'Company Logo'
  },
  {
    id: 3,
    name: 'LogiFlow Berlin',
    origin: 'Berlin, Germany',
    sector: 'Logistics',
    funding: '$1.8M Seed',
    description: 'Supply chain optimization for e-commerce',
    logo: 'Company Logo'
  },
  {
    id: 4,
    name: 'CloudSync Tokyo',
    origin: 'Tokyo, Japan',
    sector: 'B2B SaaS',
    funding: '$2.5M Seed',
    description: 'Cloud infrastructure management platform',
    logo: 'Company Logo'
  },
  {
    id: 5,
    name: 'DataVault Singapore',
    origin: 'Singapore',
    sector: 'Enterprise SaaS',
    funding: '$4M Series A',
    description: 'Enterprise data security and compliance',
    logo: 'Company Logo'
  },
  {
    id: 6,
    name: 'MedTech Tel Aviv',
    origin: 'Tel Aviv, Israel',
    sector: 'Healthcare',
    funding: '$3M Seed',
    description: 'Medical device innovation for remote care',
    logo: 'Company Logo'
  }
]

const sectors = ['All', 'B2B SaaS', 'Deep Tech', 'Logistics', 'Enterprise SaaS', 'Healthcare']
const countries = ['All', 'South Korea', 'UK', 'Germany', 'Japan', 'Singapore', 'Israel']

export default function Portfolio() {
  const [selectedSector, setSelectedSector] = useState('All')
  const [selectedCountry, setSelectedCountry] = useState('All')

  const filteredCompanies = portfolioCompanies.filter(company => {
    const sectorMatch = selectedSector === 'All' || company.sector === selectedSector
    const countryMatch = selectedCountry === 'All' || 
      company.origin.toLowerCase().includes(selectedCountry.toLowerCase())
    return sectorMatch && countryMatch
  })

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className="container">
            <h1 className={styles.pageTitle}>Portfolio</h1>
            <p className={styles.pageSubtitle}>
              International startups bridging to U.S. scale
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="section">
          <div className="container">
            <div className={styles.filters}>
              <div className={styles.filterGroup}>
                <label className={styles.filterLabel}>Filter by Sector</label>
                <div className={styles.filterButtons}>
                  {sectors.map(sector => (
                    <button
                      key={sector}
                      className={`${styles.filterButton} ${selectedSector === sector ? styles.active : ''}`}
                      onClick={() => setSelectedSector(sector)}
                    >
                      {sector}
                    </button>
                  ))}
                </div>
              </div>
              <div className={styles.filterGroup}>
                <label className={styles.filterLabel}>Filter by Country</label>
                <div className={styles.filterButtons}>
                  {countries.map(country => (
                    <button
                      key={country}
                      className={`${styles.filterButton} ${selectedCountry === country ? styles.active : ''}`}
                      onClick={() => setSelectedCountry(country)}
                    >
                      {country}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="section section-gray">
          <div className="container">
            <div className={styles.portfolioGrid}>
              {filteredCompanies.map(company => (
                <div key={company.id} className={styles.portfolioCard}>
                  <div className={styles.portfolioLogo}>
                    <span>{company.logo}</span>
                  </div>
                  <div className={styles.portfolioContent}>
                    <h3 className={styles.companyName}>{company.name}</h3>
                    <p className={styles.companyOrigin}>{company.origin}</p>
                    <div className={styles.companyTags}>
                      <span className={styles.tag}>{company.sector}</span>
                      <span className={styles.tag}>{company.funding}</span>
                    </div>
                    <p className={styles.companyDescription}>{company.description}</p>
                  </div>
                </div>
              ))}
            </div>
            {filteredCompanies.length === 0 && (
              <div className={styles.noResults}>
                <p>No companies found matching your filters.</p>
              </div>
            )}
          </div>
        </section>

        {/* Interactive Map Note */}
        <section className="section">
          <div className="container">
            <div className={styles.mapNote}>
              <h2 className={styles.mapTitle}>Interactive Portfolio Map</h2>
              <p className={styles.mapDescription}>
                Coming soon: A visual WebGL globe showing the origin of each startup and their expansion into the U.S. 
                Hover states will display startup logos and "bridged" metrics like "From Seoul to Seattle: $2M Seed Secured."
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

