export interface Tratamento {
  titulo: string;
  descricao: string;
  icone: string;
}

export interface Profissional {
  id: number;
  nome: string;
  titulo: string;
  registro: string;
  descricao: string;
  imagem: string;
  tratamentos: Tratamento[];
}

export const profissionaisData: Profissional[] = [
  {
    id: 0,
    nome: 'Dra. Carla Cristina Telles',
    titulo: 'Fisioterapeuta e Terapeuta Integrativa',
    registro: 'Crefito 13 - 166432-F',
    descricao: `Graduada pelo Centro Universitário da Grande Dourados - UNIGRAN. Pós graduada em ortopedia, traumatologia e desportiva pela faculdade Inspirar. Fisioterapeuta e Terapeuta integrativa, com formações em diversas abordagens voltadas à saúde do corpo, mente e emoções.`,
    imagem: 'carlaa23232',
    tratamentos: [
      { titulo: 'Fisioterapia Ortopédica', descricao: 'Reabilitação de lesões musculoesqueléticas, entorses, fraturas e disfunções posturais com técnicas modernas e eficazes.', icone: '🦴' },
      { titulo: 'Fisioterapia Esportiva', descricao: 'Prevenção e tratamento de lesões em atletas, com protocolos específicos para retorno rápido e seguro à prática esportiva.', icone: '🏃' },
      { titulo: 'RPG - Reeducação Postural', descricao: 'Técnica global que trata desvios posturais e dores crônicas através de posturas ativas e alongamentos globais.', icone: '🧘' },
      { titulo: 'Pilates Clínico', descricao: 'Método terapêutico que fortalece o core, melhora postura e equilíbrio, indicado para reabilitação e prevenção de lesões.', icone: '⚖️' },
      { titulo: 'Acupuntura', descricao: 'Técnica milenar da medicina chinesa que estimula pontos específicos do corpo para aliviar dores e promover equilíbrio energético.', icone: '🪡' },
      { titulo: 'Ventosaterapia', descricao: 'Terapia com copos que geram sucção na pele, estimulando a circulação e aliviando tensões musculares profundas.', icone: '🌀' },
      { titulo: 'Auriculoterapia', descricao: 'Tratamento por pontos reflexos na orelha, eficaz para dores, ansiedade, insônia e cessação do tabagismo.', icone: '👂' },
      { titulo: 'Cromoterapia', descricao: 'Uso terapêutico das cores para harmonizar o organismo, influenciar estados emocionais e promover bem-estar integral.', icone: '🌈' },
      { titulo: 'Quiropraxia', descricao: 'Manipulação da coluna vertebral para corrigir subluxações, aliviar dores e restaurar a função nervosa adequada.', icone: '🔧' },
      { titulo: 'Dry Needling', descricao: 'Agulhamento seco de pontos gatilho musculares para alívio imediato de dores crônicas e tensões musculares.', icone: '💉' },
    ],
  },
  {
    id: 1,
    nome: 'Sandra Telles David',
    titulo: 'Profissional da Área da Saúde',
    registro: 'Registro Profissional',
    descricao: `Profissional dedicada ao cuidado integral da saúde, com foco em abordagens personalizadas para cada paciente. Comprometida com a excelência no atendimento e o bem-estar de cada pessoa que passa pelo Instituto.`,
    imagem: 'sandra-site',
    tratamentos: [
      { titulo: 'Drenagem Linfática', descricao: 'Massagem suave que estimula o sistema linfático, reduzindo inchaços, desintoxicando o organismo e melhorando a imunidade.', icone: '💆' },
      { titulo: 'Massoterapia', descricao: 'Técnicas de massagem terapêutica para alívio do estresse, tensões musculares e promoção do relaxamento profundo.', icone: '🤲' },
      { titulo: 'Reflexologia Podal', descricao: 'Massagem nos pés que estimula pontos reflexos correspondentes a órgãos e sistemas do corpo, promovendo equilíbrio e saúde.', icone: '🦶' },
      { titulo: 'Aromaterapia', descricao: 'Uso de óleos essenciais naturais para promover relaxamento, aliviar ansiedade e melhorar o bem-estar físico e emocional.', icone: '🌸' },
      { titulo: 'Reiki', descricao: 'Técnica de canalização de energia vital para harmonização do corpo e mente, promovendo paz interior e autocura.', icone: '✨' },
      { titulo: 'Florais de Bach', descricao: 'Terapia com essências florais que equilibram estados emocionais como medo, tristeza, insegurança e estresse.', icone: '🌺' },
      { titulo: 'Crânio Sacral', descricao: 'Terapia suave que trabalha o sistema crânio sacral para aliviar tensões no sistema nervoso e melhorar o funcionamento geral.', icone: '🧠' },
      { titulo: 'Pedras Quentes', descricao: 'Massagem com pedras vulcânicas aquecidas que alivia tensões musculares profundas e promove relaxamento intenso.', icone: '🪨' },
      { titulo: 'Liberação Miofascial', descricao: 'Técnica manual que libera restrições na fáscia muscular, aliviando dores crônicas e restaurando mobilidade.', icone: '🌊' },
      { titulo: 'Massagem Ayurvédica', descricao: 'Massagem indiana com óleos medicinais que equilibra os doshas, promovendo saúde integral do corpo e da mente.', icone: '🏺' },
    ],
  },
  {
    id: 2,
    nome: 'Fabio Telles David',
    titulo: 'Profissional da Área da Saúde',
    registro: 'Registro Profissional',
    descricao: `Profissional especializado em terapias complementares e medicina integrativa. Com abordagem humanizada e técnica, oferece tratamentos que unem o melhor da ciência moderna com terapias naturais.`,
    imagem: 'carlaa23232',
    tratamentos: [
      { titulo: 'Hipnoterapia', descricao: 'Uso do estado hipnótico para acessar o subconsciente, tratando fobias, vícios, ansiedade e bloqueios emocionais.', icone: '🔮' },
      { titulo: 'Meditação Guiada', descricao: 'Sessões terapêuticas de meditação que reduzem estresse, melhoram foco e promovem equilíbrio emocional e mental.', icone: '🧘' },
      { titulo: 'Coaching de Saúde', descricao: 'Processo de acompanhamento para mudança de hábitos, metas de saúde e desenvolvimento de estilo de vida equilibrado.', icone: '🎯' },
      { titulo: 'Terapia Floral Sistêmica', descricao: 'Integração de essências florais com abordagem sistêmica para resolução de padrões emocionais e relacionais repetitivos.', icone: '🌻' },
      { titulo: 'Biofeedback', descricao: 'Tecnologia que monitora sinais fisiológicos em tempo real, treinando o paciente a controlar respostas corporais ao estresse.', icone: '📊' },
      { titulo: 'Musicoterapia', descricao: 'Uso terapêutico da música para promover saúde emocional, cognitiva e física, com técnicas ativas e receptivas.', icone: '🎵' },
      { titulo: 'Yoga Terapêutico', descricao: 'Prática adaptada de yoga com foco terapêutico, aliviando dores, reduzindo estresse e melhorando qualidade de vida.', icone: '🌿' },
      { titulo: 'Terapia Nutricional', descricao: 'Orientação alimentar personalizada baseada em medicina funcional para otimizar saúde, energia e bem-estar geral.', icone: '🥗' },
      { titulo: 'Geoterapia', descricao: 'Uso terapêutico de argilas e minerais naturais para desintoxicação, tratamento de inflamações e regeneração tecidual.', icone: '🌍' },
      { titulo: 'Luminoterapia', descricao: 'Aplicação de frequências de luz terapêutica para tratamento de desequilíbrios físicos, emocionais e energéticos.', icone: '💡' },
    ],
  },
];
