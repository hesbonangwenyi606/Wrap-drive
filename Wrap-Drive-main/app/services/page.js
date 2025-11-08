"use client"

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import WhatsAppFloat from "../../components/WhatsAppFloat"

export default function Services() {
  const services = [
    {
      title: "Vinyl Wraps",
      description: "Complete color changes, custom designs, and branding solutions",
      price: "Starting from Ksh 50,000",
      image: "/ip5.jpg?height=250&width=350",
      features: ["Color change wraps", "Custom graphics", "Commercial branding", "Partial wraps"],
    },
    {
      title: "Paint Protection Film (PPF)",
      description: "Invisible protection against scratches, chips, and environmental damage",
      price: "Starting from Ksh 80,000",
      image: "/ip6.jpg?height=250&width=350",
      features: ["Full front end protection", "High-impact areas", "Self-healing technology", "10-year warranty"],
    },
    {
      title: "Ceramic Coating",
      description: "Long-lasting protection with enhanced gloss and hydrophobic properties",
      price: "Starting from Ksh 25,000",
      image: "/ip12.jpg?height=250&width=350",
      features: ["9H hardness coating", "UV protection", "Easy maintenance", "5-year protection"],
    },
    {
      title: "Auto Detailing",
      description: "Complete interior and exterior cleaning and restoration services",
      price: "Starting from Ksh 5,000",
      image: "/ip13.jpg?height=250&width=350",
      features: ["Interior deep clean", "Exterior wash & wax", "Engine bay cleaning", "Leather conditioning"],
    },
    {
      title: "Window Tinting",
      description: "Professional window tinting for privacy, comfort, and style",
      price: "Starting from Ksh 15,000",
      image: "/ip4.jpg?height=250&width=350",
      features: ["UV protection", "Heat reduction", "Privacy enhancement", "Various tint levels"],
    },
    {
      title: "Face-lift & Custom Mods",
      description: "Custom modifications and aesthetic enhancements",
      price: "Quote on request",
      image: "/ip3.jpg?height=250&width=350",
      features: ["Body kit installation", "Custom lighting", "Interior upgrades", "Performance mods"],
    },
  ]

  const handleWhatsAppClick = (serviceName) => {
    const message = `Hi! I'm interested in your ${serviceName} service. Can you provide more details and pricing?`
    const phoneNumber = "254703201556" // Replace with actual number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <>
      <Header />
      <main className="services-page">
        <section className="page-hero">
          <div className="container">
            <h1>Our Services</h1>
            <p>Professional automotive customization and protection</p>
          </div>
        </section>

        <section className="services-grid-section">
          <div className="container">
            <div className="services-grid">
              {services.map((service, index) => (
                <div key={index} className="service-card-detailed">
                  <div className="service-image">
                    <img src={service.image || "/placeholder.svg"} alt={service.title} />
                  </div>
                  <div className="service-content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <div className="service-price">{service.price}</div>
                    <ul className="service-features">
                      {service.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                    <button className="service-book-btn" onClick={() => handleWhatsAppClick(service.title)}>
                      Book via WhatsApp
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="process-section">
          <div className="container">
            <h2>Our Process</h2>
            <div className="process-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Consultation</h3>
                <p>Discuss your vision and requirements</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Quote</h3>
                <p>Receive detailed pricing and timeline</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Execution</h3>
                <p>Professional installation by our experts</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h3>Quality Check</h3>
                <p>Final inspection and customer approval</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
