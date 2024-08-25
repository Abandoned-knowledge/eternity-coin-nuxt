export const useWindowStore = defineStore("window", () => {
  const isMobile = ref();

  return { isMobile };
});
