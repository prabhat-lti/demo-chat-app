import './App.css';
import { Route, Routes } from 'react-router-dom';
import CpfChart from './pages/CpfChart';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<CpfChart />} />
        <Route path='*'  />
      </Routes>
    </div>
  );
}

export default App;
