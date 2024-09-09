<script setup lang="ts">
const categoryStore = useCategoryStore();
const user = useSupabaseUser();
const toast = useToast();

function showToast(severity: primeVueSeverity, msg: string) {
  toast.add({ severity: severity, detail: msg, life: 2000 });
}

const defaultLabel = computed(() => {
  return categoryStore.currentCategory ? categoryStore.currentCategory.label : "New label";
});

const newLabel = ref();
const newColor = ref(categoryStore.currentCategory?.color);

watch(categoryStore, () => {
  newColor.value = categoryStore.currentCategory?.color;
});

async function submitForm() {
  if (user.value && categoryStore.currentCategory) {
    const { error } = await $fetch(`/api/categories/${categoryStore.currentCategory.id}`, {
      method: "put",
      body: {
        label: newLabel.value ? newLabel.value : defaultLabel.value,
        color: newColor.value?.slice(0, 1) == "#" ? newColor.value : `#${newColor.value}`,
      },
    });

    if (error) {
      showToast("error", error.message);
    } else {
      showToast("success", `Update name ${defaultLabel.value} on ${newLabel.value}`);
      await (categoryStore.currentCategory.type == "income"
        ? categoryStore.fetchIncome()
        : categoryStore.fetchExpense());

      categoryStore.currentCategory = null;
      categoryStore.updateCategoryIsVisible = false;
      newLabel.value = null;
    }
  }
}
const nestedDialogVisible = ref(false);
async function deleteCategory() {
  if (categoryStore.currentCategory?.id) {
    const { error } = await $fetch(`/api/categories/${categoryStore.currentCategory.id}`, {
      method: "delete",
    });

    if (error) {
      showToast("error", error.message);
    } else {
      showToast("success", `Delete category - ${categoryStore.currentCategory.label}`);
      await (categoryStore.currentCategory.type == "income"
        ? categoryStore.fetchIncome()
        : categoryStore.fetchExpense());
      nestedDialogVisible.value = false;
      categoryStore.updateCategoryIsVisible = false;
    }
  }
}
</script>

<template>
  <Dialog
    class="custom-dialog"
    v-model:visible="categoryStore.updateCategoryIsVisible"
    modal
    header="Update category"
  >
    <form @submit.prevent="submitForm" class="form">
      <FloatLabel class="w-full">
        <InputText id="label" v-model="newLabel" />
        <label for="label">{{ defaultLabel }}</label>
      </FloatLabel>

      <div class="flex items-center gap-2">
        <p class="text-gray">select the color</p>
        <ColorPicker @value="console.log(123)" v-model="newColor" format="hex" />
      </div>

      <Button label="submit" type="submit" severity="contrast" />
      <Button
        @click="nestedDialogVisible = true"
        size="small"
        label="delete"
        severity="danger"
        outlined
      />

      <Dialog header="Delete category" v-model:visible="nestedDialogVisible" modal>
        <div class="flex flex-col gap-2">
          <p>
            Are you sure want do delete category -
            <span :style="{ color: categoryStore.currentCategory?.color }">{{
              categoryStore.currentCategory?.label
            }}</span>
            ?
          </p>
          <p class="text-center">All transactions will also be deleted</p>
        </div>

        <div class="mt-10 flex justify-center gap-4">
          <Button @click="deleteCategory" label="Delete" severity="danger" size="small" />
          <Button
            @click="nestedDialogVisible = false"
            label="Cancel"
            severity="contrast"
            size="small"
          />
        </div>
      </Dialog>
    </form>
  </Dialog>
</template>
