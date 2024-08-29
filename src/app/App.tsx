import Daily from '@/widgets/daily';
import Details from '@/widgets/details';
import Hourly from '@/widgets/hourly';
import Radar from '@/widgets/radar';
import Summary from '@/widgets/summary';

function App() {
  return (
    <div className="w-full h-full flex items-center justify-center text-white">
      <div className="w-[480px] h-full bg-primary opacity-60 flex flex-col items-center gap-5">
        <Summary />
        <Hourly />
        <Daily />
        <Radar />
        <Details />
      </div>
    </div>
  );
}

export default App;
