import { Repo } from '../../modules/Projects/components/AllProjects';

// export const getProjectsCategories = (projects: Repo[]): string[] => {
//   const categories: string[] = [];
//   for (const project of projects) {
//     for (const topic of project.topics) {
//       const hasTopic = categories.includes(topic);
//       if (!hasTopic) {
//         categories.push(topic);
//       }
//     }
//   }
//   return categories;
// };

export const getProjectsCategories = (projects: Repo[]): string[] => {
  const categories: string[] = [];
  for (const project of projects) {
    const hasProject = categories.find(
      (existingProject) => existingProject === project.topics[project.id]
    );

    if (!hasProject) {
      categories.push(project.topics[project.id]);
    }
  }
  return categories;
};
