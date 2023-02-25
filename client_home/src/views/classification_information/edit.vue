<template>
	<div class="diy_edit page_classification_information" id="classification_information_edit">
		<div class='warp'>
			<div class='container'>
				<div class='row diy_edit_content_box'>
						<div v-if="$check_field('set','commodity_category') || $check_field('add','commodity_category') || $check_field('get','commodity_category')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								商品类别:
							</span>
						</div>
								<!-- 文本 -->
									<div class="diy_field diy_text">
							<input type="text" id="form_commodity_category" v-model="form['commodity_category']" placeholder="请输入商品类别" v-if="(form['commodity_category'] && $check_field('set','commodity_category')) || (!form['commodity_category'] && $check_field('add','commodity_category'))"  :disabled="disabledObj['commodity_category_isDisabled']"/>
							<span v-else-if="$check_field('get','commodity_category')">{{ form['${obj.name}'] }}</span>
						</div>
										</div>
							<div v-if="$check_field('set','category') || $check_field('add','category') || $check_field('get','category')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								类别:
							</span>
						</div>
								<!-- 文本 -->
									<div class="diy_field diy_text">
							<input type="text" id="form_category" v-model="form['category']" placeholder="请输入类别" v-if="(form['category'] && $check_field('set','category')) || (!form['category'] && $check_field('add','category'))"  :disabled="disabledObj['category_isDisabled']"/>
							<span v-else-if="$check_field('get','category')">{{ form['${obj.name}'] }}</span>
						</div>
										</div>
							<div v-if="$check_field('set','custom_category') || $check_field('add','custom_category') || $check_field('get','custom_category')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								定制类别:
							</span>
						</div>
								<!-- 文本 -->
									<div class="diy_field diy_text">
							<input type="text" id="form_custom_category" v-model="form['custom_category']" placeholder="请输入定制类别" v-if="(form['custom_category'] && $check_field('set','custom_category')) || (!form['custom_category'] && $check_field('add','custom_category'))"  :disabled="disabledObj['custom_category_isDisabled']"/>
							<span v-else-if="$check_field('get','custom_category')">{{ form['${obj.name}'] }}</span>
						</div>
										</div>
	




				</div>
				<div class="diy_edit_submit_box row">
					<div class="col-12">
						<div class="btn_box">
							<button class="btn_submit" @click="submit()">提交</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import mixin from "@/mixins/page.js";
	export default {
		mixins: [mixin],
		components: {},
		data() {
			return {
				url_get_obj: "~/api/classification_information/get_obj?",
				url_add: "~/api/classification_information/add?",
				url_set: "~/api/classification_information/set?",

				// 登录权限
				oauth: {
					"signIn": true,
					"user_group": []
				},

				// 查询条件
				query: {
						"commodity_category": "",
							"category": "",
							"custom_category": "",
						"classification_information_id": 0,
				},

				obj: {
						"commodity_category":  '', // 商品类别
							"category":  '', // 类别
							"custom_category":  '', // 定制类别
						"classification_information_id": 0,
				},

				// 表单字段
				form: {
						"commodity_category":  '', // 商品类别
							"category":  '', // 类别
							"custom_category":  '', // 定制类别
						"classification_information_id": 0,
				},
				disabledObj:{
						"commodity_category_isDisabled": false,
							"category_isDisabled": false,
							"custom_category_isDisabled": false,
					},

						
				// ID字段
				field: "classification_information_id",

			}
		},
		methods: {
			
				
				
	
			/**
			 * 修改文件
			 * @param { Object } files 上传文件对象
			 * @param { String } str 表单的属性名
			 */
			change_file(files, str) {
				var form = new FormData();
				form.append("file", files[0]);
				this.$post("~/api/classification_information/upload?", form, (res) => {
					if (res.result) {
						this.form[str] = res.result.url;
					} else if (res.error) {
						this.$toast(res.error.message);
					}
				});
			},

			/**
			 * 获取对象后获取缓存表单
			 * @param {Object} json
			 * @param {Object} func
			 */
			get_obj_before(param){
				var form = $.db.get("form");
				// if (form) {
        //   delete(form.examine_state)
        //   delete(form.examine_reply)
        //   this.obj = $.push(this.obj ,form);
				// 	this.form = $.push(this.form ,form);
				// }
				// var arr = []
				// for (let key in form) {
				// 	arr.push(key)
				// }
				// for (var i=0;i<arr.length;i++){
				// 	this.disabledObj[arr[i] + '_isDisabled'] = true
				// }
        if (form) {
          var arr = []
          for (let key in form) {
            arr.push(key)
          }
          var arrForm = []
          for (let key in this.form) {
            arrForm.push(key)
          }
          for (var i=0;i<arr.length;i++){
            if (arr[i]!=='examine_state' && arr[i]!=='examine_reply') {
              for (var j = 0; j < arrForm.length; j++) {
                if (arrForm[j] === arr[i]) {
                  this.form[arrForm[j]] = form[arr[i]]
                  this.obj[arrForm[j]] = form[arr[i]]
                  this.disabledObj[arrForm[j] + '_isDisabled'] = true
                  break;
                }
              }
            }
          }
        }
						
        $.db.del("form");
				return param;
			},

			/**
			 * 获取对象后获取缓存表单
			 * @param {Object} json
			 * @param {Object} func
			 */
			get_obj_after(json ,func){
				// var form = $.db.get("form");
				// var obj = Object.assign({} ,form ,this.obj);
				// if (obj) {
        //   delete(obj.examine_state)
        //   delete(obj.examine_reply)
				// 	this.obj = $.push(this.obj ,obj);
				// }
				// if (form) {
        //   delete(form.examine_state)
        //   delete(form.examine_reply)
				// 	this.form = $.push(this.form ,form);
				// }
				if(func){
					func(json);
				}
			},


		},
		created() {
											},
	}
</script>

<style>




</style>
