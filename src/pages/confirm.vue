<script setup lang="ts">
const user = useSupabaseUser();

const toast = useToast();
function showToast(severity: primeVueSeverity, msg: string) {
  toast.add({ severity: severity, detail: msg, life: 2000 });
}

watch(user, () => {
  if (user.value) {
    navigateTo("/");
    showToast("success", "Welcome back!");
  } else {
    navigateTo("/login");
  }
}, { immediate: true });

definePageMeta({
  layout: "clear",
});
</script>

<template>
  <section class="flex flex-col items-center gap-4">
    <h1 class="text-3xl">Redirecting...</h1>
    <div class="circle rotate-animation"></div>
  </section>
</template>

<style lang="scss" scoped>
.circle {
  border-radius: 1000px;
  @apply aspect-square w-16 border-8 border-solid border-light-gray border-t-primary;
}

.rotate-animation {
  animation: rotation 0.7s ease-in-out infinite;
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
