var Service = require('../core/service.js');

/**
 * 购物车
 */
class Cart extends Service {
	/**
	 * 构造函数
	 * @param {Object} config 配置参数
	 */
	constructor(config) {
		// 传参给父类构造函数
		super(Object.assign({
			// 操作的表
			table: "cart",
			// 分页大小
			size: 10
		}, config));
	}
}

module.exports = {
	Cart
};
