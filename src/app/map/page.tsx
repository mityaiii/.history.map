'use client';

import Map from '../components/map/Map';

export default function MapPage() {
  return (
    <Map
      data={{
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [30.3083, 59.9572],
            },
            properties: {
              name: 'Itmo University2',
            },
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [30.3093, 59.9582],
            },
            properties: {
              name: 'Itmo University3',
            },
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [30.3063, 59.9562],
            },
            properties: {
              name: 'Itmo University',
            },
          },
        ],
      }}
      initalState={{
        lng: 30.3609,
        lat: 59.9311,
        zoom: 12,
      }}
    ></Map>
  );
}
