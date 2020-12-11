import React from "react";

export default function City(props){
    const towns = props.towns;

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