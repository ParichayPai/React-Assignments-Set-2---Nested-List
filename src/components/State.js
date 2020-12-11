import React from "react";
import City from "./City";

export default function State(props){
    const cities = props.cities;
    const [currentCity, setCurrentCity] = React.useState("");
    const [towns, setTowns] = React.useState();

    const displayTowns = (e, city) => {
        setCurrentCity(e.target.innerText);
        setTowns(city.towns);
    }

    return (
        <>
        {cities ? cities.map((city, index) => {
            return <div onClick={(e) => displayTowns(e, city)} id={`city${index+1}`} key={`city${index+1}`}>
            <li>{city.name}</li>
            <ol>{towns ? <City towns={city.name === currentCity ? city.towns: null}/> : null}</ol>
          </div>
        }) : null}
        </>
    )
}