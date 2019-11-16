import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import * as parkData from "./data/skateboard-parks.json";
import mapStyles from "./mapStyles";
import * as locationsData from "./data/locations.json";


function Map() {
  const [selectedPark, setSelectedPark] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 45.4211, lng: -75.6903 }}
      defaultOptions={{ styles: mapStyles }}
    >
	{locationsData.people.map(loc => (
		<Marker
			key={loc.properties.ID}
			position={{
				lat:loc.geometry.coordinates[1],
				lng:loc.geometry.coordinates[0]
			}}
          onClick={() => {
            setSelectedPark(loc);
          }}

            icon={{
              url: "/green.png",
              scaledSize: new window.google.maps.Size(25,45)
            }}
		/>
	))}
	{locationsData.crs.map(loc => (
		<Marker
			key={loc.properties.ID}
			position={{
				lat:loc.geometry.coordinates[1],
				lng:loc.geometry.coordinates[0]
			}}
	    onClick={() => {
            setSelectedPark(loc);
          }}
            icon={{
              url: "/red.png",
              scaledSize: new window.google.maps.Size(25,45)
            }}
	
		/>
	))}
	{locationsData.type.map(loc => (
		<Marker
			key={loc.properties.ID}
			position={{
				lat:loc.geometry.coordinates[1],
				lng:loc.geometry.coordinates[0]
			}}
	onClick={() => {
            setSelectedPark(loc);
          }}
            icon={{
              url: "/blue.png",
              scaledSize: new window.google.maps.Size(45,45)
            }}
		/>
	))}
	{locationsData.responders.map(loc => (
		<Marker
			key={loc.properties.ID}
			position={{
				lat:loc.geometry.coordinates[1],
				lng:loc.geometry.coordinates[0]
			}}
onClick={() => {
            setSelectedPark(loc);
          }}
            icon={{
              url: "/black.png",
              scaledSize: new window.google.maps.Size(45,45)
            }}
		/>
	))}
	{locationsData.safeloc.map(loc => (
		<Marker
			key={loc.properties.ID}
			position={{
				lat:loc.geometry.coordinates[1],
				lng:loc.geometry.coordinates[0]
			}}
onClick={() => {
            setSelectedPark(loc);
          }}
            icon={{
              url: "/logo.png",
              scaledSize: new window.google.maps.Size(45,45)
            }}
		/>
	))}


      {selectedPark && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedPark(null);
          }}
          position={{
            lat: selectedPark.geometry.coordinates[1],
            lng: selectedPark.geometry.coordinates[0]
          }}
        >
          <div>
            <h2>{selectedPark.properties.ID}</h2>
            <p>{selectedPark.properties.lat}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <MapWrapped
        googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp6libraries=geometry,drawing,places&key=AIzaSyBGW1DRYbhOUcZjsxLUE-pOeVE_6KbFQ20'}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
