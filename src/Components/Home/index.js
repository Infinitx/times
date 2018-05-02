import React,{Component}from 'react';
import './index.css';
import {NavLink} from 'react-router-dom';
import axios from "axios";
class Home extends Component{

	componentDidMount(){
		axios.get('/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=20185217173147942').then(res=>{
			console.log(res.data)
		})
	}

	render(){
		return(
			<div>
				正在热映
			</div>
			);
	}
}

export default Home;