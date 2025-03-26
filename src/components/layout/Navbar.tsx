
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass-nav py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-2"
            onClick={() => setIsOpen(false)}
          >
            <span className="font-display font-bold text-2xl text-gradient">
              InsightfulData
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white/90 hover:text-white transition-colors"
            >
              Início
            </Link>
            <Link
              to="/sobre"
              className="text-white/90 hover:text-white transition-colors"
            >
              Sobre Nós
            </Link>
            <Link
              to="/servicos"
              className="text-white/90 hover:text-white transition-colors"
            >
              Serviços
            </Link>
            <Link
              to="/portfolio"
              className="text-white/90 hover:text-white transition-colors"
            >
              Portfólio
            </Link>
            <Link
              to="/contato"
              className="text-white/90 hover:text-white transition-colors"
            >
              Contato
            </Link>
          </div>

          <div className="hidden md:block">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link to="/contato">Solicitar Demonstração</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass-nav border-t border-white/10 animate-fade-in">
            <div className="px-4 py-5 space-y-3">
              <Link
                to="/"
                className="block text-white/90 hover:text-white transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Início
              </Link>
              <Link
                to="/sobre"
                className="block text-white/90 hover:text-white transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Sobre Nós
              </Link>
              <Link
                to="/servicos"
                className="block text-white/90 hover:text-white transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Serviços
              </Link>
              <Link
                to="/portfolio"
                className="block text-white/90 hover:text-white transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Portfólio
              </Link>
              <Link
                to="/contato"
                className="block text-white/90 hover:text-white transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Contato
              </Link>
              <div className="pt-2">
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  <Link to="/contato" onClick={() => setIsOpen(false)}>
                    Solicitar Demonstração
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
