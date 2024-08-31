<script setup lang="ts">
const { defineField, errors, handleSubmit } = useForm({
  validationSchema: FormLoginSchema,
});

const [login] = defineField("login");
const [password] = defineField("password");

const onSubmit = handleSubmit((values) => {
  console.log(values);
});
setPageLayout("clear");
</script>

<template>
  <FrameLayout title="Login" class="w-full md:w-1/2">
    <form @submit="onSubmit" class="form">
      <div class="w-full">
        <FloatLabel>
          <InputText
            type="email"
            id="login"
            v-model="login"
            :class="{ 'p-invalid': errors.login }"
          />
          <label for="login">Login</label>
        </FloatLabel>

        <small class="form__error">{{ errors.login }}</small>
      </div>

      <div class="w-full">
        <FloatLabel class="w-full">
          <Password
            pt:root="w-full"
            inputId="password"
            v-model="password"
            toggleMask
            :feedback="false"
          />
          <label for="password">Password</label>
        </FloatLabel>

        <small class="form__error">{{ errors.password }}</small>
      </div>

      <Button label="Login" type="submit" severity="contrast" />
    </form>
  </FrameLayout>
</template>
