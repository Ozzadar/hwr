import React from 'react'
import {Link} from 'react-router'

export default class List extends React.Component {
	render() {
		return (
			<div>
				<p> Please choose a repository from the list below.</p>
				<ul>
					<li><Link to="/github/ozzadar/klouds"> github.com/ozzadar/klouds </Link></li>
					<li><Link to="/github/superordinate/kDaemon"> github.com/superordinate/kDaemon </Link></li>
					<li><Link to="/github/facebook/react"> github.com/facebook/react </Link></li>
				</ul>
			</div>
		)
	}
}