<script setup lang="ts">
const label = ref();
const color = ref();
</script>

<template>
  <FrameLayout title="create category">
    <form @submit.prevent class="flex flex-col items-center gap-5 py-5">
      <FloatLabel class="w-full">
        <InputText placeholder="Label" class="w-full" id="label" v-model="label" />
        <label for="label">label</label>
      </FloatLabel>

      <div class="flex items-center gap-2">
        <p class="text-gray">select the color</p>
        <ColorPicker v-model="color" format="hex" />
      </div>

      <Button label="Add" severity="contrast" />
    </form>
  </FrameLayout>
</template>
