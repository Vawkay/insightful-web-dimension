
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/home/CTASection";
import TeamSection from "@/components/about/TeamSection";
import { ArrowRight, Award, ChartBar, Clock, Users } from "lucide-react";

const About = () => {
  useEffect(() => {
    document.title = "Sobre Nós | InsightfulData";
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
                Nossa História
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Transformando desafios em{" "}
              <span className="text-gradient">oportunidades</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Somos especialistas em Business Intelligence e Data Analytics,
              ajudando empresas a extrair o máximo valor de seus dados.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="bg-insight-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-insight-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">2015</h3>
              <p className="text-muted-foreground">Ano de Fundação</p>
            </div>
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="bg-insight-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-insight-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">50+</h3>
              <p className="text-muted-foreground">Clientes Atendidos</p>
            </div>
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="bg-insight-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChartBar className="h-8 w-8 text-insight-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">200+</h3>
              <p className="text-muted-foreground">Projetos Realizados</p>
            </div>
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="bg-insight-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-insight-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">15+</h3>
              <p className="text-muted-foreground">Prêmios de Inovação</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gradient">
                Nossa Missão e Valores
              </h2>
              <p className="text-muted-foreground mb-6">
                Fundada em 2015, a InsightfulData nasceu da visão de tornar a
                análise de dados acessível e valiosa para empresas de todos os
                tamanhos. Nossa equipe de especialistas combina profundo
                conhecimento técnico com uma abordagem consultiva para entregar
                soluções que geram resultados reais.
              </p>
              <p className="text-muted-foreground mb-6">
                Acreditamos que os dados são o ativo mais valioso das empresas
                modernas, e nossa missão é ajudar nossos clientes a
                transformarem esses dados em insights acionáveis e vantagem
                competitiva.
              </p>
              <div className="space-y-4 mt-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-6 h-6 rounded-full bg-insight-500 flex items-center justify-center">
                      <ArrowRight size={14} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Excelência</h3>
                    <p className="text-muted-foreground">
                      Buscamos a excelência em tudo o que fazemos, desde o
                      atendimento ao cliente até as soluções técnicas que
                      desenvolvemos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-6 h-6 rounded-full bg-insight-500 flex items-center justify-center">
                      <ArrowRight size={14} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Inovação</h3>
                    <p className="text-muted-foreground">
                      Estamos sempre na vanguarda das tecnologias e metodologias
                      de análise de dados, trazendo inovação para nossos
                      clientes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-6 h-6 rounded-full bg-insight-500 flex items-center justify-center">
                      <ArrowRight size={14} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Resultados</h3>
                    <p className="text-muted-foreground">
                      Nosso foco é entregar resultados mensuráveis e impactantes
                      para o negócio dos nossos clientes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 glass-card rounded-2xl p-3 shadow-[0_8px_40px_-12px_rgba(0,146,255,0.2)]">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop"
                  alt="Time InsightfulData"
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <div className="absolute top-6 -right-6 -z-10 w-full h-full glass-card rounded-2xl border-white/5 opacity-50" />
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <TeamSection />

      {/* CTA Section */}
      <CTASection />

      <Footer />
    </div>
  );
};

export default About;
