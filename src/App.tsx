// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PayPage from "@/pages/pay/page"
import SuccessPage from './pages/success/page';
import Home from "@/pages/page";

const App: React.FC = () => {
  return (
    <div className="App">
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pay" element={<PayPage />} />
            <Route path="/success" element={<SuccessPage />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
};

export default App;