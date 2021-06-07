import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home/home.vue'

Vue.use(VueRouter)

const detailsShare  = () => import('../views/detailsShare/detailsShare')

let meta = {
			title:"文盲先生",
			keyword:'wenmangsir',
			description:'一个啥也不知道的人'
		}
const routes = [
  {
    path: '/',
    // name: 'home',
    component: home,
		meta
		// children:[
		// 	{
		// 		name:'lifeExperience',
		// 		path:'/',
		// 		meta,
		// 		component:() => import('../views/home/components/lifeExperience')
		// 	},
		// 	{
		// 		name:'technologyShare',
		// 		path:'/technologyShare',
		// 		meta,
		// 		component:() => import('../views/home/components/technologyShare')
		// 	}
		// ]
  },
	{
		name:'detailsShare',
		path:'/detailsShare',
		component:detailsShare,
		meta
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
