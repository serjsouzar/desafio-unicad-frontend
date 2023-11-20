import { useContext } from "react";
import { MyContext } from "../../context/application.context";

import { useEffect, useState } from "react";
import { useMapsLibrary } from "@vis.gl/react-google-maps";

const Geocode = () => {
  const {
    delivery,
    latitude1,
    setLatitude1,
    longitude1,
    setLongitude1,
    latitude2,
    setLatitude2,
    longitude2,
    setLongitude2,
  } = useContext(MyContext);
  const region = "BR";

  const geocodingApiloaded = useMapsLibrary("geocoding");
  const [geocodingService, setGeocodingService] = useState(null);
  const [geocodingResults, setGeocodingResults] = useState("");
  const [address, setAddress] = useState(delivery[0]?.deliveryAddress);

  //const [finalAddress, setFinalAddress] = useState(address2)

  useEffect(() => {
    if (!geocodingApiloaded) return;
    setGeocodingService(new window.google.maps.Geocoder());
  }, [geocodingApiloaded]);

  if (address) {
    if (!geocodingService) return;

    geocodingService.geocode({ address, region }, (results, status) => {
      if (results && status === "OK") {
        setGeocodingResults(results[0]);
        setLatitude1(results[0].geometry.location.lat());
        setLongitude1(results[0].geometry.location.lng());
      }
    });
  }

  return (
    <>
      <Geocode />
    </>
  );
};

export default Geocode;
