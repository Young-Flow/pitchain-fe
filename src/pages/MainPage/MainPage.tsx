import { MouseEvent } from 'react';
import { ShortPitch } from 'src/types/legacy/shortpitch';
import usePitchList from '@hooks/legacy/usePitchList';
import { Sparkle } from '@assets/icons';
import categoryList from '@constants/legacy/categoryList';
import { SkeletonComponent, SkeletonProvider } from '@components/legacy/skeleton';
import { CategoryButton, GroupButton } from '@components/legacy/ui';
import { SubVideoRill, PitchListBlock } from './';

export default function MainPage() {
  const defaultCategory = categoryList[0].key;

  const {
    pitchList: BMList,
    currentCategory,
    currentGroup,
    sortStandard,
    selectCategory,
    selectGroup,
    isLoading,
    sortBy,
  } = usePitchList(defaultCategory);

  const groupList: { key: string; name: string }[] =
    categoryList.find((categoryInfo) => categoryInfo.key === currentCategory)?.group ?? [];

  function handleCategoryButtonClick(e: MouseEvent<HTMLButtonElement>) {
    if (e.currentTarget instanceof HTMLButtonElement) {
      const newCategory = e.currentTarget.dataset.category ?? defaultCategory;
      selectCategory(newCategory);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }

  function handleGroupButtonClick(e: MouseEvent<HTMLButtonElement>) {
    if (e.currentTarget instanceof HTMLButtonElement) {
      const newGroup = e.currentTarget.dataset.group ?? '';
      selectGroup(newGroup);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }

  function chunkPitchList(list: ShortPitch[] | null) {
    if (!list) return [];
    const result = [];
    const blockSize = 20;
    for (let i = 0; i < list.length; i += blockSize) {
      result.push(list.slice(i, i + blockSize));
    }
    return result;
  }

  const chunkedPitchList = chunkPitchList(BMList);

  function RandomSubVideoRill() {
    let randomIndex = 0;
    let i = 0;
    while (randomIndex === 0 && i < 20) {
      randomIndex = Math.ceil(Math.random() * 3) - 1;
      i++;
    }
    const randomCategory = categoryList[randomIndex];

    return (
      <SubVideoRill
        title={randomCategory.name}
        icon={randomCategory.icon}
        category={randomCategory.key}
        className="pt-[58px]"
      />
    );
  }

  return (
    <div className="flex w-full flex-1 flex-col">
      <div className="relative flex w-full flex-col px-[232px]">
        <div className="fixed z-10 w-[1456px] bg-white px-16 pt-20">
          <ul className="flex justify-between gap-1 self-stretch">
            {categoryList.map(({ key, name, icon }) => (
              <li key={key} className="flex w-[100px] justify-center first:w-fit first:pr-5 last:w-fit last:pl-5">
                <CategoryButton
                  icon={icon}
                  title={name}
                  isActive={currentCategory === key}
                  data-category={key}
                  onClick={handleCategoryButtonClick}
                />
              </li>
            ))}
          </ul>
          <div className="flex h-14 w-full items-center justify-between">
            <ul className="flex flex-1 items-center gap-4">
              {currentCategory !== defaultCategory ? (
                groupList.map(({ key, name }) => (
                  <li key={key}>
                    <GroupButton onClick={handleGroupButtonClick} data-group={key} isActive={currentGroup === key}>
                      {name}
                    </GroupButton>
                  </li>
                ))
              ) : (
                <GroupButton
                  onClick={handleCategoryButtonClick}
                  className="border-secondary gap-2 border-[1px] bg-[linear-gradient(92deg,_#FFF_0.06%,_#9CDBA6_68.06%,_#CDEDD3_100.06%)]"
                  data-category={'ai'}
                >
                  <Sparkle width={16} height={16} className="fill-[#58C4A8]" /> 인공지능에게 물어보세요!
                </GroupButton>
              )}
            </ul>
            <ul className="flex items-center justify-end">
              <button
                onClick={() => {
                  sortBy('like');
                }}
                className={`px-[12px] py-[8px] ${sortStandard === 'like' && 'font-semibold'}`}
              >
                추천순
              </button>
              <button
                onClick={() => {
                  sortBy('view');
                }}
                className={`px-[12px] py-[8px] ${sortStandard === 'view' && 'font-semibold'}`}
              >
                인기순
              </button>
              <button
                onClick={() => {
                  sortBy('deadline');
                }}
                className={`px-[12px] py-[8px] ${sortStandard === 'deadline' && 'font-semibold'}`}
              >
                마감순
              </button>
            </ul>
          </div>
        </div>
        <div className="flex w-full flex-col px-16 pt-[206px]">
          <SkeletonProvider isLoading={isLoading} skeleton={PitchListSkeleton}>
            {chunkedPitchList.map((listPortion, index) => (
              <PitchListBlock key={index} mainPitchList={listPortion} blockEnd={RandomSubVideoRill()} />
            ))}
          </SkeletonProvider>
        </div>
      </div>
    </div>
  );
}

const PitchSkeleton = () => (
  <div className="flex flex-col items-stretch bg-white">
    <SkeletonComponent className="h-[174px] w-[310px] rounded-[8px]" />
    <div className="flex items-stretch py-2">
      <SkeletonComponent className="mr-3 h-10 w-10 shrink-0" />
      <div className="flex flex-1 flex-col justify-around">
        <SkeletonComponent className="h-[12px] w-[200px] rounded-[8px]" />
        <SkeletonComponent className="h-[10px] w-[80px] rounded-[8px]" />
      </div>
    </div>
  </div>
);

const PitchListSkeleton = (
  <div className="flex w-full flex-wrap gap-[29.3px] gap-y-[88px]">
    <PitchSkeleton />
    <PitchSkeleton />
    <PitchSkeleton />
    <PitchSkeleton />
    <PitchSkeleton />
    <PitchSkeleton />
    <PitchSkeleton />
    <PitchSkeleton />
    <PitchSkeleton />
    <PitchSkeleton />
    <PitchSkeleton />
    <PitchSkeleton />
  </div>
);
