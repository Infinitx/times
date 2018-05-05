import React,{Component}from 'react';
import {NavLink} from "react-router-dom";
import './index.css';
import axios from "axios"

class List extends Component{
	constructor(){
		super();
		this.state = {
			text1:"离我最近",
			text2:"全城",
			list1Created:false,
			list2Created:false,
			list3Created:false,
			jumpCreated:false,
			datalist:[],
			datalist1:[],
			datalist2:[],
			sum:"220"
		};
	}

	componentDidMount(){
		axios.get("api/proxy/ticket/cinema/screening.api?locationId=291&_=1525331748119").then(res=>{
			//console.log(res.data.data);
			this.setState({
				datalist:res.data.data.districts,
				datalist1:res.data.data.districts
			})
		})
		axios.get("api/proxy/ticket/OnlineLocationCinema/OnlineCinemasByCity.api?locationId=291&_=1525347227598").then(res=>{
			this.setState({
				datalist2:res.data,
			})
		})
		window.addEventListener('scroll',this.scrollhand.bind(this))
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.scrollhand.bind(this));
	}

	render(){
		return(
			<div>
				<ul className="top">
					<li onClick={this.list1.bind(this)}>{this.state.text1}<i className="iconfont icon-moreunfold"></i></li>
					<div></div>
					<li onClick={this.list2.bind(this)}>{this.state.text2}<i className="iconfont icon-moreunfold"></i></li>
					<div></div>
					<li onClick={this.list3.bind(this)}>影厅特效<i className="iconfont icon-moreunfold"></i></li>
				</ul>
				<div className="navlist">
				{
					this.state.list1Created?
					<ul className="list1">
						<li ref="near" onClick={this.nearclick.bind(this)}>离我最近</li>
						<li ref="low" onClick={this.lowclick.bind(this)}>价格最低</li>
					</ul>
					:null
				}
				{
					this.state.list2Created?
					<div className="list2">
						<div className="top">
							<span>商圈</span>
							<span>地铁</span>
						</div>
						<div className="bottom">
							<ul className="left">
							<li onClick={this.allclick.bind(this)}>全部</li>
							{
								this.state.datalist.map((item,index)=>
									<li key={index} onClick={this.itemclick.bind(this,index)}>
										{item.name}({item.cinemaCount})
									</li>
								)
							}
							</ul>
							<ul className="right">
								<li><span>全部</span><span>{this.state.sum}</span></li>
								{
									this.state.datalist1.map((item,index)=>
										<li key={index} onClick={this.item1click.bind(this)}>
											<span>{item.name}</span>
											<span>{item.cinemaCount}</span>
										</li>
									)
								}
							</ul>
						</div>
					</div>
					:null
				}
				{
					this.state.list3Created?
					<ul className="list3">
						<li>不限</li>
						<li>3D</li>
						<li>IMAX</li>
						<li>VIP</li>
						<li>4D</li>
						<li>巨幕</li>
						<li>4K</li>
						<li>杜比</li>
						<li>情侣座</li>
					</ul>
					:null
				}
				{
					this.state.list1Created||this.state.list2Created||this.state.list3Created?
					<div className="box"></div>
					:null
				}
				</div>
					<div className="list">
					<div className="advert">
						<img src="http://static1.mtime.cn/feature/mobile/banner/2018/0211/jhsf750175.jpg"/>
					</div>
					<ul className="shoplist">
					{
						this.state.datalist2.map((item,index)=>
							<li key={index} onClick={this.itemclick.bind(this,index,item.cinemaId)}>
							<NavLink to="/film">
								<p className="p1"><span>{item.cinameName}</span><span className="price">{item.minPrice/100}元起</span></p>
								<p className="p2">{item.address}</p>
								<p className="p3">
									{item.feature.has3D?<span>3D</span>:null}
									{item.feature.hasFeature4D?<span>4D</span>:null}
									{item.feature.hasFeature4K?<span>4K</span>:null}
									{item.feature.hasFeatureDolby?<span>杜比</span>:null}
									{item.feature.hasFeatureHuge?<span>巨幕</span>:null}
									{item.feature.hasIMAX?<span>IMAX</span>:null}
									{item.feature.hasLoveseat?<span>情侣座</span>:null}
									{item.feature.hasVIP?<span>VIP</span>:null}
								</p>
							</NavLink>
							</li>
						)
					}
					</ul>
				</div>
				{
					this.state.jumpCreated?
					<div className="jump-top" onClick={this.jumptop.bind(this)}><i className="iconfont icon-less"></i></div>
					:null
				}
			</div>
			);
	}
	list1(){
		this.setState({
			list1Created:!this.state.list1Created,
			list2Created:false,
			list3Created:false,
		})
	}
	nearclick(){
		this.setState({
			text1:this.refs.near.innerText,
			list1Created:false,
		})
	}
	lowclick(){
		this.setState({
			text1:this.refs.low.innerText,
			list1Created:false,
		})
	}
	list2(){
		this.setState({
			list1Created:false,
			list3Created:false,
			list2Created:!this.state.list2Created,
		})
	}
	itemclick(index,id){
		this.props.history.push(`/film/${id}`);
		this.setState({
			text2:this.state.datalist[index].name,
			datalist1:this.state.datalist[index].businessAreas,
			sum:this.state.datalist[index].cinemaCount,
		})
	}
	item1click(){
		this.setState({
			list2Created:false,
		})
	}
	allclick(){
		this.setState({
			text2:"全部",
			datalist1:this.state.datalist,
			sum:"220",
			list2Created:false,
		})
	}
	list3(){
		this.setState({
			list1Created:false,
			list2Created:false,
			list3Created:!this.state.list3Created,
		})
	}
	jumptop(){
		window.scrollTo(0,0);
	}
	scrollhand(){
		var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
		//console.log(scrollTop);
		if (scrollTop>500) {
			this.setState({
				jumpCreated:true
			})
		} else {
			this.setState({
				jumpCreated:false
			})
		}
	}
}

export default List;
