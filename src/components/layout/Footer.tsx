
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="inline-flex items-center space-x-2 mb-6">
              <img 
                src="/lovable-uploads/9affbacb-506d-4711-a264-b1f2fb158981.png" 
                alt="InsightfulData Logo" 
                className="h-10 w-10" 
              />
              <span className="font-display font-bold text-2xl text-gradient">
                InsightfulData
              </span>
            </Link>
            <p className="text-muted-foreground mb-6">
              Especialistas em BI, análise e visualização de dados, transformando
              informações em insights valiosos para o seu negócio.
            </p>
            <p className="text-muted-foreground mb-3 text-sm">
              CNPJ: 59.910.239/0001-41
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Menu Rápido</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-white transition-colors"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos"
                  className="text-muted-foreground hover:text-white transition-colors"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-muted-foreground hover:text-white transition-colors"
                >
                  Portfólio
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  className="text-muted-foreground hover:text-white transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Serviços</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/servicos"
                  className="text-muted-foreground hover:text-white transition-colors"
                >
                  Business Intelligence
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos"
                  className="text-muted-foreground hover:text-white transition-colors"
                >
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos"
                  className="text-muted-foreground hover:text-white transition-colors"
                >
                  Visualização de Dados
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail size={20} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">
                  contato@insightfuldata.com.br
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={20} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">(11) 99999-9999</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 text-center text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} InsightfulData. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
