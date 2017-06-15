import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import styles from './Register.scss';


class Register extends Component{
	render(){
		return (
			<div>
				<div className={styles.loginLine}>
					<h1 className={styles.loginTitle}>注册</h1>
				</div>
				<div className={styles.loginLine}>
					<input className={styles.loginInput} type="text" placeholder="请输入邮箱" />
				</div>
				<div className={styles.loginLine}>
					<input className={styles.loginInput} type="password" placeholder="请输入密码" />
				</div>
				<div className={styles.loginLine}>
					<button className={styles.loginBtn}>注册</button>
				</div>
				<div className={styles.loginLine}>
					<p><span>已有账号？</span><Link className={styles.loginLink} to="/login">登录</Link></p>
				</div>
			</div>
		);
	}
}

export default Register;