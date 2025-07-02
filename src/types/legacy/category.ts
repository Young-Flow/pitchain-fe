import { FunctionComponent, SVGProps } from 'react';

export interface Category {
  key: string;
  name: string;
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  group: { key: string; name: string }[];
}
