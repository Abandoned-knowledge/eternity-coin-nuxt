<script setup lang="ts">
const categoryStore = useCategoryStore();
const userStore = useUserStore();
const supabase = useSupabaseClient();
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
  if (userStore.user && categoryStore.currentCategory) {
    const updatedLabel = newLabel.value ? newLabel.value : defaultLabel.value;
    const updatedColor = newColor.value?.slice(0, 1) == "#" ? newColor.value : `#${newColor.value}`;

    const { error } = await supabase
      .from("categories")
      .update({
        label: updatedLabel,
        color: updatedColor,
      })
      .eq("id", categoryStore.currentCategory.id);

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
    </form>
  </Dialog>
</template>
