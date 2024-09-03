import { cn } from '@/shared/lib/cn.ts';

import { ReactNode } from 'react';

type Size = 'daily' | 'detail' | 'hourly' | 'radar';

interface Props {
  size: Size;
  title?: string;
  children?: ReactNode;
  className?: string;
}

const getSectionAttributes = (size: Size) => {
  switch (size) {
    case 'hourly':
      return 'h-[180px]';
    case 'daily':
      return 'h-[315px]';
    case 'radar':
      return 'h-[400px]';
    case 'detail':
      return 'w-[210px] h-[210px]';
  }
};

export default function Section({ size, title, children, className, ...restProps }: Props) {
  const customSize = getSectionAttributes(size);

  return (
    <section className={cn(`w-[90%] rounded-3xl bg-backgroundSection p-4 ${customSize} ${className}`)} {...restProps}>
      {title && <div className="text-[15px] mb-2">{title}</div>}
      {children}
    </section>
  );
}
