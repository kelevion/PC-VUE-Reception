var Service = require('../core/service.js');

/**
 * 网站公告服务
 */
class Website_announcement extends Service {
	/**
	 * 构造函数
	 * @param {Object} config 配置参数
	 */
	constructor(config) {
		// 传参给父类构造函数
		super(Object.assign({
			// 操作的表
			table: "website_announcement",
			// 分页大小
			size: 1
		}, config));
	}
}

module.exports = {
	Website_announcement
};
