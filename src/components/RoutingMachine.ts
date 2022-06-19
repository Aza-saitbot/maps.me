import L from "leaflet";
import {createControlComponent} from "@react-leaflet/core";
import "leaflet-routing-machine";


const createRoutineMachineLayer = (props:any) => {

    const { waypoints } = props;

    return  L.Routing.control({
        waypoints,
        lineOptions:{
            styles: [{ color: "#6FA1EC", weight: 4 }],
            addWaypoints:true,
            missingRouteStyles:[{ color: "#6FA1EC", weight: 4 }],
            extendToWaypoints:true,
            missingRouteTolerance:1
        },

        show: false,
        addWaypoints: false,
        routeWhileDragging: true,
        fitSelectedRoutes: true,
        showAlternatives: false,
        autoRoute: true,


    });

};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
