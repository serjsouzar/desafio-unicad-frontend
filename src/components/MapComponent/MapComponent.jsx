import { useContext, useEffect } from "react";
import { MyContext } from "../../context/application.context";

import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { Container, MapContainer } from "./styles";
import Geocode from "../Geocode/Geocode";
import Directions from "../Directions/Directions";

const MapComponent = () => {
  const { selectedDelivery, latitude1, longitude1, seed } = useContext(MyContext);
  
  useEffect(() => {
     {<Geocode/>}
  },[selectedDelivery])

  return (
    <>
      {Object.entries(selectedDelivery).length !== 0  ? (
        <Container>
          <MapContainer>
            <APIProvider apiKey={process.env.REACT_APP_GOOGLE_KEY}>              
              <Directions key={seed} />
              <Map zoom={15} center={{ lat: latitude1, lng: longitude1 }} mapId={process.env.REACT_APP_MAP_ID}></Map>
            </APIProvider>
          </MapContainer>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
};

export default MapComponent;
