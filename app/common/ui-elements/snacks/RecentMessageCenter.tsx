import { ReactElement, useMemo } from 'react';
import {
  Dialog,
  Modal,
  ModalOverlay,
  TabPanel,
  Tabs,
} from 'react-aria-components';
import { PillButton } from '../button/pill-button';
import { Tab } from '../button/tabs/tab';
import { TabsList } from '../button/tabs/tabs-list';
import { TabMessages } from './Message';
import { Toast } from './SnackContext';

type RecentMessageCenterProps = {
  openValue: 'info' | 'important';
  messages: Toast[];
  isWidgetOpen: boolean;
  closeMessageCenter: () => void;
  closeWidget: () => void;
};

export const RecentMessageCenter = ({
  openValue,
  messages,
  isWidgetOpen,
  closeMessageCenter,
  closeWidget,
}: RecentMessageCenterProps): ReactElement => {
  const infoMessages = useMemo(() => messages.filter((m) => !m.important), [
    messages,
  ]);
  const importantMessages = useMemo(() => messages.filter((m) => m.important), [
    messages,
  ]);

  return (
    <ModalOverlay
      className='fixed top-0 left-0 flex justify-center items-center w-[100vw] h-[var(--visual-viewport-height)] z-40'
      style={{ background: 'rgba(0,0,0,0.4)' }}
      isDismissable
      isOpen={true}
      onOpenChange={() => {
        closeMessageCenter();

        if (isWidgetOpen) {
          setTimeout(() => {
            closeWidget();
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
                  defaultSelectedKey={openValue === 'important'
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
  );
};
