import './App.css';
import Layout from './components/Layout';
import Home from './components/Home';
import Dapp from './components/Dapp';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Layout>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/dapp" element={<Dapp/>}/>
          </Routes>
      </Layout>
    </Router>

  );
}

export default App;
