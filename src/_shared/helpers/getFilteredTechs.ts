import { ExtraQualificationsAction } from '../constant/extraQualifications';

export const getFilteredTechs = (
  selectedCategory: string,
  existingQualifications: ExtraQualificationsAction[]
): ExtraQualificationsAction[] => {
  if (!selectedCategory) return existingQualifications;
  return existingQualifications.filter((topics) => topics.type === selectedCategory);
};
