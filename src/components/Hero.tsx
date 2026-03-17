import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowDown } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const whatsappNumber = '5547996173103';
const whatsappMessage = encodeURIComponent('Olá! Gostaria de um orçamento para automação/painéis elétricos.');

export const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * 0.3);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToServices = () => {
    const element = document.querySelector('#servicos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${offsetY}px)` }}
      >
        <img 
          src={heroBg} 
          alt="" 
          className="w-full h-[120%] object-cover"
        />
        {/* Overlay */}
        <div 
          className="absolute inset-0"
          style={{ background: 'var(--gradient-hero)' }}
        />
      </div>

      {/* Industrial Pattern Overlay */}
      <div className="absolute inset-0 z-0 industrial-pattern opacity-30" />

      {/* Orbit Decorations */}
      <div className="orbit-decoration w-[600px] h-[600px] -top-[200px] -right-[200px] opacity-20" />
      <div className="orbit-decoration w-[400px] h-[400px] -bottom-[100px] -left-[100px] opacity-15" style={{ animationDirection: 'reverse', animationDuration: '25s' }} />

      {/* Content */}
      <div className="relative z-10 section-container py-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-6 border border-accent/30">
              Automação Industrial • Painéis Elétricos
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6"
          >
            Buscando melhorias e qualidade no seu processo?{' '}
            <span className="text-gradient">Invista em Automação Industrial.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl"
          >
            Projeto e montagem de painéis elétricos de baixa tensão, automação de processos e adequações normativas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg"
            >
              <MessageCircle size={20} />
              Falar no WhatsApp
            </a>
            <button
              onClick={handleScrollToServices}
              className="btn-outline text-lg"
            >
              Ver Serviços
              <ArrowDown size={20} />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-primary-foreground/60"
        >
          <span className="text-sm font-medium">Role para explorar</span>
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};
