var Controller = require('../core/controller.js');

/**
 * 热卖图书控制器
 */
class Hot_books extends Controller {
	/**
	 * 构造函数
	 * @param {Object} config 配置参数
	 */
	constructor(config) {
		// 传参给父类构造函数
		super(Object.assign({
			// 选择的模板那路径模板
			tpl: './hot_books/',
			// 选择的服务
			service: 'hot_books',
			// 互动
			interact: [undefined],
			// 注册get API路由
			get_api: ["get_hits_list"],
		}, config));
	}
}
/**
 * 重写增加方法
 * @param {Object} ctx
 * @return {Object} 返回json-rpc格式结果
 */
Hot_books.prototype.add = async function(ctx) {
	var result = await this.service.add(ctx.request.body, this.config);
	
	if (this.service.error) {
		return {
			error: this.service.error,
		};
	}
	
	return {
		result,
	};
}

/**
 * 分类推荐
 * @param {Object} ctx
 * @return {Object} 返回json-rpc格式结果
 */
Hot_books.prototype.get_hits_list = async function(ctx) {
	var query = ctx.request.query;
	if(ctx.request.url.indexOf("user_id") != -1){
		if(query['user_id'] == null || query['user_id'] == ''){
			return this.get_list(ctx);
		}else{
			var sql = "SELECT * FROM "+"hot_books"+" WHERE "+"commodity_category"+" = (";
			sql += "SELECT "+"commodity_category"+" FROM "+"hot_books"+" WHERE "+"hot_books_id"+" = (";
			sql += "SELECT t1.source_id FROM ( SELECT COUNT( hits_id ) AS hits_count, source_id FROM hits WHERE source_table = '"+"hot_books";
			sql += "' AND user_id = "+query['user_id']+" GROUP BY source_id ) t1 ORDER BY hits_count DESC LIMIT 0,1)) ORDER BY hits DESC LIMIT 0,4";
			var list = await $.mysql.run(sql);
			list = Array(list)[0];
			var count = list.length;
			return {
				result: {
					list,
					count
				}
			}
		}
	}else{
		return this.get_list(ctx);
	}
}

module.exports = Hot_books;
