import { Map, GeoJSONSource } from 'maplibre-gl';
import { useEffect, useRef } from 'react';
import { IMapProperties } from '../components/map/Map';

export const useMapInitializer = (
  { initalState, data }: IMapProperties,
  container: React.RefObject<HTMLDivElement>
) => {
  const map = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (map.current) return;
    if (!container.current) return;

    map.current = new Map({
      container: container.current,
      style: {
        version: 8,
        sources: {},
        layers: [
          {
            id: 'background',
            type: 'background',
            paint: {
              'background-color': '#e6e6e6',
            },
          },
        ],
      },
      center: [initalState.lng, initalState.lat],
      zoom: initalState.zoom,
      maxBounds: [
        [30.3609 - 0.2, 59.9311 - 0.143],
        [30.3609 + 0.2, 59.9311 + 0.143],
      ],
      hash: true,
      maxZoom: 15,
    });

    const mapRef = map as React.MutableRefObject<maplibregl.Map>;
    const mapInstance = mapRef.current as maplibregl.Map;

    mapInstance.on('load', () => {
      mapInstance.setGlyphs(
        'http://fonts.openmaptiles.org/{fontstack}/{range}.pbf'
      );

      mapInstance.addSource('blockade_map', {
        type: 'image',
        url: './map.png',
        // TODO: align image more precisely
        coordinates: [
          [30.194323, 60.05867],
          [30.531665, 60.05867],
          [30.531665, 59.836111],
          [30.191099, 59.837099],
        ],
      });

      mapInstance.addLayer({
        id: 'map-layer',
        type: 'raster',
        source: 'blockade_map',
      });

      mapInstance.addSource('points', {
        type: 'geojson',
        data: data,
        cluster: true,
        clusterMaxZoom: 14,
        clusterRadius: 50,
      });

      mapInstance.addLayer({
        id: 'clusters',
        type: 'circle',
        source: 'points',
        filter: ['has', 'point_count'],
        paint: {
          'circle-color': [
            'step',
            ['get', 'point_count'],
            '#51bbd6',
            100,
            '#f1f075',
            750,
            '#f28cb1',
          ],
          'circle-radius': [
            'step',
            ['get', 'point_count'],
            20,
            100,
            30,
            750,
            40,
          ],
        },
      });

      mapInstance.addLayer({
        id: 'cluster-count',
        type: 'symbol',
        source: 'points',
        filter: ['has', 'point_count'],
        layout: {
          'text-field': '{point_count_abbreviated}',
          'text-font': ['Open Sans Regular'],
          'text-size': 12,
        },
      });

      mapInstance.addLayer({
        id: 'unclustered-point',
        type: 'circle',
        source: 'points',
        filter: ['!', ['has', 'point_count']],
        paint: {
          'circle-color': '#11b4da',
          'circle-radius': 4,
          'circle-stroke-width': 1,
          'circle-stroke-color': '#fff',
        },
      });
    });

    mapInstance.on('click', 'clusters', (e) => {
      const features = mapInstance.queryRenderedFeatures(e.point, {
        layers: ['clusters'],
      });

      const clusterId = features[0].properties.cluster_id;

      const source = mapInstance.getSource('points') as GeoJSONSource;
      source.getClusterExpansionZoom(clusterId, (err: any, zoom: any) => {
        if (err) return;

        mapInstance.easeTo({
          // @ts-ignore
          center: features[0].geometry.coordinates,
          zoom,
        });
      });
    });
  }, [container, data, initalState]);

  return container;
};
