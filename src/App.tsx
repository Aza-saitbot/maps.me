import React, {useState} from 'react';
import './App.scss';
import {MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const orders=[
    {id:1, order:'заявка 1'},
    {id:2, order:'заявка 2'},
    {id:3, order:'заявка 3'},
    {id:4, order:'заявка 4'},
    {id:5, order:'заявка 5'},
]

function App() {
    const [selectedOrder,setSelectedOrder]=useState<null|number>(null)

    const onHandlerSelect=(orderId:number)=>{

        setSelectedOrder(orderId)
    }

  return (
    <div className="App">
        <div>
            <div className="App__orders">
                <h3>Заявки:</h3>
                <div className="App__orders__list">
                    {orders.map(({id,order})=>
                        <div
                            onClick={()=>onHandlerSelect(id)}
                            className={`App__orders__list__item ${selectedOrder === id ? 'selected': ''}`}
                            key={id}
                        >{order}</div>
                    )}
                </div>
            </div>
        </div>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
    </div>
  );
}

export default App;
