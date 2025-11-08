"use client"

import Header from "../components/Header"
import Footer from "../components/Footer"
import ChatbotFloat from "../components/ChatbotFloat"
import { FaPaintBrush, FaBolt, FaShieldAlt, FaMobileAlt } from 'react-icons/fa'

export default function Home() {
  const handleWhatsAppClick = () => {
    const message = "Hi! I'm interested in your automotive services. Can you provide more information?"
    const phoneNumber = "254703201556" // Replace with actual number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <>
      <Header />
      <main className="home-page">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Drive Bold. Drive Unique.</h1>
              <h2>Premium Vehicle Customization & Protection</h2>
              <p>
                At Wrap & Drive, we turn your car into a statement. From precision vinyl wraps to ceramic coatings and paint protection, our expert craftsmanship brings your automotive vision to life with style, quality, and performance in mind.
              </p>
              <button className="cta-button" onClick={handleWhatsAppClick}>
                Get a Custom Quote
              </button>
            </div>
            <div className="hero-image">
              <img src="/ip9.jpg?height=500&width=800" alt="Customized luxury car with vinyl wrap" />
            </div>
          </div>
        </section>

        {/* What Makes Us Unique */}
        <section className="unique-section">
          <div className="container">
            <h2>Why Choose Wrap & Drive?</h2>
            <div className="features-grid">
              <div className="feature">
                <div className="feature-icon"><FaPaintBrush /></div>
                <h3>Premium Materials</h3>
                <p>We source only the finest vinyl, PPF, and ceramic coating products</p>
              </div>
              <div className="feature">
                <div className="feature-icon"><FaBolt /></div>
                <h3>Expert Craftsmanship</h3>
                <p>Years of experience in automotive customization and detailing</p>
              </div>
              <div className="feature">
                <div className="feature-icon"><FaShieldAlt /></div>
                <h3>Protection & Style</h3>
                <p>Enhance your vehicle's appearance while protecting its value</p>
              </div>
              <div className="feature">
                <div className="feature-icon"><FaMobileAlt /></div>
                <h3>Easy Booking</h3>
                <p>Quick consultation and booking through WhatsApp</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="services-preview">
          <div className="container">
            <h2>Our Services</h2>
            <div className="services-grid">
              <div className="service-card">
                <img src="/ip19.jpg?height=200&width=300" alt="Vinyl Wrap" />
                <h3>Vinyl Wraps</h3>
                <p>Complete color changes and custom designs</p>
              </div>
              <div className="service-card">
                <img src="/ip4.jpg?height=200&width=300" alt="Paint Protection Film" />
                <h3>Paint Protection Film</h3>
                <p>Invisible protection for your vehicle's paint</p>
              </div>
              <div className="service-card">
                <img src="/ip6.jpg?height=200&width=300" alt="Ceramic Coating" />
                <h3>Ceramic Coating</h3>
                <p>Long-lasting shine and protection</p>
              </div>
            </div>
            <div className="services-cta">
              <a href="/services" className="view-all-btn">
                View All Services
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatbotFloat />
    </>
  )
}
