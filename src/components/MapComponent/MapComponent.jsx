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
            <Map zoom={13} center={{ lat: latitude1, lng: longitude1 }}>
              <Marker
                ref={markerRef}
                position={{ lat: latitude1, lng: longitude1 }}
              />
              <Marker
                ref={markerRef}
                position={{ lat: latitude2, lng: longitude2 }}
              />
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
