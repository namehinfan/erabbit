<template>
  <div>
    {{ $store.state.user.profile.account }}
    <button @click="$store.commit('user/setUser',{account:'zy'})">设置用户信息</button>
  </div>
</template>

<script>
export default {
  setup () {
  }
}
</script>

<style lang="less">

</style>
