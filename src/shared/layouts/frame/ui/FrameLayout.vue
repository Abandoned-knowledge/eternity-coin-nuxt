<script setup lang="ts">
interface props {
  title?: string;
}
const props = defineProps<props>();
</script>

<template>
  <div class="flex flex-col gap-2 rounded p-5 shadow">
    <p v-if="props.title" class="pb-2 text-title font-bold capitalize">
      {{ props.title }}
    </p>
    <slot />
  </div>
</template>
