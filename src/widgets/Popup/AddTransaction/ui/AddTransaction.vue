<script setup lang="ts">
import Categories from "./Categories.vue";

const { defineField, errors, handleSubmit } = useForm({
  validationSchema: FormAddTransactionSchema,
  initialValues: {
    type: "expense" as transactionType,
    value: null,
    description: "",
  },
});

const categoryStore = useCategoryStore();

const isVisible = ref(false);
const [value] = defineField("value");
const [description] = defineField("description");
const [type] = defineField("type");

const categoryId = computed(() => categoryStore.currentCategory?.category_id);
const options = ref<transactionType[]>(["expense", "income"]);

const onSubmit = handleSubmit((values) => {
  console.log(values);
});
</script>

<template>
  <Button
    size="large"
    class="col-span-2 w-full xl:order-2 xl:col-span-1 xl:h-1/2 xl:w-auto"
    @click="isVisible = true"
  >
    Add
  </Button>

  <Dialog v-model:visible="isVisible" header="Add Transaction" modal class="custom-dialog">
    <form @submit="onSubmit" class="form">
      <div class="field">
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

      <div class="field">
        <FloatLabel>
          <InputText id="value" v-model="value" :invalid="!!errors.value" />
          <label for="value">Value</label>
        </FloatLabel>
        <small class="field__error">{{ errors.value }}</small>
      </div>

      <div class="field">
        <FloatLabel>
          <InputText id="description" v-model="description" :invalid="!!errors.description" />
          <label for="description">Description</label>
        </FloatLabel>
        <small class="field__error">{{ errors.description }}</small>
      </div>

      <Categories :type="type" />

      <Button type="submit" label="ADD" severity="contrast" />
    </form>
  </Dialog>
</template>
