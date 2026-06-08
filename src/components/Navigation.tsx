import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Rocket, Shield, HardHat, Fan, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { CONTACT_INFO } from '../constants/contact';

const services = [
  { name: 'NR-12 (Segurança em Máquinas)', icon: HardHat, path: '/servicos/nr-12' },
  { name: 'PPCI (Prevenção de Incêndio)', icon: Shield, path: '/servicos/ppci' },
  { name: 'Responsabilidade Técnica / ART', icon: Rocket, path: '/servicos/art' },
  { name: 'Ar Condicionado / PMOC', icon: Fan, path: '/servicos/pmoc' },
  { name: 'Perícia Técnica', icon: Search, path: '/servicos/pericia' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
    )}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight text-apple-text">
          ESS <span className="font-light">Laudos</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium hover:text-brand-navy transition-colors">Home</Link>
          
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown(true)}
            onMouseLeave={() => setActiveDropdown(false)}
          >
            <button className="flex items-center space-x-1 text-sm font-medium hover:text-brand-navy transition-colors">
              <span>Laudos</span>
              <ChevronDown size={14} className={cn('transition-transform', activeDropdown && 'rotate-180')} />
            </button>
            <AnimatePresence>
              {activeDropdown && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-100 rounded-2xl shadow-xl p-2"
                >
                  {services.map((s) => (
                    <Link
                      key={s.path}
                      to={s.path}
                      className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-apple-grey transition-colors text-sm"
                    >
                      <s.icon size={18} className="text-brand-navy" />
                      <span>{s.name}</span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/projetos-mecanicos" className="text-sm font-medium hover:text-brand-navy transition-colors">Projetos Mecânicos</Link>
          <Link to="/projeto-estrutural" className="text-sm font-medium hover:text-brand-navy transition-colors">Projeto Estrutural</Link>
          <a 
            href={CONTACT_INFO.whatsappLink('Olá, gostaria de falar com um especialista.')}
            target="_blank"
            rel="noopener noreferrer"
            className="apple-button-primary !py-2 !px-5 text-sm"
          >
            Contato
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-white md:hidden pt-24 px-6"
          >
            <div className="flex flex-col space-y-6">
              <Link to="/" onClick={() => setIsOpen(false)} className="text-2xl font-semibold">Home</Link>
              <div className="space-y-4">
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Serviços</p>
                {services.map((s) => (
                  <Link
                    key={s.path}
                    to={s.path}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-3 text-lg font-medium"
                  >
                    <s.icon size={20} className="text-brand-navy" />
                    <span>{s.name}</span>
                  </Link>
                ))}
              </div>
              <Link to="/projetos-mecanicos" onClick={() => setIsOpen(false)} className="text-2xl font-semibold">Projetos Mecânicos</Link>
              <Link to="/projeto-estrutural" onClick={() => setIsOpen(false)} className="text-2xl font-semibold">Projeto Estrutural</Link>
              <a 
                href={CONTACT_INFO.whatsappLink('Olá, gostaria de falar com um especialista.')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)} 
                className="apple-button-primary text-center"
              >
                Falar com Especialista
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
