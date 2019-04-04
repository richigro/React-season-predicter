import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './components/seasonDisplay';

class App extends React.Component {
    state = {
        lat: null,
        errorMessage: ''
    }

   
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude}),
            (err) => this.setState({ errorMessage: err.message})
        );
    }

    render() {
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage} </div>;
        } else if(!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>;
        } else {
            return <h1><i class="big notched circle loading icon"></i></h1>;
        }
    }  
}

ReactDOM.render(<App />, document.getElementById('root'));