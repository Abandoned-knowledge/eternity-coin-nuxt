<script setup lang="ts">
import { object, string } from "yup";

const schema = object({
  login: string().required().email().label("Email address"),
  password: string().required().label("Password"),
});

const { defineField, errors } = useForm({
  validationSchema: schema,
});

const [login] = defineField("login");
const [password] = defineField("password");

setPageLayout("clear");
</script>

<template>
  <FrameLayout title="Login" class="w-full md:w-1/2">
    <form @submit.prevent class="form">
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

        <small class="ml-1 text-warning">{{ errors.login }}</small>
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

        <small class="ml-1 text-warning">{{ errors.password }}</small>
      </div>

      <Button label="Login" type="submit" severity="contrast" />
    </form>
  </FrameLayout>
</template>
