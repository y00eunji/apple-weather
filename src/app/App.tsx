import CalculatorApp from '@/pages/CalculatorApp.tsx';
import WeatherApp from '@/pages/WeatherApp.tsx';
import Navigation from '@/shared/ui/nav';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<WeatherApp />} />
          <Route path="/calculator" element={<CalculatorApp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
