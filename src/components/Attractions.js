import React, {Component} from 'react'
import {fetchAttractions} from '../actions/actions'
import {connect} from 'react-redux';
import TextField from 'material-ui/TextField';
import escapeRegExp from 'escape-string-regexp'


class Attractions extends Component {

    componentDidMount() {
        let hotelId = this.props.location.search;
        hotelId = hotelId.toLowerCase().split('=')[1];
        console.log("attractions hotelId " + hotelId);
        this.props.fetchAttractions(hotelId);

    };

    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState({query: query.trim()})
    }


    render() {
        const {attractions} = this.props;
        const {query} = this.state

        console.log("attractions "+attractions)

        let attractionsArray = attractions[0];

        let showingAttractions
        if (query) {
            const match = new RegExp(escapeRegExp(query), 'i')
            showingAttractions = attractionsArray.filter((attractionArray) => match.test(attractionArray.name))
        } else {
            showingAttractions = attractionsArray
        }

        return (
            <div>
                <div className='list-contacts-top'>
                    <TextField
                        className='search-contacts'
                        type='text'
                        placeholder='Search Name'
                        value={query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                        id="Search"
                        label="Search Attraction"
                        type="text"
                        margin="normal"
                    />
                </div>
                {showingAttractions && showingAttractions.length > 0 && showingAttractions.map((attraction) => (
                    <div key={attraction.id}>
                        <p>{attraction.name}</p>
                        <p>{attraction.rating}</p>
                        <p>{attraction.formatted_address}</p>
                    </div>
                ))}
            </div>
        )
    }
}

function mapStateToProps({attractions}) {
    return {
        attractions
    }
}

export default connect(mapStateToProps, {
    fetchAttractions,
})(Attractions)