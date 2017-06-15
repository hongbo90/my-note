import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styles from './Login.scss';


class Login extends Component{
	render(){
		return (
			<div>
				<div className={styles.loginLine}>
					<h1 className={styles.loginTitle}>请登录</h1>
				</div>
				<div className={styles.loginLine}>
					<input className={styles.loginInput} type="text" placeholder="请输入邮箱" />
				</div>
				<div className={styles.loginLine}>
					<input className={styles.loginInput} type="password" placeholder="请输入密码" />
				</div>
				<div className={styles.loginLine}>
					<button className={styles.loginBtn}><Link to="/">登录</Link></button>
				</div>
				<div className={styles.loginLine}>
					<p><Link className={styles.loginLink} to="/forget">忘记密码？</Link><Link className={styles.loginLink} to="/register">注册账号</Link></p>
				</div>
			</div>
		);
	}
}

export default Login;