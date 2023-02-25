<template>
  <div class="list_message">
    <div class="item_message list" v-for="(o, i) in list" :key="i">
      <div class="left_block col-12 col-md-3">
        <img class="icon" :src="$fullUrl(o[vm.avatar])" />
        <div class="user_info">
          <div class="nickname">{{ o[vm.nickname] }}</div>
          <div class="email">
            <b-icon icon="envelope"></b-icon>
            {{ o[vm.email] }}
          </div>
          <div class="phone">
            <b-icon icon="telephone"></b-icon>
            {{ o[vm.phone] }}
          </div>
        </div>
      </div>
      <div class="right_block col-12 col-md-9">
        <div class="top">
          {{ o[vm.title] }}
        </div>
        <div class="message_content" v-html="o[vm.content]"></div>
        <div class="bottom">
          <b-button
            variant="outline-primary"
            size="sm"
            @click="reply(o[vm.message_id])"
            >回复</b-button
          >
          <div class="time">{{ o[vm.create_time] }}</div>
        </div>
      </div>

      <div class="pl-3 w-100">
        <list_comment
          v-if="o.list_reply.length"
          class="w-100 border-top mt-1 p-0"
          :list="o.list_reply"
        ></list_comment>
      </div>
    </div>
      
  </div>
</template>

<script>
import list_comment from "@/components/diy/list_comment.vue";

export default {
  props: {
    list: {
      type: Array,
      default: function () {
        return [];
      },
    },
    vm: {
      type: Object,
      default: function () {
        return {
          avatar: "avatar",
          message_id: "message_id",
          title: "title",
          nickname: "nickname",
          title: "title",
          create_time: "create_time",
          content: "content",
          user_id: "user_id",
          email: "email",
          phone: "phone",
          reply_id: "reply_id",
        };
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    /**
     * 回复
     */
    reply(message_id) {
      this.$emit("reply", message_id);
    },
  },
  components: {
    list_comment,
  },
};
</script>

<style scoped>
.list_message {
  border: 1px solid #dbdbdb;
  margin-bottom: 10px;
}
.user_info {
  padding: 0;
  border-bottom: 0;
}
.ellipsis_2 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
}
.list_message .item_message {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 0.5rem;
  margin: 10px 0px;
}
.list_message .item_message + .item_message {
  border-top: 1px solid #dbdbdb;
}
.list_message .item_message .left_block {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.list_message .item_message .left_block > img {
  height: 50px;
  width: 50px;
  border-radius: 0.5rem;
}
.list_message .item_message .left_block .user_info {
  font-size: 10px;
  color: var(--color_base);
  text-align: left;
}
.list_message .item_message .right_block {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.list_message .top {
  font-size: 0.9rem;
  font-size: 18px;
  font-weight: bold;
}

.list_message .message_content {
  font-size: 18px;
  word-break: break-all;
  color: var(--color_grey);
}

.list_message .bottom {
  display: flex;
  justify-content: space-between;
  font-size: 0.5rem;
  color: var(--color_grey);
}
.list_message .bottom .time {
  text-align: right;
}
</style>
