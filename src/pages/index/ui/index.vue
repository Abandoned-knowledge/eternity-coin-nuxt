<script setup lang="ts">
const tabs: transactionType[] = ["expense", "income"];
const windowStore = useWindowStore();
</script>

<template>
  <div
    v-if="!windowStore.isMobile"
    class="grid grid-cols-2 justify-between gap-5 xl:grid-cols-3"
  >
    <PopupAddTransaction />
    <ChartDonut type="income" class="xl:order-1" />
    <ChartDonut type="expense" class="xl:order-3" />
  </div>

  <Tabs v-else class="h-full justify-between" value="expense">
    <TabPanels>
      <TabPanel class="p-0" v-for="tab in tabs" :value="tab">
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
</style>
