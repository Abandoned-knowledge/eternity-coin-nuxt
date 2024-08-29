<script setup lang="ts">
import FormChangeData from "./FormChangeData.vue";
import FormChangePassword from "./FormChangePassword.vue";
</script>

<template>
  <div class="flex w-full flex-col gap-5 md:flex-row">
    <FormChangePassword class="md:w-1/2" />
    <FormChangeData class="md:w-1/2" />
  </div>
</template>
