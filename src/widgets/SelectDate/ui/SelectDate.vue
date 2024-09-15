<script setup lang="ts">
const transactionStore = useTransactionStore();
const dateStore = useDateStore();
const windowStore = useWindowStore();

const day = ref();
const month = ref();
const year = ref();
const range = ref<Date[]>();

const datePicker = ref();
const monthPicker = ref();
const yearPicker = ref();
const periodPicker = ref();

const toggleDatePicker = () => (datePicker.value.overlayVisible = !datePicker.value.overlayVisible);
const toggleMonthPicker = () => (monthPicker.value.overlayVisible = !monthPicker.value.overlayVisible);
const toggleYearPicker = () => (yearPicker.value.overlayVisible = !yearPicker.value.overlayVisible);
const togglePeriodPicker = () => (periodPicker.value.overlayVisible = !periodPicker.value.overlayVisible);

watch(day, () => dateStore.setDay(day.value));
watch(month, () => dateStore.setMonth(month.value));
watch(year, () => dateStore.setYear(year.value));
watch(range, () => {
  if (range.value?.every((el) => el !== null)) dateStore.setRange(range.value);
});

watch(dateStore, () => {
  transactionStore.fetchAllChartData("income");
  transactionStore.fetchAllChartData("expense");
  transactionStore.fetchTransactions("all");
});

const title = computed(() => (windowStore.isMobile ? "" : "Change date"));
const labelDay = computed(() => (windowStore.isMobile ? "D" : "Date"));
const labelMonth = computed(() => (windowStore.isMobile ? "M" : "Month"));
const labelYear = computed(() => (windowStore.isMobile ? "Y" : "Year"));
const labelPeriod = computed(() => (windowStore.isMobile ? "P" : "Period"));
</script>

<template>
  <FrameLayout :title="title" class="items-center">
    <div class="flex w-fit h-full items-center justify-center gap-3">
      <div class="relative">
        <Button :label="labelDay" @click="toggleDatePicker" size="small" severity="secondary" />
        <DatePicker
          class="absolute left-0 top-full"
          ref="datePicker"
          v-model="day"
          pt:pcInput:root="hidden"
          pt:panel="!w-fit"
          :showOnFocus="false"
        />
      </div>

      <div class="relative">
        <Button :label="labelMonth" @click="toggleMonthPicker" size="small" severity="secondary" />
        <DatePicker
          class="absolute left-0 top-full"
          ref="monthPicker"
          v-model="month"
          view="month"
          pt:pcInput:root="hidden"
          pt:panel="!w-[230px]"
          :showOnFocus="false"
        />
      </div>

      <div class="relative">
        <Button :label="labelYear" @click="toggleYearPicker" size="small" severity="secondary" />
        <DatePicker
          class="absolute left-0 top-full"
          ref="yearPicker"
          v-model="year"
          view="year"
          pt:pcInput:root="hidden"
          pt:panel="!w-[220px]"
          :showOnFocus="false"
        />
      </div>

      <div class="relative">
        <Button :label="labelPeriod" @click="togglePeriodPicker" size="small" severity="secondary" />
        <DatePicker
          class="absolute left-0 top-full"
          ref="periodPicker"
          v-model="range"
          selectionMode="range"
          pt:panel="!w-fit"
          pt:pcInput:root="hidden"
          :showOnFocus="false"
        />
      </div>
    </div>
  </FrameLayout>
</template>
