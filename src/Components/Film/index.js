import React,{Component}from 'react';
import {NavLink} from "react-router-dom";
import './index.css';
import axios from "axios";
import store from "../../Redux/Store";
import ReactSwipe from 'react-swipe';

class Film extends Component{
	constructor(){
		super();
		this.state= {
			cinemalist:{},
			featurelist:{},
			movieslist :[],
			halllist:[],
			halllist1:[],
			today:true,
			mom:false
		}
	}

	componentDidMount(){
		var urlstr=window.location.pathname.substring(6);
		axios.get("/Service/callback-ticket.mi/cinema/showtime.api?cinemaId="+urlstr+"&t=20185414402873228").then(res=>{
			this.setState({
				cinemalist:res.data.data.cinema,
				featurelist:res.data.data.cinema.feature,
				movieslist :res.data.data.movies
			})
		})
		axios.get("/Service/callback.mi/showtime/ShowTimesByCinemaMovieDate.api?cinemaId="+urlstr+"&movieId=253823&date=2018-05-07&t=20185510213571046").then(res=>{
			this.setState({
				halllist:res.data.s
			})
		})
		axios.get("/Service/callback.mi/showtime/ShowTimesByCinemaMovieDate.api?cinemaId=9131&movieId=253823&date=2018-05-08&t=201855143413893").then(res=>{
			//console.log(res.data.s);
			this.setState({
				halllist1:res.data.s
			})

			function actionCreator(show){
				return {
					type:"shownav",
					payload:show
				}
			}
			store.dispatch(actionCreator(false));

		})

	}

	render(){
		return(
			<div>
				<div className="filmback">
					<NavLink to="/list"><i className="iconfont icon-back" onClick={this.back.bind(this)}></i></NavLink>
					<i className="iconfont icon-form"></i>
				</div>
				<div className="filmtop">
					<div className="filmtitle">
						<h2>{this.state.cinemalist.name}</h2>
						<p className="filmicon">
							{this.state.featurelist.has3D?<span>3D</span>:null}
							{this.state.featurelist.hasFeature4D?<span>4D</span>:null}
							{this.state.featurelist.hasFeature4K?<span>4K</span>:null}
							{this.state.featurelist.hasFeatureDolby?<span>杜比</span>:null}
							{this.state.featurelist.hasFeatureHuge?<span>巨幕</span>:null}
							{this.state.featurelist.hasIMAX?<span>IMAX</span>:null}
							{this.state.featurelist.hasLoveseat?<span>情侣座</span>:null}
							{this.state.featurelist.hasVIP?<span>VIP</span>:null}
							{this.state.featurelist.hasPark?<span>P</span>:null}
							{this.state.featurelist.hasWifi?<span>WIFI</span>:null}
						</p>
					</div>
					<div className="phonemap">
						<i className="iconfont icon-phone"></i>
						<i className="iconfont icon-map"></i>
					</div>
				</div>
				<div className="filmmovies">
					<ul>
					<ReactSwipe className="carousel" swipeOptions={{continuous: false}}
					 	key={this.state.movieslist.length}>
									 {
										this.state.movieslist.map((item,index)=>
											<li key={index}><img src={item.img}/></li>
										)
									 }
					</ReactSwipe>
					</ul>
				</div>
				<ul className="filmheader">
					<li onClick={this.today.bind(this)}>今天（05月05日）</li>
					<li onClick={this.mom.bind(this)}>明天（05月06日）</li>
				</ul>
				{
					this.state.today?
					<ul className="todayhall">
						{
						 this.state.halllist.map((item,index)=>
							 <li key={index}>
							 <h2>09:30</h2>
								<div className="place">
									<p>{item.versionDesc}/{item.language}</p>
									<p>{item.hall}</p>
								</div>
								<div className="price">
									<b>￥{item.salePrice/100}</b>
									<p>￥{item.cinemaPrice/100}</p>
								</div>
								<div className="car">购票</div>
							 </li>
						 )
						}
					</ul>
					:null
				}
				{
					this.state.mom?
					<ul className="momhall">
						{
						 this.state.halllist1.map((item,index)=>
							 <li key={index}>
							 <h2>{index+10}:30</h2>
								<div className="place">
									<p>{item.versionDesc}/{item.language}</p>
									<p>{item.hall}</p>
								</div>
								<div className="price">
									<b>￥{item.salePrice/100}</b>
									<p>￥{item.cinemaPrice/100}</p>
								</div>
								<div className="car">购票</div>
							 </li>
						 )
						}
					</ul>
					:null
				}

			</div>
			);
	}
	today(){
		this.setState({
			today:true,
			mom:false
		})
	}
	mom(){
		this.setState({
			today:false,
			mom:true
		})
	}
	back(){
		function actionCreator(show){
			return {
				type:"shownav",
				payload:show
			}
		}
		store.dispatch(actionCreator(true));
	}
}

export default Film;
