import React, {Component} from 'react';
import './App.css';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';


const styles = {
    avatar: {
        margin: 10,
    },
    orangeAvatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: '#f08080',
    },
    row: {
        display: 'flex',
        justifyContent: 'center',
    },
};

class Home extends Component {
    render() {
        return <div>
            <div className="App">
                <div id='container'>
                    <img type='image/svg' className='ninja animated rubberBand' src='./../assets/hotel3.svg'/>
                    <p>Welcome to</p>
                    <h1>HOTEL<span className='black'>.FINDER</span></h1>
                    <p id='tagline'>Find Hotels Near You</p>
                </div>
                <div>
                    <br></br>
                    <p id='tagline'>Select a City</p>
                    <br></br>
                    <span>
                        <Chip
                            avatar={<Avatar className={styles.orangeAvatar}>SF</Avatar>}
                            label="San Francisco"
                            style={{'display': 'inline-flex', 'marginLeft': '10px'}}
                            onClick={function() {window.location = '/hotels?id=' + "San Francisco"}}
                        />
                        </span>
                    <span>
                        <Chip
                            avatar={<Avatar className={styles.orangeAvatar}>SS</Avatar>}
                            label="South San Francisco"
                            style={{'display': 'inline-flex', 'marginLeft': '10px'}}
                            onClick={function() {window.location = '/hotels?id=' + "South San Francisco"}}
                        />
                        </span>
                    <span>
                        <Chip
                            avatar={<Avatar className={styles.orangeAvatar}>B</Avatar>}
                            label="Burlingame"
                            style={{'display': 'inline-flex', 'marginLeft': '10px'}}
                            onClick={function() {window.location = '/hotels?id=' + "Burlingame"}}
                        />
                        </span>
                </div>
                <br></br>
            </div>
        </div>;
    }
}

export default Home;