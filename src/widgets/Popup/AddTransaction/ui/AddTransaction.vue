<script setup lang="ts">
import Categories from "./Categories.vue";
const categoryStore = useCategoryStore();
const transansactionStore = useTransactionStore();

const { defineField, errors, handleSubmit } = useForm({
  validationSchema: FormAddTransactionSchema,
  initialValues: {
    type: "expense" as transactionType,
    value: null,
    description: "",
    date: new Date(),
  },
});

const toast = useToast();
function showToast(severity: primeVueSeverity, msg: string) {
  toast.add({ severity: severity, detail: msg, life: 2000 });
}

const isVisible = ref(false);
const [value] = defineField("value");
const [description] = defineField("description");
const [type] = defineField("type");
const [date] = defineField("date");
const options = ref<transactionType[]>(["expense", "income"]);

watch(type, () => (categoryStore.currentCategory = null));

const onSubmit = handleSubmit(async (values) => {
  if (categoryStore.currentCategory) {
    const { error } = await $fetch("/api/transactions", {
      method: "post",
      body: {
        value: values.value,
        date: values.date,
        description: values.description,
        category_id: categoryStore.currentCategory?.id,
      },
    });

    if (error) {
      showToast("error", error.message);
    } else {
      showToast(
        "success",
        `Create the new transaction \n${categoryStore.currentCategory?.label} -- ${values.value}`,
      );
      if (values.type == "income") {
        categoryStore.fetchIncome();
        transansactionStore.fetchAllChartData("income");
      } else {
        categoryStore.fetchExpense();
        transansactionStore.fetchAllChartData("expense");
      }
    }
  }
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
    <form @submit="onSubmit" class="form" v-if="categoryStore.income || categoryStore.income">
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

      <div class="field flex flex-col items-center gap-2">
        <Categories :type="type" />
        <small class="field__error" v-if="!categoryStore.currentCategory"
          >Category is a required field</small
        >
      </div>

      <div class="field flex flex-col items-center justify-center gap-2">
        <DatePicker v-model="date" showIcon iconDisplay="input" :invalid="!!errors.date" />
        <small class="field__error">{{ errors.date }}</small>
      </div>

      <Button type="submit" label="ADD" severity="contrast" />
    </form>

    <div class="flex flex-col items-center gap-5" v-else>
      <p class="text-title font-bold">Seems, you do not have categories</p>
      <Button label="create" severity="contrast" as="router-link" to="/categories" />
    </div>
  </Dialog>
</template>
