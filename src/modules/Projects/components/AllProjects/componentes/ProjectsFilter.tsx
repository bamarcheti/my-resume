import { useEffect, useState } from 'react';
import { getProjectsCategories } from '../../../../../_shared/helpers/getProjectsCategories';
import { ProjectCard } from '../../../../../components/ProjectCard';
import { SelectTag } from '../../../../../components/SelectTag';
import { Repo, fetchRepos } from '../index';

interface ProjectsFilterProps {
  repos: Repo[];
}

export const useProjects = (): Repo[] => {
  return fetchRepos;
};

export const ProjectsFilter = ({ repos }: ProjectsFilterProps) => {
  const projects = useProjects();
  const [isActive, setIsActive] = useState(false);
  const categories = getProjectsCategories(repos);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSelectCategory = (category: string) => {
    if (category === selectedCategory) {
      setSelectedCategory('');
      return;
    }
    setSelectedCategory(category);
  };

  const filteredProjects = getProjectsCategories(selectedCategory);

  const handleChangeFilter = (filterValue: ListJobsProfileDto) => {
    setFilterActive(filterValue);
  };

  useEffect(() => {
    setIsActive(!!selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="flex flex-col w-full justify-center space-y-5">
      <div className="flex justify-center md:justify-start">
        {categories.map((category, index) => {
          return (
            <SelectTag
              key={index}
              onClick={() => handleSelectCategory(category)}
              isActive={isActive}
              category={category}
            />
          );
        })}
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 w-full gap-5">
        {filteredProjects.map((project, index) => (
          <div key={index}>
            <ProjectCard
              name={project.name}
              html_url={project.html_url}
              topics={project.topics}
              homepage={project.homepage}
              previewImageUrl={project.previewImageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
