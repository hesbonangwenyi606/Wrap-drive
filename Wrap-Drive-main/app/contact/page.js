"use client"

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import WhatsAppFloat from "../../components/WhatsAppFloat"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

export default function Contact() {
  const handleWhatsAppClick = () => {
    const message = "Hi! I'd like to get in touch regarding your automotive services."
    const phoneNumber = "254703201556" // Replace with actual number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <>
      <Header />
      <main className="contact-page">
        <section className="page-hero">
          <div className="container">
            <h1>Contact Us</h1>
            <p>Get in touch for a consultation or quote</p>
          </div>
        </section>

        <section className="contact-section">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-info">
                <h2>Get In Touch</h2>
                <p>Ready to transform your vehicle? Contact us today for a consultation.</p>

                <div className="contact-methods">
                  <div className="contact-method">
                    <div className="contact-icon"><FaPhoneAlt /></div>
                    <div>
                      <h3>Phone</h3>
                      <p>+254792391610</p>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="contact-icon"><FaEnvelope /></div>
                    <div>
                      <h3>Email</h3>
                      <p>wrapndrivelimited@gmail.com</p>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="contact-icon"><FaMapMarkerAlt /></div>
                    <div>
                      <h3>Location</h3>
                      <p>
                        Nothern bypass, opposite quickmart thome, Gachie
                        <br />
                        Nairobi, Kenya
                      </p>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="contact-icon"><FaClock /></div>
                    <div>
                      <h3>Hours</h3>
                      <p>
                        Mon - Sat: 8:00 AM - 6:00 PM
                        <br />
                        Sunday: By Appointment
                      </p>
                    </div>
                  </div>
                </div>

                <button className="whatsapp-contact-btn" onClick={handleWhatsAppClick}>
                  Chat on WhatsApp
                </button>
              </div>

              <div className="map-section">
  <h3>Find Us</h3>
  <div className="map-placeholder">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d908.7408648317944!2d36.872593904936906!3d-1.2124852129012467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1748451817765!5m2!1sen!2ske"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Wrap & Drive Location"
    ></iframe>
    {/* <div className="map-overlay">
      <p>📍 Wrap & Drive Location</p>
      <small>Click the map to view on Google Maps</small>
    </div> */}
  </div>
</div>

            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Transform Your Vehicle?</h2>
              <p>Contact us today for a free consultation and quote</p>
              <button className="cta-button" onClick={handleWhatsAppClick}>
                Get Started Now
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {/* <WhatsAppFloat /> */}
    </>
  )
}
