import React from 'react';

const PersonCard = props => {
    return (
        <div className='cardPersonal'>
            <h1> {props.lastName}, {props.firstName} </h1>
            <p> Age: {props.age} </p>
            <p> Hair Color: {props.hairColor} </p>
        </div>
    )
}

export default PersonCard;