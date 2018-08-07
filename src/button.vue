<template>
  <button class="g-button">按钮</button>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
.g-button{
  height: var(--button-height);
  font-size: var(--font-size);
  padding: 0  1em;
  border-radius: var(--border-radius);
  border-color: var(--border-color);
  background: var(--button-bg);
  &:focus{
  outline: none;
  }
  &:hover{
    color: var(--border-color-hover);
  }

  &:active{
    background-color: var(--button-active-bg);
  }
}
</style>
