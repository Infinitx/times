import {createStore} from "redux" //


var reducer = (prevstate=true,data={})=>{


	let {type,payload} = data;

	switch(type){
		case "shownav":
			return payload;
		default:
			return prevstate;
	}
	return prevstate;
}
const  store= createStore(reducer);


export default store;
