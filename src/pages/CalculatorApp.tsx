import Calculator from '@/caculator/app/App.tsx';
import Navigation from '@/widgets/nav';

export default function CalculatorApp() {
  return (
    <div className="flex">
      <Navigation />
      <Calculator />
    </div>
  );
}
