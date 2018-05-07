import React,{Component}from 'react';
import './index.css';
import axios from "axios";
import ReactSwipe from 'react-swipe';

class List extends Component{
	constructor(){
		super();
		this.state= {
			bglist:[],
			goodlist:[]
		}
	}

	componentDidMount(){
		axios.get("/Service/callback.mi/PageSubArea/MarketFirstPageNew.api?t=20185516332828328").then(res=>{
			//console.log(res.data);
			//console.log(res.data.scrollImg);
			this.setState({
				bglist:res.data.scrollImg
			})
		})
		axios.get("/Service/callback.mi/ECommerce/RecommendProducts.api?t=2018551734573716&goodsIds=&pageIndex=1").then(res=>{
			console.log(res.data);
			console.log(res.data.goodsList);
			this.setState({
				goodlist:res.data.goodsList
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
				<p className="xq">你可能感兴趣的</p>
				<ul className="goodlist">
					{
						 this.state.goodlist.map((item,index)=>
							 <li key={index}>
							 		<img src={item.image}/>
									<p className="p1">{item.name}</p>
							 </li>
						 )
					}
				</ul>
			</div>
			);
	}
}

export default List;
