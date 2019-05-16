<template>
  <button class="y-button"  :class="activeClass" @click="$emit('click')" :disabled="disabled">
    <svg-icon class="icon" v-if="icon&&!loading" :icon-class="icon" />
    <svg-icon class="loading icon" v-if="loading" icon-class="loadings"></svg-icon>
    <div class="content">
      <slot />
    </div>
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String
    },
    type: {
      type: String,
      default: 'primary'
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator(value) {
        return value === 'left' || value === 'right'
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'small',
      validator(str) {
        return ['small', 'big', 'mini'].includes(str)
      }
    },
    animationClass: {
      type: String,
      default: 'out-ripple'
    },
    bgColor: {
      type: String,
      default: '#fff'
    }
  },
  computed: {
    activeClass() {
      const {
        iconPosition, animationClass, size, disabled, type
      } = this
      return {
        [`icon-${iconPosition}`]: true, [animationClass]: !disabled, [`${size}-button`]: true, disabled, [`${type}-button`]: true
      }
    },
  }
};
</script>

<style lang="scss" scoped>
$button-color: #606266;
$primary:#ffd800;
.y-button {
  font-size: var(--font-size);
  color: $button-color;
  border-radius: var(--border-radius);
  background: var(--button-bg);
  display: inline-flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  -webkit-appearance: none;
  // border:none;
  &:focus {
    outline: none;
  }
  &:hover {
    color: var(--border-color-hover);
    border-color: var(--border-color-hover);
  }
  &.mini-button{
    padding: 5px 5px;
  }
  &.small-button{
    padding: 7px 8px;
  }
  &.disabled{
    cursor:not-allowed;
    opacity: .7;
  }
  &.big-button{
    padding: 10px 8px;
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &.primary-button{
    color:$button-color;
    background-color:$primary;
    border-color:$primary;
  }
  > .content {
    order: 2;
  }
  > .icon {
    order: 1;
    margin-right: .1em;
  }
  &.icon-right {
    > .content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-left: .1em;
      margin-right: 0;
    }
  }
  @keyframes rotate {
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }
  .loading{
    animation: rotate 1s linear infinite;
  }
}
</style>