export function initializeMapbox(features) {
    mapboxgl.accessToken = 'pk.eyJ1IjoidGltbW5uIiwiYSI6ImNsaDI2bGFrZTFhNnMzZHBucXdhNm1ta3MifQ.P2Sm5ipvNPH4MeCfwBUmFQ';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [8.673610, 50.437069],
        zoom: 14
    });

    map.addControl(new mapboxgl.NavigationControl());

    map.on('load', () => {
        map.addSource('places', {
            // This GeoJSON contains features that include an "icon"
            // property. The value of the "icon" property corresponds
            // to an image in the Mapbox Streets style's sprite.
            'type': 'geojson',
            'data': {
                'type': 'FeatureCollection',
                'features': features
            }
        });
// Add a layer showing the places.
        map.addLayer({
            'id': 'places',
            'type': 'symbol',
            'source': 'places',
            'layout': {
                'icon-image': ['get', 'icon'],
                'icon-allow-overlap': true
            }
        });

// When a click event occurs on a feature in the places layer, open a popup at the
// location of the feature, with description HTML from its properties.
        map.on('click', 'places', (e) => {
// Copy coordinates array.
            const coordinates = e.features[0].geometry.coordinates.slice();
            const description = e.features[0].properties.description;

// Ensure that if the map is zoomed out such that multiple
// copies of the feature are visible, the popup appears
// over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            new mapboxgl.Popup()
                .setLngLat(coordinates)
                .setHTML(description)
                .addTo(map);
        });

// Change the cursor to a pointer when the mouse is over the places layer.
        map.on('mouseenter', 'places', () => {
            map.getCanvas().style.cursor = 'pointer';
        });

// Change it back to a pointer when it leaves.
        map.on('mouseleave', 'places', () => {
            map.getCanvas().style.cursor = '';
        });
    });
}