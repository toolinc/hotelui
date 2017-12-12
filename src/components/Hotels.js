import React, {Component} from 'react'
import {fetchHotels} from '../actions/actions'
import {connect} from 'react-redux';
import escapeRegExp from 'escape-string-regexp'
import TextField from 'material-ui/TextField';
import MyFancyComponent from './MyMapComponent'
import HotelCard from './HotelCard'

class Hotels extends Component {

    componentDidMount() {
        let city = this.props.location.search;
        city = city.toLowerCase().split('=')[1];
        console.log("Hotel " + city);
        this.props.fetchHotels(city);

    };


    root: {
        paddingTop: 16,
        paddingBottom: 16,
        // marginTop: theme.spacing.unit * 3,
    }


    state = {
        query: ''
    }

    updateQuery = (query) => {
        console.log("updateQuery " + query);
        this.setState({query: query.trim()})
    }

    clearQuery = () => {
        this.setState({query: ''})
    }

    onMarkerClick(){
        console.log("Click Marker")
    }




    render() {
        const {hotels} = this.props;
        const {query} = this.state
        const hotelArray = hotels[0];

        let showingHotels
        if (query) {
            const match = new RegExp(escapeRegExp(query), 'i')
            showingHotels = hotelArray.filter((hotelArray) => match.test(hotelArray.name))
        } else {
            showingHotels = hotelArray
        }
        return (
            <div>
                <div className='list-contacts-top'>
                    <TextField
                        className='search-contacts'
                        type='text'
                        placeholder='Search Hotel'
                        value={query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                        id="Search"
                        label="Search Hotel"
                        type="text"
                        margin="normal"
                    />
                </div>
                <HotelCard showingHotels={showingHotels}/>

                <MyFancyComponent onMarkerClick={this.onMarkerClick} hotels={showingHotels}/>

            </div>

        )
    }
}

function mapStateToProps({hotels}) {
    return {
        hotels
    }
}

export default connect(mapStateToProps, {
    fetchHotels,
})(Hotels)

