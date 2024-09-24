<script setup lang="ts">
const { defineField, errors, handleSubmit } = useForm({
  validationSchema: FormChangeNameSchema,
});

const user = useSupabaseUser();
const supabase = useSupabaseClient();

const toast = useToast();
function showToast(severity: primeVueSeverity, msg: string) {
  toast.add({ severity: severity, detail: msg, life: 2000 });
}

const [name] = defineField("name");

const onSubmit = handleSubmit(async (values) => {
  const { error } = await supabase.auth.updateUser({
    data: {
      name: values.name,
    },
  });
  error ? showToast("error", error.message) : showToast("success", "Name is changed!");
  name.value = null;
});

const currentLabel = computed(() => (user.value ? user.value.user_metadata.name || user.value.email : "Current name"));
</script>

<template>
  <FrameLayout title="change data">
    <form @submit="onSubmit" class="form">
      <div class="field">
        <FloatLabel>
          <InputText id="name" v-model="name" placeholder="Write the new name" :invalid="!!errors.name" />
          <label for="name">{{ currentLabel }}</label>
        </FloatLabel>

        <small class="field__error">{{ errors.name }}</small>
      </div>

      <Button label="Change" type="submit" severity="contrast" />
    </form>
  </FrameLayout>
</template>
