import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <div className=" h-[80px] flex flex-col sticky top-0">
      <div className="flex items-center justify-between flex-col">
        <Link
          to="/"
          className="w-[120px] h-[100px] bg-primary bg-opacity-60 rounded-l-xl flex justify-center items-center"
        >
          <div>날씨앱</div>
        </Link>

        <Link
          to="/calculator"
          className="w-[120px] h-[100px] bg-neutral-700 rounded-l-xl flex justify-center items-center text-white"
        >
          <div>계산기</div>
        </Link>
      </div>
    </div>
  );
}
