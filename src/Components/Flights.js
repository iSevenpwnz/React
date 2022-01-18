import React, {useEffect, useState} from 'react';
import Flight from "./Flight";

const Flights = () => {
    let [mission, setMission] = useState([]);
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => {
                setMission(value.filter(value=>value.launch_year !== '2020'))
            })
    }, [])
    return (
        <div>
            {
                mission.map(value => <Flight key={value.flight_number}
                item={value}
                />)
            }
        </div>
    );
};

export default Flights;