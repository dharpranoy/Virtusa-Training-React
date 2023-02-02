import {Helmet} from 'react-helmet';
import './App.css';
import Main from './components/main';

function App() {
  return (
      <>
          <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
             <Main />
          </div>
      </>
  );
}

export default App;
