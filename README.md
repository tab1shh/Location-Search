# Location Search and Map

This project allows users to search for locations and view them on a map. It utilizes the Nominatim API for searching places and Leaflet for rendering maps.

## Live Demo
Check out the live version of the project [here](https://location-search-five.vercel.app/)

## Features

1. Search for locations by name
2. Display search results with a button to view details
3. Show selected location on a map with a marker

## Technologies Used

1. React: Frontend framework
2. TypeScript: For type safety and development efficiency
3. Leaflet: Mapping library
4. React-Leaflet: React bindings for Leaflet
5. Nominatim: OpenStreetMap search API

## Installation

1. Clone the Repository

```bash
git clone https://github.com/yourusername/location-search-map.git
```

2. Navigate to the Project Directory

```bash
cd location-search-map
```

3. Install Dependencies

```bash
npm install
```

## Usage

1. Start the Development Server

```bash
npm start
```

2. Open the Application
   Open 'http://localhost:3000' in your web browser.

## Project Structure

1. api/Place.ts: Defines the Place interface representing a location.
2. api/search.ts: Contains the search function that fetches locations from the Nominatim API and transforms the response into Place objects.
3. components/LocationSearch.tsx: A component that provides a search form and displays search results.
4. components/Map.tsx: A component that renders a map using Leaflet and shows a marker for the selected place.
5. App.tsx: Main application component integrating LocationSearch and Map.
6. index.tsx: Entry point of the React application.
7. index.css: Global styles using Tailwind CSS.

## Configuration

1. API Endpoint: The project uses the Nominatim API. Make sure your usage complies with their terms of service.
2. Map Center and Zoom: The default center and zoom level for the map are set in 'Map.tsx'. Adjust as needed.

## Contributing

Feel free to open issues or submit pull requests if you have suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

Feel free to adjust any sections or add additional details relevant to you!
