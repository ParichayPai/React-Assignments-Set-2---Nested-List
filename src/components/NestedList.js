import React from "react";
import State from "./State"

export default function NestedList(props) {
  const states = props.states;
  const [cities, setCities] = React.useState();
  const [currentState, setCurrentState] = React.useState("");

  const displayCities = (e, state) => {
    if(e.target.innerText === state.name)
      setCurrentState(e.target.innerText);
    setCities(state.cities);
  };

  return (
    <div>
      {states.map((state, index) => {
        return <div onClick={(e) => displayCities(e, state)} id={`state${index+1}`} key={state.name} >
          {state.name}
          {cities ? <State cities={state.name === currentState ? state.cities: null}/> : null}
        </div>;
      })}
    </div>
  );
}
