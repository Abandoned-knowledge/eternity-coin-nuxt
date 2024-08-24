<script setup lang="ts">
import Categories from "./Categories.vue";

const categoryStore = useCategoryStore();

const isVisible = ref(false);
const inputValue = ref<string | null>(null);
const categoryId = computed(() => categoryStore.currentCategoryId);

const value = ref<transactionType>("expense");
const options = ref<transactionType[]>(["expense", "income"]);

watch(value, () => (categoryStore.currentCategoryId = null));
</script>

<template>
  <Button size="large" class="w-1/4" @click="isVisible = true">Add</Button>

  <Dialog v-model:visible="isVisible" header="Add Transaction" modal class="w-1/2">
    <form @submit.prevent class="flex flex-col items-center gap-10 py-5">
      <SelectButton
        v-model="value"
        :options="options"
        pt:root="w-full"
        pt:pcButton:root="w-full"
        :allowEmpty="false"
      />

      <FloatLabel class="w-full">
        <InputText class="w-full" id="value" v-model="inputValue" required />
        <label for="value">Value</label>
      </FloatLabel>

      <Categories :type="value" />

      <Button type="submit" label="ADD" severity="contrast" />
    </form>
  </Dialog>
</template>

<style lang="scss" scoped></style>
