<template>
	<div class="homeTabs">
		<!-- <router-link to="/" tag="li" class="addTabsclick" @click.native="tabsClick">生活感悟</router-link>
		<router-link to="/technologyShare" tag="li" @click.native="tabsClick">技术分享</router-link>
		<router-link to="" tag="li" >更多</router-link> -->
		<li class="addTabsclick" @click="tabsClick">生活感悟</li>
		<li @click="tabsClick">技术分享</li>
		<li @click="tabsClick">更多</li>
	</div>
</template>

<script>
	export default {
		name:'tabs',
		data() {
			return {
				tabsName:'lifeExperience'
			}
		},
		methods:{
			tabsClick(event){
				// tabs样式改变
				let el = event.currentTarget;
				el.className = "addTabsclick";
				for(let i = 0;i < el.parentElement.children.length; i++){
					if(el.parentElement.children[i] != el) el.parentElement.children[i].className = "" ;
				}
				switch(event.currentTarget.innerHTML){
					case "生活感悟" : this.tabsName = 'lifeExperience';  break;
					case "技术分享" : this.tabsName = 'technologyShare';  break;
					case "更多" : this.tabsName = 'more';  break;
				}
				// 向父组件home发送对应的组件名
				this.$emit('tabsName',this.tabsName);
			}
		}
	}
</script>

<style lang="less" scoped>
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
