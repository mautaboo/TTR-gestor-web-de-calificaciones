import {BrowserRouter as Router, Routes, Route} from  'react-router-dom';
import IndexContainer from '../containers/indexContainer';
import HomeContainer from '../containers/homeContainer';


function App() {
  return (
    <Router>
         <Routes>
          <Route exact path="/" element={<IndexContainer />}/>
          <Route exact path="/home" element={<HomeContainer />}/>
        </Routes>
      </Router>
  );
}

export default App;
