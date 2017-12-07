import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import serializeForm from 'form-serialize';

class Login extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
        const values = serializeForm(e.target, {hash: true})
        console.log(values);

    }
    render() {
        return (
            <div id='container'>
                <img type='image/svg' className='ninja animated rubberBand' src='./../assets/hotel3.svg'/>
                <p>Welcome to</p>
                <h1>HOTEL<span className='black'>.FINDER</span></h1>
                <p id='tagline'>Login</p>
                <div className="user-form">
                    <form onSubmit={this.handleSubmit} className='create-contact-form'>
                        <span className='create-contact-avatar-input'></span>
                        <div className='create-contact-details'>
                            <input type='text' name='username' placeholder='Username'/>
                            <input type='password' name='password' placeholder='Password'/>
                            <button>Login</button>
                        </div>
                    </form>
                </div>
                <Link className='close-create-contact' to='/'>Close</Link>
                <a className='link tiny-link' href='/'>Continue without signing in</a>
                <div id='footer'>
                    Made by Jovani Rico
                </div>
            </div>
        );
    }
}

export default Login;


