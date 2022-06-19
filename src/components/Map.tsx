import React, {useEffect, useRef} from 'react';
import {MapContainer, TileLayer} from "react-leaflet";
import RoutineMachine from "./RoutingMachine";
import L from "leaflet";
import iconD from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import {useAppSelector} from "../redux/redusers/rootReducer";

let DefaultIcon = L.icon({
    iconUrl: iconD,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;


const Map = () => {

    const pointA = useAppSelector(state => state.orders.pointA)
    const pointB = useAppSelector(state => state.orders.pointB)
    const rMachine = useRef<any>(null);


    useEffect(() => {
        if (rMachine.current) {
            
            rMachine.current.setWaypoints([pointA,pointB]);
        }
    }, [pointA, pointB, rMachine]);


    return (
        <MapContainer
            className="App__map"
            zoom={13} scrollWheelZoom={false} >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <RoutineMachine ref={rMachine} waypoints={[pointA,pointB]} />
        </MapContainer>
    );
};

export default Map;
