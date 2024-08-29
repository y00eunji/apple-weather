export default function Summary() {
  return (
    <div className="flex flex-col items-center justify-center mt-10 font-medium">
      <div className="text-5xl">{'Seoul'}</div>
      <div className="text-8xl my-6">{'-7°'}</div>
      <div className="text-3xl mb-2">{'맑음'}</div>
      <div className="text-xl">
        <span>{`최고 : ${11}°`}</span> | <span>{`최저 : ${11}°`}</span>
      </div>
    </div>
  );
}
