<template>
  <transition name="fade">
    <div class="message" :class="type" v-show="show">
      <i class="icon"></i>
      <span class="text">{{text}}</span>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'message',
  props: {
    type: {
      type: String,
      default: 'info',
      validator: val => ['info', 'success', 'warning', 'error'].includes(val)
      // ['info', 'success', 'warning', 'error'] 表示type只接收这四个字符串作为参数传入message组件
    },
    text: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
.fade-enter,
.fade-leave-to {
  top: 0px;
  opacity: 0;
}
.message {
  position: fixed;
  top: 60px;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  min-width: 300px;
  padding: 10px 20px;
  color: rgba(255, 255, 255, 0.7);
  background: #f5f5f5;
  font-size: 14px;
  line-height: 1.4;
  border-radius: 4px;
  z-index: 1000;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  &.info {
    background: #909399;
  }
  &.success {
    background: #67C23A;
  }
  &.error {
    background: #F56C6C;
  }
  &.warning {
    background: #E6A23C;
  }
}
</style>