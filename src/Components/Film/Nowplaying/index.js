import React,{Component}from 'react';
import './index.css';

class Nowplaying extends Component{
	constructor(){
		super();
		this.state={
			datalist:["111","222","333"]
		}
	}
	render(){
		return(
			<div>
				Nowplaying
				<ul>{
				this.state.datalist.map(item=>
					<li key={item} onClick={this.handleClick.bind(this,item)}>{item}</li>
					)
			}
				</ul>
			</div>
			);
	}
	handleClick(id){
		this.props.history.push(`/detail/${id}`);
	}
}

export default Nowplaying;