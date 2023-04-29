import {initializeMapbox} from "./mapbox_init.js";

class StoreMap {
    constructor(root_selector, map_features) {
        this.root = document.querySelector(root_selector);
        if (!this.root) {
            throw new Error('Root element not found');
        }

        this.sidebar_width = 300;
        this.root.classList.add("storemap");

        this.map_features = map_features;

        this.makeSidebar();

        this.loadStoreMapCss()

        this.initializeMapbox();


    }

    initializeMapbox() {

        const map_div = document.createElement("div");
        map_div.id = "map";
        map_div.style.width = `calc(100% - ${this.sidebar_width}px)`;
        map_div.style.height = "600px";
        this.root.appendChild(map_div);


        const mapbox_css = document.createElement("link");
        mapbox_css.href = "https://api.mapbox.com/mapbox-gl-js/v2.9.1/mapbox-gl.css";
        mapbox_css.rel = "stylesheet";
        const mapbox_script = document.createElement("script");
        mapbox_script.src = "https://api.mapbox.com/mapbox-gl-js/v2.9.1/mapbox-gl.js";

        document.head.appendChild(mapbox_script);
        document.head.appendChild(mapbox_css);


        mapbox_script.onload = () => {
            initializeMapbox(this.transformMapboxFeatures(this.map_features));
        };


    }


    transformMapboxFeatures(features) {
        return features.map((feature) => {
            return {
                'type': 'Feature',
                'properties': {
                    'description':
                        `<strong>${feature.name}</strong><p>${feature.description}</p>`,
                    'icon': 'theatre'
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [feature.lng, feature.lat]
                }
            };
        });
    }


    mapboxZoomPixelsToMeters(zoom, lat) {
        return Math.sin((lat * 1000 + 87000) * 0.0000178) * 78300 * Math.pow(2, -zoom)
    }


    findBestZoomLevel(lat) {

    }


    makeSidebar() {
        const sidebar = document.createElement("div");
        sidebar.id = "sidebar";
        sidebar.className = "sidebar";
        sidebar.innerHTML = "<h1>Store Map</h1>";
        this.root.appendChild(sidebar);


        for (let feature of this.map_features) {
            const feature_div = document.createElement("div");
            feature_div.className = "sidebar-feature";


            const link = document.createElement("a");
            link.className = "feature-link";
            link.href = "#";
            link.innerHTML = feature.name;
            link.onclick = () => {
            }
            feature_div.appendChild(link);

            const description = document.createElement("div");
            description.className = "feature-description";
            description.innerHTML = feature.description;
            feature_div.appendChild(description);

            sidebar.appendChild(feature_div);
        }
    }

    loadStoreMapCss() {
        const storemap_css = document.createElement("link");
        storemap_css.href = "styles.css";
        storemap_css.rel = "stylesheet";
        document.head.appendChild(storemap_css);
    }
}

export {StoreMap}