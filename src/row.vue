<template>
  <div class="y-row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "y-row",
  props: {
    gutter: [String, Number],
    align:{
      type:String,
      validator:function(value){
        return ['left','right','center'].includes(value)
      }
    }
  },
  computed: {
    rowStyle() {
      return {
        marginLeft: -this.gutter / 2 + "px",
        marginRight: -this.gutter / 2 + "px"
      };
    },
    rowClass(){
      let {align} = this;
      return [align&&`align-${align}`]
    }
  },
  mounted() {
    console.log(this.$children);
    this.$children.forEach(
      function(item) {
        item.gutter = this.gutter;
      }.bind(this)
    );
  }
};
</script>
<style lang="scss" scoped>
.y-row {
  display: flex;
  &.align-left{
    justify-content:flex-start;
  }
  &.align-center{
    justify-content:center;
  }
  &.align-right{
    justify-content:flex-end;
  }
}
</style>
