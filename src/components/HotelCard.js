import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, {CardHeader, CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';
import StarRatings from 'react-star-ratings';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorderIcon from 'material-ui-icons/StarBorder';


const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        // overflow: 'hidden',
        // background: theme.palette.background.paper,
        background: '#008080',
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
        // width: 500,
        height: 430,
    },
    title: {
        color: theme.palette.primary[200],
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    card: {
        maxWidth: 345,
        margin: 10,
    },
    media: {
        height: 200,
    },
    btn: {
        width: 100,
    },
});

function HotelCard(props) {
    const { classes, showingHotels } = props;
    return (
        <div className={classes.root}>
            {showingHotels && showingHotels.length > 0 && showingHotels.map((hotel) => (
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={hotel.image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography type="headline" component="h2">
                        {hotel.name}
                    </Typography>
                    <Typography component="p">
                        <StarRatings
                            rating={new Number(hotel.rating)}
                            isSelectable={false}
                            isAggregateRating={true}
                            starWidthAndHeight={'40px'}
                            starSpacing={'10px'}
                        />
                    </Typography>
                    <Typography component="p">
                        {hotel.addr}
                    </Typography>
                    <Typography component="p">
                        {hotel.city}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button color="primary" onClick={function(event) {window.location = '/reviews?id=' + hotel.hotelId}}>
                        Reviews
                    </Button>
                    <BottomNavigationButton onClick={function(event) {alert("Saved!")}} label="Favorites" icon={<FavoriteIcon />} />
                    <BottomNavigationButton className={classes.btn} onClick={function(event) {window.location = '/attractions?id=' + hotel.hotelId}} label="Nearby" icon={<LocationOnIcon />} />
                    <Button dense color="primary">
                        <td onClick={()=> window.open(hotel.link, "_blank")}>Expedia</td>
                    </Button>
                </CardActions>
            </Card>
                ))}

        </div>
    );
}

HotelCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HotelCard);