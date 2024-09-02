const userStore = useUserStore();

export default function () {
  const user = localStorage.getItem("user");
  if (!userStore.user && !user) navigateTo("/login");
}
