import { ExtraQualificationsAction } from '../constant/extraQualifications';

export const getQualificationsFilteredTechs = (
  selectedCategory: string,
  existingQualifications: ExtraQualificationsAction[]
): ExtraQualificationsAction[] => {
  if (!selectedCategory) return existingQualifications;
  return existingQualifications.filter((topics) => topics.type === selectedCategory);
};
