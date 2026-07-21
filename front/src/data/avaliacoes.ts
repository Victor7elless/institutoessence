export interface Avaliacao {
  nome: string;
  nota: number;
  texto: string;
  data: string;
  avatar: string;
}

export const avaliacoes: Avaliacao[] = [
  {
    nome: 'Maria Fernanda S.',
    nota: 5,
    texto: 'Atendimento excepcional! A Dra. Carla é muito atenciosa e profissional. Fiz fisioterapia por 2 meses e o resultado foi incrível. Super recomendo o Instituto Florence!',
    data: 'há 2 semanas',
    avatar: 'MF',
  },
  {
    nome: 'João Paulo R.',
    nota: 5,
    texto: 'Excelente clínica! Ambiente acolhedor, profissionais qualificados e tratamento personalizado. Minha dor crônica nas costas diminuiu muito após as sessões de fisioterapia.',
    data: 'há 1 mês',
    avatar: 'JP',
  },
  {
    nome: 'Ana Carolina B.',
    nota: 5,
    texto: 'Fiz drenagem linfática com a Sandra e amei o resultado! Profissional incrível, com muito conhecimento e cuidado. O ambiente é lindo e super relaxante. Nota 10!',
    data: 'há 3 semanas',
    avatar: 'AC',
  },
  {
    nome: 'Roberto M.',
    nota: 5,
    texto: 'Após um acidente, precisei de fisioterapia ortopédica. O trabalho da Dra. Carla foi fundamental na minha recuperação. Atendimento humanizado e muito eficiente!',
    data: 'há 2 meses',
    avatar: 'RM',
  },
  {
    nome: 'Patrícia L.',
    nota: 5,
    texto: 'Melhor clínica de saúde integrativa da região! Fiz sessões de acupuntura e os resultados foram surpreendentes. Equipe super qualificada e ambiente tranquilo.',
    data: 'há 1 semana',
    avatar: 'PL',
  },
  {
    nome: 'Carlos E.',
    nota: 5,
    texto: 'Fiz Pilates Clínico e melhorei muito minha postura. A Dra. Carla explica tudo com muita clareza. Atendimento de primeira qualidade. Recomendo a todos!',
    data: 'há 3 meses',
    avatar: 'CE',
  },
];
