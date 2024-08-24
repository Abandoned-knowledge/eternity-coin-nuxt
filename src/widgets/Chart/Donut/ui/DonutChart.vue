<script setup lang="ts">
import emptyChartFrame from "./emptyChartFrame.vue";
import Canvas from "@/features/Chart/Donut";
const isEmpty = ref<boolean>(true);
</script>

<template>
  <Button severity="contrast" @click="isEmpty = !isEmpty">toggle</Button>
  <FrameLayout title="frame" class="w-[400px]">
    <emptyChartFrame v-if="isEmpty" />
    <Canvas v-else />
  </FrameLayout>
</template>
