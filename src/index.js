import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './components/seasonDisplay';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: null,
            errorMessage: ''
        };

        window.navigator.geolocation.getCurrentPosition(
            (position) =>{
                this.setState({ lat: position.coords.latitude});
            },
            (err) => {
                this.setState({ errorMessage: err.message});
            }
        );
    }


    render() {
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage} </div>;
        } else if(!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>;
        } else {
            return <h1>Loading...</h1>;
        }
    }  
}

ReactDOM.render(<App />, document.getElementById('root'));