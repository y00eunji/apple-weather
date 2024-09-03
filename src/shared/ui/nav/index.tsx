import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <div className="w-full h-[80px] flex justify-center items-center">
      <div className="flex items-center justify-between w-[480px]">
        <Link
          to="/"
          className="w-[50%] h-[80px] bg-primary bg-opacity-60 rounded-t-xl flex justify-center items-center"
        >
          <div>날씨앱</div>
        </Link>

        <Link
          to="/calculator"
          className="w-[50%] h-[80px] bg-black bg-opacity-60 rounded-t-xl flex justify-center items-center text-white"
        >
          <div>계산기</div>
        </Link>
      </div>
    </div>
  );
}
