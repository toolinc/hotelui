import React, {Component} from 'react'
import {fetchReviews, orderByDate, orderByRating} from '../actions/actions'
import {connect} from 'react-redux';
import TextField from 'material-ui/TextField';
import escapeRegExp from 'escape-string-regexp'
import { FormControlLabel, FormGroup } from 'material-ui/Form';
import Switch from 'material-ui/Switch';


class Reviews extends Component {

    componentDidMount() {
        let hotelId = this.props.location.search;
        hotelId = hotelId.toLowerCase().split('=')[1];
        this.props.fetchReviews(hotelId);

    };

    state = {
        query: '',
        rating: false,
        date: false,
        currentPage: 1,
        todosPerPage: 3
    }

    handleClick(event) {
        console.log("click Page");
        console.log(event);
        console.log(this.state);
        this.setState({
            currentPage: Number(event)
        });
    }

    updateQuery = (query) => {
        this.setState({query: query.trim()})
    }

    handleToggleRating = (event, checked) => {
        this.setState({date: !checked, rating: checked });
        this.props.orderByRating();
    }

    handleToggleDate = (event, checked) => {
        this.setState({date: checked, rating: !checked });
        this.props.orderByDate();
    }

    render() {
        const {reviews} = this.props;
        const {query,currentPage, todosPerPage} = this.state
        let reviewsArray = reviews[0];
        // Logic for displaying page numbers
        const pageNumbers = [];
        let renderPageNumbers = [];


        let showingReviews
        if (query) {
            const match = new RegExp(escapeRegExp(query), 'i')
            showingReviews = reviewsArray.filter((reviewArray) => match.test(reviewArray.title))
        } else if(reviewsArray && reviewsArray.length > 0) {
                const indexOfLastTodo = currentPage * todosPerPage;
                const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
                showingReviews = reviewsArray.slice(indexOfFirstTodo, indexOfLastTodo);

                for (let i = 1; i <= Math.ceil(reviewsArray.length / todosPerPage); i++) {
                    pageNumbers.push(i);
                }
                // noinspection JSAnnotator
                renderPageNumbers = pageNumbers.map(number => {
                    return (
                        <li
                            key={number}
                            id={number}
                            onClick={(event) => this.handleClick(event.target.id)}
                        >
                            {number}
                        </li>
                    );
                });
        }

        return (
            <div>
                <div className='list-contacts-top'>
                    <TextField
                        className='search-contacts'
                        type='text'
                        placeholder='Search Title'
                        value={query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                        id="Search"
                        label="Search Review"
                        type="text"
                        margin="normal"
                    />
                </div>
                <div>
                    <p>Sort by</p>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={this.state.date}
                                    onChange={(event, checked) => this.handleToggleDate(event,checked)}
                                />
                            }
                            label="Date"
                        />
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={this.state.rating}
                                    onChange={(event, checked) => this.handleToggleRating(event,checked)}
                                />
                            }
                            label="Rating"
                        />
                    </FormGroup>
                </div>

                {showingReviews && showingReviews.length > 0 && showingReviews.map((review) => (
                    <div key={review.reviewId}>
                        <p>{review.title}</p>
                        <p>{review.rating}</p>
                        <p>{review.date.toString()}</p>
                    </div>
                ))}

                {renderPageNumbers && renderPageNumbers.length>0 && (
                    <ul id="page-numbers">
                        {renderPageNumbers}
                    </ul>
                )}

            </div>
        )
    }
}

function mapStateToProps({reviews}) {
    return {
        reviews
    }
}

export default connect(mapStateToProps, {
    fetchReviews,
    orderByDate,
    orderByRating
})(Reviews)