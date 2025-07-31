import { CategoryButton } from '@components/legacy/ui';
import categoryList from '@constants/legacy/categoryList';
import { ComponentProps, InputHTMLAttributes, useState } from 'react';

type CategoryInputProps = ComponentProps<'div'> & InputHTMLAttributes<HTMLInputElement>;
export default function CategoryInput({ name, value, onChange, ...rest }: CategoryInputProps) {
  return (
    <div {...rest}>
      <input type="hidden" name={name} value={value} onChange={onChange} />
    </div>
  );
}

CategoryInput.GroupButtons = function (props: ComponentProps<'ul'>) {
  return (
    <ul {...props}>
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
