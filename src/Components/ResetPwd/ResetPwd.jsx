import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styles from './ResetPwd.scss';


class ResetPwd extends Component{
	render(){
		return (
			<div>
				<div className={styles.loginLine}>
					<h1 className={styles.loginTitle}>重置密码</h1>
				</div>
				<div className={styles.loginLine}>
					<input className={styles.loginInput} type="password" placeholder="请输入新密码" />
				</div>
				<div className={styles.loginLine}>
					<button className={styles.loginBtn}>重置</button>
				</div>
				<div className={styles.loginLine}>
					<p><Link className={styles.loginLink} to="/login">返回登录页面</Link></p>
				</div>
			</div>
		);
	}
}

export default ResetPwd;