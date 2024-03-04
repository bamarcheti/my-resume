import { ExtraQualificationsAction } from '../constant/extraQualifications';

export const getCategories = (extraQualifications: ExtraQualificationsAction[]): string[] => {
  const categories: string[] = [];
  for (const topics of extraQualifications) {
    const hasTopics = categories.find((existingTopics) => existingTopics === topics.type);

    if (!hasTopics) {
      categories.push(topics.type);
    }
  }
  return categories;
};
