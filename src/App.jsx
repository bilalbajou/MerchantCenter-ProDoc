import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import DocPage from './pages/DocPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs/*" element={<DocPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
