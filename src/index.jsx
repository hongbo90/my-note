import ReactDOM from 'react-dom';
import React from 'react';
import Home from './Components/Home';
import Search from './Components/Search/Search';
import NavBar from './Components/NavBar/NavBar';
import {BrowserRouter as Router, Route} from 'react-router-dom';

var node = document.createElement('div');
ReactDOM.render(
	<Router>
		<div>
			<NavBar />
			<Route exact path="/" component={Home} />
			<Route path="/search" component={Search} />
		</div>
	</Router>,
	node
);
document.body.append(node)

console.log("this is my-note a");