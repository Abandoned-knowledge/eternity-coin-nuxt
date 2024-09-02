export const useUserStore = defineStore("user", () => {
  const user = ref<IUser | null>(null);

  function fetchUser() {
    const userLocalStorage = localStorage.getItem("user");
    if (userLocalStorage) user.value = JSON.parse(userLocalStorage);
  }

  function logOut() {
    user.value = null;
    localStorage.removeItem("user");
    navigateTo("/login");
  }

  return { user, fetchUser, logOut };
});
