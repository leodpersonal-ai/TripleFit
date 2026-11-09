// Catálogo de imagens originais TripleFit. Arquivos esperados em /public/exercises/.
// Não atribuir uma imagem a um exercício diferente do representado.
export const exerciseImages = {
  '001': '/exercises/supino-reto-barra.webp',
  '006': '/exercises/puxada-frontal.webp',
  '011': '/exercises/desenvolvimento-halteres.webp',
  '012': '/exercises/elevacao-lateral.webp',
  '014': '/exercises/rosca-direta-barra.webp',
  '019': '/exercises/agachamento-livre.webp',
  '021': '/exercises/cadeira-extensora.webp',
  '023': '/exercises/mesa-flexora.webp',
};
export const getExerciseImage = (exerciseId) => exerciseImages[exerciseId] || null;
