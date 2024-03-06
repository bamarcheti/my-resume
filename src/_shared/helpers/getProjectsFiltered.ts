import { Repo } from '../../modules/Projects/components/AllProjects';

export const getProjectsFiltered = (selectedCategory: string, existingProjects: Repo[]): Repo[] => {
  if (!selectedCategory) return existingProjects;
  return existingProjects.filter((topics) => topics.topics[topics.id] === selectedCategory);
};
