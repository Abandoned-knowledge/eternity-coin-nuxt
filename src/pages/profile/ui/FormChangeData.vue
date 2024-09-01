<script setup lang="ts">
const { defineField, errors, handleSubmit } = useForm({
  validationSchema: FormChangeNameSchema,
});
const [name] = defineField("name");

const onSubmit = handleSubmit((values) => {
  console.log(values);
});
</script>

<template>
  <FrameLayout title="change data">
    <form @submit="onSubmit" class="form">
      <div class="field">
        <FloatLabel>
          <InputText
            id="name"
            v-model="name"
            placeholder="Write the new name"
            :invalid="!!errors.name"
          />
          <label for="name">Current name</label>
        </FloatLabel>

        <small class="field__error">{{ errors.name }}</small>
      </div>

      <Button label="Change" type="submit" severity="contrast" />
    </form>
  </FrameLayout>
</template>
