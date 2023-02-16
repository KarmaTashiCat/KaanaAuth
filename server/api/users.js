import { createPinia } from "pinia";

const pinia = createPinia();

export default defineEventHandler(async (event) => {
  const usersStore = useAuthStore();
  const users = usersStore.getUsers();

  return { users };
});
