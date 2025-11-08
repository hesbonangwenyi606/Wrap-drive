import Header from "../../components/Header"
import Footer from "../../components/Footer"
// import WhatsAppFloat from "../../components/WhatsAppFloat"

export default function Gallery() {
  const galleryItems = [
    {
      title: "Custom Paint",
      category: "Custom Paint",
      image: "/ip4.jpg", // Replace with actual image
    },
    {
      title: "Porsche",
      category: "Leather coating",
      image: "/ip5.jpg",
    },
    {
      title: "Mercedes ",
      category: "Paint Protection",
      image: "/ip19.jpg",
    },
    {
      title: "Volvo",
      category: "Ceramic Coating",
      image: "/ip7.jpg",
    },
    {
      title: "Range Rover",
      category: "Custom Design",
      image: "/ip2.jpg",
    },
    {
      title: "Window Works",
      category: "Window Works",
      image: "/ip18.jpg",
    },
    {
      title: "Audi",
      category: "Auto Detailing",
      image: "/ip14.jpg",
    },
    {
      title: "Audi Sq8 Complete Detailing",
      category: "Interior",
      image: "/ip20.jpg",
    },
    {
      title: "Audi Chameleon tint",
      category: "Chameleon tint",
      image: "/ip16.jpg",
    },
  ]

  return (
    <>
      <Header />
      <main className="gallery-page">
        <section className="page-hero">
          <div className="container">
            <h1>Our Work</h1>
            <p>See the transformations we've created for our clients</p>
          </div>
        </section>

        <section className="modern-gallery">
          <div className="container">
            <div className="gallery-grid">
              {galleryItems.map((item, index) => (
                <div key={index} className="gallery-card">
                  <div className="image-container">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="gallery-image"
                      loading="lazy"
                    />
                    <div className="image-overlay">
                     <span className="category-tag">{item.category}</span>
                    </div>
                  </div> 
                  <h3 className="gallery-title">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonials-section">
          <div className="container">
            <h2>What Our Clients Say</h2>
            <div className="testimonials-grid">
              <div className="testimonial">
                <p>"Wrap & Drive transformed my car completely. The satin finish looks premium and turns heads."</p>
                <div className="testimonial-author">- Alex Mwendwa.</div>
              </div>
              <div className="testimonial">
                <p>"The team did a flawless job on the PPF. You can barely tell it’s there, exactly what I wanted."</p>
                <div className="testimonial-author">- Sarah Kimani.</div>
              </div>
              <div className="testimonial">
                <p>"I was skeptical about ceramic coating, but a year later, my car still looks freshly detailed. Worth every shilling!"</p>
                <div className="testimonial-author">- Kevin Ominde.</div>
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