<style>
  .red {
    color: #f00;
  }
</style>

<template>
  <div class="red">
    A custom component!xxx
    <div v-if="seen">Hello</div>
  </div>
</template>

<script>
export default {
  data: {
    seen: false
  }
}
</script>
