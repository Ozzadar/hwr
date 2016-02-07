import React from 'react'
import {Route, IndexRoute} from 'react-router'

import Detail from './pages/Detail'
import List from './pages/List'
import App from './pages/App'

const routes = (
	<Route path="/" component={App} >
		<IndexRoute component={List} />
		<Route path="github/:account/:repo" component={Detail} />
	</Route>
)

export default routes