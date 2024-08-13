import { TabPanel, Tabs } from 'react-aria-components';
import { Tab } from '~/common/ui-elements/button/tabs/tab';
import { TabsList } from '~/common/ui-elements/button/tabs/tabs-list';
import { Cycle, Square8 } from './career-items';

export const CareerBlurb = () => {
  return (
    <Tabs>
      <TabsList aria-label="Companies I've worked for">
        <Tab id='Square8'>
          <span>Square 8</span>
        </Tab>
        <Tab id='Cycle'>
          <span>Cycle</span>
        </Tab>
      </TabsList>

      <TabPanel id='Square8'>
        <Square8 />
      </TabPanel>
      <TabPanel id='Cycle'>
        <Cycle />
      </TabPanel>
    </Tabs>
  );
};
