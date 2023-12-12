import React, { useRef } from 'react';
import { FeatureCollection } from 'geojson';

import 'maplibre-gl/dist/maplibre-gl.css';
import { useMapInitializer } from '@/app/hooks/useMapInitializer';

export interface IMapProperties {
  initalState: {
    lng: number;
    lat: number;
    zoom: number;
  };
  data: FeatureCollection;
}

export default function Map({ initalState, data }: IMapProperties) {
  const mapContainer = useRef<HTMLDivElement>(null);
  useMapInitializer({ initalState, data }, mapContainer);

  return (
    <div className='relative w-full h-screen'>
      <div ref={mapContainer} className='absolute w-full h-full' />
    </div>
  );
}
