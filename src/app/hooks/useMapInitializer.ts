import maplibregl, { Map, GeoJSONSource } from 'maplibre-gl';
import { useEffect, useRef } from 'react';
import { IMapProperties } from '../components/map/Map';
import { useNoteStore } from '@/store/notes.store';

export const useMapInitializer = (
  { initalState: initialState, data }: IMapProperties,
  container: React.RefObject<HTMLDivElement>
) => {
  const map = useRef<maplibregl.Map | null>(null);
  const notes = useNoteStore(state => state.notes);

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
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom,
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
            '#92949D',
            100,
            '#92949D',
            750,
            '#92949D',
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
          'circle-color': '#92949D',
          'circle-radius': 12,
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

    mapInstance.on('click', 'unclustered-point', (e) => {
      if (!e.features || e.features.length === 0) {
        return;
      }

      // @ts-ignore
      const coordinates = e.features[0].geometry.coordinates.slice();
      const note_id = e.features[0].properties.note_id;
      const note = notes[note_id];

      let tsunami;
  
      if (e.features[0].properties.tsunami === 1) {
        tsunami = 'yes';
      } else {
        tsunami = 'no';
      }
  
      // Ensure that if the map is zoomed out such that
      // multiple copies of the feature are visible, the
      // popup appears over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }
  
      new maplibregl.Popup()
        .setLngLat(coordinates)
        .setHTML(
          `
          <div class='flex flex-col items-center'>
            <div class='flex justify-between '>
              <a href='/authors/${note.author_id}'>
                <img src='/author.png'
                alt='автор цитаты' class='w-16 h-16 rounded-full shadow-md'></img>
              </a>
              <p class='pb-4 w-2/3'>${note.citation.length > 104 
    ? note.citation.substring(0, 104) + '...'  
    : note.citation}</p>
            </div>
            <a class=' text-neutral-500' href='/notes/${note.note_id}'>перейти к цитате</a>
          </div>
          `
        )
        .addTo(mapInstance);
    });
  }, [container, data, initialState, notes]);

  return container;
};
