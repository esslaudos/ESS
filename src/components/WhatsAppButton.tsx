import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { CONTACT_INFO } from '../constants/contact';

export default function WhatsAppButton() {
  return (
    <motion.a
      href={CONTACT_INFO.whatsappLink('Olá, gostaria de saber mais sobre os serviços da V-TEC.')}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[60] bg-green-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
    >
      <MessageCircle size={28} />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-medium whitespace-nowrap">
        Suporte no WhatsApp
      </span>
    </motion.a>
  );
}
