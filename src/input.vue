<template>
    <div class="wrapper">
        <input type="text" 
        :value="value" 
        :class="{'error_input':error&&inputColor,'info_input':info&&inputColor,'title_input':title&&inputColor}" 
        :readonly="readonly" 
        @change="$emit('change',$event.target.value)"
        @focus="$emit('focus',$event.target.value)"
        @input="$emit('input',$event.target.value)"
        @blur="$emit('blur',$event.target.value)"
        @click="$emit('click',$event.target.value)"
        :disabled="disabled">
          <div  v-if="error" class="error_title">
              <icon name="error" class="icon-error"></icon>
              <span class="error_message">{{error}}</span>
          </div>
          <div  v-if="info" class="info_title">
              <icon name="info" class="icon-info"></icon>
              <span class="info_message">{{info}}</span>
          </div>
          <div  v-if="title" class="title_title">
              <icon name="tips" class="icon-title"></icon>
              <span class="title_message">{{title}}</span>
          </div>
    </div>
</template>
<script>
import Icon from "./icon.vue";

export default {
  components: { Icon },
  name: "Y-input",
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    inputColor:{
      type:Boolean,
      default:false
    },
    error: {
      type: String
    },
    info:{
      type:String
    },
    title:{
      type:String
    }
  }
};
</script>
<style lang="scss" scoped>
$height: 32px;
$color: #606266;
$border-color: #dcdfe6;
$border-color-hover: #409eff;
$border-radius: 4px;
$font-size: 12px;
$red: #f56c6c;
$info: #67c23a;
$title: #409EFF;
$box-shadow-color: rgba(64, 158, 255, 0.5);

.wrapper {
  display: inline-block;
  font-size: $font-size;
  > input {
    color: $color;
    height: $height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0 8px;
    font-size: inherit;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    &:hover {
      border-color: #909399;
    }
    &:focus {
      border-color: #409eff;
      box-shadow: inset 0 0px 1px $box-shadow-color;
      outline: none;
    }
    &[disabled] {
      cursor: not-allowed;
      color: #aaa;
      border-color: #aaa;
    }
    &[readonly] {
      cursor: wait;
    }
    &.error_input{
      border-color: $red;
      &:hover{
        box-shadow: none;
      }
    }
    &.info_input{
      border-color: $info;
      &:hover{
        box-shadow: none;
      }
    }
    &.title_input{
      border-color: $title;
      &:hover{
        box-shadow: none;
      }
    }
    
  }
  .error_title {
    display: inline-flex;
    align-items: center;
    > :not(:last-child){
      margin-right: .5em;
    }
    .icon-error {
      width: 1em;
      height: 1em;
      fill: $red;
    }
  }
  .info_title {
    display: inline-flex;
    align-items: center;
    > :not(:last-child){
      margin-right: .5em;
    }
    .icon-info {
      width: 1em;
      height: 1em;
      fill: $info;
    }
  }
  .title_title {
    display: inline-flex;
    align-items: center;
    > :not(:last-child){
      margin-right: .5em;
    }
    .icon-title {
      width: 1em;
      height: 1em;
      fill: $title;
    }
  }
}
</style>
