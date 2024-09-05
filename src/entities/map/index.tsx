import useGoogleMaps from '@/entities/map/useGooleMaps.tsx';
import { MAP_TYPES } from '@/shared/constants/mapTypes.ts';
import { cn } from '@/shared/lib/cn.ts';

import { useState } from 'react';

import { Status, Wrapper } from '@googlemaps/react-wrapper';

function MapComponent() {
  const { setMapType, ref } = useGoogleMaps();
  const [activeType, setActiveType] = useState('PA0');

  const handleType = (type: (typeof MAP_TYPES)[keyof typeof MAP_TYPES]) => {
    setMapType(type);
    setActiveType(type);
  };

  const getButtonStyle = (type: (typeof MAP_TYPES)[keyof typeof MAP_TYPES]) => {
    return cn(activeType === type && 'rounded-2xl bg-primary', 'w-[50px] h-[30px]', type === 'PA0' ? 'w-[70px]' : '');
  };

  return (
    <>
      <div className="flex ml-1 text-[15px] w-full">
        <button onClick={() => handleType(MAP_TYPES.PRECIPITATION)} className={getButtonStyle('PA0')}>
          강수량
        </button>
        <button onClick={() => handleType(MAP_TYPES.WIND)} className={getButtonStyle('WND')}>
          풍향
        </button>
        <button onClick={() => handleType(MAP_TYPES.TEMPERATURE)} className={getButtonStyle('TA2')}>
          기온
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
