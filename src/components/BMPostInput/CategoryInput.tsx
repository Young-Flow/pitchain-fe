import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  ComponentProps,
  ChangeEvent,
  SyntheticEvent,
  ReactNode,
} from 'react';
import { useInput } from '@hooks/useInput';

type Item = { key: string; value: string };
export type CategoryData = Record<string, Item[]>;

type Value = string | string[];

type CategorizedButtonInputProps = ComponentProps<'div'> & {
  name?: string;
  categoryData: CategoryData;
  multiple: boolean;
  value?: Value;
  defaultValue?: Value;
  onChange?: (next: Value, info?: { event?: SyntheticEvent<HTMLInputElement | HTMLButtonElement> }) => void;
};

type Ctx = {
  categoryData: CategoryData;
  currentCategory: string | null;
  itemsForCurrent: Item[];
  multiple: boolean;
  value: Value;
  isSelected: (value: string) => boolean;
  selectCategory: (value: string) => void;
  selectItem: (value: string) => void;
};

const CategorizedInputContext = createContext<Ctx | null>(null);
const useCategorizedInput = () => {
  const ctx = useContext(CategorizedInputContext);
  if (!ctx) throw new Error('Use inside <CategorizedInput>.');
  return ctx;
};

export default function CategorizedInput({
  categoryData,
  multiple = false,
  name,
  value,
  defaultValue,
  onChange,
  ...props
}: CategorizedButtonInputProps) {
  const { val, setValue, bind } = useInput<Value, HTMLInputElement, ChangeEvent<HTMLInputElement>>({
    value,
    defaultValue,
    onChange,
    extractValue: (e: ChangeEvent<HTMLInputElement>) => e.currentTarget.value,
    name,
  });

  const [currentCategory, setCurrentCategory] = useState<string | null>(null);

  const itemsForCurrent = useMemo(() => {
    if (!currentCategory) return [];
    return categoryData[currentCategory] ?? [];
  }, [currentCategory, categoryData]);

  function isSelected(value: string) {
    return Array.isArray(val) ? val.includes(value) : val === value;
  }

  function selectItem(item: string) {
    const oldValue = val;
    let newValue: Value;
    if (multiple) {
      const arr = Array.isArray(oldValue) ? oldValue : oldValue ? [oldValue] : [];
      newValue = arr.includes(item) ? arr.filter((x) => x !== item) : [...arr, item];
    } else {
      newValue = item;
    }
    setValue(newValue);
  }

  const contextValue: Ctx = {
    categoryData,
    currentCategory,
    itemsForCurrent,
    multiple,
    value: val,
    isSelected,
    selectCategory: setCurrentCategory,
    selectItem,
  };

  const hidden = useMemo(() => {
    if (!name) return null;
    return <input type="hidden" {...bind} />;
  }, [name, bind]);

  return (
    <CategorizedInputContext.Provider value={contextValue}>
      <div {...props}>
        {hidden}
        {props.children}
      </div>
    </CategorizedInputContext.Provider>
  );
}

type CategoryOptionProps = Omit<ComponentProps<'button'>, 'children'> & {
  category: string;
  children: (args: { isSelected: boolean }) => ReactNode; // render prop
};

CategorizedInput.CategoryOption = function CategoryOption({ category, children, ...props }: CategoryOptionProps) {
  const { currentCategory, selectCategory } = useCategorizedInput();
  const isSelected = currentCategory === category;
  return (
    <button data-category={category} onClick={() => selectCategory(category)} {...props}>
      {children({ isSelected })}
    </button>
  );
};

CategorizedInput.Items = function Items({
  children,
  emptyFallback = null,
}: {
  children: (args: {
    items: Item[];
    selectItem: (v: string) => void;
    isSelected: (v: string) => boolean;
  }) => React.ReactNode;
  emptyFallback?: React.ReactNode;
}) {
  const { itemsForCurrent, selectItem, isSelected } = useCategorizedInput();
  if (!itemsForCurrent.length) return <>{emptyFallback}</>;
  return <>{children({ items: itemsForCurrent, selectItem, isSelected })}</>;
};

CategorizedInput.ItemOption = function ItemOption({
  value,
  children,
  ...btn
}: ComponentProps<'button'> & { value: string }) {
  const { itemsForCurrent, selectItem, isSelected } = useCategorizedInput();
  const exists = itemsForCurrent.some((i) => i.value === value);
  if (!exists) return null;

  const active = isSelected(value);

  return (
    <button data-value={value} onClick={() => selectItem(value)} {...btn}>
      {children ?? value}
    </button>
  );
};
