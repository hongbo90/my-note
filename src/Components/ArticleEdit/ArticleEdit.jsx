import React, { Component } from 'react';
import styles from './ArticleEdit.scss';

class ArticleEdit extends Component{

	constructor(props){
		super(props);
		this.state = {
			"title": "",
			"content": "",
			"edit_at": "",
			"tag_name": "TAG",
			"tag_img": "../src/icons/tags/tag1.gif",
			"create_at": ""
		}
		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleContentChange = this.handleContentChange.bind(this);
		this.handleSave = this.handleSave.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
	}

	handleTitleChange(e){
		let title = e.target.value;
		this.setState({
			title:title
		});
	}

	handleContentChange(e){
		let content = e.target.value;
		this.setState({
			content:content
		});
	}

	handleSave(){
		const { title, content } = this.state;
		const body = {
			"title":title,
			"content":content,
		    "edit_at": "2017-4-27 16:00:12",
		    "tag_name": "TAG",
		    "tag_img": "../src/icons/tags/tag1.gif"
		}
		fetch("http://localhost:9000/articles/",{
			method:'POST',
			headers:{
				'Content-Type':'application/json'
			},
			body:JSON.stringify(body)
		})
			.then(res=>res.json())
			.then(res=>{
				if(res.id){
					console.log("Add Successful!")
					this.props.history.push('/');
				}

			})
	}

	//点击取消回到首页
	handleCancel(){
		this.props.history.push('/');
	}

	render(){
		return (
			<div>
				<div className={styles.lineContainer}>
					<input className={styles.inputTitle} type="text" placeholder="请输入标题" onChange={this.handleTitleChange} />
				</div>
				<div className={styles.lineContainer}>
					<textarea className={styles.inputContent} type="text" placeholder="请输入内容" onChange={this.handleContentChange} />
				</div>
				<div className={styles.btnContainer}>
					<button className={styles.btnCancel} onClick={this.handleCancel}>取消</button>
					<button className={styles.btnSave} onClick={this.handleSave}>保存</button>
				</div>
			</div>
		)
	}
}

export default ArticleEdit;