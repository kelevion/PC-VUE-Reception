var Service = require('../core/service.js');

/**
 * 热卖图书服务
 */
class Hot_books extends Service {
	/**
	 * 构造函数
	 * @param {Object} config 配置参数
	 */
	constructor(config) {
		// 传参给父类构造函数
		super(Object.assign({
			// 操作的表
			table: "hot_books",
			// 分页大小
			size: 1
		}, config));
	}
}

module.exports = {
	Hot_books
};
