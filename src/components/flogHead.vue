<template>
	<div class="header">

		<!-- <div class="line"></div> -->
		<!-- 导航栏点击事件 -->
		<!-- @select="handleSelect" -->
		<!-- <el-menu
		  :default-active="activeIndex2"
		  class="el-menu-demo addMenuStyle"
		  mode="horizontal"
		  
		  background-color="#88ada6"
		  text-color="#fff"
		  active-text-color="#ffd04b">
		  <el-menu-item index="1" class="addMenuLeft">文盲先生</el-menu-item>
		  <el-submenu index="2" class="addSubmenu">
		    <template slot="title">我的工作台</template>
		    <el-menu-item index="2-1">选项1</el-menu-item>
		    <el-menu-item index="2-2">选项2</el-menu-item>
		    <el-menu-item index="2-3">选项3</el-menu-item>
		    <el-submenu index="2-4">
		      <template slot="title">选项4</template>
		      <el-menu-item index="2-4-1">选项1</el-menu-item>
		      <el-menu-item index="2-4-2">选项2</el-menu-item>
		      <el-menu-item index="2-4-3">选项3</el-menu-item>
		    </el-submenu>
		  </el-submenu>
		  <el-menu-item index="3" >消息中心</el-menu-item>
			<el-input placeholder="请输入内容" class="addInput"></el-input>
			<el-menu-item index="4" @click = "clickSignIn"  id="signBtn">登录</el-menu-item>
			<el-menu-item index="5" @click ="clickRegister" id="regBtn">注册</el-menu-item>
			<el-menu-item index="6" class="none" id="user_">
				欢迎您：{{ user }}<img src="../assets/outher.jpg" alt="用户" title="用户" class="img">
			</el-menu-item>
		</el-menu> -->

		<!-- 导航栏 -->
		<div class="headerUl">
			<ul ref="headerUl">
				<li  @click="num=1" :class='[num===1?"li-hover":null]'>文盲先生</li>
				<li @click="num=2" :class='[num===2?"li-hover":null]'>消息中心</li>
				<li @click="num=3" :class='[num===3?"li-hover":null]'>我的工作台</li>
				<li @click="num=4" :class='[num===4?"li-hover":null]'>
					<input type="text" name="" id="" placeholder="请输入消息" class="addInput">
				</li>
				<li @click = "clickSignIn"  id="signBtn" :class='[num===5?"li-hover":null]' >登陆</li>
				<li @click ="clickRegister" id="regBtn" :class='[num===6?"li-hover":null]'>注册</li>
				<li index="6" class="none" id="user_" >
					欢迎您：{{ user }}<img src="../assets/outher.jpg" alt="用户" title="用户" class="img">
				</li>
			</ul>
		</div>
		<!-- 登录注册组件调用 -->
		<signInCpt ref="signC" @resdata="showReqData"/>
		<registerCpt ref="regC"/>
		<!-- <audio controls>
			<source src="../assets/music/张卓含威 - 阴天.mp3" type="audio/mpeg">
		</audio> -->
	</div>
	
</template>

<script>
	const signInCpt = () => import('./signIn')
	const registerCpt = () => import('./register')
	export default {
		name:"flogHead",
		data() {
			return {
				num:1,
				user:"super",
				activeIndex: '1',
				activeIndex2: '1',
			};
		},
		components:{
			signInCpt,
			registerCpt
		},
		methods: {
			showReqData(val){
				this.user = val.user;
			},
			clickSignIn(){
				signIn.className = "block";
				bg.className = "bg";
				this.num = 5;
			},
			clickRegister(){
				register.className = "block";
				regBg.className = "bg";
				this.num = 6;
			},
			hideBtn(){
				signBtn.style.display = 'none';
				regBtn.style.display = 'none';
				user_.className = 'el-menu-item';
				this.$refs.signC.cancel();
			}

			
		}
	}
</script>

<style lang="less">
@keyframes leftMove {
	from {
		transform: translate(100%);
	}
	to {
		transform: translate(0);
	}
}

.header{
	animation: leftMove 2s;
}

.li-hover{
	border-bottom: 2px solid #ffd04b;
}
.headerUl{
	background-color:#88ada6 ;
	ul{
		display: flex;
		justify-content: space-around;
		align-items: center;
		li{
			cursor: pointer;
			font-size: 14px;
			color: white;
			min-height: 60px;
			text-align: center;
			list-style: none;
			line-height: 60px;
			box-sizing: border-box;
			min-width: 100px;
		}
		li:hover{
			background-color: rgb(109,138,133);
		}
		
	}

}
.img{
	height: 80%;
	width: 50px;
	border-radius: 50%;
	vertical-align: middle;
	margin-left: 20px;
}
*{
	margin: 0;
	padding: 0;
}
.block {
	display: block;
}
.addMenuStyle{
	padding: 0 !important;
	min-width: 1190px;
	padding: 0 10%;
	display: flex;
	justify-content: space-between;
}
.addInput{
	width: 150px;
	height: 30px;
	border-radius: 20px;
	border-color: antiquewhite;
	box-shadow: none;
	outline:none;
	padding-left: 10px;
}
</style>
