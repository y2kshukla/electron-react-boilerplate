import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import InternalGraph from './pages/Internal-graph';
import Appshell from './components/appshell';

export default function App() {
  return (
    <Appshell>
      <Router>
        <Routes>
          <Route path="/" element={<InternalGraph />} />
          <Route path="/data" element={<div>Data</div>} />
        </Routes>
      </Router>
    </Appshell>
  );
}
