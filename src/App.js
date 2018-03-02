import React, { Component } from 'react'
import Nav from './js/Nav'
import Header from './js/Header'
import Main from './js/Main'
import './normalize.min.css'
import './App.css'


class App extends Component {
	render() {
		return (
			<div>
				<Nav />
				<Header />
				<Main />
			</div>
		);
	}
}


export default App