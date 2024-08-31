<script setup lang="ts">
const inputLogin = ref();
const inputPassword = ref();
onMounted(() => {
  setPageLayout("clear");
});
</script>

<template>
  <FrameLayout title="Login" class="w-full md:w-1/2">
    <form @submit.prevent class="form">
      <FloatLabel class="w-full">
        <InputText type="email" class="w-full" id="login" v-model="inputLogin" />
        <label for="login">Login</label>
      </FloatLabel>

      <FloatLabel class="w-full">
        <Password
          pt:root="w-full"
          pt:pcInput:root="w-full"
          inputId="password"
          v-model="inputPassword"
          toggleMask
          :feedback="false"
        />
        <label for="password">Password</label>
      </FloatLabel>

      <Button label="Login" type="submit" severity="contrast" />
    </form>
  </FrameLayout>
</template>
