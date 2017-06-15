import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styles from './Forget.scss';


class Forget extends Component{
	render(){
		return (
			<div>
				<div className={styles.loginLine}>
					<h1 className={styles.loginTitle}>找回密码</h1>
				</div>
				<div className={styles.loginLine}>
					<input className={styles.loginInput} type="text" placeholder="请输入注册邮箱" />
				</div>
				<div className={styles.loginLine}>
					<button className={styles.loginBtn}>发送验证邮件</button>
				</div>
				<div className={styles.loginLine}>
					<p><Link className={styles.loginLink} to="/login">返回登录页面</Link></p>
				</div>
			</div>
		);
	}
}

export default Forget;