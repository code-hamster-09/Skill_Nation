import { Link } from "react-router-dom"
import styles from "./Button.module.scss"
import { ReactNode } from "react"

type ButtonProps = {
  children: ReactNode
  to?: string
  variant?: string
  className?: string
}

const Button = ({ children, to, variant = "primary", className, ...props }:ButtonProps) => {
  const buttonClass = variant === "primary" ? styles.primary : styles.secondary

  if (to) {
    return (
      <Link to={to} className={`${buttonClass} ${className || ""}`} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button className={`${buttonClass} ${className || ""}`} {...props}>
      {children}
    </button>
  )
}

export default Button
