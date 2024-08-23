import clsx from 'clsx';
import { Envelope, EnvelopeOpen } from 'phosphor-react';
import { type ReactElement, useState } from 'react';
import { IconButton } from '../button/icon-button';
import * as styles from './animation.module.css';
import { Message } from './Message';
import { RecentMessageCenter } from './RecentMessageCenter';
import { useToast } from './SnackContext';

export const SnackCenter = (): ReactElement => {
  const { messages } = useToast();

  const [openMessages, setOpenMessages] = useState<'info' | 'important' | null>(
    null,
  );
  const [openWidget, setOpenWidget] = useState(false);

  const info = messages.filter((m) => !m.important);
  const important = messages.filter(m =>
    m.important && m._state.closed === null
  );

  return (
    <>
      {!!openMessages && (
        <RecentMessageCenter
          openValue={openMessages}
          messages={messages}
          isWidgetOpen={openWidget}
          closeMessageCenter={() => {
            setOpenMessages(null);
          }}
          closeWidget={() => {
            setOpenWidget(false);
          }}
        />
      )}

      <div className='fixed' style={{ bottom: '30px', right: '30px' }}>
        <div>
          <IconButton
            disabled={!important.length}
            className={clsx(
              'absolute flex items-center justify-center h-[40px] w-[40px] bg-theme-orange rounded-full text-theme-black dark:text-theme-white',
              // @ts-expect-error typings css modules
              openWidget ? styles.popIn1 : styles.popOut1,
            )}
            onClick={() => {
              setOpenMessages('important');
            }}
          >
            <span>
              {important.length}
            </span>
          </IconButton>

          <IconButton
            disabled={!info.length}
            className={clsx(
              'absolute flex items-center justify-center h-[36px] w-[36px] bg-theme-blue rounded-full text-theme-black dark:text-theme-white',
              // @ts-expect-error typings css modules
              openWidget ? styles.popIn2 : styles.popOut2,
            )}
            onClick={() => {
              setOpenMessages('info');
            }}
          >
            <span>
              {info.length}
            </span>
          </IconButton>

          <IconButton
            className='bg-theme-lteal2 dark:bg-theme-orange shadow-xl p-4 h-[50px] w-[50px] rounded-full flex items-center justify-center text-theme-black dark:text-theme-white'
            onClick={() => {
              setOpenWidget(prev => !prev);
            }}
          >
            {!openWidget
              ? <Envelope size='32px' />
              : <EnvelopeOpen size='32px' />}
          </IconButton>
        </div>
      </div>

      <div
        className={clsx('fixed', openWidget && 'hidden')}
        style={{ bottom: '100px', right: '20px', height: 50, width: 300 }}
      >
        <ul className='relative' style={{ height: 50, width: 300 }}>
          {messages.filter((m) => m._state.closed === null).map((m, idx) => {
            const top = ((idx || 1) - 1) + (idx * -7);

            return (
              <Message
                key={idx}
                toast={m}
                position={top}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};
