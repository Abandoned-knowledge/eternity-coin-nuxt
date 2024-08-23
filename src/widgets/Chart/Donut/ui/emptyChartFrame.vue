<template>
  <div class="text-gray flex aspect-square w-full flex-col items-center justify-center gap-5">
    <p class="text-title font-bold">Chart is empty</p>
    <EmptyDonutChartIcon class="rotate-animation h-20 w-20 rotate-0" />
  </div>
</template>

<style lang="scss" scoped>
.rotate-animation {
  animation: infinite 8s rotation forwards linear;
}

@keyframes rotation {
  0% {
    rotate: 0deg;
  }

  100% {
    rotate: 360deg;
  }
}
</style>
