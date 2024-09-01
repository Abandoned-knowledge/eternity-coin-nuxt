<script setup lang="ts">
const { defineField, errors, handleSubmit } = useForm({
  validationSchema: FormRegisterSchema,
});

const [login] = defineField("login");
const [name] = defineField("name");
const [password] = defineField("password");
const [password_confirm] = defineField("password_confirm");

const onSubmit = handleSubmit((values) => {
  console.log(values);
});

setPageLayout("clear");
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

      <Button label="Login" type="submit" severity="contrast" />
    </form>
  </FrameLayout>
</template>
