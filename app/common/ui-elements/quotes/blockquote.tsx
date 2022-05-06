import { Pen } from 'phosphor-react';
import { type FC } from 'react';
import { useDarkMode } from '~/common/hooks/theme';
import { colors, Divider } from '../library';

type BlockquoteProps = {
  author: string;
};

export const Blockquote: FC<BlockquoteProps> = ({ children, author }) => {
  const [mode] = useDarkMode();

  const colorToUse = mode === 'dark' ? colors.orange : colors.black;

  return (
    <div className="grid grid-cols-[auto_1fr] mb-5">
      <Divider
        color={colorToUse}
        orientation="vertical"
        style={{ marginRight: '20px' }}
      />
      <blockquote className="text-sm">
        {children}
        <p className="italic font-semibold">
          <span className="flex items-center">
            <Pen
              weight="duotone"
              style={{ marginRight: '8px' }}
              color={colorToUse}
            />
            {author}
          </span>
        </p>
      </blockquote>
    </div>
  );
};
