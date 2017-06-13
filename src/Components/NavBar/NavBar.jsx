import React, {Component} from 'react';
import styles from './Navbar.scss';
import { NavLink } from 'react-router-dom';
// import './home.svg';
import {HomeIcon, SetupIcon, SearchIcon } from '../SvgIcons/SvgIcons';

class Navbar extends Component{

	render(){
		return (

				<div className={styles.navbar}>
					<ul>
						<li><NavLink activeClassName={styles.active} exact={true} to="/"><HomeIcon /></NavLink></li>
						<li><NavLink activeClassName={styles.active} to="/search"><SearchIcon /></NavLink></li>
						<li><a href="javascript:void(0)"><SetupIcon /></a></li>
					</ul>
				</div>

		);
	}
}

export default Navbar;