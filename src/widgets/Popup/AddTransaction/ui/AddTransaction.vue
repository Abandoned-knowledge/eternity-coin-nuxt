<script setup lang="ts">
import Categories from "./Categories.vue";

const categoryStore = useCategoryStore();

const isVisible = ref(false);
const inputValue = ref<string | null>(null);
const categoryId = computed(() => categoryStore.currentCategory?.category_id);

const value = ref<transactionType>("expense");
const options = ref<transactionType[]>(["expense", "income"]);

watch(value, () => (categoryStore.currentCategory = null));
</script>

<template>
  <Button
    size="large"
    class="col-span-2 w-full xl:order-2 xl:col-span-1 xl:h-1/2 xl:w-auto"
    @click="isVisible = true"
  >
    Add
  </Button>

  <Dialog v-model:visible="isVisible" header="Add Transaction" modal class="custom-dialog">
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
