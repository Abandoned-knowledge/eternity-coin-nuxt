<script setup lang="ts"></script>

<template>
  <div class="flex w-full flex-col items-center justify-center gap-5 text-gray">
    <p class="text-title font-bold">Chart is empty</p>
    <EmptyLineChartIcon class="resize-animation h-20 w-20 rotate-0" />
  </div>
</template>

<style lang="scss" scoped>
.resize-animation {
  animation: 5s resize infinite linear;
}

@keyframes resize {
  0% {
    scale: 1;
  }
  50% {
    scale: 1.2;
  }
  100% {
    scale: 1;
  }
}
</style>
