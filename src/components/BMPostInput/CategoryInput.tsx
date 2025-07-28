import { CategoryButton } from '@components/legacy/ui';
import categoryList from '@constants/legacy/categoryList';
import { ComponentProps } from 'react';

export default function CategoryInput(props: ComponentProps<'div'>) {
  return <div {...props} />;
}

CategoryInput.GroupButtons = function () {
  return (
    <ul className="flex w-full justify-between">
      {categoryList.map(({ key, name, icon }) => (
        <li key={key}>
          <CategoryButton
            icon={icon}
            title={name}
            isActive={false}
            data-category={key}
            onClick={() => console.log(key)}
            className="flex justify-center"
          />
        </li>
      ))}
    </ul>
  );
};

CategoryInput.CategoryButtons = function () {};
