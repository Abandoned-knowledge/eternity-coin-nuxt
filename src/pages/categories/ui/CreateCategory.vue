<script setup lang="ts">
const { defineField, errors, handleSubmit } = useForm({
  validationSchema: FormCreateCategorySchema,
  initialValues: {
    type: "expense" as transactionType,
    color: null,
    label: null,
  },
});

const userStore = useUserStore();
const categoryStore = useCategoryStore();

const supabase = useSupabaseClient();
const toast = useToast();

const [label] = defineField("label");
const [color] = defineField("color");
const [type] = defineField("type");
const options = ref<transactionType[]>(["expense", "income"]);

function showToast(severity: primeVueSeverity, msg: string) {
  toast.add({ severity: severity, detail: msg, life: 2000 });
}

const onSubmit = handleSubmit(async (values) => {
  if (userStore.user) {
    const { error } = await supabase.from("categories").insert({
      user_id: userStore.user.user_id,
      label: String(values.label),
      color: String(`#${values.color}`),
      type: String(values.type),
    });

    if (error) {
      showToast("error", error.message);
    } else {
      showToast("success", `Create the new category - ${values.label}`);
      values.type == "income" ? categoryStore.fetchIncome() : categoryStore.fetchIncome();
    }
  }
});
</script>

<template>
  <FrameLayout title="create category">
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
  </FrameLayout>
</template>
