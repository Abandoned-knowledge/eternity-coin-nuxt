<script setup lang="ts">
interface props {
  outlined?: boolean;
  label: string;
  color: string;
}
const props = defineProps<props>();
const style = ref({
  borderColor: props.color,
  backgroundColor: props.outlined ? "transparent" : props.color,
});
</script>

<template>
  <Button severity="contrast" outlined :style="style" :label="props.label" size="small" />
</template>
