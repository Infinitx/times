import React,{Component}from 'react';
import {NavLink} from "react-router-dom";
import './index.css';

class Navbar extends Component{
	render(){
		return(
			<div>
				<header>
					<ul className="list">
						<li><img src="http://static1.mtime.cn/html5/20180426170931/images/2014/logo_mtime.png"/></li>
						<li><NavLink to="/home" activeClassName="active">首页<div></div></NavLink></li>
						<li><NavLink to="/list" activeClassName="active">购票<div></div></NavLink></li>
						<li><NavLink to="/shop" activeClassName="active">商城<div></div></NavLink></li>
						<li><NavLink to="/find" activeClassName="active">发现<div></div></NavLink></li>
						<li><i className="iconfont icon-account"></i></li>
					</ul>
				</header>
			</div>
			);
	}
}

export default Navbar;
