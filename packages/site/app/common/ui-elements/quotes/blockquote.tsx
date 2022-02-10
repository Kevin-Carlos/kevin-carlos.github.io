import { Pen } from 'phosphor-react';
import { type FC } from 'react';
import { colors, Divider } from 'sublimity-ui';

type BlockquoteProps = {
  author: string;
};

export const Blockquote: FC<BlockquoteProps> = ({ children, author }) => {
  return (
    <div className="grid grid-cols-[auto_1fr] mb-5">
      <Divider
        color={colors.orange}
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
              color={colors.orange}
            />
            {author}
          </span>
        </p>
      </blockquote>
    </div>
  );
};
