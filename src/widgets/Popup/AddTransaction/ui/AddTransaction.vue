<script setup lang="ts">
const isVisible = ref(false);
const inputValue = ref(null);
</script>

<template>
  <Button size="large" @click="isVisible = true">Add</Button>

  <Dialog v-model:visible="isVisible" header="Add Transaction" modal class="w-1/2">
    <form @submit.prevent class="flex flex-col items-center gap-2 py-5">
      <FloatLabel class="w-full">
        <InputText type="email" class="w-full" id="email" v-model="inputValue" required />
        <label for="email">Email</label>
      </FloatLabel>

      <Button type="submit" label="ADD" severity="contrast" />
    </form>
  </Dialog>
</template>

<style lang="scss" scoped></style>
