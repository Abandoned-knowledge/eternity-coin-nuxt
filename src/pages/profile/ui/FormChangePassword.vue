<script setup lang="ts">
const { defineField, errors, handleSubmit } = useForm({
  validationSchema: FormChangePasswordSchema,
});

const supabase = useSupabaseClient();
const toast = useToast();
function showToast(severity: primeVueSeverity, msg: string) {
  toast.add({ severity: severity, detail: msg, life: 2000 });
}

const [password] = defineField("password");

const onSubmit = handleSubmit(async (values) => {
  const { error } = await supabase.auth.updateUser({
    password: values.password,
  });
  error ? showToast("error", error.message) : showToast("success", "Password is changed!");
  password.value = null;
});
</script>

<template>
  <FrameLayout title="change password">
    <form @submit="onSubmit" class="form">
      <div class="field">
        <FloatLabel>
          <Password
            pt:root="w-full"
            inputId="password"
            v-model="password"
            toggleMask
            :feedback="false"
            :invalid="!!errors.password"
          />
          <label for="password">New password</label>
        </FloatLabel>

        <small class="field__error">{{ errors.password }}</small>
      </div>

      <Button label="Change" type="submit" severity="contrast" />
    </form>
  </FrameLayout>
</template>
