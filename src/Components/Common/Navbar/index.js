import React,{Component}from 'react';
import {NavLink} from "react-router-dom";
import './index.css';
import store from "../../../Redux/Store";

class Navbar extends Component{

	constructor(){
		super();
		this.state = {
			text:"影片/影院/影人，任你搜",
			leftCreated:true,
			ssCreated:false,
			carCreated:false,
			searchCreated:true,
			navbarCreated:true
		};
	}

	componentDidMount(){
		//console.log(store.getState());
		store.subscribe(()=>{
			//console.log(store.getState());
			this.setState({
				navbarCreated:store.getState()
			})
		})
	}

	render(){
		return(
			<div>
			{
				this.state.navbarCreated?
				<header>
					<ul className="list">
						<li><img src="http://static1.mtime.cn/html5/20180426170931/images/2014/logo_mtime.png"/></li>
						<li onClick={this.homeclick.bind(this)}><NavLink to="/home" activeClassName="active">首页<div></div></NavLink></li>
						<li onClick={this.listclick.bind(this)}><NavLink to="/list" activeClassName="active">购票<div></div></NavLink></li>
						<li onClick={this.shopclick.bind(this)}><NavLink to="/shop" activeClassName="active">商城<div></div></NavLink></li>
						<li onClick={this.findclick.bind(this)}><NavLink to="/find" activeClassName="active">发现<div></div></NavLink></li>
						<li><i className="iconfont icon-account"></i></li>
					</ul>
					{
						this.state.searchCreated?
						<div className="search">
							{
								this.state.leftCreated?
								<div className="left">
									<p>重庆<i className="iconfont icon-moreunfold"></i></p>
								</div>
								:null
							}
							<div className="right">
								<i className="iconfont icon-search"></i>
								<span>{this.state.text}</span>
							</div>
							{
								this.state.ssCreated?
								<div className="ss">搜索</div>
								:null
							}
							{
								this.state.carCreated?
								<div className="car"><i className="iconfont icon-cart"></i></div>
								:null
							}
						</div>
						:null
					}
				</header>
				:null
			}
			</div>
			);
	}

	homeclick(){
		//console.log("home");
		this.setState({
			text:"影片/影院/影人，任你搜",
			leftCreated:true,
			ssCreated:false,
			carCreated:false,
			searchCreated:true,
		})
	}
	listclick(){
		//console.log("list");
		this.setState({
			text:"筛选影院",
			leftCreated:true,
			ssCreated:true,
			carCreated:false,
			searchCreated:true,
		})
	}
	shopclick(){
		//console.log("shop");
		this.setState({
			text:"搜索正版电影周边",
			leftCreated:false,
			ssCreated:false,
			carCreated:true,
			searchCreated:true,
		})
	}
	findclick(){
		//console.log("find");
		this.setState({
			searchCreated:false,
		})
	}

}

export default Navbar;
