import React, {Component} from 'react';
import styles from './Navbar.scss';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';

class Navbar extends Component{

	render(){
		return (

				<div className={styles.navbar}>
					<ul>
						<li><NavLink activeClassName={styles.active} exact={true} to="/">首页</NavLink></li>
						<li><NavLink activeClassName={styles.active} to="/search">搜索</NavLink></li>
						<li><a href="javascript:void(0)">设置</a></li>
					</ul>
				</div>

		);
	}
}

export default Navbar;