import { useEffect, useState } from 'react';
import { PillButton } from '~/common/ui-elements';
import { CenteredTextItem, CharacterModal, CrateInfoItem } from './helpers';

const randomBoxOdds = {
  common: 74.65,
  rare: 19,
  epic: 5.3,
  legendary: 1,
  mythical: 0.05,
} as const;

type NaiveBag = keyof typeof randomBoxOdds;

/**
 * Knuth shuffle
 *
 * @see https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 */
const shuffle = <A,>(array: A[]): A[] => {
  let currentIndex = array.length;
  let randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const createBag = (): NaiveBag[] => {
  // common 74.65
  // rare 19% 380/20000
  // epic 5.3% 106/2000
  // legendary 1% 20/2000
  // mythical 0.05% 1/2000

  const bag: NaiveBag[] = ['mythical'];

  for (let i = 0; i < 20; i++) {
    bag.push('legendary');
  }

  for (let i = 0; i < 106; i++) {
    bag.push('epic');
  }

  for (let i = 0; i < 380; i++) {
    bag.push('rare');
  }

  for (let i = 0; i < 2000 - 380 - 106 - 20 - 1; i++) {
    bag.push('common');
  }

  return shuffle(bag);
};

export const NaiveBox = () => {
  const [bag, setBag] = useState<NaiveBag[]>([]);

  useEffect(() => {
    const newBag = createBag();

    setBag(newBag);
  }, []);

  const [charOpened, setCharOpened] = useState<
    keyof typeof randomBoxOdds | undefined
  >(undefined);

  const openBoxHandler = () => {
    const randomIndex = Math.floor(Math.random() * 2000);

    const char = bag[randomIndex];

    setCharOpened(char);
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
      <h1 className='mb-5 text-2xl'>Naive Bag Implementation Box</h1>

      <div className='grid grid-cols-2 mb-5'>
        <CenteredTextItem className='bg-theme-orange'>
          Mythical (0.05%)
        </CenteredTextItem>
        <div className='grid grid-rows-4'>
          <CenteredTextItem className='bg-theme-blue row-span-2'>
            Legendary (1%)
          </CenteredTextItem>
          <CenteredTextItem className='bg-theme-lteal2'>
            Epic (5.3%)
          </CenteredTextItem>
          <div className='grid grid-cols-2'>
            <CenteredTextItem className='dark:bg-theme-dgray bg-theme-lgray'>
              Rare (19%)
            </CenteredTextItem>
            <CenteredTextItem className='dark:bg-theme-dteal bg-theme-lteal'>
              Common (74.65%)
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
