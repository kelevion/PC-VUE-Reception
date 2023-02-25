var Controller = require('../core/controller.js');

/**
 * 订单
 */
class Order extends Controller {
	/**
	 * 构造函数
	 * @param {Object} config 配置参数
	 */
	constructor(config) {
		// 传参给父类构造函数
		super(Object.assign({
			// 选择的模板那路径模板
			tpl: './order/',
			// 选择的服务
			service: 'order',
			// 注册get API路由
			get_api: ["get_business_order_list"]
		}, config));
	}
}

/**
 * 列表页面处理
 * @param {Object} ctx http请求上下文
 * @return {Object} 返回html页面
 */
Order.prototype.get_business_order_list = async function(ctx) {
	var query = ctx.request.query;
	var sql = "SELECT t1.*  FROM `order` t1 LEFT JOIN goods t2 ON t1.goods_id = t2.goods_id  WHERE t2.user_id = "+ query['user_id'];
	var countSql = "SELECT count(t1.order_id) FROM `order` t1 LEFT JOIN goods t2 ON t1.goods_id = t2.goods_id  WHERE t2.user_id = "+ query['user_id'];
	if(ctx.request.url.indexOf("order_number") != -1){
		sql = sql + " and t1.order_number like '%"+query["order_number"]+"%'";
		countSql = countSql + " and t1.order_number like '%"+query["order_number"]+"%'";
	}
	if(ctx.request.url.indexOf("title") != -1){
		sql = sql + " and t1.title like '%"+query["title"]+"%'";
		countSql = countSql + " and t1.title like '%"+query["title"]+"%'";
	}
	if(ctx.request.url.indexOf("contact_name") != -1){
		sql = sql + " and t1.contact_name like '%"+query["contact_name"]+"%'";
		countSql = countSql + " and t1.contact_name like '%"+query["contact_name"]+"%'";
	}
	if(ctx.request.url.indexOf("state") != -1){
		sql = sql + " and t1.state = '"+query["state"]+"'";
		countSql = countSql + " and t1.state = '"+query["state"]+"'";
	}
	sql = sql + " limit "+(query['page']-1)*query['size']+" , "+query['size'];
	var list = await $.mysql.run(sql);
	var count = await $.mysql.run(countSql);
	
	return {
		result: {
			list,
			count
		}
	};
}

/**
 * 列表页面
 * @param {Object} ctx http请求上下文
 * @return {Object} 返回html页面
 */
Order.prototype.list = async function(ctx) {
	var query = ctx.request.query;
	var {
		field,
		page,
		size
	} = query;
	delete query.field;
	delete query.page;
	delete query.size;
	var list = await this.service.get_list(
		query,
		Object.assign({}, this.config, {
			field,
			page,
			size,
		})
	);
	var dict = {};
	for (var i = 0; i < list.length; i++) {
		var o = list[i];
		if (!dict[o.order_number]) {
			dict[o.order_number] = [];
		}
		dict[o.order_number].push(o);
	}
	var model = await this.model(ctx, {
		list,
		dict
	});
	return await ctx.render(this.config.tpl + "list", model);
};

module.exports = Order;
