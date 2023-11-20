import { useContext } from "react";
import { MyContext } from "../../context/application.context";

import {
  APIProvider,
  Map,
  Marker,
  useMarkerRef,  
} from "@vis.gl/react-google-maps";
import { MapContainer } from "./styles";
import Geocode from "../Geocode/Geocode";
import Directions from "../Directions/Directions";

const MapComponent = () => {
  const { selectedDelivery, latitude1, longitude1, latitude2, longitude2 } =
    useContext(MyContext);
  const [markerRef, marker] = useMarkerRef();

  return (
    <>
      {Object.entries(selectedDelivery).length !== 0 ? (
        <MapContainer>
          <APIProvider apiKey={process.env.REACT_APP_GOOGLE_KEY}>
            <Geocode />
            <Directions />
            <Map zoom={15} center={{ lat: latitude1, lng: latitude1 }} >              
            </Map>
          </APIProvider>
        </MapContainer>
      ) : (
        <></>
      )}
    </>
  );
};

export default MapComponent;
