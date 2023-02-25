<template>
  <div class="page_message" id="message_list">
    <div class="warp">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="card_message">
              <h4 class="fl m-1">留言列表</h4>
              <b-button
                class="fr m-1"
                variant="outline-success"
                @click="$router.push('/message/index')"
                >留言</b-button
              >
              <!-- 留言列表 -->
              <list_message
                class="fn"
                :list="list"
                @reply="reply"
              ></list_message>
            </div>
          </div>
        </div>

        <div class="row">
          <!-- 分页器 -->
          <div class="col overflow-auto flex_cc">
            <b-pagination
                v-model="query.page"
                :total-rows="count"
                :per-page="query.size"
                @change="goToPage"
            />
          </div>
        </div>
        <b-modal
          id="my-modal"
          ref="my-modal"
          hide-backdrop
          centered
          hide-footer
          size="lg"
          v-model="modalShow"
        >
          <template #modal-title>
            <div>
              对 <i>{{ respondent }}</i> 回复
            </div>
          </template>
          <form_editor
            :form="form_comment"
            @update_comment="update_comment"
            :post_url="post_url"
          ></form_editor>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
import mixin from "@/mixins/page.js";
import list_message from "@/components/diy/list_message.vue";
import form_editor from "@/components/diy/form_editor.vue";

export default {
  mixins: [mixin],
  components: {
    list_message,
    form_editor,
  },
  data() {
    return {
      list: [],
      url_get_list: "~/api/message/get_list",
      query: {
        page: 1,
        size: 7,
        reply_id: "0",
        orderby: "create_time desc",
      },
      modalShow: false,
      form_comment: {
        email:"",
        reply_id:"0"
      },
      respondent: "",
      list: [],
      post_url:"~/api/message/add?"
    };
  },
  methods: {
    get_list_after(json) {
      var list = json.result.list;
      this.add_reply(list).then((res) => (this.list = res));
      return json;
    },

    /**
     * @param { Array } list 留言列表
     * 添加回复到留言列表
     */
    add_reply(list) {
      return new Promise((resolve) => {
        list.map((o) => {
          o.list_reply = [];
        });
        for (let idx = 0; idx < list.length; idx++) {
          const obj = list[idx];
          this.$get(
            "~/api/message/get_list?",
            {
              reply_id: obj.message_id,
              orderby: "create_time desc",
            },
            (res) => {
              if (res.result) {
                obj.list_reply = res.result.list;
              }
            }
          );
        }
        resolve(list);
      });
    },

    // 回复
    reply(message_id) {
      this.modalShow = !this.modalShow;
      this.form_comment.reply_id = message_id;
      this.form_comment.email = this.user.email;
      this.respondent = this.list.filter((o) => {
        return o.message_id == message_id;
      })[0].nickname;
    },

    /**
     * 更新评论
     */
    update_comment() {
      this.$refs["my-modal"].hide();
      this.get_list();
    },
    goToPage(v){
      this.query.page = v;
      this.goToNew(v)
    }
  },
  computed: {},
};
</script>

<style scoped>
.flex_cc {
  display: flex;
  justify-content: center;
  align-items: center;
}

.item_message {
  background-color: #ffffff;
  margin-bottom: 1rem;
}
.user_info {
  text-align: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}
.time {
  font-size: 0.7rem;
  margin-top: 0.5rem;
}
.content {
  width: 100%;
  padding: 0.8rem;
}

.content rich-text {
  width: 100%;
  word-break: break-all;
}
</style>
