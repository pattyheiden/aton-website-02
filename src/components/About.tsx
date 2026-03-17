import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Building2 } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Missão',
    description: 'Levar soluções eficazes e modernas com o intuito de atender as necessidades dos clientes, através do nosso conhecimento e experiência em automação industrial. Contribuindo na produtividade, tecnologia e evolução da sua empresa.',
  },
  {
    icon: Eye,
    title: 'Visão',
    description: 'Ser reconhecida como uma das melhores empresas em automação de processos, desenvolvimento de equipamentos com foco nas tecnologias mais atuais do mercado.',
  },
  {
    icon: Heart,
    title: 'Valores',
    description: 'Respeito; Honestidade; Inovação; Comprometimento com os clientes; Buscar melhoria contínua.',
  },
];

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 industrial-pattern opacity-50" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Sobre a <span className="text-gradient">Aton Soluções Técnicas</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        {/* Who We Are */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-20"
        >
          <div className="card-industrial flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center">
                <Building2 className="w-10 h-10 text-accent" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">Quem Somos</h3>
              <p className="text-muted-foreground leading-relaxed">
                Aton Soluções Técnicas iniciou suas atividades em 2014 com o objetivo de fornecer a melhor solução técnica, custo-benefício em automação industrial e melhoria de processos produtivos. Somos especializados no projeto e montagem de painéis elétricos de baixa tensão, automação de processos e desenvolvimento de automações para fabricantes de máquinas, equipamentos e indústrias de manufatura.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              className="card-industrial text-center group"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <item.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
