export default {
	state:{
		login:JSON.parse(window.sessionStorage.getItem('jd_user_login_state'))?JSON.parse(window.sessionStorage.getItem('jd_user_login_state')).login:false
	},
	//同步
	mutations: {
		setLoginState(state,val){
			state.login=val;
			window.sessionStorage.setItem('jd_user_login_state',JSON.stringify({login:val}));
		}
	},
	//异步
	actions:{
		
	}
	/*sessionStorage 只能保存一个字符串
	setItem(key,value);set是读取
	value=getItem(key);get是改写
	object=>string JSON.stringify();
	string=>object JSON.parse();
	eg:
	var obj={login:true}; 首先是定义一个对象
	var str=JSON.stringify(obj);因为sessionStorage只能存字符串，所以将obj形式改成string形式
	widow.sessionStorage.setItem('jd_user_state_login',str);现在是读取sessionStorage的内容
	var str2=widow.sessionStorage.getItem('jd_user_state_login');这一步是将sessionStorage的内容改写
	console.log(JSON.parse(str2));sessionStorage改写之后的str2是字符串 所以在将string形式改成obj形式
	* */
}
