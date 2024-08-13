import type { ReactNode } from 'react';

export const Paragraph = ({ children }: { children: ReactNode }) => {
  return <p className='mb-5'>{children}</p>;
};
