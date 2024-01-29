export interface Action {
  name: string;
  strength: 'strong' | 'average' | 'weak';
}

export const skills: Action[] = [
  { name: 'HMTL', strength: 'strong' },
  { name: 'CSS', strength: 'strong' },
  { name: 'Git', strength: 'strong' },
  { name: 'GitHub', strength: 'strong' },
  { name: 'Trabalho em Equipe', strength: 'strong' },
  { name: 'Scum', strength: 'strong' },
  { name: 'Kambam', strength: 'strong' },
  { name: 'JavaScript', strength: 'average' },
  { name: 'TypeScript', strength: 'average' },
  { name: 'React.js', strength: 'average' },
  { name: 'Next.js', strength: 'average' },
  { name: 'Tailwind', strength: 'average' },
  { name: 'ESLint', strength: 'average' },
  { name: 'Prettier', strength: 'average' },
  { name: 'Yarn', strength: 'average' },
  { name: 'NPM', strength: 'average' },
  { name: 'JSON', strength: 'average' },
  { name: 'API Rest', strength: 'average' },
  { name: 'Hooks', strength: 'average' },
  { name: 'UX', strength: 'average' },
  { name: 'UI', strength: 'average' },
  { name: 'Node.js', strength: 'weak' },
  { name: 'Vue.js', strength: 'weak' },
  { name: 'Material UI', strength: 'weak' },
  { name: 'React Native', strength: 'weak' }
];

export default skills;
