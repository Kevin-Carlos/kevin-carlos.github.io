import { ReactElement } from 'react';

type IconButtonProps = {
  children: ReactElement;
  onClick: () => void;
};

export const IconButton = ({ children, onClick }: IconButtonProps): ReactElement => {
  return <button className="focus:outline-theme-orange focus:outline-2 focus:outline rounded-md hover:opacity-60 transition-opacity" onClick={onClick}>{children}</button>;
};
