import React,{Component}from 'react';
import './index.css';
import {NavLink} from 'react-router-dom';
import Navbar from '../Common/Navbar'
import Footer from '../Common/Footer'

class App extends Component{
	render(){
		return(
			<div>
				
				<Navbar/>
				<Footer/>
				{this.props.children}
			</div>
			);
	}
}

export default App;