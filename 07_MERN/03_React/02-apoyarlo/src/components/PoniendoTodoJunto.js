import { Component } from 'react';
import '../index.css';
                
class PoniendoJunto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age,
            lastName : this.props.lastName, 
            firstName: this.props.firstName,
            hairColor: this.props.hairColor
        };
    }
    sumarEdad = () => {
        this.setState({age : this.state.age + 1})
    }
    
    render() {
        return (
                <div className='cardPersonal'>
                    <h1>{ this.state.lastName }, {this.state.firstName} </h1>
                    <p>Age: { this.state.age }</p>
                    <p>Hair Color: {this.state.hairColor} </p>
                    <button onClick={ this.sumarEdad }>Sumar 1</button> 
                </div>
        );
    }
}
                
export default PoniendoJunto;