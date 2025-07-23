import { useState } from 'react';
import { ShortPitch } from 'src/types/legacy/shortpitch';
import { getShortPitchList, getShortPitchListByCategory } from '@apis/legacy/getShortPitch';
import { useQuery } from '@tanstack/react-query';
import getTrueRecommendations from '@apis/legacy/getRecommends';

type SortStandard = null | 'like' | 'view' | 'deadline';

export default function usePitchList(initCategory: string): {
  pitchList: ShortPitch[] | null;
  currentCategory: string;
  currentGroup: string;
  sortStandard: SortStandard;
  isLoading: boolean;
  selectCategory: (newCategory: string) => void;
  selectGroup: (newGroup: string) => void;
  sortBy: (standard: SortStandard) => void;
} {
  const [currentCategory, setCurrentCategory] = useState<string>(initCategory);
  const [currentGroup, setCurrentGroup] = useState<string>('');
  const [sortStandard, setSortStandard] = useState<SortStandard>(null);

  const { data: reservePitchList, isLoading } = useQuery<ShortPitch[]>({
    queryKey: ['pitchList', currentCategory],
    queryFn: async () => {
      if (currentCategory === 'all') {
        return new Promise((resolve) => setTimeout(() => resolve(getShortPitchList()), 3000));
      }
      if (currentCategory === 'ai') return await getTrueRecommendations();
      return await getShortPitchListByCategory(currentCategory);
    },
    staleTime: 1000 * 20,
  });

  function filterAndSortList() {
    if (!reservePitchList) return null;
    if (currentCategory === 'ai') return reservePitchList;
    let newList: ShortPitch[] = reservePitchList;
    const categoryCondition = (category: string) => currentCategory === 'all' || category === currentCategory;
    const groupCondition = (subCategory: string[]) => currentGroup === '' || subCategory.includes(currentGroup);
    newList = newList.filter(
      (pitchInfo) => categoryCondition(pitchInfo.mainCategory) && groupCondition(pitchInfo.subCategory),
    );
    return newList;
  }

  const pitchList: ShortPitch[] | null = filterAndSortList();

  function selectCategory(newCategory: string) {
    setCurrentGroup('');
    if (currentCategory === newCategory) return setCurrentCategory(initCategory);
    setCurrentCategory(newCategory);
  }

  function selectGroup(newGroup: string) {
    if (currentGroup === newGroup) return setCurrentCategory('');
    setCurrentGroup(newGroup);
  }

  function sortBy(standard: SortStandard) {
    if (sortStandard === standard) return setSortStandard(null);
    setSortStandard(standard);
  }

  return {
    pitchList,
    currentCategory,
    currentGroup,
    isLoading,
    sortStandard,
    selectGroup,
    selectCategory,
    sortBy,
  };
}
