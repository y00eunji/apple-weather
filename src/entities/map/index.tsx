import useGoogleMaps from '@/entities/map/useGooleMaps.tsx';
import { cn } from '@/shared/lib/cn.ts';

import { useState } from 'react';

import { Status, Wrapper } from '@googlemaps/react-wrapper';

function MapComponent() {
  const { setMapType, ref } = useGoogleMaps();
  const [activeType, setActiveType] = useState('PA0');

  const handleType = (type: string) => {
    setMapType(type);
    setActiveType(type);
  };

  return (
    <>
      <div className="flex ml-1 text-[15px] w-full">
        <button
          onClick={() => handleType('PA0')}
          className={cn(activeType === 'PA0' && 'rounded-2xl bg-primary', ' w-[90px] h-[30px]')}
        >
          강수량지도
        </button>
        <button
          onClick={() => handleType('WND')}
          className={cn(activeType === 'WND' && 'rounded-2xl bg-primary', ' w-[90px] h-[30px]')}
        >
          풍향지도
        </button>{' '}
        <button
          onClick={() => handleType('TA2')}
          className={cn(activeType === 'TA2' && 'rounded-2xl bg-primary', ' w-[90px] h-[30px]')}
        >
          기온지도
        </button>
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
