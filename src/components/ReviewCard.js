import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classnames from 'classnames';
import Card, {CardHeader, CardMedia, CardContent, CardActions} from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import MoreVertIcon from 'material-ui-icons/MoreVert';

const styles = theme => ({
    card: {
        maxWidth: 400,
    },
    media: {
        height: 194,
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    flexGrow: {
        flex: '1 1 auto',
    },
});

class ReviewCard extends React.Component {
    state = {expanded: false};

    handleExpandClick = () => {
        this.setState({expanded: !this.state.expanded});
    };

    getUser = () =>{
        if (document.cookie != "") {
            var c = document.cookie.split(';');
            c[1] = c[1].substring(1);
            return c[1].substring(5, c[1].length);
        }
        return '';
    }

    render() {
        const {classes, review} = this.props;
        {console.log(this.getUser())}
        return (
            <div>
                {review && (
                    <Card className={classes.card}>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="Recipe" className={classes.avatar}>
                                    {review.user.charAt(0).toUpperCase()}
                                </Avatar>
                            }
                            title={review.user.toUpperCase()}
                            subheader={review.date.toString()}
                        />
                        <CardContent>
                            <Typography component="p">
                                {review.title}
                            </Typography>
                            <Typography paragraph type="body2">
                                4 Pleople like this
                            </Typography>
                        </CardContent>
                        <CardActions disableActionSpacing>
                            {(review.user == this.getUser() && (

                                <div>
                                    <IconButton aria-label="Add to favorites">
                                        <FavoriteIcon/>
                                    </IconButton>
                                    <IconButton aria-label="Share">
                                        <ShareIcon/>
                                    </IconButton>
                                </div>
                            ))}

                            <div className={classes.flexGrow}/>
                            <IconButton
                                className={classnames(classes.expand, {
                                    [classes.expandOpen]: this.state.expanded,
                                })}
                                onClick={this.handleExpandClick}
                                aria-expanded={this.state.expanded}
                                aria-label="Show more"
                            >
                                <ExpandMoreIcon/>
                            </IconButton>
                        </CardActions>
                        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph type="body2">
                                    Review:
                                </Typography>
                                <Typography paragraph>
                                    {review.reviewText}
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                )}
            </div>
        );
    }
}

ReviewCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReviewCard);