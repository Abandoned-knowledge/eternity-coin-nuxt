<script setup lang="ts">
const user = useSupabaseUser();
const loading = computed(() => !user.value);
const supabase = useSupabaseClient();

const label = computed(() => (user.value ? user.value.email : "waiting"));

async function logOut() {
  await supabase.auth.signOut();
  navigateTo("/login");
}
</script>

<template>
  <div class="flex gap-3">
    <Button :loading="loading" :label="label" severity="contrast" as="router-link" to="/profile" />
    <Button @click="logOut" class="aspect-square" severity="danger" outlined>
      <LogOutIcon class="h-full w-full" />
    </Button>
  </div>
</template>
