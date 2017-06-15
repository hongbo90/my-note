import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styles from './Setup.scss';

class Setup extends Component{
	render(){
		return (
			<div>
				<nav className={styles.setupNav}>
					<Link to="/">主页</Link>
				</nav>
				<article>
					<div className={styles.setupLine}>
						<Link to="/resetpwd">修改密码</Link>
					</div>
				</article>
			</div>
		);
	}
}

export default Setup;