<template>
  <div class="y-col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>
<script>
  let validator = (value) => {
    let keys = Object.keys(value)
    let valid = true
    keys.forEach(key => {
      if (!['span', 'offset'].includes(key)) {
        valid = false
      }
    })
    return valid
  }
  export default {
    name: 'y-col',
    props: {
      span: {
        type: [Number, String]
      },
      offset: {
        type: [Number, String]
      },
      xm: {type: Object, validator,},
      md: {type: Object, validator,},
      lg: {type: Object, validator,},
      xl: {type: Object, validator,}
    },
    data () {
      return {
        gutter: 0,
      }
    },
    methods: {
      createClasses (obj, str = '') {
        if (!obj) {return []}
        let array = []
        if (obj.span) { array.push(`col-${str}${obj.span}`) }
        if (obj.offset) { array.push(`offset-${str}${obj.offset}`) }
        return array
      }
    },
    computed: {
      colClass () {
        let {span, offset, xm, md, lg, xl} = this
        let createClasses = this.createClasses
        return [
          ...createClasses({span, offset}),
          ...createClasses(xm, 'xm-'),
          ...createClasses(md, 'md-'),
          ...createClasses(lg, 'lg-'),
          ...createClasses(xl, 'xl-'),
        ]
      },
      colStyle () {
        return {
          paddingLeft: this.gutter / 2 + 'px',
          paddingRight: this.gutter / 2 + 'px',
        }
      }
    }
  }
</script>
<style scoped lang="scss">
  .y-col {
    border:1px solid gray;
    $class-prefix: col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
    @media (min-width: 577px) {
      $class-prefix: col-xm-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-xm-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 769px){ // 770
      $class-prefix: col-md-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-md-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 993px) {
      $class-prefix: col-lg-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-lg-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 1201px) {
      $class-prefix: col-xl-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-xl-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
  }
</style>