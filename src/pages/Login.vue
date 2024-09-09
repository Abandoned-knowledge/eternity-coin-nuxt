<script setup lang="ts">
const { defineField, errors, handleSubmit } = useForm({
  validationSchema: FormLoginSchema,
});

const loading = ref(false);

const [login] = defineField("login");
const [password] = defineField("password");

const toast = useToast();
function showToast(severity: primeVueSeverity, msg: string) {
  toast.add({ severity: severity, detail: msg, life: 2000 });
}

const onSubmit = handleSubmit(async (values) => {
  const { error } = await $fetch("/api/users", {
    params: {
      login: String(values.login),
      password: String(values.password),
    },
  });

  if (error) {
    return showToast("error", "error");
  } else {
    showToast("success", `Welcome back!`);
    return navigateTo("/");
  }
});

definePageMeta({
  layout: "clear",
});
</script>

<template>
  <FrameLayout title="Login" class="w-full md:w-1/2">
    <form @submit="onSubmit" class="form">
      <div class="field">
        <FloatLabel>
          <InputText type="email" id="login" v-model="login" :invalid="!!errors.login" />
          <label for="login">Login</label>
        </FloatLabel>

        <small class="field__error">{{ errors.login }}</small>
      </div>

      <div class="field">
        <FloatLabel class="w-full">
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

      <Button :loading="loading" label="Login" type="submit" severity="contrast" />
    </form>
  </FrameLayout>
</template>
