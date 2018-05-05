import React,{Component}from 'react';
import './index.css';
import axios from "axios";
import ReactSwipe from 'react-swipe';

class List extends Component{
	constructor(){
		super();
		this.state= {
			bglist:[]
		}
	}

	componentDidMount(){
		axios.get("/Service/callback.mi/PageSubArea/MarketFirstPageNew.api?t=20185516332828328").then(res=>{
			console.log(res.data);
			console.log(res.data.scrollImg);
			this.setState({
				bglist:res.data.scrollImg
			})
		})
	}
	render(){
		return(
			<div>
				<div className="shopbg">
					<ReactSwipe className="bgimg" swipeOptions={{auto:3000}}
						key={this.state.bglist.length}>
									 {
										this.state.bglist.map((item,index)=>
											<li key={index}><img src={item.image}/></li>
										)
									 }
					</ReactSwipe>
				</div>
				<ul>

				</ul>
			</div>
			);
	}
}

export default List;
