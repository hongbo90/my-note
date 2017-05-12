import React, { Component } from 'react';

class ArticleEdit extends Component{

	constructor(props){
		super(props);
		this.state = {
			title:'',
			content:''
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
	}

	//点击取消回到首页
	handleCancel(){
		this.props.history.push('/');
	}

	render(){
		return (
			<div>
				<div>
					<input type="text" placeholder="请输入标题" onChange={this.handleTitleChange} />
				</div>
				<div>
					<textarea type="text" placeholder="请输入内容" onChange={this.handleContentChange} />
				</div>
				<div>
					<button onClick={this.handleCancel}>取消</button>
					<button onClick={this.handleSave}>保存</button>
				</div>
			</div>
		)
	}
}

export default ArticleEdit;