export default defineNuxtRouteMiddleware(async () => {
  const user = useUser();
  const { data, error } = await useFetch("/api/user");

  console.log("error", error.value?.statusCode);

  if (error.value) {
    if (error.value.statusCode === 401) {
      user.value = null;
      return;
    }

    throw createError("Failed to fetch data");
  }

  user.value = data.value?.user ?? null;
});
