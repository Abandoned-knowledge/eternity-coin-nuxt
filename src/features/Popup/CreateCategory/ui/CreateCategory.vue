<script setup lang="ts">
const { defineField, errors, handleSubmit } = useForm({
  validationSchema: FormCreateCategorySchema,
  initialValues: {
    type: "expense" as transactionType,
    color: null,
    label: null,
  },
});

const user = useSupabaseUser();
const categoryStore = useCategoryStore();

const toast = useToast();

const [label] = defineField("label");
const [color] = defineField("color");
const [type] = defineField("type");
const options = ref<transactionType[]>(["expense", "income"]);

function showToast(severity: primeVueSeverity, msg: string) {
  toast.add({ severity: severity, detail: msg, life: 2000 });
}

const onSubmit = handleSubmit(async (values) => {
  if (user.value) {
    const { error } = await $fetch(`/api/categories?user_id=${user.value.id}`, {
      method: "post",
      body: {
        label: values.label,
        color: values.color,
        type: values.type,
      },
    });

    if (error) {
      showToast("error", error.message);
    } else {
      showToast("success", `Create the new category - ${values.label}`);
      values.type == "income" ? categoryStore.fetchIncome() : categoryStore.fetchExpense();
    }
  }
  categoryStore.createCategoryIsVisible = false;
  label.value = null;
  color.value = null;
});
</script>

<template>
  <Dialog
    header="Create the new category"
    v-model:visible="categoryStore.createCategoryIsVisible"
    modal
    class="custom-dialog"
  >
    <form @submit="onSubmit" class="form">
      <div class="field">
        <FloatLabel>
          <InputText id="label" v-model="label" :invalid="!!errors.label" />
          <label for="label">label</label>
        </FloatLabel>

        <small class="field__error">{{ errors.label }}</small>
      </div>

      <div class="field">
        <p>Select the transaction type</p>
        <SelectButton
          v-model="type"
          :options="options"
          :allowEmpty="false"
          pt:root="w-full"
          pt:pcButton:root="w-full"
          :invalid="!!errors.type"
        />
        <small class="field__error">{{ errors.type }}</small>
      </div>

      <div class="field flex flex-col items-center gap-2">
        <div class="flex items-center gap-2">
          <p class="text-gray">select the color</p>
          <ColorPicker v-model="color" format="hex" />
        </div>
        <small class="field__error">{{ errors.color }}</small>
      </div>

      <Button label="Add" type="submit" severity="contrast" />
    </form>
  </Dialog>
</template>
