<script setup lang="ts">
const newLabel = ref();
const categoryStore = useCategoryStore();
const color = computed(() => {
  return categoryStore.currentCategory ? categoryStore.currentCategory.color : null;
});
const label = computed(() => {
  return categoryStore.currentCategory ? categoryStore.currentCategory.label : "New label";
});
</script>

<template>
  <Dialog
    class="custom-dialog"
    v-model:visible="categoryStore.updateCategoryIsVisible"
    modal
    header="Update category"
  >
    <form @submit.prevent class="form">
      <FloatLabel class="w-full">
        <InputText placeholder="New label" class="w-full" id="new_label" v-model="newLabel" />
        <label for="new_label">{{ label }}</label>
      </FloatLabel>

      <div class="flex items-center gap-2">
        <p class="text-gray">select the new color</p>
        <ColorPicker v-model="color" format="hex" />
      </div>

      <Button label="submit" severity="contrast" />
    </form>
  </Dialog>
</template>
