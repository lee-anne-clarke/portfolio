import React, { Component } from 'react'
import Nav from './js/Nav'
import Header from './js/Header'
import Main from './js/MainSection'
import './normalize.min.css'
import './styles.css'


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