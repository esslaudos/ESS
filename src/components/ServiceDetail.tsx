import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants/contact';

interface ServiceDetailProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  benefits: string[];
}

export default function ServiceDetail({ title, subtitle, description, image, benefits }: ServiceDetailProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-apple-grey pt-24 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="flex items-center space-x-2 text-brand-navy font-medium mb-4 hover:opacity-70 transition-opacity">
            <ArrowLeft size={18} />
            <span>Voltar para Home</span>
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-2"
          >
            {title}
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-500 font-light max-w-2xl">{subtitle}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pt-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="order-2 lg:order-1">
            <div className="prose prose-lg text-gray-600 font-light leading-relaxed mb-12">
              <p>{description}</p>
              <p className="mt-4">
                Nosso compromisso é entregar excelência técnica e segurança jurídica para sua operação. Todos os nossos projetos e laudos são acompanhados de ART (Anotação de Responsabilidade Técnica).
              </p>
            </div>

            <h3 className="text-2xl font-bold mb-8">Por que contratar a ESS Laudos?</h3>
            <ul className="space-y-4 mb-12">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start space-x-3">
                  <CheckCircle2 className="text-brand-navy flex-shrink-0 mt-1" size={20} />
                  <span className="text-lg text-gray-600 font-light">{benefit}</span>
                </li>
              ))}
            </ul>

            <a 
              href={CONTACT_INFO.whatsappLink(`Olá, gostaria de solicitar um orçamento para ${title}.`)} 
              target="_blank"
              rel="noopener noreferrer"
              className="apple-button-primary inline-flex py-4 px-8 text-lg"
            >
              Solicitar Orçamento Agora
            </a>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="order-1 lg:order-2 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl aspect-[3/4] w-full max-w-[600px] mx-auto"
          >
            <img 
               src={image} 
               alt={title} 
               className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
               referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
