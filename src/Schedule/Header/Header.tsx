import * as React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { getCookie } from 'src/Login/actions';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { DispatchToProps } from './interfaces';
import { SIGN_OUT } from '../constants';
import { withRouter, RouteComponentProps } from 'react-router';

import './header.css';
import { LOGIN_URI } from 'src/constants';
const styles = {
	root: {
		flexGrow: 1,
	},
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
};

class Header extends React.Component<RouteComponentProps & DispatchToProps &{classes: {root:string,menuButton:string,grow:string}}> {
	state = {
		auth: true,
		anchorEl: null,
	};

	handleChange = () => {
		this.setState({ auth: getCookie() != '' });
	};

	handleMenu = (event: any) => {
		this.setState({ anchorEl: event.currentTarget });
	};

	signOut = () => {
		this.props.signOut();
		this.props.history.push(LOGIN_URI);
	};

	render() {
		debugger;
		const { classes } = this.props;
		const { auth, anchorEl } = this.state;
		const open = Boolean(anchorEl);
		debugger;
		return (
			<div className='header'>
				<div className={classes.root}>
					<AppBar position='static' >
						<Toolbar>
							<IconButton className={classes.menuButton} color='inherit' aria-label='Menu'>
								<MenuIcon />
							</IconButton>
							<Typography variant='h6' color='inherit' className={classes.grow}>
								KINO AFISHA UA
						</Typography>
							{auth && (
								<div>
									<IconButton
										aria-owns={open ? 'menu-appbar' : undefined}
										aria-haspopup='true'
										onClick={this.handleMenu}
										color='inherit'
									>
										<AccountCircle />
									</IconButton>
									<Menu
										id='menu-appbar'
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
									>
										<MenuItem onClick={this.signOut}>Log out</MenuItem>
									</Menu>
								</div>
							)}
						</Toolbar>
					</AppBar>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch: any): DispatchToProps => ({
	signOut: () => dispatch({ type: SIGN_OUT }),
});


export default withRouter((connect(null, mapDispatchToProps))(withStyles(styles)(Header)));

