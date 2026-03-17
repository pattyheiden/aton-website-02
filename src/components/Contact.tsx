import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { toast } from "sonner";
import { AnimatedSection, SlideIn } from "@/components/AnimatedSection";

const formatPhone = (value: string) => {
  const numbers = value.replace(/\D/g, '');
  if (numbers.length <= 2) return `(${numbers}`;
  if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
  if (numbers.length <= 11) return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
  return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
};

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone, subject, message } = formData;

    if (!name || !email || !phone || !subject || !message) {
      toast.error("Preencha os campos obrigatórios.");
      return;
    }

    const text =
      "🚀 NOVA SOLICITAÇÃO DE ORÇAMENTO\n\n" +
      "------------------------------\n\n" +
      "Nome: " + name + "\n" +
      "E-mail: " + email + "\n" +
      "Telefone: " + (phone || "Não informado") + "\n\n" +
      "Assunto: " + (subject || "Não informado") + "\n\n" +
      "------------------------------\n\n" +
      "Mensagem:\n" +
      message + "\n\n" +
      "Mensagem enviada pelo site.";

    const url = `https://api.whatsapp.com/send?phone=554796173103&text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "phone" ? formatPhone(value) : value,
    }));
  };


  return (
    <section id="contato" className="py-24 bg-primary relative overflow-hidden">
      {/* Pattern */}
      <div className="absolute inset-0 industrial-pattern opacity-10" />

      {/* Orbit Decoration */}
      <div className="orbit-decoration w-[400px] h-[400px] -bottom-[200px] -right-[200px] opacity-10 border-accent/30" />

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <SlideIn direction="left"
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-4">
              Entre em <span className="text-gradient">Contato</span>
            </h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto">
              Dúvidas? Sugestões? Nos conte do que você precisa! É sempre um prazer atendê-lo.
            </p>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-4" />
          </SlideIn>

          {/* Form */}
          <SlideIn direction="right">
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-primary-foreground/80 mb-2 font-medium">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-modern bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:ring-accent focus:border-accent"
                    placeholder="Seu nome completo"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-primary-foreground/80 mb-2 font-medium">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-modern bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:ring-accent focus:border-accent"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-primary-foreground/80 mb-2 font-medium">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength={16}
                    required
                    className="input-modern bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:ring-accent focus:border-accent"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-primary-foreground/80 mb-2 font-medium">
                    Assunto *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="input-modern bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:ring-accent focus:border-accent"
                    placeholder="Assunto da mensagem"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-primary-foreground/80 mb-2 font-medium">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="input-modern bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:ring-accent focus:border-accent resize-none"
                  placeholder="Digite sua mensagem aqui..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary text-lg px-10 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </div>
            </form>
          </SlideIn>
        </div>
      </div>
    </section>
  );
};
