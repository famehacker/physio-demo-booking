
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { UserMenu } from "./UserMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Book a Demo", path: "/book-demo" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 shadow-md backdrop-blur-sm py-3" : "bg-transparent py-5"}`}>
      <div className="page-container">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold font-display bg-gradient-to-r from-physicotech-600 to-mint-600 bg-clip-text text-transparent">
              PhysicoTech
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors ${
                  isActive(link.path)
                    ? "text-physicotech-600 font-semibold"
                    : "text-gray-600 hover:text-physicotech-500"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* User Menu (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              asChild
              variant="outline"
              className="border-physicotech-600 text-physicotech-600 hover:bg-physicotech-50"
            >
              <Link to="/booking">Book Appointment</Link>
            </Button>
            <UserMenu />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-white shadow-lg p-4 border-t">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-medium py-2 px-4 rounded-md transition-colors ${
                    isActive(link.path)
                      ? "bg-physicotech-50 text-physicotech-600 font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/booking" 
                className="mt-2 bg-physicotech-600 text-white py-2 px-4 rounded-md hover:bg-physicotech-700 transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                Book Appointment
              </Link>
              <Link 
                to="/auth" 
                className="bg-white border border-physicotech-600 text-physicotech-600 py-2 px-4 rounded-md hover:bg-physicotech-50 transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                Login / Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
