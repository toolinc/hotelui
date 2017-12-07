import React, {Component} from 'react';
import './App.css';
import Button from "material-ui/Button";
import Attractions from './Attractions';
import Reviews from './Reviews';
import Hotels from './Hotels';
import NavBar from './NavBar';

class Home extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <div className="App">
                    <div id='container'>
                        <img type='image/svg' className='ninja animated rubberBand' src='./../assets/hotel3.svg'/>
                        <p>Welcome to</p>
                        <h1>HOTEL<span className='black'>.FINDER</span></h1>
                        <p id='tagline'>Find Hotels Near You</p>
                    </div>
                    <div>
                        <Hotels/>
                    </div>
                    <br></br>
                    <Button raised color="primary">
                        Hello World
                    </Button>
                </div>
            </div>
        );
    }
}

export default Home;