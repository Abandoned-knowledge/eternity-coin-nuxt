<script setup lang="ts">
import Canvas from "@/features/Chart/Line";
const props = defineProps<{ type: transactionType }>();
</script>

<template>
  <FrameLayout :title="props.type">
    <Canvas :type="props.type"/>
  </FrameLayout>
</template>
