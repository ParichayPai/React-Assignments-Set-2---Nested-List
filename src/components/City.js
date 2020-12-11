import React from "react";

export default function City(props){
    const towns = props.towns;
    // const [currentCity, setCurrentCity] = React.useState("");
    // const [towns, setTowns] = React.useState();

    // const displayTowns = (e, city) => {
    //     setCurrentCity(e.target.innerText);
    //     setTowns(city.towns);
    // }

    return (
        <>
        {towns ? towns.map((town, index) => {
            return <div id={`town${index+1}`}>
            <li>{town.name}</li>
          </div>
        }):null}
        </>
    )
}