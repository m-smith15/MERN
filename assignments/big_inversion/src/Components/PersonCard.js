import React, { useState } from 'react';

const PersonCard = props => {
    const [age, setAge] = useState(props.age);

    const incrimentAge = () => {
        setAge(age + 1);
    }

    return(
        <div>
            <h1>{ props.lastName }, { props.firstName }</h1>
            <p>Age: { age }</p>
            <p>Hair Color: { props.hairColor }</p>
            <button onClick={ incrimentAge }>Birthday Button</button>
        </div>
    );
}
export default PersonCard;