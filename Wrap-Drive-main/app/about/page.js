import Header from "../../components/Header"
import Footer from "../../components/Footer"
// import WhatsAppFloat from "../../components/WhatsAppFloat"

export default function About() {
  return (
    <>
      <Header />
      <main className="about-page">
        <section className="page-hero">
          <div className="container">
            <h1>About Wrap & Drive</h1>
            <p>Your trusted partner in automotive transformation</p>
          </div>
        </section>

        <section className="about-content">
          <div className="container">
            <div className="about-grid">
              <div className="about-text">
                <h2>Our Story</h2>
                <p>
                  Founded with a passion for automotive excellence, Wrap & Drive has been transforming vehicles across
                  Kenya with premium customization services. What started as a small operation has grown into a trusted
                  name in the automotive industry.
                </p>
                <p>
                  We believe every vehicle tells a story, and we are here to help you tell yours. Whether it's a complete
                  color transformation, protective coating, or custom modifications, we bring your vision to life with
                  precision and care.
                </p>
              </div>
              <div className="about-image">
                <img src="/ip1.jpg?height=400&width=500" alt="Wrap & Drive workshop" />
              </div>
            </div>
          </div>
        </section>

        <section className="values-section">
          <div className="container">
            <h2>Our Mission & Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>Quality First</h3>
                <p>We never compromise on the quality of materials or workmanship</p>
              </div>
              <div className="value-card">
                <h3>Customer Satisfaction</h3>
                <p>Your satisfaction is our priority, from consultation to completion</p>
              </div>
              <div className="value-card">
                <h3>Innovation</h3>
                <p>We stay updated with the latest techniques and technologies</p>
              </div>
              <div className="value-card">
                <h3>Integrity</h3>
                <p>Honest pricing, transparent processes, and reliable service</p>
              </div>
            </div>
          </div>
        </section>

        <section className="experience-section">
          <div className="container">
            <div className="experience-content">
              <h2>Professional Experience</h2>
              <div className="stats-grid">
                {/* <div className="stat">
                  <h3>500+</h3>
                  <p>Vehicles Transformed</p>
                </div>
                <div className="stat">
                  <h3>5+</h3>
                  <p>Years Experience</p>
                </div> */}
                <div className="stat">
                  <h3>100%</h3>
                  <p>Customer Satisfaction</p>
                </div>
                <div className="stat">
                  <h3>24/7</h3>
                  <p>Customer Support</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {/* <WhatsAppFloat /> */}
    </>
  )
}
