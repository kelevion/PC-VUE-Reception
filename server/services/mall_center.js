var Service = require('../core/service.js');

/**
 * 商城中心服务
 */
class Mall_center extends Service {
	/**
	 * 构造函数
	 * @param {Object} config 配置参数
	 */
	constructor(config) {
		// 传参给父类构造函数
		super(Object.assign({
			// 操作的表
			table: "mall_center",
			// 分页大小
			size: 1
		}, config));
	}
}

module.exports = {
	Mall_center
};
