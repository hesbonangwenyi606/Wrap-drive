import Link from "next/link"
import { FaFacebookF, FaInstagram, FaXTwitter, FaTiktok } from 'react-icons/fa6';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Wrap & Drive</h3>
            <p>Premium automotive customization and protection services.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link href="/"> Home</Link>
              </li>
              <li>
                <Link href="/about"> About Us</Link>
              </li>
              <li>
                <Link href="/services"> Services</Link>
              </li>
              <li>
                <Link href="/gallery"> Gallery</Link>
              </li>
              <li>
                <Link href="/contact"> Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Vinyl Wraps</li>
              <li>Paint Protection Film</li>
              <li>Ceramic Coating</li>
              <li>Auto Detailing</li>
              <li>Window Tinting</li>
              <li>Custom Modifications</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <p> +254792391610</p>
            <p> wrapndrivelimited@gmail.com</p>
            <p> Nairobi, Kenya</p>
          </div>
        </div>

        <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/wrap_n_drive/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaXTwitter />
              </a>
              <a href="https://www.tiktok.com/@wrap_n_drive" target="_blank" rel="noopener noreferrer">
                <FaTiktok />
              </a>
            </div>
          </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Wrap & Drive.</p> 
           {/* All rights reserved. */}
        </div>
      </div>
    </footer>
  )
}
