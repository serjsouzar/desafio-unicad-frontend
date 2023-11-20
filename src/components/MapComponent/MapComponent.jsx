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
  const { delivery, latitude1, longitude1, latitude2, longitude2 } = useContext(MyContext);
  const [markerRef, marker] = useMarkerRef();

  //const address1 = delivery[0]?.deliveryAddress;
  //const address2 = delivery[3].deliveryAddress


  //DEFINIR MARKER
  /* useEffect(() => {
    if (!marker) {
      return;
    }
    
    // do something with marker instance here
  }, [marker]); */

  //RENDERIZAR MAPA

  /**
   * <Map zoom={12} center={{lat: 53.54992, lng: 10.00678}}>
        <Marker ref={markerRef} position={{lat: 53.54992, lng: 10.00678}} />        
      </Map>
   */

      


  return (
    <MapContainer>
      <APIProvider apiKey={process.env.REACT_APP_GOOGLE_KEY}>
        <Geocode />
        <Map zoom={13} center={{ lat:latitude1, lng:longitude1 }}>
        <Marker ref={markerRef} position={{lat: latitude1, lng: longitude1}} />
        </Map>
      </APIProvider>
    </MapContainer>
  );
};

export default MapComponent;
