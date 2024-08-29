import { cn } from '@/shared/lib/cn.ts';

import { HTMLAttributes, ReactNode } from 'react';

type Size = 'daily' | 'detail' | 'hourly' | 'radar';

interface Props extends HTMLAttributes<HTMLDivElement> {
  size: Size;
  title: string;
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

export default function Section({ size, title, children, className, ...restProps }: Props) {
  const customSize = getSectionAttributes(size);

  return (
    <div className={cn(`w-[90%] rounded-3xl bg-backgroundSection ${customSize} ${className}`)} {...restProps}>
      <div className="text-[15px] p-4">{title}</div>
      {children}
    </div>
  );
}
