import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch
} from 'react-router-dom'
import React from 'react'
import Home from '../Components/Home'
import Film from '../Components/Film'
import List from '../Components/List'
import App from '../Components/App'
import Detail from '../Components/Detail'
const router=(
	<Router>
		<App>
			<Switch>
				<Route path="/home" component={Home}/>
				<Route path="/film" component={Film}/>	
				<Route path="/detail" component={Detail}/>	
				<Route path="/list" component={List}/>
				<Redirect from="/" to="/home"/>
			</Switch>
		</App>
	</Router>
	)
export default router;