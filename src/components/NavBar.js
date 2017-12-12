import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Menu, {MenuItem} from 'material-ui/Menu';
import {Link} from 'react-router-dom';

const styles = theme => ({
    root: {
        width: '100%',
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },


});

class NavBar extends React.Component {
    state = {
        auth: true,
        anchorEl: null,
    };

    handleChange = (event, checked) => {
        this.setState({auth: checked});
    };

    handleMenu = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleRequestClose = () => {
        this.setState({anchorEl: null});
    };

    getUser = () => {
        if (document.cookie != "") {
            var c = document.cookie.split(';');
            c[1] = c[1].substring(1);
            return c[1].substring(5, c[1].length);
        }
        return '';
    }

    render() {
        const {classes} = this.props;
        const {auth, anchorEl} = this.state;
        const open = Boolean(anchorEl);

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
                            <MenuIcon/>
                        </IconButton>
                        <img type='image/svg' className='ninja animated rubberBand nav-bar-img'
                             src='./../assets/hotel3.svg'/>
                        <Typography type="title" color="inherit" className={classes.flex}>
                            <p>HOTEL<span className='black'>.FINDER</span></p>
                        </Typography>
                        {auth && (
                            <div>
                                <IconButton
                                    aria-owns={open ? 'menu-appbar' : null}
                                    aria-haspopup="true"
                                    onClick={this.handleMenu}
                                    color="contrast"
                                >
                                    <AccountCircle/>
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={open}
                                    onRequestClose={this.handleRequestClose}
                                >
                                    {this.getUser() != '' && (
                                        <MenuItem onClick={this.handleRequestClose}><Link
                                            to="/login">My Hotels</Link></MenuItem>
                                    )}
                                    {this.getUser() == '' && (
                                            <MenuItem onClick={this.handleRequestClose}><Link
                                                to="/login">Login</Link></MenuItem>
                                    )}
                                    {this.getUser() == '' && (<MenuItem onClick={this.handleRequestClose}><Link to="/signup">Sign
                                        Up</Link></MenuItem>)}
                                </Menu>
                            </div>
                        )}
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);