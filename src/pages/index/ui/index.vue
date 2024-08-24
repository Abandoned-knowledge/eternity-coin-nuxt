<script setup lang="ts"></script>

<template>
  <div class="mt-10 flex h-max items-center gap-10">
    <ChartDonut type="income" class="w-1/3"/>
    <PopupAddTransaction />
    <ChartDonut type="expense" class="w-1/3" />
  </div>
</template>
