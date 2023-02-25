var Service = require('../core/service.js');

/**
 * 我要定制服务
 */
class I_want_to_customize extends Service {
	/**
	 * 构造函数
	 * @param {Object} config 配置参数
	 */
	constructor(config) {
		// 传参给父类构造函数
		super(Object.assign({
			// 操作的表
			table: "i_want_to_customize",
			// 分页大小
			size: 1
		}, config));
	}
}

module.exports = {
	I_want_to_customize
};
