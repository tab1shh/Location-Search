import type { Place } from "./Place";

interface SearchResponse {
  features: {
    geometry: {
      coordinates: number[]; // coordinates of the place
    };
    properties: {
      place_id: number;
      display_name: string;
    };
  }[];
}
// used to search for places based on a term
export const search = async (term: string) => {
  // fetch data from the API
  const res = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${term}&format=geojson&addressdetails=1&layerr=address&limit=5`
  );
  const data: SearchResponse = await res.json(); // parse response data

  // map the API response to the Place format
  const places: Place[] = data.features.map((feature) => {
    return {
      id: feature.properties.place_id,
      name: feature.properties.display_name,
      longitude: feature.geometry.coordinates[0],
      latitude: feature.geometry.coordinates[1],
    };
  });

  return places;
};
