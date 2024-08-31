<script setup lang="ts">
const inputName = ref();
</script>

<template>
  <FrameLayout title="change data">
    <form @submit.prevent class="form">
      <FloatLabel class="w-full">
        <InputText
          class="w-full"
          id="value"
          v-model="inputName"
          placeholder="Write the new name"
          required
        />
        <label for="value">Current name</label>
      </FloatLabel>

      <Button label="Change" severity="contrast" />
    </form>
  </FrameLayout>
</template>
