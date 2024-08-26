<script setup lang="ts">
import Table from './Table.vue';

const tabs: transactionType[] = ["expense", "income"];
const innerTabs = ["charts", "table"];
</script>

<template>
  <Tabs value="expense">
    <TabList>
      <Tab pt:root="w-1/2" v-for="tab in tabs" :value="tab">{{ tab }}</Tab>
    </TabList>
    <TabPanels>
      <TabPanel v-for="tab in tabs" :value="tab">
        <Tabs value="charts">
          <TabLIst>
            <Tab pt:root="w-1/2" v-for="innerTab in innerTabs" :value="innerTab">
              {{ innerTab }}
            </Tab>
          </TabLIst>
          <TabPanels>
            <TabPanel value="charts" class="flex flex-col gap-5 md:flex-row">
              <ChartDonut :type="tab" class="w-full md:w-1/3" />
              <ChartLine :type="tab" class="w-full md:flex-grow" />
            </TabPanel>
            <TabPanel value="table"> 
              <Table :type="tab"/>  
            </TabPanel>
          </TabPanels>
        </Tabs>
      </TabPanel>
    </TabPanels>
  </Tabs>
</template>

<style lang="scss" scoped>
.p-tabpanels {
  @apply px-0;
}
</style>
