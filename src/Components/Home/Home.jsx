import React,{ Component } from 'react';
import ArticleList from '../ArticleList/ArticleList';
import AddNewButton from '../AddNewButton/AddNewButton';
import NavBar from '../NavBar/NavBar';

const apiUrl = "http://localhost:9000/"

class Home extends Component{

	componentWillMount(){
		// fetch("http://localhost:9000/article")
		// 	.then(res=>res.json())
		// 	.then((res)=>{
		// 		res.map((item)=>{
		// 			console.log(item);
		// 		})
		// 	})
	}

	handleClick(){
		// fetch(apiUrl + 'articles',{
		// 	method:'post',
		// 	headers:{
		// 		'Content-Type':'application/json'
		// 	},
		// 	body:JSON.stringify({
		// 		title:'testTitle',
		// 		author:'DUSTXM'
		// 	})
		// })
		// .then(res=>console.log(res))
	}

	render(){
		return (
			<div>
				<NavBar />
				<ArticleList />
				<AddNewButton />
			</div>
		)
	}
}

export default Home;