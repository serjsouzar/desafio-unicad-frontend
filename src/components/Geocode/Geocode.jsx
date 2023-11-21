import { useContext } from "react";
import { MyContext } from "../../context/application.context";

import { useEffect, useState } from "react";
import { useMapsLibrary } from "@vis.gl/react-google-maps";

const Geocode = ({selectedDelivery}) => {
  const {
    setLatitude1,
    setLongitude1,
    setLatitude2,
    setLongitude2,
    latitude1,
    longitude1,
    latitude2,
    longitude2
  } = useContext(MyContext);

  const region = "BR";

  const geocodingApiloaded = useMapsLibrary("geocoding");
  const [geocodingService, setGeocodingService] = useState(null);
  const [geocodingResults, setGeocodingResults] = useState("");
  let address1 = selectedDelivery?.originAddress;
  let address2 = selectedDelivery?.deliveryAddress;

  console.log("Endereco 1: " + latitude1 + " - " + longitude1)
  console.log("Endereco 2: " + latitude2 + " - " + longitude2)

  useEffect(() => {
    if (!geocodingApiloaded) return 
    setGeocodingService(new window.google.maps.Geocoder());
  }, [geocodingApiloaded]);

  if (address1) {
    if (!geocodingService) return;
    let address = address1
    geocodingService.geocode({ address, region }, (results, status) => {
      if (results && status === "OK") {
        setGeocodingResults(results[0]);
        setLatitude1(results[0]?.geometry?.location.lat());
        setLongitude1(results[0]?.geometry?.location.lng());
      }
    });
  }

  if (address2) {
    if (!geocodingService) return;
    let address = address2
    geocodingService.geocode({ address, region }, (results, status) => {
      if (results && status === "OK") {
        setGeocodingResults(results[0]);
        setLatitude2(results[0]?.geometry?.location.lat());
        setLongitude2(results[0]?.geometry?.location.lng());
      }
    });
  }


  return <></>;
};

export default Geocode;
