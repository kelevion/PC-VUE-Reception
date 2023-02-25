var Service = require('../core/service.js');

/**
 * 分类信息服务
 */
class Classification_information extends Service {
	/**
	 * 构造函数
	 * @param {Object} config 配置参数
	 */
	constructor(config) {
		// 传参给父类构造函数
		super(Object.assign({
			// 操作的表
			table: "classification_information",
			// 分页大小
			size: 1
		}, config));
	}
}

module.exports = {
	Classification_information
};
