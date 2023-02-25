<template>
  <div class="page_message" id="message_index">
    <div class="warp">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="card_form_message flex_cc">
              <!-- 留言回复 -->
              <div class="form_message">
                <b-form>
                  <b-form-group
                    id="input-group-1"
                    label="用户名:"
                    label-for="input-1"
                    :state="validation_nickname"
                    :invalid-feedback="invalid_nickname"
                    valid-feedback="校验通过"
                  >
                    <b-form-input
                      id="input-1"
                      v-model="form.nickname"
                      type="text"
                      placeholder="用户名"
                      trim
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="input-group-2"
                    label="手机号码:"
                    label-for="input-2"
                    :state="validation_phone"
                    invalid-feedback="手机号码为11位"
                    valid-feedback="校验通过"
                  >
                    <b-form-input
                      id="input-2"
                      v-model="form.phone"
                      type="text"
                      placeholder="请输入手机号码"
                      trim
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group
                    id="input-group-2"
                    label="邮箱:"
                    label-for="input-2"
                    :state="validation_email"
                    invalid-feedback="邮箱格式:example@163.com"
                    valid-feedback=""
                  >
                    <b-form-input
                      id="input-2"
                      v-model="form.email"
                      type="email"
                      placeholder="example@123.com"
                      trim
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group
                    id="input-group-2"
                    label="留言内容:"
                    label-for="input-2"
                    :state="validation_content"
                    invalid-feedback="最多12个字符"
                    valid-feedback=""
                  >
                    <b-form-textarea
                      id="textarea"
                      v-model="form.content"
                      placeholder="请输入你的留言..."
                      rows="3"
                      max-rows="6"
                    ></b-form-textarea>
                  </b-form-group>
                  <div class="btns_bottom">
                    <div class="btn_item" @click="submit()">提交留言</div>
                  </div>
                </b-form>
              </div>
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
  data() {
    return {
      form: {
        nickname: "",
        content: "",
        phone: "",
        email: "",
      },
      // 错误反馈
      invalid_nickname: "账户名长度为在5-16个字符",
    };
  },
  onLoad() {},
  onReady() {},
  methods: {
    /**
     * 提交留言
     */
    submit() {
      var condition =
        this.validation_nickname &&
        this.validation_email &&
        this.validation_phone &&
        this.validation_content;
      if (!condition) {
        this.$toast("输入不合法");
        return;
      }
      this.$post("~/api/message/add?", this.form, (res) => {
        console.log(res);
        if (res.result) {
          this.$router.push("/message/list");
        } else if (res.error) {
          this.$toast(res.error.message);
        }
      });
    },
  },
  computed: {
    /**
     * 验证用户名
     */
    validation_nickname() {
      var length = this.form.nickname.length;
      if (!length) {
        return null;
      }
      if (length > 4 && length < 17) {
        return true;
      } else {
        this.invalid_nickname = "账户名长度为在5-16个字符";
        return false;
      }
    },
    /**
     * 验证邮箱
     */
    validation_email() {
      var length = this.form.email.length;
      if (!length) {
        return true;
      }
      return length > 4 && length < 17;
    },
    /**
     * 验证手机
     */
    validation_phone() {
      var length = this.form.phone.length;
      if (!length) {
        return null;
      }
      return length > 1 && length < 12;
    },
    /**
     * 验证留言内容
     */
    validation_content() {
      var length = this.form.content.length;
      if (!length) {
        return true;
      }
      return length > 1 && length < 580;
    },
  },
};
</script>

<style scoped>
.form_message {
  margin: 5px;
  padding-top: 10px;
}

.textarea {
  border: 1px solid rgb(229, 229, 229);
  background-color: rgb(255, 255, 255);
  width: calc(100% - 1rem);
  border-radius: 0.25rem;
  padding: 0.5rem;
  font-size: 0.875rem;
}

.btns_bottom .btn_item {
  cursor: pointer;
  padding: 5px;
  margin: 5px;
  width: 80px;
  height: 30px;
  border: 1px solid var(--color_default_b);
  border-radius: 2px;
  line-height: 18px;
}
.btns_bottom .btn_item:hover {
  background: var(--color_primary);
  border: 1px solid var(--color_primary);
  font-weight: bold;
}
</style>
