import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import mapimage from './map.png';

import 'maplibre-gl/dist/maplibre-gl.css';

export default function Map() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const [lng] = useState(30.3609);
  const [lat] = useState(59.9311);
  const [zoom] = useState(8);

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once
    if (!mapContainer.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: {
        version: 8, sources: {}, layers: [
          {
            id: 'background',
            type: 'background',
            paint: {
              'background-color': '#e6e6e6',
            },
          }
        ]
      },
      center: [lng, lat],
      zoom: zoom,
      maxBounds: [
        [30.3609 - 0.4, 59.9311 - 0.2],
        [30.3609 + 0.4, 59.9311 + 0.2],
      ],
      hash: true,
      maxZoom: 15,
    });

    map.current.on('load', () => {
      map.current?.addSource("actual_map", {
        type: "image",
        url: mapimage.src,
        coordinates: [
          [30.194323, 60.05867],
          [30.531665, 60.05867],
          [30.531665, 59.836111],
          [30.191099, 59.837099], // bottom left
        ]
        // TODO: align image more precisely
      });
      map.current?.addLayer({
        id: 'actual_map-layer',
        'type': 'raster',
        'source': 'actual_map',
      });
      console.log(map.current);
    });
    
    new maplibregl.Marker({ color: "#FFFF00"})
    .setLngLat([30.3083, 59.9572]) // itmo coordinates
    .addTo(map.current);
  }, [lng, lat, zoom]);

  return (
    <div className="relative w-full h-screen">
      <div ref={mapContainer} className="absolute w-full h-full" />
    </div>
  );
}
