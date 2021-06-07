<template>
	<div class="lifeExperience">
		<div class="lifeContent">
			<div class="textContent" v-for="{index,title,date,textContent} in textData" :key = "index">
				<div class="contenImg" >
					<img src="../../../assets/outher.jpg" alt="auther,wenmang">
				</div>
				<a class="content" href="/detailsShare">
					<p>{{ title }}</p>
					<div > {{ textContent }} </div>
					<h5>{{ date }}</h5>
				</a>
				
			</div>
		</div>
		<el-pagination
		  class="addPaging"
		  background
		  layout="prev, pager, next"
		  :total="1000">
		</el-pagination>
	</div>
</template>

<script>
	export default {
		name:"lifeExperience",
		data() {
			return {
				textData:[
				{
					index:0,
					title:"人生价值，活的精彩，要有理想",
					date:"2021-6-1",
					textContent:"活着不是为活着而活着，生命是一个过程，这个过程美好而又绚丽多彩。春天观察小草发出嫩绿的芽，很是开心;夏天闻着君子兰飘来的淡淡清香，很是悠哉;秋天体会丰收的喜悦，很是知足;"
				},
				{
					index:1,
					title:"人生价值，活的精彩，要有理想",
					date:"2021-6-1",
					textContent:"活着不是为活着而活着，生命是一个过程，这个过程美好而又绚丽多彩。春天观察小草发出嫩绿的芽，很是开心;夏天闻着君子兰飘来的淡淡清香，很是悠哉;秋天体会丰收的喜悦，很是知足;"
				},
				{
					index:2,
					title:"人生价值，活的精彩，要有理想",
					date:"2021-6-1",
					textContent:"活着不是为活着而活着，生命是一个过程，这个过程美好而又绚丽多彩。春天观察小草发出嫩绿的芽，很是开心;夏天闻着君子兰飘来的淡淡清香，很是悠哉;秋天体会丰收的喜悦，很是知足;"
				},
				{
					index:3,
					title:"人生价值，活的精彩，要有理想",
					date:"2021-6-1",
					textContent:"活着不是为活着而活着，生命是一个过程，这个过程美好而又绚丽多彩。春天观察小草发出嫩绿的芽，很是开心;夏天闻着君子兰飘来的淡淡清香，很是悠哉;秋天体会丰收的喜悦，很是知足;"
				},
				{
					index:4,
					title:"人生价值，活的精彩，要有理想",
					date:"2021-6-1",
					textContent:"活着不是为活着而活着，生命是一个过程，这个过程美好而又绚丽多彩。春天观察小草发出嫩绿的芽，很是开心;夏天闻着君子兰飘来的淡淡清香，很是悠哉;秋天体会丰收的喜悦，很是知足;"
				},
				{
					index:5,
					title:"人生价值，活的精彩，要有理想",
					date:"2021-6-1",
					textContent:"活着不是为活着而活着，生命是一个过程，这个过程美好而又绚丽多彩。春天观察小草发出嫩绿的芽，很是开心;夏天闻着君子兰飘来的淡淡清香，很是悠哉;秋天体会丰收的喜悦，很是知足;"
				}
				]
			}
		},
		methods:{
			
		}
		
	}
</script>

<style lang="less" scoped>
.lifeExperience{
	clear: all;
}
.textContent{
	clear: all;
	height: 100px;
	width: 100%;
	border: 1px solid saddlebrown;
	margin-top: 20px;
	.contenImg{
		height: 100%;
		width: 100px;
		// background-color: sandybrown;
		float: left;
		img{
			height: 100%;
			width: 100%;
		}
	}
	.content{
		text-decoration: none;
		color:black;
		height: 100%;
		clear: all;
		box-sizing: border-box;
		padding-left: 120px;
		padding-top: 12px;
		display: block;
		p{
			font-size: 18px;
			font-weight: 400;
			color: #808080;
		}
		div{
			box-sizing: border-box;
			height: 40px;
			width: 80%;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			
			padding-top: 10px;
		}
		h5{
			
			text-align: right;
			padding-right: 20px;
		}
	}
	.content:hover{
		background-color: rgb(211,211,211);
	}
}
.addPaging{
	margin: 50px 180px;
	
}
</style>
