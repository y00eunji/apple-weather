import { useWeatherStore } from '@/app/store/weatherStore.ts';

import { useEffect, useRef, useState } from 'react';

const useGoogleMaps = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [marker, setMarker] = useState<google.maps.marker.AdvancedMarkerElement | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const [mapType, setMapType] = useState('PA0');

  const { weather } = useWeatherStore();

  const position = weather?.current.coord;
  const temp = weather?.current.main.temp;

  // 구글 지도 그리기
  useEffect(() => {
    if (!ref.current || !position) return;

    if (!map) {
      const initialMap = new window.google.maps.Map(ref.current, {
        center: {
          lat: position.lat,
          lng: position.lon,
        },
        zoom: 10,
        mapId: '481de024daacacb7',
        disableDefaultUI: true,
        clickableIcons: false,
        gestureHandling: 'greedy',
      });
      setMap(initialMap);
      return;
    }
    map.setCenter({ lat: position.lat, lng: position.lon });
  }, [ref, map, position]);

  // 마커 찍기
  useEffect(() => {
    if (!position) return;

    const glyph = document.createElement('div');
    glyph.textContent = `${temp?.toFixed()}°`;
    glyph.style.fontSize = '18px';

    const pinOptions = new google.maps.marker.PinElement({
      glyph,
      scale: 1.5,
      background: '#2273be',
      borderColor: 'white',
      glyphColor: 'white',
    });

    const newMarker = new google.maps.marker.AdvancedMarkerElement({
      map,
      position: { lat: position.lat, lng: position.lon },
      content: pinOptions.element,
      title: '현재 지도 위치',
    });
    setMarker(newMarker);
  }, [map, position, temp]);

  // 이전 마커 지우기
  useEffect(() => {
    return () => {
      if (marker) {
        marker.map = null;
      }
    };
  }, [marker]);

  // 강수량 이미지 매핑
  useEffect(() => {
    if (!map) return;
    map.overlayMapTypes.clear();

    const newImage = new google.maps.ImageMapType({
      getTileUrl: function (coord, zoom) {
        return `https://maps.openweathermap.org/maps/2.0/weather/${mapType}/${zoom}/${coord.x}/${coord.y}?appid=${import.meta.env.VITE_APP_WEATHER_API_KEY}&fill_bound=true&opacity=${mapType === 'PA0' ? 1 : 0.3}`;
      },
      tileSize: new google.maps.Size(256, 256),
    });

    map.overlayMapTypes.insertAt(0, newImage);
  }, [map, mapType]);

  return { setMapType, ref };
};

export default useGoogleMaps;
