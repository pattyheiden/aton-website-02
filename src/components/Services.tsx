import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Shield, 
  Wrench, 
  Zap, 
  Settings, 
  RefreshCcw, 
  Code2, 
  FileCheck2, 
  HardHat 
} from 'lucide-react';

const services = [
  {
    icon: Cpu,
    title: 'Projeto e Execução de Painéis',
    description: 'Painéis elétricos de baixa tensão e automação industrial.',
    bullets: ['Projetos personalizados', 'Montagem industrial'],
  },
  {
    icon: Shield,
    title: 'Painéis de Proteção e Controle',
    description: 'Sistemas de proteção e controle para processos industriais.',
    bullets: ['Proteção de equipamentos', 'Controle integrado'],
  },
  {
    icon: Wrench,
    title: 'Painéis de Serviços Auxiliares',
    description: 'Soluções para sistemas auxiliares em plantas industriais.',
    bullets: ['Sistemas auxiliares', 'Integração completa'],
  },
  {
    icon: Zap,
    title: 'Painéis de Distribuição',
    description: 'QGBT, QDFL e sistemas de distribuição elétrica.',
    bullets: ['QGBT e QDFL', 'Alta confiabilidade'],
  },
  {
    icon: Settings,
    title: 'Painéis de Comando e CCMs',
    description: 'Centros de controle de motores e painéis de comando.',
    bullets: ['CCMs industriais', 'Comando automatizado'],
  },
  {
    icon: RefreshCcw,
    title: 'Retrofitting',
    description: 'Modernização de equipamentos, máquinas e processos.',
    bullets: ['Modernização', 'Upgrade tecnológico'],
  },
  {
    icon: Code2,
    title: 'Softwares e Aplicações',
    description: 'Desenvolvimento para PLCs e IHMs (Siemens, Rockwell e outros).',
    bullets: ['Programação PLC', 'Interfaces IHM'],
  },
  {
    icon: FileCheck2,
    title: 'Adequações Normativas',
    description: 'NR10, NR12, NBR-5410:2004, ABNT NBR IEC 61439-1/2.',
    bullets: ['Conformidade NR10/NR12', 'Certificações'],
  },
  {
    icon: HardHat,
    title: 'Startups e Acompanhamento',
    description: 'Startup de equipamentos e acompanhamento de instalação.',
    bullets: ['Comissionamento', 'Suporte técnico'],
  },
];

export const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="servicos" ref={sectionRef} className="py-24 bg-secondary/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 industrial-pattern opacity-30" />

      {/* Orbit Decoration */}
      <div className="orbit-decoration w-[500px] h-[500px] -top-[250px] -left-[250px] opacity-10" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Soluções completas em automação industrial e painéis elétricos para sua empresa
          </p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              className="service-card group"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-accent" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Bullets */}
              <ul className="space-y-2">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
