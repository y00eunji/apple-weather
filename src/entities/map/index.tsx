import useGoogleMaps from '@/entities/map/useGooleMaps.tsx';

import { Status, Wrapper } from '@googlemaps/react-wrapper';

function MapComponent() {
  const { ref } = useGoogleMaps();
  return <div ref={ref} id="map" className="h-[90%] w-full" />;
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
