import React, { Component } from 'react'
import Nav from './components/Nav'
import Header from './components/Header'
import Main from './components/MainSection'
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