import React from 'react'
import {Link} from 'react-router'

export default class App extends React.Component {
	render() {
		return (
			<div>
				<h1> Unofficial github browser v0.1 </h1> <Link to="/"> Go Home </Link>
				{this.props.children}
			</div>
		)
	}
}