import {BrowserRouter, Route} from 'react-router-dom'
import '../index.css';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import React, {Component} from 'react';
import Hotels from './Hotels';
import Reviews from './Reviews';
import NavBar from './NavBar';
import Attractions from "./Attractions";


class App extends Component {
    state={
        city: ''
    }

    getHotelCity(text) {
        console.log("Parent "+text);
        this.setState({city: text});
        console.log(this.state.city);
    }


    render() {
        return (

            <BrowserRouter>
                <div>
                    <NavBar/>
                    <Route exact path="/" component={Home} hotelCity={this.getHotelCity}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/signup" component={SignUp}/>
                    <Route exact path="/hotels" component={Hotels}/>
                    <Route exact path="/reviews" component={Reviews}/>
                    <Route exact path="/attractions" component={Attractions}/>
                </div>
            </BrowserRouter>

        )
    }
}

export default App;