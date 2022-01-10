import React from 'react';
import styled from 'styled-components';
import { RandomBox } from './_boxes/_randomBox';

export const LootBox: React.FC = () => {
  return (
    <LootBoxLayout>
      <LootCrateInfoBox>
        <h1>Weighted-Random Box</h1>
        <ProportionBox>
          <RandomBox />
        </ProportionBox>
      </LootCrateInfoBox>
      <LootCrateInfoBox>
        <h1>Naive Bag Implementation Box</h1>
      </LootCrateInfoBox>
    </LootBoxLayout>
  );
};

const LootBoxLayout = styled.div`
  width: 100%;
  height: 100%;

  & > div:first-child {
    border-bottom: none;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  & > div:nth-child(2) {
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }
`;

const LootCrateInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border: ${({ theme }) => `1px solid ${theme.colors.orange}`};
  border-radius: 4px;

  padding: 2rem;
`;

const ProportionBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.white};
`;
