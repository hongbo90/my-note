import React,{Component} from 'react';
import Navbar from './Navbar/Navbar';

const apiUrl = "http://localhost:9000/"

class Home extends Component{

	componentWillMount(){
		fetch("http://localhost:9000/posts")
			.then(res=>res.json())
			.then((res)=>{
				res.map((item)=>{
					console.log(item);
				})
			})
	}

	handleClick(){
		fetch(apiUrl + 'posts',{
			method:'post',
			headers:{
				'Content-Type':'application/json'
			},
			body:JSON.stringify({
				title:'testTitle',
				author:'DUSTXM'
			})
		})
		.then(res=>console.log(res))
	}

	render(){
		return (
			<div>
				<button onClick={this.handleClick}>CLick</button>
				<h1>This is Homepage</h1>
			</div>
		)
	}
}

export default Home;