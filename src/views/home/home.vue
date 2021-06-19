<template>
	<div class="home">
		<flogHead/>

		<div class="backTop" @click="backTop()" v-model="up" v-show="up == 1">
			<i class="iconfont icon-4fanhuidingbubai"></i>
		</div>
		<div class="homeContent">
			<div class="homeContentLeft">
				
				<!-- 一个bug 刷新页面之后addTabsclick类样式恢复初始状态，想点办法做个缓存之类的 -->
				<!-- <keep-alive include="tabs">
					<div is = "tabs"></div>
				</keep-alive>
				
				<router-view/> -->
				
				<tabs @tabsName = "tabsEmit" />
				<div :is="changeTabsSign" ></div>
			</div>
			
			<div class="homeContentRight">
				<!-- 头像放置 -->
				<div class="headPortrait">
					<img src="../../assets/outher.jpg" alt="文盲先生" title="文盲先生">
				</div>
				<div class="outherInformation">
					<p>文盲先生</p>
					<span>一个Web前端工程师</span>
					<a href="javascript:;" @click="clickOutherInfo">了解我?</a>
					<!-- 暂时先写死，后面连数据库 -->
					<div class="info">
						<p><i class="iconfont icon-nianling"></i>年&emsp;龄：21</p>
						<p><i class="iconfont icon-suozaidi"></i>所在地：四川成都</p>
						<p><i class="iconfont icon-youxiang"></i>邮&emsp;箱：k_super@163.com</p>
					</div>
				</div>
			</div>
		</div>
		<flogFoot/>
	</div>
</template>

<script>
	const flogHead = () => import ("../../components/flogHead")
	const flogFoot = () => import ("../../components/flogFoot")
	const tabs = () => import('../../components/tabs')
	const lifeExperience = () => import("./components/lifeExperience")
	const technologyShare = () => import("./components/technologyShare")
	export default {
		name:"home",
		data (){
			return {
				activeName: 'first',
				up:0,
				changeTabsSign :'lifeExperience',
			}
		},
		components:{
			flogHead,
			flogFoot,
			tabs,
			technologyShare,
			lifeExperience

		},
		mounted () {
		    window.addEventListener('scroll', this.scrollToTop)
		},
		methods:{
			handleClick(tab, event) {
				console.log(tab, event);
			},
			
			// 返回顶部
			backTop(){
				document.body.scrollTop = 0;
				document.documentElement.scrollTop = 0;
				this.up = 0
			},
			scrollToTop(){
				if(document.body.scrollTop || document.documentElement.scrollTop){
					this.up = 1
				}else this.up = 0;
			},
			// 设置tabs接收到的值
			tabsEmit(name){
				this.changeTabsSign = name;
			},
			clickOutherInfo(event){
				let moreInfo  = event.currentTarget.nextElementSibling;
				moreInfo.style.display == "" ? moreInfo.style.display = "block" : moreInfo.style.display = "";
				
			}
			
		}
	}
</script>

<style lang="less" scoped>
.info{
	display: none;
	p{
		margin: 10px 0;
	}
	i{
		margin-right: 10px;
		color: burlywood;
	}
}
.home{
	position: relative;
}
// 返回顶部按钮
.backTop{
	position: fixed;
	bottom: 15%;
	right: 6%;
	cursor: pointer;
	i{
		font-size: 50px;
		color: mediumaquamarine;
	}
}
.homeContent{
	height: 200px;
	width: 1190px;
	margin: 0 auto;
	clear: all;
}
.homeContentLeft{
	
	width: 800px;
	// border: 1px solid darkblue;
	float: left;
}
.homeContentRight{
	box-sizing: border-box;
	padding: 20px ;
	
	width: 300px;
	border: 1px solid darkslategray;
	float: right;
	margin: 40px 0;
	.headPortrait{
		height: 120px;
		width: 120px;
		
		img{
			height: 100%;
			width: 100%;
		}
	}
	.outherInformation{
		
		>p{
			margin: 30px 0 20px 0;
			color: skyblue;
			font-size: 20px;
			font-weight: bold;
		}
		
		a{
			margin-left: 10px;
			text-decoration: none;
			color: skyblue;
		}
	}
}
.homeTabs{
	margin: 30px 0;
	height: 40px;
	width: 100%;
	border-bottom: 2px solid rgb(228,231,237);
	li{
		list-style: none;
		display: inline-block;
		line-height: 40px;
		text-align: center;
		padding: 0 20px;
		font-size: 14px;
	}
	li:hover{
		border-bottom: 2px solid #808080;
		color: #808080;
		cursor:pointer ;
	}
}
.addTabsclick{
	border-bottom: 2px solid #808080;
	color: #808080;
	cursor:pointer ;
}
</style>
