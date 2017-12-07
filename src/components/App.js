import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
import '../index.css';
import registerServiceWorker from '../registerServiceWorker';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import React, {Component} from 'react';


class App extends Component {
    render() {
        return (

            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/signup" component={SignUp}/>
                </div>
            </BrowserRouter>

        )
    }
}

export default App;