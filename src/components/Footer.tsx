import Logo from '@/assets/hmsis.png'

export const Footer = () => {
  return (
    <footer className="bg-primary border-t border-primary-foreground/10">
      <div className="section-container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <p className="text-primary-foreground/60 text-sm text-center md:text-left">
              © Copyright 2026 • Todos os direitos reservados — Aton Soluções Técnicas.
            </p>
          </div>

          {/* Developed By */}
          <div className="flex items-center gap-2 text-primary-foreground/50 text-sm">
            <span>Developed by</span>
            <div className="px-3 py-1.5 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 font-semibold text-primary-foreground/70">
              <a href="https://www.hmsis.com.br/" target='_blank' className="flex items-center gap-2">
                <img src={Logo} alt="HMSIS Sistemas" className="h-6 w-auto" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
