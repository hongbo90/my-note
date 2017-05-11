//导入初始化style
import './init.scss';

import ReactDOM from 'react-dom';
import React from 'react';
import Home from './View/Home/Home';
import Search from './View/Search/Search';
import NavBar from './Components/NavBar/NavBar';
import EditPage from './Components/EditPage/EditPage';
import ArticleDetail from './View/ArticleDetail/ArticleDetail';
import {BrowserRouter as Router, Route} from 'react-router-dom';



var node = document.createElement('div');
ReactDOM.render(
	<Router>
		<div>
			<NavBar />
			<Route exact path="/" component={Home} />
			<Route path="/search" component={Search} />
			<Route path="/editpage" component={EditPage} />
			<Route path="/article/:id" component={ArticleDetail} />
		</div>
	</Router>,
	node
);
document.body.append(node)
