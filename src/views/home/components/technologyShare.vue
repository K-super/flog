<template>
	<div class="technologyShare">
		<div class="technologyContent">
			<div class="textContent" v-for="{index,title,date,textContent} in textData" :key = "index">
				<div class="contenImg" >
					
				</div>
				<div class="content" >
					<p>{{ title }}</p>
					<div > {{ textContent }} </div>
					<h5>{{ date }}</h5>
				</div>
				
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
		name:"technologyShare",
		data() {
			return {
				textData:[
				{
					index:0,
					title:"Generator 函数的异步应用",
					date:"2021-6-1",
					textContent:"所谓'异步'，简单说就是一个任务不是连续完成的，可以理解成该任务被人为分成两段，先执行第一段，然后转而执行其他任务，等做好了准备，再回过头执行第二段。"
				},
				{
					index:1,
					title:"Generator 函数的异步应用",
					date:"2021-6-1",
					textContent:"所谓'异步'，简单说就是一个任务不是连续完成的，可以理解成该任务被人为分成两段，先执行第一段，然后转而执行其他任务，等做好了准备，再回过头执行第二段。"
				},
				{
					index:2,
					title:"Generator 函数的异步应用",
					date:"2021-6-1",
					textContent:"所谓'异步'，简单说就是一个任务不是连续完成的，可以理解成该任务被人为分成两段，先执行第一段，然后转而执行其他任务，等做好了准备，再回过头执行第二段。"
				},
				{
					index:3,
					title:"Generator 函数的异步应用",
					date:"2021-6-1",
					textContent:"所谓'异步'，简单说就是一个任务不是连续完成的，可以理解成该任务被人为分成两段，先执行第一段，然后转而执行其他任务，等做好了准备，再回过头执行第二段。"
				},
				{
					index:4,
					title:"Generator 函数的异步应用",
					date:"2021-6-1",
					textContent:"所谓'异步'，简单说就是一个任务不是连续完成的，可以理解成该任务被人为分成两段，先执行第一段，然后转而执行其他任务，等做好了准备，再回过头执行第二段。"
				},
				{
					index:5,
					title:"Generator 函数的异步应用",
					date:"2021-6-1",
					textContent:"所谓'异步'，简单说就是一个任务不是连续完成的，可以理解成该任务被人为分成两段，先执行第一段，然后转而执行其他任务，等做好了准备，再回过头执行第二段。"
				},
				{
					index:6,
					title:"Generator 函数的异步应用",
					date:"2021-6-1",
					textContent:"所谓'异步'，简单说就是一个任务不是连续完成的，可以理解成该任务被人为分成两段，先执行第一段，然后转而执行其他任务，等做好了准备，再回过头执行第二段。"
				}
				]
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="less" scoped>
.technologyShare{
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
		background-color: sandybrown;
		float: left;
	}
	.content{
		height: 100%;
		clear: all;
		box-sizing: border-box;
		padding-left: 120px;
		padding-top: 12px;
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
