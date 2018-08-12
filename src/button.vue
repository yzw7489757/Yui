<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
    <g-icon class="icon" v-if="icon&&!loading" :name="icon" />
    <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
    <div class="content">
      <slot />
    </div>
  </button>
</template>

<script>
import Icon from './icon'

export default {
  components: {
    'g-icon':Icon
  },
  props: {
    icon:{},
    iconPosition:{
      type:String,
      default:'left',
      validator(value){
        return value === 'left'|| value === 'right'
      }
    },
    loading:{
      type:Boolean,
      default:false
    }
  }
};
</script>

<style lang="scss">
.g-button {
  height: var(--button-height);
  font-size: var(--font-size);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border-color: var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:focus {
    outline: none;
  }
  &:hover {
    color: var(--border-color-hover);
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
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
