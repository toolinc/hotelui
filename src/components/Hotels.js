import React, { Component } from 'react'
import {fetchHotels} from '../actions'
import { connect } from 'react-redux';

class Hotels extends Component {

    componentDidMount() {
        this.props.fetchHotels();
    };

    render(){
        const { hotels} = this.props;

        return(
            <div>
                {hotels && hotels.length > 0 && hotels.map((hotel) => (
                    <div key={hotel.id}>
                        {hotel.name}
                    </div>
                ))}
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
    fetchHotels
})(Hotels)

