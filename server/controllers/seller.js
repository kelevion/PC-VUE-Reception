var Controller = require('../core/controller.js');

/**
 * 卖家控制器
 */
class Seller extends Controller {
	/**
	 * 构造函数
	 * @param {Object} config 配置参数
	 */
	constructor(config) {
		// 传参给父类构造函数
		super(Object.assign({
			// 选择的模板那路径模板
			tpl: './seller/',
			// 选择的服务
			service: 'seller',
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
Seller.prototype.add = async function(ctx) {
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


module.exports = Seller;
