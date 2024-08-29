<script setup lang="ts">
import Table from "./Table.vue";

const tabs: (transactionType | "all")[] = ["expense", "income", "all"];
const innerTabs = ["charts", "table"];
</script>

<template>
  <Tabs unstyled value="expense">
    <TabList pt:activeBar="hidden" pt:tabList="flex gap-2 justify-center" class="main-tabs">
      <Tab v-for="tab in tabs" :value="tab">{{ tab }}</Tab>
    </TabList>
    <TabPanels>
      <TabPanel v-for="tab in tabs" :value="tab">
        <Tabs unstyled value="charts">
          <TabList
            pt:activeBar="hidden"
            pt:tabList="flex gap-2 justify-center mt-3"
            class="inner-tabs"
          >
            <Tab v-for="innerTab in innerTabs" :value="innerTab">
              {{ innerTab }}
            </Tab>
          </TabList>
          <TabPanels pt:root="mt-2">
            <TabPanel value="charts" class="flex flex-col gap-5 md:flex-row">
              <ChartDonut
                v-if="tab == 'income' || tab == 'expense'"
                :type="tab"
                class="w-full md:w-1/3"
              />
              <ChartLine :type="tab" class="w-full md:flex-grow" />
            </TabPanel>
            <TabPanel value="table">
              <Table :type="tab" />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </TabPanel>
    </TabPanels>
  </Tabs>
</template>

<style lang="scss" scoped>
.main-tabs {
  .p-tab {
    @apply rounded border border-primary px-5 py-2 text-lg;
    &-active {
      @apply bg-primary font-medium text-white;
    }
  }
}

.inner-tabs {
  .p-tab {
    @apply rounded border border-primary px-3 py-1;
    &-active {
      @apply bg-primary font-medium text-white;
    }
  }
}
</style>
