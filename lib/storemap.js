import {initializeMapbox} from "./mapbox_init.js";
import "https://cdn.jsdelivr.net/gh/Timmnn/msass-storemap@main/lib/styles.css";


class StoreMap {
    constructor(root_selector, map_features, options) {
        this.root = document.querySelector(root_selector);
        if (!this.root) {
            throw new Error('Root element not found');
        }

        //merge options with default options

        this.options = {
            ...{
                sidebar_width: 300,
                api_key: null,
                mapbox_style: "mapbox://styles/mapbox/streets-v12",
                marker_popup_template: "{{name}} {{description}}",
                height: "600px",
                title: "Store Locator"
            }, ...options
        }

        this.root.classList.add("storemap");
        this.root.style.maxHeight = this.options.height;
        this.map_features = map_features;
        this.makeSidebar();
        this.initializeMapbox();
        this.loadStoreMapCss()


    }

    initializeMapbox() {

        const map_div = document.createElement("div");
        map_div.id = "map";
        map_div.style.width = `calc(100% - ${this.options.sidebar_width}px)`;
        map_div.style.height = this.options.height;
        this.root.appendChild(map_div);


        const mapbox_css = document.createElement("link");
        mapbox_css.href = "https://api.mapbox.com/mapbox-gl-js/v2.9.1/mapbox-gl.css";
        mapbox_css.rel = "stylesheet";
        const mapbox_script = document.createElement("script");
        mapbox_script.src = "https://api.mapbox.com/mapbox-gl-js/v2.9.1/mapbox-gl.js";

        document.head.appendChild(mapbox_script);
        document.head.appendChild(mapbox_css);


        mapbox_script.onload = () => {
            this.map = initializeMapbox(this.transformMapboxFeatures(this.map_features, this.options.marker_popup_template), this.options.mapbox_style);
        };


    }


    transformMapboxFeatures(features, popup_template) {
        return features.map((feature) => {

            feature.__directions_link = `https://www.google.com/maps/dir/?api=1&destination=${feature.lat},${feature.lng}`
            feature.__location_link = `http://www.google.com/maps/place/${feature.lat},${feature.lng}`


            return {
                'type': 'Feature',
                'properties': {
                    'popup_template': this.parseTemplate(popup_template, feature),
                    'icon': feature.icon,
                    'iconSize': [30, 30],
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
        sidebar.innerHTML = `<h1 class="title">${this.options.title}</h1>`;
        this.root.appendChild(sidebar);

        const locations = document.createElement("div");


        for (let i = 0; i < this.map_features.length; i++) {
            const feature = this.map_features[i];
            const feature_div = document.createElement("div");
            feature_div.className = "sidebar-feature";
            feature_div.tabIndex = 0;

            const template = this.options.sidebar_template ? this.options.sidebar_template : this.options.marker_popup_template;

            feature_div.innerHTML = this.parseTemplate(template, feature);


            feature_div.onclick = (e) => {
                let target = e.target;
                while (!target.classList.contains("sidebar-feature")) {
                    target = target.parentElement;
                }
                for (let j = 0; j < locations.children.length; j++) {
                    if (locations.children[j].classList.contains("active")) {
                        locations.children[j].classList.remove("active");
                    }
                }
                target.classList.add("active");


                this.map.flyTo({
                    center: [feature.lng, feature.lat],
                    zoom: 15
                });


                for (let j = 0; j < this.map.markers.length; j++) {
                    this.map.markers[j]._popup.isOpen() && this.map.markers[j].togglePopup();
                }


                !this.map.markers[i]._popup.isOpen() && this.map.markers[i].togglePopup();

            }

            locations.appendChild(feature_div);
        }

        sidebar.appendChild(locations);

        const company_label = document.createElement("div");
        company_label.className = "company-label";
        company_label.innerHTML = "Powered by <a href='https://www.storemap.co'>StoreMap</a>";

        sidebar.appendChild(company_label);
    }

    loadStoreMapCss() {
        const storemap_css = document.createElement("link");
        document.head.appendChild(storemap_css);
    }

    parseTemplate(template, variables) {
        return template.replaceAll(/{{(\w+)}}/gm, (_, variable) => variables[variable])
    }
}

export {StoreMap}