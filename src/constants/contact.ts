export const CONTACT_INFO = {
  phone: '(16) 98999-0167', // Texto exibido no site
  email: 'esslaudos@gmail.com',
  address: 'Franca, São Paulo - Brasil',
  whatsappLink: (message?: string) => {
    // IMPORTANTE: O número deve ser apenas dígitos, começando com o código do país (55 para Brasil)
    // Exemplo: 5541999999999
    const phoneNumber = '5516989990167'; 
    const baseUrl = `https://wa.me/${phoneNumber}`;
    if (message) {
      return `${baseUrl}?text=${encodeURIComponent(message)}`;
    }
    return baseUrl;
  },
  emailLink: (subject?: string, body?: string) => {
    let link = `mailto:esslaudos@gmail.com`;
    const params = [];
    if (subject) params.push(`subject=${encodeURIComponent(subject || '')}`);
    if (body) params.push(`body=${encodeURIComponent(body || '')}`);
    if (params.length > 0) link += `?${params.join('&')}`;
    return link;
  }
};
