import CalculatorApp from '@/pages/CalculatorApp.tsx';
import WeatherApp from '@/pages/WeatherApp.tsx';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WeatherApp />} />
        <Route path="/calculator" element={<CalculatorApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
