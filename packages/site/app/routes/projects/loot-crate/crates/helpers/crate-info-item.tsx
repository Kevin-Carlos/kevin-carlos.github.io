import { type FC } from 'react';

export const CrateInfoItem: FC = ({ children }) => {
  return (
    <li className="relative border-2 rounded-md border-theme-dteal p-5">
      {children}
    </li>
  );
};
