import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    //specific to JS, not with react; works same as JS or Java constructor
    constructor(props){ // same props object
        super(props); // Required* ; to call base class React.Component constructor as it does the setup for react.
        this.state = { lat: null, errorMessage: '' }; //we put here most relevant data to our component; we will also set default value to the variables
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ lat: position.coords.latitude });
            },
            err => {
                // console.log(err)
                this.setState({errorMessage: err.message})
            }
            // props => {console.log(this.props)}
        );
    }

    //React says we have to define render!! Required**
    render() {
        if(this.state.errorMessage && !this.state.lat){
            return <div> Error: {this.state.errorMessage}</div>;
        }
        if(!this.state.errorMessage && this.state.lat){
            return <div> latitude: {this.state.lat}</div>;
        }
        return <div>Loading Data</div>;
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector ('#root')
)