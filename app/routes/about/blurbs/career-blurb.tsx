import { useState } from 'react';
import { Tab, TabsList } from '~/common/ui-elements';
import { Cycle, Square8 } from './career-items';

export const CareerBlurb = () => {
  const [tab, setTab] = useState<'sq8' | 'cycle'>('sq8');

  return (
    <div className="flex flex-col">
      <TabsList>
        <Tab
          active={tab === 'sq8'}
          childNumber={1}
          onClick={() => setTab('sq8')}
        >
          <span>Square 8</span>
        </Tab>
        <Tab
          active={tab === 'cycle'}
          childNumber={2}
          onClick={() => setTab('cycle')}
        >
          <span>Cycle</span>
        </Tab>
      </TabsList>

      {tab === 'sq8' ? <Square8 /> : null}
      {tab === 'cycle' ? <Cycle /> : null}
    </div>
  );
};
