<script lang="ts" setup>
definePageMeta({
  middleware: ["protected"],
});

const user = useAuthenticatedUser();

useSeoMeta({
  title: "My Profile | Lottiel.ink",
});
</script>

<template>
  <main class="flex flex-col max-w-screen-xl mx-auto w-full p-8">
    <h1>My Profile</h1>

    <p class="pt-3">This is where you can manage your profile.</p>

    <n-divider />

    <p>User id: {{ user.userId }}</p>

    <p>Username: {{ user.username }}</p>

    <p>Add password resets here</p>
  </main>
</template>
