import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants/services';

const gridLayout = [
  { id: 'nr-12', span: 'md:col-span-2' },
  { id: 'projetos-mecanicos', span: 'md:col-span-1' },
  { id: 'projeto-estrutural', span: 'md:col-span-3' }
];

const featuredServices = gridLayout.map(layout => {
  const service = SERVICES.find(s => s.id === layout.id);
  return { ...service, span: layout.span };
});

export default function ServicesGrid() {
  return (
    <section id="servicos" className="py-32 bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-navy font-semibold uppercase tracking-widest text-sm mb-4"
          >
            Especialidades
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-apple-text"
          >
            Soluções completas de engenharia.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredServices.map((service, index) => service && (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-[2.5rem] bg-white p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col justify-between h-[500px] ${service.span}`}
            >
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-500 max-w-sm font-light text-lg">
                  {service.gridDescription}
                </p>
                <Link 
                  to={service.link}
                  className="mt-6 flex items-center space-x-2 text-brand-navy font-medium hover:underline group/btn"
                >
                  <span>Ver Detalhes</span>
                  <ArrowUpRight size={18} className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </Link>
              </div>
              
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover grayscale opacity-10 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
