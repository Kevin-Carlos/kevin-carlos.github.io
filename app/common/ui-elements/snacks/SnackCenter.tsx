import clsx from 'clsx';
import { Envelope, EnvelopeOpen, Info, WarningCircle, X } from 'phosphor-react';
import { type ReactElement, useEffect, useMemo, useState } from 'react';
import {
  Dialog,
  Modal,
  ModalOverlay,
  TabPanel,
  Tabs,
} from 'react-aria-components';
import { PillButton } from '../button';
import { IconButton } from '../button/icon-button';
import { Tab } from '../button/tabs/tab';
import { TabsList } from '../button/tabs/tabs-list';
import * as styles from './animation.module.css';
import { type Toast, useToast } from './SnackContext';

const Message = ({ toast, position }: { toast: Toast; position: number }) => {
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

const TabMessages = ({
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

export const SnackCenter = (): ReactElement => {
  const { messages } = useToast();

  const [openMessages, setOpenMessages] = useState<'info' | 'important' | null>(
    null,
  );
  const [openWidget, setOpenWidget] = useState(false);

  const infoMessages = useMemo(() => messages.filter((m) => !m.important), [
    messages,
  ]);
  const importantMessages = useMemo(() => messages.filter((m) => m.important), [
    messages,
  ]);

  return (
    <>
      {!!openMessages && (
        <ModalOverlay
          className='fixed top-0 left-0 flex justify-center items-center w-[100vw] h-[var(--visual-viewport-height)] z-40'
          style={{ background: 'rgba(0,0,0,0.4)' }}
          isDismissable
          isOpen={true}
          onOpenChange={() => {
            setOpenMessages(null);

            if (openWidget) {
              setTimeout(() => {
                setOpenWidget(false);
              }, 500);
            }
          }}
        >
          <Modal className='  outline-none'>
            <Dialog className='bg-theme-white dark:bg-theme-dteal p-4 shadow-2xl rounded-md outline-none min-w-[50vw] border-2 border-theme-black'>
              {({ close }) => {
                return (
                  <article className='flex flex-col gap-4 text-theme-black dark:text-theme-white'>
                    <h1 className='text-2xl'>
                      Recent Messages
                    </h1>

                    <Tabs
                      defaultSelectedKey={openMessages === 'important'
                        ? 'Important'
                        : 'Info'}
                    >
                      <TabsList aria-label='Recent Messages'>
                        <Tab id='Info' isDisabled={!infoMessages.length}>
                          Info
                        </Tab>
                        <Tab
                          id='Important'
                          isDisabled={!importantMessages.length}
                        >
                          Important
                        </Tab>
                      </TabsList>

                      <TabPanel
                        id='Info'
                        className='max-h-[45vh] overflow-auto'
                      >
                        <TabMessages
                          messages={infoMessages}
                        />
                      </TabPanel>

                      <TabPanel
                        id='Important'
                        className='max-h-[45vh] overflow-auto'
                      >
                        <TabMessages
                          messages={importantMessages}
                        />
                      </TabPanel>
                    </Tabs>

                    <div className='flex justify-end'>
                      <PillButton
                        className='bg-theme-black data-[hovered]:bg-theme-dteal text-theme-white dark:bg-theme-lteal dark:data-[hovered]:bg-theme-lteal2'
                        onPress={() => {
                          close();
                        }}
                      >
                        Close
                      </PillButton>
                    </div>
                  </article>
                );
              }}
            </Dialog>
          </Modal>
        </ModalOverlay>
      )}

      <div className='fixed' style={{ bottom: '30px', right: '30px' }}>
        <div>
          <IconButton
            disabled={!(messages.filter(m =>
              m.important && m._state.closed === null
            ).length)}
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
              {importantMessages.length}
            </span>
          </IconButton>

          <IconButton
            disabled={!(messages.filter((m) => !m.important).length)}
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
              {infoMessages.length}
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
