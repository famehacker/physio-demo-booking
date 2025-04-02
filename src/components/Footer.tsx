
import { Link } from "react-router-dom";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t">
      <div className="page-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - About */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold font-display bg-gradient-to-r from-physicotech-600 to-mint-600 bg-clip-text text-transparent">
                PhysicoTech
              </span>
            </Link>
            <p className="text-gray-600 mb-6">
              Professional physiotherapy services with modern techniques and personalized care. Your health journey is our priority.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-500 hover:text-physicotech-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-500 hover:text-physicotech-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-500 hover:text-physicotech-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-500 hover:text-physicotech-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-physicotech-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-physicotech-600 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/book-demo" className="text-gray-600 hover:text-physicotech-600 transition-colors">
                  Book a Demo
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-600 hover:text-physicotech-600 transition-colors">
                  Appointments
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-600 hover:text-physicotech-600 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-physicotech-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-600 hover:text-physicotech-600 transition-colors">
                  Sports Rehabilitation
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-physicotech-600 transition-colors">
                  Orthopedic Physical Therapy
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-physicotech-600 transition-colors">
                  Neurological Rehabilitation
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-physicotech-600 transition-colors">
                  Pediatric Therapy
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-physicotech-600 transition-colors">
                  Geriatric Physical Therapy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-physicotech-600 flex-shrink-0 mt-1" />
                <p className="text-gray-600">
                  123 Healing Street, Wellness City, WC 12345
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-physicotech-600 flex-shrink-0" />
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-physicotech-600 flex-shrink-0" />
                <p className="text-gray-600">info@physicotech.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} PhysicoTech. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-500 hover:text-physicotech-600 text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-physicotech-600 text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
