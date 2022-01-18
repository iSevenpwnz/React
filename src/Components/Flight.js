import React from 'react';

const Flight = ({item:value}) => {
    return (
        <div>
            Mission name - {value.mission_name} -- {value.launch_year} Year
            <img src={value.links.mission_patch} alt="mission_patch"/>
        </div>
    )

};

export default Flight;