import "leaflet/dist/leaflet.css";
import type { Place } from "../api/Place";
import { Map as LeafletMap } from "leaflet";
import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

interface MapProps {
  place: Place | null; // place to display on the maop
}

// display a map with a marker for the selected place
export default function Map({ place }: MapProps) {
  const mapRef = useRef<LeafletMap | null>(null); // ref to the leaflet map instance

  useEffect(() => {
    if (mapRef.current && place){
        mapRef.current.flyTo([place.latitude, place.longitude]) // fly to the places coordinates
    }
  }, [place]) // re run the effect when the place changes

  return (
    <MapContainer
      ref={mapRef}
      center={[40.7, -74]}
      zoom={12}
      scrollWheelZoom
      className="h-full"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {place && <Marker position={[place.latitude, place.longitude]}/>}
    </MapContainer>
  );
}
