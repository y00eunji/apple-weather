import { cn } from '@/shared/lib/cn.ts';

import { HTMLAttributes, ReactNode } from 'react';

type Size = 'daily' | 'detail' | 'hourly' | 'radar';

interface Props extends HTMLAttributes<HTMLDivElement> {
  size: Size;
  children?: ReactNode;
}

const getSectionAttributes = (size: Size) => {
  switch (size) {
    case 'hourly':
      return 'h-[200px]';
    case 'daily':
      return 'h-[350px]';
    case 'radar':
      return 'h-[400px]';
    case 'detail':
      return 'w-[200px] h-[200px]';
  }
};

export default function Section({ size, children, className, ...restProps }: Props) {
  const customSize = getSectionAttributes(size);

  return (
    <div className={cn(`w-[90%] rounded-3xl bg-backgroundSection ${customSize} `)} {...restProps}>
      {children}
    </div>
  );
}
