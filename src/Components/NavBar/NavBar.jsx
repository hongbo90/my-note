import React, {Component} from 'react';
import styles from './Navbar.scss';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class Navbar extends Component{

	render(){
		return (

				<div className={styles.navbar}>
					<ul>
						<li><Link to="/">首页</Link></li>
						<li><Link to="/search">搜索</Link></li>
						<li><a href="javascript:void(0)">设置</a></li>
					</ul>
				</div>

		);
	}
}

export default Navbar;