<template>
	<div class="header">

		<!-- <div class="line"></div> -->
		<!-- 导航栏点击事件 -->
		<!-- @select="handleSelect" -->
		<el-menu
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
			<el-menu-item index="4" @click = "clickSignIn">登录</el-menu-item>
			<el-menu-item index="5" @click ="register">注册</el-menu-item>
		</el-menu>
		<!-- 登录注册组件调用 -->
		<signInCpt/>
		<registerCpt/>
	</div>
	
</template>

<script>
	const signInCpt = () => import('./signIn')
	const registerCpt = () => import('./register')
	export default {
		name:"flogHead",
		data() {
			return {
				activeIndex: '1',
				activeIndex2: '1'
			};
		},
		components:{
			signInCpt,
			registerCpt
		},
		methods: {
			
			// handleSelect(key, keyPath) {
			// 	console.log(key, keyPath);
			// },
			clickSignIn(){
				signIn.style.display = "block";
				bg.className = "bg";
			},
			register(){
				register.style.display = "block";
				regBg.className = "bg";
			}
			
		}
	}
</script>

<style lang="less">
*{
	margin: 0;
	padding: 0;
}

.addSubmenu {
	// margin-left: 300px;
}
.addMenuStyle{
	padding: 0 10%;
	display: flex;
	justify-content: space-between;
}
.addInput{
	vertical-align: middle;
	margin-top: 10px;
	width: 200px;
}
</style>
