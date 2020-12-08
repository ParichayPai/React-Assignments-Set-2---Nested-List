import React from "react";
import City from "./City";
// import { makeStyles } from '@material-ui/core/styles'

// const useStyles = makeStyles({
//     cities: {
//       display:"none",
//     },
//   });

export default function State(props){
    // const style = useStyles();
    const cities = props.cities;

    const displayTowns = () => {

    }

    return (
        <div >
        {cities.map((city, index) => {
            return <div className={props.class} onClick={displayTowns} id={`city${index+1}`} key={`city${index+1}`} style={props.cityDisplay}>
            {city.name}
            <City towns={city.towns}/>
          </div>
        })}
        </div>
    )
}