var Service = require('../core/service.js');

/**
 * 定制商品服务
 */
class Customized_goods extends Service {
	/**
	 * 构造函数
	 * @param {Object} config 配置参数
	 */
	constructor(config) {
		// 传参给父类构造函数
		super(Object.assign({
			// 操作的表
			table: "customized_goods",
			// 分页大小
			size: 1
		}, config));
	}
}

module.exports = {
	Customized_goods
};
