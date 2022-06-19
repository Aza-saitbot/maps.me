import React, {useRef, useState} from 'react';
import './App.scss';
import "leaflet/dist/leaflet.css";
import Map from './components/Map'
import ListOrders from "./components/ListOrders";
import {useMouse} from "./hooks/hooks";

const App =()=> {
    const refDiv = useRef<HTMLDivElement>(null)
    const [width,setWidth]=useState(400)

    const onHandler = (e:React.MouseEvent<HTMLDivElement>) => {
        setWidth(e.screenX)
    }

    useMouse(refDiv, onHandler)
    return (
        <div className="App">
                <ListOrders width={width}/>
            <div className="App__rightBorder" ref={refDiv}/>
            <Map/>
        </div>
    );
}
export default App;
