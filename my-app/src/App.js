import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";
import * as locationsData from "./data/skateboard-parks.json";

function Map() {
    return ( 
        <GoogleMap 
            defaultZoom={10} 
            defaultCenter={{ lat:45, lng:-75}}
        >
		console.log(locationsData)
	{locationsData.people.map(loc => (
		<Marker
			key={loc.properties.ID}
			position={{
				lat:loc.geometry.coordinates[1],
				lng:loc.geometry.coordinates[0]
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
            icon={{
              url: "/black.png",
              scaledSize: new window.google.maps.Size(45,45)
            }}
		/>
	))}
	
	</GoogleMap>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function App(){
    return (
        <div style = {{width:'100vw', height:'100vh'}}>
            <WrappedMap 
	    	googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp6libraries=geometry,drawing,places&key=AIzaSyBGW1DRYbhOUcZjsxLUE-pOeVE_6KbFQ20'}
            	loadingElement={<div style = {{ height: "100%"}}/>}
            	containerElement={<div style = {{ height: "100%"}}/>}
            	mapElement={<div style = {{ height: "100%"}}/>}
            />
        </div>
    );
}
