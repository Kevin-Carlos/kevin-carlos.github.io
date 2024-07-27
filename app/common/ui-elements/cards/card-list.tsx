import { ReactNode, type FC } from 'react';

export const CardList: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ul className="grid gap-5 md:grid-cols-auto-fit-card dark:text-theme-white">
      {children}
    </ul>
  );
};
