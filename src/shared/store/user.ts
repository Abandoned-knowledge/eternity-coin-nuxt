export const useUserStore = defineStore("user", () => {
  const user = ref<IUser | null>(null);

  function getUser() {
    const userLocalStorage = localStorage.getItem('user');
    if (userLocalStorage) {
        user.value = JSON.parse(userLocalStorage);
    }
  }
  return { user, getUser };
});
