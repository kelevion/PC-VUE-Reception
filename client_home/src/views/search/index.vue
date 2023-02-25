<template>
  <div class="page_search">
	<div class="warp">
	  <div class="container">
		<div class="row">
		  <div class="col-12">
			<div class="card_result_search">
			  <div class="title">搜索结果</div>
				<!-- 商品搜索结果 -->
			  <list_result_search
				:list="result_goods"
				title="商城中心"
				source_table="goods"
			  ></list_result_search>

				<!--{if filter.article}-->
				<!-- 文章搜索结果 -->
			  <list_result_search
				:list="result_article"
				title="商城资讯"
				source_table="article"
			  ></list_result_search>
				<!--{/if}-->

				<!-- 论坛搜索结果 -->
			  <list_result_search
				:list="result_forum"
				title="交流论坛"
				source_table="forum"
			  ></list_result_search>

						  <list_result_search
				v-if="$check_action('/mall_users/list', 'get')"
				:list="result_mall_users_user_number"
				title="商城用户用户编号"
				source_table="mall_users"
			  ></list_result_search>
								  <list_result_search
				v-if="$check_action('/mall_users/list', 'get')"
				:list="result_mall_users_full_name"
				title="商城用户姓名"
				source_table="mall_users"
			  ></list_result_search>
														  <list_result_search
				v-if="$check_action('/mall_users/list', 'get')"
				:list="result_mall_users_category"
				title="商城用户类别"
				source_table="mall_users"
			  ></list_result_search>
															  <list_result_search
				v-if="$check_action('/seller/list', 'get')"
				:list="result_seller_seller_account_number"
				title="卖家卖家账号"
				source_table="seller"
			  ></list_result_search>
								  <list_result_search
				v-if="$check_action('/seller/list', 'get')"
				:list="result_seller_store_name"
				title="卖家店铺名称"
				source_table="seller"
			  ></list_result_search>
									  <list_result_search
				v-if="$check_action('/mall_center/list', 'get')"
				:list="result_mall_center_brand"
				title="商城中心品牌"
				source_table="mall_center"
			  ></list_result_search>
												  <list_result_search
				v-if="$check_action('/customized_goods/list', 'get')"
				:list="result_customized_goods_trade_name"
				title="定制商品商品名称"
				source_table="customized_goods"
			  ></list_result_search>
																													  <list_result_search
				v-if="$check_action('/customized_goods/list', 'get')"
				:list="result_customized_goods_commodity_category"
				title="定制商品商品类别"
				source_table="customized_goods"
			  ></list_result_search>
																				  <list_result_search
				v-if="$check_action('/customized_goods/list', 'get')"
				:list="result_customized_goods_special_price_or_not"
				title="定制商品是否特价"
				source_table="customized_goods"
			  ></list_result_search>
																																																  <list_result_search
				v-if="$check_action('/i_want_to_customize/list', 'get')"
				:list="result_i_want_to_customize_custom_category"
				title="我要定制定制类别"
				source_table="i_want_to_customize"
			  ></list_result_search>
															  <list_result_search
				v-if="$check_action('/classification_information/list', 'get')"
				:list="result_classification_information_commodity_category"
				title="分类信息商品类别"
				source_table="classification_information"
			  ></list_result_search>
								  <list_result_search
				v-if="$check_action('/classification_information/list', 'get')"
				:list="result_classification_information_category"
				title="分类信息类别"
				source_table="classification_information"
			  ></list_result_search>
								  <list_result_search
				v-if="$check_action('/classification_information/list', 'get')"
				:list="result_classification_information_custom_category"
				title="分类信息定制类别"
				source_table="classification_information"
			  ></list_result_search>
									  <list_result_search
				v-if="$check_action('/website_announcement/list', 'get')"
				:list="result_website_announcement_title"
				title="网站公告标题"
				source_table="website_announcement"
			  ></list_result_search>
								  <list_result_search
				v-if="$check_action('/website_announcement/list', 'get')"
				:list="result_website_announcement_publisher"
				title="网站公告发布人"
				source_table="website_announcement"
			  ></list_result_search>
																					  <list_result_search
				v-if="$check_action('/hot_books/list', 'get')"
				:list="result_hot_books_book_name"
				title="热卖图书图书名称"
				source_table="hot_books"
			  ></list_result_search>
											  <list_result_search
				v-if="$check_action('/hot_books/list', 'get')"
				:list="result_hot_books_author"
				title="热卖图书作者"
				source_table="hot_books"
			  ></list_result_search>
								  <list_result_search
				v-if="$check_action('/hot_books/list', 'get')"
				:list="result_hot_books_commodity_category"
				title="热卖图书商品类别"
				source_table="hot_books"
			  ></list_result_search>
															</div>
		  </div>
		</div>
	  </div>
	</div>
  </div>
</template>

<script>
import mixin from "../../mixins/page.js";
import list_result_search from "../../components/diy/list_result_search.vue";

export default {
  mixins: [mixin],
  data() {
	return {
	  "query": {
		word: "",
	  },
	  "result_goods": [],
	  "result_article": [],
	  "result_forum": [],
						"result_mall_users_user_number":[],
								"result_mall_users_full_name":[],
														"result_mall_users_category":[],
															"result_seller_seller_account_number":[],
								"result_seller_store_name":[],
									"result_mall_center_brand":[],
												"result_customized_goods_trade_name":[],
																													"result_customized_goods_commodity_category":[],
																				"result_customized_goods_special_price_or_not":[],
																																																"result_i_want_to_customize_custom_category":[],
															"result_classification_information_commodity_category":[],
								"result_classification_information_category":[],
								"result_classification_information_custom_category":[],
									"result_website_announcement_title":[],
								"result_website_announcement_publisher":[],
																					"result_hot_books_book_name":[],
											"result_hot_books_author":[],
								"result_hot_books_commodity_category":[],
													};
  },
  methods: {
	/**
	 * 获取${fmodel.filter.cart_name}
	 */
	get_goods() {
	  this.$get("~/api/goods/get_list?like=0", { page: 1, size: 10, title: this.query.word }, (json) => {
		if (json.result) {
		  this.result_goods = json.result.list;
		}
	  });
	},
	/**
	 * 获取文章
	 */
	get_article() {
	  this.$get("~/api/article/get_list?like=0", { page: 1, size: 10, title: this.query.word }, (json) => {
		if (json.result) {
		  this.result_article = json.result.list;
		}
	  });
	},
	/**
	 * 获取交流论坛
	 */
	get_forum() {
	  this.$get("~/api/forum/get_list?like=0", { page: 1, size: 10, title: this.query.word }, (json) => {
		if (json.result) {
		  this.result_forum = json.result.list;
		}
	  });
	},

				/**
	 * 获取user_number
	 */
	get_mall_users_user_number(){
		this.$get("~/api/mall_users/get_list?like=0", { page: 1, size: 10, "user_number": this.query.word }, (json) => {
		  if (json.result) {
			var result_mall_users_user_number = json.result.list;
			result_mall_users_user_number.map(o => o.title = o['user_number'])
	  			this.result_mall_users_user_number = result_mall_users_user_number
		 	}
		});
	},
						/**
	 * 获取full_name
	 */
	get_mall_users_full_name(){
		this.$get("~/api/mall_users/get_list?like=0", { page: 1, size: 10, "full_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_mall_users_full_name = json.result.list;
			result_mall_users_full_name.map(o => o.title = o['full_name'])
	  			this.result_mall_users_full_name = result_mall_users_full_name
		 	}
		});
	},
												/**
	 * 获取category
	 */
	get_mall_users_category(){
		this.$get("~/api/mall_users/get_list?like=0", { page: 1, size: 10, "category": this.query.word }, (json) => {
		  if (json.result) {
			var result_mall_users_category = json.result.list;
			result_mall_users_category.map(o => o.title = o['category'])
	  			this.result_mall_users_category = result_mall_users_category
		 	}
		});
	},
													/**
	 * 获取seller_account_number
	 */
	get_seller_seller_account_number(){
		this.$get("~/api/seller/get_list?like=0", { page: 1, size: 10, "seller_account_number": this.query.word }, (json) => {
		  if (json.result) {
			var result_seller_seller_account_number = json.result.list;
			result_seller_seller_account_number.map(o => o.title = o['seller_account_number'])
	  			this.result_seller_seller_account_number = result_seller_seller_account_number
		 	}
		});
	},
						/**
	 * 获取store_name
	 */
	get_seller_store_name(){
		this.$get("~/api/seller/get_list?like=0", { page: 1, size: 10, "store_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_seller_store_name = json.result.list;
			result_seller_store_name.map(o => o.title = o['store_name'])
	  			this.result_seller_store_name = result_seller_store_name
		 	}
		});
	},
							/**
	 * 获取brand
	 */
	get_mall_center_brand(){
		this.$get("~/api/mall_center/get_list?like=0", { page: 1, size: 10, "brand": this.query.word }, (json) => {
		  if (json.result) {
			var result_mall_center_brand = json.result.list;
			result_mall_center_brand.map(o => o.title = o['brand'])
	  			this.result_mall_center_brand = result_mall_center_brand
		 	}
		});
	},
										/**
	 * 获取trade_name
	 */
	get_customized_goods_trade_name(){
		this.$get("~/api/customized_goods/get_list?like=0", { page: 1, size: 10, "trade_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_customized_goods_trade_name = json.result.list;
			result_customized_goods_trade_name.map(o => o.title = o['trade_name'])
	  			this.result_customized_goods_trade_name = result_customized_goods_trade_name
		 	}
		});
	},
																											/**
	 * 获取commodity_category
	 */
	get_customized_goods_commodity_category(){
		this.$get("~/api/customized_goods/get_list?like=0", { page: 1, size: 10, "commodity_category": this.query.word }, (json) => {
		  if (json.result) {
			var result_customized_goods_commodity_category = json.result.list;
			result_customized_goods_commodity_category.map(o => o.title = o['commodity_category'])
	  			this.result_customized_goods_commodity_category = result_customized_goods_commodity_category
		 	}
		});
	},
																		/**
	 * 获取special_price_or_not
	 */
	get_customized_goods_special_price_or_not(){
		this.$get("~/api/customized_goods/get_list?like=0", { page: 1, size: 10, "special_price_or_not": this.query.word }, (json) => {
		  if (json.result) {
			var result_customized_goods_special_price_or_not = json.result.list;
			result_customized_goods_special_price_or_not.map(o => o.title = o['special_price_or_not'])
	  			this.result_customized_goods_special_price_or_not = result_customized_goods_special_price_or_not
		 	}
		});
	},
																																														/**
	 * 获取custom_category
	 */
	get_i_want_to_customize_custom_category(){
		this.$get("~/api/i_want_to_customize/get_list?like=0", { page: 1, size: 10, "custom_category": this.query.word }, (json) => {
		  if (json.result) {
			var result_i_want_to_customize_custom_category = json.result.list;
			result_i_want_to_customize_custom_category.map(o => o.title = o['custom_category'])
	  			this.result_i_want_to_customize_custom_category = result_i_want_to_customize_custom_category
		 	}
		});
	},
													/**
	 * 获取commodity_category
	 */
	get_classification_information_commodity_category(){
		this.$get("~/api/classification_information/get_list?like=0", { page: 1, size: 10, "commodity_category": this.query.word }, (json) => {
		  if (json.result) {
			var result_classification_information_commodity_category = json.result.list;
			result_classification_information_commodity_category.map(o => o.title = o['commodity_category'])
	  			this.result_classification_information_commodity_category = result_classification_information_commodity_category
		 	}
		});
	},
						/**
	 * 获取category
	 */
	get_classification_information_category(){
		this.$get("~/api/classification_information/get_list?like=0", { page: 1, size: 10, "category": this.query.word }, (json) => {
		  if (json.result) {
			var result_classification_information_category = json.result.list;
			result_classification_information_category.map(o => o.title = o['category'])
	  			this.result_classification_information_category = result_classification_information_category
		 	}
		});
	},
						/**
	 * 获取custom_category
	 */
	get_classification_information_custom_category(){
		this.$get("~/api/classification_information/get_list?like=0", { page: 1, size: 10, "custom_category": this.query.word }, (json) => {
		  if (json.result) {
			var result_classification_information_custom_category = json.result.list;
			result_classification_information_custom_category.map(o => o.title = o['custom_category'])
	  			this.result_classification_information_custom_category = result_classification_information_custom_category
		 	}
		});
	},
							/**
	 * 获取title
	 */
	get_website_announcement_title(){
		this.$get("~/api/website_announcement/get_list?like=0", { page: 1, size: 10, "title": this.query.word }, (json) => {
		  if (json.result) {
			var result_website_announcement_title = json.result.list;
			result_website_announcement_title.map(o => o.title = o['title'])
	  			this.result_website_announcement_title = result_website_announcement_title
		 	}
		});
	},
						/**
	 * 获取publisher
	 */
	get_website_announcement_publisher(){
		this.$get("~/api/website_announcement/get_list?like=0", { page: 1, size: 10, "publisher": this.query.word }, (json) => {
		  if (json.result) {
			var result_website_announcement_publisher = json.result.list;
			result_website_announcement_publisher.map(o => o.title = o['publisher'])
	  			this.result_website_announcement_publisher = result_website_announcement_publisher
		 	}
		});
	},
																			/**
	 * 获取book_name
	 */
	get_hot_books_book_name(){
		this.$get("~/api/hot_books/get_list?like=0", { page: 1, size: 10, "book_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_hot_books_book_name = json.result.list;
			result_hot_books_book_name.map(o => o.title = o['book_name'])
	  			this.result_hot_books_book_name = result_hot_books_book_name
		 	}
		});
	},
									/**
	 * 获取author
	 */
	get_hot_books_author(){
		this.$get("~/api/hot_books/get_list?like=0", { page: 1, size: 10, "author": this.query.word }, (json) => {
		  if (json.result) {
			var result_hot_books_author = json.result.list;
			result_hot_books_author.map(o => o.title = o['author'])
	  			this.result_hot_books_author = result_hot_books_author
		 	}
		});
	},
						/**
	 * 获取commodity_category
	 */
	get_hot_books_commodity_category(){
		this.$get("~/api/hot_books/get_list?like=0", { page: 1, size: 10, "commodity_category": this.query.word }, (json) => {
		  if (json.result) {
			var result_hot_books_commodity_category = json.result.list;
			result_hot_books_commodity_category.map(o => o.title = o['commodity_category'])
	  			this.result_hot_books_commodity_category = result_hot_books_commodity_category
		 	}
		});
	},
												
  },
  components: { list_result_search },
	created(){
    this.query.word = this.$route.query.word || "";
  },
  mounted() {
	this.get_goods();
	this.get_article();
	this.get_forum();
					this.get_mall_users_user_number();
							this.get_mall_users_full_name();
													this.get_mall_users_category();
														this.get_seller_seller_account_number();
							this.get_seller_store_name();
								this.get_mall_center_brand();
											this.get_customized_goods_trade_name();
																												this.get_customized_goods_commodity_category();
																			this.get_customized_goods_special_price_or_not();
																																															this.get_i_want_to_customize_custom_category();
														this.get_classification_information_commodity_category();
							this.get_classification_information_category();
							this.get_classification_information_custom_category();
								this.get_website_announcement_title();
							this.get_website_announcement_publisher();
																				this.get_hot_books_book_name();
										this.get_hot_books_author();
							this.get_hot_books_commodity_category();
												  },
  watch: {
	$route() {
	  $.push(this.query, this.$route.query);
	  this.get_goods();
	  this.get_article();
	  this.get_forum();
				  this.get_mall_users_user_number();
						  this.get_mall_users_full_name();
												  this.get_mall_users_category();
													  this.get_seller_seller_account_number();
						  this.get_seller_store_name();
							  this.get_mall_center_brand();
										  this.get_customized_goods_trade_name();
																											  this.get_customized_goods_commodity_category();
																		  this.get_customized_goods_special_price_or_not();
																																														  this.get_i_want_to_customize_custom_category();
													  this.get_classification_information_commodity_category();
						  this.get_classification_information_category();
						  this.get_classification_information_custom_category();
							  this.get_website_announcement_title();
						  this.get_website_announcement_publisher();
																			  this.get_hot_books_book_name();
									  this.get_hot_books_author();
						  this.get_hot_books_commodity_category();
													},
  },
};
</script>

<style scoped>
.card_search {
  text-align: center;
}
.card_result_search>.title {
  text-align: center;
  padding: 10px 0;
}
</style>
