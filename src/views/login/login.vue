<template>
  <div class="login">
    <LoginPanel/>
  </div>
</template>

<script lang="ts" setup>
import LoginPanel from "@/views/login/components/login-panel.vue";
</script>
<style>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url("../../assets/img/login-bg.svg") no-repeat;
}

</style>