import clsx from 'clsx';
import { Info, WarningCircle, X } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { IconButton } from '../button/icon-button';
import * as styles from './animation.module.css';
import { type Toast, useToast } from './SnackContext';

export const Message = (
  { toast, position }: { toast: Toast; position: number },
) => {
  const { update } = useToast();
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (toast.important) {
      return;
    }

    const clear = setTimeout(() => {
      if (hover) {
        return;
      }

      update({
        ...toast,
        _state: {
          ...toast._state,
          closed: 'expired',
          renewed: false,
        },
      });
    }, 5_000);

    return () => {
      clearTimeout(clear);
    };
  }, [hover]);

  return (
    <li
      className='absolute'
      style={{
        zIndex: 1,
        right: 0,
        top: position < -50 ? -50 : position,
      }}
    >
      <div
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        className={clsx(
          'bg-theme-white dark:bg-theme-lteal p-4 rounded-md min-w-[300px] overflow-hidden relative',
          'grid',
          'items-center',
          'w-full',
          'gap-4',
          !toast.important &&
            'before:absolute before:bottom-0 before:left-0 before:right-0 before:h-1 before:rounded-md before:bg-theme-dteal',
          // @ts-expect-error css module typings
          !toast.important && !hover && styles.slideOut,
        )}
        style={{
          gridTemplateColumns: '32px 1fr 16px',
          boxShadow: '0 -1px 50px rgba(0,0,0,0.1)',
        }}
      >
        {toast.important ? <WarningCircle size='32px' /> : <Info size='32px' />}
        <p className='truncate'>{toast.message}</p>
        <IconButton
          className='justify-self-end'
          onClick={() => {
            update({
              ...toast,
              _state: {
                ...toast._state,
                renewed: false,
                closed: 'explicit',
              },
            });
          }}
        >
          <X />
        </IconButton>
      </div>
    </li>
  );
};

export const TabMessages = ({
  messages,
}: { messages: Toast[] }) => {
  return (
    <ul>
      {messages.map((m) => {
        return (
          <li
            key={m._id}
            className='p-4 mb-4 last:mb-0 border-2 border-theme-black rounded-md flex flex-col gap-4'
          >
            <dl className='flex flex-row gap-4 text-sm text-theme-black opacity-85 dark:opacity-100 dark:text-theme-lgray'>
              <dt>Closed Via:</dt>
              <dd>
                {m._state.closed === 'expired'
                  ? 'Auto hidden by timer'
                  : m._state.closed === 'explicit'
                  ? 'Closed by user'
                  : 'Unhandled'}
              </dd>
            </dl>

            <p>{m.message}</p>
          </li>
        );
      })}
    </ul>
  );
};
