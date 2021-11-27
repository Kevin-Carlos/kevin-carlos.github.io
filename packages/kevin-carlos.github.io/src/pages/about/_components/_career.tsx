import React, { useState } from 'react';
import { Tab, TabsList } from 'sublimity-ui';
import { CareerCycle } from './_career-items/_cycle';
import { CareerStealth } from './_career-items/_stealth';

export const CareerBlurb = (): React.ReactElement => {
  const [tab, setTab] = useState<'stealth' | 'cycle'>('stealth');

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        minHeight: '50vh',
      }}
    >
      <TabsList>
        <Tab onClick={() => setTab('stealth')}>Stealth</Tab>
        <Tab onClick={() => setTab('cycle')}>Cycle</Tab>
      </TabsList>

      {tab === 'cycle' ? <CareerCycle /> : null}
      {tab === 'stealth' ? <CareerStealth /> : null}
    </div>
  );
};
