import '../index.css';

const PersonCard = (props) => {
    const {firstName, lastName, age, hairColor} = props; //desestructuramo

    return (
        <div className='cardPersonal'>
            <h1>{lastName}, {firstName} </h1>
            <p>Age: {age} </p>
            <p>Hair Color: {hairColor} </p>
        </div>
    );
}

export default PersonCard;