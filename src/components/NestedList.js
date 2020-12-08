import React from "react";
import State from "./State"

export default function NestedList(props) {
  const states = props.states;
  const [cityDisplay, setCityDisplay] = React.useState({display: "none"});

  const displayCities = (e, stateName) => {
    let list = document.getElementsByClassName(e.target.innerText);  
    console.log(list); 
    // for(ele in list){
    //   if(ele.style.display === "none")
    //     ele.style.display = "block";
    //   else
    //     ele.style.display = "none";
    // } 
  };

  return (
    <div>
      {states.map((state, index) => {
        return <div onClick={(e) => displayCities(e, state.name)} id={`state${index}`} key={state.name} >
          {state.name}
          <State cities={state.cities} cityDisplay={cityDisplay} class={state.name}/>
        </div>;
      })}
    </div>
  );
}
