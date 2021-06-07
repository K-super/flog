<template>
	<div class="detailsShare">
		<flogHead/>
		<div class="shareContent">
			<header>
				<h1>人生价值，活的精彩，要有理想</h1>
				<div class="outher">
					<a href="/" title="wenmang">文盲先生</a>
					<span>
						<i class="iconfont icon-shijian"></i>
						
						2021-06-06
					</span>
					<span>
						<i class="iconfont icon-shuqian"></i>
						文章类别
					</span>
				</div>
				<p>我的想法或者评语</p>
			</header>
			<section>
				&emsp;&emsp;泱泱古国，悠悠华夏。五千年的历史轨迹，五千年的文化传承。五千年的风霜雨雪没有将龙的传人的那些优良传统埋没，
				而是历久弥新，薪尽火传，古人推崇诚信者，今人厚爱诚信者，历史选择诚信者。

　　孔曰成仁，孟曰取义。仁者，发乎礼，义者，发乎情，止乎心，正乎身。在儒家看来，行仁施义的先决条件为内心的向善，所谓勤心诚意者也。心中信守诚信，方能宁静安心，进而修身

　　、齐家、治国、平天下，行义者亦应以诚信为本。义之所存，诚信存之也，读《大学》《中庸》，一字以蔽之，诚也，诚包罗万象，诚信是它的具体体现。

　　在滚滚而来，浩荡而去的历史长河中，涌现出的诚信者比比皆是，荆轲于"风萧萧兮易水寒"中作别太子丹，壮士一去，只为报知遇之恩，虽蹈死地亦无怨无悔。伍子胥逃离楚国，得吴王

　　重用，答应替他报仇，从此伍子胥尽心辅佐，纵然之后受猜忌可仍然不改忠心。陶朱公荡舟西湖之上，得以"千金散尽还复来"的秘诀便是诚信经商，后世徽商，晋商皆履行了这一原则，才有

　　了商行的繁荣昌盛。
			</section>
			<footer>
				
				<div>
					<div class="outherImg">
						<img src="../../assets/outher.jpg" alt="outher,wenmeng">
					</div>
					<div class="outherInfo">
						<h3>文盲先生</h3>
						<p>一个Web前端工程师<a href="/">了解我？</a></p>
					</div>
				</div>
				
			</footer>
		</div>
		<flogFoot/>
	</div>
</template>

<script>
	const flogHead = () => import ("../../components/flogHead")
	const flogFoot = () => import ("../../components/flogFoot")
	export default {
		name:'detailsShare',
		data() {
			return {
				
			}
		},
		components:{
			flogHead,
			flogFoot
		},
		methods:{
			
		}
	}
</script>

<style lang="less" scoped>
.shareContent{
	min-height: 600px;
	width: 990px;
	
	margin: 0 auto;
	header{
		h1{
			margin: 40px 0px;
			color: #669999;
		}
		.outher{
			a{
				text-decoration: none;
				color: #009999;
			}
			span:nth-of-type(1){
				margin-left: 20px;
				color: #808080;
			}
			span:nth-of-type(2){
				margin-left: 20px;
				color: #808080;
			}
		}
		p{
			margin: 30px 0;
			font-size: 22px;
			font-weight: 50px;
		}
	}
}
section{
	text-indent: 2em;
}
footer{
	height: 160px;
	width: 100%;
	margin: 30px 0;
	border-top: 1px solid grey;
	border-bottom: 1px solid grey;
	clear: all;
	display: flex;
	align-items: center;
	
	div{
		clear: all;
		.outherImg{
			float: left;
			height: 100px;
			width: 100px;
			img{
				height: 100%;
				width: 100%;
			}
		}
		.outherInfo{
			padding: 10px;
			float: left;
			margin-left: 60px;
			p{
				margin-top: 30px;
				color: gray;
				a{
					color: rgb(69,146,222);
					text-decoration: none;
					margin-left: 30px;
				}
			}
		}
	}
}
	
</style>
