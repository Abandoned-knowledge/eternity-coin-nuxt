<script setup lang="ts">
const inputLogin = ref();
const inputName = ref();
const inputPassword = ref();
const inputPasswordRepeat = ref();

onMounted(() => {
  setPageLayout("clear");
});
</script>

<template>
  <FrameLayout title="Register" class="w-full md:w-1/2">
    <form @submit.prevent class="form">
      <FloatLabel class="w-full">
        <InputText type="text" class="w-full" id="name" v-model="inputName" />
        <label for="name">Name</label>
      </FloatLabel>

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

      <FloatLabel class="w-full">
        <Password
          pt:root="w-full"
          pt:pcInput:root="w-full"
          inputId="password_repeat"
          v-model="inputPasswordRepeat"
          toggleMask
          :feedback="false"
        />
        <label for="password_repeat">Repeat Passowrd</label>
      </FloatLabel>

      <Button label="Login" type="submit" severity="contrast" />
    </form>
  </FrameLayout>
</template>
