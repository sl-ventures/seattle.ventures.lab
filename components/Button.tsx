import Link from 'next/link'
import styles from './Button.module.css'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost' | 'dark'
  onClick?: () => void
  className?: string
  arrow?: boolean
}

export default function Button({ 
  children, 
  href, 
  variant = 'primary', 
  onClick,
  className = '',
  arrow = false
}: ButtonProps) {
  const buttonClasses = `${styles.btn} ${styles[variant]} ${arrow ? styles.arrow : ''} ${className}`
  
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    )
  }
  
  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  )
}

