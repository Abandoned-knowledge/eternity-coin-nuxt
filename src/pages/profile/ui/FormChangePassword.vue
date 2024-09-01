<script setup lang="ts">
const { defineField, errors, handleSubmit } = useForm({
  validationSchema: FormChangePasswordSchema,
});

const [password] = defineField("password");
const [password_new] = defineField("password_new");

const onSubmit = handleSubmit((values) => {
  console.log(values);
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
          <label for="password">Currenct password</label>
        </FloatLabel>

        <small class="field__error">{{ errors.password }}</small>
      </div>

      <div class="field">
        <FloatLabel>
          <Password
            pt:root="w-full"
            inputId="password_new"
            v-model="password_new"
            toggleMask
            :invalid="!!errors.password_new"
          />
          <label for="password_new">New password</label>
        </FloatLabel>

        <small class="field__error">{{ errors.password_new }}</small>
      </div>

      <Button label="Change" type="submit" severity="contrast" />
    </form>
  </FrameLayout>
</template>
