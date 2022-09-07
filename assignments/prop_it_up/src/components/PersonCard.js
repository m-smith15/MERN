import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
    super(props)
        this.state = {
            age: this.props.age
        }
    }

    handleClick = () => {
        console.log(this.props.firstName + "'s button wuz clicked")
        console.log(this.state.age + 1)
        this.setState({ age: this.state.age += 1});
    }
    
    render() {
        return <div>
        <h1>{this.props.lastName}, {this.props.firstName}</h1>
        <p>Age: {this.state.age}</p>
        <p>Hair color: {this.props.hairColor}</p>
        <button onClick={ this.handleClick }>Birthday Button</button>
        </div>
    }
}
export default PersonCard;