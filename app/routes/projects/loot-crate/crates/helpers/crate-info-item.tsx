import type { FC, ReactNode } from 'react';

export const CrateInfoItem: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <li className='relative border-2 rounded-md border-theme-dteal p-5'>
      {children}
    </li>
  );
};
