<script lang="ts" setup>
definePageMeta({
  middleware: ["protected"],
});

const push = usePush();

const { data, error } = await useFetch("/api/logout", {
  method: "POST",
  redirect: "manual",
});

if (error.value) {
  console.error(error.value.message);

  push.error({
    title: "Error",
    message: "An error occurred while logging you out",
  });
}

push.success({
  title: "Logged out",
  message: "You have been logged out",
});

await navigateTo("/auth/login");
</script>

<template>
  <main>Taking you to the login page...</main>
</template>
