<script setup lang="ts">
interface props {
  label: string;
  color: string;
}
const props = defineProps<props>();
const style = ref({ borderColor: props.color, backgroundColor: "transparent" });
</script>

<template>
  <Button
    severity="contrast"
    outlined
    :style="style"
    :label="props.label"
    size="small"
  />
</template>
