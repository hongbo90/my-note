//导入初始化style
import './init.scss';

import ReactDOM from 'react-dom';
import React from 'react';
import Home from './Components/Home/Home';
import Search from './Components/Search/Search';
import NavBar from './Components/NavBar/NavBar';
import EditPage from './Components/EditPage/EditPage';
import ArticleDetail from './Components/ArticleDetail/ArticleDetail';
import ArticleEdit from './Components/ArticleEdit/ArticleEdit';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';



var node = document.createElement('div');
ReactDOM.render(
	<Router>
		<div>
			<Route exact path="/" component={Home} />
			<Route path="/search" component={Search} />
			<Route path="/editpage" component={EditPage} />
			<Route path="/article/:id" component={ArticleDetail} />
			<Route path="/add" component={ArticleEdit} />	
		</div>
	</Router>,
	node
);
document.body.append(node)
