import { Link } from '@remix-run/react';
import { type FC } from 'react';
import { styled } from '~/stitches';

const CardListItem = styled('li', {
  'padding': '16px',
  'position': 'relative',
  'cursor': 'pointer',
  'transition': 'transform 200ms ease-out',

  'backgroundColor': '$cardBg',
  // TODO...how with stitches
  // 'bg-opacity-40',

  'border': '1px solid $dteal',
  'borderRadius': '6px',

  'boxShadow': '4px 4px 6px rgba(0, 0, 0, 0.2)',

  '&::before': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,

    width: '100%',
    height: '4px',
    backgroundColor: '$cardHighlight',

    borderTopLeftRadius: '6px',
    borderTopRightRadius: '6px',
  },

  '&:hover': {
    transform: 'scale(1.02)',
  },
});

const MaybeLinkedContent: FC<{ to?: string }> = ({ to, children }) => {
  if (!to) {
    return <>{children}</>;
  } else if (to.includes('http')) {
    return <a href={to}>{children}</a>;
  }

  return <Link to={to}>{children}</Link>;
};

type CardProps = {
  title: string;
  to?: string;
};

export const Card: FC<CardProps> = ({ title, to, children }) => {
  return (
    <CardListItem>
      <MaybeLinkedContent to={to}>
        <>
          <h1 className="text-xl mb-5 tracking-wider">{title}</h1>
          {children}
        </>
      </MaybeLinkedContent>
    </CardListItem>
  );
};
