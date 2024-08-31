<script setup lang="ts">
const inputPassword = ref();
const inputPasswordNew = ref();
</script>

<template>
  <FrameLayout title="change password">
    <form @submit.prevent class="form">
      <FloatLabel class="w-full">
        <Password
          pt:root="w-full"
          pt:pcInput:root="w-full"
          v-model="inputPassword"
          inputId="password"
          toggle-mask
          :feedback="false"
        />
        <label for="password">Current password</label>
      </FloatLabel>

      <FloatLabel class="w-full">
        <Password
          pt:root="w-full"
          pt:pcInput:root="w-full"
          v-model="inputPasswordNew"
          inputId="password_new"
          toggle-mask
        />
        <label for="password_new">New password</label>
      </FloatLabel>

      <Button label="Change" severity="contrast" />
    </form>
  </FrameLayout>
</template>
