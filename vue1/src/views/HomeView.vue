<template>
  <div>
    vue1
    <input type="text" v-model="value" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '1',
    }
  },
  mounted() {
    console.log('vue1 mounted')
  },
  activated() {
    console.log('vue1 activated')
  },
  deactivated() {
    console.log('vue1 deactivated')
  },
}
</script>

<style></style>
