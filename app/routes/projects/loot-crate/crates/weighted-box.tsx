import { type FC, useEffect, useState } from 'react';
import { PillButton } from '~/common/ui-elements';
import { CenteredTextItem, CharacterModal, CrateInfoItem } from './helpers';
import { openBox } from './open-box';

const randomBoxOdds = {
  common: 74,
  rare: 19,
  epic: 5.3,
  legendary: 1.3,
  mythical: 0.4,
};

export const WeightedBox: FC = () => {
  const [charOpened, setCharOpened] = useState<
    keyof typeof randomBoxOdds | undefined
  >(undefined);

  const openBoxHandler = () => {
    setCharOpened(openBox(randomBoxOdds));
  };

  useEffect(() => {
    if (charOpened) {
      setTimeout(() => {
        setCharOpened(undefined);
      }, 2 * 1000);
    }
  }, [charOpened]);

  return (
    <CrateInfoItem>
      <h1 className='mb-5 text-2xl'>Weighted-Random Box</h1>
      <div className='grid grid-cols-2 mb-5'>
        <CenteredTextItem className='bg-theme-orange'>
          Mythical (0.4%)
        </CenteredTextItem>
        <div className='grid grid-rows-4'>
          <CenteredTextItem className='bg-theme-blue row-span-2'>
            Legendary (1.3%)
          </CenteredTextItem>
          <CenteredTextItem className='bg-theme-lteal2'>
            Epic (5.3%)
          </CenteredTextItem>
          <div className='grid grid-cols-2'>
            <CenteredTextItem className='dark:bg-theme-dgray bg-theme-lgray'>
              Rare (19%)
            </CenteredTextItem>
            <CenteredTextItem className='dark:bg-theme-dteal bg-theme-lteal'>
              Common (74%)
            </CenteredTextItem>
          </div>
        </div>
      </div>

      <div>
        <PillButton
          className='bg-theme-lteal hover:bg-theme-lteal2 w-full'
          onPress={openBoxHandler}
        >
          Open
        </PillButton>
      </div>

      {/* 'Modal' to display opened item */}
      {charOpened
        ? <CharacterModal>{charOpened.toLocaleUpperCase()}</CharacterModal>
        : null}
    </CrateInfoItem>
  );
};
