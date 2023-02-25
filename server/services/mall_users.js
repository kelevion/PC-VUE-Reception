var Service = require('../core/service.js');

/**
 * 商城用户服务
 */
class Mall_users extends Service {
	/**
	 * 构造函数
	 * @param {Object} config 配置参数
	 */
	constructor(config) {
		// 传参给父类构造函数
		super(Object.assign({
			// 操作的表
			table: "mall_users",
			// 分页大小
			size: 1
		}, config));
	}
}

module.exports = {
	Mall_users
};
