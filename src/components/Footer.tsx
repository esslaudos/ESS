import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { CONTACT_INFO } from '../constants/contact';
import { useState, FormEvent, ChangeEvent } from 'react';

export default function Footer() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    servico: 'Laudo NR-12',
    mensagem: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `Sugestão de Orçamento - ${formData.servico} - ${formData.nome}`;
    const body = `Nome: ${formData.nome}\nTelefone: ${formData.telefone}\nServiço: ${formData.servico}\n\nMensagem:\n${formData.mensagem}`;
    
    window.location.href = CONTACT_INFO.emailLink(subject, body);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <footer id="contato" className="bg-white pt-32 pb-12 overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold tracking-tight mb-8"
            >
              Vamos regularizar sua empresa agora.
            </motion.h2>
            <p className="text-xl text-gray-500 font-light mb-12 max-w-lg">
              Evite multas e interdições. Garanta a segurança jurídica e operacional do seu negócio com especialistas.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-apple-grey flex items-center justify-center text-brand-navy">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email</p>
                  <p className="text-lg font-medium">{CONTACT_INFO.email}</p>
                </div>
              </div>
              <a 
                href={CONTACT_INFO.whatsappLink('Olá, gostaria de falar com um especialista.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-apple-grey flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">WhatsApp</p>
                  <p className="text-lg font-medium group-hover:text-brand-navy transition-colors">{CONTACT_INFO.phone}</p>
                </div>
              </a>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-apple-grey flex items-center justify-center text-brand-navy">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Localização</p>
                  <p className="text-lg font-medium">{CONTACT_INFO.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-apple-grey p-8 md:p-12 rounded-[2.5rem]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold ml-1">Nome Completo</label>
                  <input 
                    type="text" 
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    className="w-full bg-white border-none rounded-2xl p-4 focus:ring-2 focus:ring-brand-navy outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold ml-1">Telefone / WhatsApp</label>
                  <input 
                    type="tel" 
                    name="telefone"
                    required
                    value={formData.telefone}
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                    className="w-full bg-white border-none rounded-2xl p-4 focus:ring-2 focus:ring-brand-navy outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold ml-1">Qual serviço você procura?</label>
                <select 
                  name="servico"
                  value={formData.servico}
                  onChange={handleChange}
                  className="w-full bg-white border-none rounded-2xl p-4 focus:ring-2 focus:ring-brand-navy outline-none transition-all appearance-none cursor-pointer"
                >
                  <option>Laudo NR-12</option>
                  <option>PPCI</option>
                  <option>PMOC</option>
                  <option>Projeto Estrutural</option>
                  <option>Projeto Mecânico</option>
                  <option>Outros</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold ml-1">Mensagem</label>
                <textarea 
                  name="mensagem"
                  required
                  value={formData.mensagem}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Como podemos ajudar?"
                  className="w-full bg-white border-none rounded-2xl p-4 focus:ring-2 focus:ring-brand-navy outline-none transition-all resize-none"
                />
              </div>
              <button type="submit" className="apple-button-primary w-full flex items-center justify-center space-x-2 py-4">
                <span>Enviar Solicitação</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} ESS Laudos Engenharia. Todos os direitos reservados.
          </p>
          <div className="flex items-center space-x-8 text-sm font-medium">
            <a href="#" className="hover:text-brand-navy">Política de Privacidade</a>
            <a href="#" className="hover:text-brand-navy">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
