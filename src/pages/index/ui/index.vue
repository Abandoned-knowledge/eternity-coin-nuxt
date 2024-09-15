<script setup lang="ts">
const tabs: transactionType[] = ["expense", "income"];

const windowStore = useWindowStore();
</script>

<template>
  <div v-if="!windowStore.isMobile" class="wrapper">
    <SelectDate class="date" />
    <PopupAddTransaction buttonClass="add h-full w-full" />
    <ChartDonut type="income" class="income" />
    <ChartDonut type="expense" class="expense" />
  </div>

  <Tabs v-else class="h-full justify-between" value="expense">
    <TabPanels>
      <SelectDate/>
      <TabPanel class="mt-4 p-0" v-for="tab in tabs" :value="tab">
        <ChartDonut :type="tab" />
      </TabPanel>
    </TabPanels>

    <div class="flex w-full flex-col gap-5">
      <PopupAddTransaction />
      <TabList class="pb-5">
        <Tab v-for="tab in tabs" pt:root="w-1/2" :value="tab" class="capitalize">
          {{ tab }}
        </Tab>
      </TabList>
    </div>
  </Tabs>
</template>

<style lang="scss" scoped>
.p-tabpanels {
  @apply px-0;
}

.date {
  grid-area: date;
}
.income {
  grid-area: income;
}
.expense {
  grid-area: expense;
}
.add {
  grid-area: add;
}

.wrapper {
  display: grid;
  grid-template-columns: 1fr 450px 1fr;
  grid-template-rows: repeat(2, 1fr);
  gap: 40px;
  grid-template-areas:
    "income add expense"
    "income date expense";

  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 150px 1fr 1fr;
    gap: 20px;
    grid-template-areas:
      "add date"
      "income expense"
      "income expense";
  }
}
</style>
