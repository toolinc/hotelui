import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';

const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
        cursor: 'pointer',
    }),
});

function PaperSheet(props) {
    const { classes, hotel } = props;
    console.log("paper id "+hotel.hotelId)

    return (
        <div>
            <Paper className={classes.root} elevation={4}>
                <Typography type="headline" component="h3">
                    {hotel.name}
                </Typography>
                <Typography type="body1" component="p">
                    {hotel.addr}
                </Typography>
                <Typography type="body1" component="p">
                    {hotel.city}
                </Typography>

                <BottomNavigation
                    showLabels
                    className={classes.root}

                >
                    <BottomNavigationButton onClick={function(event) {window.location = '/reviews?id=' + hotel.hotelId}} label="Favorites" icon={<FavoriteIcon />} />
                    <BottomNavigationButton onClick={function(event) {window.location = '/attractions?id=' + hotel.hotelId}} label="Nearby" icon={<LocationOnIcon />} />
                </BottomNavigation>

            </Paper>
        </div>
    );
}

PaperSheet.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);