var Service = require('../core/service.js');

/**
 * 商品类型
 */
class Goods_type extends Service {
	/**
	 * 构造函数
	 * @param {Object} config 配置参数
	 */
	constructor(config) {
		// 传参给父类构造函数
		super(Object.assign({
			// 操作的表
			table: "goods_type",
			// 分页大小
			size: 10
		}, config));
	}
}

module.exports = {
	Goods_type
};
