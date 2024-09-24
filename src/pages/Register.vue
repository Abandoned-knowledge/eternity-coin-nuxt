<script setup lang="ts">
const { defineField, errors, handleSubmit } = useForm({
  validationSchema: FormRegisterSchema,
});

const loading = ref(false);

const [login] = defineField("login");
const [name] = defineField("name");
const [password] = defineField("password");
const [password_confirm] = defineField("password_confirm");

const toast = useToast();
function showToast(severity?: primeVueSeverity, msg: string) {
  toast.add({ severity: severity, detail: msg, life: 2000 });
}

const supabase = useSupabaseClient();

const onSubmit = handleSubmit(async (values) => {
  loading.value = true;
  const { error, data } = await supabase.auth.signUp({
    email: values.login,
    password: values.password,
    options: {
      data: {
        name: values.name,
      },
    },
  });

  if (error) {
    return showToast("error", error.message);
  }

  if (data) {
    showToast("success", "User is created and sign in");
    return navigateTo("/confirm");
  }

  return (loading.value = false);
});

definePageMeta({
  layout: "clear",
});
</script>

<template>
  <FrameLayout title="Register" class="w-full md:w-1/2">
    <form @submit="onSubmit" class="form">
      <div class="field">
        <FloatLabel>
          <InputText type="text" id="name" v-model="name" :invalid="!!errors.name" />
          <label for="name">Name</label>
        </FloatLabel>

        <small class="field__error">{{ errors.name }}</small>
      </div>

      <div class="field">
        <FloatLabel>
          <InputText type="email" id="login" v-model="login" :invalid="!!errors.login" />
          <label for="login">Login</label>
        </FloatLabel>

        <small class="field__error">{{ errors.login }}</small>
      </div>
      {{}}
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
          <label for="password">Password</label>
        </FloatLabel>

        <small class="field__error">{{ errors.password }}</small>
      </div>

      <div class="field">
        <FloatLabel>
          <Password
            pt:root="w-full"
            inputId="password_confirm"
            v-model="password_confirm"
            toggleMask
            :feedback="false"
            :invalid="!!errors.password_confirm"
          />
          <label for="password_confirm">Password confirm</label>
        </FloatLabel>

        <small class="field__error">{{ errors.password_confirm }}</small>
      </div>

      <Button :loading="loading" label="Register" type="submit" severity="contrast" />
      <p>Do you have an account? <RouterLink class="text-link" to="/login">Sign In</RouterLink></p>
    </form>
  </FrameLayout>
</template>
