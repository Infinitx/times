import React,{Component}from 'react';
import './index.css';

class Nowplaying extends Component{
	constructor(){
		super();
		this.state={
			datalist:[]
		}
	}
	render(){
		return(
			<div>
				Nowplaying
			</div>
			);
	}
}

export default Nowplaying;
