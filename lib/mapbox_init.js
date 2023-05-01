export function initializeMapbox(features, style, popup_template) {
    mapboxgl.accessToken = 'pk.eyJ1IjoidGltbW5uIiwiYSI6ImNsaDI2bGFrZTFhNnMzZHBucXdhNm1ta3MifQ.P2Sm5ipvNPH4MeCfwBUmFQ';
    const geojson = {
        'type': 'FeatureCollection',
        'features': features
    };

    const map = new mapboxgl.Map({
        container: 'map',
        style: style,
        center: [8.668841, 50.4350358],
        zoom: 14
    });

    map.markers = [];

    for (const marker of geojson.features) {
        const el = document.createElement('div');
        const width = marker.properties.iconSize[0];
        const height = marker.properties.iconSize[1];
        console.log(marker)
        el.className = 'marker';
        el.style.backgroundImage = `url(${marker.properties.icon})`;
        el.style.width = `${width}px`;
        el.style.height = `${height}px`;
        el.style.backgroundSize = '100%';
        el.data = marker;

        const markerInstance = new mapboxgl.Marker(el)
            .setPopup(new mapboxgl.Popup().setHTML(marker.properties.popup_template))
            .setLngLat(marker.geometry.coordinates)
            .addTo(map);

        el.addEventListener('click', (e) => {
            console.log(e.target.data)
            markerInstance.togglePopup();
        });

        map.markers.push(markerInstance);


    }

    return map;
}