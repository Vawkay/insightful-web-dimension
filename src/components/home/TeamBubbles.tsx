
import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Facebook, Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Rafael Silva",
    role: "CEO & Fundador",
    bio: "Especialista em Business Intelligence com mais de 10 anos de experiência, transformando dados em insights estratégicos para diversos setores.",
    image: "/lovable-uploads/cc37ab60-1c1a-48d8-b9a0-d4362fdce0ac.png",
    social: {
      linkedin: "#",
      facebook: "#",
      email: "rafael@insightfuldata.com.br",
    },
  },
  {
    id: 2,
    name: "Carla Mendes",
    role: "Head de Data Analytics",
    bio: "Especialista em estatística aplicada e modelagem preditiva, com foco em transformar dados em insights estratégicos para otimização de processos.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop",
    social: {
      linkedin: "#",
      facebook: "#",
      email: "carla@insightfuldata.com.br",
    },
  },
  {
    id: 3,
    name: "Lucas Oliveira",
    role: "Especialista em Visualização de Dados",
    bio: "Designer com expertise em UX/UI e visualização de dados, criando interfaces intuitivas que transformam informações complexas em representações visuais.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop",
    social: {
      linkedin: "#",
      facebook: "#",
      email: "lucas@insightfuldata.com.br",
    },
  },
];

const TeamBubbles = () => {
  return (
    <div className="w-full py-16 md:py-20 bg-insight-950/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Conheça Nossa Equipe
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Profissionais talentosos e apaixonados por transformar dados em
            insights valiosos para nossos clientes.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-12 md:gap-16 lg:gap-24">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="relative mx-auto cursor-pointer group max-w-fit">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-pink-500 via-insight-400 to-blue-500 opacity-70 blur-md group-hover:opacity-100 transition duration-300"></div>
                    <Avatar className="w-32 h-32 md:w-40 md:h-40 relative">
                      <AvatarImage 
                        src={member.image} 
                        alt={member.name} 
                        className="object-cover"
                      />
                      <AvatarFallback>{member.name[0]}</AvatarFallback>
                    </Avatar>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="glass-card w-80 p-0 shadow-lg border-0">
                  <div className="relative pt-12 pb-6 px-6">
                    <div className="absolute -top-12 left-0 right-0 flex justify-center">
                      <Avatar className="w-24 h-24">
                        <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                        <AvatarFallback>{member.name[0]}</AvatarFallback>
                      </Avatar>
                    </div>
                    <h3 className="text-xl font-semibold mb-1 mt-2">{member.name}</h3>
                    <p className="text-insight-300 mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-4">
                      {member.bio}
                    </p>
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
                </HoverCardContent>
              </HoverCard>
              <h3 className="text-lg font-semibold mt-4">{member.name}</h3>
              <p className="text-insight-300 text-sm max-w-[160px]">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamBubbles;
