import {BrowserRouter as Router, Routes, Route} from  'react-router-dom';
import IndexContainer from '../containers/indexContainer';
import HomeContainer from '../containers/homeContainer';
import ProfileContainer from '../containers/profileContainer';
import SolicitudesContainer from '../containers/solicitudesContainer';
import StatisticsContainer from '../containers/statisticsContainer';
import LoginContainer from '../containers/loginContainer';

function App() {
  return (
    <Router>
         <Routes>
          <Route exact path="/" element={<IndexContainer />}/>
          <Route exact path="/home" element={<HomeContainer />}/>
          <Route exact path="/profile" element={<ProfileContainer />}/>
          <Route exact path="/solicitudes" element={<SolicitudesContainer />}/>
          <Route exact path="/estadisticas" element={<StatisticsContainer />}/>
          <Route exact path="/login" element={<LoginContainer />}/>
        </Routes>
      </Router>
  );
}

export default App;
