<template>
  <div id="app">
		<!-- <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"> -->

    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
		<keep-alive include="tabs">
		    <router-view /> <!-- 所有路径匹配到的视图组件都会被缓存 -->
		</keep-alive>
    
  </div>
</template>

<script>
	
	export default {
		data() {
			return {
				cacheConponent:['tabs','technologyShare','lifeExperience']
			}
		},
		components:{
			
		},
		
	}
</script>

<style lang="less">

</style>
