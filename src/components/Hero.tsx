import { motion } from 'motion/react';
import { CONTACT_INFO } from '../constants/contact';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#F5F5F7]">
      {/* Background with technical drawing feel */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/engineering/1920/1080" 
          alt="Technical Drawing Background" 
          className="w-full h-full object-cover opacity-15 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-apple-text leading-[1.1]"
            >
              Precisão que Protege.<br />
              <span className="text-brand-navy">Engenharia que Transforma.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed font-light"
            >
              A autoridade técnica que sua empresa exige. Laudos, Projetos Estruturais e Mecânicos com conformidade rigorosa segundo o CREA, ABNT NBRs e NRs
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 flex flex-col sm:flex-row gap-4"
            >
              <a 
                href={CONTACT_INFO.whatsappLink('Olá, gostaria de falar com um engenheiro especialista')}
                target="_blank"
                rel="noopener noreferrer"
                className="apple-button-primary flex items-center justify-center text-center text-lg"
              >
                Falar com Especialista (WhatsApp)
              </a>
              <button 
                onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                className="apple-button-secondary flex items-center justify-center text-center text-lg"
              >
                Nossos Serviços
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/3] w-full flex items-center justify-center group"
          >
            <img 
              src="/src/assets/images/hero-image.jpg" 
              alt="Technical Engineering View" 
              className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/1200x800/white/1d1d1f?text=Engenharia+T%C3%A9cnica";
              }}
            />
            
            {/* Minimal technical markers */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-brand-navy/20" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-brand-navy/20" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-brand-navy/20" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-brand-navy/20" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-[1px] h-12 bg-apple-text/10" />
      </motion.div>
    </section>
  );
}
