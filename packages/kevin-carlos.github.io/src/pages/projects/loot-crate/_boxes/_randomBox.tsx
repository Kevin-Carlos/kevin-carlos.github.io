import { Club } from 'phosphor-react';
import React, { FC, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Button } from 'sublimity-ui';
import { openBox } from './_open-box';
import { getRarityColor } from './_rarity-colors';

const randomBoxOdds = {
  common: 74,
  rare: 19,
  epic: 5.3,
  legendary: 1.3,
  mythical: 0.4,
};

export const RandomBox: FC = () => {
  const [items, setItems] = useState<string[]>([]);

  const openRandomBox = () => {
    const charToBeOpened = openBox(randomBoxOdds);

    const spinnerItems = [];

    for (let i = 0; i < 50; i++) {
      if (i == 45) {
        spinnerItems.push(charToBeOpened);
      } else {
        const odd = openBox(randomBoxOdds);

        spinnerItems.push(odd);
      }
    }

    setItems(spinnerItems);
  };

  return (
    <>
      {items.length ? (
        <FakeModal>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              width: '100%',
              position: 'relative',
            }}
          >
            <ItemToReceiveList>
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ItemToReceiveList>
          </div>
        </FakeModal>
      ) : null}
      <CrateContainer first>
        <MythicalCrate value={0.4}>Mythical 0.4%</MythicalCrate>
        <CrateContainer column>
          <LegendaryCrate value={1.3}>Legendary 1.3%</LegendaryCrate>
          <CrateContainer>
            <RemainingCrates value={5.3}>Epic 5.3%</RemainingCrates>
            <RemainingCrates value={19}>Rare 19%</RemainingCrates>
            <RemainingCrates value={74}>Common 74%</RemainingCrates>
          </CrateContainer>
        </CrateContainer>
      </CrateContainer>
      <Button
        name="open-loot-crate"
        icon={<Club size={32} />}
        onClick={openRandomBox}
      >
        Open
      </Button>
    </>
  );
};

const FakeModal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10000;

  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const moveRight = keyframes`
  0% {
    left: 0;
  }

  100% { left: -750px };
`;

const ItemToReceiveList = styled.ul`
  display: flex;
  z-index: 10001;
  list-style: none;

  position: absolute;
  left: 0;
  right: 0;

  animation-name: ${moveRight};
  animation-duration: 7.5s;
  animation-timing-function: cubic-bezier(0, 1.41, 1, 0.72);
  animation-iteration-count: 1;

  & > li {
    margin-right: 2rem;
  }

  overflow: hidden;
`;

const CrateContainer = styled.div<{ column?: boolean; first?: boolean }>`
  display: flex;
  width: 100%;

  ${({ column }) =>
    column &&
    `
    flex-direction: column;
  `};

  ${({ first }) =>
    first &&
    `
    margin-bottom: 2rem;
  `};
`;

const Crate = styled.div<{ value: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  padding: 2rem;
  background-color: ${({ value }) => getRarityColor(value)};
`;

const MythicalCrate = styled(Crate)`
  height: 30rem;
  width: 50rem;
`;

const LegendaryCrate = styled(Crate)`
  height: 15rem;
  width: 100%;
`;

const RemainingCrates = styled(LegendaryCrate)``;
