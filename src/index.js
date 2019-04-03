import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './components/seasonDisplay';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: null
        };
        window.navigator.geolocation.getCurrentPosition(
            (position) =>{
                this.setState({ lat: position.coords.latitude});
            },
            (err) => console.log(err)
        );
    }


    render() {
        return (
            <div>
                
            <SeasonDisplay />
            <h1>Latitude: {this.state.lat}</h1>
            </div>
        ); 
    }  
}

ReactDOM.render(<App />, document.getElementById('root'));