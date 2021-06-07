<template>
	<div>
		<!-- 遮罩层 -->
		<div id="bg"></div>
		<div id="signIn">
			
			<div class="signInImg">
				
			</div>
			<div class="form">
				
				<div>
					<h3>Welcome</h3>
					<label for="userName">
						用&emsp;户&emsp;名:<input class="mlm" type="text" placeholder="请输入用户名" id="userName">
					</label><br>
					<label for="userPwd">
						密&emsp;码:<input class="mln" type="password" placeholder="请输入密码" id="userPwd">
					</label><br>
					<label for="">
						验&emsp;证&emsp;码: <input type="text" >
						<span>验证码</span>
					</label>
					<div class="btn">
						<button>提交</button>
						<button @click="cancel()">取消</button>
					</div>
					
				</div>
				
			</div>
			
		</div>
	</div>
	
</template>

<script>
	export default {
		name:'signIn',
		data() {
			return {
				
			}
		},
		methods:{
			cancel(){
				signIn.style.display = "none";
				bg.className = "";
			}
		}
	}
</script>

<style lang="less" scoped>
	.bg{
		height: 100%;
		width: 100%;
		position: absolute;
		left: 0;
		top: 0;
		background: rgba(0,0,0,0.5);
		z-index: 100;
	}
#signIn{
	display: none;
	height: 350px;
	width: 840px;
	background-color: bisque;
	position: fixed;
	z-index: 999;
	top: 200px;
	left: 0px;
	right: 0px;
	margin-left:auto;
	margin-right:auto;
	// display: flex;
	// align-items: center;
	// justify-content: center;
	.signInImg{
		height: 100%;
		width: 500px;
		background:url(../static/imgs/signIn.jpeg) no-repeat;
		background-size: 100% 100%;
		float: left;
	}
}
.form{
	height: 100%;
	display: flex;
	align-content: center;
	justify-content: center;
	input {
		height: 30px;
		width: 120px;
		margin: 10px;
		border-radius: 10px;
		border-color:#EAFFEA;
	}
	
	div{
		
		h3{
			text-align: center;
			margin: 30px 0;
		}
		label{
			span{
				height: 30px;
				width: 100px;
				background-color: darkcyan;
				display: inline-block;
				text-align: center;
				line-height: 30px;
				border-radius: 30px;
			}
		}
		.btn{
			margin: 20px 0;
			display: flex;
			align-items: center;
			justify-content: space-around;
			button{
				height: 30px;
				width: 120px;
				border-radius: 30px;
				border: none;
				cursor: pointer;
			}
			button:hover{
				background-color: sandybrown;
			}
		}
	}
}
.mln{
	margin-left: 36px !important;
}
.mlm{
	margin-left: 15px !important;
}
</style>
