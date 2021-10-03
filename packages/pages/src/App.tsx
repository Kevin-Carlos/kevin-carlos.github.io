import { Grommet } from 'grommet';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

export const App = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Grommet full></Grommet>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default App;
