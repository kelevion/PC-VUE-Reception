<template>
	<el-main class="bg edit_wrap">
		<el-form ref="form" :model="form" status-icon label-width="120px" v-if="is_view()">

							<el-col v-if="user_group === '管理员' || $check_field('get','trade_name') || $check_field('add','trade_name') || $check_field('set','trade_name')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="商品名称" prop="trade_name">
												<el-input id="trade_name" v-model="form['trade_name']" placeholder="请输入商品名称"
							  v-if="user_group === '管理员' || (form['customized_goods_id'] && $check_field('set','trade_name')) || (!form['customized_goods_id'] && $check_field('add','trade_name'))" :disabled="disabledObj['trade_name_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','trade_name')">{{form['trade_name']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','stock') || $check_field('add','stock') || $check_field('set','stock')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="库存" prop="stock">
								<el-input-number id="stock" v-model.number="form['stock']"
						v-if="user_group === '管理员' || (form['customized_goods_id'] && $check_field('set','stock')) || (!form['customized_goods_id'] && $check_field('add','stock'))" :disabled="disabledObj['stock_isDisabled']"></el-input-number>
					<div v-else-if="$check_field('get','stock')">{{form['stock']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','enclosure') || $check_field('add','enclosure') || $check_field('set','enclosure')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="附件" prop="enclosure">
												<div v-if="disabledObj['enclosure_isDisabled']">
						<div v-if="$check_field('get','enclosure')">
							<el-button type="primary" @click="$download($fullUrl(form['enclosure']),form['enclosure'])">下载<i
									class="el-icon-download el-icon--right"></i></el-button>
						</div>
					</div>
					<div v-else>
						<el-upload v-if="user_group === '管理员' || (form['customized_goods_id'] && $check_field('set','enclosure')) || (!form['customized_goods_id'] && $check_field('add','enclosure'))" class="upload-demo" drag
								   action="" style="max-width: 300px;width: 100%;" :http-request="upload_enclosure" :limit="1" accept="">
							<i class="el-icon-upload"></i>
							<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
						</el-upload>
						<div v-else-if="$check_field('get','enclosure')">
							<el-button type="primary" @click="$download($fullUrl(form['enclosure']),form['enclosure'])">下载<i
									class="el-icon-download el-icon--right"></i></el-button>
						</div>
					</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','picture') || $check_field('add','picture') || $check_field('set','picture')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="图片" prop="picture">
								<el-upload :disabled="disabledObj['picture_isDisabled']" id="picture" class="avatar-uploader" drag
						accept="image/gif, image/jpeg, image/png, image/jpg" action="" :http-request="upload_picture"
						:show-file-list="false" v-if="user_group === '管理员' || (form['customized_goods_id'] && $check_field('set','picture')) || (!form['customized_goods_id'] && $check_field('add','picture'))">
						<img v-if="form['picture']" :src="$fullUrl(form['picture'])" class="avatar">
						<i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
					<el-image v-else-if="$check_field('get','picture')" style="width: 100px; height: 100px"
						:src="$fullUrl(form['picture'])" :preview-src-list="[$fullUrl(form['picture'])]">
						<div slot="error" class="image-slot">
							<img src="../../../public/img/error.png" style="width: 90px; height: 90px" />
						</div>
					</el-image>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','video') || $check_field('add','video') || $check_field('set','video')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="视频" prop="video">
												<el-upload v-if="user_group === '管理员' || (form['customized_goods_id'] && $check_field('set','video')) || (!form['customized_goods_id'] && $check_field('add','video'))" class="upload-demo" drag
						action="" style="max-width: 300px;width: 100%;" :http-request="upload_video" :limit="1" accept="video/ogg,video/mp4,video/webm">
						<i class="el-icon-upload"></i>
						<div class="el-upload__text">将视频拖到此处，或<em>点击上传</em></div>
					</el-upload>
					<div v-else-if="$check_field('get','video')">
						<el-button type="primary" @click="download(form['video'])">下载<i
								class="el-icon-download el-icon--right"></i></el-button>
					</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','audio_frequency') || $check_field('add','audio_frequency') || $check_field('set','audio_frequency')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="音频" prop="audio_frequency">
												<el-upload v-if="user_group === '管理员' || (form['customized_goods_id'] && $check_field('set','audio_frequency')) || (!form['customized_goods_id'] && $check_field('add','audio_frequency'))" class="upload-demo" drag
						action="" style="max-width: 300px;width: 100%;" :http-request="upload_audio_frequency" :limit="1" accept="audio/ogg,audio/mp3,audio/wav">
						<i class="el-icon-upload"></i>
						<div class="el-upload__text">将音频拖到此处，或<em>点击上传</em></div>
					</el-upload>
					<div v-else-if="$check_field('get','audio_frequency')">
						<el-button type="primary" @click="download(form['audio_frequency'])">下载<i
								class="el-icon-download el-icon--right"></i></el-button>
					</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','remarks') || $check_field('add','remarks') || $check_field('set','remarks')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="备注" prop="remarks">
								<el-input type="textarea" id="remarks" v-model="form['remarks']" placeholder="请输入备注"
						v-if="user_group === '管理员' || (form['customized_goods_id'] && $check_field('set','remarks')) || (!form['customized_goods_id'] && $check_field('add','remarks'))" :disabled="disabledObj['remarks_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','remarks')">{{form['remarks']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','seller_account_number') || $check_field('add','seller_account_number') || $check_field('set','seller_account_number')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="卖家账号" prop="seller_account_number">
																		<div v-if="user_group !== '管理员'">
							{{ get_user_session_seller_account_number(form['seller_account_number']) }}
							<!--<el-input id="business_name" v-model="form['seller_account_number']" placeholder="请输入卖家账号"-->
							<!--v-if="user_group === '管理员' || (form['customized_goods_id'] && $check_field('set','seller_account_number')) || (!form['customized_goods_id'] && $check_field('add','seller_account_number'))" :disabled="disabledObj['seller_account_number_isDisabled']"></el-input>-->
							<!--<div v-else-if="$check_field('get','seller_account_number')">{{form['seller_account_number']}}</div>-->
							<el-select v-if="user_group === '管理员' || (form['customized_goods_id'] && $check_field('set','seller_account_number')) || (!form['customized_goods_id'] && $check_field('add','seller_account_number'))" id="seller_account_number" v-model="form['seller_account_number']" :disabled="disabledObj['seller_account_number_isDisabled']">
								<el-option v-for="o in list_user_seller_account_number" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
										   :value="o['user_id']">
								</el-option>
							</el-select>
							<el-select v-else-if="$check_field('get','seller_account_number')" id="seller_account_number" v-model="form['seller_account_number']" :disabled="true">
								<el-option v-for="o in list_user_seller_account_number" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
										   :value="o['user_id']">
								</el-option>
							</el-select>
						</div>
						<el-select v-else id="seller_account_number" v-model="form['seller_account_number']" :disabled="disabledObj['seller_account_number_isDisabled']">
							<el-option v-for="o in list_user_seller_account_number" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
									   :value="o['user_id']">
							</el-option>
						</el-select>
																</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','commodity_category') || $check_field('add','commodity_category') || $check_field('set','commodity_category')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="商品类别" prop="commodity_category">
								<el-select id="commodity_category" v-model="form['commodity_category']"
						v-if="user_group === '管理员' || (form['customized_goods_id'] && $check_field('set','commodity_category')) || (!form['customized_goods_id'] && $check_field('add','commodity_category'))">
						<el-option v-for="o in list_commodity_category" :key="o['commodity_category']" :label="o['commodity_category']"
							:value="o['commodity_category']">
						</el-option>
					</el-select>
					<div v-else-if="$check_field('get','commodity_category')">{{form['commodity_category']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','price') || $check_field('add','price') || $check_field('set','price')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="价格" prop="price">
								<el-input-number id="price" v-model.number="form['price']"
						v-if="user_group === '管理员' || (form['customized_goods_id'] && $check_field('set','price')) || (!form['customized_goods_id'] && $check_field('add','price'))" :disabled="disabledObj['price_isDisabled']"></el-input-number>
					<div v-else-if="$check_field('get','price')">{{form['price']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','details') || $check_field('add','details') || $check_field('set','details')" :xs="24" :sm="24" :lg="24" class="el_form_editor_warp">
				<el-form-item label="详情" prop="details">
					<quill-editor v-model.number="form['details']"
						v-if="user_group === '管理员' || (form['customized_goods_id'] && $check_field('set','details')) || (!form['customized_goods_id'] && $check_field('add','details')) ">
					</quill-editor>
					<div v-else-if="$check_field('get','details')" v-html="form['details']"></div>
				</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','production_time') || $check_field('add','production_time') || $check_field('set','production_time')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="生产时间" prop="production_time">
								<el-date-picker :disabled="disabledObj['production_time_isDisabled']" v-if="user_group === '管理员' || (form['customized_goods_id'] && $check_field('set','production_time')) || (!form['customized_goods_id'] && $check_field('add','production_time'))" id="production_time"
						v-model="form['production_time']" type="datetime" placeholder="选择日期时间">
					</el-date-picker>
					<div v-else-if="$check_field('get','production_time')">{{form['production_time']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','date') || $check_field('add','date') || $check_field('set','date')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="日期" prop="date">
								<el-date-picker :disabled="disabledObj['date_isDisabled']" v-if="user_group === '管理员' || (form['customized_goods_id'] && $check_field('set','date')) || (!form['customized_goods_id'] && $check_field('add','date'))" id="date"
						v-model="form['date']" type="date" placeholder="选择日期">
					</el-date-picker>
					<div v-else-if="$check_field('get','date')">{{form['date']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','special_price_or_not') || $check_field('add','special_price_or_not') || $check_field('set','special_price_or_not')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="是否特价" prop="special_price_or_not">
								<el-select id="special_price_or_not" v-model="form['special_price_or_not']"
						v-if="user_group === '管理员' || (form['customized_goods_id'] && $check_field('set','special_price_or_not')) || (!form['customized_goods_id'] && $check_field('add','special_price_or_not'))">
						<el-option v-for="o in list_special_price_or_not" :key="o" :label="o" :value="o">
						</el-option>
					</el-select>
					<div v-else-if="$check_field('get','special_price_or_not')">{{form['special_price_or_not']}}</div>
							</el-form-item>
			</el-col>
							<el-col :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="审核状态" prop="examine_state">
					<el-select id="examine_state" v-model="form['examine_state']"
						v-if="user_group === '管理员' || (form['examine_state'] && $check_examine()) || (!form['examine_state'] && $check_examine())">
						<el-option key="未审核" label="未审核" value="未审核"></el-option>
						<el-option key="已通过" label="已通过" value="已通过"></el-option>
						<el-option key="未通过" label="未通过" value="未通过"></el-option>
					</el-select>
					<div v-else>{{form["examine_state"]}}</div>
				</el-form-item>
			</el-col>
		
				<el-col :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="二维码图片" prop="qrcode_img">
					<el-upload :disabled="disabledObj['qrcode_img_isDisabled']" id="qrcode_img" class="avatar-uploader" drag
						accept="image/gif, image/jpeg, image/png, image/jpg" action="" :http-request="upload_qrcode"
						:show-file-list="false" v-if="user_group === '管理员' || (form['customized_goods_id'] && $check_field('set','qrcode_img')) || (!form['customized_goods_id'] && $check_field('add','qrcode_img'))">
						<img v-if="form['qrcode_img']" :src="$fullUrl(form['qrcode_img'])" class="avatar">
						<i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
					<el-image v-else-if="$check_field('get','qrcode_img')" style="width: 100px; height: 100px"
						:src="$fullUrl(form['qrcode_img'])" :preview-src-list="[$fullUrl(form['qrcode_img'])]">
						<div slot="error" class="image-slot">
							<img src="../../../public/img/error.png" style="width: 90px; height: 90px" />
						</div>
					</el-image>
				</el-form-item>
			</el-col>
			<el-col :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="二维码标题" prop="qrcode_title">
					<el-input id="qrcode_title" v-model="form['qrcode_title']" placeholder="请输入二维码标题"
							  v-if="user_group === '管理员' || (form['customized_goods_id'] && $check_field('set','qrcode_title')) || (!form['customized_goods_id'] && $check_field('add','qrcode_title'))" :disabled="disabledObj['qrcode_title_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','qrcode_title')">{{form['qrcode_title']}}</div>
				</el-form-item>
			</el-col>
	
				<el-col :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="计时器标题" prop="timer_title">
					<el-input id="timer_title" v-model="form['timer_title']" placeholder="请输入计时器标题"
							  v-if="user_group === '管理员' || $check_action('/customized_goods/view','set') || $check_action('/customized_goods/view','add')" :disabled="disabledObj['timer_title_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','timer_title')">{{form['timer_title']}}</div>
				</el-form-item>
			</el-col>
			<el-col :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="计时开始时间" prop="timing_start_time">
					<el-date-picker id="timing_start_time" v-model="form['timing_start_time']" placeholder="选择计时器开始时间"
						v-if="user_group === '管理员' || $check_action('/customized_goods/view','set') || $check_action('/customized_goods/view','add')" :disabled="disabledObj['timing_start_time_isDisabled']" type="datetime" >
					</el-date-picker>
					<div v-else-if="$check_field('get','timing_start_time')">{{form['timing_start_time']}}</div>
				</el-form-item>
			</el-col>
			<el-col :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="计时结束时间" prop="timing_end_time">
					<el-date-picker id="timing_end_time" v-model="form['timing_end_time']" placeholder="选择计时器开始时间"
						v-if="user_group === '管理员' || $check_action('/customized_goods/view','set') || $check_action('/customized_goods/view','add')" :disabled="disabledObj['timing_end_time_isDisabled']" type="datetime" >
					</el-date-picker>
					<div v-else-if="$check_field('get','timing_end_time')">{{form['timing_end_time']}}</div>
				</el-form-item>
			</el-col>
	
	
	      <el-col :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
        <el-form-item label="限制次数" prop="limit_times">
          <el-input id="limit_times" v-model="form['limit_times']" placeholder="限制次数"
                    v-if="user_group === '管理员' || (form['customized_goods_id}'] && $check_action('/customized_goods/view','set')) || (!form['customized_goods_id}'] && $check_action('/customized_goods/view','add')) "
          ></el-input>
          <div v-else-if="$check_action('/customized_goods/view','get')" v-html="form['limit_times']"></div>
        </el-form-item>
      </el-col>
	
	
			<el-col :xs="24" :sm="12" :lg="8" class="el_form_btn_warp">
				<el-form-item>
					<el-button type="primary" @click="submit()">提交</el-button>
					<el-button @click="cancel()">取消</el-button>
				</el-form-item>
			</el-col>

		</el-form>
	</el-main>
</template>

<script>
	import mixin from "@/mixins/page.js";

	export default {
		mixins: [mixin],
		data() {
			return {
				field: "customized_goods_id",
				url_add: "~/api/customized_goods/add?",
				url_set: "~/api/customized_goods/set?",
				url_get_obj: "~/api/customized_goods/get_obj?",
				url_upload: "~/api/customized_goods/upload?",

				query: {
					"customized_goods_id": 0,
				},

				form: {
								"trade_name":  '', // 商品名称
										"stock":  0, // 库存
										"enclosure":  '', // 附件
										"picture":  '', // 图片
										"video":  '', // 视频
										"audio_frequency":  '', // 音频
										"remarks":  '', // 备注
										"seller_account_number": 0, // 卖家账号
										"commodity_category":  '', // 商品类别
										"price":  0, // 价格
										"details":  '', // 详情
										"production_time":  '', // 生产时间
										"date":  '', // 日期
										"special_price_or_not":  '', // 是否特价
									"examine_state": "未审核",
								"customized_goods_id": 0, // ID
						"qrcode_img":'', // 图片
					"qrcode_title":'', // 二维码标题
								"timer_title":'', // 计时器标题
					"timing_start_time":'', // 计时开始时间
					"timing_end_time":'', // 计时结束时间
							"limit_times": "", // 限制次数
		          			"limit_type":2,
				
				},
				disabledObj:{
								"trade_name_isDisabled": false,
					          			"stock_isDisabled": false,
										"enclosure_isDisabled": false,
										"picture_isDisabled": false,
										"video_isDisabled": false,
										"audio_frequency_isDisabled": false,
										"remarks_isDisabled": false,
										"seller_account_number_isDisabled": false,
										"commodity_category_isDisabled": false,
					          			"price_isDisabled": false,
										"details_isDisabled": false,
										"production_time_isDisabled": false,
										"date_isDisabled": false,
										"special_price_or_not_isDisabled": false,
									"qrcode_img_isDisabled": false,
					"qrcode_title_isDisabled": false,
							"timer_title_isDisabled": false,
					"timing_start_time_isDisabled": false,
					"timing_end_time_isDisabled": false,
							"limit_times_isDisabled": false, // 限制次数
					},

	
		
		
		
		
		
		
		
					// 用户列表
				list_user_seller_account_number: [],
						// 用户组
				group_user_seller_account_number: "",
								// 商品类别选项列表
				list_commodity_category: [""],
	
		
		
		
		
						// 是否特价选项列表
				list_special_price_or_not: ['是','否'],
	
	
			}
		},
		methods: {


	
	
			
	
						/**
			 * 上传附件
			 * @param {Object} param 文件参数
			 */
			upload_enclosure(param){
						this.uploadFile(param.file, "enclosure");
					},
	
	
						/**
			 * 上传图片
			 * @param {Object} param 图片参数
			 */
			upload_picture(param){
						this.uploadFile(param.file, "picture");
					},
	
	
						/**
			 * 上传视频
			 * @param {Object} param 视频参数
			 */
			upload_video(param){
						this.uploadFile(param.file, "video");
					},
	
	
						/**
			 * 上传音频
			 * @param {Object} param 音频参数
			 */
			upload_audio_frequency(param){
						this.uploadFile(param.file, "audio_frequency");
					},
	
	
			
	
			
	
				/**
			 * 获取卖家用户列表
			 */
			async get_list_user_seller_account_number() {
                // if(this.user_group !== "管理员" && this.form["seller_account_number"] === 0) {
                //     this.form["seller_account_number"] = this.user.user_id;
                // }
                var json = await this.$get("~/api/user/get_list?user_group=卖家");
                if(json.result && json.result.list){
                    this.list_user_seller_account_number = json.result.list;
                }
                else if(json.error){
                    console.error(json.error);
                }
			},
					/**
			 * 获取卖家用户组
			 */
			async get_group_user_seller_account_number() {
							this.form["seller_account_number"] = this.user.user_id;
							var json = await this.$get("~/api/user_group/get_obj?name=卖家");
				if(json.result && json.result.obj){
					this.group_user_seller_account_number = json.result.obj;
				}
				else if(json.error){
					console.error(json.error);
				}
			},
			get_user_session_seller_account_number(id){
				var _this = this;
				var user_id = {"user_id":id}
				var url = "~/api/"+_this.group_user_seller_account_number.source_table+"/get_obj?"
				this.$get(url, user_id, function(res) {
					if (res.result && res.result.obj) {
						var arr = []
						for (let key in res.result.obj) {
							arr.push(key)
						}
						var arrForm = []
									for (let key in _this.form) {
							arrForm.push(key)
						}
												_this.form["seller_account_number"] = id
									_this.disabledObj['seller_account_number' + '_isDisabled'] = true
						for (var i=0;i<arr.length;i++){
						  if (arr[i]!=='examine_state' && arr[i]!=='examine_reply') {
							for (var j = 0; j < arrForm.length; j++) {
							  if (arr[i] === arrForm[j]) {
								if (arr[i] !== "seller_account_number") {
			                      _this.form[arrForm[j]] = res.result.obj[arr[i]]
			                      _this.disabledObj[arrForm[j] + '_isDisabled'] = true
								  break;
								} else {
								  _this.disabledObj[arrForm[j] + '_isDisabled'] = true
								}
							  }
							}
						  }
						}
					}
				});
			},
					get_user_seller_account_number(id){
				var obj = this.list_user_seller_account_number.getObj({"user_id":id});
				var ret = "";
				if(obj){
					if(obj.nickname){
						ret = obj.nickname;}
					else{
						ret = obj.username;
					}
				}
				return ret;
			},
			
				/**
			 * 获取商品类别列表
			 */
			async get_list_commodity_category() {
				var json = await this.$get("~/api/classification_information/get_list?");
				if(json.result && json.result.list){
					this.list_commodity_category = json.result.list;
				}
				else if(json.error){
					console.error(json.error);
				}
			},
	
			
	
			
	
			
	
			
	
			
	
		
			/**
			 * 获取对象之前
			 * @param {Object} param
			 */
			get_obj_before(param) {
				var form = "";
											
				if(this.form && form){
					Object.keys(this.form).forEach(key => {
						Object.keys(form).forEach(dbKey => {
							// if(dbKey === "charging_standard"){
							// 	this.form['charging_rules'] = form[dbKey];
							// 	this.disabledObj['charging_rules_isDisabled'] = true;
							// };
							if(key === dbKey){
								this.disabledObj[key+'_isDisabled'] = true;
							}
						})
					})
				}
																							        if (this.form["production_time"].indexOf("-")===-1){
            this.form["production_time"] = this.$toTime(parseInt(this.form["production_time"]),"yyyy-MM-dd hh:mm:ss")
        }
				        if (this.form["date"].indexOf("-")===-1){
          this.form["date"] = this.$toTime(parseInt(this.form["date"]),"yyyy-MM-dd")
        }
							$.db.del("form");
				return param;
			},

			/**
			 * 获取对象之后
			 * @param {Object} json
			 * @param {Object} func
			 */
			get_obj_after(json, func){


																																		        if(this.form["production_time"]=="0000-00-00 00:00:00"){
          this.form["production_time"] = null;
        }
				if(parseInt(this.form["production_time"]) > 9999){
					this.form["production_time"] = this.$toTime(parseInt(this.form["production_time"]),"yyyy-MM-dd hh:mm:ss")
				}
					        if(this.form["date"]=="0000-00-00"){
          this.form["date"] = null;
        }
				if(parseInt(this.form["date"]) > 9999){
					this.form["date"] = this.$toTime(parseInt(this.form["date"]),"yyyy-MM-dd")
				}
					
				if (this.form["timing_end_time"] && JSON.stringify(this.form["timing_end_time"]).indexOf("-")===-1) {
					this.form["timing_end_time"] = this.$toTime(parseInt(this.form["timing_end_time"]), "yyyy-MM-dd hh:mm:ss")
				}
				if (this.form["timing_start_time"] && JSON.stringify(this.form["timing_start_time"]).indexOf("-")===-1) {
					this.form["timing_start_time"] = this.$toTime(parseInt(this.form["timing_start_time"]), "yyyy-MM-dd hh:mm:ss")
				}

			},


			is_view(){
				var bl = this.user_group == "管理员";

				if(!bl){
					bl = this.$check_action('/customized_goods/table','add');
					console.log(bl ? "你有表格添加权限视作有添加权限" : "你没有表格添加权限");
				}
				if(!bl){
					bl = this.$check_action('/customized_goods/table','set');
					console.log(bl ? "你有表格添加权限视作有修改权限" : "你没有表格修改权限");
				}
				if(!bl){
					bl = this.$check_action('/customized_goods/view','add');
					console.log(bl ? "你有视图添加权限视作有添加权限" : "你没有视图添加权限");
				}
				if(!bl){
					bl = this.$check_action('/customized_goods/view','set');
					console.log(bl ? "你有视图修改权限视作有修改权限" : "你没有视图修改权限");
				}
				if(!bl){
					bl = this.$check_action('/customized_goods/view','get');
					console.log(bl ? "你有视图查询权限视作有查询权限" : "你没有视图查询权限");
				}

				console.log(bl ? "具有当前页面的查看权，请注意这不代表你有字段的查看权" : "无权查看当前页，请注意即便有字段查询权限没有页面查询权限也不行");

				return bl;
			},
			/**
			 * 上传文件
			 * @param {Object} param
			 */
			uploadimg(param) {
				this.uploadFile(param.file, "avatar");
			},
			/**
			 * 上传二维码
			 * @param {Object} param图片参数
			 */
			upload_qrcode(param){
				this.uploadFile(param.file, "qrcode_img");
			},


		},
		created() {
																			this.get_list_user_seller_account_number();
					this.get_group_user_seller_account_number();
							this.get_list_commodity_category();
														},
	}
</script>

<style>
	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}

	.avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}

	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
	}

	.avatar {
		width: 178px;
		height: 178px;
		display: block;
	}




</style>
