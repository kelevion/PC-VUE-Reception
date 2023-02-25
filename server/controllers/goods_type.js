var Controller = require('../core/controller.js');

/**
 * 商品类型
 */
class Goods_type extends Controller {
	/**
	 * 构造函数
	 * @param {Object} config 配置参数
	 */
	constructor(config) {
		// 传参给父类构造函数
		super(Object.assign({
			// 选择的模板那路径模板
			tpl: './goods_type/',
			// 选择的服务
			service: 'goods_type'
		}, config));
	}
}

module.exports = Goods_type;