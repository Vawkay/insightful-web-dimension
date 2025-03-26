
import React, { useRef, useState, useCallback } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { useEmblaCarousel } from "embla-carousel-react";

const ProjectCarousel = () => {
  const [emblaRef, setEmblaRef] = useState<ReturnType<typeof useEmblaCarousel>>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Fixed onSelect handler to properly work with typescript
  const onSelect = useCallback(() => {
    if (!emblaRef || !emblaRef.emblaApi) return;
    setActiveIndex(emblaRef.emblaApi.selectedScrollSnap());
  }, [emblaRef]);

  const projects = [
    {
      id: 1,
      title: "Dashboard Financeiro",
      description: "Criação de um dashboard interativo para monitoramento de KPIs financeiros em tempo real.",
      image: "/placeholder.svg",
      tags: ["Power BI", "SQL Server"],
    },
    {
      id: 2,
      title: "Integração de Dados",
      description: "Implementação de sistema ETL para unificar dados de múltiplas fontes.",
      image: "/placeholder.svg",
      tags: ["Python", "APIs"],
    },
    {
      id: 3,
      title: "Automação de Relatórios",
      description: "Desenvolvimento de sistema para geração automática de relatórios periódicos.",
      image: "/placeholder.svg",
      tags: ["Excel", "VBA", "Power Automate"],
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-insight-950/50 to-background relative overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 10%, rgba(12, 146, 223, 0.15) 0%, transparent 40%), radial-gradient(circle at 20% 90%, rgba(12, 146, 223, 0.1) 0%, transparent 50%)",
          backgroundSize: "100% 100%",
        }}
      />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-16">
          <div className="inline-block bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1 mb-6">
            <span className="text-sm font-medium text-insight-300">Nossos Projetos</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transformando Dados em <span className="text-gradient">Resultados</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Conheça alguns dos nossos projetos recentes e como ajudamos empresas
            a alcançar seus objetivos através da análise de dados.
          </p>
        </div>

        <Carousel 
          setApi={setEmblaRef}
          className="max-w-5xl mx-auto"
          onSelect={onSelect}
        >
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="glass-card h-full rounded-xl overflow-hidden mx-2">
                  <AspectRatio ratio={16 / 9} className="bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-insight-900/50 text-insight-200 hover:bg-insight-800/50"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 md:-left-12" />
          <CarouselNext className="right-2 md:-right-12" />
        </Carousel>
        
        <div className="flex justify-center gap-1 mt-8">
          {projects.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-3 h-3 rounded-full transition-colors ${
                activeIndex === i
                  ? "bg-insight-400"
                  : "bg-insight-900/50 hover:bg-insight-800"
              }`}
              onClick={() => emblaRef?.emblaApi?.scrollTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;
