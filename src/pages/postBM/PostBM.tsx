import { ComponentProps } from 'react';
import CategorizedInput, { CategoryData } from '@components/BMPostInput/CategoryInput';
import CATEGORY_LIST from '@constants/legacy/categoryList';
import { CategoryButton } from '@components/legacy/ui';

const CATEGORY_DATA: CategoryData = {};
CATEGORY_LIST.forEach((category) => {
  CATEGORY_DATA[category.key] = category.group.map(({ key, name }) => ({ key, value: name }));
});

export default function PostBM() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex w-[1136px] flex-col">
        <div className="heading1 pb-24">BM 등록</div>
        <PostSection title={'1. BM 분류 선택'}>
          <CategorizedInput categoryData={CATEGORY_DATA} multiple={true}>
            <div className="flex flex-row justify-between gap-46">
              <CategoryGrid />
              <div className="flex-1">
                <CategorizedInput.Items emptyFallback={Fallback}>
                  {({ items, selectItem }) => <ItemGrid items={items} onSelect={selectItem} />}
                </CategorizedInput.Items>
              </div>
            </div>
          </CategorizedInput>
        </PostSection>
      </div>
    </div>
  );
}

export function PostLabel(props: ComponentProps<'div'>) {
  return <div className="border-secondary-400 heading4 mb-24 border-b-2 pb-6" {...props} />;
}

function PostSection({ title, children, ...rest }: { title: string } & ComponentProps<'section'>) {
  return (
    <section className="flex flex-col" {...rest}>
      <PostLabel>{title}</PostLabel>
      {children}
    </section>
  );
}

function CategoryGrid() {
  return (
    <ul className="grid w-[758px] grid-cols-4 gap-x-12 gap-y-12">
      {CATEGORY_LIST.map(({ key, name, icon }) => (
        <li key={key} className="flex justify-center">
          <CategorizedInput.CategoryOption category={key}>
            {({ isSelected }) => <CategoryButton icon={icon} title={name} isActive={isSelected} />}
          </CategorizedInput.CategoryOption>
        </li>
      ))}
    </ul>
  );
}

type Item = { key: string; value: string };

const Fallback = <div className="body1p flex h-full w-full items-center justify-center">😊분류를 선택해주세요!</div>;

function ItemGrid({ items, onSelect }: { items: Item[]; onSelect: (value: string) => void }) {
  return (
    <ul className="flex w-[332px] flex-wrap content-start items-start gap-[12px] self-stretch">
      {items.map(({ key, value }) => (
        <li key={key}>
          <CategorizedInput.ItemOption value={key} onClick={() => onSelect(value)}>
            <div className="bg-secondary-400 label1 flex items-center justify-center gap-12 rounded-[16px] px-12 py-6 text-white">
              {value}
            </div>
          </CategorizedInput.ItemOption>
        </li>
      ))}
    </ul>
  );
}
