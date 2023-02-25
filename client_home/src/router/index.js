import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '../views/index.vue'
import login from '../views/account/login.vue';

Vue.use(VueRouter)

const routes = [
	// 主页ss
	{
		path: '/',
		name: 'index',
		component: index
	},
	// 登录
	{
		path: '/account/login',
		name: 'login',
		component: login
	},
	// 忘记密码
	{
		path: '/account/forgot',
		name: 'forgot',
		component: () => import('../views/account/forgot.vue')
	},
	// 注册账号
	{
		path: '/account/register',
		name: 'register',
		component: () => import('../views/account/register.vue')
	},
	// 媒体图片
	{
		path: '/media/image',
		name: 'media_image',
		component: () => import('../views/media/image.vue')
	},
	// 音乐
	{
		path: '/media/music',
		name: 'media_music',
		component: () => import('../views/media/music.vue')
	},
	// 媒体视频
	{
		path: '/media/video',
		name: 'media_video',
		component: () => import('../views/media/video.vue')
	},
	// 文章路由
	{
		path: '/article/list',
		name: 'article_list',
		component: () => import('../views/article/list.vue')
	},
	{
		path: '/article/details',
		name: 'article_details',
		component: () => import('../views/article/details.vue')
	},
	// 浏览网站
	// 收藏路由
	{
		path: '/user/collect',
		name: 'collect_list',
		component: () => import('../views/user/collect.vue')
	},

	// 论坛路由
	{
		path: '/forum/list',
		name: 'forum_list',
		component: () => import('../views/forum/list.vue')
	},

	{
		path: '/forum/details',
		name: 'forum_details',
		component: () => import('../views/forum/details.vue')
	},

	{
		path: '/forum/view',
		name: 'forum_view',
		component: () => import('../views/forum/view.vue')
	},

	// 考试路由
	{
		path: '/exam/list',
		name: 'exam_list',
		component: () => import('../views/exam/list.vue')
	},

	{
		path: '/exam/details',
		name: 'exam_details',
		component: () => import('../views/exam/details.vue')
	},


	// 商品路由
	{
		path: '/goods/list',
		name: 'goods_list',
		component: () => import('../views/goods/list.vue')
	},
	{
		path: '/goods/details',
		name: 'goods_details',
		component: () => import('../views/goods/details.vue')
	},
	{
		path: '/pay/detail',
		name: 'pay_detail',
		component: () => import('../views/pay/details.vue')
	},
	// 购物车路由
	{
		path: '/cart/list',
		name: 'cart_list',
		component: () => import('../views/cart/list.vue')
	},
	// 收货地址路由
	{
		path: '/user/address',
		name: 'address',
		component: () => import('../views/user/address.vue')
	},
	{
		path: '/user/address_edit',
		name: 'address_edit',
		component: () => import('../views/user/address_edit.vue')
	},
	// 订单路由
	{
		path: '/order/list',
		name: 'order_list',
		component: () => import('../views/order/list.vue')
	},
	{
		path: '/order/details',
		name: 'order_details',
		component: () => import('../views/order/details.vue')
	},


	// 公告路由
	{
		path: '/notice/list',
		name: 'notice_list',
		component: () => import('../views/notice/list.vue')
	},
	{
		path: '/notice/details',
		name: 'notice_details',
		component: () => import('../views/notice/details.vue')
	},

	
	
		
	
		
		// 商城中心列表路由
	{
		path: '/mall_center/list',
		name: '/mall_center_list',
		component: () => import('../views/mall_center/list.vue')
	},
	
		// 商城中心详情路由
	{
		path: '/mall_center/details',
		name: '/mall_center_details',
		component: () => import('../views/mall_center/details.vue')
	},
		
		// 定制商品列表路由
	{
		path: '/customized_goods/list',
		name: '/customized_goods_list',
		component: () => import('../views/customized_goods/list.vue')
	},
	
		// 定制商品详情路由
	{
		path: '/customized_goods/details',
		name: '/customized_goods_details',
		component: () => import('../views/customized_goods/details.vue')
	},
			// 我要定制添加路由
	{
		path: '/i_want_to_customize/edit',
		name: '/i_want_to_customize_edit',
		component: () => import('../views/i_want_to_customize/edit.vue')
	},
	
		// 我要定制列表路由
	{
		path: '/i_want_to_customize/list',
		name: '/i_want_to_customize_list',
		component: () => import('../views/i_want_to_customize/list.vue')
	},
	
			// 分类信息添加路由
	{
		path: '/classification_information/edit',
		name: '/classification_information_edit',
		component: () => import('../views/classification_information/edit.vue')
	},
	
		// 分类信息列表路由
	{
		path: '/classification_information/list',
		name: '/classification_information_list',
		component: () => import('../views/classification_information/list.vue')
	},
	
		
		// 网站公告列表路由
	{
		path: '/website_announcement/list',
		name: '/website_announcement_list',
		component: () => import('../views/website_announcement/list.vue')
	},
	
		// 网站公告详情路由
	{
		path: '/website_announcement/details',
		name: '/website_announcement_details',
		component: () => import('../views/website_announcement/details.vue')
	},
		
		// 热卖图书列表路由
	{
		path: '/hot_books/list',
		name: '/hot_books_list',
		component: () => import('../views/hot_books/list.vue')
	},
	
		// 热卖图书详情路由
	{
		path: '/hot_books/details',
		name: '/hot_books_details',
		component: () => import('../views/hot_books/details.vue')
	},
	
	// 用户路由
	{
		path: '/user/index',
		name: 'user_index',
		component: () => import('../views/user/index.vue')
	},
	// 基本信息
	{
		path: '/user/info',
		name: 'user_info',
		component: () => import('../views/user/info.vue')
	},
	// 找回密码
	{
		path: '/user/password',
		name: 'user_password',
		component: () => import('../views/user/password.vue')
	},

	// 搜索
	{
		path: '/search',
		name: 'search',
		component: () => import('../views/search/index.vue')
	},
	// 局部搜索
	{
		path: '/search/details',
		name: 'search_details',
		component: () => import('../views/search/details.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

router.afterEach((to, from, next) => {
	let title = "测试测试测试测试单管理系统-home";
	document.title = title;
	document.logo = "测试测试测试测试单管理系统"
})

export default router
