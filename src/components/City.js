import React from "react";

export default function City(props){
    const towns = props.towns;


    return (
        <div className={"towns"}>
        {towns.map((town, index) => {
            return <div id={`town${index+1}`} key={`town${index+1}`}>
            {town.name}
          </div>
        })}
        </div>
    )
}