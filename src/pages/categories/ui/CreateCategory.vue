<script setup lang="ts">
const { defineField, errors, handleSubmit } = useForm({
  validationSchema: FormCreateCategorySchema,
  initialValues: {
    type: "expense" as transactionType,
    color: null,
    label: null,
  },
});

const supabase = useSupabaseClient();

const [label] = defineField("label");
const [color] = defineField("color");
const [type] = defineField("type");

const options = ref<transactionType[]>(["expense", "income"]);

const user = useUserStore();
const toast = useToast();
function showToast(severity: primeVueSeverity, msg: string) {
  toast.add({ severity: severity, detail: msg, life: 2000 });
}

const onSubmit = handleSubmit(async (values) => {
  if (user.user) {
    const { error } = await supabase.from("categories").insert({
      user_id: user.user.user_id,
      label: String(values.label),
      color: String(values.color),
      type: String(values.type),
    });

    return error
      ? showToast("error", error.message)
      : showToast("success", `Create the new category - ${values.label}`);
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
