"use client"
import { useState } from "react"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <div className="nav-brand">
          <Link href="/">
            <img src="/logyyy.png" alt="Wrap & Drive Logo" className="logo" />
          </Link>
        </div>

        <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link href="/services" onClick={() => setIsMenuOpen(false)}>
            Services
          </Link>
          <Link href="/gallery" onClick={() => setIsMenuOpen(false)}>
            Gallery
          </Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        </nav>

        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
