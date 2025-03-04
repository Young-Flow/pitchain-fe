import { ClickableColorSet, ClickableSizeProps } from './ClickableTypes';

export const CLICKABLE_COLOR_SET: Record<ClickableColorSet, string> = {
  primary:
    'text-neutral-900 bg-primary-600 hover:bg-primary-700 active:bg-primary-800 hover:bg-primary-700 disabled:bg-neutral-300',
  secondary:
    'text-neutral-100 bg-secondary-500 hover:bg-secondary-400 active:bg-secondary-700 hover:bg-secondary-600 disabled:bg-neutral-300',
  google: 'text-neutral-900 border-1 border-neutral-400',
  kakao: 'text-neutral-900 bg-[#FEE500]',
  naver: 'text-neutral-100 bg-[#03C75A]',
};

export const CLICKABLE_PADDING_SIZE_SET: Record<ClickableSizeProps, string> = {
  small: 'py-6 px-12',
  medium: 'py-8 px-20',
  large: 'py-12 px-24',
};

export const CLICKABLE_SIZE_SET = {
  small: 'w-32 h-32 rounded-[16px]',
  medium: 'w-36 h-36 rounded-[18px]',
  large: 'w-44 h-44 rounded-[22px]',
};
