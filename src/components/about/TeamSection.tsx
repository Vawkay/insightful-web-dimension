
import React from "react";
import { Facebook, Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Ana Silva",
    role: "CEO & Fundadora",
    bio: "Especialista em Business Intelligence com mais de 15 anos de experiência, liderando projetos de transformação digital para grandes empresas do setor financeiro e varejo.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1476&auto=format&fit=crop",
    social: {
      linkedin: "#",
      facebook: "#",
      email: "ana@insightfuldata.com.br",
    },
  },
  {
    id: 2,
    name: "Roberto Santos",
    role: "CTO",
    bio: "Engenheiro de dados com background em ciência da computação e inteligência artificial. Responsável pela arquitetura técnica das soluções de analytics da InsightfulData.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2f9e5d2?q=80&w=1470&auto=format&fit=crop",
    social: {
      linkedin: "#",
      facebook: "#",
      email: "roberto@insightfuldata.com.br",
    },
  },
  {
    id: 3,
    name: "Carla Mendes",
    role: "Head de Data Analytics",
    bio: "Especialista em estatística aplicada e modelagem preditiva, com foco em transformar dados em insights estratégicos para otimização de processos e tomada de decisões.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop",
    social: {
      linkedin: "#",
      facebook: "#",
      email: "carla@insightfuldata.com.br",
    },
  },
  {
    id: 4,
    name: "Lucas Oliveira",
    role: "Especialista em Visualização de Dados",
    bio: "Designer com expertise em UX/UI e visualização de dados, criando interfaces intuitivas e dashboards que transformam informações complexas em representações visuais claras.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop",
    social: {
      linkedin: "#",
      facebook: "#",
      email: "lucas@insightfuldata.com.br",
    },
  },
];

const TeamSection = () => {
  return (
    <div className="w-full py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
            Conheça Nossa Equipe
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Profissionais talentosos e apaixonados por transformar dados em
            insights valiosos para nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_-12px_rgba(12,146,223,0.2)] group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-square object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-center space-x-3">
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
                      aria-label={`LinkedIn de ${member.name}`}
                    >
                      <Linkedin size={18} className="text-white" />
                    </a>
                    <a
                      href={member.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
                      aria-label={`Facebook de ${member.name}`}
                    >
                      <Facebook size={18} className="text-white" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
                      aria-label={`Email de ${member.name}`}
                    >
                      <Mail size={18} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-insight-300 mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
