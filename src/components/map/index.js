import { useState, useRef } from "react";

import {
    Circle,
    MapContainer,
    TileLayer
} from "react-leaflet";

import osm from "./osm-providers";

import "leaflet/dist/leaflet.css";
import "./index.css";
/*
24.820099,60.184987
 */
const Map = ({lat, lng}) => {

    //const [center, setCenter] = useState({lat: 24.820099, lng: 60.184987});
    const [center, setCenter] = useState([lat,lng]);
    const ZOOM_LEVEL = 15;
    const mapRef = useRef();

    const fillBlueOptions = { fillColor: 'blue' }

    return (
        <MapContainer
            center = { center}
            zoom = { ZOOM_LEVEL}
            ref = { mapRef }
        >
            <TileLayer 
                url = {osm.maptiler.url}
                attribution = {osm.maptiler.attribution}
            />
            <Circle 
                center = { center }
                pathOptions = { fillBlueOptions }
                radius = { 10 }
            />
        </MapContainer>
    );
};

export default Map;