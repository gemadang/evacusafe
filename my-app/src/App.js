import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

function Map() {
    return ( 
        <GoogleMap 
            defaultZoom={10} 
            defaultCenter={{ lat:45, lng:-75}}
        />
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
