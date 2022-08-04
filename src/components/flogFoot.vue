<template>
	<div class="flogFoot flexCenter">
		Copyright 2010-2019 WenMang sir
	</div>
</template>

<script>
	export default {
		name:"foot",
		data() {
			return {
				
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="less">
@keyframes rightMove {
	from{
		transform: translateX(-100%);
	}
	to{
		transform: translateX(0);
	}
}

.flogFoot{
	animation: rightMove 2s;
	height: 100px;
	width: 100%;
	background-color: #88ada6;
	font-size: 20px;
	color: white;
}
	
</style>
