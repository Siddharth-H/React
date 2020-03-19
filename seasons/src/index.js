import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component{
    state = { lat: null, errorMessage: ''}; //equivalent to defining in constructor

    //Implementing Component Life Cycle methods
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position =>
                this.setState({ lat: position.coords.latitude }),
            err =>
                this.setState({errorMessage: err.message})
        );
    }

    componentDidUpdate(){
        console.log("My component was updated");
    }

    //helper function
    renderContent(){
        if(this.state.errorMessage && !this.state.lat){
            return <div> Error: {this.state.errorMessage}</div>;
        }
        if(!this.state.errorMessage && this.state.lat){
            // return <div> latitude: {this.state.lat}</div>;
            return <SeasonDisplay lat={this.state.lat}/>
        }
        return <Spinner message = "Please allow the location"/>;
    }
    //React says we have to define render!! Required**
    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector ('#root')
)