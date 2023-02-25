import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '../views/index.vue';
import login from '../views/login.vue';
import forgot from '../views/forgot.vue';
import register from '../views/register.vue';
Vue.use(VueRouter)

const routes = [
	// 主页
	{
		path: '/',
		name: 'index',
		component: index,
		meta: {
			index: 0,
			title: '首页'
		}
	},

	// 登录
	{
		path: '/login',
		name: 'login',
		component: login,
		meta: {
			index: 0,
			title: '登录'
		}
	},

	// 注册
	{
		path: '/register',
		name: 'register',
		component: register,
		meta: {
			index: 0,
			title: '注册'
		}
	},

	// 忘记密码
	{
		path: '/forgot',
		name: "forgot",
		component: forgot,
		meta: {
			index: 0,
			title: '忘记密码'
		}
	},

	// 修改密码
	{
		path: '/user/password',
		name: "password",
		component: () => import("../views/user/password.vue"),
		meta: {
			index: 0,
			title: '修改密码'
		}
	},

	// 视频播放页
	{
		path: "/media/video",
		name: "video",
		component: () => import('../views/media/video.vue'),
		meta: {
			index: 0,
			title: "视频"
		}
	},

	// 音频播放页
	{
		path: "/media/audio",
		name: "audio",
		component: () => import('../views/media/audio.vue'),
		meta: {
			index: 0,
			title: "音频"
		}
	},

	// 权限路由
	{
		path: '/auth/table',
		name: 'auth_table',
		component: () => import('../views/nav/table.vue'),
		meta: {
			index: 0,
			title: '权限列表'
		}
	},
	{
		path: '/auth/view',
		name: 'auth_view',
		component: () => import('../views/nav/view.vue'),
		meta: {
			index: 0,
			title: '权限详情'
		}
	},

	// 友情链接路由
	// {
	// 	path: '/link/table',
	// 	name: 'link_table',
	// 	component: () => import('../views/link/table.vue'),
	// 	meta: {
	// 		index: 0,
	// 		title: '链接列表'
	// 	}
	// },
	// {
	// 	path: '/link/view',
	// 	name: 'link_view',
	// 	component: () => import('../views/link/view.vue'),
	// 	meta: {
	// 		index: 0,
	// 		title: '链接详情'
	// 	}
	// },

	// 轮播图路由
	{
		path: '/slides/table',
		name: 'slides_table',
		component: () => import('../views/slides/table.vue'),
		meta: {
			index: 0,
			title: '轮播图列表'
		}
	},
	{
		path: '/slides/view',
		name: 'slides_view',
		component: () => import('../views/slides/view.vue'),
		meta: {
			index: 0,
			title: '轮播图详情'
		}
	},
		// 文章路由
	{
		path: '/article/table',
		name: 'article_table',
		component: () => import('../views/article/table.vue'),
		meta: {
			index: 0,
			title: '文章列表'
		}
	},
	{
		path: '/article/view',
		name: 'article_view',
		component: () => import('../views/article/view.vue'),
		meta: {
			index: 0,
			title: '文章详情'
		}
	},

	// 文章分类路由
	{
		path: '/article_type/table',
		name: 'article_type_table',
		component: () => import('../views/article_type/table.vue'),
		meta: {
			index: 0,
			title: '文章分类列表'
		}
	},
	{
		path: '/article_type/view',
		name: 'article_type_view',
		component: () => import('../views/article_type/view.vue'),
		meta: {
			index: 0,
			title: '文章分类详情'
		}
	},
	
	// 广告路由
	// {
	// 	path: '/ad/table',
	// 	name: 'ad_table',
	// 	component: () => import('../views/ad/table.vue'),
	// 	meta: {
	// 		index: 0,
	// 		title: '广告列表'
	// 	}
	// },
	// {
	// 	path: '/ad/view',
	// 	name: 'ad_view',
	// 	component: () => import('../views/ad/view.vue'),
	// 	meta: {
	// 		index: 0,
	// 		title: '广告详情'
	// 	}
	// },


	// 论坛路由
	{
		path: '/forum/table',
		name: 'forum_table',
		component: () => import('../views/forum/table.vue'),
		meta: {
			index: 0,
			title: '论坛列表'
		}
	},
	{
		path: '/forum/view',
		name: 'forum_view',
		component: () => import('../views/forum/view.vue'),
		meta: {
			index: 0,
			title: '论坛详情'
		}
	},

	// 论坛分类路由
	{
		path: '/forum_type/table',
		name: 'forum_type_table',
		component: () => import('../views/forum_type/table.vue'),
		meta: {
			index: 0,
			title: '论坛分类列表'
		}
	},
	{
		path: '/forum_type/view',
		name: 'forum_type_view',
		component: () => import('../views/forum_type/view.vue'),
		meta: {
			index: 0,
			title: '论坛分类详情'
		}
	},

	// 公告路由
	{
		path: '/notice/table',
		name: 'notice_table',
		component: () => import('../views/notice/table.vue'),
		meta: {
			index: 0,
			title: '公告列表'
		}
	},
	{
		path: '/notice/view',
		name: 'notice_view',
		component: () => import('../views/notice/view.vue'),
		meta: {
			index: 0,
			title: '公告详情'
		}
	},
	// 考试路由
	{
		path: '/exam/table',
		name: 'exam_table',
		component: () => import('../views/exam/table.vue'),
		meta: {
			index: 0,
			title: '考试管理'
		}
	},
	{
		path: '/exam/view',
		name: 'exam_view',
		component: () => import('../views/exam/view.vue'),
		meta: {
			index: 0,
			title: '考试详情'
		}
	},
	{
		path: '/question_table/table',
		name: 'question_table_table',
		component: () => import('../views/exam/question_table.vue'),
		meta: {
			index: 0,
			title: '题库列表'
		}
	},
	{
		path: '/question_view/view',
		name: 'question_view_view',
		component: () => import('../views/exam/question_view.vue'),
		meta: {
			index: 0,
			title: '题库详情'
		}
	},
	{
		path: '/answer_view/view',
		name: 'answer_view_view',
		component: () => import('../views/exam/answer_view.vue'),
		meta: {
			index: 0,
			title: '答题'
		}
	},
	{
		path: '/score_table/table',
		name: 'score_table_table',
		component: () => import('../views/exam/score_table.vue'),
		meta: {
			index: 0,
			title: '评分列表'
		}
	},
	{
		path: '/score_view/view',
		name: 'score_view_view',
		component: () => import('../views/exam/score_view.vue'),
		meta: {
			index: 0,
			title: '评分详情'
		}
	},

	// 商品路由
	// {
	// 	path: '/goods/table',
	// 	name: 'goods_table',
	// 	component: () => import('../views/goods/table.vue'),
	// 	meta: {
	// 		index: 0,
	// 		title: '商品列表'
	// 	}
	// },
	// {
	// 	path: '/goods/view',
	// 	name: 'goods_view',
	// 	component: () => import('../views/goods/view.vue'),
	// 	meta: {
	// 		index: 0,
	// 		title: '商品详情'
	// 	}
	// },

	// 商品分类路由
	{
		path: '/goods_type/table',
		name: 'goods_type_table',
		component: () => import('../views/goods_type/table.vue'),
		meta: {
			index: 0,
			title: '商品分类列表'
		}
	},
	{
		path: '/goods_type/view',
		name: 'goods_type_view',
		component: () => import('../views/goods_type/view.vue'),
		meta: {
			index: 0,
			title: '商品分类详情'
		}
	},

	// 订单路由
	{
		path: '/order/table',
		name: 'order_table',
		component: () => import('../views/order/table.vue'),
		meta: {
			index: 0,
			title: '订单列表'
		}
	},
	{
		path: '/order/view',
		name: 'order_view',
		component: () => import('../views/order/view.vue'),
		meta: {
			index: 0,
			title: '订单详情'
		}
	},

	// 评论路由
	{
		path: '/comment/table',
		name: 'comment_table',
		component: () => import('../views/comment/table.vue'),
		meta: {
			index: 0,
			title: '评论列表'
		}
	},
	{
		path: '/comment/view',
		name: 'comment_view',
		component: () => import('../views/comment/view.vue'),
		meta: {
			index: 0,
			title: '评论详情'
		}
	},

	// 商城用户路由
	{
		path: '/mall_users/table',
		name: 'mall_users_table',
		component: () => import('../views/mall_users/table.vue')
	},
	{
		path: '/mall_users/view',
		name: 'mall_users_view',
		component: () => import('../views/mall_users/view.vue')
	},
	// 卖家路由
	{
		path: '/seller/table',
		name: 'seller_table',
		component: () => import('../views/seller/table.vue')
	},
	{
		path: '/seller/view',
		name: 'seller_view',
		component: () => import('../views/seller/view.vue')
	},
	// 商城中心路由
	{
		path: '/mall_center/table',
		name: 'mall_center_table',
		component: () => import('../views/mall_center/table.vue')
	},
	{
		path: '/mall_center/view',
		name: 'mall_center_view',
		component: () => import('../views/mall_center/view.vue')
	},
	// 定制商品路由
	{
		path: '/customized_goods/table',
		name: 'customized_goods_table',
		component: () => import('../views/customized_goods/table.vue')
	},
	{
		path: '/customized_goods/view',
		name: 'customized_goods_view',
		component: () => import('../views/customized_goods/view.vue')
	},
	// 我要定制路由
	{
		path: '/i_want_to_customize/table',
		name: 'i_want_to_customize_table',
		component: () => import('../views/i_want_to_customize/table.vue')
	},
	{
		path: '/i_want_to_customize/view',
		name: 'i_want_to_customize_view',
		component: () => import('../views/i_want_to_customize/view.vue')
	},
	// 分类信息路由
	{
		path: '/classification_information/table',
		name: 'classification_information_table',
		component: () => import('../views/classification_information/table.vue')
	},
	{
		path: '/classification_information/view',
		name: 'classification_information_view',
		component: () => import('../views/classification_information/view.vue')
	},
	// 网站公告路由
	{
		path: '/website_announcement/table',
		name: 'website_announcement_table',
		component: () => import('../views/website_announcement/table.vue')
	},
	{
		path: '/website_announcement/view',
		name: 'website_announcement_view',
		component: () => import('../views/website_announcement/view.vue')
	},
	// 热卖图书路由
	{
		path: '/hot_books/table',
		name: 'hot_books_table',
		component: () => import('../views/hot_books/table.vue')
	},
	{
		path: '/hot_books/view',
		name: 'hot_books_view',
		component: () => import('../views/hot_books/view.vue')
	},

	// 用户路由
	{
		path: '/user/table',
		name: 'user_table',
		component: () => import('../views/user/table.vue'),
		meta: {
			index: 0,
			title: '用户列表'
		}
	},
	{
		path: '/user/view',
		name: 'user_view',
		component: () => import('../views/user/view.vue'),
		meta: {
			index: 0,
			title: '用户详情'
		}
	},
	{
		path: '/user/info',
		name: 'user_info',
		component: () => import('../views/user/info.vue'),
		meta: {
			index: 0,
			title: '个人信息'
		}
	},
	// 用户组路由
	{
		path: '/user_group/table',
		name: 'user_group_table',
		component: () => import('../views/user_group/table.vue'),
		meta: {
			index: 0,
			title: '用户组列表'
		}
	},
	{
		path: '/user_group/view',
		name: 'user_group_view',
		component: () => import('../views/user_group/view.vue'),
		meta: {
			index: 0,
			title: '用户组详情'
		}
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

router.beforeEach((to, from, next) => {
	let token = to.query.token;
	if (token){
		$.db.set("token",token,120);
	}
	next();
})

router.afterEach((to, from, next) => {
	let title = "测试单-admin";
	document.title = title;
})

export default router
