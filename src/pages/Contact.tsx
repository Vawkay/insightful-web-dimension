
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/contact/ContactForm";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    document.title = "Contato | InsightfulData";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <div className="pt-32 pb-20 bg-gradient-to-b from-background to-insight-950/30 relative overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 50%, rgba(12, 146, 223, 0.15) 0%, transparent 45%), radial-gradient(circle at 80% 80%, rgba(12, 146, 223, 0.1) 0%, transparent 50%)",
            backgroundSize: "100% 100%",
          }}
        />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1 mb-6">
              <span className="text-sm font-medium text-insight-300">
                Fale Conosco
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Estamos prontos para{" "}
              <span className="text-gradient">transformar</span> seus dados
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Entre em contato para saber como podemos ajudar sua empresa a
              tomar decisões mais inteligentes baseadas em dados.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2 order-2 lg:order-1 flex flex-col space-y-8">
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-insight-900/50 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-insight-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">E-mail</h3>
                    <p className="text-muted-foreground mb-1">
                      Comercial:{" "}
                      <a
                        href="mailto:comercial@insightfuldata.com.br"
                        className="text-insight-400 hover:text-insight-300 transition-colors"
                      >
                        comercial@insightfuldata.com.br
                      </a>
                    </p>
                    <p className="text-muted-foreground">
                      Suporte:{" "}
                      <a
                        href="mailto:suporte@insightfuldata.com.br"
                        className="text-insight-400 hover:text-insight-300 transition-colors"
                      >
                        suporte@insightfuldata.com.br
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-insight-900/50 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-insight-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Telefone</h3>
                    <p className="text-muted-foreground mb-1">
                      +55 (11) 3456-7890
                    </p>
                    <p className="text-muted-foreground">+55 (11) 98765-4321</p>
                  </div>
                </div>
              </div>

            </div>

            <div className="lg:col-span-3 order-1 lg:order-2">
              <div className="glass-card rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6">Envie uma mensagem</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
