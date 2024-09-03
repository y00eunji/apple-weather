import useGoogleMaps from '@/entities/map/useGooleMaps.tsx';

import { Status, Wrapper } from '@googlemaps/react-wrapper';

function MapComponent() {
  const { setMapType, ref } = useGoogleMaps();

  return (
    <>
      <div className="flex gap-3 ml-1 text-[15px]">
        <button onClick={() => setMapType('PA0')}>강수량지도</button> |
        <button onClick={() => setMapType('WND')}>풍향지도</button> |
        <button onClick={() => setMapType('TA2')}>기온지도</button>
      </div>
      <div ref={ref} id="map" className="h-[90%] w-full rounded-2xl mt-2" />
    </>
  );
}

export default function Map() {
  return (
    <Wrapper
      apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
      render={status => {
        if (status === Status.FAILURE) return <div>Error loading maps</div>;
        if (status === Status.LOADING) return <div>Loading...</div>;
        return <MapComponent />;
      }}
      libraries={['marker']}
    />
  );
}
