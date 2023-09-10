<script lang="ts" setup>
definePageMeta({
  middleware: ["protected"],
});

const message = useMessage();

const { data, error } = await useFetch("/api/logout", {
  method: "POST",
  redirect: "manual",
});

if (error.value) {
  console.error(error.value.message);
  message.error("Something went wrong. " + error.value.data.message);
}

message.success("You have been logged out.");

await navigateTo("/auth/login");
</script>

<template>
  <main>Taking you to the login page...</main>
</template>
