import React from 'react'
import ajax from 'superagent'

export default class Detail extends React.Component {
	constructor(props){
		super(props)

		this.state = { 
			mode: 'commits',
			commits: [],
			forks: [],
			pulls: []
		}
	}
	componentWillMount() {
		this.fetchFeed('commits')
		this.fetchFeed('pulls')
		this.fetchFeed('forks')
	}
	fetchFeed(type) {
		const baseURL = 'https://api.github.com/repos/'
		ajax.get(`${baseURL}${this.props.params.account}/${this.props.params.repo}/${type}`)
			.end((error, response) => {
				if (!error && response) {
					this.setState({[type]: response.body})
				} else {
					console.log(`there was an error fetching ${type} from github`, error)
				}
			}
		)
	}
	render() {
		let content;

		if (this.state.mode === 'commits') {
			content = this.renderCommits()
		} else if (this.state.mode === 'forks') {
			content = this.renderForks()
		} else if (this.state.mode === 'pulls') {
			content = this.renderPulls()
		}

		return (
			<div>
				<button onClick={this.selectMode.bind(this, 'commits')}> Show Commits </button>
				<button onClick={this.selectMode.bind(this, 'forks')}> Show Forks </button>
				<button onClick={this.selectMode.bind(this, 'pulls')}> Show Pulls </button> <br/><br/>
				{content}
			</div>
		)
		
	}

	selectMode(mode) {
		this.setState({mode})
	}

	renderCommits() {
		return (<div>
			{this.state.commits.map((commit, index) => {
				const author = commit.author ? commit.author.login : 'Anonymous'

				return(
					<p key={index}>
						<strong> {author}</strong><br/>
						<a href={commit.html_url}>{commit.commit.message}</a>
					</p>
				)
				})}
			
				
			</div>	
		)
	}

	renderForks() {
		return (<div>
			{this.state.forks.map((fork, index) => {
				const owner = fork.owner ? fork.owner.login : 'Anonymous'

				return(
					<p key={index}>
						<strong> {owner}</strong>: forked to <br/>
						<a href={fork.html_url}>{fork.html_url}</a> at fork.created_at
					</p>
				)
				})}
			
				
			</div>	
		)
	}

	renderPulls() {
		return (<div>
			{this.state.pulls.map((pull, index) => {
				const user = pull.user ? pull.user.login : 'Anonymous'

				return(
					<p key={index}>
						<strong> {user}</strong><br/>
						<a href={pull.html_url}>{pull.body}</a>
					</p>
				)
				})}
			
				
			</div>	
		)
	}
}