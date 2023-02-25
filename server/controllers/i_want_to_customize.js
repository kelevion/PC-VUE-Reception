var Controller = require('../core/controller.js');

/**
 * 我要定制控制器
 */
class I_want_to_customize extends Controller {
	/**
	 * 构造函数
	 * @param {Object} config 配置参数
	 */
	constructor(config) {
		// 传参给父类构造函数
		super(Object.assign({
			// 选择的模板那路径模板
			tpl: './i_want_to_customize/',
			// 选择的服务
			service: 'i_want_to_customize',
			// 互动
			interact: [undefined],
		}, config));
	}
}
/**
 * 重写增加方法
 * @param {Object} ctx
 * @return {Object} 返回json-rpc格式结果
 */
I_want_to_customize.prototype.add = async function(ctx) {
	var result = await this.service.add(ctx.request.body, this.config);
	
	if (this.service.error) {
		return {
			error: this.service.error,
		};
	}
	var max = await $.services["i_want_to_customize"].get_list({}, {
		orderby: "`i_want_to_customize_id` desc"
	});
	max = max[0]['i_want_to_customize_id'];
	var select = await this.service.run("SELECT count(*) count FROM `customized_goods` INNER JOIN `i_want_to_customize` ON customized_goods.trade_name=i_want_to_customize.trade_name WHERE customized_goods.stock < i_want_to_customize.purchase_quantity AND i_want_to_customize.i_want_to_customize_id=".replace("&#60;","<")+max);
	if(select[0]['count'] > 0){
		var sql = "delete from "+"i_want_to_customize"+" WHERE "+"i_want_to_customize_id"+" =" + max;
		select = await this.service.run(sql);
		return {
			error: {message: "库存不足！"},
		};
	}
	await this.service.run("UPDATE `customized_goods` INNER JOIN `i_want_to_customize` ON customized_goods.trade_name=i_want_to_customize.trade_name SET customized_goods.stock= customized_goods.stock - i_want_to_customize.purchase_quantity WHERE i_want_to_customize.i_want_to_customize_id=" + max);
	
	return {
		result,
	};
}


module.exports = I_want_to_customize;
