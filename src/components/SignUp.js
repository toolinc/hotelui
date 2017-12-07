import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import serializeForm from 'form-serialize';
import Button from "material-ui/Button";

class SignUp extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
        const values = serializeForm(e.target, {hash: true})

    }

    render() {
        return (
            <div id='container'>
                <img type='image/svg' className='ninja animated rubberBand' src='./../assets/hotel3.svg'/>
                <p>Welcome to</p>
                <h1>HOTEL<span className='black'>.FINDER</span></h1>
                <p id='tagline'>Sign Up</p>
                <div className="user-form">
                    {/*<Link className='close-create-contact' to='/'>Close</Link>*/}
                    <form onSubmit={this.handleSubmit} className='create-contact-form'>
                        <span className='create-contact-avatar-input'></span>
                        <div className='create-contact-details'>
                            <input type='text' name='username' placeholder='Username'/>
                            <input type='password' name='password' placeholder='Password'/>
                            <button>Sing Up</button>
                        </div>
                    </form>
                </div>
                <a className='link tiny-link' href='/'>Continue without signing in</a>
                <div id='footer'>
                    Made by Jovani Rico
                </div>
            </div>
        );
    }
}

export default SignUp;