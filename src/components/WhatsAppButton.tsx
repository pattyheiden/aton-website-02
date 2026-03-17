import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const whatsappNumber = '5547996173103';
const whatsappMessage = encodeURIComponent('Olá! Gostaria de um orçamento para automação/painéis elétricos.');

export const WhatsAppButton = () => {
  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Falar no WhatsApp"
    >
      {/* Pulse Ring */}
      <span className="absolute inset-0 rounded-full bg-accent/30 animate-ping" />
      <span className="absolute inset-0 rounded-full bg-accent/20 pulse-ring" />
      
      {/* Button */}
      <div 
        className="relative w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110"
        style={{ 
          background: 'linear-gradient(135deg, hsl(52 95% 50%), hsl(52 95% 60%))',
          boxShadow: '0 4px 20px hsl(52 95% 50% / 0.5)'
        }}
      >
        <MessageCircle className="w-8 h-8 text-primary" strokeWidth={2.5} />
      </div>

      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
        Falar no WhatsApp
        <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-primary" />
      </div>
    </motion.a>
  );
};
