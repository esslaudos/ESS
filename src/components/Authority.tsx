import creaLogo from '../assets/images/regenerated_image_1778592615753.png';
import abntLogo from '../assets/images/regenerated_image_1778592616938.png';
import nr12Logo from '../assets/images/regenerated_image_1778592614220.png';
import engLogo from '../assets/images/regenerated_image_1778592615201.png';

import { ShieldCheck, FileCheck, HardHat, Cpu } from 'lucide-react';
import { motion } from 'motion/react';

export default function Authority() {
  return (
    <section className="py-12 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:max-w-2xl text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-apple-text mb-6">
              Excelência técnica e <span className="text-brand-navy">conformidade rigorosa</span> em cada laudo emitido. 
            </h2>
            <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed">
              Não arrisque sua operação com amadorismo. Segurança e conformidade são inegociáveis na ESS Laudos.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:gap-12 opacity-80 transition-all duration-500 hover:opacity-100">
            {/* Certificado CREA */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-28 h-28 md:w-36 md:h-36 bg-white rounded-full flex items-center justify-center mb-3 border border-gray-100 group-hover:border-brand-navy transition-all duration-500 p-6 shadow-sm group-hover:shadow-md overflow-hidden">
                <img 
                 src={creaLogo} alt="CREA Logo" 
                  className="w-full h-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-gray-500 group-hover:text-apple-text transition-colors">Certificado CREA</span>
            </div>
            
            {/* Normas ABNT */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-28 h-28 md:w-36 md:h-36 bg-white rounded-full flex items-center justify-center mb-3 border border-gray-100 group-hover:border-brand-navy transition-all duration-500 p-6 shadow-sm group-hover:shadow-md overflow-hidden">
                  <img 
                 src={abntLogo} alt="ABNT Logo"
                  className="w-full h-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-gray-400 group-hover:text-apple-text transition-colors">Normas ABNT</span>
            </div>

            {/* Segurança NR-12 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-28 h-28 md:w-36 md:h-36 bg-white rounded-full flex items-center justify-center mb-3 border border-gray-100 group-hover:border-brand-navy transition-all duration-500 p-4 shadow-sm group-hover:shadow-md overflow-hidden">
                 <img 
                   src={nr12Logo} alt="NR12 Logo" 
                  className="w-full h-auto object-contain transition-transform group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-gray-500 group-hover:text-apple-text transition-colors">Segurança NR-12</span>
            </div>

            {/* Engenharia Aplicada */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-28 h-28 md:w-36 md:h-36 bg-white rounded-full flex items-center justify-center mb-3 border border-gray-100 group-hover:border-brand-navy transition-all duration-500 p-6 shadow-sm group-hover:shadow-md overflow-hidden">
                <img 
                  src={engLogo} alt="Eng Logo"
                  className="w-full h-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-gray-500 group-hover:text-apple-text transition-colors">Engenharia Aplicada</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
