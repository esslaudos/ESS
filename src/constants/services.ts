import laudoNr12 from '../assets/images/laudo-nr12.jpg';
import projetoPpci from '../assets/images/projeto-ppci.jpg';
import planoPmoc from '../assets/images/plano-pmoc.jpg';
import artResponsabilidade from '../assets/images/art-responsabilidade.jpg';
import periciaTecnica from '../assets/images/pericia-tecnica.jpg';
import projetosMecanicos from '../assets/images/projetos-mecanicos.jpg';
import projetosEstruturais from '../assets/images/projetos-estruturais.jpg';

export interface ServiceData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  gridDescription: string;
  image: string;
  link: string;
  benefits: string[];
}

export const SERVICES: ServiceData[] = [
  {
    id: 'nr-12',
    title: 'Laudo NR-12',
    subtitle: 'Conformidade e segurança absoluta para máquinas e equipamentos industriais.',
    description: 'Nossos especialistas realizam inspeções minuciosas para garantir que sua empresa atenda a todos os requisitos da Norma Regulamentadora 12. Evite multas pesadas e interdições com laudos técnicos precisos e planos de ação eficazes.',
    gridDescription: 'Conformidade operacional rigorosa. Especialistas em Perícias Gerais, NR-12, PPCI e PMOC para garantir a segurança e legalidade da sua indústria.',
    image: laudoNr12,
    link: '/servicos/nr-12',
    benefits: [
      'Eliminação total de riscos de interdição pelo Ministério do Trabalho.',
      'Aumento da vida útil e segurança operacional dos equipamentos.',
      'Redução drástica de acidentes de trabalho e passivos trabalhistas.',
      'Conformidade técnica rigorosa com selo CREA.'
    ]
  },
  {
    id: 'ppci',
    title: 'PPCI',
    subtitle: 'Plano de Prevenção e Proteção Contra Incêndio completo e aprovado.',
    description: 'Desenvolvemos e regularizamos o PPCI da sua edificação ou indústria. Atuamos desde o diagnóstico inicial até a aprovação final junto aos órgãos competentes, garantindo o máximo de proteção para vidas e patrimônio.',
    gridDescription: 'Plano de Prevenção e Proteção Contra Incêndio completo e aprovado.',
    image: projetoPpci,
    link: '/servicos/ppci',
    benefits: [
      'Regularização documental para obtenção de alvarás.',
      'Dimensionamento correto de equipamentos de combate a incêndio.',
      'Consultoria para treinamento de brigadas e sinalização.',
      'Projeto otimizado para reduzir custos de implantação.'
    ]
  },
  {
    id: 'pmoc',
    title: 'Plano PMOC',
    subtitle: 'Qualidade do ar e manutenção preventiva em sistemas de climatização.',
    description: 'O PMOC é obrigatório por lei para estabelecimentos públicos e privados com sistemas de ar condicionado acima de 60.000 BTU/h. Garantimos a conformidade legal e a saúde ocupacional dos seus colaboradores.',
    gridDescription: 'Qualidade do ar e manutenção preventiva em sistemas de climatização.',
    image: planoPmoc,
    link: '/servicos/pmoc',
    benefits: [
      'Atendimento integral à Lei 13.589/2018.',
      'Melhoria na eficiência energética dos sistemas de climatização.',
      'Redução de afastamentos por doenças respiratórias.',
      'Prevenção de quebras repentinas e manutenção corretiva cara.'
    ]
  },
  {
    id: 'art',
    title: 'Responsabilidade Técnica (ART)',
    subtitle: 'Anotação de Responsabilidade Técnica para operações críticas.',
    description: 'Assumimos a responsabilidade técnica da sua operação, garantindo que todos os processos de engenharia mecânica estejam sob supervisão de profissionais qualificados perante o CREA.',
    gridDescription: 'Anotação de Responsabilidade Técnica (ART) para operações críticas.',
    image: artResponsabilidade,
    link: '/servicos/art',
    benefits: [
      'Segurança jurídica para a empresa e diretores.',
      'Supervisão direta por Engenheiros Mecânicos seniores.',
      'Validação técnica de processos industriais.',
      'Garantia de conformidade com normativas vigentes.'
    ]
  },
  {
    id: 'pericia',
    title: 'Perícia Técnica',
    subtitle: 'Análise crítica e laudos periciais para disputas e sinistros.',
    description: 'Realizamos perícias técnicas em acidentes, falhas de equipamentos e disputas judiciais. Nossos laudos são robustos, fundamentados em metodologias científicas e prontos para uso em processos legais.',
    gridDescription: 'Análise crítica e laudos periciais para disputas e sinistros.',
    image: periciaTecnica,
    link: '/servicos/pericia',
    benefits: [
      'Assistência técnica para processos judiciais complexos.',
      'Identificação da causa raiz de falhas e quebras.',
      'Avaliação técnica imparcial e fundamentada.',
      'Suporte especializado para sinistros e Seguros.'
    ]
  },
  {
    id: 'projetos-mecanicos',
    title: 'Projetos Mecânicos',
    subtitle: 'Inovação e precisão no desenvolvimento de máquinas e dispositivos.',
    description: 'Desenvolvemos projetos mecânicos do zero ou otimizamos sistemas existentes. Utilizamos softwares de ponta para modelagem 3D, simulação de esforço e detalhamento técnico para fabricação.',
    gridDescription: 'Desenvolvimento de máquinas e dispositivos com detalhamento técnico avançado e simulação.',
    image: projetosMecanicos,
    link: '/projetos-mecanicos',
    benefits: [
      'Uso de softwares CAD/CAE de última geração.',
      'Projetos focados em facilidade de manutenção e fabricação.',
      'Otimização de custos de produção e materiais.',
      'Simulação cinemática e análise dinâmica.'
    ]
  },
  {
    id: 'projeto-estrutural',
    title: 'Projetos Estruturais',
    subtitle: 'Segurança e estabilidade para galpões e estruturas metálicas.',
    description: 'Projetamos estruturas metálicas robustas e econômicas. Realizamos análise por elementos finitos (FEA) para garantir que cada viga e pilar suporte as cargas necessárias com o máximo de eficiência.',
    gridDescription: 'Cálculo e dimensionamento de estruturas metálicas segundo as normas ABNT NBR 8800:2024 e ABNT NBR 6123:2023 com análise de elementos finitos (FEA).',
    image: projetosEstruturais,
    link: '/projeto-estrutural',
    benefits: [
      'Dimensionamento preciso para máxima economia de aço.',
      'Cálculo de cargas de vento, neve e sobrecargas.',
      'Detalhamento completo de conexões e fundações.',
      'Análise de tensões avançada com softwares de Engenharia.'
    ]
  }
];
