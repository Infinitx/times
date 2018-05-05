import React,{Component}from 'react';
import './index.css';
import {NavLink} from 'react-router-dom'
class Footer extends Component{
	render(){
		return(
			<div>
				<footer>
					<ul className="footlist">
						<li><NavLink to="/home" activeClassName="active">首页<div></div></NavLink></li>
						<li><NavLink to="/list" activeClassName="active">购票<div></div></NavLink></li>
						<li><NavLink to="/shop" activeClassName="active">商城<div></div></NavLink></li>
						<li><NavLink to="/find" activeClassName="active">发现<div></div></NavLink></li>
						<li><NavLink to="/home" activeClassName="active">我的<div></div></NavLink></li>
					</ul>
					<ul className="list">
						<li>PC版</li>
						<div></div>
						<li>客户端下载</li>
						<div></div>
						<li>意见反馈</li>
						<div></div>
						<li>帮助中心</li>
					</ul>
				</footer>
			</div>
			);
	}
}

export default Footer;
