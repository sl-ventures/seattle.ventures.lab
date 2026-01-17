'use client'

import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import styles from './InteractiveMap.module.css'

// Fix for default marker icons in Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
})

interface Partner {
  lat: number
  lng: number
  name: string
  labelDir: 'top' | 'bottom' | 'left' | 'right'
  labelOffset: [number, number]
}

export default function InteractiveMap() {
  const mapRef = useRef<L.Map | null>(null)
  const mapContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return

    // USA coordinates (center of continental US)
    const usa = { lat: 39.8283, lng: -98.5795, name: "United States" }

    // Partner countries with coordinates
    // Asian countries: wrap around to show on the right side (subtract 360 from longitude)
    const partners: Partner[] = [
      // Asia (wrapped to appear on right)
      { lat: 35.9078, lng: 127.7669 - 360, name: "South Korea", labelDir: 'top', labelOffset: [0, -10] },
      { lat: 14.0583, lng: 108.2772 - 360, name: "Vietnam", labelDir: 'bottom', labelOffset: [0, 10] },
      { lat: 20.5937, lng: 78.9629 - 360, name: "India", labelDir: 'left', labelOffset: [-10, 0] },
      // Europe (normal coordinates - will appear on left)
      { lat: 53.3498, lng: -6.2603, name: "Dublin, Ireland", labelDir: 'left', labelOffset: [-10, 0] },
      { lat: 47.0104, lng: 28.8638, name: "Moldova", labelDir: 'right', labelOffset: [10, 0] },
      { lat: 40.4637, lng: -3.7492, name: "Spain", labelDir: 'left', labelOffset: [-10, 0] },
      // Americas
      { lat: 8.9824, lng: -79.5199, name: "Panama", labelDir: 'bottom', labelOffset: [0, 10] },
      { lat: -33.4489, lng: -70.6693, name: "Chile", labelDir: 'left', labelOffset: [-10, 0] },
      { lat: -15.7975, lng: -47.8919, name: "Brazil", labelDir: 'right', labelOffset: [10, 0] },
      // Africa
      { lat: -1.2921, lng: 36.8219, name: "Nairobi, Kenya", labelDir: 'top', labelOffset: [0, -10] },
      { lat: -33.9249, lng: 18.4241, name: "Cape Town, South Africa", labelDir: 'bottom', labelOffset: [0, 10] },
    ]

    // Initialize map centered on USA
    const map = L.map(mapContainerRef.current, {
      center: [39.8283, -98.5795], // Center of continental USA
      zoom: 2,
      minZoom: 2,
      maxZoom: 6,
      zoomControl: true,
      worldCopyJump: false,
      maxBounds: [[-85, -280], [85, 80]],
      maxBoundsViscosity: 1.0,
    })

    // Add tile layer - Voyager No Labels
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20,
      noWrap: false,
    }).addTo(map)

    // Create custom icon for USA (larger, red)
    const usaIcon = L.divIcon({
      className: styles.usaMarker,
      html: '<div></div>',
      iconSize: [30, 30],
      iconAnchor: [15, 15],
    })

    // Create custom icon for partner countries (smaller, blue)
    const partnerIcon = L.divIcon({
      className: styles.partnerMarker,
      html: '<div></div>',
      iconSize: [16, 16],
      iconAnchor: [8, 8],
    })

    // Add USA marker
    const usaMarker = L.marker([usa.lat, usa.lng], { icon: usaIcon }).addTo(map)
    usaMarker.bindTooltip(usa.name, {
      permanent: true,
      className: styles.countryLabel,
      direction: 'top',
      offset: [0, -15],
    })

    // Function to create curved line between two points
    function getCurvedLine(start: { lat: number; lng: number }, end: { lat: number; lng: number }) {
      const latlngs: [number, number][] = []
      
      // Handle longitude wrapping for Asian countries
      let endLng = end.lng
      let offsetX = endLng - start.lng
      
      // If the offset is very large (crossing the date line), use wrapped coordinates
      if (Math.abs(offsetX) > 180) {
        // For Asian countries wrapped to negative, the connection should go the long way
        // We'll use the wrapped coordinates directly
      }
      
      const offsetY = end.lat - start.lat

      // Create curve with quadratic bezier approximation
      const midLat = (start.lat + end.lat) / 2
      const midLng = (start.lng + endLng) / 2

      // Add curvature based on distance
      const distance = Math.sqrt(offsetX * offsetX + offsetY * offsetY)
      const curvature = Math.min(distance * 0.1, 15)

      const controlLat = midLat + curvature
      const controlLng = midLng

      // Generate points along the curve
      for (let t = 0; t <= 1; t += 0.05) {
        const lat = (1 - t) * (1 - t) * start.lat + 2 * (1 - t) * t * controlLat + t * t * end.lat
        const lng = (1 - t) * (1 - t) * start.lng + 2 * (1 - t) * t * controlLng + t * t * endLng
        latlngs.push([lat, lng])
      }

      return latlngs
    }

    // Add partner markers and connection lines
    partners.forEach((partner) => {
      // Add curved line from USA to partner
      const curvedPoints = getCurvedLine(
        { lat: usa.lat, lng: usa.lng },
        { lat: partner.lat, lng: partner.lng }
      )

      // Create gradient effect with polyline
      const line = L.polyline(curvedPoints, {
        color: '#22c55e', // Using primary green color
        weight: 2.5,
        opacity: 0.6,
        smoothFactor: 1,
        dashArray: '8, 4',
      }).addTo(map)

      // Add partner marker
      const marker = L.marker([partner.lat, partner.lng], { icon: partnerIcon }).addTo(map)
      marker.bindTooltip(partner.name, {
        permanent: true,
        className: styles.countryLabel,
        direction: partner.labelDir,
        offset: partner.labelOffset,
      })

      // Animate line on hover
      marker.on('mouseover', function () {
        line.setStyle({ weight: 4, opacity: 1, color: '#16a34a' })
      })
      marker.on('mouseout', function () {
        line.setStyle({ weight: 2.5, opacity: 0.6, color: '#22c55e' })
      })

      // Also make line interactive
      line.on('mouseover', function () {
        line.setStyle({ weight: 4, opacity: 1, color: '#16a34a' })
      })
      line.on('mouseout', function () {
        line.setStyle({ weight: 2.5, opacity: 0.6, color: '#22c55e' })
      })
    })

    // Set view to center on USA with Europe on left and Asia on right
    map.setView([39.8283, -98.5795], 2)

    mapRef.current = map

    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [])

  return <div ref={mapContainerRef} className={styles.mapContainer} />
}
