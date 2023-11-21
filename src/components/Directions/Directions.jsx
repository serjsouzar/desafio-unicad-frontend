import { useEffect, useState } from "react";
import {
  useMapsLibrary,
  useMap,
} from "@vis.gl/react-google-maps";

import { useContext } from "react";
import { MyContext } from "../../context/application.context";
import { DirectionContainer } from "./styles";

const Directions = () => {
  const {selectedDelivery} = useContext(MyContext);

  const map = useMap();
  const routesLibrary = useMapsLibrary("routes");

  const [directionsService, setDirectionsService] = useState();
  const [directionsRenderer, setDirectionsRenderer] = useState();
  const [routes, setRoutes] = useState([]);
  const [routeIndex, setRouteIndex] = useState(0);
  
  const selected = routes[routeIndex];
  const leg = selected?.legs[0];

  useEffect(() => {
    if (!routesLibrary || !map) return;
    setDirectionsService(new routesLibrary.DirectionsService());
    setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }));
  }, [routesLibrary, map]);

  useEffect(() => {
    if (!directionsService || !directionsRenderer) return;

    directionsService
      .route({
        origin: selectedDelivery?.originAddress,
        destination: selectedDelivery?.deliveryAddress,
        travelMode: window.google.maps.TravelMode.DRIVING,
        provideRouteAlternatives: true,
      })
      .then((response) => {
        directionsRenderer.setDirections(response);
        setRoutes(response.routes);
      });

    return () => directionsRenderer.setMap(null);
  }, [directionsService, directionsRenderer]);

  useEffect(() => {
    if (!directionsRenderer) return;
    directionsRenderer.setRouteIndex(routeIndex);
  }, [routeIndex, directionsRenderer]);

  if (!leg) return null;

  return (
    <DirectionContainer>
    <h2>{selected.summary}</h2>
    <p>
      {leg.start_address.split(',')[0]} até {leg.end_address.split(',')[0]}
    </p>
    <p>Distancia: {leg.distance?.text}</p>
    <p>Duração: {leg.duration?.text}</p>

    <h2>Outras Rotas</h2>
    <ul>
      {routes.map((route, index) => (
        <li key={route.summary}>
          <button onClick={() => setRouteIndex(index)}>
            {route.summary}
          </button>
        </li>
      ))}
    </ul>
  </DirectionContainer>
  )
};

export default Directions;
